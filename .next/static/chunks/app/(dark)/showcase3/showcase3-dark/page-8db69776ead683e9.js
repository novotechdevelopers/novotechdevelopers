(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{1368:function(e,t,i){Promise.resolve().then(i.bind(i,3040)),Promise.resolve().then(i.bind(i,1442)),Promise.resolve().then(i.bind(i,3265))},1100:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=0,o=function(e,t){setInterval(void((n=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(n+=1,e.style.opacity=n):clearInterval(0)),t)},r=function(e,t){setInterval(void((n=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(n=0,e.style.opacity=n):clearInterval(0)),t)},s=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var t=document.createElement("div");t.classList.add("div-tooltip-sub"),document.body.appendChild(t),document.querySelectorAll("[data-tooltip-tit]").forEach(function(t){e=document.querySelector(".div-tooltip-tit"),t.addEventListener("mouseover",function(){e.innerText=t.getAttribute("data-tooltip-tit")}),t.addEventListener("mousemove",function(t){o(e,800),e.style.top=t.pageY+10+"px",e.style.left=t.pageX+20+"px",e.style.padding="0px 10px"}),t.addEventListener("mouseleave",function(){r(e,800),e.style.padding=0})}),document.querySelectorAll("[data-tooltip-sub]").forEach(function(e){t=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",function(){t.innerText=e.getAttribute("data-tooltip-sub")}),e.addEventListener("mousemove",function(e){o(t,800),t.style.top=e.pageY-15+"px",t.style.left=e.pageX+30+"px",t.style.padding="5px 10px"}),e.addEventListener("mouseleave",function(){r(t,800),t.style.padding=0})})}},3265:function(e,t,i){"use strict";i.r(t);var n=i(7022),o=i(2265);i(1396);var r=i(2145),s=i(2022),l=i(8525),c=i(1100),a=i(5232),d=i(7437);function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var f={modules:[s.pt,s.W_,s.Gk],slidesPerView:4,speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"}};t.default=function(){return(0,o.useEffect)(function(){(0,c.Z)(),(0,l.Z)(),document.querySelector(".div-tooltip-tit").style.display="block",document.querySelector(".div-tooltip-sub").style.display="block"},[]),(0,d.jsx)("header",{className:"slider showcase-grid",children:(0,d.jsxs)("div",{id:"content-carousel-container-unq-1",children:[(0,d.jsx)(r.tq,p(p({},f),{},{children:a.map(function(e){return(0,d.jsx)(r.o5,{children:(0,d.jsx)("div",{className:"bg-img",style:{backgroundImage:"url(".concat(e.image,")")},"data-tooltip-tit":e.title.first+" "+e.title.second,"data-tooltip-sub":e.sub})},e.id)})})),(0,d.jsxs)("div",{className:"txt-botm",children:[(0,d.jsxs)("div",{className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,d.jsx)("div",{children:(0,d.jsx)("span",{children:"Next Slide"})}),(0,d.jsx)("div",{children:(0,d.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,d.jsxs)("div",{className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,d.jsx)("div",{children:(0,d.jsx)("i",{className:"fas fa-chevron-left"})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{children:"Prev Slide"})})]}),(0,d.jsx)("div",{className:"swiper-pagination dots"})]})]})})}},5232:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]')}},function(e){e.O(0,[176,103,844,971,365,744],function(){return e(e.s=1368)}),_N_E=e.O()}]);