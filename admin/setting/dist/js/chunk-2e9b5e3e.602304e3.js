(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e9b5e3e"],{"23b6":function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"basic-container"},[e("van-form",{attrs:{"label-width":"7em"}},[e("van-field",{attrs:{name:"uploader",label:a.$t("sitelogo")+":"},scopedSlots:a._u([{key:"input",fn:function(){return[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:a.AxiosApi+"admin.php?mod=setting&op=upload",name:"files[]",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg","on-success":a.handleLogoSuccess,"on-progress":a.handleLogoProgress,"before-upload":a.beforeLogoUpload,"show-file-list":!1}},[e("el-progress",{directives:[{name:"show",rawName:"v-show",value:a.ispercentage,expression:"ispercentage"}],attrs:{type:"circle",width:80,percentage:a.percentage}}),a.imageUrl?[e("el-image",{attrs:{fit:"contain",src:a.imageUrl}})]:e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})],2)]},proxy:!0}])}),e("van-field",{attrs:{label:a.$t("terrace_name")+":"},model:{value:a.formdata.sitename,callback:function(t){a.$set(a.formdata,"sitename",t)},expression:"formdata.sitename"}}),e("p",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("terrace_name_state")))]),e("van-field",{attrs:{name:"checkboxGroup",label:"虚拟路径:"},scopedSlots:a._u([{key:"input",fn:function(){return[e("van-radio-group",{attrs:{direction:"horizontal"},model:{value:a.formdata.pathinfo,callback:function(t){a.$set(a.formdata,"pathinfo",t)},expression:"formdata.pathinfo"}},[e("van-radio",{attrs:{name:1}},[a._v("关闭")]),e("van-radio",{attrs:{name:0}},[a._v("开启")])],1)]},proxy:!0}])}),e("van-field",{attrs:{rows:"1",autosize:"",label:a.$t("platform_beian")+":",type:"textarea",placeholder:""},model:{value:a.formdata.sitebeian,callback:function(t){a.$set(a.formdata,"sitebeian",t)},expression:"formdata.sitebeian"}}),e("p",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("setting_main_html_size")))]),e("van-field",{attrs:{rows:"1",autosize:"",label:a.$t("platform_keywords")+":",type:"textarea",placeholder:""},model:{value:a.formdata.metakeywords,callback:function(t){a.$set(a.formdata,"metakeywords",t)},expression:"formdata.metakeywords"}}),e("p",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("platform_seo_keywords")))]),e("van-field",{attrs:{rows:"1",autosize:"",label:a.$t("Platform_described")+":",type:"textarea",placeholder:""},model:{value:a.formdata.metadescription,callback:function(t){a.$set(a.formdata,"metadescription",t)},expression:"formdata.metadescription"}}),e("p",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("platform_seo_keywords")))]),e("van-field",{attrs:{rows:"1",autosize:"",label:a.$t("statistical_code")+":",type:"textarea",placeholder:""},model:{value:a.formdata.statcode,callback:function(t){a.$set(a.formdata,"statcode",t)},expression:"formdata.statcode"}}),e("p",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("support_html_code")))]),e("van-field",{attrs:{name:"checkboxGroup",label:a.$t("sitepublic")+":"},scopedSlots:a._u([{key:"input",fn:function(){return[e("van-radio-group",{attrs:{direction:"horizontal"},model:{value:a.formdata.overt,callback:function(t){a.$set(a.formdata,"overt",t)},expression:"formdata.overt"}},[e("van-radio",{attrs:{name:"1"}},[a._v(a._s(a.$t("yes")))]),e("van-radio",{attrs:{name:"0"}},[a._v(a._s(a.$t("no")))])],1)]},proxy:!0}])}),e("p",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("sitepublictxt")))]),e("van-field",{attrs:{name:"checkboxGroup",label:a.$t("close_terrace")+":"},scopedSlots:a._u([{key:"input",fn:function(){return[e("van-radio-group",{attrs:{direction:"horizontal"},model:{value:a.formdata.bbclosed,callback:function(t){a.$set(a.formdata,"bbclosed",t)},expression:"formdata.bbclosed"}},[e("van-radio",{attrs:{name:"1"}},[a._v(a._s(a.$t("yes")))]),e("van-radio",{attrs:{name:"0"}},[a._v(a._s(a.$t("no")))])],1)]},proxy:!0}])}),e("p",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("setting_main_close_terrace")))]),e("van-field",{directives:[{name:"show",rawName:"v-show",value:"1"==a.formdata.bbclosed,expression:"formdata.bbclosed == '1'"}],attrs:{rows:"1",autosize:"",label:a.$t("setting_main_cause")+":",type:"textarea",placeholder:""},model:{value:a.formdata.closedreason,callback:function(t){a.$set(a.formdata,"closedreason",t)},expression:"formdata.closedreason"}}),e("p",{directives:[{name:"show",rawName:"v-show",value:"1"==a.formdata.bbclosed,expression:"formdata.bbclosed == '1'"}],staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"0 15px"}},[a._v(a._s(a.$t("setting_main_board_message")))]),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:a.SubmitDatalist}},[a._v(a._s(a.$t("save_changes")))])],1)],1)],1)])},s=[],i=(e("4160"),e("b0c0"),e("d3b7"),e("3ca3"),e("159b"),e("ddb0"),e("2b3d"),{props:["IfuserAgent","formdata","imageUrl","applist","serverspace","buttonLoad"],data:function(){return{percentage:0,ispercentage:!1,fileList:[],newfileList:[],DefaultData:{Picker:!1,data:[],active:0,text:""},StorageData:{Picker:!1,data:[],active:0,text:""}}},watch:{buttonLoad:{handler:function(a){var t=this,e=this.$toast.loading({message:this.$t("loading")+"...",forbidClick:!0,duration:0});if(!a){var o={url:this.imageUrl};this.fileList.push(o),this.applist&&this.applist.length&&this.applist.forEach((function(a,e){if(t.formdata.default_mod==a.identifier){t.DefaultData.text=a.appname,t.DefaultData.active=e;var o={keyId:a.identifier,name:a.appname}}else o={keyId:a.identifier,name:a.appname};t.DefaultData.data.push(o)})),e.clear()}},deep:!0,immediate:!0}},created:function(){},methods:{beforeLogoUpload:function(){this.ispercentage=!0},handleLogoSuccess:function(a,t){this.imageUrl=URL.createObjectURL(t.raw),this.formdata.sitelogo=a.files[0].data.aid},handleLogoProgress:function(a,t,e){var o=parseInt(a.percent);this.percentage=o,100==o&&(this.ispercentage=!1,this.percentage=0)},onConfirmdefault:function(a){var t=this;this.DefaultData.data&&this.DefaultData.data.length&&this.DefaultData.data.forEach((function(e,o){e.keyId==a.keyId?(t.formdata.default_mod=e.keyId,t.DefaultData.text=e.name,t.DefaultData.active=o,e.className="ActiveColor"):e.className="GrayColor"})),this.DefaultData.Picker=!1},onConfirmStorage:function(a){var t=this;this.StorageData.data&&this.StorageData.data.length&&this.StorageData.data.forEach((function(e,o){e.keyId==a.keyId?(t.StorageData.text=e.name,t.StorageData.active=o,e.className="ActiveColor"):e.className="GrayColor"})),this.StorageData.Picker=!1},SubmitDatalist:function(){this.$emit("formSubmit")}},components:{}}),r=i,n=(e("b8de"),e("2877")),l=Object(n["a"])(r,o,s,!1,null,"2ba4b696",null);t["default"]=l.exports},"8e0d":function(a,t,e){},b8de:function(a,t,e){"use strict";var o=e("8e0d"),s=e.n(o);s.a}}]);