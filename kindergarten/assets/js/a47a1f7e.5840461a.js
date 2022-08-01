"use strict";(self.webpackChunkkindergarten=self.webpackChunkkindergarten||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},l="Edit Profile",a={unversionedId:"user/edit-profile",id:"user/edit-profile",title:"Edit Profile",description:"This is resource for editing Profile info.",source:"@site/docs/user/edit-profile.md",sourceDirName:"user",slug:"/user/edit-profile",permalink:"/kindergarten/user/edit-profile",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edit Account",permalink:"/kindergarten/user/edit-account"},next:{title:"Delete Account",permalink:"/kindergarten/user/delete-account"}},p={},s=[{value:"Endpoint",id:"endpoint",level:3},{value:"Accepted Params:",id:"accepted-params",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response",id:"response",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edit-profile"},"Edit Profile"),(0,i.kt)("p",null,"This is resource for editing Profile info."),(0,i.kt)("p",null,"User must be ",(0,i.kt)("strong",{parentName:"p"},"authenticated")," for this action"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"User: src\\entities\\User\\User.entity.ts")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Profile: src\\entities\\Profile\\Profile.entity.ts")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Controller: src\\controllers\\User\\User.controller.ts")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Method: updateProfile")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," ",(0,i.kt)("inlineCode",{parentName:"p"},"{{url}}/users/me/profile")),(0,i.kt)("h3",{id:"accepted-params"},"Accepted Params:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"phone: string")," - optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mobile: string")," - optional"),(0,i.kt)("p",null,"Address:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"street: string")," - optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"zip: number")," - optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"city: string")," - optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"country: string")," - optional"),(0,i.kt)("h3",{id:"request-body"},"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "phone": "111111",\n  "mobile": "222222",\n  "address": {\n    "street": "New Street",\n    "zip": 1001,\n    "city": "New city",\n    "country": "New Country"\n  }\n}\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 14,\n  "email": "user@gmail.com",\n  "firstName": "John",\n  "lastName": "Doe",\n  "role": "EMPLOYEE",\n  "active": true,\n  "createdAt": "2022-08-01T12:36:45.370Z",\n  "updatedAt": "2022-08-01T12:36:45.405Z",\n  "profile": {\n    "address": {\n      "street": "New Street",\n      "zip": 1001,\n      "city": "New city",\n      "country": "New Country"\n    },\n    "phone": "111111",\n    "mobile": "222222",\n    "profileImage": null\n  }\n}\n')))}u.isMDXComponent=!0}}]);