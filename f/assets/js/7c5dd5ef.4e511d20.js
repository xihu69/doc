"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"oops",title:"4. Oops \u9759\u6001\u7c7b",sidebar_label:"4. Oops \u9759\u6001\u7c7b"},l=void 0,s={unversionedId:"global/oops",id:"global/oops",title:"4. Oops \u9759\u6001\u7c7b",description:"4.1 \u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38",source:"@site/docs/global/oops.mdx",sourceDirName:"global",slug:"/global/oops",permalink:"/docs/global/oops",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/oops.mdx",tags:[],version:"current",frontMatter:{id:"oops",title:"4. Oops \u9759\u6001\u7c7b",sidebar_label:"4. Oops \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"3. DataValidator \u9759\u6001\u7c7b",permalink:"/docs/global/datavalidator"},next:{title:"5. LinqExpression \u9759\u6001\u7c7b",permalink:"/docs/global/linqexpression"}},i={},p=[{value:"4.1 \u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38",id:"41-\u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38",level:2},{value:"4.2 \u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38",id:"42-\u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38",level:2},{value:"4.3 \u72b6\u6001\u7801\u5f02\u5e38",id:"43-\u72b6\u6001\u7801\u5f02\u5e38",level:2},{value:"4.4 \u72b6\u6001\u7801\u5f02\u5e38",id:"44-\u72b6\u6001\u7801\u5f02\u5e38",level:2},{value:"4.5 \u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5",id:"45-\u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5",level:2},{value:"4.6 \u629b\u51fa\u4e1a\u52a1\u5f02\u5e38",id:"46-\u629b\u51fa\u4e1a\u52a1\u5f02\u5e38",level:2},{value:"4.7 \u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\u7801",id:"47-\u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\u7801",level:2},{value:"4.8 \u643a\u5e26\u989d\u5916\u6570\u636e",id:"48-\u643a\u5e26\u989d\u5916\u6570\u636e",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"41-\u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38"},"4.1 \u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'throw Oops.Oh("\u5f02\u5e38\u6d88\u606f");\nthrow Oops.Oh("\u5f02\u5e38\u6d88\u606f\uff1a{0}", "\u51fa\u9519\u4e86");\n')),(0,o.kt)("h2",{id:"42-\u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38"},"4.2 \u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'throw Oops.Oh("\u5f02\u5e38\u6d88\u606f", typeof(ArgumentNullException));\nthrow Oops.Oh("\u5f02\u5e38\u6d88\u606f\uff1a{0}", typeof(ArgumentNullException), "\u51fa\u9519\u4e86");\n')),(0,o.kt)("h2",{id:"43-\u72b6\u6001\u7801\u5f02\u5e38"},"4.3 \u72b6\u6001\u7801\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'throw Oops.Oh(1000);\nthrow Oops.Oh(1000, "\u51fa\u9519\u4e86");\n')),(0,o.kt)("h2",{id:"44-\u72b6\u6001\u7801\u5f02\u5e38"},"4.4 \u72b6\u6001\u7801\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'throw Oops.Oh(1000, typeof(ArgumentNullException));\nthrow Oops.Oh(1000, typeof(ArgumentNullException), "\u51fa\u9519\u4e86");\n')),(0,o.kt)("h2",{id:"45-\u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5"},"4.5 \u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5"),(0,o.kt)("admonition",{title:"\u8c03\u6574\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"v2.17.0+")," \u7248\u672c\u4e0b\u9762\u65b9\u6cd5\u8bf7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Retry.Invoke()/Retry.InvokeAsync()")," \u66ff\u4ee3\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"Oops.Retry(() => {\n    // Do.....\n}, 3, 1000);\n\n// \u5e26\u8fd4\u56de\u503c\nvar value = Oops.Retry<int>(() => {\n    // Do.....\n}, 3, 1000);\n\n// \u53ea\u6709\u7279\u5b9a\u5f02\u5e38\u624d\u76d1\u542c\nOops.Retry(() => {\n\n}, 3, 1000, typeof(ArgumentNullException));\n")),(0,o.kt)("h2",{id:"46-\u629b\u51fa\u4e1a\u52a1\u5f02\u5e38"},"4.6 \u629b\u51fa\u4e1a\u52a1\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'throw Oops.Bah("\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef");\nthrow Oops.Bah(1000);\n')),(0,o.kt)("h2",{id:"47-\u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\u7801"},"4.7 \u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'throw Oops.Oh("\u9519\u8bef\u4e86").StatusCode(502);\n')),(0,o.kt)("h2",{id:"48-\u643a\u5e26\u989d\u5916\u6570\u636e"},"4.8 \u643a\u5e26\u989d\u5916\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'throw Oops.Oh("\u9519\u8bef\u4e86").WithData(new Model {});\n')))}m.isMDXComponent=!0}}]);