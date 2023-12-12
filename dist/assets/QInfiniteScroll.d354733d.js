var J=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var j=(e,n,a)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,c=(e,n)=>{for(var a in n||(n={}))Y.call(n,a)&&j(e,a,n[a]);if(_)for(var a of _(n))Z.call(n,a)&&j(e,a,n[a]);return e},S=(e,n)=>K(e,X(n));import{a as V,c as w,h as f,g as O,db as $,cq as p,r as q,ac as ee,w as m,t as z,G as te,Q as k,i as G,dc as ne,az as ae,aj as le,ai as oe,a3 as ie,cE as re,av as ue,dd as I,n as N,aw as M,aC as T,au as se,de as R,aA as de}from"./index.76eeaa00.js";import{Q as ce}from"./QChip.037ad628.js";var fe=V({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const a=w(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${i.length!==0?" "+i:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>f("div",{class:a.value},O(n.default))}});const ve=Object.keys($),ge=e=>ve.reduce((n,a)=>{const i=e[a];return i!==void 0&&(n[a]=i),n},{});var we=V({name:"QBtnDropdown",props:S(c(c({},$),p),{modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String}),emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:n,emit:a}){const{proxy:i}=G(),o=q(e.modelValue),s=q(null),B=ee(),v=w(()=>{const t={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":B,"aria-label":e.toggleAriaLabel||i.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(t["aria-disabled"]="true"),t}),l=w(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),u=w(()=>ne(e)),P=w(()=>ge(e));m(()=>e.modelValue,t=>{s.value!==null&&s.value[t?"show":"hide"]()}),m(()=>e.split,b);function g(t){o.value=!0,a("beforeShow",t)}function y(t){a("show",t),a("update:modelValue",!0)}function Q(t){o.value=!1,a("beforeHide",t)}function x(t){a("hide",t),a("update:modelValue",!1)}function A(t){a("click",t)}function H(t){ae(t),b(),a("click",t)}function L(t){s.value!==null&&s.value.toggle(t)}function D(t){s.value!==null&&s.value.show(t)}function b(t){s.value!==null&&s.value.hide(t)}return Object.assign(i,{show:D,hide:b,toggle:L}),z(()=>{e.modelValue===!0&&D()}),()=>{const t=[f(te,{class:l.value,name:e.dropdownIcon||i.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&t.push(f(ce,{ref:s,id:B,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:g,onShow:y,onBeforeHide:Q,onHide:x},n.default)),e.split===!1?f(k,S(c(c({class:"q-btn-dropdown q-btn-dropdown--simple"},P.value),v.value),{disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:A}),{default:()=>O(n.label,[]).concat(t),loading:n.loading}):f(fe,S(c({class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square},u.value),{glossy:e.glossy,stretch:e.stretch}),()=>[f(k,S(c({class:"q-btn-dropdown--current"},P.value),{disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:H}),{default:n.label,loading:n.loading}),f(k,S(c(c({class:"q-btn-dropdown__arrow-container q-anchor--skip"},v.value),u.value),{disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple}),()=>t)])}}});const{passive:h}=ue;var Be=V({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(e,{slots:n,emit:a}){const i=q(!1),o=q(!0),s=q(null),B=q(null);let v=e.initialIndex||0,l,u;const P=w(()=>"q-infinite-scroll__loading"+(i.value===!0?"":" invisible"));function g(){if(e.disable===!0||i.value===!0||o.value===!1)return;const r=I(l),d=M(l),C=R(l);e.reverse===!1?Math.round(d+C+e.offset)>=Math.round(r)&&y():Math.round(d)<=e.offset&&y()}function y(){if(e.disable===!0||i.value===!0||o.value===!1)return;v++,i.value=!0;const r=I(l);a("load",v,d=>{o.value===!0&&(i.value=!1,N(()=>{if(e.reverse===!0){const C=I(l),W=M(l),F=C-r;T(l,W+F)}d===!0?A():s.value&&s.value.closest("body")&&u()}))})}function Q(){v=0}function x(){o.value===!1&&(o.value=!0,l.addEventListener("scroll",u,h)),g()}function A(){o.value===!0&&(o.value=!1,i.value=!1,l.removeEventListener("scroll",u,h),u!==void 0&&u.cancel!==void 0&&u.cancel())}function H(){if(l&&o.value===!0&&l.removeEventListener("scroll",u,h),l=se(s.value,e.scrollTarget),o.value===!0){if(l.addEventListener("scroll",u,h),e.reverse===!0){const r=I(l),d=R(l);T(l,r-d)}g()}}function L(r){v=r}function D(r){r=parseInt(r,10);const d=u;u=r<=0?g:de(g,isNaN(r)===!0?100:r),l&&o.value===!0&&(d!==void 0&&l.removeEventListener("scroll",d,h),l.addEventListener("scroll",u,h))}function b(r){if(t.value===!0){if(B.value===null){r!==!0&&N(()=>{b(!0)});return}const d=`${i.value===!0?"un":""}pauseAnimations`;Array.from(B.value.getElementsByTagName("svg")).forEach(C=>{C[d]()})}}const t=w(()=>e.disable!==!0&&o.value===!0);m([i,t],()=>{b()}),m(()=>e.disable,r=>{r===!0?A():x()}),m(()=>e.reverse,()=>{i.value===!1&&o.value===!0&&g()}),m(()=>e.scrollTarget,H),m(()=>e.debounce,D);let E=!1;le(()=>{E!==!1&&l&&T(l,E)}),oe(()=>{E=l?M(l):!1}),ie(()=>{o.value===!0&&l.removeEventListener("scroll",u,h)}),z(()=>{D(e.debounce),H(),i.value===!1&&b()});const U=G();return Object.assign(U.proxy,{poll:()=>{u!==void 0&&u()},trigger:y,stop:A,reset:Q,resume:x,setIndex:L}),()=>{const r=re(n.default,[]);return t.value===!0&&r[e.reverse===!1?"push":"unshift"](f("div",{ref:B,class:P.value},O(n.loading))),f("div",{class:"q-infinite-scroll",ref:s},r)}}});export{Be as Q,we as a};
