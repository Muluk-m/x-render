(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"0zqC":function(e,t,a){"use strict";a.r(t);var l=a("tJVT"),n=a("q1tI"),r=a.n(n),c=a("k3GJ"),d=a("MZF8"),m=a("dEAq"),u=a("ZpkN");a("TIsu");function i(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var o=e=>{var t,a,o,s=Object(n["useRef"])(),E=Object(n["useContext"])(m["context"]),b=E.locale,f=Object(m["useLocaleProps"])(b,e),p=Object(m["useDemoUrl"])(f.identifier),v=f.demoUrl||p,_=(null===d["a"]||void 0===d["a"]?void 0:d["a"].location.hash)==="#".concat(f.identifier),h=1===Object.keys(f.sources).length,k=Object(m["useCodeSandbox"])(null!==(t=f.hideActions)&&void 0!==t&&t.includes("CSB")?null:f),g=Object(m["useRiddle"])(null!==(a=f.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:f),j=Object(m["useMotions"])(f.motions||[],s.current),w=Object(l["default"])(j,2),N=w[0],O=w[1],y=Object(m["useCopy"])(),x=Object(l["default"])(y,2),C=x[0],I=x[1],S=Object(n["useState"])("_"),P=Object(l["default"])(S,2),T=P[0],A=P[1],L=Object(n["useState"])(i(T,f.sources[T])),R=Object(l["default"])(L,2),M=R[0],q=R[1],D=Object(n["useState"])(Boolean(f.defaultShowCode)),J=Object(l["default"])(D,2),z=J[0],B=J[1],F=Object(n["useState"])(Math.random()),G=Object(l["default"])(F,2),U=G[0],Z=G[1],$=f.sources[T][M]||f.sources[T].content,X=Object(m["useTSPlaygroundUrl"])(b,$),H=Object(n["useRef"])(),K=Object(m["usePrefersColor"])(),V=Object(l["default"])(K,1),Q=V[0];function W(e){A(e),q(i(e,f.sources[e]))}return Object(n["useEffect"])((()=>{Z(Math.random())}),[Q]),r.a.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",_?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:U,src:v,ref:H}):f.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.a.createElement(m["AnchorLink"],{to:"#".concat(f.identifier)},f.title),f.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},k&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),g&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),f.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:O,onClick:()=>N()}),f.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Z(Math.random())}),!(null!==(o=f.hideActions)&&void 0!==o&&o.includes("EXTERNAL"))&&r.a.createElement(m["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":I,onClick:()=>C($)}),"tsx"===M&&z&&r.a.createElement(m["Link"],{target:"_blank",to:X},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(z?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>B(!z)})),z&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.a.createElement(c["default"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:T,onChange:W},Object.keys(f.sources).map((e=>r.a.createElement(c["TabPane"],{tab:"_"===e?"index.".concat(i(e,f.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(u["a"],{code:$,lang:M,showCopy:!1}))))};t["default"]=o},TIsu:function(e,t,a){},tZG8:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("dEAq"),c=a("0zqC"),d=a("JjdP"),m=n.a.memo(d["default"]["PivotTable-demo"].component),u=n.a.memo(d["default"]["PivotTable-demo-1"].component);t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"pivottable-\u4ea4\u53c9\u8868"},n.a.createElement(r["AnchorLink"],{to:"#pivottable-\u4ea4\u53c9\u8868","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"PivotTable \u4ea4\u53c9\u8868"),n.a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},n.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u8868\u683c\u6e32\u67d3\u4e0a\uff0c\u7ef4\u5ea6\u4f5c\u4e3a ",n.a.createElement("code",null,"\u5de6\u8868\u5934"),"\uff0c\u6307\u6807\u4f5c\u4e3a ",n.a.createElement("code",null,"\u9876\u8868\u5934"),"\u3002"))),n.a.createElement(c["default"],d["default"]["PivotTable-demo"].previewerProps,n.a.createElement(m,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u5355\u5143\u683c\u81ea\u5b9a\u4e49\u6e32\u67d3"},n.a.createElement(r["AnchorLink"],{to:"#\u5355\u5143\u683c\u81ea\u5b9a\u4e49\u6e32\u67d3","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5355\u5143\u683c\u81ea\u5b9a\u4e49\u6e32\u67d3")),n.a.createElement(c["default"],d["default"]["PivotTable-demo-1"].previewerProps,n.a.createElement(u,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53c2\u6570"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c")),n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,"\u6700\u5916\u5c42\u7684\u6837\u5f0f"),n.a.createElement("td",null,"React.CSSProperties"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,"\u6700\u5916\u5c42\u7684\u7c7b\u540d"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"''")),n.a.createElement("tr",null,n.a.createElement("td",null,"meta"),n.a.createElement("td",null,"\u5143\u6570\u636e\u63cf\u8ff0"),n.a.createElement("td",null,"IMetaItem[]"),n.a.createElement("td",null,"[]")),n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"\u6570\u636e"),n.a.createElement("td",null,"IDataItem[]"),n.a.createElement("td",null,"[]")),n.a.createElement("tr",null,n.a.createElement("td",null,"showSubtotal"),n.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u300c\u603b\u8ba1/\u5c0f\u8ba1\u300d"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"subtotalText"),n.a.createElement("td",null,"\u300c\u603b\u8ba1\u300d\u7684\u6587\u6848"),n.a.createElement("td",null,"[string, string]"),n.a.createElement("td",null,"['\u603b\u8ba1', '\u5c0f\u8ba1]")),n.a.createElement("tr",null,n.a.createElement("td",null,"indicatorSide"),n.a.createElement("td",null,"\u6307\u6807\u7684\u5c55\u793a\u4f4d\u7f6e"),n.a.createElement("td",null,"'left' | 'top'"),n.a.createElement("td",null,"'top'")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftDimensionLength"),n.a.createElement("td",null,"\u5de6\u4fa7\u7ef4\u5ea6\u653e\u591a\u5c11\u4e2a\uff0c\u8d85\u51fa\u7684\u7ef4\u5ea6\u4f1a\u653e\u5230\u8868\u683c\u9876\u90e8"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"meta.length")),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"\u8868\u683c\u5c3a\u5bf8"),n.a.createElement("td",null,"'small' | 'middle' | 'large'"),n.a.createElement("td",null,"'small'")),n.a.createElement("tr",null,n.a.createElement("td",null,"cellRender"),n.a.createElement("td",null,"\u5355\u5143\u683c\u81ea\u5b9a\u4e49\u6e32\u67d3"),n.a.createElement("td",null,"(value: any, dimRecord: IDataItem, indId: string) => React.ReactNode"),n.a.createElement("td",null)))))))}}}]);