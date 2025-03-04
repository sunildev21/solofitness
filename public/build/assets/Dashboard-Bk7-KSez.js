import{K as m,r as s,j as e,L as x}from"./app-6d1Gf0_J.js";import{A as g}from"./AuthenticatedLayout-uPCBWOhY.js";import"./transition-Cj-bndqN.js";function y(){const{auth:r,flash:t}=m().props,a=r.user,[i,o]=s.useState(!!(t!=null&&t.message)),[n,l]=s.useState(!1);return s.useEffect(()=>{if(t!=null&&t.message){console.log("Flash message received:",t.message);const c=setTimeout(()=>{l(!0)},2e3),p=setTimeout(()=>{o(!1)},2800);return()=>{clearTimeout(c),clearTimeout(p)}}},[t==null?void 0:t.message]),e.jsxs(g,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-green-400",children:"Hunter Dashboard"}),children:[e.jsx(x,{title:"Hunter Dashboard"}),i&&(t==null?void 0:t.message)&&e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:`bg-gray-800 border border-green-500 text-green-400 p-4 rounded-lg shadow-lg shadow-green-500/50 ${n?"glitch-exit":"glitch-static"}`,children:t.message})}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-gray-800 border border-green-500 shadow-lg shadow-green-500/50 sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-100",children:[e.jsxs("h3",{className:"text-2xl font-bold text-green-400 mb-4",children:["Welcome, ",a.name,", ",a.rank,"-Rank Hunter!"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-green-400",children:[e.jsx("span",{className:"font-semibold",children:"Rank:"})," ",a.rank]}),e.jsxs("p",{className:"text-green-400",children:[e.jsx("span",{className:"font-semibold",children:"Level:"})," ",a.level]}),e.jsxs("p",{className:"text-green-400",children:[e.jsx("span",{className:"font-semibold",children:"XP:"})," ",a.xp]})]}),e.jsx("p",{className:"mt-4 text-gray-300",children:"The System has recognized your presence. Prepare for your next quest!"})]})})})}),e.jsx("style",{jsx:!0,children:`
                /* Subtle glitch while visible */
                .glitch-static {
                    position: relative;
                    animation: subtle-glitch 2s linear infinite;
                }

                .glitch-static:before,
                .glitch-static:after {
                    content: '${(t==null?void 0:t.message)||""}';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.5;
                }

                .glitch-static:before {
                    color: #00ff00;
                    animation: glitch-top-subtle 1s linear infinite;
                    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                }

                .glitch-static:after {
                    color: #ff0000;
                    animation: glitch-bottom-subtle 1.5s linear infinite;
                    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                }

                /* Glitch exit animation */
                .glitch-exit {
                    position: relative;
                    animation: glitch-exit 0.8s linear forwards;
                }

                .glitch-exit:before,
                .glitch-exit:after {
                    content: '${(t==null?void 0:t.message)||""}';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .glitch-exit:before {
                    color: #00ff00;
                    animation: glitch-exit-top 0.8s linear forwards;
                    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                }

                .glitch-exit:after {
                    color: #ff0000;
                    animation: glitch-exit-bottom 0.8s linear forwards;
                    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                }

                /* Subtle glitch keyframes */
                @keyframes subtle-glitch {
                    0%, 100% { transform: translate(0, 0); }
                    10%, 30%, 50% { transform: translate(1px, 0); }
                    20%, 40% { transform: translate(-1px, 0); }
                }

                @keyframes glitch-top-subtle {
                    0%, 100% { transform: translate(0, 0); }
                    15% { transform: translate(2px, -1px); }
                    25% { transform: translate(-2px, 1px); }
                }

                @keyframes glitch-bottom-subtle {
                    0%, 100% { transform: translate(0, 0); }
                    15% { transform: translate(-2px, 1px); }
                    25% { transform: translate(2px, -1px); }
                }

                /* Glitch exit keyframes */
                @keyframes glitch-exit {
                    0% { transform: translate(0, 0); opacity: 1; }
                    20% { transform: translate(3px, -2px) skew(5deg); }
                    40% { transform: translate(-3px, 2px) skew(-5deg); }
                    60% { transform: translate(5px, -3px) skew(10deg); opacity: 0.8; }
                    80% { transform: translate(-5px, 3px) skew(-10deg); opacity: 0.4; }
                    100% { transform: translate(0, 0); opacity: 0; }
                }

                @keyframes glitch-exit-top {
                    0% { transform: translate(0, 0); opacity: 0.5; }
                    20% { transform: translate(5px, -3px); }
                    40% { transform: translate(-5px, 3px); }
                    60% { transform: translate(8px, -5px); opacity: 0.3; }
                    80% { transform: translate(-8px, 5px); opacity: 0.1; }
                    100% { transform: translate(0, 0); opacity: 0; }
                }

                @keyframes glitch-exit-bottom {
                    0% { transform: translate(0, 0); opacity: 0.5; }
                    20% { transform: translate(-5px, 3px); }
                    40% { transform: translate(5px, -3px); }
                    60% { transform: translate(-8px, 5px); opacity: 0.3; }
                    80% { transform: translate(8px, -5px); opacity: 0.1; }
                    100% { transform: translate(0, 0); opacity: 0; }
                }
            `})]})}export{y as default};
