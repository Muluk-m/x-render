(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0zqC":function(e,t,a){"use strict";a.r(t);var l=a("tJVT"),n=a("q1tI"),c=a.n(n),o=a("k3GJ"),r=a("MZF8"),i=a("dEAq"),d=a("ZpkN");a("TIsu");function m(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var u=e=>{var t,a,u,s=Object(n["useRef"])(),E=Object(n["useContext"])(i["context"]),f=E.locale,p=Object(i["useLocaleProps"])(f,e),b=Object(i["useDemoUrl"])(p.identifier),v=p.demoUrl||b,_=(null===r["a"]||void 0===r["a"]?void 0:r["a"].location.hash)==="#".concat(p.identifier),h=1===Object.keys(p.sources).length,k=Object(i["useCodeSandbox"])(null!==(t=p.hideActions)&&void 0!==t&&t.includes("CSB")?null:p),w=Object(i["useRiddle"])(null!==(a=p.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:p),N=Object(i["useMotions"])(p.motions||[],s.current),j=Object(l["default"])(N,2),O=j[0],x=j[1],y=Object(i["useCopy"])(),g=Object(l["default"])(y,2),C=g[0],A=g[1],S=Object(n["useState"])("_"),I=Object(l["default"])(S,2),L=I[0],P=I[1],T=Object(n["useState"])(m(L,p.sources[L])),R=Object(l["default"])(T,2),q=R[0],J=R[1],M=Object(n["useState"])(Boolean(p.defaultShowCode)),B=Object(l["default"])(M,2),D=B[0],F=B[1],U=Object(n["useState"])(Math.random()),$=Object(l["default"])(U,2),z=$[0],G=$[1],X=p.sources[L][q]||p.sources[L].content,Z=Object(i["useTSPlaygroundUrl"])(f,X),H=Object(n["useRef"])(),K=Object(i["usePrefersColor"])(),V=Object(l["default"])(K,1),W=V[0];function Q(e){P(e),J(m(e,p.sources[e]))}return Object(n["useEffect"])((()=>{G(Math.random())}),[W]),c.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",_?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&c.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),c.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?c.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:z,src:v,ref:H}):p.children),c.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&c.a.createElement(i["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),c.a.createElement("div",{className:"__dumi-default-previewer-actions"},k&&c.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),w&&c.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),p.motions&&c.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:x,onClick:()=>O()}),p.iframe&&c.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>G(Math.random())}),!(null!==(u=p.hideActions)&&void 0!==u&&u.includes("EXTERNAL"))&&c.a.createElement(i["Link"],{target:"_blank",to:v},c.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),c.a.createElement("span",null),c.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":A,onClick:()=>C(X)}),"tsx"===q&&D&&c.a.createElement(i["Link"],{target:"_blank",to:Z},c.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),c.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>F(!D)})),D&&c.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&c.a.createElement(o["default"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:L,onChange:Q},Object.keys(p.sources).map((e=>c.a.createElement(o["TabPane"],{tab:"_"===e?"index.".concat(m(e,p.sources[e])):e,key:e})))),c.a.createElement("div",{className:"__dumi-default-previewer-source"},c.a.createElement(d["a"],{code:X,lang:q,showCopy:!1}))))};t["default"]=u},TIsu:function(e,t,a){},iWdb:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),c=a("dEAq"),o=a("0zqC"),r=a("JjdP"),i=n.a.memo(r["default"]["column-demo"].component),d=n.a.memo(r["default"]["column-demo-1"].component),m=n.a.memo(r["default"]["column-demo-2"].component),u=n.a.memo(r["default"]["column-demo-3"].component);t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"column-\u67f1\u5f62\u56fe"},n.a.createElement(c["AnchorLink"],{to:"#column-\u67f1\u5f62\u56fe","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column \u67f1\u5f62\u56fe"),n.a.createElement("h3",{id:"n\u6307\u6807-\u96f6\u7ef4\u5ea6"},n.a.createElement(c["AnchorLink"],{to:"#n\u6307\u6807-\u96f6\u7ef4\u5ea6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"N\u6307\u6807 \u96f6\u7ef4\u5ea6"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u56fe\u8868\u6e32\u67d3\u4e0a\uff0c\u6307\u6807\u4f5c\u4e3a ",n.a.createElement("code",null,"x \u8f74"),"\uff0c\u6307\u6807\u503c\u4f5c\u4e3a ",n.a.createElement("code",null,"y \u8f74"),"\u3002"))),n.a.createElement(o["default"],r["default"]["column-demo"].previewerProps,n.a.createElement(i,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u5355\u6307\u6807-\u5355\u7ef4\u5ea6"},n.a.createElement(c["AnchorLink"],{to:"#\u5355\u6307\u6807-\u5355\u7ef4\u5ea6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5355\u6307\u6807 \u5355\u7ef4\u5ea6"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u56fe\u8868\u6e32\u67d3\u4e0a\uff0c\u7ef4\u5ea6\u4f5c\u4e3a ",n.a.createElement("code",null,"x \u8f74"),"\uff0c\u6307\u6807\u4f5c\u4e3a ",n.a.createElement("code",null,"y \u8f74"),"\u3002"))),n.a.createElement(o["default"],r["default"]["column-demo-1"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u5355\u6307\u6807-\u53cc\u7ef4\u5ea6"},n.a.createElement(c["AnchorLink"],{to:"#\u5355\u6307\u6807-\u53cc\u7ef4\u5ea6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5355\u6307\u6807 \u53cc\u7ef4\u5ea6"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u56fe\u8868\u6e32\u67d3\u4e0a\uff0c\u7b2c\u4e00\u7ef4\u5ea6\u4f5c\u4e3a ",n.a.createElement("code",null,"x \u8f74"),"\uff0c\u6307\u6807\u4f5c\u4e3a ",n.a.createElement("code",null,"y \u8f74"),"\uff0c\u7b2c\u4e8c\u7ef4\u5ea6\u4f5c\u4e3a ",n.a.createElement("code",null,"\u7cfb\u5217"),"\u3002"),n.a.createElement("li",null,"\u6570\u636e\u4e0a\uff0c\u6570\u636e\u6761\u6570\u662f ",n.a.createElement("code",null,"\u300c\u5355\u6307\u6807 \u5355\u7ef4\u5ea6\u300d")," \u7684\u4e24\u500d\u3002"))),n.a.createElement(o["default"],r["default"]["column-demo-2"].previewerProps,n.a.createElement(m,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u591a\u6307\u6807-\u5355\u7ef4\u5ea6"},n.a.createElement(c["AnchorLink"],{to:"#\u591a\u6307\u6807-\u5355\u7ef4\u5ea6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u591a\u6307\u6807 \u5355\u7ef4\u5ea6"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u56fe\u8868\u6e32\u67d3\u4e0a\uff0c\u7ef4\u5ea6\u4f5c\u4e3a ",n.a.createElement("code",null,"x \u8f74"),"\uff0c\u6307\u6807\u5206 ",n.a.createElement("code",null,"\u7cfb\u5217")," \u5c55\u793a\u3002"))),n.a.createElement(o["default"],r["default"]["column-demo-3"].previewerProps,n.a.createElement(u,null))))}}}]);