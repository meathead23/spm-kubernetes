(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("NmYn"),o=n.n(i),l=n("Wbzz"),b=n("Xrax"),c=n("k4MR"),p=n("TSYQ"),s=n.n(p),d=n("QH2O"),m=n.n(d),u=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===a,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},n)))))},O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,i=r.baseUrl,o=r.subDirectory,b=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},f=n("FCXl"),g=n("dI71"),N=n("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),i=n===r,b=new RegExp(r+"/?(#.*)?$"),c=a.replace(b,n);return Object(u.b)("li",{key:e,className:s()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(u.b)(l.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},i))))))},t}(r.a.Component),M=n("MjG9"),v=n("CzIb"),C=n("Asxa"),x=n("OIbQ"),w=n.n(x),k=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(C.c,{className:w.a.row},Object(u.b)(C.a,null,Object(u.b)("div",{className:w.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,i=t.frontmatter,p=void 0===i?{}:i,s=t.relativePagePath,d=t.titleType,m=p.tabs,O=p.title,g=p.theme,N=p.description,C=p.keywords,x=p.date,w=Object(v.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,T=P?a.pathname.replace(P,""):a.pathname,S=m?T.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",H=g||w;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:O,pageDescription:N,pageKeywords:C,titleType:d},Object(u.b)(h,{title:r?Object(u.b)(r,null):O,label:"label",tabs:m,theme:H}),m&&Object(u.b)(y,{title:O,slug:T,tabs:m,currentTab:S}),Object(u.b)(M.a,{padded:!0},n,Object(u.b)(j,{relativePagePath:s}),Object(u.b)(k,{date:x})),Object(u.b)(f.a,{pageContext:t,location:a,slug:T,tabs:m,currentTab:S}),Object(u.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YGih:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return d}));var a,r=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("013z"),b=(n("qKvR"),{}),c=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:b},s=l.a;function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(s,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To build the required Docker images, the context for building them must be established as described in the ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/build/"},"Docker build")," command description."),Object(o.b)("p",null,"The following components provide this context:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The artifacts that you downloaded by following the steps that are described in ",Object(o.b)("a",{parentName:"li",href:"/spm-kubernetes/prereq/git"},"GitHub repo"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"release.zip")," and ",Object(o.b)("inlineCode",{parentName:"li"},"StaticContent.zip")," files that you built in ",Object(o.b)("a",{parentName:"li",href:"/spm-kubernetes/deploy-spm/build-spm"},"Building the SPM application"),".")),Object(o.b)("h2",null,"Building IBM® Social Program Management (SPM) resources"),Object(o.b)("p",null,"Some of the Docker images that you build rely on the ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," and ",Object(o.b)("inlineCode",{parentName:"p"},"StaticContent.zip")," files that you built in ",Object(o.b)("a",{parentName:"p",href:"/spm-kubernetes/deploy-spm/build-spm"},"Building the SPM application"),"."),Object(o.b)("p",null,"If you built ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," and ",Object(o.b)("inlineCode",{parentName:"p"},"StaticContent.zip")," on a different computer to the one where container environment will be deployed, you must transfer the files to the computer you’re currently working on.\nFor simplicity, it is assumed that these files are copied to ",Object(o.b)("inlineCode",{parentName:"p"},"/tmp/"),"."),Object(o.b)("h2",null,"Preparing the SPM environment"),Object(o.b)("p",null,"Prepare the SPM Docker environment by using the ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," file."),Object(o.b)("p",null,"For the following steps, use the ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME")," folder that you created in ",Object(o.b)("a",{parentName:"p",href:"/spm-kubernetes/prereq/git"},"GitHub repo"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To create a ",Object(o.b)("inlineCode",{parentName:"p"},"release-stage")," folder to contain the contents of ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip"),", run the following command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"mkdir $SPM_HOME/dockerfiles/Liberty/content/release-stage\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To extract ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," into the ",Object(o.b)("inlineCode",{parentName:"p"},"release-stage")," folder, run the following commands:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"unzip -qd $SPM_HOME/dockerfiles/Liberty/content/release-stage /tmp/release.zip\nchmod +x $SPM_HOME/dockerfiles/Liberty/content/release-stage/*.sh\n")),Object(o.b)("p",{parentName:"li"},"Where ",Object(o.b)("inlineCode",{parentName:"p"},"/tmp/release.zip")," is the absolute path where the ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," is saved."))),Object(o.b)("h2",null,"Modifying SPM properties"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Bootstrap.properties")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AppServer.properties")," are required to configure WebSphere® Liberty.\nHowever the relevant properties in ",Object(o.b)("inlineCode",{parentName:"p"},"Bootstrap.properties")," that you modify in the on-premise implementation of SPM are no longer relevant because Kubernetes configmaps provide the necessary values for the database configuration."),Object(o.b)("p",null,"The only properties that you must modify in ",Object(o.b)("inlineCode",{parentName:"p"},"AppServer.properties")," are ",Object(o.b)("inlineCode",{parentName:"p"},"security.username")," and ",Object(o.b)("inlineCode",{parentName:"p"},"security.password"),".\nThese properties contain the WebSphere Liberty administrator credentials. If the password is changed, the value must be the encrypted  by running the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd $SERVER_DIR\n./build.sh encrypt -Dpassword=<The password to be encrypted>\n")),Object(o.b)("p",null,"Copy the property files by using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd $SPM_HOME/dockerfiles/Liberty/content\ncp -vf *.properties release-stage/project/properties/\n")),Object(o.b)("h2",null,"WebSphere Liberty server configuration"),Object(o.b)("p",null,"All configuration of WebSphere Liberty will be handled by the Helm Charts. See the ",Object(o.b)("a",{parentName:"p",href:"/spm-kubernetes/deployment/hc_preparation"},"Preparing Helm Charts")," topic for more information."),Object(o.b)("h2",null,"Copying static content artifacts"),Object(o.b)("p",null,"Copy the static content ",Object(o.b)("inlineCode",{parentName:"p"},".zip")," file for Docker image creation. Run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cp -vf /tmp/StaticContent.zip $SPM_HOME/dockerfiles/HTTPServer/\n")),Object(o.b)("h2",null,"Installing external artifacts"),Object(o.b)("p",null,"In addition to ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," and ",Object(o.b)("inlineCode",{parentName:"p"},"StaticContent.zip"),", download and install the following artifacts."),Object(o.b)("h3",null,"Add the Ant zip file to the Docker environment"),Object(o.b)("p",null,"Copy ",Object(o.b)("inlineCode",{parentName:"p"},"apache-ant-1.10.6-bin.zip")," to ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME/dockerfiles/Liberty/content"),". If Ant is not already available on the computer, run the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd $SPM_HOME/dockerfiles/Liberty/content\nwget https://archive.apache.org/dist/ant/binaries/apache-ant-1.10.6-bin.zip\n")),Object(o.b)("h3",null,"CryptoConfig.jar"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CryptoConfig.jar")," is required for SPM cryptography to function correctly. This jar is automatically created in the following locations when you run the\n",Object(o.b)("inlineCode",{parentName:"p"},"build.sh configtest")," target:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$SERVER_DIR/build/CryptoConfig.jar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$JAVA_HOME/jre/lib/ext/CryptoConfig.jar"))),Object(o.b)("p",null,"However, the ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," does not include this jar file, so the jar file must be copied separately from the environment where the ",Object(o.b)("inlineCode",{parentName:"p"},"release.zip")," was built."),Object(o.b)("p",null,"Place the ",Object(o.b)("inlineCode",{parentName:"p"},"CryptoConfig.jar")," file in ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME/dockerfiles/Liberty/content/release-stage/build"),"."),Object(o.b)(c,{mdxType:"InlineNotification"},Object(o.b)("p",null,"Cryptography keystores for SPM vary based on the JVM vendor, so the vendor in the build environment must correspond to that used in the Docker images.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"websphere-liberty")," images from ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/_/websphere-liberty"},"Docker Hub")," use IBM Java SDK 8.")),Object(o.b)("p",null,"For convenience, you can use a docker container to create the ",Object(o.b)("inlineCode",{parentName:"p"},"CryptoConfig.jar")," file.\nNote the use of ",Object(o.b)("inlineCode",{parentName:"p"},"$ANT_HOME")," environment variable in the following ",Object(o.b)("inlineCode",{parentName:"p"},"docker run")," command.\nThis value must map to a working copy of Ant on your workstation.\nIf you do not have a copy of Ant locally you can extract it from ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME")," using:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"unzip -qd /tmp/ $SPM_HOME/dockerfiles/Liberty/content/apache-ant-1.10.6-bin.zip\nexport ANT_HOME=/tmp/apache-ant-1.10.6\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n    -v $ANT_HOME:/tmp/ant \\\n    -v $SPM_HOME/dockerfiles/Liberty/content/release-stage:/work/dir \\\n    -v $SPM_HOME/dockerfiles/Liberty/content/release-stage/SetEnvironment.sh:/work/SetEnvironment.sh \\\n    -w /work/dir \\\n    -u root \\\n    -e ANT_HOME=/tmp/ant \\\n    -e WLP_HOME=/opt/ibm/wlp \\\n    ibmcom/websphere-liberty:20.0.0.9-full-java8-ibmjava-ubi \\\n    bash -c 'export PATH=$ANT_HOME/bin:$PATH:.; build.sh internal.update.crypto.jar'\n")),Object(o.b)("h3",null,"Installing javax.mail.jar and activation.jar files"),Object(o.b)("p",null,"Java Mail is an external dependency for SPM and is represented by the JAR files ",Object(o.b)("inlineCode",{parentName:"p"},"activation.jar")," and ",Object(o.b)("inlineCode",{parentName:"p"},"javax.mail.jar"),".\nPlace these files in the folder ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME/dockerfiles/Liberty/content/dependencies")," (filenames must be exact, that is, have no version numbers)."),Object(o.b)("p",null,"If you do not have the jar files available, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"getJavaMail.xml")," Ant file that is located in the ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME/dockerfiles/Liberty/content")," folder to download the files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd $SPM_HOME/dockerfiles/Liberty/content\n$ANT_HOME/bin/ant -f getJavaMail.xml\n")),Object(o.b)("p",null,"Confirm the availability of the JAR files by running the following command:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ls $SPM_HOME/dockerfiles/Liberty/content/dependencies")),Object(o.b)("h3",null,"Downloading IBM MQ Resource Adapter"),Object(o.b)(c,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," As of Release 20.7.0, the IBM MQ Resource Adapter version used to verify this runbook is 9.1.5.0.")),Object(o.b)("p",null,"IBM MQ is required for WebSphere Liberty JMS support, therefore you must install the MQ Resource Adapter."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the IBM MQ resource adapter from Fix Central."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click this link: ",Object(o.b)("a",{parentName:"p",href:"https://ibm.biz/mq91cdRA"},"IBM MQ Resource Adapter"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Find the resource adapter for your version of IBM MQ in the displayed list of available fixes. For example:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"release level: 9.1.5.0-IBM-MQ-Java-InstallRA\nContinuous Delivery Release: 9.1.5 IBM MQ Resource Adapter for use with Application Servers\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Then click the resource adapter file name and follow the download process.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the downloaded file ( ",Object(o.b)("inlineCode",{parentName:"p"},"V.R.M.F-IBM-MQ-Java-InstallRA.jar")," ) to ",Object(o.b)("inlineCode",{parentName:"p"},"$SPM_HOME/dockerfiles/Liberty/content/"),"."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-build-images-setup-docker-context-mdx-c3575c7ec6c53bfc1d04.js.map