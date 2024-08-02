"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"taskqueued",title:"18. TaskQueued \u9759\u6001\u7c7b",sidebar_label:"18. TaskQueued \u9759\u6001\u7c7b"},u=void 0,i={unversionedId:"global/taskqueued",id:"global/taskqueued",title:"18. TaskQueued \u9759\u6001\u7c7b",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 4.8.3 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/global/taskqueued.mdx",sourceDirName:"global",slug:"/global/taskqueued",permalink:"/docs/global/taskqueued",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/taskqueued.mdx",tags:[],version:"current",frontMatter:{id:"taskqueued",title:"18. TaskQueued \u9759\u6001\u7c7b",sidebar_label:"18. TaskQueued \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"17. Schedular \u9759\u6001\u7c7b",permalink:"/docs/global/schedular"},next:{title:"19. Native \u9759\u6001\u7c7b",permalink:"/docs/global/native"}},l={},s=[{value:"18.1 \u540c\u6b65\u5165\u961f",id:"181-\u540c\u6b65\u5165\u961f",level:2},{value:"18.2 \u5f02\u6b65\u5165\u961f",id:"182-\u5f02\u6b65\u5165\u961f",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 4.8.3 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("h2",{id:"181-\u540c\u6b65\u5165\u961f"},"18.1 \u540c\u6b65\u5165\u961f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"TaskQueued.Enqueue((provider) => {}, [delay]);\nTaskQueued.Enqueue((provider) => {}, cronExpression, [format]);\n")),(0,a.kt)("h2",{id:"182-\u5f02\u6b65\u5165\u961f"},"18.2 \u5f02\u6b65\u5165\u961f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"await TaskQueued.EnqueueAsync(async (provider, token) => {}, [delay]);\nawait TaskQueued.EnqueueAsync(async (provider, token) => {}, cronExpression, [format]);\n")))}d.isMDXComponent=!0}}]);