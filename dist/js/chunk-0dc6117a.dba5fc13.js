(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dc6117a"],{"1fba":function(e,t,a){"use strict";var o=a("3a5e");t["a"]={data(){return{cartList:[],total:0,finalTotal:0,isLoading:!1,couponCode:"",coupon:{}}},components:{Loading:o["a"]},inject:["emitter"],methods:{getCart(e){e&&(this.isLoading=!0),console.log(e);const t="https://vue3-course-api.hexschool.io/api/lili-testapi/cart";this.$http.get(t).then(e=>{console.log(e),e.data.success?(this.cartList=e.data.data.carts,this.total=e.data.data.total,e.data.data.carts[0].coupon&&(this.coupon=e.data.data.carts[0].coupon,this.couponCode=e.data.data.carts[0].coupon.code,this.hasCoupon=!0,console.log(this.hasCoupon)),this.finalTotal=e.data.data.final_total+this.fare):console.error("列表取得失敗"),this.isLoading=!1}).catch(e=>{console.error(e),this.isLoading=!1})}},created(){this.getCart(!0)},computed:{fare(){return this.total<3e3?150:0},discount(){return 0!==this.total?this.total+this.fare-this.finalTotal:0},remain(){return 3e3-this.total}}}},"3a5e":function(e,t,a){"use strict";var o=a("7a23");const n=Object(o["createElementVNode"])("div",{class:"loadingio-spinner-spin-5hfsjfnfs9l"},[Object(o["createElementVNode"])("div",{class:"ldio-pxmsnoggd6n"},[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")])])],-1);function c(e,t,a,c,r,l){const i=Object(o["resolveComponent"])("VueLoading");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{loader:"bars",active:r.isLoading,"onUpdate:active":t[0]||(t[0]=e=>r.isLoading=e)},{default:Object(o["withCtx"])(()=>[n]),_:1},8,["active"])}var r=a("9062"),l=a.n(r),i=(a("e40d"),{data(){return{isLoading:this.isShow}},props:["isShow"],components:{VueLoading:l.a},watch:{isShow(){this.isLoading=this.isShow}}}),s=(a("d1d1"),a("6b0d")),d=a.n(s);const u=d()(i,[["render",c]]);t["a"]=u},"46e4":function(e,t,a){},9062:function(e,t,a){!function(t,o){e.exports=o(a("7a23"))}(0,(function(e){return(()=>{"use strict";var t={553:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const a=e.__vccOpts||e;for(const[o,n]of t)a[o]=n;return a}},976:t=>{t.exports=e}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var c=a[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{Component:()=>y,Plugin:()=>w,default:()=>k,useLoading:()=>E});var e=o(976);function t(t,a,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c=(0,e.h)(t,a,n),r=document.createElement("div");return r.classList.add("vld-container"),o.appendChild(r),(0,e.render)(c,r),c.component}const a="undefined"!=typeof window?window.HTMLElement:Object,c=["aria-busy"],r={class:"vld-icon"},l={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(e){if(!this.isActive)return;if(e.target===this.$refs.root||this.$refs.root.contains(e.target))return;let t=this.container?this.container:this.isFullPage?null:this.$refs.root.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$refs.root.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},i=["width","height","stroke"],s=[(0,e.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)],d=(0,e.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var u=o(553);const m=(0,u.default)(d,[["render",function(t,a,o,n,c,r){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,stroke:t.color},s,8,i)}]]),b=["fill","width","height"],p=[(0,e.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)],h=(0,e.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),f=(0,u.default)(h,[["render",function(t,a,o,n,c,r){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color,width:t.width,height:t.height},p,8,b)}]]),g=["height","width","fill"],O=[(0,e.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)],j=(0,e.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),v={Spinner:m,Dots:f,Bars:(0,u.default)(j,[["render",function(t,a,o,n,c,r){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:t.height,width:t.width,fill:t.color},O,8,g)}]])},N=(0,e.defineComponent)({name:"vue-loading",mixins:[l],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,a],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},emits:["hide","update:active"],data(){return{isActive:this.active}},components:v,mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const t=this.$refs.root.parentElement;var a,o;(0,e.render)(null,t),void 0!==(a=t).remove?a.remove():null===(o=a.parentNode)||void 0===o||o.removeChild(a)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress(e){27===e.keyCode&&this.cancel()}},watch:{active(e){this.isActive=e},isActive(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),V=(0,u.default)(N,[["render",function(t,a,o,n,l,i){return(0,e.openBlock)(),(0,e.createBlock)(e.Transition,{ref:"root",name:t.transition},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",{tabindex:"0",class:(0,e.normalizeClass)(["vld-overlay is-active",{"is-full-page":t.isFullPage}]),"aria-busy":t.isActive,"aria-label":"Loading",style:(0,e.normalizeStyle)({zIndex:t.zIndex})},[(0,e.createElementVNode)("div",{class:"vld-background",onClick:a[0]||(a[0]=(0,e.withModifiers)((function(){return t.cancel&&t.cancel(...arguments)}),["prevent"])),style:(0,e.normalizeStyle)(t.bgStyle)},null,4),(0,e.createElementVNode)("div",r,[(0,e.renderSlot)(t.$slots,"before"),(0,e.renderSlot)(t.$slots,"default",{},()=>[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.loader),{color:t.color,width:t.width,height:t.height},null,8,["color","width","height"]))]),(0,e.renderSlot)(t.$slots,"after")])],14,c),[[e.vShow,t.isActive]])]),_:3},8,["name"])}]]),y=V;function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{show(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;const c=Object.assign({},e,o,{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0});let r=c.container;c.container||(r=document.body,c.isFullPage=!0);const l=Object.assign({},a,n);return{hide:t(y,c,r,l).ctx.hide}}}}const w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=E(t,a);e.config.globalProperties.$loading=o,e.provide("$loading",o)};y.install=w;const k=y})(),n})()}))},ce5c:function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={class:"pageInner cartPage cartCheckPage"},c={class:"container"},r={class:"cartListBox"},l=Object(o["createElementVNode"])("div",{class:"titleBox"},[Object(o["createElementVNode"])("span",{class:"titleEn"},"Check"),Object(o["createElementVNode"])("h2",{class:"title wow fadeInUp","data-wow-delay":"250ms"},[Object(o["createElementVNode"])("span",null,"資"),Object(o["createTextVNode"])("料填寫 ")])],-1),i=Object(o["createElementVNode"])("p",null,null,-1),s={class:"infoFrom"},d={class:"mb-3"},u=Object(o["createElementVNode"])("label",{for:"name",class:"form-label"},[Object(o["createTextVNode"])(" 訂購人姓名 "),Object(o["createElementVNode"])("span",{class:"tag"},"必填")],-1),m={class:"mb-3"},b=Object(o["createElementVNode"])("label",{for:"email",class:"form-label"},[Object(o["createTextVNode"])(" 聯絡電子信箱 "),Object(o["createElementVNode"])("span",{class:"tag"},"必填")],-1),p={class:"mb-3"},h=Object(o["createElementVNode"])("label",{for:"tel",class:"form-label"},[Object(o["createTextVNode"])(" 手機號碼 "),Object(o["createElementVNode"])("span",{class:"tag"},"必填")],-1),f={class:"mb-3"},g=Object(o["createElementVNode"])("label",{for:"add",class:"form-label"},[Object(o["createTextVNode"])(" 收件地址 "),Object(o["createElementVNode"])("span",{class:"tag"},"必填")],-1),O={class:"mb-3"},j=Object(o["createElementVNode"])("label",{for:"massages",class:"form-label"}," 備註 ",-1),v={class:"form-check"},N=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"flexCheckDefault"},[Object(o["createTextVNode"])(" 我已確認資料填寫無誤，並已詳細閱讀 "),Object(o["createElementVNode"])("a",{href:"",title:""},"銷售條款"),Object(o["createTextVNode"])(" 。 "),Object(o["createElementVNode"])("span",{class:"tag"},"必填")],-1),V=Object(o["createElementVNode"])("br",null,null,-1),y=Object(o["createElementVNode"])("div",{class:"inputNote"},"請確認資料，並詳細閱讀銷售條款",-1),E={class:"cartTotalBox"},w={class:"orderDetailList mb-1"},k={class:"w-100"},C=Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",{class:"orderTitle"},[Object(o["createElementVNode"])("td",null,"名稱"),Object(o["createElementVNode"])("td",{width:"60"},"數量"),Object(o["createElementVNode"])("td",null,"售價"),Object(o["createElementVNode"])("td",null,"小計")])],-1),x={key:0,class:"note-ok"},S={class:"cartTotalItem mt-2"},L=Object(o["createElementVNode"])("p",{class:"title"},"總價",-1),B={key:1,class:"cartTotalItem mt-2 red"},T=Object(o["createElementVNode"])("p",{class:"title"},"折扣",-1),D={class:"cartTotalItem mt-2"},$=Object(o["createElementVNode"])("p",{class:"title"},"運費",-1),M=Object(o["createElementVNode"])("hr",null,null,-1),P={class:"cartTotalItem"},F=Object(o["createElementVNode"])("p",{class:"title"},"結算",-1),I={class:"btnBox nextStep"},_=Object(o["createElementVNode"])("button",{class:"btn btn-primary mr-2"}," 去結帳 ",-1);function z(e,t,a,z,U,A){const X=Object(o["resolveComponent"])("Field"),q=Object(o["resolveComponent"])("ErrorMessage"),J=Object(o["resolveComponent"])("font-awesome-icon"),H=Object(o["resolveComponent"])("Form"),G=Object(o["resolveComponent"])("Loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(H,{class:"cartInner",onSubmit:A.createOrder},{default:Object(o["withCtx"])(({errors:a})=>[Object(o["createElementVNode"])("div",r,[l,i,Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",d,[u,Object(o["createVNode"])(X,{type:"email",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":a["訂購人姓名"]}]),id:"name",name:"訂購人姓名",modelValue:U.orderData.user.name,"onUpdate:modelValue":t[0]||(t[0]=e=>U.orderData.user.name=e),rules:"required"},null,8,["class","modelValue"]),Object(o["createVNode"])(q,{name:"訂購人姓名",class:"inputNote"})]),Object(o["createElementVNode"])("div",m,[b,Object(o["createVNode"])(X,{type:"email",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":a["聯絡人電子信箱"]}]),id:"email",name:"聯絡人電子信箱",modelValue:U.orderData.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>U.orderData.user.email=e),rules:"required|email"},null,8,["class","modelValue"]),Object(o["createVNode"])(q,{name:"聯絡人電子信箱",class:"inputNote"})]),Object(o["createElementVNode"])("div",p,[h,Object(o["createVNode"])(X,{type:"text",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":a["手機號碼"]}]),id:"tel",name:"手機號碼",modelValue:U.orderData.user.tel,"onUpdate:modelValue":t[2]||(t[2]=e=>U.orderData.user.tel=e),rules:A.isPhone},null,8,["class","modelValue","rules"]),Object(o["createVNode"])(q,{name:"手機號碼",class:"inputNote"})]),Object(o["createElementVNode"])("div",f,[g,Object(o["createVNode"])(X,{type:"text",class:Object(o["normalizeClass"])(["form-control",{"is-invalid":a["收件地址"]}]),id:"add",name:"收件地址",modelValue:U.orderData.user.address,"onUpdate:modelValue":t[3]||(t[3]=e=>U.orderData.user.address=e),rules:"required"},null,8,["class","modelValue"]),Object(o["createVNode"])(q,{name:"收件地址",class:"inputNote"})]),Object(o["createElementVNode"])("div",O,[j,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{class:"form-control",id:"massages",rows:"3","onUpdate:modelValue":t[4]||(t[4]=e=>U.orderData.message=e)},null,512),[[o["vModelText"],U.orderData.message]])]),Object(o["createElementVNode"])("div",v,[Object(o["createVNode"])(X,{class:"form-check-input",type:"checkbox",value:"'check'",id:"flexCheckDefault",name:"確認資料",rules:"required"}),N,V,Object(o["createVNode"])(q,{name:"確認資料"},{default:Object(o["withCtx"])(()=>[y]),_:1})])])]),Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("table",k,[C,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.cartList,(t,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:a},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.product.title),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.qty),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$filter.currency(t.product.price)),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$filter.currency(t.total)),1)]))),128))])])]),e.coupon&&0!==Object.keys(e.coupon).length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",x,[Object(o["createVNode"])(J,{icon:"fa-solid fa-circle-check"}),Object(o["createTextVNode"])(' 已套用優惠券"'+Object(o["toDisplayString"])(e.coupon.code)+'"；折扣'+Object(o["toDisplayString"])(100-e.coupon.percent)+"% ",1)])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",S,[L,Object(o["createElementVNode"])("p",null,"$ "+Object(o["toDisplayString"])(e.$filter.currency(e.total)),1)]),e.coupon&&0!==Object.keys(e.coupon).length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",B,[T,Object(o["createElementVNode"])("p",null,"- $ "+Object(o["toDisplayString"])(e.$filter.currency(e.discount)),1)])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",D,[$,Object(o["createElementVNode"])("p",null,"$ "+Object(o["toDisplayString"])(e.fare),1)]),M,Object(o["createElementVNode"])("div",P,[F,Object(o["createElementVNode"])("p",null,"$ "+Object(o["toDisplayString"])(e.$filter.currency(e.finalTotal)),1)]),Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-primary mr-2",onClick:t[5]||(t[5]=t=>e.$router.push("/cart"))}," 上一步 "),_])])]),_:1},8,["onSubmit"])])]),Object(o["createVNode"])(G,{isShow:e.isLoading},null,8,["isShow"])],64)}var U=a("1fba"),A={mixins:[U["a"]],data(){return{orderData:{user:{},message:""}}},methods:{createOrder(){console.log("createOrder"),this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/lili-testapi/order";this.$http.post(e,{data:this.orderData}).then(e=>{console.log(e.data),e.data.success?(this.isLoading=!1,sessionStorage.setItem("orderId",e.data.orderId),sessionStorage.setItem("create",e.data.create_at),this.$router.push("/cart-ok"),this.emitter.emit("pushMessage",{style:"success",content:e.data.message,icon:""})):(this.isLoading=!1,this.emitter.emit("pushMessage",{style:"fail",content:e.data.message,icon:"fa-solid fa-triangle-exclamation"}))}).catch(e=>{console.error(e)})},isPhone(e){const t=/^(09)[0-9]{8}$/;return!!t.test(e)||"請輸入正確的手機號碼"}},mounted(){this.$emit("unit","cart")}},X=a("6b0d"),q=a.n(X);const J=q()(A,[["render",z]]);t["default"]=J},d1d1:function(e,t,a){"use strict";a("46e4")},e40d:function(e,t,a){}}]);
//# sourceMappingURL=chunk-0dc6117a.dba5fc13.js.map