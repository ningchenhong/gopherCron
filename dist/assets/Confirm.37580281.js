import{_ as m,d as C,c as p,r as v,a as g,b,e as a,f as o,Q as y,Y as k,i as V,R as h,v as w,n as x,C as B,j as s,x as Q,s as S,y as _,z as D}from"./index.8f86c916.js";const L={class:"q-ml-sm"},A=C({props:{modelValue:{type:Boolean,default:!1},content:{type:String,default:""},confirmLabel:{type:String,default:"\u786E\u8BA4"},cancelLabel:{type:String,default:"\u53D6\u6D88"},type:{type:String,default:"confirm"},loading:{type:Boolean,default:!1}},emits:["update:modelValue","confirm","cancel"],setup(l,{emit:n}){const t=l,c=p({get:()=>t.modelValue,set:r=>n("update:modelValue",r)}),u=()=>{n("confirm")},d=()=>{n("cancel")},e=v({confirmColor:"",cancelColor:"",icon:"",iconColor:""});switch(t.type){case"warning":e.value.confirmColor="red",e.value.cancelColor="",e.value.icon="notifications_active",e.value.iconColor="red";break;default:e.value.confirmColor="primary",e.value.cancelColor="",e.value.icon="check",e.value.iconColor="primary";break}return(r,i)=>(g(),b(D,{modelValue:S(c),"onUpdate:modelValue":i[0]||(i[0]=f=>_(c)?c.value=f:null)},{default:a(()=>[o(Q,null,{default:a(()=>[o(y,{class:"row items-center"},{default:a(()=>[o(k,{icon:e.value.icon,color:e.value.iconColor,"text-color":e.value.iconColor==="primary"?"black":"white"},null,8,["icon","color","text-color"]),V("span",L,h(l.content),1)]),_:1}),o(w,{align:"right"},{default:a(()=>[x(o(s,{flat:"",label:l.cancelLabel,color:e.value.cancelColor,onClick:d},null,8,["label","color"]),[[B,!0]]),o(s,{flat:"",label:l.confirmLabel,color:e.value.confirmColor,loading:l.loading,onClick:u},null,8,["label","color","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});var N=m(A,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/Confirm.vue"]]);export{N as C};
