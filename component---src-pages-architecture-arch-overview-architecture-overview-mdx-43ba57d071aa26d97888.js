(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),o=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),d=a("TSYQ"),l=a.n(d),p=a("QH2O"),u=a.n(p),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:l()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,s=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),w=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),b=n.replace(s,a);return Object(m.b)("li",{key:e,className:l()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(m.b)(o.Link,{className:w.link,to:""+b},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},i))))))},t}(r.a.Component),x=a("MjG9"),A=a("CzIb"),y=a("Asxa"),N=a("OIbQ"),k=a.n(N),S=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(y.c,{className:k.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,l=t.relativePagePath,p=t.titleType,u=d.tabs,h=d.title,j=d.theme,w=d.description,y=d.keywords,N=d.date,k=Object(A.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,M=T?n.pathname.replace(T,""):n.pathname,I=u?M.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",P=j||k;return Object(m.b)(b.a,{tabs:u,homepage:!1,theme:P,pageTitle:h,pageDescription:w,pageKeywords:y,titleType:p},Object(m.b)(g,{title:r?Object(m.b)(r,null):h,label:"label",tabs:u,theme:P}),u&&Object(m.b)(v,{title:h,slug:M,tabs:u,currentTab:I}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:l}),Object(m.b)(S,{date:N})),Object(m.b)(f.a,{pageContext:t,location:n,slug:M,tabs:u,currentTab:I}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},SYbV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=s("InlineNotification"),d=s("Caption"),l={_frontmatter:o},p=c.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"IBM® Cúram Social Program Management (SPM) is not a PaaS nor a SaaS offering on IBM Cloud. SPM is a platform for Social Programs that customers configure and customize according to their own requirements.\nThen build, deploy, run and operate on environments according to their own Software Development Life Cycle (SDLC) requirements."),Object(i.b)("p",null,"SPM can either be deployed on traditional hosting architectures (i.e. virtual machines or bare metal) or on Kubernetes. This runbook only refers to the cloud native hosting on Kubernetes."),Object(i.b)("p",null,"SPM can be deployed on two Kubernetes distributions:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"IBM Cloud Kubernetes Services (IKS)"),": only available on IBM Cloud."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Red Hat OpenShift"),": on any environment supported by Red Hat (e.g. on-premises, private cloud or public cloud).")),Object(i.b)("p",null,"The Figure 1 shows the essential nature of the SPM architecture on Kubernetes."),Object(i.b)("p",null,"It conveys the governing ideas and major building blocks of the architecture.\nThe ",Object(i.b)("strong",{parentName:"p"},"“Development & DevOps”"),", ",Object(i.b)("strong",{parentName:"p"},"“Security”")," and ",Object(i.b)("strong",{parentName:"p"},"“Governance”")," components and processes described in the architecture diagram are just for reference and will likely be different, depending on your Deployment Architecture."),Object(i.b)("p",null,"SPM does not require nor impose these components in the architecture."),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This runbook does not provide any content or guidance on the ",Object(i.b)("inlineCode",{parentName:"p"},"Development and DevOps"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Governance")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Security"),".")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAABYlAAAWJQFJUiTwAAADAElEQVQ4y3VTy27cNhTVx/YDCmTbbVfdFUVRIEDQdNFNkKLoK32gRZMYk9Yw4rHHHs94NNb7QYoU36RIPabUOPXOBxJBSPfce8h7bnB4FJN/CWnj83dZEpf7Dc9DjiGLb7hHdE1gHTzOncmd5O7rJ3b7r/37G/P8ibr40zz7WBeh/fIjsfzrcfIRXIhiuUBFkm8u47PXBBRw9Y6Rdr/4A6RR0Pe9OsI5N03TeMQDWQiJmKRClgCmJSCMEWUQwnd5VVZ1IISoqipNU4RQ13XuCHmEz2itHXpnjPF7Y/QcYLthGA7TaLsu8D8YY1VZQgCMVuPQa6l8uiLPMWo80wdRQvI8K4tCSemV3kvzNYLOaMTsVUTXMbmrbdKM84qmDE8p8s8Ywz7FU04O6fxl5NISQvZR4qsGttOAum3SxHkTJrBCsmEOtqpEqsaywiquWJiAXQJyQKNaImq8rsuLa3+uuTKV/bbQm9Lm2K4LZ9z0z854eaehqojrO7lOaFTSpLGw1ZjqqgEnt2vX9zOZ6+E6Jsuw3WX4zTLHhP+0iLyq307jMMOHw/jqnKxS8+t7nAHBpDOd2CaX/i4DazTkfdVwxnVLZYMpFV2DGBMWE0aFJsKWFUSYZXmVAcmUvdmlP/68HvsxMFobOyJuAWNUDZi7GivAGeI6BTyDHLYyAzypWCsdZLKzrqyas9O9sy7QSs1m0M1F8ovf9ENvtb1Kf2eqOF9Hq9s9rPLr3d3ZVdhZ4mOs63yrhqGbZXuy7xplLEpj30E3DELKOEspo7gl3kyUEoz8gHBCaRxH3inj9H+fvY+y7S2FjYKYNg3Ncoaxgoi3REhRFDn2OTgEbSKFapi/TjiO0wey93TzxVP87Qv29Dn/7gf01TP6doE++7x9fSKGnlFi9fi++P7V7ae+5svVJ5tycRzWe7Ix6GaL99HmZJGsrkicUAg3b94WYag+WLpL8v1mv9RKb+NlWWfTA1nP9u+kMVGeFXVtrFVaU6WYkFrr+4FjlDN/CCmNsoKLB2//B+VK5ngR3mN5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("picture",{parentName:"span"},"\n          ",Object(i.b)("source",{parentName:"picture",srcSet:["/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/0eda2/architecture-overview.webp 288w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/460e2/architecture-overview.webp 576w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/e0ca3/architecture-overview.webp 1152w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/9a814/architecture-overview.webp 1518w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",Object(i.b)("source",{parentName:"picture",srcSet:["/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/7fc1e/architecture-overview.png 288w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/a5df1/architecture-overview.png 576w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/3cbba/architecture-overview.png 1152w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/36102/architecture-overview.png 1518w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",Object(i.b)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/3cbba/architecture-overview.png",alt:"architecture overview",title:"architecture overview",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),Object(i.b)(d,{mdxType:"Caption"},Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Figure 1:")," SPM on Kubernetes")),Object(i.b)("p",null,"The Figure 2 shows how SPM is built as a containerized application by using WebSphere® Application Server Liberty, packaged as Docker®\ncontainers, orchestrated by Helm, and running on IKS."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"381px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"139.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAIAAADuuAg3AAAACXBIWXMAAAsTAAALEwEAmpwYAAADx0lEQVQ4y31VWXPiRhD2//8F+5SHpCq1h+ONL1zexJjDZm0CGMSCQTc2QhcaHegYaXRsj2QM2Tjb1Uz1UNPT3V/3NzpQFMX3fdd1vf8I/Idst1ILOaCvW9uh5w/gVxRFnufFnlQ75KdzlQh6yuupYOaiWfClzempaKQkLQ4g5g/OYGflVrWTb0vC6ulcS789hYy0makEbFAwgoi84Vxt84ysEJ4qhNWIYBYn9cEv7y/uH3VxXUA6rEpCnL7hjDF2HDfYuLK2mSgpW4aaLvF0Gc9WyS7yq/Nms0mShBACq23b1DnYGCjg9UQ0trq1BSORjZik+YvzaDRiGAZW0zTBOY5jemNIuFXIqxEop4agvFbaq3BhRoDLj2lDZIQQNMn3nOU6mum5jAphXUiIKhQvWYVsF1DL24BFUUQzty1p5Z5eM4e12+Or3ucv3fPG6Oqeq7WY4797/fkaJ9vI2VbgljRNHdddm/qTHnydGu3hojVYNHpSZ7y6m6jt4VNrIA9FN4qznXMVFgz4ByHbc+wn3eONXLbKVBFdxXVObasQDIKT9ABwBni63e5gMGi329Pp1HEc6BZcFGAiaKGgUhXVSNzavBou1xjqfIkMp4fDoSiKMOcAmO8HOAo0J5lpmVTGBKgobNaLzjUSxts+V/5QbdVzSLsC7GastgZSsy/dTbQOs2w9yI2+CChMnsPwteZ9tMuyPQDs2QiuuuJpfQCz2egJl7eT0+uHk6v+WeOBkbwdYEEQQOVJKVVkZJkQmS37XHVY3HYblK3SBkpCqGazWa/XW63WfD4HwIIghGQ2YSJqFKdSXw2KmWJhSPYAjkJkjuMA7U6nY5cCc5KnxPTI4womGcic8bAaWanAZ8JpSZxkO8AgPhCDTojjgL/rIFn1HlfZ4xLDSIxlf7wIGHkzXviUWJTP/6ZktYI/nRPLBOe5XnSn2u9/Xp9dD2tN5v1J6/OXe6AnB7ON92a7kqpnyLZNXRVX7kTJOD0H2Fgtm6vA5Kzkc1bymbzNKkrvGCMPsMGCjkU9hpWqhiUj4TW8MPGOkuPxmC3FsiwoGGPKZycAYGJg7+x5M1cCDibUSMDm6RV7jwGEcksp3yCHPiUOWug+axSdsfLu1+OLm8kfl93Di7tGTyyTz/6Xz+ALzsISHf3V/3h+A/qpdntY63w4ax9d3h9ddr+OlZgUO0ruYwYdi3Go2uQf1umzFnTo43nn3W/HrYfFSPT6HIK20dfz548+Z2TAXnjuGcnts+uZEtEtzOk6ozX//HNTfWVAbcdzXH//uwMHvgPvhgzac+IGxAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("picture",{parentName:"span"},"\n          ",Object(i.b)("source",{parentName:"picture",srcSet:["/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/0eda2/spm_on_kubernetes.webp 288w","/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/ae2a5/spm_on_kubernetes.webp 381w"],sizes:"(max-width: 381px) 100vw, 381px",type:"image/webp"}),"\n          ",Object(i.b)("source",{parentName:"picture",srcSet:["/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/7fc1e/spm_on_kubernetes.png 288w","/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/b6c51/spm_on_kubernetes.png 381w"],sizes:"(max-width: 381px) 100vw, 381px",type:"image/png"}),"\n          ",Object(i.b)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/b6c51/spm_on_kubernetes.png",alt:"spm on kubernetes",title:"spm on kubernetes",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),Object(i.b)(d,{mdxType:"Caption"},Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Figure 2:")," SPM packaging for Kubernetes")),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Database support remains on virtual machines (VMs) as part of the initial offering.")),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," IBM MQ running on Kubernetes is only supported on OpenShift. When deploying SPM on IBM Cloud Kubernetes Services, IBM MQ must be hosted on virtual machines or bare metal. More information about SPM and IBM MQ can be found ",Object(i.b)("a",{parentName:"p",href:"/spm-kubernetes/supporting-infrastructure/mq/mq-overview"},"here"),".")),Object(i.b)("p",null,"To support containerized architectures, a number of architectural changes were made. The changes are documented as follows and apply only to SPM running on\nKubernetes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.wlp.doc/Kubernetes/c_KubJMSArchitecture.html"},"Message Architecture"),"\nWhen IBM® Cúram Social Program Management is containerized, IBM MQ Long Term Support (LTS) is used as the message engine to process internal application\nJMS-based deferred processing."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.wlp.doc/Kubernetes/c_KubThreadIsolation.html"},"Transaction Isolation"),"\nClient HTTP initiated transactions and JMS initiated transactions run on different WebSphere Application Server Liberty instances, integrated through\nan external message engine (for example, IBM MQ)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.wlp.doc/Kubernetes/c_KubElasticity.html"},"Elasticity"),"\nElasticity in IBM Cloud Kubernetes Service is the ability to scale up or down pods and nodes to adjust to the load to meet the end user demand.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-arch-overview-architecture-overview-mdx-43ba57d071aa26d97888.js.map