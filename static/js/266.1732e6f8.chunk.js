"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[266],{962:function(e,t,r){r.d(t,{Z:function(){return w}});var n,a,o,c=r(439),s=r(791),u=r(689),i=r(87),p=r(729),f=r(168),v=r(867),l=v.zo.p(n||(n=(0,f.Z)(["\nfont-weight: 600;\ntext-align: center;\nwidth: 130px;\n"]))),h=v.zo.div(a||(a=(0,f.Z)(["\ndisplay: flex;\nwidth: 200px;\nbackground-color: silver;\nborder-radius: 10px;\nalign-items: center;\n"]))),d=v.zo.section(o||(o=(0,f.Z)(["\n display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n"]))),m=r(184),w=function(e){var t=e.trendFilms,r=(0,s.useState)([]),n=(0,c.Z)(r,2),a=n[0],o=n[1],f=(0,s.useState)(!1),v=(0,c.Z)(f,2),w=v[0],Z=v[1],x=(0,u.TH)();(0,s.useEffect)((function(){var e=t.map((function(e){return e.poster_path?new Promise((function(t){var r=new Image;r.src="https://image.tmdb.org/t/p/original/".concat(e.poster_path),r.onload=function(){return t()},r.onerror=function(){return t()}})):Promise.resolve()}));Promise.all(e).then((function(){Z(!0)})).catch((function(){console.log("Error loading images")})),o(t)}),[t]);return w&&(0,m.jsx)(d,{children:a.map((function(e){return(0,m.jsx)(i.rU,{style:{textDecoration:"none",color:"black"},to:(t=e.id,"/movies/".concat(t)),state:{from:x},children:(0,m.jsxs)(h,{children:[(0,m.jsx)("img",{width:70,src:e.poster_path?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):p,alt:"",onError:function(e){e.target.src=p}}),(0,m.jsx)(l,{children:e.title})]})},e.id);var t}))})}},266:function(e,t,r){r.r(t);var n=r(165),a=r(861),o=r(439),c=r(791),s=r(962),u=r(721),i=r(184);t.default=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),r=t[0],p=t[1],f=(0,c.useState)(!1),v=(0,o.Z)(f,2),l=v[0],h=v[1];return(0,c.useEffect)((function(){(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u._L)();case 3:t=e.sent,p(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:return e.prev=10,h(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[]),(0,i.jsx)("div",{children:l?(0,i.jsx)(s.Z,{trendFilms:r}):(0,i.jsx)("div",{})})}},721:function(e,t,r){r.d(t,{MI:function(){return u},Wf:function(){return s},_L:function(){return c},q5:function(){return p},yo:function(){return i}});var n=r(165),a=r(861),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,c=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,e.prev=1,e.next=4,o.Z.get("/trending/movie/day",{params:{page:t}});case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Oops, there is no movies");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="/search/movie?query=".concat(t,"&"),e.next=4,o.Z.get(r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Oops, there is no movie");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(t,"/credits"));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(t,"/reviews"));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},729:function(e,t,r){e.exports=r.p+"static/media/no-poster.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=266.1732e6f8.chunk.js.map