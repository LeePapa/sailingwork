webpackJsonp([63],{"1QQ4":function(e,t,n){"use strict";var a=n("Yp/U");n("5g5b");t.a={props:["isShowDialog","allDepartName"],data:function(){return{dialongInputValue:"",isDialogVisible:!1,departNameArr:[]}},watch:{isShowDialog:function(e){!0===e&&(this.isDialogVisible=!0)}},created:function(){this.departNameArr=this.allDepartName},methods:{addConfirm:function(){var e=this;if(""===this.dialongInputValue)return void this.$slnotify({message:"部门名称不能为空"});if(-1!==this.departNameArr.indexOf(this.dialongInputValue))return void this.$slnotify({message:"不能添加已经存在的部门名称"});var t={department_save:1,department_name:this.dialongInputValue};a.a.modifyDepartInfo(t,function(t){e.$emit("on-close",e.dialongInputValue),e.dialongInputValue="",e.isDialogVisible=!1})},addCancel:function(){this.handleClose()},handleClose:function(){this.dialongInputValue="",this.$emit("on-close"),this.isDialogVisible=!1}}}},"5g5b":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return d});var a=(n("Yp/U"),n("6nXL")),i=n("5vqR"),o=n("EuEE"),r={initTreeData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t=t.map(function(t){return i.default.set(t,"canEditor",!1),i.default.set(t,"addIcon",!0),i.default.set(t,"editorIcon",!0),i.default.set(t,"deleteIcon",!0),i.default.set(t,"isShowBtn",!1),i.default.set(t,"isActive",!1),i.default.set(t,"breakshow",!1),i.default.set(t,"allShow",!1),i.default.set(t,"isExpand",!0),i.default.set(t,"isFolder",!1),t.hasOwnProperty("employee_list")&&t.employee_list.length>0&&e.initTreeData(t.employee_list),t})},addTitleToTree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return i.default.set(t,"department_name","部门管理"),i.default.set(t,"employee_list",e),i.default.set(t,"department_id","0"),t},generateKey:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return t=t.map(function(t,a){return t.key=n+"-"+a.toString(),t.hasOwnProperty("employee_list")&&t.employee_list.length>0&&e.generateKey(t.employee_list,t.key),t})},getKeylength:function(e){if(!o.a.isEmpty(e)){return e.split("-").length}},selectIcon:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t=t.map(function(t){var n=e.getKeylength(t.key);2===n?(t.addIcon=!0,t.editorIcon=!1,t.deleteIcon=!1,t.isExpand=!0,t.isActive=!0):3===n?(t.addIcon=!1,t.editorIcon=!0,t.deleteIcon=!0,t.isExpand=!1,t.isFolder=!0):4===n&&(t.addIcon=!1,t.editorIcon=!1,t.deleteIcon=!1),t.hasOwnProperty("employee_list")&&t.employee_list.length>0&&e.selectIcon(t.employee_list)})},saveDepartName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];return function e(n){n.forEach(function(n){n.hasOwnProperty("department_name")&&"部门管理"!==n.department_name&&t.push(n.department_name),n.hasOwnProperty("employee_list")&&n.employee_list.length>0&&e(n.employee_list)})}(e),t},treeDataById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return function e(n){n.forEach(function(n){n.hasOwnProperty("department_id")?t[n.department_id]=n:n.hasOwnProperty("employee_id")&&(t[n.employee_id]=n),n.hasOwnProperty("employee_list")&&n.employee_list.length>0&&e(n.employee_list)})}(e),t},changeSelecte:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.department_id?e.department_id:e.employee_id;for(var a in t)t.hasOwnProperty(a)&&(t[a].isActive=n===a)},getDutyArr:function(e){var t=[];return e.forEach(function(e){-1===t.indexOf(e.position_name)&&t.push(e.position_name)}),t},getDutyDepartId:function(e,t){var n;return e.forEach(function(e){void 0!==e.position_name?e.position_name===t&&(n=e.position_id):e.department_name===t&&(n=e.department_id)}),n},search:function(e,t,n,i){var o=[],r=new RegExp(e,"g"),d=new RegExp(t,"g");new RegExp(n,"g");return i.forEach(function(l){e&&e!==a.f.code[0]||""!==t||""!==n?null!==r.exec(l.position_name)&&""===t&&""===n?o.push(l):null!==r.exec(l.position_name)&&null!==d.exec(l.real_name)&&""===n?o.push(l):null!==r.exec(l.position_name)&&null!==d.exec(l.real_name)&&l.phone.indexOf(n)>-1?o.push(l):null!==r.exec(l.position_name)&&l.phone.indexOf(n)>-1&&""===t?o.push(l):(!e||e===a.f.code[0])&&null!==d.exec(l.real_name)&&l.phone.indexOf(n)>-1?o.push(l):(!e||e===a.f.code[0])&&""===t&&l.phone.indexOf(n)>-1?o.push(l):e&&e!==a.f.code[0]||null===d.exec(l.real_name)||""!==n||o.push(l):o=i}),o},getTotal:function(e){if(void 0!==e&&e.length>0){for(var t=0,n=0;n<e.length;n++)t++;return t}},getPageList:function(e,t,n){if(void 0!==e&&e.length>0){return e.filter(function(e,a){return a<t*n&&a>=t*(n-1)})}},isRight:function(e){return e.forEach(function(e){var t,n=[],i=[];for(var o in a.m)void 0!==e.position_permission?(t=e.position_permission&a.m[o],0!==t&&(i.push(a.m.code[t]),n.push(t)),e.arrId=n,e.arrRight=i,e.arrId[0]===a.m.ALLBACKSTAGE&&e.arrId[1]==a.m.ALLWEB&&2==e.arrId.length?e.arrRight=["全部"]:e.arrId[0]===a.m.ALLBACKSTAGE&&e.arrId[1]==a.m.ALLWEB&&e.arrId.length>2?e.arrId[1]="":e.arrId[0]===a.m.ALLWEB&&e.arrId.length>1&&(e.arrId[1]=""),e.arrRight.forEach(function(e){e===a.m.code[a.m.ALLWEB]&&(e="")})):(e.arrId=0,e.arrRight=a.f.code[0])}),e},judgeStaffList:function(e,t){var n=[];for(var i in a.m)e.forEach(function(e){e===a.m.code[a.m[i]]&&n.push(a.m[i])});return n}},d={getTotal:function(e){if(void 0!==e&&e.length>0){for(var t=0,n=0;n<e.length;n++)t++;return t}},getPageList:function(e,t,n){if(void 0!==e&&e.length>0){return e.filter(function(e,a){return a<t*n&&a>=t*(n-1)})}}}},FK10:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"addNewDepartment"}},[n("el-dialog",{staticClass:"category-dialog",attrs:{visible:e.isDialogVisible,"show-close":!1,size:""}},[n("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[e._v("添加部门")]),e._v(" "),n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"category clearfix"},[n("div",{staticClass:"content-left left"},[n("span",[e._v("分类名称")])]),e._v(" "),n("div",{staticClass:"content-right left"},[n("el-input",{staticClass:"left",attrs:{placeholder:"请输入内容"},model:{value:e.dialongInputValue,callback:function(t){e.dialongInputValue=t},expression:"dialongInputValue"}})],1)]),e._v(" "),n("div",{staticClass:"button-group clearfix"},[n("el-button",{staticClass:"ok-btn",on:{click:e.addConfirm}},[e._v("保存")]),e._v(" "),n("el-button",{staticClass:"cancel-btn",on:{click:e.addCancel}},[e._v("取消")])],1)])])],1)},i=[],o={render:a,staticRenderFns:i};t.a=o},HFH2:function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,"#addNewDepartment .dialog-title[data-v-32b50b8e]{width:540px;height:40px;font-size:16px;color:#fff;background-color:#5a8cff;text-align:center;line-height:40px}#addNewDepartment .dialog-content[data-v-32b50b8e]{width:540px;height:200px}#addNewDepartment .category .content-left[data-v-32b50b8e]{width:80px;height:34px;line-height:34px;margin-left:60px}#addNewDepartment .category .content-right[data-v-32b50b8e]{width:320px;height:34px}#addNewDepartment .button-group[data-v-32b50b8e]{width:100%;margin:80px 0 0}#addNewDepartment .ok-btn[data-v-32b50b8e]{margin:0 60px 0 77px;background-color:#5a8cff;color:#fff;cursor:pointer}","",{version:3,sources:["E:/ordering/www/shop/html/src/modules/staff/view/children/children/addNewDepartment.vue"],names:[],mappings:"AAIA,iDACE,YAAa,AACb,YAAa,AACb,eAAgB,AAChB,WAAY,AACZ,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAkB,CACnB,AACD,mDACE,YAAa,AACb,YAAc,CACf,AACD,2DACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAkB,CACnB,AACD,4DACE,YAAa,AACb,WAAa,CACd,AACD,iDACE,WAAY,AACZ,eAAmB,CACpB,AACD,2CACE,qBAAsB,AACtB,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB",file:"addNewDepartment.vue",sourcesContent:["\n#addNewDepartment .category-dialog[data-v-32b50b8e] {\n  /*top: 20%;*/\n}\n#addNewDepartment .dialog-title[data-v-32b50b8e] {\n  width: 540px;\n  height: 40px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #5a8cff;\n  text-align: center;\n  line-height: 40px;\n}\n#addNewDepartment .dialog-content[data-v-32b50b8e] {\n  width: 540px;\n  height: 200px;\n}\n#addNewDepartment .category .content-left[data-v-32b50b8e] {\n  width: 80px;\n  height: 34px;\n  line-height: 34px;\n  margin-left: 60px;\n}\n#addNewDepartment .category .content-right[data-v-32b50b8e] {\n  width: 320px;\n  height: 34px;\n}\n#addNewDepartment .button-group[data-v-32b50b8e] {\n  width: 100%;\n  margin: 80px 0 0 0;\n}\n#addNewDepartment .ok-btn[data-v-32b50b8e] {\n  margin: 0 60px 0 77px;\n  background-color: #5a8cff;\n  color: #fff;\n  cursor: pointer;\n}\n"],sourceRoot:""}])},Lb5F:function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,"#addNewDepartment .el-input{width:320px;margin-bottom:30px}#addNewDepartment .el-input__inner{border-radius:0;height:34px}#addNewDepartment .el-input__inner:focus,#addNewDepartment .el-input__inner:hover{border:1px solid #bfcbd9}#addNewDepartment .el-button{width:160px;height:40px;border:1px solid #5a8cff;color:#5a8cff;border-radius:5px;font-size:14px;cursor:pointer}#addNewDepartment .el-dialog{top:20%}#addNewDepartment .category-dialog .el-dialog__header{padding:0;margin-bottom:60px}#addNewDepartment .el-dialog__body{padding:0}","",{version:3,sources:["E:/ordering/www/shop/html/src/modules/staff/view/children/children/addNewDepartment.vue"],names:[],mappings:"AACA,4BACE,YAAa,AACb,kBAAoB,CACrB,AACD,mCACE,gBAAiB,AACjB,WAAa,CACd,AAID,kFACE,wBAA0B,CAC3B,AACD,6BACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,cAAe,AACf,kBAAmB,AACnB,eAAgB,AAChB,cAAgB,CACjB,AACD,6BACE,OAAS,CACV,AACD,sDACE,UAAW,AACX,kBAAoB,CACrB,AACD,mCACE,SAAW,CACZ",file:"addNewDepartment.vue",sourcesContent:["\n#addNewDepartment .el-input {\n  width: 320px;\n  margin-bottom: 30px;\n}\n#addNewDepartment .el-input__inner {\n  border-radius: 0;\n  height: 34px;\n}\n#addNewDepartment .el-input__inner:hover {\n  border: 1px solid #bfcbd9;\n}\n#addNewDepartment .el-input__inner:focus {\n  border: 1px solid #bfcbd9;\n}\n#addNewDepartment .el-button {\n  width: 160px;\n  height: 40px;\n  border: 1px solid #5a8cff;\n  color: #5a8cff;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n#addNewDepartment .el-dialog {\n  top: 20%;\n}\n#addNewDepartment .category-dialog .el-dialog__header {\n  padding: 0;\n  margin-bottom: 60px;\n}\n#addNewDepartment .el-dialog__body {\n  padding: 0;\n}\n"],sourceRoot:""}])},NK9O:function(e,t,n){var a=n("HFH2");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("4a124a37",a,!0)},"Yp/U":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("EuEE"),i={getDepartList:function(e,t){a.a.DataEncSubmit("department_get.php",e,function(e){t&&"function"==typeof t&&t(e)})},modifyDepartInfo:function(e,t){a.a.DataEncSubmit("department_save.php",e,function(e){t&&"function"==typeof t&&t(e)})},getStaffList:function(e,t){a.a.DataEncSubmit("employee_get.php",e,function(e){t&&"function"==typeof t&&t(e)})},getDepartStaffList:function(e,t){a.a.DataEncSubmit("department_get.php",e,function(e){t&&"function"==typeof t&&t(e)})},modifyStaffInfo:function(e,t){a.a.DataEncSubmit("user_info.php",e,function(e){t&&"function"==typeof t&&t(e)})},getPhoneTest:function(e,t){a.a.DataEncSubmit("login_save.php",e,function(e){t&&"function"==typeof t&&t(e)})},getUserInfor:function(e,t){a.a.DataEncSubmit("employee_save.php",e,function(e){t&&"function"==typeof t&&t(e)})},editDutyRight:function(e,t){a.a.DataEncSubmit("position_save.php",e,function(e){t&&"function"==typeof t&&t(e)})},getDutyList:function(e,t){a.a.DataEncSubmit("position_get.php",e,function(e){t&&"function"==typeof t&&t(e)})},getShopData:function(e,t){a.a.DataEncSubmit("shopinfo_get.php",e,function(e){t&&"function"==typeof t&&t(e)})}}},"a3/h":function(e,t,n){"use strict";function a(e){n("NK9O"),n("whXW")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("1QQ4"),o=n("FK10"),r=n("/Xao"),d=a,l=r(i.a,o.a,!1,d,"data-v-32b50b8e",null);t.default=l.exports},whXW:function(e,t,n){var a=n("Lb5F");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("8258803e",a,!0)}});
//# sourceMappingURL=63.5a5ec82397e03587539c.js.map