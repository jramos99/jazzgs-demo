!function(){return function e(t,n,o){function s(a,c){if(!n[a]){if(!t[a]){var r="function"==typeof require&&require;if(!c&&r)return r(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){return s(t[a][1][e]||e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)s(o[a]);return s}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.accordion=function(){for(var e=document.getElementsByClassName("accordion-container__btn-acc"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}},{}],2:[function(e,t,n){"use strict";function o(e,t){document.addEventListener("click",function(n){if(n.target.matches(e+" .a-btn"))if(n.target.parentElement.classList.contains("active"))n.target.parentElement.classList.remove("active");else{if(1==t){var o=document.querySelectorAll(e+" .a-container");Array.prototype.forEach.call(o,function(e){e.classList.remove("active")})}n.target.parentElement.classList.add("active")}})}Object.defineProperty(n,"__esModule",{value:!0}),o(".accordion.v1",!0),o(".accordion.v2",!1),n.default=o()},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.galery=function(){for(var e=document,t=e.getElementById("video-galery"),n=e.querySelectorAll(".gallery-image"),o=function(e){n[e].addEventListener("click",function(o){var s=n[e].children[0].children[0].getAttribute("value");o.preventDefault(),t.setAttribute("src",s)})},s=0;s<n.length;s++)o(s)}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.modal=function(){for(var e=document,t=e.querySelectorAll(".btn-modal"),n=e.getElementById("close"),o=e.getElementById("modal-container"),s=0;s<t.length;s++)t[s].addEventListener("click",function(){o.classList.add("active")});n.addEventListener("click",function(){o.classList.remove("active")})}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tabs=function(){var e=document,t=Array.prototype.slice.apply(e.querySelectorAll(".tabs-container__tab")),n=Array.prototype.slice.apply(e.querySelectorAll(".tabs-container__panel"));e.getElementById("tabs").addEventListener("click",function(e){if(e.target.classList.contains("tabs-container__tab")){var o=t.indexOf(e.target);t.map(function(e){return e.classList.remove("is-active")}),t[o].classList.add("is-active"),n.map(function(e){return e.classList.remove("is-active")}),n[o].classList.add("is-active")}})}},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tnsSingleMobile=function(){tns({container:"#tnsSingleMobile",items:1,slideBy:1,speed:1e3,mode:"gallery",autoplay:!0,autoplayButton:"#customize-toggle1",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})},n.tnsSingleDesktop=function(){tns({container:"#tnsSingleDesktop",items:1,slideBy:1,speed:1e3,mode:"gallery",autoplay:!0,autoplayButton:"#customize-toggle2",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})},n.tnsSinglePrefooter=function(){tns({container:"#tnsSinglePrefooter",items:1,slideBy:1,speed:300,autoplay:!0,mode:"gallery",mouseDrag:!0,controls:!1,nav:!1,autoplayButton:"#customize-toggle3",responsive:{320:{items:2},480:{items:4},640:{items:4},800:{items:4},960:{items:4},1120:{items:4},1280:{items:4}}})},n.tnsSingleCasino=function(){tns({container:"#tnsSingleCasino",items:1,slideBy:1,speed:100,mode:"gallery",autoplay:!0,mouseDrag:!0,autoplayButton:"#customize-toggle4",nav:!1,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{320:{items:1},480:{items:3},640:{items:3},800:{items:4},960:{items:4},1120:{items:5},1280:{items:5}}})}},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){var e=document,t=e.querySelector(".hamburger"),n=e.querySelector(".top-nav__menu");t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("is-active"),n.classList.toggle("is-active")})}},{}],8:[function(e,t,n){"use strict";var o,s=e("./components/tns-slider"),i=e("./components/topNav"),a=e("./components/galery"),c=e("./components/acordeon"),r=e("./components/tabs"),l=e("./components/modal-sign-up"),u=e("./components/dropdown"),d=(o=u)&&o.__esModule?o:{default:o};(0,i.topNav)(),(0,s.tnsSinglePrefooter)(),(0,l.modal)(),document.body.classList.contains("home")?((0,s.tnsSingleDesktop)(),(0,s.tnsSingleMobile)(),(0,a.galery)()):document.body.classList.contains("bonos")?(0,c.accordion)():document.body.classList.contains("banca")?(0,r.tabs)():document.body.classList.contains("casino")?(0,s.tnsSingleCasino)():document.body.classList.contains("poker")||(document.body.classList.contains("reglas-de-deportes")?(0,d.default)():document.body.classList.contains("caballos")&&((0,r.tabs)(),(0,l.modal)()))},{"./components/acordeon":1,"./components/dropdown":2,"./components/galery":3,"./components/modal-sign-up":4,"./components/tabs":5,"./components/tns-slider":6,"./components/topNav":7}]},{},[8]);
//# sourceMappingURL=scripts.js.map
