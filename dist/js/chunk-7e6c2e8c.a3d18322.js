(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6c2e8c"],{1799:function(e,t,c){"use strict";var a=c("7a23");const o={"aria-label":"Page navigation",class:"pagination justify-content-center"},l={class:"pagination justify-content-center"},s={key:0,class:"page-item"},r=["onClick"],i={key:1,class:"page-item"};function n(e,t,c,n,d,m){const p=Object(a["resolveComponent"])("font-awesome-icon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",o,[Object(a["createElementVNode"])("ul",l,[1==c.page.has_pre?(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",s,[Object(a["createElementVNode"])("a",{class:"page-link",href:"#",onClick:t[0]||(t[0]=Object(a["withModifiers"])(t=>e.$emit("changePage",c.page.current_page-1),["prevent"]))},[Object(a["createVNode"])(p,{icon:"fa-solid fa-angle-left"})])])):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.page.total_pages,t=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"page-item",key:t},[Object(a["createElementVNode"])("a",{class:Object(a["normalizeClass"])(["page-link",{active:t==c.page.current_page}]),href:"#",onClick:Object(a["withModifiers"])(c=>e.$emit("changePage",t),["prevent"])},Object(a["toDisplayString"])(t),11,r)]))),128)),1==c.page.has_next?(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",i,[Object(a["createElementVNode"])("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=Object(a["withModifiers"])(t=>e.$emit("changePage",c.page.current_page+1),["prevent"]))},[Object(a["createVNode"])(p,{icon:"fa-solid fa-angle-right"})])])):Object(a["createCommentVNode"])("",!0)])])}var d={props:["page"]},m=c("6b0d"),p=c.n(m);const u=p()(d,[["render",n]]);t["a"]=u},"29ce":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o={class:"container"},l={class:"adminInner"},s={class:"pdtSearchBox"},r={class:"btnBox"},i=Object(a["createStaticVNode"])('<option value="">-----請選擇分類-----</option><option value="派對蛋糕">派對蛋糕</option><option value="小蛋糕">小蛋糕</option><option value="鬆餅">鬆餅</option><option value="麵包">麵包</option><option value="其他甜品">其他甜品</option><option value="各式飲品">各式飲品</option>',7),n=[i],d={class:"btnBox"},m={class:"btnBox"},p={class:"pdtList"},u={class:"mt-4"},b=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",{width:"120"},"分類"),Object(a["createElementVNode"])("th",{width:"120"},"照片"),Object(a["createElementVNode"])("th",null,"名稱"),Object(a["createElementVNode"])("th",{width:"120"},"原價"),Object(a["createElementVNode"])("th",{width:"120"},"售價"),Object(a["createElementVNode"])("th",{width:"100"},"狀態"),Object(a["createElementVNode"])("th",{width:"200"})])],-1),h=["src"],j={class:"title"},O={class:"text-success"},g={class:"btn-group"},V=["onClick"],N=["onClick"];function f(e,t,c,i,f,E){const v=Object(a["resolveComponent"])("Header"),k=Object(a["resolveComponent"])("font-awesome-icon"),y=Object(a["resolveComponent"])("Loading"),x=Object(a["resolveComponent"])("Pagination"),C=Object(a["resolveComponent"])("Modal"),w=Object(a["resolveComponent"])("DelModal");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(v),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",r,[Object(a["withDirectives"])(Object(a["createElementVNode"])("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=e=>f.selectInput=e),onChange:t[1]||(t[1]=e=>E.searchBox("category",f.selectInput))},n,544),[[a["vModelSelect"],f.selectInput]])]),Object(a["createElementVNode"])("div",d,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-control",type:"text",placeholder:"請輸入產品名稱","onUpdate:modelValue":t[2]||(t[2]=e=>f.searchInput=e)},null,512),[[a["vModelText"],f.searchInput]]),Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-primary mr-2 border-start-0",onClick:t[3]||(t[3]=e=>E.searchBox("title",f.searchInput))},[Object(a["createVNode"])(k,{icon:"fa-solid fa-magnifying-glass"})])]),Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-primary mr-2 border-start-0",onClick:t[4]||(t[4]=(...e)=>E.clear&&E.clear(...e))}," 清除搜尋 ")]),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-primary mr-2 border-start-0",onClick:t[5]||(t[5]=e=>E.openModal(!0))}," 新增甜品 ")]),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("table",u,[b,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(f.productList,(t,c)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:c},[Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.category),1),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("img",{src:t.imageUrl,alt:"",class:"img-fluid"},null,8,h)]),Object(a["createElementVNode"])("td",j,Object(a["toDisplayString"])(t.title),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.$filter.currency(t.origin_price)),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.$filter.currency(t.price)),1),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("span",O,Object(a["toDisplayString"])(1==t.is_enabled?"上架中":"未上架"),1)]),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>E.openModal(!1,t)}," 編輯 ",8,V),Object(a["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>E.openDelModal(t)}," 刪除 ",8,N)])])]))),128))])])]),Object(a["createVNode"])(y,{isShow:f.isLoading},null,8,["isShow"]),f.isSearch?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(x,{key:0,page:f.page,onChangePage:E.changePage},null,8,["page","onChangePage"])),Object(a["createVNode"])(C,{ref:"modal",pdt:f.tempProduct,onUpdate:E.updateProduct},null,8,["pdt","onUpdate"]),Object(a["createVNode"])(w,{ref:"delModal",pdt:f.tempProduct,onDelProduct:E.delProduct},null,8,["pdt","onDelProduct"])])])],64)}var E=c("1985"),v=c("1799");const k={class:"modal fade",tabindex:"-1",ref:"modal"},y={class:"modal-dialog modal-xl",role:"document"},x=Object(a["createElementVNode"])("div",{class:"modal-header"},[Object(a["createElementVNode"])("p",{class:"modalTitle"},[Object(a["createElementVNode"])("span",null,"新增/編輯甜品")]),Object(a["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},w={class:"row"},B={class:"col-sm-4"},U={class:"title inputTitle"},P=Object(a["createTextVNode"])(" 主圖設定 "),M=["src"],L=Object(a["createElementVNode"])("small",{class:"red"},"尺寸建議: 600px*400px",-1),I={class:"mb-2"},S={class:"mb-3"},T=Object(a["createElementVNode"])("label",{for:"customFile",class:"form-label"},[Object(a["createTextVNode"])(" 或 上傳圖片 "),Object(a["createElementVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),D={class:"title inputTitle"},_=Object(a["createTextVNode"])(" 更多圖片(上限十張) "),$={class:"imgBox mb-2"},F=["onClick"],z=["alt","src"],q=Object(a["createElementVNode"])("small",{class:"red"},"尺寸建議: 600px*400px",-1),J={key:0,class:"mb-2"},H={class:"input-group"},A={class:"input-group-append"},G={key:1,class:"mb-3"},K=Object(a["createElementVNode"])("label",{for:"customFile",class:"form-label"},[Object(a["createTextVNode"])(" 或 上傳圖片 "),Object(a["createElementVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),Q={class:"col-sm-8"},R={class:"mb-3"},W={for:"title",class:"form-label inputTitle"},X=Object(a["createTextVNode"])(" 標題 "),Y={class:"row gx-2"},Z={class:"mb-3 col-md-3"},ee={for:"category",class:"form-label inputTitle"},te=Object(a["createTextVNode"])(" 類別 "),ce=Object(a["createElementVNode"])("option",{selected:"",value:"派對蛋糕"},"派對蛋糕",-1),ae=Object(a["createElementVNode"])("option",{value:"小蛋糕"},"小蛋糕",-1),oe=Object(a["createElementVNode"])("option",{value:"鬆餅"},"鬆餅",-1),le=Object(a["createElementVNode"])("option",{value:"麵包"},"麵包",-1),se=Object(a["createElementVNode"])("option",{value:"其他甜品"},"其他甜品",-1),re=Object(a["createElementVNode"])("option",{value:"各式飲品"},"各式飲品",-1),ie=[ce,ae,oe,le,se,re],ne={class:"mb-3 col-md-3"},de={for:"price",class:"form-label inputTitle"},me=Object(a["createTextVNode"])(" 單位 "),pe={class:"mb-3 col-md-3"},ue={for:"origin_price",class:"form-label inputTitle"},be=Object(a["createTextVNode"])(" 原價 "),he={class:"mb-3 col-md-3"},je={for:"price",class:"form-label inputTitle"},Oe=Object(a["createTextVNode"])(" 售價 "),ge=Object(a["createElementVNode"])("hr",null,null,-1),Ve={class:"mb-3"},Ne={for:"description",class:"form-label inputTitle"},fe=Object(a["createTextVNode"])(" 甜品描述 "),Ee={class:"mb-3"},ve={for:"content",class:"form-label inputTitle"},ke=Object(a["createTextVNode"])(" 甜品資訊 "),ye={class:"mb-3"},xe={class:"form-check form-switch"},Ce={key:0,class:"form-check-label",for:"flexSwitchCheckDefault"},we={key:1,class:"form-check-label",for:"flexSwitchCheckDefault"},Be=Object(a["createElementVNode"])("div",{class:"modal-footer"},[Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),Object(a["createElementVNode"])("button",{class:"btn btn-primary"}," 確認送出 ")],-1);function Ue(e,t,c,o,l,s){const r=Object(a["resolveComponent"])("font-awesome-icon"),i=Object(a["resolveComponent"])("Field"),n=Object(a["resolveComponent"])("ErrorMessage"),d=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",k,[Object(a["createElementVNode"])("div",y,[Object(a["createVNode"])(d,{class:"modal-content border-0",onSubmit:s.submit},{default:Object(a["withCtx"])(({errors:e})=>[x,Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("p",U,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),P]),Object(a["createElementVNode"])("img",{class:"img-fluid mb-2",alt:"",src:l.product.imageUrl},null,8,M),L,Object(a["createElementVNode"])("div",I,[Object(a["createVNode"])(i,{type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["圖片連結"]}]),id:"image",placeholder:"請輸入圖片連結",modelValue:l.product.imageUrl,"onUpdate:modelValue":t[0]||(t[0]=e=>l.product.imageUrl=e),name:"圖片連結",rules:"url"},null,8,["modelValue","class"]),Object(a["createVNode"])(n,{name:"圖片連結",class:"inputNote"})]),Object(a["createElementVNode"])("div",S,[T,Object(a["createElementVNode"])("input",{type:"file",id:"customFile",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["上傳圖片"]}]),rules:"image",name:"上傳圖片",ref:"imgUpload",onChange:t[1]||(t[1]=e=>s.imageUpload("imgUpload","customFile"))},null,34)]),Object(a["createElementVNode"])("p",D,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),_]),Object(a["createElementVNode"])("div",$,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l.product.imagesUrl,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"imginner",key:t},[Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-primary deleteBtn",onClick:e=>s.deleteImgs(t)}," 刪除 ",8,F),Object(a["createElementVNode"])("img",{class:"img-fluid",alt:l.product.title+(t+1),src:e},null,8,z)]))),128))]),q,l.imgsError?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",J,[Object(a["createElementVNode"])("div",H,[Object(a["createVNode"])(i,{type:"text",class:"form-control",id:"images",placeholder:"請輸入圖片連結",modelValue:l.imgsInput,"onUpdate:modelValue":t[2]||(t[2]=e=>l.imgsInput=e),name:"多圖連結",rules:"url"},null,8,["modelValue"]),Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[3]||(t[3]=e=>s.pushImg(l.imgsInput))}," 新增 ")])]),Object(a["createVNode"])(n,{name:"多圖連結",class:"inputNote"})])),l.imgsError?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",G,[K,Object(a["createElementVNode"])("input",{type:"file",id:"customFile2",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["上傳圖片"]}]),rules:"image",name:"上傳圖片",ref:"imgUpload2",onChange:t[4]||(t[4]=e=>s.imageUpload("imgUpload2","customFile2"))},null,34)]))]),Object(a["createElementVNode"])("div",Q,[Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("label",W,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),X]),Object(a["createVNode"])(i,{name:"標題",type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["標題"]}]),id:"title",placeholder:"請輸入標題",modelValue:l.product.title,"onUpdate:modelValue":t[5]||(t[5]=e=>l.product.title=e),rules:"required"},null,8,["class","modelValue"]),Object(a["createVNode"])(n,{name:"標題",class:"inputNote"})]),Object(a["createElementVNode"])("div",Y,[Object(a["createElementVNode"])("div",Z,[Object(a["createElementVNode"])("label",ee,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),te]),Object(a["withDirectives"])(Object(a["createElementVNode"])("select",{name:"類別",class:Object(a["normalizeClass"])([{"is-invalid":e["類別"]},"form-select"]),"onUpdate:modelValue":t[6]||(t[6]=e=>l.product.category=e),id:"category"},ie,2),[[a["vModelSelect"],l.product.category]])]),Object(a["createElementVNode"])("div",ne,[Object(a["createElementVNode"])("label",de,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),me]),Object(a["createVNode"])(i,{type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["單位"]}]),id:"unit",placeholder:"請輸入單位",modelValue:l.product.unit,"onUpdate:modelValue":t[7]||(t[7]=e=>l.product.unit=e),name:"單位",rules:"required"},null,8,["modelValue","class"]),Object(a["createVNode"])(n,{name:"單位",class:"inputNote"})]),Object(a["createElementVNode"])("div",pe,[Object(a["createElementVNode"])("label",ue,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),be]),Object(a["createVNode"])(i,{type:"number",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["原價"]}]),id:"origin_price",placeholder:"請輸入原價",modelValue:l.product.origin_price,"onUpdate:modelValue":t[8]||(t[8]=e=>l.product.origin_price=e),name:"原價",rules:"required|min_value:1"},null,8,["modelValue","class"]),Object(a["createVNode"])(n,{name:"原價",class:"inputNote"})]),Object(a["createElementVNode"])("div",he,[Object(a["createElementVNode"])("label",je,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),Oe]),Object(a["createVNode"])(i,{type:"number",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["售價"]}]),id:"price",placeholder:"請輸入售價",modelValue:l.product.price,"onUpdate:modelValue":t[9]||(t[9]=e=>l.product.price=e),name:"售價",rules:"required|min_value:1"},null,8,["modelValue","class"]),Object(a["createVNode"])(n,{name:"售價",class:"inputNote"})])]),ge,Object(a["createElementVNode"])("div",Ve,[Object(a["createElementVNode"])("label",Ne,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),fe]),Object(a["createVNode"])(i,{as:"textarea",rows:"6",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["甜品描述"]}]),id:"description",placeholder:"請輸入甜品描述",modelValue:l.product.description,"onUpdate:modelValue":t[10]||(t[10]=e=>l.product.description=e),name:"甜品描述",rules:"required|max:200"},null,8,["modelValue","class"]),Object(a["createVNode"])(n,{name:"甜品描述",class:"inputNote"})]),Object(a["createElementVNode"])("div",Ee,[Object(a["createElementVNode"])("label",ve,[Object(a["createVNode"])(r,{icon:"fa-solid fa-stroopwafel"}),ke]),Object(a["createVNode"])(i,{as:"textarea",rows:"6",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":e["甜品資訊"]}]),id:"content",placeholder:"請輸入甜品資訊",modelValue:l.product.content,"onUpdate:modelValue":t[11]||(t[11]=e=>l.product.content=e),name:"甜品資訊",rules:"required|max:500"},null,8,["modelValue","class"]),Object(a["createVNode"])(n,{name:"甜品資訊",class:"inputNote"})]),Object(a["createElementVNode"])("div",ye,[Object(a["createElementVNode"])("div",xe,[1==c.pdt.is_enabled?(Object(a["openBlock"])(),Object(a["createElementBlock"])("label",Ce," 上架中 ")):(Object(a["openBlock"])(),Object(a["createElementBlock"])("label",we," 未上架 ")),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"true-value":1,"false-value":0,class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault","onUpdate:modelValue":t[12]||(t[12]=e=>l.product.is_enabled=e)},null,512),[[a["vModelCheckbox"],l.product.is_enabled]])])])])])]),Be]),_:1},8,["onSubmit"])])],512)}var Pe=c("8ad7"),Me={inject:["emitter"],data(){return{product:{category:"小蛋糕"},imgsInput:"",imgsError:!1}},mixins:[Pe["a"]],props:{pdt:{type:Object,defalut(){return{}}}},methods:{submit(){const e={...this.product,origin_price:Number(this.product.origin_price),price:Number(this.product.price)};this.$emit("update",e)},imageUpload(e,t){const c=this.$refs[e].files[0],a=new FormData;a.append("file-to-upload",c);const o="https://vue3-course-api.hexschool.io/api/lili-testapi/admin/upload";this.$http.post(o,a).then(c=>{c.data.success?("imgUpload"===e?this.product.imageUrl=c.data.imageUrl:this.pushImg(c.data.imageUrl),document.getElementById(t).value=""):this.emitter.emit("pushMessage",{style:"fail",content:c.data.message,icon:"fa-solid fa-triangle-exclamation"}),this.isLoading=!1}).catch(e=>{console.error(e),this.isLoading=!1})},deleteImgs(e){this.product.imagesUrl.splice(e,1),this.product.imagesUrl.length<10&&(this.imgsError=!1)},pushImg(e){const t=[...this.product.imagesUrl];10===this.product.imagesUrl.length?this.imgsError=!0:(t.push(e),this.product.imagesUrl=t),this.imgsInput=""}},watch:{pdt(){this.product=this.pdt,this.product.imagesUrl||(this.product.imagesUrl=[]),this.imgsError=!1,this.product.imagesUrl&&10===this.product.imagesUrl.length&&(this.imgsError=!0),this.product.category||(this.product.category="派對蛋糕")}}},Le=c("6b0d"),Ie=c.n(Le);const Se=Ie()(Me,[["render",Ue]]);var Te=Se,De=c("cb98"),_e=c("3a5e"),$e={data(){return{productList:[],tempProduct:{},isNew:!1,page:{},currentPage:1,isLoading:!1,allProducts:[],searchInput:"",isSearch:!1,selectInput:"",searchBoth:!1}},inject:["emitter"],components:{Header:E["a"],Pagination:v["a"],Modal:Te,DelModal:De["a"],Loading:_e["a"]},methods:{getProducts(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/lili-testapi/admin/products?page="+this.currentPage;this.$http.get(e).then(e=>{e.data.success?(this.productList=e.data.products,this.page=e.data.pagination):console.error("列表取得失敗"),this.isLoading=!1}).catch(e=>{console.error(e),this.isLoading=!1})},openModal(e,t){this.tempProduct={},this.$refs.modal.showModal(),t&&(this.tempProduct=JSON.parse(JSON.stringify(t))),this.isNew=e},openDelModal(e){this.tempProduct={},this.$refs.delModal.showModal(),this.tempProduct={...e}},delProduct(e){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/lili-testapi/admin/product/"+e.id;this.$http.delete(t).then(e=>{e.data.success?(this.emitter.emit("pushMessage",{style:"success",content:e.data.message,icon:"fa-solid fa-trash-can"}),this.getProducts()):this.emitter.emit("pushMessage",{style:"fail",content:e.data.message,icon:"fa-solid fa-triangle-exclamation"}),this.$refs.delModal.hideModal(),this.isLoading=!1}).catch(e=>{console.error(e)})},updateProduct(e){this.isLoading=!0;let t="https://vue3-course-api.hexschool.io/api/lili-testapi/admin/product/"+e.id,c="put";this.isNew&&(t="https://vue3-course-api.hexschool.io/api/lili-testapi/admin/product",c="post"),this.isLoading=!0,this.$http[c](t,{data:e}).then(e=>{this.isLoading=!1,this.$refs.modal.hideModal(),e.data.success?(this.emitter.emit("pushMessage",{style:"success",content:e.data.message,icon:"fa-solid fa-circle-check"}),this.getProducts()):this.emitter.emit("pushMessage",{style:"fail",content:e.data.message,icon:"fa-solid fa-triangle-exclamation"})}).catch(e=>{this.isLoading=!1,console.error(e)}),this.isLoading=!1},changePage(e){this.currentPage=e,this.getProducts()},search(e,t){this.isLoading=!0;const c="https://vue3-course-api.hexschool.io/api/lili-testapi/admin/products/all";this.$http.get(c).then(c=>{c.data.success?(this.searchBoth?this.productList=Object.values(this.allProducts).filter(e=>e.title.match(this.searchInput)&&e.category.match(this.selectInput)):(this.allProducts=c.data.products,this.productList=Object.values(this.allProducts).filter(c=>c[e].match(t))),this.isLoading=!1):(console.error("列表取得失敗"),this.isLoading=!1)}).catch(e=>{console.error(e)})},searchBox(e,t){""!==this.searchInput&&""!==this.selectInput?(this.search(),this.searchBoth=!0):""===t?this.clear():(this.search(e,t),this.isSearch=!0)},clear(){this.isSearch=!1,this.searchInput="",this.selectInput="",this.getProducts()}},mounted(){this.getProducts()}};const Fe=Ie()($e,[["render",f]]);t["default"]=Fe}}]);
//# sourceMappingURL=chunk-7e6c2e8c.a3d18322.js.map