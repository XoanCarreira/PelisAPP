import{s as $,n as c,d as x,u as y,g as C,e as E}from"../chunks/scheduler.clUROcG5.js";import{S as d,i as h,e as H,c as M,y as T,o as b,g as f,d as u,u as g,s as v,v as q,f as k,w as L,n as p,l as _,x as w}from"../chunks/index.Xu7U07Ss.js";function z(r){let e,l='<img src="logoPelis.png" alt="Logo cinta película" class="svelte-1rfrq4q"/> <div class="encabezado svelte-1rfrq4q"><h1 class="svelte-1rfrq4q">Catálogo de películas</h1> <p class="svelte-1rfrq4q">Millóns de películas, series, documentais...</p></div> <img src="logoPelis.png" alt="Logo cinta película" class="svelte-1rfrq4q"/>';return{c(){e=H("header"),e.innerHTML=l,this.h()},l(s){e=M(s,"HEADER",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-14vz6m7"&&(e.innerHTML=l),this.h()},h(){b(e,"class","svelte-1rfrq4q")},m(s,n){f(s,e,n)},p:c,i:c,o:c,d(s){s&&u(e)}}}class D extends d{constructor(e){super(),h(this,e,null,z,$,{})}}function F(r){let e,l='<p class="svelte-hkpk2s">Información facilitada por <a target="_blank" href="https://www.themoviedb.org/" class="svelte-hkpk2s">TMBD</a></p>';return{c(){e=H("footer"),e.innerHTML=l,this.h()},l(s){e=M(s,"FOOTER",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-psmnbs"&&(e.innerHTML=l),this.h()},h(){b(e,"class","svelte-hkpk2s")},m(s,n){f(s,e,n)},p:c,i:c,o:c,d(s){s&&u(e)}}}class O extends d{constructor(e){super(),h(this,e,null,F,$,{})}}function P(r){let e,l,s,n,o;e=new D({}),s=new O({});const m=r[1].default,a=x(m,r,r[0],null);return{c(){g(e.$$.fragment),l=v(),g(s.$$.fragment),n=v(),a&&a.c()},l(t){q(e.$$.fragment,t),l=k(t),q(s.$$.fragment,t),n=k(t),a&&a.l(t)},m(t,i){L(e,t,i),f(t,l,i),L(s,t,i),f(t,n,i),a&&a.m(t,i),o=!0},p(t,[i]){a&&a.p&&(!o||i&1)&&y(a,m,t,t[0],o?E(m,t[0],i,null):C(t[0]),null)},i(t){o||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(a,t),o=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(a,t),o=!1},d(t){t&&(u(l),u(n)),w(e,t),w(s,t),a&&a.d(t)}}}function R(r,e,l){let{$$slots:s={},$$scope:n}=e;return r.$$set=o=>{"$$scope"in o&&l(0,n=o.$$scope)},[n,s]}class B extends d{constructor(e){super(),h(this,e,R,P,$,{})}}export{B as component};