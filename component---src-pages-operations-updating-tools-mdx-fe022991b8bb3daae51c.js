(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),m=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,l=new RegExp(r+"/?(#.*)?$"),b=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(p.b)(s.Link,{className:O.link,to:""+b},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},o))))))},t}(r.a.Component),w=a("MjG9"),T=a("CzIb"),y=a("Asxa"),k=a("OIbQ"),N=a.n(k),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:N.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=c.tabs,g=c.title,j=c.theme,O=c.description,y=c.keywords,k=c.date,N=Object(T.a)().interiorTheme,P=Object(s.useStaticQuery)("2456312558").site.pathPrefix,K=P?n.pathname.replace(P,""):n.pathname,M=m?K.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",C=j||N;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:O,pageKeywords:y,titleType:u},Object(p.b)(h,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(v,{title:g,slug:K,tabs:m,currentTab:M}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(I,{date:k})),Object(p.b)(f.a,{pageContext:t,location:n,slug:K,tabs:m,currentTab:M}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},KhK9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),{}),b=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),c={_frontmatter:l},d=s.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In Cloud environments, all the components of the platform must be up-to-date because of the often short maintenance cycles."),Object(i.b)("h2",null,"Kubernetes"),Object(i.b)("p",null,"The Kubernetes project gets minor releases approximately every three months, and it maintains only the three most recent minor releases. This is reflected in the IBM® Cloud Kubernetes Service (IKS) deprecation cycle."),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,"Find out more about the Kubernetes project release cycle in ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"},"Kubernetes version and version skew support"),"."),Object(i.b)("p",null,"Find out more about the IBM Cloud Kubernetes Service release and support cycle in ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-cs_versions"},"IBM Cloud Docs"),".")),Object(i.b)("p",null,"Managed Kubernetes services like IKS have a hands-off upgrade process, whereby the upgrade is performed with the click of a button.\nBefore upgrading, review all the release notes between the source and target versions because Kubernetes features can change over time."),Object(i.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," Kubernetes upgrades cannot be rolled back. Always make sure to do the upgrade on a development cluster before proceeding to higher environments.")),Object(i.b)("p",null,"Alongside the upgrade of the Kubernetes service, ensure you upgrade any pipelines and developer tools with a compatible version of ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl"),". The command-line tool must be within one minor version (older or newer) of the Kubernetes service."),Object(i.b)("h2",null,"Helm"),Object(i.b)("p",null,"Starting with Helm v3, there is no server-side component, so the process of upgrading the command-line tool is a case of replacing the binary.\nAs with any software, make sure to review the Helm ",Object(i.b)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"Release Notes")," before upgrading."),Object(i.b)("h2",null,"Middleware components"),Object(i.b)("p",null,"Because of the immutable nature of containers, when the application middleware (for example, IBM® WebSphere® Liberty) needs to be updated, new application images must be built upon a new base image.\nThe new images should then be promoted throughout the software development lifecycle using the methods outlined in ",Object(i.b)("a",{parentName:"p",href:"/spm-kubernetes/operations/updating_curam"},"Updating SPM Deployment"),"."))}u.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-operations-updating-tools-mdx-fe022991b8bb3daae51c.js.map