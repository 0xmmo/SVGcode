if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const t=s=>r(s,i),u={module:{uri:i},exports:o,require:t};e[i]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),o)))}}define(["./workbox-fd57e60c"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/colorworker.f69ea41a.js",revision:null},{url:"assets/de-DE.6b3781d0.js",revision:null},{url:"assets/el-GR.3c26ab21.js",revision:null},{url:"assets/en-US.98cef5dc.js",revision:null},{url:"assets/filehandling.dd9317ae.js",revision:null},{url:"assets/index.802c8ea9.css",revision:null},{url:"assets/index.92218b33.js",revision:null},{url:"assets/install.6e62516e.js",revision:null},{url:"assets/monochromeworker.a3227215.js",revision:null},{url:"assets/preprocessworker.b53406ee.js",revision:null},{url:"assets/preprocessworker.faa146aa.js",revision:null},{url:"assets/svgoworker.4755cfed.js",revision:null},{url:"assets/vendor.870df48c.js",revision:null},{url:"assets/windowcontrols.5119ccd5.js",revision:null},{url:"index.html",revision:"7d39acc272b33ba47199d2ff7939cd2d"},{url:"manifest.webmanifest",revision:"8f55931d509c95acbf712eec7000d50e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
