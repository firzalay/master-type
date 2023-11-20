import{s as U,r as z,n as F}from"../chunks/scheduler.3139b196.js";import{S as J,i as G,g as d,s as w,r as K,h as m,j as b,A as $,c as C,u as Q,f as g,k as r,a as V,x as l,v as W,B as I,C as E,F as X,d as Y,t as Z,w as ee,m as te,n as se,o as ae}from"../chunks/index.e28029e5.js";import{S as ne}from"../chunks/SvelteTypedJs.e34ba699.js";import{g as le}from"../chunks/navigation.6ee81ba0.js";function re(c){let t,s='Become The Best <span class="typing"></span> 👑';return{c(){t=d("p"),t.innerHTML=s,this.h()},l(e){t=m(e,"P",{class:!0,"data-svelte-h":!0}),$(t)!=="svelte-1qh7i78"&&(t.innerHTML=s),this.h()},h(){r(t,"class","typing-animation svelte-cduexf")},m(e,a){V(e,t,a)},p:F,d(e){e&&g(t)}}}function A(c){let t,s,e;return{c(){t=d("div"),s=d("p"),e=te(c[2]),this.h()},l(a){t=m(a,"DIV",{class:!0});var i=b(t);s=m(i,"P",{class:!0});var _=b(s);e=se(_,c[2]),_.forEach(g),i.forEach(g),this.h()},h(){r(s,"class","error svelte-cduexf"),r(t,"class","error svelte-cduexf")},m(a,i){V(a,t,i),l(t,s),l(s,e)},p(a,i){i&4&&ae(e,a[2])},d(a){a&&g(t)}}}function oe(c){let t,s,e,a,i="Register Page",_,h,P,v,k,p,M,S,y,B="Register",L,T,O='<p class="svelte-cduexf">Already have an account? <a href="/login" class="svelte-cduexf">Login Now!</a></p>',j,x,R='<video playsinline="" autoplay="" muted="" loop="" class="svelte-cduexf"><source src="logos.mp4" type="video/mp4"/></video>',H,D,q;h=new ne({props:{strings:["Type Master"],typeSpeed:"10",backSpeed:"10",loop:"true",$$slots:{default:[re]},$$scope:{ctx:c}}});let o=c[2]&&A(c);return{c(){t=d("div"),s=d("div"),e=d("form"),a=d("h1"),a.textContent=i,_=w(),K(h.$$.fragment),P=w(),v=d("input"),k=w(),p=d("input"),M=w(),o&&o.c(),S=w(),y=d("button"),y.textContent=B,L=w(),T=d("div"),T.innerHTML=O,j=w(),x=d("div"),x.innerHTML=R,this.h()},l(n){t=m(n,"DIV",{class:!0,id:!0});var f=b(t);s=m(f,"DIV",{class:!0});var N=b(s);e=m(N,"FORM",{class:!0});var u=b(e);a=m(u,"H1",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-1j1gwcy"&&(a.textContent=i),_=C(u),Q(h.$$.fragment,u),P=C(u),v=m(u,"INPUT",{type:!0,placeholder:!0,class:!0}),k=C(u),p=m(u,"INPUT",{type:!0,placeholder:!0,class:!0}),M=C(u),o&&o.l(u),S=C(u),y=m(u,"BUTTON",{class:!0,"data-svelte-h":!0}),$(y)!=="svelte-9oco1z"&&(y.textContent=B),L=C(u),T=m(u,"DIV",{class:!0,"data-svelte-h":!0}),$(T)!=="svelte-1t5vwq4"&&(T.innerHTML=O),u.forEach(g),N.forEach(g),j=C(f),x=m(f,"DIV",{class:!0,"data-svelte-h":!0}),$(x)!=="svelte-vz7cl6"&&(x.innerHTML=R),f.forEach(g),this.h()},h(){r(a,"class","svelte-cduexf"),r(v,"type","name"),r(v,"placeholder","Name"),r(v,"class","svelte-cduexf"),r(p,"type","password"),r(p,"placeholder","Password"),r(p,"class","svelte-cduexf"),r(y,"class","svelte-cduexf"),r(T,"class","register-p svelte-cduexf"),r(e,"class","svelte-cduexf"),r(s,"class","form-container sign-in svelte-cduexf"),r(x,"class","toggle-container svelte-cduexf"),r(t,"class","container svelte-cduexf"),r(t,"id","container")},m(n,f){V(n,t,f),l(t,s),l(s,e),l(e,a),l(e,_),W(h,e,null),l(e,P),l(e,v),I(v,c[0]),l(e,k),l(e,p),I(p,c[1]),l(e,M),o&&o.m(e,null),l(e,S),l(e,y),l(e,L),l(e,T),l(t,j),l(t,x),H=!0,D||(q=[E(v,"input",c[4]),E(p,"input",c[5]),E(e,"submit",X(c[3]))],D=!0)},p(n,[f]){const N={};f&128&&(N.$$scope={dirty:f,ctx:n}),h.$set(N),f&1&&I(v,n[0]),f&2&&p.value!==n[1]&&I(p,n[1]),n[2]?o?o.p(n,f):(o=A(n),o.c(),o.m(e,S)):o&&(o.d(1),o=null)},i(n){H||(Y(h.$$.fragment,n),H=!0)},o(n){Z(h.$$.fragment,n),H=!1},d(n){n&&g(t),ee(h),o&&o.d(),D=!1,z(q)}}}function ie(c,t,s){let e="",a="",i="";const _=async()=>{if(!e||!a){s(2,i="Please fill in all fields!");return}if(s(2,i=""),await h(e)){s(2,i="Name is already taken. Please choose another name.");return}(await fetch("https://typemaster.online/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,password:a})})).ok?await le("/login"):s(2,i="Registration failed. Please try again.")},h=async k=>(await(await fetch(`https://typemaster.online/api/check-name?name=${k}`)).json()).nameTaken;function P(){e=this.value,s(0,e)}function v(){a=this.value,s(1,a)}return[e,a,i,_,P,v]}class de extends J{constructor(t){super(),G(this,t,ie,oe,U,{})}}export{de as component};