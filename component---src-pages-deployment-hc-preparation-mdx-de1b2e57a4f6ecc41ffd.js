(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),m=a.n(b),p=a("QH2O"),d=a.n(p),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},f=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,c=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),y=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),s=n.replace(c,a);return Object(u.b)("li",{key:e,className:m()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(u.b)(i.Link,{className:y.link,to:""+s},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},o))))))},t}(r.a.Component),x=a("MjG9"),N=a("CzIb"),w=a("Asxa"),M=a("OIbQ"),T=a.n(M),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(w.c,{className:T.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,m=t.relativePagePath,p=t.titleType,d=b.tabs,f=b.title,j=b.theme,y=b.description,w=b.keywords,M=b.date,T=Object(N.a)().interiorTheme,I=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=I?n.pathname.replace(I,""):n.pathname,C=d?P.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",S=j||T;return Object(u.b)(s.a,{tabs:d,homepage:!1,theme:S,pageTitle:f,pageDescription:y,pageKeywords:w,titleType:p},Object(u.b)(h,{title:r?Object(u.b)(r,null):f,label:"label",tabs:d,theme:S}),d&&Object(u.b)(v,{title:f,slug:P,tabs:d,currentTab:C}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:m}),Object(u.b)(k,{date:M})),Object(u.b)(O.a,{pageContext:t,location:n,slug:P,tabs:d,currentTab:C}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Mrbt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),s=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),b={_frontmatter:c},m=i.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(m,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s,{kind:"info",mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Troubleshooting")," If you need help troubleshooting problems, see ",Object(l.b)("a",{parentName:"p",href:"/spm-kubernetes/runtime/troubleshoot"},"Troubleshooting problems"),".")),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://github.com/IBM/spm-kubernetes"},"spm-kubernetes")," repository provides the following Helm charts:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"apps:")," defines how to deploy the IBM® WebSphere® Liberty images with IBM® Cúram Social Program Management (SPM)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"batch:")," defines the batch image configuration."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"uawebapp:")," defines how to deploy the Universal Access (React) application."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"web:")," defines how to deploy the static content image for SPM (",Object(l.b)("inlineCode",{parentName:"li"},"Curam")," image only)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"mqserver:")," defines the IBM WebSphere MQ image configuration."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"xmlserver:")," defines the xmlserver container configuration."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"spm:")," an umbrella chart to contain all the other charts.")),Object(l.b)("p",null,"The charts use a templating mechanism to create the YAML file that is used by Kubernetes.\nFor this reason, the main configuration values are stored for each chart in a ",Object(l.b)("inlineCode",{parentName:"p"},"values.yaml")," file in the main folder of the charts.\nThe values can also be overwritten by the ",Object(l.b)("inlineCode",{parentName:"p"},"spm:*")," umbrella chart or by a provided override file during deployment as described in ",Object(l.b)("a",{parentName:"p",href:"/spm-kubernetes/deployment/hc_deployment"},"Deploying Helm charts"),"."),Object(l.b)("p",null,"YAML is a human-readable structured data format. It provides powerful configuration settings, without having to learn a more complex code type like CSS, JavaScript, or PHP."),Object(l.b)("h2",null,"Preparing to run the Helm charts"),Object(l.b)("p",null,"Before you run the charts, you must configure the database, configure IBM MQ, resolve all chart dependencies, and test the charts.\nYou may also optionally integrate your deployment with an ISAM server for SSO enablement,\nto do so complete the steps on the ",Object(l.b)("a",{parentName:"p",href:"/spm-kubernetes/supporting-infrastructure/ISAM"},"Enabling ISAM")," page under Supporting Infrastructure before returning here."),Object(l.b)("p",null,"Many of the Helm charts that make up a deployment of SPM depend on the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/IBM/charts/tree/master/samples/ibm-sch"},"IBM Shared Configuration Helpers")," chart, so an extra Helm repository must be added using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"helm repo add sch https://raw.githubusercontent.com/IBM/charts/master/repo/samples\nhelm repo update\n")),Object(l.b)("h3",null,"Configuring the Helm chart"),Object(l.b)("p",null,"An in-depth catalog of available configuration options is available in the ",Object(l.b)("a",{parentName:"p",href:"/spm-kubernetes/deployment/config-reference"},"Configuration Reference")," topic."),Object(l.b)("p",null,"While you may change the values in your local copy of ",Object(l.b)("inlineCode",{parentName:"p"},"helm-charts/spm/values.yaml"),", it is strongly recommended to use a values override file with your custom options."),Object(l.b)(s,{mdxType:"InlineNotification"},Object(l.b)("p",null,"Sample override files for Minikube, IKS, and CRC are also available in the ",Object(l.b)("inlineCode",{parentName:"p"},"$SPM_HOME/static/resources")," folder. We have provided a minimum\nspec required for a successful deployment in these files, with more options for overriding commented out. The config options from the\nbefore mentioned ",Object(l.b)("a",{parentName:"p",href:"/spm-kubernetes/deployment/config-reference"},"Configuration Reference")," topic should be used with these files.")),Object(l.b)("h3",null,"Configuring IBM MQ"),Object(l.b)("p",null,"IBM MQ is already configured to work out of the box with a secure connection with IBM WebSphere Liberty.\nThe commands that create all the objects that are needed on the queue manager are defined in a config map, in the ",Object(l.b)("inlineCode",{parentName:"p"},"configmap-mqsc.yaml")," file."),Object(l.b)("p",null,"The password for the IBM MQ web console can be retrieved from the created Secret resource using the following command ",Object(l.b)("strong",{parentName:"p"},"after")," it has been deployed:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret <releaseName>-mq-credentials -o go-template='{{.data.adminPasswordKey | base64decode}}{{\"\\n\"}}'\n")),Object(l.b)("h2",null,"Packaging the Helm charts"),Object(l.b)("p",null,"To use the Helm Charts to install SPM, package the charts and load them into a repository. For more information, see ",Object(l.b)("a",{parentName:"p",href:"/spm-kubernetes/prereq/chartmuseum"},"ChartMuseum"),"."),Object(l.b)("p",null,"For each chart, its dependencies must be resolved before it can be loaded into a Helm repository like Chart museum."),Object(l.b)(s,{mdxType:"InlineNotification"},Object(l.b)("p",null,"Due to an internal Helm ",Object(l.b)("a",{parentName:"p",href:"https://github.com/helm/helm/issues/5780"},"defect"),", conditional subchart enablement does not work in Helm 3.\nAs a result of this, ",Object(l.b)("inlineCode",{parentName:"p"},"uawebapp")," needs to be packaged and pushed, irrespective of whether you are deploying it or not.\nIt is possible to remove the dependency from the spm ",Object(l.b)("inlineCode",{parentName:"p"},"chart.yaml"),", if you do not wish to package and push it to the repo.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cd $SPM_HOME/helm-charts\n\nhelm dependency update apps\nhelm dependency update mqserver\nhelm dependency update xmlserver\nhelm dependency update batch\nhelm dependency update web\nhelm dependency update uawebapp\n")),Object(l.b)("p",null,"If you made any changes to any of the charts, these can now be verified using the ",Object(l.b)("inlineCode",{parentName:"p"},"helm lint")," and ",Object(l.b)("inlineCode",{parentName:"p"},"helm template")," commands, for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cd $SPM_HOME/helm-charts\n\nhelm lint apps\nhelm template apps\n")),Object(l.b)("p",null,"To publish the individual charts to the Chart museum repository, run the following commands from the ",Object(l.b)("inlineCode",{parentName:"p"},"helm-charts")," folder. The commands also use the ",Object(l.b)("inlineCode",{parentName:"p"},"$SPM_HOME")," value that is defined in ",Object(l.b)("a",{parentName:"p",href:"/spm-kubernetes/prereq/git"},"Install prerequisite software"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cd $SPM_HOME/helm-charts\n\nhelm push apps local-development\nhelm push mqserver local-development\nhelm push xmlserver local-development\nhelm push batch local-development\nhelm push web local-development\nhelm push uawebapp local-development\n\nhelm repo update\n")),Object(l.b)("p",null,"To generate the umbrella chart that is used for the deployment, run the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cd $SPM_HOME/helm-charts\n\nhelm dependency update spm\nhelm push spm local-development\n\nhelm repo update\n")))}p.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-deployment-hc-preparation-mdx-de1b2e57a4f6ecc41ffd.js.map