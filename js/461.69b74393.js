"use strict";(self["webpackChunkshenlan_tool"]=self["webpackChunkshenlan_tool"]||[]).push([[461],{22461:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("Card",{staticClass:"sl-pub-card"},[t("div",{attrs:{slot:"title"},slot:"title"},[t("Select",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请选择图片类型"},model:{value:e.table.type.value,callback:function(t){e.$set(e.table.type,"value",t)},expression:"table.type.value"}},e._l(e.table.type.data,(function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1),t("div",{staticClass:"extra-bar",attrs:{slot:"extra"},slot:"extra"},[t("Upload",{attrs:{multiple:"",format:["jpg","jpeg","png","webp"],action:"",accept:"image","before-upload":e.handleBeforeUpload}},[t("Button",{attrs:{type:"success"}},[e._v("上传图片")])],1),t("Button",{staticClass:"sl-margin-left-10",attrs:{type:"primary"},on:{click:e.handleExportImage}},[e._v("导出图片")]),t("Button",{staticClass:"sl-margin-left-10",attrs:{type:"error"},on:{click:e.clearTable}},[e._v("清空表格")])],1),t("div",[t("Table",{attrs:{columns:e.table.columns,data:e.table.data}})],1)])],1)},i=[],s=(a(57658),a(27954)),r=a.n(s),n=a(93640),o=a.n(n),d=a(14836),p={components:{},inject:["reload"],data(){return{table:{data:[],type:{value:"",data:[{value:"jpeg",label:".jpeg"},{value:"png",label:".png"},{value:"webp",label:".webp"},{value:"ico",label:".ico"}]},columns:[{title:"预览",render:(e,t)=>e("img",{attrs:{src:t.row.img.src},style:{maxWidth:"100px",marginTop:"4px"}})},{title:"名称",key:"fileName"},{title:"质量",render:(e,t)=>{let a=(t.row.size/1024).toFixed(2);return e("span",`${a}kb`)}},{title:"类型",key:"type"},{title:"操作",render:(e,t)=>e("span",{style:{color:"red",cursor:"pointer"},on:{click:()=>{this.table.data=this.table.data.reduce(((e,a,l)=>(l!==t.index&&e.push(a),e)),[])}}},"删除")}]}}},computed:{},watch:{},mounted(){},methods:{resetPage(){this.reload()},clearTable(){this.table.data=[]},handleBeforeUpload(e){return(0,d.yc)(e).then((t=>{t.onload=()=>{let a={img:t,fileName:e.name,size:e.size,type:e.type,width:t.width,height:t.height};this.table.data.push(a)}})),!1},handleExportImage(){try{let e=this.table;if(!e.type.value)throw"请选择需要转换的图片类型";if(!e.data.length)throw"请先上传图片";this.$Spin.show({render:e=>e("div",[e("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),e("div","Loading")])}),this.renderExportImage()}catch(e){this.$Message.warning(e)}},renderExportImage(){let e=this.table,t=e.type.value,a=new(r()),l=a.folder("images");e.data.forEach(((i,s)=>{let r=i.img,n=document.createElement("canvas");n.width=r.width,n.height=r.height;let d=n.getContext("2d");d.drawImage(r,0,0,r.width,r.height),l.file(`${i.fileName.split(".")[0]}.${t}`,n.toDataURL(`image/${".ico"===t?"x-icon":t}`,1).substring(22),{base64:!0}),s===e.data.length-1&&(this.$Spin.hide(),a.generateAsync({type:"blob"}).then((function(e){o()(e,"watermask.zip")})))}))}}},c=p,h=a(43736),u=(0,h.Z)(c,l,i,!1,null,null,null),g=u.exports}}]);