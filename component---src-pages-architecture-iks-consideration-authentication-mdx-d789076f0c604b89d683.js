(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),x=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(x.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,b=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(x.b)("div",{className:"bx--row "+g.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,b=new RegExp(r+"/?(#.*)?$"),l=n.replace(b,a);return Object(x.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(x.b)(c.Link,{className:f.link,to:""+l},e))}));return Object(x.b)("div",{className:f.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":t},Object(x.b)("ul",{className:f.list},i))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),k=a("Asxa"),P=a("OIbQ"),N=a.n(P),I=function(e){var t=e.date,a=new Date(t);return t?Object(x.b)(k.c,{className:N.a.row},Object(x.b)(k.a,null,Object(x.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,m=s.tabs,g=s.title,j=s.theme,f=s.description,k=s.keywords,P=s.date,N=Object(w.a)().interiorTheme,y=Object(c.useStaticQuery)("2456312558").site.pathPrefix,E=y?n.pathname.replace(y,""):n.pathname,H=m?E.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",z=j||N;return Object(x.b)(l.a,{tabs:m,homepage:!1,theme:z,pageTitle:g,pageDescription:f,pageKeywords:k,titleType:d},Object(x.b)(p,{title:r?Object(x.b)(r,null):g,label:"label",tabs:m,theme:z}),m&&Object(x.b)(T,{title:g,slug:E,tabs:m,currentTab:H}),Object(x.b)(v.a,{padded:!0},a,Object(x.b)(O,{relativePagePath:u}),Object(x.b)(I,{date:P})),Object(x.b)(h.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:H}),Object(x.b)(b.a,null))}},"2Ecz":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),b={_frontmatter:c},l=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Authentication"),Object(i.b)("p",null,"All IKS clusters have two categories of users: service accounts managed by IKS, and normal users."),Object(i.b)("p",null,"IKS uses client certificates, bearer tokens, an authenticating proxy, or HTTP basic auth to authenticate API requests through authentication plugins."),Object(i.b)("p",null,"Information about ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/apidocs/kubernetes"},"Authenticating")," can be found within the link."))}s.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-architecture-iks-consideration-authentication-mdx-d789076f0c604b89d683.js.map