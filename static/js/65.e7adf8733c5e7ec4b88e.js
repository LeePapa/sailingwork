webpackJsonp([65],{"/pRF":function(t,e,n){"use strict";var a=n("zXF4"),i=n("UdGA"),o=n("6nXL");e.a={props:{getcategoryType:{type:Number}},data:function(){return{secondCate:"",thirdCate:"",cateById:{},disabled:!0,isShowThird:!0,thirdData:{category_id:"301",category_name:"热菜",list:[{category_id:"539",category_name:"川菜",list:[]}]},list:{category_id:"11",category_name:"菜品",list:[{category_id:"301",category_name:"热菜",list:[{category_id:"539",category_name:"川菜",list:[]}]}]},categoryArr:[],isClearThireid:!0}},created:function(){this.$route.query.isnewAccess&&(this.isShowThird=!1),this.getCategorys()},watch:{},methods:{getCategorys:function(){var t=this,e={type_list:1,type:this.getcategoryType};n.i(a.j)(e,function(e){t.list=e.data.list,t.cateById=t.getCateById(t.list.list),t.getFoodinfoCate()})},getFoodinfoCate:function(){var t=this,e=this.$route.query.foodId;i.a.isEmpty(e)||n.i(a.e)(e,function(e){if(0===e.ret){var n=e.data.info||{};t.categoryArr=n.category||[],t.init()}else console.warn("获取菜品详情分类失败")})},getCateById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return function t(n){n.forEach(function(n){n.hasOwnProperty("category_id")&&(e[n.category_id]=n),n.hasOwnProperty("list")&&n.list.length>0&&t(n.list)})}(t),e},changethirdData:function(){this.disabled=!1,this.isClearThireid?this.thirdCate="":this.isClearThireid=!0,this.thirdData=this.cateById[this.secondCate]||{},this.$emit("on-changeT",this.secondCate)},sendId:function(){""!==this.thirdCate&&this.$emit("on-change",this.thirdCate)},init:function(){this.isClearThireid=!1,this.secondCate=(this.categoryArr[1]||{}).category_id||"",this.thirdCate=(this.categoryArr[2]||{}).category_id||"",this.getcategoryType===o.I.ACCESSORY&&(this.isShowThird=!1)},openCategory:function(){this.$emit("on-opencate")}}}},C7P8:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-cate"},[n("div",{staticClass:"first-cate"},[n("div",[t._v(t._s(t.list.category_name))])]),t._v(" "),n("div",{staticClass:"second-cate"},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changethirdData},model:{value:t.secondCate,callback:function(e){t.secondCate=e},expression:"secondCate"}},t._l(t.list.list,function(t){return n("el-option",{key:t.category_id,attrs:{label:t.category_name,value:t.category_id}})}))],1),t._v(" "),t.isShowThird?n("div",{staticClass:"third-cate"},[n("el-select",{attrs:{placeholder:"请选择",disabled:t.disabled},on:{change:t.sendId},model:{value:t.thirdCate,callback:function(e){t.thirdCate=e},expression:"thirdCate"}},t._l(t.thirdData.list,function(t){return n("el-option",{key:t.category_id,attrs:{label:t.category_name,value:t.category_id}})}))],1):t._e(),t._v(" "),n("div",{staticClass:"openCategory",on:{click:t.openCategory}},[t._v("\n      + 添加商品分类\n    ")]),t._v(" "),t.isShowThird?n("span",{staticClass:"tip"},[t._v("注：请选择到三级分类，若无，请添加三级分类")]):t._e()])},i=[],o={render:a,staticRenderFns:i};e.a=o},UdGA:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=(n("zXF4"),n("6nXL")),i=n("5vqR"),o=n("EuEE"),r=n("a2vD"),c={goAnchor:function(t,e){var n=t.querySelector(e);document.body.scrollTop=n.offsetTop,document.documentElement.scrollTop=n.offsetTop},treeDataById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return function t(n){n.forEach(function(n){n.hasOwnProperty("category_id")&&(e[n.category_id]=n),n.hasOwnProperty("list")&&n.list.length>0&&t(n.list)})}(t),e},initTreeData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e=e.map(function(e){return i.default.set(e,"canEditor",!1),i.default.set(e,"addIcon",!0),i.default.set(e,"editorIcon",!0),i.default.set(e,"deleteIcon",!0),i.default.set(e,"isShowBtn",!1),i.default.set(e,"isActive",!1),i.default.set(e,"breakshow",!1),i.default.set(e,"lunckshow",!1),i.default.set(e,"dinnershow",!1),i.default.set(e,"nightshow",!1),i.default.set(e,"allShow",!1),5===t.getKeylength(e.key)?i.default.set(e,"isThree",!0):i.default.set(e,"isThree",!1),e.hasOwnProperty("list")&&e.list.length>0&&t.initTreeData(e.list),e})},generateKey:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return e=e.map(function(e,a){return e.key=n+"-"+a.toString(),e.hasOwnProperty("list")&&e.list.length>0&&t.generateKey(e.list,e.key),e})},getKeylength:function(t){if(!o.a.isEmpty(t)){return t.split("-").length}},selectIcon:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e=e.map(function(e){var n=t.getKeylength(e.key);2===n?(e.addIcon=!1,e.editorIcon=!1,e.deleteIcon=!1):3===n?(e.addIcon=!0,e.editorIcon=!1,e.deleteIcon=!1):4===n?(e.addIcon=!0,e.editorIcon=!0,e.deleteIcon=!0):5===n&&(e.addIcon=!1,e.editorIcon=!0,e.deleteIcon=!0),4===n&&e.type===a.I.ACCESSORY&&(e.addIcon=!1,e.editorIcon=!0,e.deleteIcon=!0),4===n&&1===e.entry_type&&(e.addIcon=!1,e.editorIcon=!1,e.deleteIcon=!1),e.hasOwnProperty("list")&&e.list.length>0&&t.selectIcon(e.list);var i=e.opening_time||[];-1===i.indexOf(a.y.MORN)&&-1===i.indexOf("1")||(e.breakshow=!0),-1===i.indexOf(a.y.NOON)&&-1===i.indexOf("2")||(e.lunckshow=!0),-1===i.indexOf(a.y.EVEN)&&-1===i.indexOf("3")||(e.dinnershow=!0),-1===i.indexOf(a.y.NIGHT)&&-1===i.indexOf("4")||(e.nightshow=!0),4===i.length&&(e.breakshow=!1,e.lunckshow=!1,e.dinnershow=!1,e.nightshow=!1,e.allShow=!0)})},selectdinnerTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];if(null!=e)return t.forEach(function(t){var a=t.value;e.forEach(function(e){a===Number(e)&&n.push(t)})}),n},addCategoryFirst:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return i.default.set(e,"category_name","商品"),i.default.set(e,"list",t),i.default.set(e,"opening_time",[1,2,3,4]),i.default.set(e,"category_id","0"),e},changeSelecte:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.category_id;for(var a in e)e.hasOwnProperty(a)&&(e[a].isActive=n===a)},changeSelecteThoughtid:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)e.hasOwnProperty(n)&&(e[n].isActive=t===n)},deleteArrayItem:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];return t.forEach(function(n,a){if(n===e)return void t.splice(a,1)}),t},isEmpty:function(t){return!([null,"undefined",void 0,"N/A","null"].indexOf(t)<0)},clearNoNum:function(t){return t=String(t),t=t.replace(/[^\d.]/g,""),t=t.replace(/\.{2,}/g,"."),t=t.replace(".","$#$").replace(/\./g,"").replace("$#$","."),t=t.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),t.indexOf(".")<0&&""!==t&&(t=parseFloat(t)),t},checkRound:function(t){return t=String(t),t=t.replace(/[^\d]/g,""),t.indexOf(".")<0&&""!==t&&(t=parseFloat(t)),t},arrayMin:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t[0],n=t.length,a=1;a<n;a++)t[a]<e&&(e=t[a]);return e},arrayMax:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t[0],n=t.length,a=1;a<n;a++)t[a]>e&&(e=t[a]);return e},getShopname:function(){var t=r.a.getShopinfo().shopinfo||[],e=r.a.getShopid(),n={},a=null;return t.forEach(function(t){n[t.shop_id]=t}),a=n[e]||{},a.shop_name}}},lxAF:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}.el-table__empty-text{display:none}.el-table thead th .cell{font-weight:700}.select-cate .el-select{width:180px}.select-cate .el-select .el-input__inner{height:34px!important;border-radius:0}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/merchandise/components/selectCate.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,sBACE,YAAc,CACf,AACD,yBACE,eAAkB,CACnB,AACD,wBACE,WAAa,CACd,AACD,yCACI,sBAAwB,AACxB,eAAiB,CACpB",file:"selectCate.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text {\n  display: none;\n}\n.el-table thead th .cell {\n  font-weight: bold;\n}\n.select-cate .el-select {\n  width: 180px;\n}\n.select-cate .el-select .el-input__inner {\n    height: 34px !important;\n    border-radius: 0;\n}\n"],sourceRoot:""}])},"m+Pg":function(t,e,n){var a=n("oVPg");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("e950e5ca",a,!0)},oVPg:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left[data-v-4b7e88a8]{float:left}.right[data-v-4b7e88a8]{float:right}.clearfix[data-v-4b7e88a8]:after{content:"";display:block;clear:both}.el-table__empty-text[data-v-4b7e88a8]{display:none}.el-table thead th .cell[data-v-4b7e88a8]{font-weight:700}.select-cate>div[data-v-4b7e88a8]{float:left;margin-right:10px}.first-cate>div[data-v-4b7e88a8]{width:50px;height:34px;line-height:34px;background-color:#f2f2f2;text-align:center}.select-cate .tip[data-v-4b7e88a8]{color:#e7487e}.openCategory[data-v-4b7e88a8]{width:150px;height:34px;text-align:center;line-height:34px;color:#4877e7;border:1px solid #4877e7;cursor:pointer}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/merchandise/components/selectCate.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,uCACE,YAAc,CACf,AACD,0CACE,eAAkB,CACnB,AACD,kCACE,WAAY,AACZ,iBAAmB,CACpB,AACD,iCACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,mCACE,aAAe,CAChB,AACD,+BACE,YAAa,AACb,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,cAAe,AACf,yBAA0B,AAC1B,cAAgB,CACjB",file:"selectCate.vue",sourcesContent:["\n.left[data-v-4b7e88a8] {\n  float: left;\n}\n.right[data-v-4b7e88a8] {\n  float: right;\n}\n.clearfix[data-v-4b7e88a8]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.el-table__empty-text[data-v-4b7e88a8] {\n  display: none;\n}\n.el-table thead th .cell[data-v-4b7e88a8] {\n  font-weight: bold;\n}\n.select-cate > div[data-v-4b7e88a8] {\n  float: left;\n  margin-right: 10px;\n}\n.first-cate > div[data-v-4b7e88a8] {\n  width: 50px;\n  height: 34px;\n  line-height: 34px;\n  background-color: #f2f2f2;\n  text-align: center;\n}\n.select-cate .tip[data-v-4b7e88a8] {\n  color: #e7487e;\n}\n.openCategory[data-v-4b7e88a8] {\n  width: 150px;\n  height: 34px;\n  text-align: center;\n  line-height: 34px;\n  color: #4877E7;\n  border: 1px solid #4877E7;\n  cursor: pointer;\n}\n"],sourceRoot:""}])},q5iv:function(t,e,n){var a=n("lxAF");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("1af6fb49",a,!0)},u02a:function(t,e,n){"use strict";function a(t){n("m+Pg"),n("q5iv")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("/pRF"),o=n("C7P8"),r=n("/Xao"),c=a,l=r(i.a,o.a,!1,c,"data-v-4b7e88a8",null);e.default=l.exports},zXF4:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"f",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return s}),n.d(e,"j",function(){return d}),n.d(e,"i",function(){return u}),n.d(e,"a",function(){return f}),n.d(e,"b",function(){return h});var a=n("EuEE"),i=function(t,e){a.a.DataEncSubmit("menu_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},o=function(t){var e={list:1};a.a.DataEncSubmit("category_get.php",e,function(e){t&&"function"==typeof t&&t(e)})},r=function(t,e){var n={foodinfo:1,food_id:t};a.a.DataEncSubmit("menu_get.php",n,function(t){e&&"function"==typeof e&&e(t)})},c=function(t,e){a.a.DataEncSubmit("menu_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},l=function(t,e){a.a.DataEncSubmit("category_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},s=function(t,e){a.a.DataEncSubmit("gen_id.php",t,function(t){e&&"function"==typeof e&&e(t)})},d=function(t,e){a.a.DataEncSubmit("category_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},u=function(t,e){a.a.DataEncSubmit("menu_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},f=function(t,e){a.a.DataEncSubmit("shopinfo_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},h=function(t,e){a.a.DataEncSubmit("shopinfo_save.php",t,function(t){e&&"function"==typeof e&&e(t)})}}});
//# sourceMappingURL=65.e7adf8733c5e7ec4b88e.js.map