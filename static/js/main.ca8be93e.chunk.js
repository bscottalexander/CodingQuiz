(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{69:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a,r,i,c,s,o,u=n(0),d=n.n(u),l=n(10),j=n.n(l),h=(n(69),n(17)),b=n(13),g=n(111),O=n(34),x=n(14),f=x.a.div(a||(a=Object(b.a)(["\n  min-height: ",";\n  min-width: ",";\n"])),(function(e){return void 0!==e.height?"".concat(e.height,"px"):"unset"}),(function(e){return void 0!==e.width?"".concat(e.width,"px"):"unset"})),m=n(118),v=n(119),p=n(116),w=n(112),S=n(48),C=n(117),T=n(113),y=n(114),k=n(115),I=x.a.div(r||(r=Object(b.a)(["\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(e){return e.left?"".concat(e.left,"px"):"unset"}),(function(e){return e.right?"".concat(e.right,"px"):"unset"}),(function(e){return e.top?"".concat(e.top,"px"):"unset"}),(function(e){return e.bottom?"".concat(e.bottom,"px"):"unset"})),L=n(6),P=x.a.div(i||(i=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),q="/start",R=function(e){var t=e.setCurrentPageURL,n=e.startTimer;return Object(L.jsxs)(P,{children:[Object(L.jsx)(O.a,{variant:"h3",children:"Coding Quiz"}),Object(L.jsx)(f,{height:40}),Object(L.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){n(),t(B)},children:"Start"})]})},W=x.a.div(c||(c=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n"]))),M=x.a.div(s||(s=Object(b.a)(["\n  display: flex;\n  align-items: center;\n"]))),H="/results",J=function(e){var t=e.time,n=e.setCurrentPageURL,a=e.resetTimer,r=Object(u.createRef)(),i=Object(u.useState)(!1),c=Object(h.a)(i,2),s=c[0],o=c[1],d=Object(u.useState)(JSON.parse(window.localStorage.getItem("leads")||"[]")),l=Object(h.a)(d,2),j=l[0],b=l[1];return Object(L.jsx)(W,{children:Object(L.jsxs)(I,{top:20,bottom:20,right:20,left:20,children:[Object(L.jsxs)(O.a,{variant:"h3",children:["Score: ",t]}),Object(L.jsxs)(M,{children:[Object(L.jsx)(C.a,{label:"Name",inputRef:r,disabled:s}),Object(L.jsx)(g.a,{onClick:function(){var e,n;o(!0);var a=(null===(e=r.current)||void 0===e?void 0:e.value)||"";window.localStorage.setItem("leads",JSON.stringify([].concat(Object(S.a)(j),["".concat(a," | ").concat(t)]))),b((function(e){return[].concat(Object(S.a)(e),["".concat(a," | ").concat(t)])})),(null===(n=r.current)||void 0===n?void 0:n.value)&&(r.current.value="")},disabled:s,children:"Add"})]}),Object(L.jsx)(T.a,{dense:!0,children:j.map((function(e,t){return Object(L.jsx)(y.a,{children:Object(L.jsx)(k.a,{primary:e})},t)}))}),Object(L.jsx)(g.a,{onClick:function(){a(),n(q)},children:"Start Over"})]})})},U=x.a.div(o||(o=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),B="/question",F=function(e){var t=e.time,n=e.decrementTime,a=e.setCurrentPageURL,r=e.stopTimer,i=[{question:"What does HTML stand for?",answers:["Hyperlinks and Text Markup Language","Home Tool Markup Language","Hyper Text Markup Language"],answerIndex:2},{question:"Who is making the Web standards?",answers:["The World Wide Web Consortium","Mozilla","Microsoft","Google"],answerIndex:0},{question:"Where is the correct place to insert a JavaScript?",answers:["The <Body> Section","The <Head> Section","Both the <Body> and <Head> Section are Correct"],answerIndex:0},{question:"What are variables used for in JavaScript Programs?",answers:[" Storing numbers, dates, or other values","Varying randomly","Causing high-school algebra flashbacks"],answerIndex:0}],c=Object(u.useState)(0),s=Object(h.a)(c,2),o=s[0],l=s[1],j=d.a.useState(0),b=Object(h.a)(j,2),x=b[0],S=b[1];return Object(L.jsxs)(U,{children:[Object(L.jsx)(f,{height:40}),Object(L.jsxs)(O.a,{variant:"h6",children:[t," seconds"]}),Object(L.jsx)(f,{height:40}),Object(L.jsxs)(O.a,{variant:"h6",children:["Question: ",i[o].question]}),Object(L.jsx)(f,{height:20}),Object(L.jsx)(w.a,{component:"fieldset",children:Object(L.jsx)(v.a,{"aria-label":"answers",name:"answers",value:x,onChange:function(e){S(parseInt(e.target.value))},children:i[o].answers.map((function(e,t){return Object(L.jsx)(p.a,{value:t,control:Object(L.jsx)(m.a,{}),label:e},e)}))})}),Object(L.jsx)(f,{height:20}),Object(L.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){i[o].answerIndex!==x?n(10):i.length-1!==o?l(o+1):(r(),l(o+1),a(H))},children:i.length-1!==o?"Next Question":"Finish"})]})},z=function(){var e=Object(u.useState)(q),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(u.useState)(100),i=Object(h.a)(r,2),c=i[0],s=i[1],o=Object(u.useState)(void 0),d=Object(h.a)(o,2),l=d[0],j=d[1],b=function(){clearInterval(l)};switch(n){case q:return Object(L.jsx)(R,{setCurrentPageURL:a,startTimer:function(){var e=setInterval((function(){s((function(e){return e-1<0?(b(),a(H),0):e-1}))}),1e3);j(e)}});case B:return Object(L.jsx)(F,{time:c,stopTimer:b,decrementTime:function(e){s((function(t){return t-e<0?(b(),a(H),0):t-e}))},setCurrentPageURL:a});case H:return Object(L.jsx)(J,{time:c,setCurrentPageURL:a,resetTimer:function(){j(void 0),s(100)}});default:throw new Error("Page does not exist")}},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};j.a.render(Object(L.jsx)(d.a.StrictMode,{children:Object(L.jsx)(z,{})}),document.getElementById("root")),N()}},[[76,1,2]]]);
//# sourceMappingURL=main.ca8be93e.chunk.js.map