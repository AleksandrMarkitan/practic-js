function e(e){return e&&e.__esModule?e.default:e}var t;function i(e,t,i){var c,n,o,r,a;function s(){var l=Date.now()-r;l<t&&l>=0?c=setTimeout(s,t-l):(c=null,i||(a=e.apply(o,n),o=n=null))}null==t&&(t=100);var l=function(){o=this,n=arguments,r=Date.now();var l=i&&!c;return c||(c=setTimeout(s,t)),l&&(a=e.apply(o,n),o=n=null),a};return l.clear=function(){c&&(clearTimeout(c),c=null)},l.flush=function(){c&&(a=e.apply(o,n),o=n=null,clearTimeout(c),c=null)},l}i.debounce=i,t=i;const c=[{car:"Honda",type:"Civic",price:12e3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU"},{car:"Audi",type:"Q7",price:4e4,img:"https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg"},{car:"BMW",type:"5 siries",price:9e3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU"},{car:"Honda",type:"Accord",price:2e4,img:"https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg"},{car:"Volvo",type:"XC60",price:7e3,img:"https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320"}],n=document.querySelector(".list");function o(e){return e.map((({car:e,type:t,price:i,img:c})=>`<li>\n      <img src="${c}" alt="" width='300'>\n      <p class="name">${e}</p>\n      <p class="type">${t}</p>\n      <p class="price">${i}</p>\n    </li>`)).join("")}n.innerHTML=o(c);document.querySelector("input").addEventListener("input",e(t)((function(e){console.log(e.target.value);const t=document.querySelector('input[type="radio"]').checked;let i=null;t&&(i=c.filter((t=>t.type.toLowerCase().includes(e.target.value.toLowerCase()))),console.log(i));t||(i=c.filter((t=>t.car.toLowerCase().includes(e.target.value.toLowerCase()))),console.log(i));n.innerHTML=o(i)}),1e3));
//# sourceMappingURL=index.474c4247.js.map