(this["webpackJsonpcat-list"]=this["webpackJsonpcat-list"]||[]).push([[0],{20:function(t,e,c){},21:function(t,e,c){},23:function(t,e,c){},24:function(t,e,c){},25:function(t,e,c){},31:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),s=c(12),r=c.n(s),l=(c(20),c(15)),o=c(3),i=(c(21),c(1));var u=function(t){var e=t.victory,c=t.setTable,s=t.reset,r=a.a.useState(null),l=Object(o.a)(r,2),u=l[0],x=l[1],j=a.a.useState(0),d=Object(o.a)(j,2),b=d[0],f=d[1],O=a.a.useState(0),v=Object(o.a)(O,2),h=v[0],m=v[1];return Object(n.useEffect)((function(){var t="".concat(h,":").concat(b);x(clearInterval(u)),e&&c(t)}),[e]),Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("button",{onClick:function(){var t=0,e=0;x(setInterval((function(){t<59?(t++,f(t)):(t=60)&&(e++,t=0,f(0),m(e))}),1e3))},children:"start"}),e?Object(i.jsxs)("span",{children:[h,":",b]}):Object(i.jsxs)("span",{className:"victory",children:[h,":",b]}),Object(i.jsx)("button",{onClick:s,children:"reset table"})]})},x=(c(23),a.a.createContext());var j=function(t){var e=Object(n.useState)(0),c=Object(o.a)(e,2),a=c[0],s=c[1],r=Object(n.useContext)(x);return Object(n.useEffect)((function(){document.querySelectorAll(".done").length>=36&&t.handleVictory()}),[a]),Object(i.jsx)("div",{className:"card",onClick:function(t){var e=0,c=t.target,n=document.querySelectorAll(".span");if(""===r.text)c.classList.add("active"),setTimeout((function(){c.classList.remove("active"),r.text=""}),5e3),r.text=c.textContent;else if(r.text!==c.textContent||c.classList.contains("active"))r.text!==c.textContent&&(c.classList.add("active"),setTimeout((function(){for(var t=0;t<n.length;++t)n[t].classList.remove("active")}),500),r.text="",console.log("\u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u043b\u043e"));else{c.classList.add("active");for(var a=document.querySelectorAll(".active"),l=0;l<a.length;++l)a[l].classList.add("done");r.text="",e++,s(e),console.log("\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435")}},children:Object(i.jsx)("span",{className:"span",children:t.card.text})})};c(24);var d=function(t){var e=t.handleVictory,c=t.result,n=[{text:1},{text:1},{text:9},{text:9},{text:8},{text:8},{text:7},{text:7},{text:6},{text:6},{text:5},{text:5},{text:4},{text:4},{text:3},{text:3},{text:2},{text:2},{text:10},{text:10},{text:11},{text:11},{text:12},{text:12},{text:13},{text:13},{text:14},{text:14},{text:15},{text:15},{text:16},{text:16},{text:17},{text:17},{text:18},{text:18}].sort((function(){return Math.random()-.5}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("main",{className:"content",children:[Object(i.jsx)("div",{className:"elements",children:n.map((function(t){return Object(i.jsx)(j,{handleVictory:e,card:t},t._id)}))}),Object(i.jsx)("div",{className:"results",children:c?c.map((function(t){return Object(i.jsxs)("div",{className:"content__container",children:[Object(i.jsx)("span",{children:0===t.try?"\u043f\u043e\u043f\u044b\u0442\u043a\u0430":"".concat(t.try)}),Object(i.jsx)("span",{children:0===t.res?"\u0432\u0440\u0435\u043c\u044f":"".concat(t.res)})]})})):""})]})})};c(25);var b=function(){var t=a.a.useState([{try:0,res:0}]),e=Object(o.a)(t,2),c=e[0],s=e[1],r=a.a.useState(0),j=Object(o.a)(r,2),b=j[0],f=j[1],O=a.a.useState({text:""}),v=Object(o.a)(O,2),h=v[0],m=(v[1],a.a.useState(!1)),g=Object(o.a)(m,2),S=g[0],y=g[1];return Object(n.useEffect)((function(){0===b&&(f(JSON.parse(localStorage.getItem("allTrys"))),s(JSON.parse(localStorage.getItem("allResults"))))}),[]),Object(n.useEffect)((function(){null!==c?localStorage.setItem("allResults",JSON.stringify(c)):null===c&&s([{try:0,res:0}])}),[c]),Object(i.jsx)(x.Provider,{value:h,children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(u,{victory:S,setTable:function(t){var e=b+1;f(e),localStorage.setItem("allTrys",JSON.stringify(e)),s([].concat(Object(l.a)(c),[{try:e,res:t}]))},reset:function(){localStorage.removeItem("allResults"),localStorage.removeItem("allTrys"),s([{try:0,res:0}])}}),Object(i.jsx)(d,{handleVictory:function(){y(!0)},result:c})]})})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),s(t),r(t)}))},O=c(14);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O.a,{basename:"/frontend-challenge",children:Object(i.jsx)(b,{})})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.99cc4d60.chunk.js.map