"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[7881],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},i=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),m=d(a),s=n,c=m["".concat(o,".").concat(s)]||m[s]||b[s]||l;return a?r.createElement(c,p(p({ref:e},i),{},{components:a})):r.createElement(c,p({ref:e},i))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[m]="string"==typeof t?t:n,p[1]=u;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9566:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e",keywords:["Dubbo","discovery"],description:"HTTP\u8f6cDubbo Http2Rpc\u76f8\u5173\u914d\u7f6e",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo-http2rpc.md"},p="HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e",u={unversionedId:"user/dubbo-http2rpc",id:"user/dubbo-http2rpc",title:"HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e",description:"HTTP\u8f6cDubbo Http2Rpc\u76f8\u5173\u914d\u7f6e",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo-http2rpc.md",sourceDirName:"user",slug:"/user/dubbo-http2rpc",permalink:"/zh-cn/docs/user/dubbo-http2rpc",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo-http2rpc.md",tags:[],version:"current",frontMatter:{title:"HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e",keywords:["Dubbo","discovery"],description:"HTTP\u8f6cDubbo Http2Rpc\u76f8\u5173\u914d\u7f6e",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo-http2rpc.md"},sidebar:"docs",previous:{title:"Mcp Bridge \u914d\u7f6e\u8bf4\u660e",permalink:"/zh-cn/docs/user/mcp-bridge"},next:{title:"Wasm \u63d2\u4ef6\u955c\u50cf\u89c4\u8303",permalink:"/zh-cn/docs/user/wasm-image-spec"}},o={},d=[{value:"spec.dubbo",id:"specdubbo",level:3},{value:"spec.dubbo.methods",id:"specdubbomethods",level:3},{value:"spec.dubbo.methods.params",id:"specdubbomethodsparams",level:3},{value:"HTTP_METHOD_TYPE",id:"http_method_type",level:3},{value:"PARAM_SOURCE_TYPE",id:"param_source_type",level:3}],i={toc:d},m="wrapper";function b(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"http\u8f6cdubbo-\u914d\u7f6e\u8bf4\u660e"},"HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e"),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86Http2Rpc\u8fd9\u4e2a\u81ea\u5b9a\u4e49CRD\u7684\u76f8\u5173\u914d\u7f6e\u9879\u3002"),(0,n.kt)("h3",{id:"specdubbo"},"spec.dubbo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service"),(0,n.kt)("td",{parentName:"tr",align:null},"the dubbo interface name"),(0,n.kt)("td",{parentName:"tr",align:null},"dubbo\u670d\u52a1\u63a5\u53e3\u540d"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4f8b\u5982\uff1a"com.alibaba.nacos.example.dubbo.service.DemoService"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"version"),(0,n.kt)("td",{parentName:"tr",align:null},"the dubbo service version"),(0,n.kt)("td",{parentName:"tr",align:null},"dubbo\u670d\u52a1\u7248\u672c\u53f7"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4f8b\u5982\uff1a"1.0.0"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"methods"),(0,n.kt)("td",{parentName:"tr",align:null},"list of spec.dubbo.methods"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u9879\u5bf9\u5e94\u4e86\u4e00\u6761\u65b9\u6cd5\u6620\u5c04\u89c4\u5219"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"specdubbomethods"},"spec.dubbo.methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u540d"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4f8b\uff1a"dev"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"serviceMethod"),(0,n.kt)("td",{parentName:"tr",align:null},"HTTP_METHOD_TYPE"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u5339\u914d\u89c4\u5219"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4f8b\uff1a"sayName"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"headersAttach"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u900f\u4f20\u7684http headers"),(0,n.kt)("td",{parentName:"tr",align:null},"1\u3001\u7a7a: \u4e0d\u8bbe\u7f6e\u8868\u793a\u4e0d\u900f\u4f20\u4efb\u4f55\u503c;",(0,n.kt)("br",null),"2\u3001*: \u8868\u793a\u900f\u4f20\u6240\u6709headers;",(0,n.kt)("br",null)," 3\u3001\u7528\u82f1\u6587\u9017\u53f7\u9694\u5f00\u9700\u8981\u900f\u51fa\u7684headers key: header-A,header-B,header-C,",(0,n.kt)("br",null))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"httpPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7ed1\u5b9aserviceMethod\u7684http-path"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4f8b\uff1a"/dubbo/hello"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},"list of spec.dubbo.methods.params"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u53c2\u6570\u63d0\u53d6\u65b9\u5f0f"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"specdubbomethodsparams"},"spec.dubbo.methods.params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"paramKey"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4f8b\uff1a"p"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"paramSource"),(0,n.kt)("td",{parentName:"tr",align:null},"PARAM_SOURCE_TYPE"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u6765\u6e90"),(0,n.kt)("td",{parentName:"tr",align:null},'"QUERY"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"paramType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Dubbo\u65b9\u6cd5\u5165\u53c2\u7684\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("td",{parentName:"tr",align:null},'"java.lang.String"')))),(0,n.kt)("h3",{id:"http_method_type"},"HTTP_METHOD_TYPE"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GET"),(0,n.kt)("td",{parentName:"tr",align:null},"http GET method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"POST"),(0,n.kt)("td",{parentName:"tr",align:null},"http POST method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PUT"),(0,n.kt)("td",{parentName:"tr",align:null},"http PUT method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,n.kt)("td",{parentName:"tr",align:null},"http DELETE method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,n.kt)("td",{parentName:"tr",align:null},"http PATCH method")))),(0,n.kt)("h3",{id:"param_source_type"},"PARAM_SOURCE_TYPE"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QUERY"),(0,n.kt)("td",{parentName:"tr",align:null},"http url param")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HEADER"),(0,n.kt)("td",{parentName:"tr",align:null},"http header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PATH"),(0,n.kt)("td",{parentName:"tr",align:null},"http url path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BODY"),(0,n.kt)("td",{parentName:"tr",align:null},"http request body")))))}b.isMDXComponent=!0}}]);