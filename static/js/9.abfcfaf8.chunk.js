(this.webpackJsonpportfolio_km=this.webpackJsonpportfolio_km||[]).push([[9],{226:function(e,t,c){"use strict";c.r(t);var a=c(2),l=c(0),n=c(54),s=c(172),i=c(173),r=c(52),o=c(166),d=c(168),j=c(174),u=c(9),b=c(219),h=c(171),O=c(217),v=c(218),x=c(223),m=c(222),C=c(206),f=c.n(C),p=function(){var e,t=Object(l.useContext)(n.a),c=(t.contactForm,t.setContactForm,Object(l.useRef)()),s=Object(l.useRef)(),i=Object(l.useRef)(),r=Object(l.useRef)(),o=Object(l.useState)({value:"",isClicked:!1}),d=Object(u.a)(o,2),j=d[0],C=d[1],p=Object(l.useState)({value:"",isClicked:!1}),g=Object(u.a)(p,2),k=g[0],w=g[1],R=Object(l.useState)({value:"",isClicked:!1}),F=Object(u.a)(R,2),S=F[0],y=F[1],I=Object(l.useState)({value:"",isClicked:!1}),N=Object(u.a)(I,2),z=N[0],_=N[1],D=Object(l.useState)({success:!1,error:!1}),M=Object(u.a)(D,2),E=M[0],G=M[1];e=!(!S.value.includes("@")||!S.value.includes(".")),console.log("isEmailOK: "+e);return Object(l.useEffect)((function(){f.a.init("user_D0vV7BmzXyRJwyktLtvVO")}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(b.a,{inverted:!0,color:"white",widths:"equal",success:E.success,error:E.error,children:[Object(a.jsxs)(b.a.Group,{widths:"equal",children:[Object(a.jsx)(h.a,{innerRef:c,children:Object(a.jsx)(b.a.Field,{error:0===j.value.length&&j.isClicked,id:"form-input-control-first-name",control:O.a,label:"Name",placeholder:"Name",value:j.value,onChange:function(e){C({value:e.target.value,isClicked:!0})}})}),Object(a.jsx)(h.a,{innerRef:s,children:Object(a.jsx)(b.a.Field,{error:0===k.value.length&&k.isClicked,id:"form-input-control-last-name",control:O.a,label:"Subject",placeholder:"Subject",value:k.value,onChange:function(e){w({value:e.target.value,isClicked:!0})}})})]}),Object(a.jsx)(b.a.Group,{children:Object(a.jsx)(h.a,{innerRef:i,children:Object(a.jsx)(b.a.Field,{error:0===S.value.length&&S.isClicked||S.length>1&&!e&&S.isClicked,id:"form-input-control-email",control:O.a,label:"Email",placeholder:"joe@wp.pl",value:S.value,onChange:function(e){y({value:e.target.value,isClicked:!0})}})})}),Object(a.jsx)(b.a.Group,{children:Object(a.jsx)(h.a,{innerRef:r,children:Object(a.jsx)(b.a.Field,{error:0===z.value.length&&z.isClicked,id:"form-textarea-control-opinion",control:v.a,label:"Message",placeholder:"Message",value:z.value,onChange:function(e){_({value:e.target.value,isClicked:!0})}})})}),Object(a.jsx)(b.a.Group,{children:Object(a.jsx)(b.a.Field,{disabled:0===j.value.length||0===k.value.length||0===S.value.length||0===z.value.length||!e,id:"form-button-control-public",control:x.a,content:"Send",onClick:function(e){!function(e){e.preventDefault();var t={name:j.value,subject:k.value,email:S.value,message:z.value};f.a.send("service_nmteisl","template_wcqs1fv",t,"user_D0vV7BmzXyRJwyktLtvVO").then((function(e){C({value:"",isClicked:!1}),w({value:"",isClicked:!1}),y({value:"",isClicked:!1}),_({value:"",isClicked:!1}),G({success:!0,error:!1})}),(function(e){G({success:!1,error:!0})}))}(e)}})}),Object(a.jsx)(m.a,{success:!0,header:"Form Completed",content:"Message sent sucessfully"}),Object(a.jsx)(m.a,{error:!0,header:"An Error Ocurred",content:"Propably bad e-mail adress or a mail-server problem"})]})})};t.default=function(){var e=Object(l.useContext)(n.a).contact,t=Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(s.a,{inverted:!0,stackable:!0,padded:!0,centered:!0,vertical:!0,className:"contact",children:[Object(a.jsx)(s.a.Row,{children:Object(a.jsxs)(s.a.Column,{widescreen:13,children:[Object(a.jsx)(s.a.Row,{divided:!0,children:Object(a.jsxs)(i.a,{inverted:!0,as:"h2",children:[Object(a.jsx)(r.a,{name:e.headerIcon}),Object(a.jsx)(i.a.Content,{children:e.headerContent})]})}),Object(a.jsxs)(s.a.Row,{children:[Object(a.jsx)(o.a,{horizontal:!0,inverted:!0,children:"Contact"}),Object(a.jsx)(d.a,{inverted:!0,className:"listColor",animated:!0,celled:!0,selection:!0,size:"big",children:Object(a.jsxs)(d.a.Item,{children:[Object(a.jsx)(r.a,{name:e.listIcons[0].listIcon,size:"big",className:"no-pointer"}),Object(a.jsxs)(d.a.Content,{children:[Object(a.jsx)(d.a.Header,{className:"link-white",children:Object(a.jsx)("a",{href:"mailto:vkmstudiox@gmail.com",className:"link-white",children:e.listIcons[0].listHeader})}),Object(a.jsx)(d.a.Description,{children:e.listIcons[0].listDescr})]})]})})]})]})}),Object(a.jsx)(s.a.Row,{children:Object(a.jsxs)(s.a.Column,{widescreen:13,children:[Object(a.jsx)(s.a.Row,{divided:!0,children:Object(a.jsxs)(i.a,{inverted:!0,as:"h2",children:[Object(a.jsx)(r.a,{name:e.headerMailIcon}),Object(a.jsx)(i.a.Content,{children:e.headerMailContent})]})}),Object(a.jsxs)(s.a.Row,{children:[Object(a.jsx)(o.a,{horizontal:!0,inverted:!0,children:"Contact Form"}),Object(a.jsx)(p,{})]})]})})]})});return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j.a,{vertical:!0,padded:"very",children:t})})}}}]);
//# sourceMappingURL=9.abfcfaf8.chunk.js.map