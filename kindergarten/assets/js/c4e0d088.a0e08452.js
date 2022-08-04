"use strict";(self.webpackChunkkindergarten=self.webpackChunkkindergarten||[]).push([[373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Update User by id",l={unversionedId:"admin/update-user",id:"admin/update-user",title:"Update User by id",description:"This is resource for updating user account by id.",source:"@site/docs/admin/update-user.md",sourceDirName:"admin",slug:"/admin/update-user",permalink:"/kindergarten/admin/update-user",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create user",permalink:"/kindergarten/admin/create-user"},next:{title:"Update User Profile by id",permalink:"/kindergarten/admin/update-user-profile"}},p={},s=[{value:"Endpoint",id:"endpoint",level:3},{value:"Accepted Params:",id:"accepted-params",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response",id:"response",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-user-by-id"},"Update User by id"),(0,a.kt)("p",null,"This is resource for updating user account by id."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"User: src\\entities\\User\\User.entity.ts")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Controller: src\\controllers\\Admin\\Admin.controller.ts")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Method: updateUser")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," ",(0,a.kt)("inlineCode",{parentName:"p"},"{{url}}/admin/user/:id")),(0,a.kt)("h3",{id:"accepted-params"},"Accepted Params:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"password: string")," - optional"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"firstName: string")," - optional"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lastName: string")," - optional"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"role: string (ADMIN | EMPLOYEE | USER)")," - optional"),(0,a.kt)("h3",{id:"request-body"},"Request Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "password": "Pa$$w0rd",\n  "firstName": "John",\n  "lastName" : "Doe",\n  "role": "EMPLOYEE"\n}\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 14,\n  "email": "user@gmail.com",\n  "firstName": "John",\n  "lastName": "Doe",\n  "role": "ADMIN",\n  "active": true,\n  "createdAt": "2022-08-01T12:36:45.370Z",\n  "updatedAt": "2022-08-01T12:44:42.629Z",\n  "profile": {\n    "address": null,\n    "phone": null,\n    "mobile": null,\n    "profileImage": null,\n    "createdAt": "2022-08-03T00:20:56.464Z",\n    "updatedAt": "2022-08-03T00:20:56.464Z"\n  }\n}\n')))}u.isMDXComponent=!0}}]);