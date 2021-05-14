(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),s=a.n(r),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),m=a.n(b),d=a("QH2O"),u=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,s=i.subDirectory,l=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:m()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(p.b)(o.Link,{className:x.link,to:""+c},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:x.list},r))))))},t}(i.a.Component),w=a("MjG9"),v=a("CzIb"),T=a("Asxa"),M=a("OIbQ"),y=a.n(M),_=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:y.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,m=t.relativePagePath,d=t.titleType,u=b.tabs,j=b.title,O=b.theme,x=b.description,T=b.keywords,M=b.date,y=Object(v.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,S=u?P.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"",A=O||y;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:A,pageTitle:j,pageDescription:x,pageKeywords:T,titleType:d},Object(p.b)(h,{title:i?Object(p.b)(i,null):j,label:"label",tabs:u,theme:A}),u&&Object(p.b)(N,{title:j,slug:P,tabs:u,currentTab:S}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:m}),Object(p.b)(_,{date:M})),Object(p.b)(f.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:S}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},CAqI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),l={_frontmatter:o},c=s.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"What is Cúram JMX?"),Object(r.b)("p",null,"Cúram JMX statistics provides operational data from a running IBM® Cúram Social Program Management (SPM) application.\nJMX statistics for use with a traditional application server are documented\nin this ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/JMXAdministrator/ctr_CuramJMXAdministratorsGuide.html"},"Knowledge Center")," page."),Object(r.b)("h3",null,"Cúram JMX Kubernetes Limitations"),Object(r.b)("p",null,"Cúram JMX statistics behave similarly in Kubernetes, but have the following limitations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Access by using the ",Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/JMXAdministrator/c_JMXADMIN_Accessjmxstatsusingurl.html"},"SPM Administration Application"),"\nis not supported because:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Not all pods have the requisite SPM client installed, which means JMS performance is unavailable using this access mechanism."),Object(r.b)("li",{parentName:"ul"},"The reverse proxy nature of Kubernetes means that even for the pods with clients installed, identifying the correct target server would be difficult.")))),Object(r.b)("p",null,"Therefore, for Kubernetes you are restricted to using the timer-based access method, for more information, see ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/JMXAdministrator/c_JMXADMIN_Accesstothejmxstatsusingjmxtimer.html"},"Using the JMX Timer"),"."),Object(r.b)("h2",null,"Cúram JMX timer-based statistics on Kubernetes"),Object(r.b)("p",null,"This mechanism writes the JMX statistics periodically at a file system location. The advantage of this mechanism is that it can be used for collecting statistics from every server in an environment"),Object(r.b)("p",null,"The primary properties used to configure timer-based statistics are integrated into the Helm Charts."),Object(r.b)("p",null,"A prerequisite for using timer-based SPM JMX statistics is to override ",Object(r.b)("inlineCode",{parentName:"p"},"global.apps.common.persistence.enabled=true"),"."),Object(r.b)("p",null,"You must also consider the other persistence-related settings and configure them appropriately."),Object(r.b)("h3",null,"Cúram JMX statistics persisteance"),Object(r.b)("p",null,"Persistence is required for timer-based statistics because the non-permanent nature of pods means that as they come and go, you might need statistics from an earlier execution."),Object(r.b)("p",null,"Enable timer-based JMX statistics with a ",Object(r.b)("inlineCode",{parentName:"p"},"global.apps.common.persistence.jmxstats.enabled=true")," override.\nOnce configured, the following SPM properties are added to the Liberty pod jvm.options files with the defaults shown:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"-Dcuram.jmx.output_statistics_timer_enabled=true\n-Dcuram.jmx.output_statistics_timer_folder=/tmp/jmx/\n-Dcuram.jmx.output_statistics_timer_period=60000\n")),Object(r.b)("p",null,"You can override the value of the timer period by using ",Object(r.b)("inlineCode",{parentName:"p"},"global.apps.common.persistence.jmxstats.timerPeriod")," where the value is specified as the\nnumber of milliseconds between each timer. For example, 60000 = 1 minute."),Object(r.b)("p",null,"Inside the specified timer folder are the statistics XML files, named with a datetimestamp and pod name."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For example:"),Object(r.b)("inlineCode",{parentName:"p"},"202009171025363411@bugsbunny-apps-curam-producer-6c9bf7dc46-snw4w-1661122509.xml")),Object(r.b)("h2",null,"Considerations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The default of ",Object(r.b)("inlineCode",{parentName:"p"},"1 minute")," for the timer period might be too short because over an extended time, depending upon the amount of application activity, the persistent storage could be exhausted."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Consider also the length of time a pod will run; if the timer period is too short, data since the last timer period is lost."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"No timer-based statistics are generated until the first login or JMS message is processed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Turn off statistics for running pods by editing the configmaps where ",Object(r.b)("inlineCode",{parentName:"p"},"-Dcuram.jmx.output_statistics_timer_enabled=true")," is set, changing the value to false, and restarting the pods.\nFor example:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use the ",Object(r.b)("inlineCode",{parentName:"li"},"kubectl get configmaps")," command to list all the configmaps."),Object(r.b)("li",{parentName:"ul"},"The configmaps you need to change are those named with ",Object(r.b)("inlineCode",{parentName:"li"},"*-jvm-override-*")," and the number and names of the configmaps vary depending on your configuration."),Object(r.b)("li",{parentName:"ul"},"For each configmap, use the ",Object(r.b)("inlineCode",{parentName:"li"},"kubectl edit configmap")," command to change the ",Object(r.b)("inlineCode",{parentName:"li"},"curam.jmx.output_statistics_timer_enabled")," setting to false."),Object(r.b)("li",{parentName:"ul"},"Use the ",Object(r.b)("inlineCode",{parentName:"li"},"kubectl delete pod")," command for each of the application producer and consumer pods that have a corresponding application name to the configmap."),Object(r.b)("li",{parentName:"ul"},"On restart the new pod no longer generates statistics files."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"By default, statistics are accumulated over the life of a pod; therefore, the last file generated is a superset of all the other files for that pod, therefore and you should only need the latest file."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"There is a property to change this behavior so each period resets the statistics, but then you would have to address how to amalgamate the data and make sense of it; so,changing this is not recommended."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In support of EJB timers, IBM WebSphere Liberty dynamically creates three tables each time a pod starts; a ",Object(r.b)("inlineCode",{parentName:"p"},"PART"),", ",Object(r.b)("inlineCode",{parentName:"p"},"PROP"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"TASK")," table."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The amount of data in these tables is small; but, over time could result in a large number of these tables in your database."),Object(r.b)("li",{parentName:"ul"},"You should monitor these tables and drop those for pods that no longer exist."),Object(r.b)("li",{parentName:"ul"},"These tables are prefixed with ",Object(r.b)("inlineCode",{parentName:"li"},"EJBTIMER_"),", followed by the pod name. For example, for the bugsbunny-apps-curam-consumer deployment, the following three tables were created for a single pod:")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  EJBTIMER_BUGSBUNNY_APPS_CURAM_CONSUMER_786586FD5F_BGMGWPART\n  EJBTIMER_BUGSBUNNY_APPS_CURAM_CONSUMER_786586FD5F_BGMGWPROP\n  EJBTIMER_BUGSBUNNY_APPS_CURAM_CONSUMER_786586FD5F_BGMGWTASK\n")))))}b.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-runtime-jmx-statistics-performance-monitoring-mdx-383c927eb98613d4b3a8.js.map