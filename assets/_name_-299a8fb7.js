import{j as v,k as d,l as _,d as k,u as N,a as h,w as x,r as b,o as c,c as l,e,t as r,f as n,F as g,m as y,h as w,b as C,n as S,p as j,g as V}from"./app-8aa7d0f6.js";const B=v("user",()=>{const t=d(""),a=d(new Set),m=_(()=>Array.from(a.value)),o=_(()=>m.value.filter(u=>u!==t.value));function s(u){t.value&&a.value.add(t.value),t.value=u}return{setNewName:s,otherNames:o,savedName:t}}),L=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),R={"text-sm":"","opacity-75":""},E={key:0,"text-sm":"","mt-4":""},F={"opacity-75":""},$=k({__name:"[name]",props:{name:{type:String,required:!0}},setup(t){const a=t,m=N(),o=B(),{t:s}=h();return x(()=>{o.setNewName(a.name)}),(u,p)=>{const f=b("RouterLink");return c(),l("div",null,[L,e("p",null,r(n(s)("intro.hi",{name:a.name})),1),e("p",R,[e("em",null,r(n(s)("intro.dynamic-route")),1)]),n(o).otherNames.length?(c(),l("p",E,[e("span",F,r(n(s)("intro.aka"))+":",1),e("ul",null,[(c(!0),l(g,null,y(n(o).otherNames,i=>(c(),l("li",{key:i},[C(f,{to:`/hi/${i}`,replace:""},{default:S(()=>[j(r(i),1)]),_:2},1032,["to"])]))),128))])])):w("v-if",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:p[0]||(p[0]=i=>n(m).back())},r(n(s)("button.back")),1)])])}}}),z=V($,[["__file","C:/_nextjsprojects/_angelika_proj/magaz0/src/pages/hi/[name].vue"]]);export{z as default};
