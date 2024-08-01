"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(n),s=a,c=k["".concat(o,".").concat(s)]||k[s]||d[s]||i;return n?l.createElement(c,r(r({ref:t},m),{},{components:n})):l.createElement(c,r({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:a,r[1]=p;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=n(7462),a=(n(7294),n(3905)),i=n(4996);const r={id:"split-db",title:"9.29 \u5206\u8868\u5206\u5e93",sidebar_label:"9.29 \u5206\u8868\u5206\u5e93"},p=void 0,o={unversionedId:"split-db",id:"split-db",title:"9.29 \u5206\u8868\u5206\u5e93",description:"\u672c\u7ae0 9.28.2 \u81f3 9.28.5 \u5c0f\u8282\u632a\u7528\u535a\u4e3b\uff1a\u96e8\u70b9\u7684\u540d\u5b57 \u7684 \u5206\u5e93\u5206\u8868 - \u7406\u8bba \u535a\u5ba2\u5185\u5bb9\u3002\u7279\u6b64\u58f0\u660e\u3002",source:"@site/docs/split-db.mdx",sourceDirName:".",slug:"/split-db",permalink:"/docs/split-db",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/split-db.mdx",tags:[],version:"current",frontMatter:{id:"split-db",title:"9.29 \u5206\u8868\u5206\u5e93",sidebar_label:"9.29 \u5206\u8868\u5206\u5e93"},sidebar:"docs",previous:{title:"9.28 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",permalink:"/docs/dbcontext-read-write"},next:{title:"9.30 EFCore \u6700\u4f73\u5b9e\u8df5",permalink:"/docs/efcore-recommend"}},u={},m=[{value:"9.29.1 \u5e94\u7528\u573a\u666f",id:"9291-\u5e94\u7528\u573a\u666f",level:2},{value:"9.29.2 \u5782\u76f4\u5207\u5206",id:"9292-\u5782\u76f4\u5207\u5206",level:2},{value:"9.29.2.1 \u5782\u76f4\u5206\u5e93",id:"92921-\u5782\u76f4\u5206\u5e93",level:3},{value:"9.29.2.2 \u5782\u76f4\u5206\u8868",id:"92922-\u5782\u76f4\u5206\u8868",level:3},{value:"9.29.2.3 \u4f18\u7f3a\u70b9",id:"92923-\u4f18\u7f3a\u70b9",level:3},{value:"9.29.3 \u6c34\u5e73\u5207\u5206",id:"9293-\u6c34\u5e73\u5207\u5206",level:2},{value:"9.29.3.1 \u6c34\u5e73\u5206\u5e93",id:"92931-\u6c34\u5e73\u5206\u5e93",level:3},{value:"9.29.3.2 \u6c34\u5e73\u5206\u8868",id:"92932-\u6c34\u5e73\u5206\u8868",level:3},{value:"9.29.3.3 \u4f18\u7f3a\u70b9",id:"92933-\u4f18\u7f3a\u70b9",level:3},{value:"9.29.4 \u6570\u636e\u5206\u7247\u89c4\u5219",id:"9294-\u6570\u636e\u5206\u7247\u89c4\u5219",level:2},{value:"9.29.4.1 Hash \u53d6\u6a21\u5206\u8868",id:"92941-hash-\u53d6\u6a21\u5206\u8868",level:3},{value:"9.29.4.2 \u6570\u503c Range \u5206\u8868",id:"92942-\u6570\u503c-range-\u5206\u8868",level:3},{value:"9.29.4.3 \u4e00\u81f4\u6027 Hash \u7b97\u6cd5",id:"92943-\u4e00\u81f4\u6027-hash-\u7b97\u6cd5",level:3},{value:"9.29.5 \u5206\u5e93\u5206\u8868\u5e26\u6765\u7684\u95ee\u9898",id:"9295-\u5206\u5e93\u5206\u8868\u5e26\u6765\u7684\u95ee\u9898",level:2},{value:"9.29.5.1 \u5206\u5e03\u5f0f\u4e8b\u52a1\u95ee\u9898",id:"92951-\u5206\u5e03\u5f0f\u4e8b\u52a1\u95ee\u9898",level:3},{value:"9.29.5.2 \u8de8\u8282\u70b9\u5173\u8054\u67e5\u8be2 Join \u95ee\u9898",id:"92952-\u8de8\u8282\u70b9\u5173\u8054\u67e5\u8be2-join-\u95ee\u9898",level:3},{value:"9.29.5.3 \u8de8\u8282\u70b9\u5206\u9875\u3001\u6392\u5e8f\u3001\u51fd\u6570\u95ee\u9898",id:"92953-\u8de8\u8282\u70b9\u5206\u9875\u6392\u5e8f\u51fd\u6570\u95ee\u9898",level:3},{value:"9.29.5.4 \u5168\u5c40\u4e3b\u952e\u907f\u91cd\u95ee\u9898",id:"92954-\u5168\u5c40\u4e3b\u952e\u907f\u91cd\u95ee\u9898",level:3},{value:"9.29.5.5 \u6570\u636e\u8fc1\u79fb\u95ee\u9898",id:"92955-\u6570\u636e\u8fc1\u79fb\u95ee\u9898",level:3},{value:"9.29.6 \u5982\u4f55\u5b9e\u73b0",id:"9296-\u5982\u4f55\u5b9e\u73b0",level:2},{value:"9.29.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9297-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],k={toc:m},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7279\u6b64\u58f0\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u7ae0 ",(0,a.kt)("inlineCode",{parentName:"p"},"9.28.2")," \u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"9.28.5")," \u5c0f\u8282\u632a\u7528\u535a\u4e3b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/qdhxhz/"},"\u96e8\u70b9\u7684\u540d\u5b57")," \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/qdhxhz/p/11608222.html"},"\u5206\u5e93\u5206\u8868 - \u7406\u8bba")," \u535a\u5ba2\u5185\u5bb9\u3002",(0,a.kt)("strong",{parentName:"p"},"\u7279\u6b64\u58f0\u660e\u3002"))),(0,a.kt)("h2",{id:"9291-\u5e94\u7528\u573a\u666f"},"9.29.1 \u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u91cf\u4e0d\u4e00\u5b9a\u662f\u53ef\u63a7\u7684\uff0c\u5728\u672a\u8fdb\u884c\u5206\u5e93\u5206\u8868\u7684\u60c5\u51b5\u4e0b\uff0c\u968f\u7740\u65f6\u95f4\u548c\u4e1a\u52a1\u7684\u53d1\u5c55\uff0c\u5e93\u4e2d\u7684\u8868\u4f1a\u8d8a\u6765\u8d8a\u591a\uff0c\u8868\u4e2d\u7684\u6570\u636e\u91cf\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u5927\uff0c\u76f8\u5e94\u5730\uff0c\u6570\u636e\u64cd\u4f5c\u589e\u5220\u6539\u67e5\u7684\u5f00\u9500\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u5927\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u7531\u4e8e\u65e0\u6cd5\u8fdb\u884c\u5206\u5e03\u5f0f\u90e8\u7f72\uff0c\u800c\u4e00\u53f0\u670d\u52a1\u5668\u7684\u8d44\u6e90\uff08CPU\u3001\u78c1\u76d8\u3001\u5185\u5b58\u3001IO \u7b49\uff09\u662f\u6709\u9650\u7684\uff0c\u6700\u7ec8\u6570\u636e\u5e93\u6240\u80fd\u627f\u8f7d\u7684\u6570\u636e\u91cf\u3001\u6570\u636e\u5904\u7406\u80fd\u529b\u90fd\u5c06\u906d\u9047\u74f6\u9888\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u5bf9\u6570\u636e\u5e93\u6216\u6570\u636e\u8868\u8fdb\u884c\u62c6\u5206\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u5207\u5206\u53ef\u4ee5\u5206\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u5782\u76f4\u5207\u5206")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6c34\u5e73\u5207\u5206"),"\u3002"),(0,a.kt)("h2",{id:"9292-\u5782\u76f4\u5207\u5206"},"9.29.2 \u5782\u76f4\u5207\u5206"),(0,a.kt)("p",null,"\u5782\u76f4\u5207\u5206\u53c8\u53ef\u4ee5\u5206\u4e3a: \u5782\u76f4\u5206\u5e93\u548c\u5782\u76f4\u5206\u8868\u3002"),(0,a.kt)("h3",{id:"92921-\u5782\u76f4\u5206\u5e93"},"9.29.2.1 \u5782\u76f4\u5206\u5e93"),(0,a.kt)("p",null,'\u6839\u636e\u4e1a\u52a1\u8026\u5408\u6027\uff0c\u5c06\u5173\u8054\u5ea6\u4f4e\u7684\u4e0d\u540c\u8868\u5b58\u50a8\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002\u505a\u6cd5\u4e0e\u5927\u7cfb\u7edf\u62c6\u5206\u4e3a\u591a\u4e2a\u5c0f\u7cfb\u7edf\u7c7b\u4f3c\uff0c\u6309\u4e1a\u52a1\u5206\u7c7b\u8fdb\u884c\u72ec\u7acb\u5212\u5206\u3002\u4e0e"\u5fae\u670d\u52a1\u6cbb\u7406"\u7684\u505a\u6cd5\u76f8\u4f3c\uff0c\u6bcf\u4e2a\u5fae\u670d\u52a1\u4f7f\u7528\u5355\u72ec\u7684\u4e00\u4e2a\u6570\u636e\u5e93\u3002'),(0,a.kt)("img",{src:(0,i.Z)("img/dbsplit1.jpg")}),(0,a.kt)("admonition",{title:"\u8bf4\u660e",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e00\u5f00\u59cb\u6211\u4eec\u662f\u5355\u4f53\u670d\u52a1\uff0c\u6240\u4ee5\u53ea\u6709\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u6240\u6709\u7684\u8868\u90fd\u5728\u8fd9\u4e2a\u5e93\u91cc\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u540e\u6765\u56e0\u4e3a\u4e1a\u52a1\u9700\u6c42,\u5355\u4f53\u670d\u52a1\u53d8\u6210\u5fae\u670d\u52a1\u6cbb\u7406\u3002\u6240\u4ee5\u5c06\u4e4b\u524d\u7684\u4e00\u4e2a\u5546\u54c1\u5e93\uff0c\u62c6\u5206\u6210\u591a\u4e2a\u6570\u636e\u5e93\u3002\u6bcf\u4e2a\u5fae\u670d\u52a1\u5bf9\u4e8e\u4e00\u4e2a\u6570\u636e\u5e93\u3002")),(0,a.kt)("h3",{id:"92922-\u5782\u76f4\u5206\u8868"},"9.29.2.2 \u5782\u76f4\u5206\u8868"),(0,a.kt)("p",null,"\u628a\u4e00\u4e2a\u8868\u7684\u591a\u4e2a\u5b57\u6bb5\u5206\u522b\u62c6\u6210\u591a\u4e2a\u8868\uff0c\u4e00\u822c\u6309\u5b57\u6bb5\u7684\u51b7\u70ed\u62c6\u5206\uff0c\u70ed\u5b57\u6bb5\u4e00\u4e2a\u8868\uff0c\u51b7\u5b57\u6bb5\u4e00\u4e2a\u8868\u3002\u4ece\u800c\u63d0\u5347\u4e86\u6570\u636e\u5e93\u6027\u80fd\u3002"),(0,a.kt)("img",{src:(0,i.Z)("img/dbsplit2.jpg")}),(0,a.kt)("admonition",{title:"\u8bf4\u660e",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e00\u5f00\u59cb\u5546\u54c1\u8868\u4e2d\u5305\u542b\u5546\u54c1\u7684\u6240\u6709\u5b57\u6bb5\uff0c\u4f46\u662f\u6211\u4eec\u53d1\u73b0:"),(0,a.kt)("p",{parentName:"admonition"},"1.\u5546\u54c1\u8be6\u60c5\u548c\u5546\u54c1\u5c5e\u6027\u5b57\u6bb5\u8f83\u957f\u30022.\u5546\u54c1\u5217\u8868\u7684\u65f6\u5019\u6211\u4eec\u662f\u4e0d\u9700\u8981\u663e\u793a\u5546\u54c1\u8be6\u60c5\u548c\u5546\u54c1\u5c5e\u6027\u4fe1\u606f\uff0c\u53ea\u6709\u5728\u70b9\u8fdb\u5546\u54c1\u5546\u54c1\u7684\u65f6\u5019\u624d\u4f1a\u5c55\u793a\u5546\u54c1\u8be6\u60c5\u4fe1\u606f\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\u53ef\u4ee5\u8003\u8651\u628a\u5546\u54c1\u8be6\u60c5\u548c\u5546\u54c1\u5c5e\u6027\u5355\u72ec\u5207\u5206\u4e00\u5f20\u8868\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002")),(0,a.kt)("h3",{id:"92923-\u4f18\u7f3a\u70b9"},"9.29.2.3 \u4f18\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u4e1a\u52a1\u7cfb\u7edf\u5c42\u9762\u7684\u8026\u5408\uff0c\u4e1a\u52a1\u6e05\u6670"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u5fae\u670d\u52a1\u7684\u6cbb\u7406\u7c7b\u4f3c\uff0c\u4e5f\u80fd\u5bf9\u4e0d\u540c\u4e1a\u52a1\u7684\u6570\u636e\u8fdb\u884c\u5206\u7ea7\u7ba1\u7406\u3001\u7ef4\u62a4\u3001\u76d1\u63a7\u3001\u6269\u5c55\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u5782\u76f4\u5207\u5206\u4e00\u5b9a\u7a0b\u5ea6\u7684\u63d0\u5347 IO\u3001\u6570\u636e\u5e93\u8fde\u63a5\u6570\u3001\u5355\u673a\u786c\u4ef6\u8d44\u6e90\u7684\u74f6\u9888"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f3a\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u5e93\u540e\u65e0\u6cd5 Join\uff0c\u53ea\u80fd\u901a\u8fc7\u63a5\u53e3\u805a\u5408\u65b9\u5f0f\u89e3\u51b3\uff0c\u63d0\u5347\u4e86\u5f00\u53d1\u7684\u590d\u6742\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u5e93\u540e\u5206\u5e03\u5f0f\u4e8b\u52a1\u5904\u7406\u590d\u6742"),(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u7136\u5b58\u5728\u5355\u8868\u6570\u636e\u91cf\u8fc7\u5927\u7684\u95ee\u9898\uff08\u9700\u8981\u6c34\u5e73\u5207\u5206\uff09")))),(0,a.kt)("h2",{id:"9293-\u6c34\u5e73\u5207\u5206"},"9.29.3 \u6c34\u5e73\u5207\u5206"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u5e94\u7528\u96be\u4ee5\u518d\u7ec6\u7c92\u5ea6\u7684\u5782\u76f4\u5207\u5206\u6216\u5207\u5206\u540e\u6570\u636e\u91cf\u884c\u6570\u5de8\u5927\uff0c\u5b58\u5728\u5355\u5e93\u8bfb\u5199\u3001\u5b58\u50a8\u6027\u80fd\u74f6\u9888\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u8fdb\u884c\u6c34\u5e73\u5207\u5206\u4e86\u3002"),(0,a.kt)("p",null,"\u6c34\u5e73\u5207\u5206\u4e5f\u53ef\u4ee5\u5206\u4e3a\uff1a\u6c34\u5e73\u5206\u5e93\u548c\u6c34\u5e73\u5206\u8868\u3002"),(0,a.kt)("h3",{id:"92931-\u6c34\u5e73\u5206\u5e93"},"9.29.3.1 \u6c34\u5e73\u5206\u5e93"),(0,a.kt)("p",null,"\u4e0a\u9762\u867d\u7136\u5df2\u7ecf\u628a\u5546\u54c1\u5e93\u5206\u6210 3 \u4e2a\u5e93\uff0c\u4f46\u662f\u968f\u7740\u4e1a\u52a1\u7684\u589e\u52a0\u4e00\u4e2a\u8ba2\u5355\u5e93\u4e5f\u51fa\u73b0 QPS \u8fc7\u9ad8\uff0c\u6570\u636e\u5e93\u54cd\u5e94\u901f\u5ea6\u6765\u4e0d\u53ca\uff0c\u4e00\u822c mysql \u5355\u673a\u4e5f\u5c31 1000 \u5de6\u53f3\u7684 QPS\uff0c\u5982\u679c\u8d85\u8fc7 1000 \u5c31\u8981\u8003\u8651\u5206\u5e93\u3002"),(0,a.kt)("img",{src:(0,i.Z)("img/dbsplit3.jpg")}),(0,a.kt)("h3",{id:"92932-\u6c34\u5e73\u5206\u8868"},"9.29.3.2 \u6c34\u5e73\u5206\u8868"),(0,a.kt)("p",null,"\u4e00\u822c\u6211\u4eec\u4e00\u5f20\u8868\u7684\u6570\u636e\u4e0d\u8981\u8d85\u8fc7 1 \u5343\u4e07,\u5982\u679c\u8868\u6570\u636e\u8d85\u8fc7 1 \u5343\u4e07\uff0c\u5e76\u4e14\u8fd8\u5728\u4e0d\u65ad\u589e\u52a0\u6570\u636e\uff0c\u90a3\u5c31\u53ef\u4ee5\u8003\u8651\u5206\u8868\u3002"),(0,a.kt)("img",{src:(0,i.Z)("img/dbsplit4.jpg")}),(0,a.kt)("h3",{id:"92933-\u4f18\u7f3a\u70b9"},"9.29.3.3 \u4f18\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5b58\u5728\u5355\u5e93\u6570\u636e\u91cf\u8fc7\u5927\u3001\u9ad8\u5e76\u53d1\u7684\u6027\u80fd\u74f6\u9888\uff0c\u63d0\u5347\u7cfb\u7edf\u7a33\u5b9a\u6027\u548c\u8d1f\u8f7d\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7aef\u6539\u9020\u8f83\u5c0f\uff0c\u4e0d\u9700\u8981\u62c6\u5206\u4e1a\u52a1\u6a21\u5757"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f3a\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8de8\u5206\u7247\u7684\u4e8b\u52a1\u4e00\u81f4\u6027\u96be\u4ee5\u4fdd\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"\u8de8\u5e93\u7684 Join \u5173\u8054\u67e5\u8be2\u6027\u80fd\u8f83\u5dee"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u591a\u6b21\u6269\u5c55\u96be\u5ea6\u548c\u7ef4\u62a4\u91cf\u6781\u5927")))),(0,a.kt)("h2",{id:"9294-\u6570\u636e\u5206\u7247\u89c4\u5219"},"9.29.4 \u6570\u636e\u5206\u7247\u89c4\u5219"),(0,a.kt)("p",null,"\u6211\u4eec\u8003\u8651\u53bb\u6c34\u5e73\u5207\u5206\u8868\uff0c\u5c06\u4e00\u5f20\u8868\u6c34\u5e73\u5207\u5206\u6210\u591a\u5f20\u8868\uff0c\u8fd9\u5c31\u6d89\u53ca\u5230\u6570\u636e\u5206\u7247\u7684\u89c4\u5219\uff0c\u6bd4\u8f83\u5e38\u89c1\u7684\u6709\uff1aHash \u53d6\u6a21\u5206\u8868\u3001\u6570\u503c Range \u5206\u8868\u3001\u4e00\u81f4\u6027 Hash \u7b97\u6cd5\u5206\u8868\u3002"),(0,a.kt)("h3",{id:"92941-hash-\u53d6\u6a21\u5206\u8868"},"9.29.4.1 Hash \u53d6\u6a21\u5206\u8868"),(0,a.kt)("p",null,"\u4e00\u822c\u91c7\u7528 Hash \u53d6\u6a21\u7684\u5207\u5206\u65b9\u5f0f\uff0c\u4f8b\u5982\uff1a\u5047\u8bbe\u6309 goods_id \u5206 4 \u5f20\u8868\u3002\uff08goods_id%4 \u53d6\u6574\u786e\u5b9a\u8868\uff09"),(0,a.kt)("img",{src:(0,i.Z)("img/dbsplit5.jpg")}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u7f3a\u70b9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5206\u7247\u76f8\u5bf9\u6bd4\u8f83\u5747\u5300\uff0c\u4e0d\u5bb9\u6613\u51fa\u73b0\u70ed\u70b9\u548c\u5e76\u53d1\u8bbf\u95ee\u7684\u74f6\u9888\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f3a\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540e\u671f\u5206\u7247\u96c6\u7fa4\u6269\u5bb9\u65f6\uff0c\u9700\u8981\u8fc1\u79fb\u65e7\u7684\u6570\u636e\u5f88\u96be\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u9762\u4e34\u8de8\u5206\u7247\u67e5\u8be2\u7684\u590d\u6742\u95ee\u9898\u3002\u6bd4\u5982\u4e0a\u4f8b\u4e2d\uff0c\u5982\u679c\u9891\u7e41\u7528\u5230\u7684\u67e5\u8be2\u6761\u4ef6\u4e2d\u4e0d\u5e26 goods_id \u65f6\uff0c\u5c06\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u5b9a\u4f4d\u6570\u636e\u5e93\uff0c\u4ece\u800c\u9700\u8981\u540c\u65f6\u5411 4 \u4e2a\u5e93\u53d1\u8d77\u67e5\u8be2\uff0c\n\u518d\u5728\u5185\u5b58\u4e2d\u5408\u5e76\u6570\u636e\uff0c\u53d6\u6700\u5c0f\u96c6\u8fd4\u56de\u7ed9\u5e94\u7528\uff0c\u5206\u5e93\u53cd\u800c\u6210\u4e3a\u62d6\u7d2f\u3002")))),(0,a.kt)("h3",{id:"92942-\u6570\u503c-range-\u5206\u8868"},"9.29.4.2 \u6570\u503c Range \u5206\u8868"),(0,a.kt)("p",null,"\u6309\u7167\u65f6\u95f4\u533a\u95f4\u6216 ID \u533a\u95f4\u6765\u5207\u5206\u3002\u4f8b\u5982\uff1a\u5c06 goods_id \u4e3a 1-1000 \u7684\u8bb0\u5f55\u5206\u5230\u7b2c\u4e00\u4e2a\u8868\uff0c1000-2000 \u7684\u5206\u5230\u7b2c\u4e8c\u4e2a\u8868\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,a.kt)("img",{src:(0,i.Z)("img/dbsplit6.jpg")}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u7f3a\u70b9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5355\u8868\u5927\u5c0f\u53ef\u63a7"),(0,a.kt)("li",{parentName:"ul"},"\u5929\u7136\u4fbf\u4e8e\u6c34\u5e73\u6269\u5c55\uff0c\u540e\u671f\u5982\u679c\u60f3\u5bf9\u6574\u4e2a\u5206\u7247\u96c6\u7fa4\u6269\u5bb9\u65f6\uff0c\u53ea\u9700\u8981\u6dfb\u52a0\u8282\u70b9\u5373\u53ef\uff0c\u65e0\u9700\u5bf9\u5176\u4ed6\u5206\u7247\u7684\u6570\u636e\u8fdb\u884c\u8fc1\u79fb"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5206\u7247\u5b57\u6bb5\u8fdb\u884c\u8303\u56f4\u67e5\u627e\u65f6\uff0c\u8fde\u7eed\u5206\u7247\u53ef\u5feb\u901f\u5b9a\u4f4d\u5206\u7247\u8fdb\u884c\u5feb\u901f\u67e5\u8be2\uff0c\u6709\u6548\u907f\u514d\u8de8\u5206\u7247\u67e5\u8be2\u7684\u95ee\u9898\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f3a\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u70ed\u70b9\u6570\u636e\u6210\u4e3a\u6027\u80fd\u74f6\u9888\u3002\n\u4f8b\u5982\u6309\u65f6\u95f4\u5b57\u6bb5\u5206\u7247\uff0c\u6709\u4e9b\u5206\u7247\u5b58\u50a8\u6700\u8fd1\u65f6\u95f4\u6bb5\u5185\u7684\u6570\u636e\uff0c\u53ef\u80fd\u4f1a\u88ab\u9891\u7e41\u7684\u8bfb\u5199\uff0c\u800c\u6709\u4e9b\u5206\u7247\u5b58\u50a8\u7684\u5386\u53f2\u6570\u636e\uff0c\u5219\u5f88\u5c11\u88ab\u67e5\u8be2")))),(0,a.kt)("h3",{id:"92943-\u4e00\u81f4\u6027-hash-\u7b97\u6cd5"},"9.29.4.3 \u4e00\u81f4\u6027 Hash \u7b97\u6cd5"),(0,a.kt)("p",null,"\u4e00\u81f4\u6027 Hash \u7b97\u6cd5\u80fd\u5f88\u597d\u7684\u89e3\u51b3\u56e0\u4e3a Hash \u53d6\u6a21\u800c\u4ea7\u751f\u7684\u5206\u7247\u96c6\u7fa4\u6269\u5bb9\u65f6\uff0c\u9700\u8981\u8fc1\u79fb\u65e7\u7684\u6570\u636e\u7684\u96be\u9898\u3002\u5177\u4f53\u539f\u7406\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/duhuo/p/4996105.html"},"https://www.cnblogs.com/duhuo/p/4996105.html")),(0,a.kt)("h2",{id:"9295-\u5206\u5e93\u5206\u8868\u5e26\u6765\u7684\u95ee\u9898"},"9.29.5 \u5206\u5e93\u5206\u8868\u5e26\u6765\u7684\u95ee\u9898"),(0,a.kt)("p",null,"\u4efb\u4f55\u4e8b\u60c5\u90fd\u6709\u4e24\u9762\u6027\uff0c\u5206\u5e93\u5206\u8868\u4e5f\u4e0d\u4f8b\u5916\uff0c\u5982\u679c\u91c7\u7528\u5206\u5e93\u5206\u8868\uff0c\u4f1a\u5f15\u5165\u65b0\u7684\u7684\u95ee\u9898\uff1a"),(0,a.kt)("h3",{id:"92951-\u5206\u5e03\u5f0f\u4e8b\u52a1\u95ee\u9898"},"9.29.5.1 \u5206\u5e03\u5f0f\u4e8b\u52a1\u95ee\u9898"),(0,a.kt)("p",null,"\u4f7f\u7528\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\u95f4\u4ef6\u89e3\u51b3\uff0c\u5177\u4f53\u662f\u901a\u8fc7\u6700\u7ec8\u4e00\u81f4\u6027\u8fd8\u662f\u5f3a\u4e00\u81f4\u6027\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u770b\u4e1a\u52a1\u9700\u6c42\uff0c\u8fd9\u91cc\u5c31\u4e0d\u591a\u8bf4\u3002"),(0,a.kt)("h3",{id:"92952-\u8de8\u8282\u70b9\u5173\u8054\u67e5\u8be2-join-\u95ee\u9898"},"9.29.5.2 \u8de8\u8282\u70b9\u5173\u8054\u67e5\u8be2 Join \u95ee\u9898"),(0,a.kt)("p",null,"\u5207\u5206\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Join \u6765\u5b8c\u6210\u3002\u800c\u5207\u5206\u4e4b\u540e\uff0c\u6570\u636e\u53ef\u80fd\u5206\u5e03\u5728\u4e0d\u540c\u7684\u8282\u70b9\u4e0a\uff0c\u6b64\u65f6 Join \u5e26\u6765\u7684\u95ee\u9898\u5c31\u6bd4\u8f83\u9ebb\u70e6\u4e86\uff0c\u8003\u8651\u5230\u6027\u80fd\uff0c\u5c3d\u91cf\u907f\u514d\u4f7f\u7528 Join \u67e5\u8be2\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u4e00\u4e9b\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5168\u5c40\u8868"))),(0,a.kt)("p",null,'\u5168\u5c40\u8868\uff0c\u4e5f\u53ef\u770b\u505a\u662f "\u6570\u636e\u5b57\u5178\u8868"\uff0c\u5c31\u662f\u7cfb\u7edf\u4e2d\u6240\u6709\u6a21\u5757\u90fd\u53ef\u80fd\u4f9d\u8d56\u7684\u4e00\u4e9b\u8868\uff0c\u4e3a\u4e86\u907f\u514d\u8de8\u5e93 Join \u67e5\u8be2\uff0c\u53ef\u4ee5\u5c06 \u8fd9\u7c7b\u8868\u5728\u6bcf\u4e2a\u6570\u636e\u5e93\u4e2d\u90fd\u4fdd\u5b58\u4e00\u4efd\u3002\u8fd9\u4e9b\u6570\u636e\u901a\u5e38\u5f88\u5c11\u4f1a\u8fdb\u884c\u4fee\u6539\uff0c\u6240\u4ee5\u4e5f\u4e0d\u62c5\u5fc3\u4e00\u81f4\u6027\u7684\u95ee\u9898\u3002'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5b57\u6bb5\u5197\u4f59"))),(0,a.kt)("p",null,'\u5229\u7528\u7a7a\u95f4\u6362\u65f6\u95f4\uff0c\u4e3a\u4e86\u6027\u80fd\u800c\u907f\u514d join \u67e5\u8be2\u3002\u4f8b\uff1a\u8ba2\u5355\u8868\u4fdd\u5b58 userId \u65f6\u5019,\u4e5f\u5c06 userName \u5197\u4f59\u4fdd\u5b58\u4e00\u4efd\uff0c\u8fd9\u6837\u67e5\u8be2\u8ba2\u5355\u8be6\u60c5\u65f6\u5c31\u4e0d\u9700\u8981\u518d\u53bb\u67e5\u8be2"\u4e70\u5bb6 user \u8868"\u4e86\u3002'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6570\u636e\u7ec4\u88c5"))),(0,a.kt)("p",null,"\u5728\u7cfb\u7edf\u5c42\u9762\uff0c\u5206\u4e24\u6b21\u67e5\u8be2\u3002\u7b2c\u4e00\u6b21\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u4e2d\u627e\u51fa\u5173\u8054\u6570\u636e id\uff0c\u7136\u540e\u6839\u636e id \u53d1\u8d77\u7b2c\u4e8c\u6b21\u8bf7\u6c42\u5f97\u5230\u5173\u8054\u6570\u636e\u3002\u6700\u540e\u5c06\u83b7\u5f97\u5230\u7684\u6570\u636e\u8fdb\u884c\u5b57\u6bb5\u62fc\u88c5\u3002"),(0,a.kt)("h3",{id:"92953-\u8de8\u8282\u70b9\u5206\u9875\u6392\u5e8f\u51fd\u6570\u95ee\u9898"},"9.29.5.3 \u8de8\u8282\u70b9\u5206\u9875\u3001\u6392\u5e8f\u3001\u51fd\u6570\u95ee\u9898"),(0,a.kt)("p",null,"\u8de8\u8282\u70b9\u591a\u5e93\u8fdb\u884c\u67e5\u8be2\u65f6\uff0c\u4f1a\u51fa\u73b0 Limit \u5206\u9875\u3001Order by \u6392\u5e8f\u7b49\u95ee\u9898\u3002\u5206\u9875\u9700\u8981\u6309\u7167\u6307\u5b9a\u5b57\u6bb5\u8fdb\u884c\u6392\u5e8f\uff0c\u5f53\u6392\u5e8f\u5b57\u6bb5\u5c31\u662f\u5206\u7247\u5b57\u6bb5\u65f6\uff0c\u901a\u8fc7\u5206\u7247\u89c4\u5219\u5c31\u6bd4\u8f83\u5bb9\u6613\u5b9a\u4f4d\u5230\u6307\u5b9a\u7684\u5206\u7247\uff1b"),(0,a.kt)("p",null,"\u5f53\u6392\u5e8f\u5b57\u6bb5\u975e\u5206\u7247\u5b57\u6bb5\u65f6\uff0c\u5c31\u53d8\u5f97\u6bd4\u8f83\u590d\u6742\u4e86\u3002\u9700\u8981\u5148\u5728\u4e0d\u540c\u7684\u5206\u7247\u8282\u70b9\u4e2d\u5c06\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u5e76\u8fd4\u56de\uff0c\u7136\u540e\u5c06\u4e0d\u540c\u5206\u7247\u8fd4\u56de\u7684\u7ed3\u679c\u96c6\u8fdb\u884c\u6c47\u603b\u548c\u518d\u6b21\u6392\u5e8f\uff0c\u6700\u7ec8\u8fd4\u56de\u7ed9\u7528\u6237\u3002"),(0,a.kt)("h3",{id:"92954-\u5168\u5c40\u4e3b\u952e\u907f\u91cd\u95ee\u9898"},"9.29.5.4 \u5168\u5c40\u4e3b\u952e\u907f\u91cd\u95ee\u9898"),(0,a.kt)("p",null,"\u5982\u679c\u90fd\u7528\u4e3b\u952e\u81ea\u589e\u80af\u5b9a\u4e0d\u5408\u7406\uff0c\u5982\u679c\u7528 UUID \u90a3\u4e48\u65e0\u6cd5\u505a\u5230\u6839\u636e\u4e3b\u952e\u6392\u5e8f\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/qdhxhz/p/11372658.html"},"\u96ea\u82b1 ID")," \u6765\u4f5c\u4e3a\u6570\u636e\u5e93\u7684\u4e3b\u952e\uff0c"),(0,a.kt)("h3",{id:"92955-\u6570\u636e\u8fc1\u79fb\u95ee\u9898"},"9.29.5.5 \u6570\u636e\u8fc1\u79fb\u95ee\u9898"),(0,a.kt)("p",null,"\u91c7\u7528\u53cc\u5199\u7684\u65b9\u5f0f\uff0c\u4fee\u6539\u4ee3\u7801\uff0c\u6240\u6709\u6d89\u53ca\u5230\u5206\u5e93\u5206\u8868\u7684\u8868\u7684\u589e\u3001\u5220\u3001\u6539\u7684\u4ee3\u7801\uff0c\u90fd\u8981\u5bf9\u65b0\u5e93\u8fdb\u884c\u589e\u5220\u6539\u3002\u540c\u65f6\uff0c\u518d\u6709\u4e00\u4e2a\u6570\u636e\u62bd\u53d6\u670d\u52a1\uff0c\u4e0d\u65ad\u5730\u4ece\u8001\u5e93\u62bd\u6570\u636e\uff0c\u5f80\u65b0\u5e93\u5199\uff0c"),(0,a.kt)("p",null,"\u8fb9\u5199\u8fb9\u6309\u65f6\u95f4\u6bd4\u8f83\u6570\u636e\u662f\u4e0d\u662f\u6700\u65b0\u7684\u3002"),(0,a.kt)("h2",{id:"9296-\u5982\u4f55\u5b9e\u73b0"},"9.29.6 \u5982\u4f55\u5b9e\u73b0"),(0,a.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u5206\u8868\u5206\u5e93\u4e0d\u4ec5\u4ec5\u9700\u8981\u5185\u7f6e\u4ee3\u7801\u7684\u652f\u6301\uff0c\u540c\u65f6\u8fd8\u9700\u8981\u96c6\u6210\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6\uff0c\u8fd9\u91cc\u63a8\u8350 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCat")," \u4e2d\u95f4\u4ef6\u3002",(0,a.kt)("a",{parentName:"p",href:"http://www.mycat.org.cn/"},"MyCat \u5b98\u65b9\u7f51\u7ad9"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u63d0\u4f9b\u4e86\u8f7b\u91cf\u7ea7\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5206\u8868\u5206\u5e93")," \u652f\u6301\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u76f4\u63a5\u6539\u53d8\u6570\u636e\u5e93\nrepository.ChangeDatabase("\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32");\n\n// \u901a\u8fc7\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5207\u6362\nrepository.Change<Entity, MyDbContextLocator2>();\n')),(0,a.kt)("p",null,"\u5982\u9700\u8de8\u5e93\u67e5\u8be2\uff0c\u9700\u7528\u5230\u6570\u636e\u5e93\u6280\u672f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"SqlServer")," \u94fe\u63a5\u670d\u52a1\u5668\u6216\u540c\u4e49\u8bcd\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93\u8868"))),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\u3001\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u7279\u6027",(0,a.kt)("inlineCode",{parentName:"p"},"[AppDbContext( Mode=DbContextMode.Dynamic)]")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\u3001\u9700\u8981\u52a8\u6001\u4fee\u6539\u8868\u540d\u7684\u5b9e\u4f53\u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"p"},"IEntityMutableTable<TEntity>")," \u63a5\u53e3\uff0c\u5e76\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTableName()")," \u8fd4\u56de\u8868\u540d\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6700\u540e\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildChange<TEntity>")," \u5207\u6362\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var (rep, scoped) = repository.BuildChange<Persion>();\n")),(0,a.kt)("p",null,"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildChange")," \u65b9\u6cd5\u4e4b\u540e\u4f1a\u81ea\u52a8\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTableName()")," \u65b9\u6cd5\u3002"),(0,a.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,a.kt)("inlineCode",{parentName:"p"},"DynamicModelCacheKeyFactory")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/ef/core/modeling/dynamic-model"},"EF Core - \u591a\u4e2a\u6a21\u578b\u4e4b\u95f4\u4ea4\u66ff")," \u7ae0\u8282\u3002")),(0,a.kt)("h2",{id:"9297-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.29.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}s.isMDXComponent=!0}}]);