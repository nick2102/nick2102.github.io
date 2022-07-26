"use strict";(self.webpackChunkkindergarten=self.webpackChunkkindergarten||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Getting Started",slug:"/",sidebar_position:1},o="Getting Started",l={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Instructions for installing and running the project.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/kindergarten/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Auth Resources",permalink:"/kindergarten/category/auth-resources"}},s={},p=[{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Installation",id:"installation",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Instructions for installing and running the project."),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.16 or above"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download/"},"postgresSQL")," database server (Follow official instructions for installation)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.pgadmin.org/download/"},"pgAdmin")," postgres db Client (Follow official instructions for installation)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman")," or some other API Client")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Clone the project to your projects directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="via SSH"',title:'"via','SSH"':!0},"git clone git@github.com:nick2102/kindergarten-track-backend.git\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="via HTTPS"',title:'"via','HTTPS"':!0},"git clone https://github.com/nick2102/kindergarten-track-backend.git\n")),(0,a.kt)("p",null,"In the root directory run :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.kt)("p",null,"To start the server in you terminal run :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create new database in via pgAdmin")),(0,a.kt)("p",null,"While the server is up, run a migration command in the terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migration:up\n")),(0,a.kt)("p",null,"Optionally you can run the migration by calling the request in postman"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="src\\controllers\\Migration\\Migration.controller.ts"',title:'"src\\controllers\\Migration\\Migration.controller.ts"'},"{baseUrl}/migrate/up\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Body: "',title:'"Body:','"':!0},'{\n  "run": "go"\n}\n')),(0,a.kt)("p",null,"Additional migration commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="for creating new migration files"',title:'"for',creating:!0,new:!0,migration:!0,'files"':!0},"npm run migration:generate --name=nameOfMigration\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="for rolling back the last migration"',title:'"for',rolling:!0,back:!0,the:!0,last:!0,'migration"':!0},"npm run migration:down\n")))}u.isMDXComponent=!0}}]);