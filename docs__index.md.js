(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"0zqC":function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),l=a("q1tI"),r=a.n(l),c=a("k3GJ"),i=a("MZF8"),o=a("dEAq"),d=a("ZpkN");a("TIsu");function m(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var s=e=>{var t,a,s,u=Object(l["useRef"])(),p=Object(l["useContext"])(o["context"]),f=p.locale,E=Object(o["useLocaleProps"])(f,e),b=Object(o["useDemoUrl"])(E.identifier),h=E.demoUrl||b,g=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(E.identifier),k=1===Object.keys(E.sources).length,_=Object(o["useCodeSandbox"])(null!==(t=E.hideActions)&&void 0!==t&&t.includes("CSB")?null:E),v=Object(o["useRiddle"])(null!==(a=E.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:E),A=Object(o["useMotions"])(E.motions||[],u.current),w=Object(n["default"])(A,2),j=w[0],N=w[1],x=Object(o["useCopy"])(),O=Object(n["default"])(x,2),y=O[0],C=O[1],L=Object(l["useState"])("_"),S=Object(n["default"])(L,2),T=S[0],I=S[1],R=Object(l["useState"])(m(T,E.sources[T])),X=Object(n["default"])(R,2),B=X[0],F=X[1],J=Object(l["useState"])(Boolean(E.defaultShowCode)),M=Object(n["default"])(J,2),P=M[0],U=M[1],q=Object(l["useState"])(Math.random()),G=Object(n["default"])(q,2),Z=G[0],D=G[1],K=E.sources[T][B]||E.sources[T].content,Q=Object(o["useTSPlaygroundUrl"])(f,K),V=Object(l["useRef"])(),$=Object(o["usePrefersColor"])(),z=Object(n["default"])($,1),Y=z[0];function H(e){I(e),F(m(e,E.sources[e]))}return Object(l["useEffect"])((()=>{D(Math.random())}),[Y]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",g?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:u,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:Z,src:h,ref:V}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(o["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),v&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:v}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:()=>j()}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>D(Math.random())}),!(null!==(s=E.hideActions)&&void 0!==s&&s.includes("EXTERNAL"))&&r.a.createElement(o["Link"],{target:"_blank",to:h},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":C,onClick:()=>y(K)}),"tsx"===B&&P&&r.a.createElement(o["Link"],{target:"_blank",to:Q},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(P?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>U(!P)})),P&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!k&&r.a.createElement(c["default"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:T,onChange:H},Object.keys(E.sources).map((e=>r.a.createElement(c["TabPane"],{tab:"_"===e?"index.".concat(m(e,E.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(d["a"],{code:K,lang:B,showCopy:!1}))))};t["default"]=s},"F+kV":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("0zqC"),i=a("ZpkN"),o=a("JjdP"),d=l.a.memo(o["default"]["docs-demo"].component);t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u5b89\u88c5"},l.a.createElement(r["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),l.a.createElement(i["a"],{code:"yarn add form-render\n# \u6216\u8005\nnpm i form-render",lang:"shell"}),l.a.createElement("p",null,"\u540c\u65f6\u5b89\u88c5\u4f9d\u8d56\u7684\u7ec4\u4ef6\u5e93 (\u4f9d\u8d56\u54ea\u4e2a\u88c5\u54ea\u4e2a\uff0c\u5929\u7136\u652f\u6301 antd \u548c fusion \u4e24\u5957\u3002\u5176\u4ed6\u7684\u7ec4\u4ef6\u5e93\u53ef\u901a\u8fc7 widgets \u7684\u65b9\u5f0f\u4f20\u5165\uff0c\u89c1",l.a.createElement(r["Link"],{to:"/guide/advanced/widget"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),")"),l.a.createElement(i["a"],{code:"# \u4f8b\u5982\nyarn add antd\n# \u6216\u8005\nyarn add @alifd/next",lang:"shell"}),l.a.createElement("p",null,"\u6ce8\uff1a\u4e00\u822c\u6765\u8bf4\uff0c\u60f3\u4f7f\u7528 form-render \u7684 antd \u4e3b\u9898\u7684\u9879\u76ee\uff0cdependencies \u91cc\u80af\u5b9a\u88c5\u4e86 antd\u3002\u8fd9\u91cc\u5f3a\u8c03\u4e00\u4e0b\u8fd9\u6b65\uff0c\u4e3b\u8981\u662f\u9488\u5bf9\u60f3\u5c1d\u8bd5\u5199\u4e2a demo \u73a9\u73a9\u7684\u540c\u5b66\uff0c\u8bb0\u5f97\u8981\u5b89\u88c5\u5bf9\u5e94\u7684 ui \u7ec4\u4ef6\u5e93"),l.a.createElement("h2",{id:"\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528")),l.a.createElement(c["default"],o["default"]["docs-demo"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"\u6ce8\uff1a\u7531\u4e8e fusion \u7684 css \u65e0\u6cd5\u6309\u9700\u5f15\u5165\uff0c\u4e14\u5728\u5185\u90e8\u6574\u4e2a\u5f15\u5165\u4f1a\u9020\u6210\u6837\u5f0f\u8986\u76d6\uff0c\u6240\u4ee5\u9700\u8981\u7528\u6237\u5916\u90e8\u72ec\u7acb\u5f15\u5165"),l.a.createElement("h2",{id:"schema-\u53ef\u4ee5\u4e0d\u7528\u624b\u5199\u54e6\uff01"},l.a.createElement(r["AnchorLink"],{to:"#schema-\u53ef\u4ee5\u4e0d\u7528\u624b\u5199\u54e6\uff01","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"schema \u53ef\u4ee5\u4e0d\u7528\u624b\u5199\u54e6\uff01"),l.a.createElement("p",null,"\u4f7f\u7528 ",l.a.createElement(r["Link"],{to:"https://x-render.gitee.io/schema-generator/"},"\u8868\u5355\u8bbe\u8ba1\u5668"),"\uff0c\u62d6\u62d6\u62fd\u62fd\u5bfc\u51fa schema\uff0c\u4e22\u5230\u4ee3\u7801\u91cc\u751f\u6210\u53ef\u7528\u8868\u5355"),l.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*4QYNTbKU6xAAAAAAAAAAAABkARQnAQ?raw=true",width:"750px"}),l.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*FfTuRYjRd1AAAAAAAAAAAABkARQnAQ?raw=true",alt:"schema\u7f16\u8f91\u5668",width:"750px"}),l.a.createElement("p",null,"\u8fd8\u53ef\u5728 vscode \u5546\u5e97\u641c\u7d22 \u201cformrender\u201d \u4e0b\u8f7d\u914d\u5957 ",l.a.createElement(r["Link"],{to:"https://marketplace.visualstudio.com/items?itemName=F-loat.vscode-plugin-fr-schema"},"\u53ef\u89c6\u5316\u63d2\u4ef6")),l.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1b53cmGNj0u4jSZFyXXXgMVXa-2740-1748.gif",alt:"schema\u7f16\u8f91\u5668",width:"750px"}),l.a.createElement("h2",{id:"\u7406\u5ff5"},l.a.createElement(r["AnchorLink"],{to:"#\u7406\u5ff5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7406\u5ff5"),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"/guide/design"},"\u8be6\u89c1 form-render \u7684\u7406\u5ff5")),l.a.createElement("h2",{id:"\u8d21\u732e"},l.a.createElement(r["AnchorLink"],{to:"#\u8d21\u732e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8d21\u732e"),l.a.createElement("p",null,"\u60f3\u8d21\u732e\u4ee3\u7801\u3001\u89e3 BUG \u6216\u8005\u63d0\u9ad8\u6587\u6863\u53ef\u8bfb\u6027\uff1f\u975e\u5e38\u6b22\u8fce\u4e00\u8d77\u53c2\u4e0e\u8fdb\u6765\uff0c\u5728\u63d0\u4ea4 MR \u524d\u9605\u8bfb\u4e00\u4e0b ",l.a.createElement(r["Link"],{to:"https://github.com/alibaba/form-render/blob/master/CONTRIBUTING.md"},"Contributing Guide")),l.a.createElement("p",null,"\u611f\u8c22\u7ed9 FormRender \u8d21\u732e\u4ee3\u7801\u7684\u4f60\u4eec\uff0c\u4ee5\u53ca JetBrains \u63d0\u4f9b Free \u4f7f\u7528\uff01"),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://github.com/alibaba/form-render/graphs/contributors"},l.a.createElement("img",{src:"https://opencollective.com/form-render/contributors.svg?width=890&button=false"})),l.a.createElement(r["Link"],{to:"https://www.jetbrains.com/?from=form-render"},l.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1gPDDJKL2gK0jSZFmXXc7iXXa-2000-2168.png",width:"100px"}))),l.a.createElement("h2",{id:"\u53cd\u9988\u4e0e\u5171\u5efa"},l.a.createElement(r["AnchorLink"],{to:"#\u53cd\u9988\u4e0e\u5171\u5efa","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53cd\u9988\u4e0e\u5171\u5efa"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u6b22\u8fce issue\u3001pr \u548c\u70b9\u8d5e\u54e6 ",l.a.createElement(r["Link"],{to:"https://github.com/alibaba/form-render"},"github"))),l.a.createElement("li",null,l.a.createElement("p",null,"\u6587\u6863\u5efa\u8bae\u81f3\u5c11\u8bfb\u4e00\u4e0b \u201c\u5f00\u59cb\u4f7f\u7528\u201d\uff0c\u6709\u7591\u95ee\u3001\u5efa\u8bae\u548c\u8ba8\u8bba\u8bc9\u6c42\u7684\uff0c\u8bf7\u52a0\u5165 FR \u5b98\u65b9\u7fa4\uff1a"))),l.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1CprJg5pE_u4jSZKbXXbCUVXa-894-1087.jpg",width:"300px"}))))}},TIsu:function(e,t,a){}}]);