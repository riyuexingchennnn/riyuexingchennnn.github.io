const h="modulepreload",p=function(e){return"/dist/"+e},a={},v=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=e?.nonce||e?.getAttribute("nonce");r=Promise.allSettled(t.map((e=>{if((e=p(e))in a)return;a[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":h,t||(o.as="script"),o.crossOrigin="",o.href=e,n&&o.setAttribute("nonce",n),document.head.appendChild(o),t?new Promise(((t,n)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function o(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&o(e.reason);return e().catch(o)}))};export{v as _};