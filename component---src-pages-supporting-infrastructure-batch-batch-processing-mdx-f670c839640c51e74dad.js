(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),c=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),s=a.n(d),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,b=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,b=new RegExp(o+"/?(#.*)?$"),l=n.replace(b,a);return Object(p.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(c.Link,{className:f.link,to:""+l},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(o.a.Component),w=a("MjG9"),v=a("CzIb"),N=a("Asxa"),k=a("OIbQ"),y=a.n(k),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:y.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,d=void 0===r?{}:r,s=t.relativePagePath,u=t.titleType,m=d.tabs,h=d.title,j=d.theme,f=d.description,N=d.keywords,k=d.date,y=Object(v.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",L=j||y;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:L,pageTitle:h,pageDescription:f,pageKeywords:N,titleType:u},Object(p.b)(x,{title:o?Object(p.b)(o,null):h,label:"label",tabs:m,theme:L}),m&&Object(p.b)(T,{title:h,slug:I,tabs:m,currentTab:E}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:s}),Object(p.b)(P,{date:k})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uSQ3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n,o=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={_frontmatter:b},s=c.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Kubernetes object that is being created by using the code in this repository is a CronJob, which is scheduled to run every 30 minutes.\nTherefore, initially no pod is listed, but a pod is started after 30 minutes and is visible when you run the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command."),Object(i.b)(l,{mdxType:"InlineNotification"},Object(i.b)("p",null,"The schedule can be adjusted using the ",Object(i.b)("inlineCode",{parentName:"p"},"batch.programs.queued.schedule")," key.")),Object(i.b)("p",null,"The pod runs the standard command ",Object(i.b)("inlineCode",{parentName:"p"},"build.sh runbatch")," that is described in ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/Operations/c_COPSGUIDE_Processes2RunningBatchLauncher1.html"},"Running the Batch Launcher"),"."),Object(i.b)("p",null,"At the end of the execution, the pod stops but is not destroyed and a new pod is created after another 30 minutes. Access the log by running the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl logs pod/podname")," command."),Object(i.b)("p",null,"You can delete the pod by running the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl delete pod/podname")," command."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-supporting-infrastructure-batch-batch-processing-mdx-f670c839640c51e74dad.js.map