webpackJsonp([88],{VNl2:function(n,i,t){var e=t("dRCc");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("8bSs")("a0aa0b02",e,!0)},Z8S9:function(n,i,t){"use strict";i.a={props:["imgSrc"],data:function(){return{imgbase_url:"./php"}},methods:{bigImg:function(){this.$emit("clickit")}}}},dRCc:function(n,i,t){i=n.exports=t("BkJT")(!0),i.push([n.i,".img-view[data-v-41d83e61]{position:relative;width:100%;height:100%}.img-view .img-layer[data-v-41d83e61]{position:fixed;z-index:1001;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden;-webkit-transition:all .5s;transition:all .5s}.img-view .img img[data-v-41d83e61]{display:block;position:absolute;left:0;right:0;margin:auto;z-index:1001;bottom:0}","",{version:3,sources:["E:/ordering/www/shop/html/src/modules/shop/components/showBigImg.vue"],names:[],mappings:"AA2BA,2BACI,kBAAmB,AACnB,WAAY,AACZ,WAAa,CAChB,AAGD,sCACI,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,OAAQ,AACR,0BAA+B,AAC/B,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,2BAA4B,AAC5B,kBAAoB,CACvB,AAGD,oCACI,cAAe,AACf,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,YAAa,AACb,aAAc,AACd,QAAU,CACb",file:"showBigImg.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* bigimg */\n.img-view[data-v-41d83e61] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\n}\r\n\r\n/*遮罩层样式*/\n.img-view .img-layer[data-v-41d83e61] {\r\n    position: fixed;\r\n    z-index: 1001;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    -webkit-transition: all .5s;\r\n    transition: all .5s;\n}\r\n\r\n/*不限制图片大小，实现居中*/\n.img-view .img img[data-v-41d83e61] {\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    z-index: 1001;\r\n    bottom: 0;\n}\r\n"],sourceRoot:""}])},oGp2:function(n,i,t){"use strict";var e=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("div",{staticClass:"img-view",on:{click:n.bigImg}},[t("div",{staticClass:"img-layer"}),n._v(" "),t("div",{staticClass:"img"},[t("img",{attrs:{src:n.imgbase_url+"/img_get.php?img=1&height=100&width=100&imgname="+n.imgSrc}})])])},A=[],r={render:e,staticRenderFns:A};i.a=r},rcnX:function(n,i,t){"use strict";function e(n){t("VNl2")}Object.defineProperty(i,"__esModule",{value:!0});var A=t("Z8S9"),r=t("oGp2"),a=t("/Xao"),o=e,s=a(A.a,r.a,!1,o,"data-v-41d83e61",null);i.default=s.exports}});
//# sourceMappingURL=88.ddfa0cb284c7fbdb998a.js.map