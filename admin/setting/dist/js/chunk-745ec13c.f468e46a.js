(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-745ec13c"],{"19ba":function(t,a,e){},c619:function(t,a,e){"use strict";var n=e("19ba"),i=e.n(n);i.a},f25b:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"basic-container"},[e("van-form",{attrs:{"label-width":"7.5em"}},[e("van-field",{attrs:{rows:"3",autosize:"",label:t.$t("setting_main_suffix")+":",type:"textarea",placeholder:""},model:{value:t.formdata.unRunExts,callback:function(a){t.$set(t.formdata,"unRunExts",a)},expression:"formdata.unRunExts"}}),e("ul",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"8px 15px"},domProps:{innerHTML:t._s(t.$t("setting_main_suffix_text"))}}),e("van-field",{attrs:{type:"number",label:t.$t("upload_block_size")+":"},scopedSlots:t._u([{key:"extra",fn:function(){return[e("span",{staticStyle:{padding:"0 15px"}},[t._v("M")])]},proxy:!0}]),model:{value:t.formdata.maxChunkSize,callback:function(a){t.$set(t.formdata,"maxChunkSize",a)},expression:"formdata.maxChunkSize"}}),e("ul",{staticClass:"GrayColor",staticStyle:{"font-size":"0.5em",padding:"8px 15px"},domProps:{innerHTML:t._s(t.$t("upload_block_size_text"))}}),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:t.SubmitDatalist}},[t._v(t._s(t.$t("save_changes")))])],1)],1)],1)},i=[],s={props:["FormHash","IfuserAgent","formdata","buttonLoad"],data:function(){return{}},watch:{buttonLoad:{handler:function(t){var a=this.$toast.loading({message:this.$t("loading")+"...",forbidClick:!0,duration:0});t||a.clear()},deep:!0,immediate:!0}},created:function(){},methods:{SubmitDatalist:function(){this.$emit("formSubmit")}}},o=s,r=(e("c619"),e("2877")),u=Object(r["a"])(o,n,i,!1,null,"07fce424",null);a["default"]=u.exports}}]);