!function(){function e(e,n){return e.map((function(e){return n.genres.find((function(n){var i=n.id;return e===i})).name}))}var n=[{title:"Interceptor",genre_ids:[28,53,12]},{title:"Fantastic Beasts: The Secrets of Dumbledore",genre_ids:[14,12,28]},{title:"Last Seen Alive",genre_ids:[28,53]},{title:"Jurassic World Dominion",genre_ids:[878,28,12,53]}],i={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:878,name:"Science Fiction"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};n.forEach((function(n){n.genre_names=e(n.genre_ids,i)})),console.log(n);var r,t=(r=n.reduce((function(e,n){var i=n.title,r=n.genre_names;return e+"<li><h2>".concat(i,"</h2><ul>").concat(r.reduce((function(e,n){return e+"<li>".concat(n,"</li>")}),""),"</ul></li>")}),""),console.log(r),r);document.querySelector(".list").innerHTML=t,e([28,53,12],i)}();
//# sourceMappingURL=index.7bc66f7c.js.map
