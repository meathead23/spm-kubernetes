(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,c=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),w=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),s=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(l.Link,{className:O.link,to:""+s},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},r))))))},t}(o.a.Component),k=a("MjG9"),T=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),N=a.n(y),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:N.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=b.tabs,g=b.title,w=b.theme,O=b.description,v=b.keywords,y=b.date,N=Object(T.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,E=m?C.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",H=w||N;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:O,pageKeywords:v,titleType:u},Object(p.b)(x,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:H}),m&&Object(p.b)(j,{title:g,slug:C,tabs:m,currentTab:E}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(P,{date:y})),Object(p.b)(h.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:E}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gVZ9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},s=i.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Networking"),Object(r.b)("p",null,"In Kubernetes, container networking is delegated to networking plug-ins that implement the Container Network Interface (CNI).\nOpenShift Container Platform uses the Multus CNI plug-in to allow chaining of CNI plug-ins. During cluster installation, you configure your default Pod network.\nThe default network handles all ordinary network traffic for the cluster. You can define an additional network based on the available CNI plug-ins and attach one or more of these networks to your Pods.\nYou can define more than one additional network for your cluster, depending on your needs. This gives you flexibility when you configure Pods that deliver network functionality, such as switching or routing."),Object(r.b)("p",null,"Here we can better ",Object(r.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.5/networking/multiple_networks/understanding-multiple-networks.html"},"Understand multiple networks")," and find out more about ",Object(r.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.5/networking/network_policy/about-network-policy.html"},"OpenShift network policy")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-openshift-consideration-networking-mdx-fa7838ea38db6e92c137.js.map