if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/404.html",revision:"e4ec1850bf291b7ac0c99065f0fd5e4b"},{url:"/assets/icons/apple-icon.png",revision:"9cea12408fb27e2e7e2cba5b1b751592"},{url:"/assets/icons/favicon.ico",revision:"f2c1abc6e181448f1b8a502a22f0af78"},{url:"/assets/icons/icon.ico",revision:"f2c1abc6e181448f1b8a502a22f0af78"},{url:"/assets/icons/icon.png",revision:"2a626d9a9d6898c3da1a112fc699724e"},{url:"/assets/icons/icon.svg",revision:"c00b0572f244387b03593da16cdd9f63"},{url:"/icon.ico",revision:"f2c1abc6e181448f1b8a502a22f0af78"},{url:"/index.html",revision:"fb71ecdfe1d694434618536e72052186"},{url:"/js/404.bundle.5b0e2b093a44f6551f18.js",revision:null},{url:"/js/786.chunk.5b0e2b093a44f6551f18.js",revision:null},{url:"/js/786.chunk.5b0e2b093a44f6551f18.js.LICENSE.txt",revision:"b554bf247b82acce9ccf792949eb7523"},{url:"/js/968.chunk.5b0e2b093a44f6551f18.js",revision:null},{url:"/js/app.bundle.5b0e2b093a44f6551f18.js",revision:null},{url:"/js/app.bundle.5b0e2b093a44f6551f18.js.LICENSE.txt",revision:"bcda1cd32249233358d1702647c75e56"},{url:"/robots.txt",revision:"02266fd1af9bdb6a95786308b3b12b9e"}],{})}));