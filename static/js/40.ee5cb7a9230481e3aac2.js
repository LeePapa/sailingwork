webpackJsonp([40],{"+IK0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"warp",attrs:{id:"printer"}},[n("nav",{staticClass:"nvs"},[n("el-breadcrumb",{attrs:{separator:">"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/shop"}}},[t._v("店铺管理")]),t._v(" "),n("el-breadcrumb-item",{attrs:{to:{path:"/shop/printer"}}},[t._v("打印机管理")]),t._v(" "),n("el-breadcrumb-item",[t._v("编辑打印机")])],1)],1),t._v(" "),n("div",{staticClass:"printer-info"},[n("div",{staticClass:"title"},[t._v("\n\t\t\t\t编辑打印机\n\t\t\t")]),t._v(" "),n("div",{staticClass:"info-warp"},[n("el-form",{ref:"form",attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"打印机ID"}},[n("span",[t._v(t._s(t.printerID))])]),t._v(" "),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:t.form.printer_name,callback:function(e){t.$set(t.form,"printer_name",e)},expression:"form.printer_name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"规格"}},[n("el-radio",{attrs:{label:"58"},model:{value:t.form.printer_spec,callback:function(e){t.$set(t.form,"printer_spec",e)},expression:"form.printer_spec"}},[t._v("58mm")]),t._v(" "),n("el-radio",{attrs:{label:"80"},model:{value:t.form.printer_spec,callback:function(e){t.$set(t.form,"printer_spec",e)},expression:"form.printer_spec"}},[t._v("80mm")])],1),t._v(" "),n("el-form-item",{attrs:{label:"支持单据类型"}},[n("el-checkbox-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-checkbox",{attrs:{label:t.documentsType.MENUSAFTERKITCHEN,name:"type"}},[t._v(t._s(t.documentsType.toString(t.documentsType.MENUSAFTERKITCHEN)))]),t._v(" "),n("el-checkbox",{attrs:{label:t.documentsType.INVALIDSINGLE,name:"type"}},[t._v(t._s(t.documentsType.toString(t.documentsType.INVALIDSINGLE)))]),t._v(" "),n("el-checkbox",{attrs:{label:t.documentsType.MENUCONSUMER,name:"type"}},[t._v(t._s(t.documentsType.toString(t.documentsType.MENUCONSUMER)))]),t._v(" "),n("el-checkbox",{attrs:{label:t.documentsType.STATEMENT,name:"type"}},[t._v(t._s(t.documentsType.toString(t.documentsType.STATEMENT)))]),t._v(" "),n("el-checkbox",{attrs:{label:t.documentsType.PRESTATEMENT,name:"type"}},[t._v(t._s(t.documentsType.toString(t.documentsType.PRESTATEMENT)))])],1)],1),t._v(" "),n("el-form-item",{staticClass:"goods",attrs:{label:"后厨单打印分类"}},t._l(t.classionf,function(e,i){return n("div",{staticClass:"classion"},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value1,callback:function(n){t.$set(e,"value1",n)},expression:"item.value1"}},t._l(t.options1,function(t){return n("el-option",{key:t.idx,attrs:{label:t.label,value:t.idx}})})),t._v(" "),n("el-select",{attrs:{placeholder:"全部"},model:{value:e.value2,callback:function(n){t.$set(e,"value2",n)},expression:"item.value2"}},t._l(t.options2,function(t){return n("el-option",{key:t.idx,attrs:{label:t.label,value:t.idx}})})),t._v(" "),n("el-select",{attrs:{placeholder:"全部"},model:{value:e.value3,callback:function(n){t.$set(e,"value3",n)},expression:"item.value3"}},t._l(t.options3,function(t){return n("el-option",{key:t.idx,attrs:{label:t.label,value:t.idx}})})),t._v(" "),e.showAdd?n("span",{staticClass:"adds",on:{click:t.addcls}},[t._v("添加所属分类")]):t._e(),t._v(" "),e.showDel?n("span",{staticClass:"del",on:{click:function(e){t.delcls(i)}}}):t._e()],1)})),t._v(" "),n("el-form-item",{attrs:{label:"型号"}},[n("el-input",{model:{value:t.form.printer_model,callback:function(e){t.$set(t.form,"printer_model",e)},expression:"form.printer_model"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{type:"textarea",placeholder:"备注文字总数不得超过120字"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)],1)]),t._v(" "),n("div",{staticClass:"hei_seting"},[n("div",{staticClass:"title"},[t._v("\n\t\t\t\t高级设置\n\t\t\t")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"btn"},[n("button",{staticClass:"blue",attrs:{type:"button"},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),n("button",{staticClass:"default",attrs:{type:"button"}},[t._v("取消")])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"seting-positon"},[n("span",{staticClass:"text"},[t._v("打印位置调整 ")]),n("span",{staticClass:"lp"},[t._v(" Left ")]),t._v(" "),n("input",{attrs:{type:"text"}}),t._v(" mm "),n("span",{staticClass:"tp"},[t._v("Top")]),t._v(" "),n("input",{attrs:{type:"text"}}),t._v(" mm\n\t\t\t")])}],a={render:i,staticRenderFns:r};e.a=a},"/K2A":function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left[data-v-b70a32cc]{float:left}.right[data-v-b70a32cc]{float:right}.clearfix[data-v-b70a32cc]:after{content:"";display:block;clear:both}.warp[data-v-b70a32cc]{background:#fff}.warp .nvs[data-v-b70a32cc]{background:#eff3fa;height:26px}.warp button[data-v-b70a32cc]{cursor:pointer}.warp .printer-info .title[data-v-b70a32cc]{font-size:14px;color:#666;height:40px;line-height:40px;background:#f6f8fc;text-indent:14px}.warp .printer-info .info-warp[data-v-b70a32cc]{padding-top:40px;margin-left:128px}.warp .printer-info .adds[data-v-b70a32cc]{position:relative;cursor:pointer;display:inline-block;width:150px;height:36px;border:1px solid #4877e7;font-size:14px;color:#4877e7;padding-left:45px}.warp .printer-info .adds[data-v-b70a32cc]:before{position:absolute;content:"";left:24px;top:10px;background:url('+n("x2tZ")+') no-repeat;width:16px;height:16px}.warp .printer-info .del[data-v-b70a32cc]{position:relative;cursor:pointer}.warp .printer-info .del[data-v-b70a32cc]:before{position:absolute;content:"";left:0;top:0;background:url('+n("2+Ll")+") no-repeat;width:24px;height:24px}.warp .hei_seting[data-v-b70a32cc]{height:204px;padding:0 0 50px}.warp .hei_seting .title[data-v-b70a32cc]{font-size:14px;color:#666;height:40px;line-height:40px;background:#f6f8fc;text-indent:14px}.warp .hei_seting .seting-positon[data-v-b70a32cc]{margin:40px 0 40px 142px}.warp .hei_seting .seting-positon .text[data-v-b70a32cc]{font-size:14px;color:#000;opacity:.57}.warp .hei_seting .seting-positon .lp[data-v-b70a32cc]{margin-left:14px;color:#333}.warp .hei_seting .seting-positon .tp[data-v-b70a32cc]{margin-left:56px;color:#333}.warp .hei_seting .seting-positon input[data-v-b70a32cc]{width:50px;height:34px;border:1px solid #d9d9d9}.warp .hei_seting .btn[data-v-b70a32cc]{text-align:center;padding-bottom:40px;background:#fff}.warp .hei_seting .btn .blue[data-v-b70a32cc]{font-size:16px;color:#fff;background:#4877e7;width:160px;height:40px;line-height:40px;border-radius:6px}.warp .hei_seting .btn .default[data-v-b70a32cc]{font-size:14px;color:#4877e7;background:#fff;width:160px;height:40px;line-height:40px;border-radius:6px;border:1px solid #4877e7;margin-left:50px}","",{version:3,sources:["E:/ordering/www/shop/html/src/modules/printer/view/children/editPrinterInfo.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,uBACE,eAAiB,CAClB,AACD,4BACI,mBAAoB,AACpB,WAAa,CAChB,AACD,8BACI,cAAgB,CACnB,AACD,4CACI,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,gBAAkB,CACrB,AACD,gDACI,iBAAkB,AAClB,iBAAmB,CACtB,AACD,2CACI,kBAAmB,AACnB,eAAgB,AAChB,qBAAsB,AACtB,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACtB,AACD,kDACM,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,SAAU,AACV,mDAA2C,AAC3C,WAAY,AACZ,WAAa,CAClB,AACD,0CACI,kBAAmB,AACnB,cAAgB,CACnB,AACD,iDACM,kBAAmB,AACnB,WAAY,AACZ,OAAQ,AACR,MAAO,AACP,mDAA0C,AAC1C,WAAY,AACZ,WAAa,CAClB,AACD,mCACI,aAAc,AACd,gBAAoB,CACvB,AACD,0CACM,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,gBAAkB,CACvB,AACD,mDACM,wBAA2B,CAChC,AACD,yDACQ,eAAgB,AAChB,WAAY,AACZ,WAAc,CACrB,AACD,uDACQ,iBAAkB,AAClB,UAAY,CACnB,AACD,uDACQ,iBAAkB,AAClB,UAAY,CACnB,AACD,yDACQ,WAAY,AACZ,YAAa,AACb,wBAA0B,CACjC,AACD,wCACM,kBAAmB,AACnB,oBAAqB,AACrB,eAAiB,CACtB,AACD,8CACQ,eAAgB,AAChB,WAAe,AACf,mBAAoB,AACpB,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,iDACQ,eAAgB,AAChB,cAAe,AACf,gBAAoB,AACpB,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,yBAA0B,AAC1B,gBAAkB,CACzB",file:"editPrinterInfo.vue",sourcesContent:["\n.left[data-v-b70a32cc] {\n  float: left;\n}\n.right[data-v-b70a32cc] {\n  float: right;\n}\n.clearfix[data-v-b70a32cc]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.warp[data-v-b70a32cc] {\n  background: #fff;\n}\n.warp .nvs[data-v-b70a32cc] {\n    background: #EFF3FA;\n    height: 26px;\n}\n.warp button[data-v-b70a32cc] {\n    cursor: pointer;\n}\n.warp .printer-info .title[data-v-b70a32cc] {\n    font-size: 14px;\n    color: #666666;\n    height: 40px;\n    line-height: 40px;\n    background: #F6F8FC;\n    text-indent: 14px;\n}\n.warp .printer-info .info-warp[data-v-b70a32cc] {\n    padding-top: 40px;\n    margin-left: 128px;\n}\n.warp .printer-info .adds[data-v-b70a32cc] {\n    position: relative;\n    cursor: pointer;\n    display: inline-block;\n    width: 150px;\n    height: 36px;\n    border: 1px solid #4877E7;\n    font-size: 14px;\n    color: #4877E7;\n    padding-left: 45px;\n}\n.warp .printer-info .adds[data-v-b70a32cc]:before {\n      position: absolute;\n      content: '';\n      left: 24px;\n      top: 10px;\n      background: url(../img/add1.png) no-repeat;\n      width: 16px;\n      height: 16px;\n}\n.warp .printer-info .del[data-v-b70a32cc] {\n    position: relative;\n    cursor: pointer;\n}\n.warp .printer-info .del[data-v-b70a32cc]:before {\n      position: absolute;\n      content: '';\n      left: 0;\n      top: 0;\n      background: url(../img/del.png) no-repeat;\n      width: 24px;\n      height: 24px;\n}\n.warp .hei_seting[data-v-b70a32cc] {\n    height: 204px;\n    padding: 0 0 50px 0;\n}\n.warp .hei_seting .title[data-v-b70a32cc] {\n      font-size: 14px;\n      color: #666666;\n      height: 40px;\n      line-height: 40px;\n      background: #F6F8FC;\n      text-indent: 14px;\n}\n.warp .hei_seting .seting-positon[data-v-b70a32cc] {\n      margin: 40px 0  40px 142px;\n}\n.warp .hei_seting .seting-positon .text[data-v-b70a32cc] {\n        font-size: 14px;\n        color: #000;\n        opacity: 0.57;\n}\n.warp .hei_seting .seting-positon .lp[data-v-b70a32cc] {\n        margin-left: 14px;\n        color: #333;\n}\n.warp .hei_seting .seting-positon .tp[data-v-b70a32cc] {\n        margin-left: 56px;\n        color: #333;\n}\n.warp .hei_seting .seting-positon input[data-v-b70a32cc] {\n        width: 50px;\n        height: 34px;\n        border: 1px solid #d9d9d9;\n}\n.warp .hei_seting .btn[data-v-b70a32cc] {\n      text-align: center;\n      padding-bottom: 40px;\n      background: #fff;\n}\n.warp .hei_seting .btn .blue[data-v-b70a32cc] {\n        font-size: 16px;\n        color: #ffffff;\n        background: #4877E7;\n        width: 160px;\n        height: 40px;\n        line-height: 40px;\n        border-radius: 6px;\n}\n.warp .hei_seting .btn .default[data-v-b70a32cc] {\n        font-size: 14px;\n        color: #4877E7;\n        background: #ffffff;\n        width: 160px;\n        height: 40px;\n        line-height: 40px;\n        border-radius: 6px;\n        border: 1px solid #4877E7;\n        margin-left: 50px;\n}\n"],sourceRoot:""}])},"2+Ll":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkRJREFUSA3tVb9rFFEQnnm7iWK0iBfvEuRSmMJGSxXBP+D2UEQICoKKUbAVNJVxs0QRwdZSQbAVbQ4XbEWQNGIjiookEPZOiYIQvF8747y3vLtkbzk1HNhkYPfNfPPNzNt5b1iElHwt+RcI8D4g7Ei5+prM/MNB51w+nA/XE9V6Q+sxwkUG3ikB6l8eCc0R0tl0PjcNAIMt+gFBPerxZwFIV5mhAIRO2t1bwDIQP4+HwV1r9lurnq93XsjiYHQ8OKzaME3Apjoin5Hd7EWALwz4LCuoB0M4D8xjAPhefM+1XwHG5MITjEr+sthFDQ5cEJddheqBHOYVwOQLBlaEUe4LPhxYvv+fqFoOLtc8/1p6J4LPRd78PWmjnHtXquWFg/qCdJFEq5b8SzUvuG5xE/T9RDDZaNGSAV11ZKISLGq95t2aIm590rpC91gh9F9p/eepO7m1en0FGYaVO7Q/X7n5UeOrJ28XW43mEst1QlRH5Zq/NkPVYjWqCVqcGHOJplnxrq5OHb3eaBZlILfpREDxlOW0G+1RgwmgGHZr3E6t5Qx83Srwx5ZutejvWoREG6bURlFuRA/Qqtz2X7h96K3FlXK/ySSRsVnVLJ619j2D8ceza8Oo9o24anLP0xuRTTBWmVuRST0tUzSTD/03Fs9azR+NlcwdJRsioOmo7B+w5CYQNGMAwSxkVgIBRQSfNYq8ZIonhL5BkgJMCVuTmGc0czMiu+yEsYMmp2lR4RC8k56+kIPYZOpOXqPIj2Yxr/ilNn4DcBbeGoICFmIAAAAASUVORK5CYII="},"4+KF":function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});var i=n("EuEE"),r=function(t,e){i.a.DataEncSubmit("category_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},a=function(t,e){i.a.DataEncSubmit("print_001.php",t,function(t){e&&"function"==typeof e&&e(t)})}},"57Lg":function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner,#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover,#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a,#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover{color:#4877e7}#printer .el-input__inner{border:1px solid #d9d9d9;border-radius:0;width:280px;height:34px}#printer .goods{max-width:860px}#printer .goods input{border:1px solid #d9d9d9;border-radius:0;width:180px;height:34px}#printer .el-select{margin-right:8px;margin-bottom:8px}#printer .el-textarea__inner{width:400px;height:180px;resize:none;border-radius:0;border:1px solid #d9d9d9}#printer .el-select .el-input .el-input__icon{background:#f2f2f2}#printer .el-form-item__label{color:#000;opacity:.57}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/printer/view/children/editPrinterInfo.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,oSAIE,aAAe,CAChB,AACD,0BACE,yBAA0B,AAC1B,gBAAiB,AACjB,YAAa,AACb,WAAa,CACd,AACD,gBACE,eAAiB,CAClB,AACD,sBACE,yBAA0B,AAC1B,gBAAiB,AACjB,YAAa,AACb,WAAa,CACd,AACD,oBACE,iBAAkB,AAClB,iBAAmB,CACpB,AACD,6BACE,YAAa,AACb,aAAc,AACd,YAAa,AACb,gBAAiB,AACjB,wBAA0B,CAC3B,AACD,8CACE,kBAAoB,CACrB,AACD,8BACE,WAAY,AACZ,WAAc,CACf",file:"editPrinterInfo.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner,\n#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a,\n#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover,\n#printer .el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover {\n  color: #4877E7;\n}\n#printer .el-input__inner {\n  border: 1px solid #d9d9d9;\n  border-radius: 0;\n  width: 280px;\n  height: 34px;\n}\n#printer .goods {\n  max-width: 860px;\n}\n#printer .goods input {\n  border: 1px solid #d9d9d9;\n  border-radius: 0;\n  width: 180px;\n  height: 34px;\n}\n#printer .el-select {\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n#printer .el-textarea__inner {\n  width: 400px;\n  height: 180px;\n  resize: none;\n  border-radius: 0;\n  border: 1px solid #D9D9D9;\n}\n#printer .el-select .el-input .el-input__icon {\n  background: #f2f2f2;\n}\n#printer .el-form-item__label {\n  color: #000;\n  opacity: 0.57;\n}\n"],sourceRoot:""}])},Ewl8:function(t,e,n){"use strict";var i=n("6nXL"),r=n("4+KF");e.a={data:function(){return{form:{printer_name:"",printer_spec:"",printer_model:"",remark:""},classionf:[{value1:"",value2:"",value3:"",showAdd:!0,showDel:!1}],type:[],list:[],options1:[],options2:[],options3:[],category:[],printers:[],printerID:null}},mounted:function(){this.getData()},computed:{documentsType:function(){return i.y}},methods:{onSubmit:function(){this.check(this.form.remark)},addcls:function(){var t={value1:"",value2:"",value3:"",showAdd:!1,showDel:!0};this.classionf.push(t)},delcls:function(t){this.classionf.splice(t,1)},getData:function(){var t=this;n.i(r.b)({list:1},function(e){t.list=e.data.list}),n.i(r.a)({},function(e){var n=t.$route.query.id;t.printers=e.data.printer||[],t.printers.forEach(function(e){e.printer_id==n&&(t.form.printer_name=e.printer_name,t.form.printer_spec=String(e.printer_spec),t.type=e.documents_type,t.form.printer_model=e.printer_model,t.form.remark=e.remark,t.printerID=e.printer_id)})})},getLen:function(t){return null==t?0:("string"!=typeof t&&(t+=""),t.replace(/[^\x00-\xff]/g,"01").length)},check:function(){if(this.getLen(this.form.remark)>240)return this.$notify({title:"警告",message:"备注超过120字",type:"warning"}),!0}}}},W0L8:function(t,e,n){"use strict";function i(t){n("uL4/"),n("fL/4")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("Ewl8"),a=n("+IK0"),A=n("46Yf"),o=i,p=A(r.a,a.a,!1,o,"data-v-b70a32cc",null);e.default=p.exports},"fL/4":function(t,e,n){var i=n("57Lg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("ccb25ab8",i,!0)},"uL4/":function(t,e,n){var i=n("/K2A");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("e5c62904",i,!0)},x2tZ:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADpJREFUOBFjYBjUwKP8+X8QxudIJnySxMgNAwMYYf4kFFgwdTB6R6ckWC/FYQAzECs9Go1Yg2UQCgIAvIQOqMVwglsAAAAASUVORK5CYII="}});
//# sourceMappingURL=40.ee5cb7a9230481e3aac2.js.map