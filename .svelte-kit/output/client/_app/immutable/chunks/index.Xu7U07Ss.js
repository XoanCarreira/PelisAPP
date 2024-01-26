import{n as x,r as v,i as j,f as E,h as z,j as O,k as Q,l as X,m as Y,p as Z,q,v as tt,w as et,x as nt}from"./scheduler.clUROcG5.js";const L=typeof window<"u";let M=L?()=>window.performance.now():()=>Date.now(),D=L?t=>requestAnimationFrame(t):x;const g=new Set;function T(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&D(T)}function F(t){let e;return g.size===0&&D(T),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let P=!1;function it(){P=!0}function rt(){P=!1}function st(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,u=(r>0&&e[n[r]].claim_order<=l?r+1:st(1,r,_=>e[n[_]].claim_order,l))-1;i[a]=n[u]+1;const c=u+1;n[c]=a,r=Math.max(c,r)}const o=[],s=[];let f=e.length-1;for(let a=n[r]+1;a!=0;a=i[a-1]){for(o.push(e[a-1]);f>=a;f--)s.push(e[f]);f--}for(;f>=0;f--)s.push(e[f]);o.reverse(),s.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<s.length;a++){for(;l<o.length&&s[a].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;t.insertBefore(s[a],u)}}function lt(t,e){t.appendChild(e)}function H(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ot(t){const e=V("style");return e.textContent="/* empty */",ft(H(t),e),e.sheet}function ft(t,e){return lt(t.head||t,e),e.sheet}function ct(t,e){if(P){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){P&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function At(){return R(" ")}function Ct(){return R("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Pt(t){return function(e){e.target===this&&t.call(this,e)}}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bt(t){return t.dataset.svelteH}function ut(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,r=!1){_t(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const f=t[s];if(e(f)){const a=n(f);return a===void 0?t.splice(s,1):t[s]=a,r||(t.claim_info.last_index=s),f}}for(let s=t.claim_info.last_index-1;s>=0;s--){const f=t[s];if(e(f)){const a=n(f);return a===void 0?t.splice(s,1):t[s]=a,r?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,f}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function dt(t,e,n,i){return W(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const f=r.attributes[s];n[f.name]||o.push(f.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Dt(t,e,n){return dt(t,e,n,V)}function mt(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Rt(t){return mt(t," ")}function It(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function zt(t,e){return new t(e)}const A=new Map;let C=0;function pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function $t(t,e){const n={stylesheet:ot(e),rules:{}};return A.set(t,n),n}function G(t,e,n,i,r,o,s,f=0){const a=16.666/i;let l=`{
`;for(let $=0;$<=1;$+=a){const p=e+(n-e)*o($);l+=$*100+`%{${s(p,1-p)}}
`}const u=l+`100% {${s(n,1-n)}}
}`,c=`__svelte_${pt(u)}_${f}`,_=H(t),{stylesheet:d,rules:m}=A.get(_)||$t(_,t);m[c]||(m[c]=!0,d.insertRule(`@keyframes ${c} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${c} ${i}ms linear ${r}ms 1 both`,C+=1,c}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),C-=r,C||yt())}function yt(){D(()=>{C||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&U(e)}),A.clear())})}let w;function J(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function S(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const N=new Set;let y;function Lt(){y={r:0,c:[],p:y}}function Mt(){y.r||v(y.c),y=y.p}function gt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),y.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const K={duration:0};function Ft(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,f,a=0;function l(){s&&B(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=z,tick:h=x,css:$}=r||K;$&&(s=G(t,0,1,d,_,m,$,a++)),h(0,1);const p=M()+_,b=p+d;f&&f.abort(),o=!0,E(()=>S(t,!0,"start")),f=F(k=>{if(o){if(k>=b)return h(1,0),S(t,!0,"end"),l(),o=!1;if(k>=p){const I=m((k-p)/d);h(I,1-I)}}return o})}let c=!1;return{start(){c||(c=!0,B(t),j(r)?(r=r(i),J().then(u)):u())},invalidate(){c=!1},end(){o&&(l(),o=!1)}}}function Ht(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,s;const f=y;f.r+=1;let a;function l(){const{delay:u=0,duration:c=300,easing:_=z,tick:d=x,css:m}=r||K;m&&(s=G(t,1,0,c,u,_,m));const h=M()+u,$=h+c;E(()=>S(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),F(p=>{if(o){if(p>=$)return d(0,1),S(t,!1,"end"),--f.r||v(f.c),!1;if(p>=h){const b=_((p-h)/c);d(1-b,b)}}return o})}return j(r)?J().then(()=>{r=r(i),l()}):l(),{end(u){u&&"inert"in t&&(t.inert=a),u&&r.tick&&r.tick(1,0),o&&(s&&B(t,s),o=!1)}}}function Ut(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Vt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function xt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),E(()=>{const o=t.$$.on_mount.map(tt).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),r.forEach(E)}function wt(t,e){const n=t.$$;n.fragment!==null&&(Y(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(et.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gt(t,e,n,i,r,o,s=null,f=[-1]){const a=Z;q(t);const l=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:O(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(c,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&r(l.ctx[c],l.ctx[c]=m)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](m),u&&vt(t,c)),_}):[],l.update(),u=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){it();const c=ut(e.target);l.fragment&&l.fragment.l(c),c.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&gt(t.$$.fragment),xt(t,e.target,e.anchor),rt(),Q()}q(a)}class Jt{$$=void 0;$$set=void 0;$destroy(){wt(this,1),this.$destroy=x}$on(e,n){if(!j(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bt);export{jt as A,Pt as B,Ut as C,Ot as D,Ft as E,Ht as F,Jt as S,ut as a,mt as b,Dt as c,U as d,V as e,Rt as f,Et as g,ct as h,Gt as i,It as j,Ct as k,Tt as l,Mt as m,gt as n,kt as o,qt as p,Lt as q,zt as r,At as s,R as t,Vt as u,Wt as v,xt as w,wt as x,Bt as y,St as z};
