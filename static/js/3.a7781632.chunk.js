(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{100:function(e,s,a){e.exports={dialogs:"MyMessages_dialogs__2COXr",dialogsItems:"MyMessages_dialogsItems__1PIBs",lastMessages:"MyMessages_lastMessages__2FZMg",dialog:"MyMessages_dialog__3pEmI",lastMessage:"MyMessages_lastMessage__dn3Dg",useravatar:"MyMessages_useravatar__3JcuR",username:"MyMessages_username__1S2jF",sendMessage:"MyMessages_sendMessage__2bVAb",textfield:"MyMessages_textfield__3MGo1"}},102:function(e,s,a){"use strict";a.r(s);var t=a(2),n=a(10),r=a(11),c=a(13),i=a(12),u=a(100),o=a.n(u),d=a(14),g=a(0),j=function(e){return Object(g.jsxs)("div",{className:o.a.dialog,children:[Object(g.jsx)("img",{className:o.a.useravatar,src:e.avatar}),Object(g.jsx)(d.b,{className:o.a.username,to:"/messages/"+e.id,children:e.name})]})},l=function(e){return Object(g.jsx)("div",{className:o.a.lastMessage,children:e.text})},b=a(1),m=a.n(b),p=a(45),O=a(9),M=function(e){Object(c.a)(a,e);var s=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).onSubmit=function(s){e.props.addMessage(s.message),s.message=""},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:o.a.dialogs,children:[Object(g.jsx)("div",{className:o.a.dialogsItems,children:Object(g.jsx)(f,Object(t.a)({},this.props))}),Object(g.jsx)("div",{className:o.a.lastMessages,children:Object(g.jsx)(x,Object(t.a)({},this.props))}),Object(g.jsx)("div",{children:Object(g.jsx)(O.b,{onSubmit:this.onSubmit,validate:this.validate,render:function(e){var s=e.handleSubmit;return Object(g.jsxs)("form",{onSubmit:s,children:[Object(g.jsx)(O.a,{name:"message",component:"textarea",type:"text",placeholder:"Type your message"}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})})]})}})})]})}}]),a}(m.a.Component),f=function(e){return e.dialogs.map((function(e){return Object(g.jsx)(j,{name:e.name,id:e.id,avatar:e.avatar})}))},x=function(e){return e.messages.map((function(e){return Object(g.jsx)(l,{text:e.message,id:e.id})}))},_=M,h=a(15),v=a(36),y=a(17),N=function(e){return e.messagePage.textArea},S=function(e){return e.messagePage.dialogs},I=function(e){return e.messagePage.messages},k=function(e){Object(c.a)(a,e);var s=Object(i.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(g.jsx)(_,Object(t.a)({},this.props))}}]),a}(m.a.Component);s.default=Object(y.d)(Object(h.b)((function(e){return{newMessageText:N(e),dialogs:S(e),messages:I(e)}}),(function(e){return{addMessage:function(s){e(Object(p.a)(s))}}})),v.a)(k)}}]);
//# sourceMappingURL=3.a7781632.chunk.js.map