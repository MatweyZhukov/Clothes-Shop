(()=>{"use strict";const t=t=>{t&&(t.style.display="block",setTimeout((()=>{t.style.opacity=1})))},e=t=>{t&&(t.style.opacity=0,setTimeout((()=>{t.style.display="none"}),150))},n=()=>{class t{constructor(t,e,n,c,s,...r){this.id=t,this.title=e,this.price=n,this.currency=c,this.image=s,this.classes=r}render(){const t=document.createElement("div");t.classList.add("tile"),t.setAttribute("data-id",this.id),t.addEventListener("click",(()=>{var e;(e=t).classList.add("shake"),setTimeout((()=>{e.classList.remove("shake")}),600)})),t.innerHTML=`\n\t\t\t\t<img data-add src="${this.image}">\n\t\t\t\t<div class="title_price">\n\t\t\t\t\t<p class="title">${this.title}</p>\n\t\t\t\t\t<p class="price"><span data-current-price>${this.price}</span> ${this.currency}</p>\n\t\t\t\t</div>\n\t\t\t `,document.querySelector(".block_tiles").append(t)}}(async t=>{const e=await fetch(t);if(!e)throw new Error(`Couldn't fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/products").then((e=>{e.forEach((({id:e,title:n,price:c,currency:s,image:r})=>{new t(e,n,c,s,r).render()}))})).catch((t=>console.log(t)))},c=(t,e)=>{t.style.opacity=1,t.style.pointerEvents="all",document.body.style.overflow="hidden",e.style.cssText="transform: scale(1)"};window.addEventListener("DOMContentLoaded",(()=>{(()=>{const n=document.querySelector(".cart"),s=document.querySelector(".cart_content"),r=document.querySelector(".close img"),o=document.querySelector(".cart_main"),i=document.querySelector(".cart_title"),a=document.querySelector(".open"),l=document.querySelector(".empty"),d=()=>{o.children.length>0?i.textContent="Ваши товары:":i.textContent="Ваша корзина пуста!",o.children.length>0?(i.textContent="Ваши товары:",e(l)):(i.textContent="Ваша корзина пуста!",t(l))},u=()=>{n.style.opacity=0,n.style.pointerEvents="none",document.body.style.overflow="auto",s.style.cssText="transform: scale(0)"};window.addEventListener("click",(t=>{t.target===n||t.target===r?u():t.target===a&&c(n,s),t.target.hasAttribute("data-add")&&((t=>{const e=t.target.closest(".tile"),n={id:e.dataset.id,src:e.querySelector("[data-add]").getAttribute("src"),title:e.querySelector(".title").textContent,price:e.querySelector("[data-current-price]").textContent},{id:c,src:s,title:r,price:i}=n,a=o.querySelector(`[data-id="${c}"]`);if(a){const t=a.querySelector("[data-counter]");t.textContent<3&&t.textContent++}else{const t=`\n\t\t\t\t <div data-id="${c}" class="added_tile">\n\t\t\t\t\t <div class="block-counter">\n\t\t\t\t\t\t <p class="counter"><span data-counter>1</span>x</p>\n\t\t\t\t\t\t <img data-close style="width: 30px;" src="images/remove.png">\n\t\t\t\t\t </div>\n\t\t\t\t\t <img src="${s}">\n\t\t\t\t\t <div class="title_price">\n\t\t\t\t\t\t <p class="title">${r}</p>\n\t\t\t\t\t\t <p class="price"><span data-current-price>${i}</span> USD</p>\n\t\t\t\t\t </div>\n\t\t\t\t </div>\n\t\t\t  `;o.insertAdjacentHTML("beforeend",t)}})(t),d()),t.target.hasAttribute("data-close")&&(t=>{e(t.target.closest(".added_tile")),setTimeout((()=>{t.target.closest(".added_tile").remove(),d()}),150)})(t)})),window.addEventListener("keydown",(t=>{"Escape"===t.key&&u()}))})(),(()=>{const t=document.querySelector(".cart"),e=document.querySelector(".cart_content"),n=document.querySelector(".close_modal img"),s=document.querySelector(".open_modal"),r=document.querySelector(".modal"),o=()=>{r.style.cssText="\n\t\tright: -430px;\n\t\tbottom: 15px;\n\t\topacity: 0;\n\t"};setTimeout((()=>{r.style.cssText="\n\t\t\tright: 15px;\n\t\t\tbottom: 15px;\n\t\t\topacity: 1;\n\t\t"}),5e3),s.addEventListener("click",(()=>{c(t,e),o()})),n.addEventListener("click",o)})(),(()=>{const n=document.querySelector("input");n.addEventListener("input",(()=>{const c=n.value.toLowerCase();document.querySelectorAll(".title").forEach((n=>{n.innerHTML.toLowerCase().indexOf(c)>-1?t(n.closest(".tile")):e(n.closest(".tile"))}))}))})(),n()}))})();