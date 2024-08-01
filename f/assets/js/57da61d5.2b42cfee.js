"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={id:"reference",title:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",sidebar_label:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",description:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u9879\u76ee\u5206\u5c42\u7ed3\u6784"},o=void 0,l={unversionedId:"reference",id:"reference",title:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",description:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u9879\u76ee\u5206\u5c42\u7ed3\u6784",source:"@site/docs/reference.mdx",sourceDirName:".",slug:"/reference",permalink:"/docs/reference",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/reference.mdx",tags:[],version:"current",frontMatter:{id:"reference",title:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",sidebar_label:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",description:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u9879\u76ee\u5206\u5c42\u7ed3\u6784"},sidebar:"docs",previous:{title:"2.6 \u5b98\u65b9\u811a\u624b\u67b6",permalink:"/docs/template"},next:{title:"2.8 \u795e\u5947\u7684 Inject",permalink:"/docs/inject"}},p={},u=[{value:"2.7.1 \u63a8\u8350\u5206\u5c42\u8bbe\u8ba1",id:"271-\u63a8\u8350\u5206\u5c42\u8bbe\u8ba1",level:2},{value:"2.7.2 \u96c6\u6210 <code>Furion</code> \u529f\u80fd",id:"272-\u96c6\u6210-furion-\u529f\u80fd",level:2},{value:"2.7.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"273-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],s={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528 \u300a",(0,a.kt)("a",{parentName:"p",href:"/docs/template"},"2.6 \u5b98\u65b9\u811a\u624b\u67b6"),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"271-\u63a8\u8350\u5206\u5c42\u8bbe\u8ba1"},"2.7.1 \u63a8\u8350\u5206\u5c42\u8bbe\u8ba1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u63a8\u8350\u91c7\u7528\u591a\u5c42\u9879\u76ee\u8bbe\u8ba1\u67b6\u6784\uff0c\u6bcf\u4e00\u4e2a\u9879\u76ee\u5c42\u7684\u4f9d\u8d56\u5206\u522b\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"YourName.Application"),"\uff1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"YourName.Core")," \u5f15\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"YourName.Core"),"\uff1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Furion")," \u5f15\u7528"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"SqlSugar \u7248\u672c\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Furion.Pure"))," \ud83c\udf97"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"YourName.Database.Migrations"),"\uff1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"YourName.EntityFramework.Core")," \u5f15\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"YourName.EntityFramework.Core"),"\uff1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"YourName.Core")," \u5f15\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"YourName.Web.Core"),"\uff1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"YourName.Application"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"YourName.Database.Migrations")," \u5f15\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"YourName.Web.Entry"),"\uff1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"YourName.Web.Core")," \u5f15\u7528 \u548c ",(0,a.kt)("inlineCode",{parentName:"strong"},"Microsoft.EntityFrameworkCore.Tools")," \u5305"))),(0,a.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"EFCore")," \u4ee5\u5916\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ORM")," \u6846\u67b6\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"SqlSugar"),"\uff0c\u90a3\u4e48\u65e0\u9700\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"YourName.Database.Migrations")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"YourName.EntityFramework.Core")," \u5c42\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u53e6\u5916 ",(0,a.kt)("inlineCode",{parentName:"p"},"YourName.Web.Entry")," \u65e0\u9700\u5f15\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore.Tools")," \u5305\u3002")),(0,a.kt)("h2",{id:"272-\u96c6\u6210-furion-\u529f\u80fd"},"2.7.2 \u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Furion")," \u529f\u80fd"),(0,a.kt)("p",null,"\u9879\u76ee\u642d\u5efa\u597d\u4e4b\u540e\uff0c\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Inject()")," \u65b9\u6cd5\u5373\u53ef\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".NET5")," \u7248\u672c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {18}",showLineNumbers:!0,"":!0,"{18}":!0},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace YourName.Web.Entry\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args)\n        {\n            return Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder.Inject()\n                              .UseStartup<Startup>();\n                });\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".NET6")," \u7248\u672c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,3,11}",showLineNumbers:!0,"{1,3,11}":!0},"var builder = WebApplication.CreateBuilder(args).Inject();\n\nbuilder.Services.AddControllers().AddInject();\n\nvar app = builder.Build();\n\napp.UseHttpsRedirection();\n\napp.UseAuthorization();\n\napp.UseInject();\n\napp.MapControllers();\n\napp.Run();\n")),(0,a.kt)("h2",{id:"273-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.7.3 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);