(this.webpackJsonpttt5=this.webpackJsonpttt5||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a,c,r=n(1),l=n.n(r),u=n(5),E=n(3),o=n(2),i=n(20),s=n(19);!function(e){e.E="",e.X="X",e.O="O"}(a||(a={})),function(e){e.PLAYING="",e.WINNER="Winner",e.DRAW="Draw"}(c||(c={}));var m=function(e){var t=e.i,n=e.squareClick,a=e.b;return l.a.createElement("button",{className:"square",onClick:function(){n()}},a[t])},N=(n(12),n(13),Array(9).fill(a.E)),b=function(){var e=Object(r.useState)(a.X),t=Object(o.a)(e,2),n=t[0],u=t[1],b=Object(r.useState)(c.PLAYING),f=Object(o.a)(b,2),O=f[0],j=f[1],p=Object(r.useState)(N),I=Object(o.a)(p,2),A=I[0],R=I[1],W=Object(r.useState)(0),X=Object(o.a)(W,2),k=X[0],v=X[1],P=9===k&&O===c.PLAYING?l.a.createElement("span",{className:"ml-3 mt-3"},c.DRAW):O===c.PLAYING?"Next Player: ".concat(n):n===a.X?"".concat(c.WINNER," ").concat(a.O):"".concat(c.WINNER," ").concat(a.X);Object(r.useEffect)((function(){(A[0]===A[1]&&A[0]===A[2]&&A[0]!==a.E||A[3]===A[4]&&A[3]===A[5]&&A[3]!==a.E||A[6]===A[7]&&A[6]===A[8]&&A[6]!==a.E||A[0]===A[3]&&A[0]===A[6]&&A[0]!==a.E||A[1]===A[4]&&A[1]===A[7]&&A[1]!==a.E||A[2]===A[5]&&A[2]===A[8]&&A[2]!==a.E||A[0]===A[4]&&A[0]===A[8]&&A[0]!==a.E||A[2]===A[4]&&A[2]===A[6]&&A[2]!==a.E)&&j(c.WINNER)}),[A]);var d=function(e){return function(){A[e]===a.E&&O!==c.WINNER&&(v((function(e){return e+1})),n===a.X?u(a.O):u(a.X),R(Object(E.a)(Object(E.a)({},A),{},{[e]:n})))}},y=function(e){return l.a.createElement(m,{i:e,squareClick:d(e),b:A})};return l.a.createElement("div",{className:"ml-5 mt-3"},l.a.createElement("h3",null,P),l.a.createElement("div",null,Array(9).fill(null).map((function(e,t){return t%3===0&&l.a.createElement(i.a,{key:Object(s.a)(t)},l.a.createElement("span",null,y(t)),l.a.createElement("span",null,y(t+1)),l.a.createElement("span",null,y(t+2)))}))),l.a.createElement(i.a,{className:"ml-3 mt-3"},l.a.createElement("button",{onClick:function(){u(a.X),R(N),j(c.PLAYING),v(0)}},"Reset")))},f=document.getElementById("root");Object(u.render)(r.createElement(b,null),f)},7:function(e,t,n){e.exports=n(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.1828f87d.chunk.js.map