<?php
/*
 * [Rocky 2017-05-12 19:39:55]
 * 订单表操作类
 */
declare(encoding='UTF-8');
namespace DaoMongodb;
require_once("db_pool.php");
require_once("redis_id.php");


class VersionEntry
{
    public $version_id        = null;     // 检查更新id(主键)
    public $version_day       = null;     // 更新时间
    public $need_update       = null;     // 标识推送下来的版本是否需要升级(1:升级(true),0:不需要升级(false))
    public $force_update      = null;     // 标识推送下来的版本是否需要升级(1:升级(true),0:不需要升级(false))
    public $version_code      = null;     // 最新版本号
    public $version_name      = null;     // 最新版本名称
    public $version_desc      = null;     // 最新版本介绍
    public $version_url       = null;     // 最新版本软件名
    public $lastmodtime       = null;     // 最后登录时间
    public $delete            = null;     // 0:正常, 1:已删除

    function __construct($cursor=null)
    {
        $this->FromMgo($cursor);
    }

    // mongodb查询结果转为结构体
    public function FromMgo($cursor)
    {
        if(!$cursor)
        {
            return;
        }
        $this->version_id     = $cursor['version_id'];
        $this->version_day    = $cursor['version_day'];
        $this->need_update    = $cursor['need_update'];
        $this->force_update   = $cursor['force_update'];
        $this->version_code   = $cursor['version_code'];
        $this->version_name   = $cursor['version_name'];
        $this->version_desc   = $cursor['version_desc'];
        $this->version_url    = $cursor['version_url'];
        $this->delete         = $cursor['delete'];
        $this->lastmodtime    = $cursor['lastmodtime'];
    }

    public static function ToList($cursor)
    {
        $list = array();
        foreach($cursor as $item)
        {
            $entry = new self($item);
            array_push($list, $entry);
        }
        return $list;
    }
}

class Version
{
    private function Tablename()
    {
        return 'version';
    }

    public function Save(&$info)
    {
        $db = \DbPool::GetMongoDb();
        $table = $db->selectCollection($this->Tablename());

        $cond = array(
            'version_id' => (string)$info->version_id
        );

        $set = array(
            "version_id"  => (string)$info->version_id,
            "lastmodtime" => (null === $info->lastmodtime) ? time() : (int)$info->lastmodtime,
        );

        if(null !== $info->need_update)
        {
            $set["need_update"] = (int)$info->need_update;
        }
        if(null !== $info->force_update)
        {
            $set["force_update"] = (int)$info->force_update;
        }
        if(null !== $info->version_code)
        {
            $set["version_code"] = (int)$info->version_code;
        }
        if(null !== $info->version_day)
        {
            $set["version_day"] = (int)$info->version_day;
        }
        if(null !== $info->version_name)
        {
            $set["version_name"] = (string)$info->version_name;
        }
        if(null !== $info->version_desc)
        {
            $set["version_desc"] = (string)$info->version_desc;
        }
        if(null !== $info->delete)
        {
            $set["delete"] = (int)$info->delete;
        }
        if(null !== $info->version_url)
        {
            $set["version_url"] = (string)$info->version_url;
        }
        $value = array(
            '$set' => $set
        );
        LogDebug($value);
        try
        {
            $ret = $table->update($cond, $value, ['safe'=>true, 'upsert'=>true]);
            LogDebug("ret:" . $ret['ok']);
        }
        catch(\MongoCursorException $e)
        {
            LogErr($e->getMessage());
            return \errcode::DB_OPR_ERR;
        }
        return 0;
    }

    public function GetAllNum(&$total=null)
    {
        $db    = \DbPool::GetMongoDb();
        $table = $db->selectCollection($this->Tablename());
        $cond  = ['delete' => ['$ne' => 1],];

        LogDebug($cond);
        $field["_id"] = 0;
        $cursor       = $table->find($cond,$field);
        if (null !== $total)
        {
            $total = $table->count($cond);
        }
        return VersionEntry::ToList($cursor);

    }

    public function GetByCode($version_code)
    {
        $db = \DbPool::GetMongoDb();
        $table = $db->selectCollection($this->Tablename());
        $cond = array(
            'version_code' => (int)$version_code,
            'delete'       => ['$ne'=>1]
        );
        $cursor = $table->findOne($cond);
        return new VersionEntry($cursor);
    }

}


?>
