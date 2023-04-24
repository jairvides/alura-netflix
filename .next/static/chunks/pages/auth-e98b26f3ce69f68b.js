(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{2304:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return r(5659)}])},5659:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return g},default:function(){return p}});var l=r(5893),n=r(8433),a=r(7294),s=r(3299),i=r(1163),o=r(1872),c=r(9583);let u=e=>{let{id:t,onChange:r,value:n,label:a,type:s}=e;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("input",{onChange:r,value:n,type:s,id:t,className:" block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1 ",placeholder:" "}),(0,l.jsx)("label",{htmlFor:t,className:" absolute  text-md text-zinc-400 duration-150  transform  -translate-y-3  scale-75  top-4  z-10  origin-[0]  left-6 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3 ",children:a})]})},d=()=>{let e=(0,i.useRouter)(),[t,r]=(0,a.useState)(""),[d,g]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),[f,m]=(0,a.useState)("login"),x=(0,a.useCallback)(()=>{m(e=>"login"===e?"register":"login")},[]),b=(0,a.useCallback)(async()=>{try{await (0,s.signIn)("credentials",{email:t,password:p,redirect:!1,callbackUrl:"/"}),e.push("/profiles")}catch(e){console.log(e)}},[t,p,e]),v=(0,a.useCallback)(async()=>{try{await n.Z.post("/api/register",{email:t,name:d,password:p}),b()}catch(e){console.log(e)}},[t,d,p,b]);return(0,l.jsx)("div",{className:"relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover",children:(0,l.jsxs)("div",{className:"bg-black w-full h-full lg:bg-opacity-50",children:[(0,l.jsx)("nav",{className:"px-12 py-5",children:(0,l.jsx)("img",{src:"/images/logo.png",className:"h-12",alt:"Logo"})}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsxs)("div",{className:"bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full",children:[(0,l.jsx)("h2",{className:"text-white text-4xl mb-8 font-semibold",children:"login"===f?"Sign in":"Register"}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:["register"===f&&(0,l.jsx)(u,{id:"name",type:"text",label:"Username",value:d,onChange:e=>g(e.target.value)}),(0,l.jsx)(u,{id:"email",type:"email",label:"Email address or phone number",value:t,onChange:e=>r(e.target.value)}),(0,l.jsx)(u,{type:"password",id:"password",label:"Password",value:p,onChange:e=>h(e.target.value)})]}),(0,l.jsx)("button",{onClick:"login"===f?b:v,className:"bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition",children:"login"===f?"Login":"Sign up"}),(0,l.jsxs)("div",{className:"flex flex-row items-center gap-4 mt-8 justify-center",children:[(0,l.jsx)("div",{onClick:()=>(0,s.signIn)("google",{callbackUrl:"/profiles"}),className:"w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition",children:(0,l.jsx)(o.JM8,{size:32})}),(0,l.jsx)("div",{onClick:()=>(0,s.signIn)("github",{callbackUrl:"/profiles"}),className:"w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition",children:(0,l.jsx)(c.hJX,{size:32})})]}),(0,l.jsxs)("p",{className:"text-neutral-500 mt-12",children:["login"===f?"First time using Netflix?":"Already have an account?",(0,l.jsx)("span",{onClick:x,className:"text-white ml-1 hover:underline cursor-pointer",children:"login"===f?"Create an account":"Login"}),"."]})]})})]})})};var g=!0,p=d},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return o}});var l=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r};function o(e){return function(t){return l.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return l.createElement(t.tag,s({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,n=e.attr,a=e.size,o=e.title,c=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return void 0!==a?l.createElement(a.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[994,445,172,774,888,179],function(){return e(e.s=2304)}),_N_E=e.O()}]);