"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var i=n(7462),r=(n(7294),n(3905)),a=n(4996);const o={id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"34.1 \u5728 IIS \u90e8\u7f72"},l=void 0,p={unversionedId:"deploy-iis",id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",description:"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 .csproj \u5e76\u6dfb\u52a0 en-US\uff0c\u5982\uff1a",source:"@site/docs/deploy-iis.mdx",sourceDirName:".",slug:"/deploy-iis",permalink:"/docs/deploy-iis",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/deploy-iis.mdx",tags:[],version:"current",frontMatter:{id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"34.1 \u5728 IIS \u90e8\u7f72"},sidebar:"docs",previous:{title:"34. \u6258\u7ba1/\u90e8\u7f72/\u53d1\u5e03",permalink:"/docs/category/deploy"},next:{title:"34.2 \u5728 Docker \u90e8\u7f72",permalink:"/docs/deploy-docker"}},s={},d=[{value:"34.1.1 \u53d1\u5e03\u7f51\u7ad9",id:"3411-\u53d1\u5e03\u7f51\u7ad9",level:2},{value:"34.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",id:"34111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",level:3},{value:"34.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",id:"34112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",level:3},{value:"34.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",id:"34113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",level:3},{value:"34.1.1.4 \u70b9\u51fb\u53d1\u5e03",id:"34114-\u70b9\u51fb\u53d1\u5e03",level:3},{value:"34.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",id:"3412-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",level:2},{value:"34.1.2.1 \u7b2c\u4e00\u6b65",id:"34121-\u7b2c\u4e00\u6b65",level:3},{value:"34.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09",id:"34122-\u7b2c\u4e8c\u6b65\u547d\u4ee4",level:3},{value:"34.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09",id:"34123-\u7b2c\u4e09\u6b65\u547d\u4ee4",level:3},{value:"34.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09",id:"34124-\u7b2c\u56db\u6b65\u547d\u4ee4",level:3},{value:"34.1.3 \u90e8\u7f72\u5230 IIS",id:"3413-\u90e8\u7f72\u5230-iis",level:2},{value:"34.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9",id:"34131-\u6dfb\u52a0\u65b0\u7f51\u7ad9",level:3},{value:"34.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",id:"34132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",level:3},{value:"34.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",id:"34133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",level:3},{value:"34.1.3.4 \u8bbe\u7f6e\u4e3a <code>\u975e\u6258\u7ba1</code>",id:"34134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1",level:3},{value:"34.1.3.5 \u91cd\u542f\u7f51\u7ad9",id:"34135-\u91cd\u542f\u7f51\u7ad9",level:3},{value:"34.1.4 \u5e38\u89c1\u95ee\u9898",id:"3414-\u5e38\u89c1\u95ee\u9898",level:2},{value:"34.1.4.1 405 \u72b6\u6001\u7801\uff0c\u4e0d\u652f\u6301 <code>PUT\uff0cDELETE</code> \u8bf7\u6c42",id:"34141-405-\u72b6\u6001\u7801\u4e0d\u652f\u6301-putdelete-\u8bf7\u6c42",level:3},{value:"34.1.4.2 <code>WebSocket</code>/ <code>SignalR</code> \u8fde\u63a5\u62a5\u9519",id:"34142-websocket-signalr-\u8fde\u63a5\u62a5\u9519",level:3},{value:"34.1.4.3 \u90e8\u7f72\u4e4b\u540e\u7f3a\u5931 <code>api-ms-win.xxxx.dll</code> \u95ee\u9898",id:"34143-\u90e8\u7f72\u4e4b\u540e\u7f3a\u5931-api-ms-winxxxxdll-\u95ee\u9898",level:3},{value:"34.1.5 <code>IIS</code> \u56de\u6536\u95ee\u9898\u548c\u914d\u7f6e",id:"3415-iis-\u56de\u6536\u95ee\u9898\u548c\u914d\u7f6e",level:2},{value:"34.1.6 \u5377\u5f71\uff08\u65e0\u5360\u7528\uff09\u590d\u5236\u53d1\u5e03\u66ff\u6362",id:"3416-\u5377\u5f71\u65e0\u5360\u7528\u590d\u5236\u53d1\u5e03\u66ff\u6362",level:2},{value:"34.1.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3417-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u7cbe\u7b80\u53d1\u5e03\u6587\u4ef6",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj")," \u5e76\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"<SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>"),"\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"<PropertyGroup>\n  <TargetFramework>net6.0</TargetFramework>\n  <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>\n</PropertyGroup>\n"))),(0,r.kt)("h2",{id:"3411-\u53d1\u5e03\u7f51\u7ad9"},"34.1.1 \u53d1\u5e03\u7f51\u7ad9"),(0,r.kt)("h3",{id:"34111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"},"34.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"),(0,r.kt)("img",{src:(0,a.Z)("img/dp1.png")}),(0,r.kt)("h3",{id:"34112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"},"34.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"),(0,r.kt)("img",{src:(0,a.Z)("img/dy2.png")}),(0,r.kt)("h3",{id:"34113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"},"34.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"),(0,r.kt)("img",{src:(0,a.Z)("img/dp3.png")}),(0,r.kt)("h3",{id:"34114-\u70b9\u51fb\u53d1\u5e03"},"34.1.1.4 \u70b9\u51fb\u53d1\u5e03"),(0,r.kt)("img",{src:(0,a.Z)("img/dp4.png")}),(0,r.kt)("h2",{id:"3412-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"},"34.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"),(0,r.kt)("h3",{id:"34121-\u7b2c\u4e00\u6b65"},"34.1.2.1 \u7b2c\u4e00\u6b65"),(0,r.kt)("p",null,"\u5b89\u88c5.NET Core \u8fd0\u884c\u65f6\u6346\u7ed1\u5305\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer"},"\u70b9\u51fb\u4e0b\u8f7d")),(0,r.kt)("h3",{id:"34122-\u7b2c\u4e8c\u6b65\u547d\u4ee4"},"34.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"net stop was /y\n")),(0,r.kt)("h3",{id:"34123-\u7b2c\u4e09\u6b65\u547d\u4ee4"},"34.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"net start w3svc\n")),(0,r.kt)("h3",{id:"34124-\u7b2c\u56db\u6b65\u547d\u4ee4"},"34.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"set ASPNETCORE_ENVIRONMENT=Production\n")),(0,r.kt)("h2",{id:"3413-\u90e8\u7f72\u5230-iis"},"34.1.3 \u90e8\u7f72\u5230 IIS"),(0,r.kt)("h3",{id:"34131-\u6dfb\u52a0\u65b0\u7f51\u7ad9"},"34.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9"),(0,r.kt)("img",{src:(0,a.Z)("img/ds1.png")}),(0,r.kt)("h3",{id:"34132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"},"34.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"),(0,r.kt)("img",{src:(0,a.Z)("img/ds2.png")}),(0,r.kt)("h3",{id:"34133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"},"34.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"),(0,r.kt)("img",{src:(0,a.Z)("img/ds3.png")}),(0,r.kt)("h3",{id:"34134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1"},"34.1.3.4 \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"h3"},"\u975e\u6258\u7ba1")),(0,r.kt)("img",{src:(0,a.Z)("img/ds4.png")}),(0,r.kt)("h3",{id:"34135-\u91cd\u542f\u7f51\u7ad9"},"34.1.3.5 \u91cd\u542f\u7f51\u7ad9"),(0,r.kt)("p",null,"\u53ea\u9700\u91cd\u542f\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u6c60\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"3414-\u5e38\u89c1\u95ee\u9898"},"34.1.4 \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"34141-405-\u72b6\u6001\u7801\u4e0d\u652f\u6301-putdelete-\u8bf7\u6c42"},"34.1.4.1 405 \u72b6\u6001\u7801\uff0c\u4e0d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"h3"},"PUT\uff0cDELETE")," \u8bf7\u6c42"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"IIS"),"\u62d2\u7edd ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," \u8bf7\u6c42\uff0c\u539f\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u9ed8\u8ba4\u6ce8\u518c\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebDAVModule")," \u7684\u81ea\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpModule")," \u5bfc\u81f4\u7684\u3002"),(0,r.kt)("p",null,"\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"web.config")," \u79fb\u9664\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{2-6}","{2-6}":!0},'<configuration>\n <system.webServer>\n   <modules runAllManagedModulesForAllRequests="true">\n     <remove name="webDAVModule"/>\n   </modules>\n </system.webServer>\n</configuration>\n')),(0,r.kt)("p",null,"\u5fae\u8f6f\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/troubleshoot/developer/webapps/iis/health-diagnostic-performance/http-error-405-website"},"https://docs.microsoft.com/zh-cn/troubleshoot/developer/webapps/iis/health-diagnostic-performance/http-error-405-website")),(0,r.kt)("img",{src:(0,a.Z)("img/iis5.png")}),(0,r.kt)("h3",{id:"34142-websocket-signalr-\u8fde\u63a5\u62a5\u9519"},"34.1.4.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"WebSocket"),"/ ",(0,r.kt)("inlineCode",{parentName:"h3"},"SignalR")," \u8fde\u63a5\u62a5\u9519"),(0,r.kt)("p",null,"\u5982\u679c\u9879\u76ee\u90e8\u7f72\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u4e2d\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSoket"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u4e0d\u80fd\u8fde\u63a5\u6216\u8fde\u63a5\u5931\u8d25\u7b49\u95ee\u9898\uff0c\u8bf7\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u670d\u52a1\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket \u534f\u8bae")," \u662f\u52fe\u9009\u72b6\u6001"),(0,r.kt)("img",{src:(0,a.Z)("img/iis2.png")}),(0,r.kt)("h3",{id:"34143-\u90e8\u7f72\u4e4b\u540e\u7f3a\u5931-api-ms-winxxxxdll-\u95ee\u9898"},"34.1.4.3 \u90e8\u7f72\u4e4b\u540e\u7f3a\u5931 ",(0,r.kt)("inlineCode",{parentName:"h3"},"api-ms-win.xxxx.dll")," \u95ee\u9898"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u5c06\u53d1\u5e03\u6587\u4ef6\u53d1\u5e03\u5230\u670d\u52a1\u5668\u540e\uff0c\u51fa\u73b0\u4e22\u5931 ",(0,r.kt)("inlineCode",{parentName:"p"},"api.ms-win.xxxx.dll")," \u6587\u4ef6\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u91cd\u65b0\u53d1\u5e03\u5e76\u9009\u62e9\u670d\u52a1\u5668\u7279\u5b9a\u7684\u67b6\u6784\u5373\u53ef\u3002"),(0,r.kt)("img",{src:(0,a.Z)("img/iis4.jpg")}),(0,r.kt)("img",{src:(0,a.Z)("img/iis3.png")}),(0,r.kt)("h2",{id:"3415-iis-\u56de\u6536\u95ee\u9898\u548c\u914d\u7f6e"},"34.1.5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"IIS")," \u56de\u6536\u95ee\u9898\u548c\u914d\u7f6e"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET Core")," \u5e94\u7528\u7a0b\u5e8f\uff0c\u5982\u679c\u542f\u52a8\u4e86\u7cfb\u7edf\u65e5\u5fd7\uff0c\u5c31\u4f1a\u53d1\u73b0\u7ecf\u5e38\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application is shutting down...")," \u7684\u65e5\u5fd7\uff0c\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u56de\u6536\u4e86\u5e94\u7528\u7a0b\u5e8f\u6c60\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u957f\u671f\u5728\u7ebf\u7684\u7f51\u7ad9\u6765\u8bf4\uff0c\u8fd9\u662f\u975e\u5e38\u4e0d\u5408\u7406\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u8ba9 ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u8fdb\u884c\u957f\u65f6\u95f4\u4e0d\u8bbf\u95ee\u4fbf\u56de\u6536\u7684\u673a\u5236\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u914d\u7f6e\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"li"},"IIS")," \u5e76\u70b9\u51fb\u5de6\u4fa7\u6811\u6839\u8282\u70b9\uff08\u8ba1\u7b97\u673a\u540d\u79f0\uff09\u5e76\u70b9\u51fb\u53f3\u4fa7\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Configuration Editor"),"\uff08\u914d\u7f6e\u7f16\u8f91\u5668\uff09")),(0,r.kt)("img",{src:(0,a.Z)("img/iis6.png")}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Section"),"\uff08\u8282\uff09\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"system.applicationHost/applicationPools")," \u5e76\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"startMode")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"AlwaysRunning"),"\uff0c\u4e4b\u540e\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Apply")," \u4fdd\u5b58\u3002")),(0,r.kt)("img",{src:(0,a.Z)("img/iis7.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4fa7\u6811\u6839\u8282\u70b9\uff08\u8ba1\u7b97\u673a\u540d\u79f0\uff09\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Application Pools")," \u5e76\u70b9\u51fb\u6700\u53f3\u4fa7\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Set Appliation Pool Defaults..."),"\uff08\u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60\u9ed8\u8ba4\u914d\u7f6e...\uff09")),(0,r.kt)("img",{src:(0,a.Z)("img/iis8.png")}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"Idle Time-out (minutes)"),"\uff08\u95f2\u7f6e\u8d85\u65f6\uff08\u5206\u949f\uff09\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"0"))),(0,r.kt)("img",{src:(0,a.Z)("img/iis9.png")}),(0,r.kt)("p",null,"\u8fd9\u6837\u5373\u53ef\u89e3\u51b3 ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u56de\u6536\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"3416-\u5377\u5f71\u65e0\u5360\u7528\u590d\u5236\u53d1\u5e03\u66ff\u6362"},"34.1.6 \u5377\u5f71\uff08\u65e0\u5360\u7528\uff09\u590d\u5236\u53d1\u5e03\u66ff\u6362"),(0,r.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\u5982\u679c\u6211\u4eec\u4ee3\u7801\u91cd\u65b0\u53d1\u5e03\u540e\u66ff\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u4e2d\u7684\u6587\u4ef6\uff0c\u8fd9\u65f6\u5019\u4f1a\u51fa\u73b0\u6587\u4ef6\u5360\u7528\u65e0\u6cd5\u8fdb\u884c\u66ff\u6362\uff0c\u8fc7\u53bb\u8fd0\u7ef4\u4eba\u5458\u90fd\u662f\u5148\u505c\u6b62\u7ad9\u70b9\u540e\u66ff\u6362\u518d\u542f\u52a8\u3002\u4f46\u6211\u4eec\u4e5f\u53ef\u4ee5\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"web.config")," \u6587\u4ef6\u542f\u7528\u5377\u5f71\u590d\u5236\u6a21\u5f0f\u5b9e\u73b0\u7c7b\u4f3c",(0,r.kt)("strong",{parentName:"p"},"\u70ed\u66f4\u65b0"),"\u64cd\u4f5c\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers {12-18}",showLineNumbers:!0,"{12-18}":!0},'<?xml version="1.0" encoding="utf-8"?>\n<configuration>\n  \x3c!-- To customize the asp.net core module uncomment and edit the following section.\n  For more info see https://go.microsoft.com/fwlink/?linkid=838655 --\x3e\n\n  <system.webServer>\n    <handlers>\n      <remove name="aspNetCore"/>\n      <add name="aspNetCore" path="*" verb="*" modules="AspNetCoreModulev2" resourceType="Unspecified"/>\n    </handlers>\n    <aspNetCore processPath="%LAUNCHER_PATH%" arguments="%LAUNCHER_ARGS%" stdoutLogEnabled="false" stdoutLogFile=".\\logs\\stdout">\n      <handlerSettings>\n        <handlerSetting name="experimentalEnableShadowCopy" value="true" />\n        <handlerSetting name="shadowCopyDirectory" value="../ShadowCopyDirectory/" />\n        \x3c!-- Only enable handler logging if you encounter issues--\x3e\n        \x3c!--<handlerSetting name="debugFile" value=".\\logs\\aspnetcore-debug.log" />--\x3e\n        \x3c!--<handlerSetting name="debugLevel" value="FILE,TRACE" />--\x3e\n      </handlerSettings>\n    </aspNetCore>\n  </system.webServer>\n</configuration>\n')),(0,r.kt)("p",null,"\u5173\u4e8e\u5377\u5f71\u590d\u5236\u66f4\u591a\u77e5\u8bc6\u53ef\u67e5\u770b\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/dotnet/asp-net-core-updates-in-net-6-preview-3/#shadow-copying-in-iis"},"https://devblogs.microsoft.com/dotnet/asp-net-core-updates-in-net-6-preview-3/#shadow-copying-in-iis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/zh-cn/dotnet/framework/app-domains/shadow-copy-assemblies"},"https://learn.microsoft.com/zh-cn/dotnet/framework/app-domains/shadow-copy-assemblies"))),(0,r.kt)("h2",{id:"3417-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.1.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}u.isMDXComponent=!0}}]);