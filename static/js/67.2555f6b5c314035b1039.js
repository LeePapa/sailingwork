webpackJsonp([67],{AZaq:function(t,n,e){var a=e("Msc+");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("254ac302",a,!0)},"KU+e":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"warp",attrs:{id:"sysmsg"}},[e("nav",{staticClass:"nvs"},[e("el-breadcrumb",{attrs:{separator:">"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/message/systemmsg"}}},[t._v("系统公告")]),t._v(" "),e("el-breadcrumb-item",[t._v("消息详情")])],1)],1),t._v(" "),e("div",{staticClass:"msg-info"},[e("div",{staticClass:"title"},[t._v("\n\t\t\t消息详情\n\t\t")]),t._v(" "),e("div",{staticClass:"info-warp clearfix"},[e("div",{staticClass:"titles"},[e("h3",{staticClass:"tit"},[t._v(t._s(t.info.title))])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"content left"},[t.send_time?e("p",{staticClass:"info"},[t._v(t._s(t.send_time))]):t._e(),t._v(" "),e("p",{staticClass:"info"},[t._v(t._s(t.info.send_username))]),t._v(" "),t.info.content?e("p",{staticClass:"conten"},[t._v(t._s(t.info.content))]):t._e()])])])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text left"},[e("p",{staticClass:"name"},[t._v("发送时间")]),t._v(" "),e("p",{staticClass:"name"},[t._v("发送人")]),t._v(" "),e("p",{staticClass:"name"},[t._v("内容")])])}],A={render:a,staticRenderFns:i};n.a=A},"Msc+":function(t,n,e){n=t.exports=e("BkJT")(!0),n.push([t.i,'.left[data-v-89b90196]{float:left}.right[data-v-89b90196]{float:right}.clearfix[data-v-89b90196]:after{content:"";display:block;clear:both}.el-table__empty-text[data-v-89b90196]{display:none}.el-table thead th .cell[data-v-89b90196]{font-weight:700}.warp[data-v-89b90196]{background:#fff}.warp .nvs[data-v-89b90196]{background:#eff3fa;height:26px}.warp .msg-info .title[data-v-89b90196]{font-size:14px;color:#666;height:40px;line-height:40px;background:#f6f8fc;text-indent:14px}.warp .msg-info .info-warp[data-v-89b90196]{padding-top:40px;min-width:370px}.warp .msg-info .info-warp .titles .tit[data-v-89b90196]{font-size:14px;color:#333;text-align:center;font-weight:700}.warp .msg-info .info-warp .text[data-v-89b90196]{width:220px;height:628px;text-align:right;margin-right:14px}.warp .msg-info .info-warp .text .name[data-v-89b90196]{line-height:39px;font-size:14px;color:#000;opacity:.57}.warp .msg-info .info-warp .content[data-v-89b90196]{max-width:1200px;height:628px}.warp .msg-info .info-warp .content .info[data-v-89b90196]{line-height:39px;font-size:14px;color:#333;height:39px}.warp .msg-info .info-warp .content .conten[data-v-89b90196]{margin-top:9px;font-size:14px;color:#000}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/messagecenter/view/children/systemmsg.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,uCACE,YAAc,CACf,AACD,0CACE,eAAkB,CACnB,AACD,uBACE,eAAiB,CAClB,AACD,4BACI,mBAAoB,AACpB,WAAa,CAChB,AACD,wCACI,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,gBAAkB,CACrB,AACD,4CACI,iBAAkB,AAClB,eAAiB,CACpB,AACD,yDACM,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,eAAkB,CACvB,AACD,kDACM,YAAa,AACb,aAAc,AACd,iBAAkB,AAClB,iBAAmB,CACxB,AACD,wDACQ,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,WAAc,CACrB,AACD,qDACM,iBAAkB,AAClB,YAAc,CACnB,AACD,2DACQ,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,WAAa,CACpB,AACD,6DACQ,eAAgB,AAChB,eAAgB,AAChB,UAAY,CACnB",file:"systemmsg.vue",sourcesContent:["\n.left[data-v-89b90196] {\n  float: left;\n}\n.right[data-v-89b90196] {\n  float: right;\n}\n.clearfix[data-v-89b90196]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text[data-v-89b90196] {\n  display: none;\n}\n.el-table thead th .cell[data-v-89b90196] {\n  font-weight: bold;\n}\n.warp[data-v-89b90196] {\n  background: #fff;\n}\n.warp .nvs[data-v-89b90196] {\n    background: #EFF3FA;\n    height: 26px;\n}\n.warp .msg-info .title[data-v-89b90196] {\n    font-size: 14px;\n    color: #666666;\n    height: 40px;\n    line-height: 40px;\n    background: #F6F8FC;\n    text-indent: 14px;\n}\n.warp .msg-info .info-warp[data-v-89b90196] {\n    padding-top: 40px;\n    min-width: 370px;\n}\n.warp .msg-info .info-warp .titles .tit[data-v-89b90196] {\n      font-size: 14px;\n      color: #333;\n      text-align: center;\n      font-weight: bold;\n}\n.warp .msg-info .info-warp .text[data-v-89b90196] {\n      width: 220px;\n      height: 628px;\n      text-align: right;\n      margin-right: 14px;\n}\n.warp .msg-info .info-warp .text .name[data-v-89b90196] {\n        line-height: 39px;\n        font-size: 14px;\n        color: #000;\n        opacity: 0.57;\n}\n.warp .msg-info .info-warp .content[data-v-89b90196] {\n      max-width: 1200px;\n      height: 628px;\n}\n.warp .msg-info .info-warp .content .info[data-v-89b90196] {\n        line-height: 39px;\n        font-size: 14px;\n        color: #333;\n        height: 39px;\n}\n.warp .msg-info .info-warp .content .conten[data-v-89b90196] {\n        margin-top: 9px;\n        font-size: 14px;\n        color: #000;\n}\n"],sourceRoot:""}])},Nloh:function(t,n,e){"use strict";function a(t){e("AZaq"),e("SKK+")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("cCPO"),A=e("KU+e"),s=e("/Xao"),o=a,r=s(i.a,A.a,!1,o,"data-v-89b90196",null);n.default=r.exports},RhZ4:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"c",function(){return A}),e.d(n,"b",function(){return s});var a=e("EuEE"),i=function(t,n){a.a.DataEncSubmit("news_get.php",t,function(t){n&&"function"==typeof n&&n(t)})},A=function(t,n){a.a.DataEncSubmit("news_save.php",t,function(t){n&&"function"==typeof n&&n(t)})},s=function(t,n){a.a.DataEncSubmit("news_save.php",t,function(t){n&&"function"==typeof n&&n(t)})}},"SKK+":function(t,n,e){var a=e("T0GY");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("8bSs")("77ffa2c2",a,!0)},T0GY:function(t,n,e){n=t.exports=e("BkJT")(!0),n.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}.el-table__empty-text{display:none}.el-table thead th .cell{font-weight:700}#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner,#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover,#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a,#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover{color:#4877e7}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/messagecenter/view/children/systemmsg.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,sBACE,YAAc,CACf,AACD,yBACE,eAAkB,CACnB,AACD,gSAIE,aAAe,CAChB",file:"systemmsg.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text {\n  display: none;\n}\n.el-table thead th .cell {\n  font-weight: bold;\n}\n#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner,\n#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a,\n#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover,\n#sysmsg .el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover {\n  color: #4877E7;\n}\n"],sourceRoot:""}])},cCPO:function(t,n,e){"use strict";var a=e("RhZ4"),i=e("EuEE");n.a={data:function(){return{info:{},send_time:null}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this,n=this.$route.query.newsID;e.i(a.a)({news_info:1,news_id:n},function(n){t.info=n.data.info;var e=t.info.send_time;t.send_time=i.a.TimeTo(e,"yyyy-MM-dd hh:mm:ss")})}}}}});
//# sourceMappingURL=67.2555f6b5c314035b1039.js.map