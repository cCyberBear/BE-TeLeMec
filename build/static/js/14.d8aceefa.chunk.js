(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[14],{1250:function(e,t,a){"use strict";a.r(t);var c=a(22),s=a(54),r=a(7),n=a(1),i=a(2),l=a(6),o=a(272),d=a(24),u=a.n(d),b=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"/api/",REACT_APP_API_URL_IMG:"/api/",REACT_APP_BASE_LAYOUT_CONFIG_KEY:"metronic-react-demo1-8037",REACT_APP_BOOTSTRAP_DOCS_LINK:"https://getbootstrap.com/docs/5.0",REACT_APP_PURCHASE_URL:"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469",REACT_APP_SASS_PATH:"src/_metronic/assets/sass/core/components",REACT_APP_SASS_VARIABLES_PATH:"src/_metronic/assets/sass/core/components/_variables.scss",REACT_APP_THEME_DEMO:"demo1",REACT_APP_THEME_NAME:"Metornic",REACT_APP_VERSION:"v8.0.37"}).REACT_APP_THEME_API_URL,m="".concat(b,"/user"),j="".concat(b,"/users/query"),p=function(e){return u.a.put(m,e).then((function(e){return e.data})).then((function(e){return e.data}))},O=function(e){return u.a.post("".concat(m,"/").concat(e.id),e).then((function(e){return e.data})).then((function(e){return e.data}))},h=a(0),x=Object(n.createContext)(i.n),f=function(e){var t=e.children,a=Object(n.useState)(i.n.state),c=Object(r.a)(a,2),s=c[0],o=c[1];return Object(h.jsx)(x.Provider,{value:{state:s,updateState:function(e){var t=Object(l.a)(Object(l.a)({},s),e);o(t)}},children:t})},v=function(){return Object(n.useContext)(x)},g=Object(i.h)(i.o),N=function(e){var t=e.children,a=v().state,c=Object(n.useState)(Object(i.s)(a)),s=Object(r.a)(c,2),l=s[0],d=s[1],b=Object(n.useMemo)((function(){return Object(i.s)(a)}),[a]);Object(n.useEffect)((function(){l!==b&&d(b)}),[b]);var m=Object(o.useQuery)("".concat(i.d.USERS_LIST,"-").concat(l),(function(){return function(e){return u.a.get("".concat(j,"?").concat(e)).then((function(e){return e.data}))}(l)}),{cacheTime:0,keepPreviousData:!0,refetchOnWindowFocus:!1}),p=m.isFetching,O=m.refetch,x=m.data;return Object(h.jsx)(g.Provider,{value:{isLoading:p,refetch:O,response:x,query:l},children:t})},_=function(){return Object(n.useContext)(g)},k=function(){var e=_().response;return e&&(null===e||void 0===e?void 0:e.data)||[]},y=function(){return _().isLoading},w=Object(n.createContext)(i.m),S=function(e){var t=e.children,a=Object(n.useState)(i.m.selected),c=Object(r.a)(a,2),s=c[0],l=c[1],o=Object(n.useState)(i.m.itemIdForUpdate),d=Object(r.a)(o,2),u=d[0],b=d[1],m=_().isLoading,j=k(),p=Object(n.useMemo)((function(){return Object(i.f)(m,j)}),[m,j]),O=Object(n.useMemo)((function(){return Object(i.e)(j,s)}),[j,s]);return Object(h.jsx)(w.Provider,{value:{selected:s,itemIdForUpdate:u,setItemIdForUpdate:b,disabled:p,isAllSelected:O,onSelect:function(e){Object(i.k)(e,s,l)},onSelectAll:function(){Object(i.l)(O,l,j)},clearSelected:function(){l([])}},children:t})},A=function(){return Object(n.useContext)(w)},P=a(46),C=function(){var e=v().updateState,t=_().isLoading,a=Object(n.useState)(),c=Object(r.a)(a,2),s=c[0],o=c[1],d=Object(n.useState)(),u=Object(r.a)(d,2),b=u[0],m=u[1];Object(n.useEffect)((function(){P.b.reinitialization()}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("button",{disabled:t,type:"button",className:"btn btn-light-primary me-3","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end",children:[Object(h.jsx)(i.c,{path:"/media/icons/duotune/general/gen031.svg",className:"svg-icon-2"}),"Filter"]}),Object(h.jsxs)("div",{className:"menu menu-sub menu-sub-dropdown w-300px w-md-325px","data-kt-menu":"true",children:[Object(h.jsx)("div",{className:"px-7 py-5",children:Object(h.jsx)("div",{className:"fs-5 text-dark fw-bolder",children:"Filter Options"})}),Object(h.jsx)("div",{className:"separator border-gray-200"}),Object(h.jsxs)("div",{className:"px-7 py-5","data-kt-user-table-filter":"form",children:[Object(h.jsxs)("div",{className:"mb-10",children:[Object(h.jsx)("label",{className:"form-label fs-6 fw-bold",children:"Role:"}),Object(h.jsxs)("select",{className:"form-select form-select-solid fw-bolder","data-kt-select2":"true","data-placeholder":"Select option","data-allow-clear":"true","data-kt-user-table-filter":"role","data-hide-search":"true",onChange:function(e){return o(e.target.value)},value:s,children:[Object(h.jsx)("option",{value:""}),Object(h.jsx)("option",{value:"Administrator",children:"Administrator"}),Object(h.jsx)("option",{value:"Analyst",children:"Analyst"}),Object(h.jsx)("option",{value:"Developer",children:"Developer"}),Object(h.jsx)("option",{value:"Support",children:"Support"}),Object(h.jsx)("option",{value:"Trial",children:"Trial"})]})]}),Object(h.jsxs)("div",{className:"mb-10",children:[Object(h.jsx)("label",{className:"form-label fs-6 fw-bold",children:"Last login:"}),Object(h.jsxs)("select",{className:"form-select form-select-solid fw-bolder","data-kt-select2":"true","data-placeholder":"Select option","data-allow-clear":"true","data-kt-user-table-filter":"two-step","data-hide-search":"true",onChange:function(e){return m(e.target.value)},value:b,children:[Object(h.jsx)("option",{value:""}),Object(h.jsx)("option",{value:"Yesterday",children:"Yesterday"}),Object(h.jsx)("option",{value:"20 mins ago",children:"20 mins ago"}),Object(h.jsx)("option",{value:"5 hours ago",children:"5 hours ago"}),Object(h.jsx)("option",{value:"2 days ago",children:"2 days ago"})]})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(h.jsx)("button",{type:"button",disabled:t,onClick:function(){e(Object(l.a)({filter:{role:s,last_login:b}},i.p))},className:"btn btn-light btn-active-light-primary fw-bold me-2 px-6","data-kt-menu-dismiss":"true","data-kt-user-table-filter":"reset",children:"Reset"}),Object(h.jsx)("button",{disabled:t,type:"button",onClick:function(){e(Object(l.a)({filter:void 0},i.p))},className:"btn btn-primary fw-bold px-6","data-kt-menu-dismiss":"true","data-kt-user-table-filter":"filter",children:"Apply"})]})]})]})]})},E=function(){var e=A().setItemIdForUpdate;return Object(h.jsxs)("div",{className:"d-flex justify-content-end","data-kt-user-table-toolbar":"base",children:[Object(h.jsx)(C,{}),Object(h.jsxs)("button",{type:"button",className:"btn btn-light-primary me-3",children:[Object(h.jsx)(i.c,{path:"/media/icons/duotune/arrows/arr078.svg",className:"svg-icon-2"}),"Export"]}),Object(h.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:function(){e(null)},children:[Object(h.jsx)(i.c,{path:"/media/icons/duotune/arrows/arr075.svg",className:"svg-icon-2"}),"Add User"]})]})},T=a(144),F=a(41),I=a.n(F),R=function(){var e=A(),t=e.selected,a=e.clearSelected,c=Object(o.useQueryClient)(),s=_().query,r=Object(o.useMutation)((function(){return function(e){var t=e.map((function(e){return u.a.delete("".concat(m,"/").concat(e))}));return u.a.all(t).then((function(){}))}(t)}),{onSuccess:function(){c.invalidateQueries(["".concat(i.d.USERS_LIST,"-").concat(s)]),a()}});return Object(h.jsxs)("div",{className:"d-flex justify-content-end align-items-center",children:[Object(h.jsxs)("div",{className:"fw-bolder me-5",children:[Object(h.jsx)("span",{className:"me-2",children:t.length})," Selected"]}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:Object(T.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.mutateAsync();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Delete Selected"})]})},U=function(){var e=v().updateState,t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],s=a[1],o=Object(i.u)(c,150);return Object(n.useEffect)((function(){void 0!==o&&void 0!==c&&e(Object(l.a)({search:o},i.p))}),[o]),Object(h.jsx)("div",{className:"card-title",children:Object(h.jsxs)("div",{className:"d-flex align-items-center position-relative my-1",children:[Object(h.jsx)(i.c,{path:"/media/icons/duotune/general/gen021.svg",className:"svg-icon-1 position-absolute ms-6"}),Object(h.jsx)("input",{type:"text","data-kt-user-table-filter":"search",className:"form-control form-control-solid w-250px ps-14",placeholder:"Search user",value:c,onChange:function(e){return s(e.target.value)}})]})})},L=function(){var e=A().selected;return Object(h.jsxs)("div",{className:"card-header border-0 pt-6",children:[Object(h.jsx)(U,{}),Object(h.jsx)("div",{className:"card-toolbar",children:e.length>0?Object(h.jsx)(R,{}):Object(h.jsx)(E,{})})]})},H=a(1243),M=function(e){var t=e.column;return Object(h.jsx)(h.Fragment,{children:t.Header&&"string"===typeof t.Header?Object(h.jsx)("th",Object(l.a)(Object(l.a)({},t.getHeaderProps()),{},{children:t.render("Header")})):t.render("Header")})},D=a(19),q=function(e){var t=e.row;return Object(h.jsx)("tr",Object(l.a)(Object(l.a)({},t.getRowProps()),{},{children:t.cells.map((function(e){return Object(h.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{className:Object(D.a)({"text-end min-w-100px":"actions"===e.column.id}),children:e.render("Cell")}))}))}))},B=function(e){var t,a,c,s=e.user;return Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("div",{className:"symbol symbol-circle symbol-50px overflow-hidden me-3",children:Object(h.jsx)("a",{href:"#",children:s.avatar?Object(h.jsx)("div",{className:"symbol-label",children:Object(h.jsx)("img",{src:Object(i.t)("/media/".concat(s.avatar)),alt:s.name,className:"w-100"})}):Object(h.jsx)("div",{className:Object(D.a)("symbol-label fs-3","bg-light-".concat(null===(t=s.initials)||void 0===t?void 0:t.state),"text-".concat(null===(a=s.initials)||void 0===a?void 0:a.state)),children:null===(c=s.initials)||void 0===c?void 0:c.label})})}),Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("a",{href:"#",className:"text-gray-800 text-hover-primary mb-1",children:s.name}),Object(h.jsx)("span",{children:s.email})]})]})},Q=function(e){var t=e.last_login;return Object(h.jsx)("div",{className:"badge badge-light fw-bolder",children:t})},V=function(e){var t=e.two_steps;return Object(h.jsxs)(h.Fragment,{children:[" ",t&&Object(h.jsx)("div",{className:"badge badge-light-success fw-bolder",children:"Enabled"})]})},W=function(e){var t=e.id,a=A().setItemIdForUpdate,c=_().query,s=Object(o.useQueryClient)();Object(n.useEffect)((function(){P.b.reinitialization()}),[]);var r=Object(o.useMutation)((function(){return e=t,u.a.delete("".concat(m,"/").concat(e)).then((function(){}));var e}),{onSuccess:function(){s.invalidateQueries(["".concat(i.d.USERS_LIST,"-").concat(c)])}});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("a",{href:"#",className:"btn btn-light btn-active-light-primary btn-sm","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end",children:["Actions",Object(h.jsx)(i.c,{path:"/media/icons/duotune/arrows/arr072.svg",className:"svg-icon-5 m-0"})]}),Object(h.jsxs)("div",{className:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4","data-kt-menu":"true",children:[Object(h.jsx)("div",{className:"menu-item px-3",children:Object(h.jsx)("a",{className:"menu-link px-3",onClick:function(){a(t)},children:"Edit"})}),Object(h.jsx)("div",{className:"menu-item px-3",children:Object(h.jsx)("a",{className:"menu-link px-3","data-kt-users-table-filter":"delete_row",onClick:Object(T.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.mutateAsync();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Delete"})})]})]})},K=function(e){var t=e.id,a=A(),c=a.selected,s=a.onSelect,r=Object(n.useMemo)((function(){return c.includes(t)}),[t,c]);return Object(h.jsx)("div",{className:"form-check form-check-sm form-check-custom form-check-solid",children:Object(h.jsx)("input",{className:"form-check-input",type:"checkbox","data-kt-check":r,"data-kt-check-target":"#kt_table_users .form-check-input",checked:r,onChange:function(){return s(t)}})})},Y=function(e){var t=e.className,a=e.title,c=e.tableProps,s=c.column.id,r=v(),o=r.state,d=r.updateState,u=Object(n.useMemo)((function(){return o.sort&&o.sort===s}),[o,s]),b=Object(n.useMemo)((function(){return o.order}),[o]);return Object(h.jsx)("th",Object(l.a)(Object(l.a)({},c.column.getHeaderProps()),{},{className:Object(D.a)(t,u&&void 0!==b&&"table-sort-".concat(b)),style:{cursor:"pointer"},onClick:function(){if("actions"!==s&&"selection"!==s)if(u){if(u&&void 0!==b){if("asc"===b)return void d(Object(l.a)({sort:s,order:"desc"},i.p));d(Object(l.a)({sort:void 0,order:void 0},i.p))}}else d(Object(l.a)({sort:s,order:"asc"},i.p))},children:a}))},J=function(e){var t=e.tableProps,a=A(),c=a.isAllSelected,s=a.onSelectAll;return Object(h.jsx)("th",Object(l.a)(Object(l.a)({},t.column.getHeaderProps()),{},{className:"w-10px pe-2",children:Object(h.jsx)("div",{className:"form-check form-check-sm form-check-custom form-check-solid me-3",children:Object(h.jsx)("input",{className:"form-check-input",type:"checkbox","data-kt-check":c,"data-kt-check-target":"#kt_table_users .form-check-input",checked:c,onChange:s})})}))},z=[{Header:function(e){return Object(h.jsx)(J,{tableProps:e})},id:"selection",Cell:function(e){var t=Object.assign({},e);return Object(h.jsx)(K,{id:t.data[t.row.index].id})}},{Header:function(e){return Object(h.jsx)(Y,{tableProps:e,title:"Name",className:"min-w-125px"})},id:"name",Cell:function(e){var t=Object.assign({},e);return Object(h.jsx)(B,{user:t.data[t.row.index]})}},{Header:function(e){return Object(h.jsx)(Y,{tableProps:e,title:"Role",className:"min-w-125px"})},accessor:"role"},{Header:function(e){return Object(h.jsx)(Y,{tableProps:e,title:"Last login",className:"min-w-125px"})},id:"last_login",Cell:function(e){var t=Object.assign({},e);return Object(h.jsx)(Q,{last_login:t.data[t.row.index].last_login})}},{Header:function(e){return Object(h.jsx)(Y,{tableProps:e,title:"Two steps",className:"min-w-125px"})},id:"two_steps",Cell:function(e){var t=Object.assign({},e);return Object(h.jsx)(V,{two_steps:t.data[t.row.index].two_steps})}},{Header:function(e){return Object(h.jsx)(Y,{tableProps:e,title:"Joined day",className:"min-w-125px"})},accessor:"joined_day"},{Header:function(e){return Object(h.jsx)(Y,{tableProps:e,title:"Actions",className:"text-end min-w-100px"})},id:"actions",Cell:function(e){var t=Object.assign({},e);return Object(h.jsx)(W,{id:t.data[t.row.index].id})}}],G=function(){return Object(h.jsx)("div",{style:Object(l.a)(Object(l.a)({},{borderRadius:"0.475rem",boxShadow:"0 0 50px 0 rgb(82 63 105 / 15%)",backgroundColor:"#fff",color:"#7e8299",fontWeight:"500",margin:"0",width:"auto",padding:"1rem 2rem",top:"calc(50% - 2rem)",left:"calc(50% - 4rem)"}),{},{position:"absolute",textAlign:"center"}),children:"Processing..."})},X=function(){var e,t=function(){var e=Object(l.a)({links:[]},i.p),t=_().response;return t&&t.payload&&t.payload.pagination?t.payload.pagination:e}(),a=y(),c=v().updateState;return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"}),Object(h.jsx)("div",{className:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",children:Object(h.jsx)("div",{id:"kt_table_users_paginate",children:Object(h.jsx)("ul",{className:"pagination",children:null===(e=t.links)||void 0===e?void 0:e.map((function(e){return Object(h.jsx)("li",{className:Object(D.a)("page-item",{active:t.page===e.page,disabled:a,previous:"&laquo; Previous"===e.label,next:"Next &raquo;"===e.label}),children:Object(h.jsx)("a",{className:"page-link",onClick:function(){var s;(s=e.page)&&!a&&t.page!==s&&c({page:s,items_per_page:t.items_per_page||10})},dangerouslySetInnerHTML:{__html:e.label},style:{cursor:"pointer"}})},e.label)}))})})})]})},Z=function(){var e=k(),t=y(),a=Object(n.useMemo)((function(){return e}),[e]),c=Object(n.useMemo)((function(){return z}),[]),s=Object(H.useTable)({columns:c,data:a}),r=s.getTableProps,o=s.getTableBodyProps,d=s.headers,u=s.rows,b=s.prepareRow;return Object(h.jsxs)(i.b,{className:"py-4",children:[Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",Object(l.a)(Object(l.a)({id:"kt_table_users",className:"table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"},r()),{},{children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{className:"text-start text-muted fw-bolder fs-7 text-uppercase gs-0",children:d.map((function(e){return Object(h.jsx)(M,{column:e},e.id)}))})}),Object(h.jsx)("tbody",Object(l.a)(Object(l.a)({className:"text-gray-600 fw-bold"},o()),{},{children:u.length>0?u.map((function(e,t){return b(e),Object(h.jsx)(q,{row:e},"row-".concat(t,"-").concat(e.id))})):Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:7,children:Object(h.jsx)("div",{className:"d-flex text-center w-100 align-content-center justify-content-center",children:"No matching records found"})})})}))]}))}),Object(h.jsx)(X,{}),t&&Object(h.jsx)(G,{})]})},$=function(){var e=A().setItemIdForUpdate;return Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h2",{className:"fw-bolder",children:"Add User"}),Object(h.jsx)("div",{className:"btn btn-icon btn-sm btn-active-icon-primary","data-kt-users-modal-action":"close",onClick:function(){return e(void 0)},style:{cursor:"pointer"},children:Object(h.jsx)(i.c,{path:"/media/icons/duotune/arrows/arr061.svg",className:"svg-icon-1"})})]})},ee=a(33),te=a(27),ae="avatars/300-6.jpg",ce="Art Director",se="Administrator",re="",ne="",ie=ee.c().shape({email:ee.e().email("Wrong email format").min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Email is required"),name:ee.e().min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Name is required")}),le=function(e){var t=e.user,a=e.isUserLoading,c=A().setItemIdForUpdate,s=_().refetch,o=Object(n.useState)(Object(l.a)(Object(l.a)({},t),{},{avatar:t.avatar||ae,role:t.role||se,position:t.position||ce,name:t.name||re,email:t.email||ne})),d=Object(r.a)(o,1)[0],u=function(e){e&&s(),c(void 0)},b=Object(i.t)("/media/svg/avatars/blank.svg"),m=Object(i.t)("/media/".concat(d.avatar)),j=Object(te.e)({initialValues:d,validationSchema:ie,onSubmit:function(){var e=Object(T.a)(I.a.mark((function e(t,a){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=a.setSubmitting)(!0),e.prev=2,!Object(i.q)(t.id)){e.next=8;break}return e.next=6,O(t);case 6:e.next=10;break;case 8:return e.next=10,p(t);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:return e.prev=15,c(!0),u(!0),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[2,12,15,19]])})));return function(t,a){return e.apply(this,arguments)}}()});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{id:"kt_modal_add_user_form",className:"form",onSubmit:j.handleSubmit,noValidate:!0,children:[Object(h.jsxs)("div",{className:"d-flex flex-column scroll-y me-n7 pe-7",id:"kt_modal_add_user_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_add_user_header","data-kt-scroll-wrappers":"#kt_modal_add_user_scroll","data-kt-scroll-offset":"300px",children:[Object(h.jsxs)("div",{className:"fv-row mb-7",children:[Object(h.jsx)("label",{className:"d-block fw-bold fs-6 mb-5",children:"Avatar"}),Object(h.jsx)("div",{className:"image-input image-input-outline","data-kt-image-input":"true",style:{backgroundImage:"url('".concat(b,"')")},children:Object(h.jsx)("div",{className:"image-input-wrapper w-125px h-125px",style:{backgroundImage:"url('".concat(m,"')")}})})]}),Object(h.jsxs)("div",{className:"fv-row mb-7",children:[Object(h.jsx)("label",{className:"required fw-bold fs-6 mb-2",children:"Full Name"}),Object(h.jsx)("input",Object(l.a)(Object(l.a)({placeholder:"Full name"},j.getFieldProps("name")),{},{type:"text",name:"name",className:Object(D.a)("form-control form-control-solid mb-3 mb-lg-0",{"is-invalid":j.touched.name&&j.errors.name},{"is-valid":j.touched.name&&!j.errors.name}),autoComplete:"off",disabled:j.isSubmitting||a})),j.touched.name&&j.errors.name&&Object(h.jsx)("div",{className:"fv-plugins-message-container",children:Object(h.jsx)("div",{className:"fv-help-block",children:Object(h.jsx)("span",{role:"alert",children:j.errors.name})})})]}),Object(h.jsxs)("div",{className:"fv-row mb-7",children:[Object(h.jsx)("label",{className:"required fw-bold fs-6 mb-2",children:"Email"}),Object(h.jsx)("input",Object(l.a)(Object(l.a)({placeholder:"Email"},j.getFieldProps("email")),{},{className:Object(D.a)("form-control form-control-solid mb-3 mb-lg-0",{"is-invalid":j.touched.email&&j.errors.email},{"is-valid":j.touched.email&&!j.errors.email}),type:"email",name:"email",autoComplete:"off",disabled:j.isSubmitting||a})),j.touched.email&&j.errors.email&&Object(h.jsx)("div",{className:"fv-plugins-message-container",children:Object(h.jsx)("span",{role:"alert",children:j.errors.email})})]}),Object(h.jsxs)("div",{className:"mb-7",children:[Object(h.jsx)("label",{className:"required fw-bold fs-6 mb-5",children:"Role"}),Object(h.jsx)("div",{className:"d-flex fv-row",children:Object(h.jsxs)("div",{className:"form-check form-check-custom form-check-solid",children:[Object(h.jsx)("input",Object(l.a)(Object(l.a)({className:"form-check-input me-3"},j.getFieldProps("role")),{},{name:"role",type:"radio",value:"Administrator",id:"kt_modal_update_role_option_0",checked:"Administrator"===j.values.role,disabled:j.isSubmitting||a})),Object(h.jsxs)("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_0",children:[Object(h.jsx)("div",{className:"fw-bolder text-gray-800",children:"Administrator"}),Object(h.jsx)("div",{className:"text-gray-600",children:"Best for business owners and company administrators"})]})]})}),Object(h.jsx)("div",{className:"separator separator-dashed my-5"}),Object(h.jsx)("div",{className:"d-flex fv-row",children:Object(h.jsxs)("div",{className:"form-check form-check-custom form-check-solid",children:[Object(h.jsx)("input",Object(l.a)(Object(l.a)({className:"form-check-input me-3"},j.getFieldProps("role")),{},{name:"role",type:"radio",value:"Developer",id:"kt_modal_update_role_option_1",checked:"Developer"===j.values.role,disabled:j.isSubmitting||a})),Object(h.jsxs)("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_1",children:[Object(h.jsx)("div",{className:"fw-bolder text-gray-800",children:"Developer"}),Object(h.jsx)("div",{className:"text-gray-600",children:"Best for developers or people primarily using the API"})]})]})}),Object(h.jsx)("div",{className:"separator separator-dashed my-5"}),Object(h.jsx)("div",{className:"d-flex fv-row",children:Object(h.jsxs)("div",{className:"form-check form-check-custom form-check-solid",children:[Object(h.jsx)("input",Object(l.a)(Object(l.a)({className:"form-check-input me-3"},j.getFieldProps("role")),{},{name:"role",type:"radio",value:"Analyst",id:"kt_modal_update_role_option_2",checked:"Analyst"===j.values.role,disabled:j.isSubmitting||a})),Object(h.jsxs)("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_2",children:[Object(h.jsx)("div",{className:"fw-bolder text-gray-800",children:"Analyst"}),Object(h.jsx)("div",{className:"text-gray-600",children:"Best for people who need full access to analytics data, but don't need to update business settings"})]})]})}),Object(h.jsx)("div",{className:"separator separator-dashed my-5"}),Object(h.jsx)("div",{className:"d-flex fv-row",children:Object(h.jsxs)("div",{className:"form-check form-check-custom form-check-solid",children:[Object(h.jsx)("input",Object(l.a)(Object(l.a)({className:"form-check-input me-3"},j.getFieldProps("role")),{},{name:"role",type:"radio",value:"Support",id:"kt_modal_update_role_option_3",checked:"Support"===j.values.role,disabled:j.isSubmitting||a})),Object(h.jsxs)("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_3",children:[Object(h.jsx)("div",{className:"fw-bolder text-gray-800",children:"Support"}),Object(h.jsx)("div",{className:"text-gray-600",children:"Best for employees who regularly refund payments and respond to disputes"})]})]})}),Object(h.jsx)("div",{className:"separator separator-dashed my-5"}),Object(h.jsx)("div",{className:"d-flex fv-row",children:Object(h.jsxs)("div",{className:"form-check form-check-custom form-check-solid",children:[Object(h.jsx)("input",Object(l.a)(Object(l.a)({className:"form-check-input me-3"},j.getFieldProps("role")),{},{name:"role",type:"radio",id:"kt_modal_update_role_option_4",value:"Trial",checked:"Trial"===j.values.role,disabled:j.isSubmitting||a})),Object(h.jsxs)("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_4",children:[Object(h.jsx)("div",{className:"fw-bolder text-gray-800",children:"Trial"}),Object(h.jsx)("div",{className:"text-gray-600",children:"Best for people who need to preview content data, but don't need to make any updates"})]})]})})]})]}),Object(h.jsxs)("div",{className:"text-center pt-15",children:[Object(h.jsx)("button",{type:"reset",onClick:function(){return u()},className:"btn btn-light me-3","data-kt-users-modal-action":"cancel",disabled:j.isSubmitting||a,children:"Discard"}),Object(h.jsxs)("button",{type:"submit",className:"btn btn-primary","data-kt-users-modal-action":"submit",disabled:a||j.isSubmitting||!j.isValid||!j.touched,children:[Object(h.jsx)("span",{className:"indicator-label",children:"Submit"}),(j.isSubmitting||a)&&Object(h.jsxs)("span",{className:"indicator-progress",children:["Please wait..."," ",Object(h.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})]})]}),(j.isSubmitting||a)&&Object(h.jsx)(G,{})]})},oe=function(){var e=A(),t=e.itemIdForUpdate,a=e.setItemIdForUpdate,c=Object(i.q)(t),s=Object(o.useQuery)("".concat(i.d.USERS_LIST,"-user-").concat(t),(function(){return e=t,u.a.get("".concat(m,"/").concat(e)).then((function(e){return e.data})).then((function(e){return e.data}));var e}),{cacheTime:0,enabled:c,onError:function(e){a(void 0),console.error(e)}}),r=s.isLoading,n=s.data,l=s.error;return t?r||l||!n?null:Object(h.jsx)(le,{isUserLoading:r,user:n}):Object(h.jsx)(le,{isUserLoading:r,user:{id:void 0}})},de=function(){return Object(n.useEffect)((function(){return document.body.classList.add("modal-open"),function(){document.body.classList.remove("modal-open")}}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"modal fade show d-block",id:"kt_modal_add_user",role:"dialog",tabIndex:-1,"aria-modal":"true",children:Object(h.jsx)("div",{className:"modal-dialog modal-dialog-centered mw-650px",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsx)($,{}),Object(h.jsx)("div",{className:"modal-body scroll-y mx-5 mx-xl-15 my-7",children:Object(h.jsx)(oe,{})})]})})}),Object(h.jsx)("div",{className:"modal-backdrop fade show"})]})},ue=function(){var e=A().itemIdForUpdate;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)(L,{}),Object(h.jsx)(Z,{})]}),void 0!==e&&Object(h.jsx)(de,{})]})},be=function(){return Object(h.jsx)(f,{children:Object(h.jsx)(N,{children:Object(h.jsx)(S,{children:Object(h.jsx)(ue,{})})})})},me=[{title:"User Management",path:"/apps/user-management/users",isSeparator:!1,isActive:!1},{title:"",path:"",isSeparator:!0,isActive:!1}];t.default=function(){return Object(h.jsxs)(c.e,{children:[Object(h.jsx)(c.c,{element:Object(h.jsx)(c.b,{}),children:Object(h.jsx)(c.c,{path:"users",element:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.e,{breadcrumbs:me,children:"Users lcccist"}),Object(h.jsx)(be,{})]})})}),Object(h.jsx)(c.c,{index:!0,element:Object(h.jsx)(c.a,{to:"/apps/user-management/users"})})]})}}}]);
//# sourceMappingURL=14.d8aceefa.chunk.js.map