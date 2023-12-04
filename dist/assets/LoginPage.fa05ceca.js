import{j as B,l as h,E as C,x as o,aI as L,r as i,bd as O,s as n,m as Q,q as _,Q as p,t as A,F,u as N,B as S,D as E,cW as M,cX as U}from"./index.5586a270.js";import{Q as y}from"./QInput.ad9a3d73.js";import{Q as j}from"./QForm.404a1629.js";import{a as b}from"./utils.3d38ee44.js";import"./use-key-composition.1c847729.js";import"./focus-manager.f405ec54.js";const $=["src"],W=o("div",{class:"tw-font-bold tw-text-md tw-text-center"},"GOPHERCRON",-1),z=B({props:{class:{type:String,default:""},src:{type:String,default:"/logo.png"}},setup(f){const l=f;return(u,s)=>(h(),C("div",{class:L(l.class+" tw-flex tw-items-center tw-flex-col")},[o("img",{src:f.src,alt:"logo"},null,8,$),W],2))}}),G={class:"tw-h-full tw-bg-gradient-to-tl tw-from-primary tw-to-black tw-w-full tw-px-4"},H={class:"tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full tw-w-full"},P={class:"tw-bg-[#1D1D1D] tw-shadow tw-rounded tw-max-w-md lg:tw-w-1/3 sm:tw-w-2/3 tw-w-full tw-p-10 md:tw-mt-6 tw-mt-2"},T=F(" \u4F7F\u7528 OIDC \u767B\u5F55 "),X=o("p",{tabindex:"0",class:"focus:tw-outline-none tw-text-2xl tw-font-extrabold tw-leading-6"}," \u8D26\u53F7\u5BC6\u7801\u767B\u5F55 ",-1),J=o("p",{tabindex:"0",class:"tw-pb-8 focus:tw-outline-none tw-text-sm tw-mt-4 tw-font-medium tw-leading-none tw-text-gray-500"},[F(" \u6CA1\u6709\u8D26\u53F7? "),o("a",{href:"javascript:void(0)",class:"hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"},"\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u5F00\u901A")],-1),K=o("label",{id:"email",class:"tw-text-sm tw-font-medium tw-leading-none tw-text-white"},"\u8D26\u53F7",-1),Y={class:"tw-mt-6 tw-w-full"},Z=o("label",{for:"pass",class:"tw-text-sm tw-font-medium tw-leading-none tw-text-white"},"\u5BC6\u7801",-1),tt={class:"tw-mt-8"},ut=B({setup(f){const l=i(""),u=i(""),s=N(),D=S(),c=E(),r=i(!1),a=i(!1);let d=b("code"),w=b("state");d||(d=c.query.code),w||(w=c.query.state),d&&w&&R(d,w);const x=i();async function V(){try{x.value=await M()}catch(t){console.error(t),s.commit("error",{error:t})}}V();async function R(t,e){a.value=!0,await s.dispatch("loginWithOIDC",{code:t,state:e}),s.state.Root.logined&&await v(c.query.redirect),a.value=!1}async function v(t){const e={name:"",path:"",params:{}};if(t&&t.length>0&&t.indexOf("/summary")!==0)e.path=t[0]||e.path;else{const m=localStorage.getItem("gc_choosed_org")||"baseorg";e.name="summary",e.params={orgId:m}}await D.push(e)}async function k(){a.value=!0;try{const t=await U();window.location.href=t}catch(t){console.error(t),a.value=!1,s.commit("error",{error:t})}}async function q(){r.value=!0,await s.dispatch("login",{username:l.value,password:u.value}),s.state.Root.logined&&await v(c.query.redirect),r.value=!1}function I(){l.value="",u.value=""}return O(()=>s.dispatch("logout")),(t,e)=>{var m;return h(),C("div",G,[o("div",H,[n(z,{class:"tw-w-24 md:tw-w-32",src:"./logo_white.png"}),o("div",P,[(m=x.value)!=null&&m.oidc?(h(),Q(p,{key:0,outline:"","text-color":"white",loading:a.value,disable:a.value||r.value,class:"focus:tw-ring-2 tw-mb-6 focus:tw-ring-offset-2 tw-font-semibold tw-leading-none tw-text-black tw-outline-non tw-border tw-rounded tw-py-2 tw-w-full",onClick:k},{default:_(()=>[T]),_:1},8,["loading","disable"])):A("",!0),X,J,n(j,{onSubmit:q,onReset:I},{default:_(()=>[o("div",null,[K,n(y,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=g=>l.value=g),dense:"",type:"text",square:"",filled:""},null,8,["modelValue"])]),o("div",Y,[Z,n(y,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=g=>u.value=g),dense:"",type:"password",square:"",filled:""},null,8,["modelValue"])]),o("div",tt,[n(p,{color:"primary",type:"submit",label:"\u767B\u5F55","text-color":"black",loading:r.value,disable:a.value||r.value,class:"focus:tw-ring-2 focus:tw-ring-offset-2 tw-font-semibold tw-leading-none tw-text-black tw-outline-non tw-border tw-rounded tw-py-2 tw-w-full"},null,8,["loading","disable"]),n(p,{color:"primary",type:"reset",label:"\u91CD\u7F6E",flat:"",class:"tw-text-sm tw-w-full tw-mt-3 tw-border tw-rounded"})])]),_:1})])])])}}});export{ut as default};
