(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("NmYn"),r=a.n(o),c=a("Wbzz"),b=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),u=a.n(s),m=a("QH2O"),d=a.n(m),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return Object(p.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,o=l.baseUrl,r=l.subDirectory,b=o+"/edit/"+l.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),x=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===l,b=new RegExp(l+"/?(#.*)?$"),i=n.replace(b,a);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(p.b)(c.Link,{className:f.link,to:""+i},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},o))))))},t}(l.a.Component),y=a("MjG9"),T=a("CzIb"),w=a("Asxa"),v=a("OIbQ"),k=a.n(v),C=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,o=t.frontmatter,s=void 0===o?{}:o,u=t.relativePagePath,m=t.titleType,d=s.tabs,O=s.title,x=s.theme,f=s.description,w=s.keywords,v=s.date,k=Object(T.a)().interiorTheme,P=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,M=d?I.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",H=x||k;return Object(p.b)(i.a,{tabs:d,homepage:!1,theme:H,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:m},Object(p.b)(h,{title:l?Object(p.b)(l,null):O,label:"label",tabs:d,theme:H}),d&&Object(p.b)(N,{title:O,slug:I,tabs:d,currentTab:M}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u}),Object(p.b)(C,{date:v})),Object(p.b)(g.a,{pageContext:t,location:n,slug:I,tabs:d,currentTab:M}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},"O9+c":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return O}));var n=a("wx14"),l=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},i=b("InlineNotification"),s=b("Tabs"),u=b("Tab"),m=b("Row"),d=b("Column"),p={_frontmatter:c},h=r.a;function O(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)(h,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Helm charts are stored in a repository. For development purposes, you can use a local repository to use Helm along with Minikube. This runbook uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/helm/chartmuseum/"},"ChartMuseum")," as the local repository."),Object(o.b)("p",null,"A Helm chart is a collection of files that describe a related set of Kubernetes resources. Helm charts are the recommended way to distribute deployments on Kubernetes clusters."),Object(o.b)("p",null,"Use ChartMuseum to develop, test, and deploy locally before you distribute the charts. For more information, see ",Object(o.b)("a",{parentName:"p",href:"https://helm.sh/docs/intro/"},"Introduction to Helm"),"."),Object(o.b)("h2",null,"Installing ChartMuseum in a Docker® container"),Object(o.b)("p",null,"ChartMuseum can run in a Docker container by using the ",Object(o.b)("inlineCode",{parentName:"p"},"docker run")," command when the docker container is created."),Object(o.b)("p",null,"Take the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start a Docker container that is accessible locally on port 8080:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -d --name chartmuseum \\\n  -p 8080:8080 \\\n  -e DEBUG=true \\\n  -e STORAGE=local \\\n  -e STORAGE_LOCAL_ROOTDIR=/tmp/charts \\\n  chartmuseum/chartmuseum:v0.12.0\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the ",Object(o.b)("inlineCode",{parentName:"li"},"docker logs")," command to view the Chart Museum logs:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker logs chartmuseum\n")),Object(o.b)("h3",null,"Testing ChartMuseum connectivity"),Object(o.b)("p",null,"Run the following command to test connectivity. ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1")," is the localhost IP address."),Object(o.b)(i,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," On Windows, the Docker Engine can run in a dedicated ",Object(o.b)("inlineCode",{parentName:"p"},"docker-machine"),", or can be reused from the Minikube VM.")),Object(o.b)(s,{mdxType:"Tabs"},Object(o.b)(u,{label:"Mac/Linux",mdxType:"Tab"},Object(o.b)(m,{mdxType:"Row"},Object(o.b)(d,{mdxType:"Column"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8080/index.yaml\n"))))),Object(o.b)(u,{label:"Windows",mdxType:"Tab"},Object(o.b)(m,{mdxType:"Row"},Object(o.b)(d,{mdxType:"Column"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-powershell"},"Invoke-RestMethod http://$(minikube ip):8080/index.yaml\n# OR\nInvoke-RestMethod http://$(docker-machine ip):8080/index.yaml\n")))))),Object(o.b)("p",null,"You will see something like the following example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nentries: {}\ngenerated: "2019-06-17T10:55:37Z"\nserverInfo: {}\n')),Object(o.b)("h2",null,"Provisioning charts"),Object(o.b)("p",null,"When ChartMuseum is running, you can copy the compressed ",Object(o.b)("inlineCode",{parentName:"p"},"tgz")," files that are produced by Helm, or by using the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/chartmuseum/helm-push"},"Helm Push")," plugin (recommended approach)."),Object(o.b)(i,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," On Windows, the Helm Push plugin must be installed from a Git Bash window.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm plugin install https://github.com/chartmuseum/helm-push\n")),Object(o.b)("p",null,"Creating the chart files is covered later in the runbook when you run the ",Object(o.b)("inlineCode",{parentName:"p"},"helm package")," command. For more information, see ",Object(o.b)("a",{parentName:"p",href:"/spm-kubernetes/deployment/hc_preparation"},"Preparing Helm Charts"),"."),Object(o.b)("h2",null,"Configure Helm to access the local repository"),Object(o.b)("p",null,"To use ChartMuseum as a repository, you must configure Helm to point to it. Run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm repo add local-development http://127.0.0.1:8080/\n")),Object(o.b)("p",null,"Verify the list of repositories by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm repo list\n")),Object(o.b)("p",null,"The helm repo list command also returns the ",Object(o.b)("inlineCode",{parentName:"p"},"local-development")," repository that you added when you ran the ",Object(o.b)("inlineCode",{parentName:"p"},"helm repo add")," command."),Object(o.b)("p",null,"When the repository is added, run the following command to refresh the Helm index:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm repo update\n")))}O.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-prereq-chartmuseum-mdx-6c899d0d3d4bc565a8ef.js.map