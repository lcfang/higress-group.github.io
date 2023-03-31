"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[9659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=s.createContext({}),p=function(e){var t=s.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return s.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,h=u["".concat(a,".").concat(g)]||u[g]||m[g]||o;return r?s.createElement(h,i(i({ref:t},c),{},{components:r})):s.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var s=r(7462),n=(r(7294),r(3905));const o={title:"\u5b89\u88c5\u90e8\u7f72",keywords:["Deploy"],description:"Higress Helm\u90e8\u7f72.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},i="\u5b89\u88c5\u90e8\u7f72",l={unversionedId:"ops/deploy-by-helm",id:"ops/deploy-by-helm",title:"\u5b89\u88c5\u90e8\u7f72",description:"Higress Helm\u90e8\u7f72.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/zh-cn/docs/ops/deploy-by-helm",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",keywords:["Deploy"],description:"Higress Helm\u90e8\u7f72.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},sidebar:"docs",previous:{title:"HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e",permalink:"/zh-cn/docs/user/dubbo-envoyfilter"},next:{title:"\u7248\u672c\u5347\u7ea7",permalink:"/zh-cn/docs/ops/upgrade"}},a={},p=[{value:"\u5b89\u88c5 Higress",id:"\u5b89\u88c5-higress",level:2},{value:"Helm \u5b89\u88c5\u547d\u4ee4",id:"helm-\u5b89\u88c5\u547d\u4ee4",level:3},{value:"\u5b89\u88c5\u53c2\u6570",id:"\u5b89\u88c5\u53c2\u6570",level:3},{value:"\u652f\u6301 Istio CRD",id:"\u652f\u6301-istio-crd",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5b89\u88c5\u90e8\u7f72"},"\u5b89\u88c5\u90e8\u7f72"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," \u662f\u4e00\u4e2a\u7528\u4e8e\u81ea\u52a8\u5316\u7ba1\u7406\u548c\u53d1\u5e03 Kubernetes \u8f6f\u4ef6\u7684\u5305\u7ba1\u7406\u7cfb\u7edf\u3002\u901a\u8fc7 Helm \u53ef\u4ee5\u5728\u60a8\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5feb\u901f\u90e8\u7f72\u5b89\u88c5 Higress \u7f51\u5173\u3002"),(0,n.kt)("h2",{id:"\u5b89\u88c5-higress"},"\u5b89\u88c5 Higress"),(0,n.kt)("p",null,"Higress \u7f51\u5173\u7531\u63a7\u5236\u9762\u7ec4\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"higress-controller")," \u548c\u6570\u636e\u9762\u7ec4\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"higress-gateway")," \u7ec4\u6210\u3002Istio \u8d1f\u8d23\u7ba1\u7406",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e73\u9762\u7684 API \u914d\u7f6e"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"higress-controller")," \u8d1f\u8d23\u7ba1\u7406",(0,n.kt)("strong",{parentName:"p"},"\u63a7\u5236\u5e73\u9762\u7684 API \u914d\u7f6e"),"\u3002"),(0,n.kt)("h3",{id:"helm-\u5b89\u88c5\u547d\u4ee4"},"Helm \u5b89\u88c5\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install higress higress.io/higress -n higress-system --create-namespace\n")),(0,n.kt)("h3",{id:"\u5b89\u88c5\u53c2\u6570"},"\u5b89\u88c5\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"enableStatus")),(0,n.kt)("p",null,"\u4e3a\u907f\u514d\u4ece Nginx Ingress \u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u8986\u76d6 Ingress \u5bf9\u8c61\u7684 status \u5b57\u6bb5\uff0cHigress \u9ed8\u8ba4\u4e0d\u4f1a\u5c06\u5165\u53e3 IP \u5199\u5165 Ingress \u7684 status\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set enableStatus=true")," \u542f\u7528\u6b64\u529f\u80fd\u3002"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"ingressClass")),(0,n.kt)("p",null,"\u5728\u96c6\u7fa4\u5185\u90e8\u7f72\u4e86\u591a\u4e2a\u7f51\u5173\u65f6\uff0c\u53ef\u4ee5\u57fa\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class"},"IngressClass")," \u533a\u5206\u6bcf\u4e2a\u7f51\u5173\u7684\u804c\u8d23\u8303\u56f4\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set ingressClass=<name>")," \u6307\u5b9a Higress \u76d1\u542c\u54ea\u4e9b Ingress\u3002"),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"watchNamespace")),(0,n.kt)("p",null,"\u5f53\u57fa\u4e8e K8s \u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u4e1a\u52a1\u7cfb\u7edf\u9694\u79bb\u65f6\uff0c\u82e5\u9700\u8981\u5bf9\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u90e8\u7f72\u4e00\u5957\u72ec\u7acb\u7684\u7f51\u5173\uff0c\u53ef\u4ee5\u901a\u8fc7 watchNamespace \u9650\u5236 Higress \u76d1\u542c\u6b64\u547d\u540d\u7a7a\u95f4\u5185\u7684 Ingress\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set watchNamespace=<namespace>")," \u6307\u5b9a\u3002"),(0,n.kt)("h2",{id:"\u652f\u6301-istio-crd"},"\u652f\u6301 Istio CRD"),(0,n.kt)("p",null,"\u96c6\u7fa4\u91cc\u9700\u8981\u63d0\u524d\u5b89\u88c5\u597d Istio \u7684 CRD\uff0c\u5982\u679c\u4e0d\u5e0c\u671b\u5b89\u88c5 Istio\uff0c\u4e5f\u53ef\u4ee5\u53ea\u5b89\u88c5 Istio \u7684 CRD\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add istio https://istio-release.storage.googleapis.com/charts\nhelm install istio-base istio/base -n istio-system\n")),(0,n.kt)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u9700\u8981\u66f4\u65b0 Higress \u7684\u90e8\u7f72\u53c2\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress\n")))}m.isMDXComponent=!0}}]);