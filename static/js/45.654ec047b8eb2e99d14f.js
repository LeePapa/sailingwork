webpackJsonp([45,63],{"0elz":function(t,e,n){"use strict";function a(t){n("NP5l"),n("f79X")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("9maK"),o=n("cTFc"),r=n("/Xao"),d=a,l=r(i.a,o.a,!1,d,"data-v-1967cbfa",null);e.default=l.exports},"1QQ4":function(t,e,n){"use strict";var a=n("Yp/U");n("5g5b");e.a={props:["isShowDialog","allDepartName"],data:function(){return{dialongInputValue:"",isDialogVisible:!1,departNameArr:[]}},watch:{isShowDialog:function(t){!0===t&&(this.isDialogVisible=!0)}},created:function(){this.departNameArr=this.allDepartName},methods:{addConfirm:function(){var t=this;if(""===this.dialongInputValue)return void this.$slnotify({message:"部门名称不能为空"});if(-1!==this.departNameArr.indexOf(this.dialongInputValue))return void this.$slnotify({message:"不能添加已经存在的部门名称"});var e={department_save:1,department_name:this.dialongInputValue};a.a.modifyDepartInfo(e,function(e){t.$emit("on-close",t.dialongInputValue),t.dialongInputValue="",t.isDialogVisible=!1})},addCancel:function(){this.handleClose()},handleClose:function(){this.dialongInputValue="",this.$emit("on-close"),this.isDialogVisible=!1}}}},"5g5b":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return d});var a=(n("Yp/U"),n("6nXL")),i=n("5vqR"),o=n("EuEE"),r={initTreeData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e=e.map(function(e){return i.default.set(e,"canEditor",!1),i.default.set(e,"addIcon",!0),i.default.set(e,"editorIcon",!0),i.default.set(e,"deleteIcon",!0),i.default.set(e,"isShowBtn",!1),i.default.set(e,"isActive",!1),i.default.set(e,"breakshow",!1),i.default.set(e,"allShow",!1),i.default.set(e,"isExpand",!0),i.default.set(e,"isFolder",!1),e.hasOwnProperty("employee_list")&&e.employee_list.length>0&&t.initTreeData(e.employee_list),e})},addTitleToTree:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return i.default.set(e,"department_name","部门管理"),i.default.set(e,"employee_list",t),i.default.set(e,"department_id","0"),e},generateKey:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return e=e.map(function(e,a){return e.key=n+"-"+a.toString(),e.hasOwnProperty("employee_list")&&e.employee_list.length>0&&t.generateKey(e.employee_list,e.key),e})},getKeylength:function(t){if(!o.a.isEmpty(t)){return t.split("-").length}},selectIcon:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e=e.map(function(e){var n=t.getKeylength(e.key);2===n?(e.addIcon=!0,e.editorIcon=!1,e.deleteIcon=!1,e.isExpand=!0,e.isActive=!0):3===n?(e.addIcon=!1,e.editorIcon=!0,e.deleteIcon=!0,e.isExpand=!1,e.isFolder=!0):4===n&&(e.addIcon=!1,e.editorIcon=!1,e.deleteIcon=!1),e.hasOwnProperty("employee_list")&&e.employee_list.length>0&&t.selectIcon(e.employee_list)})},saveDepartName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];return function t(n){n.forEach(function(n){n.hasOwnProperty("department_name")&&"部门管理"!==n.department_name&&e.push(n.department_name),n.hasOwnProperty("employee_list")&&n.employee_list.length>0&&t(n.employee_list)})}(t),e},treeDataById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return function t(n){n.forEach(function(n){n.hasOwnProperty("department_id")?e[n.department_id]=n:n.hasOwnProperty("employee_id")&&(e[n.employee_id]=n),n.hasOwnProperty("employee_list")&&n.employee_list.length>0&&t(n.employee_list)})}(t),e},changeSelecte:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.department_id?t.department_id:t.employee_id;for(var a in e)e.hasOwnProperty(a)&&(e[a].isActive=n===a)},getDutyArr:function(t){var e=[];return t.forEach(function(t){-1===e.indexOf(t.position_name)&&e.push(t.position_name)}),e},getDutyDepartId:function(t,e){var n;return t.forEach(function(t){void 0!==t.position_name?t.position_name===e&&(n=t.position_id):t.department_name===e&&(n=t.department_id)}),n},search:function(t,e,n,i){var o=[],r=new RegExp(t,"g"),d=new RegExp(e,"g");new RegExp(n,"g");return i.forEach(function(l){t&&t!==a.f.code[0]||""!==e||""!==n?null!==r.exec(l.position_name)&&""===e&&""===n?o.push(l):null!==r.exec(l.position_name)&&null!==d.exec(l.real_name)&&""===n?o.push(l):null!==r.exec(l.position_name)&&null!==d.exec(l.real_name)&&l.phone.indexOf(n)>-1?o.push(l):null!==r.exec(l.position_name)&&l.phone.indexOf(n)>-1&&""===e?o.push(l):(!t||t===a.f.code[0])&&null!==d.exec(l.real_name)&&l.phone.indexOf(n)>-1?o.push(l):(!t||t===a.f.code[0])&&""===e&&l.phone.indexOf(n)>-1?o.push(l):t&&t!==a.f.code[0]||null===d.exec(l.real_name)||""!==n||o.push(l):o=i}),o},getTotal:function(t){if(void 0!==t&&t.length>0){for(var e=0,n=0;n<t.length;n++)e++;return e}},getPageList:function(t,e,n){if(void 0!==t&&t.length>0){return t.filter(function(t,a){return a<e*n&&a>=e*(n-1)})}},isRight:function(t){return t.forEach(function(t){var e,n=[],i=[];for(var o in a.m)void 0!==t.position_permission?(e=t.position_permission&a.m[o],0!==e&&(i.push(a.m.code[e]),n.push(e)),t.arrId=n,t.arrRight=i,t.arrId[0]===a.m.ALLBACKSTAGE&&t.arrId[1]==a.m.ALLWEB&&2==t.arrId.length?t.arrRight=["全部"]:t.arrId[0]===a.m.ALLBACKSTAGE&&t.arrId[1]==a.m.ALLWEB&&t.arrId.length>2?t.arrId[1]="":t.arrId[0]===a.m.ALLWEB&&t.arrId.length>1&&(t.arrId[1]=""),t.arrRight.forEach(function(t){t===a.m.code[a.m.ALLWEB]&&(t="")})):(t.arrId=0,t.arrRight=a.f.code[0])}),t},judgeStaffList:function(t,e){var n=[];for(var i in a.m)t.forEach(function(t){t===a.m.code[a.m[i]]&&n.push(a.m[i])});return n}},d={getTotal:function(t){if(void 0!==t&&t.length>0){for(var e=0,n=0;n<t.length;n++)e++;return e}},getPageList:function(t,e,n){if(void 0!==t&&t.length>0){return t.filter(function(t,a){return a<e*n&&a>=e*(n-1)})}}}},"9maK":function(t,e,n){"use strict";var a=n("Yp/U"),i=n("5g5b"),o=n("a2vD"),r=n("a3/h");e.a={data:function(){var t=this;return{imgbase_url:"./php",shopName:"",dutyForm:[],departForm:[],inputPhone:"",inputTest:"",testCode:"",identyImg:"",allDepartName:[],allDutyName:[],isAddNewDepartment:!1,getTestNumBtn:"获取验证码",phoneArr:[],isAddedDuty:!1,addedDuty:"",form1:{},form:{},invited:!1,isDisable:!0,cantGetTestNum:!1,success:!1,GetInfo:!1,rules:{position_name:[{required:!0,message:"请选择职位",trigger:"click"}],department_name:[{required:!0,message:"请选择部门",trigger:"click"}],inputPhone:[{required:!0,validator:function(t,e,n){var a=/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;e?0==a.test(e)?n(new Error("请输入正确格式的手机号码")):n():n(new Error("请输入电话号码"))},trigger:"blur,change"}],inputTest:[{required:!0,validator:function(e,n,a){n?n!=t.testCode?a(new Error("请输入正确验证码")):a():a(new Error("请输入验证码"))},trigger:"blur,change"}]}}},created:function(){this.getAllDepartName(),this.getAllDutyName(),this.getPhoneArr(),this.getShopData()},components:{newDepartment:r.default},methods:{getShopData:function(){var t=this,e=o.a.getShopid(),n={get_shopinfo_base:1,shop_id:e};a.a.getShopData(n,function(e){t.shopName=e.data.shopinfo.shop_name})},isInvited:function(t,e){var n=this;t.forEach(function(t){t==e&&(n.invited=!0)})},getTestNum:function(){var t=this;if(""===this.form1.inputPhone||void 0===this.form1.inputPhone)return void this.$slnotify({message:"请输入电话号码"});if(1!=/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/.test(this.form1.inputPhone))return!1;if(this.isInvited(this.phoneArr,this.form1.inputPhone),0==this.invited){var e={get_phone_code:1,phone:this.form1.inputPhone};a.a.getPhoneTest(e,function(e){0==e.ret?(t.testCode=e.data.phone_code,t.setIntervalMethods()):-20050==e.ret&&t.$slnotify({message:"该号码还未注册"})})}setTimeout(function(){t.invited=!1},2e3)},checkPhoneCode:function(){this.isDisable=this.form1.inputTest!=this.testCode,0==this.isDisable?this.success=!0:this.success=!1},getCountInfor:function(t){var e=this;if(""===this.form1.inputPhone||""===this.form1.inputTest)return void this.$slnotify({message:"请填写登录手机号以及获得的验证码"});this.$refs[t].validate(function(t){if(t){e.isDisable=!1;var n={get_user_info:1,phone:e.form1.inputPhone,phone_code:e.form1.inputTest};a.a.getStaffList(n,function(t){0===t.ret?(e.GetInfo=!0,e.identyImg=t.data.user_info.health_certificate,e.form=t.data.user_info):(e.GetInfo=!1,e.success=!1)})}})},addNewDepartment:function(){this.isAddNewDepartment=!0},addDuty:function(){sessionStorage.setItem("lastDuty",this.allDutyName[this.allDutyName.length-1]),this.isAddedDuty=!0,this.$router.push({path:"/staff/editDuty",query:{infor:this.allDutyName}})},setIntervalMethods:function(){var t=this,e="",n=60;this.cantGetTestNum=!0,this.getTestNumBtn=n+"秒后可重新获取",e=setInterval(function(){0==n?(clearInterval(e),t.cantGetTestNum=!1,t.getTestNumBtn="重新获取验证码",n=60):(t.getTestNumBtn=n+"秒后可重新获取",n--)},1e3)},getAllDepartName:function(){var t=this,e={get_department_list:1};a.a.getDepartList(e,function(e){t.departForm=e.data.department_list,e.data.department_list.forEach(function(e){-1==t.allDepartName.indexOf(e.department_name)&&t.allDepartName.push(e.department_name)})})},getAllDutyName:function(){var t=this,e={get_position_list:1};a.a.getDutyList(e,function(e){t.dutyForm=e.data.position_list,e.data.position_list.forEach(function(e,n){-1==t.allDutyName.indexOf(e.position_name)&&t.allDutyName.push(e.position_name)}),t.addedDuty=t.allDutyName[t.allDutyName.length-1];var n=sessionStorage.getItem("lastDuty");null!==n&&n!=t.addedDuty&&(t.form1.position_name=t.addedDuty)})},saveInvitStaff:function(t){var e=this;null!==sessionStorage.getItem("lastDuty")&&sessionStorage.removeItem("lastDuty"),this.$refs[t].validate(function(t){if(t){if(1!=e.GetInfo)return e.$slnotify({message:"请先获取员工信息"}),!1;if(e.form&&void 0!==e.form&&""!==e.form1.inputPhone&&""!==e.form1.inputTest){var n=i.a.getDutyDepartId(e.dutyForm,e.form1.position_name),o=i.a.getDutyDepartId(e.departForm,e.form1.department_name),r={shop_employee_save:1,user_id:e.form.userid,department_id:o,position_id:n};a.a.getUserInfor(r,e.goBack)}else e.$slnotify({message:"请填写完整信息"})}})},getPhoneArr:function(){var t=this,e=o.a.getShopinfo();this.phoneArr.push(e.userinfo.phone),a.a.getStaffList({get_employee_list:1},function(e){e.data.employee_list.forEach(function(e){t.phoneArr.push(e.phone)})})},canselInvitStaff:function(t){this.$refs[t].resetFields(),this.goBack()},hideDialog:function(t){this.form1.department_name=""!==t&&void 0!==t?t:this.form1.department_name,this.allDepartName.push(t),this.getAllDepartName(),this.isAddNewDepartment=!1},goBack:function(){null!==sessionStorage.getItem("lastDuty")&&sessionStorage.removeItem("lastDuty"),this.$router.push("/shop/staff")}}}},FK10:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addNewDepartment"}},[n("el-dialog",{staticClass:"category-dialog",attrs:{visible:t.isDialogVisible,"show-close":!1,size:""}},[n("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[t._v("添加部门")]),t._v(" "),n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"category clearfix"},[n("div",{staticClass:"content-left left"},[n("span",[t._v("分类名称")])]),t._v(" "),n("div",{staticClass:"content-right left"},[n("el-input",{staticClass:"left",attrs:{placeholder:"请输入内容"},model:{value:t.dialongInputValue,callback:function(e){t.dialongInputValue=e},expression:"dialongInputValue"}})],1)]),t._v(" "),n("div",{staticClass:"button-group clearfix"},[n("el-button",{staticClass:"ok-btn",on:{click:t.addConfirm}},[t._v("保存")]),t._v(" "),n("el-button",{staticClass:"cancel-btn",on:{click:t.addCancel}},[t._v("取消")])],1)])])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},H8gv:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}.el-table__empty-text{display:none}.el-table thead th .cell{font-weight:700}#addStaff .add-btn.el-button,#addStaff .saveBtn.el-button{width:160px;height:35px;color:#4877e7}#addStaff .cancelBtn.el-button{width:160px;height:40px}#addStaff .getInfor .el-button{min-width:120px}#addStaff .getInfoAble.el-button{border:1px solid #4877e7;cursor:pointer;color:#4877e7;background:#fff;margin-left:45%;margin-top:20px}#addStaff .add-btn.el-button{margin-left:5px;min-width:100px;padding:5px;border-radius:4px}#addStaff .add-btn-test.el-button{margin-right:5px;width:120px;height:24px;padding:5px;background:#4877e7;color:#fff;border-radius:4px}#addStaff .getInfo.el-button{border:1px solid #d8d8d8;cursor:pointer;color:#fff;background:#d8d8d8;margin-left:45%;margin-top:20px}#addStaff .el-button{width:160px;height:40px;border:1px solid #4877e7;color:#4877e7;text-align:center;border-radius:5px;font-size:12px}#addStaff .el-input-group__append{border-radius:0;border-left:0;padding-right:0}#addStaff .phone .el-input__inner{border-right:0}#addStaff .el-input__inner{border-radius:0}#addStaff .el-input{width:320px}#addStaff .inforCard .el-form-item{margin-bottom:35px}#addStaff .el-button.is-disabled,#addStaff .el-button.is-disabled:focus,#addStaff .el-button.is-disabled:hover{background:#d8d8d8;border:1px solid #d8d8d8}#addStaff .el-form-item .is-error .el-input-group__append{border:1px solid #ff4949}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/staff/view/children/invitStaff.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,sBACE,YAAc,CACf,AACD,yBACE,eAAkB,CACnB,AACD,0DAEE,YAAa,AACb,YAAa,AAEb,aAAe,CAChB,AACD,+BACE,YAAa,AACb,WAAa,CACd,AACD,+BACE,eAAiB,CAClB,AACD,iCACE,yBAA0B,AAC1B,eAAgB,AAChB,cAAe,AACf,gBAAoB,AACpB,gBAAiB,AACjB,eAAiB,CAClB,AACD,6BACE,gBAAiB,AACjB,gBAAiB,AACjB,YAAa,AACb,iBAAmB,CACpB,AACD,kCACE,iBAAkB,AAClB,YAAa,AACb,YAAa,AACb,YAAa,AACb,mBAAoB,AACpB,WAAe,AACf,iBAAmB,CACpB,AACD,6BACE,yBAA0B,AAC1B,eAAgB,AAChB,WAAe,AACf,mBAAoB,AACpB,gBAAiB,AACjB,eAAiB,CAClB,AACD,qBACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,cAAe,AACf,kBAAmB,AACnB,kBAAmB,AACnB,cAAgB,CACjB,AACD,kCACE,gBAAiB,AACjB,cAAe,AACf,eAAiB,CAClB,AACD,kCACE,cAAgB,CACjB,AACD,2BACE,eAAiB,CAClB,AACD,oBACE,WAAa,CACd,AACD,mCACE,kBAAoB,CACrB,AACD,+GACE,mBAAoB,AACpB,wBAA0B,CAC3B,AACD,0DACE,wBAA0B,CAC3B",file:"invitStaff.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text {\n  display: none;\n}\n.el-table thead th .cell {\n  font-weight: bold;\n}\n#addStaff .saveBtn.el-button,\n#addStaff .add-btn.el-button {\n  width: 160px;\n  height: 35px;\n  /*background: #4877e7;*/\n  color: #4877E7;\n}\n#addStaff .cancelBtn.el-button {\n  width: 160px;\n  height: 40px;\n}\n#addStaff .getInfor .el-button {\n  min-width: 120px;\n}\n#addStaff .getInfoAble.el-button {\n  border: 1px solid #4877E7;\n  cursor: pointer;\n  color: #4877E7;\n  background: #FFFFFF;\n  margin-left: 45%;\n  margin-top: 20px;\n}\n#addStaff .add-btn.el-button {\n  margin-left: 5px;\n  min-width: 100px;\n  padding: 5px;\n  border-radius: 4px;\n}\n#addStaff .add-btn-test.el-button {\n  margin-right: 5px;\n  width: 120px;\n  height: 24px;\n  padding: 5px;\n  background: #4877E7;\n  color: #FFFFFF;\n  border-radius: 4px;\n}\n#addStaff .getInfo.el-button {\n  border: 1px solid #D8D8D8;\n  cursor: pointer;\n  color: #FFFFFF;\n  background: #D8D8D8;\n  margin-left: 45%;\n  margin-top: 20px;\n}\n#addStaff .el-button {\n  width: 160px;\n  height: 40px;\n  border: 1px solid #4877e7;\n  color: #4877e7;\n  text-align: center;\n  border-radius: 5px;\n  font-size: 12px;\n}\n#addStaff .el-input-group__append {\n  border-radius: 0;\n  border-left: 0;\n  padding-right: 0;\n}\n#addStaff .phone .el-input__inner {\n  border-right: 0;\n}\n#addStaff .el-input__inner {\n  border-radius: 0;\n}\n#addStaff .el-input {\n  width: 320px;\n}\n#addStaff .inforCard .el-form-item {\n  margin-bottom: 35px;\n}\n#addStaff .el-button.is-disabled, #addStaff .el-button.is-disabled:focus, #addStaff .el-button.is-disabled:hover {\n  background: #D8D8D8;\n  border: 1px solid #D8D8D8;\n}\n#addStaff .el-form-item .is-error .el-input-group__append {\n  border: 1px solid #ff4949;\n}\n"],sourceRoot:""}])},HFH2:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left[data-v-32b50b8e]{float:left}.right[data-v-32b50b8e]{float:right}.clearfix[data-v-32b50b8e]:after{content:"";display:block;clear:both}.el-table__empty-text[data-v-32b50b8e]{display:none}.el-table thead th .cell[data-v-32b50b8e]{font-weight:700}#addNewDepartment .dialog-title[data-v-32b50b8e]{width:540px;height:40px;font-size:16px;color:#fff;background-color:#5a8cff;text-align:center;line-height:40px}#addNewDepartment .dialog-content[data-v-32b50b8e]{width:540px;height:200px}#addNewDepartment .category .content-left[data-v-32b50b8e]{width:80px;height:34px;line-height:34px;margin-left:60px}#addNewDepartment .category .content-right[data-v-32b50b8e]{width:320px;height:34px}#addNewDepartment .button-group[data-v-32b50b8e]{width:100%;margin:80px 0 0}#addNewDepartment .ok-btn[data-v-32b50b8e]{margin:0 60px 0 77px;background-color:#5a8cff;color:#fff;cursor:pointer}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/staff/view/children/children/addNewDepartment.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,uCACE,YAAc,CACf,AACD,0CACE,eAAkB,CACnB,AAID,iDACE,YAAa,AACb,YAAa,AACb,eAAgB,AAChB,WAAY,AACZ,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAkB,CACnB,AACD,mDACE,YAAa,AACb,YAAc,CACf,AACD,2DACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAkB,CACnB,AACD,4DACE,YAAa,AACb,WAAa,CACd,AACD,iDACE,WAAY,AACZ,eAAmB,CACpB,AACD,2CACE,qBAAsB,AACtB,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB",file:"addNewDepartment.vue",sourcesContent:["\n.left[data-v-32b50b8e] {\n  float: left;\n}\n.right[data-v-32b50b8e] {\n  float: right;\n}\n.clearfix[data-v-32b50b8e]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text[data-v-32b50b8e] {\n  display: none;\n}\n.el-table thead th .cell[data-v-32b50b8e] {\n  font-weight: bold;\n}\n#addNewDepartment .category-dialog[data-v-32b50b8e] {\n  /*top: 20%;*/\n}\n#addNewDepartment .dialog-title[data-v-32b50b8e] {\n  width: 540px;\n  height: 40px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #5a8cff;\n  text-align: center;\n  line-height: 40px;\n}\n#addNewDepartment .dialog-content[data-v-32b50b8e] {\n  width: 540px;\n  height: 200px;\n}\n#addNewDepartment .category .content-left[data-v-32b50b8e] {\n  width: 80px;\n  height: 34px;\n  line-height: 34px;\n  margin-left: 60px;\n}\n#addNewDepartment .category .content-right[data-v-32b50b8e] {\n  width: 320px;\n  height: 34px;\n}\n#addNewDepartment .button-group[data-v-32b50b8e] {\n  width: 100%;\n  margin: 80px 0 0 0;\n}\n#addNewDepartment .ok-btn[data-v-32b50b8e] {\n  margin: 0 60px 0 77px;\n  background-color: #5a8cff;\n  color: #fff;\n  cursor: pointer;\n}\n"],sourceRoot:""}])},Lb5F:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}.el-table__empty-text{display:none}.el-table thead th .cell{font-weight:700}#addNewDepartment .el-input{width:320px;margin-bottom:30px}#addNewDepartment .el-input__inner{border-radius:0;height:34px}#addNewDepartment .el-input__inner:focus,#addNewDepartment .el-input__inner:hover{border:1px solid #bfcbd9}#addNewDepartment .el-button{width:160px;height:40px;border:1px solid #5a8cff;color:#5a8cff;border-radius:5px;font-size:14px;cursor:pointer}#addNewDepartment .el-dialog{top:20%}#addNewDepartment .category-dialog .el-dialog__header{padding:0;margin-bottom:60px}#addNewDepartment .el-dialog__body{padding:0}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/staff/view/children/children/addNewDepartment.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,sBACE,YAAc,CACf,AACD,yBACE,eAAkB,CACnB,AACD,4BACE,YAAa,AACb,kBAAoB,CACrB,AACD,mCACE,gBAAiB,AACjB,WAAa,CACd,AAID,kFACE,wBAA0B,CAC3B,AACD,6BACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,cAAe,AACf,kBAAmB,AACnB,eAAgB,AAChB,cAAgB,CACjB,AACD,6BACE,OAAS,CACV,AACD,sDACE,UAAW,AACX,kBAAoB,CACrB,AACD,mCACE,SAAW,CACZ",file:"addNewDepartment.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text {\n  display: none;\n}\n.el-table thead th .cell {\n  font-weight: bold;\n}\n#addNewDepartment .el-input {\n  width: 320px;\n  margin-bottom: 30px;\n}\n#addNewDepartment .el-input__inner {\n  border-radius: 0;\n  height: 34px;\n}\n#addNewDepartment .el-input__inner:hover {\n  border: 1px solid #bfcbd9;\n}\n#addNewDepartment .el-input__inner:focus {\n  border: 1px solid #bfcbd9;\n}\n#addNewDepartment .el-button {\n  width: 160px;\n  height: 40px;\n  border: 1px solid #5a8cff;\n  color: #5a8cff;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n#addNewDepartment .el-dialog {\n  top: 20%;\n}\n#addNewDepartment .category-dialog .el-dialog__header {\n  padding: 0;\n  margin-bottom: 60px;\n}\n#addNewDepartment .el-dialog__body {\n  padding: 0;\n}\n"],sourceRoot:""}])},NK9O:function(t,e,n){var a=n("HFH2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("4a124a37",a,!0)},NP5l:function(t,e,n){var a=n("kEBA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("64823eb2",a,!0)},"Yp/U":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("EuEE"),i={getDepartList:function(t,e){a.a.DataEncSubmit("department_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},modifyDepartInfo:function(t,e){a.a.DataEncSubmit("department_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},getStaffList:function(t,e){a.a.DataEncSubmit("employee_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},getDepartStaffList:function(t,e){a.a.DataEncSubmit("department_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},modifyStaffInfo:function(t,e){a.a.DataEncSubmit("user_info.php",t,function(t){e&&"function"==typeof e&&e(t)})},getPhoneTest:function(t,e){a.a.DataEncSubmit("login_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},getUserInfor:function(t,e){a.a.DataEncSubmit("employee_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},editDutyRight:function(t,e){a.a.DataEncSubmit("position_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},getDutyList:function(t,e){a.a.DataEncSubmit("position_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},getShopData:function(t,e){a.a.DataEncSubmit("shopinfo_get.php",t,function(t){e&&"function"==typeof e&&e(t)})}}},"a3/h":function(t,e,n){"use strict";function a(t){n("NK9O"),n("whXW")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("1QQ4"),o=n("FK10"),r=n("/Xao"),d=a,l=r(i.a,o.a,!1,d,"data-v-32b50b8e",null);e.default=l.exports},cTFc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addStaff"}},[n("div",{staticClass:"page_title"},[n("span",{on:{click:t.goBack}},[t._v("员工管理")]),t._v(" "),n("span",{staticClass:"blue"},[t._v(">")]),t._v(" "),n("span",{staticClass:"blue"},[t._v("编辑员工信息")])]),t._v(" "),n("div",{staticClass:"staffCard"},[n("div",{staticClass:"form_title"},[t._v("编辑员工信息")]),t._v(" "),n("div",{staticClass:"from_card"},[n("el-form",{ref:"form",attrs:{model:t.form1,"label-width":"100px",size:"mini",rules:t.rules,"status-icon":""}},[n("el-form-item",{attrs:{label:"店铺名称"}},[n("span",[t._v(t._s(t.shopName))])]),t._v(" "),n("el-form-item",{attrs:{label:"职位",prop:"position_name"}},[n("el-select",{attrs:{placeholder:"职位"},model:{value:t.form1.position_name,callback:function(e){t.$set(t.form1,"position_name",e)},expression:"form1.position_name"}},t._l(t.allDutyName,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),n("el-button",{staticClass:"add-btn",on:{click:t.addDuty}},[t._v("新增职位")])],1),t._v(" "),n("el-form-item",{attrs:{label:"部门",prop:"department_name"}},[n("el-select",{attrs:{placeholder:"部门"},model:{value:t.form1.department_name,callback:function(e){t.$set(t.form1,"department_name",e)},expression:"form1.department_name"}},t._l(t.allDepartName,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),n("el-button",{staticClass:"add-btn",on:{click:t.addNewDepartment}},[t._v("新增部门")])],1),t._v(" "),n("el-form-item",{attrs:{label:"登录手机号",prop:"inputPhone"}},[n("el-input",{attrs:{placeholder:"请输入电话号码"},model:{value:t.form1.inputPhone,callback:function(e){t.$set(t.form1,"inputPhone",e)},expression:"form1.inputPhone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"登录验证码",prop:"inputTest"}},[n("el-input",{staticClass:"phone",attrs:{placeholder:"请输入验证码"},on:{change:function(e){t.checkPhoneCode("form")}},model:{value:t.form1.inputTest,callback:function(e){t.$set(t.form1,"inputTest",e)},expression:"form1.inputTest"}},[n("el-button",{staticClass:"add-btn-test",attrs:{slot:"append",disabled:t.cantGetTestNum},on:{click:t.getTestNum},slot:"append"},[t._v(t._s(t.getTestNumBtn))])],1)],1)],1),t._v(" "),n("div",{staticClass:"getInfor"},[0==t.success?n("el-button",{staticClass:"getInfo",attrs:{disabled:t.isDisable}},[t._v("读取账号信息")]):t._e(),t._v(" "),t.success?n("el-button",{staticClass:"getInfoAble",attrs:{disabled:t.isDisable},on:{click:function(e){t.getCountInfor("form")}}},[t._v("读取账号信息")]):t._e()],1)],1),t._v(" "),n("div",{staticClass:"form_title"},[t._v("员工信息")]),t._v(" "),n("div",{staticClass:"from_card"},[t.GetInfo?n("div",{staticClass:"inforCard"},[n("el-form",{attrs:{model:t.form,"label-width":"100px",size:"mini"}},[n("el-form-item",{attrs:{label:"姓名"}},[n("span",[t._v(t._s(t.form.real_name))])]),t._v(" "),n("el-form-item",{attrs:{label:"身份证"}},[n("span",[t._v(t._s(t.form.identity))])]),t._v(" "),n("el-form-item",{attrs:{label:"性别"}},[n("span",[t._v(t._s(t.form.sex))])]),t._v(" "),n("el-form-item",{attrs:{label:"健康证扫描件"}},[t.identyImg&&""!==t.identyImg?n("img",{staticClass:"img",attrs:{src:t.imgbase_url+"/img_get.php?img=1&height=100&width=100&imgname="+t.identyImg}}):n("span",[t._v("未上传")])]),t._v(" "),n("el-form-item",{attrs:{label:"绑定微信"}},[1==t.form.is_weixin?n("span",[t._v("未绑定")]):t._e(),t._v(" "),0==t.form.is_weixin?n("span",[t._v("绑定")]):t._e()])],1)],1):t._e()]),t._v(" "),n("div",{staticClass:"btnGroup"},[n("el-button",{staticClass:"saveBtn",on:{click:function(e){t.saveInvitStaff("form")}}},[t._v("保存")]),t._v(" "),n("el-button",{staticClass:"cancelBtn",on:{click:function(e){t.canselInvitStaff("form")}}},[t._v("取消")])],1),t._v(" "),t.invited?n("div",{staticClass:"invited"},[t._v("该号码已经被邀请")]):t._e()]),t._v(" "),n("new-department",{attrs:{isShowDialog:t.isAddNewDepartment,allDepartName:t.allDepartName},on:{"on-close":t.hideDialog}})],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},f79X:function(t,e,n){var a=n("H8gv");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("0fa8b568",a,!0)},kEBA:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left[data-v-1967cbfa]{float:left}.right[data-v-1967cbfa]{float:right}.clearfix[data-v-1967cbfa]:after{content:"";display:block;clear:both}.el-table__empty-text[data-v-1967cbfa]{display:none}.el-table thead th .cell[data-v-1967cbfa]{font-weight:700}.staffCard[data-v-1967cbfa]{background:#fff;-webkit-box-shadow:0 2px 4px 0 #becaeb;box-shadow:0 2px 4px 0 #becaeb}.from_card[data-v-1967cbfa]{width:50%;padding:48px 0 40px;margin-left:133px}.inforCard[data-v-1967cbfa]{width:60%;margin-bottom:30px}.page_title[data-v-1967cbfa]{width:100%;height:16px;font-size:12px;color:#333;margin-bottom:14px}.form_title[data-v-1967cbfa]{width:100%;height:40px;font-size:14px;color:#666;line-height:40px;background-color:#f6f8fc;padding-left:14px}.img[data-v-1967cbfa]{width:100px;height:50px}.pinpo[data-v-1967cbfa]{font-size:12px;color:#9b9b9b}.blue[data-v-1967cbfa]{font-size:12px;color:#4877e7}.btnGroup[data-v-1967cbfa]{margin-top:100px;height:100px;padding-left:45%}.invited[data-v-1967cbfa]{position:absolute;top:60%;left:50%;width:300px;height:100px;line-height:100px;text-align:center;color:#fff;border-radius:4px;background:rgba(0,0,0,.5)}.getInfor[data-v-1967cbfa]{padding-left:20%;margin-bottom:10px}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/staff/view/children/invitStaff.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,uCACE,YAAc,CACf,AACD,0CACE,eAAkB,CACnB,AACD,4BACE,gBAAoB,AACpB,uCAAwC,AAChC,8BAAgC,CACzC,AACD,4BACE,UAAW,AACX,oBAAuB,AACvB,iBAAmB,CACpB,AACD,4BACE,UAAW,AACX,kBAAoB,CAErB,AACD,6BACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,WAAe,AACf,kBAAoB,CACrB,AACD,6BACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,WAAe,AACf,iBAAkB,AAClB,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,sBACE,YAAa,AACb,WAAa,CACd,AACD,wBACE,eAAgB,AAChB,aAAe,CAChB,AACD,uBACE,eAAgB,AAChB,aAAe,CAChB,AACD,2BACE,iBAAkB,AAClB,aAAc,AACd,gBAAkB,CACnB,AACD,0BACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,WAAe,AACf,kBAAmB,AACnB,yBAA+B,CAChC,AACD,2BACE,iBAAkB,AAClB,kBAAoB,CACrB",file:"invitStaff.vue",sourcesContent:["\n.left[data-v-1967cbfa] {\n  float: left;\n}\n.right[data-v-1967cbfa] {\n  float: right;\n}\n.clearfix[data-v-1967cbfa]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text[data-v-1967cbfa] {\n  display: none;\n}\n.el-table thead th .cell[data-v-1967cbfa] {\n  font-weight: bold;\n}\n.staffCard[data-v-1967cbfa] {\n  background: #ffffff;\n  -webkit-box-shadow: 0 2px 4px 0 #becaeb;\n          box-shadow: 0 2px 4px 0 #becaeb;\n}\n.from_card[data-v-1967cbfa] {\n  width: 50%;\n  padding: 48px 0 40px 0;\n  margin-left: 133px;\n}\n.inforCard[data-v-1967cbfa] {\n  width: 60%;\n  margin-bottom: 30px;\n  /*background: #F6F8FC;*/\n}\n.page_title[data-v-1967cbfa] {\n  width: 100%;\n  height: 16px;\n  font-size: 12px;\n  color: #333333;\n  margin-bottom: 14px;\n}\n.form_title[data-v-1967cbfa] {\n  width: 100%;\n  height: 40px;\n  font-size: 14px;\n  color: #666666;\n  line-height: 40px;\n  background-color: #F6F8FC;\n  padding-left: 14px;\n}\n.img[data-v-1967cbfa] {\n  width: 100px;\n  height: 50px;\n}\n.pinpo[data-v-1967cbfa] {\n  font-size: 12px;\n  color: #9B9B9B;\n}\n.blue[data-v-1967cbfa] {\n  font-size: 12px;\n  color: #4877E7;\n}\n.btnGroup[data-v-1967cbfa] {\n  margin-top: 100px;\n  height: 100px;\n  padding-left: 45%;\n}\n.invited[data-v-1967cbfa] {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  width: 300px;\n  height: 100px;\n  line-height: 100px;\n  text-align: center;\n  color: #FFFFFF;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.5);\n}\n.getInfor[data-v-1967cbfa] {\n  padding-left: 20%;\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}])},whXW:function(t,e,n){var a=n("Lb5F");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("8258803e",a,!0)}});
//# sourceMappingURL=45.654ec047b8eb2e99d14f.js.map