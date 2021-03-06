<?php
//ob_start(); // 清除不明输出（可能会对图片类输出造成影响）
//$unknowinfo = ob_get_contents();
//ob_end_clean();
//if($unknowinfo != "")
//{
//    //echo "/* xxx7 unknowinfo=[$unknowinfo] */";
//}
require_once("const.php");
require_once("Log.php");
require_once("cfg.php");
require_once("page_util.php");
require_once("permission.php");

// log_show.php页面不输出日志
if(basename($_SERVER['PHP_SELF']) == "log_show.php")
{
    Log::instance()->SetLevel(0);
}

if(isset($_SERVER['PHP_SELF']))
{
    LogInfo("---[{$_SERVER['PHP_SELF']}]---");
}
if(isset($_SERVER['HTTP_REFERER']))
{
    LogInfo("---referer:[{$_SERVER['HTTP_REFERER']}]---");
}
if(isset($_REQUEST['data']))
{
    LogInfo("---data.length:[" . strlen($_REQUEST['data']) . "]---");
}

//解析
$_ = PageUtil::DecSubmitData();

//$_=$_REQUEST;
LogDebug($_);
$cur_page = PageUtil::GetCurPage();
$referer = PageUtil::GetRefererPage();
LogDebug("cur_page=[$cur_page], referer=[$referer]");

// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST');
// 响应头设置
header('Access-Control-Allow-Headers:x-requested-with,content-type');


/*
 * 性能跟踪
 */
class TimeCost
{
    public function __construct()
    {
        $this->begin = Util::GetMsec();
    }
    public function __destruct()
    {
        $cost = Util::GetMsec() - $this->begin;
        $mem_used = Util::ByteFormat(memory_get_usage());
        $mem_max = Util::ByteFormat(memory_get_peak_usage());
        LogInfo("{$_SERVER['PHP_SELF']} --> timecost:[{$cost}ms], mem:[$mem_used|$mem_max]");
    }
    private $begin = 0;
}
$timeconst_xxx = new TimeCost;
?>
