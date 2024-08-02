"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7920],{8824:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(7294),n=r(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},1473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var a=r(7294),n=r(2263),l=r(179),s=r(5742),c=r(9960),o=r(5999),u=r(8824),m=r(6010),h=r(6550),i=r(412);const p="q",g="ctx",d="version";const f=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:r}}=(0,n.Z)(),a=i.Z.canUseDOM?new URLSearchParams(t.search):null,l=a?.get(p)||"",s=a?.get(g)||"",c=a?.get(d)||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set(p,e):r.delete(p),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const a=new URLSearchParams(t.search);a.set(g,r),e.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var y=r(22),E=r(8202),S=r(2539),C=r(726),I=r(1073),x=r(311),v=r(3926),w=r(1029);const R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function P(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=f(),[p,g]=(0,a.useState)(r),[d,S]=(0,a.useState)(),[C,I]=(0,a.useState)(),v=`${e}${c}`,P=(0,a.useMemo)((()=>p?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:p}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[p]);(0,a.useEffect)((()=>{h(p),d&&(p?d(p,(e=>{I(e)})):I(void 0))}),[p,d]);const F=(0,a.useCallback)((e=>{g(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==p&&g(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,y.w)(v,l);S((()=>(0,E.v)(e,t,100)))}()}),[l,v]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,P)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,P),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[R.searchQueryColumn]:Array.isArray(w.Kc),"col--9":Array.isArray(w.Kc),"col--12":!Array.isArray(w.Kc)})},a.createElement("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:F,value:p,autoComplete:"off",autoFocus:!0})),Array.isArray(w.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",R.searchContextColumn)},a.createElement("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},a.createElement("option",{value:""},w.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),w.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!d&&p&&a.createElement("div",null,a.createElement(x.Z,null)),C&&(C.length>0?a.createElement("p",null,t(C.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,C&&C.map((e=>a.createElement(b,{key:e.document.i,searchResult:e}))))))}function b(e){let{searchResult:{document:t,type:r,page:n,tokens:l,metadata:s}}=e;const o=0===r,u=2===r,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(w.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return a.createElement("article",{className:R.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,S.C)(h,l):(0,C.o)(h,(0,I.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:R.searchResultItemPath},(0,v.e)(m)),u&&a.createElement("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,C.o)(t.t,(0,I.m)(s,"t"),l,100)}}))}const F=function(){return a.createElement(l.Z,null,a.createElement(P,null))}}}]);