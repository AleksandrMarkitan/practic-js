const t=document.querySelector(".date-day"),e=document.querySelector(".date"),n=document.querySelector(".date-month"),o=document.querySelector(".date-year"),c=document.querySelector(".digital-clock"),r=["Неділя","Понеділок","Вівторок","Середа","Четвер","Пятниця","Субота"],u=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];setInterval((function(){const a=new Date;!function(e){const n=e.getDay();t.textContent=r[n]}(a),function(t){const n=t.getDate();e.textContent=n}(a),function(t){const e=t.getMonth();n.textContent=u[e]}(a),function(t){const e=t.getFullYear();o.textContent=e}(a),function(t){const e=t.getHours().toString(),n=t.getMinutes().toString(),o=`${t.getSeconds()}`;c.textContent=`Поточний час: ${e.padStart(2,"0")} : ${n.padStart(2,"0")} : ${o.padStart(2,"0")}`}(a)}),1e3);
//# sourceMappingURL=01-09.9b326621.js.map
