(this.webpackJsonpportfolio_km=this.webpackJsonpportfolio_km||[]).push([[9],{226:function(e,t,c){"use strict";c.r(t);var a=c(2),l=c(0),s=c(75),n=c(54),i=c(172),r=c(173),o=c(52),j=c(166),d=c(168),u=c(174),b=c(9),h=c(219),O=c(171),v=c(217),m=c(218),x=c(223),C=c(222),f=c(206),p=c.n(f),k=function(){var e,t=Object(l.useContext)(n.a),c=(t.contactForm,t.setContactForm,Object(l.useRef)()),s=Object(l.useRef)(),i=Object(l.useRef)(),r=Object(l.useRef)(),o=Object(l.useState)({value:"",isClicked:!1}),j=Object(b.a)(o,2),d=j[0],u=j[1],f=Object(l.useState)({value:"",isClicked:!1}),k=Object(b.a)(f,2),g=k[0],w=k[1],R=Object(l.useState)({value:"",isClicked:!1}),F=Object(b.a)(R,2),I=F[0],z=F[1],N=Object(l.useState)({value:"",isClicked:!1}),y=Object(b.a)(N,2),S=y[0],D=y[1],_=Object(l.useState)({success:!1,error:!1}),M=Object(b.a)(_,2),E=M[0],G=M[1];e=!(!I.value.includes("@")||!I.value.includes(".")),console.log("isEmailOK: "+e);return Object(l.useEffect)((function(){p.a.init("user_D0vV7BmzXyRJwyktLtvVO")}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(h.a,{inverted:!0,color:"white",widths:"equal",success:E.success,error:E.error,children:[Object(a.jsxs)(h.a.Group,{widths:"equal",children:[Object(a.jsx)(O.a,{innerRef:c,children:Object(a.jsx)(h.a.Field,{error:0===d.value.length&&d.isClicked,id:"form-input-control-first-name",control:v.a,label:"Name",placeholder:"Name",value:d.value,onChange:function(e){u({value:e.target.value,isClicked:!0})}})}),Object(a.jsx)(O.a,{innerRef:s,children:Object(a.jsx)(h.a.Field,{error:0===g.value.length&&g.isClicked,id:"form-input-control-last-name",control:v.a,label:"Subject",placeholder:"Subject",value:g.value,onChange:function(e){w({value:e.target.value,isClicked:!0})}})})]}),Object(a.jsx)(h.a.Group,{children:Object(a.jsx)(O.a,{innerRef:i,children:Object(a.jsx)(h.a.Field,{error:0===I.value.length&&I.isClicked||I.length>1&&!e&&I.isClicked,id:"form-input-control-email",control:v.a,label:"Email",placeholder:"joe@wp.pl",value:I.value,onChange:function(e){z({value:e.target.value,isClicked:!0})}})})}),Object(a.jsx)(h.a.Group,{children:Object(a.jsx)(O.a,{innerRef:r,children:Object(a.jsx)(h.a.Field,{error:0===S.value.length&&S.isClicked,id:"form-textarea-control-opinion",control:m.a,label:"Message",placeholder:"Message",value:S.value,onChange:function(e){D({value:e.target.value,isClicked:!0})}})})}),Object(a.jsx)(h.a.Group,{children:Object(a.jsx)(h.a.Field,{disabled:0===d.value.length||0===g.value.length||0===I.value.length||0===S.value.length||!e,id:"form-button-control-public",control:x.a,content:"Send",onClick:function(e){!function(e){e.preventDefault();var t={name:d.value,subject:g.value,email:I.value,message:S.value};p.a.send("service_nmteisl","template_wcqs1fv",t,"user_D0vV7BmzXyRJwyktLtvVO").then((function(e){u({value:"",isClicked:!1}),w({value:"",isClicked:!1}),z({value:"",isClicked:!1}),D({value:"",isClicked:!1}),G({success:!0,error:!1})}),(function(e){G({success:!1,error:!0})}))}(e)}})}),Object(a.jsx)(C.a,{success:!0,header:"Form Completed",content:"Message sent sucessfully"}),Object(a.jsx)(C.a,{error:!0,header:"An Error Ocurred",content:"Propably bad e-mail adress or a mail-server problem"})]})})};t.default=function(){var e=Object(l.useContext)(n.a).contact,t=Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(i.a,{inverted:!0,stackable:!0,padded:!0,centered:!0,vertical:!0,className:"contact",children:[Object(a.jsx)(i.a.Row,{children:Object(a.jsxs)(i.a.Column,{widescreen:13,children:[Object(a.jsx)(i.a.Row,{divided:!0,children:Object(a.jsxs)(r.a,{inverted:!0,as:"h2",children:[Object(a.jsx)(o.a,{name:e.headerIcon}),Object(a.jsx)(r.a.Content,{children:e.headerContent})]})}),Object(a.jsxs)(i.a.Row,{children:[Object(a.jsx)(j.a,{horizontal:!0,inverted:!0,children:"Contact"}),Object(a.jsxs)(d.a,{inverted:!0,className:"listColor",animated:!0,celled:!0,selection:!0,size:"big",children:[Object(a.jsxs)(d.a.Item,{children:[Object(a.jsx)(o.a,{name:e.listIcons[0].listIcon,size:"big",className:"no-pointer"}),Object(a.jsxs)(d.a.Content,{children:[Object(a.jsx)(d.a.Header,{className:"link-white",children:Object(a.jsx)("a",{href:"mailto:vkmstudiox@gmail.com",className:"link-white",children:e.listIcons[0].listHeader})}),Object(a.jsx)(d.a.Description,{children:e.listIcons[0].listDescr})]})]}),Object(a.jsxs)(d.a.Item,{children:[Object(a.jsx)(o.a,{name:e.listIcons[1].listIcon,size:"big",className:"no-pointer"}),Object(a.jsxs)(d.a.Content,{children:[Object(a.jsx)(d.a.Header,{className:"link-white",children:Object(a.jsx)(s.b,{to:{pathname:"https://www.linkedin.com/in/krzysztof-m-01124420b/"},target:"_blank",children:e.listIcons[1].listHeader})}),Object(a.jsx)(d.a.Description,{children:e.listIcons[1].listDescr})]})]})]})]})]})}),Object(a.jsx)(i.a.Row,{children:Object(a.jsxs)(i.a.Column,{widescreen:13,children:[Object(a.jsx)(i.a.Row,{divided:!0,children:Object(a.jsxs)(r.a,{inverted:!0,as:"h2",children:[Object(a.jsx)(o.a,{name:e.headerMailIcon}),Object(a.jsx)(r.a.Content,{children:e.headerMailContent})]})}),Object(a.jsxs)(i.a.Row,{children:[Object(a.jsx)(j.a,{horizontal:!0,inverted:!0,children:"Contact Form"}),Object(a.jsx)(k,{})]})]})})]})});return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u.a,{vertical:!0,padded:"very",children:t})})}}}]);
//# sourceMappingURL=9.fcb9ffb2.chunk.js.map