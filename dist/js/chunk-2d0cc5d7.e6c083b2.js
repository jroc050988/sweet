(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc5d7"],{"4e2b":function(e,t,o){"use strict";o.r(t);var s=o("7a23");const c={class:"container-fluid adminBg"},n={class:"adminInner"},a={class:"loginBox"},i=Object(s["createElementVNode"])("h1",{class:"h3 mb-4 font-weight-normal text-center"},"管理者登入",-1),l={class:"mb-3 inputBox"},r=Object(s["createElementVNode"])("label",{for:"inputEmail",class:"mb-2"},"電子信箱",-1),d={class:"mb-4 inputBox"},m=Object(s["createElementVNode"])("label",{for:"inputPassword",class:"mb-2"},"密碼",-1),u=["type"],b=Object(s["createElementVNode"])("div",{class:"text-center mt-4"},[Object(s["createElementVNode"])("button",{class:"btn btn-primary btn-block",type:"submit"}," 登入 ")],-1);function p(e,t,o,p,h,j){const f=Object(s["resolveComponent"])("font-awesome-icon");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",c,[Object(s["createElementVNode"])("div",n,[Object(s["createElementVNode"])("div",a,[Object(s["createElementVNode"])("form",{class:"justify-content-center w-100",onSubmit:t[3]||(t[3]=e=>j.login())},[i,Object(s["createElementVNode"])("div",l,[r,Object(s["withDirectives"])(Object(s["createElementVNode"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"請輸入您的電子信箱",required:"",autofocus:"","onUpdate:modelValue":t[0]||(t[0]=e=>h.user.username=e)},null,512),[[s["vModelText"],h.user.username]])]),Object(s["createElementVNode"])("div",d,[m,Object(s["withDirectives"])(Object(s["createElementVNode"])("input",{type:h.isShow?"password":"text",id:"inputPassword",class:"form-control",placeholder:"請輸入您的密碼",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>h.user.password=e)},null,8,u),[[s["vModelDynamic"],h.user.password]]),Object(s["createElementVNode"])("div",{class:"eyeicon",onClick:t[2]||(t[2]=e=>this.isShow=!this.isShow)},[h.isShow?(Object(s["openBlock"])(),Object(s["createBlock"])(f,{key:0,icon:"fa-solid fa-eye"})):(Object(s["openBlock"])(),Object(s["createBlock"])(f,{key:1,icon:"fa-solid fa-eye-slash"}))])]),b],32)])])])}var h={inject:["emitter"],data(){return{user:{username:"lilitest@gmail.com",password:"lilitest"},isShow:!0}},methods:{login(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then(e=>{if(e.data.success){this.emitter.emit("pushMessage",{style:"success",content:"登入成功",icon:"fa-solid fa-right-to-bracket"});const{token:t,expired:o}=e.data;document.cookie=`hexToken=${t};expires=${new Date(o)}`,this.$router.push("/admin/products")}else console.erroror(e.data.message),this.emitter.emit("pushMessage",{style:"fail",content:"登入失敗",icon:"fa-solid fa-triangle-exclamation"})}).catch(e=>{console.log(e)})}}},j=o("6b0d"),f=o.n(j);const w=f()(h,[["render",p]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-2d0cc5d7.e6c083b2.js.map