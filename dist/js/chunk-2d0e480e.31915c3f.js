(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e480e"],{9100:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n={class:"pageInner cartOkPage"},r={class:"container"},a=Object(o["createElementVNode"])("div",{class:"titleBox"},[Object(o["createElementVNode"])("span",{class:"titleEn"},"Finish"),Object(o["createElementVNode"])("h2",{class:"title wow fadeInUp","data-wow-delay":"250ms"},[Object(o["createElementVNode"])("span",null,"訂"),Object(o["createTextVNode"])("單完成 ")])],-1),s={class:"cartFinBox"},d={class:"note"},i=Object(o["createTextVNode"])(" 為確保您的權益，請牢記訂單編號以便進行查詢 "),l={ref:"copyText"},b=Object(o["createElementVNode"])("p",null,"付款方式 | ATM轉帳",-1),m={class:"btnBox"};function p(e,t,c,p,u,O){const j=Object(o["resolveComponent"])("font-awesome-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("div",r,[a,Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(j,{icon:"fa-solid fa-circle-check",class:"checkIcon"}),Object(o["createElementVNode"])("p",d,[Object(o["createVNode"])(j,{icon:"fa-solid fa-circle-exclamation"}),i]),Object(o["createElementVNode"])("p",l,[Object(o["createTextVNode"])(" 訂單編號 | "+Object(o["toDisplayString"])(u.orderId)+" ",1),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary btn-sm",onClick:t[0]||(t[0]=Object(o["withModifiers"])(e=>O.copy(),["prevent"]))},"複製")],512),Object(o["createElementVNode"])("p",null,"訂單日期 | "+Object(o["toDisplayString"])(e.$filter.getDate(1e3*u.create)),1),b]),Object(o["createElementVNode"])("div",m,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-primary",onClick:t[1]||(t[1]=t=>e.$router.push("/order"))}," 訂單查詢 "),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=t=>e.$router.push("/menu"))}," 繼續購物 ")])])])}var u={data(){return{orderId:"",create:""}},inject:["emitter"],methods:{copy(){const e=document.createElement("input");e.value=this.orderId,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove(),this.emitter.emit("pushMessage",{style:"success",content:"已複製訂單ID",icon:"fa-solid fa-copy"})}},mounted(){document.cookie.indexOf(!1)&&this.$router.push("/cart"),this.orderId=document.cookie.replace(/(?:(?:^|.*;\s*)orderId\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.create=document.cookie.replace(/(?:(?:^|.*;\s*)create\s*=\s*([^;]*).*$)|^.*$/,"$1"),document.cookie="orderId=0;expires="+(new Date-1),document.cookie="create=0;expires="+(new Date-1),this.$emit("unit","cart")}},O=c("6b0d"),j=c.n(O);const h=j()(u,[["render",p]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0e480e.31915c3f.js.map