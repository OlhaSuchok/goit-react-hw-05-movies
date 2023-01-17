"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[693],{4021:function(n,t,e){e.d(t,{Cd:function(){return v},JQ:function(){return b},Mg:function(){return h},TX:function(){return Z},ZD:function(){return x},dh:function(){return g},ds:function(){return l},xl:function(){return m}});var r,a,o,c,i,u,s,p,f=e(168),d=e(3081),l=d.Z.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  padding-left: 0;\n"]))),x=d.Z.div(a||(a=(0,f.Z)([""]))),g=d.Z.li(o||(o=(0,f.Z)(["\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: ",";\n  border-radius: 1px solid #2a2a2a;\n\n  border-radius: 3px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px;\n"])),(function(n){return n.theme.colors.backgroundSection})),h=d.Z.img(c||(c=(0,f.Z)(["\n  max-width: 300px;\n  margin-bottom: 8px;\n"]))),v=d.Z.p(i||(i=(0,f.Z)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n"]))),m=d.Z.span(u||(u=(0,f.Z)(["\n  color: #2a2a2a;\n  font-family: none;\n  font-size: 28px;\n  font-weight: 700;\n"]))),Z=d.Z.span(s||(s=(0,f.Z)(["\n  color: #2a2a2a;\n  font-family: none;\n  font-size: 24px;\n  font-weight: 400;\n"]))),b=d.Z.p(p||(p=(0,f.Z)(["\n  text-align: center;\n  color: #2a2a2a;\n  font-family: none;\n  font-size: 24px;\n  font-weight: 500;\n\n  margin-top: 40px;\n"])))},7693:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,o,c,i,u=e(5861),s=e(9439),p=e(4687),f=e.n(p),d=e(2791),l=e(7689),x=e(1933),g=e(168),h=e(3081),v=h.Z.ul(r||(r=(0,g.Z)(["\n  list-style: none;\n  padding-left: 0;\n"]))),m=h.Z.li(a||(a=(0,g.Z)(["\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: ",";\n  border-radius: 1px solid #2a2a2a;\n\n  border-radius: 3px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px;\n"])),(function(n){return n.theme.colors.backgroundSection})),Z=h.Z.span(o||(o=(0,g.Z)(["\n  color: #2a2a2a;\n  font-family: none;\n  font-size: 28px;\n  font-weight: 700;\n"]))),b=h.Z.span(c||(c=(0,g.Z)(["\n  color: #2a2a2a;\n  font-family: none;\n  font-size: 24px;\n  font-weight: 400;\n"]))),w=h.Z.p(i||(i=(0,g.Z)(["\n  color: #2a2a2a;\n  font-family: none;\n  font-size: 24px;\n  font-weight: 400;\n  text-align: justify;\n"]))),k=e(4021),y=e(184),_="idle",j="pending",S="resolved",z="rejected";function U(){var n=(0,d.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(_),o=(0,s.Z)(a,2),c=o[0],i=o[1],p=(0,d.useState)(null),g=(0,s.Z)(p,2),h=g[0],U=g[1],C=(0,l.UO)().movieId;return(0,d.useEffect)((function(){i(j);var n=function(){var n=(0,u.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.Bt)(C);case 3:t=n.sent,e=t.data.results,i(S),r(e),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),i(z),U(console.log(h));case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[h,C]),(0,y.jsxs)("div",{children:[e&&(0,y.jsx)(v,{children:e.map((function(n){var t=n.author,e=n.id,r=n.content;return(0,y.jsxs)(m,{children:[(0,y.jsxs)("p",{children:[(0,y.jsx)(Z,{children:"Author: "}),(0,y.jsx)(b,{children:t})]}),(0,y.jsx)(w,{children:r})]},e)}))}),0===e.length&&c!==_&&c!==j&&(0,y.jsx)(k.JQ,{children:"We don't have any reviews for this movie."})]})}},1933:function(n,t,e){e.d(t,{Bt:function(){return l},PI:function(){return d},Up:function(){return p},VQ:function(){return f},kj:function(){return s}});var r=e(5861),a=e(4687),o=e.n(a),c=e(3263),i="https://api.themoviedb.org/",u="21dd3197032ef657b681b90da4af9cac",s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/week",t="".concat(i,"/3").concat("/trending/movie/week","?api_key=").concat(u),n.next=4,c.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",e="".concat(i,"/3").concat("/search/movie","?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n.next=4,c.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/movie",e="".concat(i,"3").concat("/movie","/").concat(t,"?api_key=").concat(u,"&language=en-US"),n.next=4,c.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/movie",e="".concat(i,"3").concat("/movie","/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"),n.next=4,c.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/movie",e="".concat(i,"3").concat("/movie","/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"),n.next=4,c.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=693.583f02ff.chunk.js.map