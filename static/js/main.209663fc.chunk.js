(this.webpackJsonparsp=this.webpackJsonparsp||[]).push([[0],{144:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),l=t.n(c),o=(t(41),t(3)),i=(t(42),t(15)),s=t.n(i),m=t(5),u=t(33),h=t(34),p=t.n(h),d=function(e){var a=Object(n.useState)({data:[],isFetching:!1}),t=Object(o.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)(e),i=Object(o.a)(l,1)[0];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c((function(e){return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0})})),e.next=4,p.a.get(i);case 4:a=e.sent,c((function(e){return Object(m.a)(Object(m.a)({},e),{},{data:a.data,isFetching:!1})})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),c((function(e){return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1})}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[i]),[r]},b=t(35),k=t.n(b);t(144);var f=function(e){return r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner-content"},r.a.createElement(k.a,null,e.markdown)))};var E=function(){var e=d("https://arsp-cms.herokuapp.com/books"),a=Object(o.a)(e,1)[0],t=d("https://arsp-cms.herokuapp.com/articles"),n=Object(o.a)(t,1)[0],c=d("https://arsp-cms.herokuapp.com/documentaries"),l=Object(o.a)(c,1)[0],i=d("https://arsp-cms.herokuapp.com/podcasts"),s=Object(o.a)(i,1)[0],m=d("https://arsp-cms.herokuapp.com/talks"),u=Object(o.a)(m,1)[0],h=d("https://arsp-cms.herokuapp.com/banner"),p=Object(o.a)(h,1)[0];return r.a.createElement("div",null,!p.isFetching&&p.data&&r.a.createElement(f,{markdown:p.data.Content}),r.a.createElement("div",{className:"page"},r.a.createElement("h1",null,"anti-racist starter pack"),r.a.createElement("div",{className:"selectionby"},"a selection by Danah Kowdan /"," ",r.a.createElement("a",{className:"selectionbylink",href:"https://www.instagram.com/danahkowdan/",target:"_blank",rel:"noopener noreferrer"},"@danahkowdan")),r.a.createElement("div",{className:"contributionsby"},"contributions by Jalyse Cuff and Fatima Kowdan"),r.a.createElement("h2",null,"books"),a.isFetching&&r.a.createElement("p",null,"Loading books..."),a.data.map((function(e){return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("a",{className:"link",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,e.title)," by ",e.author))})),r.a.createElement("h2",null,"articles"),n.isFetching&&r.a.createElement("p",null,"Loading articles..."),n.data.map((function(e){var a=e.author?" by ".concat(e.author):"";return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("a",{className:"link",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,e.title),a))})),r.a.createElement("h2",null,"podcasts"),s.isFetching&&r.a.createElement("p",null,"Loading podcasts..."),s.data.map((function(e){var a=e.author?" - ".concat(e.author):"";return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("a",{className:"link",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,e.title),a))})),r.a.createElement("h2",null,"interviews/lectures"),u.isFetching&&r.a.createElement("p",null,"Loading interviews and lectures..."),u.data.map((function(e){var a=e.author?" - ".concat(e.author):"";return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("a",{className:"link",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,e.title),a))})),r.a.createElement("h2",null,"documentaries"),l.isFetching&&r.a.createElement("p",null,"Loading documentaries..."),l.data.map((function(e){return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("a",{className:"link",href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,e.title)))})),r.a.createElement("a",{className:"builtby",href:"https://github.com/KathrynBrusewitz",target:"_blank",rel:"noopener noreferrer"},"built by @kathrynbrusewitz")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,a,t){e.exports=t(145)},41:function(e,a,t){},42:function(e,a,t){}},[[36,1,2]]]);
//# sourceMappingURL=main.209663fc.chunk.js.map