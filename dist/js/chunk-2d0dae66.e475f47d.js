(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dae66"],{"6e23":function(t,e,l){"use strict";l.r(e);var c=l("7a23");const a={class:"container"},o={class:"adminInner"},b={class:"pdtSearchBox"},s={class:"btnBox"},n=Object(c["f"])("input",{type:"text",placeholder:"請輸入優惠序號"},null,-1),d={type:"button",class:"btn btn-primary mr-2 border-start-0"},f={class:"pdtList"},i={class:"mt-4"},r=Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",{width:"120"},"名稱"),Object(c["f"])("th",{width:"120"},"折扣"),Object(c["f"])("th",{width:"120"},"到期日"),Object(c["f"])("th",null,"優惠序號"),Object(c["f"])("th",null,"是否啟用"),Object(c["f"])("th")])],-1),j=Object(c["f"])("td",null,"優惠券",-1),O=Object(c["f"])("td",null," 80 % ",-1),u=Object(c["f"])("td",null,"2022/08/10",-1),m=Object(c["f"])("td",null," Lili20220810 ",-1),p=Object(c["f"])("td",null," 已啟用 ",-1),h={class:"btn-group"};function v(t,e,l,v,w,y){const g=Object(c["B"])("font-awesome-icon"),M=Object(c["B"])("Pagination"),k=Object(c["B"])("DelModal"),x=Object(c["B"])("Cupons",!0);return Object(c["w"])(),Object(c["e"])("div",a,[Object(c["f"])("div",o,[Object(c["f"])("div",b,[Object(c["f"])("div",s,[n,Object(c["f"])("button",d,[Object(c["i"])(g,{icon:"fa-solid fa-magnifying-glass"})])])]),Object(c["f"])("div",f,[Object(c["f"])("table",i,[r,Object(c["f"])("tbody",null,[(Object(c["w"])(),Object(c["e"])(c["a"],null,Object(c["A"])(10,t=>Object(c["f"])("tr",{key:t},[j,O,u,m,p,Object(c["f"])("td",null,[Object(c["f"])("div",h,[Object(c["f"])("button",{class:"btn btn-outline-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#Modal",onClick:e[0]||(e[0]=t=>y.openCuponsModal())}," 編輯 "),Object(c["f"])("button",{class:"btn btn-outline-danger btn-sm","data-bs-toggle":"modal","data-bs-target":"#delModal",onClick:e[1]||(e[1]=t=>y.openDelModal())}," 刪除 ")])])])),64))])])]),Object(c["i"])(M),Object(c["i"])(k,{ref:"delModal"},null,512),Object(c["i"])(x,{ref:"cuponsModal"},null,512)])])}var w=l("1799"),y=l("cb98");const g={class:"modal fade orderModal",tabindex:"-1",ref:"modal"},M=Object(c["f"])("div",{class:"modal-dialog modal-lg",role:"document"},[Object(c["f"])("div",{class:"modal-content border-0"},[Object(c["f"])("div",{class:"modal-header"},[Object(c["f"])("p",{class:"modalTitle"},[Object(c["f"])("span")]),Object(c["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),Object(c["f"])("div",{class:"modal-body"},[Object(c["f"])("div",{class:"mb-3"},[Object(c["f"])("label",{for:"title",class:"form-label"}," 名稱 "),Object(c["f"])("input",{type:"text",class:"form-control",id:"title",value:"優惠券"})]),Object(c["f"])("div",{class:"mb-3"},[Object(c["f"])("label",{for:"percent",class:"form-label"}," 折扣(%) "),Object(c["f"])("input",{type:"number",class:"form-control",id:"percent",value:"80"})]),Object(c["f"])("div",{class:"mb-3"},[Object(c["f"])("label",{for:"due_date",class:"form-label"}," 到期日 "),Object(c["f"])("input",{type:"date",class:"form-control",id:"due_date",value:"2022-08-10"})]),Object(c["f"])("div",{class:"mb-3"},[Object(c["f"])("label",{for:"code",class:"form-label"}," 優惠序號 "),Object(c["f"])("input",{type:"text",class:"form-control",id:"code",value:"Lili20220810"})]),Object(c["f"])("div",{class:"mb-3"},[Object(c["f"])("div",{class:"form-check form-switch"},[Object(c["f"])("label",{class:"form-check-label",for:"flexSwitchCheckDefault"}," 未啟用 "),Object(c["f"])("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"})])])]),Object(c["f"])("div",{class:"modal-footer"},[Object(c["f"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),Object(c["f"])("button",{type:"button",class:"btn btn-primary"},"確認")])])],-1),k=[M];function x(t,e,l,a,o,b){return Object(c["w"])(),Object(c["e"])("div",g,k,512)}var C=l("8ad7"),B={mixins:[C["a"]]},D=l("6b0d"),L=l.n(D);const S=L()(B,[["render",x]]);var J=S,P={components:{Pagination:w["a"],DelModal:y["a"],Cupons:J},methods:{openDelModal(){this.$refs.delModal.showModal()},openCuponsModal(){this.$refs.cuponsModal.showModal()}}};const $=L()(P,[["render",v]]);e["default"]=$}}]);
//# sourceMappingURL=chunk-2d0dae66.e475f47d.js.map