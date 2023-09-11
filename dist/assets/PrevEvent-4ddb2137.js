import{s as r,r as n,j as t,T as o,a as p,E as l,b as d,c as E,g as x,d as v,e as h}from"./index-76fb9d57.js";const j=r.div`
  
`,f=r.div`
  margin-top:0px;
  display: flex;
  flex-wrap:wrap ;
  justify-content: center;
  
`,T=()=>{const[s,c]=n.useState([]);return n.useEffect(()=>{(async()=>{const i=await x(v(h,"pastEvent"));c(i.docs.map(a=>({...a.data(),id:a.id})))})()},[]),console.log(s),t.jsxs(j,{children:[t.jsx(o,{style:{marginTop:"10px"},children:t.jsx(p,{children:"CHECK OUT OUR PAST EVENT"})}),s.length<1&&t.jsx(l,{children:t.jsx(d,{children:"Loading"})}),t.jsx(f,{children:s.slice(0,4).map(e=>t.jsx(E,{item:e},e.id))})]})};export{T as default};
