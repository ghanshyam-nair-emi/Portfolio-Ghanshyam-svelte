import{y as Gh,z as Wh,q as ds,k as qh,s as Hn,n as K,b as Kt,o as lr,A as qr,e as lt,B as ir,h as Xh,C as rn,i as Sr,r as ts,f as tt,D as jh}from"../chunks/scheduler.GOssmixh.js";import{q as ua,a as Jt,n as ha,t as St,S as ui,i as hi,e as X,y as ti,s as Re,c as j,d as ue,z as ni,g as V,h as Pe,A as Qe,o as N,p as Ye,j as Be,k as B,B as ot,C as It,D as mo,b as Gt,f as Wt,l as Bn,E as nt,F as yl,G as Gn,H as go,m as Js,u as _i,v as yi,w as bi,x as Mi}from"../chunks/index.iTUlS2Rq.js";import{w as Tn}from"../chunks/index.8NwuiTUI.js";const mu=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Mn(r,e){const t=e.token={};function n(i,s,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==s&&h&&(ua(),Jt(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ha())}):e.block.d(1),c.c(),St(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&qh()}if(Gh(r)){const i=Wh();if(r.then(s=>{ds(i),n(e.then,1,e.value,s),ds(null)},s=>{if(ds(i),n(e.catch,2,e.error,s),ds(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,r),!0;e.resolved=r}}function Xr(r,e,t){const n=e.slice(),{resolved:i}=r;r.current===r.then&&(n[r.value]=i),r.current===r.catch&&(n[r.error]=i),r.block.p(n,t)}function $i(r){return r?.length!==void 0?r:Array.from(r)}const Yh=!1,tb=Object.freeze(Object.defineProperty({__proto__:null,ssr:Yh},Symbol.toStringTag,{value:"Module"}));var vo={d:(r,e)=>{for(var t in e)vo.o(e,t)&&!vo.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},gu={};vo.d(gu,{Z:()=>$h});const Zh={root:"body",duration:1e3,easing:"cubic-bezier(0.15, 1, 0.4, 1)",offsets:[],fixedOffsets:[]},xo={speedY:1,speedX:1},Jh=[{name:"easeInSine",value:[.12,0,.39,0]},{name:"easeOutSine",value:[.61,1,.88,1]},{name:"easeInOutSine",value:[.37,0,.63,1]},{name:"easeInQuad",value:[.11,0,.5,0]},{name:"easeOutQuad",value:[.5,1,.89,1]},{name:"easeInOutQuad",value:[.45,0,.55,1]},{name:"easeInCubic",value:[.32,0,.67,0]},{name:"easeOutCubic",value:[.33,1,.68,1]},{name:"easeInOutCubic",value:[.65,0,.35,1]},{name:"easeInQuart",value:[.5,0,.75,0]},{name:"easeOutQuart",value:[.25,1,.5,1]},{name:"easeInOutQuart",value:[.76,0,.24,1]},{name:"easeInQuint",value:[.64,0,.78,0]},{name:"easeOutQuint",value:[.22,1,.36,1]},{name:"easeInOutQuint",value:[.83,0,.17,1]},{name:"easeInExpo",value:[.7,0,.84,0]},{name:"easeOutExpo",value:[.16,1,.3,1]},{name:"easeInOutExpo",value:[.87,0,.13,1]},{name:"easeInCirc",value:[.55,0,1,.45]},{name:"easeOutCirc",value:[0,.55,.45,1]},{name:"easeInOutCirc",value:[.85,0,.15,1]}];function nn(r,e){return typeof r=="string"?e?document.querySelectorAll(r):document.querySelector(r):r}function bl(r,e,t,n){let i=.1,s=typeof Float32Array=="function";function a(d,f){return 1-3*f+3*d}function o(d,f){return 3*f-6*d}function l(d){return 3*d}function c(d,f,g){return((a(f,g)*d+o(f,g))*d+l(f))*d}function u(d,f,g){return 3*a(f,g)*d*d+2*o(f,g)*d+l(f)}if(!(0<=r&&r<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===e&&t===n)return function(d){return d};let h=s?new Float32Array(11):new Array(11);for(let d=0;d<11;++d)h[d]=c(d*i,r,t);return d=>d===0||d===1?d:c(function(f){let g=0,v=1;for(;v!==10&&h[v]<=f;++v)g+=i;--v;let x=g+(f-h[v])/(h[v+1]-h[v])*i,p=u(x,r,t);return p>=.001?function(m,b,y,_){for(let E=0;E<4;++E){let C=u(b,y,_);if(C===0)return b;b-=(c(b,y,_)-m)/C}return b}(f,x,r,t):p===0?x:function(m,b,y,_,E){let C,I,Z=0;do I=b+(y-b)/2,C=c(I,_,E)-m,C>0?y=I:b=I;while(Math.abs(C)>1e-7&&++Z<10);return I}(f,g,g+i,r,t)}(d),e,n)}var Xs,Qn,zn,tn,kn,wt,Or,zt,kt,js,vu,$s,Qs,xu,Ur,Ht=function(r,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t},be=function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)};class $h{constructor(e){Xs.add(this),Qn.set(this,void 0),zn.set(this,{x:0,y:0}),tn.set(this,{x:0,y:0}),kn.set(this,void 0),wt.set(this,void 0),Or.set(this,void 0),zt.set(this,[]),kt.set(this,[]),js.set(this,void 0),$s.set(this,t=>{Ht(this,zn,{x:be(this,wt,"f").scrollLeft,y:be(this,wt,"f").scrollTop},"f"),be(this,zn,"f").x!==void 0&&be(this,zn,"f").y!==void 0||Ht(this,zn,{x:be(this,wt,"f").scrollX,y:be(this,wt,"f").scrollY},"f"),be(this,Qn,"f").onScroll&&new Promise(n=>{be(this,Qn,"f").onScroll(t),n(!0)})}),Qs.set(this,()=>{if(be(this,js,"f"))return;let t=function(o){let l,c=Jh.filter(u=>u.name==o);if(l=c[0]?c[0].value:(o=(o=o.split(/([^\(-\)]*)/))[3].split(/,(?![^()]*\()/)).map(u=>parseFloat(u)),Array.isArray(l)&&l.length==4)return l;throw"easing string is invalid."}(be(this,Qn,"f").easing),n=1/(be(this,Qn,"f").duration/10+1);be(this,tn,"f").x+=bl.apply(null,t)(n)*(be(this,zn,"f").x-be(this,tn,"f").x),be(this,tn,"f").y+=bl.apply(null,t)(n)*(be(this,zn,"f").y-be(this,tn,"f").y),be(this,tn,"f").x=Math.ceil(100*be(this,tn,"f").x)/100,be(this,tn,"f").y=Math.ceil(100*be(this,tn,"f").y)/100;let i=-1*be(this,tn,"f").x,s=-1*be(this,tn,"f").y,a=`translate3d(${i}px, ${s}px, 0px)`;if(be(this,kn,"f").fixed.style.webkitTransform=a,be(this,kn,"f").fixed.style.transform=a,Array.isArray(be(this,kt,"f")))for(let o=0;o<be(this,kt,"f").length;o++){let l=Object.assign({},xo,be(this,kt,"f")[o]),c=`translate3d(${i*(l.speedX-1)}px, ${s*(l.speedY-1)}px, 0)`,u=nn(l.element,!0);if(NodeList.prototype.isPrototypeOf(u))for(let h of u)h.style.webkitTransform=c,h.style.transform=c;else u.style.webkitTransform=c,u.style.transform=c}if(Array.isArray(be(this,zt,"f")))for(let o=0;o<be(this,zt,"f").length;o++){let l=`translate3d(${-i}px, ${-s}px, 0px)`,c=nn(be(this,zt,"f")[o],!0);if(NodeList.prototype.isPrototypeOf(c))for(let u of c)u.style.webkitTransform=l,u.style.transform=l;else c.style.webkitTransform=l,c.style.transform=l}requestAnimationFrame(()=>be(this,Qs,"f").call(this))}),Ur.set(this,()=>{be(this,kn,"f")!==void 0&&(be(this,kn,"f").dummy.style.height=be(this,kn,"f").fixed.scrollHeight+"px")}),Ht(this,Qn,Object.assign({},Zh,e),"f"),Ht(this,wt,nn(e.root),"f"),e.fixedOffsets!==void 0&&Ht(this,zt,e.fixedOffsets,"f"),e.offsets!==void 0&&Ht(this,kt,e.offsets,"f"),function(){let t=!1;var n;return n=navigator.userAgent||navigator.vendor,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substring(0,4)))&&(t=!0),!t&&CSS.supports&&(t=!CSS.supports("position","sticky")),!t}()?be(this,Xs,"m",vu).call(this):be(this,Xs,"m",xu).call(this)}destroy(){let e=be(this,wt,"f").querySelector("._SS_wrapper");be(this,wt,"f").removeEventListener("scroll",be(this,$s,"f")),be(this,wt,"f").removeEventListener("resize",be(this,Ur,"f")),be(this,Or,"f").disconnect();for(let n=e.children.length;n>0;n--)e.children[n-1].removeProperty&&e.children[n-1].removeProperty("transform"),be(this,wt,"f").insertBefore(e.children[n-1],be(this,wt,"f").children[0]);function t(n){n&&n.forEach(i=>{let s=nn(i.element,!0);if(i.element||(s=nn(i,!0)),NodeList.prototype.isPrototypeOf(s))for(i of s)i.style.removeProperty("transform"),i.style.removeProperty("-webkit-transform");else s.style.removeProperty("transform"),s.style.removeProperty("-webkit-transform")})}e.remove(),nn(be(this,Qn,"f").root).querySelector("._SS_dummy").remove(),be(this,wt,"f").style.removeProperty("overflow"),be(this,wt,"f").style.removeProperty("position"),Ht(this,js,!0,"f"),t(be(this,kt,"f")),t(be(this,zt,"f"))}removeOffset(e){Ht(this,kt,be(this,kt,"f").filter(n=>n.element!==e),"f"),Ht(this,kt,be(this,kt,"f").filter(n=>n.element!==nn(e,!0)),"f"),Ht(this,zt,be(this,zt,"f").filter(n=>n!==e),"f"),Ht(this,zt,be(this,zt,"f").filter(n=>n!==nn(e,!0)),"f");let t=nn(e,!0);if(NodeList.prototype.isPrototypeOf(t))for(let n of t)n.style.removeProperty("transform"),n.style.removeProperty("-webkit-transform"),n.style.position=="fixed"&&n.style.removeProperty("position");else t.style.removeProperty("transform"),t.style.removeProperty("-webkit-transform"),t.style.position=="fixed"&&t.style.removeProperty("position")}addOffset(e){typeof e=="object"&&!be(this,kt,"f").find(t=>t.element==e.element)&&e.element&&(e=Object.assign({},xo,e),be(this,kt,"f").push(e))}addFixedOffset(e){nn(e,!0)&&!be(this,zt,"f").includes(e)&&be(this,zt,"f").push(e)}}Qn=new WeakMap,zn=new WeakMap,tn=new WeakMap,kn=new WeakMap,wt=new WeakMap,Or=new WeakMap,zt=new WeakMap,kt=new WeakMap,js=new WeakMap,$s=new WeakMap,Qs=new WeakMap,Ur=new WeakMap,Xs=new WeakSet,vu=function(){Ht(this,kn,function(e){getComputedStyle(e).position=="absolute"&&getComputedStyle(e).position=="fixed"||(e.style.position="relative");let t=document.createElement("div"),n=document.createElement("div");t.classList.add("_SS_wrapper"),n.classList.add("_SS_dummy");for(let i=e.children.length;i>0;i--)t.insertBefore(e.children[i-1],t.children[0]);return e.innerHTML="",e.style.overflow="auto",e.appendChild(t),e.appendChild(n),n.style.height=t.scrollHeight+"px",n.style.width=t.scrollWidth+"px",n.style.top="0px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="-9999",t.style.zIndex="1",t.style.height="100%",t.style.width="100%",t.style.overflow="visible",t.style.top="0px",t.style.left="0px",t.style.position="sticky",{fixed:e.querySelector("div._SS_wrapper"),dummy:e.querySelector("div._SS_dummy")}}(be(this,wt,"f")),"f");let r=new WebKitCSSMatrix(window.getComputedStyle(be(this,kn,"f").fixed).transform);Ht(this,zn,{x:r.m41,y:r.m42},"f"),Ht(this,Or,new MutationObserver(be(this,Ur,"f")),"f"),be(this,Or,"f").observe(be(this,wt,"f"),{childList:!0,attributes:!0,subtree:!0}),window.addEventListener("resize",be(this,Ur,"f")),be(this,wt,"f").addEventListener("scroll",be(this,$s,"f")),be(this,Qs,"f").call(this)},xu=function(){be(this,wt,"f").addEventListener("scroll",r=>{be(this,kt,"f")&&be(this,kt,"f").forEach(e=>{e=Object.assign({},xo,e);let t=`translate3d(${r.target.scrollLeft*(1-e.speedX)}px, ${r.target.scrollTop*(1-e.speedY)}px, 0px)`,n=nn(e.element,!0);if(Symbol.iterator in Object(n))for(let i of n)i.style.webkitTransform=t,i.style.transform=t;else n.style.webkitTransform=t,n.style.transform=t})}),be(this,zt,"f")&&be(this,zt,"f").forEach(r=>{let e=nn(r,!0);if(Symbol.iterator in Object(e))for(let t of e)t.style.position="fixed";else e.style.position="fixed"})};var Qh=gu.Z;let Ks=Tn(),Ys=Tn(!1),Bo=Tn(0),_o=Tn(!1),yo=Tn(),bo=Tn(),Mo=Tn(),Oo=Tn([]),_u,cr=new Promise(r=>_u=r),yu,Kh=new Promise(r=>yu=r);const Uo=Tn(),bu=Tn();async function jr(r){const e=new Promise(async(t,n)=>{const i=await(await fetch(r)).blob(),s=new FileReader;s.readAsDataURL(i),s.onload=()=>t(s.result),s.onerror=a=>n(a)});return Oo.update(t=>[...t,e]),e}function Ml(r){return new Promise(async e=>{const n=await(await fetch(r)).json();e(n)})}function ea(r,e){const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(e(i),t.disconnect())})},{root:null,threshold:.4});t.observe(r)}function ed(){const r="font-size: 1.2rem; font-weight: bold;";console.log("%cLooks like you're a developer.",r+"color: #22c55e;"),console.log("%cInterested in how this site works?",r+"color: #22c55e;"),console.log("%cCheckout the source code: https://github.com/ghanshyam-nair-emi",r)}var Mu={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Vo={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},td=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ta={CSS:{},springs:{}};function yn(r,e,t){return Math.min(Math.max(r,e),t)}function Vr(r,e){return r.indexOf(e)>-1}function Ca(r,e){return r.apply(null,e)}var Ie={arr:function(r){return Array.isArray(r)},obj:function(r){return Vr(Object.prototype.toString.call(r),"Object")},pth:function(r){return Ie.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||Ie.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return Ie.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return Ie.hex(r)||Ie.rgb(r)||Ie.hsl(r)},key:function(r){return!Mu.hasOwnProperty(r)&&!Vo.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function wu(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Su(r,e){var t=wu(r),n=yn(Ie.und(t[0])?1:t[0],.1,100),i=yn(Ie.und(t[1])?100:t[1],.1,100),s=yn(Ie.und(t[2])?10:t[2],.1,100),a=yn(Ie.und(t[3])?0:t[3],.1,100),o=Math.sqrt(i/n),l=s/(2*Math.sqrt(i*n)),c=l<1?o*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*o+-a)/c:-a+o;function d(g){var v=e?e*g/1e3:g;return l<1?v=Math.exp(-v*l*o)*(u*Math.cos(c*v)+h*Math.sin(c*v)):v=(u+h*v)*Math.exp(-v*o),g===0||g===1?g:1-v}function f(){var g=ta.springs[r];if(g)return g;for(var v=1/6,x=0,p=0;;)if(x+=v,d(x)===1){if(p++,p>=16)break}else p=0;var m=x*v*1e3;return ta.springs[r]=m,m}return e?d:f}function nd(r){return r===void 0&&(r=10),function(e){return Math.ceil(yn(e,1e-6,1)*r)*(1/r)}}var id=function(){var r=11,e=1/(r-1);function t(u,h){return 1-3*h+3*u}function n(u,h){return 3*h-6*u}function i(u){return 3*u}function s(u,h,d){return((t(h,d)*u+n(h,d))*u+i(h))*u}function a(u,h,d){return 3*t(h,d)*u*u+2*n(h,d)*u+i(h)}function o(u,h,d,f,g){var v,x,p=0;do x=h+(d-h)/2,v=s(x,f,g)-u,v>0?d=x:h=x;while(Math.abs(v)>1e-7&&++p<10);return x}function l(u,h,d,f){for(var g=0;g<4;++g){var v=a(h,d,f);if(v===0)return h;var x=s(h,d,f)-u;h-=x/v}return h}function c(u,h,d,f){if(!(0<=u&&u<=1&&0<=d&&d<=1))return;var g=new Float32Array(r);if(u!==h||d!==f)for(var v=0;v<r;++v)g[v]=s(v*e,u,d);function x(p){for(var m=0,b=1,y=r-1;b!==y&&g[b]<=p;++b)m+=e;--b;var _=(p-g[b])/(g[b+1]-g[b]),E=m+_*e,C=a(E,u,d);return C>=.001?l(p,E,u,d):C===0?E:o(p,m,m+e,u,d)}return function(p){return u===h&&d===f||p===0||p===1?p:s(x(p),h,f)}}return c}(),Tu=function(){var r={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var i,s=4;n<((i=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((i*3-2)/22-n,2)}},Elastic:function(n,i){n===void 0&&(n=1),i===void 0&&(i=.5);var s=yn(n,1,10),a=yn(i,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(n,i){e[n]=function(){return function(s){return Math.pow(s,i+2)}}}),Object.keys(e).forEach(function(n){var i=e[n];r["easeIn"+n]=i,r["easeOut"+n]=function(s,a){return function(o){return 1-i(s,a)(1-o)}},r["easeInOut"+n]=function(s,a){return function(o){return o<.5?i(s,a)(o*2)/2:1-i(s,a)(o*-2+2)/2}},r["easeOutIn"+n]=function(s,a){return function(o){return o<.5?(1-i(s,a)(1-o*2))/2:(i(s,a)(o*2-1)+1)/2}}}),r}();function Ho(r,e){if(Ie.fnc(r))return r;var t=r.split("(")[0],n=Tu[t],i=wu(r);switch(t){case"spring":return Su(r,e);case"cubicBezier":return Ca(id,i);case"steps":return Ca(nd,i);default:return Ca(n,i)}}function Eu(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function da(r,e){for(var t=r.length,n=arguments.length>=2?arguments[1]:void 0,i=[],s=0;s<t;s++)if(s in r){var a=r[s];e.call(n,a,s,r)&&i.push(a)}return i}function fa(r){return r.reduce(function(e,t){return e.concat(Ie.arr(t)?fa(t):t)},[])}function wl(r){return Ie.arr(r)?r:(Ie.str(r)&&(r=Eu(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Go(r,e){return r.some(function(t){return t===e})}function Wo(r){var e={};for(var t in r)e[t]=r[t];return e}function wo(r,e){var t=Wo(r);for(var n in r)t[n]=e.hasOwnProperty(n)?e[n]:r[n];return t}function pa(r,e){var t=Wo(r);for(var n in e)t[n]=Ie.und(r[n])?e[n]:r[n];return t}function rd(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function sd(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(o,l,c,u){return l+l+c+c+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),s=parseInt(n[2],16),a=parseInt(n[3],16);return"rgba("+i+","+s+","+a+",1)"}function ad(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,s=e[4]||1;function a(d,f,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(f-d)*6*g:g<1/2?f:g<2/3?d+(f-d)*(2/3-g)*6:d}var o,l,c;if(n==0)o=l=c=i;else{var u=i<.5?i*(1+n):i+n-i*n,h=2*i-u;o=a(h,u,t+1/3),l=a(h,u,t),c=a(h,u,t-1/3)}return"rgba("+o*255+","+l*255+","+c*255+","+s+")"}function od(r){if(Ie.rgb(r))return rd(r);if(Ie.hex(r))return sd(r);if(Ie.hsl(r))return ad(r)}function On(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function ld(r){if(Vr(r,"translate")||r==="perspective")return"px";if(Vr(r,"rotate")||Vr(r,"skew"))return"deg"}function So(r,e){return Ie.fnc(r)?r(e.target,e.id,e.total):r}function bn(r,e){return r.getAttribute(e)}function qo(r,e,t){var n=On(e);if(Go([t,"deg","rad","turn"],n))return e;var i=ta.CSS[e+t];if(!Ie.und(i))return i;var s=100,a=document.createElement(r.tagName),o=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+t;var l=s/a.offsetWidth;o.removeChild(a);var c=l*parseFloat(e);return ta.CSS[e+t]=c,c}function Au(r,e,t){if(e in r.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=r.style[e]||getComputedStyle(r).getPropertyValue(n)||"0";return t?qo(r,i,t):i}}function Xo(r,e){if(Ie.dom(r)&&!Ie.inp(r)&&(!Ie.nil(bn(r,e))||Ie.svg(r)&&r[e]))return"attribute";if(Ie.dom(r)&&Go(td,e))return"transform";if(Ie.dom(r)&&e!=="transform"&&Au(r,e))return"css";if(r[e]!=null)return"object"}function Cu(r){if(Ie.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,i;i=t.exec(e);)n.set(i[1],i[2]);return n}}function cd(r,e,t,n){var i=Vr(e,"scale")?1:0+ld(e),s=Cu(r).get(e)||i;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?qo(r,s,n):s}function jo(r,e,t,n){switch(Xo(r,e)){case"transform":return cd(r,e,n,t);case"css":return Au(r,e,t);case"attribute":return bn(r,e);default:return r[e]||0}}function Yo(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var n=On(r)||0,i=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return i+s+n;case"-":return i-s+n;case"*":return i*s+n}}function Lu(r,e){if(Ie.col(r))return od(r);if(/\s/g.test(r))return r;var t=On(r),n=t?r.substr(0,r.length-t.length):r;return e?n+e:n}function Zo(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function ud(r){return Math.PI*2*bn(r,"r")}function hd(r){return bn(r,"width")*2+bn(r,"height")*2}function dd(r){return Zo({x:bn(r,"x1"),y:bn(r,"y1")},{x:bn(r,"x2"),y:bn(r,"y2")})}function Ru(r){for(var e=r.points,t=0,n,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);i>0&&(t+=Zo(n,s)),n=s}return t}function fd(r){var e=r.points;return Ru(r)+Zo(e.getItem(e.numberOfItems-1),e.getItem(0))}function Pu(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return ud(r);case"rect":return hd(r);case"line":return dd(r);case"polyline":return Ru(r);case"polygon":return fd(r)}}function pd(r){var e=Pu(r);return r.setAttribute("stroke-dasharray",e),e}function md(r){for(var e=r.parentNode;Ie.svg(e)&&Ie.svg(e.parentNode);)e=e.parentNode;return e}function Iu(r,e){var t=e||{},n=t.el||md(r),i=n.getBoundingClientRect(),s=bn(n,"viewBox"),a=i.width,o=i.height,l=t.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function gd(r,e){var t=Ie.str(r)?Eu(r)[0]:r,n=e||100;return function(i){return{property:i,el:t,svg:Iu(t),totalLength:Pu(t)*(n/100)}}}function vd(r,e,t){function n(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return r.el.getPointAtLength(h)}var i=Iu(r.el,r.svg),s=n(),a=n(-1),o=n(1),l=t?1:i.w/i.vW,c=t?1:i.h/i.vH;switch(r.property){case"x":return(s.x-i.x)*l;case"y":return(s.y-i.y)*c;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function Sl(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Lu(Ie.pth(r)?r.totalLength:r,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:Ie.str(r)||e?n.split(t):[]}}function Jo(r){var e=r?fa(Ie.arr(r)?r.map(wl):wl(r)):[];return da(e,function(t,n,i){return i.indexOf(t)===n})}function Du(r){var e=Jo(r);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:Cu(t)}}})}function xd(r,e){var t=Wo(e);if(/^spring/.test(t.easing)&&(t.duration=Su(t.easing)),Ie.arr(r)){var n=r.length,i=n===2&&!Ie.obj(r[0]);i?r={value:r}:Ie.fnc(e.duration)||(t.duration=e.duration/n)}var s=Ie.arr(r)?r:[r];return s.map(function(a,o){var l=Ie.obj(a)&&!Ie.pth(a)?a:{value:a};return Ie.und(l.delay)&&(l.delay=o?0:e.delay),Ie.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return pa(a,t)})}function _d(r){for(var e=da(fa(r.map(function(s){return Object.keys(s)})),function(s){return Ie.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),t={},n=function(s){var a=e[s];t[a]=r.map(function(o){var l={};for(var c in o)Ie.key(c)?c==a&&(l.value=o[c]):l[c]=o[c];return l})},i=0;i<e.length;i++)n(i);return t}function yd(r,e){var t=[],n=e.keyframes;n&&(e=pa(_d(n),e));for(var i in e)Ie.key(i)&&t.push({name:i,tweens:xd(e[i],r)});return t}function bd(r,e){var t={};for(var n in r){var i=So(r[n],e);Ie.arr(i)&&(i=i.map(function(s){return So(s,e)}),i.length===1&&(i=i[0])),t[n]=i}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function Md(r,e){var t;return r.tweens.map(function(n){var i=bd(n,e),s=i.value,a=Ie.arr(s)?s[1]:s,o=On(a),l=jo(e.target,r.name,o,e),c=t?t.to.original:l,u=Ie.arr(s)?s[0]:c,h=On(u)||On(l),d=o||h;return Ie.und(a)&&(a=c),i.from=Sl(u,d),i.to=Sl(Yo(a,u),d),i.start=t?t.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Ho(i.easing,i.duration),i.isPath=Ie.pth(s),i.isPathTargetInsideSVG=i.isPath&&Ie.svg(e.target),i.isColor=Ie.col(i.from.original),i.isColor&&(i.round=1),t=i,i})}var Fu={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,n,i){if(n.list.set(e,t),e===n.last||i){var s="";n.list.forEach(function(a,o){s+=o+"("+a+") "}),r.style.transform=s}}};function zu(r,e){var t=Du(r);t.forEach(function(n){for(var i in e){var s=So(e[i],n),a=n.target,o=On(s),l=jo(a,i,o,n),c=o||On(l),u=Yo(Lu(s,c),l),h=Xo(a,i);Fu[h](a,i,u,n.transforms,!0)}})}function wd(r,e){var t=Xo(r.target,e.name);if(t){var n=Md(e,r),i=n[n.length-1];return{type:t,property:e.name,animatable:r,tweens:n,duration:i.end,delay:n[0].delay,endDelay:i.endDelay}}}function Sd(r,e){return da(fa(r.map(function(t){return e.map(function(n){return wd(t,n)})})),function(t){return!Ie.und(t)})}function ku(r,e){var t=r.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},i={};return i.duration=t?Math.max.apply(Math,r.map(function(s){return n(s)+s.duration})):e.duration,i.delay=t?Math.min.apply(Math,r.map(function(s){return n(s)+s.delay})):e.delay,i.endDelay=t?i.duration-Math.max.apply(Math,r.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,i}var Tl=0;function Td(r){var e=wo(Mu,r),t=wo(Vo,r),n=yd(t,r),i=Du(r.targets),s=Sd(i,n),a=ku(s,t),o=Tl;return Tl++,pa(e,{id:o,children:[],animatables:i,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var dn=[],Nu=function(){var r;function e(){!r&&(!El()||!Ke.suspendWhenDocumentHidden)&&dn.length>0&&(r=requestAnimationFrame(t))}function t(i){for(var s=dn.length,a=0;a<s;){var o=dn[a];o.paused?(dn.splice(a,1),s--):(o.tick(i),a++)}r=a>0?requestAnimationFrame(t):void 0}function n(){Ke.suspendWhenDocumentHidden&&(El()?r=cancelAnimationFrame(r):(dn.forEach(function(i){return i._onDocumentVisibility()}),Nu()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function El(){return!!document&&document.hidden}function Ke(r){r===void 0&&(r={});var e=0,t=0,n=0,i,s=0,a=null;function o(m){var b=window.Promise&&new Promise(function(y){return a=y});return m.finished=b,b}var l=Td(r);o(l);function c(){var m=l.direction;m!=="alternate"&&(l.direction=m!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(b){return b.reversed=l.reversed})}function u(m){return l.reversed?l.duration-m:m}function h(){e=0,t=u(l.currentTime)*(1/Ke.speed)}function d(m,b){b&&b.seek(m-b.timelineOffset)}function f(m){if(l.reversePlayback)for(var y=s;y--;)d(m,i[y]);else for(var b=0;b<s;b++)d(m,i[b])}function g(m){for(var b=0,y=l.animations,_=y.length;b<_;){var E=y[b],C=E.animatable,I=E.tweens,Z=I.length-1,O=I[Z];Z&&(O=da(I,function(Q){return m<Q.end})[0]||O);for(var R=yn(m-O.start-O.delay,0,O.duration)/O.duration,M=isNaN(R)?1:O.easing(R),w=O.to.strings,z=O.round,F=[],D=O.to.numbers.length,k=void 0,$=0;$<D;$++){var ie=void 0,H=O.to.numbers[$],W=O.from.numbers[$]||0;O.isPath?ie=vd(O.value,M*H,O.isPathTargetInsideSVG):ie=W+M*(H-W),z&&(O.isColor&&$>2||(ie=Math.round(ie*z)/z)),F.push(ie)}var se=w.length;if(!se)k=F[0];else{k=w[0];for(var ee=0;ee<se;ee++){w[ee];var me=w[ee+1],Le=F[ee];isNaN(Le)||(me?k+=Le+me:k+=Le+" ")}}Fu[E.type](C.target,E.property,k,C.transforms),E.currentValue=k,b++}}function v(m){l[m]&&!l.passThrough&&l[m](l)}function x(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(m){var b=l.duration,y=l.delay,_=b-l.endDelay,E=u(m);l.progress=yn(E/b*100,0,100),l.reversePlayback=E<l.currentTime,i&&f(E),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),E<=y&&l.currentTime!==0&&g(0),(E>=_&&l.currentTime!==b||!b)&&g(b),E>y&&E<_?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),g(E)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=yn(E,0,b),l.began&&v("update"),m>=b&&(t=0,x(),l.remaining?(e=n,v("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var m=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=m==="reverse",l.remaining=l.loop,i=l.children,s=i.length;for(var b=s;b--;)l.children[b].reset();(l.reversed&&l.loop!==!0||m==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(m,b){return zu(m,b),l},l.tick=function(m){n=m,e||(e=n),p((n+(t-e))*Ke.speed)},l.seek=function(m){p(u(m))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,dn.push(l),h(),Nu())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(m){var b=Jo(m);Bu(b,l)},l.reset(),l.autoplay&&l.play(),l}function Al(r,e){for(var t=e.length;t--;)Go(r,e[t].animatable.target)&&e.splice(t,1)}function Bu(r,e){var t=e.animations,n=e.children;Al(r,t);for(var i=n.length;i--;){var s=n[i],a=s.animations;Al(r,a),!a.length&&!s.children.length&&n.splice(i,1)}!t.length&&!n.length&&e.pause()}function Ed(r){for(var e=Jo(r),t=dn.length;t--;){var n=dn[t];Bu(e,n)}}function Ad(r,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?Ho(e.easing):null,i=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",c=a==="last",u=Ie.arr(r),h=parseFloat(u?r[0]:r),d=u?parseFloat(r[1]):0,f=On(u?r[1]:r)||0,g=e.start||0+(u?h:0),v=[],x=0;return function(p,m,b){if(o&&(a=0),l&&(a=(b-1)/2),c&&(a=b-1),!v.length){for(var y=0;y<b;y++){if(!i)v.push(Math.abs(a-y));else{var _=l?(i[0]-1)/2:a%i[0],E=l?(i[1]-1)/2:Math.floor(a/i[0]),C=y%i[0],I=Math.floor(y/i[0]),Z=_-C,O=E-I,R=Math.sqrt(Z*Z+O*O);s==="x"&&(R=-Z),s==="y"&&(R=-O),v.push(R)}x=Math.max.apply(Math,v)}n&&(v=v.map(function(w){return n(w/x)*x})),t==="reverse"&&(v=v.map(function(w){return s?w<0?w*-1:-w:Math.abs(x-w)}))}var M=u?(d-h)/x:h;return g+M*(Math.round(v[m]*100)/100)+f}}function Cd(r){r===void 0&&(r={});var e=Ke(r);return e.duration=0,e.add=function(t,n){var i=dn.indexOf(e),s=e.children;i>-1&&dn.splice(i,1);function a(d){d.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=pa(t,wo(Vo,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Ie.und(n)?c:Yo(n,c),a(e),e.seek(l.timelineOffset);var u=Ke(l);a(u),s.push(u);var h=ku(s,r);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Ke.version="3.2.1";Ke.speed=1;Ke.suspendWhenDocumentHidden=!0;Ke.running=dn;Ke.remove=Ed;Ke.get=jo;Ke.set=zu;Ke.convertPx=qo;Ke.path=gd;Ke.setDashoffset=pd;Ke.stagger=Ad;Ke.timeline=Cd;Ke.easing=Ho;Ke.penner=Tu;Ke.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};function Ld(r){return{c:K,l:K,m:K,d:K}}function Rd(r){let e,t;return{c(){e=X("img"),this.h()},l(n){e=j(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ir(e.src,t=r[23])||N(e,"src",t),N(e,"alt",""),N(e,"class","svelte-9dxg2d")},m(n,i){Be(n,e,i)},d(n){n&&V(e)}}}function Pd(r){return{c:K,l:K,m:K,d:K}}function Id(r){return{c:K,l:K,m:K,p:K,d:K}}function Dd(r){let e,t;return{c(){e=X("img"),this.h()},l(n){e=j(n,"IMG",{src:!0,draggable:!0,alt:!0,style:!0,class:!0}),this.h()},h(){ir(e.src,t=r[23])||N(e,"src",t),N(e,"draggable","false"),N(e,"alt","Home Background"),Ye(e,"width","100%"),Ye(e,"height","100%"),Ye(e,"object-fit","cover"),N(e,"class","svelte-9dxg2d")},m(n,i){Be(n,e,i),r[15](e)},p:K,d(n){n&&V(e),r[15](null)}}}function Fd(r){return{c:K,l:K,m:K,p:K,d:K}}function zd(r){let e,t,n,i,s,a,o,l,c,u,h,d,f,g="Ghanshyam",v,x,p,m,b,y="Nair",_,E,C,I="Web Developer and an AI/ML Graduate from Bangalore,India",Z,O,R,M,w,z,F="scroll",D,k,$={ctx:r,current:null,token:null,hasCatch:!1,pending:Pd,then:Rd,catch:Ld,value:23};Mn(jr("assets/imgs/scroll_arrow.png"),$);let ie={ctx:r,current:null,token:null,hasCatch:!1,pending:Fd,then:Dd,catch:Id,value:23};return Mn(jr("assets/imgs/home-back.jpg"),ie),{c(){e=X("div"),t=X("div"),n=X("div"),i=X("div"),s=ti("svg"),a=ti("g"),o=ti("path"),l=ti("path"),c=Re(),u=X("div"),h=X("h1"),d=X("div"),f=X("div"),f.textContent=g,v=Re(),x=X("br"),p=Re(),m=X("div"),b=X("div"),b.textContent=y,_=Re(),E=X("div"),C=X("p"),C.textContent=I,Z=Re(),O=X("div"),R=X("div"),M=X("div"),$.block.c(),w=Re(),z=X("div"),z.textContent=F,D=Re(),k=X("div"),ie.block.c(),this.h()},l(H){e=j(H,"DIV",{id:!0,style:!0,class:!0});var W=ue(e);t=j(W,"DIV",{class:!0});var se=ue(t);n=j(se,"DIV",{class:!0});var ee=ue(n);i=j(ee,"DIV",{class:!0});var me=ue(i);s=ni(me,"svg",{id:!0,class:!0,x:!0,y:!0,viewBox:!0});var Le=ue(s);a=ni(Le,"g",{class:!0});var Q=ue(a);o=ni(Q,"path",{class:!0,transform:!0,style:!0,d:!0}),ue(o).forEach(V),l=ni(Q,"path",{class:!0,transform:!0,style:!0,d:!0}),ue(l).forEach(V),Q.forEach(V),Le.forEach(V),me.forEach(V),c=Pe(ee),u=j(ee,"DIV",{class:!0});var Me=ue(u);h=j(Me,"H1",{class:!0});var we=ue(h);d=j(we,"DIV",{class:!0});var ge=ue(d);f=j(ge,"DIV",{class:!0,"data-svelte-h":!0}),Qe(f)!=="svelte-12qp0w6"&&(f.textContent=g),v=Pe(ge),ge.forEach(V),x=j(we,"BR",{class:!0}),p=Pe(we),m=j(we,"DIV",{class:!0});var Te=ue(m);b=j(Te,"DIV",{class:!0,"data-svelte-h":!0}),Qe(b)!=="svelte-1hstvtd"&&(b.textContent=y),Te.forEach(V),we.forEach(V),_=Pe(Me),E=j(Me,"DIV",{class:!0});var Oe=ue(E);C=j(Oe,"P",{class:!0,"data-svelte-h":!0}),Qe(C)!=="svelte-1ntlsc1"&&(C.textContent=I),Oe.forEach(V),Z=Pe(Me),O=j(Me,"DIV",{class:!0});var q=ue(O);R=j(q,"DIV",{class:!0});var re=ue(R);M=j(re,"DIV",{class:!0});var le=ue(M);$.block.l(le),le.forEach(V),w=Pe(re),z=j(re,"DIV",{class:!0,"data-svelte-h":!0}),Qe(z)!=="svelte-1abg4og"&&(z.textContent=F),re.forEach(V),q.forEach(V),Me.forEach(V),D=Pe(ee),k=j(ee,"DIV",{class:!0});var _e=ue(k);ie.block.l(_e),_e.forEach(V),ee.forEach(V),se.forEach(V),W.forEach(V),this.h()},h(){N(o,"class","path-1 svelte-9dxg2d"),N(o,"transform","translate(0, 20)"),Ye(o,"fill","none"),Ye(o,"stroke","#ffffff"),Ye(o,"stroke-width","2.5"),Ye(o,"stroke-linecap","round"),Ye(o,"stroke-linejoin","miter"),Ye(o,"stroke-opacity","1"),Ye(o,"stroke-miterlimit","4"),N(o,"d","M41.781 3.08602C43.6916 3.08602 38.0052 3.72698 36.1719 4.265C28.1917 6.60704 19.8682 9.87472 13.3427 15.1616C2.8357 23.6742 -0.591488 40.5423 5.41141 52.6744C9.29507 60.5235 18.2162 62.7335 26.3114 63.1066C33.9855 63.4602 39.5675 62.738 47.3901 61.4632C69.5646 57.8495 91.3419 51.7992 113.02 46.0293C155.421 34.7437 198.28 24.6196 240.42 12.4106C251.286 9.26261 261.963 5.49772 272.646 1.79987"),N(l,"class","path-2 svelte-9dxg2d"),N(l,"transform","translate(60, -9)"),Ye(l,"fill","none"),Ye(l,"stroke","#ffffff"),Ye(l,"stroke-width","2.5"),Ye(l,"stroke-linecap","round"),Ye(l,"stroke-linejoin","miter"),Ye(l,"stroke-opacity","1"),Ye(l,"stroke-miterlimit","4"),N(l,"d","M2.23029 106.963C2.23029 111.718 3.86929 97.59 4.9455 92.9582C9.7298 72.3675 14.1793 51.6685 16.6638 30.6511C17.5641 23.035 20.2748 7.83064 11.5192 2.85589C7.11408 0.35299 5.17386 7.15812 4.58824 10.0726C2.11129 22.3998 3.85593 36.4234 9.44704 47.6569C18.7374 66.3228 36.4604 78.7757 49.032 94.9589C53.1837 100.303 58.4543 108.55 54.1767 115.394C50.3906 121.452 36.5392 118.449 31.133 117.109C24.5038 115.467 19.3347 112.396 13.8771 108.606C9.25862 105.399 15.5142 103.944 18.593 101.926C33.468 92.1756 47.8984 79.4936 58.3924 65.0915C65.8918 54.7991 69.9676 42.7552 67.7885 30.0438C67.5524 28.6667 67.3405 22.2718 64.8589 25.185C61.1838 29.4992 59.8262 35.885 59.2855 41.3334C58.7794 46.4335 58.804 51.6199 59.1069 56.7315C59.2615 59.3406 58.9139 66.7018 61.0361 68.8785C62.071 69.9399 67.1276 63.86 68.0385 63.1623C69.6482 61.9293 70.89 64.0751 71.8256 65.1629C74.1895 67.9117 74.7793 66.8972 77.6133 67.8782C78.2582 68.1014 79.3172 69.2123 80.0427 69.0214C81.7714 68.5665 82.2547 63.6163 82.4721 62.2334C82.9452 59.2225 83.45 60.5915 84.044 62.9479C86.7921 73.8485 91.5395 84.0697 94.2618 94.9589C94.562 96.1597 94.9458 102.059 95.9767 103.319C96.1654 103.549 96.0236 102.723 96.0124 102.426C95.9568 100.952 95.5208 95.2701 95.4765 94.6016C94.8565 85.2397 94.1429 75.5343 95.4765 66.199C96.325 60.2598 95.8827 63.8768 98.9777 63.8768C100.089 63.8768 100.986 64.5199 102.3 64.5199C108.449 64.5199 115.552 60.2614 121.2 58.0891"),N(a,"class","svelte-9dxg2d"),N(s,"id","signature"),N(s,"class","h-signature svelte-9dxg2d"),N(s,"x","0px"),N(s,"y","0px"),N(s,"viewBox","-20 -20 190 136.9"),N(i,"class","flex-wrapper first svelte-9dxg2d"),N(f,"class","word svelte-9dxg2d"),N(d,"class","title-mask svelte-9dxg2d"),N(x,"class","svelte-9dxg2d"),N(b,"class","word svelte-9dxg2d"),N(m,"class","title-mask svelte-9dxg2d"),N(h,"class","title svelte-9dxg2d"),N(C,"class","paragraph svelte-9dxg2d"),N(E,"class","occupation mask svelte-9dxg2d"),N(M,"class","mask svelte-9dxg2d"),N(z,"class","svelte-9dxg2d"),N(R,"class","action svelte-9dxg2d"),N(O,"class","wrapper action-mask svelte-9dxg2d"),N(u,"class","flex-wrapper second svelte-9dxg2d"),N(k,"class","parallax-wrapper home-back svelte-9dxg2d"),N(n,"class","flex svelte-9dxg2d"),N(t,"class","content-wrapper svelte-9dxg2d"),N(e,"id","content-container"),Ye(e,"padding-top","23vh"),N(e,"class","svelte-9dxg2d")},m(H,W){Be(H,e,W),B(e,t),B(t,n),B(n,i),B(i,s),B(s,a),B(a,o),r[9](o),B(a,l),r[10](l),B(n,c),B(n,u),B(u,h),B(h,d),B(d,f),r[11](f),B(d,v),B(h,x),B(h,p),B(h,m),B(m,b),r[12](b),B(u,_),B(u,E),B(E,C),r[13](C),B(u,Z),B(u,O),B(O,R),B(R,M),$.block.m(M,$.anchor=null),$.mount=()=>M,$.anchor=null,B(R,w),B(R,z),r[14](R),B(n,D),B(n,k),ie.block.m(k,ie.anchor=null),ie.mount=()=>k,ie.anchor=null,r[16](k),r[17](e)},p(H,[W]){r=H,Xr(ie,r,W)},i:K,o:K,d(H){H&&V(e),r[9](null),r[10](null),r[11](null),r[12](null),r[13](null),$.block.d(),$.token=null,$=null,r[14](null),ie.block.d(),ie.token=null,ie=null,r[16](null),r[17](null)}}}function kd(r,e,t){let n,i;Kt(r,Ks,I=>t(18,n=I)),Kt(r,yo,I=>t(19,i=I));let s,a,o,l,c,u,h,d,f;lr(async()=>{await cr,qr(yo,i=s,i),n.addOffset({element:a,speedY:.8}),g()});function g(){const I=[{strokeDashoffset:"0"}];d.animate(I,{duration:1e3,delay:0,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),f.animate(I,{duration:1200,delay:1e3,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),Object.assign(a.style,{height:"0",transform:"scale(1.3)"}),t(2,o.style.transform="translateY(80%) scale(1.4)",o),Ke({targets:a,height:"100%",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500,complete:()=>{t(1,a.style.boxShadow="3px 9px 18px rgba(0, 0, 0, 0.2)",a)}}),Ke({targets:o,translateY:"0",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500});const Z=[l,c,u,h];Z.forEach(O=>{O.style.transform="translateY(130%) rotate(10deg)"}),Ke({targets:Z,rotate:"0",translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:900,delay:Ke.stagger(80,{start:500})})}function v(I){lt[I?"unshift":"push"](()=>{d=I,t(7,d)})}function x(I){lt[I?"unshift":"push"](()=>{f=I,t(8,f)})}function p(I){lt[I?"unshift":"push"](()=>{l=I,t(3,l)})}function m(I){lt[I?"unshift":"push"](()=>{c=I,t(4,c)})}function b(I){lt[I?"unshift":"push"](()=>{u=I,t(5,u)})}function y(I){lt[I?"unshift":"push"](()=>{h=I,t(6,h)})}function _(I){lt[I?"unshift":"push"](()=>{o=I,t(2,o)})}function E(I){lt[I?"unshift":"push"](()=>{a=I,t(1,a)})}function C(I){lt[I?"unshift":"push"](()=>{s=I,t(0,s)})}return[s,a,o,l,c,u,h,d,f,v,x,p,m,b,y,_,E,C]}class Nd extends ui{constructor(e){super(),hi(this,e,kd,zd,Hn,{})}}function La(r,e,t,n){return new(t||(t=Promise))(function(i,s){function a(c){try{l(n.next(c))}catch(u){s(u)}}function o(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(a,o)}l((n=n.apply(r,e||[])).next())})}const Bd=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function Cl(r){return r=r.toLowerCase().replace(/^angle ?\((.+)\)*$/,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Ou=typeof window>"u",Kn=(()=>{if(Ou)return;const{userAgent:r,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(r),i=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:i,isMobile:/android/i.test(r)||n||i,isSafari12:/Version\/12.+Safari/.test(r)}})();function Od(r,e,t){if(!t)return[e];const n=function(c){const u=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,h=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,d=c.createShader(35633),f=c.createShader(35632),g=c.createProgram();if(!(f&&d&&g))return;c.shaderSource(d,u),c.shaderSource(f,h),c.compileShader(d),c.compileShader(f),c.attachShader(g,d),c.attachShader(g,f),c.linkProgram(g),c.detachShader(g,d),c.detachShader(g,f),c.deleteShader(d),c.deleteShader(f),c.useProgram(g);const v=c.createBuffer();c.bindBuffer(34962,v),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const x=c.getAttribLocation(g,"aPosition");c.vertexAttribPointer(x,3,5126,!1,0,0),c.enableVertexAttribArray(x),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const p=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,p),c.deleteProgram(g),c.deleteBuffer(v),p.join("")}(r),i="801621810",s="8016218135",a="80162181161",o=Kn?.isIpad?[["a7",a,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",i,15],["a12x",i,15],["a12z",i,15],["a14",i,15],["m1",i,15]]:[["a7",a,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",i,15],["a12",i,15],["a13",i,15],["a14",i,15]];let l;return n==="80162181255"?l=o.filter(([,,c])=>c>=14):(l=o.filter(([,c])=>c===n),l.length||(l=o)),l.map(([c])=>`apple ${c} gpu`)}const Ra=[],Ll=[];function Ud(r,e){if(r===e)return 0;const t=r;r.length>e.length&&(r=e,e=t);let n=r.length,i=e.length;for(;n>0&&r.charCodeAt(~-n)===e.charCodeAt(~-i);)n--,i--;let s,a=0;for(;a<n&&r.charCodeAt(a)===e.charCodeAt(a);)a++;if(n-=a,i-=a,n===0)return i;let o,l,c=0,u=0,h=0;for(;u<n;)Ll[u]=r.charCodeAt(a+u),Ra[u]=++u;for(;h<i;)for(s=e.charCodeAt(a+h),o=h++,c=h,u=0;u<n;u++)l=s===Ll[u]?o:o+1,o=Ra[u],c=Ra[u]=o>c?l>c?c+1:l:l>o?o+1:l;return c}function Vd(r){return r!=null}class Rl extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const Pl=({mobileTiers:r=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@4.0.50/dist/benchmarks"}={})=>La(void 0,void 0,void 0,function*(){const a={};if(Ou)return{tier:0,type:"SSR"};const{isIpad:o=!!Kn?.isIpad,isMobile:l=!!Kn?.isMobile,screenSize:c=window.screen,loadBenchmarks:u=_=>La(void 0,void 0,void 0,function*(){const E=yield fetch(`${s}/${_}`).then(C=>C.json());if(parseInt(E.shift().split(".")[0],10)<4)throw new Rl("Detect GPU benchmark data is out of date. Please update to version 4x");return E})}=t;let{renderer:h}=t;const d=(_,E,C,I,Z)=>({device:Z,fps:I,gpu:C,isMobile:l,tier:_,type:E});let f,g="";if(h)h=Cl(h),f=[h];else{const _=n||function(C,I=!1){const Z={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:I,powerPreference:"high-performance",stencil:!1};C&&delete Z.powerPreference;const O=window.document.createElement("canvas"),R=O.getContext("webgl",Z)||O.getContext("experimental-webgl",Z);return R??void 0}(Kn?.isSafari12,i);if(!_)return d(0,"WEBGL_UNSUPPORTED");const E=_.getExtension("WEBGL_debug_renderer_info");if(E&&(h=_.getParameter(E.UNMASKED_RENDERER_WEBGL)),!h)return d(1,"FALLBACK");g=h,h=Cl(h),f=function(C,I,Z){return I==="apple gpu"?Od(C,I,Z):[I]}(_,h,l)}const v=(yield Promise.all(f.map(function(_){var E;return La(this,void 0,void 0,function*(){const C=(se=>{const ee=l?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const me of ee)if(se.includes(me))return me})(_);if(!C)return;const I=`${l?"m":"d"}-${C}${o?"-ipad":""}.json`,Z=a[I]=(E=a[I])!==null&&E!==void 0?E:u(I);let O;try{O=yield Z}catch(se){if(se instanceof Rl)throw se;return}const R=function(se){var ee;const me=(se=se.replace(/\([^)]+\)/,"")).match(/\d+/)||se.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(ee=me?.join("").replace(/\W|amd/g,""))!==null&&ee!==void 0?ee:""}(_);let M=O.filter(([,se])=>se===R);M.length||(M=O.filter(([se])=>se.includes(_)));const w=M.length;if(w===0)return;let z,[F,,,D]=w>1?M.map(se=>[se,Ud(_,se[0])]).sort(([,se],[,ee])=>se-ee)[0][0]:M[0],k=Number.MAX_VALUE;const{devicePixelRatio:$}=window,ie=c.width*$*c.height*$;for(const se of D){const[ee,me]=se,Le=ee*me,Q=Math.abs(ie-Le);Q<k&&(k=Q,z=se)}if(!z)return;const[,,H,W]=z;return[k,H,F,W]})}))).filter(Vd).sort(([_=Number.MAX_VALUE,E],[C=Number.MAX_VALUE,I])=>_===C?E-I:_-C);if(!v.length){const _=Bd.find(E=>h.includes(E));return _?d(0,"BLOCKLISTED",_):d(1,"FALLBACK",`${h} (${g})`)}const[,x,p,m]=v[0];if(x===-1)return d(0,"BLOCKLISTED",p,x,m);const b=l?r:e;let y=0;for(let _=0;_<b.length;_++)x>=b[_]&&(y=_);return d(y,"BENCHMARK",p,x,m)});function Hd(r){return--r*r*r*r*r+1}function Il(r,{delay:e=0,duration:t=400,easing:n=Xh}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="136",Gd=0,Dl=1,Wd=2,Uu=1,qd=2,zr=3,Yr=0,xt=1,rr=2,Vu=1,ii=0,Hr=1,Fl=2,zl=3,kl=4,Xd=5,Ji=100,jd=101,Yd=102,Nl=103,Bl=104,Zd=200,Jd=201,$d=202,Qd=203,Hu=204,Gu=205,Kd=206,ef=207,tf=208,nf=209,rf=210,sf=0,af=1,of=2,To=3,lf=4,cf=5,uf=6,hf=7,ma=0,df=1,ff=2,ri=0,pf=1,mf=2,gf=3,vf=4,xf=5,Wu=300,ns=301,is=302,Eo=303,Ao=304,ga=306,Qo=307,Co=1e3,Qt=1001,Lo=1002,_t=1003,Ol=1004,Ul=1005,Bt=1006,_f=1007,va=1008,Un=1009,yf=1010,bf=1011,Zr=1012,Mf=1013,Zs=1014,ei=1015,Si=1016,wf=1017,Sf=1018,Tf=1019,tr=1020,Ef=1021,Ti=1022,Tt=1023,Af=1024,Cf=1025,Ei=1026,sr=1027,Lf=1028,Rf=1029,Pf=1030,If=1031,Df=1032,Ff=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,ql=35840,Xl=35841,jl=35842,Yl=35843,zf=36196,Zl=37492,Jl=37496,kf=37808,Nf=37809,Bf=37810,Of=37811,Uf=37812,Vf=37813,Hf=37814,Gf=37815,Wf=37816,qf=37817,Xf=37818,jf=37819,Yf=37820,Zf=37821,Jf=36492,$f=37840,Qf=37841,Kf=37842,ep=37843,tp=37844,np=37845,ip=37846,rp=37847,sp=37848,ap=37849,op=37850,lp=37851,cp=37852,up=37853,hp=2200,dp=2201,fp=2202,na=2300,ia=2301,Pa=2302,Qi=2400,Ki=2401,ra=2402,Ko=2500,qu=2501,pp=0,fn=3e3,ur=3001,mp=3200,gp=3201,hr=0,vp=1,Ia=7680,xp=519,Jr=35044,sa=35048,$l="300 es";class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ct=[];for(let r=0;r<256;r++)Ct[r]=(r<16?"0":"")+r.toString(16);const Da=Math.PI/180,Ro=180/Math.PI;function wn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toUpperCase()}function $t(r,e,t){return Math.max(e,Math.min(t,r))}function _p(r,e){return(r%e+e)%e}function Fa(r,e,t){return(1-t)*r+t*e}function Ql(r){return(r&r-1)===0&&r!==0}function yp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class de{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}de.prototype.isVector2=!0;class Lt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=i[0],x=i[3],p=i[6],m=i[1],b=i[4],y=i[7],_=i[2],E=i[5],C=i[8];return s[0]=a*v+o*m+l*_,s[3]=a*x+o*b+l*E,s[6]=a*p+o*y+l*C,s[1]=c*v+u*m+h*_,s[4]=c*x+u*b+h*E,s[7]=c*p+u*y+h*C,s[2]=d*v+f*m+g*_,s[5]=d*x+f*b+g*E,s[8]=d*p+f*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Lt.prototype.isMatrix3=!0;function Xu(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}let Pi;class dr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=xa("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let bp=0;class At extends Ai{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Qt,i=Qt,s=Bt,a=va,o=Tt,l=Un,c=1,u=fn){super(),Object.defineProperty(this,"id",{value:bp++}),this.uuid=wn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=wn()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(za(i[a].image)):s.push(za(i[a]))}else s=za(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}At.DEFAULT_IMAGE=void 0;At.DEFAULT_MAPPING=Wu;At.prototype.isTexture=!0;function za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dr.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class ct{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(f+1)/2,_=(p+1)/2,E=(u+d)/4,C=(h+v)/4,I=(g+x)/4;return b>y&&b>_?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=C/n):y>_?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=I/i):_<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(_),n=C/s,i=I/s),this.set(n,i,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(h-v)/m,this.z=(d-u)/m,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}ct.prototype.isVector4=!0;class sn extends Ai{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.texture=new At(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}sn.prototype.isWebGLRenderTarget=!0;class Mp extends sn{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Mp.prototype.isWebGLMultipleRenderTargets=!0;class el extends sn{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}el.prototype.isWebGLMultisampleRenderTarget=!0;class qt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let x=1-o;const p=l*d+c*f+u*g+h*v,m=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const _=Math.sqrt(b),E=Math.atan2(_,p*m);x=Math.sin(x*E)/_,o=Math.sin(o*E)/_}const y=o*m;if(l=l*x+d*y,c=c*x+f*y,u=u*x+g*y,h=h*x+v*y,x===1-o){const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}qt.prototype.isQuaternion=!0;class P{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}P.prototype.isVector3=!0;const ka=new P,Kl=new qt;class pn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox),Na.applyMatrix4(e.matrixWorld),this.union(Na));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tr),Tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),fs.subVectors(this.max,Er),Ii.subVectors(e.a,Er),Di.subVectors(e.b,Er),Fi.subVectors(e.c,Er),Wn.subVectors(Di,Ii),qn.subVectors(Fi,Di),mi.subVectors(Ii,Fi);let t=[0,-Wn.z,Wn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Wn.z,0,-Wn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Wn.y,Wn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!Ba(t,Ii,Di,Fi,fs)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Ii,Di,Fi,fs))?!1:(ps.crossVectors(Wn,qn),t=[ps.x,ps.y,ps.z],Ba(t,Ii,Di,Fi,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Tr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}pn.prototype.isBox3=!0;const Ln=[new P,new P,new P,new P,new P,new P,new P,new P],Tr=new P,Na=new pn,Ii=new P,Di=new P,Fi=new P,Wn=new P,qn=new P,mi=new P,Er=new P,fs=new P,ps=new P,gi=new P;function Ba(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){gi.fromArray(r,s);const o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wp=new pn,ec=new P,ms=new P,Oa=new P;class fr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Oa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?ms.set(0,0,1).multiplyScalar(e.radius):ms.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ec.copy(e.center).add(ms)),this.expandByPoint(ec.copy(e.center).sub(ms)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new P,Ua=new P,gs=new P,Xn=new P,Va=new P,vs=new P,Ha=new P;class pr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.direction).multiplyScalar(t).add(this.origin),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ua.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Ua);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gs),o=Xn.dot(this.direction),l=-Xn.dot(gs),c=Xn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(gs).multiplyScalar(d).add(Ua),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,s){Va.subVectors(t,e),vs.subVectors(n,e),Ha.crossVectors(Va,vs);let a=this.direction.dot(Ha),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(vs.crossVectors(Xn,vs));if(l<0)return null;const c=o*this.direction.dot(Va.cross(Xn));if(c<0||l+c>a)return null;const u=-o*Xn.dot(Ha);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,v,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,Tp)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),jn.crossVectors(n,Yt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),jn.crossVectors(n,Yt)),jn.normalize(),xs.crossVectors(Yt,jn),i[0]=jn.x,i[4]=xs.x,i[8]=Yt.x,i[1]=jn.y,i[5]=xs.y,i[9]=Yt.y,i[2]=jn.z,i[6]=xs.z,i[10]=Yt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],x=n[10],p=n[14],m=n[3],b=n[7],y=n[11],_=n[15],E=i[0],C=i[4],I=i[8],Z=i[12],O=i[1],R=i[5],M=i[9],w=i[13],z=i[2],F=i[6],D=i[10],k=i[14],$=i[3],ie=i[7],H=i[11],W=i[15];return s[0]=a*E+o*O+l*z+c*$,s[4]=a*C+o*R+l*F+c*ie,s[8]=a*I+o*M+l*D+c*H,s[12]=a*Z+o*w+l*k+c*W,s[1]=u*E+h*O+d*z+f*$,s[5]=u*C+h*R+d*F+f*ie,s[9]=u*I+h*M+d*D+f*H,s[13]=u*Z+h*w+d*k+f*W,s[2]=g*E+v*O+x*z+p*$,s[6]=g*C+v*R+x*F+p*ie,s[10]=g*I+v*M+x*D+p*H,s[14]=g*Z+v*w+x*k+p*W,s[3]=m*E+b*O+y*z+_*$,s[7]=m*C+b*R+y*F+_*ie,s[11]=m*I+b*M+y*D+_*H,s[15]=m*Z+b*w+y*k+_*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],x=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+x*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],x=e[14],p=e[15],m=h*x*c-v*d*c+v*l*f-o*x*f-h*l*p+o*d*p,b=g*d*c-u*x*c-g*l*f+a*x*f+u*l*p-a*d*p,y=u*v*c-g*h*c+g*o*f-a*v*f-u*o*p+a*h*p,_=g*h*l-u*v*l-g*o*d+a*v*d+u*o*x-a*h*x,E=t*m+n*b+i*y+s*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=m*C,e[1]=(v*d*s-h*x*s-v*i*f+n*x*f+h*i*p-n*d*p)*C,e[2]=(o*x*s-v*l*s+v*i*c-n*x*c-o*i*p+n*l*p)*C,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*C,e[4]=b*C,e[5]=(u*x*s-g*d*s+g*i*f-t*x*f-u*i*p+t*d*p)*C,e[6]=(g*l*s-a*x*s-g*i*c+t*x*c+a*i*p-t*l*p)*C,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*C,e[8]=y*C,e[9]=(g*h*s-u*v*s-g*n*f+t*v*f+u*n*p-t*h*p)*C,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*p+t*o*p)*C,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*C,e[12]=_*C,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*x+t*h*x)*C,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*x-t*o*x)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,v=a*u,x=a*h,p=o*h,m=l*c,b=l*u,y=l*h,_=n.x,E=n.y,C=n.z;return i[0]=(1-(v+p))*_,i[1]=(f+y)*_,i[2]=(g-b)*_,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(x+m)*E,i[7]=0,i[8]=(g+b)*C,i[9]=(x-m)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=zi.set(i[0],i[1],i[2]).length();const a=zi.set(i[4],i[5],i[6]).length(),o=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/s,u=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*c,f=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ze.prototype.isMatrix4=!0;const zi=new P,ln=new ze,Sp=new P(0,0,0),Tp=new P(1,1,1),jn=new P,xs=new P,Yt=new P,tc=new ze,nc=new qt;class mr{constructor(e=0,t=0,n=0,i=mr.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new P(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}mr.prototype.isEuler=!0;mr.DefaultOrder="XYZ";mr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ju{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ep=0;const ic=new P,ki=new qt,Pn=new ze,_s=new P,Ar=new P,Ap=new P,Cp=new qt,rc=new P(1,0,0),sc=new P(0,1,0),ac=new P(0,0,1),Lp={type:"added"},oc={type:"removed"};class st extends Ai{constructor(){super(),Object.defineProperty(this,"id",{value:Ep++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DefaultUp.clone();const e=new P,t=new mr,n=new qt,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Lt}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=st.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ar,_s,this.up):Pn.lookAt(_s,Ar,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Pn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DefaultUp=new P(0,1,0);st.DefaultMatrixAutoUpdate=!0;st.prototype.isObject3D=!0;const cn=new P,In=new P,Ga=new P,Dn=new P,Ni=new P,Bi=new P,lc=new P,Wa=new P,qa=new P,Xa=new P;class yt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),In.subVectors(n,t),Ga.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(In),l=cn.dot(Ga),c=In.dot(In),u=In.dot(Ga),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Dn),l.set(0,0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),In.subVectors(e,t),cn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return yt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ni.subVectors(i,n),Bi.subVectors(s,n),Wa.subVectors(e,n);const l=Ni.dot(Wa),c=Bi.dot(Wa);if(l<=0&&c<=0)return t.copy(n);qa.subVectors(e,i);const u=Ni.dot(qa),h=Bi.dot(qa);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ni,a);Xa.subVectors(e,s);const f=Ni.dot(Xa),g=Bi.dot(Xa);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Bi,o);const x=u*g-f*h;if(x<=0&&h-u>=0&&f-g>=0)return lc.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(lc,o);const p=1/(x+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rp=0;class Ft extends Ai{constructor(){super(),Object.defineProperty(this,"id",{value:Rp++}),this.uuid=wn(),this.name="",this.type="Material",this.fog=!0,this.blending=Hr,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.format=Tt,this.transparent=!1,this.blendSrc=Hu,this.blendDst=Gu,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Vu;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Yr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==Tt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Ft.prototype.isMaterial=!0;const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},ys={h:0,s:0,l:0};function ja(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Za(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class De{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=_p(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=ja(s,i,e+1/3),this.g=ja(s,i,e),this.b=ja(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Yu[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(ys);const n=Fa(un.h,ys.h,t),i=Fa(un.s,ys.s,t),s=Fa(un.l,ys.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}De.NAMES=Yu;De.prototype.isColor=!0;De.prototype.r=1;De.prototype.g=1;De.prototype.b=1;class tl extends Ft{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}tl.prototype.isMeshBasicMaterial=!0;const ut=new P,bs=new de;class bt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Jr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new De),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new de),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new P),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new ct),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.x=this.getX(t),ut.y=this.getY(t),ut.z=this.getZ(t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.x=this.getX(t),ut.y=this.getY(t),ut.z=this.getZ(t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.x=this.getX(t),ut.y=this.getY(t),ut.z=this.getZ(t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}bt.prototype.isBufferAttribute=!0;class Zu extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ju extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pp extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Pp.prototype.isFloat16BufferAttribute=!0;class Et extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ip=0;const en=new ze,Ja=new st,Oi=new P,Zt=new pn,Cr=new pn,Mt=new P;class dt extends Ai{constructor(){super(),Object.defineProperty(this,"id",{value:Ip++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)>65535?Ju:Zu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Zt.min,Cr.min),Zt.expandByPoint(Mt),Mt.addVectors(Zt.max,Cr.max),Zt.expandByPoint(Mt)):(Zt.expandByPoint(Cr.min),Zt.expandByPoint(Cr.max))}Zt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),Mt.add(Oi)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new bt(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let O=0;O<o;O++)c[O]=new P,u[O]=new P;const h=new P,d=new P,f=new P,g=new de,v=new de,x=new de,p=new P,m=new P;function b(O,R,M){h.fromArray(i,O*3),d.fromArray(i,R*3),f.fromArray(i,M*3),g.fromArray(a,O*2),v.fromArray(a,R*2),x.fromArray(a,M*2),d.sub(h),f.sub(h),v.sub(g),x.sub(g);const w=1/(v.x*x.y-x.x*v.y);isFinite(w)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(w),m.copy(f).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(w),c[O].add(p),c[R].add(p),c[M].add(p),u[O].add(m),u[R].add(m),u[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let O=0,R=y.length;O<R;++O){const M=y[O],w=M.start,z=M.count;for(let F=w,D=w+z;F<D;F+=3)b(n[F+0],n[F+1],n[F+2])}const _=new P,E=new P,C=new P,I=new P;function Z(O){C.fromArray(s,O*3),I.copy(C);const R=c[O];_.copy(R),_.sub(C.multiplyScalar(C.dot(R))).normalize(),E.crossVectors(I,R);const w=E.dot(u[O])<0?-1:1;l[O*4]=_.x,l[O*4+1]=_.y,l[O*4+2]=_.z,l[O*4+3]=w}for(let O=0,R=y.length;O<R;++O){const M=y[O],w=M.start,z=M.count;for(let F=w,D=w+z;F<D;F+=3)Z(n[F+0]),Z(n[F+1]),Z(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}dt.prototype.isBufferGeometry=!0;const cc=new ze,Ui=new pr,$a=new fr,Yn=new P,Zn=new P,Jn=new P,Qa=new P,Ka=new P,eo=new P,Ms=new P,ws=new P,Ss=new P,Ts=new de,Es=new de,As=new de,to=new P,Cs=new P;class Ot extends st{constructor(e=new dt,t=new tl){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),e.ray.intersectsSphere($a)===!1)||(cc.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(cc),n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const p=f[v],m=i[p.materialIndex],b=Math.max(p.start,g.start),y=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let _=b,E=y;_<E;_+=3){const C=o.getX(_),I=o.getX(_+1),Z=o.getX(_+2);a=Ls(this,m,e,Ui,l,c,u,h,d,C,I,Z),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const b=o.getX(p),y=o.getX(p+1),_=o.getX(p+2);a=Ls(this,i,e,Ui,l,c,u,h,d,b,y,_),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const p=f[v],m=i[p.materialIndex],b=Math.max(p.start,g.start),y=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let _=b,E=y;_<E;_+=3){const C=_,I=_+1,Z=_+2;a=Ls(this,m,e,Ui,l,c,u,h,d,C,I,Z),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const b=p,y=p+1,_=p+2;a=Ls(this,i,e,Ui,l,c,u,h,d,b,y,_),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Ot.prototype.isMesh=!0;function Dp(r,e,t,n,i,s,a,o){let l;if(e.side===xt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==rr,o),l===null)return null;Cs.copy(o),Cs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:r}}function Ls(r,e,t,n,i,s,a,o,l,c,u,h){Yn.fromBufferAttribute(i,c),Zn.fromBufferAttribute(i,u),Jn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){Ms.set(0,0,0),ws.set(0,0,0),Ss.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=d[g],p=s[g];x!==0&&(Qa.fromBufferAttribute(p,c),Ka.fromBufferAttribute(p,u),eo.fromBufferAttribute(p,h),a?(Ms.addScaledVector(Qa,x),ws.addScaledVector(Ka,x),Ss.addScaledVector(eo,x)):(Ms.addScaledVector(Qa.sub(Yn),x),ws.addScaledVector(Ka.sub(Zn),x),Ss.addScaledVector(eo.sub(Jn),x)))}Yn.add(Ms),Zn.add(ws),Jn.add(Ss)}r.isSkinnedMesh&&(r.boneTransform(c,Yn),r.boneTransform(u,Zn),r.boneTransform(h,Jn));const f=Dp(r,e,t,n,Yn,Zn,Jn,to);if(f){o&&(Ts.fromBufferAttribute(o,c),Es.fromBufferAttribute(o,u),As.fromBufferAttribute(o,h),f.uv=yt.getUV(to,Yn,Zn,Jn,Ts,Es,As,new de)),l&&(Ts.fromBufferAttribute(l,c),Es.fromBufferAttribute(l,u),As.fromBufferAttribute(l,h),f.uv2=yt.getUV(to,Yn,Zn,Jn,Ts,Es,As,new de));const g={a:c,b:u,c:h,normal:new P,materialIndex:0};yt.getNormal(Yn,Zn,Jn,g.normal),f.face=g}return f}class rs extends dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function g(v,x,p,m,b,y,_,E,C,I,Z){const O=y/C,R=_/I,M=y/2,w=_/2,z=E/2,F=C+1,D=I+1;let k=0,$=0;const ie=new P;for(let H=0;H<D;H++){const W=H*R-w;for(let se=0;se<F;se++){const ee=se*O-M;ie[v]=ee*m,ie[x]=W*b,ie[p]=z,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[x]=0,ie[p]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(se/C),h.push(1-H/I),k+=1}}for(let H=0;H<I;H++)for(let W=0;W<C;W++){const se=d+W+F*H,ee=d+W+F*(H+1),me=d+(W+1)+F*(H+1),Le=d+(W+1)+F*H;l.push(se,ee,Le),l.push(ee,me,Le),$+=6}o.addGroup(f,$,Z),f+=$,d+=k}}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const n=ar(r[t]);for(const i in n)e[i]=n[i]}return e}const Fp={clone:ar,merge:Pt};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Ft{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=zp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Vn.prototype.isShaderMaterial=!0;class nl extends st{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}nl.prototype.isCamera=!0;class Nt extends nl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Nt.prototype.isPerspectiveCamera=!0;const Vi=90,Hi=1;class il extends st{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Nt(Vi,Hi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);const s=new Nt(Vi,Hi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const a=new Nt(Vi,Hi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new P(0,1,0)),this.add(a);const o=new Nt(Vi,Hi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new P(0,-1,0)),this.add(o);const l=new Nt(Vi,Hi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new Nt(Vi,Hi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class _a extends At{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ns,super(e,t,n,i,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}_a.prototype.isCubeTexture=!0;class $u extends sn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new _a(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Tt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rs(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:ii});s.uniforms.tEquirect.value=t;const a=new Ot(i,s),o=t.minFilter;return t.minFilter===va&&(t.minFilter=Bt),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}$u.prototype.isWebGLCubeRenderTarget=!0;const no=new P,Np=new P,Bp=new Lt;class Nn{constructor(e=new P(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=no.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bp.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Nn.prototype.isPlane=!0;const Gi=new fr,Rs=new P;class ya{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],v=n[11],x=n[12],p=n[13],m=n[14],b=n[15];return t[0].setComponents(o-i,h-l,v-d,b-x).normalize(),t[1].setComponents(o+i,h+l,v+d,b+x).normalize(),t[2].setComponents(o+s,h+c,v+f,b+p).normalize(),t[3].setComponents(o-s,h-c,v-f,b-p).normalize(),t[4].setComponents(o-a,h-u,v-g,b-m).normalize(),t[5].setComponents(o+a,h+u,v+g,b+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Rs.x=i.normal.x>0?e.max.x:e.min.x,Rs.y=i.normal.y>0?e.max.y:e.min.y,Rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Op(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,h,d),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;r.bindBuffer(h,c),f.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ba extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],v=[],x=[];for(let p=0;p<u;p++){const m=p*d-a;for(let b=0;b<c;b++){const y=b*h-s;g.push(y,-m,0),v.push(0,0,1),x.push(b/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<o;m++){const b=m+c*p,y=m+c*(p+1),_=m+1+c*(p+1),E=m+1+c*p;f.push(b,y,E),f.push(y,_,E)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(x,2))}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp="vec3 transformed = vec3( position );",jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,am=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",dm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,wm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Am=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,$m=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,gg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ag=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Cg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ug=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,ev=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,uv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,je={alphamap_fragment:Up,alphamap_pars_fragment:Vp,alphatest_fragment:Hp,alphatest_pars_fragment:Gp,aomap_fragment:Wp,aomap_pars_fragment:qp,begin_vertex:Xp,beginnormal_vertex:jp,bsdfs:Yp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:Kp,color_fragment:em,color_pars_fragment:tm,color_pars_vertex:nm,color_vertex:im,common:rm,cube_uv_reflection_fragment:sm,defaultnormal_vertex:am,displacementmap_pars_vertex:om,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:um,encodings_fragment:hm,encodings_pars_fragment:dm,envmap_fragment:fm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Am,envmap_vertex:vm,fog_vertex:xm,fog_pars_vertex:_m,fog_fragment:ym,fog_pars_fragment:bm,gradientmap_pars_fragment:Mm,lightmap_fragment:wm,lightmap_pars_fragment:Sm,lights_lambert_vertex:Tm,lights_pars_begin:Em,lights_toon_fragment:Cm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Rm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Im,lights_physical_pars_fragment:Dm,lights_fragment_begin:Fm,lights_fragment_maps:zm,lights_fragment_end:km,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Um,map_fragment:Vm,map_pars_fragment:Hm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Xm,morphnormal_vertex:jm,morphtarget_pars_vertex:Ym,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:$m,normal_pars_fragment:Qm,normal_pars_vertex:Km,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:rg,output_fragment:sg,packing:ag,premultiplied_alpha_fragment:og,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:ug,roughnessmap_fragment:hg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:vg,skinning_pars_vertex:xg,skinning_vertex:_g,skinnormal_vertex:yg,specularmap_fragment:bg,specularmap_pars_fragment:Mg,tonemapping_fragment:wg,tonemapping_pars_fragment:Sg,transmission_fragment:Tg,transmission_pars_fragment:Eg,uv_pars_fragment:Ag,uv_pars_vertex:Cg,uv_vertex:Lg,uv2_pars_fragment:Rg,uv2_pars_vertex:Pg,uv2_vertex:Ig,worldpos_vertex:Dg,background_vert:Fg,background_frag:zg,cube_vert:kg,cube_frag:Ng,depth_vert:Bg,depth_frag:Og,distanceRGBA_vert:Ug,distanceRGBA_frag:Vg,equirect_vert:Hg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:qg,meshbasic_vert:Xg,meshbasic_frag:jg,meshlambert_vert:Yg,meshlambert_frag:Zg,meshmatcap_vert:Jg,meshmatcap_frag:$g,meshnormal_vert:Qg,meshnormal_frag:Kg,meshphong_vert:ev,meshphong_frag:tv,meshphysical_vert:nv,meshphysical_frag:iv,meshtoon_vert:rv,meshtoon_frag:sv,points_vert:av,points_frag:ov,shadow_vert:lv,shadow_frag:cv,sprite_vert:uv,sprite_frag:hv},xe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}}},_n={basic:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Pt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Pt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Pt([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Pt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Pt([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Pt([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null}},vertexShader:je.background_vert,fragmentShader:je.background_frag},cube:{uniforms:Pt([xe.envmap,{opacity:{value:1}}]),vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Pt([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Pt([xe.lights,xe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};_n.physical={uniforms:Pt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new de(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};function dv(r,e,t,n,i){const s=new De(0);let a=0,o,l,c=null,u=0,h=null;function d(g,v){let x=!1,p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));const m=r.xr,b=m.getSession&&m.getSession();b&&b.environmentBlendMode==="additive"&&(p=null),p===null?f(s,a):p&&p.isColor&&(f(p,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ga)?(l===void 0&&(l=new Ot(new rs(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ar(_n.cube.uniforms),vertexShader:_n.cube.vertexShader,fragmentShader:_n.cube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,_,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new Ot(new ba(2,2),new Vn({name:"BackgroundMaterial",uniforms:ar(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==r.toneMapping)&&(o.material.needsUpdate=!0,c=p,u=p.version,h=r.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function f(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),a=v,f(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,f(s,a)},render:d}}function fv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=v(null);let c=l;function u(w,z,F,D,k){let $=!1;if(a){const ie=g(D,F,z);c!==ie&&(c=ie,d(c.object)),$=x(D,k),$&&p(D,k)}else{const ie=z.wireframe===!0;(c.geometry!==D.id||c.program!==F.id||c.wireframe!==ie)&&(c.geometry=D.id,c.program=F.id,c.wireframe=ie,$=!0)}w.isInstancedMesh===!0&&($=!0),k!==null&&t.update(k,34963),$&&(C(w,z,F,D),k!==null&&r.bindBuffer(34963,t.get(k).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(w){return n.isWebGL2?r.bindVertexArray(w):s.bindVertexArrayOES(w)}function f(w){return n.isWebGL2?r.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function g(w,z,F){const D=F.wireframe===!0;let k=o[w.id];k===void 0&&(k={},o[w.id]=k);let $=k[z.id];$===void 0&&($={},k[z.id]=$);let ie=$[D];return ie===void 0&&(ie=v(h()),$[D]=ie),ie}function v(w){const z=[],F=[],D=[];for(let k=0;k<i;k++)z[k]=0,F[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:D,object:w,attributes:{},index:null}}function x(w,z){const F=c.attributes,D=w.attributes;let k=0;for(const $ in D){const ie=F[$],H=D[$];if(ie===void 0||ie.attribute!==H||ie.data!==H.data)return!0;k++}return c.attributesNum!==k||c.index!==z}function p(w,z){const F={},D=w.attributes;let k=0;for(const $ in D){const ie=D[$],H={};H.attribute=ie,ie.data&&(H.data=ie.data),F[$]=H,k++}c.attributes=F,c.attributesNum=k,c.index=z}function m(){const w=c.newAttributes;for(let z=0,F=w.length;z<F;z++)w[z]=0}function b(w){y(w,0)}function y(w,z){const F=c.newAttributes,D=c.enabledAttributes,k=c.attributeDivisors;F[w]=1,D[w]===0&&(r.enableVertexAttribArray(w),D[w]=1),k[w]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,z),k[w]=z)}function _(){const w=c.newAttributes,z=c.enabledAttributes;for(let F=0,D=z.length;F<D;F++)z[F]!==w[F]&&(r.disableVertexAttribArray(F),z[F]=0)}function E(w,z,F,D,k,$){n.isWebGL2===!0&&(F===5124||F===5125)?r.vertexAttribIPointer(w,z,F,k,$):r.vertexAttribPointer(w,z,F,D,k,$)}function C(w,z,F,D){if(n.isWebGL2===!1&&(w.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const k=D.attributes,$=F.getAttributes(),ie=z.defaultAttributeValues;for(const H in $){const W=$[H];if(W.location>=0){let se=k[H];if(se===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){const ee=se.normalized,me=se.itemSize,Le=t.get(se);if(Le===void 0)continue;const Q=Le.buffer,Me=Le.type,we=Le.bytesPerElement;if(se.isInterleavedBufferAttribute){const ge=se.data,Te=ge.stride,Oe=se.offset;if(ge&&ge.isInstancedInterleavedBuffer){for(let q=0;q<W.locationSize;q++)y(W.location+q,ge.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let q=0;q<W.locationSize;q++)b(W.location+q);r.bindBuffer(34962,Q);for(let q=0;q<W.locationSize;q++)E(W.location+q,me/W.locationSize,Me,ee,Te*we,(Oe+me/W.locationSize*q)*we)}else{if(se.isInstancedBufferAttribute){for(let ge=0;ge<W.locationSize;ge++)y(W.location+ge,se.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<W.locationSize;ge++)b(W.location+ge);r.bindBuffer(34962,Q);for(let ge=0;ge<W.locationSize;ge++)E(W.location+ge,me/W.locationSize,Me,ee,me*we,me/W.locationSize*ge*we)}}else if(ie!==void 0){const ee=ie[H];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(W.location,ee);break;case 3:r.vertexAttrib3fv(W.location,ee);break;case 4:r.vertexAttrib4fv(W.location,ee);break;default:r.vertexAttrib1fv(W.location,ee)}}}}_()}function I(){R();for(const w in o){const z=o[w];for(const F in z){const D=z[F];for(const k in D)f(D[k].object),delete D[k];delete z[F]}delete o[w]}}function Z(w){if(o[w.id]===void 0)return;const z=o[w.id];for(const F in z){const D=z[F];for(const k in D)f(D[k].object),delete D[k];delete z[F]}delete o[w.id]}function O(w){for(const z in o){const F=o[z];if(F[w.id]===void 0)continue;const D=F[w.id];for(const k in D)f(D[k].object),delete D[k];delete F[w.id]}}function R(){M(),c!==l&&(c=l,d(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:R,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:Z,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:b,disableUnusedAttributes:_}}function pv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function mv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),x=r.getParameter(36347),p=r.getParameter(36348),m=r.getParameter(36349),b=d>0,y=a||e.has("OES_texture_float"),_=b&&y,E=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:_,maxSamples:E}}function gv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Nn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,f,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!x)s?u(null):c();else{const m=s?0:n,b=m*4;let y=p.clippingState||null;l.value=y,y=u(g,d,b,f);for(let _=0;_!==b;++_)y[_]=t[_];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const p=f+v*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(h[b]).applyMatrix4(m,o),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function vv(r){let e=new WeakMap;function t(a,o){return o===Eo?a.mapping=ns:o===Ao&&(a.mapping=is),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Eo||o===Ao)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new $u(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),r.setRenderTarget(c),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class rl extends nl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}rl.prototype.isOrthographicCamera=!0;class Ma extends Vn{constructor(e){super(e),this.type="RawShaderMaterial"}}Ma.prototype.isRawShaderMaterial=!0;const nr=4,si=8,xn=Math.pow(2,si),Ku=[.125,.215,.35,.446,.526,.582],eh=si-nr+1+Ku.length,Wi=20,aa={[fn]:0,[ur]:1},io=new rl,{_lodPlanes:Lr,_sizeLods:uc,_sigmas:Ps}=_v(),hc=new De;let ro=null;const wi=(1+Math.sqrt(5))/2,qi=1/wi,dc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,wi,qi),new P(0,wi,-qi),new P(qi,0,wi),new P(-qi,0,wi),new P(wi,qi,0),new P(-wi,qi,0)];class xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=yv(Wi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ro=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=mc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=pc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Lr.length;e++)Lr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ro),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e){ro=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Si,format:Tt,encoding:fn,depthBuffer:!1},n=fc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=fc(t),n}_compileMaterial(e){const t=new Ot(Lr[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,i){const o=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(hc),u.toneMapping=ri,u.autoClear=!1;const f=new tl({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),g=new Ot(new rs,f);let v=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,v=!0):(f.color.copy(hc),v=!0);for(let p=0;p<6;p++){const m=p%3;m==0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):m==1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p])),Is(i,m*xn,p>2?xn:0,xn,xn),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=x}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===Tt&&t.type===Un&&t.encoding===ur?e.value=aa[fn]:e.value=aa[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ns||e.mapping===is;i?this._cubemapShader==null&&(this._cubemapShader=mc()):this._equirectShader==null&&(this._equirectShader=pc());const s=i?this._cubemapShader:this._equirectShader,a=new Ot(Lr[0],s),o=s.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),Is(t,0,0,3*xn,2*xn),n.setRenderTarget(t),n.render(a,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<eh;i++){const s=Math.sqrt(Ps[i]*Ps[i]-Ps[i-1]*Ps[i-1]),a=dc[(i-1)%dc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(Lr[i],c),d=c.uniforms,f=uc[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):Wi;x>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Wi}`);const p=[];let m=0;for(let E=0;E<Wi;++E){const C=E/v,I=Math.exp(-C*C/2);p.push(I),E==0?m+=I:E<x&&(m+=2*I)}for(let E=0;E<p.length;E++)p[E]=p[E]/m;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=g,d.mipInt.value=si-n;const b=uc[i],y=3*Math.max(0,xn-2*b),_=(i===0?0:2*xn)+2*b*(i>si-nr?i-si+nr:0);Is(t,y,_,3*b,2*b),l.setRenderTarget(t),l.render(h,io)}}function _v(){const r=[],e=[],t=[];let n=si;for(let i=0;i<eh;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>si-nr?a=Ku[i-si+nr-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,g=2,v=1,x=new Float32Array(f*d*h),p=new Float32Array(g*d*h),m=new Float32Array(v*d*h);for(let y=0;y<h;y++){const _=y%3*2/3-1,E=y>2?0:-1,C=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];x.set(C,f*d*y),p.set(u,g*d*y);const I=[y,y,y,y,y,y];m.set(I,v*d*y)}const b=new dt;b.setAttribute("position",new bt(x,f)),b.setAttribute("uv",new bt(p,g)),b.setAttribute("faceIndex",new bt(m,v)),r.push(b),n>nr&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function fc(r){const e=new sn(3*xn,3*xn,r);return e.texture.mapping=ga,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Is(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function yv(r){const e=new Float32Array(r),t=new P(0,1,0);return new Ma({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${al()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function pc(){const r=new de(1,1);return new Ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:aa[fn]}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${al()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function mc(){return new Ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:aa[fn]}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${al()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function al(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function bv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===Eo||l===Ao,u=l===ns||l===is;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=r.getRenderTarget();t===null&&(t=new xv(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),r.setRenderTarget(d),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wv(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let x=0,p=v.length;x<p;x++)e.update(v[x],34962)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const m=f.array;v=f.version;for(let b=0,y=m.length;b<y;b+=3){const _=m[b+0],E=m[b+1],C=m[b+2];d.push(_,E,E,C,C,_)}}else{const m=g.array;v=g.version;for(let b=0,y=m.length/3-1;b<y;b+=3){const _=b+0,E=b+1,C=b+2;d.push(_,E,E,C,C,_)}}const x=new(Xu(d)>65535?Ju:Zu)(d,1);x.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,x)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Sv(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){r.drawElements(s,f,o,d*l),t.update(f,s,1)}function h(d,f,g){if(g===0)return;let v,x;if(i)v=r,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,f,o,d*l,g),t.update(f,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Tv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class ol extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ol.prototype.isDataTexture2DArray=!0;function Ev(r,e){return r[0]-e[0]}function Av(r,e){return Math.abs(e[1])-Math.abs(r[1])}function gc(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Cv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new P,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let v=s.get(u);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const m=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,y=u.morphAttributes.normal||[],_=u.attributes.position.count,E=m===!0?2:1;let C=_*E,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Z=new Float32Array(C*I*4*g),O=new ol(Z,C,I,g);O.format=Tt,O.type=ei,O.needsUpdate=!0;const R=E*4;for(let M=0;M<g;M++){const w=b[M],z=y[M],F=C*I*4*M;for(let D=0;D<w.count;D++){a.fromBufferAttribute(w,D),w.normalized===!0&&gc(a,w);const k=D*R;Z[F+k+0]=a.x,Z[F+k+1]=a.y,Z[F+k+2]=a.z,Z[F+k+3]=0,m===!0&&(a.fromBufferAttribute(z,D),z.normalized===!0&&gc(a,z),Z[F+k+4]=a.x,Z[F+k+5]=a.y,Z[F+k+6]=a.z,Z[F+k+7]=0)}}v={count:g,texture:O,size:new de(C,I)},s.set(u,v)}let x=0;for(let m=0;m<f.length;m++)x+=f[m];const p=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const g=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<g;y++){const _=v[y];_[0]=y,_[1]=f[y]}v.sort(Av);for(let y=0;y<8;y++)y<g&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Ev);const x=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const _=o[y],E=_[0],C=_[1];E!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+y)!==x[E]&&u.setAttribute("morphTarget"+y,x[E]),p&&u.getAttribute("morphNormal"+y)!==p[E]&&u.setAttribute("morphNormal"+y,p[E]),i[y]=C,m+=C):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Lv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class th extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}th.prototype.isDataTexture3D=!0;const nh=new At,ih=new ol,rh=new th,sh=new _a,vc=[],xc=[],_c=new Float32Array(16),yc=new Float32Array(9),bc=new Float32Array(4);function gr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=vc[i];if(s===void 0&&(s=new Float32Array(i),vc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function wa(r,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Rv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function Iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function Dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function Fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Ut(t,n))return;bc.set(n),r.uniformMatrix2fv(this.addr,!1,bc),Dt(t,n)}}function zv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Ut(t,n))return;yc.set(n),r.uniformMatrix3fv(this.addr,!1,yc),Dt(t,n)}}function kv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Ut(t,n))return;_c.set(n),r.uniformMatrix4fv(this.addr,!1,_c),Dt(t,n)}}function Nv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bv(r,e){const t=this.cache;Ut(t,e)||(r.uniform2iv(this.addr,e),Dt(t,e))}function Ov(r,e){const t=this.cache;Ut(t,e)||(r.uniform3iv(this.addr,e),Dt(t,e))}function Uv(r,e){const t=this.cache;Ut(t,e)||(r.uniform4iv(this.addr,e),Dt(t,e))}function Vv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hv(r,e){const t=this.cache;Ut(t,e)||(r.uniform2uiv(this.addr,e),Dt(t,e))}function Gv(r,e){const t=this.cache;Ut(t,e)||(r.uniform3uiv(this.addr,e),Dt(t,e))}function Wv(r,e){const t=this.cache;Ut(t,e)||(r.uniform4uiv(this.addr,e),Dt(t,e))}function qv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||nh,i)}function Xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rh,i)}function jv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||sh,i)}function Yv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ih,i)}function Zv(r){switch(r){case 5126:return Rv;case 35664:return Pv;case 35665:return Iv;case 35666:return Dv;case 35674:return Fv;case 35675:return zv;case 35676:return kv;case 5124:case 35670:return Nv;case 35667:case 35671:return Bv;case 35668:case 35672:return Ov;case 35669:case 35673:return Uv;case 5125:return Vv;case 36294:return Hv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Jv(r,e){r.uniform1fv(this.addr,e)}function $v(r,e){const t=gr(e,this.size,2);r.uniform2fv(this.addr,t)}function Qv(r,e){const t=gr(e,this.size,3);r.uniform3fv(this.addr,t)}function Kv(r,e){const t=gr(e,this.size,4);r.uniform4fv(this.addr,t)}function e0(r,e){const t=gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function t0(r,e){const t=gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function n0(r,e){const t=gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function i0(r,e){r.uniform1iv(this.addr,e)}function r0(r,e){r.uniform2iv(this.addr,e)}function s0(r,e){r.uniform3iv(this.addr,e)}function a0(r,e){r.uniform4iv(this.addr,e)}function o0(r,e){r.uniform1uiv(this.addr,e)}function l0(r,e){r.uniform2uiv(this.addr,e)}function c0(r,e){r.uniform3uiv(this.addr,e)}function u0(r,e){r.uniform4uiv(this.addr,e)}function h0(r,e,t){const n=e.length,i=wa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||nh,i[s])}function d0(r,e,t){const n=e.length,i=wa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||rh,i[s])}function f0(r,e,t){const n=e.length,i=wa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||sh,i[s])}function p0(r,e,t){const n=e.length,i=wa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||ih,i[s])}function m0(r){switch(r){case 5126:return Jv;case 35664:return $v;case 35665:return Qv;case 35666:return Kv;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return r0;case 35668:case 35672:return s0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Zv(e.type)}function ah(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=m0(e.type)}ah.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Dt(e,r)};function oh(r){this.id=r,this.seq=[],this.map={}}oh.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const so=/(\w+)(\])?(\[|\.)?/g;function Mc(r,e){r.seq.push(e),r.map[e.id]=e}function v0(r,e,t){const n=r.name,i=n.length;for(so.lastIndex=0;;){const s=so.exec(n),a=so.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Mc(t,c===void 0?new g0(o,r,e):new ah(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new oh(o),Mc(t,h)),t=h}}}function ai(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);v0(i,s,this)}}ai.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};ai.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};ai.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};ai.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function wc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let x0=0;function _0(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function lh(r){switch(r){case fn:return["Linear","( value )"];case ur:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Sc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+_0(r.getShaderSource(e))}function vi(r,e){const t=lh(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function y0(r,e){const t=lh(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function b0(r,e){let t;switch(e){case pf:t="Linear";break;case mf:t="Reinhard";break;case gf:t="OptimizedCineon";break;case vf:t="ACESFilmic";break;case xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M0(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function w0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function kr(r){return r!==""}function Tc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ec(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(r){return r.replace(T0,E0)}function E0(r,e){const t=je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Po(t)}const A0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(r){return r.replace(C0,ch).replace(A0,L0)}function L0(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ch(r,e,t,n)}function ch(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zr&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case ga:case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case is:case Qo:e="ENVMAP_MODE_REFRACTION";break}return e}function D0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ma:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case ff:e="ENVMAP_BLENDING_ADD";break}return e}function F0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=R0(t),c=P0(t),u=I0(t),h=D0(t),d=t.isWebGL2?"":M0(t),f=w0(s),g=i.createProgram();let v,x,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[f].filter(kr).join(`
`),v.length>0&&(v+=`
`),x=[d,f].filter(kr).join(`
`),x.length>0&&(x+=`
`)):(v=[Cc(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),x=[d,Cc(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?je.tonemapping_pars_fragment:"",t.toneMapping!==ri?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Ti?"#define OPAQUE":"",je.encodings_pars_fragment,t.map?vi("mapTexelToLinear",t.mapEncoding):"",t.matcap?vi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?vi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?vi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?vi("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?vi("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?vi("lightMapTexelToLinear",t.lightMapEncoding):"",y0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Po(a),a=Tc(a,t),a=Ec(a,t),o=Po(o),o=Tc(o,t),o=Ec(o,t),a=Ac(a),o=Ac(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const m=p+v+a,b=p+x+o,y=wc(i,35633,m),_=wc(i,35632,b);if(i.attachShader(g,y),i.attachShader(g,_),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),Z=i.getShaderInfoLog(y).trim(),O=i.getShaderInfoLog(_).trim();let R=!0,M=!0;if(i.getProgramParameter(g,35714)===!1){R=!1;const w=Sc(i,y,"vertex"),z=Sc(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+I+`
`+w+`
`+z)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(Z===""||O==="")&&(M=!1);M&&(this.diagnostics={runnable:R,programLog:I,vertexShader:{log:Z,prefix:v},fragmentShader:{log:O,prefix:x}})}i.deleteShader(y),i.deleteShader(_);let E;this.getUniforms=function(){return E===void 0&&(E=new ai(i,g)),E};let C;return this.getAttributes=function(){return C===void 0&&(C=S0(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=_,this}let z0=0;class k0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new N0;t.set(e,n)}return t.get(e)}}class N0{constructor(){this.id=z0++,this.usedTimes=0}}function B0(r,e,t,n,i,s,a){const o=new ju,l=new k0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,g=i.vertexTextures;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){const z=M.skeleton.bones;if(d)return 1024;{const D=Math.floor((f-20)/4),k=Math.min(D,z.length);return k<z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+z.length+" bones. This GPU supports "+k+"."),0):k}}function m(M){let w;return M&&M.isTexture?w=M.encoding:M&&M.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=M.texture.encoding):w=fn,u&&M&&M.isTexture&&M.format===Tt&&M.type===Un&&M.encoding===ur&&(w=fn),w}function b(M,w,z,F,D){const k=F.fog,$=M.isMeshStandardMaterial?F.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),H=x[M.type],W=D.isSkinnedMesh?p(D):0;M.precision!==null&&(v=i.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));let se,ee,me,Le;if(H){const Te=_n[H];se=Te.vertexShader,ee=Te.fragmentShader}else se=M.vertexShader,ee=M.fragmentShader,l.update(M),me=l.getVertexShaderID(M),Le=l.getFragmentShaderID(M);const Q=r.getRenderTarget(),Me=M.alphaTest>0,we=M.clearcoat>0;return{isWebGL2:u,shaderID:H,shaderName:M.type,vertexShader:se,fragmentShader:ee,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:Le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:g,outputEncoding:Q!==null?m(Q.texture):r.outputEncoding,map:!!M.map,mapEncoding:m(M.map),matcap:!!M.matcap,matcapEncoding:m(M.matcap),envMap:!!ie,envMapMode:ie&&ie.mapping,envMapEncoding:m(ie),envMapCubeUV:!!ie&&(ie.mapping===ga||ie.mapping===Qo),lightMap:!!M.lightMap,lightMapEncoding:m(M.lightMap),aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,emissiveMapEncoding:m(M.emissiveMap),bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===vp,tangentSpaceNormalMap:M.normalMapType===hr,clearcoat:we,clearcoatMap:we&&!!M.clearcoatMap,clearcoatRoughnessMap:we&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,specularColorMapEncoding:m(M.specularColorMap),alphaMap:!!M.alphaMap,alphaTest:Me,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenColorMapEncoding:m(M.sheenColorMap),sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!D.geometry&&!!D.geometry.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.geometry&&!!D.geometry.attributes.color&&D.geometry.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!k,useFog:M.fog,fogExp2:k&&k.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0&&W>0,maxBones:W,useVertexTexture:d,morphTargets:!!D.geometry&&!!D.geometry.morphAttributes.position,morphNormals:!!D.geometry&&!!D.geometry.morphAttributes.normal,morphTargetsCount:D.geometry&&D.geometry.morphAttributes.position?D.geometry.morphAttributes.position.length:0,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:M.format,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:ri,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rr,flipSided:M.side===xt,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function y(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)w.push(z),w.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(_(w,M),E(w,M),w.push(r.outputEncoding)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputEncoding),M.push(w.mapEncoding),M.push(w.matcapEncoding),M.push(w.envMapMode),M.push(w.envMapEncoding),M.push(w.lightMapEncoding),M.push(w.emissiveMapEncoding),M.push(w.combine),M.push(w.vertexUvs),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.maxBones),M.push(w.morphTargetsCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.format),M.push(w.specularColorMapEncoding),M.push(w.sheenColorMapEncoding)}function E(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.envMapCubeUV&&o.enable(7),w.lightMap&&o.enable(8),w.aoMap&&o.enable(9),w.emissiveMap&&o.enable(10),w.bumpMap&&o.enable(11),w.normalMap&&o.enable(12),w.objectSpaceNormalMap&&o.enable(13),w.tangentSpaceNormalMap&&o.enable(14),w.clearcoat&&o.enable(15),w.clearcoatMap&&o.enable(16),w.clearcoatRoughnessMap&&o.enable(17),w.clearcoatNormalMap&&o.enable(18),w.displacementMap&&o.enable(19),w.specularMap&&o.enable(20),w.roughnessMap&&o.enable(21),w.metalnessMap&&o.enable(22),w.gradientMap&&o.enable(23),w.alphaMap&&o.enable(24),w.alphaTest&&o.enable(25),w.vertexColors&&o.enable(26),w.vertexAlphas&&o.enable(27),w.vertexUvs&&o.enable(28),w.vertexTangents&&o.enable(29),w.uvsVertexOnly&&o.enable(30),w.fog&&o.enable(31),M.push(o.mask),o.disableAll(),w.useFog&&o.enable(0),w.flatShading&&o.enable(1),w.logarithmicDepthBuffer&&o.enable(2),w.skinning&&o.enable(3),w.useVertexTexture&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.premultipliedAlpha&&o.enable(7),w.shadowMapEnabled&&o.enable(8),w.physicallyCorrectLights&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.depthPacking&&o.enable(12),w.dithering&&o.enable(13),w.specularIntensityMap&&o.enable(14),w.specularColorMap&&o.enable(15),w.transmission&&o.enable(16),w.transmissionMap&&o.enable(17),w.thicknessMap&&o.enable(18),w.sheen&&o.enable(19),w.sheenColorMap&&o.enable(20),w.sheenRoughnessMap&&o.enable(21),M.push(o.mask)}function C(M){const w=x[M.type];let z;if(w){const F=_n[w];z=Fp.clone(F.uniforms)}else z=M.uniforms;return z}function I(M,w){let z;for(let F=0,D=c.length;F<D;F++){const k=c[F];if(k.cacheKey===w){z=k,++z.usedTimes;break}}return z===void 0&&(z=new F0(r,w,M,s),c.push(z)),z}function Z(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function O(M){l.remove(M)}function R(){l.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:C,acquireProgram:I,releaseProgram:Z,releaseShaderCache:O,programs:c,dispose:R}}function O0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function U0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,v,x){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:x},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=x),e++,p}function o(h,d,f,g,v,x){const p=a(h,d,f,g,v,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,v,x){const p=a(h,d,f,g,v,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||U0),n.length>1&&n.sort(d||Lc),i.length>1&&i.sort(d||Lc)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function V0(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Rc,r.set(n,[s])):i>=r.get(n).length?(s=new Rc,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function H0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function G0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let W0=0;function q0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function X0(r,e){const t=new H0,n=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,a=new ze,o=new ze;function l(u,h){let d=0,f=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let v=0,x=0,p=0,m=0,b=0,y=0,_=0,E=0;u.sort(q0);const C=h!==!0?Math.PI:1;for(let Z=0,O=u.length;Z<O;Z++){const R=u[Z],M=R.color,w=R.intensity,z=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=M.r*w*C,f+=M.g*w*C,g+=M.b*w*C;else if(R.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(R.sh.coefficients[D],w);else if(R.isDirectionalLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity*C),R.castShadow){const k=R.shadow,$=n.get(R);$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.directionalShadow[v]=$,i.directionalShadowMap[v]=F,i.directionalShadowMatrix[v]=R.shadow.matrix,y++}i.directional[v]=D,v++}else if(R.isSpotLight){const D=t.get(R);if(D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(M).multiplyScalar(w*C),D.distance=z,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,R.castShadow){const k=R.shadow,$=n.get(R);$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=F,i.spotShadowMatrix[p]=R.shadow.matrix,E++}i.spot[p]=D,p++}else if(R.isRectAreaLight){const D=t.get(R);D.color.copy(M).multiplyScalar(w),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=D,m++}else if(R.isPointLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity*C),D.distance=R.distance,D.decay=R.decay,R.castShadow){const k=R.shadow,$=n.get(R);$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,i.pointShadow[x]=$,i.pointShadowMap[x]=F,i.pointShadowMatrix[x]=R.shadow.matrix,_++}i.point[x]=D,x++}else if(R.isHemisphereLight){const D=t.get(R);D.skyColor.copy(R.color).multiplyScalar(w*C),D.groundColor.copy(R.groundColor).multiplyScalar(w*C),i.hemi[b]=D,b++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==v||I.pointLength!==x||I.spotLength!==p||I.rectAreaLength!==m||I.hemiLength!==b||I.numDirectionalShadows!==y||I.numPointShadows!==_||I.numSpotShadows!==E)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=m,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotShadowMatrix.length=E,I.directionalLength=v,I.pointLength=x,I.spotLength=p,I.rectAreaLength=m,I.hemiLength=b,I.numDirectionalShadows=y,I.numPointShadows=_,I.numSpotShadows=E,i.version=W0++)}function c(u,h){let d=0,f=0,g=0,v=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=u.length;m<b;m++){const y=u[m];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(y.isSpotLight){const _=i.spot[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),_.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Pc(r,e){const t=new X0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function j0(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Pc(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new Pc(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class uh extends Ft{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}uh.prototype.isMeshDepthMaterial=!0;class hh extends Ft{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}hh.prototype.isMeshDistanceMaterial=!0;const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dh(r,e,t){let n=new ya;const i=new de,s=new de,a=new ct,o=new uh({depthPacking:gp}),l=new hh,c={},u=t.maxTextureSize,h={0:xt,1:Yr,2:rr},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Y0,fragmentShader:Z0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu,this.render=function(y,_,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const C=r.getRenderTarget(),I=r.getActiveCubeFace(),Z=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ii),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let R=0,M=y.length;R<M;R++){const w=y[R],z=w.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const F=z.getFrameExtents();if(i.multiply(F),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,z.mapSize.y=s.y)),z.map===null&&!z.isPointLightShadow&&this.type===zr){const k={minFilter:Bt,magFilter:Bt,format:Tt};z.map=new sn(i.x,i.y,k),z.map.texture.name=w.name+".shadowMap",z.mapPass=new sn(i.x,i.y,k),z.camera.updateProjectionMatrix()}if(z.map===null){const k={minFilter:_t,magFilter:_t,format:Tt};z.map=new sn(i.x,i.y,k),z.map.texture.name=w.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const D=z.getViewportCount();for(let k=0;k<D;k++){const $=z.getViewport(k);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),O.viewport(a),z.updateMatrices(w,k),n=z.getFrustum(),b(_,E,z.camera,w,this.type)}!z.isPointLightShadow&&this.type===zr&&p(z,E),z.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(C,I,Z)};function p(y,_){const E=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(_,null,E,d,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(_,null,E,f,v,null)}function m(y,_,E,C,I,Z,O){let R=null;const M=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(M!==void 0?R=M:R=C.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const w=R.uuid,z=E.uuid;let F=c[w];F===void 0&&(F={},c[w]=F);let D=F[z];D===void 0&&(D=R.clone(),F[z]=D),R=D}return R.visible=E.visible,R.wireframe=E.wireframe,O===zr?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:h[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaTest,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=I,R.farDistance=Z),R}function b(y,_,E,C,I){if(y.visible===!1)return;if(y.layers.test(_.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&I===zr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const R=e.update(y),M=y.material;if(Array.isArray(M)){const w=R.groups;for(let z=0,F=w.length;z<F;z++){const D=w[z],k=M[D.materialIndex];if(k&&k.visible){const $=m(y,R,k,C,E.near,E.far,I);r.renderBufferDirect(E,null,R,$,y,D)}}}else if(M.visible){const w=m(y,R,M,C,E.near,E.far,I);r.renderBufferDirect(E,null,R,w,y,null)}}const O=y.children;for(let R=0,M=O.length;R<M;R++)b(O[R],_,E,C,I)}}function J0(r,e,t){const n=t.isWebGL2;function i(){let S=!1;const he=new ct;let J=null;const Fe=new ct(0,0,0,0);return{setMask:function(Se){J!==Se&&!S&&(r.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){S=Se},setClear:function(Se,We,ve,Ue,it){it===!0&&(Se*=Ue,We*=Ue,ve*=Ue),he.set(Se,We,ve,Ue),Fe.equals(he)===!1&&(r.clearColor(Se,We,ve,Ue),Fe.copy(he))},reset:function(){S=!1,J=null,Fe.set(-1,0,0,0)}}}function s(){let S=!1,he=null,J=null,Fe=null;return{setTest:function(Se){Se?ee(2929):me(2929)},setMask:function(Se){he!==Se&&!S&&(r.depthMask(Se),he=Se)},setFunc:function(Se){if(J!==Se){if(Se)switch(Se){case sf:r.depthFunc(512);break;case af:r.depthFunc(519);break;case of:r.depthFunc(513);break;case To:r.depthFunc(515);break;case lf:r.depthFunc(514);break;case cf:r.depthFunc(518);break;case uf:r.depthFunc(516);break;case hf:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);J=Se}},setLocked:function(Se){S=Se},setClear:function(Se){Fe!==Se&&(r.clearDepth(Se),Fe=Se)},reset:function(){S=!1,he=null,J=null,Fe=null}}}function a(){let S=!1,he=null,J=null,Fe=null,Se=null,We=null,ve=null,Ue=null,it=null;return{setTest:function(Je){S||(Je?ee(2960):me(2960))},setMask:function(Je){he!==Je&&!S&&(r.stencilMask(Je),he=Je)},setFunc:function(Je,Xt,jt){(J!==Je||Fe!==Xt||Se!==jt)&&(r.stencilFunc(Je,Xt,jt),J=Je,Fe=Xt,Se=jt)},setOp:function(Je,Xt,jt){(We!==Je||ve!==Xt||Ue!==jt)&&(r.stencilOp(Je,Xt,jt),We=Je,ve=Xt,Ue=jt)},setLocked:function(Je){S=Je},setClear:function(Je){it!==Je&&(r.clearStencil(Je),it=Je)},reset:function(){S=!1,he=null,J=null,Fe=null,Se=null,We=null,ve=null,Ue=null,it=null}}}const o=new i,l=new s,c=new a;let u={},h={},d=null,f=!1,g=null,v=null,x=null,p=null,m=null,b=null,y=null,_=!1,E=null,C=null,I=null,Z=null,O=null;const R=r.getParameter(35661);let M=!1,w=0;const z=r.getParameter(7938);z.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(z)[1]),M=w>=1):z.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),M=w>=2);let F=null,D={};const k=r.getParameter(3088),$=r.getParameter(2978),ie=new ct().fromArray(k),H=new ct().fromArray($);function W(S,he,J){const Fe=new Uint8Array(4),Se=r.createTexture();r.bindTexture(S,Se),r.texParameteri(S,10241,9728),r.texParameteri(S,10240,9728);for(let We=0;We<J;We++)r.texImage2D(he+We,0,6408,1,1,0,6408,5121,Fe);return Se}const se={};se[3553]=W(3553,3553,1),se[34067]=W(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(2929),l.setFunc(To),Oe(!1),q(Dl),ee(2884),ge(ii);function ee(S){u[S]!==!0&&(r.enable(S),u[S]=!0)}function me(S){u[S]!==!1&&(r.disable(S),u[S]=!1)}function Le(S,he){return h[S]!==he?(r.bindFramebuffer(S,he),h[S]=he,n&&(S===36009&&(h[36160]=he),S===36160&&(h[36009]=he)),!0):!1}function Q(S){return d!==S?(r.useProgram(S),d=S,!0):!1}const Me={[Ji]:32774,[jd]:32778,[Yd]:32779};if(n)Me[Nl]=32775,Me[Bl]=32776;else{const S=e.get("EXT_blend_minmax");S!==null&&(Me[Nl]=S.MIN_EXT,Me[Bl]=S.MAX_EXT)}const we={[Zd]:0,[Jd]:1,[$d]:768,[Hu]:770,[rf]:776,[tf]:774,[Kd]:772,[Qd]:769,[Gu]:771,[nf]:775,[ef]:773};function ge(S,he,J,Fe,Se,We,ve,Ue){if(S===ii){f===!0&&(me(3042),f=!1);return}if(f===!1&&(ee(3042),f=!0),S!==Xd){if(S!==g||Ue!==_){if((v!==Ji||m!==Ji)&&(r.blendEquation(32774),v=Ji,m=Ji),Ue)switch(S){case Hr:r.blendFuncSeparate(1,771,1,771);break;case Fl:r.blendFunc(1,1);break;case zl:r.blendFuncSeparate(0,0,769,771);break;case kl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Hr:r.blendFuncSeparate(770,771,1,771);break;case Fl:r.blendFunc(770,1);break;case zl:r.blendFunc(0,769);break;case kl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}x=null,p=null,b=null,y=null,g=S,_=Ue}return}Se=Se||he,We=We||J,ve=ve||Fe,(he!==v||Se!==m)&&(r.blendEquationSeparate(Me[he],Me[Se]),v=he,m=Se),(J!==x||Fe!==p||We!==b||ve!==y)&&(r.blendFuncSeparate(we[J],we[Fe],we[We],we[ve]),x=J,p=Fe,b=We,y=ve),g=S,_=null}function Te(S,he){S.side===rr?me(2884):ee(2884);let J=S.side===xt;he&&(J=!J),Oe(J),S.blending===Hr&&S.transparent===!1?ge(ii):ge(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),l.setFunc(S.depthFunc),l.setTest(S.depthTest),l.setMask(S.depthWrite),o.setMask(S.colorWrite);const Fe=S.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(S.stencilWriteMask),c.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),c.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),le(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ee(32926):me(32926)}function Oe(S){E!==S&&(S?r.frontFace(2304):r.frontFace(2305),E=S)}function q(S){S!==Gd?(ee(2884),S!==C&&(S===Dl?r.cullFace(1029):S===Wd?r.cullFace(1028):r.cullFace(1032))):me(2884),C=S}function re(S){S!==I&&(M&&r.lineWidth(S),I=S)}function le(S,he,J){S?(ee(32823),(Z!==he||O!==J)&&(r.polygonOffset(he,J),Z=he,O=J)):me(32823)}function _e(S){S?ee(3089):me(3089)}function pe(S){S===void 0&&(S=33984+R-1),F!==S&&(r.activeTexture(S),F=S)}function ye(S,he){F===null&&pe();let J=D[F];J===void 0&&(J={type:void 0,texture:void 0},D[F]=J),(J.type!==S||J.texture!==he)&&(r.bindTexture(S,he||se[S]),J.type=S,J.texture=he)}function Ee(){const S=D[F];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ke(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ne(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function L(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function T(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ae(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ae(S){ie.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),ie.copy(S))}function Ce(S){H.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),H.copy(S))}function ce(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},F=null,D={},h={},d=null,f=!1,g=null,v=null,x=null,p=null,m=null,b=null,y=null,_=!1,E=null,C=null,I=null,Z=null,O=null,ie.set(0,0,r.canvas.width,r.canvas.height),H.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ee,disable:me,bindFramebuffer:Le,useProgram:Q,setBlending:ge,setMaterial:Te,setFlipSided:Oe,setCullFace:q,setLineWidth:re,setPolygonOffset:le,setScissorTest:_e,activeTexture:pe,bindTexture:ye,unbindTexture:Ee,compressedTexImage2D:ke,texImage2D:fe,texImage3D:ae,texStorage2D:te,texStorage3D:oe,texSubImage2D:Ne,texSubImage3D:L,compressedTexSubImage2D:T,scissor:Ae,viewport:Ce,reset:ce}}function $0(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let v,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,T){return x?new OffscreenCanvas(L,T):xa("canvas")}function m(L,T,te,oe){let fe=1;if((L.width>oe||L.height>oe)&&(fe=oe/Math.max(L.width,L.height)),fe<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ae=T?yp:Math.floor,Ae=ae(fe*L.width),Ce=ae(fe*L.height);v===void 0&&(v=p(Ae,Ce));const ce=te?p(Ae,Ce):v;return ce.width=Ae,ce.height=Ce,ce.getContext("2d").drawImage(L,0,0,Ae,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ae+"x"+Ce+")."),ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return Ql(L.width)&&Ql(L.height)}function y(L){return o?!1:L.wrapS!==Qt||L.wrapT!==Qt||L.minFilter!==_t&&L.minFilter!==Bt}function _(L,T){return L.generateMipmaps&&T&&L.minFilter!==_t&&L.minFilter!==Bt}function E(L){r.generateMipmap(L)}function C(L,T,te,oe){if(o===!1)return T;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;return T===6403&&(te===5126&&(fe=33326),te===5131&&(fe=33325),te===5121&&(fe=33321)),T===6407&&(te===5126&&(fe=34837),te===5131&&(fe=34843),te===5121&&(fe=32849)),T===6408&&(te===5126&&(fe=34836),te===5131&&(fe=34842),te===5121&&(fe=oe===ur?35907:32856)),(fe===33325||fe===33326||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function I(L,T,te){return _(L,te)===!0||L.isFramebufferTexture&&L.minFilter!==_t&&L.minFilter!==Bt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function Z(L){return L===_t||L===Ol||L===Ul?9728:9729}function O(L){const T=L.target;T.removeEventListener("dispose",O),M(T),T.isVideoTexture&&g.delete(T),a.memory.textures--}function R(L){const T=L.target;T.removeEventListener("dispose",R),w(T)}function M(L){const T=n.get(L);T.__webglInit!==void 0&&(r.deleteTexture(T.__webglTexture),n.remove(L))}function w(L){const T=L.texture,te=n.get(L),oe=n.get(T);if(L){if(oe.__webglTexture!==void 0&&(r.deleteTexture(oe.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)r.deleteFramebuffer(te.__webglFramebuffer[fe]),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer[fe]);else r.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&r.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer&&r.deleteRenderbuffer(te.__webglColorRenderbuffer),te.__webglDepthRenderbuffer&&r.deleteRenderbuffer(te.__webglDepthRenderbuffer);if(L.isWebGLMultipleRenderTargets)for(let fe=0,ae=T.length;fe<ae;fe++){const Ae=n.get(T[fe]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(T[fe])}n.remove(T),n.remove(L)}}let z=0;function F(){z=0}function D(){const L=z;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),z+=1,L}function k(L,T){const te=n.get(L);if(L.isVideoTexture&&pe(L),L.version>0&&te.__version!==L.version){const oe=L.image;if(oe===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(te,L,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,te.__webglTexture)}function $(L,T){const te=n.get(L);if(L.version>0&&te.__version!==L.version){Le(te,L,T);return}t.activeTexture(33984+T),t.bindTexture(35866,te.__webglTexture)}function ie(L,T){const te=n.get(L);if(L.version>0&&te.__version!==L.version){Le(te,L,T);return}t.activeTexture(33984+T),t.bindTexture(32879,te.__webglTexture)}function H(L,T){const te=n.get(L);if(L.version>0&&te.__version!==L.version){Q(te,L,T);return}t.activeTexture(33984+T),t.bindTexture(34067,te.__webglTexture)}const W={[Co]:10497,[Qt]:33071,[Lo]:33648},se={[_t]:9728,[Ol]:9984,[Ul]:9986,[Bt]:9729,[_f]:9985,[va]:9987};function ee(L,T,te){if(te?(r.texParameteri(L,10242,W[T.wrapS]),r.texParameteri(L,10243,W[T.wrapT]),(L===32879||L===35866)&&r.texParameteri(L,32882,W[T.wrapR]),r.texParameteri(L,10240,se[T.magFilter]),r.texParameteri(L,10241,se[T.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),(L===32879||L===35866)&&r.texParameteri(L,32882,33071),(T.wrapS!==Qt||T.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,Z(T.magFilter)),r.texParameteri(L,10241,Z(T.minFilter)),T.minFilter!==_t&&T.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(T.type===ei&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Si&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(L,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function me(L,T){L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",O),L.__webglTexture=r.createTexture(),a.memory.textures++)}function Le(L,T,te){let oe=3553;T.isDataTexture2DArray&&(oe=35866),T.isDataTexture3D&&(oe=32879),me(L,T),t.activeTexture(33984+te),t.bindTexture(oe,L.__webglTexture),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const fe=y(T)&&b(T.image)===!1,ae=m(T.image,fe,!1,u),Ae=b(ae)||o,Ce=s.convert(T.format);let ce=s.convert(T.type),S=C(T.internalFormat,Ce,ce,T.encoding);ee(oe,T,Ae);let he;const J=T.mipmaps,Fe=o&&T.isVideoTexture!==!0,Se=L.__version===void 0,We=I(T,ae,Ae);if(T.isDepthTexture)S=6402,o?T.type===ei?S=36012:T.type===Zs?S=33190:T.type===tr?S=35056:S=33189:T.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ei&&S===6402&&T.type!==Zr&&T.type!==Zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Zr,ce=s.convert(T.type)),T.format===sr&&S===6402&&(S=34041,T.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=tr,ce=s.convert(T.type))),Fe&&Se?t.texStorage2D(3553,1,S,ae.width,ae.height):t.texImage2D(3553,0,S,ae.width,ae.height,0,Ce,ce,null);else if(T.isDataTexture)if(J.length>0&&Ae){Fe&&Se&&t.texStorage2D(3553,We,S,J[0].width,J[0].height);for(let ve=0,Ue=J.length;ve<Ue;ve++)he=J[ve],Fe?t.texSubImage2D(3553,0,0,0,he.width,he.height,Ce,ce,he.data):t.texImage2D(3553,ve,S,he.width,he.height,0,Ce,ce,he.data);T.generateMipmaps=!1}else Fe?(Se&&t.texStorage2D(3553,We,S,ae.width,ae.height),t.texSubImage2D(3553,0,0,0,ae.width,ae.height,Ce,ce,ae.data)):t.texImage2D(3553,0,S,ae.width,ae.height,0,Ce,ce,ae.data);else if(T.isCompressedTexture){Fe&&Se&&t.texStorage2D(3553,We,S,J[0].width,J[0].height);for(let ve=0,Ue=J.length;ve<Ue;ve++)he=J[ve],T.format!==Tt&&T.format!==Ti?Ce!==null?Fe?t.compressedTexSubImage2D(3553,ve,0,0,he.width,he.height,Ce,he.data):t.compressedTexImage2D(3553,ve,S,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,ve,0,0,he.width,he.height,Ce,ce,he.data):t.texImage2D(3553,ve,S,he.width,he.height,0,Ce,ce,he.data)}else if(T.isDataTexture2DArray)Fe?(Se&&t.texStorage3D(35866,We,S,ae.width,ae.height,ae.depth),t.texSubImage3D(35866,0,0,0,0,ae.width,ae.height,ae.depth,Ce,ce,ae.data)):t.texImage3D(35866,0,S,ae.width,ae.height,ae.depth,0,Ce,ce,ae.data);else if(T.isDataTexture3D)Fe?(Se&&t.texStorage3D(32879,We,S,ae.width,ae.height,ae.depth),t.texSubImage3D(32879,0,0,0,0,ae.width,ae.height,ae.depth,Ce,ce,ae.data)):t.texImage3D(32879,0,S,ae.width,ae.height,ae.depth,0,Ce,ce,ae.data);else if(T.isFramebufferTexture)Fe&&Se?t.texStorage2D(3553,We,S,ae.width,ae.height):t.texImage2D(3553,0,S,ae.width,ae.height,0,Ce,ce,null);else if(J.length>0&&Ae){Fe&&Se&&t.texStorage2D(3553,We,S,J[0].width,J[0].height);for(let ve=0,Ue=J.length;ve<Ue;ve++)he=J[ve],Fe?t.texSubImage2D(3553,ve,0,0,Ce,ce,he):t.texImage2D(3553,ve,S,Ce,ce,he);T.generateMipmaps=!1}else Fe?(Se&&t.texStorage2D(3553,We,S,ae.width,ae.height),t.texSubImage2D(3553,0,0,0,Ce,ce,ae)):t.texImage2D(3553,0,S,Ce,ce,ae);_(T,Ae)&&E(oe),L.__version=T.version,T.onUpdate&&T.onUpdate(T)}function Q(L,T,te){if(T.image.length!==6)return;me(L,T),t.activeTexture(33984+te),t.bindTexture(34067,L.__webglTexture),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const oe=T&&(T.isCompressedTexture||T.image[0].isCompressedTexture),fe=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let ve=0;ve<6;ve++)!oe&&!fe?ae[ve]=m(T.image[ve],!1,!0,c):ae[ve]=fe?T.image[ve].image:T.image[ve];const Ae=ae[0],Ce=b(Ae)||o,ce=s.convert(T.format),S=s.convert(T.type),he=C(T.internalFormat,ce,S,T.encoding),J=o&&T.isVideoTexture!==!0,Fe=L.__version===void 0;let Se=I(T,Ae,Ce);ee(34067,T,Ce);let We;if(oe){J&&Fe&&t.texStorage2D(34067,Se,he,Ae.width,Ae.height);for(let ve=0;ve<6;ve++){We=ae[ve].mipmaps;for(let Ue=0;Ue<We.length;Ue++){const it=We[Ue];T.format!==Tt&&T.format!==Ti?ce!==null?J?t.compressedTexSubImage2D(34069+ve,Ue,0,0,it.width,it.height,ce,it.data):t.compressedTexImage2D(34069+ve,Ue,he,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?t.texSubImage2D(34069+ve,Ue,0,0,it.width,it.height,ce,S,it.data):t.texImage2D(34069+ve,Ue,he,it.width,it.height,0,ce,S,it.data)}}}else{We=T.mipmaps,J&&Fe&&(We.length>0&&Se++,t.texStorage2D(34067,Se,he,ae[0].width,ae[0].height));for(let ve=0;ve<6;ve++)if(fe){J?t.texSubImage2D(34069+ve,0,0,0,ae[ve].width,ae[ve].height,ce,S,ae[ve].data):t.texImage2D(34069+ve,0,he,ae[ve].width,ae[ve].height,0,ce,S,ae[ve].data);for(let Ue=0;Ue<We.length;Ue++){const Je=We[Ue].image[ve].image;J?t.texSubImage2D(34069+ve,Ue+1,0,0,Je.width,Je.height,ce,S,Je.data):t.texImage2D(34069+ve,Ue+1,he,Je.width,Je.height,0,ce,S,Je.data)}}else{J?t.texSubImage2D(34069+ve,0,0,0,ce,S,ae[ve]):t.texImage2D(34069+ve,0,he,ce,S,ae[ve]);for(let Ue=0;Ue<We.length;Ue++){const it=We[Ue];J?t.texSubImage2D(34069+ve,Ue+1,0,0,ce,S,it.image[ve]):t.texImage2D(34069+ve,Ue+1,he,ce,S,it.image[ve])}}}_(T,Ce)&&E(34067),L.__version=T.version,T.onUpdate&&T.onUpdate(T)}function Me(L,T,te,oe,fe){const ae=s.convert(te.format),Ae=s.convert(te.type),Ce=C(te.internalFormat,ae,Ae,te.encoding);n.get(T).__hasExternalTextures||(fe===32879||fe===35866?t.texImage3D(fe,0,Ce,T.width,T.height,T.depth,0,ae,Ae,null):t.texImage2D(fe,0,Ce,T.width,T.height,0,ae,Ae,null)),t.bindFramebuffer(36160,L),T.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,oe,fe,n.get(te).__webglTexture,0,_e(T)):r.framebufferTexture2D(36160,oe,fe,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(L,T,te){if(r.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let oe=33189;if(te||T.useRenderToTexture){const fe=T.depthTexture;fe&&fe.isDepthTexture&&(fe.type===ei?oe=36012:fe.type===Zs&&(oe=33190));const ae=_e(T);T.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,ae,oe,T.width,T.height):r.renderbufferStorageMultisample(36161,ae,oe,T.width,T.height)}else r.renderbufferStorage(36161,oe,T.width,T.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const oe=_e(T);te&&T.useRenderbuffer?r.renderbufferStorageMultisample(36161,oe,35056,T.width,T.height):T.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,oe,35056,T.width,T.height):r.renderbufferStorage(36161,34041,T.width,T.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{const oe=T.isWebGLMultipleRenderTargets===!0?T.texture[0]:T.texture,fe=s.convert(oe.format),ae=s.convert(oe.type),Ae=C(oe.internalFormat,fe,ae,oe.encoding),Ce=_e(T);te&&T.useRenderbuffer?r.renderbufferStorageMultisample(36161,Ce,Ae,T.width,T.height):T.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,Ce,Ae,T.width,T.height):r.renderbufferStorage(36161,Ae,T.width,T.height)}r.bindRenderbuffer(36161,null)}function ge(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const oe=n.get(T.depthTexture).__webglTexture,fe=_e(T);if(T.depthTexture.format===Ei)T.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,oe,0,fe):r.framebufferTexture2D(36160,36096,3553,oe,0);else if(T.depthTexture.format===sr)T.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,oe,0,fe):r.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function Te(L){const T=n.get(L),te=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ge(T.__webglFramebuffer,L)}else if(te){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]=r.createRenderbuffer(),we(T.__webglDepthbuffer[oe],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),we(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Oe(L,T,te){const oe=n.get(L);T!==void 0&&Me(oe.__webglFramebuffer,L,L.texture,36064,3553),te!==void 0&&Te(L)}function q(L){const T=L.texture,te=n.get(L),oe=n.get(T);L.addEventListener("dispose",R),L.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=T.version,a.memory.textures++);const fe=L.isWebGLCubeRenderTarget===!0,ae=L.isWebGLMultipleRenderTargets===!0,Ae=T.isDataTexture3D||T.isDataTexture2DArray,Ce=b(L)||o;if(o&&T.format===Ti&&(T.type===ei||T.type===Si)&&(T.format=Tt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),fe){te.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)te.__webglFramebuffer[ce]=r.createFramebuffer()}else if(te.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const ce=L.texture;for(let S=0,he=ce.length;S<he;S++){const J=n.get(ce[S]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(L.useRenderbuffer)if(o){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,te.__webglColorRenderbuffer);const ce=s.convert(T.format),S=s.convert(T.type),he=C(T.internalFormat,ce,S,T.encoding),J=_e(L);r.renderbufferStorageMultisample(36161,J,he,L.width,L.height),t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,te.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),we(te.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(fe){t.bindTexture(34067,oe.__webglTexture),ee(34067,T,Ce);for(let ce=0;ce<6;ce++)Me(te.__webglFramebuffer[ce],L,T,36064,34069+ce);_(T,Ce)&&E(34067),t.unbindTexture()}else if(ae){const ce=L.texture;for(let S=0,he=ce.length;S<he;S++){const J=ce[S],Fe=n.get(J);t.bindTexture(3553,Fe.__webglTexture),ee(3553,J,Ce),Me(te.__webglFramebuffer,L,J,36064+S,3553),_(J,Ce)&&E(3553)}t.unbindTexture()}else{let ce=3553;Ae&&(o?ce=T.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(ce,oe.__webglTexture),ee(ce,T,Ce),Me(te.__webglFramebuffer,L,T,36064,ce),_(T,Ce)&&E(ce),t.unbindTexture()}L.depthBuffer&&Te(L)}function re(L){const T=b(L)||o,te=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let oe=0,fe=te.length;oe<fe;oe++){const ae=te[oe];if(_(ae,T)){const Ae=L.isWebGLCubeRenderTarget?34067:3553,Ce=n.get(ae).__webglTexture;t.bindTexture(Ae,Ce),E(Ae),t.unbindTexture()}}}function le(L){if(L.useRenderbuffer)if(o){const T=L.width,te=L.height;let oe=16384;const fe=[36064],ae=L.stencilBuffer?33306:36096;L.depthBuffer&&fe.push(ae),L.ignoreDepthForMultisampleCopy||(L.depthBuffer&&(oe|=256),L.stencilBuffer&&(oe|=1024));const Ae=n.get(L);t.bindFramebuffer(36008,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ae.__webglFramebuffer),L.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[ae]),r.invalidateFramebuffer(36009,[ae])),r.blitFramebuffer(0,0,T,te,0,0,T,te,oe,9728),r.invalidateFramebuffer(36008,fe),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Ae.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function _e(L){return o&&(L.useRenderbuffer||L.useRenderToTexture)?Math.min(h,L.samples):0}function pe(L){const T=a.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}let ye=!1,Ee=!1;function ke(L,T){L&&L.isWebGLRenderTarget&&(ye===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ye=!0),L=L.texture),k(L,T)}function Ne(L,T){L&&L.isWebGLCubeRenderTarget&&(Ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ee=!0),L=L.texture),H(L,T)}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=q,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Me,this.safeSetTexture2D=ke,this.safeSetTextureCube=Ne}function Q0(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===Un)return 5121;if(s===wf)return 32819;if(s===Sf)return 32820;if(s===Tf)return 33635;if(s===yf)return 5120;if(s===bf)return 5122;if(s===Zr)return 5123;if(s===Mf)return 5124;if(s===Zs)return 5125;if(s===ei)return 5126;if(s===Si)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ef)return 6406;if(s===Ti)return 6407;if(s===Tt)return 6408;if(s===Af)return 6409;if(s===Cf)return 6410;if(s===Ei)return 6402;if(s===sr)return 34041;if(s===Lf)return 6403;if(s===Rf)return 36244;if(s===Pf)return 33319;if(s===If)return 33320;if(s===Df)return 36248;if(s===Ff)return 36249;if(s===Vl||s===Hl||s===Gl||s===Wl)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ql||s===Xl||s===jl||s===Yl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Zl||s===Jl)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Zl)return a.COMPRESSED_RGB8_ETC2;if(s===Jl)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===kf||s===Nf||s===Bf||s===Of||s===Uf||s===Vf||s===Hf||s===Gf||s===Wf||s===qf||s===Xf||s===jf||s===Yf||s===Zf||s===$f||s===Qf||s===Kf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===cp||s===up)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===Jf)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===tr)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class fh extends Nt{constructor(e=[]){super(),this.cameras=e}}fh.prototype.isArrayCamera=!0;class Nr extends st{constructor(){super(),this.type="Group"}}Nr.prototype.isGroup=!0;const K0={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0))),c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const m=new Nr;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[v.jointName]=m,c.add(m)}const p=c.joints[v.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Io extends At{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=Zr),n===void 0&&u===sr&&(n=tr),super(null,i,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}Io.prototype.isDepthTexture=!0;class ex extends Ai{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,d=null,f=!1,g=null;const v=t.getContextAttributes();let x=null,p=null;const m=[],b=new Map,y=new Nt;y.layers.enable(1),y.viewport=new ct;const _=new Nt;_.layers.enable(2),_.viewport=new ct;const E=[y,_],C=new fh;C.layers.enable(1),C.layers.enable(2);let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=m[H];return W===void 0&&(W=new ao,m[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=m[H];return W===void 0&&(W=new ao,m[H]=W),W.getGripSpace()},this.getHand=function(H){let W=m[H];return W===void 0&&(W=new ao,m[H]=W),W.getHandSpace()};function O(H){const W=b.get(H.inputSource);W&&W.dispatchEvent({type:H.type,data:H.inputSource})}function R(){b.forEach(function(H,W){H.disconnect(W)}),b.clear(),I=null,Z=null,e.setRenderTarget(x),d=null,h=null,u=null,i=null,p=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",R),i.addEventListener("inputsourceschange",M),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),p=new sn(d.framebufferWidth,d.framebufferHeight,{format:Tt,type:Un,encoding:e.outputEncoding})}else{f=v.antialias;let W=null,se=null,ee=null;v.depth&&(ee=v.stencil?35056:33190,W=v.stencil?sr:Ei,se=v.stencil?tr:Zr);const me={colorFormat:v.alpha||f?32856:32849,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(me),i.updateRenderState({layers:[h]}),f?p=new el(h.textureWidth,h.textureHeight,{format:Tt,type:Un,depthTexture:new Io(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):p=new sn(h.textureWidth,h.textureHeight,{format:v.alpha?Tt:Ti,type:Un,depthTexture:new Io(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function M(H){const W=i.inputSources;for(let se=0;se<m.length;se++)b.set(W[se],m[se]);for(let se=0;se<H.removed.length;se++){const ee=H.removed[se],me=b.get(ee);me&&(me.dispatchEvent({type:"disconnected",data:ee}),b.delete(ee))}for(let se=0;se<H.added.length;se++){const ee=H.added[se],me=b.get(ee);me&&me.dispatchEvent({type:"connected",data:ee})}}const w=new P,z=new P;function F(H,W,se){w.setFromMatrixPosition(W.matrixWorld),z.setFromMatrixPosition(se.matrixWorld);const ee=w.distanceTo(z),me=W.projectionMatrix.elements,Le=se.projectionMatrix.elements,Q=me[14]/(me[10]-1),Me=me[14]/(me[10]+1),we=(me[9]+1)/me[5],ge=(me[9]-1)/me[5],Te=(me[8]-1)/me[0],Oe=(Le[8]+1)/Le[0],q=Q*Te,re=Q*Oe,le=ee/(-Te+Oe),_e=le*-Te;W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(_e),H.translateZ(le),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const pe=Q+le,ye=Me+le,Ee=q-_e,ke=re+(ee-_e),Ne=we*Me/ye*pe,L=ge*Me/ye*pe;H.projectionMatrix.makePerspective(Ee,ke,Ne,L,pe,ye)}function D(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;C.near=_.near=y.near=H.near,C.far=_.far=y.far=H.far,(I!==C.near||Z!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,Z=C.far);const W=H.parent,se=C.cameras;D(C,W);for(let me=0;me<se.length;me++)D(se[me],W);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),H.position.copy(C.position),H.quaternion.copy(C.quaternion),H.scale.copy(C.scale),H.matrix.copy(C.matrix),H.matrixWorld.copy(C.matrixWorld);const ee=H.children;for(let me=0,Le=ee.length;me<Le;me++)ee[me].updateMatrixWorld(!0);se.length===2?F(C,y,_):C.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(H){h!==null&&(h.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)};let k=null;function $(H,W){if(c=W.getViewerPose(a),g=W,c!==null){const ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let me=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,me=!0);for(let Le=0;Le<ee.length;Le++){const Q=ee[Le];let Me=null;if(d!==null)Me=d.getViewport(Q);else{const ge=u.getViewSubImage(h,Q);Me=ge.viewport,Le===0&&(e.setRenderTargetTextures(p,ge.colorTexture,h.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(p))}const we=E[Le];we.matrix.fromArray(Q.transform.matrix),we.projectionMatrix.fromArray(Q.projectionMatrix),we.viewport.set(Me.x,Me.y,Me.width,Me.height),Le===0&&C.matrix.copy(we.matrix),me===!0&&C.cameras.push(we)}}const se=i.inputSources;for(let ee=0;ee<m.length;ee++){const me=m[ee],Le=se[ee];me.update(Le,W,a)}k&&k(H,W),g=null}const ie=new Qu;ie.setAnimationLoop($),this.setAnimationLoop=function(H){k=H},this.dispose=function(){}}}function tx(r){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,b,y,_){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),l(p,m)):m.isMeshToonMaterial?(n(p,m),u(p,m)):m.isMeshPhongMaterial?(n(p,m),c(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?d(p,m,_):h(p,m)):m.isMeshMatcapMaterial?(n(p,m),f(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),v(p,m)):m.isMeshNormalMaterial?(n(p,m),x(p,m)):m.isLineBasicMaterial?(i(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?a(p,m,b,y):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=r.get(m).envMap;b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function i(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,b,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=y*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),r.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){h(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===xt&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function v(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function x(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function nx(){const r=xa("canvas");return r.style.display="block",r}function at(r={}){const e=r.canvas!==void 0?r.canvas:nx(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fn,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const v=this;let x=!1,p=0,m=0,b=null,y=-1,_=null;const E=new ct,C=new ct;let I=null,Z=e.width,O=e.height,R=1,M=null,w=null;const z=new ct(0,0,Z,O),F=new ct(0,0,Z,O);let D=!1;const k=[],$=new ya;let ie=!1,H=!1,W=null;const se=new ze,ee=new P,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return b===null?R:1}let Q=t;function Me(A,U){for(let Y=0;Y<A.length;Y++){const G=A[Y],ne=e.getContext(G,U);if(ne!==null)return ne}return null}try{const A={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$o}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Se,!1),Q===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),Q=Me(U,A),Q===null)throw Me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,ge,Te,Oe,q,re,le,_e,pe,ye,Ee,ke,Ne,L,T,te,oe,fe,ae,Ae,Ce,ce,S;function he(){we=new Mv(Q),ge=new mv(Q,we,r),we.init(ge),ce=new Q0(Q,we,ge),Te=new J0(Q,we,ge),k[0]=1029,Oe=new Tv,q=new O0,re=new $0(Q,we,Te,q,ge,ce,Oe),le=new vv(v),_e=new bv(v),pe=new Op(Q,ge),S=new fv(Q,we,pe,ge),ye=new wv(Q,pe,Oe,S),Ee=new Lv(Q,ye,pe,Oe),ae=new Cv(Q,ge,re),te=new gv(q),ke=new B0(v,le,_e,we,ge,S,te),Ne=new tx(q),L=new V0,T=new j0(we,ge),fe=new dv(v,le,Te,Ee,o),oe=new dh(v,Ee,ge),Ae=new pv(Q,we,Oe,ge),Ce=new Sv(Q,we,Oe,ge),Oe.programs=ke.programs,v.capabilities=ge,v.extensions=we,v.properties=q,v.renderLists=L,v.shadowMap=oe,v.state=Te,v.info=Oe}he();const J=new ex(v,Q);this.xr=J,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(A){A!==void 0&&(R=A,this.setSize(Z,O,!1))},this.getSize=function(A){return A.set(Z,O)},this.setSize=function(A,U,Y){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,O=U,e.width=Math.floor(A*R),e.height=Math.floor(U*R),Y!==!1&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Z*R,O*R).floor()},this.setDrawingBufferSize=function(A,U,Y){Z=A,O=U,R=Y,e.width=Math.floor(A*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,U,Y,G){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,U,Y,G),Te.viewport(E.copy(z).multiplyScalar(R).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,U,Y,G){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,U,Y,G),Te.scissor(C.copy(F).multiplyScalar(R).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(A){Te.setScissorTest(D=A)},this.setOpaqueSort=function(A){M=A},this.setTransparentSort=function(A){w=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(A,U,Y){let G=0;(A===void 0||A)&&(G|=16384),(U===void 0||U)&&(G|=256),(Y===void 0||Y)&&(G|=1024),Q.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Se,!1),L.dispose(),T.dispose(),q.dispose(),le.dispose(),_e.dispose(),Ee.dispose(),S.dispose(),ke.dispose(),J.dispose(),J.removeEventListener("sessionstart",Xt),J.removeEventListener("sessionend",jt),W&&(W.dispose(),W=null),Vt.stop()};function Fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=Oe.autoReset,U=oe.enabled,Y=oe.autoUpdate,G=oe.needsUpdate,ne=oe.type;he(),Oe.autoReset=A,oe.enabled=U,oe.autoUpdate=Y,oe.needsUpdate=G,oe.type=ne}function We(A){const U=A.target;U.removeEventListener("dispose",We),ve(U)}function ve(A){Ue(A),q.remove(A)}function Ue(A){const U=q.get(A).programs;U!==void 0&&(U.forEach(function(Y){ke.releaseProgram(Y)}),A.isShaderMaterial&&ke.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,Y,G,ne,Ve){U===null&&(U=me);const Ge=ne.isMesh&&ne.matrixWorld.determinant()<0,qe=us(A,U,Y,G,ne);Te.setMaterial(G,Ge);let He=Y.index;const $e=Y.attributes.position;if(He===null){if($e===void 0||$e.count===0)return}else if(He.count===0)return;let Xe=1;G.wireframe===!0&&(He=ye.getWireframeAttribute(Y),Xe=2),S.setup(ne,G,qe,Y,He);let Ze,pt=Ae;He!==null&&(Ze=pe.get(He),pt=Ce,pt.setIndex(Ze));const pi=He!==null?He.count:$e.count,Ri=Y.drawRange.start*Xe,et=Y.drawRange.count*Xe,mn=Ve!==null?Ve.start*Xe:0,vt=Ve!==null?Ve.count*Xe:1/0,gn=Math.max(Ri,mn),hs=Math.min(pi,Ri+et,mn+vt)-1,vn=Math.max(0,hs-gn+1);if(vn!==0){if(ne.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*Le()),pt.setMode(1)):pt.setMode(4);else if(ne.isLine){let Cn=G.linewidth;Cn===void 0&&(Cn=1),Te.setLineWidth(Cn*Le()),ne.isLineSegments?pt.setMode(1):ne.isLineLoop?pt.setMode(2):pt.setMode(3)}else ne.isPoints?pt.setMode(0):ne.isSprite&&pt.setMode(4);if(ne.isInstancedMesh)pt.renderInstances(gn,vn,ne.count);else if(Y.isInstancedBufferGeometry){const Cn=Math.min(Y.instanceCount,Y._maxInstanceCount);pt.renderInstances(gn,vn,Cn)}else pt.render(gn,vn)}},this.compile=function(A,U){d=T.get(A),d.init(),g.push(d),A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights(v.physicallyCorrectLights),A.traverse(function(Y){const G=Y.material;if(G)if(Array.isArray(G))for(let ne=0;ne<G.length;ne++){const Ve=G[ne];Li(Ve,A,Y)}else Li(G,A,Y)}),g.pop(),d=null};let it=null;function Je(A){it&&it(A)}function Xt(){Vt.stop()}function jt(){Vt.start()}const Vt=new Qu;Vt.setAnimationLoop(Je),typeof window<"u"&&Vt.setContext(window),this.setAnimationLoop=function(A){it=A,J.setAnimationLoop(A),A===null?Vt.stop():Vt.start()},J.addEventListener("sessionstart",Xt),J.addEventListener("sessionend",jt),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,b),d=T.get(A,g.length),d.init(),g.push(d),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(se),H=this.localClippingEnabled,ie=te.init(this.clippingPlanes,H,U),h=L.get(A,f.length),h.init(),f.push(h),yr(A,U,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(M,w),ie===!0&&te.beginShadows();const Y=d.state.shadowsArray;if(oe.render(Y,A,U),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(h,A),d.setupLights(v.physicallyCorrectLights),U.isArrayCamera){const G=U.cameras;for(let ne=0,Ve=G.length;ne<Ve;ne++){const Ge=G[ne];br(h,A,Ge,Ge.viewport)}}else br(h,A,U);b!==null&&(re.updateMultisampleRenderTarget(b),re.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,U),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1),S.resetDefaultState(),y=-1,_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function yr(A,U,Y,G){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const Ge=Ee.update(A),qe=A.material;qe.visible&&h.push(A,Ge,qe,Y,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Oe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Oe.render.frame),!A.frustumCulled||$.intersectsObject(A))){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const Ge=Ee.update(A),qe=A.material;if(Array.isArray(qe)){const He=Ge.groups;for(let $e=0,Xe=He.length;$e<Xe;$e++){const Ze=He[$e],pt=qe[Ze.materialIndex];pt&&pt.visible&&h.push(A,Ge,pt,Y,ee.z,Ze)}}else qe.visible&&h.push(A,Ge,qe,Y,ee.z,null)}}const Ve=A.children;for(let Ge=0,qe=Ve.length;Ge<qe;Ge++)yr(Ve[Ge],U,Y,G)}function br(A,U,Y,G){const ne=A.opaque,Ve=A.transmissive,Ge=A.transparent;d.setupLightsView(Y),Ve.length>0&&cs(ne,U,Y),G&&Te.viewport(E.copy(G)),ne.length>0&&fi(ne,U,Y),Ve.length>0&&fi(Ve,U,Y),Ge.length>0&&fi(Ge,U,Y)}function cs(A,U,Y){if(W===null){const Ge=a===!0&&ge.isWebGL2===!0?el:sn;W=new Ge(1024,1024,{generateMipmaps:!0,type:ce.convert(Si)!==null?Si:Un,minFilter:va,magFilter:_t,wrapS:Qt,wrapT:Qt,useRenderToTexture:we.has("WEBGL_multisampled_render_to_texture")})}const G=v.getRenderTarget();v.setRenderTarget(W),v.clear();const ne=v.toneMapping;v.toneMapping=ri,fi(A,U,Y),v.toneMapping=ne,re.updateMultisampleRenderTarget(W),re.updateRenderTargetMipmap(W),v.setRenderTarget(G)}function fi(A,U,Y){const G=U.isScene===!0?U.overrideMaterial:null;for(let ne=0,Ve=A.length;ne<Ve;ne++){const Ge=A[ne],qe=Ge.object,He=Ge.geometry,$e=G===null?Ge.material:G,Xe=Ge.group;qe.layers.test(Y.layers)&&Ci(qe,U,Y,He,$e,Xe)}}function Ci(A,U,Y,G,ne,Ve){A.onBeforeRender(v,U,Y,G,ne,Ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(v,U,Y,G,A,Ve),ne.transparent===!0&&ne.side===rr?(ne.side=xt,ne.needsUpdate=!0,v.renderBufferDirect(Y,U,G,ne,A,Ve),ne.side=Yr,ne.needsUpdate=!0,v.renderBufferDirect(Y,U,G,ne,A,Ve),ne.side=rr):v.renderBufferDirect(Y,U,G,ne,A,Ve),A.onAfterRender(v,U,Y,G,ne,Ve)}function Li(A,U,Y){U.isScene!==!0&&(U=me);const G=q.get(A),ne=d.state.lights,Ve=d.state.shadowsArray,Ge=ne.state.version,qe=ke.getParameters(A,ne.state,Ve,U,Y),He=ke.getProgramCacheKey(qe);let $e=G.programs;G.environment=A.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(A.isMeshStandardMaterial?_e:le).get(A.envMap||G.environment),$e===void 0&&(A.addEventListener("dispose",We),$e=new Map,G.programs=$e);let Xe=$e.get(He);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===Ge)return Mr(A,qe),Xe}else qe.uniforms=ke.getUniforms(A),A.onBuild(Y,qe,v),A.onBeforeCompile(qe,v),Xe=ke.acquireProgram(qe,He),$e.set(He,Xe),G.uniforms=qe.uniforms;const Ze=G.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=te.uniform),Mr(A,qe),G.needsLights=Hh(A),G.lightsStateVersion=Ge,G.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMap.value=ne.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotShadowMap.value=ne.state.spotShadowMap,Ze.spotShadowMatrix.value=ne.state.spotShadowMatrix,Ze.pointShadowMap.value=ne.state.pointShadowMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix);const pt=Xe.getUniforms(),pi=ai.seqWithValue(pt.seq,Ze);return G.currentProgram=Xe,G.uniformsList=pi,Xe}function Mr(A,U){const Y=q.get(A);Y.outputEncoding=U.outputEncoding,Y.instancing=U.instancing,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function us(A,U,Y,G,ne){U.isScene!==!0&&(U=me),re.resetTextureUnits();const Ve=U.fog,Ge=G.isMeshStandardMaterial?U.environment:null,qe=b===null?v.outputEncoding:b.texture.encoding,He=(G.isMeshStandardMaterial?_e:le).get(G.envMap||Ge),$e=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!G.normalMap&&!!Y.attributes.tangent,Ze=!!Y.morphAttributes.position,pt=!!Y.morphAttributes.normal,pi=Y.morphAttributes.position?Y.morphAttributes.position.length:0,Ri=G.toneMapped?v.toneMapping:ri,et=q.get(G),mn=d.state.lights;if(ie===!0&&(H===!0||A!==_)){const on=A===_&&G.id===y;te.setState(G,A,on)}let vt=!1;G.version===et.__version?(et.needsLights&&et.lightsStateVersion!==mn.state.version||et.outputEncoding!==qe||ne.isInstancedMesh&&et.instancing===!1||!ne.isInstancedMesh&&et.instancing===!0||ne.isSkinnedMesh&&et.skinning===!1||!ne.isSkinnedMesh&&et.skinning===!0||et.envMap!==He||G.fog&&et.fog!==Ve||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==te.numPlanes||et.numIntersection!==te.numIntersection)||et.vertexAlphas!==$e||et.vertexTangents!==Xe||et.morphTargets!==Ze||et.morphNormals!==pt||et.toneMapping!==Ri||ge.isWebGL2===!0&&et.morphTargetsCount!==pi)&&(vt=!0):(vt=!0,et.__version=G.version);let gn=et.currentProgram;vt===!0&&(gn=Li(G,U,ne));let hs=!1,vn=!1,Cn=!1;const Rt=gn.getUniforms(),wr=et.uniforms;if(Te.useProgram(gn.program)&&(hs=!0,vn=!0,Cn=!0),G.id!==y&&(y=G.id,vn=!0),hs||_!==A){if(Rt.setValue(Q,"projectionMatrix",A.projectionMatrix),ge.logarithmicDepthBuffer&&Rt.setValue(Q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),_!==A&&(_=A,vn=!0,Cn=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const on=Rt.map.cameraPosition;on!==void 0&&on.setValue(Q,ee.setFromMatrixPosition(A.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(Q,"isOrthographic",A.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ne.isSkinnedMesh)&&Rt.setValue(Q,"viewMatrix",A.matrixWorldInverse)}if(ne.isSkinnedMesh){Rt.setOptional(Q,ne,"bindMatrix"),Rt.setOptional(Q,ne,"bindMatrixInverse");const on=ne.skeleton;on&&(ge.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Rt.setValue(Q,"boneTexture",on.boneTexture,re),Rt.setValue(Q,"boneTextureSize",on.boneTextureSize)):Rt.setOptional(Q,on,"boneMatrices"))}return Y&&(Y.morphAttributes.position!==void 0||Y.morphAttributes.normal!==void 0)&&ae.update(ne,Y,G,gn),(vn||et.receiveShadow!==ne.receiveShadow)&&(et.receiveShadow=ne.receiveShadow,Rt.setValue(Q,"receiveShadow",ne.receiveShadow)),vn&&(Rt.setValue(Q,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&An(wr,Cn),Ve&&G.fog&&Ne.refreshFogUniforms(wr,Ve),Ne.refreshMaterialUniforms(wr,G,R,O,W),ai.upload(Q,et.uniformsList,wr,re)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ai.upload(Q,et.uniformsList,wr,re),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(Q,"center",ne.center),Rt.setValue(Q,"modelViewMatrix",ne.modelViewMatrix),Rt.setValue(Q,"normalMatrix",ne.normalMatrix),Rt.setValue(Q,"modelMatrix",ne.matrixWorld),gn}function An(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Hh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,U,Y){q.get(A.texture).__webglTexture=U,q.get(A.depthTexture).__webglTexture=Y;const G=q.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Y===void 0,G.__autoAllocateDepthBuffer||A.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),A.useRenderToTexture=!1,A.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(A,U){const Y=q.get(A);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,Y=0){b=A,p=U,m=Y;let G=!0;if(A){const He=q.get(A);He.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(36160,null),G=!1):He.__webglFramebuffer===void 0?re.setupRenderTarget(A):He.__hasExternalTextures&&re.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture)}let ne=null,Ve=!1,Ge=!1;if(A){const He=A.texture;(He.isDataTexture3D||He.isDataTexture2DArray)&&(Ge=!0);const $e=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ne=$e[U],Ve=!0):A.useRenderbuffer?ne=q.get(A).__webglMultisampledFramebuffer:ne=$e,E.copy(A.viewport),C.copy(A.scissor),I=A.scissorTest}else E.copy(z).multiplyScalar(R).floor(),C.copy(F).multiplyScalar(R).floor(),I=D;if(Te.bindFramebuffer(36160,ne)&&ge.drawBuffers&&G){let He=!1;if(A)if(A.isWebGLMultipleRenderTargets){const $e=A.texture;if(k.length!==$e.length||k[0]!==36064){for(let Xe=0,Ze=$e.length;Xe<Ze;Xe++)k[Xe]=36064+Xe;k.length=$e.length,He=!0}}else(k.length!==1||k[0]!==36064)&&(k[0]=36064,k.length=1,He=!0);else(k.length!==1||k[0]!==1029)&&(k[0]=1029,k.length=1,He=!0);He&&(ge.isWebGL2?Q.drawBuffers(k):we.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}if(Te.viewport(E),Te.scissor(C),Te.setScissorTest(I),Ve){const He=q.get(A.texture);Q.framebufferTexture2D(36160,36064,34069+U,He.__webglTexture,Y)}else if(Ge){const He=q.get(A.texture),$e=U||0;Q.framebufferTextureLayer(36160,36064,He.__webglTexture,Y||0,$e)}y=-1},this.readRenderTargetPixels=function(A,U,Y,G,ne,Ve,Ge){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){Te.bindFramebuffer(36160,qe);try{const He=A.texture,$e=He.format,Xe=He.type;if($e!==Tt&&ce.convert($e)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Xe===Si&&(we.has("EXT_color_buffer_half_float")||ge.isWebGL2&&we.has("EXT_color_buffer_float"));if(Xe!==Un&&ce.convert(Xe)!==Q.getParameter(35738)&&!(Xe===ei&&(ge.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q.checkFramebufferStatus(36160)===36053?U>=0&&U<=A.width-G&&Y>=0&&Y<=A.height-ne&&Q.readPixels(U,Y,G,ne,ce.convert($e),ce.convert(Xe),Ve):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const He=b!==null?q.get(b).__webglFramebuffer:null;Te.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(A,U,Y=0){if(U.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const G=Math.pow(2,-Y),ne=Math.floor(U.image.width*G),Ve=Math.floor(U.image.height*G);re.setTexture2D(U,0),Q.copyTexSubImage2D(3553,Y,0,0,A.x,A.y,ne,Ve),Te.unbindTexture()},this.copyTextureToTexture=function(A,U,Y,G=0){const ne=U.image.width,Ve=U.image.height,Ge=ce.convert(Y.format),qe=ce.convert(Y.type);re.setTexture2D(Y,0),Q.pixelStorei(37440,Y.flipY),Q.pixelStorei(37441,Y.premultiplyAlpha),Q.pixelStorei(3317,Y.unpackAlignment),U.isDataTexture?Q.texSubImage2D(3553,G,A.x,A.y,ne,Ve,Ge,qe,U.image.data):U.isCompressedTexture?Q.compressedTexSubImage2D(3553,G,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,Ge,U.mipmaps[0].data):Q.texSubImage2D(3553,G,A.x,A.y,Ge,qe,U.image),G===0&&Y.generateMipmaps&&Q.generateMipmap(3553),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,U,Y,G,ne=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=A.max.x-A.min.x+1,Ge=A.max.y-A.min.y+1,qe=A.max.z-A.min.z+1,He=ce.convert(G.format),$e=ce.convert(G.type);let Xe;if(G.isDataTexture3D)re.setTexture3D(G,0),Xe=32879;else if(G.isDataTexture2DArray)re.setTexture2DArray(G,0),Xe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,G.flipY),Q.pixelStorei(37441,G.premultiplyAlpha),Q.pixelStorei(3317,G.unpackAlignment);const Ze=Q.getParameter(3314),pt=Q.getParameter(32878),pi=Q.getParameter(3316),Ri=Q.getParameter(3315),et=Q.getParameter(32877),mn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;Q.pixelStorei(3314,mn.width),Q.pixelStorei(32878,mn.height),Q.pixelStorei(3316,A.min.x),Q.pixelStorei(3315,A.min.y),Q.pixelStorei(32877,A.min.z),Y.isDataTexture||Y.isDataTexture3D?Q.texSubImage3D(Xe,ne,U.x,U.y,U.z,Ve,Ge,qe,He,$e,mn.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Xe,ne,U.x,U.y,U.z,Ve,Ge,qe,He,mn.data)):Q.texSubImage3D(Xe,ne,U.x,U.y,U.z,Ve,Ge,qe,He,$e,mn),Q.pixelStorei(3314,Ze),Q.pixelStorei(32878,pt),Q.pixelStorei(3316,pi),Q.pixelStorei(3315,Ri),Q.pixelStorei(32877,et),ne===0&&G.generateMipmaps&&Q.generateMipmap(Xe),Te.unbindTexture()},this.initTexture=function(A){re.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){p=0,m=0,b=null,Te.reset(),S.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}at.prototype.isWebGLRenderer=!0;class ix extends at{}ix.prototype.isWebGL1Renderer=!0;class ll extends st{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}ll.prototype.isScene=!0;class ss{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ss.prototype.isInterleavedBuffer=!0;const gt=new P;class $r{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gt.x=this.getX(t),gt.y=this.getY(t),gt.z=this.getZ(t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.x=this.getX(t),gt.y=this.getY(t),gt.z=this.getZ(t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.x=this.getX(t),gt.y=this.getY(t),gt.z=this.getZ(t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}$r.prototype.isInterleavedBufferAttribute=!0;class ph extends Ft{constructor(e){super(),this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}ph.prototype.isSpriteMaterial=!0;let Xi;const Rr=new P,ji=new P,Yi=new P,Zi=new de,Pr=new de,mh=new ze,Ds=new P,Ir=new P,Fs=new P,Ic=new de,oo=new de,Dc=new de;class rx extends st{constructor(e){if(super(),this.type="Sprite",Xi===void 0){Xi=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ss(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new $r(n,3,0,!1)),Xi.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=Xi,this.material=e!==void 0?e:new ph,this.center=new de(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),mh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Yi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;zs(Ds.set(-.5,-.5,0),Yi,a,ji,i,s),zs(Ir.set(.5,-.5,0),Yi,a,ji,i,s),zs(Fs.set(.5,.5,0),Yi,a,ji,i,s),Ic.set(0,0),oo.set(1,0),Dc.set(1,1);let o=e.ray.intersectTriangle(Ds,Ir,Fs,!1,Rr);if(o===null&&(zs(Ir.set(-.5,.5,0),Yi,a,ji,i,s),oo.set(0,1),o=e.ray.intersectTriangle(Ds,Fs,Ir,!1,Rr),o===null))return;const l=e.ray.origin.distanceTo(Rr);l<e.near||l>e.far||t.push({distance:l,point:Rr.clone(),uv:yt.getUV(Rr,Ds,Ir,Fs,Ic,oo,Dc,new de),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}rx.prototype.isSprite=!0;function zs(r,e,t,n,i,s){Zi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Pr.x=s*Zi.x-i*Zi.y,Pr.y=i*Zi.x+s*Zi.y):Pr.copy(Zi),r.copy(e),r.x+=Pr.x,r.y+=Pr.y,r.applyMatrix4(mh)}const Fc=new P,zc=new ct,kc=new ct,sx=new P,Nc=new ze;class gh extends Ot{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ze,this.bindMatrixInverse=new ze}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;zc.fromBufferAttribute(i.attributes.skinIndex,e),kc.fromBufferAttribute(i.attributes.skinWeight,e),Fc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=kc.getComponent(s);if(a!==0){const o=zc.getComponent(s);Nc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sx.copy(Fc).applyMatrix4(Nc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}gh.prototype.isSkinnedMesh=!0;class ax extends st{constructor(){super(),this.type="Bone"}}ax.prototype.isBone=!0;class ox extends At{constructor(e=null,t=1,n=1,i,s,a,o,l,c=_t,u=_t,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ox.prototype.isDataTexture=!0;class Do extends bt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Do.prototype.isInstancedBufferAttribute=!0;const Bc=new ze,Oc=new ze,ks=[],Dr=new Ot;class lx extends Ot{constructor(e,t,n){super(e,t),this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Bc),Oc.multiplyMatrices(n,Bc),Dr.matrixWorld=Oc,Dr.raycast(e,ks);for(let a=0,o=ks.length;a<o;a++){const l=ks[a];l.instanceId=s,l.object=this,t.push(l)}ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}lx.prototype.isInstancedMesh=!0;class as extends Ft{constructor(e){super(),this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}as.prototype.isLineBasicMaterial=!0;const Uc=new P,Vc=new P,Hc=new ze,lo=new pr,Ns=new fr;class cl extends st{constructor(e=new dt,t=new as){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Uc.fromBufferAttribute(t,i-1),Vc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uc.distanceTo(Vc);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Hc.copy(i).invert(),lo.copy(e.ray).applyMatrix4(Hc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,d=new P,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let b=p,y=m-1;b<y;b+=f){const _=g.getX(b),E=g.getX(b+1);if(c.fromBufferAttribute(x,_),u.fromBufferAttribute(x,E),lo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),m=Math.min(x.count,a.start+a.count);for(let b=p,y=m-1;b<y;b+=f){if(c.fromBufferAttribute(x,b),u.fromBufferAttribute(x,b+1),lo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}cl.prototype.isLine=!0;const Gc=new P,Wc=new P;class ul extends cl{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Gc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gc.distanceTo(Wc);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ul.prototype.isLineSegments=!0;class cx extends cl{constructor(e,t){super(e,t),this.type="LineLoop"}}cx.prototype.isLineLoop=!0;class vh extends Ft{constructor(e){super(),this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}vh.prototype.isPointsMaterial=!0;const qc=new ze,Fo=new pr,Bs=new fr,Os=new P;class ux extends st{constructor(e=new dt,t=new vh){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;qc.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(qc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const x=c.getX(g);Os.fromBufferAttribute(h,x),Xc(Os,x,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Os.fromBufferAttribute(h,g),Xc(Os,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ux.prototype.isPoints=!0;function Xc(r,e,t,n,i,s,a){const o=Fo.distanceSqToPoint(r);if(o<t){const l=new P;Fo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class hx extends At{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:Ti,this.minFilter=a!==void 0?a:Bt,this.magFilter=s!==void 0?s:Bt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}hx.prototype.isVideoTexture=!0;class dx extends At{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=_t,this.minFilter=_t,this.generateMipmaps=!1,this.needsUpdate=!0}}dx.prototype.isFramebufferTexture=!0;class fx extends At{constructor(e,t,n,i,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}fx.prototype.isCompressedTexture=!0;class px extends At{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}px.prototype.isCanvasTexture=!0;class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new de:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],a=[],o=new P,l=new ze;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($t(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos($t(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sa extends an{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new de,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Sa.prototype.isEllipseCurve=!0;class xh extends Sa{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}xh.prototype.isArcCurve=!0;function hl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Us=new P,co=new hl,uo=new hl,ho=new hl;class _h extends an{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Us.subVectors(i[0],i[1]).add(i[0]),c=Us);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Us.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),co.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,x),uo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,x),ho.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(co.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),uo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ho.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(co.calc(l),uo.calc(l),ho.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}_h.prototype.isCatmullRomCurve3=!0;function jc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function mx(r,e){const t=1-r;return t*t*e}function gx(r,e){return 2*(1-r)*r*e}function vx(r,e){return r*r*e}function Gr(r,e,t,n){return mx(r,e)+gx(r,t)+vx(r,n)}function xx(r,e){const t=1-r;return t*t*t*e}function _x(r,e){const t=1-r;return 3*t*t*r*e}function yx(r,e){return 3*(1-r)*r*r*e}function bx(r,e){return r*r*r*e}function Wr(r,e,t,n,i){return xx(r,e)+_x(r,t)+yx(r,n)+bx(r,i)}class dl extends an{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wr(e,i.x,s.x,a.x,o.x),Wr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dl.prototype.isCubicBezierCurve=!0;class yh extends an{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wr(e,i.x,s.x,a.x,o.x),Wr(e,i.y,s.y,a.y,o.y),Wr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}yh.prototype.isCubicBezierCurve3=!0;class Ta extends an{constructor(e=new de,t=new de){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new de;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ta.prototype.isLineCurve=!0;class Mx extends an{constructor(e=new P,t=new P){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fl extends an{constructor(e=new de,t=new de,n=new de){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Gr(e,i.x,s.x,a.x),Gr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}fl.prototype.isQuadraticBezierCurve=!0;class bh extends an{constructor(e=new P,t=new P,n=new P){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Gr(e,i.x,s.x,a.x),Gr(e,i.y,s.y,a.y),Gr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}bh.prototype.isQuadraticBezierCurve3=!0;class pl extends an{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(jc(o,l.x,c.x,u.x,h.x),jc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new de().fromArray(i))}return this}}pl.prototype.isSplineCurve=!0;var Mh=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:_h,CubicBezierCurve:dl,CubicBezierCurve3:yh,EllipseCurve:Sa,LineCurve:Ta,LineCurve3:Mx,QuadraticBezierCurve:fl,QuadraticBezierCurve3:bh,SplineCurve:pl});class wx extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ta(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Mh[i.type]().fromJSON(i))}return this}}class zo extends wx{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ta(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new fl(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new dl(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Sa(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class os extends zo{constructor(e){super(e),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new zo().fromJSON(i))}return this}}const Sx={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=wh(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,f;if(n&&(s=Lx(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?1/f:0}return Qr(s,a,t,o,l,f),a}};function wh(r,e,t,n,i){let s,a;if(i===Ux(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Yc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Yc(s,r[s],r[s+1],a);return a&&Ea(a,a.next)&&(es(a),a=a.next),a}function li(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ea(t,t.next)||ft(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Fx(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Ex(r,n,i,s):Tx(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),es(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Ax(li(r),e,t),Qr(r,e,t,n,i,s,2)):a===2&&Cx(r,e,t,n,i,s):Qr(li(r),e,t,n,i,s,1);break}}}function Tx(r){const e=r.prev,t=r,n=r.next;if(ft(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(er(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ft(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Ex(r,e,t,n){const i=r.prev,s=r,a=r.next;if(ft(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=ko(o,l,e,t,n),d=ko(c,u,e,t,n);let f=r.prevZ,g=r.nextZ;for(;f&&f.z>=h&&g&&g.z<=d;){if(f!==r.prev&&f!==r.next&&er(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&ft(f.prev,f,f.next)>=0||(f=f.prevZ,g!==r.prev&&g!==r.next&&er(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&ft(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=h;){if(f!==r.prev&&f!==r.next&&er(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&ft(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&er(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Ax(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ea(i,s)&&Sh(i,n,n.next,s)&&Kr(i,s)&&Kr(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),es(n),es(n.next),n=r=s),n=n.next}while(n!==r);return li(n)}function Cx(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nx(a,o)){let l=Th(a,o);a=li(a,a.next),l=li(l,l.next),Qr(a,e,t,n,i,s),Qr(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function Lx(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=wh(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(kx(c));for(i.sort(Rx),s=0;s<i.length;s++)Px(i[s],t),t=li(t,t.next);return t}function Rx(r,e){return r.x-e.x}function Px(r,e){if(e=Ix(r,e),e){const t=Th(e,r);li(e,e.next),li(t,t.next)}}function Ix(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&er(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Kr(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Dx(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function Dx(r,e){return ft(r.prev,r,e.prev)<0&&ft(e.next,r,r.next)<0}function Fx(r,e,t,n){let i=r;do i.z===null&&(i.z=ko(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,zx(i)}function zx(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function ko(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function kx(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function er(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function Nx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Bx(r,e)&&(Kr(r,e)&&Kr(e,r)&&Ox(r,e)&&(ft(r.prev,r,e.prev)||ft(r,e.prev,e))||Ea(r,e)&&ft(r.prev,r,r.next)>0&&ft(e.prev,e,e.next)>0)}function ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ea(r,e){return r.x===e.x&&r.y===e.y}function Sh(r,e,t,n){const i=Hs(ft(r,e,t)),s=Hs(ft(r,e,n)),a=Hs(ft(t,n,r)),o=Hs(ft(t,n,e));return!!(i!==s&&a!==o||i===0&&Vs(r,t,e)||s===0&&Vs(r,n,e)||a===0&&Vs(t,r,n)||o===0&&Vs(t,e,n))}function Vs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Hs(r){return r>0?1:r<0?-1:0}function Bx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Sh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Kr(r,e){return ft(r.prev,r,r.next)<0?ft(r,e,r.next)>=0&&ft(r,r.prev,e)>=0:ft(r,e,r.prev)<0||ft(r,r.next,e)<0}function Ox(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Th(r,e){const t=new No(r.i,r.x,r.y),n=new No(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Yc(r,e,t,n){const i=new No(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function es(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function No(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ux(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class oi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return oi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Zc(e),Jc(n,e);let a=e.length;t.forEach(Zc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Jc(n,t[l]);const o=Sx.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Zc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Jc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class vr extends dt{constructor(e=new os([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Et(i,3)),this.setAttribute("uv",new Et(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Vx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,y=!1,_,E,C,I;p&&(b=p.getSpacedPoints(u),y=!0,d=!1,_=p.computeFrenetFrames(u,!1),E=new P,C=new P,I=new P),d||(x=0,f=0,g=0,v=0);const Z=o.extractPoints(c);let O=Z.shape;const R=Z.holes;if(!oi.isClockWise(O)){O=O.reverse();for(let q=0,re=R.length;q<re;q++){const le=R[q];oi.isClockWise(le)&&(R[q]=le.reverse())}}const w=oi.triangulateShape(O,R),z=O;for(let q=0,re=R.length;q<re;q++){const le=R[q];O=O.concat(le)}function F(q,re,le){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().multiplyScalar(le).add(q)}const D=O.length,k=w.length;function $(q,re,le){let _e,pe,ye;const Ee=q.x-re.x,ke=q.y-re.y,Ne=le.x-q.x,L=le.y-q.y,T=Ee*Ee+ke*ke,te=Ee*L-ke*Ne;if(Math.abs(te)>Number.EPSILON){const oe=Math.sqrt(T),fe=Math.sqrt(Ne*Ne+L*L),ae=re.x-ke/oe,Ae=re.y+Ee/oe,Ce=le.x-L/fe,ce=le.y+Ne/fe,S=((Ce-ae)*L-(ce-Ae)*Ne)/(Ee*L-ke*Ne);_e=ae+Ee*S-q.x,pe=Ae+ke*S-q.y;const he=_e*_e+pe*pe;if(he<=2)return new de(_e,pe);ye=Math.sqrt(he/2)}else{let oe=!1;Ee>Number.EPSILON?Ne>Number.EPSILON&&(oe=!0):Ee<-Number.EPSILON?Ne<-Number.EPSILON&&(oe=!0):Math.sign(ke)===Math.sign(L)&&(oe=!0),oe?(_e=-ke,pe=Ee,ye=Math.sqrt(T)):(_e=Ee,pe=ke,ye=Math.sqrt(T/2))}return new de(_e/ye,pe/ye)}const ie=[];for(let q=0,re=z.length,le=re-1,_e=q+1;q<re;q++,le++,_e++)le===re&&(le=0),_e===re&&(_e=0),ie[q]=$(z[q],z[le],z[_e]);const H=[];let W,se=ie.concat();for(let q=0,re=R.length;q<re;q++){const le=R[q];W=[];for(let _e=0,pe=le.length,ye=pe-1,Ee=_e+1;_e<pe;_e++,ye++,Ee++)ye===pe&&(ye=0),Ee===pe&&(Ee=0),W[_e]=$(le[_e],le[ye],le[Ee]);H.push(W),se=se.concat(W)}for(let q=0;q<x;q++){const re=q/x,le=f*Math.cos(re*Math.PI/2),_e=g*Math.sin(re*Math.PI/2)+v;for(let pe=0,ye=z.length;pe<ye;pe++){const Ee=F(z[pe],ie[pe],_e);Me(Ee.x,Ee.y,-le)}for(let pe=0,ye=R.length;pe<ye;pe++){const Ee=R[pe];W=H[pe];for(let ke=0,Ne=Ee.length;ke<Ne;ke++){const L=F(Ee[ke],W[ke],_e);Me(L.x,L.y,-le)}}}const ee=g+v;for(let q=0;q<D;q++){const re=d?F(O[q],se[q],ee):O[q];y?(C.copy(_.normals[0]).multiplyScalar(re.x),E.copy(_.binormals[0]).multiplyScalar(re.y),I.copy(b[0]).add(C).add(E),Me(I.x,I.y,I.z)):Me(re.x,re.y,0)}for(let q=1;q<=u;q++)for(let re=0;re<D;re++){const le=d?F(O[re],se[re],ee):O[re];y?(C.copy(_.normals[q]).multiplyScalar(le.x),E.copy(_.binormals[q]).multiplyScalar(le.y),I.copy(b[q]).add(C).add(E),Me(I.x,I.y,I.z)):Me(le.x,le.y,h/u*q)}for(let q=x-1;q>=0;q--){const re=q/x,le=f*Math.cos(re*Math.PI/2),_e=g*Math.sin(re*Math.PI/2)+v;for(let pe=0,ye=z.length;pe<ye;pe++){const Ee=F(z[pe],ie[pe],_e);Me(Ee.x,Ee.y,h+le)}for(let pe=0,ye=R.length;pe<ye;pe++){const Ee=R[pe];W=H[pe];for(let ke=0,Ne=Ee.length;ke<Ne;ke++){const L=F(Ee[ke],W[ke],_e);y?Me(L.x,L.y+b[u-1].y,b[u-1].x+le):Me(L.x,L.y,h+le)}}}me(),Le();function me(){const q=i.length/3;if(d){let re=0,le=D*re;for(let _e=0;_e<k;_e++){const pe=w[_e];we(pe[2]+le,pe[1]+le,pe[0]+le)}re=u+x*2,le=D*re;for(let _e=0;_e<k;_e++){const pe=w[_e];we(pe[0]+le,pe[1]+le,pe[2]+le)}}else{for(let re=0;re<k;re++){const le=w[re];we(le[2],le[1],le[0])}for(let re=0;re<k;re++){const le=w[re];we(le[0]+D*u,le[1]+D*u,le[2]+D*u)}}n.addGroup(q,i.length/3-q,0)}function Le(){const q=i.length/3;let re=0;Q(z,re),re+=z.length;for(let le=0,_e=R.length;le<_e;le++){const pe=R[le];Q(pe,re),re+=pe.length}n.addGroup(q,i.length/3-q,1)}function Q(q,re){let le=q.length;for(;--le>=0;){const _e=le;let pe=le-1;pe<0&&(pe=q.length-1);for(let ye=0,Ee=u+x*2;ye<Ee;ye++){const ke=D*ye,Ne=D*(ye+1),L=re+_e+ke,T=re+pe+ke,te=re+pe+Ne,oe=re+_e+Ne;ge(L,T,te,oe)}}}function Me(q,re,le){l.push(q),l.push(re),l.push(le)}function we(q,re,le){Te(q),Te(re),Te(le);const _e=i.length/3,pe=m.generateTopUV(n,i,_e-3,_e-2,_e-1);Oe(pe[0]),Oe(pe[1]),Oe(pe[2])}function ge(q,re,le,_e){Te(q),Te(re),Te(_e),Te(re),Te(le),Te(_e);const pe=i.length/3,ye=m.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);Oe(ye[0]),Oe(ye[1]),Oe(ye[3]),Oe(ye[1]),Oe(ye[2]),Oe(ye[3])}function Te(q){i.push(l[q*3+0]),i.push(l[q*3+1]),i.push(l[q*3+2])}function Oe(q){s.push(q.x),s.push(q.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Mh[i.type]().fromJSON(i)),new vr(n,e.options)}}const Vx={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new de(s,a),new de(o,l),new de(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[s*3],x=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-h),new de(d,1-g),new de(v,1-p)]:[new de(o,1-l),new de(u,1-h),new de(f,1-g),new de(x,1-p)]}};function Hx(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ml extends dt{constructor(e=new os([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Et(i,3)),this.setAttribute("normal",new Et(s,3)),this.setAttribute("uv",new Et(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;oi.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=g.length;x<p;x++){const m=g[x];oi.isClockWise(m)===!0&&(g[x]=m.reverse())}const v=oi.triangulateShape(f,g);for(let x=0,p=g.length;x<p;x++){const m=g[x];f=f.concat(m)}for(let x=0,p=f.length;x<p;x++){const m=f[x];i.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let x=0,p=v.length;x<p;x++){const m=v[x],b=m[0]+h,y=m[1]+h,_=m[2]+h;n.push(b,y,_),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Gx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new ml(n,e.curveSegments)}}function Gx(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Wx extends Ft{constructor(e){super(),this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Wx.prototype.isShadowMaterial=!0;class Eh extends Ft{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Eh.prototype.isMeshStandardMaterial=!0;class qx extends Eh{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}qx.prototype.isMeshPhysicalMaterial=!0;class Xx extends Ft{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Xx.prototype.isMeshPhongMaterial=!0;class jx extends Ft{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}jx.prototype.isMeshToonMaterial=!0;class Yx extends Ft{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Yx.prototype.isMeshNormalMaterial=!0;class Zx extends Ft{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Zx.prototype.isMeshLambertMaterial=!0;class Jx extends Ft{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new De(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Jx.prototype.isMeshMatcapMaterial=!0;class $x extends as{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}$x.prototype.isLineDashedMaterial=!0;const ht={arraySlice:function(r,e,t){return ht.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){h.push(c.times[f]);for(let v=0;v<u;++v)d.push(c.values[f*u+v])}}h.length!==0&&(c.times=ht.convertArray(h,c.times.constructor),c.values=ht.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=o.times.length-1;let v;if(s<=o.times[0]){const p=u,m=h-u;v=ht.arraySlice(o.values,p,m)}else if(s>=o.times[g]){const p=g*h+u,m=p+h-u;v=ht.arraySlice(o.values,p,m)}else{const p=o.createInterpolant(),m=u,b=h-u;p.evaluate(s),v=ht.arraySlice(p.resultBuffer,m,b)}l==="quaternion"&&new qt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let p=0;p<x;++p){const m=p*f+d;if(l==="quaternion")qt.multiplyQuaternionsFlat(c.values,m,v,0,c.values,m);else{const b=f-d*2;for(let y=0;y<b;++y)c.values[m+y]-=v[y]}}}return r.blendMode=qu,r}};class ci{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}ci.prototype.beforeStart_=ci.prototype.copySampleValue_;ci.prototype.afterEnd_=ci.prototype.copySampleValue_;class Qx extends ci{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qi,endingEnd:Qi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ki:s=e,o=2*t-n;break;case ra:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ki:a=e,l=2*n-t;break;case ra:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,x=v*g,p=-d*x+2*d*v-d*g,m=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*x+(1.5+f)*v+.5*g,y=f*x-f*v;for(let _=0;_!==o;++_)s[_]=p*a[u+_]+m*a[c+_]+b*a[l+_]+y*a[h+_];return s}}class Ah extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class Kx extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ht.convertArray(t,this.TimeBufferType),this.values=ht.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ht.convertArray(e.times,Array),values:ht.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ht.arraySlice(n,s,a),this.values=ht.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ht.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ht.arraySlice(this.times),t=ht.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Pa,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ht.arraySlice(e,0,a),this.values=ht.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ht.arraySlice(this.times,0),t=ht.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ia;class xr extends En{}xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=na;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends En{}Ch.prototype.ValueTypeName="color";class oa extends En{}oa.prototype.ValueTypeName="number";class e_ extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)qt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ls extends En{InterpolantFactoryMethodLinear(e){return new e_(this.times,this.values,this.getValueSize(),e)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.DefaultInterpolation=ia;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends En{}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=na;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class la extends En{}la.prototype.ValueTypeName="vector";class $c{constructor(e,t=-1,n,i=Ko){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(n_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(En.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=ht.getKeyframeOrder(l);l=ht.sortedArray(l,1,u),c=ht.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new oa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,v){if(f.length!==0){const x=[],p=[];ht.flattenJSON(f,x,p,g),x.length!==0&&v.push(new h(d,x,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const x=[],p=[];for(let m=0;m!==d[g].morphTargets.length;++m){const b=d[g];x.push(b.time),p.push(b.morphTarget===v?1:0)}i.push(new oa(".morphTargetInfluence["+v+"]",x,p))}l=f.length*(a||1)}else{const f=".bones["+t[h].name+"]";n(la,f+".position",d,"pos",i),n(ls,f+".quaternion",d,"rot",i),n(la,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function t_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oa;case"vector":case"vector2":case"vector3":case"vector4":return la;case"color":return Ch;case"quaternion":return ls;case"bool":case"boolean":return xr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function n_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=t_(r.type);if(r.times===void 0){const t=[],n=[];ht.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const or={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class i_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const r_=new i_;let di=class{constructor(e){this.manager=e!==void 0?e:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const Fn={};class s_ extends di{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=or.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body.getReader===void 0)return o;const l=Fn[e],c=o.body.getReader(),u=o.headers.get("Content-Length"),h=u?parseInt(u):0,d=h!==0;let f=0;const g=new ReadableStream({start(v){x();function x(){c.read().then(({done:p,value:m})=>{if(p)v.close();else{f+=m.byteLength;const b=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:h});for(let y=0,_=l.length;y<_;y++){const E=l[y];E.onProgress&&E.onProgress(b)}v.enqueue(m),x()}})}}});return new Response(g)}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{switch(this.responseType){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return o.json();default:return o.text()}}).then(o=>{or.add(e,o);const l=Fn[e];delete Fn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(o)}}).catch(o=>{const l=Fn[e];if(l===void 0)throw this.manager.itemError(e),o;delete Fn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lh extends di{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=or.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=xa("img");function l(){u(),or.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class a_ extends di{constructor(e){super(e)}load(e,t,n,i){const s=new _a,a=new Lh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Rh extends di{constructor(e){super(e)}load(e,t,n,i){const s=new At,a=new Lh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Sn extends st{constructor(e,t=1){super(),this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Sn.prototype.isLight=!0;class o_ extends Sn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.groundColor=new De(t)}copy(e){return Sn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}o_.prototype.isHemisphereLight=!0;const Qc=new ze,Kc=new P,eu=new P;class gl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ph extends gl{constructor(){super(new Nt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Ro*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ph.prototype.isSpotLightShadow=!0;class l_ extends Sn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}l_.prototype.isSpotLight=!0;const tu=new ze,Fr=new P,fo=new P;class Ih extends gl{constructor(){super(new Nt(90,1,.5,500)),this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fr),fo.copy(n.position),fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fo),n.updateMatrixWorld(),i.makeTranslation(-Fr.x,-Fr.y,-Fr.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}}Ih.prototype.isPointLightShadow=!0;class c_ extends Sn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}c_.prototype.isPointLight=!0;class Dh extends gl{constructor(){super(new rl(-5,5,5,-5,.5,500))}}Dh.prototype.isDirectionalLightShadow=!0;class u_ extends Sn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}u_.prototype.isDirectionalLight=!0;class h_ extends Sn{constructor(e,t){super(e,t),this.type="AmbientLight"}}h_.prototype.isAmbientLight=!0;class d_ extends Sn{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}d_.prototype.isRectAreaLight=!0;class Fh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Fh.prototype.isSphericalHarmonics3=!0;class vl extends Sn{constructor(e=new Fh,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}vl.prototype.isLightProbe=!0;class f_{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class p_ extends dt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}p_.prototype.isInstancedBufferGeometry=!0;class m_ extends di{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=or.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){or.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}m_.prototype.isImageBitmapLoader=!0;let Gs;const g_={getContext:function(){return Gs===void 0&&(Gs=new(window.AudioContext||window.webkitAudioContext)),Gs},setContext:function(r){Gs=r}};class v_ extends di{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new s_(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);g_.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class x_ extends vl{constructor(e,t,n=1){super(void 0,n);const i=new De().set(e),s=new De().set(t),a=new P(i.r,i.g,i.b),o=new P(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}x_.prototype.isHemisphereLightProbe=!0;class __ extends vl{constructor(e,t=1){super(void 0,t);const n=new De().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}__.prototype.isAmbientLightProbe=!0;class y_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nu(){return(typeof performance>"u"?Date:performance).now()}class b_ extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class M_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;qt.multiplyQuaternionsFlat(e,a,e,t,e,n),qt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const xl="\\[\\]\\.:\\/",w_=new RegExp("["+xl+"]","g"),_l="[^"+xl+"]",S_="[^"+xl.replace("\\.","")+"]",T_=/((?:WC+[\/:])*)/.source.replace("WC",_l),E_=/(WCOD+)?/.source.replace("WCOD",S_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),C_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),L_=new RegExp("^"+T_+E_+A_+C_+"$"),R_=["material","materials","bones"];class P_{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w_,"")}static parseTrackName(e){const t=L_.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);R_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=P_;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class I_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Qi,endingEnd:Qi};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=dp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qu:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Ko:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===fp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===hp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ki,i.endingEnd=Ki):(e?i.endingStart=this.zeroSlopeAtStart?Ki:Qi:i.endingStart=ra,t?i.endingEnd=this.zeroSlopeAtEnd?Ki:Qi:i.endingEnd=ra)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class D_ extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new M_(rt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ah(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?$c.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ko),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new I_(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?$c.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}D_.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class F_ extends ss{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}F_.prototype.isInstancedInterleavedBuffer=!0;const $n=new P,Ws=new ze,po=new ze;class z_ extends ul{constructor(e){const t=zh(e),n=new dt,i=[],s=[],a=new De(0,0,1),o=new De(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Et(i,3)),n.setAttribute("color",new Et(s,3));const l=new as({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");po.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ws.multiplyMatrices(po,o.matrixWorld),$n.setFromMatrixPosition(Ws),i.setXYZ(a,$n.x,$n.y,$n.z),Ws.multiplyMatrices(po,o.parent.matrixWorld),$n.setFromMatrixPosition(Ws),i.setXYZ(a+1,$n.x,$n.y,$n.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function zh(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,zh(r.children[t]));return e}class k_ extends ul{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===s?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new dt;u.setAttribute("position",new Et(l,3)),u.setAttribute("color",new Et(c,3));const h=new as({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const N_=new Float32Array(1);new Int32Array(N_.buffer);an.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(an.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};zo.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};k_.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};z_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};di.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),f_.extractUrlBase(r)};di.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};pn.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};pn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};pn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};pn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};pn.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};fr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ya.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};Lt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Lt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Lt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Lt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Lt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Lt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ze.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ze.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ze.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new P().setFromMatrixColumn(this,3)};ze.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ze.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ze.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ze.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ze.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ze.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ze.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ze.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ze.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ze.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ze.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};ze.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Nn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};qt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};qt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};pr.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};pr.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};pr.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};yt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};yt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};yt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};yt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};yt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};yt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),yt.getBarycoord(r,e,t,n,i)};yt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),yt.getNormal(r,e,t,n)};os.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};os.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new vr(this,r)};os.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ml(this,r)};de.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};de.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};de.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};P.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};P.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};P.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};P.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};P.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};P.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};P.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};P.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};P.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ct.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ct.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};st.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};st.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};st.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};st.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};st.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(st.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ot.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ot.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),pp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});gh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Nt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Sn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(bt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===sa},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(sa)}}});bt.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?sa:Jr),this};bt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},bt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};dt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};dt.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new bt(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};dt.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};dt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};dt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};dt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};dt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(dt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ss.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?sa:Jr),this};ss.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};vr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};vr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};vr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ll.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Ft.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new De}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Vu}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Vn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});at.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};at.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};at.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};at.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};at.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};at.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};at.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};at.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};at.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};at.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};at.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};at.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};at.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};at.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};at.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};at.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};at.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};at.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};at.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};at.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};at.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};at.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};at.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};at.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};at.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(at.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?ur:fn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(dh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(sn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});b_.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new v_().load(r,function(n){e.setBuffer(n)}),this};il.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};il.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};dr.crossOrigin=void 0;dr.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Rh;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};dr.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new a_;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};dr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};dr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);class B_{container;scene;camera;renderer;constructor(e){this.container=e,this.scene=new ll}get dimensions(){let e=window.innerWidth,t=this.container.getBoundingClientRect().height,n=e/t;return{width:e,height:t,aspect:n}}setup(){const e=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI;this.camera=new Nt(e,this.dimensions.aspect,1,1e3),this.camera.position.set(0,0,1e3),this.renderer=new at({antialias:!0,alpha:!0}),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.windowResize.bind(this),!1),this.render()}windowResize(){this.camera.aspect=this.dimensions.aspect,this.camera.fov=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.dimensions.width,this.dimensions.height)}render(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}}class O_{element;dimensionsNode;scene;offset;sizes;material;geometry;mesh;activeFragmentShader;uniforms;shaders;constructor(e,t,n,i,s){this.element=e,this.scene=t,this.shaders=n,this.uniforms=s,this.dimensionsNode=i,this.offset=new de(0,0),this.sizes=new de(0,0),this.createMesh()}setDimensions(){const{width:e,height:t,left:n}=this.dimensionsNode.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(n-window.innerWidth/2+e/2,0)}createMesh(){this.setDimensions(),this.geometry=new ba(1,1,4,6);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms={uTexture:{value:new Rh().load(this.element.src)},uMeshSize:{value:new de(this.sizes.x,this.sizes.y)},uImgSize:{value:new de(e,t)},...this.uniforms},this.activeFragmentShader=this.loadFragmentShader,this.mesh=new Ot(this.geometry,new Vn({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0})),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.scene.add(this.mesh)}render(){this.setDimensions(),this.checkShader(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms.uImgSize.value.set(e,t),this.uniforms.uMeshSize.value.set(this.sizes.x,this.sizes.y)}checkShader(){this.loadFragmentShader!==this.activeFragmentShader&&(this.activeFragmentShader=this.loadFragmentShader,this.mesh.material=new Vn({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0}))}get loadFragmentShader(){return this.sizes.x/this.sizes.y<1?this.shaders.fragment.horizontal:this.shaders.fragment.vertical}}const U_=`

	// Description : Array and textureless GLSL 2D/3D/4D simplex
	//               noise functions.
	//      Author : Ian McEwan, Ashima Arts.
	//  Maintainer : stegu
	//     Lastmod : 20201014 (stegu)
	//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
	//               Distributed under the MIT License. See LICENSE file.
	//               https://github.com/ashima/webgl-noise
	//               https://github.com/stegu/webgl-noise

	vec3 mod289(vec3 x) {
		return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 mod289(vec4 x) {
		return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 permute(vec4 x) {
		return mod289(((x*34.0)+10.0)*x);
	}

	vec4 taylorInvSqrt(vec4 r) {
		return 1.79284291400159 - 0.85373472095314 * r;
	}

	float snoise(vec3 v) { 
		const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

		// First corner
		vec3 i  = floor(v + dot(v, C.yyy) );
		vec3 x0 =   v - i + dot(i, C.xxx) ;

		// Other corners
		vec3 g = step(x0.yzx, x0.xyz);
		vec3 l = 1.0 - g;
		vec3 i1 = min( g.xyz, l.zxy );
		vec3 i2 = max( g.xyz, l.zxy );

		vec3 x1 = x0 - i1 + C.xxx;
		vec3 x2 = x0 - i2 + C.yyy;
		vec3 x3 = x0 - D.yyy;

		// Permutations
		i = mod289(i); 
		vec4 p = permute( permute( permute( 
						i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
					+ i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
					+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

		// Gradients: 7x7 points over a square, mapped onto an octahedron.
		// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
		float n_ = 0.142857142857; // 1.0/7.0
		vec3  ns = n_ * D.wyz - D.xzx;

		vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

		vec4 x_ = floor(j * ns.z);
		vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

		vec4 x = x_ *ns.x + ns.yyyy;
		vec4 y = y_ *ns.x + ns.yyyy;
		vec4 h = 1.0 - abs(x) - abs(y);

		vec4 b0 = vec4( x.xy, y.xy );
		vec4 b1 = vec4( x.zw, y.zw );

		//vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
		//vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
		vec4 s0 = floor(b0)*2.0 + 1.0;
		vec4 s1 = floor(b1)*2.0 + 1.0;
		vec4 sh = -step(h, vec4(0.0));

		vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

		vec3 p0 = vec3(a0.xy,h.x);
		vec3 p1 = vec3(a0.zw,h.y);
		vec3 p2 = vec3(a1.xy,h.z);
		vec3 p3 = vec3(a1.zw,h.w);

		// Normalise gradients
		vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		p0 *= norm.x;
		p1 *= norm.y;
		p2 *= norm.z;
		p3 *= norm.w;

		// Mix final noise value
		vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		m = m * m;
		return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
	}
`,V_=`

	uniform sampler2D uTexture;
	uniform vec2 uOffset;
	uniform float uTime;
	varying vec2 vUv;
	varying float vWave;

	#define M_PI 3.1415926535897932384626433832795

	${U_}

	vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
		position.x = position.x + (sin(uv.y * M_PI) * offset.x);
		position.y = position.y + (sin(uv.x * M_PI) * offset.y);
		return position;
	}

	void main() {
		vUv = uv;
		vec3 newPosition = deformationCurve(position, uv, uOffset);

		vec3 pos = position;
		vec3 noisePosition = vec3(pos.x * 2.5 + uTime, pos.y, pos.z);
		pos.z += snoise(noisePosition) * 0.05;
		vWave = pos.z * 0.2;

		gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
	}

`;function iu(){const r=`
		float centeredX = ((uv.x) * (uMeshSize.x / uMeshSize.y)) - ((uImgSize.x / uImgSize.y) / 2.0) + 0.5;
		vec2 pos = vec2(centeredX, uv.y);
	`,e=`
		float centeredY = ((uv.y) * (uMeshSize.y / uMeshSize.x)) - ((uImgSize.y / uImgSize.x) / 2.0) + 0.5;
		vec2 pos = vec2(uv.x, centeredY);
	`;function t(n){return`
			uniform sampler2D uTexture;
			uniform float uAlpha;
			uniform vec2 uOffset;
			uniform vec2 uMeshSize;
			uniform vec2 uImgSize;
			varying vec2 vUv;
			varying float vWave;

			vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
				${n}
				
				float r = texture2D(textureImage,pos + offset + vWave).r;
				vec2 gb = texture2D(textureImage,pos + vWave).gb;
				return vec3(r,gb);
			}

			void main() {
				vec3 color = rgbShift(uTexture, vUv, uOffset);
				gl_FragColor = vec4(color,uAlpha);
			}
		`}return{horizontal:t(r),vertical:t(e)}}class H_ extends O_{speed;clock;constructor(e,t){let n={vertex:V_,fragment:{vertical:iu().vertical,horizontal:iu().horizontal}},i={uTime:{value:0},uOffset:{value:new de(0,0)},uAlpha:{value:.7}};super(e,t,n,e.parentElement,i),this.clock=new y_,Bo.subscribe(s=>{this.speed=s})}createMesh(){super.createMesh(),this.element.parentElement.style.visibility="hidden"}render(){super.render(),this.uniforms.uOffset.value.set(this.speed*-3e-4,Math.abs(this.speed*5e-5)),this.uniforms.uTime.value=this.clock.getElapsedTime()*.8}}class G_ extends B_{meshItems;images;constructor(e,t){super(e),this.images=t,this.meshItems=[],this.setup()}setup(){this.images.forEach(e=>{let t=new H_(e,this.scene);this.meshItems.push(t)}),super.setup()}render(){for(let e=0;e<this.meshItems.length;e++)this.meshItems[e].render();super.render()}}function W_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var q_=4,X_=.001,j_=1e-7,Y_=10,Br=11,qs=1/(Br-1),Z_=typeof Float32Array=="function";function kh(r,e){return 1-3*e+3*r}function Nh(r,e){return 3*e-6*r}function Bh(r){return 3*r}function ca(r,e,t){return((kh(e,t)*r+Nh(e,t))*r+Bh(e))*r}function Oh(r,e,t){return 3*kh(e,t)*r*r+2*Nh(e,t)*r+Bh(e)}function J_(r,e,t,n,i){var s,a,o=0;do a=e+(t-e)/2,s=ca(a,n,i)-r,s>0?t=a:e=a;while(Math.abs(s)>j_&&++o<Y_);return a}function $_(r,e,t,n){for(var i=0;i<q_;++i){var s=Oh(e,t,n);if(s===0)return e;var a=ca(e,t,n)-r;e-=a/s}return e}function Q_(r){return r}var K_=function(e,t,n,i){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===i)return Q_;for(var s=Z_?new Float32Array(Br):new Array(Br),a=0;a<Br;++a)s[a]=ca(a*qs,e,n);function o(l){for(var c=0,u=1,h=Br-1;u!==h&&s[u]<=l;++u)c+=qs;--u;var d=(l-s[u])/(s[u+1]-s[u]),f=c+d*qs,g=Oh(f,e,n);return g>=X_?$_(l,f,e,n):g===0?f:J_(l,c,c+qs,e,n)}return function(c){return c===0?0:c===1?1:ca(o(c),t,i)}};const Aa=W_(K_);function hn(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Uh(r,{breakWord:e.breakWord});n.forEach(a=>{a.childNodes.forEach(o=>{o.style.transform="translateX(150%)"}),a.style.transform="translateX(80%)",a.style.display="inline-flex",a.style.overflowY="visible",a.style.overflowX="clip"});let i=[];return n.forEach(a=>{const o=a.childNodes;i=[...i,a,...o]}),e.promise!==void 0&&e.promise.then(()=>{s()}),{delay:e.initDelay,duration:e.duration,tick:a=>{let o=Aa(.2,.58,.43,1)(a);n.forEach(l=>{l.childNodes.forEach(c=>{c.style.transform=`translate3d(${(150+-o*150).toFixed(2)}%, 0px, 0px)`}),l.style.transform=`translate3d(${(80+-o*80).toFixed(2)}%, 0px, 0px)`}),o>=1&&(r.innerHTML=t)},anime:s};function s(a){a===void 0&&(a={}),Ke({targets:i,translateX:"0%",easing:a.easing?a.easing:"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Ke.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t,a&&a.onComplete&&a.onComplete()}})}}function ey(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Uh(r,{breakWord:e.breakWord});n.forEach(s=>{s.style.display="inline-flex",s.style.overflow="hidden"});let i=[];return n.forEach(s=>{const a=s.childNodes;i=[...i,s,...a]}),{delay:e.initDelay,duration:e.duration,tick:s=>{let a=Aa(.32,.24,.76,.26)(s);n.forEach(o=>{o.childNodes.forEach(l=>{l.style.transform=`translate3d(${(-150+a*150).toFixed(2)}%, 0px, 0px)`}),o.style.transform=`translate3d(${(-80+a*80).toFixed(2)}%, 0px, 0px)`}),a>=1&&(r.innerHTML=t)},anime:s=>{Ke({targets:i,translateX:"-150%",easing:s||"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Ke.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t}})}}}function mt(r,e){e=e===void 0?{}:e,e.delay||(e.delay=20),e.duration||(e.duration=700),e.reverse||(e.reverse=!1);let t=n();return e.promise!==void 0&&e.promise.then(()=>{i()}),{delay:e.delay,duration:e.duration,tick:s=>{let a=Aa(.58,.14,.06,.97)(s);e.reverse?(t.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`):(t.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`)},anime:i};function n(){let s=document.createElement("div"),a=r.parentNode,o=Array.from(a.children).indexOf(r);return e=e===void 0?{}:e,s.classList.add("a-mask"),r.classList.add("a-content"),s.insertBefore(r,s.children[0]),s.style.display="inline-block",s.style.overflow="hidden",e.maskStyles&&e.maskStyles.forEach(l=>{s.style[l.property]=l.value}),a.insertBefore(s,a.children[o]),e.reverse?(s.style.transform="translateX(-100%)",r.style.transform="translateX(100%)"):(s.style.transform="translateX(100%)",r.style.transform="translateX(-100%)"),s}function i(s){Ke({targets:[t,r],translateX:"0%",easing:s||"cubicBezier(.58,.14,.06,.97)",duration:e.duration,delay:e.delay})}}function xi(r,e){return e=e===void 0?{}:e,e.delay||(e.delay=0),e.duration||(e.duration=400),{delay:e.delay,duration:e.duration,tick:t=>{let n=Aa(.32,.24,.76,.26)(t);r.parentElement?.classList.contains("a-mask")&&(r.parentElement.style.transform=`translate3d(${(-100+n*100).toFixed(2)}%, 0px, 0px)`),r.style.transform=`translate3d(${(100+-n*100).toFixed(2)}%, 0px, 0px)`}}}function ty(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.marginRight="60%",e.promise.then(()=>{Ke({targets:r,marginRight:"0%",easing:"easeOutQuint",duration:1400,delay:e.delay,complete:()=>{r.style.marginRight="",r.style.transition=""}})}))}function ny(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.transform="translateX(100%)",e.promise.then(()=>{Ke({targets:r,translateX:"0%",easing:"easeOutQuint",duration:1600,delay:e.delay,update:t=>{const n=1-Hd(t.progress/100);Bo.set(n*2500)},complete:()=>{r.style.transform="",r.style.transition="",e.onComplete&&e.onComplete()}})}))}function Uh(r,e){let t=r.querySelectorAll(".a-text-mask");return t.length<1&&(r.innerHTML=n(r.innerHTML,'<div class="a-text-mask"><div class="a-text-block">',"</div></div>"),t=r.querySelectorAll(".a-text-mask")),e.breakWord?r.querySelectorAll(".a-word").forEach(s=>{s.style.display="inline-block",s.style.whiteSpace="nowrap"}):r.querySelectorAll(".a-text-mask").forEach(s=>{s.style.whiteSpace="no-wrap"}),t;function n(i,s,a){let o="",l=!1,c=!1;return[...i].forEach((u,h)=>{u==="<"&&(l=!0,c&&(c=!1,o+="</div>")),i[h-1]==">"&&u!=="<"&&(l=!1,c||(c=!0,o+='<div class="a-word">')),l?o+=u:((u===" "||i[h-1]===" "||h===0||h===i.length)&&(c=!c,o+=c?'<div class="a-word">':'</div><span class="a-spacer a-text-block"> </span>'),u!==" "&&(o+=s+u+a))}),o}}function ru(r,e,t){const n=r.slice();return n[28]=e[t],n}function su(r,e,t){const n=r.slice();return n[31]=e[t],n}function au(r,e,t){const n=r.slice();return n[34]=e[t],n[35]=e,n[36]=t,n}function iy(r){return{c:K,l:K,m:K,p:K,d:K}}function ry(r){let e,t,n,i=r[36],s,a;const o=()=>r[15](e,i),l=()=>r[15](null,i);return{c(){e=X("img"),this.h()},l(c){e=j(c,"IMG",{src:!0,draggable:!0,alt:!0,class:!0}),this.h()},h(){ir(e.src,t=r[38])||N(e,"src",t),N(e,"draggable","false"),N(e,"alt",n=r[34].title+" Background"),N(e,"class","svelte-zppgex")},m(c,u){Be(c,e,u),o(),s||(a=It(e,"dragstart",go(r[14])),s=!0)},p(c,u){r=c,u[0]&1&&!ir(e.src,t=r[38])&&N(e,"src",t),u[0]&1&&n!==(n=r[34].title+" Background")&&N(e,"alt",n),i!==r[36]&&(l(),i=r[36],o())},d(c){c&&V(e),l(),s=!1,a()}}}function sy(r){return{c:K,l:K,m:K,p:K,d:K}}function ay(r){return{c:K,l:K,m:K,p:K,i:K,o:K,d:K}}function oy(r){let e,t,n=(r[36].toString().length>1?r[36]+1:"0"+(r[36]+1).toString())+"",i,s,a,o,l,c,u=r[34].title+"",h,d,f,g,v="view",x,p,m;function b(){return r[16](r[36])}return{c(){e=X("div"),t=X("p"),i=Gt(n),a=Re(),o=X("div"),l=X("h1"),c=X("span"),h=Gt(u),f=Re(),g=X("button"),g.textContent=v,this.h()},l(y){e=j(y,"DIV",{class:!0});var _=ue(e);t=j(_,"P",{class:!0});var E=ue(t);i=Wt(E,n),E.forEach(V),_.forEach(V),a=Pe(y),o=j(y,"DIV",{class:!0});var C=ue(o);l=j(C,"H1",{class:!0});var I=ue(l);c=j(I,"SPAN",{class:!0});var Z=ue(c);h=Wt(Z,u),Z.forEach(V),I.forEach(V),f=Pe(C),g=j(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Qe(g)!=="svelte-6jg3a6"&&(g.textContent=v),C.forEach(V),this.h()},h(){N(t,"class","item-index svelte-zppgex"),N(e,"class","text-top-wrapper svelte-zppgex"),ot(e,"hidden",r[8]>=0||r[1]),N(c,"class","svelte-zppgex"),N(l,"class","item-title svelte-zppgex"),N(g,"class","button item-link interactive svelte-zppgex"),N(o,"class","text-wrapper svelte-zppgex"),ot(o,"hidden",r[8]>=0||r[1])},m(y,_){Be(y,e,_),B(e,t),B(t,i),Be(y,a,_),Be(y,o,_),B(o,l),B(l,c),B(c,h),B(o,f),B(o,g),p||(m=It(g,"click",b),p=!0)},p(y,_){r=y,_[0]&258&&ot(e,"hidden",r[8]>=0||r[1]),_[0]&1&&u!==(u=r[34].title+"")&&Bn(h,u),_[0]&258&&ot(o,"hidden",r[8]>=0||r[1])},i(y){y&&(s||tt(()=>{s=nt(t,mt,{delay:r[36]*30+100,reverse:!0}),s.start()})),y&&(d||tt(()=>{d=nt(c,mt,{duration:900,delay:r[36]*30+300,reverse:!0}),d.start()})),y&&(x||tt(()=>{x=nt(g,mt,{duration:900,delay:r[36]*30+450,reverse:!0}),x.start()}))},o:K,d(y){y&&(V(e),V(a),V(o)),p=!1,m()}}}function ly(r){return{c:K,l:K,m:K,p:K,i:K,o:K,d:K}}function ou(r){let e,t,n,i,s,a=r[36],o,l,c,u={ctx:r,current:null,token:null,hasCatch:!1,pending:sy,then:ry,catch:iy,value:38};Mn(i=jr(`assets/imgs/work-back/${r[34].id}/cover.jpg`),u);let h={ctx:r,current:null,token:null,hasCatch:!1,pending:ly,then:oy,catch:ay,value:37};Mn(r[11],h);const d=()=>r[17](t,a),f=()=>r[17](null,a);return{c(){e=X("li"),t=X("div"),n=X("div"),u.block.c(),s=Re(),h.block.c(),o=Re(),this.h()},l(g){e=j(g,"LI",{class:!0});var v=ue(e);t=j(v,"DIV",{class:!0});var x=ue(t);n=j(x,"DIV",{class:!0});var p=ue(n);u.block.l(p),p.forEach(V),s=Pe(x),h.block.l(x),x.forEach(V),o=Pe(v),v.forEach(V),this.h()},h(){N(n,"class","img-wrapper svelte-zppgex"),N(t,"class","list-item clickable passive svelte-zppgex"),ot(t,"ambient",r[8]!==r[36]&&r[8]>=0),ot(t,"active",r[8]===r[36]),N(e,"class","svelte-zppgex")},m(g,v){Be(g,e,v),B(e,t),B(t,n),u.block.m(n,u.anchor=null),u.mount=()=>n,u.anchor=null,B(t,s),h.block.m(t,h.anchor=null),h.mount=()=>t,h.anchor=null,d(),B(e,o),l||(c=rn(ty.call(null,e,{promise:r[11],delay:r[36]*30})),l=!0)},p(g,v){r=g,u.ctx=r,v[0]&1&&i!==(i=jr(`assets/imgs/work-back/${r[34].id}/cover.jpg`))&&Mn(i,u)||Xr(u,r,v),Xr(h,r,v),a!==r[36]&&(f(),a=r[36],d()),v[0]&256&&ot(t,"ambient",r[8]!==r[36]&&r[8]>=0),v[0]&256&&ot(t,"active",r[8]===r[36])},d(g){g&&V(e),u.block.d(),u.token=null,u=null,h.block.d(),h.token=null,h=null,f(),l=!1,c()}}}function lu(r){let e,t,n,i,s,a,o,l,c,u,h,d,f,g,v=r[0][r[8]].details.summary+"",x,p,m,b,y,_,E=r[0][r[8]].title+"",C,I,Z,O,R,M="×",w,z,F,D,k,$,ie,H=r[0][r[8]].details.description+"",W,se,ee,me,Le,Q,Me,we='<p class="descriptor svelte-zppgex">Role</p>',ge,Te,Oe,q,re,le,_e,pe,ye,Ee,ke,Ne,L,T;function te(S,he){return S[8]<9?uy:cy}let oe=te(r),fe=oe(r),ae=$i(r[0][r[8]].roles),Ae=[];for(let S=0;S<ae.length;S+=1)Ae[S]=cu(su(r,ae,S));let Ce=$i(r[0][r[8]].links),ce=[];for(let S=0;S<Ce.length;S+=1)ce[S]=uu(ru(r,Ce,S));return{c(){e=X("div"),t=X("div"),n=X("div"),i=X("div"),s=X("div"),a=X("div"),fe.c(),c=Re(),u=X("span"),d=Re(),f=X("h6"),g=X("div"),x=Gt(v),b=Re(),y=X("div"),_=X("h1"),C=Gt(E),Z=Re(),O=X("button"),R=X("div"),R.textContent=M,F=Re(),D=X("div"),k=X("div"),$=X("div"),ie=X("p"),W=Gt(H),me=Re(),Le=X("div"),Q=X("div"),Me=X("div"),Me.innerHTML=we,Oe=Re(),q=X("ul");for(let S=0;S<Ae.length;S+=1)Ae[S].c();_e=Re(),pe=X("div"),ye=X("div");for(let S=0;S<ce.length;S+=1)ce[S].c();this.h()},l(S){e=j(S,"DIV",{class:!0});var he=ue(e);t=j(he,"DIV",{class:!0});var J=ue(t);n=j(J,"DIV",{class:!0});var Fe=ue(n);i=j(Fe,"DIV",{class:!0});var Se=ue(i);s=j(Se,"DIV",{class:!0});var We=ue(s);a=j(We,"DIV",{class:!0});var ve=ue(a);fe.l(ve),ve.forEach(V),We.forEach(V),c=Pe(Se),u=j(Se,"SPAN",{class:!0}),ue(u).forEach(V),d=Pe(Se),f=j(Se,"H6",{class:!0});var Ue=ue(f);g=j(Ue,"DIV",{class:!0});var it=ue(g);x=Wt(it,v),it.forEach(V),Ue.forEach(V),Se.forEach(V),Fe.forEach(V),b=Pe(J),y=j(J,"DIV",{class:!0});var Je=ue(y);_=j(Je,"H1",{class:!0});var Xt=ue(_);C=Wt(Xt,E),Xt.forEach(V),Z=Pe(Je),O=j(Je,"BUTTON",{class:!0});var jt=ue(O);R=j(jt,"DIV",{class:!0,"data-svelte-h":!0}),Qe(R)!=="svelte-ac1run"&&(R.textContent=M),jt.forEach(V),Je.forEach(V),F=Pe(J),D=j(J,"DIV",{class:!0});var Vt=ue(D);k=j(Vt,"DIV",{class:!0});var yr=ue(k);$=j(yr,"DIV",{class:!0});var br=ue($);ie=j(br,"P",{class:!0});var cs=ue(ie);W=Wt(cs,H),cs.forEach(V),br.forEach(V),yr.forEach(V),me=Pe(Vt),Le=j(Vt,"DIV",{class:!0});var fi=ue(Le);Q=j(fi,"DIV",{class:!0});var Ci=ue(Q);Me=j(Ci,"DIV",{class:!0,"data-svelte-h":!0}),Qe(Me)!=="svelte-55u6rj"&&(Me.innerHTML=we),Oe=Pe(Ci),q=j(Ci,"UL",{class:!0});var Li=ue(q);for(let An=0;An<Ae.length;An+=1)Ae[An].l(Li);Li.forEach(V),Ci.forEach(V),fi.forEach(V),_e=Pe(Vt),pe=j(Vt,"DIV",{class:!0});var Mr=ue(pe);ye=j(Mr,"DIV",{class:!0});var us=ue(ye);for(let An=0;An<ce.length;An+=1)ce[An].l(us);us.forEach(V),Mr.forEach(V),Vt.forEach(V),J.forEach(V),he.forEach(V),this.h()},h(){N(a,"class","svelte-zppgex"),N(s,"class","index svelte-zppgex"),N(u,"class","line svelte-zppgex"),N(g,"class","svelte-zppgex"),N(f,"class","caption svelte-zppgex"),N(i,"class","wrapper svelte-zppgex"),N(n,"class","top-align svelte-zppgex"),N(_,"class","title svelte-zppgex"),ot(_,"breakTitleWords",r[7]),N(R,"class","close-button svelte-zppgex"),N(O,"class","close-button-wrapper interactive svelte-zppgex"),N(y,"class","mid-align svelte-zppgex"),N(ie,"class","paragraph svelte-zppgex"),N($,"class","svelte-zppgex"),N(k,"class","svelte-zppgex"),N(Me,"class","svelte-zppgex"),N(q,"class","svelte-zppgex"),N(Q,"class","wrapper svelte-zppgex"),N(Le,"class","roles svelte-zppgex"),N(ye,"class","links svelte-zppgex"),N(pe,"class","svelte-zppgex"),N(D,"class","bottom-align svelte-zppgex"),N(t,"class","wrapper svelte-zppgex"),N(e,"class","details-container svelte-zppgex")},m(S,he){Be(S,e,he),B(e,t),B(t,n),B(n,i),B(i,s),B(s,a),fe.m(a,null),B(i,c),B(i,u),B(i,d),B(i,f),B(f,g),B(g,x),B(t,b),B(t,y),B(y,_),B(_,C),B(y,Z),B(y,O),B(O,R),B(t,F),B(t,D),B(D,k),B(k,$),B($,ie),B(ie,W),B(D,me),B(D,Le),B(Le,Q),B(Q,Me),B(Q,Oe),B(Q,q);for(let J=0;J<Ae.length;J+=1)Ae[J]&&Ae[J].m(q,null);B(D,_e),B(D,pe),B(pe,ye);for(let J=0;J<ce.length;J+=1)ce[J]&&ce[J].m(ye,null);Ne=!0,L||(T=[rn(r[13].call(null,_)),It(_,"introend",r[19]),It(_,"outrostart",r[20]),It(O,"click",r[21])],L=!0)},p(S,he){if(oe===(oe=te(S))&&fe?fe.p(S,he):(fe.d(1),fe=oe(S),fe&&(fe.c(),fe.m(a,null))),(!Ne||he[0]&257)&&v!==(v=S[0][S[8]].details.summary+"")&&Bn(x,v),(!Ne||he[0]&257)&&E!==(E=S[0][S[8]].title+"")&&Bn(C,E),(!Ne||he[0]&128)&&ot(_,"breakTitleWords",S[7]),(!Ne||he[0]&257)&&H!==(H=S[0][S[8]].details.description+"")&&Bn(W,H),he[0]&257){ae=$i(S[0][S[8]].roles);let J;for(J=0;J<ae.length;J+=1){const Fe=su(S,ae,J);Ae[J]?Ae[J].p(Fe,he):(Ae[J]=cu(Fe),Ae[J].c(),Ae[J].m(q,null))}for(;J<Ae.length;J+=1)Ae[J].d(1);Ae.length=ae.length}if(he[0]&257){Ce=$i(S[0][S[8]].links);let J;for(J=0;J<Ce.length;J+=1){const Fe=ru(S,Ce,J);ce[J]?ce[J].p(Fe,he):(ce[J]=uu(Fe),ce[J].c(),ce[J].m(ye,null))}for(;J<ce.length;J+=1)ce[J].d(1);ce.length=Ce.length}},i(S){Ne||(S&&tt(()=>{Ne&&(l&&l.end(1),o=nt(a,mt,{reverse:!0}),o.start())}),S&&tt(()=>{Ne&&(h||(h=yl(u,Il,{},!0)),h.run(1))}),S&&tt(()=>{Ne&&(m&&m.end(1),p=nt(g,mt,{reverse:!0}),p.start())}),I&&I.end(1),S&&tt(()=>{Ne&&(z&&z.end(1),w=nt(R,mt,{reverse:!0}),w.start())}),S&&tt(()=>{Ne&&(ee&&ee.end(1),se=nt($,mt,{reverse:!0}),se.start())}),S&&tt(()=>{Ne&&(Te&&Te.end(1),ge=nt(Me,mt,{reverse:!0}),ge.start())}),S&&tt(()=>{Ne&&(le&&le.end(1),re=nt(q,mt,{reverse:!0,delay:100}),re.start())}),S&&tt(()=>{Ne&&(ke&&ke.end(1),Ee=nt(pe,mt,{reverse:!0}),Ee.start())}),Ne=!0)},o(S){o&&o.invalidate(),S&&(l=Gn(a,xi,{})),S&&(h||(h=yl(u,Il,{},!1)),h.run(0)),p&&p.invalidate(),S&&(m=Gn(g,xi,{})),S&&(I=Gn(_,ey,{})),w&&w.invalidate(),S&&(z=Gn(R,xi,{})),se&&se.invalidate(),S&&(ee=Gn($,xi,{})),ge&&ge.invalidate(),S&&(Te=Gn(Me,xi,{})),re&&re.invalidate(),S&&(le=Gn(q,xi,{})),Ee&&Ee.invalidate(),S&&(ke=Gn(pe,xi,{})),Ne=!1},d(S){S&&V(e),fe.d(),S&&l&&l.end(),S&&h&&h.end(),S&&m&&m.end(),S&&I&&I.end(),S&&z&&z.end(),S&&ee&&ee.end(),S&&Te&&Te.end(),mo(Ae,S),S&&le&&le.end(),mo(ce,S),S&&ke&&ke.end(),L=!1,ts(T)}}}function cy(r){let e=r[8]+1+"",t;return{c(){t=Gt(e)},l(n){t=Wt(n,e)},m(n,i){Be(n,t,i)},p(n,i){i[0]&256&&e!==(e=n[8]+1+"")&&Bn(t,e)},d(n){n&&V(t)}}}function uy(r){let e="0"+(r[8]+1),t;return{c(){t=Gt(e)},l(n){t=Wt(n,e)},m(n,i){Be(n,t,i)},p(n,i){i[0]&256&&e!==(e="0"+(n[8]+1))&&Bn(t,e)},d(n){n&&V(t)}}}function cu(r){let e,t="+ "+r[31],n;return{c(){e=X("li"),n=Gt(t),this.h()},l(i){e=j(i,"LI",{class:!0});var s=ue(e);n=Wt(s,t),s.forEach(V),this.h()},h(){N(e,"class","svelte-zppgex")},m(i,s){Be(i,e,s),B(e,n)},p(i,s){s[0]&257&&t!==(t="+ "+i[31])&&Bn(n,t)},d(i){i&&V(e)}}}function uu(r){let e,t=r[28].text+"",n,i;return{c(){e=X("a"),n=Gt(t),this.h()},l(s){e=j(s,"A",{href:!0,target:!0,class:!0});var a=ue(e);n=Wt(a,t),a.forEach(V),this.h()},h(){N(e,"href",i=r[28].link),N(e,"target","_blank"),N(e,"class","button svelte-zppgex")},m(s,a){Be(s,e,a),B(e,n)},p(s,a){a[0]&257&&t!==(t=s[28].text+"")&&Bn(n,t),a[0]&257&&i!==(i=s[28].link)&&N(e,"href",i)},d(s){s&&V(e)}}}function hy(r){let e,t,n,i,s,a,o,l,c=$i(r[0]),u=[];for(let d=0;d<c.length;d+=1)u[d]=ou(au(r,c,d));let h=r[8]!==-1&&lu(r);return{c(){e=X("div"),t=X("div"),n=X("div"),i=X("ul");for(let d=0;d<u.length;d+=1)u[d].c();s=Re(),h&&h.c(),this.h()},l(d){e=j(d,"DIV",{id:!0,class:!0});var f=ue(e);t=j(f,"DIV",{class:!0,role:!0,tabindex:!0});var g=ue(t);n=j(g,"DIV",{class:!0});var v=ue(n);i=j(v,"UL",{class:!0});var x=ue(i);for(let p=0;p<u.length;p+=1)u[p].l(x);x.forEach(V),v.forEach(V),s=Pe(g),h&&h.l(g),g.forEach(V),f.forEach(V),this.h()},h(){N(i,"class","work-list svelte-zppgex"),ot(i,"hold",r[1]),N(n,"class","svelte-zppgex"),ot(n,"mobile",r[10]),N(t,"class","content-wrapper svelte-zppgex"),N(t,"role","listbox"),N(t,"tabindex","0"),ot(t,"disabled",r[8]>=0),N(e,"id","content-container"),N(e,"class","work-click-area svelte-zppgex")},m(d,f){Be(d,e,f),B(e,t),B(t,n),B(n,i);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(i,null);r[18](i),B(t,s),h&&h.m(t,null),r[22](t),r[24](e),o||(l=[It(t,"mousedown",go(function(){Sr(r[9].onHold)&&r[9].onHold.apply(this,arguments)})),It(t,"mouseup",function(){Sr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),It(t,"mouseleave",function(){Sr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),It(t,"mousemove",go(function(){Sr(r[9].onMouseMove)&&r[9].onMouseMove.apply(this,arguments)})),rn(a=ny.call(null,t,{promise:r[11],onComplete:r[23]}))],o=!0)},p(d,f){if(r=d,f[0]&6499){c=$i(r[0]);let g;for(g=0;g<c.length;g+=1){const v=au(r,c,g);u[g]?u[g].p(v,f):(u[g]=ou(v),u[g].c(),u[g].m(i,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=c.length}f[0]&2&&ot(i,"hold",r[1]),f[0]&1024&&ot(n,"mobile",r[10]),r[8]!==-1?h?(h.p(r,f),f[0]&256&&St(h,1)):(h=lu(r),h.c(),St(h,1),h.m(t,null)):h&&(ua(),Jt(h,1,1,()=>{h=null}),ha()),a&&Sr(a.update)&&f[0]&512&&a.update.call(null,{promise:r[11],onComplete:r[23]}),f[0]&256&&ot(t,"disabled",r[8]>=0)},i(d){St(h)},o(d){Jt(h)},d(d){d&&V(e),mo(u,d),r[18](null),h&&h.d(),r[22](null),r[24](null),o=!1,ts(l)}}}function dy(r,e,t){let n,i;Kt(r,bo,F=>t(26,n=F)),Kt(r,_o,F=>t(10,i=F));let s=[];Uo.subscribe(F=>{F!==void 0&&t(0,s=F)});let a=!1;Ys.subscribe(F=>t(1,a=F));let o,l,c,u=[],h=[],d=!1,f=-1,g;const v=new Promise(F=>{g=F});class x{currentMouseX=0;initialMouseX=0;currentPosition=0;targetPosition=0;initialPosition=0;offsetSpeed=5e3;lerpSpeed=.1;onHold=D=>{if(!(f>=0||a||D.target.classList.contains("button"))&&(this.initialMouseX=D.clientX,this.currentMouseX=D.clientX,Ys.set(!0),a)){let k=window.getComputedStyle(c),$=new WebKitCSSMatrix(k.transform);this.initialPosition=$.m41}};onRelease(){Ys.set(!1)}onMouseMove=D=>{if(!a)return;this.currentMouseX=D.clientX;let k=(this.currentMouseX-this.initialMouseX)*-1;this.targetPosition=Math.round((this.initialPosition-this.offsetSpeed*(k/document.body.clientWidth))*100)/100};animate=()=>{if(f<0){let D=c.offsetWidth-document.body.clientWidth;D<0&&(D=c.offsetWidth),this.targetPosition>0&&(this.targetPosition=0),this.targetPosition<=D*-1&&(this.targetPosition=-D)}this.currentPosition=this.lerp(this.currentPosition,this.targetPosition,this.lerpSpeed),Bo.set(Math.round((this.currentPosition-this.targetPosition)*100)/100),t(4,c.style.transform=`translate3d(${Math.round(this.currentPosition*100)/100}px, 0px, 0px)`,c),requestAnimationFrame(()=>this.animate())};lerp(D,k,$){return D*(1-$)+k*$}}const p=new x;lr(async()=>{ea(o,()=>g(!0));const F=await Pl();qr(_o,i=F.isMobile,i),await cr,qr(bo,n=o,n),t(4,c.style.transform="translate3d(0px, 0px, 0px)",c),F.tier>=2&&!F.isMobile&&F.fps>=30&&new G_(l,u)});function m(F){t(8,f=f==F?-1:F),f>=0&&t(9,p.targetPosition=-(h[F].offsetLeft-window.innerWidth/4+window.innerWidth/10),p)}function b(F){hn(F,{delay:5,breakWord:!1}).anime({onComplete:()=>t(7,d=!0)})}function y(F){jh.call(this,r,F)}function _(F,D){lt[F?"unshift":"push"](()=>{u[D]=F,t(5,u)})}const E=F=>m(F);function C(F,D){lt[F?"unshift":"push"](()=>{h[D]=F,t(6,h)})}function I(F){lt[F?"unshift":"push"](()=>{c=F,t(4,c)})}const Z=()=>setTimeout(()=>t(7,d=!0),100),O=()=>setTimeout(()=>t(7,d=!1),100),R=()=>m(f);function M(F){lt[F?"unshift":"push"](()=>{l=F,t(3,l)})}const w=async()=>{(await Pl()).isMobile||p.animate()};function z(F){lt[F?"unshift":"push"](()=>{o=F,t(2,o)})}return[s,a,o,l,c,u,h,d,f,p,i,v,m,b,y,_,E,C,I,Z,O,R,M,w,z]}class fy extends ui{constructor(e){super(),hi(this,e,dy,hy,Hn,{},null,[-1,-1])}}function py(r){return{c:K,l:K,m:K,i:K,o:K,d:K}}function my(r){let e,t,n="Hey I&#39;m <br/>Ghanshyam",i,s,a='<p class="paragraph svelte-l800rr">Hello! I&#39;m a versatile web developer based in the vibrant city of Bangalore, India. With a passion for crafting exceptional web experiences, I specialize in both designing and developing user-centric websites. My goal is to blend creativity with technical expertise to deliver innovative solutions that stand out. I&#39;m always eager to explore new challenges and expand my skill set, aiming to become a true jack of all trades in the tech world.<br/><br/>I work with organizations and individuals to create beautiful, responsive and scalable web products tailor-made. Think we can make something great together? Let&#39;s talk over email.</p>',o,l,c,u,h='<span class="button svelte-l800rr"><a href="mailto:ghanusnair@gmail.com" target="_blank" class="clickable sublink link svelte-l800rr">Email Me</a></span>',d,f,g,v='<span class="button svelte-l800rr"><a href="https://github.com/ghanshyam-nair-emi" target="_blank" class="clickable sublink link svelte-l800rr">Github</a></span>',x,p,m,b,y,_={ctx:r,current:null,token:null,hasCatch:!1,pending:xy,then:vy,catch:gy,value:14};return Mn(jr("assets/imgs/profile.jpg"),_),{c(){e=X("div"),t=X("h1"),t.innerHTML=n,i=Re(),s=X("div"),s.innerHTML=a,l=Re(),c=X("div"),u=X("div"),u.innerHTML=h,f=Re(),g=X("div"),g.innerHTML=v,p=Re(),m=X("div"),_.block.c(),this.h()},l(E){e=j(E,"DIV",{class:!0});var C=ue(e);t=j(C,"H1",{class:!0,"data-svelte-h":!0}),Qe(t)!=="svelte-1c2l9f3"&&(t.innerHTML=n),i=Pe(C),s=j(C,"DIV",{"data-svelte-h":!0}),Qe(s)!=="svelte-15c7aab"&&(s.innerHTML=a),l=Pe(C),c=j(C,"DIV",{class:!0});var I=ue(c);u=j(I,"DIV",{"data-svelte-h":!0}),Qe(u)!=="svelte-u6bqyu"&&(u.innerHTML=h),f=Pe(I),g=j(I,"DIV",{"data-svelte-h":!0}),Qe(g)!=="svelte-1jerbae"&&(g.innerHTML=v),I.forEach(V),C.forEach(V),p=Pe(E),m=j(E,"DIV",{class:!0});var Z=ue(m);_.block.l(Z),Z.forEach(V),this.h()},h(){N(t,"class","title svelte-l800rr"),N(c,"class","social-button-wrapper svelte-l800rr"),N(e,"class","content-wrapper svelte-l800rr"),N(m,"class","profile-image svelte-l800rr")},m(E,C){Be(E,e,C),B(e,t),B(e,i),B(e,s),B(e,l),B(e,c),B(c,u),B(c,f),B(c,g),Be(E,p,C),Be(E,m,C),_.block.m(m,_.anchor=null),_.mount=()=>m,_.anchor=null,b||(y=[rn(r[4].call(null,t)),rn(r[5].call(null,m))],b=!0)},p(E,C){r=E},i(E){E&&(o||tt(()=>{o=nt(s,mt,{duration:1200,reverse:!0,delay:150}),o.start()})),E&&(d||tt(()=>{d=nt(u,mt,{delay:400,reverse:!0}),d.start()})),E&&(x||tt(()=>{x=nt(g,mt,{delay:700,reverse:!0}),x.start()})),St(_.block)},o:K,d(E){E&&(V(e),V(p),V(m)),_.block.d(),_.token=null,_=null,b=!1,ts(y)}}}function gy(r){return{c:K,l:K,m:K,i:K,o:K,d:K}}function vy(r){let e,t,n;return{c(){e=X("img"),this.h()},l(i){e=j(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ir(e.src,t=r[14])||N(e,"src",t),N(e,"alt","Ghanshyam's Profile"),N(e,"class","profile-pic svelte-l800rr")},m(i,s){Be(i,e,s)},i(i){i&&(n||tt(()=>{n=nt(e,mt,{duration:1200,delay:100,reverse:!0,maskStyles:[{property:"width",value:"100%"},{property:"height",value:"100%"}]}),n.start()}))},o:K,d(i){i&&V(e)}}}function xy(r){return{c:K,l:K,m:K,i:K,o:K,d:K}}function _y(r){return{c:K,l:K,m:K,i:K,o:K,d:K}}function yy(r){return{c:K,l:K,m:K,i:K,o:K,d:K}}function by(r){let e,t,n,i="technical expertise",s,a,o,l,c="Front-end",u,h,d,f='<img src="assets/imgs/svg-icons/svelte.svg" alt="Svelte" class="svelte-l800rr"/> <img src="assets/imgs/svg-icons/react.svg" alt="React" class="svelte-l800rr"/>',g,v,x,p,m="Back-end",b,y,_,E='<img src="assets/imgs/svg-icons/nodejs.svg" alt="node js" class="svelte-l800rr"/> <img src="assets/imgs/svg-icons/dotnet.svg" alt="php" class="svelte-l800rr"/> <img src="assets/imgs/svg-icons/python.svg" alt="php" class="svelte-l800rr"/>',C,I,Z,O,R="Dev-ops",M,w,z,F='<img src="assets/imgs/svg-icons/azure.svg" alt="Azure Devops" class="svelte-l800rr"/> <img src="assets/imgs/svg-icons/gcp.svg" alt="Google Cloud Platform" class="svelte-l800rr"/>',D,k,$,ie,H="Database",W,se,ee,me='<img src="assets/imgs/svg-icons/sql.svg" alt="flutter" class="svelte-l800rr"/>',Le,Q,Me,we,ge,Te="Currently- Occupation",Oe,q,re,le,_e="SDE-2 EM International, Bangalore, India",pe;return{c(){e=X("ul"),t=X("li"),n=X("div"),n.textContent=i,a=Re(),o=X("li"),l=X("div"),l.textContent=c,h=Re(),d=X("div"),d.innerHTML=f,v=Re(),x=X("li"),p=X("div"),p.textContent=m,y=Re(),_=X("div"),_.innerHTML=E,I=Re(),Z=X("li"),O=X("div"),O.textContent=R,w=Re(),z=X("div"),z.innerHTML=F,k=Re(),$=X("li"),ie=X("div"),ie.textContent=H,se=Re(),ee=X("div"),ee.innerHTML=me,Q=Re(),Me=X("ul"),we=X("li"),ge=X("div"),ge.textContent=Te,q=Re(),re=X("li"),le=X("div"),le.textContent=_e,this.h()},l(ye){e=j(ye,"UL",{class:!0});var Ee=ue(e);t=j(Ee,"LI",{class:!0});var ke=ue(t);n=j(ke,"DIV",{"data-svelte-h":!0}),Qe(n)!=="svelte-qce6sw"&&(n.textContent=i),ke.forEach(V),a=Pe(Ee),o=j(Ee,"LI",{class:!0});var Ne=ue(o);l=j(Ne,"DIV",{"data-svelte-h":!0}),Qe(l)!=="svelte-eh651t"&&(l.textContent=c),h=Pe(Ne),d=j(Ne,"DIV",{class:!0,"data-svelte-h":!0}),Qe(d)!=="svelte-183ff0p"&&(d.innerHTML=f),Ne.forEach(V),v=Pe(Ee),x=j(Ee,"LI",{class:!0});var L=ue(x);p=j(L,"DIV",{"data-svelte-h":!0}),Qe(p)!=="svelte-vw9vq2"&&(p.textContent=m),y=Pe(L),_=j(L,"DIV",{class:!0,"data-svelte-h":!0}),Qe(_)!=="svelte-1bi3wny"&&(_.innerHTML=E),L.forEach(V),I=Pe(Ee),Z=j(Ee,"LI",{class:!0});var T=ue(Z);O=j(T,"DIV",{"data-svelte-h":!0}),Qe(O)!=="svelte-1ita7f2"&&(O.textContent=R),w=Pe(T),z=j(T,"DIV",{class:!0,"data-svelte-h":!0}),Qe(z)!=="svelte-1864uln"&&(z.innerHTML=F),T.forEach(V),k=Pe(Ee),$=j(Ee,"LI",{class:!0});var te=ue($);ie=j(te,"DIV",{"data-svelte-h":!0}),Qe(ie)!=="svelte-me8zzy"&&(ie.textContent=H),se=Pe(te),ee=j(te,"DIV",{class:!0,"data-svelte-h":!0}),Qe(ee)!=="svelte-1a3xhac"&&(ee.innerHTML=me),te.forEach(V),Ee.forEach(V),Q=Pe(ye),Me=j(ye,"UL",{class:!0});var oe=ue(Me);we=j(oe,"LI",{class:!0});var fe=ue(we);ge=j(fe,"DIV",{"data-svelte-h":!0}),Qe(ge)!=="svelte-7i2nik"&&(ge.textContent=Te),fe.forEach(V),q=Pe(oe),re=j(oe,"LI",{class:!0});var ae=ue(re);le=j(ae,"DIV",{"data-svelte-h":!0}),Qe(le)!=="svelte-1hti9yj"&&(le.textContent=_e),ae.forEach(V),oe.forEach(V),this.h()},h(){N(t,"class","list-title svelte-l800rr"),N(d,"class","flex-item"),N(o,"class","svelte-l800rr"),N(_,"class","flex-item"),N(x,"class","svelte-l800rr"),N(z,"class","flex-item"),N(Z,"class","svelte-l800rr"),N(ee,"class","flex-item"),N($,"class","svelte-l800rr"),N(e,"class","list first svelte-l800rr"),N(we,"class","list-title svelte-l800rr"),N(re,"class","svelte-l800rr"),N(Me,"class","list svelte-l800rr")},m(ye,Ee){Be(ye,e,Ee),B(e,t),B(t,n),B(e,a),B(e,o),B(o,l),B(o,h),B(o,d),B(e,v),B(e,x),B(x,p),B(x,y),B(x,_),B(e,I),B(e,Z),B(Z,O),B(Z,w),B(Z,z),B(e,k),B(e,$),B($,ie),B($,se),B($,ee),Be(ye,Q,Ee),Be(ye,Me,Ee),B(Me,we),B(we,ge),B(Me,q),B(Me,re),B(re,le)},i(ye){ye&&(s||tt(()=>{s=nt(n,hn,{initDelay:400}),s.start()})),ye&&(u||tt(()=>{u=nt(l,hn,{initDelay:550}),u.start()})),ye&&(g||tt(()=>{g=nt(d,mt,{delay:600}),g.start()})),ye&&(b||tt(()=>{b=nt(p,hn,{initDelay:650}),b.start()})),ye&&(C||tt(()=>{C=nt(_,mt,{delay:700}),C.start()})),ye&&(M||tt(()=>{M=nt(O,hn,{initDelay:750}),M.start()})),ye&&(D||tt(()=>{D=nt(z,mt,{delay:800}),D.start()})),ye&&(W||tt(()=>{W=nt(ie,hn,{initDelay:850}),W.start()})),ye&&(Le||tt(()=>{Le=nt(ee,mt,{delay:900}),Le.start()})),ye&&(Oe||tt(()=>{Oe=nt(ge,hn,{initDelay:400}),Oe.start()})),ye&&(pe||tt(()=>{pe=nt(le,hn,{initDelay:550}),pe.start()}))},o:K,d(ye){ye&&(V(e),V(Q),V(Me))}}}function My(r){return{c:K,l:K,m:K,i:K,o:K,d:K}}function wy(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:_y,then:my,catch:py,value:13};Mn(r[2],i);let s={ctx:r,current:null,token:null,hasCatch:!1,pending:My,then:by,catch:yy,value:13};return Mn(r[3],s),{c(){e=X("div"),i.block.c(),t=Re(),n=X("div"),s.block.c(),this.h()},l(a){e=j(a,"DIV",{id:!0,class:!0});var o=ue(e);i.block.l(o),o.forEach(V),t=Pe(a),n=j(a,"DIV",{class:!0});var l=ue(n);s.block.l(l),l.forEach(V),this.h()},h(){N(e,"id","content-container"),N(e,"class","about svelte-l800rr"),N(n,"class","horizontal-flex svelte-l800rr")},m(a,o){Be(a,e,o),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null,r[6](e),Be(a,t,o),Be(a,n,o),s.block.m(n,s.anchor=null),s.mount=()=>n,s.anchor=null,r[7](n)},p(a,[o]){r=a},i(a){St(i.block),St(s.block)},o:K,d(a){a&&(V(e),V(t),V(n)),i.block.d(),i.token=null,i=null,r[6](null),s.block.d(),s.token=null,s=null,r[7](null)}}}function Sy(r,e,t){let n,i;Kt(r,Ks,x=>t(10,n=x)),Kt(r,Mo,x=>t(11,i=x));let s,a,o,l,c=new Promise(x=>l=x),u,h=new Promise(x=>u=x);lr(async()=>{await cr,qr(Mo,i=s,i),n.addOffset({element:o,speedY:.8}),ea(s,()=>l(!0)),ea(a,()=>u(!0))});function d(x){hn(x,{delay:15}).anime()}function f(x){n.addOffset({element:x,speedY:.8})}function g(x){lt[x?"unshift":"push"](()=>{s=x,t(0,s)})}function v(x){lt[x?"unshift":"push"](()=>{a=x,t(1,a)})}return[s,a,c,h,d,f,g,v]}class Ty extends ui{constructor(e){super(),hi(this,e,Sy,wy,Hn,{})}}const{window:Ey}=mu;function Ay(r){return{c:K,l:K,m:K,p:K,d:K}}function Cy(r){let e,t,n,i,s,a,o,l,c,u=r[0],h,d,f,g='<div class="hb svelte-11y6gr6"><span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span></div>',v,x,p=hu(r);return{c(){e=X("div"),t=X("div"),n=X("button"),i=X("img"),a=Re(),o=X("div"),l=X("div"),c=X("ul"),p.c(),h=Re(),d=X("div"),f=X("button"),f.innerHTML=g,this.h()},l(m){e=j(m,"DIV",{class:!0,style:!0});var b=ue(e);t=j(b,"DIV",{class:!0,style:!0});var y=ue(t);n=j(y,"BUTTON",{class:!0});var _=ue(n);i=j(_,"IMG",{src:!0,class:!0,alt:!0,draggable:!0}),_.forEach(V),y.forEach(V),a=Pe(b),o=j(b,"DIV",{class:!0});var E=ue(o);l=j(E,"DIV",{class:!0});var C=ue(l);c=j(C,"UL",{class:!0});var I=ue(c);p.l(I),I.forEach(V),C.forEach(V),h=Pe(E),d=j(E,"DIV",{class:!0});var Z=ue(d);f=j(Z,"BUTTON",{class:!0,"data-svelte-h":!0}),Qe(f)!=="svelte-ddta8z"&&(f.innerHTML=g),Z.forEach(V),E.forEach(V),b.forEach(V),this.h()},h(){ir(i.src,s="assets/imgs/logo.svg")||N(i,"src",s),N(i,"class","logo-icon svelte-11y6gr6"),N(i,"alt","Logo"),N(i,"draggable","false"),N(n,"class","interactive clickable svelte-11y6gr6"),N(t,"class","flex-wrapper ico svelte-11y6gr6"),Ye(t,"z-index","21"),N(c,"class","nav-list svelte-11y6gr6"),N(l,"class","wrapper svelte-11y6gr6"),ot(l,"mobileMenuActive",r[0]),N(f,"class","interactive hb-button clickable svelte-11y6gr6"),ot(f,"mobileMenuActive",r[0]),N(d,"class","mask svelte-11y6gr6"),N(o,"class","flex-wrapper svelte-11y6gr6"),N(e,"class","nav-wrapper svelte-11y6gr6"),Ye(e,"transform","translate(0px)")},m(m,b){Be(m,e,b),B(e,t),B(t,n),B(n,i),B(e,a),B(e,o),B(o,l),B(l,c),p.m(c,null),B(o,h),B(o,d),B(d,f),v||(x=[rn(r[7].call(null,i,{delay:1e3})),It(n,"click",r[10]),rn(r[7].call(null,f,{delay:1e3})),It(f,"click",r[14])],v=!0)},p(m,b){b&1&&Hn(u,u=m[0])?(ua(),Jt(p,1,1,K),ha(),p=hu(m),p.c(),St(p,1),p.m(c,null)):p.p(m,b),b&1&&ot(l,"mobileMenuActive",m[0]),b&1&&ot(f,"mobileMenuActive",m[0])},d(m){m&&V(e),p.d(m),v=!1,ts(x)}}}function hu(r){let e,t,n="Home",i,s,a,o,l='<p class="svelte-11y6gr6">Work</p>',c,u,h,d,f="About",g,v,x,p,m="Email",b,y,_,E,C="Github",I,Z,O;return{c(){e=X("li"),t=X("button"),t.textContent=n,s=Re(),a=X("li"),o=X("button"),o.innerHTML=l,u=Re(),h=X("li"),d=X("button"),d.textContent=f,v=Re(),x=X("li"),p=X("a"),p.textContent=m,y=Re(),_=X("li"),E=X("a"),E.textContent=C,this.h()},l(R){e=j(R,"LI",{class:!0});var M=ue(e);t=j(M,"BUTTON",{class:!0,"data-svelte-h":!0}),Qe(t)!=="svelte-1unzo50"&&(t.textContent=n),M.forEach(V),s=Pe(R),a=j(R,"LI",{class:!0});var w=ue(a);o=j(w,"BUTTON",{class:!0,"data-svelte-h":!0}),Qe(o)!=="svelte-1y15d6s"&&(o.innerHTML=l),w.forEach(V),u=Pe(R),h=j(R,"LI",{class:!0});var z=ue(h);d=j(z,"BUTTON",{class:!0,"data-svelte-h":!0}),Qe(d)!=="svelte-1e2bqcf"&&(d.textContent=f),z.forEach(V),v=Pe(R),x=j(R,"LI",{class:!0});var F=ue(x);p=j(F,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Qe(p)!=="svelte-3d0c5"&&(p.textContent=m),F.forEach(V),y=Pe(R),_=j(R,"LI",{class:!0});var D=ue(_);E=j(D,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Qe(E)!=="svelte-ojfe4g"&&(E.textContent=C),D.forEach(V),this.h()},h(){N(t,"class","interactive clickable svelte-11y6gr6"),N(e,"class","svelte-11y6gr6"),N(o,"class","interactive clickable svelte-11y6gr6"),N(a,"class","svelte-11y6gr6"),N(d,"class","interactive clickable svelte-11y6gr6"),N(h,"class","svelte-11y6gr6"),N(p,"href","mailto:ghanusnair@gmail.com"),N(p,"target","_blank"),N(p,"class","svelte-11y6gr6"),N(x,"class","mobile svelte-11y6gr6"),N(E,"href","https://github.com/ghanshyam-nair-emi"),N(E,"target","_blank"),N(E,"class","svelte-11y6gr6"),N(_,"class","svelte-11y6gr6")},m(R,M){Be(R,e,M),B(e,t),Be(R,s,M),Be(R,a,M),B(a,o),Be(R,u,M),Be(R,h,M),B(h,d),Be(R,v,M),Be(R,x,M),B(x,p),Be(R,y,M),Be(R,_,M),B(_,E),Z||(O=[It(t,"click",r[11]),rn(r[7].call(null,e,{delay:1e3})),It(o,"click",r[12]),rn(r[7].call(null,a,{delay:1100})),It(d,"click",r[13]),rn(r[7].call(null,h,{delay:1200})),rn(r[7].call(null,_,{delay:1300}))],Z=!0)},p:K,i(R){R&&(i||tt(()=>{i=nt(t,r[2],{delay:200}),i.start()})),R&&(c||tt(()=>{c=nt(o,r[2],{delay:250}),c.start()})),R&&(g||tt(()=>{g=nt(d,r[2],{delay:300}),g.start()})),R&&(b||tt(()=>{b=nt(p,r[2],{delay:350}),b.start()})),R&&(I||tt(()=>{I=nt(E,r[2],{delay:400}),I.start()}))},o:K,d(R){R&&(V(e),V(s),V(a),V(u),V(h),V(v),V(x),V(y),V(_)),Z=!1,ts(O)}}}function Ly(r){return{c:K,l:K,m:K,p:K,d:K}}function Ry(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:Ly,then:Cy,catch:Ay,value:15};return Mn(cr,i),{c(){e=Js(),i.block.c()},l(s){e=Js(),i.block.l(s)},m(s,a){Be(s,e,a),i.block.m(s,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e,t||(n=It(Ey,"resize",r[9]),t=!0)},p(s,[a]){r=s,Xr(i,r,a)},i:K,o:K,d(s){s&&V(e),i.block.d(s),i.token=null,i=null,t=!1,n()}}}function Py(r,e,t){let n,i,s,a;Kt(r,yo,m=>t(3,i=m)),Kt(r,bo,m=>t(4,s=m)),Kt(r,Mo,m=>t(5,a=m));let{scrollContainer:o}=e,l=!1,c=window.innerWidth<=950;function u(m){o.scrollTo({top:m.offsetTop-window.innerHeight/5,behavior:"smooth"}),t(0,l=!1)}function h(m,b){c||(m.style.transform="translateY(130%) rotate(7deg)",Ke({targets:m,rotate:0,translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1e3,delay:b.delay}))}const d=()=>t(1,c=window.innerWidth<=950),f=()=>u(i),g=()=>u(i),v=()=>u(s),x=()=>u(a),p=()=>t(0,l=!l);return r.$$set=m=>{"scrollContainer"in m&&t(8,o=m.scrollContainer)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=l?mt:(m,b)=>{let y=mt(m,{reverse:!0,duration:3e3});return{tick:_=>{let E=1-_;y.tick(E),_==1&&setTimeout(()=>y.tick(1),500)}}})},[l,c,n,i,s,a,u,h,o,d,f,g,v,x,p]}class Iy extends ui{constructor(e){super(),hi(this,e,Py,Ry,Hn,{scrollContainer:8})}}function Dy(r){let e,t,n,i,s=r[7].availablity_date+"",a,o;return{c(){e=X("p"),t=Gt("i am available for freelance work after "),n=X("br"),i=Re(),a=Gt(s),o=Gt("."),this.h()},l(l){e=j(l,"P",{class:!0});var c=ue(e);t=Wt(c,"i am available for freelance work after "),n=j(c,"BR",{class:!0}),i=Pe(c),a=Wt(c,s),o=Wt(c,"."),c.forEach(V),this.h()},h(){N(n,"class","svelte-44z722"),N(e,"class","large-text svelte-44z722")},m(l,c){Be(l,e,c),B(e,t),B(e,n),B(e,i),B(e,a),B(e,o),r[11](e)},p(l,c){c&128&&s!==(s=l[7].availablity_date+"")&&Bn(a,s)},d(l){l&&V(e),r[11](null)}}}function Fy(r){let e,t='i am currently accepting freelance work, <br class="svelte-44z722"/>you may reach me on my email.';return{c(){e=X("p"),e.innerHTML=t,this.h()},l(n){e=j(n,"P",{class:!0,"data-svelte-h":!0}),Qe(e)!=="svelte-18ln10j"&&(e.innerHTML=t),this.h()},h(){N(e,"class","large-text svelte-44z722")},m(n,i){Be(n,e,i),r[10](e)},p:K,d(n){n&&V(e),r[10](null)}}}function zy(r){let e,t,n,i,s='<img src="assets/imgs/logo.svg" alt="mh logo" class="logo svelte-44z722"/>',a,o,l,c,u="ghanusnair@gmail.com",h,d,f,g,v,x,p,m='designed and developed by Ghanshyam S Nair with Reference to a template from awwwards.com<br class="svelte-44z722"/> <a class="clickable button no-decor svelte-44z722" href="https://github.com/ghanshyam-nair-emi/Portfolio-Ghanshyam-svelte" target="_blank">this website is open source on github</a>',b,y,_,E,C,I;function Z(M,w){return M[7].availablity_date===""?Fy:Dy}let O=Z(r),R=O(r);return{c(){e=X("div"),t=X("div"),n=X("div"),i=X("div"),i.innerHTML=s,a=Re(),o=X("div"),R.c(),l=Re(),c=X("a"),c.textContent=u,h=Re(),d=X("div"),f=X("p"),g=Gt("© "),v=Gt(r[8]),x=Re(),p=X("p"),p.innerHTML=m,b=Re(),y=X("div"),_=ti("svg"),E=ti("g"),C=ti("path"),I=ti("path"),this.h()},l(M){e=j(M,"DIV",{class:!0});var w=ue(e);t=j(w,"DIV",{class:!0});var z=ue(t);n=j(z,"DIV",{class:!0});var F=ue(n);i=j(F,"DIV",{class:!0,"data-svelte-h":!0}),Qe(i)!=="svelte-22qnc3"&&(i.innerHTML=s),F.forEach(V),a=Pe(z),o=j(z,"DIV",{class:!0});var D=ue(o);R.l(D),l=Pe(D),c=j(D,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),Qe(c)!=="svelte-1p0759y"&&(c.textContent=u),D.forEach(V),h=Pe(z),d=j(z,"DIV",{class:!0});var k=ue(d);f=j(k,"P",{class:!0});var $=ue(f);g=Wt($,"© "),v=Wt($,r[8]),$.forEach(V),x=Pe(k),p=j(k,"P",{class:!0,"data-svelte-h":!0}),Qe(p)!=="svelte-1in9qex"&&(p.innerHTML=m),k.forEach(V),z.forEach(V),b=Pe(w),y=j(w,"DIV",{class:!0});var ie=ue(y);_=ni(ie,"svg",{id:!0,class:!0,x:!0,y:!0,viewBox:!0,style:!0});var H=ue(_);E=ni(H,"g",{});var W=ue(E);C=ni(W,"path",{class:!0,transform:!0,style:!0,d:!0}),ue(C).forEach(V),I=ni(W,"path",{class:!0,transform:!0,style:!0,d:!0}),ue(I).forEach(V),W.forEach(V),H.forEach(V),ie.forEach(V),w.forEach(V),this.h()},h(){N(i,"class","inline-flex svelte-44z722"),N(n,"class","logo-wrapper svelte-44z722"),N(c,"class","button large-text svelte-44z722"),N(c,"href","mailto:ghanusnair@gmail.com"),N(c,"target","_blank"),N(o,"class","status-wrapper"),N(f,"class","year svelte-44z722"),N(p,"class","credits svelte-44z722"),N(d,"class","credits-wrapper svelte-44z722"),N(t,"class","flex-wrapper svelte-44z722"),N(C,"class","path-1 svelte-44z722"),N(C,"transform","translate(0, 20)"),Ye(C,"fill","none"),Ye(C,"stroke-width","2.5"),Ye(C,"stroke-linecap","round"),Ye(C,"stroke-linejoin","miter"),Ye(C,"stroke-opacity","1"),Ye(C,"stroke-miterlimit","4"),N(C,"d","M41.781 3.08602C43.6916 3.08602 38.0052 3.72698 36.1719 4.265C28.1917 6.60704 19.8682 9.87472 13.3427 15.1616C2.8357 23.6742 -0.591488 40.5423 5.41141 52.6744C9.29507 60.5235 18.2162 62.7335 26.3114 63.1066C33.9855 63.4602 39.5675 62.738 47.3901 61.4632C69.5646 57.8495 91.3419 51.7992 113.02 46.0293C155.421 34.7437 198.28 24.6196 240.42 12.4106C251.286 9.26261 261.963 5.49772 272.646 1.79987"),N(I,"class","path-2 svelte-44z722"),N(I,"transform","translate(60, -9)"),Ye(I,"fill","none"),Ye(I,"stroke-width","2.5"),Ye(I,"stroke-linecap","round"),Ye(I,"stroke-linejoin","miter"),Ye(I,"stroke-opacity","1"),Ye(I,"stroke-miterlimit","4"),N(I,"d","M2.23029 106.963C2.23029 111.718 3.86929 97.59 4.9455 92.9582C9.7298 72.3675 14.1793 51.6685 16.6638 30.6511C17.5641 23.035 20.2748 7.83064 11.5192 2.85589C7.11408 0.35299 5.17386 7.15812 4.58824 10.0726C2.11129 22.3998 3.85593 36.4234 9.44704 47.6569C18.7374 66.3228 36.4604 78.7757 49.032 94.9589C53.1837 100.303 58.4543 108.55 54.1767 115.394C50.3906 121.452 36.5392 118.449 31.133 117.109C24.5038 115.467 19.3347 112.396 13.8771 108.606C9.25862 105.399 15.5142 103.944 18.593 101.926C33.468 92.1756 47.8984 79.4936 58.3924 65.0915C65.8918 54.7991 69.9676 42.7552 67.7885 30.0438C67.5524 28.6667 67.3405 22.2718 64.8589 25.185C61.1838 29.4992 59.8262 35.885 59.2855 41.3334C58.7794 46.4335 58.804 51.6199 59.1069 56.7315C59.2615 59.3406 58.9139 66.7018 61.0361 68.8785C62.071 69.9399 67.1276 63.86 68.0385 63.1623C69.6482 61.9293 70.89 64.0751 71.8256 65.1629C74.1895 67.9117 74.7793 66.8972 77.6133 67.8782C78.2582 68.1014 79.3172 69.2123 80.0427 69.0214C81.7714 68.5665 82.2547 63.6163 82.4721 62.2334C82.9452 59.2225 83.45 60.5915 84.044 62.9479C86.7921 73.8485 91.5395 84.0697 94.2618 94.9589C94.562 96.1597 94.9458 102.059 95.9767 103.319C96.1654 103.549 96.0236 102.723 96.0124 102.426C95.9568 100.952 95.5208 95.2701 95.4765 94.6016C94.8565 85.2397 94.1429 75.5343 95.4765 66.199C96.325 60.2598 95.8827 63.8768 98.9777 63.8768C100.089 63.8768 100.986 64.5199 102.3 64.5199C108.449 64.5199 115.552 60.2614 121.2 58.0891"),N(_,"id","signature"),N(_,"class","name-signature svelte-44z722"),N(_,"x","0px"),N(_,"y","0px"),N(_,"viewBox","-20 -20 190 150"),Ye(_,"stroke","rgb(79, 78, 85)"),N(y,"class","flex-wrapper decor svelte-44z722"),N(e,"class","footer-wrapper svelte-44z722")},m(M,w){Be(M,e,w),B(e,t),B(t,n),B(n,i),r[9](i),B(t,a),B(t,o),R.m(o,null),B(o,l),B(o,c),r[12](c),B(t,h),B(t,d),B(d,f),B(f,g),B(f,v),B(d,x),B(d,p),r[13](d),B(e,b),B(e,y),B(y,_),B(_,E),B(E,C),r[14](C),B(E,I),r[15](I),r[16](e)},p(M,[w]){O===(O=Z(M))&&R?R.p(M,w):(R.d(1),R=O(M),R&&(R.c(),R.m(o,l)))},i:K,o:K,d(M){M&&V(e),r[9](null),R.d(),r[12](null),r[13](null),r[14](null),r[15](null),r[16](null)}}}function ky(r,e,t){let n,i,s,a,o,l,c,u={availablity_date:""};bu.subscribe(_=>{_!==void 0&&t(7,u=_)});const h=new Date().getFullYear();function d(){const _=mt(i,{}),E=hn(o,{delay:6,initDelay:150}),C=mt(s,{delay:150}),I=hn(a,{delay:6,initDelay:100});ea(n,()=>{_.anime(),C.anime(),E.anime(),I.anime();let Z=[{strokeDashoffset:"0"}];l.animate(Z,{duration:1e3,delay:0,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),c.animate(Z,{duration:1200,delay:1e3,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"})})}lr(async()=>{await cr,d()});function f(_){lt[_?"unshift":"push"](()=>{i=_,t(1,i)})}function g(_){lt[_?"unshift":"push"](()=>{a=_,t(3,a)})}function v(_){lt[_?"unshift":"push"](()=>{a=_,t(3,a)})}function x(_){lt[_?"unshift":"push"](()=>{o=_,t(4,o)})}function p(_){lt[_?"unshift":"push"](()=>{s=_,t(2,s)})}function m(_){lt[_?"unshift":"push"](()=>{l=_,t(5,l)})}function b(_){lt[_?"unshift":"push"](()=>{c=_,t(6,c)})}function y(_){lt[_?"unshift":"push"](()=>{n=_,t(0,n)})}return[n,i,s,a,o,l,c,u,h,f,g,v,x,p,m,b,y]}class Ny extends ui{constructor(e){super(),hi(this,e,ky,zy,Hn,{})}}const{document:By}=mu;function Oy(r){return{c:K,l:K,m:K,p:K,d:K}}function Uy(r){let e,t='<div class="dot svelte-1l3lcu7"></div>',n,i;return{c(){e=X("div"),e.innerHTML=t,this.h()},l(s){e=j(s,"DIV",{class:!0,"data-svelte-h":!0}),Qe(e)!=="svelte-1kqyv5l"&&(e.innerHTML=t),this.h()},h(){N(e,"class","dot-container active svelte-1l3lcu7"),ot(e,"hover",r[0]),ot(e,"disabled",r[2]||r[1])},m(s,a){Be(s,e,a),n||(i=rn(r[4].call(null,e)),n=!0)},p(s,a){a&1&&ot(e,"hover",s[0]),a&6&&ot(e,"disabled",s[2]||s[1])},d(s){s&&V(e),n=!1,i()}}}function Vy(r){return{c:K,l:K,m:K,p:K,d:K}}function Hy(r){let e,t,n,i,s={ctx:r,current:null,token:null,hasCatch:!1,pending:Vy,then:Uy,catch:Oy,value:9};return Mn(cr,s),{c(){e=Re(),t=Js(),s.block.c()},l(a){e=Pe(a),t=Js(),s.block.l(a)},m(a,o){Be(a,e,o),Be(a,t,o),s.block.m(a,s.anchor=o),s.mount=()=>t.parentNode,s.anchor=t,n||(i=It(By.body,"mousemove",r[5]),n=!0)},p(a,[o]){r=a,Xr(s,r,o)},i:K,o:K,d(a){a&&(V(e),V(t)),s.block.d(a),s.token=null,s=null,n=!1,i()}}}function du(r){return r<.5?2*r*r:-1+(4-2*r)*r}function Gy(r,e,t){let n;Kt(r,_o,d=>t(8,n=d));let i=!1,s=!1,a=!0;Ys.subscribe(d=>t(1,s=d));let o={x:0,y:0},l={x:0,y:0};function c(d){if(n)return;a&&setTimeout(()=>t(2,a=!1),200);let f=window.getComputedStyle(d.target).cursor;if(t(0,i=f==="pointer"),f==="pointer"){let g=document.elementFromPoint(d.clientX,d.clientY),v=g.clientWidth,x=g.clientHeight,p={x:g.getBoundingClientRect().left+v/2,y:g.getBoundingClientRect().top+x/2};l={x:p.x+(p.x-d.clientX)*.15,y:p.y+(p.y-d.clientY)*.15}}else l={x:d.clientX,y:d.clientY}}function u(d){let f=.4;o.x+=du(f)*(l.x-o.x),o.y+=du(f)*(l.y-o.y),o.x=Math.ceil(o.x*100)/100,o.y=Math.ceil(o.y*100)/100,d.style.transform=`translate3d(${o.x}px, ${o.y}px, 0px)`,requestAnimationFrame(()=>u(d))}return[i,s,a,c,u,d=>c(d)]}class Wy extends ui{constructor(e){super(),hi(this,e,Gy,Hy,Hn,{})}}const Vh=r=>{r=r.trim();const e=r.match("[0-9.]+");let t="ms",n;const i=e?e[0]:"";return i&&(t=r.split(i)[1],n=Number(i)),{num:n,unit:t}},qy=r=>{const e=Vh(r),t=e?e.num:void 0;if(!t)return"";const n=r.replace(t+"","");let i=t;return n==="s"&&(i=t*1e3),i+"ms"};function Xy(r){const e=c=>c.replace(/-([a-z])/g,u=>u[1].toUpperCase()),t=c=>window.getComputedStyle(r).getPropertyValue(c)||r.style[e(c)],n=t("transition-delay")||"0ms",i=t("transition-duration")||"0ms",s=Array.isArray(i)?i:[i],a=Array.isArray(n)?n:[n];let o=0,l;return s.push.apply(s,a),s.forEach(c=>{c.split(",").forEach(u=>{u=qy(u),l=Vh(u),l.num&&l.num>o&&(o=l.num)})}),o}function fu(r){const e=Xy(r);return new Promise(t=>{e>0?setTimeout(()=>{t(r)},e):t(r)})}function jy(r){let e,t,n,i,s;return{c(){e=X("div"),t=X("div"),n=X("div"),i=Re(),s=X("div"),this.h()},l(a){e=j(a,"DIV",{class:!0});var o=ue(e);t=j(o,"DIV",{class:!0});var l=ue(t);n=j(l,"DIV",{class:!0}),ue(n).forEach(V),i=Pe(l),s=j(l,"DIV",{class:!0,style:!0}),ue(s).forEach(V),l.forEach(V),o.forEach(V),this.h()},h(){N(n,"class","loader-background svelte-1995pyy"),ot(n,"outro",r[1]),N(s,"class","loader svelte-1995pyy"),Ye(s,"width",r[2]+"%"),ot(s,"outro",r[1]),N(t,"class","loader-wrapper svelte-1995pyy"),N(e,"class","page-cover svelte-1995pyy")},m(a,o){Be(a,e,o),B(e,t),B(t,n),B(t,i),B(t,s),r[3](s)},p(a,[o]){o&2&&ot(n,"outro",a[1]),o&4&&Ye(s,"width",a[2]+"%"),o&2&&ot(s,"outro",a[1])},i:K,o:K,d(a){a&&V(e),r[3](null)}}}function Yy(r,e,t){let n;Kt(r,Oo,l=>t(4,n=l));let i,s=!1,a=0;lr(async()=>{let l=0,c=n.length;await Uo,n.forEach(async u=>{await u,l++,t(2,a=Math.round(l/c*100)),a>99&&fu(i).then(()=>{t(1,s=!0),t(2,a=0),fu(i).then(()=>{yu()})})})});function o(l){lt[l?"unshift":"push"](()=>{i=l,t(0,i)})}return[i,s,a,o]}class Zy extends ui{constructor(e){super(),hi(this,e,Yy,jy,Hn,{})}}function pu(r){let e,t;return e=new Zy({}),{c(){_i(e.$$.fragment)},l(n){yi(e.$$.fragment,n)},m(n,i){bi(e,n,i),t=!0},i(n){t||(St(e.$$.fragment,n),t=!0)},o(n){Jt(e.$$.fragment,n),t=!1},d(n){Mi(e,n)}}}function Jy(r){let e,t,n,i,s,a,o,l,c,u,h,d,f,g,v;e=new Wy({});let x=r[2]&&pu();return a=new Iy({props:{scrollContainer:r[0]}}),l=new Nd({}),u=new fy({}),d=new Ty({}),g=new Ny({}),{c(){_i(e.$$.fragment),t=Re(),x&&x.c(),n=Re(),i=X("div"),s=X("div"),_i(a.$$.fragment),o=Re(),_i(l.$$.fragment),c=Re(),_i(u.$$.fragment),h=Re(),_i(d.$$.fragment),f=Re(),_i(g.$$.fragment),this.h()},l(p){yi(e.$$.fragment,p),t=Pe(p),x&&x.l(p),n=Pe(p),i=j(p,"DIV",{id:!0,class:!0});var m=ue(i);s=j(m,"DIV",{id:!0,class:!0});var b=ue(s);yi(a.$$.fragment,b),b.forEach(V),o=Pe(m),yi(l.$$.fragment,m),c=Pe(m),yi(u.$$.fragment,m),h=Pe(m),yi(d.$$.fragment,m),f=Pe(m),yi(g.$$.fragment,m),m.forEach(V),this.h()},h(){N(s,"id","nav-bar"),N(s,"class","svelte-9qeui2"),N(i,"id","scroll-frame"),N(i,"class","svelte-9qeui2")},m(p,m){bi(e,p,m),Be(p,t,m),x&&x.m(p,m),Be(p,n,m),Be(p,i,m),B(i,s),bi(a,s,null),r[3](s),B(i,o),bi(l,i,null),B(i,c),bi(u,i,null),B(i,h),bi(d,i,null),B(i,f),bi(g,i,null),r[4](i),v=!0},p(p,[m]){p[2]?x?m&4&&St(x,1):(x=pu(),x.c(),St(x,1),x.m(n.parentNode,n)):x&&(ua(),Jt(x,1,1,()=>{x=null}),ha());const b={};m&1&&(b.scrollContainer=p[0]),a.$set(b)},i(p){v||(St(e.$$.fragment,p),St(x),St(a.$$.fragment,p),St(l.$$.fragment,p),St(u.$$.fragment,p),St(d.$$.fragment,p),St(g.$$.fragment,p),v=!0)},o(p){Jt(e.$$.fragment,p),Jt(x),Jt(a.$$.fragment,p),Jt(l.$$.fragment,p),Jt(u.$$.fragment,p),Jt(d.$$.fragment,p),Jt(g.$$.fragment,p),v=!1},d(p){p&&(V(t),V(n),V(i)),Mi(e,p),x&&x.d(p),Mi(a),r[3](null),Mi(l),Mi(u),Mi(d),Mi(g),r[4](null)}}}function $y(r,e,t){let n,i;Kt(r,Ks,u=>t(5,n=u)),Kt(r,Oo,u=>t(6,i=u));let s,a,o=!0;lr(async()=>{t(0,s.style.overflowY="hidden",s),s.scrollTo(0,0),Uo.set(await Ml("/data/work-data.json")),bu.set(await Ml("/data/data.json")),await Promise.allSettled(i),await Kh,t(2,o=!1),_u(),ed(),qr(Ks,n=new Qh({root:s,easing:"easeOutCirc",duration:1500,fixedOffsets:[a]}),n),t(0,s.style.overflowX="hidden",s),t(0,s.style.overflowY="auto",s)});function l(u){lt[u?"unshift":"push"](()=>{a=u,t(1,a)})}function c(u){lt[u?"unshift":"push"](()=>{s=u,t(0,s)})}return[s,a,o,l,c]}class ib extends ui{constructor(e){super(),hi(this,e,$y,Jy,Hn,{})}}export{ib as component,tb as universal};
