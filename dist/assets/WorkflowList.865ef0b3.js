var Z=Object.defineProperty;var N=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var R=(i,s,e)=>s in i?Z(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e,z=(i,s)=>{for(var e in s||(s={}))ee.call(s,e)&&R(i,e,s[e]);if(N)for(var e of N(s))te.call(s,e)&&R(i,e,s[e]);return i};import{j as Q,c as C,B as oe,u as G,l as p,m as x,z as w,A as H,r as y,w as $,q as r,s as o,E as I,N as J,F as b,I as V,J as D,Q as A,x as g,cF as le,cG as ae,cH as se,f as q,c3 as S,D as K,o as re,aw as ue,bp as O,aI as U,y as E,t as W}from"./index.5ec8700f.js";import{Q as ne}from"./QSpace.e26a9c1a.js";import{Q as ie}from"./QBadge.ed56e1da.js";import{Q as X}from"./QList.4cf87a77.js";import{a as de,Q as we}from"./QInfiniteScroll.933e2c87.js";import{Q as ce}from"./QScrollArea.57b397e6.js";import{d as fe,b as L,c as T,a as M}from"./QChip.c2da4ffa.js";import{C as P}from"./ClosePopup.8ed963a1.js";import{_ as Y}from"./Confirm.bfd42214.js";import{a as j,b as me,Q as pe}from"./QDialog.edcd1b2f.js";import{Q as ve}from"./QInput.97ddf781.js";import{Q as _e}from"./QCardActions.7fb658c5.js";import{f as ke}from"./datetime.561112b0.js";import{t as ge,b as ye}from"./thumbStyle.856de4cb.js";import"./focus-manager.841850e4.js";import"./use-key-composition.03ec09d4.js";import"./touch.f613f138.js";import"./format.865294d5.js";const he=Q({props:{workflowId:{type:Number,required:!0},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:s}){const e=i,d=C({get:()=>e.modelValue,set:h=>s("update:modelValue",h)}),_=oe(),c=G(),l=C(()=>c.state.WorkFlow.workflows.get(e.workflowId));async function a(h){c.commit("cleanError"),await c.dispatch("WorkFlow/deleteWorkFlow",{id:h}),c.state.Root.currentError===void 0&&(_.push({name:"workflows"}),d.value=!1)}return(h,f)=>{var v;return p(),x(Y,{modelValue:w(d),"onUpdate:modelValue":f[0]||(f[0]=F=>H(d)?d.value=F:null),content:"\u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1\u7F16\u6392 "+((v=w(l))==null?void 0:v.title)+" ?",type:"warning",onConfirm:f[1]||(f[1]=F=>w(l)&&a(w(l).id))},null,8,["modelValue","content"])}}}),be=g("div",{class:"text-h6"},"\u4EFB\u52A1\u7F16\u6392\u4EBA\u5458\u7BA1\u7406",-1),xe=b(" \u6DFB\u52A0 "),Fe=Q({props:{workflowId:{type:Number,default:0},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:s}){const e=i,d=C({get:()=>e.modelValue,set:u=>s("update:modelValue",u)}),_=y([]);async function c(){_.value=await le(e.workflowId)}$(()=>[e.workflowId,d.value],async([,u])=>{u&&c(),l.value=""});const l=y(""),a=y(!1);async function h(){a.value=!0;try{await ae(e.workflowId,l.value),l.value="",await c()}finally{a.value=!1}}const f=y(),v=y(!1);function F(u){f.value=u,v.value=!0}function B(){f.value=void 0,v.value=!1}async function t(u){a.value=!0;try{await se(e.workflowId,u.id),await c()}finally{a.value=!1}}return(u,m)=>(p(),x(pe,{modelValue:w(d),"onUpdate:modelValue":m[3]||(m[3]=n=>H(d)?d.value=n:null)},{default:r(()=>{var n;return[o(Y,{modelValue:v.value,"onUpdate:modelValue":m[0]||(m[0]=k=>v.value=k),type:"warning",content:`\u786E\u5B9A\u8981\u79FB\u9664\u7528\u6237 ${(n=f.value)==null?void 0:n.name} \u5417\uFF1F`,onConfirm:m[1]||(m[1]=k=>f.value&&t(f.value).then(B))},null,8,["modelValue","content"]),o(me,{class:"tw-w-96 q-pa-sm"},{default:r(()=>[o(j,null,{default:r(()=>[be]),_:1}),o(j,null,{default:r(()=>[(p(!0),I(D,null,J(_.value,k=>(p(),x(fe,{key:k.id,removable:"",color:"primary","text-color":"black",onRemove:Le=>F(k)},{default:r(()=>[b(V(k.name),1)]),_:2},1032,["onRemove"]))),128))]),_:1}),o(_e,null,{default:r(()=>[o(ve,{modelValue:l.value,"onUpdate:modelValue":m[2]||(m[2]=k=>l.value=k),class:"tw-w-full",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5E10\u53F7"},{append:r(()=>[o(A,{loading:a.value,flat:"",icon:"add","text-color":"primary",onClick:h},{default:r(()=>[xe]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]}),_:1},8,["modelValue"]))}}),Ve=b("\u4EBA\u5458\u7BA1\u7406"),Ie=b("\u5220\u9664"),Ce=Q({props:{workflowId:{type:Number,required:!0}},setup(i){const s=i,e=y(!1),d=y(!1),_=y(!1);return(c,l)=>(p(),I(D,null,[o(he,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=a=>d.value=a),"workflow-id":s.workflowId},null,8,["modelValue","workflow-id"]),o(Fe,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=a=>_.value=a),"workflow-id":s.workflowId},null,8,["modelValue","workflow-id"]),o(de,{modelValue:e.value,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value=a),dense:"",flat:"","dropdown-icon":"more_horiz","no-icon-animation":"",onClick:l[5]||(l[5]=S(()=>{},["stop","prevent"]))},{default:r(()=>[o(X,{dense:""},{default:r(()=>[q((p(),x(M,{clickable:"",class:"hover:tw-bg-primary hover:tw-text-black",onClick:l[2]||(l[2]=S(a=>_.value=!0,["stop"]))},{default:r(()=>[o(L,null,{default:r(()=>[o(T,null,{default:r(()=>[Ve]),_:1})]),_:1})]),_:1})),[[P]]),q((p(),x(M,{clickable:"",class:"hover:tw-bg-primary hover:tw-text-black",onClick:l[3]||(l[3]=S(a=>d.value=!0,["stop"]))},{default:r(()=>[o(L,null,{default:r(()=>[o(T,null,{default:r(()=>[Ie]),_:1})]),_:1})]),_:1})),[[P]])]),_:1})]),_:1},8,["modelValue"])],64))}});const Qe={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},Be={class:"q-pa-md tw-flex tw-flex-row-reverse tw-gap-4"},Se={class:"tw-w-full tw-grow tw-overflow-hidden tw-min-w-[280px]"},Ee={class:"tw-w-full tw-flex tw-gap-4 tw-overflow-hidden tw-px-[10px] tw-pt-[10px]"},$e={class:"tw-text-ellipsis tw-w-auto tw-truncate tw-gap-1"},Ae={class:"task__remark"},Ue={class:"task__bottom-box"},We={class:"task__bottom-time"},De={key:1,class:"tw-w-full tw-text-center tw-m-auto tw-text-gray-500"},Ne=b(" \u6682\u65E0\u6570\u636E "),Re=Q({props:{orgId:{type:String,required:!0}},setup(i){const s=i,e=G(),d=K(),_=y(),c=C(()=>e.state.WorkFlow.loadingWorkflows);e.commit("WorkFlow/clearWorkFlows"),$(()=>d.name,t=>{(t==null?void 0:t.toString())==="workflows"&&v()});function l(t){const u=_.value;if(u===void 0)throw new Error("scroll-area instance is missing");const m=Array.from(a.value.keys()),n=m.findIndex(k=>k===t);setTimeout(()=>{if(n<0)u.setScrollPercentage("vertical",1);else{const k=1*n/m.length*u.getScroll().verticalSize-50;u.setScrollPosition("vertical",k)}},100)}re(async()=>{e.watch(t=>[t.Root.eventWorkFlow],([t])=>{if(!t)return;const u=a.value.get(t.workFlowId);u!==void 0&&e.commit("notifySuccess",{message:`\u4EFB\u52A1\u7F16\u6392 ${u.title} \u5F53\u524D\u72B6\u6001: ${t.status}`}),v()}),$(()=>[a.value],()=>{const t=Number(d.params.workflowId);t!==0&&!isNaN(t)&&l(t)},{deep:!0}),v()});const a=C(()=>e.state.WorkFlow.workflows);async function h(t,u){if(t===1)return;f.page=t,(await v()).length<f.pageSize?u(!0):u(!1)}const f=ue({page:1,pageSize:15});async function v(){const[t]=await e.dispatch("WorkFlow/fetchWorkFlows",z({orgId:s.orgId},f));return t}function F(t){return t.id===Number(d.params.workflowId||0)}function B(t){return t.state&&t.state.status==="running"}return(t,u)=>{const m=O("router-link");return p(),I("div",Qe,[g("div",Be,[o(A,{flat:"",loading:w(c),icon:"refresh",onClick:v},null,8,["loading"]),o(A,{flat:"",icon:"add",to:{name:"create_workflow"}})]),g("div",Se,[o(w(ce),{ref_key:"scrollArea",ref:_,visible:"","thumb-style":w(ge),"bar-style":w(ye),class:"tw-w-full tw-h-full tw-px-[15px]"},{default:r(()=>[o(w(we),{class:"tw-w-full tw-h-full",offset:100,onLoad:h},{default:r(()=>[w(a)&&w(a).size>0?(p(),x(X,{key:0,class:"tw-flex tw-flex-col tw-gap-2 tw-pb-4"},{default:r(()=>[(p(!0),I(D,null,J(w(a),([,n])=>(p(),x(m,{key:n.id,to:{name:"workflow",params:{workflowId:n.id}}},{default:r(()=>[g("div",{class:U((F(n)?"tw-bg-primary tw-text-black ":"tw-bg-[#27272a] ")+"tw-w-full tw-min-h-[130px] tw-rounded-md tw-box-border tw-relative tw-overflow-hidden tw-block hover:tw-bg-primary hover:tw-text-black")},[g("div",Ee,[g("div",$e,[o(E,{name:"schedule",class:"tw-inline"}),b(" "+V(n.cronExpr),1)]),o(ne),o(ie,{outline:"",color:n.status===1?"green":"red",class:"tw-w-[50px]"},{default:r(()=>[b(V(B(n)?"\u6267\u884C\u4E2D":n.status==1?"\u8C03\u5EA6\u4E2D":"\u5DF2\u7EC8\u6B62"),1)]),_:2},1032,["color"])]),g("div",{class:U((F(n)?"active ":"")+"task__title tw-inline-flex tw-items-center")},[o(E,{name:"numbers"}),b(" "+V(n.title),1)],2),g("div",Ae,V(n.remark||"-"),1),g("div",Ue,[g("div",We,V(w(ke)(n.createTime*1e3)),1),o(Ce,{"workflow-id":n.id},null,8,["workflow-id"])])],2)]),_:2},1032,["to"]))),128))]),_:1})):W("",!0),!w(c)&&(!w(a)||w(a).size===0)?(p(),I("div",De,[o(E,{name:"outlet",style:{"font-size":"3rem"}}),Ne])):W("",!0)]),_:1})]),_:1},8,["thumb-style","bar-style"])])])}}}),ze={class:"lg:q-pa-md tw-box-border tw-flex tw-flex-row tw-gap-4 tw-h-full tw-w-full"},qe={class:"tw-w-full tw-h-full tw-grow tw-overflow-hidden"},ut=Q({props:{orgId:{type:String,required:!0}},setup(i){const s=K(),e=C(()=>s.name&&s.name.toString()!=="workflows"?"tw-hidden lg:tw-block":"");return(d,_)=>{const c=O("router-view");return p(),I("div",ze,[g("div",{class:U("xl:tw-basis-1/5 lg:tw-basis-1/4  tw-h-full tw-w-full tw-shrink-0 "+w(e))},[i.orgId?(p(),x(Re,{key:0,"org-id":i.orgId},null,8,["org-id"])):W("",!0)],2),g("div",qe,[o(c)])])}}});export{ut as default};
