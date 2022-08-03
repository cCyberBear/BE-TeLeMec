(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[16],{1258:function(e,c,t){"use strict";t.r(c);var l=t(1),a=t(54),s=t(6),i=t(7),o=t(19),d=t(2),r=t(0),n=function(){var e,c,t=Object(a.g)().setLayout,n=Object(l.useState)("Header"),b=Object(i.a)(n,2),m=b[0],j=b[1],h=Object(l.useState)(Object(a.f)()),x=Object(i.a)(h,2),u=x[0],O=x[1],f=Object(l.useState)(!1),p=Object(i.a)(f,2),v=p[0],N=p[1],g=Object(l.useState)(!1),k=Object(i.a)(g,2),y=k[0],w=k[1],C=function(e){var c=Object(s.a)(Object(s.a)({},u),e);O(c)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"card mb-10",children:Object(r.jsxs)("div",{className:"card-body d-flex align-items-center py-8",children:[Object(r.jsxs)("div",{className:"d-flex h-80px w-80px flex-shrink-0 flex-center position-relative",children:[Object(r.jsx)(d.c,{path:"/media/icons/duotune/abstract/abs051.svg",className:"svg-icon-primary position-absolute opacity-15",svgClassName:"h-80px w-80px"}),Object(r.jsx)(d.c,{path:"/media/icons/duotune/coding/cod009.svg",className:"svg-icon-3x svg-icon-primary position-absolute"})]}),Object(r.jsx)("div",{className:"ms-6",children:Object(r.jsx)("p",{className:"list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0",children:"The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real-time and export the HTML template with its includable partials of this demo. The downloaded version does not include the assets folder since the layout builder's main purpose is to help to generate the final HTML code without hassle. Layout builder changes don't affect pages with layout wrappers."})})]})}),Object(r.jsxs)("div",{className:"card card-custom",children:[Object(r.jsx)("div",{className:"card-header card-header-stretch overflow-auto",children:Object(r.jsxs)("ul",{className:"nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap",role:"tablist",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:Object(o.a)("nav-link cursor-pointer",{active:"Header"===m}),onClick:function(){return j("Header")},role:"tab",children:"Header"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:Object(o.a)("nav-link cursor-pointer",{active:"Toolbar"===m}),onClick:function(){return j("Toolbar")},role:"tab",children:"Toolbar"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:Object(o.a)("nav-link cursor-pointer",{active:"PageTitle"===m}),onClick:function(){return j("PageTitle")},role:"tab",children:"Page Title"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:Object(o.a)("nav-link cursor-pointer",{active:"Aside"===m}),onClick:function(){return j("Aside")},role:"tab",children:"Aside"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:Object(o.a)("nav-link cursor-pointer",{active:"Content"===m}),onClick:function(){return j("Content")},role:"tab",children:"Content"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:Object(o.a)("nav-link cursor-pointer",{active:"Footer"===m}),onClick:function(){return j("Footer")},role:"tab",children:"Footer"})})]})}),Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("div",{className:"card-body",children:Object(r.jsxs)("div",{className:"tab-content pt-3",children:[Object(r.jsxs)("div",{className:Object(o.a)("tab-pane",{active:"Header"===m}),children:[Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Fixed Header:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("label",{className:"form-check form-check-custom form-check-solid form-switch mb-5",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][header][fixed][desktop]",checked:u.header.fixed.desktop,onChange:function(){return C({header:Object(s.a)(Object(s.a)({},u.header),{},{fixed:Object(s.a)(Object(s.a)({},u.header.fixed),{},{desktop:!u.header.fixed.desktop})})})}}),Object(r.jsx)("span",{className:"form-check-label text-muted",children:"Desktop"})]}),Object(r.jsxs)("label",{className:"form-check form-check-custom form-check-solid form-switch mb-3",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",checked:u.header.fixed.tabletAndMobile,onChange:function(){return C({header:Object(s.a)(Object(s.a)({},u.header),{},{fixed:Object(s.a)(Object(s.a)({},u.header.fixed),{},{tabletAndMobile:!u.header.fixed.tabletAndMobile})})})}}),Object(r.jsx)("span",{className:"form-check-label text-muted",children:"Tablet & Mobile"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Enable fixed header"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Left Content:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("select",{className:"form-select form-select-solid",name:"layout-builder[layout][header][width]",value:u.header.left,onChange:function(e){return C({header:Object(s.a)(Object(s.a)({},u.header),{},{left:e.target.value})})},children:[Object(r.jsx)("option",{value:"menu",children:"Menu"}),Object(r.jsx)("option",{value:"fixed",children:"Page title"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Select header left content type."})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Width:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("select",{className:"form-select form-select-solid",name:"layout-builder[layout][header][width]",value:u.header.width,onChange:function(e){return C({header:Object(s.a)(Object(s.a)({},u.header),{},{width:e.target.value})})},children:[Object(r.jsx)("option",{value:"fluid",children:"Fluid"}),Object(r.jsx)("option",{value:"fixed",children:"Fixed"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Select header width type."})]})]})]}),Object(r.jsxs)("div",{className:Object(o.a)("tab-pane",{active:"Toolbar"===m}),children:[Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Display:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][toolbar][display]",checked:u.toolbar.display,onChange:function(){return C({toolbar:Object(s.a)(Object(s.a)({},u.toolbar),{},{display:!u.toolbar.display})})}})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Display toolbar"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Fixed Toolbar:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("label",{className:"form-check form-check-custom form-check-solid form-switch mb-5",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][header][fixed][desktop]",checked:u.toolbar.fixed.desktop,onChange:function(){return C({toolbar:Object(s.a)(Object(s.a)({},u.toolbar),{},{fixed:Object(s.a)(Object(s.a)({},u.toolbar.fixed),{},{desktop:!u.toolbar.fixed.desktop})})})}}),Object(r.jsx)("span",{className:"form-check-label text-muted",children:"Desktop"})]}),Object(r.jsxs)("label",{className:"form-check form-check-custom form-check-solid form-switch mb-3",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",checked:u.toolbar.fixed.tabletAndMobileMode,onChange:function(){return C({toolbar:Object(s.a)(Object(s.a)({},u.toolbar),{},{fixed:Object(s.a)(Object(s.a)({},u.toolbar.fixed),{},{tabletAndMobileMode:!u.toolbar.fixed.tabletAndMobileMode})})})}}),Object(r.jsx)("span",{className:"form-check-label text-muted",children:"Tablet & Mobile"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Enable fixed toolbar"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Width:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("select",{className:"form-select form-select-solid",name:"layout-builder[layout][toolbar][width]",value:u.toolbar.width,onChange:function(e){return C({toolbar:Object(s.a)(Object(s.a)({},u.toolbar),{},{width:e.target.value})})},children:[Object(r.jsx)("option",{value:"fluid",children:"Fluid"}),Object(r.jsx)("option",{value:"fixed",children:"Fixed"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Select layout width type."})]})]})]}),Object(r.jsxs)("div",{className:Object(o.a)("tab-pane",{active:"PageTitle"===m}),children:[Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Display:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][pageTitle][display]",checked:null===(e=u.pageTitle)||void 0===e?void 0:e.display,onChange:function(){var e;return C({pageTitle:Object(s.a)(Object(s.a)({},u.pageTitle),{},{display:!(null!==(e=u.pageTitle)&&void 0!==e&&e.display)})})}})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Display page title"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Breadcrumb:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][pageTitle][breadCrumbs]",checked:null===(c=u.pageTitle)||void 0===c?void 0:c.breadCrumbs,onChange:function(){var e;return C({pageTitle:Object(s.a)(Object(s.a)({},u.pageTitle),{},{breadCrumbs:!(null!==(e=u.pageTitle)&&void 0!==e&&e.breadCrumbs)})})}})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Display page title"})]})]})]}),Object(r.jsx)("div",{className:Object(o.a)("tab-pane",{active:"Content"===m}),children:Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Width:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("select",{className:"form-select form-select-solid",name:"layout-builder[layout][content][width]",value:u.content.width,onChange:function(e){return C({content:Object(s.a)(Object(s.a)({},u.content),{},{width:e.target.value})})},children:[Object(r.jsx)("option",{value:"fluid",children:"Fluid"}),Object(r.jsx)("option",{value:"fixed",children:"Fixed"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Select layout width type."})]})]})}),Object(r.jsxs)("div",{className:Object(o.a)("tab-pane",{active:"Aside"===m}),children:[Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Display:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"switch switch-icon",children:Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][aside][display]",checked:u.aside.display,onChange:function(){return C({aside:Object(s.a)(Object(s.a)({},u.aside),{},{display:!u.aside.display})})}})})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Display Aside"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Theme:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("select",{className:"form-select form-select-solid",name:"layout-builder[layout][aside][theme]",value:u.aside.theme,onChange:function(e){return C({aside:Object(s.a)(Object(s.a)({},u.aside),{},{theme:e.target.value})})},children:[Object(r.jsx)("option",{value:"dark",children:"Dark"}),Object(r.jsx)("option",{value:"light",children:"Light"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Select header left content type."})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Fixed:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"switch switch-icon",children:Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][aside][fixed]",checked:u.aside.fixed,onChange:function(){return C({aside:Object(s.a)(Object(s.a)({},u.aside),{},{fixed:!u.aside.fixed})})}})})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Enable fixed aside"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Minimize:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"switch switch-icon",children:Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][aside][minimize]",checked:u.aside.minimize,onChange:function(){return C({aside:Object(s.a)(Object(s.a)({},u.aside),{},{minimize:!u.aside.minimize})})}})})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Enable aside minimization"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Minimized:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"switch switch-icon",children:Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][aside][minimized]",checked:u.aside.minimized,onChange:function(){return C({aside:Object(s.a)(Object(s.a)({},u.aside),{},{minimized:!u.aside.minimized})})}})})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Default minimized aside"})]})]}),Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Hoverable:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsx)("div",{className:"switch switch-icon",children:Object(r.jsx)("div",{className:"form-check form-check-custom form-check-solid form-switch mb-2",children:Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"layout-builder[layout][aside][hoverable]",checked:u.aside.hoverable,onChange:function(){return C({aside:Object(s.a)(Object(s.a)({},u.aside),{},{hoverable:!u.aside.hoverable})})}})})}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Enable hoverable minimized aside"})]})]})]}),Object(r.jsx)("div",{className:Object(o.a)("tab-pane",{active:"Footer"===m}),children:Object(r.jsxs)("div",{className:"row mb-10",children:[Object(r.jsx)("label",{className:"col-lg-3 col-form-label text-lg-end",children:"Width:"}),Object(r.jsxs)("div",{className:"col-lg-9 col-xl-4",children:[Object(r.jsxs)("select",{className:"form-select form-select-solid",name:"layout-builder[layout][footer][width]",value:u.footer.width,onChange:function(e){return C({footer:Object(s.a)(Object(s.a)({},u.footer),{},{width:e.target.value})})},children:[Object(r.jsx)("option",{value:"fluid",children:"Fluid"}),Object(r.jsx)("option",{value:"fixed",children:"Fixed"})]}),Object(r.jsx)("div",{className:"form-text text-muted",children:"Select layout width type."})]})]})})]})}),Object(r.jsx)("div",{className:"card-footer py-6",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-3"}),Object(r.jsxs)("div",{className:"col-lg-9",children:[Object(r.jsxs)("button",{type:"button",onClick:function(){N(!0);try{a.b.setConfig(u)}catch(e){O(Object(a.f)())}setTimeout((function(){t(u),N(!1)}),1e3)},className:"btn btn-primary me-2",children:[!v&&Object(r.jsx)("span",{className:"indicator-label",children:"Preview"}),v&&Object(r.jsxs)("span",{className:"indicator-progress",style:{display:"block"},children:["Please wait..."," ",Object(r.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),Object(r.jsxs)("button",{type:"button",id:"kt_layout_builder_reset",className:"btn btn-active-light btn-color-muted",onClick:function(){w(!0),setTimeout((function(){O(Object(a.f)()),w(!1)}),1e3)},children:[!y&&Object(r.jsx)("span",{className:"indicator-label",children:"Reset"}),y&&Object(r.jsxs)("span",{className:"indicator-progress",style:{display:"block"},children:["Please wait..."," ",Object(r.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})]})]})})]})]})]})};c.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.e,{breadcrumbs:[],children:"Layout Builder"}),Object(r.jsx)(n,{})]})}}}]);
//# sourceMappingURL=16.0baaf51c.chunk.js.map