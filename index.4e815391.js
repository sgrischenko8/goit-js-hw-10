!function(){var n="live_n3UYEOgHq1vulPu4bhOr8XCLL7jQR50Uo632WcRjJ8pnjA6EZHNLsozH2JROaIOA";var e=document.querySelector(".loader"),t=document.querySelector(".cat-info"),c=document.querySelector(".breed-select");c.classList.add("hidden");var a,r=document.querySelector(".error");function i(n){var t=n.map((function(n){var e=n.id,t=n.name;return'<option value="'.concat(e,'">').concat(t,"</option>")})).join("");c.innerHTML=t,c.classList.remove("hidden"),e.classList.add("hidden")}function o(t){var c;(c=t,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(c,"&api_key=").concat(n)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).catch((function(n){console.log(n)}))).then(s).catch((function(n){return r.classList.remove("hidden"),e.classList.add("hidden"),n}))}function s(n){var c=!0,a=!1,r=void 0;try{for(var i,o=function(n,e){var c=e.value,a=c.url,r=c.breeds.map((function(n){var e=n.description,t=n.temperament,c=n.name;return'<div class="img-container"><img alt='.concat(c,' src="').concat(a,'" height="300"/></div><div class="descr-container"><h2 class="descr-container-title">').concat(c,"</h2><p>").concat(e,"</p><p><b>Temperament: </b>").concat(t,"</p></div>")}));t.innerHTML=r},s=n[Symbol.iterator]();!(c=(i=s.next()).done);c=!0)o(0,i)}catch(n){a=!0,r=n}finally{try{c||null==s.return||s.return()}finally{if(a)throw r}}e.classList.add("hidden")}r.classList.add("hidden"),(a={"x-api-key":n},fetch("".concat("https://api.thecatapi.com/v1/breeds","?").concat(a)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).catch((function(n){console.log(n)}))).then(i).catch((function(n){return r.classList.remove("hidden"),e.classList.add("hidden"),n})),c.addEventListener("change",(function(n){t.innerHTML="",e.classList.remove("hidden"),r.classList.add("hidden"),o(n.target.value)})),o()}();
//# sourceMappingURL=index.4e815391.js.map
