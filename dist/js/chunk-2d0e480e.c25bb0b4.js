(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e480e"],{9100:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n={class:"pageInner cartOkPage"},a={class:"container"},r=Object(o["createElementVNode"])("div",{class:"titleBox"},[Object(o["createElementVNode"])("span",{class:"titleEn"},"Finish"),Object(o["createElementVNode"])("h2",{class:"title wow fadeInUp","data-wow-delay":"250ms"},[Object(o["createElementVNode"])("span",null,"訂"),Object(o["createTextVNode"])("單完成 ")])],-1),s={class:"cartFinBox"},l={class:"note"},d=Object(o["createTextVNode"])(" 為確保您的權益，請牢記訂單編號以便進行查詢 "),i={ref:"copyText"},b={class:"btnBox"};function m(e,t,c,m,p,u){const j=Object(o["resolveComponent"])("font-awesome-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("div",a,[r,Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(j,{icon:"fa-solid fa-circle-check",class:"checkIcon"}),Object(o["createElementVNode"])("p",l,[Object(o["createVNode"])(j,{icon:"fa-solid fa-circle-exclamation"}),d]),Object(o["createElementVNode"])("p",i,[Object(o["createTextVNode"])(" 訂單編號 | "+Object(o["toDisplayString"])(p.orderId)+" ",1),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary btn-sm",onClick:t[0]||(t[0]=Object(o["withModifiers"])(e=>u.copy(),["prevent"]))},"複製")],512),Object(o["createElementVNode"])("p",null,"訂單日期 | "+Object(o["toDisplayString"])(e.$filter.getDate(1e3*p.create)),1)]),Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-primary",onClick:t[1]||(t[1]=t=>e.$router.push("/order"))}," 訂單查詢 "),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=t=>e.$router.push("/menu/all"))}," 繼續購物 ")])])])}var p={data(){return{orderId:"",create:""}},inject:["emitter"],methods:{copy(){const e=document.createElement("input");e.value=this.orderId,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove(),this.emitter.emit("pushMessage",{style:"success",content:"已複製訂單ID",icon:"fa-solid fa-copy"})}},mounted(){this.orderId=sessionStorage.getItem("orderId"),this.create=sessionStorage.getItem("create"),this.$emit("unit","cart")}},u=c("6b0d"),j=c.n(u);const O=j()(p,[["render",m]]);t["default"]=O}}]);
//# sourceMappingURL=chunk-2d0e480e.c25bb0b4.js.map