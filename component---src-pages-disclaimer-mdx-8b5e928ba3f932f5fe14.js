(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),l=a("Xrax"),d=a("k4MR"),b=a("TSYQ"),c=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:c()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),T=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),g=a("dI71"),f=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,l=new RegExp(r+"/?(#.*)?$"),d=n.replace(l,a);return Object(p.b)("li",{key:e,className:c()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(p.b)(s.Link,{className:f.link,to:""+d},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},o))))))},t}(r.a.Component),I=a("MjG9"),N=a("CzIb"),v=a("Asxa"),w=a("OIbQ"),y=a.n(w),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:y.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,c=t.relativePagePath,u=t.titleType,m=b.tabs,O=b.title,g=b.theme,f=b.description,v=b.keywords,w=b.date,y=Object(N.a)().interiorTheme,P=Object(s.useStaticQuery)("2456312558").site.pathPrefix,E=P?n.pathname.replace(P,""):n.pathname,A=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",R=g||y;return Object(p.b)(d.a,{tabs:m,homepage:!1,theme:R,pageTitle:O,pageDescription:f,pageKeywords:v,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:R}),m&&Object(p.b)(j,{title:O,slug:E,tabs:m,currentTab:A}),Object(p.b)(I.a,{padded:!0},a,Object(p.b)(T,{relativePagePath:c}),Object(p.b)(k,{date:w})),Object(p.b)(h.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:A}),Object(p.b)(l.a,null))}},"17V1":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),{}),l={_frontmatter:s},d=i.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This runbook is current as of the initial date of publication and may be changed by IBM® at any time."),Object(o.b)("p",null,"THE INFORMATION IN THIS RUNBOOK IS PROVIDED “AS IS” WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING WITHOUT ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT.\nIBM products are warranted according to the terms and conditions of the agreements under which they are provided."),Object(o.b)("p",null,"This runbook is intended for general guidance only. It is not intended to be a substitute for detailed research or the exercise of professional judgment.\nIBM shall not be responsible for any loss whatsoever sustained by any organization or person who relies on this material."),Object(o.b)("p",null,"The data used in this runbook may be derived from third-party sources and IBM does not independently verify, validate or audit such data.\nThe results from the use of such data are provided on an “as is” basis and IBM makes no representations or warranties, express or implied."),Object(o.b)("p",null,"The installation steps described in this document are restricted to development environments only and must not be used in production environments.\nMicrosoft Windows is known not to work as a supported target platform for this installation."))}b.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-disclaimer-mdx-8b5e928ba3f932f5fe14.js.map