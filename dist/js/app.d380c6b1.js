(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/traffic-lights-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={},u=i,c=(n("034f"),n("2877")),s=Object(c["a"])(u,o,a,!1,null,null,null),l=s.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("До переключения осталось "+e._s(e.timeout)+" секунд")]),n("div",{staticClass:"traffic-light"},[n("div",{staticClass:"circle",class:{active:"red"==e.current}}),n("div",{staticClass:"circle",class:{active:"yellow"==e.current}}),n("div",{staticClass:"circle",class:{active:"green"==e.current}})])])},d=[],m=(n("b0c0"),n("bee2")),h=n("d4ec"),v=function e(t,n,r){Object(h["a"])(this,e),this.name=t,this.dur=n,this.next=r},g=function(){function e(){Object(h["a"])(this,e)}return Object(m["a"])(e,[{key:"trigger",value:function(e,t){var n=this;t(e),setTimeout((function(){n.trigger(e.next,t)}),1e3*e.dur)}}]),e}(),b={props:["start"],data:function(){return{current:"red",timeout:""}},methods:{getTimeOut:function(e){var t=this;this.timeout=e;var n=setInterval((function(){t.timeout--}),1e3);setTimeout((function(){clearInterval(n)}),1e3*e)}},mounted:function(){var e=this,t=new g,n=new v("red",10),r=new v("yellow",3),o=new v("yellow",3),a=new v("green",15);n.next=r,r.next=a,a.next=o,o.next=n,"red"==this.start?t.trigger(n,(function(t){e.current=t.name,e.getTimeOut(t.dur),e.$route.name!=t.name&&e.$router.push(t.name)})):"yellow"==this.start?t.trigger(r,(function(t){e.current=t.name,e.getTimeOut(t.dur),e.$route.name!=t.name&&e.$router.push(t.name)})):"green"==this.start&&t.trigger(a,(function(t){e.current=t.name,e.getTimeOut(t.dur),e.$route.name!=t.name&&e.$router.push(t.name)}))}},y=b,w=(n("92a8"),Object(c["a"])(y,p,d,!1,null,"61070532",null)),O=w.exports;r["a"].use(f["a"]);var j=[{path:"",name:"main",component:O,props:{start:"red"}},{path:"/red",name:"red",component:O,props:{start:"red"}},{path:"/yellow",name:"yellow",component:O,props:{start:"yellow"}},{path:"/green",name:"green",component:O,props:{start:"green"}}],x=new f["a"]({mode:"history",base:"/traffic-lights-vue/",routes:j}),_=x;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(l)},router:_}).$mount("#app")},"71a4":function(e,t,n){},"85ec":function(e,t,n){},"92a8":function(e,t,n){"use strict";n("71a4")}});
//# sourceMappingURL=app.d380c6b1.js.map