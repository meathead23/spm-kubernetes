(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),b=a.n(d),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),x=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(m.b)("li",{key:e,className:b()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(m.b)(s.Link,{className:x.link,to:""+c},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},i))))))},t}(r.a.Component),N=a("MjG9"),P=a("CzIb"),y=a("Asxa"),M=a("OIbQ"),w=a.n(M),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(y.c,{className:w.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,b=t.relativePagePath,u=t.titleType,p=d.tabs,g=d.title,j=d.theme,x=d.description,y=d.keywords,M=d.date,w=Object(P.a)().interiorTheme,I=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,S=p?C.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",k=j||w;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:k,pageTitle:g,pageDescription:x,pageKeywords:y,titleType:u},Object(m.b)(h,{title:r?Object(m.b)(r,null):g,label:"label",tabs:p,theme:k}),p&&Object(m.b)(v,{title:g,slug:C,tabs:p,currentTab:S}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:b}),Object(m.b)(T,{date:M})),Object(m.b)(O.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:S}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I3RU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),{}),c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),d={_frontmatter:l},b=s.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(b,Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Support for IBM MQ certified containers on OpenShift"),Object(o.b)("p",null,"IBM® Cúram Social Program Management (SPM) customers may obtain IBM MQ certified containers from the IBM Cloud Container Registry for use as a Supporting Program for SPM.\nUse as a Supporting Program means that IBM MQ certified containers can only be used to process internal JMS messages within SPM."),Object(o.b)("p",null,"SPM does not require or support the use of any IBM MQ Advanced features available in the IBM MQ certified containers."),Object(o.b)("p",null,"IBM MQ certified container is supported only on SPM Version 7.0.11 and later versions."),Object(o.b)(c,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": The IBM MQ charts found in the Runbook Github repository are sample charts based on the IBM MQ public charts published ",Object(o.b)("a",{parentName:"p",href:"https://github.com/IBM/charts/tree/master/stable/ibm-mqadvanced-server-dev"},"here"),".")),Object(o.b)("h2",null,"Stateful Sets"),Object(o.b)("p",null,"If a highly available MQ cluster is desired, a ",Object(o.b)("strong",{parentName:"p"},"Stateful Set")," can be used. The stateful set used for SPM contains two identical\npods, one active pod and one standby pod. If the active pod goes down, the standby pod is moved into the active role and a new pod is rescheduled in standby mode.\nThis occurs seamlessly, with persistent storage allowing for minimal downtime. The Stateful Set used in SPM requires several values that must be configured prior to\ndeployment. These values are those located under the MQ ",Object(o.b)("inlineCode",{parentName:"p"},"multiInstance")," section within the relevant values file. There, NFS or Ceph can be chosen as the desired\nmulti-instance delivery method."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NFS")," - In order to deploy with NFS, an NFS server and NFS folder must be available and configured; i.e. the destination directory ",Object(o.b)("inlineCode",{parentName:"li"},"global.mq.multiInstance.nfsFolder")," must exist;\nthe folder must be configured to have a ",Object(o.b)("inlineCode",{parentName:"li"},"data")," and ",Object(o.b)("inlineCode",{parentName:"li"},"logs")," subdirectory for each applicable application (i.e. if ",Object(o.b)("inlineCode",{parentName:"li"},"global.mq.multiInstance.nfsFolder")," is set to ",Object(o.b)("inlineCode",{parentName:"li"},"/MQHA"),", the folder must\ncontain the directories ",Object(o.b)("inlineCode",{parentName:"li"},"/MQHA/curam/data"),", ",Object(o.b)("inlineCode",{parentName:"li"},"/MQHA/curam/logs")," etc).\nThe supplementalGroups may need to be provided depending on the NFS server security setup."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Ceph")," - In order to deploy with Ceph, the desired Storage Class must be provided.")),Object(o.b)("h2",null,"PersistentVolumes and PersistentVolumeClaims"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"PersistentVolume")," (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes.\nIt is a resource in the cluster just like a node is a cluster resource. A ",Object(o.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," (PVC) is a request for storage by a user. It is similar to\na Pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific\nsize and access modes."),Object(o.b)("p",null,"When using NFS as the desired multi-instance method, the PV and PVCs must be configured by the user. Within the PVs, the NFS IP and NFS folder must be provided.\nIn the PV, a ",Object(o.b)("inlineCode",{parentName:"p"},"claimRef")," can be defined in order to ensure that the correct PVC matches with the correct PV. The templates provided also contain labels, which can\nalso be used to ensure correct coupling."),Object(o.b)("p",null,"If using Ceph, the PVs are dynamically configured. Therefore, no further configuration is required."),Object(o.b)("h2",null,"Operators"),Object(o.b)("p",null,"MQ can also be deployed via Operators. Operators are a method of packaging and deploying Kubernetes applications that take human operational knowledge of managing the application and encode it into the\npackage itself, which can then be shared with users. Operator deployment can be used to create a single-instance or a multi-instance deployment, as desired.  "),Object(o.b)("p",null,"The IBM MQ Operator can be installed using the Operator Hub. More information on  installing the IBM Operator using the OpenShift CLI\ncan be found ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.1.0/com.ibm.mq.ctr.doc/ctr_installing_cli.htm"},"here"),".",Object(o.b)("br",{parentName:"p"}),"\n","When deploying in this way, a ",Object(o.b)("strong",{parentName:"p"},"Queue Manager")," object is created. The Operator deployment also handles the creation of the ",Object(o.b)("strong",{parentName:"p"},"PersistentVolume")," and ",Object(o.b)("strong",{parentName:"p"},"Stateful Set")," objects."))}u.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-supporting-infrastructure-mq-mq-on-openshift-mdx-e20d1af80fee09e8cfe9.js.map