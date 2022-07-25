"use strict";(self.webpackChunkkindergarten=self.webpackChunkkindergarten||[]).push([[777],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2},o="Sign in",l={unversionedId:"auth/sign-in",id:"auth/sign-in",title:"Sign in",description:"This is resource for signing in into the application.",source:"@site/docs/auth/sign-in.md",sourceDirName:"auth",slug:"/auth/sign-in",permalink:"/kindergarten/auth/sign-in",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Signup",permalink:"/kindergarten/auth/signup"},next:{title:"Sign Out",permalink:"/kindergarten/auth/sign-out"}},p={},s=[{value:"Endpoint",id:"endpoint",level:3},{value:"Accepted Params:",id:"accepted-params",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response",id:"response",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sign-in"},"Sign in"),(0,i.kt)("p",null,"This is resource for signing in into the application."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"User: src\\entities\\User\\User.entity.ts")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Controller: src\\controllers\\Auth\\Auth.controller.ts")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Method: signIn")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"p"},"{{url}}/auth/signin")),(0,i.kt)("h3",{id:"accepted-params"},"Accepted Params:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"email: string")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"password: string")),(0,i.kt)("h3",{id:"request-body"},"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "email" : "user@gmail.com",\n    "password": "Pa$$w0rd"\n}\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user": {\n    "id": 1,\n    "email": "user1@gmail.com",\n    "role": "EMPLOYEE",\n    "createdAt": "2022-07-24T23:56:52.665Z",\n    "updatedAt": "2022-07-24T23:56:52.665Z"\n  },\n  "token": {\n    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2NTg3ODEwNTZ9.xR0n2IMqYccpIbm9V_TkaRmQ9c1r59eXlCrUS7DG7wA",\n    "id": 17,\n    "createdAt": "2022-07-25T20:30:56.523Z"\n  }\n}\n')))}u.isMDXComponent=!0}}]);