var ne=Object.defineProperty,ie=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var x=(e,t,a)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))se.call(t,a)&&x(e,a,t[a]);if(E)for(var a of E(t))re.call(t,a)&&x(e,a,t[a]);return e},b=(e,t)=>ie(e,le(t));import{a as ue,r as H,c as m,w as A,S as j,ab as q,a9 as D,h as M,T as ce,g as de,b as fe,X as ve}from"./index.5ec8700f.js";import{u as he,v as L,b as me,d as ge,a as Te,r as Q,s as ye,c as W,p as N,e as pe}from"./QList.4cf87a77.js";import{h as be,i as Se,j as Pe,u as we,c as Oe,k as ke,l as Ce,m as Ee,g as xe}from"./QDialog.edcd1b2f.js";var De=ue({name:"QTooltip",inheritAttrs:!1,props:b(f(f(f({},he),be),Se),{maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:L},self:{type:String,default:"top middle",validator:L},offset:{type:Array,default:()=>[14,14],validator:me},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}}),emits:[...Pe],setup(e,{slots:t,emit:a,attrs:g}){let s,r;const T=de(),{proxy:{$q:n}}=T,u=H(null),v=H(!1),R=m(()=>N(e.anchor,n.lang.rtl)),_=m(()=>N(e.self,n.lang.rtl)),B=m(()=>e.persistent!==!0),{registerTick:I,removeTick:U}=we(),{registerTimeout:h}=Oe(),{transitionProps:V,transitionStyle:X}=ke(e),{localScrollTarget:S,changeScrollEvent:$,unconfigureScrollTarget:z}=ge(e,k),{anchorEl:i,canShow:F,anchorEvents:c}=Te({showing:v,configureAnchorEl:te}),{show:G,hide:y}=Ce({showing:v,canShow:F,handleShow:K,handleHide:Y,hideOnRouteChange:B,processOnMount:!0});Object.assign(c,{delayShow:Z,delayHide:ee});const{showPortal:P,hidePortal:w,renderPortal:J}=Ee(T,u,ae,"tooltip");if(n.platform.is.mobile===!0){const o={anchorEl:i,innerRef:u,onClickOutside(l){return y(l),l.target.classList.contains("q-dialog__backdrop")&&ve(l),!0}},p=m(()=>e.modelValue===null&&e.persistent!==!0&&v.value===!0);A(p,l=>{(l===!0?pe:Q)(o)}),j(()=>{Q(o)})}function K(o){P(),I(()=>{r=new MutationObserver(()=>d()),r.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),d(),k()}),s===void 0&&(s=A(()=>n.screen.width+"|"+n.screen.height+"|"+e.self+"|"+e.anchor+"|"+n.lang.rtl,d)),h(()=>{P(!0),a("show",o)},e.transitionDuration)}function Y(o){U(),w(),O(),h(()=>{w(!0),a("hide",o)},e.transitionDuration)}function O(){r!==void 0&&(r.disconnect(),r=void 0),s!==void 0&&(s(),s=void 0),z(),q(c,"tooltipTemp")}function d(){ye({targetEl:u.value,offset:e.offset,anchorEl:i.value,anchorOrigin:R.value,selfOrigin:_.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Z(o){if(n.platform.is.mobile===!0){W(),document.body.classList.add("non-selectable");const p=i.value,l=["touchmove","touchcancel","touchend","click"].map(C=>[p,C,"delayHide","passiveCapture"]);D(c,"tooltipTemp",l)}h(()=>{G(o)},e.delay)}function ee(o){n.platform.is.mobile===!0&&(q(c,"tooltipTemp"),W(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),h(()=>{y(o)},e.hideDelay)}function te(){if(e.noParentEvent===!0||i.value===null)return;const o=n.platform.is.mobile===!0?[[i.value,"touchstart","delayShow","passive"]]:[[i.value,"mouseenter","delayShow","passive"],[i.value,"mouseleave","delayHide","passive"]];D(c,"anchor",o)}function k(){if(i.value!==null||e.scrollTarget!==void 0){S.value=xe(i.value,e.scrollTarget);const o=e.noParentEvent===!0?d:y;$(S.value,o)}}function oe(){return v.value===!0?M("div",b(f({},g),{ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",g.class],style:[g.style,X.value],role:"tooltip"}),fe(t.default)):null}function ae(){return M(ce,V.value,oe)}return j(O),Object.assign(T.proxy,{updatePosition:d}),J}});export{De as Q};
