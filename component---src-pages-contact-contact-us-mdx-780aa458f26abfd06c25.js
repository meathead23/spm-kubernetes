(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),c=a("Wbzz"),l=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),g=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,l=new RegExp(r+"/?(#.*)?$"),i=n.replace(l,a);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(m.b)(c.Link,{className:f.link,to:""+i},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},b))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),N=a("Asxa"),k=a("OIbQ"),y=a.n(k),P=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(N.c,{className:y.a.row},Object(m.b)(N.a,null,Object(m.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,u=t.relativePagePath,d=t.titleType,p=s.tabs,O=s.title,g=s.theme,f=s.description,N=s.keywords,k=s.date,y=Object(w.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,M=p?E.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",C=g||y;return Object(m.b)(i.a,{tabs:p,homepage:!1,theme:C,pageTitle:O,pageDescription:f,pageKeywords:N,titleType:d},Object(m.b)(x,{title:r?Object(m.b)(r,null):O,label:"label",tabs:p,theme:C}),p&&Object(m.b)(T,{title:O,slug:E,tabs:p,currentTab:M}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:u}),Object(m.b)(P,{date:k})),Object(m.b)(h.a,{pageContext:t,location:n,slug:E,tabs:p,currentTab:M}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uqpt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),l={_frontmatter:c},i=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(i,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"If you have feedback, or wish to raise an issue and you are not an IBM®\nrepresentative, please contact your local IBM Account Executive."),Object(b.b)("p",null,"To submit an issue or provide feedback, please create\nan issue\n",Object(b.b)("a",{parentName:"p",href:"https://github.com/IBM/spm-kubernetes/issues"},"here"),".\nWe strongly suggest that you click Watch or Star the repository on\nGitHub to be updated about the latest changes."),Object(b.b)("h2",null,"Please follow the template for creating issues"),Object(b.b)("p",null,"This is a basic template to follow if issues arise."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Describe the bug:")),Object(b.b)("p",null,"A clear and concise description of what the bug is."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Steps to reproduce the behavior:")),Object(b.b)("p",null,"Clear and concise steps to reproduce the behaviour"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"One"),Object(b.b)("li",{parentName:"ul"},"Two"),Object(b.b)("li",{parentName:"ul"},"Three")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Expected behavior:")),Object(b.b)("p",null,"A clear and concise description of what you expected to happen."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Screenshots:")),Object(b.b)("p",null,"If applicable, add screenshots to help explain your problem."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"System Information:")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"    OS: []\n    Docker Version: []\n    Minikube Version: []\n    Ant Version: []\n    Java Version: []\n    Liberty  Version: []\n    Cúram SPM Version: []\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Additional context:")),Object(b.b)("p",null,"Add any other context about the problem here."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contact-contact-us-mdx-780aa458f26abfd06c25.js.map