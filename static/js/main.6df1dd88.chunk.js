(this.webpackJsonpweb_app=this.webpackJsonpweb_app||[]).push([[0],{1311:function(e,a,t){},1312:function(e,a,t){},1313:function(e,a,t){},1314:function(e,a,t){},1315:function(e,a,t){},1316:function(e,a,t){},1317:function(e,a,t){},1318:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(19),c=t.n(i),m=t(9),r=t(10),o=t(12),s=t(11),u=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/#client"},"Our Clients")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/#about"},"About Us ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/#contact"},"Contact")))))}}]),t}(l.a.Component),d=t(20),p=t(1),E=(t(27),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",exact:!0,component:u}),l.a.createElement(p.a,{path:"/#client",exact:!0,component:u}),l.a.createElement(p.a,{path:"/#about",exact:!0,component:u}),l.a.createElement(p.a,{path:"/#contact",exact:!0,component:u}))),l.a.createElement("div",{className:"headerPage"},l.a.createElement("div",{className:"header-title-description"},l.a.createElement("h1",null,"Welcome to our Website!"),l.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))}),f=t(7),g=t.n(f),b=(t(1311),function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.image,className:"card-img-top",alt:"city"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},e.description)))}),v=(t(1312),function(){return l.a.createElement("div",{className:"clients",id:"client"},l.a.createElement("h3",null,"Our Clients"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(b,{title:"Best choice!",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua.",image:g.a.image.business()})),l.a.createElement("div",{className:"col"},l.a.createElement(b,{title:"Amazing!",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam.",image:g.a.image.sports()})),l.a.createElement("div",{className:"col"},l.a.createElement(b,{title:"Incredible support!",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat.",image:g.a.image.transport()})))))}),h=(t(1313),t(1314),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{id:"ftImg",src:e.imageSrc,alt:""})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("h3",null,e.featureTitle),l.a.createElement("p",null,e.featureDescription)))}),N=function(){return l.a.createElement("div",{className:"container",id:"about"},l.a.createElement("h2",{id:"featuresSection"},"Our Features"),l.a.createElement("div",{className:"row about"},l.a.createElement(h,{imageSrc:"https://dummyimage.com/350x350/b3b3b3/000000",featureTitle:"High Quality Websites",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat."})),l.a.createElement("div",{className:"row about"},l.a.createElement(h,{imageSrc:"https://dummyimage.com/350x350/b3b3b3/000000",featureTitle:"Premium services",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat."})),l.a.createElement("div",{className:"row about"},l.a.createElement(h,{imageSrc:"https://dummyimage.com/350x350/b3b3b3/000000",featureTitle:"24/7 Support",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat."})))},y=(t(1315),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={nameField:"",emailField:"",msgField:""},e.onNameInputChange=function(a){e.setState({nameField:a.target.value})},e.onEmailInputChange=function(a){e.setState({emailField:a.target.value})},e.onMsgInputField=function(a){e.setState({msgField:a.target.value})},e.onFormSubmit=function(a){a.preventDefault(),""==e.state.nameField||""==e.state.emailField||""==e.state.msgField?alert("All fields must be filled."):alert("Message Sended!\n"+e.state.nameField+"\n"+e.state.emailField+"\n"+e.state.msgField)},e}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-section",id:"contact"},l.a.createElement("div",{className:"container contact"},l.a.createElement("h2",null,"Interested? Contact us!"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 contact-info"},l.a.createElement("span",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Address:")," Av. A place somewhere, 899 "),l.a.createElement("span",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Number:")," (55) 9999-99999"),l.a.createElement("span",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Email (@):")," ourservices@website.com"),l.a.createElement("div",{className:"social-media"},l.a.createElement("h5",null,"Follow Us!"),l.a.createElement("a",{href:"/",className:"fa fa-facebook"}),l.a.createElement("a",{href:"/",className:"fa fa-instagram"}),l.a.createElement("a",{href:"/",className:"fa fa-twitter"}),l.a.createElement("a",{href:"/",className:"fa fa-linkedin"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("form",{className:"contact-form",onSubmit:this.onFormSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"field-label"},"Name:"),l.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Type your name",onChange:this.onNameInputChange,value:this.state.nameField})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"field-label"},"Email:"),l.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Type your email",onChange:this.onEmailInputChange,value:this.state.emailField})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"field-label"},"Message:"),l.a.createElement("textarea",{className:"form-control form-control-lg",rows:"5",placeholder:"Type your text",onChange:this.onMsgInputField,value:this.state.msgField})),l.a.createElement("button",{className:"btn btn-warning btn-lg",type:"submit"},"Send"))))))}}]),t}(l.a.Component)),x=(t(1316),function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"footer"},l.a.createElement("span",{className:"footer-txt"},"2020 Our Company | Author: Rodrigo Okido - All Rights Reserved | Check our ",l.a.createElement("a",{href:"/"},"policy"))))}),F=(t(1317),function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(N,null),l.a.createElement(y,null),l.a.createElement(x,null))});c.a.render(l.a.createElement(F,null),document.getElementById("root"))},22:function(e,a,t){e.exports=t(1318)},27:function(e,a,t){}},[[22,1,2]]]);
//# sourceMappingURL=main.6df1dd88.chunk.js.map