(this["webpackJsonpphoto-log"]=this["webpackJsonpphoto-log"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),o=n(26),r=n(21),l=n.n(r),s=(n(53),n(12)),j=n(13),h=n(15),u=n(14),b=n(7),d=(n(54),n(85)),p=n(80),O=n(81),f=n(82),x=n(83),m=n(86),g=n(87),v=(n(55),n(43)),y=n.n(v),C=[{title:"Home",path:"/",id:0},{title:"upload",path:"/upload",id:1},{title:"Log",path:"/log",id:2},{title:"Gallery",path:"/gallery",id:3}],k=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(d.a,{position:"static",children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(O.a,{maxWidth:"md",className:"navbarDisplayFlex",children:[Object(a.jsx)(f.a,{edge:"start",color:"inherit","aria-label":"home",href:"/",children:Object(a.jsx)(y.a,{fontSize:"large"})}),Object(a.jsx)(x.a,{component:"nav","aria-labelledby":"main navigation",className:"navDisplayFlex",children:C.map((function(e){var t=e.title,n=e.path,c=e.id;return Object(a.jsx)(o.b,{to:n,className:"linkText",children:Object(a.jsx)(m.a,{button:!0,children:Object(a.jsx)(g.a,{primary:t})})},c)}))})]})})})}}]),n}(c.Component),N=n(84),F=(n(63),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Home",children:Object(a.jsxs)("div",{className:"inner-home",children:[Object(a.jsx)("h1",{children:"Welcome to your Photo Log"}),Object(a.jsx)("p",{children:"To begin, click the upload button below to upload new photos"}),Object(a.jsx)(N.a,{variant:"contained",color:"primary",href:"/upload",children:"Get Started"})]})})}}]),n}(i.a.Component)),S=n(44),L=n(29),w=n(35),D=n.n(w),I=(n(64),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={fileName:"",exif:""},a.handleChange=a.handleChange.bind(Object(L.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){var t=Object(S.a)(e.target.files,1)[0];if(t&&t.name){this.setState({fileName:t.name});var n=this;D.a.getData(t,(function(){var e=D.a.pretty(this);e?(console.log(e),n.setState({exif:e})):(n.setState({exif:"No EXIF data found in image"}),console.log("No EXIF data found in image"))}))}this.setState({exif:""}),console.log("")}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Upload",children:[Object(a.jsx)("h1",{children:"Upload"}),Object(a.jsxs)(N.a,{variant:"contained",color:"primary",href:"/upload",component:"label",children:["Choose File",Object(a.jsx)("input",{type:"file",id:"file",accept:".jpg, .png, .heif, .heic",onChange:this.handleChange,hidden:!0})]}),Object(a.jsx)("p",{children:this.state.fileName}),Object(a.jsx)("div",{children:this.state.exif})]})}}]),n}(i.a.Component)),P=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Log"})})}}]),n}(i.a.Component),T=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Gallery"})})}}]),n}(i.a.Component),E=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("h1",{children:"Oops! Page not found!"})}}]),n}(i.a.Component),G=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("main",{children:[Object(a.jsx)(k,{}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",component:F}),Object(a.jsx)(b.a,{exact:!0,path:"/upload",component:I}),Object(a.jsx)(b.a,{exact:!0,path:"/log",component:P}),Object(a.jsx)(b.a,{exact:!0,path:"/gallery",component:T}),Object(a.jsx)(b.a,{component:E})]})]})}}]),n}(i.a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};l.a.render(Object(a.jsx)(o.a,{basename:"/photo-log",children:Object(a.jsx)(G,{})}),document.getElementById("root")),B()}},[[65,1,2]]]);
//# sourceMappingURL=main.6c92c7b6.chunk.js.map