(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),d=a.n(m),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},f=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),g=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),s=n.replace(l,a);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(u.b)(c.Link,{className:N.link,to:""+s},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},i))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),T=a("Asxa"),y=a("OIbQ"),S=a.n(y),M=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:S.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:S.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,d=b.tabs,f=b.title,g=b.theme,N=b.description,T=b.keywords,y=b.date,S=Object(w.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=I?n.pathname.replace(I,""):n.pathname,k=d?P.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",A=g||S;return Object(u.b)(s.a,{tabs:d,homepage:!1,theme:A,pageTitle:f,pageDescription:N,pageKeywords:T,titleType:m},Object(u.b)(h,{title:r?Object(u.b)(r,null):f,label:"label",tabs:d,theme:A}),d&&Object(u.b)(x,{title:f,slug:P,tabs:d,currentTab:k}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(M,{date:y})),Object(u.b)(j.a,{pageContext:t,location:n,slug:P,tabs:d,currentTab:k}),Object(u.b)(l.a,null))}},"4+f4":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n,r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),s=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={_frontmatter:l},p=c.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",null,"IBM Security Access Manager"),Object(o.b)("p",null,"IBM® Cúram Social Program Management (SPM) can be integrated with ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/ie-en/marketplace/access-management/details"},"IBM Security Access Manager")," (ISAM) to enable single sign-on (SSO) authentication.\nSSO authentication enables users to access multiple secure applications by authenticating once with a single user name and password."),Object(o.b)("p",null,"If a user authenticates to an SSO system, they are no longer prompted for credentials when they access any of the other applications that are configured to work with the SSO system."),Object(o.b)("p",null,"SSO systems usually maintain the user accounts on a lightweight directory application protocol (LDAP) server. If user accounts are stored in one location, it is easier for system administrators to safeguard the accounts.\nAlso, it is easier for users to reset one account password for multiple applications."),Object(o.b)("p",null,"For an overview of ",Object(o.b)("inlineCode",{parentName:"p"},"ISAM")," as well as procurement options, please visit ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/ie-en/marketplace/access-management"},"IBM Marketplace"),".\nThe following guide provides the steps required to configure SPM on a Kubernetes environment for integration with ",Object(o.b)("inlineCode",{parentName:"p"},"ISAM"),".\nFor steps covering the configuration of ISAM itself, please review the ",Object(o.b)("a",{parentName:"p",href:"https://community.ibm.com/community/user/security/viewdocument/access-manager-federation-cookbook-1?CommunityKey=e7c36119-46d7-42f2-97a9-b44f0cc89c6d&tab=librarydocuments"},"Federation Cookbook"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," The version of ",Object(o.b)("inlineCode",{parentName:"p"},"ISAM")," used for the following examples is 9.0.7."),Object(o.b)("h3",null,"ISAM integration with SPM"),Object(o.b)("p",null,"To integrate with SPM, we will need to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Retrieve the federation metadata XML file from ISAM server, either via management console or via RESTful call to API."),Object(o.b)("p",{parentName:"li"},"For steps on using the console please review the Federation Cookbook.\nFor steps on using the API please review the ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/SSPREK_9.0.7/com.ibm.isam.doc/develop/rapi/index.html"},"RESTful Web service documentation"),".\nThis document will use the latter."),Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"RESTful Web service documentation")," provides a library of the available Web services that can be used to interact with your ISAM server with tools such as curl.\nThe information provided in the request section of each Web service can be used to construct a curl command."),Object(o.b)("p",{parentName:"li"},"To export the meta-data for a specific federation, the documentation (located under ",Object(o.b)("inlineCode",{parentName:"p"},"Secure: Federation -> Manage: -> Federations: -> Export a federation"),") gives an example of:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"GET https://{appliance_hostname}/iam/access/v8/federations/{federation_id}/metadata\n")),Object(o.b)("p",{parentName:"li"},"and lists the accepted headers as:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"Accept:application/json\nAuthorization: Basic\n")),Object(o.b)("p",{parentName:"li"},"The corresponding curl command would be formatted as follows:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"curl --location --request GET 'https://{appliance_hostname}/iam/access/v8/federations/{federation_id}/metadata' \\\n--header 'Authorization: Basic {token}'\n")),Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"curl")," command will return the federation metadata XML file in the response body.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the federation metadata file as a configmap into namespace."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"kubectl --namespace ${NAMESPACE} create configmap $releaseName-federated-metadata-cm --from-file=${federationMetadataFile}\n")),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:"),Object(o.b)("inlineCode",{parentName:"p"},"${NAMESPACE}")," refers to the namespace being used for the install and ",Object(o.b)("inlineCode",{parentName:"p"},"${federationMetadataFile}")," refers to the XML file returned from the previous step."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enable ISAM by toggling the following properties in the override values file injected through Helm during deployment:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:"path=apps-values.yaml",path:"apps-values.yaml"},"---\nglobal:\n  isam:\n    enabled: true\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Return to ",Object(o.b)("a",{parentName:"p",href:"/spm-kubernetes/deployment/hc_preparation"},"Preparing Helm charts")," and continue the installation of SPM."),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:")," The ",Object(o.b)("inlineCode",{parentName:"p"},"curamAuthFilter")," defined within the ",Object(o.b)("inlineCode",{parentName:"p"},"helm-charts/apps/templates/configmaps/configmap-isam.yaml")," resource may need expansion to handle customisations."),Object(o.b)("p",{parentName:"li"},"This should be reviewed by your security architect."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After the completion of the helm install, complete the federation steps.\nDetailed instructions for the following steps can be found in the Federation Cookbook.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"First, add the Service Provider Signer Certificate to the ISAM server’s trust store.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next import the Service Provider XML to ISAM server."),Object(o.b)("p",{parentName:"li"},"This XML can be obtained from ",Object(o.b)("inlineCode",{parentName:"p"},"https://<hostname>/ibm/saml20/defaultSP/samlmetadata"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Reload the applicances on the ISAM server."))))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-supporting-infrastructure-isam-mdx-3b6c680b097738df8bb7.js.map