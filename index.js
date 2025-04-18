import{a as m,S as p,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g="49758339-0242343cad2ae6f5246dcc16e",y="https://pixabay.com/api/";async function h(i){const t={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(y,{params:t})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let b=new p(".gallery a");function L(i){const t=i.map(({webformatURL:r,largeImageURL:n,tags:e,likes:o,views:s,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${r}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${o}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${d}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",t),b.refresh()}function B(){c.innerHTML=""}function C(){l.classList.remove("hidden")}function F(){l.classList.add("hidden")}const f=document.querySelector(".form"),w=f.querySelector('input[name="search-text"]');f.addEventListener("submit",async i=>{i.preventDefault();const t=w.value.trim();if(!t){a.warning({title:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#FAFAFB",backgroundColor:"#B51B1B",messageColor:"#EF4040",iconUrl:"./img/Group.svg",iconColor:"#ffffff",position:"topRight",timeout:5e3});return}B(),C();try{const r=await h(t);r.hits.length===0?a.info({title:"No Results",message:"No images found for your search.",titleColor:"#FAFAFB",backgroundColor:"#B51B1B",messageColor:"#EF4040",iconColor:"#ffffff",position:"topRight",timeout:5e3}):L(r.hits)}catch{a.error({title:"Error",message:"Something went wrong!",titleColor:"#FAFAFB",backgroundColor:"#B51B1B",messageColor:"#EF4040",iconColor:"#ffffff",position:"topRight",timeout:5e3})}finally{F()}});
//# sourceMappingURL=index.js.map
