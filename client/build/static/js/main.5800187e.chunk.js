(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),s=t(30),o=(t(79),t(51),t(140)),i=t(142),m=t(141),u=t(32),E=function(){return r.a.createElement(o.a,{bg:"light",expand:"lg"},r.a.createElement("div",{className:"container"},r.a.createElement(o.a.Brand,{className:"navbar-brand"},"Les Elans loisir de Champigny"),r.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(u.LinkContainer,{to:"/equipe"},r.a.createElement(i.a.Link,{eventKey:0},"L'\xe9quipe")),r.a.createElement(u.LinkContainer,{to:"/calendrier"},r.a.createElement(i.a.Link,{eventKey:1},"Calendrier")),r.a.createElement(m.a.Divider,null),r.a.createElement(u.LinkContainer,{to:"/classement"},r.a.createElement(i.a.Link,{eventKey:2},"Classement")),r.a.createElement(u.LinkContainer,{to:"/contact"},r.a.createElement(i.a.Link,{eventKey:3},"Nous contacter"))))))},p=t(19),h=t(72),f=t.n(h),d=function(){return r.a.createElement("div",{className:"home-intro"},r.a.createElement("img",{src:f.a,alt:"Les Elans loisir de Champigny"}))},g=t(27),v=t(26),b=t.n(v),x=t(36),N=t(37),w=t.n(N),j=t(138),k=function(e){var a=function(){var e=Object(x.a)(b.a.mark(function e(){var a,t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/calendrier");case 2:return a=e.sent,e.next=5,a.data;case 5:if(t=e.sent,200===a.status){e.next=8;break}throw Error(t.message);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=Object(n.useState)(new Date),c=Object(g.a)(t,1)[0],l=Object(n.useState)([]),s=Object(g.a)(l,2),o=s[0],i=s[1];Object(n.useEffect)(function(){var e=[],t=c.getTime();a().then(function(a){a.map(function(a){var n=new Date(a.gameDate).getTime();return n-t>0&&e.push(n),i(e)})}).catch(function(e){return console.log(e)})},[c]);var m=Object(n.useState)("0 jours 0h 0min 0s"),u=Object(g.a)(m,2),E=u[0],p=u[1],h=o[0];return setInterval(function(){if(void 0!==h){var e=(new Date).getTime(),a=h-e,t=Math.floor(a/864e5),n=Math.floor(a%864e5/36e5),r=Math.floor(a%36e5/6e4),c=Math.floor(a%6e4/1e3);p(t+"j "+n+"h "+r+"min "+c+"s")}},1e3),r.a.createElement("div",{className:"home-compteRebours"},r.a.createElement(j.a,{xs:12,md:4,className:"home-compteRebours-infos"},r.a.createElement("h3",null,"Prochain Match"),r.a.createElement("p",null,"1\xe8re Journ\xe9e du troph\xe9e loisir - Match aller")),r.a.createElement(j.a,{xs:12,md:8,className:"home-compteRebours-decompte"},r.a.createElement("p",null,E)))},L=t(139),y=t(73),O=t.n(y),q=function(){return r.a.createElement(L.a,{className:"home-equipe"},r.a.createElement(j.a,{xs:12,lg:8,className:"home-equipe-img"},r.a.createElement("img",{src:O.a,alt:"Equipe des Elans loisir de Champigny"})),r.a.createElement(j.a,{xs:12,lg:4,className:"home-equipe-article"},r.a.createElement("h3",null,"L'\xe9quipe des Elans Loisir..."),r.a.createElement("p",null,"...est une \xe9quipe de hockey qui \xe9volue en Ligue 1 du Troph\xe9e F\xe9d\xe9ral Loisir. Nous sommes une \xe9quipe qui aime s'amuser mais aussi la comp\xe9tition.")))},C=function(e){return r.a.createElement(L.a,{className:"home-classement-content"},r.a.createElement(j.a,{xs:2},e.place+1),r.a.createElement(j.a,{xs:6},e.nom," de ",r.a.createElement("span",{className:"equipe-name"},e.equipe)),r.a.createElement(j.a,{xs:2},e.points),r.a.createElement(j.a,{xs:2},e.malus))},A=function(){var e=function(){var e=Object(x.a)(b.a.mark(function e(){var a,t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/classement");case 2:return a=e.sent,e.next=5,a.data;case 5:if(t=e.sent,200===a.status){e.next=8;break}throw Error(t.message);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),a=Object(n.useState)([]),t=Object(g.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)(function(){e().then(function(e){return l(e)}).catch(function(e){return console.log(e)})}),r.a.createElement("section",{className:"home-classement"},r.a.createElement(j.a,{xs:12},r.a.createElement("h2",null,"Classement Troph\xe9e Loisir Ligue 1")),r.a.createElement(L.a,{className:"home-classement-header"},r.a.createElement(j.a,{xs:2},"place"),r.a.createElement(j.a,{xs:6},"\xe9quipe"),r.a.createElement(j.a,{xs:2},"points"),r.a.createElement(j.a,{xs:2},"malus")),c.map(function(e,a){return r.a.createElement(C,Object.assign({key:a},e,{place:a}))}))},M=t(50),D=function(e){return Object(n.useEffect)(function(){Object(M.GoogleApiWrapper)({apiKey:"AIzaSyCmsH-1no9HAJRmIDbNv1AOIzBKcUCcPhI"})}),r.a.createElement(M.Map,{google:e.google,zoom:8,initialCenter:{lat:47.444,lng:-122.176}})},I=function(){return r.a.createElement(L.a,{className:"home-footer"},r.a.createElement(j.a,{xs:12,lg:8,className:"home-equipe-img"},r.a.createElement(D,null)))},K=function(){return r.a.createElement("section",{className:"home"},r.a.createElement(d,null),r.a.createElement(k,null),r.a.createElement(q,null),r.a.createElement("div",{className:"grey"},r.a.createElement(A,null)),r.a.createElement(I,null))},T=function(){return r.a.createElement("main",null,r.a.createElement(p.g,null,r.a.createElement(p.d,{exact:!0,path:"/",component:K})))},B=(t(134),function(){return r.a.createElement("section",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,null)),r.a.createElement("section",{className:"App-container"},r.a.createElement(T,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.BrowserRouter,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,a,t){},72:function(e,a,t){e.exports=t.p+"static/media/elans_loisir_1920x500.da33916e.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/loisirs_2018_2019.ed436a21.jpg"},74:function(e,a,t){e.exports=t(135)},79:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.5800187e.chunk.js.map