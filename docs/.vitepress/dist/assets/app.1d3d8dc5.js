import{d as B,f as A,e as F,h as z1,w as K,o as M,c as S,x as T,r as W,n as _,b as w,y as G,D as j,a2 as Rn,z as c2,W as n1,t as T2,A as D,T as i1,a1 as P4,a3 as En,a4 as $n,C as N2,R as _n,Q as B4,a as b3,a5 as o1,a6 as N8,X as S1,v as S8,a7 as h3,a8 as In,F as W2,a9 as Un,$ as y2,aa as Wn,i as w8,Y as jn,B as qn,K as y3,ab as Gn,ac as Xn,ad as Yn,ae as H0,af as Kn,ag as k8,_ as Zn,I as u4,ah as Qn,ai as Jn,aj as ci,ak as ai,al as ei,am as ri,an as si,ao as ni,ap as ii,aq as oi,ar as li,u as ti,l as fi,as as vi,at as mi,au as ui}from"./chunks/framework.16f412ef.js";import{t as Hi}from"./chunks/theme.da0a86ba.js";function z0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function g(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?z0(Object(e),!0).forEach(function(r){q(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):z0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function V3(c){"@babel/helpers - typeof";return V3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},V3(c)}function zi(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function p0(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function pi(c,a,e){return a&&p0(c.prototype,a),e&&p0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function q(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function F4(c,a){return Vi(c)||Mi(c,a)||A8(c,a)||Li()}function R1(c){return hi(c)||di(c)||A8(c)||Ci()}function hi(c){if(Array.isArray(c))return H4(c)}function Vi(c){if(Array.isArray(c))return c}function di(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Mi(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,o,l;try{for(e=e.call(c);!(s=(o=e.next()).done)&&(r.push(o.value),!(a&&r.length===a));s=!0);}catch(i){n=!0,l=i}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw l}}return r}}function A8(c,a){if(c){if(typeof c=="string")return H4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return H4(c,a)}}function H4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Ci(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Li(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h0=function(){},D4={},T8={},P8=null,B8={mark:h0,measure:h0};try{typeof window<"u"&&(D4=window),typeof document<"u"&&(T8=document),typeof MutationObserver<"u"&&(P8=MutationObserver),typeof performance<"u"&&(B8=performance)}catch{}var gi=D4.navigator||{},V0=gi.userAgent,d0=V0===void 0?"":V0,S2=D4,$=T8,M0=P8,a3=B8;S2.document;var C2=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",F8=~d0.indexOf("MSIE")||~d0.indexOf("Trident/"),e3,r3,s3,n3,i3,h2="___FONT_AWESOME___",z4=16,D8="fa",O8="svg-inline--fa",j2="data-fa-i2svg",p4="data-fa-pseudo-element",xi="data-fa-pseudo-element-pending",O4="data-prefix",R4="data-icon",C0="fontawesome-i2svg",bi="async",yi=["HTML","HEAD","STYLE","SCRIPT"],R8=function(){try{return!0}catch{return!1}}(),E="classic",U="sharp",E4=[E,U];function E1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[E]}})}var w1=E1((e3={},q(e3,E,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),q(e3,U,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),e3)),k1=E1((r3={},q(r3,E,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),q(r3,U,{solid:"fass",regular:"fasr"}),r3)),A1=E1((s3={},q(s3,E,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),q(s3,U,{fass:"fa-solid",fasr:"fa-regular"}),s3)),Ni=E1((n3={},q(n3,E,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),q(n3,U,{"fa-solid":"fass","fa-regular":"fasr"}),n3)),Si=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,E8="fa-layers-text",wi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ki=E1((i3={},q(i3,E,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),q(i3,U,{900:"fass",400:"fasr"}),i3)),$8=[1,2,3,4,5,6,7,8,9,10],Ai=$8.concat([11,12,13,14,15,16,17,18,19,20]),Ti=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T1=new Set;Object.keys(k1[E]).map(T1.add.bind(T1));Object.keys(k1[U]).map(T1.add.bind(T1));var Pi=[].concat(E4,R1(T1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_2.GROUP,_2.SWAP_OPACITY,_2.PRIMARY,_2.SECONDARY]).concat($8.map(function(c){return"".concat(c,"x")})).concat(Ai.map(function(c){return"w-".concat(c)})),g1=S2.FontAwesomeConfig||{};function Bi(c){var a=$.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Fi(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if($&&typeof $.querySelector=="function"){var Di=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Di.forEach(function(c){var a=F4(c,2),e=a[0],r=a[1],s=Fi(Bi(e));s!=null&&(g1[r]=s)})}var _8={styleDefault:"solid",familyDefault:"classic",cssPrefix:D8,replacementClass:O8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g1.familyPrefix&&(g1.cssPrefix=g1.familyPrefix);var l1=g(g({},_8),g1);l1.autoReplaceSvg||(l1.observeMutations=!1);var y={};Object.keys(_8).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(e){l1[c]=e,x1.forEach(function(r){return r(y)})},get:function(){return l1[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){l1.cssPrefix=a,x1.forEach(function(e){return e(y)})},get:function(){return l1.cssPrefix}});S2.FontAwesomeConfig=y;var x1=[];function Oi(c){return x1.push(c),function(){x1.splice(x1.indexOf(c),1)}}var x2=z4,m2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ri(c){if(!(!c||!C2)){var a=$.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=$.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=n)}return $.head.insertBefore(a,r),c}}var Ei="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function P1(){for(var c=12,a="";c-- >0;)a+=Ei[Math.random()*62|0];return a}function p1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function $4(c){return c.classList?p1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function I8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $i(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(I8(c[e]),'" ')},"").trim()}function N3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function _4(c){return c.size!==m2.size||c.x!==m2.x||c.y!==m2.y||c.rotate!==m2.rotate||c.flipX||c.flipY}function _i(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),i={transform:"".concat(n," ").concat(o," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:i,path:t}}function Ii(c){var a=c.transform,e=c.width,r=e===void 0?z4:e,s=c.height,n=s===void 0?z4:s,o=c.startCentered,l=o===void 0?!1:o,i="";return l&&F8?i+="translate(".concat(a.x/x2-r/2,"em, ").concat(a.y/x2-n/2,"em) "):l?i+="translate(calc(-50% + ".concat(a.x/x2,"em), calc(-50% + ").concat(a.y/x2,"em)) "):i+="translate(".concat(a.x/x2,"em, ").concat(a.y/x2,"em) "),i+="scale(".concat(a.size/x2*(a.flipX?-1:1),", ").concat(a.size/x2*(a.flipY?-1:1),") "),i+="rotate(".concat(a.rotate,"deg) "),i}var Ui=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function U8(){var c=D8,a=O8,e=y.cssPrefix,r=y.replacementClass,s=Ui;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(l,".".concat(r))}return s}var L0=!1;function s4(){y.autoAddCss&&!L0&&(Ri(U8()),L0=!0)}var Wi={mixout:function(){return{dom:{css:U8,insertCss:s4}}},hooks:function(){return{beforeDOMElementCreation:function(){s4()},beforeI2svg:function(){s4()}}}},V2=S2||{};V2[h2]||(V2[h2]={});V2[h2].styles||(V2[h2].styles={});V2[h2].hooks||(V2[h2].hooks={});V2[h2].shims||(V2[h2].shims=[]);var f2=V2[h2],W8=[],ji=function c(){$.removeEventListener("DOMContentLoaded",c),d3=1,W8.map(function(a){return a()})},d3=!1;C2&&(d3=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),d3||$.addEventListener("DOMContentLoaded",ji));function qi(c){C2&&(d3?setTimeout(c,0):W8.push(c))}function $1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?I8(c):"<".concat(a," ").concat($i(r),">").concat(n.map($1).join(""),"</").concat(a,">")}function g0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Gi=function(a,e){return function(r,s,n,o){return a.call(e,r,s,n,o)}},n4=function(a,e,r,s){var n=Object.keys(a),o=n.length,l=s!==void 0?Gi(e,s):e,i,t,f;for(r===void 0?(i=1,f=a[n[0]]):(i=0,f=r);i<o;i++)t=n[i],f=l(f,a[t],t,a);return f};function Xi(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function h4(c){var a=Xi(c);return a.length===1?a[0].toString(16):null}function Yi(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function x0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function V4(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=x0(a);typeof f2.hooks.addPack=="function"&&!s?f2.hooks.addPack(c,x0(a)):f2.styles[c]=g(g({},f2.styles[c]||{}),n),c==="fas"&&V4("fa",a)}var o3,l3,t3,a1=f2.styles,Ki=f2.shims,Zi=(o3={},q(o3,E,Object.values(A1[E])),q(o3,U,Object.values(A1[U])),o3),I4=null,j8={},q8={},G8={},X8={},Y8={},Qi=(l3={},q(l3,E,Object.keys(w1[E])),q(l3,U,Object.keys(w1[U])),l3);function Ji(c){return~Pi.indexOf(c)}function co(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Ji(s)?s:null}var K8=function(){var a=function(n){return n4(a1,function(o,l,i){return o[i]=n4(l,n,{}),o},{})};j8=a(function(s,n,o){if(n[3]&&(s[n[3]]=o),n[2]){var l=n[2].filter(function(i){return typeof i=="number"});l.forEach(function(i){s[i.toString(16)]=o})}return s}),q8=a(function(s,n,o){if(s[o]=o,n[2]){var l=n[2].filter(function(i){return typeof i=="string"});l.forEach(function(i){s[i]=o})}return s}),Y8=a(function(s,n,o){var l=n[2];return s[o]=o,l.forEach(function(i){s[i]=o}),s});var e="far"in a1||y.autoFetchSvg,r=n4(Ki,function(s,n){var o=n[0],l=n[1],i=n[2];return l==="far"&&!e&&(l="fas"),typeof o=="string"&&(s.names[o]={prefix:l,iconName:i}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:l,iconName:i}),s},{names:{},unicodes:{}});G8=r.names,X8=r.unicodes,I4=S3(y.styleDefault,{family:y.familyDefault})};Oi(function(c){I4=S3(c.styleDefault,{family:y.familyDefault})});K8();function U4(c,a){return(j8[c]||{})[a]}function ao(c,a){return(q8[c]||{})[a]}function I2(c,a){return(Y8[c]||{})[a]}function Z8(c){return G8[c]||{prefix:null,iconName:null}}function eo(c){var a=X8[c],e=U4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function w2(){return I4}var W4=function(){return{prefix:null,iconName:null,rest:[]}};function S3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?E:e,s=w1[r][c],n=k1[r][c]||k1[r][s],o=c in f2.styles?c:null;return n||o||null}var b0=(t3={},q(t3,E,Object.keys(A1[E])),q(t3,U,Object.keys(A1[U])),t3);function w3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},q(a,E,"".concat(y.cssPrefix,"-").concat(E)),q(a,U,"".concat(y.cssPrefix,"-").concat(U)),a),o=null,l=E;(c.includes(n[E])||c.some(function(t){return b0[E].includes(t)}))&&(l=E),(c.includes(n[U])||c.some(function(t){return b0[U].includes(t)}))&&(l=U);var i=c.reduce(function(t,f){var v=co(y.cssPrefix,f);if(a1[f]?(f=Zi[l].includes(f)?Ni[l][f]:f,o=f,t.prefix=f):Qi[l].indexOf(f)>-1?(o=f,t.prefix=S3(f,{family:l})):v?t.iconName=v:f!==y.replacementClass&&f!==n[E]&&f!==n[U]&&t.rest.push(f),!s&&t.prefix&&t.iconName){var m=o==="fa"?Z8(t.iconName):{},H=I2(t.prefix,t.iconName);m.prefix&&(o=null),t.iconName=m.iconName||H||t.iconName,t.prefix=m.prefix||t.prefix,t.prefix==="far"&&!a1.far&&a1.fas&&!y.autoFetchSvg&&(t.prefix="fas")}return t},W4());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&l===U&&(a1.fass||y.autoFetchSvg)&&(i.prefix="fass",i.iconName=I2(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||o==="fa")&&(i.prefix=w2()||"fas"),i}var ro=function(){function c(){zi(this,c),this.definitions={}}return pi(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){e.definitions[l]=g(g({},e.definitions[l]||{}),o[l]),V4(l,o[l]);var i=A1[E][l];i&&V4(i,o[l]),K8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var o=s[n],l=o.prefix,i=o.iconName,t=o.icon,f=t[2];e[l]||(e[l]={}),f.length>0&&f.forEach(function(v){typeof v=="string"&&(e[l][v]=t)}),e[l][i]=t}),e}}]),c}(),y0=[],e1={},r1={},so=Object.keys(r1);function no(c,a){var e=a.mixoutsTo;return y0=c,e1={},Object.keys(r1).forEach(function(r){so.indexOf(r)===-1&&delete r1[r]}),y0.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(e[o]=s[o]),V3(s[o])==="object"&&Object.keys(s[o]).forEach(function(l){e[o]||(e[o]={}),e[o][l]=s[o][l]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(o){e1[o]||(e1[o]=[]),e1[o].push(n[o])})}r.provides&&r.provides(r1)}),e}function d4(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=e1[c]||[];return n.forEach(function(o){a=o.apply(null,[a].concat(r))}),a}function q2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=e1[c]||[];s.forEach(function(n){n.apply(null,e)})}function d2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return r1[c]?r1[c].apply(null,a):void 0}function M4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||w2();if(a)return a=I2(e,a)||a,g0(Q8.definitions,e,a)||g0(f2.styles,e,a)}var Q8=new ro,io=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,q2("noAuto")},oo={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return C2?(q2("beforeI2svg",a),d2("pseudoElements2svg",a),d2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,qi(function(){to({autoReplaceSvgRoot:e}),q2("watch",a)})}},lo={icon:function(a){if(a===null)return null;if(V3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:I2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=S3(a[0]);return{prefix:r,iconName:I2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(Si))){var s=w3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||w2(),iconName:I2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=w2();return{prefix:n,iconName:I2(n,a)||a}}}},s2={noAuto:io,config:y,dom:oo,parse:lo,library:Q8,findIconDefinition:M4,toHtml:$1},to=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?$:e;(Object.keys(f2.styles).length>0||y.autoFetchSvg)&&C2&&y.autoReplaceSvg&&s2.dom.i2svg({node:r})};function k3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return $1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(C2){var r=$.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function fo(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,o=c.transform;if(_4(o)&&e.found&&!r.found){var l=e.width,i=e.height,t={x:l/i/2,y:.5};s.style=N3(g(g({},n),{},{"transform-origin":"".concat(t.x+o.x/16,"em ").concat(t.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function vo(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,o=n===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},s),{},{id:o}),children:r}]}]}function j4(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,o=c.transform,l=c.symbol,i=c.title,t=c.maskId,f=c.titleId,v=c.extra,m=c.watchable,H=m===void 0?!1:m,d=r.found?r:e,C=d.width,h=d.height,u=s==="fak",V=[y.replacementClass,n?"".concat(y.cssPrefix,"-").concat(n):""].filter(function(k){return v.classes.indexOf(k)===-1}).filter(function(k){return k!==""||!!k}).concat(v.classes).join(" "),b={children:[],attributes:g(g({},v.attributes),{},{"data-prefix":s,"data-icon":n,class:V,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(h)})},p=u&&!~v.classes.indexOf("fa-fw")?{width:"".concat(C/h*16*.0625,"em")}:{};H&&(b.attributes[j2]=""),i&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||P1())},children:[i]}),delete b.attributes.title);var x=g(g({},b),{},{prefix:s,iconName:n,main:e,mask:r,maskId:t,transform:o,symbol:l,styles:g(g({},p),v.styles)}),L=r.found&&e.found?d2("generateAbstractMask",x)||{children:[],attributes:{}}:d2("generateAbstractIcon",x)||{children:[],attributes:{}},z=L.children,N=L.attributes;return x.children=z,x.attributes=N,l?vo(x):fo(x)}function N0(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,o=c.extra,l=c.watchable,i=l===void 0?!1:l,t=g(g(g({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});i&&(t[j2]="");var f=g({},o.styles);_4(s)&&(f.transform=Ii({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var v=N3(f);v.length>0&&(t.style=v);var m=[];return m.push({tag:"span",attributes:t,children:[a]}),n&&m.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),m}function mo(c){var a=c.content,e=c.title,r=c.extra,s=g(g(g({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=N3(r.styles);n.length>0&&(s.style=n);var o=[];return o.push({tag:"span",attributes:s,children:[a]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var i4=f2.styles;function C4(c){var a=c[0],e=c[1],r=c.slice(4),s=F4(r,1),n=s[0],o=null;return Array.isArray(n)?o={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(_2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(_2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(_2.PRIMARY),fill:"currentColor",d:n[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:o}}var uo={found:!1,width:512,height:512};function Ho(c,a){!R8&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function L4(c,a){var e=a;return a==="fa"&&y.styleDefault!==null&&(a=w2()),new Promise(function(r,s){if(d2("missingIconAbstract"),e==="fa"){var n=Z8(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&i4[a]&&i4[a][c]){var o=i4[a][c];return r(C4(o))}Ho(c,a),r(g(g({},uo),{},{icon:y.showMissingIcons&&c?d2("missingIconAbstract")||{}:{}}))})}var S0=function(){},g4=y.measurePerformance&&a3&&a3.mark&&a3.measure?a3:{mark:S0,measure:S0},L1='FA "6.3.0"',zo=function(a){return g4.mark("".concat(L1," ").concat(a," begins")),function(){return J8(a)}},J8=function(a){g4.mark("".concat(L1," ").concat(a," ends")),g4.measure("".concat(L1," ").concat(a),"".concat(L1," ").concat(a," begins"),"".concat(L1," ").concat(a," ends"))},q4={begin:zo,end:J8},u3=function(){};function w0(c){var a=c.getAttribute?c.getAttribute(j2):null;return typeof a=="string"}function po(c){var a=c.getAttribute?c.getAttribute(O4):null,e=c.getAttribute?c.getAttribute(R4):null;return a&&e}function ho(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function Vo(){if(y.autoReplaceSvg===!0)return H3.replace;var c=H3[y.autoReplaceSvg];return c||H3.replace}function Mo(c){return $.createElementNS("http://www.w3.org/2000/svg",c)}function Co(c){return $.createElement(c)}function c5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Mo:Co:e;if(typeof c=="string")return $.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(o){s.setAttribute(o,c.attributes[o])});var n=c.children||[];return n.forEach(function(o){s.appendChild(c5(o,{ceFn:r}))}),s}function Lo(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var H3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(c5(s),e)}),e.getAttribute(j2)===null&&y.keepOriginalSource){var r=$.createComment(Lo(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~$4(e).indexOf(y.replacementClass))return H3.replace(a);var s=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(l,i){return i===y.replacementClass||i.match(s)?l.toSvg.push(i):l.toNode.push(i),l},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var o=r.map(function(l){return $1(l)}).join(`
`);e.setAttribute(j2,""),e.innerHTML=o}};function k0(c){c()}function a5(c,a){var e=typeof a=="function"?a:u3;if(c.length===0)e();else{var r=k0;y.mutateApproach===bi&&(r=S2.requestAnimationFrame||k0),r(function(){var s=Vo(),n=q4.begin("mutate");c.map(s),n(),e()})}}var G4=!1;function e5(){G4=!0}function x4(){G4=!1}var M3=null;function A0(c){if(M0&&y.observeMutations){var a=c.treeCallback,e=a===void 0?u3:a,r=c.nodeCallback,s=r===void 0?u3:r,n=c.pseudoElementsCallback,o=n===void 0?u3:n,l=c.observeMutationsRoot,i=l===void 0?$:l;M3=new M0(function(t){if(!G4){var f=w2();p1(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!w0(v.addedNodes[0])&&(y.searchPseudoElements&&o(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&y.searchPseudoElements&&o(v.target.parentNode),v.type==="attributes"&&w0(v.target)&&~Ti.indexOf(v.attributeName))if(v.attributeName==="class"&&po(v.target)){var m=w3($4(v.target)),H=m.prefix,d=m.iconName;v.target.setAttribute(O4,H||f),d&&v.target.setAttribute(R4,d)}else ho(v.target)&&s(v.target)})}}),C2&&M3.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function go(){M3&&M3.disconnect()}function xo(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),o=n[0],l=n.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),e}function bo(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=w3($4(c));return s.prefix||(s.prefix=w2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=ao(s.prefix,c.innerText)||U4(s.prefix,h4(c.innerText))),!s.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function yo(c){var a=p1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return y.autoA11y&&(e?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(r||P1()):(a["aria-hidden"]="true",a.focusable="false")),a}function No(){return{iconName:null,title:null,titleId:null,prefix:null,transform:m2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function T0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=bo(c),r=e.iconName,s=e.prefix,n=e.rest,o=yo(c),l=d4("parseNodeAttributes",{},c),i=a.styleParser?xo(c):[];return g({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:m2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:o}},l)}var So=f2.styles;function r5(c){var a=y.autoReplaceSvg==="nest"?T0(c,{styleParser:!1}):T0(c);return~a.extra.classes.indexOf(E8)?d2("generateLayersText",c,a):d2("generateSvgReplacementMutation",c,a)}var k2=new Set;E4.map(function(c){k2.add("fa-".concat(c))});Object.keys(w1[E]).map(k2.add.bind(k2));Object.keys(w1[U]).map(k2.add.bind(k2));k2=R1(k2);function P0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!C2)return Promise.resolve();var e=$.documentElement.classList,r=function(v){return e.add("".concat(C0,"-").concat(v))},s=function(v){return e.remove("".concat(C0,"-").concat(v))},n=y.autoFetchSvg?k2:E4.map(function(f){return"fa-".concat(f)}).concat(Object.keys(So));n.includes("fa")||n.push("fa");var o=[".".concat(E8,":not([").concat(j2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(j2,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=p1(c.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var i=q4.begin("onTree"),t=l.reduce(function(f,v){try{var m=r5(v);m&&f.push(m)}catch(H){R8||H.name==="MissingIcon"&&console.error(H)}return f},[]);return new Promise(function(f,v){Promise.all(t).then(function(m){a5(m,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),i(),f()})}).catch(function(m){i(),v(m)})})}function wo(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;r5(c).then(function(e){e&&a5([e],a)})}function ko(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:M4(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:M4(s||{})),c(r,g(g({},e),{},{mask:s}))}}var Ao=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?m2:r,n=e.symbol,o=n===void 0?!1:n,l=e.mask,i=l===void 0?null:l,t=e.maskId,f=t===void 0?null:t,v=e.title,m=v===void 0?null:v,H=e.titleId,d=H===void 0?null:H,C=e.classes,h=C===void 0?[]:C,u=e.attributes,V=u===void 0?{}:u,b=e.styles,p=b===void 0?{}:b;if(a){var x=a.prefix,L=a.iconName,z=a.icon;return k3(g({type:"icon"},a),function(){return q2("beforeDOMElementCreation",{iconDefinition:a,params:e}),y.autoA11y&&(m?V["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(d||P1()):(V["aria-hidden"]="true",V.focusable="false")),j4({icons:{main:C4(z),mask:i?C4(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:L,transform:g(g({},m2),s),symbol:o,title:m,maskId:f,titleId:d,extra:{attributes:V,styles:p,classes:h}})})}},To={mixout:function(){return{icon:ko(Ao)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=P0,e.nodeCallback=wo,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?$:r,n=e.callback,o=n===void 0?function(){}:n;return P0(s,o)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,o=r.titleId,l=r.prefix,i=r.transform,t=r.symbol,f=r.mask,v=r.maskId,m=r.extra;return new Promise(function(H,d){Promise.all([L4(s,l),f.iconName?L4(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var h=F4(C,2),u=h[0],V=h[1];H([e,j4({icons:{main:u,mask:V},prefix:l,iconName:s,transform:i,symbol:t,maskId:v,title:n,titleId:o,extra:m,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,o=e.transform,l=e.styles,i=N3(l);i.length>0&&(s.style=i);var t;return _4(o)&&(t=d2("generateAbstractTransformGrouping",{main:n,transform:o,containerWidth:n.width,iconWidth:n.width})),r.push(t||n.icon),{children:r,attributes:s}}}},Po={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return k3({type:"layer"},function(){q2("beforeDOMElementCreation",{assembler:e,params:r});var o=[];return e(function(l){Array.isArray(l)?l.map(function(i){o=o.concat(i.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(R1(n)).join(" ")},children:o}]})}}}},Bo={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,o=r.classes,l=o===void 0?[]:o,i=r.attributes,t=i===void 0?{}:i,f=r.styles,v=f===void 0?{}:f;return k3({type:"counter",content:e},function(){return q2("beforeDOMElementCreation",{content:e,params:r}),mo({content:e.toString(),title:n,extra:{attributes:t,styles:v,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(R1(l))}})})}}}},Fo={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?m2:s,o=r.title,l=o===void 0?null:o,i=r.classes,t=i===void 0?[]:i,f=r.attributes,v=f===void 0?{}:f,m=r.styles,H=m===void 0?{}:m;return k3({type:"text",content:e},function(){return q2("beforeDOMElementCreation",{content:e,params:r}),N0({content:e,transform:g(g({},m2),n),title:l,extra:{attributes:v,styles:H,classes:["".concat(y.cssPrefix,"-layers-text")].concat(R1(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,o=r.extra,l=null,i=null;if(F8){var t=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();l=f.width/t,i=f.height/t}return y.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,N0({content:e.innerHTML,width:l,height:i,transform:n,title:s,extra:o,watchable:!0})])}}},Do=new RegExp('"',"ug"),B0=[1105920,1112319];function Oo(c){var a=c.replace(Do,""),e=Yi(a,0),r=e>=B0[0]&&e<=B0[1],s=a.length===2?a[0]===a[1]:!1;return{value:h4(s?a[0]:a),isSecondary:r||s}}function F0(c,a){var e="".concat(xi).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=p1(c.children),o=n.filter(function(z){return z.getAttribute(p4)===a})[0],l=S2.getComputedStyle(c,a),i=l.getPropertyValue("font-family").match(wi),t=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!i)return c.removeChild(o),r();if(i&&f!=="none"&&f!==""){var v=l.getPropertyValue("content"),m=~["Sharp"].indexOf(i[2])?U:E,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(i[2])?k1[m][i[2].toLowerCase()]:ki[m][t],d=Oo(v),C=d.value,h=d.isSecondary,u=i[0].startsWith("FontAwesome"),V=U4(H,C),b=V;if(u){var p=eo(C);p.iconName&&p.prefix&&(V=p.iconName,H=p.prefix)}if(V&&!h&&(!o||o.getAttribute(O4)!==H||o.getAttribute(R4)!==b)){c.setAttribute(e,b),o&&c.removeChild(o);var x=No(),L=x.extra;L.attributes[p4]=a,L4(V,H).then(function(z){var N=j4(g(g({},x),{},{icons:{main:z,mask:W4()},prefix:H,iconName:b,extra:L,watchable:!0})),k=$.createElement("svg");a==="::before"?c.insertBefore(k,c.firstChild):c.appendChild(k),k.outerHTML=N.map(function(P){return $1(P)}).join(`