(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,c){"use strict";c.r(e),c.d(e,"preload",(function(){return r}));var n=c(0);function l(t,e,c){const n=t.slice();return n[1]=e[c],n}function b(t){let e,c,l,b,s=t[1].title+"";return{c(){e=Object(n.q)("li"),c=Object(n.q)("a"),l=Object(n.M)(s),this.h()},l(t){e=Object(n.h)(t,"LI",{});var b=Object(n.f)(e);c=Object(n.h)(b,"A",{rel:!0,href:!0});var r=Object(n.f)(c);l=Object(n.j)(r,s),r.forEach(n.p),b.forEach(n.p),this.h()},h(){Object(n.d)(c,"rel","prefetch"),Object(n.d)(c,"href",b="blog/"+t[1].slug)},m(t,b){Object(n.A)(t,e,b),Object(n.b)(e,c),Object(n.b)(c,l)},p(t,e){1&e&&s!==(s=t[1].title+"")&&Object(n.K)(l,s),1&e&&b!==(b="blog/"+t[1].slug)&&Object(n.d)(c,"href",b)},d(t){t&&Object(n.p)(e)}}}function s(t){let e,c,s,r,j,o=t[0],O=[];for(let e=0;e<o.length;e+=1)O[e]=b(l(t,o,e));return{c(){e=Object(n.L)(),c=Object(n.q)("h1"),s=Object(n.M)("Recent posts"),r=Object(n.L)(),j=Object(n.q)("ul");for(let t=0;t<O.length;t+=1)O[t].c();this.h()},l(t){e=Object(n.i)(t),c=Object(n.h)(t,"H1",{});var l=Object(n.f)(c);s=Object(n.j)(l,"Recent posts"),l.forEach(n.p),r=Object(n.i)(t),j=Object(n.h)(t,"UL",{class:!0});var b=Object(n.f)(j);for(let t=0;t<O.length;t+=1)O[t].l(b);b.forEach(n.p),this.h()},h(){document.title="Blog",Object(n.d)(j,"class","svelte-1frg2tf")},m(t,l){Object(n.A)(t,e,l),Object(n.A)(t,c,l),Object(n.b)(c,s),Object(n.A)(t,r,l),Object(n.A)(t,j,l);for(let t=0;t<O.length;t+=1)O[t].m(j,null)},p(t,[e]){if(1&e){let c;for(o=t[0],c=0;c<o.length;c+=1){const n=l(t,o,c);O[c]?O[c].p(n,e):(O[c]=b(n),O[c].c(),O[c].m(j,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=o.length}},i:n.E,o:n.E,d(t){t&&Object(n.p)(e),t&&Object(n.p)(c),t&&Object(n.p)(r),t&&Object(n.p)(j),Object(n.o)(O,t)}}}function r({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function j(t,e,c){let{posts:n}=e;return t.$set=t=>{"posts"in t&&c(0,n=t.posts)},[n]}class o extends n.a{constructor(t){var e;super(),document.getElementById("svelte-1frg2tf-style")||((e=Object(n.q)("style")).id="svelte-1frg2tf-style",e.textContent="ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",Object(n.b)(document.head,e)),Object(n.z)(this,t,j,s,n.I,{posts:0})}}e.default=o}}]);