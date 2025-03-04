import{j as e,m as x,L as f,$ as h}from"./app-6d1Gf0_J.js";import{T as i,I as l}from"./TextInput-DAOVnTL_.js";import{I as d}from"./InputLabel-CESLNDlx.js";import{P as p}from"./PrimaryButton-DQGU27a_.js";import{G as b}from"./GuestLayout-D1DQluNl.js";function j({className:s="",...t}){return e.jsx("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 "+s})}function C({status:s,canResetPassword:t}){const{data:a,setData:n,post:c,processing:o,errors:m,reset:g}=x({email:"",password:"",remember:!1}),u=r=>{r.preventDefault(),c(route("login"),{onFinish:()=>g("password")})};return e.jsxs(b,{children:[e.jsx(f,{title:"System Login"}),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:e.jsxs("div",{className:"w-full max-w-md p-6 bg-gray-800 border border-green-500 shadow-lg shadow-green-500/50 rounded-lg",children:[e.jsx("h1",{className:"text-2xl font-bold text-green-400 mb-4 text-center",children:"Hunter, Enter Your Credentials"}),s&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-400 text-center",children:s}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(d,{htmlFor:"email",value:"Hunter ID (Email)",className:"text-green-400"}),e.jsx(i,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",autoComplete:"username",isFocused:!0,onChange:r=>n("email",r.target.value)}),e.jsx(l,{message:m.email,className:"mt-2 text-red-500"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(d,{htmlFor:"password",value:"Access Code (Password)",className:"text-green-400"}),e.jsx(i,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500",autoComplete:"current-password",onChange:r=>n("password",r.target.value)}),e.jsx(l,{message:m.password,className:"mt-2 text-red-500"})]}),e.jsxs("div",{className:"mt-4 flex items-center",children:[e.jsx(j,{name:"remember",checked:a.remember,onChange:r=>n("remember",r.target.checked),className:"text-green-500 border-green-500 focus:ring-green-500"}),e.jsx("span",{className:"ml-2 text-sm text-green-400",children:"Remember This Hunter"})]}),e.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[t&&e.jsx(h,{href:route("password.request"),className:"text-sm text-green-400 underline hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500",children:"Forgot Access Code?"}),e.jsx(p,{className:`ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${o?"opacity-50 cursor-not-allowed":""}`,disabled:o,children:"Enter the Gate"})]})]})]})})]})}export{C as default};
