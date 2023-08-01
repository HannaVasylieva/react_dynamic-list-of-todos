(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(8),i=c(2),d=c(1),o=(c(13),c(14),c(6)),r=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelect;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":e.id===(null===c||void 0===c?void 0:c.id)}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:!0===e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:!0===e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":e.id!==(null===c||void 0===c?void 0:c.id),"fa-eye-slash":e.id===(null===c||void 0===c?void 0:c.id)})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.query,c=e.handleQuery,a=e.setFilterStatus;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){a(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.onClose,s=Object(d.useState)(null),a=Object(i.a)(s,2),n=a[0],l=a[1],o=Object(d.useState)(!0),r=Object(i.a)(o,2),u=r[0],b=r[1];return Object(d.useEffect)((function(){var e;(e=t.userId,m("/users/".concat(e))).then(l).catch((function(e){throw new Error(e.message)})).finally((function(){return b(!1)}))}),[t.userId]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!0===t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},x=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!1),o=Object(i.a)(n,2),r=o[0],x=o[1],f=Object(d.useState)(null),v=Object(i.a)(f,2),p=v[0],N=v[1],y=Object(d.useState)(""),g=Object(i.a)(y,2),C=g[0],S=g[1],k=Object(d.useState)(s.All),w=Object(i.a)(k,2),A=w[0],E=w[1];Object(d.useEffect)((function(){x(!0),m("/todos").then(a).catch((function(e){throw new Error(e.message)})).finally((function(){return x(!1)}))}),[]);var T=Object(d.useMemo)((function(){var e=Object(l.a)(c);switch(C.trim()&&(e=e.filter((function(e){return e.title.toLowerCase().includes(C.toLowerCase())}))),A){case s.All:return e;case s.Completed:return e.filter((function(e){return e.completed}));case s.Active:return e.filter((function(e){return!e.completed}));default:return e}}),[c,C,A]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:C,handleQuery:function(e){S(e)},setFilterStatus:E})}),Object(j.jsxs)("div",{className:"block",children:[r&&Object(j.jsx)(h,{}),!r&&0!==c.length&&Object(j.jsx)(u,{todos:T,onSelect:function(e){N(e)},selectedTodo:p})]})]})})}),p&&Object(j.jsx)(O,{todo:p,onClose:function(){N(null)}})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.329e17d8.chunk.js.map