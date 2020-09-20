(this["webpackJsonpteam-details-api"]=this["webpackJsonpteam-details-api"]||[]).push([[0],{19:function(e,t,n){e.exports=n(37)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),u=(n(24),n(17)),l=n(1),i=n(3),s=(n(25),function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",{className:"Header__title"},"TEAMS API SEARCH"))}),m=(n(26),function(e){var t=Object(a.useState)(e.options),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)("Select option"),l=Object(i.a)(u,2),s=l[0],m=l[1],y=Object(a.useState)(!1),d=Object(i.a)(y,2),p=d[0],f=d[1],Q=Object(a.useState)(0),E=Object(i.a)(Q,2),b=E[0],S=E[1],v=Object(a.useRef)(null);Object(a.useEffect)((function(){return document.addEventListener("click",O),function(){document.removeEventListener("click",O)}}),[]);var O=function(e){v.current.contains(e.target)||f(!1)},_=function(t){v.current.value="",m(t),o(e.options),f(!1),S(0),e.onOptionSelect(t)};return r.a.createElement("div",{className:"SelectContainer"},r.a.createElement("div",{className:"SelectInput"},r.a.createElement("input",{type:"text",placeholder:s,onChange:function(t){f(!0);var n=t.target.value.trim().toLowerCase();o(e.options.filter((function(e){return-1!==e.toLowerCase().indexOf(n)})))},onClick:function(e){f((function(e){return!e}))},onBlur:function(){f(!1)},onKeyDown:function(e){40===e.keyCode&&(b<c.length-1&&S((function(e){return e+1})),f(!0)),38===e.keyCode&&(b>0&&S((function(e){return e-1})),f(!0)),13===e.keyCode&&_(c[b])},ref:v,disabled:!e.inputEnabled})),p&&r.a.createElement("div",{className:"SelectOptionsContainer"},r.a.createElement("div",{className:"SelectOptions"},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"SelectOptions__option ".concat(s===e&&"SelectOptions__option_selected"," ").concat(b===t&&"SelectOptions__option_focus"),onMouseDown:_.bind(null,e)},e)})))))}),y=(n(27),function(e){return r.a.createElement("div",{className:"DropdownSelector"},r.a.createElement("h3",{className:"DS__title ".concat(!e.show&&"DS__title_disabled")},e.title),r.a.createElement(m,{options:e.options,inputEnabled:e.show,onOptionSelect:e.onOptionSelect}))}),d=(n(28),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],u=e.query,l=e.onSelect;return Object(a.useEffect)((function(){l(u,c)}),[c,l,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"Query ".concat(c&&"Query__checked"),htmlFor:u},r.a.createElement("input",{id:u,type:"checkbox",onChange:function(){o((function(e){return!e}))},checked:c}),u))}),p=(n(29),function(e){var t=e.queries,n=e.onSelect;return 0===t.length?r.a.createElement("p",{className:"AllQueries__notification"},"Please select a team & a feature to search for queries"):r.a.createElement("div",{className:"AllQueries"},t.map((function(e,t){return r.a.createElement("div",{className:"AllQueries__query",key:t},r.a.createElement(d,{query:e,onSelect:n}))})))}),f=n(9),Q=n(10),E=function(e,t){switch(t.type){case"CHANGE":return Object(Q.a)(Object(Q.a)({},e),{},Object(f.a)({},t.query,t.value));default:return e}},b=(n(30),["LA Lakers","Boston Celtics","Toronto Raptors","Houston Rockets","Golden State Warriors","LA Lakers","Boston Celtics","Toronto Raptors","Houston Rockets","Golden State Warriors"]),S=["Query 1","Query 2","Query 3","Query 4","Query 15","Query 21","Query 32","Query 34","Query 45","Query 56","Query 17","Query 28","Query 39","Query 40","Query 25","Query 21","Query 22","Query 23","Query 24","Query 75","Query 71","Query 72","Query 73","Query 74","Query 35","Query 31","Query 32","Query 33","Query 34","Query 45","Query 41","Query 42","Query 43","Query 54","Query 55","Query 51","Query 52","Query 53","Query 94","Query 95","Query 101","Query 102","Query 113","Query 224","Query 335","Query 441","Query 232","Query 123","Query 444","Query 500"],v=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(!1)),o=Object(i.a)(c,2),u=o[0],l=o[1],m=Object(a.useState)(!1),d=Object(i.a)(m,2),v=d[0],O=d[1],_=Object(a.useState)([]),h=Object(i.a)(_,2),k=h[0],j=h[1],N=function(){j(S)},A=function(e){var t=e.reduce((function(e,t){return Object(Q.a)(Object(Q.a)({},e),{},Object(f.a)({},t,!1))}),{}),n=Object(a.useReducer)(E,t),r=Object(i.a)(n,2),c=r[0],o=r[1];return{queryState:c,setQueryState:Object(a.useCallback)((function(e,t){o({type:"CHANGE",query:e,value:t})}),[])}}(S),w=A.queryState,C=A.setQueryState,g=[];for(var L in w)w[L]&&g.push(L);return console.log(g.length),r.a.createElement("div",{className:"APILookup"},r.a.createElement(s,null),r.a.createElement("div",{className:"APILookup__selectors_container"},r.a.createElement("div",{className:"APILookup__selectors"},r.a.createElement("div",{className:"APILookup__selector"},r.a.createElement(y,{title:"Team Selector",show:n,options:b,onOptionSelect:function(e){console.log(e),l(!0)}})),r.a.createElement("div",{className:"APILookup__selector"},r.a.createElement(y,{title:"Feature Selector",show:u,options:b,onOptionSelect:function(e){O(!0)}})),r.a.createElement("div",{className:"APILookup__search_button"},r.a.createElement("button",{disabled:!v,onClick:N},"Search")))),r.a.createElement("div",{className:"APILookup__queries"},r.a.createElement("div",{className:"APILookup__queries_box"},r.a.createElement(p,{queries:k,onSelect:C}))),r.a.createElement("div",{className:"APILookup__submit_button"},r.a.createElement("button",{disabled:!g.length,onClick:N},"SUBMIT")))};n(31);var O=function(){return r.a.createElement(u.a,{basename:"anoopvasudevan"},r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/teams-api",exact:!0},r.a.createElement("div",{className:"App"},r.a.createElement(v,null))),r.a.createElement(l.a,{to:"/high-trails"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5932245c.chunk.js.map