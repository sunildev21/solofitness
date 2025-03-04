import{m as c,j as e,L as g,$ as x}from"./app-6d1Gf0_J.js";import{T as l,I as o}from"./TextInput-DAOVnTL_.js";import{I as n}from"./InputLabel-CESLNDlx.js";import{P as h}from"./PrimaryButton-DQGU27a_.js";import{G as p}from"./GuestLayout-D1DQluNl.js";function y(){const{data:s,setData:t,post:m,processing:i,errors:a,reset:u}=c({name:"",email:"",password:"",password_confirmation:"",age:"",weight:"",physique_structure:""}),d=r=>{r.preventDefault(),m(route("register"),{onFinish:()=>u("password","password_confirmation")})};return e.jsxs(p,{children:[e.jsx(g,{title:"Hunter Registration"}),e.jsxs("div",{className:"p-6 bg-gray-800 border border-green-500 shadow-lg shadow-green-500/50 rounded-lg",children:[e.jsx("h1",{className:"text-2xl font-bold text-green-400 mb-4 text-center",children:"Register as a Hunter"}),e.jsx("p",{className:"text-green-400 mb-6 text-center",children:"The System requires your stats, Hunter."}),e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"name",value:"Hunter Name",className:"text-green-400"}),e.jsx(l,{id:"name",name:"name",value:s.name,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",autoComplete:"name",isFocused:!0,onChange:r=>t("name",r.target.value),required:!0}),e.jsx(o,{message:a.name,className:"mt-2 text-red-500"})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Hunter ID (Email)",className:"text-green-400"}),e.jsx(l,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",autoComplete:"username",onChange:r=>t("email",r.target.value),required:!0}),e.jsx(o,{message:a.email,className:"mt-2 text-red-500"})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"password",value:"Access Code (Password)",className:"text-green-400"}),e.jsx(l,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",autoComplete:"new-password",onChange:r=>t("password",r.target.value),required:!0}),e.jsx(o,{message:a.password,className:"mt-2 text-red-500"})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Access Code",className:"text-green-400"}),e.jsx(l,{id:"password_confirmation",type:"password",name:"password_confirmation",value:s.password_confirmation,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",autoComplete:"new-password",onChange:r=>t("password_confirmation",r.target.value),required:!0}),e.jsx(o,{message:a.password_confirmation,className:"mt-2 text-red-500"})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"age",value:"Age",className:"text-green-400"}),e.jsx(l,{id:"age",type:"number",name:"age",value:s.age,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",onChange:r=>t("age",r.target.value),required:!0}),e.jsx(o,{message:a.age,className:"mt-2 text-red-500"})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"weight",value:"Weight (kg)",className:"text-green-400"}),e.jsx(l,{id:"weight",type:"number",name:"weight",value:s.weight,step:"0.1",className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",onChange:r=>t("weight",r.target.value),required:!0}),e.jsx(o,{message:a.weight,className:"mt-2 text-red-500"})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx(n,{htmlFor:"physique_structure",value:"Physique Structure",className:"text-green-400"}),e.jsxs("select",{id:"physique_structure",name:"physique_structure",value:s.physique_structure,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500 rounded-md",onChange:r=>t("physique_structure",r.target.value),required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select your build"}),e.jsx("option",{value:"ectomorph",children:"Ectomorph (Slim, lean)"}),e.jsx("option",{value:"mesomorph",children:"Mesomorph (Muscular, athletic)"}),e.jsx("option",{value:"endomorph",children:"Endomorph (Stocky, broader)"})]}),e.jsx(o,{message:a.physique_structure,className:"mt-2 text-red-500"})]})]}),e.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[e.jsx(x,{href:route("login"),className:"text-sm text-green-400 underline hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500",children:"Already a Hunter?"}),e.jsx(h,{className:`ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${i?"opacity-50 cursor-not-allowed":""}`,disabled:i,children:"Join the Hunt"})]})]})]})]})}export{y as default};
