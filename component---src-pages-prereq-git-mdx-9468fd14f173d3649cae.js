(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),u=a.n(c),d=a("QH2O"),m=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),b=n.replace(s,a);return Object(p.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(p.b)(l.Link,{className:j.link,to:""+b},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},o))))))},t}(r.a.Component),y=a("MjG9"),T=a("CzIb"),v=a("Asxa"),N=a("OIbQ"),w=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:w.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,m=c.tabs,g=c.title,O=c.theme,j=c.description,v=c.keywords,N=c.date,w=Object(T.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=I?n.pathname.replace(I,""):n.pathname,C=m?M.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",H=O||w;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:j,pageKeywords:v,titleType:d},Object(p.b)(h,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:H}),m&&Object(p.b)(k,{title:g,slug:M,tabs:m,currentTab:C}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:u}),Object(p.b)(P,{date:N})),Object(p.b)(f.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:C}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},iZzY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),{}),s={_frontmatter:l},b=i.a;function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This runbook and its associated artifacts are provisioned through GitHub."),Object(o.b)("p",null,"Download the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/IBM/spm-kubernetes"},"spm-kubernetes"),"\nrepository on your development system. Take the following steps:"),Object(o.b)("h2",null,"Install Git"),Object(o.b)("p",null,"Git is the distributed version control system on which GitHub is built. Usually Git is already included on development systems, but if it is missing, you can get it from ",Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Getting Started - Installing Git"),"."),Object(o.b)("h2",null,"Before you begin"),Object(o.b)("p",null,"Clone the repository locally by using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/IBM/spm-kubernetes\n")),Object(o.b)("p",null,"The Git clone command creates a folder that is named ",Object(o.b)("inlineCode",{parentName:"p"},"spm-kubernetes")," in your current path. This folder is referred to as ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME")," for the remainder of this runbook. The ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME")," folder contains three subfolders:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"src/pages:")," Contains the source files for this runbook. Do not modify the source files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"dockerfiles:")," Contains the Docker® files and other artifacts that are used to generate the IBM® Cúram Social Program Management (SPM) containers. For more information, see ",Object(o.b)("a",{parentName:"li",href:"/spm-kubernetes/build-images/setup_docker_context"},"Setting up the Docker context"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"helm-charts:")," Contains the charts that are used to deploy the SPM containers on Kubernetes. For more information, see ",Object(o.b)("a",{parentName:"li",href:"/spm-kubernetes/deployment/hc_preparation"},"Preparing Helm Charts"),".")),Object(o.b)("p",null,"You must create a local branch if you want to make local modifications to any of these files,\nso you can continue to pull the latest code from the master branch without accidentally overriding any local change.\nHowever, IBM does not currently support any external contributions to this repo, such as pull requests and forks."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prereq-git-mdx-9468fd14f173d3649cae.js.map