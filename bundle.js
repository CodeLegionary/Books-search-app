(()=>{"use strict";var n={915:(n,e,r)=>{r.d(e,{A:()=>s});var t=r(354),o=r.n(t),i=r(314),a=r.n(i)()(o());a.push([n.id,"body, html {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background: linear-gradient(135deg, #DCCBA4, #EDE0C8, #DCCBA4); /* Gradiente magnolia con sfumature legno */\n    overflow-x: hidden;\n}\n\nbody {\n    transform: translate3d(0,0,0);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\nh1 {\n    color:rgb(0, 80, 53);\n    font-size: 2rem;\n}\n\nh2 {\n    color:rgb(11, 0, 80);\n    cursor: help;\n    font-size: 1.5rem;\n}\n\n.border {\n    padding: 1rem;\n}\n\nmain {\n    height: auto;\n    background: radial-gradient(ellipse 95% 120%, aliceblue, #f5fede, #ffe668);\n    margin: 0 auto; /* Centra orizzontalmente */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid #ccc;\n}\n\np {\n    margin: 1px 2px;\n    font-size: 1rem;\n}\n\n#searchBar, searchButton, #languageSelector {\n    margin: 1rem 0;\n    padding: 0.5rem;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    font-size: 1rem;\n    max-width: 100vw;;\n}\n\nhr {\n    width: 100%;\n    margin: 1rem auto;\n    box-sizing: border-box\n}\n\n#results {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n#languageSelector {\n    margin: 1rem 0;\n    background-color: #fff;\n    cursor: pointer;\n}\n\n/* Responsive Design */\n\n/* Desktop Layout */\n@media (min-width: 1200px) {\n    h1 {\n        font-size: 2.5rem;\n    }\n    h2 {\n        font-size: 2rem;\n    }\n    main {\n        width: 70%;\n    }\n    #languageSelector {\n        font-size: 1.3rem;\n    }\n    p {\n        font-size: 1.4rem;\n    }\n    #searchBar, #searchButton {\n        font-size: 1.4rem;\n    }\n}\n\n/* Tablet Layout */\n@media (min-width: 768px) and (max-width: 1199px) {\n    h1 {\n        font-size: 2rem;\n    }\n    h2 {\n        font-size: 1.5rem;\n    }\n    main {\n        width: 80%;\n    }\n    #languageSelector {\n        font-size: 1.1rem;\n    }\n    p {\n        font-size: 1.2rem;\n    }\n    #searchBar, #searchButton {\n        font-size: 1.rem;\n    }\n}","",{version:3,sources:["webpack://./css/style.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,UAAU;IACV,8DAA8D,EAAE,2CAA2C;IAC3G,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,0EAA0E;IAC1E,cAAc,EAAE,2BAA2B;IAC3C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB;AACJ;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,eAAe;AACnB;;AAEA,sBAAsB;;AAEtB,mBAAmB;AACnB;IACI;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,UAAU;IACd;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;AACJ;;AAEA,kBAAkB;AAClB;IACI;QACI,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;IACd;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;AACJ",sourcesContent:["body, html {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background: linear-gradient(135deg, #DCCBA4, #EDE0C8, #DCCBA4); /* Gradiente magnolia con sfumature legno */\n    overflow-x: hidden;\n}\n\nbody {\n    transform: translate3d(0,0,0);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\nh1 {\n    color:rgb(0, 80, 53);\n    font-size: 2rem;\n}\n\nh2 {\n    color:rgb(11, 0, 80);\n    cursor: help;\n    font-size: 1.5rem;\n}\n\n.border {\n    padding: 1rem;\n}\n\nmain {\n    height: auto;\n    background: radial-gradient(ellipse 95% 120%, aliceblue, #f5fede, #ffe668);\n    margin: 0 auto; /* Centra orizzontalmente */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid #ccc;\n}\n\np {\n    margin: 1px 2px;\n    font-size: 1rem;\n}\n\n#searchBar, searchButton, #languageSelector {\n    margin: 1rem 0;\n    padding: 0.5rem;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    font-size: 1rem;\n    max-width: 100vw;;\n}\n\nhr {\n    width: 100%;\n    margin: 1rem auto;\n    box-sizing: border-box\n}\n\n#results {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n#languageSelector {\n    margin: 1rem 0;\n    background-color: #fff;\n    cursor: pointer;\n}\n\n/* Responsive Design */\n\n/* Desktop Layout */\n@media (min-width: 1200px) {\n    h1 {\n        font-size: 2.5rem;\n    }\n    h2 {\n        font-size: 2rem;\n    }\n    main {\n        width: 70%;\n    }\n    #languageSelector {\n        font-size: 1.3rem;\n    }\n    p {\n        font-size: 1.4rem;\n    }\n    #searchBar, #searchButton {\n        font-size: 1.4rem;\n    }\n}\n\n/* Tablet Layout */\n@media (min-width: 768px) and (max-width: 1199px) {\n    h1 {\n        font-size: 2rem;\n    }\n    h2 {\n        font-size: 1.5rem;\n    }\n    main {\n        width: 80%;\n    }\n    #languageSelector {\n        font-size: 1.1rem;\n    }\n    p {\n        font-size: 1.2rem;\n    }\n    #searchBar, #searchButton {\n        font-size: 1.rem;\n    }\n}"],sourceRoot:""}]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],A=t.base?c[0]+t.base:c[0],d=i[A]||0,l="".concat(A," ").concat(d);i[A]=d+1;var u=r(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=o(p,t);t.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,e){var r=e.domAPI(e);r.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=t(n,o),A=0;A<i.length;A++){var d=r(i[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.p="/dist/",r.nc=void 0;var t=r(72),o=r.n(t),i=r(825),a=r.n(i),s=r(659),c=r.n(s),A=r(56),d=r.n(A),l=r(540),u=r.n(l),p=r(113),m=r.n(p),f=r(915),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u();o()(f.A,h);f.A&&f.A.locals&&f.A.locals,r.p;var g={it:{title:"Trova la prossima lettura!",description:"Scrivi un genere &#x1f9f4;&#128396; ... e premi il bottone per srotolare la pergamena! &#x1FA84; &#129718;",searchButton:"Ricerca",loading:"caricamento...&#x23F3;",noResults:"<p>Nessun libro trovato &#x1f622;</p><br/><p>Prova con un altro genere!</p><br/>",resultsInfo:"<p>Se clicchi un libro apparirà la descrizione &#x1f50d; ...</p><br/><p> ..ricorda di selezionare la giusta categoria!</p><br/>",enterGenre:"Per favore, inserisci un genere.",noDescription:"Descrizione non disponibile"},en:{title:"Find your next read!",description:"Write a genre &#x1f9f4;&#128396; ... and press the button to unroll the scroll! &#x1FA84; &#129718;",searchButton:"Search",loading:"loading...&#x23F3;",noResults:"<p>No books found &#x1f622;</p><br/><p>Try another genre!</p><br/>",resultsInfo:"<p>Click on a book to see the description &#x1f50d; ...</p><br/><p> ..remember to select the right category!</p><br/>",enterGenre:"Please enter a genre.",noDescription:"Description not available"}},B="/dist/",C=document.createElement("link");C.rel="stylesheet",C.href="".concat(B,"css/style.css"),document.head.appendChild(C);var I=document.createElement("script");I.src="".concat(B,"js/bundle.js"),document.body.appendChild(I);var b="https://openlibrary.org",v="it";function x(n){var e=g[n];console.log(e),document.querySelectorAll("[data-translate]").forEach((function(n){var r=n.getAttribute("data-translate");n.innerHTML=e[r]}));var r=document.getElementById("results");r.innerHTML.includes("Se clicchi un libro apparirà la descrizione")||r.innerHTML.includes("Click on a book to see the description")?y():(r.innerHTML.includes("Nessun libro trovato")||r.innerHTML.includes("No books found"))&&(r.innerHTML=g[n].noResults)}function y(){var n=document.getElementById("results"),e=document.getElementById("searchBar").value.trim();e?(e=e.toLowerCase(),n.innerHTML=g[v].loading,fetch("".concat(b,"/subjects/").concat(e,".json")).then((function(n){return n.json()})).then((function(e){e.works&&e.works.length>0?(n.innerHTML=g[v].resultsInfo,e.works.forEach((function(e){var r=document.createElement("div");r.innerHTML="<h2 onclick=\"getBookDescription('".concat(e.key,"')\">").concat(e.title,"</h2><p>").concat(e.authors.map((function(n){return n.name})).join(", "),"</p><br/>"),n.appendChild(r)}))):n.innerHTML=g[v].noResults})).catch((function(n){console.error("Error:",n)}))):alert(g[v].enterGenre)}document.getElementById("searchButton").addEventListener("click",y),document.getElementById("searchBar").addEventListener("keydown",(function(n){"Enter"===n.key&&y()})),document.getElementById("languageSelector").addEventListener("change",(function(){x(v=this.value)})),document.addEventListener("DOMContentLoaded",(function(){createFavicon("FAVICON_URL")})),window.getBookDescription=function(n){fetch("".concat(b).concat(n,".json")).then((function(n){return n.json()})).then((function(n){var e=n.description?"string"==typeof n.description?n.description:n.description.value:g[v].noDescription;alert("Description: "+e)})).catch((function(n){console.error("Errore:",n)}))},x("it")})();
//# sourceMappingURL=bundle.js.map