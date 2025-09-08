const a0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};a0();function hh(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const l0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c0=hh(l0);function Lg(t){return!!t||t===""}function Zn(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ft(r)?d0(r):Zn(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ft(t))return t;if(pt(t))return t}}const u0=/;(?![^(]*\))/g,h0=/:(.+)/;function d0(t){const e={};return t.split(u0).forEach(n=>{if(n){const r=n.split(h0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Te(t){let e="";if(ft(t))e=t;else if(ye(t))for(let n=0;n<t.length;n++){const r=Te(t[n]);r&&(e+=r+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ae=t=>ft(t)?t:t==null?"":ye(t)||pt(t)&&(t.toString===$g||!Ee(t.toString))?JSON.stringify(t,Vg,2):String(t),Vg=(t,e)=>e&&e.__v_isRef?Vg(t,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fg(e)?{[`Set(${e.size})`]:[...e.values()]}:pt(e)&&!ye(e)&&!Bg(e)?String(e):e,qe={},qs=[],sn=()=>{},f0=()=>!1,p0=/^on[^a-z]/,Tl=t=>p0.test(t),dh=t=>t.startsWith("onUpdate:"),Vt=Object.assign,fh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},m0=Object.prototype.hasOwnProperty,ke=(t,e)=>m0.call(t,e),ye=Array.isArray,Hs=t=>Al(t)==="[object Map]",Fg=t=>Al(t)==="[object Set]",Ee=t=>typeof t=="function",ft=t=>typeof t=="string",ph=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",Ug=t=>pt(t)&&Ee(t.then)&&Ee(t.catch),$g=Object.prototype.toString,Al=t=>$g.call(t),g0=t=>Al(t).slice(8,-1),Bg=t=>Al(t)==="[object Object]",mh=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Da=hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_0=/-(\w)/g,Pn=Sl(t=>t.replace(_0,(e,n)=>n?n.toUpperCase():"")),y0=/\B([A-Z])/g,hi=Sl(t=>t.replace(y0,"-$1").toLowerCase()),Rl=Sl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cc=Sl(t=>t?`on${Rl(t)}`:""),vo=(t,e)=>!Object.is(t,e),Ma=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ru=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jf;const v0=()=>jf||(jf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let fn;class jg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&fn&&(this.parent=fn,this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}run(e){if(this.active){const n=fn;try{return fn=this,e()}finally{fn=n}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function zg(t){return new jg(t)}function w0(t,e=fn){e&&e.active&&e.effects.push(t)}const gh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qg=t=>(t.w&Dr)>0,Hg=t=>(t.n&Dr)>0,b0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dr},E0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];qg(s)&&!Hg(s)?s.delete(t):e[n++]=s,s.w&=~Dr,s.n&=~Dr}e.length=n}},su=new WeakMap;let Hi=0,Dr=1;const iu=30;let tn;const os=Symbol(""),ou=Symbol("");class _h{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,w0(this,r)}run(){if(!this.active)return this.fn();let e=tn,n=Rr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tn,tn=this,Rr=!0,Dr=1<<++Hi,Hi<=iu?b0(this):zf(this),this.fn()}finally{Hi<=iu&&E0(this),Dr=1<<--Hi,tn=this.parent,Rr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(zf(this),this.onStop&&this.onStop(),this.active=!1)}}function zf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rr=!0;const Wg=[];function di(){Wg.push(Rr),Rr=!1}function fi(){const t=Wg.pop();Rr=t===void 0?!0:t}function Qt(t,e,n){if(Rr&&tn){let r=su.get(t);r||su.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=gh()),Kg(s)}}function Kg(t,e){let n=!1;Hi<=iu?Hg(t)||(t.n|=Dr,n=!qg(t)):n=!t.has(tn),n&&(t.add(tn),tn.deps.push(t))}function Wn(t,e,n,r,s,i){const o=su.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&ye(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&l.push(c)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":ye(t)?mh(n)&&l.push(o.get("length")):(l.push(o.get(os)),Hs(t)&&l.push(o.get(ou)));break;case"delete":ye(t)||(l.push(o.get(os)),Hs(t)&&l.push(o.get(ou)));break;case"set":Hs(t)&&l.push(o.get(os));break}if(l.length===1)l[0]&&au(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);au(gh(c))}}function au(t,e){const n=ye(t)?t:[...t];for(const r of n)r.computed&&qf(r);for(const r of n)r.computed||qf(r)}function qf(t,e){(t!==tn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const I0=hh("__proto__,__v_isRef,__isVue"),Gg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ph)),T0=yh(),A0=yh(!1,!0),S0=yh(!0),Hf=R0();function R0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Le(this);for(let i=0,o=this.length;i<o;i++)Qt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){di();const r=Le(this)[e].apply(this,n);return fi(),r}}),t}function yh(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?z0:Zg:e?Jg:Xg).get(r))return r;const o=ye(r);if(!t&&o&&ke(Hf,s))return Reflect.get(Hf,s,i);const l=Reflect.get(r,s,i);return(ph(s)?Gg.has(s):I0(s))||(t||Qt(r,"get",s),e)?l:tt(l)?o&&mh(s)?l:l.value:pt(l)?t?e_(l):pi(l):l}}const P0=Qg(),k0=Qg(!0);function Qg(t=!1){return function(n,r,s,i){let o=n[r];if(wo(o)&&tt(o)&&!tt(s))return!1;if(!t&&!wo(s)&&(lu(s)||(s=Le(s),o=Le(o)),!ye(n)&&tt(o)&&!tt(s)))return o.value=s,!0;const l=ye(n)&&mh(r)?Number(r)<n.length:ke(n,r),c=Reflect.set(n,r,s,i);return n===Le(i)&&(l?vo(s,o)&&Wn(n,"set",r,s):Wn(n,"add",r,s)),c}}function C0(t,e){const n=ke(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Wn(t,"delete",e,void 0),r}function x0(t,e){const n=Reflect.has(t,e);return(!ph(e)||!Gg.has(e))&&Qt(t,"has",e),n}function O0(t){return Qt(t,"iterate",ye(t)?"length":os),Reflect.ownKeys(t)}const Yg={get:T0,set:P0,deleteProperty:C0,has:x0,ownKeys:O0},N0={get:S0,set(t,e){return!0},deleteProperty(t,e){return!0}},D0=Vt({},Yg,{get:A0,set:k0}),vh=t=>t,Pl=t=>Reflect.getPrototypeOf(t);function wa(t,e,n=!1,r=!1){t=t.__v_raw;const s=Le(t),i=Le(e);n||(e!==i&&Qt(s,"get",e),Qt(s,"get",i));const{has:o}=Pl(s),l=r?vh:n?Eh:bo;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function ba(t,e=!1){const n=this.__v_raw,r=Le(n),s=Le(t);return e||(t!==s&&Qt(r,"has",t),Qt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ea(t,e=!1){return t=t.__v_raw,!e&&Qt(Le(t),"iterate",os),Reflect.get(t,"size",t)}function Wf(t){t=Le(t);const e=Le(this);return Pl(e).has.call(e,t)||(e.add(t),Wn(e,"add",t,t)),this}function Kf(t,e){e=Le(e);const n=Le(this),{has:r,get:s}=Pl(n);let i=r.call(n,t);i||(t=Le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?vo(e,o)&&Wn(n,"set",t,e):Wn(n,"add",t,e),this}function Gf(t){const e=Le(this),{has:n,get:r}=Pl(e);let s=n.call(e,t);s||(t=Le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Wn(e,"delete",t,void 0),i}function Qf(){const t=Le(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function Ia(t,e){return function(r,s){const i=this,o=i.__v_raw,l=Le(o),c=e?vh:t?Eh:bo;return!t&&Qt(l,"iterate",os),o.forEach((u,d)=>r.call(s,c(u),c(d),i))}}function Ta(t,e,n){return function(...r){const s=this.__v_raw,i=Le(s),o=Hs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?vh:e?Eh:bo;return!e&&Qt(i,"iterate",c?ou:os),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function hr(t){return function(...e){return t==="delete"?!1:this}}function M0(){const t={get(i){return wa(this,i)},get size(){return Ea(this)},has:ba,add:Wf,set:Kf,delete:Gf,clear:Qf,forEach:Ia(!1,!1)},e={get(i){return wa(this,i,!1,!0)},get size(){return Ea(this)},has:ba,add:Wf,set:Kf,delete:Gf,clear:Qf,forEach:Ia(!1,!0)},n={get(i){return wa(this,i,!0)},get size(){return Ea(this,!0)},has(i){return ba.call(this,i,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:Ia(!0,!1)},r={get(i){return wa(this,i,!0,!0)},get size(){return Ea(this,!0)},has(i){return ba.call(this,i,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:Ia(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ta(i,!1,!1),n[i]=Ta(i,!0,!1),e[i]=Ta(i,!1,!0),r[i]=Ta(i,!0,!0)}),[t,n,e,r]}const[L0,V0,F0,U0]=M0();function wh(t,e){const n=e?t?U0:F0:t?V0:L0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const $0={get:wh(!1,!1)},B0={get:wh(!1,!0)},j0={get:wh(!0,!1)},Xg=new WeakMap,Jg=new WeakMap,Zg=new WeakMap,z0=new WeakMap;function q0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H0(t){return t.__v_skip||!Object.isExtensible(t)?0:q0(g0(t))}function pi(t){return wo(t)?t:bh(t,!1,Yg,$0,Xg)}function W0(t){return bh(t,!1,D0,B0,Jg)}function e_(t){return bh(t,!0,N0,j0,Zg)}function bh(t,e,n,r,s){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=H0(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Pr(t){return wo(t)?Pr(t.__v_raw):!!(t&&t.__v_isReactive)}function wo(t){return!!(t&&t.__v_isReadonly)}function lu(t){return!!(t&&t.__v_isShallow)}function t_(t){return Pr(t)||wo(t)}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function Xs(t){return Xa(t,"__v_skip",!0),t}const bo=t=>pt(t)?pi(t):t,Eh=t=>pt(t)?e_(t):t;function n_(t){Rr&&tn&&(t=Le(t),Kg(t.dep||(t.dep=gh())))}function r_(t,e){t=Le(t),t.dep&&au(t.dep)}function tt(t){return!!(t&&t.__v_isRef===!0)}function le(t){return s_(t,!1)}function K0(t){return s_(t,!0)}function s_(t,e){return tt(t)?t:new G0(t,e)}class G0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Le(e),this._value=n?e:bo(e)}get value(){return n_(this),this._value}set value(e){e=this.__v_isShallow?e:Le(e),vo(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:bo(e),r_(this))}}function me(t){return tt(t)?t.value:t}const Q0={get:(t,e,n)=>me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function i_(t){return Pr(t)?t:new Proxy(t,Q0)}function Y0(t){const e=ye(t)?new Array(t.length):{};for(const n in t)e[n]=J0(t,n);return e}class X0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function J0(t,e,n){const r=t[e];return tt(r)?r:new X0(t,e,n)}class Z0{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _h(e,()=>{this._dirty||(this._dirty=!0,r_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Le(this);return n_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function eE(t,e,n=!1){let r,s;const i=Ee(t);return i?(r=t,s=sn):(r=t.get,s=t.set),new Z0(r,s,i||!s,n)}function kr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){kl(i,e,n)}return s}function on(t,e,n,r){if(Ee(t)){const i=kr(t,e,n,r);return i&&Ug(i)&&i.catch(o=>{kl(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}function kl(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kr(c,null,10,[t,o,l]);return}}tE(t,n,s,r)}function tE(t,e,n,r=!0){console.error(t)}let Ja=!1,cu=!1;const qt=[];let Fn=0;const no=[];let Wi=null,Ms=0;const ro=[];let gr=null,Ls=0;const o_=Promise.resolve();let Ih=null,uu=null;function Th(t){const e=Ih||o_;return t?e.then(this?t.bind(this):t):e}function nE(t){let e=Fn+1,n=qt.length;for(;e<n;){const r=e+n>>>1;Eo(qt[r])<t?e=r+1:n=r}return e}function a_(t){(!qt.length||!qt.includes(t,Ja&&t.allowRecurse?Fn+1:Fn))&&t!==uu&&(t.id==null?qt.push(t):qt.splice(nE(t.id),0,t),l_())}function l_(){!Ja&&!cu&&(cu=!0,Ih=o_.then(h_))}function rE(t){const e=qt.indexOf(t);e>Fn&&qt.splice(e,1)}function c_(t,e,n,r){ye(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),l_()}function sE(t){c_(t,Wi,no,Ms)}function iE(t){c_(t,gr,ro,Ls)}function Cl(t,e=null){if(no.length){for(uu=e,Wi=[...new Set(no)],no.length=0,Ms=0;Ms<Wi.length;Ms++)Wi[Ms]();Wi=null,Ms=0,uu=null,Cl(t,e)}}function u_(t){if(Cl(),ro.length){const e=[...new Set(ro)];if(ro.length=0,gr){gr.push(...e);return}for(gr=e,gr.sort((n,r)=>Eo(n)-Eo(r)),Ls=0;Ls<gr.length;Ls++)gr[Ls]();gr=null,Ls=0}}const Eo=t=>t.id==null?1/0:t.id;function h_(t){cu=!1,Ja=!0,Cl(t),qt.sort((n,r)=>Eo(n)-Eo(r));const e=sn;try{for(Fn=0;Fn<qt.length;Fn++){const n=qt[Fn];n&&n.active!==!1&&kr(n,null,14)}}finally{Fn=0,qt.length=0,u_(),Ja=!1,Ih=null,(qt.length||no.length||ro.length)&&h_(t)}}function oE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[d]||qe;m&&(s=n.map(y=>y.trim())),p&&(s=n.map(ru))}let l,c=r[l=Cc(e)]||r[l=Cc(Pn(e))];!c&&i&&(c=r[l=Cc(hi(e))]),c&&on(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,on(u,t,6,s)}}function d_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ee(t)){const c=u=>{const d=d_(u,e,!0);d&&(l=!0,Vt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(r.set(t,null),null):(ye(i)?i.forEach(c=>o[c]=null):Vt(o,i),r.set(t,o),o)}function xl(t,e){return!t||!Tl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,hi(e))||ke(t,e))}let Ct=null,Ol=null;function Za(t){const e=Ct;return Ct=t,Ol=t&&t.type.__scopeId||null,e}function er(t){Ol=t}function tr(){Ol=null}function ht(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ip(-1);const i=Za(e),o=t(...s);return Za(i),r._d&&ip(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function xc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:c,emit:u,render:d,renderCache:p,data:m,setupState:y,ctx:T,inheritAttrs:N}=t;let P,k;const O=Za(t);try{if(n.shapeFlag&4){const H=s||r;P=gn(d.call(H,H,p,i,y,m,T)),k=c}else{const H=e;P=gn(H.length>1?H(i,{attrs:c,slots:l,emit:u}):H(i,null)),k=e.props?c:aE(c)}}catch(H){io.length=0,kl(H,t,1),P=ee(Lr)}let L=P;if(k&&N!==!1){const H=Object.keys(k),{shapeFlag:te}=L;H.length&&te&7&&(o&&H.some(dh)&&(k=lE(k,o)),L=Js(L,k))}return n.dirs&&(L=Js(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),P=L,Za(O),P}const aE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tl(n))&&((e||(e={}))[n]=t[n]);return e},lE=(t,e)=>{const n={};for(const r in t)(!dh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yf(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!xl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Yf(r,o,u):!0:!!o;return!1}function Yf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xl(n,i))return!0}return!1}function uE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hE=t=>t.__isSuspense;function dE(t,e){e&&e.pendingBranch?ye(t)?e.effects.push(...t):e.effects.push(t):iE(t)}function La(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function En(t,e,n=!1){const r=gt||Ct;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ee(e)?e.call(r.proxy):e}}const Xf={};function zn(t,e,n){return f_(t,e,n)}function f_(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=qe){const l=gt;let c,u=!1,d=!1;if(tt(t)?(c=()=>t.value,u=lu(t)):Pr(t)?(c=()=>t,r=!0):ye(t)?(d=!0,u=t.some(k=>Pr(k)||lu(k)),c=()=>t.map(k=>{if(tt(k))return k.value;if(Pr(k))return ss(k);if(Ee(k))return kr(k,l,2)})):Ee(t)?e?c=()=>kr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),on(t,l,3,[m])}:c=sn,e&&r){const k=c;c=()=>ss(k())}let p,m=k=>{p=P.onStop=()=>{kr(k,l,4)}};if(To)return m=sn,e?n&&on(e,l,3,[c(),d?[]:void 0,m]):c(),sn;let y=d?[]:Xf;const T=()=>{if(!!P.active)if(e){const k=P.run();(r||u||(d?k.some((O,L)=>vo(O,y[L])):vo(k,y)))&&(p&&p(),on(e,l,3,[k,y===Xf?void 0:y,m]),y=k)}else P.run()};T.allowRecurse=!!e;let N;s==="sync"?N=T:s==="post"?N=()=>$t(T,l&&l.suspense):N=()=>sE(T);const P=new _h(c,N);return e?n?T():y=P.run():s==="post"?$t(P.run.bind(P),l&&l.suspense):P.run(),()=>{P.stop(),l&&l.scope&&fh(l.scope.effects,P)}}function fE(t,e,n){const r=this.proxy,s=ft(t)?t.includes(".")?p_(r,t):()=>r[t]:t.bind(r,r);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=gt;Zs(this);const l=f_(s,i.bind(r),n);return o?Zs(o):as(),l}function p_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ss(t,e){if(!pt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))ss(t.value,e);else if(ye(t))for(let n=0;n<t.length;n++)ss(t[n],e);else if(Fg(t)||Hs(t))t.forEach(n=>{ss(n,e)});else if(Bg(t))for(const n in t)ss(t[n],e);return t}function $o(t){return Ee(t)?{setup:t,name:t.name}:t}const so=t=>!!t.type.__asyncLoader,m_=t=>t.type.__isKeepAlive;function pE(t,e){g_(t,"a",e)}function mE(t,e){g_(t,"da",e)}function g_(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)m_(s.parent.vnode)&&gE(r,e,n,s),s=s.parent}}function gE(t,e,n,r){const s=Nl(e,t,r,!0);Bo(()=>{fh(r[e],s)},n)}function Nl(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;di(),Zs(n);const l=on(e,n,t,o);return as(),fi(),l});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=gt)=>(!To||t==="sp")&&Nl(t,e,n),_E=nr("bm"),rr=nr("m"),yE=nr("bu"),vE=nr("u"),wE=nr("bum"),Bo=nr("um"),bE=nr("sp"),EE=nr("rtg"),IE=nr("rtc");function TE(t,e=gt){Nl("ec",t,e)}function __(t,e){const n=Ct;if(n===null)return t;const r=Ml(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,c,u=qe]=e[i];Ee(o)&&(o={mounted:o,updated:o}),o.deep&&ss(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:c,modifiers:u})}return t}function Xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(di(),on(c,n,8,[t.el,l,t,e]),fi())}}const Ah="components";function Os(t,e){return v_(Ah,t,!0,e)||t}const y_=Symbol();function AE(t){return ft(t)?v_(Ah,t,!1)||t:t||y_}function v_(t,e,n=!0,r=!1){const s=Ct||gt;if(s){const i=s.type;if(t===Ah){const l=tI(i);if(l&&(l===e||l===Pn(e)||l===Rl(Pn(e))))return i}const o=Jf(s[t]||i[t],e)||Jf(s.appContext[t],e);return!o&&r?i:o}}function Jf(t,e){return t&&(t[e]||t[Pn(e)]||t[Rl(Pn(e))])}function Jt(t,e,n,r){let s;const i=n&&n[r];if(ye(t)||ft(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(pt(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(t[u],u,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function Mr(t,e,n={},r,s){if(Ct.isCE||Ct.parent&&so(Ct.parent)&&Ct.parent.isCE)return ee("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),z();const o=i&&w_(i(n)),l=Mt(Ve,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function w_(t){return t.some(e=>nl(e)?!(e.type===Lr||e.type===Ve&&!w_(e.children)):!0)?t:null}const hu=t=>t?N_(t)?Ml(t)||t.proxy:hu(t.parent):null,el=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hu(t.parent),$root:t=>hu(t.root),$emit:t=>t.emit,$options:t=>E_(t),$forceUpdate:t=>t.f||(t.f=()=>a_(t.update)),$nextTick:t=>t.n||(t.n=Th.bind(t.proxy)),$watch:t=>fE.bind(t)}),SE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==qe&&ke(r,e))return o[e]=1,r[e];if(s!==qe&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==qe&&ke(n,e))return o[e]=4,n[e];du&&(o[e]=0)}}const d=el[e];let p,m;if(d)return e==="$attrs"&&Qt(t,"get",e),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==qe&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==qe&&ke(s,e)?(s[e]=n,!0):r!==qe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==qe&&ke(t,o)||e!==qe&&ke(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(el,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let du=!0;function RE(t){const e=E_(t),n=t.proxy,r=t.ctx;du=!1,e.beforeCreate&&Zf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:T,activated:N,deactivated:P,beforeDestroy:k,beforeUnmount:O,destroyed:L,unmounted:H,render:te,renderTracked:q,renderTriggered:E,errorCaptured:_,serverPrefetch:b,expose:A,inheritAttrs:S,components:C,directives:I,filters:Je}=e;if(u&&PE(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const xe in o){const Ce=o[xe];Ee(Ce)&&(r[xe]=Ce.bind(n))}if(s){const xe=s.call(n,n);pt(xe)&&(t.data=pi(xe))}if(du=!0,i)for(const xe in i){const Ce=i[xe],yt=Ee(Ce)?Ce.bind(n,n):Ee(Ce.get)?Ce.get.bind(n,n):sn,Dn=!Ee(Ce)&&Ee(Ce.set)?Ce.set.bind(n):sn,Zt=Ie({get:yt,set:Dn});Object.defineProperty(r,xe,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:ut=>Zt.value=ut})}if(l)for(const xe in l)b_(l[xe],r,n,xe);if(c){const xe=Ee(c)?c.call(n):c;Reflect.ownKeys(xe).forEach(Ce=>{La(Ce,xe[Ce])})}d&&Zf(d,t,"c");function ot(xe,Ce){ye(Ce)?Ce.forEach(yt=>xe(yt.bind(n))):Ce&&xe(Ce.bind(n))}if(ot(_E,p),ot(rr,m),ot(yE,y),ot(vE,T),ot(pE,N),ot(mE,P),ot(TE,_),ot(IE,q),ot(EE,E),ot(wE,O),ot(Bo,H),ot(bE,b),ye(A))if(A.length){const xe=t.exposed||(t.exposed={});A.forEach(Ce=>{Object.defineProperty(xe,Ce,{get:()=>n[Ce],set:yt=>n[Ce]=yt})})}else t.exposed||(t.exposed={});te&&t.render===sn&&(t.render=te),S!=null&&(t.inheritAttrs=S),C&&(t.components=C),I&&(t.directives=I)}function PE(t,e,n=sn,r=!1){ye(t)&&(t=fu(t));for(const s in t){const i=t[s];let o;pt(i)?"default"in i?o=En(i.from||s,i.default,!0):o=En(i.from||s):o=En(i),tt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function Zf(t,e,n){on(ye(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function b_(t,e,n,r){const s=r.includes(".")?p_(n,r):()=>n[r];if(ft(t)){const i=e[t];Ee(i)&&zn(s,i)}else if(Ee(t))zn(s,t.bind(n));else if(pt(t))if(ye(t))t.forEach(i=>b_(i,e,n,r));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&zn(s,i,t)}}function E_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>tl(c,u,o,!0)),tl(c,e,o)),i.set(e,c),c}function tl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&tl(t,i,n,!0),s&&s.forEach(o=>tl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=kE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const kE={data:ep,props:Zr,emits:Zr,methods:Zr,computed:Zr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Zr,directives:Zr,watch:xE,provide:ep,inject:CE};function ep(t,e){return e?t?function(){return Vt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function CE(t,e){return Zr(fu(t),fu(e))}function fu(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zr(t,e){return t?Vt(Vt(Object.create(null),t),e):e}function xE(t,e){if(!t)return e;if(!e)return t;const n=Vt(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function OE(t,e,n,r=!1){const s={},i={};Xa(i,Dl,1),t.propsDefaults=Object.create(null),I_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:W0(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function NE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Le(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(xl(t.emitsOptions,m))continue;const y=e[m];if(c)if(ke(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const T=Pn(m);s[T]=pu(c,l,T,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{I_(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!ke(e,p)&&((d=hi(p))===p||!ke(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=pu(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p)&&!0)&&(delete i[p],u=!0)}u&&Wn(t,"set","$attrs")}function I_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Da(c))continue;const u=e[c];let d;s&&ke(s,d=Pn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:xl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Le(n),u=l||qe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=pu(s,c,p,u[p],t,!ke(u,p))}}return o}function pu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&Ee(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Zs(s),r=u[n]=c.call(null,e),as())}else r=c}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===hi(n))&&(r=!0))}return r}function T_(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ee(t)){const d=p=>{c=!0;const[m,y]=T_(p,e,!0);Vt(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return r.set(t,qs),qs;if(ye(i))for(let d=0;d<i.length;d++){const p=Pn(i[d]);tp(p)&&(o[p]=qe)}else if(i)for(const d in i){const p=Pn(d);if(tp(p)){const m=i[d],y=o[p]=ye(m)||Ee(m)?{type:m}:m;if(y){const T=sp(Boolean,y.type),N=sp(String,y.type);y[0]=T>-1,y[1]=N<0||T<N,(T>-1||ke(y,"default"))&&l.push(p)}}}const u=[o,l];return r.set(t,u),u}function tp(t){return t[0]!=="$"}function np(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function rp(t,e){return np(t)===np(e)}function sp(t,e){return ye(e)?e.findIndex(n=>rp(n,t)):Ee(e)&&rp(e,t)?0:-1}const A_=t=>t[0]==="_"||t==="$stable",Sh=t=>ye(t)?t.map(gn):[gn(t)],DE=(t,e,n)=>{if(e._n)return e;const r=ht((...s)=>Sh(e(...s)),n);return r._c=!1,r},S_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(A_(s))continue;const i=t[s];if(Ee(i))e[s]=DE(s,i,r);else if(i!=null){const o=Sh(i);e[s]=()=>o}}},R_=(t,e)=>{const n=Sh(e);t.slots.default=()=>n},ME=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Le(e),Xa(e,"_",n)):S_(e,t.slots={})}else t.slots={},e&&R_(t,e);Xa(t.slots,Dl,1)},LE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=qe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(Vt(s,e),!n&&l===1&&delete s._):(i=!e.$stable,S_(e,s)),o=e}else e&&(R_(t,e),o={default:1});if(i)for(const l in s)!A_(l)&&!(l in o)&&delete s[l]};function P_(){return{app:null,config:{isNativeTag:f0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VE=0;function FE(t,e){return function(r,s=null){Ee(r)||(r=Object.assign({},r)),s!=null&&!pt(s)&&(s=null);const i=P_(),o=new Set;let l=!1;const c=i.app={_uid:VE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rI,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ee(u.install)?(o.add(u),u.install(c,...d)):Ee(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,p){if(!l){const m=ee(r,s);return m.appContext=i,d&&e?e(m,u):t(m,u,p),l=!0,c._container=u,u.__vue_app__=c,Ml(m.component)||m.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c}};return c}}function mu(t,e,n,r,s=!1){if(ye(t)){t.forEach((m,y)=>mu(m,e&&(ye(e)?e[y]:e),n,r,s));return}if(so(r)&&!s)return;const i=r.shapeFlag&4?Ml(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===qe?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==c&&(ft(u)?(d[u]=null,ke(p,u)&&(p[u]=null)):tt(u)&&(u.value=null)),Ee(c))kr(c,l,12,[o,d]);else{const m=ft(c),y=tt(c);if(m||y){const T=()=>{if(t.f){const N=m?d[c]:c.value;s?ye(N)&&fh(N,i):ye(N)?N.includes(i)||N.push(i):m?(d[c]=[i],ke(p,c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else m?(d[c]=o,ke(p,c)&&(p[c]=o)):tt(c)&&(c.value=o,t.k&&(d[t.k]=o))};o?(T.id=-1,$t(T,n)):T()}}}const $t=dE;function UE(t){return $E(t)}function $E(t,e){const n=v0();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=sn,cloneNode:T,insertStaticContent:N}=t,P=(w,R,D,$=null,U=null,K=null,J=!1,W=null,Q=!!R.dynamicChildren)=>{if(w===R)return;w&&!$i(w,R)&&($=oe(w),Fe(w,U,K,!0),w=null),R.patchFlag===-2&&(Q=!1,R.dynamicChildren=null);const{type:j,ref:ce,shapeFlag:ne}=R;switch(j){case Rh:k(w,R,D,$);break;case Lr:O(w,R,D,$);break;case Va:w==null&&L(R,D,$,J);break;case Ve:I(w,R,D,$,U,K,J,W,Q);break;default:ne&1?q(w,R,D,$,U,K,J,W,Q):ne&6?Je(w,R,D,$,U,K,J,W,Q):(ne&64||ne&128)&&j.process(w,R,D,$,U,K,J,W,Q,Me)}ce!=null&&U&&mu(ce,w&&w.ref,K,R||w,!R)},k=(w,R,D,$)=>{if(w==null)r(R.el=l(R.children),D,$);else{const U=R.el=w.el;R.children!==w.children&&u(U,R.children)}},O=(w,R,D,$)=>{w==null?r(R.el=c(R.children||""),D,$):R.el=w.el},L=(w,R,D,$)=>{[w.el,w.anchor]=N(w.children,R,D,$,w.el,w.anchor)},H=({el:w,anchor:R},D,$)=>{let U;for(;w&&w!==R;)U=m(w),r(w,D,$),w=U;r(R,D,$)},te=({el:w,anchor:R})=>{let D;for(;w&&w!==R;)D=m(w),s(w),w=D;s(R)},q=(w,R,D,$,U,K,J,W,Q)=>{J=J||R.type==="svg",w==null?E(R,D,$,U,K,J,W,Q):A(w,R,U,K,J,W,Q)},E=(w,R,D,$,U,K,J,W)=>{let Q,j;const{type:ce,props:ne,shapeFlag:ae,transition:de,patchFlag:he,dirs:we}=w;if(w.el&&T!==void 0&&he===-1)Q=w.el=T(w.el);else{if(Q=w.el=o(w.type,K,ne&&ne.is,ne),ae&8?d(Q,w.children):ae&16&&b(w.children,Q,null,$,U,K&&ce!=="foreignObject",J,W),we&&Xr(w,null,$,"created"),ne){for(const Be in ne)Be!=="value"&&!Da(Be)&&i(Q,Be,null,ne[Be],K,w.children,$,U,G);"value"in ne&&i(Q,"value",null,ne.value),(j=ne.onVnodeBeforeMount)&&dn(j,$,w)}_(Q,w,w.scopeId,J,$)}we&&Xr(w,null,$,"beforeMount");const Oe=(!U||U&&!U.pendingBranch)&&de&&!de.persisted;Oe&&de.beforeEnter(Q),r(Q,R,D),((j=ne&&ne.onVnodeMounted)||Oe||we)&&$t(()=>{j&&dn(j,$,w),Oe&&de.enter(Q),we&&Xr(w,null,$,"mounted")},U)},_=(w,R,D,$,U)=>{if(D&&y(w,D),$)for(let K=0;K<$.length;K++)y(w,$[K]);if(U){let K=U.subTree;if(R===K){const J=U.vnode;_(w,J,J.scopeId,J.slotScopeIds,U.parent)}}},b=(w,R,D,$,U,K,J,W,Q=0)=>{for(let j=Q;j<w.length;j++){const ce=w[j]=W?_r(w[j]):gn(w[j]);P(null,ce,R,D,$,U,K,J,W)}},A=(w,R,D,$,U,K,J)=>{const W=R.el=w.el;let{patchFlag:Q,dynamicChildren:j,dirs:ce}=R;Q|=w.patchFlag&16;const ne=w.props||qe,ae=R.props||qe;let de;D&&Jr(D,!1),(de=ae.onVnodeBeforeUpdate)&&dn(de,D,R,w),ce&&Xr(R,w,D,"beforeUpdate"),D&&Jr(D,!0);const he=U&&R.type!=="foreignObject";if(j?S(w.dynamicChildren,j,W,D,$,he,K):J||yt(w,R,W,null,D,$,he,K,!1),Q>0){if(Q&16)C(W,R,ne,ae,D,$,U);else if(Q&2&&ne.class!==ae.class&&i(W,"class",null,ae.class,U),Q&4&&i(W,"style",ne.style,ae.style,U),Q&8){const we=R.dynamicProps;for(let Oe=0;Oe<we.length;Oe++){const Be=we[Oe],Ft=ne[Be],ir=ae[Be];(ir!==Ft||Be==="value")&&i(W,Be,Ft,ir,U,w.children,D,$,G)}}Q&1&&w.children!==R.children&&d(W,R.children)}else!J&&j==null&&C(W,R,ne,ae,D,$,U);((de=ae.onVnodeUpdated)||ce)&&$t(()=>{de&&dn(de,D,R,w),ce&&Xr(R,w,D,"updated")},$)},S=(w,R,D,$,U,K,J)=>{for(let W=0;W<R.length;W++){const Q=w[W],j=R[W],ce=Q.el&&(Q.type===Ve||!$i(Q,j)||Q.shapeFlag&70)?p(Q.el):D;P(Q,j,ce,null,$,U,K,J,!0)}},C=(w,R,D,$,U,K,J)=>{if(D!==$){for(const W in $){if(Da(W))continue;const Q=$[W],j=D[W];Q!==j&&W!=="value"&&i(w,W,j,Q,J,R.children,U,K,G)}if(D!==qe)for(const W in D)!Da(W)&&!(W in $)&&i(w,W,D[W],null,J,R.children,U,K,G);"value"in $&&i(w,"value",D.value,$.value)}},I=(w,R,D,$,U,K,J,W,Q)=>{const j=R.el=w?w.el:l(""),ce=R.anchor=w?w.anchor:l("");let{patchFlag:ne,dynamicChildren:ae,slotScopeIds:de}=R;de&&(W=W?W.concat(de):de),w==null?(r(j,D,$),r(ce,D,$),b(R.children,D,ce,U,K,J,W,Q)):ne>0&&ne&64&&ae&&w.dynamicChildren?(S(w.dynamicChildren,ae,D,U,K,J,W),(R.key!=null||U&&R===U.subTree)&&k_(w,R,!0)):yt(w,R,D,ce,U,K,J,W,Q)},Je=(w,R,D,$,U,K,J,W,Q)=>{R.slotScopeIds=W,w==null?R.shapeFlag&512?U.ctx.activate(R,D,$,J,Q):We(R,D,$,U,K,J,Q):ot(w,R,Q)},We=(w,R,D,$,U,K,J)=>{const W=w.component=YE(w,$,U);if(m_(w)&&(W.ctx.renderer=Me),XE(W),W.asyncDep){if(U&&U.registerDep(W,xe),!w.el){const Q=W.subTree=ee(Lr);O(null,Q,R,D)}return}xe(W,w,R,D,U,K,J)},ot=(w,R,D)=>{const $=R.component=w.component;if(cE(w,R,D))if($.asyncDep&&!$.asyncResolved){Ce($,R,D);return}else $.next=R,rE($.update),$.update();else R.el=w.el,$.vnode=R},xe=(w,R,D,$,U,K,J)=>{const W=()=>{if(w.isMounted){let{next:ce,bu:ne,u:ae,parent:de,vnode:he}=w,we=ce,Oe;Jr(w,!1),ce?(ce.el=he.el,Ce(w,ce,J)):ce=he,ne&&Ma(ne),(Oe=ce.props&&ce.props.onVnodeBeforeUpdate)&&dn(Oe,de,ce,he),Jr(w,!0);const Be=xc(w),Ft=w.subTree;w.subTree=Be,P(Ft,Be,p(Ft.el),oe(Ft),w,U,K),ce.el=Be.el,we===null&&uE(w,Be.el),ae&&$t(ae,U),(Oe=ce.props&&ce.props.onVnodeUpdated)&&$t(()=>dn(Oe,de,ce,he),U)}else{let ce;const{el:ne,props:ae}=R,{bm:de,m:he,parent:we}=w,Oe=so(R);if(Jr(w,!1),de&&Ma(de),!Oe&&(ce=ae&&ae.onVnodeBeforeMount)&&dn(ce,we,R),Jr(w,!0),ne&&ge){const Be=()=>{w.subTree=xc(w),ge(ne,w.subTree,w,U,null)};Oe?R.type.__asyncLoader().then(()=>!w.isUnmounted&&Be()):Be()}else{const Be=w.subTree=xc(w);P(null,Be,D,$,w,U,K),R.el=Be.el}if(he&&$t(he,U),!Oe&&(ce=ae&&ae.onVnodeMounted)){const Be=R;$t(()=>dn(ce,we,Be),U)}(R.shapeFlag&256||we&&so(we.vnode)&&we.vnode.shapeFlag&256)&&w.a&&$t(w.a,U),w.isMounted=!0,R=D=$=null}},Q=w.effect=new _h(W,()=>a_(j),w.scope),j=w.update=()=>Q.run();j.id=w.uid,Jr(w,!0),j()},Ce=(w,R,D)=>{R.component=w;const $=w.vnode.props;w.vnode=R,w.next=null,NE(w,R.props,$,D),LE(w,R.children,D),di(),Cl(void 0,w.update),fi()},yt=(w,R,D,$,U,K,J,W,Q=!1)=>{const j=w&&w.children,ce=w?w.shapeFlag:0,ne=R.children,{patchFlag:ae,shapeFlag:de}=R;if(ae>0){if(ae&128){Zt(j,ne,D,$,U,K,J,W,Q);return}else if(ae&256){Dn(j,ne,D,$,U,K,J,W,Q);return}}de&8?(ce&16&&G(j,U,K),ne!==j&&d(D,ne)):ce&16?de&16?Zt(j,ne,D,$,U,K,J,W,Q):G(j,U,K,!0):(ce&8&&d(D,""),de&16&&b(ne,D,$,U,K,J,W,Q))},Dn=(w,R,D,$,U,K,J,W,Q)=>{w=w||qs,R=R||qs;const j=w.length,ce=R.length,ne=Math.min(j,ce);let ae;for(ae=0;ae<ne;ae++){const de=R[ae]=Q?_r(R[ae]):gn(R[ae]);P(w[ae],de,D,null,U,K,J,W,Q)}j>ce?G(w,U,K,!0,!1,ne):b(R,D,$,U,K,J,W,Q,ne)},Zt=(w,R,D,$,U,K,J,W,Q)=>{let j=0;const ce=R.length;let ne=w.length-1,ae=ce-1;for(;j<=ne&&j<=ae;){const de=w[j],he=R[j]=Q?_r(R[j]):gn(R[j]);if($i(de,he))P(de,he,D,null,U,K,J,W,Q);else break;j++}for(;j<=ne&&j<=ae;){const de=w[ne],he=R[ae]=Q?_r(R[ae]):gn(R[ae]);if($i(de,he))P(de,he,D,null,U,K,J,W,Q);else break;ne--,ae--}if(j>ne){if(j<=ae){const de=ae+1,he=de<ce?R[de].el:$;for(;j<=ae;)P(null,R[j]=Q?_r(R[j]):gn(R[j]),D,he,U,K,J,W,Q),j++}}else if(j>ae)for(;j<=ne;)Fe(w[j],U,K,!0),j++;else{const de=j,he=j,we=new Map;for(j=he;j<=ae;j++){const vt=R[j]=Q?_r(R[j]):gn(R[j]);vt.key!=null&&we.set(vt.key,j)}let Oe,Be=0;const Ft=ae-he+1;let ir=!1,or=0;const ar=new Array(Ft);for(j=0;j<Ft;j++)ar[j]=0;for(j=de;j<=ne;j++){const vt=w[j];if(Be>=Ft){Fe(vt,U,K,!0);continue}let Xt;if(vt.key!=null)Xt=we.get(vt.key);else for(Oe=he;Oe<=ae;Oe++)if(ar[Oe-he]===0&&$i(vt,R[Oe])){Xt=Oe;break}Xt===void 0?Fe(vt,U,K,!0):(ar[Xt-he]=j+1,Xt>=or?or=Xt:ir=!0,P(vt,R[Xt],D,null,U,K,J,W,Q),Be++)}const Si=ir?BE(ar):qs;for(Oe=Si.length-1,j=Ft-1;j>=0;j--){const vt=he+j,Xt=R[vt],ia=vt+1<ce?R[vt+1].el:$;ar[j]===0?P(null,Xt,D,ia,U,K,J,W,Q):ir&&(Oe<0||j!==Si[Oe]?ut(Xt,D,ia,2):Oe--)}}},ut=(w,R,D,$,U=null)=>{const{el:K,type:J,transition:W,children:Q,shapeFlag:j}=w;if(j&6){ut(w.component.subTree,R,D,$);return}if(j&128){w.suspense.move(R,D,$);return}if(j&64){J.move(w,R,D,Me);return}if(J===Ve){r(K,R,D);for(let ne=0;ne<Q.length;ne++)ut(Q[ne],R,D,$);r(w.anchor,R,D);return}if(J===Va){H(w,R,D);return}if($!==2&&j&1&&W)if($===0)W.beforeEnter(K),r(K,R,D),$t(()=>W.enter(K),U);else{const{leave:ne,delayLeave:ae,afterLeave:de}=W,he=()=>r(K,R,D),we=()=>{ne(K,()=>{he(),de&&de()})};ae?ae(K,he,we):we()}else r(K,R,D)},Fe=(w,R,D,$=!1,U=!1)=>{const{type:K,props:J,ref:W,children:Q,dynamicChildren:j,shapeFlag:ce,patchFlag:ne,dirs:ae}=w;if(W!=null&&mu(W,null,D,w,!0),ce&256){R.ctx.deactivate(w);return}const de=ce&1&&ae,he=!so(w);let we;if(he&&(we=J&&J.onVnodeBeforeUnmount)&&dn(we,R,w),ce&6)ie(w.component,D,$);else{if(ce&128){w.suspense.unmount(D,$);return}de&&Xr(w,null,R,"beforeUnmount"),ce&64?w.type.remove(w,R,D,U,Me,$):j&&(K!==Ve||ne>0&&ne&64)?G(j,R,D,!1,!0):(K===Ve&&ne&384||!U&&ce&16)&&G(Q,R,D),$&&Ai(w)}(he&&(we=J&&J.onVnodeUnmounted)||de)&&$t(()=>{we&&dn(we,R,w),de&&Xr(w,null,R,"unmounted")},D)},Ai=w=>{const{type:R,el:D,anchor:$,transition:U}=w;if(R===Ve){V(D,$);return}if(R===Va){te(w);return}const K=()=>{s(D),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(w.shapeFlag&1&&U&&!U.persisted){const{leave:J,delayLeave:W}=U,Q=()=>J(D,K);W?W(w.el,K,Q):Q()}else K()},V=(w,R)=>{let D;for(;w!==R;)D=m(w),s(w),w=D;s(R)},ie=(w,R,D)=>{const{bum:$,scope:U,update:K,subTree:J,um:W}=w;$&&Ma($),U.stop(),K&&(K.active=!1,Fe(J,w,R,D)),W&&$t(W,R),$t(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},G=(w,R,D,$=!1,U=!1,K=0)=>{for(let J=K;J<w.length;J++)Fe(w[J],R,D,$,U)},oe=w=>w.shapeFlag&6?oe(w.component.subTree):w.shapeFlag&128?w.suspense.next():m(w.anchor||w.el),Ue=(w,R,D)=>{w==null?R._vnode&&Fe(R._vnode,null,null,!0):P(R._vnode||null,w,R,null,null,null,D),u_(),R._vnode=w},Me={p:P,um:Fe,m:ut,r:Ai,mt:We,mc:b,pc:yt,pbc:S,n:oe,o:t};let be,ge;return e&&([be,ge]=e(Me)),{render:Ue,hydrate:be,createApp:FE(Ue,be)}}function Jr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function k_(t,e,n=!1){const r=t.children,s=e.children;if(ye(r)&&ye(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_r(s[i]),l.el=o.el),n||k_(o,l))}}function BE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const jE=t=>t.__isTeleport,Ve=Symbol(void 0),Rh=Symbol(void 0),Lr=Symbol(void 0),Va=Symbol(void 0),io=[];let rn=null;function z(t=!1){io.push(rn=t?null:[])}function zE(){io.pop(),rn=io[io.length-1]||null}let Io=1;function ip(t){Io+=t}function C_(t){return t.dynamicChildren=Io>0?rn||qs:null,zE(),Io>0&&rn&&rn.push(t),t}function X(t,e,n,r,s,i){return C_(v(t,e,n,r,s,i,!0))}function Mt(t,e,n,r,s){return C_(ee(t,e,n,r,s,!0))}function nl(t){return t?t.__v_isVNode===!0:!1}function $i(t,e){return t.type===e.type&&t.key===e.key}const Dl="__vInternal",x_=({key:t})=>t!=null?t:null,Fa=({ref:t,ref_key:e,ref_for:n})=>t!=null?ft(t)||tt(t)||Ee(t)?{i:Ct,r:t,k:e,f:!!n}:t:null;function v(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&x_(e),ref:e&&Fa(e),scopeId:Ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(Ph(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ft(n)?8:16),Io>0&&!o&&rn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&rn.push(c),c}const ee=qE;function qE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===y_)&&(t=Lr),nl(t)){const l=Js(t,e,!0);return n&&Ph(l,n),Io>0&&!i&&rn&&(l.shapeFlag&6?rn[rn.indexOf(t)]=l:rn.push(l)),l.patchFlag|=-2,l}if(nI(t)&&(t=t.__vccOpts),e){e=HE(e);let{class:l,style:c}=e;l&&!ft(l)&&(e.class=Te(l)),pt(c)&&(t_(c)&&!ye(c)&&(c=Vt({},c)),e.style=Zn(c))}const o=ft(t)?1:hE(t)?128:jE(t)?64:pt(t)?4:Ee(t)?2:0;return v(t,e,n,r,s,o,i,!0)}function HE(t){return t?t_(t)||Dl in t?Vt({},t):t:null}function Js(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?KE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&x_(l),ref:e&&e.ref?n&&s?ye(s)?s.concat(Fa(e)):[s,Fa(e)]:Fa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Js(t.ssContent),ssFallback:t.ssFallback&&Js(t.ssFallback),el:t.el,anchor:t.anchor}}function $e(t=" ",e=0){return ee(Rh,null,t,e)}function WE(t,e){const n=ee(Va,null,t);return n.staticCount=e,n}function nt(t="",e=!1){return e?(z(),Mt(Lr,null,t)):ee(Lr,null,t)}function gn(t){return t==null||typeof t=="boolean"?ee(Lr):ye(t)?ee(Ve,null,t.slice()):typeof t=="object"?_r(t):ee(Rh,null,String(t))}function _r(t){return t.el===null||t.memo?t:Js(t)}function Ph(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ye(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ph(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Dl in e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[$e(e)]):n=8);t.children=e,t.shapeFlag|=n}function KE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Te([e.class,r.class]));else if(s==="style")e.style=Zn([e.style,r.style]);else if(Tl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ye(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){on(t,e,7,[n,r])}const GE=P_();let QE=0;function YE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||GE,i={uid:QE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:T_(r,s),emitsOptions:d_(r,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oE.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const O_=()=>gt||Ct,Zs=t=>{gt=t,t.scope.on()},as=()=>{gt&&gt.scope.off(),gt=null};function N_(t){return t.vnode.shapeFlag&4}let To=!1;function XE(t,e=!1){To=e;const{props:n,children:r}=t.vnode,s=N_(t);OE(t,n,s,e),ME(t,r);const i=s?JE(t,e):void 0;return To=!1,i}function JE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xs(new Proxy(t.ctx,SE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?eI(t):null;Zs(t),di();const i=kr(r,t,0,[t.props,s]);if(fi(),as(),Ug(i)){if(i.then(as,as),e)return i.then(o=>{op(t,o,e)}).catch(o=>{kl(o,t,0)});t.asyncDep=i}else op(t,i,e)}else D_(t,e)}function op(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=i_(e)),D_(t,n)}let ap;function D_(t,e,n){const r=t.type;if(!t.render){if(!e&&ap&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=Vt(Vt({isCustomElement:i,delimiters:l},o),c);r.render=ap(s,u)}}t.render=r.render||sn}Zs(t),di(),RE(t),fi(),as()}function ZE(t){return new Proxy(t.attrs,{get(e,n){return Qt(t,"get","$attrs"),e[n]}})}function eI(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ZE(t))},slots:t.slots,emit:t.emit,expose:e}}function Ml(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(i_(Xs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in el)return el[n](t)}}))}function tI(t){return Ee(t)&&t.displayName||t.name}function nI(t){return Ee(t)&&"__vccOpts"in t}const Ie=(t,e)=>eE(t,e,To);function Ll(t,e,n){const r=arguments.length;return r===2?pt(e)&&!ye(e)?nl(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nl(n)&&(n=[n]),ee(t,e,n))}const rI="3.2.36",sI="http://www.w3.org/2000/svg",ts=typeof document!="undefined"?document:null,lp=ts&&ts.createElement("template"),iI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ts.createElementNS(sI,t):ts.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ts.createTextNode(t),createComment:t=>ts.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ts.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{lp.innerHTML=r?`<svg>${t}</svg>`:t;const l=lp.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function oI(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function aI(t,e,n){const r=t.style,s=ft(n);if(n&&!s){for(const i in n)gu(r,i,n[i]);if(e&&!ft(e))for(const i in e)n[i]==null&&gu(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const cp=/\s*!important$/;function gu(t,e,n){if(ye(n))n.forEach(r=>gu(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lI(t,e);cp.test(n)?t.setProperty(hi(r),n.replace(cp,""),"important"):t[r]=n}}const up=["Webkit","Moz","ms"],Oc={};function lI(t,e){const n=Oc[e];if(n)return n;let r=Pn(e);if(r!=="filter"&&r in t)return Oc[e]=r;r=Rl(r);for(let s=0;s<up.length;s++){const i=up[s]+r;if(i in t)return Oc[e]=i}return e}const hp="http://www.w3.org/1999/xlink";function cI(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hp,e.slice(6,e.length)):t.setAttributeNS(hp,e,n);else{const i=c0(e);n==null||i&&!Lg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function uI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lg(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[M_,hI]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let _u=0;const dI=Promise.resolve(),fI=()=>{_u=0},pI=()=>_u||(dI.then(fI),_u=M_());function Vs(t,e,n,r){t.addEventListener(e,n,r)}function mI(t,e,n,r){t.removeEventListener(e,n,r)}function gI(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=_I(e);if(r){const u=i[e]=yI(r,s);Vs(t,l,u,c)}else o&&(mI(t,l,o,c),i[e]=void 0)}}const dp=/(?:Once|Passive|Capture)$/;function _I(t){let e;if(dp.test(t)){e={};let n;for(;n=t.match(dp);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[hi(t.slice(2)),e]}function yI(t,e){const n=r=>{const s=r.timeStamp||M_();(hI||s>=n.attached-1)&&on(vI(r,n.value),e,5,[r])};return n.value=t,n.attached=pI(),n}function vI(t,e){if(ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const fp=/^on[a-z]/,wI=(t,e,n,r,s=!1,i,o,l,c)=>{e==="class"?oI(t,r,s):e==="style"?aI(t,n,r):Tl(e)?dh(e)||gI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bI(t,e,r,s))?uI(t,e,r,i,o,l,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),cI(t,e,r,s))};function bI(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&fp.test(e)&&Ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fp.test(e)&&ft(n)?!1:e in t}const pp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ye(e)?n=>Ma(e,n):e};function EI(t){t.target.composing=!0}function mp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const L_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=pp(s);const i=r||s.props&&s.props.type==="number";Vs(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ru(l)),t._assign(l)}),n&&Vs(t,"change",()=>{t.value=t.value.trim()}),e||(Vs(t,"compositionstart",EI),Vs(t,"compositionend",mp),Vs(t,"change",mp))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=pp(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ru(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},II=["ctrl","shift","alt","meta"],TI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>II.some(n=>t[`${n}Key`]&&!e.includes(n))},jt=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=TI[e[s]];if(i&&i(n,e))return}return t(n,...r)},AI=Vt({patchProp:wI},iI);let gp;function SI(){return gp||(gp=UE(AI))}const RI=(...t)=>{const e=SI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=PI(r);if(!s)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function PI(t){return ft(t)?document.querySelector(t):t}var kI=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let V_;const Vl=t=>V_=t,F_=Symbol();function yu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var oo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(oo||(oo={}));function CI(){const t=zg(!0),e=t.run(()=>le({}));let n=[],r=[];const s=Xs({install(i){Vl(s),s._a=i,i.provide(F_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!kI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const U_=()=>{};function _p(t,e,n,r=U_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&O_()&&Bo(s),s}function Ns(t,...e){t.slice().forEach(n=>{n(...e)})}function vu(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];yu(s)&&yu(r)&&t.hasOwnProperty(n)&&!tt(r)&&!Pr(r)?t[n]=vu(s,r):t[n]=r}return t}const xI=Symbol();function OI(t){return!yu(t)||!t.hasOwnProperty(xI)}const{assign:Vn}=Object;function NI(t){return!!(tt(t)&&t.effect)}function DI(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=Y0(n.state.value[t]);return Vn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Xs(Ie(()=>{Vl(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return c=$_(t,u,e,n,r,!0),c.$reset=function(){const p=s?s():{};this.$patch(m=>{Vn(m,p)})},c}function $_(t,e,n={},r,s,i){let o;const l=Vn({actions:{}},n),c={deep:!0};let u,d,p=Xs([]),m=Xs([]),y;const T=r.state.value[t];!i&&!T&&(r.state.value[t]={}),le({});let N;function P(E){let _;u=d=!1,typeof E=="function"?(E(r.state.value[t]),_={type:oo.patchFunction,storeId:t,events:y}):(vu(r.state.value[t],E),_={type:oo.patchObject,payload:E,storeId:t,events:y});const b=N=Symbol();Th().then(()=>{N===b&&(u=!0)}),d=!0,Ns(p,_,r.state.value[t])}const k=U_;function O(){o.stop(),p=[],m=[],r._s.delete(t)}function L(E,_){return function(){Vl(r);const b=Array.from(arguments),A=[],S=[];function C(We){A.push(We)}function I(We){S.push(We)}Ns(m,{args:b,name:E,store:te,after:C,onError:I});let Je;try{Je=_.apply(this&&this.$id===t?this:te,b)}catch(We){throw Ns(S,We),We}return Je instanceof Promise?Je.then(We=>(Ns(A,We),We)).catch(We=>(Ns(S,We),Promise.reject(We))):(Ns(A,Je),Je)}}const H={_p:r,$id:t,$onAction:_p.bind(null,m),$patch:P,$reset:k,$subscribe(E,_={}){const b=_p(p,E,_.detached,()=>A()),A=o.run(()=>zn(()=>r.state.value[t],S=>{(_.flush==="sync"?d:u)&&E({storeId:t,type:oo.direct,events:y},S)},Vn({},c,_)));return b},$dispose:O},te=pi(Vn({},H));r._s.set(t,te);const q=r._e.run(()=>(o=zg(),o.run(()=>e())));for(const E in q){const _=q[E];if(tt(_)&&!NI(_)||Pr(_))i||(T&&OI(_)&&(tt(_)?_.value=T[E]:vu(_,T[E])),r.state.value[t][E]=_);else if(typeof _=="function"){const b=L(E,_);q[E]=b,l.actions[E]=_}}return Vn(te,q),Vn(Le(te),q),Object.defineProperty(te,"$state",{get:()=>r.state.value[t],set:E=>{P(_=>{Vn(_,E)})}}),r._p.forEach(E=>{Vn(te,o.run(()=>E({store:te,app:r._a,pinia:r,options:l})))}),T&&i&&n.hydrate&&n.hydrate(te.$state,T),u=!0,d=!0,te}function kh(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=O_();return l=l||u&&En(F_),l&&Vl(l),l=V_,l._s.has(r)||(i?$_(r,e,s,l):DI(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const B_=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",mi=t=>B_?Symbol(t):"_vr_"+t,MI=mi("rvlm"),yp=mi("rvd"),Fl=mi("r"),j_=mi("rl"),wu=mi("rvl"),Fs=typeof window!="undefined";function LI(t){return t.__esModule||B_&&t[Symbol.toStringTag]==="Module"}const ze=Object.assign;function Nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const ao=()=>{},VI=/\/$/,FI=t=>t.replace(VI,"");function Dc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("?"),c=e.indexOf("#",l>-1?l:0);return l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=jI(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function UI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $I(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ei(e.matched[r],n.matched[s])&&z_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function z_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BI(t[n],e[n]))return!1;return!0}function BI(t,e){return Array.isArray(t)?wp(t,e):Array.isArray(e)?wp(e,t):t===e}function wp(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ao;(function(t){t.pop="pop",t.push="push"})(Ao||(Ao={}));var lo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(lo||(lo={}));function zI(t){if(!t)if(Fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FI(t)}const qI=/^[^#]+#/;function HI(t,e){return t.replace(qI,"#")+e}function WI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ul=()=>({left:window.pageXOffset,top:window.pageYOffset});function KI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=WI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bp(t,e){return(history.state?history.state.position-e:-1)+t}const bu=new Map;function GI(t,e){bu.set(t,e)}function QI(t){const e=bu.get(t);return bu.delete(t),e}let YI=()=>location.protocol+"//"+location.host;function q_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),vp(c,"")}return vp(n,t)+r+s}function XI(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=q_(t,location),T=n.value,N=e.value;let P=0;if(m){if(n.value=y,e.value=m,o&&o===T){o=null;return}P=N?m.position-N.position:0}else r(y);s.forEach(k=>{k(n.value,T,{delta:P,type:Ao.pop,direction:P?P>0?lo.forward:lo.back:lo.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const T=s.indexOf(m);T>-1&&s.splice(T,1)};return i.push(y),y}function d(){const{history:m}=window;!m.state||m.replaceState(ze({},m.state,{scroll:Ul()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:p}}function Ep(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ul():null}}function JI(t){const{history:e,location:n}=window,r={value:q_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:YI()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function o(c,u){const d=ze({},e.state,Ep(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=ze({},s.value,e.state,{forward:c,scroll:Ul()});i(d.current,d,!0);const p=ze({},Ep(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function ZI(t){t=zI(t);const e=JI(t),n=XI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ze({location:"",base:t,go:r,createHref:HI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eT(t){return typeof t=="string"||t&&typeof t=="object"}function H_(t){return typeof t=="string"||typeof t=="symbol"}const dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W_=mi("nf");var Ip;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ip||(Ip={}));function ti(t,e){return ze(new Error,{type:t,[W_]:!0},e)}function fr(t,e){return t instanceof Error&&W_ in t&&(e==null||!!(t.type&e))}const Tp="[^/]+?",tT={sensitive:!1,strict:!1,start:!0,end:!0},nT=/[.+*?^${}()[\]/\\]/g;function rT(t,e){const n=ze({},tT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(nT,"\\$&"),y+=40;else if(m.type===1){const{value:T,repeatable:N,optional:P,regexp:k}=m;i.push({name:T,repeatable:N,optional:P});const O=k||Tp;if(O!==Tp){y+=10;try{new RegExp(`(${O})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${T}" (${O}): `+H.message)}}let L=N?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(L=P&&u.length<2?`(?:/${L})`:"/"+L),P&&(L+="?"),s+=L,y+=20,P&&(y+=-8),N&&(y+=-20),O===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",T=i[m-1];p[T.name]=y&&T.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:T,repeatable:N,optional:P}=y,k=T in u?u[T]:"";if(Array.isArray(k)&&!N)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(k)?k.join("/"):k;if(!O)if(P)m.length<2&&t.length>1&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);d+=O}}return d}return{re:o,score:r,keys:i,parse:l,stringify:c}}function sT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=sT(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const oT={type:0,value:""},aT=/[a-zA-Z0-9_]/;function lT(t){if(!t)return[[]];if(t==="/")return[[oT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:aT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function cT(t,e,n){const r=rT(lT(t.path),n),s=ze(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function uT(t,e){const n=[],r=new Map;e=Sp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const y=!m,T=dT(d);T.aliasOf=m&&m.record;const N=Sp(e,d),P=[T];if("alias"in d){const L=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of L)P.push(ze({},T,{components:m?m.record.components:T.components,path:H,aliasOf:m?m.record:T}))}let k,O;for(const L of P){const{path:H}=L;if(p&&H[0]!=="/"){const te=p.record.path,q=te[te.length-1]==="/"?"":"/";L.path=p.record.path+(H&&q+H)}if(k=cT(L,p,N),m?m.alias.push(k):(O=O||k,O!==k&&O.alias.push(k),y&&d.name&&!Ap(k)&&o(d.name)),"children"in T){const te=T.children;for(let q=0;q<te.length;q++)i(te[q],k,m&&m.children[q])}m=m||k,c(k)}return O?()=>{o(O)}:ao}function o(d){if(H_(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){let p=0;for(;p<n.length&&iT(d,n[p])>=0&&(d.record.path!==n[p].record.path||!K_(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!Ap(d)&&r.set(d.record.name,d)}function u(d,p){let m,y={},T,N;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw ti(1,{location:d});N=m.record.name,y=ze(hT(p.params,m.keys.filter(O=>!O.optional).map(O=>O.name)),d.params),T=m.stringify(y)}else if("path"in d)T=d.path,m=n.find(O=>O.re.test(T)),m&&(y=m.parse(T),N=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw ti(1,{location:d,currentLocation:p});N=m.record.name,y=ze({},p.params,d.params),T=m.stringify(y)}const P=[];let k=m;for(;k;)P.unshift(k.record),k=k.parent;return{name:N,path:T,params:y,matched:P,meta:pT(P)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function hT(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function fT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ap(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pT(t){return t.reduce((e,n)=>ze(e,n.meta),{})}function Sp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function K_(t,e){return e.children.some(n=>n===t||K_(t,n))}const G_=/#/g,mT=/&/g,gT=/\//g,_T=/=/g,yT=/\?/g,Q_=/\+/g,vT=/%5B/g,wT=/%5D/g,Y_=/%5E/g,bT=/%60/g,X_=/%7B/g,ET=/%7C/g,J_=/%7D/g,IT=/%20/g;function Ch(t){return encodeURI(""+t).replace(ET,"|").replace(vT,"[").replace(wT,"]")}function TT(t){return Ch(t).replace(X_,"{").replace(J_,"}").replace(Y_,"^")}function Eu(t){return Ch(t).replace(Q_,"%2B").replace(IT,"+").replace(G_,"%23").replace(mT,"%26").replace(bT,"`").replace(X_,"{").replace(J_,"}").replace(Y_,"^")}function AT(t){return Eu(t).replace(_T,"%3D")}function ST(t){return Ch(t).replace(G_,"%23").replace(yT,"%3F")}function RT(t){return t==null?"":ST(t).replace(gT,"%2F")}function rl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function PT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Q_," "),o=i.indexOf("="),l=rl(o<0?i:i.slice(0,o)),c=o<0?null:rl(i.slice(o+1));if(l in e){let u=e[l];Array.isArray(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Rp(t){let e="";for(let n in t){const r=t[n];if(n=AT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Eu(i)):[r&&Eu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Bi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=p=>{p===!1?l(ti(4,{from:n,to:e})):p instanceof Error?l(p):eT(p)?l(ti(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),o())},u=t.call(r&&r.instances[s],e,n,c);let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function Mc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CT(l)){const u=(l.__vccOpts||l)[e];u&&s.push(yr(u,n,r,i,o))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=LI(u)?u.default:u;i.components[o]=d;const m=(d.__vccOpts||d)[e];return m&&yr(m,n,r,i,o)()}))}}return s}function CT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pp(t){const e=En(Fl),n=En(j_),r=Ie(()=>e.resolve(me(t.to))),s=Ie(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ei.bind(null,d));if(m>-1)return m;const y=kp(c[u-2]);return u>1&&kp(d)===y&&p[p.length-1].path!==y?p.findIndex(ei.bind(null,c[u-2])):m}),i=Ie(()=>s.value>-1&&NT(n.params,r.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&z_(n.params,r.value.params));function l(c={}){return OT(c)?e[me(t.replace)?"replace":"push"](me(t.to)).catch(ao):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const xT=$o({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pp,setup(t,{slots:e}){const n=pi(Pp(t)),{options:r}=En(Fl),s=Ie(()=>({[Cp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ll("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ki=xT;function OT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function kp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cp=(t,e,n)=>t!=null?t:e!=null?e:n,DT=$o({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=En(wu),s=Ie(()=>t.route||r.value),i=En(yp,0),o=Ie(()=>s.value.matched[i]);La(yp,i+1),La(MI,o),La(wu,s);const l=le();return zn(()=>[l.value,o.value,t.name],([c,u,d],[p,m,y])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!ei(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,d=u&&u.components[t.name],p=t.name;if(!d)return xp(n.default,{Component:d,route:c});const m=u.props[t.name],y=m?m===!0?c.params:typeof m=="function"?m(c):m:null,N=Ll(d,ze({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[p]=null)},ref:l}));return xp(n.default,{Component:N,route:c})||N}}});function xp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Z_=DT;function MT(t){const e=uT(t.routes,t),n=t.parseQuery||PT,r=t.stringifyQuery||Rp,s=t.history,i=Bi(),o=Bi(),l=Bi(),c=K0(dr);let u=dr;Fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Nc.bind(null,V=>""+V),p=Nc.bind(null,RT),m=Nc.bind(null,rl);function y(V,ie){let G,oe;return H_(V)?(G=e.getRecordMatcher(V),oe=ie):oe=V,e.addRoute(oe,G)}function T(V){const ie=e.getRecordMatcher(V);ie&&e.removeRoute(ie)}function N(){return e.getRoutes().map(V=>V.record)}function P(V){return!!e.getRecordMatcher(V)}function k(V,ie){if(ie=ze({},ie||c.value),typeof V=="string"){const ge=Dc(n,V,ie.path),w=e.resolve({path:ge.path},ie),R=s.createHref(ge.fullPath);return ze(ge,w,{params:m(w.params),hash:rl(ge.hash),redirectedFrom:void 0,href:R})}let G;if("path"in V)G=ze({},V,{path:Dc(n,V.path,ie.path).path});else{const ge=ze({},V.params);for(const w in ge)ge[w]==null&&delete ge[w];G=ze({},V,{params:p(V.params)}),ie.params=p(ie.params)}const oe=e.resolve(G,ie),Ue=V.hash||"";oe.params=d(m(oe.params));const Me=UI(r,ze({},V,{hash:TT(Ue),path:oe.path})),be=s.createHref(Me);return ze({fullPath:Me,hash:Ue,query:r===Rp?kT(V.query):V.query||{}},oe,{redirectedFrom:void 0,href:be})}function O(V){return typeof V=="string"?Dc(n,V,c.value.path):ze({},V)}function L(V,ie){if(u!==V)return ti(8,{from:ie,to:V})}function H(V){return E(V)}function te(V){return H(ze(O(V),{replace:!0}))}function q(V){const ie=V.matched[V.matched.length-1];if(ie&&ie.redirect){const{redirect:G}=ie;let oe=typeof G=="function"?G(V):G;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=O(oe):{path:oe},oe.params={}),ze({query:V.query,hash:V.hash,params:V.params},oe)}}function E(V,ie){const G=u=k(V),oe=c.value,Ue=V.state,Me=V.force,be=V.replace===!0,ge=q(G);if(ge)return E(ze(O(ge),{state:Ue,force:Me,replace:be}),ie||G);const w=G;w.redirectedFrom=ie;let R;return!Me&&$I(r,oe,G)&&(R=ti(16,{to:w,from:oe}),Dn(oe,oe,!0,!1)),(R?Promise.resolve(R):b(w,oe)).catch(D=>fr(D)?fr(D,2)?D:yt(D):xe(D,w,oe)).then(D=>{if(D){if(fr(D,2))return E(ze(O(D.to),{state:Ue,force:Me,replace:be}),ie||w)}else D=S(w,oe,!0,be,Ue);return A(w,oe,D),D})}function _(V,ie){const G=L(V,ie);return G?Promise.reject(G):Promise.resolve()}function b(V,ie){let G;const[oe,Ue,Me]=LT(V,ie);G=Mc(oe.reverse(),"beforeRouteLeave",V,ie);for(const ge of oe)ge.leaveGuards.forEach(w=>{G.push(yr(w,V,ie))});const be=_.bind(null,V,ie);return G.push(be),Ds(G).then(()=>{G=[];for(const ge of i.list())G.push(yr(ge,V,ie));return G.push(be),Ds(G)}).then(()=>{G=Mc(Ue,"beforeRouteUpdate",V,ie);for(const ge of Ue)ge.updateGuards.forEach(w=>{G.push(yr(w,V,ie))});return G.push(be),Ds(G)}).then(()=>{G=[];for(const ge of V.matched)if(ge.beforeEnter&&!ie.matched.includes(ge))if(Array.isArray(ge.beforeEnter))for(const w of ge.beforeEnter)G.push(yr(w,V,ie));else G.push(yr(ge.beforeEnter,V,ie));return G.push(be),Ds(G)}).then(()=>(V.matched.forEach(ge=>ge.enterCallbacks={}),G=Mc(Me,"beforeRouteEnter",V,ie),G.push(be),Ds(G))).then(()=>{G=[];for(const ge of o.list())G.push(yr(ge,V,ie));return G.push(be),Ds(G)}).catch(ge=>fr(ge,8)?ge:Promise.reject(ge))}function A(V,ie,G){for(const oe of l.list())oe(V,ie,G)}function S(V,ie,G,oe,Ue){const Me=L(V,ie);if(Me)return Me;const be=ie===dr,ge=Fs?history.state:{};G&&(oe||be?s.replace(V.fullPath,ze({scroll:be&&ge&&ge.scroll},Ue)):s.push(V.fullPath,Ue)),c.value=V,Dn(V,ie,G,be),yt()}let C;function I(){C||(C=s.listen((V,ie,G)=>{const oe=k(V),Ue=q(oe);if(Ue){E(ze(Ue,{replace:!0}),oe).catch(ao);return}u=oe;const Me=c.value;Fs&&GI(bp(Me.fullPath,G.delta),Ul()),b(oe,Me).catch(be=>fr(be,12)?be:fr(be,2)?(E(be.to,oe).then(ge=>{fr(ge,20)&&!G.delta&&G.type===Ao.pop&&s.go(-1,!1)}).catch(ao),Promise.reject()):(G.delta&&s.go(-G.delta,!1),xe(be,oe,Me))).then(be=>{be=be||S(oe,Me,!1),be&&(G.delta?s.go(-G.delta,!1):G.type===Ao.pop&&fr(be,20)&&s.go(-1,!1)),A(oe,Me,be)}).catch(ao)}))}let Je=Bi(),We=Bi(),ot;function xe(V,ie,G){yt(V);const oe=We.list();return oe.length?oe.forEach(Ue=>Ue(V,ie,G)):console.error(V),Promise.reject(V)}function Ce(){return ot&&c.value!==dr?Promise.resolve():new Promise((V,ie)=>{Je.add([V,ie])})}function yt(V){return ot||(ot=!V,I(),Je.list().forEach(([ie,G])=>V?G(V):ie()),Je.reset()),V}function Dn(V,ie,G,oe){const{scrollBehavior:Ue}=t;if(!Fs||!Ue)return Promise.resolve();const Me=!G&&QI(bp(V.fullPath,0))||(oe||!G)&&history.state&&history.state.scroll||null;return Th().then(()=>Ue(V,ie,Me)).then(be=>be&&KI(be)).catch(be=>xe(be,V,ie))}const Zt=V=>s.go(V);let ut;const Fe=new Set;return{currentRoute:c,addRoute:y,removeRoute:T,hasRoute:P,getRoutes:N,resolve:k,options:t,push:H,replace:te,go:Zt,back:()=>Zt(-1),forward:()=>Zt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:We.add,isReady:Ce,install(V){const ie=this;V.component("RouterLink",Ki),V.component("RouterView",Z_),V.config.globalProperties.$router=ie,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>me(c)}),Fs&&!ut&&c.value===dr&&(ut=!0,H(s.location).catch(Ue=>{}));const G={};for(const Ue in dr)G[Ue]=Ie(()=>c.value[Ue]);V.provide(Fl,ie),V.provide(j_,pi(G)),V.provide(wu,c);const oe=V.unmount;Fe.add(V),V.unmount=function(){Fe.delete(V),Fe.size<1&&(u=dr,C&&C(),C=null,c.value=dr,ut=!1,ot=!1),oe()}}}}function Ds(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function LT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ei(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ei(u,c))||s.push(c))}return[n,r,s]}function jo(){return En(Fl)}const VT={name:"App",setup(t){return(e,n)=>(z(),Mt(me(Z_)))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},FT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ty={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ey(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new UT;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const T=u<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $T=function(t){const e=ey(t);return ty.encodeByteArray(e,!0)},sl=function(t){return $T(t).replace(/\./g,"")},ny=function(t){try{return ty.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=()=>BT().__FIREBASE_DEFAULTS__,zT=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qT=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ny(t[1]);return e&&JSON.parse(e)},$l=()=>{try{return jT()||zT()||qT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ry=t=>{var e,n;return(n=(e=$l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sy=t=>{const e=ry(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iy=()=>{var t;return(t=$l())===null||t===void 0?void 0:t.config},oy=t=>{var e;return(e=$l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[sl(JSON.stringify(n)),sl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WT(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function KT(){var t;const e=(t=$l())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YT(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XT(){return!KT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JT(){try{return typeof indexedDB=="object"}catch{return!1}}function ZT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eA,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,r)}}function tA(t,e){return t.replace(nA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nA=/\{\$([^}]+)}/g;function rA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Op(i)&&Op(o)){if(!il(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Op(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sA(t,e){const n=new iA(t,e);return n.subscribe.bind(n)}class iA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lc),s.error===void 0&&(s.error=Lc),s.complete===void 0&&(s.complete=Lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cA(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lA(t){return t===es?void 0:t}function cA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const hA={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},dA=Re.INFO,fA={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},pA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xh{constructor(e){this.name=e,this._logLevel=dA,this._logHandler=pA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const mA=(t,e)=>e.some(n=>t instanceof n);let Np,Dp;function gA(){return Np||(Np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _A(){return Dp||(Dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ly=new WeakMap,Iu=new WeakMap,cy=new WeakMap,Vc=new WeakMap,Oh=new WeakMap;function yA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ly.set(n,t)}).catch(()=>{}),Oh.set(e,t),e}function vA(t){if(Iu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Iu.set(t,e)}let Tu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wA(t){Tu=t(Tu)}function bA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return cy.set(r,e.sort?e.sort():[e]),Cr(r)}:_A().includes(t)?function(...e){return t.apply(Fc(this),e),Cr(ly.get(this))}:function(...e){return Cr(t.apply(Fc(this),e))}}function EA(t){return typeof t=="function"?bA(t):(t instanceof IDBTransaction&&vA(t),mA(t,gA())?new Proxy(t,Tu):t)}function Cr(t){if(t instanceof IDBRequest)return yA(t);if(Vc.has(t))return Vc.get(t);const e=EA(t);return e!==t&&(Vc.set(t,e),Oh.set(e,t)),e}const Fc=t=>Oh.get(t);function IA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Cr(o.result),c.oldVersion,c.newVersion,Cr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const TA=["get","getKey","getAll","getAllKeys","count"],AA=["put","add","delete","clear"],Uc=new Map;function Mp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=AA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Uc.set(e,i),i}wA(t=>({...t,get:(e,n,r)=>Mp(e,n)||t.get(e,n,r),has:(e,n)=>!!Mp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Au="@firebase/app",Lp="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new xh("@firebase/app"),PA="@firebase/app-compat",kA="@firebase/analytics-compat",CA="@firebase/analytics",xA="@firebase/app-check-compat",OA="@firebase/app-check",NA="@firebase/auth",DA="@firebase/auth-compat",MA="@firebase/database",LA="@firebase/database-compat",VA="@firebase/functions",FA="@firebase/functions-compat",UA="@firebase/installations",$A="@firebase/installations-compat",BA="@firebase/messaging",jA="@firebase/messaging-compat",zA="@firebase/performance",qA="@firebase/performance-compat",HA="@firebase/remote-config",WA="@firebase/remote-config-compat",KA="@firebase/storage",GA="@firebase/storage-compat",QA="@firebase/firestore",YA="@firebase/vertexai-preview",XA="@firebase/firestore-compat",JA="firebase",ZA="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="[DEFAULT]",e1={[Au]:"fire-core",[PA]:"fire-core-compat",[CA]:"fire-analytics",[kA]:"fire-analytics-compat",[OA]:"fire-app-check",[xA]:"fire-app-check-compat",[NA]:"fire-auth",[DA]:"fire-auth-compat",[MA]:"fire-rtdb",[LA]:"fire-rtdb-compat",[VA]:"fire-fn",[FA]:"fire-fn-compat",[UA]:"fire-iid",[$A]:"fire-iid-compat",[BA]:"fire-fcm",[jA]:"fire-fcm-compat",[zA]:"fire-perf",[qA]:"fire-perf-compat",[HA]:"fire-rc",[WA]:"fire-rc-compat",[KA]:"fire-gcs",[GA]:"fire-gcs-compat",[QA]:"fire-fst",[XA]:"fire-fst-compat",[YA]:"fire-vertex","fire-js":"fire-js",[JA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map,t1=new Map,Ru=new Map;function Vp(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(Ru.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;Ru.set(e,t);for(const n of ol.values())Vp(n,t);for(const n of t1.values())Vp(n,t);return!0}function Bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},xr=new zo("app","Firebase",n1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=ZA;function uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Su,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw xr.create("bad-app-name",{appName:String(s)});if(n||(n=iy()),!n)throw xr.create("no-options");const i=ol.get(s);if(i){if(il(n,i.options)&&il(r,i.config))return i;throw xr.create("duplicate-app",{appName:s})}const o=new uA(s);for(const c of Ru.values())o.addComponent(c);const l=new r1(n,r,o);return ol.set(s,l),l}function Nh(t=Su){const e=ol.get(t);if(!e&&t===Su&&iy())return uy();if(!e)throw xr.create("no-app",{appName:t});return e}function In(t,e,n){var r;let s=(r=e1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}ds(new Vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="firebase-heartbeat-database",i1=1,So="firebase-heartbeat-store";let $c=null;function hy(){return $c||($c=IA(s1,i1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),$c}async function o1(t){try{const n=(await hy()).transaction(So),r=await n.objectStore(So).get(dy(t));return await n.done,r}catch(e){if(e instanceof On)Kn.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Fp(t,e){try{const r=(await hy()).transaction(So,"readwrite");await r.objectStore(So).put(e,dy(t)),await r.done}catch(n){if(n instanceof On)Kn.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function dy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=1024,l1=30*24*60*60*1e3;class c1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new h1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Up();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=l1}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Up(),{heartbeatsToSend:r,unsentEntries:s}=u1(this._heartbeatsCache.heartbeats),i=sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Kn.warn(n),""}}}function Up(){return new Date().toISOString().substring(0,10)}function u1(t,e=a1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$p(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$p(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class h1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JT()?ZT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await o1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $p(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){ds(new Vr("platform-logger",e=>new SA(e),"PRIVATE")),ds(new Vr("heartbeat",e=>new c1(e),"PRIVATE")),In(Au,Lp,t),In(Au,Lp,"esm2017"),In("fire-js","")}d1("");var Bp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,fy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function b(){}b.prototype=_.prototype,E.D=_.prototype,E.prototype=new b,E.prototype.constructor=E,E.C=function(A,S,C){for(var I=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)I[Je-2]=arguments[Je];return _.prototype[S].apply(A,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,b){b||(b=0);var A=Array(16);if(typeof _=="string")for(var S=0;16>S;++S)A[S]=_.charCodeAt(b++)|_.charCodeAt(b++)<<8|_.charCodeAt(b++)<<16|_.charCodeAt(b++)<<24;else for(S=0;16>S;++S)A[S]=_[b++]|_[b++]<<8|_[b++]<<16|_[b++]<<24;_=E.g[0],b=E.g[1],S=E.g[2];var C=E.g[3],I=_+(C^b&(S^C))+A[0]+3614090360&4294967295;_=b+(I<<7&4294967295|I>>>25),I=C+(S^_&(b^S))+A[1]+3905402710&4294967295,C=_+(I<<12&4294967295|I>>>20),I=S+(b^C&(_^b))+A[2]+606105819&4294967295,S=C+(I<<17&4294967295|I>>>15),I=b+(_^S&(C^_))+A[3]+3250441966&4294967295,b=S+(I<<22&4294967295|I>>>10),I=_+(C^b&(S^C))+A[4]+4118548399&4294967295,_=b+(I<<7&4294967295|I>>>25),I=C+(S^_&(b^S))+A[5]+1200080426&4294967295,C=_+(I<<12&4294967295|I>>>20),I=S+(b^C&(_^b))+A[6]+2821735955&4294967295,S=C+(I<<17&4294967295|I>>>15),I=b+(_^S&(C^_))+A[7]+4249261313&4294967295,b=S+(I<<22&4294967295|I>>>10),I=_+(C^b&(S^C))+A[8]+1770035416&4294967295,_=b+(I<<7&4294967295|I>>>25),I=C+(S^_&(b^S))+A[9]+2336552879&4294967295,C=_+(I<<12&4294967295|I>>>20),I=S+(b^C&(_^b))+A[10]+4294925233&4294967295,S=C+(I<<17&4294967295|I>>>15),I=b+(_^S&(C^_))+A[11]+2304563134&4294967295,b=S+(I<<22&4294967295|I>>>10),I=_+(C^b&(S^C))+A[12]+1804603682&4294967295,_=b+(I<<7&4294967295|I>>>25),I=C+(S^_&(b^S))+A[13]+4254626195&4294967295,C=_+(I<<12&4294967295|I>>>20),I=S+(b^C&(_^b))+A[14]+2792965006&4294967295,S=C+(I<<17&4294967295|I>>>15),I=b+(_^S&(C^_))+A[15]+1236535329&4294967295,b=S+(I<<22&4294967295|I>>>10),I=_+(S^C&(b^S))+A[1]+4129170786&4294967295,_=b+(I<<5&4294967295|I>>>27),I=C+(b^S&(_^b))+A[6]+3225465664&4294967295,C=_+(I<<9&4294967295|I>>>23),I=S+(_^b&(C^_))+A[11]+643717713&4294967295,S=C+(I<<14&4294967295|I>>>18),I=b+(C^_&(S^C))+A[0]+3921069994&4294967295,b=S+(I<<20&4294967295|I>>>12),I=_+(S^C&(b^S))+A[5]+3593408605&4294967295,_=b+(I<<5&4294967295|I>>>27),I=C+(b^S&(_^b))+A[10]+38016083&4294967295,C=_+(I<<9&4294967295|I>>>23),I=S+(_^b&(C^_))+A[15]+3634488961&4294967295,S=C+(I<<14&4294967295|I>>>18),I=b+(C^_&(S^C))+A[4]+3889429448&4294967295,b=S+(I<<20&4294967295|I>>>12),I=_+(S^C&(b^S))+A[9]+568446438&4294967295,_=b+(I<<5&4294967295|I>>>27),I=C+(b^S&(_^b))+A[14]+3275163606&4294967295,C=_+(I<<9&4294967295|I>>>23),I=S+(_^b&(C^_))+A[3]+4107603335&4294967295,S=C+(I<<14&4294967295|I>>>18),I=b+(C^_&(S^C))+A[8]+1163531501&4294967295,b=S+(I<<20&4294967295|I>>>12),I=_+(S^C&(b^S))+A[13]+2850285829&4294967295,_=b+(I<<5&4294967295|I>>>27),I=C+(b^S&(_^b))+A[2]+4243563512&4294967295,C=_+(I<<9&4294967295|I>>>23),I=S+(_^b&(C^_))+A[7]+1735328473&4294967295,S=C+(I<<14&4294967295|I>>>18),I=b+(C^_&(S^C))+A[12]+2368359562&4294967295,b=S+(I<<20&4294967295|I>>>12),I=_+(b^S^C)+A[5]+4294588738&4294967295,_=b+(I<<4&4294967295|I>>>28),I=C+(_^b^S)+A[8]+2272392833&4294967295,C=_+(I<<11&4294967295|I>>>21),I=S+(C^_^b)+A[11]+1839030562&4294967295,S=C+(I<<16&4294967295|I>>>16),I=b+(S^C^_)+A[14]+4259657740&4294967295,b=S+(I<<23&4294967295|I>>>9),I=_+(b^S^C)+A[1]+2763975236&4294967295,_=b+(I<<4&4294967295|I>>>28),I=C+(_^b^S)+A[4]+1272893353&4294967295,C=_+(I<<11&4294967295|I>>>21),I=S+(C^_^b)+A[7]+4139469664&4294967295,S=C+(I<<16&4294967295|I>>>16),I=b+(S^C^_)+A[10]+3200236656&4294967295,b=S+(I<<23&4294967295|I>>>9),I=_+(b^S^C)+A[13]+681279174&4294967295,_=b+(I<<4&4294967295|I>>>28),I=C+(_^b^S)+A[0]+3936430074&4294967295,C=_+(I<<11&4294967295|I>>>21),I=S+(C^_^b)+A[3]+3572445317&4294967295,S=C+(I<<16&4294967295|I>>>16),I=b+(S^C^_)+A[6]+76029189&4294967295,b=S+(I<<23&4294967295|I>>>9),I=_+(b^S^C)+A[9]+3654602809&4294967295,_=b+(I<<4&4294967295|I>>>28),I=C+(_^b^S)+A[12]+3873151461&4294967295,C=_+(I<<11&4294967295|I>>>21),I=S+(C^_^b)+A[15]+530742520&4294967295,S=C+(I<<16&4294967295|I>>>16),I=b+(S^C^_)+A[2]+3299628645&4294967295,b=S+(I<<23&4294967295|I>>>9),I=_+(S^(b|~C))+A[0]+4096336452&4294967295,_=b+(I<<6&4294967295|I>>>26),I=C+(b^(_|~S))+A[7]+1126891415&4294967295,C=_+(I<<10&4294967295|I>>>22),I=S+(_^(C|~b))+A[14]+2878612391&4294967295,S=C+(I<<15&4294967295|I>>>17),I=b+(C^(S|~_))+A[5]+4237533241&4294967295,b=S+(I<<21&4294967295|I>>>11),I=_+(S^(b|~C))+A[12]+1700485571&4294967295,_=b+(I<<6&4294967295|I>>>26),I=C+(b^(_|~S))+A[3]+2399980690&4294967295,C=_+(I<<10&4294967295|I>>>22),I=S+(_^(C|~b))+A[10]+4293915773&4294967295,S=C+(I<<15&4294967295|I>>>17),I=b+(C^(S|~_))+A[1]+2240044497&4294967295,b=S+(I<<21&4294967295|I>>>11),I=_+(S^(b|~C))+A[8]+1873313359&4294967295,_=b+(I<<6&4294967295|I>>>26),I=C+(b^(_|~S))+A[15]+4264355552&4294967295,C=_+(I<<10&4294967295|I>>>22),I=S+(_^(C|~b))+A[6]+2734768916&4294967295,S=C+(I<<15&4294967295|I>>>17),I=b+(C^(S|~_))+A[13]+1309151649&4294967295,b=S+(I<<21&4294967295|I>>>11),I=_+(S^(b|~C))+A[4]+4149444226&4294967295,_=b+(I<<6&4294967295|I>>>26),I=C+(b^(_|~S))+A[11]+3174756917&4294967295,C=_+(I<<10&4294967295|I>>>22),I=S+(_^(C|~b))+A[2]+718787259&4294967295,S=C+(I<<15&4294967295|I>>>17),I=b+(C^(S|~_))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+S&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var b=_-this.blockSize,A=this.B,S=this.h,C=0;C<_;){if(S==0)for(;C<=b;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<_;)if(A[S++]=E.charCodeAt(C++),S==this.blockSize){s(this,A),S=0;break}}else for(;C<_;)if(A[S++]=E[C++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var b=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=b&255,b/=256;for(this.u(E),E=Array(16),_=b=0;4>_;++_)for(var A=0;32>A;A+=8)E[b++]=this.g[_]>>>A&255;return E};function i(E,_){var b=l;return Object.prototype.hasOwnProperty.call(b,E)?b[E]:b[E]=_(E)}function o(E,_){this.h=_;for(var b=[],A=!0,S=E.length-1;0<=S;S--){var C=E[S]|0;A&&C==_||(b[S]=C,A=!1)}this.g=b}var l={};function c(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return P(u(-E));for(var _=[],b=1,A=0;E>=b;A++)_[A]=E/b|0,b*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return P(d(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(_,8)),A=p,S=0;S<E.length;S+=8){var C=Math.min(8,E.length-S),I=parseInt(E.substring(S,S+C),_);8>C?(C=u(Math.pow(_,C)),A=A.j(C).add(u(I))):(A=A.j(b),A=A.add(u(I)))}return A}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-P(this).m();for(var E=0,_=1,b=0;b<this.g.length;b++){var A=this.i(b);E+=(0<=A?A:4294967296+A)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(N(this))return"-"+P(this).toString(E);for(var _=u(Math.pow(E,6)),b=this,A="";;){var S=H(b,_).g;b=k(b,S.j(_));var C=((0<b.g.length?b.g[0]:b.h)>>>0).toString(E);if(b=S,T(b))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=k(this,E),N(E)?-1:T(E)?0:1};function P(E){for(var _=E.g.length,b=[],A=0;A<_;A++)b[A]=~E.g[A];return new o(b,~E.h).add(m)}t.abs=function(){return N(this)?P(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),b=[],A=0,S=0;S<=_;S++){var C=A+(this.i(S)&65535)+(E.i(S)&65535),I=(C>>>16)+(this.i(S)>>>16)+(E.i(S)>>>16);A=I>>>16,C&=65535,I&=65535,b[S]=I<<16|C}return new o(b,b[b.length-1]&-2147483648?-1:0)};function k(E,_){return E.add(P(_))}t.j=function(E){if(T(this)||T(E))return p;if(N(this))return N(E)?P(this).j(P(E)):P(P(this).j(E));if(N(E))return P(this.j(P(E)));if(0>this.l(y)&&0>E.l(y))return u(this.m()*E.m());for(var _=this.g.length+E.g.length,b=[],A=0;A<2*_;A++)b[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<E.g.length;S++){var C=this.i(A)>>>16,I=this.i(A)&65535,Je=E.i(S)>>>16,We=E.i(S)&65535;b[2*A+2*S]+=I*We,O(b,2*A+2*S),b[2*A+2*S+1]+=C*We,O(b,2*A+2*S+1),b[2*A+2*S+1]+=I*Je,O(b,2*A+2*S+1),b[2*A+2*S+2]+=C*Je,O(b,2*A+2*S+2)}for(A=0;A<_;A++)b[A]=b[2*A+1]<<16|b[2*A];for(A=_;A<2*_;A++)b[A]=0;return new o(b,0)};function O(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function L(E,_){this.g=E,this.h=_}function H(E,_){if(T(_))throw Error("division by zero");if(T(E))return new L(p,p);if(N(E))return _=H(P(E),_),new L(P(_.g),P(_.h));if(N(_))return _=H(E,P(_)),new L(P(_.g),_.h);if(30<E.g.length){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var b=m,A=_;0>=A.l(E);)b=te(b),A=te(A);var S=q(b,1),C=q(A,1);for(A=q(A,2),b=q(b,2);!T(A);){var I=C.add(A);0>=I.l(E)&&(S=S.add(b),C=I),A=q(A,1),b=q(b,1)}return _=k(E,S.j(_)),new L(S,_)}for(S=p;0<=E.l(_);){for(b=Math.max(1,Math.floor(E.m()/_.m())),A=Math.ceil(Math.log(b)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(b),I=C.j(_);N(I)||0<I.l(E);)b-=A,C=u(b),I=C.j(_);T(C)&&(C=m),S=S.add(C),E=k(E,I)}return new L(S,E)}t.A=function(E){return H(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),b=[],A=0;A<_;A++)b[A]=this.i(A)&E.i(A);return new o(b,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),b=[],A=0;A<_;A++)b[A]=this.i(A)|E.i(A);return new o(b,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),b=[],A=0;A<_;A++)b[A]=this.i(A)^E.i(A);return new o(b,this.h^E.h)};function te(E){for(var _=E.g.length+1,b=[],A=0;A<_;A++)b[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(b,E.h)}function q(E,_){var b=_>>5;_%=32;for(var A=E.g.length-b,S=[],C=0;C<A;C++)S[C]=0<_?E.i(C+b)>>>_|E.i(C+b+1)<<32-_:E.i(C+b);return new o(S,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ls=o}).apply(typeof Bp!="undefined"?Bp:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Aa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var py,my,Yi,gy,Ua,Pu,_y,yy,vy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Aa=="object"&&Aa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var M=f++;return{value:h(M,a[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function T(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,M){for(var Y=Array(arguments.length-2),je=2;je<arguments.length;je++)Y[je-2]=arguments[je];return h.prototype[x].apply(g,Y)}}function N(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const x=a.length||0,M=g.length||0;a.length=x+M;for(let Y=0;Y<M;Y++)a[x+Y]=g[Y]}else a.push(g)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var te=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function q(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let M=0;M<b.length;M++)f=b[M],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function S(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=yt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Je{constructor(){this.h=this.g=null}add(h,f){const g=We.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var We=new k(()=>new ot,a=>a.reset());class ot{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,Ce=!1,yt=new Je,Dn=()=>{const a=l.Promise.resolve(void 0);xe=()=>{a.then(Zt)}};var Zt=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){C(f)}var h=We;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ce=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Ai=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function V(a,h){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(te){e:{try{H(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ie[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&V.aa.h.call(this)}}T(V,Fe);var ie={2:"touch",3:"pen",4:"mouse"};V.prototype.h=function(){V.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),oe=0;function Ue(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++oe,this.da=this.fa=!1}function Me(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,h,f,g,x){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var Y=w(a,h,g,x);return-1<Y?(h=a[Y],f||(h.fa=!1)):(h=new Ue(h,this.src,M,!!g,x),h.fa=f,a.push(h)),h};function ge(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=x)&&Array.prototype.splice.call(g,x,1),M&&(Me(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,h,f,g){for(var x=0;x<a.length;++x){var M=a[x];if(!M.da&&M.listener==h&&M.capture==!!f&&M.ha==g)return x}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function $(a,h,f,g,x){if(g&&g.once)return J(a,h,f,g,x);if(Array.isArray(h)){for(var M=0;M<h.length;M++)$(a,h[M],f,g,x);return null}return f=de(f),a&&a[G]?a.K(h,f,u(g)?!!g.capture:!!g,x):U(a,h,f,!1,g,x)}function U(a,h,f,g,x,M){if(!h)throw Error("Invalid event type");var Y=u(x)?!!x.capture:!!x,je=ne(a);if(je||(a[R]=je=new be(a)),f=je.add(h,f,g,Y,M),f.proxy)return f;if(g=K(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Ai||(x=Y),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(j(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function a(f){return h.call(a.src,a.listener,f)}const h=ce;return a}function J(a,h,f,g,x){if(Array.isArray(h)){for(var M=0;M<h.length;M++)J(a,h[M],f,g,x);return null}return f=de(f),a&&a[G]?a.L(h,f,u(g)?!!g.capture:!!g,x):U(a,h,f,!0,g,x)}function W(a,h,f,g,x){if(Array.isArray(h))for(var M=0;M<h.length;M++)W(a,h[M],f,g,x);else g=u(g)?!!g.capture:!!g,f=de(f),a&&a[G]?(a=a.i,h=String(h).toString(),h in a.g&&(M=a.g[h],f=w(M,f,g,x),-1<f&&(Me(M[f]),Array.prototype.splice.call(M,f,1),M.length==0&&(delete a.g[h],a.h--)))):a&&(a=ne(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,f,g,x)),(f=-1<a?h[a]:null)&&Q(f))}function Q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[G])ge(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(j(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ne(h))?(ge(f,a),f.h==0&&(f.src=null,h[R]=null)):Me(a)}}}function j(a){return a in D?D[a]:D[a]="on"+a}function ce(a,h){if(a.da)a=!0;else{h=new V(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Q(a),a=f.call(g,h)}return a}function ne(a){return a=a[R],a instanceof be?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function he(){ut.call(this),this.i=new be(this),this.M=this,this.F=null}T(he,ut),he.prototype[G]=!0,he.prototype.removeEventListener=function(a,h,f,g){W(this,a,h,f,g)};function we(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Fe(h,a);else if(h instanceof Fe)h.target=h.target||a;else{var x=h;h=new Fe(g,a),A(h,x)}if(x=!0,f)for(var M=f.length-1;0<=M;M--){var Y=h.g=f[M];x=Oe(Y,g,!0,h)&&x}if(Y=h.g=a,x=Oe(Y,g,!0,h)&&x,x=Oe(Y,g,!1,h)&&x,f)for(M=0;M<f.length;M++)Y=h.g=f[M],x=Oe(Y,g,!1,h)&&x}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Me(f[g]);delete a.g[h],a.h--}}this.F=null},he.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},he.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Oe(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,M=0;M<h.length;++M){var Y=h[M];if(Y&&!Y.da&&Y.capture==f){var je=Y.listener,wt=Y.ha||Y.src;Y.fa&&ge(a.i,Y),x=je.call(wt,g)!==!1&&x}}return x&&!g.defaultPrevented}function Be(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ft(a){a.g=Be(()=>{a.g=null,a.i&&(a.i=!1,Ft(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ir extends ut{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ft(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(a){ut.call(this),this.h=a,this.g={}}T(or,ut);var ar=[];function Si(a){q(a.g,function(h,f){this.g.hasOwnProperty(f)&&Q(h)},a),a.g={}}or.prototype.N=function(){or.aa.N.call(this),Si(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vt=l.JSON.stringify,Xt=l.JSON.parse,ia=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function mc(){}mc.prototype.h=null;function Yd(a){return a.h||(a.h=a.i())}function Xd(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gc(){Fe.call(this,"d")}T(gc,Fe);function _c(){Fe.call(this,"c")}T(_c,Fe);var Kr={},Jd=null;function oa(){return Jd=Jd||new he}Kr.La="serverreachability";function Zd(a){Fe.call(this,Kr.La,a)}T(Zd,Fe);function Pi(a){const h=oa();we(h,new Zd(h))}Kr.STAT_EVENT="statevent";function ef(a,h){Fe.call(this,Kr.STAT_EVENT,a),this.stat=h}T(ef,Fe);function Ot(a){const h=oa();we(h,new ef(h,a))}Kr.Ma="timingevent";function tf(a,h){Fe.call(this,Kr.Ma,a),this.size=h}T(tf,Fe);function ki(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function Fb(a,h,f,g,x,M){a.info(function(){if(a.g)if(M)for(var Y="",je=M.split("&"),wt=0;wt<je.length;wt++){var Ne=je[wt].split("=");if(1<Ne.length){var At=Ne[0];Ne=Ne[1];var St=At.split("_");Y=2<=St.length&&St[1]=="type"?Y+(At+"="+Ne+"&"):Y+(At+"=redacted&")}}else Y=null;else Y=M;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+Y})}function Ub(a,h,f,g,x,M,Y){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+M+" "+Y})}function Ps(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Bb(a,f)+(g?" "+g:"")})}function $b(a,h){a.info(function(){return"TIMEOUT: "+h})}Ci.prototype.info=function(){};function Bb(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var M=x[0];if(M!="noop"&&M!="stop"&&M!="close")for(var Y=1;Y<x.length;Y++)x[Y]=""}}}}return vt(f)}catch{return h}}var aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yc;function la(){}T(la,mc),la.prototype.g=function(){return new XMLHttpRequest},la.prototype.i=function(){return{}},yc=new la;function lr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new or(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rf}function rf(){this.i=null,this.g="",this.h=!1}var sf={},vc={};function wc(a,h,f){a.L=1,a.v=da(Mn(h)),a.m=f,a.P=!0,of(a,null)}function of(a,h){a.F=Date.now(),ca(a),a.A=Mn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),wf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new rf,a.g=Ff(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ir(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(ar[0]=x.toString()),x=ar);for(var M=0;M<x.length;M++){var Y=$(f,x[M],g||h.handleEvent,!1,h.h||h);if(!Y)break;h.g[Y.key]=Y}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Pi(),Fb(a.i,a.u,a.A,a.l,a.R,a.m)}lr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ln(a)==3?h.j():this.Y(a)},lr.prototype.Y=function(a){try{if(a==this.g)e:{const St=Ln(this.g);var h=this.g.Ba();const xs=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Rf(this.g)))){this.J||St!=4||h==7||(h==8||0>=xs?Pi(3):Pi(2)),bc(this);var f=this.g.Z();this.X=f;t:if(af(this)){var g=Rf(this.g);a="";var x=g.length,M=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Gr(this),xi(this);var Y="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(M&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=f==200,Ub(this.i,this.u,this.A,this.l,this.R,St,f),this.o){if(this.T&&!this.K){t:{if(this.g){var je,wt=this.g;if((je=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(je)){var Ne=je;break t}}Ne=null}if(f=Ne)Ps(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ec(this,f);else{this.o=!1,this.s=3,Ot(12),Gr(this),xi(this);break e}}if(this.P){f=!0;let en;for(;!this.J&&this.C<Y.length;)if(en=jb(this,Y),en==vc){St==4&&(this.s=4,Ot(14),f=!1),Ps(this.i,this.l,null,"[Incomplete Response]");break}else if(en==sf){this.s=4,Ot(15),Ps(this.i,this.l,Y,"[Invalid Chunk]"),f=!1;break}else Ps(this.i,this.l,en,null),Ec(this,en);if(af(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||Y.length!=0||this.h.h||(this.s=1,Ot(16),f=!1),this.o=this.o&&f,!f)Ps(this.i,this.l,Y,"[Invalid Chunked Response]"),Gr(this),xi(this);else if(0<Y.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Pc(At),At.M=!0,Ot(11))}}else Ps(this.i,this.l,Y,null),Ec(this,Y);St==4&&Gr(this),this.o&&!this.J&&(St==4?Df(this.j,this):(this.o=!1,ca(this)))}else i0(this.g),f==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Gr(this),xi(this)}}}catch{}finally{}};function af(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jb(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?vc:(f=Number(h.substring(f,g)),isNaN(f)?sf:(g+=1,g+f>h.length?vc:(h=h.slice(g,g+f),a.C=g+f,h)))}lr.prototype.cancel=function(){this.J=!0,Gr(this)};function ca(a){a.S=Date.now()+a.I,lf(a,a.I)}function lf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ki(m(a.ba,a),h)}function bc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}lr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($b(this.i,this.A),this.L!=2&&(Pi(),Ot(17)),Gr(this),this.s=2,xi(this)):lf(this,this.S-a)};function xi(a){a.j.G==0||a.J||Df(a.j,a)}function Gr(a){bc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Si(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ec(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ic(f.h,a))){if(!a.K&&Ic(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)_a(f),ma(f);else break e;Rc(f),Ot(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=ki(m(f.Za,f),6e3));if(1>=hf(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yr(f,11)}else if((a.K||f.g==a)&&_a(f),!O(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let Ne=x[h];if(f.T=Ne[0],Ne=Ne[1],f.G==2)if(Ne[0]=="c"){f.K=Ne[1],f.ia=Ne[2];const At=Ne[3];At!=null&&(f.la=At,f.j.info("VER="+f.la));const St=Ne[4];St!=null&&(f.Aa=St,f.j.info("SVER="+f.Aa));const xs=Ne[5];xs!=null&&typeof xs=="number"&&0<xs&&(g=1.5*xs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const en=a.g;if(en){const va=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var M=g.h;M.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Tc(M,M.h),M.h=null))}if(g.D){const kc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;kc&&(g.ya=kc,Ke(g.I,g.D,kc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var Y=a;if(g.qa=Vf(g,g.J?g.ia:null,g.W),Y.K){df(g.h,Y);var je=Y,wt=g.L;wt&&(je.I=wt),je.B&&(bc(je),ca(je)),g.g=Y}else Of(g);0<f.i.length&&ga(f)}else Ne[0]!="stop"&&Ne[0]!="close"||Yr(f,7);else f.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Yr(f,7):Sc(f):Ne[0]!="noop"&&f.l&&f.l.ta(Ne),f.v=0)}}Pi(4)}catch{}}var zb=class{constructor(a,h){this.g=a,this.map=h}};function cf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hf(a){return a.h?1:a.g?a.g.size:0}function Ic(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Tc(a,h){a.g?a.g.add(h):a.h=h}function df(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}cf.prototype.cancel=function(){if(this.i=ff(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ff(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return N(a.i)}function qb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map!="undefined"&&a instanceof Map||typeof Set!="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Hb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map!="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!="undefined"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function pf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Hb(a),g=qb(a),x=g.length,M=0;M<x;M++)h.call(void 0,g[M],f&&f[M],a)}var mf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wb(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var M=a[f].substring(0,g);x=a[f].substring(g+1)}else M=a[f];h(M,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ha(this,a.s),this.l=a.l;var h=a.i,f=new Di;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),gf(this,f),this.m=a.m}else a&&(h=String(a).match(mf))?(this.h=!1,ua(this,h[1]||"",!0),this.o=Oi(h[2]||""),this.g=Oi(h[3]||"",!0),ha(this,h[4]),this.l=Oi(h[5]||"",!0),gf(this,h[6]||"",!0),this.m=Oi(h[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}Qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ni(h,_f,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ni(h,_f,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ni(f,f.charAt(0)=="/"?Qb:Gb,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ni(f,Xb)),a.join("")};function Mn(a){return new Qr(a)}function ua(a,h,f){a.j=f?Oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ha(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function gf(a,h,f){h instanceof Di?(a.i=h,Jb(a.i,a.h)):(f||(h=Ni(h,Yb)),a.i=new Di(h,a.h))}function Ke(a,h,f){a.i.set(h,f)}function da(a){return Ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Kb),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Kb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _f=/[#\/\?@]/g,Gb=/[#\?:]/g,Qb=/[#\?]/g,Yb=/[#\?@]/g,Xb=/#/g;function Di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&Wb(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Di.prototype,t.add=function(a,h){cr(this),this.i=null,a=ks(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function yf(a,h){cr(a),h=ks(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function vf(a,h){return cr(a),h=ks(a,h),a.g.has(h)}t.forEach=function(a,h){cr(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let M=0;M<x.length;M++)f.push(h[g])}return f},t.V=function(a){cr(this);let h=[];if(typeof a=="string")vf(this,a)&&(h=h.concat(this.g.get(ks(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return cr(this),this.i=null,a=ks(this,a),vf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function wf(a,h,f){yf(a,h),0<f.length&&(a.i=null,a.g.set(ks(a,h),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const M=encodeURIComponent(String(g)),Y=this.V(g);for(g=0;g<Y.length;g++){var x=M;Y[g]!==""&&(x+="="+encodeURIComponent(String(Y[g]))),a.push(x)}}return this.i=a.join("&")};function ks(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Jb(a,h){h&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(yf(this,g),wf(this,x,f))},a)),a.j=h}function Zb(a,h){const f=new Ci;if(l.Image){const g=new Image;g.onload=y(ur,f,"TestLoadImage: loaded",!0,h,g),g.onerror=y(ur,f,"TestLoadImage: error",!1,h,g),g.onabort=y(ur,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(ur,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function e0(a,h){const f=new Ci,g=new AbortController,x=setTimeout(()=>{g.abort(),ur(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(M=>{clearTimeout(x),M.ok?ur(f,"TestPingServer: ok",!0,h):ur(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),ur(f,"TestPingServer: error",!1,h)})}function ur(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function t0(){this.g=new ia}function n0(a,h,f){const g=f||"";try{pf(a,function(x,M){let Y=x;u(x)&&(Y=vt(x)),h.push(g+M+"="+encodeURIComponent(Y))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function Mi(a){this.l=a.Ub||null,this.j=a.eb||!1}T(Mi,mc),Mi.prototype.g=function(){return new fa(this.l,this.j)},Mi.prototype.i=function(a){return function(){return a}}({});function fa(a,h){he.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(fa,he),t=fa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Li(this):Vi(this),this.readyState==3&&bf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Li(this))},t.Qa=function(a){this.g&&(this.response=a,Li(this))},t.ga=function(){this.g&&Li(this)};function Li(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ef(a){let h="";return q(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Ac(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Ef(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ke(a,h,f))}function Ze(a){he.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ze,he);var r0=/^https?$/i,s0=["POST","PUT"];t=Ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yc.g(),this.v=this.o?Yd(this.o):Yd(yc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){If(this,M);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())f.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(s0,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,Y]of f)this.g.setRequestHeader(M,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sf(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){If(this,M)}};function If(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Tf(a),pa(a)}function Tf(a){a.A||(a.A=!0,we(a,"complete"),we(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,we(this,"complete"),we(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Af(this):this.bb())},t.bb=function(){Af(this)};function Af(a){if(a.h&&typeof o!="undefined"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)Be(a.Ea,0,a);else if(we(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=Y===0){var x=String(a.D).match(mf)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!r0.test(x?x.toLowerCase():"")}f=g}if(f)we(a,"complete"),we(a,"success");else{a.m=6;try{var M=2<Ln(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",Tf(a)}}finally{pa(a)}}}}function pa(a,h){if(a.g){Sf(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||we(a,"ready");try{f.onreadystatechange=g}catch{}}}function Sf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xt(h)}};function Rf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function i0(a){const h={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(O(a[g]))continue;var f=S(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=h[x]||[];h[x]=M,M.push(f)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Pf(a){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fi("baseRetryDelayMs",5e3,a),this.cb=Fi("retryDelaySeedMs",1e4,a),this.Wa=Fi("forwardChannelMaxRetries",2,a),this.wa=Fi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new cf(a&&a.concurrentRequestLimit),this.Da=new t0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pf.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Ot(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Vf(this,null,this.W),ga(this)};function Sc(a){if(kf(a),a.G==3){var h=a.U++,f=Mn(a.I);if(Ke(f,"SID",a.K),Ke(f,"RID",h),Ke(f,"TYPE","terminate"),Ui(a,f),h=new lr(a,a.j,h),h.L=2,h.v=da(Mn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ff(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ca(h)}Lf(a)}function ma(a){a.g&&(Pc(a),a.g.cancel(),a.g=null)}function kf(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),_a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!uf(a.h)&&!a.s){a.s=!0;var h=a.Ga;xe||Dn(),Ce||(xe(),Ce=!0),yt.add(h,a),a.B=0}}function o0(a,h){return hf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ki(m(a.Ga,a,h),Mf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new lr(this,this.j,a);let M=this.o;if(this.S&&(M?(M=_(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(x.H=M,M=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=xf(this,x,h),f=Mn(this.I),Ke(f,"RID",a),Ke(f,"CVER",22),this.D&&Ke(f,"X-HTTP-Session-Id",this.D),Ui(this,f),M&&(this.O?h="headers="+encodeURIComponent(String(Ef(M)))+"&"+h:this.m&&Ac(f,this.m,M)),Tc(this.h,x),this.Ua&&Ke(f,"TYPE","init"),this.P?(Ke(f,"$req",h),Ke(f,"SID","null"),x.T=!0,wc(x,f,null)):wc(x,f,h),this.G=2}}else this.G==3&&(a?Cf(this,a):this.i.length==0||uf(this.h)||Cf(this))};function Cf(a,h){var f;h?f=h.l:f=a.U++;const g=Mn(a.I);Ke(g,"SID",a.K),Ke(g,"RID",f),Ke(g,"AID",a.T),Ui(a,g),a.m&&a.o&&Ac(g,a.m,a.o),f=new lr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=xf(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Tc(a.h,f),wc(f,g,h)}function Ui(a,h){a.H&&q(a.H,function(f,g){Ke(h,g,f)}),a.l&&pf({},function(f,g){Ke(h,g,f)})}function xf(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let M=-1;for(;;){const Y=["count="+f];M==-1?0<f?(M=x[0].g,Y.push("ofs="+M)):M=0:Y.push("ofs="+M);let je=!0;for(let wt=0;wt<f;wt++){let Ne=x[wt].g;const At=x[wt].map;if(Ne-=M,0>Ne)M=Math.max(0,x[wt].g-100),je=!1;else try{n0(At,Y,"req"+Ne+"_")}catch{g&&g(At)}}if(je){g=Y.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Of(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;xe||Dn(),Ce||(xe(),Ce=!0),yt.add(h,a),a.v=0}}function Rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ki(m(a.Fa,a),Mf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Nf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ki(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),ma(this),Nf(this))};function Pc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Nf(a){a.g=new lr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mn(a.qa);Ke(h,"RID","rpc"),Ke(h,"SID",a.K),Ke(h,"AID",a.T),Ke(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ke(h,"TO",a.ja),Ke(h,"TYPE","xmlhttp"),Ui(a,h),a.m&&a.o&&Ac(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=da(Mn(h)),f.m=null,f.P=!0,of(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),Rc(this),Ot(19))};function _a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Df(a,h){var f=null;if(a.g==h){_a(a),Pc(a),a.g=null;var g=2}else if(Ic(a.h,h))f=h.D,df(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=oa(),we(g,new tf(g,f)),ga(a)}else Of(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&o0(a,h)||g==2&&Rc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function Mf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Yr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new Qr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(g,"https"),da(g),x?Zb(g.toString(),f):e0(g.toString(),f)}else Ot(2);a.G=0,a.l&&a.l.sa(h),Lf(a),kf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Lf(a){if(a.G=0,a.ka=[],a.l){const h=ff(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Vf(a,h,f){var g=f instanceof Qr?Mn(f):new Qr(f);if(g.g!="")h&&(g.g=h+"."+g.g),ha(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var M=new Qr(null);g&&ua(M,g),h&&(M.g=h),x&&ha(M,x),f&&(M.l=f),g=M}return f=a.D,h=a.ya,f&&h&&Ke(g,f,h),Ke(g,"VER",a.la),Ui(a,g),g}function Ff(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ze(new Mi({eb:f})):new Ze(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uf(){}t=Uf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ya(){}ya.prototype.g=function(a,h){return new zt(a,h)};function zt(a,h){he.call(this),this.g=new Pf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Cs(this)}T(zt,he),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Sc(this.g)},zt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=vt(a),a=f);h.i.push(new zb(h.Ya++,a)),h.G==3&&ga(h)},zt.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,zt.aa.N.call(this)};function $f(a){gc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T($f,gc);function Bf(){_c.call(this),this.status=1}T(Bf,_c);function Cs(a){this.g=a}T(Cs,Uf),Cs.prototype.ua=function(){we(this.g,"a")},Cs.prototype.ta=function(a){we(this.g,new $f(a))},Cs.prototype.sa=function(a){we(this.g,new Bf)},Cs.prototype.ra=function(){we(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,vy=function(){return new ya},yy=function(){return oa()},_y=Kr,Pu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},aa.NO_ERROR=0,aa.TIMEOUT=8,aa.HTTP_ERROR=6,Ua=aa,nf.COMPLETE="complete",gy=nf,Xd.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",he.prototype.listen=he.prototype.K,Yi=Xd,my=Mi,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,py=Ze}).apply(typeof Aa!="undefined"?Aa:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const jp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new xh("@firebase/firestore");function ji(){return fs.logLevel}function re(t,...e){if(fs.logLevel<=Re.DEBUG){const n=e.map(Dh);fs.debug(`Firestore (${gi}): ${t}`,...n)}}function Gn(t,...e){if(fs.logLevel<=Re.ERROR){const n=e.map(Dh);fs.error(`Firestore (${gi}): ${t}`,...n)}}function ni(t,...e){if(fs.logLevel<=Re.WARN){const n=e.map(Dh);fs.warn(`Firestore (${gi}): ${t}`,...n)}}function Dh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${gi}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function He(t,e){t||pe()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class f1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class p1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class m1{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string"),new wy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string"),new Pt(e)}}class g1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new g1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string"),this.R=n.token,new y1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=w1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function De(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new dt(0,0))}static max(){return new _e(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ge extends Ro{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const b1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Ro{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return b1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ge.fromString(e))}static fromName(e){return new ue(Ge.fromString(e).popFirst(5))}static empty(){return new ue(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ge(e.slice()))}}function E1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new Fr(s,ue.empty(),e)}function I1(t){return new Fr(t.readTime,t.key,-1)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(_e.min(),ue.empty(),-1)}static max(){return new Fr(_e.max(),ue.empty(),-1)}}function T1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class S1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==A1)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function R1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mh.oe=-1;function jl(t){return t==null}function al(t){return t===0&&1/t==-1/0}function P1(t){return typeof t=="number"&&Number.isInteger(t)&&!al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ey(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:bt.RED,this.left=s!=null?s:bt.EMPTY,this.right=i!=null?i:bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new bt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qp(this.data.getIterator())}getIteratorFrom(e){return new qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new It(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new Iy("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const k1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(He(!!t),typeof t=="string"){let e=0;const n=k1.exec(t);if(He(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vh(t){const e=t.mapValue.fields.__previous_value__;return Lh(e)?Vh(e):e}function Po(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lh(t)?4:O1(t)?9007199254740991:x1(t)?10:11:pe()}function kn(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ur(s.timestampValue),l=Ur(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ps(s.bytesValue).isEqual(ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=at(s.doubleValue),l=at(i.doubleValue);return o===l?al(o)===al(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zp(o)!==zp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!kn(o[c],l[c])))return!1;return!0}(t,e);default:return pe()}}function Co(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=ms(t),r=ms(e);if(n!==r)return De(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=at(i.integerValue||i.doubleValue),c=at(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Hp(t.timestampValue,e.timestampValue);case 4:return Hp(Po(t),Po(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ps(i),c=ps(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=De(l[u],c[u]);if(d!==0)return d}return De(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=De(at(i.latitude),at(o.latitude));return l!==0?l:De(at(i.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,T=(c=m.value)===null||c===void 0?void 0:c.arrayValue,N=De(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Wp(y,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ra.mapValue&&o===Ra.mapValue)return 0;if(i===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=De(c[p],d[p]);if(m!==0)return m;const y=si(l[c[p]],u[d[p]]);if(y!==0)return y}return De(c.length,d.length)}(t.mapValue,e.mapValue);default:throw pe()}}function Hp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=Ur(t),r=Ur(e),s=De(n.seconds,r.seconds);return s!==0?s:De(n.nanos,r.nanos)}function Wp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=si(n[s],r[s]);if(i)return i}return De(n.length,r.length)}function ii(t){return ku(t)}function ku(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ku(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ku(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Kp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cu(t){return!!t&&"integerValue"in t}function Fh(t){return!!t&&"arrayValue"in t}function Gp(t){return!!t&&"nullValue"in t}function Qp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $a(t){return!!t&&"mapValue"in t}function x1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function O1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=Et.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=co(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(co(this.value))}}function Ty(t){const e=[];return Is(t.fields,(n,r)=>{const s=new Et([n]);if($a(r)){const i=Ty(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new kt(e,0,_e.min(),_e.min(),_e.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new kt(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new kt(e,2,n,_e.min(),_e.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,_e.min(),_e.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.position=e,this.inclusive=n}}function Yp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function N1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{}class ct extends Ay{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new M1(e,n,r):n==="array-contains"?new F1(e,r):n==="in"?new U1(e,r):n==="not-in"?new $1(e,r):n==="array-contains-any"?new B1(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new L1(e,r):new V1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Ay{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return Sy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sy(t){return t.op==="and"}function Ry(t){return D1(t)&&Sy(t)}function D1(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function xu(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+ii(t.value);if(Ry(t))return t.filters.map(e=>xu(e)).join(",");{const e=t.filters.map(n=>xu(n)).join(",");return`${t.op}(${e})`}}function Py(t,e){return t instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Py(o,s.filters[l]),!0):!1}(t,e):void pe()}function ky(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${ii(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(ky).join(" ,")+"}"}(t):"Filter"}class M1 extends ct{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class L1 extends ct{constructor(e,n){super(e,"in",n),this.keys=Cy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class V1 extends ct{constructor(e,n){super(e,"not-in",n),this.keys=Cy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class F1 extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fh(n)&&Co(n.arrayValue,this.value)}}class U1 extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class $1 extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class B1 extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Jp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new j1(t,e,n,r,s,i,o)}function Uh(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ii(r)).join(",")),e.ue=n}return e.ue}function $h(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!N1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Py(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xp(t.startAt,e.startAt)&&Xp(t.endAt,e.endAt)}function Ou(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function z1(t,e,n,r,s,i,o,l){return new _i(t,e,n,r,s,i,o,l)}function Bh(t){return new _i(t)}function Zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xy(t){return t.collectionGroup!==null}function uo(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new It(Et.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new xo(i,r))}),n.has(Et.keyField().canonicalString())||e.ce.push(new xo(Et.keyField(),r))}return e.ce}function Tn(t){const e=ve(t);return e.le||(e.le=q1(e,uo(t))),e.le}function q1(t,e){if(t.limitType==="F")return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xo(s.field,i)});const n=t.endAt?new ll(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ll(t.startAt.position,t.startAt.inclusive):null;return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nu(t,e){const n=t.filters.concat([e]);return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Du(t,e,n){return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zl(t,e){return $h(Tn(t),Tn(e))&&t.limitType===e.limitType}function Oy(t){return`${Uh(Tn(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ky(s)).join(", ")}]`),jl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ii(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ii(s)).join(",")),`Target(${r})`}(Tn(t))}; limitType=${t.limitType})`}function ql(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of uo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Yp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,uo(r),s)||r.endAt&&!function(o,l,c){const u=Yp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,uo(r),s))}(t,e)}function H1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ny(t){return(e,n)=>{let r=!1;for(const s of uo(t)){const i=W1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function W1(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?si(c,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ey(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=new Xe(ue.comparator);function Qn(){return K1}const Dy=new Xe(ue.comparator);function Xi(...t){let e=Dy;for(const n of t)e=e.insert(n.key,n);return e}function My(t){let e=Dy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function is(){return ho()}function Ly(){return ho()}function ho(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const G1=new Xe(ue.comparator),Q1=new It(ue.comparator);function Se(...t){let e=Q1;for(const n of t)e=e.add(n);return e}const Y1=new It(De);function X1(){return Y1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:al(e)?"-0":e}}function Vy(t){return{integerValue:""+t}}function Fy(t,e){return P1(e)?Vy(e):jh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this._=void 0}}function J1(t,e,n){return t instanceof cl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lh(i)&&(i=Vh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Oo?$y(t,e):t instanceof No?By(t,e):function(s,i){const o=Uy(s,i),l=em(o)+em(s.Pe);return Cu(o)&&Cu(s.Pe)?Vy(l):jh(s.serializer,l)}(t,e)}function Z1(t,e,n){return t instanceof Oo?$y(t,e):t instanceof No?By(t,e):n}function Uy(t,e){return t instanceof Do?function(r){return Cu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class cl extends Hl{}class Oo extends Hl{constructor(e){super(),this.elements=e}}function $y(t,e){const n=jy(e);for(const r of t.elements)n.some(s=>kn(s,r))||n.push(r);return{arrayValue:{values:n}}}class No extends Hl{constructor(e){super(),this.elements=e}}function By(t,e){let n=jy(e);for(const r of t.elements)n=n.filter(s=>!kn(s,r));return{arrayValue:{values:n}}}class Do extends Hl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function em(t){return at(t.integerValue||t.doubleValue)}function jy(t){return Fh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.field=e,this.transform=n}}function tS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oo&&s instanceof Oo||r instanceof No&&s instanceof No?ri(r.elements,s.elements,kn):r instanceof Do&&s instanceof Do?kn(r.Pe,s.Pe):r instanceof cl&&s instanceof cl}(t.transform,e.transform)}class nS{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wl{}function zy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hy(t.key,an.none()):new Ko(t.key,t.data,an.none());{const n=t.data,r=Bt.empty();let s=new It(Et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qr(t.key,r,new Ht(s.toArray()),an.none())}}function rS(t,e,n){t instanceof Ko?function(s,i,o){const l=s.value.clone(),c=nm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof qr?function(s,i,o){if(!Ba(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=nm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(qy(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fo(t,e,n,r){return t instanceof Ko?function(i,o,l,c){if(!Ba(i.precondition,o))return l;const u=i.value.clone(),d=rm(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof qr?function(i,o,l,c){if(!Ba(i.precondition,o))return l;const u=rm(i.fieldTransforms,c,o),d=o.data;return d.setAll(qy(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function sS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Uy(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ri(r,s,(i,o)=>tS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends Wl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qr extends Wl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nm(t,e,n){const r=new Map;He(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Z1(o,l,n[s]))}return r}function rm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,J1(i,o,e))}return r}class Hy extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iS extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ly();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=zy(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,r)=>tm(n,r))&&ri(this.baseMutations,e.baseMutations,(n,r)=>tm(n,r))}}class zh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length);let s=function(){return G1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Pe;function cS(t){switch(t){default:return pe();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Wy(t){if(t===void 0)return Gn("GRPC error has no .code"),F.UNKNOWN;switch(t){case lt.OK:return F.OK;case lt.CANCELLED:return F.CANCELLED;case lt.UNKNOWN:return F.UNKNOWN;case lt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case lt.INTERNAL:return F.INTERNAL;case lt.UNAVAILABLE:return F.UNAVAILABLE;case lt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case lt.NOT_FOUND:return F.NOT_FOUND;case lt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case lt.ABORTED:return F.ABORTED;case lt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case lt.DATA_LOSS:return F.DATA_LOSS;default:return pe()}}(Pe=lt||(lt={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new ls([4294967295,4294967295],0);function sm(t){const e=uS().encode(t),n=new fy;return n.update(e),new Uint8Array(n.digest())}function im(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ls([n,r],0),new ls([s,i],0)]}class qh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ji(`Invalid padding: ${n}`);if(r<0)throw new Ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ls.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ls.fromNumber(r)));return s.compare(hS)===1&&(s=new ls([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=sm(e),[r,s]=im(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=sm(e),[r,s]=im(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kl(_e.min(),s,new Xe(De),Qn(),Se())}}class Go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ky{constructor(e,n){this.targetId=e,this.me=n}}class Gy{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class om{constructor(){this.fe=0,this.ge=lm(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Se(),n=Se(),r=Se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Go(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=lm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,He(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=am(),this.Qe=new Xe(De)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ou(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,kt.newNoDocument(o,_e.min()))}else He(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ps(r).toUint8Array()}catch(c){if(c instanceof Iy)return ni("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qh(o,s,i)}catch(c){return ni(c instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Ou(l.target)){const c=new ue(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,kt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Se();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Kl(e,n,this.Qe,this.ke,r);return this.ke=Qn(),this.qe=am(),this.Qe=new Xe(De),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new om,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(De),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new om),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function am(){return new Xe(ue.comparator)}function lm(){return new Xe(ue.comparator)}const fS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mS=(()=>({and:"AND",or:"OR"}))();class gS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mu(t,e){return t.useProto3Json||jl(e)?e:{value:e}}function ul(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _S(t,e){return ul(t,e.toTimestamp())}function An(t){return He(!!t),_e.fromTimestamp(function(n){const r=Ur(n);return new dt(r.seconds,r.nanos)}(t))}function Hh(t,e){return Lu(t,e).canonicalString()}function Lu(t,e){const n=function(s){return new Ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Yy(t){const e=Ge.fromString(t);return He(tv(e)),e}function Vu(t,e){return Hh(t.databaseId,e.path)}function Bc(t,e){const n=Yy(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(Jy(n))}function Xy(t,e){return Hh(t.databaseId,e)}function yS(t){const e=Yy(t);return e.length===4?Ge.emptyPath():Jy(e)}function Fu(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jy(t){return He(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cm(t,e,n){return{name:Vu(t,e),fields:n.value.mapValue.fields}}function vS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(He(d===void 0||typeof d=="string"),Tt.fromBase64String(d||"")):(He(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?F.UNKNOWN:Wy(u.code);return new Z(d,u.message||"")}(o);n=new Gy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bc(t,r.document.name),i=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):_e.min(),l=new Bt({mapValue:{fields:r.document.fields}}),c=kt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ja(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bc(t,r.document),i=r.readTime?An(r.readTime):_e.min(),o=kt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ja([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bc(t,r.document),i=r.removedTargetIds||[];n=new ja([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lS(s,i),l=r.targetId;n=new Ky(l,o)}}return n}function wS(t,e){let n;if(e instanceof Ko)n={update:cm(t,e.key,e.value)};else if(e instanceof Hy)n={delete:Vu(t,e.key)};else if(e instanceof qr)n={update:cm(t,e.key,e.data),updateMask:kS(e.fieldMask)};else{if(!(e instanceof iS))return pe();n={verify:Vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof No)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_S(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function bS(t,e){return t&&t.length>0?(He(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?An(s.updateTime):An(i);return o.isEqual(_e.min())&&(o=An(i)),new nS(o,s.transformResults||[])}(n,e))):[]}function ES(t,e){return{documents:[Xy(t,e.path)]}}function IS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Xy(t,s);const i=function(u){if(u.length!==0)return ev(ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:$s(m.field),direction:SS(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function TS(t){let e=yS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Zy(p);return m instanceof ln&&Ry(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(T){return new xo(Bs(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,jl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new ll(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new ll(y,m)}(n.endAt)),z1(e,s,o,i,l,"F",c,u)}function AS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bs(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bs(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(Bs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>Zy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function SS(t){return fS[t]}function RS(t){return pS[t]}function PS(t){return mS[t]}function $s(t){return{fieldPath:t.canonicalString()}}function Bs(t){return Et.fromServerFormat(t.fieldPath)}function ev(t){return t instanceof ct?function(n){if(n.op==="=="){if(Qp(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NAN"}};if(Gp(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qp(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NAN"}};if(Gp(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(n.field),op:RS(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>ev(s));return r.length===1?r[0]:{compositeFilter:{op:PS(n.op),filters:r}}}(t):pe()}function kS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),l=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.ct=e}}function xS(t){const e=TS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.un=new NS}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Fr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class NS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new It(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new It(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new oi(0)}static kn(){return new oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&fo(r.mutation,s,Ht.empty(),dt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Xi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Qn();const o=ho(),l=function(){return ho()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof qr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),fo(d.mutation,u,d.mutation.getFieldMask(),dt.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new MS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ho();let s=new Xe((o,l)=>o-l),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Ht.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Se()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Ly();d.forEach(m=>{if(!i.has(m)){const y=zy(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(is());let l=-1,c=i;return o.next(u=>B.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Se())).next(d=>({batchId:l,changes:My(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=Xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Xi();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(p,m){return new _i(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,kt.newInvalidDocument(d)))});let l=Xi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&fo(d.mutation,u,Ht.empty(),dt.now()),ql(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:An(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:xS(s.bundledQuery),readTime:An(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.overlays=new Xe(ue.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=is();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=is(),i=n.length+1,o=new ue(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=is(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=is(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aS(n,r));let i=this.Ir.get(n);i===void 0&&(i=Se(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.Tr=new It(mt.Er),this.dr=new It(mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new mt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ue(new Ge([])),r=new mt(n,e),s=new mt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ue(new Ge([])),r=new mt(n,e),s=new mt(n,e+1);let i=Se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new mt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ue.comparator(e.key,n.key)||De(e.wr,n.wr)}static Ar(e,n){return De(e.wr,n.wr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new It(mt.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new mt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),s=new mt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(De);return n.forEach(s=>{const i=new mt(s,0),o=new mt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new mt(new ue(i),0);let l=new It(De);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new mt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new mt(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.Mr=e,this.docs=function(){return new Xe(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,l=new ue(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||T1(I1(d),r)<=0||(s.has(d.key)||ql(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jS(this)}getSize(e){return B.resolve(this.size)}}class jS extends DS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.persistence=e,this.Nr=new yi(n=>Uh(n),$h),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wh,this.targetCount=0,this.kr=oi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Mh(0),this.Kr=!1,this.Kr=!0,this.$r=new US,this.referenceDelegate=e(this),this.Ur=new zS(this),this.indexManager=new OS,this.remoteDocumentCache=function(s){return new BS(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new CS(n),this.Gr=new VS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $S(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new HS(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class HS extends S1{constructor(e){super(),this.currentSequenceNumber=e}}class Kh{constructor(e){this.persistence=e,this.Jr=new Wh,this.Yr=null}static Zr(e){return new Kh(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=ue.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return XT()?8:R1(xt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new WS;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ji()<=Re.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(ji()<=Re.DEBUG&&re("QueryEngine","Query:",Us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ji()<=Re.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):B.resolve())}Yi(e,n){if(Zp(n))return B.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Du(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Du(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Zp(n)||s.isEqual(_e.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(ji()<=Re.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Us(n)),this.rs(e,o,n,E1(s,-1)).next(l=>l))})}ts(e,n){let r=new It(Ny(e));return n.forEach((s,i)=>{ql(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ji()<=Re.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Us(n)),this.Ji.getDocumentsMatchingQuery(e,n,Fr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Xe(De),this._s=new yi(i=>Uh(i),$h),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function QS(t,e,n,r){return new GS(t,e,n,r)}async function nv(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Se();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function YS(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let y=B.resolve();return m.forEach(T=>{y=y.next(()=>d.getEntry(c,T)).next(N=>{const P=u.docVersions.get(T);He(P!==null),N.version.compareTo(P)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function rv(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function XS(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(Tt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(N,P,k){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,y,d)&&l.push(n.Ur.updateTargetData(i,y))});let c=Qn(),u=Se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(JS(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(_e.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function JS(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):re("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function ZS(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eR(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Uu(t,e,n){const r=ve(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wo(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function um(t,e,n){const r=ve(t);let s=_e.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ve(c),m=p._s.get(d);return m!==void 0?B.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(r,o,Tn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Se())).next(l=>(tR(r,H1(e),l),{documents:l,Ts:i})))}function tR(t,e,n){let r=t.us.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class hm{constructor(){this.activeTargetIds=X1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nR{constructor(){this.so=new hm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa=null;function jc(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class oR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=jc(),c=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(d=>(re("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ni("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=sR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=jc();return new Promise((o,l)=>{const c=new py;c.setWithCredentials(!0),c.listenOnce(gy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ua.NO_ERROR:const d=c.getResponseJson();re(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ua.TIMEOUT:re(Rt,`RPC '${e}' ${i} timed out`),l(new Z(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ua.HTTP_ERROR:const p=c.getStatus();if(re(Rt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const T=function(P){const k=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(k)>=0?k:F.UNKNOWN}(y.status);l(new Z(T,y.message))}else l(new Z(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(F.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{re(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);re(Rt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=jc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vy(),l=yy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new my({})),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");re(Rt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,y=!1;const T=new iR({Io:P=>{y?re(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(re(Rt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),re(Rt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},To:()=>p.close()}),N=(P,k,O)=>{P.listen(k,L=>{try{O(L)}catch(H){setTimeout(()=>{throw H},0)}})};return N(p,Yi.EventType.OPEN,()=>{y||(re(Rt,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),N(p,Yi.EventType.CLOSE,()=>{y||(y=!0,re(Rt,`RPC '${e}' stream ${s} transport closed`),T.So())}),N(p,Yi.EventType.ERROR,P=>{y||(y=!0,ni(Rt,`RPC '${e}' stream ${s} transport errored:`,P),T.So(new Z(F.UNAVAILABLE,"The operation could not be completed")))}),N(p,Yi.EventType.MESSAGE,P=>{var k;if(!y){const O=P.data[0];He(!!O);const L=O,H=L.error||((k=L[0])===null||k===void 0?void 0:k.error);if(H){re(Rt,`RPC '${e}' stream ${s} received error:`,H);const te=H.status;let q=function(b){const A=lt[b];if(A!==void 0)return Wy(A)}(te),E=H.message;q===void 0&&(q=F.INTERNAL,E="Unknown error status: "+te+" with message "+H.message),y=!0,T.So(new Z(q,E)),p.close()}else re(Rt,`RPC '${e}' stream ${s} received:`,O),T.bo(O)}}),N(l,_y.STAT_EVENT,P=>{P.stat===Pu.PROXY?re(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Pu.NOPROXY&&re(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function zc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new gS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sv(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aR extends iv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=vS(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?An(o.readTime):_e.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Fu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Ou(c)?{documents:ES(i,c)}:{query:IS(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Qy(i,o.resumeToken);const u=Mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){l.readTime=ul(i,o.snapshotVersion.toTimestamp());const u=Mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=AS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Fu(this.serializer),n.removeTarget=e,this.a_(n)}}class lR extends iv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return He(!!e.streamToken),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){He(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=bS(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Fu(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wS(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Lu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Lu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gn(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ts(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.L_.add(4),await Qo(u),u.q_.set("Unknown"),u.L_.delete(4),await Ql(u)}(this))})}),this.q_=new uR(r,s)}}async function Ql(t){if(Ts(t))for(const e of t.B_)await e(!0)}async function Qo(t){for(const e of t.B_)await e(!1)}function ov(t,e){const n=ve(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jh(n)?Xh(n):vi(n).r_()&&Yh(n,e))}function Qh(t,e){const n=ve(t),r=vi(n);n.N_.delete(e),r.r_()&&av(n,e),n.N_.size===0&&(r.r_()?r.o_():Ts(n)&&n.q_.set("Unknown"))}function Yh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vi(t).A_(e)}function av(t,e){t.Q_.xe(e),vi(t).R_(e)}function Xh(t){t.Q_=new dS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),vi(t).start(),t.q_.v_()}function Jh(t){return Ts(t)&&!vi(t).n_()&&t.N_.size>0}function Ts(t){return ve(t).L_.size===0}function lv(t){t.Q_=void 0}async function dR(t){t.q_.set("Online")}async function fR(t){t.N_.forEach((e,n)=>{Yh(t,e)})}async function pR(t,e){lv(t),Jh(t)?(t.q_.M_(e),Xh(t)):t.q_.set("Unknown")}async function mR(t,e,n){if(t.q_.set("Online"),e instanceof Gy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hl(t,r)}else if(e instanceof ja?t.Q_.Ke(e):e instanceof Ky?t.Q_.He(e):t.Q_.We(e),!n.isEqual(_e.min()))try{const r=await rv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(Tt.EMPTY_BYTE_STRING,d.snapshotVersion)),av(i,c);const p=new Tr(d.target,c,u,d.sequenceNumber);Yh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await hl(t,r)}}async function hl(t,e,n){if(!Wo(e))throw e;t.L_.add(1),await Qo(t),t.q_.set("Offline"),n||(n=()=>rv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ql(t)})}function cv(t,e){return e().catch(n=>hl(t,n,e))}async function Yl(t){const e=ve(t),n=$r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;gR(e);)try{const s=await ZS(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,_R(e,s)}catch(s){await hl(e,s)}uv(e)&&hv(e)}function gR(t){return Ts(t)&&t.O_.length<10}function _R(t,e){t.O_.push(e);const n=$r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function uv(t){return Ts(t)&&!$r(t).n_()&&t.O_.length>0}function hv(t){$r(t).start()}async function yR(t){$r(t).p_()}async function vR(t){const e=$r(t);for(const n of t.O_)e.m_(n.mutations)}async function wR(t,e,n){const r=t.O_.shift(),s=zh.from(r,e,n);await cv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Yl(t)}async function bR(t,e){e&&$r(t).V_&&await async function(r,s){if(function(o){return cS(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();$r(r).s_(),await cv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yl(r)}}(t,e),uv(t)&&hv(t)}async function fm(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=Ts(n);n.L_.add(3),await Qo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ql(n)}async function ER(t,e){const n=ve(t);e?(n.L_.delete(2),await Ql(n)):e||(n.L_.add(2),await Qo(n),n.q_.set("Unknown"))}function vi(t){return t.K_||(t.K_=function(n,r,s){const i=ve(n);return i.w_(),new aR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:dR.bind(null,t),Ro:fR.bind(null,t),mo:pR.bind(null,t),d_:mR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jh(t)?Xh(t):t.q_.set("Unknown")):(await t.K_.stop(),lv(t))})),t.K_}function $r(t){return t.U_||(t.U_=function(n,r,s){const i=ve(n);return i.w_(),new lR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yR.bind(null,t),mo:bR.bind(null,t),f_:vR.bind(null,t),g_:wR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Yl(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Zh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ed(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Wo(t))return new Z(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.W_=new Xe(ue.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ai(e,n,Ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class TR{constructor(){this.queries=mm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=mm(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Z(F.ABORTED,"Firestore shutting down"))}}function mm(){return new yi(t=>Oy(t),zl)}async function dv(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new IR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ed(o,`Initialization of query '${Us(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&td(n)}async function fv(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AR(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&td(n)}function SR(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function td(t){t.Y_.forEach(e=>{e.next()})}var $u,gm;(gm=$u||($u={})).ea="default",gm.Cache="cache";class pv{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.key=e}}class gv{constructor(e){this.key=e}}class RR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Se(),this.mutatedKeys=Se(),this.Aa=Ny(e),this.Ra=new Ws(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new pm,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),y=ql(this.query,p)?p:null,T=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;m&&y?m.data.isEqual(y.data)?T!==N&&(r.track({type:3,doc:y}),P=!0):this.ga(m,y)||(r.track({type:2,doc:y}),P=!0,(c&&this.Aa(y,c)>0||u&&this.Aa(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),P=!0):m&&!y&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(y?(o=o.add(y),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(y,T){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return N(y)-N(T)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new ai(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new gv(r))}),this.da.forEach(r=>{e.has(r)||n.push(new mv(r))}),n}ba(e){this.Ta=e.Ts,this.da=Se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ai.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class PR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kR{constructor(e){this.key=e,this.va=!1}}class CR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new yi(l=>Oy(l),zl),this.Ma=new Map,this.xa=new Set,this.Oa=new Xe(ue.comparator),this.Na=new Map,this.La=new Wh,this.Ba={},this.ka=new Map,this.qa=oi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function xR(t,e,n=!0){const r=Ev(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await _v(r,e,n,!0),s}async function OR(t,e){const n=Ev(t);await _v(n,e,!0,!1)}async function _v(t,e,n,r){const s=await eR(t.localStore,Tn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await NR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ov(t.remoteStore,s),l}async function NR(t,e,n,r,s){t.Ka=(p,m,y)=>async function(N,P,k,O){let L=P.view.ma(k);L.ns&&(L=await um(N.localStore,P.query,!1).then(({documents:E})=>P.view.ma(E,L)));const H=O&&O.targetChanges.get(P.targetId),te=O&&O.targetMismatches.get(P.targetId)!=null,q=P.view.applyChanges(L,N.isPrimaryClient,H,te);return ym(N,P.targetId,q.wa),q.snapshot}(t,p,m,y);const i=await um(t.localStore,e,!0),o=new RR(e,i.Ts),l=o.ma(i.documents),c=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);ym(t,n,u.wa);const d=new PR(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function DR(t,e,n){const r=ve(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!zl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Qh(r.remoteStore,s.targetId),Bu(r,s.targetId)}).catch(Ho)):(Bu(r,s.targetId),await Uu(r.localStore,s.targetId,!0))}async function MR(t,e){const n=ve(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qh(n.remoteStore,r.targetId))}async function LR(t,e,n){const r=zR(t);try{const s=await function(o,l){const c=ve(o),u=dt.now(),d=l.reduce((y,T)=>y.add(T.key),Se());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let T=Qn(),N=Se();return c.cs.getEntries(y,d).next(P=>{T=P,T.forEach((k,O)=>{O.isValidDocument()||(N=N.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,T)).next(P=>{p=P;const k=[];for(const O of l){const L=sS(O,p.get(O.key).overlayedDocument);L!=null&&k.push(new qr(O.key,L,Ty(L.value.mapValue),an.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,k,l)}).next(P=>{m=P;const k=P.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(y,P.batchId,k)})}).then(()=>({batchId:m.batchId,changes:My(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Xe(De)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Yo(r,s.changes),await Yl(r.remoteStore)}catch(s){const i=ed(s,"Failed to persist write");n.reject(i)}}async function yv(t,e){const n=ve(t);try{const r=await XS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?He(o.va):s.removedDocuments.size>0&&(He(o.va),o.va=!1))}),await Yo(n,r,e)}catch(r){await Ho(r)}}function _m(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ve(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&td(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VR(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Xe(ue.comparator);o=o.insert(i,kt.newNoDocument(i,_e.min()));const l=Se().add(i),c=new Kl(_e.min(),new Map,new Xe(De),o,l);await yv(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),nd(r)}else await Uu(r.localStore,e,!1).then(()=>Bu(r,e,n)).catch(Ho)}async function FR(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await YS(n.localStore,e);wv(n,r,null),vv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,s)}catch(s){await Ho(s)}}async function UR(t,e,n){const r=ve(t);try{const s=await function(o,l){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(He(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);wv(r,e,n),vv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,s)}catch(s){await Ho(s)}}function vv(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function wv(t,e,n){const r=ve(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||bv(t,r)})}function bv(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Qh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),nd(t))}function ym(t,e,n){for(const r of n)r instanceof mv?(t.La.addReference(r.key,e),$R(t,r)):r instanceof gv?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||bv(t,r.key)):pe()}function $R(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),nd(t))}function nd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ue(Ge.fromString(e)),r=t.qa.next();t.Na.set(r,new kR(n)),t.Oa=t.Oa.insert(n,r),ov(t.remoteStore,new Tr(Tn(Bh(n.path)),r,"TargetPurposeLimboResolution",Mh.oe))}}async function Yo(t,e,n){const r=ve(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Gh.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const d=ve(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,m=>B.forEach(m.$i,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>B.forEach(m.Ui,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Wo(p))throw p;re("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=d.os.get(m),T=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(m,N)}}}(r.localStore,i))}async function BR(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await nv(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Z(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.hs)}}function jR(t,e){const n=ve(t),r=n.Na.get(e);if(r&&r.va)return Se().add(r.key);{let s=Se();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Ev(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VR.bind(null,e),e.Ca.d_=AR.bind(null,e.eventManager),e.Ca.$a=SR.bind(null,e.eventManager),e}function zR(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UR.bind(null,e),e}class vm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return QS(this.persistence,new KS,e.initialUser,this.serializer)}createPersistence(e){return new qS(Kh.Zr,this.serializer)}createSharedClientState(e){return new nR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_m(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BR.bind(null,this.syncEngine),await ER(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TR}()}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=function(i){return new oR(i)}(e.databaseInfo);return function(i,o,l,c){return new cR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new hR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_m(this.syncEngine,n,0),function(){return dm.D()?new dm:new rR}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new CR(s,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Qo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=by.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{re("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(re("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ed(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qc(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KR(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fm(e.remoteStore,s)),t._onlineComponents=e}function WR(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!WR(n))throw n;ni("Error using user provided cache. Falling back to memory cache: "+n),await qc(t,new vm)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await qc(t,new vm);return t._offlineComponents}async function Tv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await wm(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await wm(t,new qR))),t._onlineComponents}function GR(t){return Tv(t).then(e=>e.syncEngine)}async function Av(t){const e=await Tv(t),n=e.eventManager;return n.onListen=xR.bind(null,e.syncEngine),n.onUnlisten=DR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MR.bind(null,e.syncEngine),n}function QR(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Iv({next:m=>{o.enqueueAndForget(()=>fv(i,p));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new Z(F.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new Z(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new pv(Bh(l.path),d,{includeMetadataChanges:!0,_a:!0});return dv(i,p)}(await Av(t),t.asyncQueue,e,n,r)),r.promise}function YR(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Iv({next:m=>{o.enqueueAndForget(()=>fv(i,p)),m.fromCache&&c.source==="server"?u.reject(new Z(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new pv(l,d,{includeMetadataChanges:!0,_a:!0});return dv(i,p)}(await Av(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e,n){if(!n)throw new Z(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XR(t,e,n,r){if(e===!0&&r===!0)throw new Z(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Em(t){if(!ue.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Im(t){if(ue.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function Cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xl(t);throw new Z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new f1;switch(r.type){case"firstParty":return new _1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bm.get(n);r&&(re("ComponentProvider","Removing Datastore"),bm.delete(n),r.terminate())}(this),Promise.resolve()}}function JR(t,e,n,r={}){var s;const i=(t=Cn(t,Jl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Pt.MOCK_USER;else{l=ay(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pt(u)}t._authCredentials=new p1(new wy(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new As(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Or extends As{constructor(e,n,r){super(e,n,Bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new ue(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function Xo(t,e,...n){if(t=rt(t),Rv("collection","path",e),t instanceof Jl){const r=Ge.fromString(e,...n);return Im(r),new Or(t,null,r)}{if(!(t instanceof Lt||t instanceof Or))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Im(r),new Or(t.firestore,null,r)}}function wi(t,e,...n){if(t=rt(t),arguments.length===1&&(e=by.newId()),Rv("doc","path",e),t instanceof Jl){const r=Ge.fromString(e,...n);return Em(r),new Lt(t,null,new ue(r))}{if(!(t instanceof Lt||t instanceof Or))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Em(r),new Lt(t.firestore,t instanceof Or?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new sv(this,"async_queue_retry"),this.Eu=()=>{const n=zc();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new qn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Wo(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Zh.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&pe()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class bi extends Jl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new ZR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pv(this),this._firestoreClient.terminate()}}function eP(t,e){const n=typeof t=="object"?t:Nh(),r=typeof t=="string"?t:e||"(default)",s=Bl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sy("firestore");i&&JR(s,...i)}return s}function rd(t){return t._firestoreClient||Pv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pv(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new C1(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Sv(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new HR(t._authCredentials,t._appCheckCredentials,t._queue,i),((n=s.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=s.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new li(Tt.fromBase64String(e))}catch(n){throw new Z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new li(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=/^__.*__$/;class nP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class kv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Cv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class od{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return dl(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Cv(this.wu)&&tP.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class rP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gl(e)}Nu(e,n,r,s=!1){return new od({wu:e,methodName:n,Ou:r,path:Et.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tc(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new rP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xv(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);ld("Data must be an object, but it was:",o,r);const l=Ov(r,o);let c,u;if(i.merge)c=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ju(e,p,n);if(!o.contains(m))throw new Z(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Dv(d,m)||d.push(m)}c=new Ht(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new nP(new Bt(l),c,u)}class nc extends ec{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}class ad extends ec{constructor(e,n){super(e),this.Bu=n}_toFieldTransform(e){const n=new Do(e.serializer,Fy(e.serializer,this.Bu));return new eS(e.path,n)}isEqual(e){return e instanceof ad&&this.Bu===e.Bu}}function sP(t,e,n,r){const s=t.Nu(1,e,n);ld("Data must be an object, but it was:",s,r);const i=[],o=Bt.empty();Is(r,(c,u)=>{const d=cd(e,c,n);u=rt(u);const p=s.Cu(d);if(u instanceof nc)i.push(d);else{const m=Jo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Ht(i);return new kv(o,l,s.fieldTransforms)}function iP(t,e,n,r,s,i){const o=t.Nu(1,e,n),l=[ju(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ju(e,i[m])),c.push(i[m+1]);const u=[],d=Bt.empty();for(let m=l.length-1;m>=0;--m)if(!Dv(u,l[m])){const y=l[m];let T=c[m];T=rt(T);const N=o.Cu(y);if(T instanceof nc)u.push(y);else{const P=Jo(T,N);P!=null&&(u.push(y),d.set(y,P))}}const p=new Ht(u);return new kv(d,p,o.fieldTransforms)}function oP(t,e,n,r=!1){return Jo(n,t.Nu(r?4:3,e))}function Jo(t,e){if(Nv(t=rt(t)))return ld("Unsupported field value:",e,t),Ov(t,e);if(t instanceof ec)return function(r,s){if(!Cv(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Jo(l,s.Fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=dt.fromDate(r);return{timestampValue:ul(s.serializer,i)}}if(r instanceof dt){const i=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ul(s.serializer,i)}}if(r instanceof sd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof li)return{bytesValue:Qy(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof id)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Mu("VectorValues must only contain numeric values.");return jh(l.serializer,c)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Xl(r)}`)}(t,e)}function Ov(t,e){const n={};return Ey(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,s)=>{const i=Jo(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Nv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof sd||t instanceof li||t instanceof Lt||t instanceof ec||t instanceof id)}function ld(t,e,n){if(!Nv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xl(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function ju(t,e,n){if((e=rt(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return cd(t,e);throw dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const aP=new RegExp("[~\\*/\\[\\]]");function cd(t,e,n){if(e.search(aP)>=0)throw dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zl(...e.split("."))._internalPath}catch{throw dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(F.INVALID_ARGUMENT,l+t+c)}function Dv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lP extends Mv{data(){return super.data()}}function rc(t,e){return typeof e=="string"?cd(t,e):e instanceof Zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ud{}class Lv extends ud{}function hd(t,e,...n){let r=[];e instanceof ud&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof dd).length,l=i.filter(c=>c instanceof sc).length;if(o>1||o>0&&l>0)throw new Z(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sc extends Lv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sc(e,n,r)}_apply(e){const n=this._parse(e);return Fv(e._query,n),new As(e.firestore,e.converter,Nu(e._query,n))}_parse(e){const n=tc(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Sm(p,d);const y=[];for(const T of p)y.push(Am(c,i,T));m={arrayValue:{values:y}}}else m=Am(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Sm(p,d),m=oP(l,o,p,d==="in"||d==="not-in");return ct.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Vv(t,e,n){const r=e,s=rc("where",t);return sc._create(s,r,n)}class dd extends ud{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Fv(o,c),o=Nu(o,c)}(e._query,n),new As(e.firestore,e.converter,Nu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fd extends Lv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xo(i,o)}(e._query,this._field,this._direction);return new As(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new _i(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function uP(t,e="asc"){const n=e,r=rc("orderBy",t);return fd._create(r,n)}function Am(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xy(e)&&n.indexOf("/")!==-1)throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ge.fromString(n));if(!ue.isDocumentKey(r))throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kp(t,new ue(r))}if(n instanceof Lt)return Kp(t,n._key);throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xl(n)}.`)}function Sm(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fv(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hP{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>at(o.doubleValue));return new id(i)}convertGeoPoint(e){return new sd(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);He(tv(r));const s=new ko(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $v extends Mv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class za extends $v{data(e={}){return super.data(e)}}class dP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new za(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new za(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new za(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:fP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){t=Cn(t,Lt);const e=Cn(t.firestore,bi);return QR(rd(e),t._key).then(n=>mP(e,t,n))}class jv extends hP{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function pd(t){t=Cn(t,As);const e=Cn(t.firestore,bi),n=rd(e),r=new jv(e);return cP(t._query),YR(n,t._query).then(s=>new dP(e,r,t,s))}function pP(t,e,n){t=Cn(t,Lt);const r=Cn(t.firestore,bi),s=Uv(t.converter,e,n);return gd(r,[xv(tc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function md(t,e,n,...r){t=Cn(t,Lt);const s=Cn(t.firestore,bi),i=tc(s);let o;return o=typeof(e=rt(e))=="string"||e instanceof Zl?iP(i,"updateDoc",t._key,e,n,r):sP(i,"updateDoc",t._key,e),gd(s,[o.toMutation(t._key,an.exists(!0))])}function zv(t,e){const n=Cn(t.firestore,bi),r=wi(t),s=Uv(t.converter,e);return gd(n,[xv(tc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function gd(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>LR(await GR(r),s,i)),i.promise}(rd(t),e)}function mP(t,e,n){const r=n.docs.get(e._key),s=new jv(t);return new $v(t,s,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}function qv(t){return new ad("increment",t)}(function(e,n=!0){(function(s){gi=s})(Es),ds(new Vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new bi(new m1(r.getProvider("auth-internal")),new v1(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),In(jp,"4.7.0",e),In(jp,"4.7.0","esm2017")})();var gP="firebase",_P="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(gP,_P,"app");const yP={apiKey:"AIzaSyBO0gbfTSSJLM2pBA3u_DMBYb_lCG1fDT0",authDomain:"photo-spot-396bf.firebaseapp.com",projectId:"photo-spot-396bf",storageBucket:"photo-spot-396bf.appspot.com",messagingSenderId:"1081309970781",appId:"1:1081309970781:web:864a3e6356442e8acf68b4",measurementId:"G-7774YPG6XC"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firebasestorage.googleapis.com",Wv="storageBucket",vP=2*60*1e3,wP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends On{constructor(e,n,r=0){super(Hc(e),`Firebase Storage: ${n} (${Hc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function Hc(t){return"storage/"+t}function _d(){const t="An unknown error occurred, please check the error payload for server response.";return new it(st.UNKNOWN,t)}function bP(t){return new it(st.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function EP(t){return new it(st.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(st.UNAUTHENTICATED,t)}function TP(){return new it(st.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AP(t){return new it(st.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function SP(){return new it(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RP(){return new it(st.CANCELED,"User canceled the upload/download.")}function PP(t){return new it(st.INVALID_URL,"Invalid URL '"+t+"'.")}function kP(t){return new it(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function CP(){return new it(st.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wv+"' property when initializing the app?")}function xP(){return new it(st.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OP(){return new it(st.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NP(t){return new it(st.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zu(t){return new it(st.INVALID_ARGUMENT,t)}function Kv(){return new it(st.APP_DELETED,"The Firebase app was deleted.")}function DP(t){return new it(st.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function po(t,e){return new it(st.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function zi(t){throw new it(st.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw kP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),T={bucket:1,path:3},N=n===Hv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",k=new RegExp(`^https?://${N}/${s}/${P}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:y,indices:T,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<L.length;H++){const te=L[H],q=te.regex.exec(e);if(q){const E=q[te.indices.bucket];let _=q[te.indices.path];_||(_=""),r=new Wt(E,_),te.postModify(r);break}}if(r==null)throw PP(e);return r}}class MP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...P){u||(u=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,t(y,c())},P)}function m(){i&&clearTimeout(i)}function y(P,...k){if(u){m();return}if(P){m(),d.call(null,P,...k);return}if(c()||o){m(),d.call(null,P,...k);return}r<64&&(r*=2);let L;l===1?(l=2,L=0):L=(r+Math.random())*1e3,p(L)}let T=!1;function N(P){T||(T=!0,m(),!u&&(s!==null?(P||(l=2),clearTimeout(s),p(0)):P||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function VP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){return t!==void 0}function UP(t){return typeof t=="object"&&!Array.isArray(t)}function yd(t){return typeof t=="string"||t instanceof String}function Rm(t){return vd()&&t instanceof Blob}function vd(){return typeof Blob!="undefined"}function Pm(t,e,n,r){if(r<e)throw zu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Gv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var cs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cs||(cs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n,r,s,i,o,l,c,u,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,T)=>{this.resolve_=y,this.reject_=T,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ka(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===cs.NO_ERROR,c=i.getStatus();if(!l||$P(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===cs.ABORT;r(!1,new ka(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new ka(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());FP(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=_d();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Kv():RP();o(c)}else{const c=SP();o(c)}};this.canceled_?n(!1,new ka(!1,null,!0)):this.backoffId_=LP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function jP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function qP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WP(t,e,n,r,s,i,o=!0){const l=Gv(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return qP(u,e),jP(u,n),zP(u,i),HP(u,r),new BP(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function GP(...t){const e=KP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vd())return new Blob(t);throw new it(st.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){if(typeof atob=="undefined")throw NP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wc{constructor(e,n){this.data=e,this.contentType=n||null}}function XP(t,e){switch(t){case yn.RAW:return new Wc(Qv(e));case yn.BASE64:case yn.BASE64URL:return new Wc(Yv(t,e));case yn.DATA_URL:return new Wc(ZP(e),ek(e))}throw _d()}function Qv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JP(t){let e;try{e=decodeURIComponent(t)}catch{throw po(yn.DATA_URL,"Malformed data URL.")}return Qv(e)}function Yv(t,e){switch(t){case yn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw po(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw po(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=YP(e)}catch(s){throw s.message.includes("polyfill")?s:po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Xv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw po(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ZP(t){const e=new Xv(t);return e.base64?Yv(yn.BASE64,e.rest):JP(e.rest)}function ek(t){return new Xv(t).contentType}function tk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){let r=0,s="";Rm(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Rm(this.data_)){const r=this.data_,s=QP(r,e,n);return s===null?null:new vr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new vr(r,!0)}}static getBlob(...e){if(vd()){const n=e.map(r=>r instanceof vr?r.data_:r);return new vr(GP.apply(null,n))}else{const n=e.map(o=>yd(o)?XP(yn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new vr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){let e;try{e=JSON.parse(t)}catch{return null}return UP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Zv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e){return e}class Nt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||sk}}let Ca=null;function ik(t){return!yd(t)||t.length<2?t:Zv(t)}function ew(){if(Ca)return Ca;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(i,o){return ik(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Nt("size");return s.xform=r,t.push(s),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),Ca=t,Ca}function ok(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ak(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return ok(r,t),r}function tw(t,e,n){const r=Jv(e);return r===null?null:ak(t,r,n)}function lk(t,e,n,r){const s=Jv(e);if(s===null||!yd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),y=ic(m,n,r),T=Gv({alt:"media",token:u});return y+T})[0]}function ck(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class wd{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){if(!t)throw _d()}function uk(t,e){function n(r,s){const i=tw(t,s,e);return nw(i!==null),i}return n}function hk(t,e){function n(r,s){const i=tw(t,s,e);return nw(i!==null),lk(i,s,t.host,t._protocol)}return n}function rw(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=TP():s=IP():n.getStatus()===402?s=EP(t.bucket):n.getStatus()===403?s=AP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function sw(t){const e=rw(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=bP(t.path)),i.serverResponse=s.serverResponse,i}return n}function dk(t,e,n){const r=e.fullServerUrl(),s=ic(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new wd(s,i,hk(t,n),o);return l.errorHandler=sw(e),l}function fk(t,e){const n=e.fullServerUrl(),r=ic(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new wd(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=sw(e),l}function pk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=pk(null,e)),r}function gk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let L="";for(let H=0;H<2;H++)L=L+Math.random().toString().slice(2);return L}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=mk(e,r,s),d=ck(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",y=vr.getBlob(p,r,m);if(y===null)throw xP();const T={name:u.fullPath},N=ic(i,t.host,t._protocol),P="POST",k=t.maxUploadRetryTime,O=new wd(N,P,uk(t,n),k);return O.urlParams=T,O.headers=o,O.body=y.uploadData(),O.errorHandler=rw(e),O}class _k{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw zi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class yk extends _k{initXhr(){this.xhr_.responseType="text"}}function bd(){return new yk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gs(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zv(this._location.path)}get storage(){return this._service}get parent(){const e=nk(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DP(e)}}function vk(t,e,n){t._throwIfRoot("uploadBytes");const r=gk(t.storage,t._location,ew(),new vr(e,!0),n);return t.storage.makeRequestWithTokens(r,bd).then(s=>({metadata:s,ref:t}))}function wk(t){t._throwIfRoot("getDownloadURL");const e=dk(t.storage,t._location,ew());return t.storage.makeRequestWithTokens(e,bd).then(n=>{if(n===null)throw OP();return n})}function bk(t){t._throwIfRoot("deleteObject");const e=fk(t.storage,t._location);return t.storage.makeRequestWithTokens(e,bd)}function Ek(t,e){const n=rk(t._location.path,e),r=new Wt(t._location.bucket,n);return new gs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){return/^[A-Za-z]+:\/\//.test(t)}function Tk(t,e){return new gs(t,e)}function iw(t,e){if(t instanceof Ed){const n=t;if(n._bucket==null)throw CP();const r=new gs(n,n._bucket);return e!=null?iw(r,e):r}else return e!==void 0?Ek(t,e):t}function Ak(t,e){if(e&&Ik(e)){if(t instanceof Ed)return Tk(t,e);throw zu("To use ref(service, url), the first argument must be a Storage instance.")}else return iw(t,e)}function km(t,e){const n=e==null?void 0:e[Wv];return n==null?null:Wt.makeFromBucketSpec(n,t)}function Sk(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ay(s,t.app.options.projectId))}class Ed{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Hv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vP,this._maxUploadRetryTime=wP,this._requests=new Set,s!=null?this._bucket=Wt.makeFromBucketSpec(s,this._host):this._bucket=km(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=km(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new MP(Kv());{const o=WP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Cm="@firebase/storage",xm="0.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="storage";function Id(t,e,n){return t=rt(t),vk(t,e,n)}function Td(t){return t=rt(t),wk(t)}function Rk(t){return t=rt(t),bk(t)}function fl(t,e){return t=rt(t),Ak(t,e)}function Pk(t=Nh(),e){t=rt(t);const r=Bl(t,ow).getImmediate({identifier:e}),s=sy("storage");return s&&kk(r,...s),r}function kk(t,e,n,r={}){Sk(t,e,n,r)}function Ck(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ed(n,r,s,e,Es)}function xk(){ds(new Vr(ow,Ck,"PUBLIC").setMultipleInstances(!0)),In(Cm,xm,""),In(Cm,xm,"esm2017")}xk();function Ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function aw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ok=aw,lw=new zo("auth","Firebase",aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new xh("@firebase/auth");function Nk(t,...e){pl.logLevel<=Re.WARN&&pl.warn(`Auth (${Es}): ${t}`,...e)}function qa(t,...e){pl.logLevel<=Re.ERROR&&pl.error(`Auth (${Es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Sd(t,...e)}function Sn(t,...e){return Sd(t,...e)}function cw(t,e,n){const r=Object.assign(Object.assign({},Ok()),{[e]:n});return new zo("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return cw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lw.create(t,...e)}function fe(t,e,...n){if(!t)throw Sd(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function Yn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dk(){return Om()==="http:"||Om()==="https:"}function Om(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dk()||GT()||"connection"in navigator)?navigator.onLine:!0}function Lk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=WT()||QT()}get(){return Mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=new Zo(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,r,s={}){return hw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=qo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),uw.fetch()(dw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vk),e);try{const s=new $k(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xa(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cw(t,d,u);cn(t,d)}}catch(s){if(s instanceof On)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function ea(t,e,n,r,s={}){const i=await Wr(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Rd(t.config,s):`${t.config.apiScheme}://${s}`}function Uk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $k{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),Fk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}function Nm(t){return t!==void 0&&t.enterprise!==void 0}class Bk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Uk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jk(t,e){return Wr(t,"GET","/v2/recaptchaConfig",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function fw(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qk(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Pd(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mo(Kc(s.auth_time)),issuedAtTime:mo(Kc(s.iat)),expirationTime:mo(Kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function Pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const s=ny(n);return s?JSON.parse(s):(qa("Failed to decode base64 JWT payload"),null)}catch(s){return qa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dm(t){const e=Pd(t);return fe(e,"internal-error"),fe(typeof e.exp!="undefined","internal-error"),fe(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&Hk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mo(t,fw(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pw(i.providerUserInfo):[],l=Gk(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Hu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Kk(t){const e=rt(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pw(t){return t.map(e=>{var{providerId:n}=e,r=Ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){const n=await hw(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yk(t,e){return Wr(t,"POST","/v2/accounts:revokeToken",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken!="undefined","internal-error"),fe(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Dm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Dm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ks;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){fe(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qk(this,e)}reload(){return Kk(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await Mo(this,zk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:H,isAnonymous:te,providerData:q,stsTokenManager:E}=n;fe(L&&E,e,"internal-error");const _=Ks.fromJSON(this.name,E);fe(typeof L=="string",e,"internal-error"),pr(p,e.name),pr(m,e.name),fe(typeof H=="boolean",e,"internal-error"),fe(typeof te=="boolean",e,"internal-error"),pr(y,e.name),pr(T,e.name),pr(N,e.name),pr(P,e.name),pr(k,e.name),pr(O,e.name);const b=new Bn({uid:L,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:te,photoURL:T,phoneNumber:y,tenantId:N,stsTokenManager:_,createdAt:k,lastLoginAt:O});return q&&Array.isArray(q)&&(b.providerData=q.map(A=>Object.assign({},A))),P&&(b._redirectEventId=P),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ks;s.updateFromServerResponse(n);const i=new Bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ml(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ks;l.updateFromIdToken(r);const c=new Bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Map;function jn(t){Yn(t instanceof Function,"Expected a class definition");let e=Mm.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mw.type="NONE";const Lm=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ha(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ha("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gs(jn(Lm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jn(Lm);const o=Ha(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Bn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Gs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bw(e))return"Blackberry";if(Ew(e))return"Webos";if(_w(e))return"Safari";if((e.includes("chrome/")||yw(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gw(t=xt()){return/firefox\//i.test(t)}function _w(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yw(t=xt()){return/crios\//i.test(t)}function vw(t=xt()){return/iemobile/i.test(t)}function ww(t=xt()){return/android/i.test(t)}function bw(t=xt()){return/blackberry/i.test(t)}function Ew(t=xt()){return/webos/i.test(t)}function kd(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xk(t=xt()){var e;return kd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jk(){return YT()&&document.documentMode===10}function Iw(t=xt()){return kd(t)||ww(t)||Ew(t)||bw(t)||/windows phone/i.test(t)||vw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e=[]){let n;switch(t){case"Browser":n=Vm(xt());break;case"Worker":n=`${Vm(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e={}){return Wr(t,"GET","/v2/passwordPolicy",Hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=6;class nC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fm(this),this.idTokenSubscription=new Fm(this),this.beforeStateQueue=new Zk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fw(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Hn(this));const n=e?rt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eC(this),n=new nC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Nk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ss(t){return rt(t)}class Fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=sA(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sC(t){oc=t}function Aw(t){return oc.loadJS(t)}function iC(){return oc.recaptchaEnterpriseScript}function oC(){return oc.gapiScript}function aC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lC="recaptcha-enterprise",cC="NO_RECAPTCHA";class uC{constructor(e){this.type=lC,this.auth=Ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{jk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Bk(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Nm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(cC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Nm(window.grecaptcha))s(l,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=iC();c.length!==0&&(c+=l),Aw(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Um(t,e,n,r=!1){const s=new uC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Um(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Um(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e){const n=Bl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(il(i,e!=null?e:{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function dC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fC(t,e,n){const r=Ss(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Sw(e),{host:o,port:l}=pC(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mC()}function Sw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pC(t){const e=Sw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$m(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$m(o)}}}function $m(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function gC(t,e){return Wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){return ea(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function vC(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Cd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,n,"signInWithPassword",_C);case"emailLink":return yC(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,r,"signUpPassword",gC);case"emailLink":return vC(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t,e){return ea(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="http://localhost";class _s extends Cd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ad(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:wC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EC(t){const e=Gi(Qi(t)).link,n=e?Gi(Qi(e)).deep_link_id:null,r=Gi(Qi(t)).deep_link_id;return(r?Gi(Qi(r)).link:null)||r||n||e||t}class xd{constructor(e){var n,r,s,i,o,l;const c=Gi(Qi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=bC((s=c.mode)!==null&&s!==void 0?s:null);fe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=EC(e);try{return new xd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xd.parseLink(n);return fe(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Rw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ta{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ta{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends ta{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e){return ea(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bn._fromIdTokenResponse(e,r,s),o=Bm(r);return new ys({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bm(r);return new ys({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends On{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gl(e,n,r,s)}}function Pw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,i,e,r):i})}async function TC(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e,n=!1){const{auth:r}=t;if(_n(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await Mo(t,Pw(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Pd(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),ys._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t,e,n=!1){if(_n(t.app))return Promise.reject(Hn(t));const r="signIn",s=await Pw(t,r,e),i=await ys._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function SC(t,e){return kw(Ss(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t){const e=Ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RC(t,e,n){if(_n(t.app))return Promise.reject(Hn(t));const r=Ss(t),o=await Wu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cw(t),c}),l=await ys._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function PC(t,e,n){return _n(t.app)?Promise.reject(Hn(t)):SC(rt(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cw(t),r})}function kC(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function CC(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function xw(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}const _l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=1e3,OC=10;class Nw extends Ow{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Jk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const NC=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Ow{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dw.type="SESSION";const Mw=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await DC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Od("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function LC(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){return typeof Rn().WorkerGlobalScope!="undefined"&&typeof Rn().importScripts=="function"}async function VC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UC(){return Lw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebaseLocalStorageDb",$C=1,yl="firebaseLocalStorage",Fw="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lc(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function BC(){const t=indexedDB.deleteDatabase(Vw);return new na(t).toPromise()}function Ku(){const t=indexedDB.open(Vw,$C);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:Fw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await BC(),e(await Ku()))})})}async function jm(t,e,n){const r=lc(t,!0).put({[Fw]:e,value:n});return new na(r).toPromise()}async function jC(t,e){const n=lc(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function zm(t,e){const n=lc(t,!0).delete(e);return new na(n).toPromise()}const zC=800,qC=3;class Uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(UC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VC(),!this.activeServiceWorker)return;this.sender=new MC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ku();return await jm(e,_l,"1"),await zm(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lc(s,!1).getAll();return new na(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uw.type="LOCAL";const HC=Uw;new Zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t,e){return e?jn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends Cd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KC(t){return kw(t.auth,new Nd(t),t.bypassAuthState)}function GC(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),AC(n,new Nd(t),t.bypassAuthState)}async function QC(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),TC(n,new Nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KC;case"linkViaPopup":case"linkViaRedirect":return QC;case"reauthViaPopup":case"reauthViaRedirect":return GC;default:cn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new Zo(2e3,1e4);class js extends $w{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,js.currentPopupAction&&js.currentPopupAction.cancel(),js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YC.get())};e()}}js.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="pendingRedirect",Wa=new Map;class JC extends $w{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await ZC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZC(t,e){const n=nx(e),r=tx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ex(t,e){Wa.set(t._key(),e)}function tx(t){return jn(t._redirectPersistence)}function nx(t){return Ha(XC,t.config.apiKey,t.name)}async function rx(t,e,n=!1){if(_n(t.app))return Promise.reject(Hn(t));const r=Ss(t),s=WC(r,e),o=await new JC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=10*60*1e3;class ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ox(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(qm(e))}saveEventToCache(e){this.cachedEventUids.add(qm(e)),this.lastProcessedEventTime=Date.now()}}function qm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ox(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cx=/^https?/;async function ux(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ax(t);for(const n of e)try{if(hx(n))return}catch{}cn(t,"unauthorized-domain")}function hx(t){const e=qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cx.test(n))return!1;if(lx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=new Zo(3e4,6e4);function Hm(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fx(t){return new Promise((e,n)=>{var r,s,i;function o(){Hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hm(),n(Sn(t,"network-request-failed"))},timeout:dx.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=aC("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},Aw(`${oC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function px(t){return Ka=Ka||fx(t),Ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=new Zo(5e3,15e3),gx="__/auth/iframe",_x="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wx(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rd(e,_x):`https://${t.config.authDomain}/${gx}`,r={apiKey:e.apiKey,appName:t.name,v:Es},s=vx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qo(r).slice(1)}`}async function bx(t){const e=await px(t),n=Rn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:wx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},mx.get());function c(){Rn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ix=500,Tx=600,Ax="_blank",Sx="http://localhost";class Wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rx(t,e,n,r=Ix,s=Tx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ex),{width:r.toString(),height:s.toString(),top:i,left:o}),u=xt().toLowerCase();n&&(l=yw(u)?Ax:n),gw(u)&&(e=e||Sx,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[y,T])=>`${m}${y}=${T},`,"");if(Xk(u)&&l!=="_self")return Px(e||"",l),new Wm(null);const p=window.open(e||"",l,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Wm(p)}function Px(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="__/auth/handler",Cx="emulator/auth/handler",xx=encodeURIComponent("fac");async function Km(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:s};if(e instanceof Rw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))o[d]=p}if(e instanceof ta){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${xx}=${encodeURIComponent(c)}`:"";return`${Ox(t)}?${qo(l).slice(1)}${u}`}function Ox({config:t}){return t.emulator?Rd(t,Cx):`https://${t.authDomain}/${kx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="webStorageSupport";class Nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mw,this._completeRedirectFn=rx,this._overrideRedirectResult=ex}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Km(e,n,r,qu(),s);return Rx(e,o,Od())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Km(e,n,r,qu(),s);return LC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bx(e),r=new ix(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gc];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ux(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iw()||_w()||kd()}}const Dx=Nx;var Gm="@firebase/auth",Qm="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vx(t){ds(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(t)},u=new rC(r,s,i,c);return dC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Vr("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new Mx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Gm,Qm,Lx(t)),In(Gm,Qm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=5*60,Ux=oy("authIdTokenMaxAge")||Fx;let Ym=null;const $x=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ux)return;const s=n==null?void 0:n.token;Ym!==s&&(Ym=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bx(t=Nh()){const e=Bl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hC(t,{popupRedirectResolver:Dx,persistence:[HC,NC,Mw]}),r=oy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$x(i.toString());CC(n,o,()=>o(n.currentUser)),kC(n,l=>o(l))}}const s=ry("auth");return s&&fC(n,`http://${s}`),n}function jx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vx("Browser");const Dd=uy(yP),un=eP(Dd),Vo=Pk(Dd),vs=Bx(Dd);console.log(un,Vo,vs);const Nn=kh("photoSpot",()=>{const t=le([]),e=async()=>{try{const o=hd(Xo(un,"photoSpots"),uP("regTime","desc")),l=await pd(o);t.value=l.docs.map(c=>({id:c.id,...c.data()}))}catch(o){console.error("Error fetching photo spots:",o)}},n=async o=>{try{const l=wi(un,"photoSpots",o);await md(l,{likes:qv(1)});const c=t.value.find(u=>u.id===o);c&&(c.likes+=1)}catch(l){console.error("Error incrementing like:",l)}},r=Ie(()=>t.value.length),s=Ie(()=>{const o=new Date;return t.value.filter(l=>new Date(l.regTime.seconds*1e3).toDateString()===o.toDateString()).length}),i=Ie(()=>t.value.reduce((o,l)=>o+l.likes,0));return{photoSpots:t,fetchPhotoSpots:e,incrementLikes:n,totalPosts:r,todayPosts:s,totalLikes:i}}),zx={name:"MaterialPagination",props:{color:{type:String,default:"success"},size:{type:String,default:""}},setup(t){function e(n,r){let s,i;return s=n&&`pagination-${n}`,i=r&&`pagination-${r}`,`${s} ${i}`}return(n,r)=>(z(),X("ul",{class:Te(["pagination",e(t.color,t.size)])},[Mr(n.$slots,"default")],2))}},qx={class:"page-link",href:"javascript:;"},Hx={key:0,class:"fa fa-angle-double-left"},Wx={key:1,class:"fa fa-angle-double-right"},Kx={name:"MaterialPaginationItem",props:{label:{type:String,default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},prev:{type:Boolean,default:!1},next:{type:Boolean,default:!1}},setup(t){function e(n,r){let s,i;return s=n&&"active",i=r&&"disabled",`${s} ${i}`}return(n,r)=>(z(),X("li",{class:Te(["page-item",e(t.active,t.disabled)])},[v("a",qx,[v("span",{"aria-hidden":"true",class:Te(t.active?"text-white":"")},[$e(Ae(t.prev||t.next?null:t.label)+" ",1),t.prev?(z(),X("i",Hx)):nt("",!0),t.next?(z(),X("i",Wx)):nt("",!0)],2)])],2))}};const Gx={class:"gallery-container"},Qx=v("h2",null,"Recently added Photos",-1),Yx=v("br",null,null,-1),Xx={class:"image-gallery"},Jx=["src","alt","onClick"],Zx={class:"pagination-container"},eO={name:"Thumbnails",emits:["open-details-spot-modal3"],setup(t,{emit:e}){const n=le(9),r=le(0),s=Nn(),i=Ie(()=>{const m=r.value*n.value,y=m+n.value;return s.photoSpots.slice(m,y)}),o=Ie(()=>Math.ceil(s.photoSpots.length/n.value)),l=Ie(()=>r.value+1>=o.value),c=m=>{console.log(m),e("open-details-spot-modal3",m)},u=()=>{l.value||r.value++},d=()=>{r.value>0&&r.value--},p=m=>{r.value=m};return rr(async()=>{await s.fetchPhotoSpots(),setTimeout(()=>{document.querySelectorAll(".image-wrapper").forEach(m=>{m.addEventListener("mouseenter",()=>{m.style.transform="translateY(-8px)",m.style.boxShadow="0 6px 18px rgba(0, 0, 0, 0.35)"}),m.addEventListener("mouseleave",()=>{m.style.transform="translateY(0)",m.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.3)"})})},100)}),(m,y)=>(z(),X("div",Gx,[Qx,Yx,v("div",Xx,[(z(!0),X(Ve,null,Jt(me(i),(T,N)=>(z(),X("div",{key:T.id,class:"image-wrapper","data-aos":"zoom-in"},[v("img",{src:T.imgUrl,alt:`Thumbnail ${N+1}`,class:"gallery-image",onClick:P=>c(T.id),style:{cursor:"pointer"}},null,8,Jx)]))),128))]),v("div",Zx,[v("span",{class:Te(["material-symbols-outlined pagination-arrow",{disabled:r.value===0}]),onClick:d}," keyboard_double_arrow_left ",2),ee(zx,null,{default:ht(()=>[(z(!0),X(Ve,null,Jt(me(o),T=>(z(),Mt(Kx,{key:T,label:String(T),active:r.value===T-1,onClick:N=>p(T-1)},null,8,["label","active","onClick"]))),128))]),_:1}),v("span",{class:Te(["material-symbols-outlined pagination-arrow",{disabled:me(l)}]),onClick:u}," keyboard_double_arrow_right ",2)])]))}},hn=kh("user",()=>{const t=le(null),e=le(""),n=le(""),r=le(""),s=le(0),i=le(0),o=async l=>{if(!l||!l.uid){console.error("User object is undefined or does not have uid");return}const c=wi(un,"users",l.uid),u=await Bv(c);if(u.exists()){const m=u.data();n.value=m.name,r.value=m.profileImageUrl}const d=hd(Xo(un,"photoSpots"),Vv("userEmail","==",l.email)),p=await pd(d);s.value=p.size,i.value=p.docs.reduce((m,y)=>m+(y.data().likes||0),0)};return xw(vs,async l=>{l?(t.value=l,e.value=l.email,await o(l)):(t.value=null,e.value="",n.value="",r.value="",s.value=0,i.value=0)}),{firebaseUser:t,userEmail:e,userName:n,profilePic:r,postCount:s,totalLikes:i,fetchUserData:o}});var _t=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const tO={name:"RankingList",data(){return{itemsToShow:5,likedItem:null}},computed:{userstore(){return hn()},photoSpotStore(){return Nn()},sortedRankings(){return this.photoSpotStore.photoSpots.slice().sort((t,e)=>e.likes-t.likes)},paginatedRankings(){return this.sortedRankings.slice(0,this.itemsToShow)},isLastPage(){return this.itemsToShow>=this.sortedRankings.length}},async created(){await this.photoSpotStore.fetchPhotoSpots()},methods:{async handleLikeClick(t){if(this.userstore.firebaseUser===null)alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694!");else try{this.likedItem=t,await this.photoSpotStore.incrementLikes(t),await this.photoSpotStore.fetchPhotoSpots()}catch(e){console.error("Error incrementing like:",e)}},loadMore(){this.isLastPage||(this.itemsToShow+=5)}}},nO=t=>(er("data-v-61806d5d"),t=t(),tr(),t),rO={class:"ranking-list"},sO=nO(()=>v("h2",{class:"ranking-header"},"DAZZLE Ranking",-1)),iO={class:"place-location"},oO={class:"place"},aO={class:"location"},lO={class:"icons"},cO={class:"icon-with-count"},uO=["onClick"],hO={class:"likes"},dO={key:0,class:"more"};function fO(t,e,n,r,s,i){return z(),X("div",rO,[sO,v("ul",null,[(z(!0),X(Ve,null,Jt(i.paginatedRankings,(o,l)=>(z(),X("li",{key:o.id,class:"ranking-item"},[v("div",iO,[v("span",oO,Ae(l+1)+". "+Ae(o.title),1),v("span",aO,Ae(o.addr),1)]),v("div",lO,[v("div",cO,[v("span",{onClick:c=>i.handleLikeClick(o.id),class:Te(["material-symbols-rounded","filled-heart",{"heart-animation":s.likedItem===o.id}])}," favorite ",10,uO),v("span",hO,Ae(o.likes),1)])])]))),128))]),i.isLastPage?nt("",!0):(z(),X("div",dO,[v("span",{onClick:e[0]||(e[0]=(...o)=>i.loadMore&&i.loadMore(...o))},"\uB354\uBCF4\uAE30")]))])}var pO=_t(tO,[["render",fO],["__scopeId","data-v-61806d5d"]]);function mO(){let t=le(window.innerWidth);const e=()=>t.value=window.innerWidth;rr(()=>window.addEventListener("resize",e)),Bo(()=>window.removeEventListener("resize",e));const n=Ie(()=>t.value<992?"mobile":t.value>=992?"desktop":null);return{width:Ie(()=>t.value),type:n}}const gO=async(t,e,n)=>{try{await PC(vs,t,e),n?localStorage.setItem("userEmail",t):localStorage.removeItem("userEmail")}catch(r){throw r}},_O=async(t,e,n,r)=>{try{const i=(await RC(vs,t,e)).user;console.log("User registered:",i);const o=await yO(i.uid,r);await vO(i,n,o)}catch(s){console.error("Error registering:",s)}},yO=async(t,e)=>{try{const n=fl(Vo,`profileImages/${t}`);await Id(n,e);const r=await Td(n);return console.log("Profile image uploaded:",r),r}catch(n){console.error("Error uploading profile image:",n)}},vO=async(t,e,n)=>{try{const r=wi(un,"users",t.uid);await pP(r,{email:t.email,uid:t.uid,name:e,profileImageUrl:n}),console.log("User info saved to Firestore")}catch(r){console.error("Error saving user info to Firestore:",r)}},wO=async(t,e,n)=>{try{const r=wi(un,"users",t.uid),s=await Bv(r),i=s.exists()?s.data():null;let o=(i==null?void 0:i.profileImageUrl)||null;if(n){if(o){const u=fl(Vo,o);await Rk(u)}const c=fl(Vo,`profileImages/${t.uid}`);await Id(c,n),o=await Td(c)}const l={name:e};o&&(l.profileImageUrl=o),await md(r,l),console.log("User profile updated successfully")}catch(r){throw console.error("Error updating user profile:",r),r}},bO={class:"input-group"},EO={key:1,class:"input-group-text"},IO=["id","type","value","placeholder","required","disabled"],vn={name:"MaterialInput",props:{id:{type:String,default:""},type:{type:String,default:"text"},label:{type:[String,Object],default:()=>({text:"",class:""})},modelValue:{type:String,default:""},placeholder:{type:String,default:""},size:{type:String,default:"md"},error:{type:Boolean,default:!1},success:{type:Boolean,default:!1},isRequired:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},inputClass:{type:String,default:""},icon:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:e}){function n(r,s,i){return`${r&&`form-control-${r}`} ${i?"is-invalid":s?"is-valid":""}`}return(r,s)=>(z(),X("div",bO,[t.label?(z(),X("label",{key:0,class:Te(t.label.class)},Ae(typeof t.label=="string"?t.label:t.label.text),3)):nt("",!0),t.icon?(z(),X("span",EO,[v("i",{class:Te(["fas",`fa-${t.icon}`]),"aria-hidden":"true"},null,2)])):nt("",!0),v("input",{id:t.id,type:t.type,class:Te(["form-control",[n(t.size,t.success,t.error),t.inputClass]]),value:t.modelValue,onInput:s[0]||(s[0]=i=>r.$emit("update:modelValue",i.target.value)),placeholder:t.placeholder,required:t.isRequired,disabled:t.isDisabled},null,42,IO)]))}},TO={class:"form-check form-switch"},AO=["id","name","checked"],SO=["for"],RO={name:"MaterialSwitch",props:{id:{type:String,required:!0},checked:{type:Boolean,default:!1},labelClass:{type:String,default:""}},setup(t){return(e,n)=>(z(),X("div",TO,[v("input",{id:t.id,class:"form-check-input",type:"checkbox",name:t.id,checked:t.checked},null,8,AO),v("label",{class:Te(["form-check-label d-block",t.labelClass]),for:t.id},[Mr(e.$slots,"default")],10,SO),e.$slots.description?Mr(e.$slots,"description",{key:0}):nt("",!0)]))}},Ii={name:"MaterialButton",props:{variant:{type:String,validator(t){return["contained","gradient","outline"].includes(t)},default:"contained"},color:{validator(t){return["primary","secondary","info","success","warning","danger","error","light","white","dark","none"].includes(t)},default:""},size:{validator(t){return["sm","md","lg"].includes(t)},default:"md"},fullWidth:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(t){function e(n,r,s,i,o){let l,c,u,d;return n==="gradient"?l=`bg-gradient-${r}`:n==="outline"?l=`btn-outline-${r}`:l=`btn-${r}`,c=s&&`btn-${s}`,u=i&&"w-100",d=o&&"disabled",`${l} ${c} ${u} ${d}`}return(n,r)=>(z(),X("button",{class:Te(["btn",e(t.variant,t.color,t.size,t.fullWidth,t.disabled)])},[Mr(n.$slots,"default")],2))}};const PO=t=>(er("data-v-6f228716"),t=t(),tr(),t),kO={class:"modal-content rounded-lg p-4"},CO=PO(()=>v("h5",{class:"modal-title"},"Login",-1)),xO={class:"modal-body"},OO=["onSubmit"],NO=$e(" Remember Me "),DO={class:"text-center"},MO=$e(" Login "),LO={class:"mt-4 text-sm text-center"},VO=$e(" Don't have an account? "),FO=["onClick"],UO={name:"LoginModal",emits:["close","signupModal"],setup(t,{emit:e}){const n=le(""),r=le(""),s=le(null);hn(),xw(vs,c=>{s.value=c});const i=()=>{e("close")},o=()=>{e("signupModal"),i()},l=async()=>{console.log(n.value),console.log(r.value),n.value!==""&&r.value!==""?(await gO(n.value,r.value),vs.currentUser.isAnonymous?alert("\uB85C\uADF8\uC778 \uC2E4\uD328"):(alert("\uB85C\uADF8\uC778 Email : "+n.value),e("close"))):alert("\uC815\uBCF4\uB97C \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694.")};return(c,u)=>(z(),X("div",{class:"modal fade show modal-fade-in",tabindex:"-1",style:{display:"block"},"aria-modal":"true",role:"dialog",onClick:i},[v("div",{class:"modal-dialog modal-dialog-centered modal-custom",onClick:u[2]||(u[2]=jt(()=>{},["stop"]))},[v("div",kO,[v("div",{class:"modal-header border-0"},[CO,v("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:i})]),v("div",xO,[v("form",{role:"form",class:"text-start",onSubmit:jt(l,["prevent"])},[ee(vn,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=d=>n.value=d),class:"input-group-dynamic mb-3",placeholder:"Email",type:"email"},null,8,["modelValue"]),ee(vn,{modelValue:r.value,"onUpdate:modelValue":u[1]||(u[1]=d=>r.value=d),class:"input-group-dynamic mb-3",placeholder:"Password",type:"password"},null,8,["modelValue"]),ee(RO,{class:"d-flex align-items-center mb-3",id:"rememberMe",labelClass:"mb-0 ms-3"},{default:ht(()=>[NO]),_:1}),v("div",DO,[ee(Ii,{class:"my-4 mb-2",variant:"gradient",color:"info",fullWidth:"",type:"submit"},{default:ht(()=>[MO]),_:1})]),v("p",LO,[VO,v("a",{href:"#",class:"text-info text-gradient font-weight-bold",onClick:jt(o,["prevent"])},"Sign Up",8,FO)])],40,OO)])])])]))}};var $O=_t(UO,[["__scopeId","data-v-6f228716"]]);const jw=t=>(er("data-v-2cc7549b"),t=t(),tr(),t),BO={class:"modal-content rounded-lg p-4"},jO=jw(()=>v("h5",{class:"modal-title"},"Sign Up",-1)),zO={class:"modal-body"},qO=["onSubmit"],HO={class:"mb-3 text-center"},WO={class:"d-flex flex-column align-items-center"},KO={key:0,class:"position-relative"},GO=["src"],QO={key:1},YO=jw(()=>v("div",{class:"img-fluid rounded-circle profile-pic-placeholder mb-2"},null,-1)),XO=[YO],JO={class:"text-center"},ZO=$e(" Sign Up "),e2={class:"mt-4 text-sm text-center"},t2=$e(" Already have an account? "),n2=["onClick"],r2={name:"SignUpModal",emits:["close","loginModal"],setup(t,{emit:e}){const n=jo(),r=le(""),s=le(""),i=le(""),o=le(""),l=le(null),c=le(""),u=()=>{e("close")},d=()=>{e("loginModal"),u()},p=T=>{const N=T.target.files[0];N&&(l.value=N,c.value=URL.createObjectURL(N))},m=()=>{l.value=null,c.value="",URL.revokeObjectURL(c.value)},y=async()=>{if(i.value.length<6){alert("\uBE44\uBC00\uBC88\uD638\uB294 6\uC790\uB9AC \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");return}if(i.value!==o.value){alert("\uBE44\uBC00\uBC88\uD638\uC640 \uBE44\uBC00\uBC88\uD638 \uD655\uC778\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");return}if(r.value&&s.value&&i.value&&o.value&&l.value)try{await _O(s.value,i.value,r.value,l.value),alert(r.value+"\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4!"),u(),n.go(0)}catch(T){console.error("Error during registration:",T),alert("\uD68C\uC6D0\uAC00\uC785 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}else alert("\uBAA8\uB4E0 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")};return(T,N)=>(z(),X("div",{class:"modal fade show modal-fade-in",tabindex:"-1",style:{display:"block"},"aria-modal":"true",role:"dialog",onClick:u},[v("div",{class:"modal-dialog modal-dialog-centered modal-custom",onClick:N[5]||(N[5]=jt(()=>{},["stop"]))},[v("div",BO,[v("div",{class:"modal-header border-0"},[jO,v("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:u})]),v("div",zO,[v("form",{role:"form",class:"text-start",onSubmit:jt(y,["prevent"])},[ee(vn,{modelValue:r.value,"onUpdate:modelValue":N[0]||(N[0]=P=>r.value=P),class:"input-group-dynamic mb-3",placeholder:"Name",type:"text"},null,8,["modelValue"]),ee(vn,{modelValue:s.value,"onUpdate:modelValue":N[1]||(N[1]=P=>s.value=P),class:"input-group-dynamic mb-3",placeholder:"Email",type:"email"},null,8,["modelValue"]),ee(vn,{modelValue:i.value,"onUpdate:modelValue":N[2]||(N[2]=P=>i.value=P),class:"input-group-dynamic mb-3",placeholder:"Password",type:"password"},null,8,["modelValue"]),ee(vn,{modelValue:o.value,"onUpdate:modelValue":N[3]||(N[3]=P=>o.value=P),class:"input-group-dynamic mb-3",placeholder:"Confirm Password",type:"password"},null,8,["modelValue"]),v("div",HO,[v("div",WO,[c.value?(z(),X("div",KO,[v("img",{src:c.value,alt:"Profile Preview",class:"img-fluid rounded-circle profile-pic-preview mb-2"},null,8,GO)])):(z(),X("div",QO,XO)),v("button",{type:"button",class:"btn btn-outline-secondary mb-2",onClick:N[4]||(N[4]=P=>T.$refs.fileInput.click())},"Choose Photo"),v("input",{type:"file",onChange:p,accept:"image/*",class:"form-control d-none",ref:"fileInput"},null,544),c.value?(z(),X("button",{key:2,type:"button",class:"btn btn-outline-danger",onClick:m},"Cancel")):nt("",!0)])]),v("div",JO,[ee(Ii,{class:"my-4 mb-2",variant:"gradient",color:"success",fullWidth:"",type:"submit"},{default:ht(()=>[ZO]),_:1})]),v("p",e2,[t2,v("a",{href:"#",class:"text-info text-gradient font-weight-bold",onClick:jt(d,["prevent"])},"Login",8,n2)])],40,qO)])])])]))}};var s2=_t(r2,[["__scopeId","data-v-2cc7549b"]]);const i2=$e(" DAZZLE "),o2=$e(" DAZZLE "),a2=WE('<button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" data-v-69738023><span class="navbar-toggler-icon mt-2" data-v-69738023><span class="navbar-toggler-bar bar1" data-v-69738023></span><span class="navbar-toggler-bar bar2" data-v-69738023></span><span class="navbar-toggler-bar bar3" data-v-69738023></span></span></button>',1),l2={class:"collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0",id:"navigation"},c2={class:"navbar-nav navbar-nav-hover ms-auto align-items-center"},u2={class:"nav-item mx-2"},h2=$e(" My Page "),d2=$e(" My Page "),f2={class:"nav-item mx-2"},p2=$e(" Map "),m2={key:0,class:"nav-item mx-2"},g2=$e(" Login "),_2={key:1,class:"nav-item mx-2"},y2=$e(" Logout "),v2={key:2,class:"nav-item ms-lg-2"},w2={name:"NavbarDefault",props:{action:{type:Object,route:String,color:String,label:String,default:()=>({route:"https://www.creative-tim.com/product/vue-material-kit",color:"bg-gradient-info"})},transparent:{type:Boolean,default:!1},light:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},darkText:{type:Boolean,default:!1}},setup(t){const e=t,n=hn(),r=jo(),s=le(!1),i=le(!1),o=()=>s.value=!0,l=()=>s.value=!1,c=()=>i.value=!0,u=()=>i.value=!1,d=async()=>{try{await vs.signOut(),alert("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."),r.push("/")}catch(T){console.error("\uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958 \uBC1C\uC0DD:",T)}},p=()=>{let T;return e.transparent&&m.value?T="text-dark":e.transparent?T="text-white":T="text-dark",T};let m=le(e.darkText);const{type:y}=mO();return y.value==="mobile"?m.value=!0:y.value==="desktop"&&m.value==!1&&(m.value=!1),zn(()=>y.value,T=>{T==="mobile"?m.value=!0:m.value=!1}),(T,N)=>(z(),X(Ve,null,[v("nav",{class:Te(["navbar navbar-expand-lg top-0",{"z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3":e.transparent,"my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4":e.sticky,"navbar-light bg-white py-3":e.light," navbar-dark bg-gradient-dark z-index-3 py-3":e.dark}])},[v("div",{class:Te(e.transparent||e.light||e.dark?"container":"container-fluid px-0")},[ee(me(Ki),{class:Te(["navbar-brand d-none d-md-block",[e.transparent&&me(m).value||!e.transparent?"text-dark font-weight-bolder ms-sm-3":"text-white font-weight-bolder ms-sm-3"]]),to:{name:"presentation"},rel:"tooltip","data-placement":"bottom"},{default:ht(()=>[i2]),_:1},8,["class"]),ee(me(Ki),{class:Te(["navbar-brand d-block d-md-none",e.transparent||e.dark?"text-white":"font-weight-bolder ms-sm-3"]),to:"/",rel:"tooltip","data-placement":"bottom"},{default:ht(()=>[o2]),_:1},8,["class"]),a2,v("div",l2,[v("ul",c2,[v("li",u2,[me(n).firebaseUser!=null?(z(),Mt(me(Ki),{key:0,to:{name:"mypage"},role:"button",class:Te(["nav-link ps-2 d-flex cursor-pointer align-items-center",p()]),"aria-expanded":"false"},{default:ht(()=>[v("i",{class:Te(["material-icons opacity-6 me-2 text-md",p()])},"account_circle",2),h2]),_:1},8,["class"])):(z(),X("a",{key:1,onClick:o,role:"button",class:Te(["nav-link ps-2 d-flex cursor-pointer align-items-center",p()]),"aria-expanded":"false"},[v("i",{class:Te(["material-icons opacity-6 me-2 text-md",p()])},"account_circle",2),d2],2))]),v("li",f2,[ee(me(Ki),{to:{name:"map"},role:"button",class:Te(["nav-link ps-2 d-flex cursor-pointer align-items-center",p()]),"aria-expanded":"false"},{default:ht(()=>[v("i",{class:Te(["material-icons opacity-6 me-2 text-md",p()])},"map",2),p2]),_:1},8,["class"])]),me(n).firebaseUser==null?(z(),X("li",m2,[v("a",{onClick:o,class:"nav-link d-flex cursor-pointer align-items-center"},[v("i",{class:Te(["material-icons opacity-6 me-2 text-md",p()])}," login ",2),g2])])):(z(),X("li",_2,[v("a",{onClick:d,class:"nav-link d-flex cursor-pointer align-items-center"},[v("i",{class:Te(["material-icons opacity-6 me-2 text-md",p()])}," logout ",2),y2])])),me(n).firebaseUser?nt("",!0):(z(),X("li",v2,[v("a",{onClick:c,class:"sign-up-btn btn btn-sm btn-outline-info"}," Sign Up ")]))])])],2)],2),s.value?(z(),Mt($O,{key:0,onClose:l,onSignupModal:c})):nt("",!0),i.value?(z(),Mt(s2,{key:1,onClose:u,onLoginModal:o})):nt("",!0)],64))}};var Md=_t(w2,[["__scopeId","data-v-69738023"]]),b2="/assets/LOGO.58532387.png";const E2={class:"footer pt-5 mt-5"},I2={class:"container"},T2={class:"row justify-content-center text-center"},A2={class:"col-md-3 mb-4"},S2=["href"],R2=["src"],P2=v("h6",{class:"font-weight-bolder mb-4"},"DAZZLE",-1),k2={class:"d-flex justify-content-center flex-row nav"},C2=["href","innerHTML"],x2={class:"text-sm"},O2={class:"flex-column nav"},N2=["href"],D2={class:"col-12"},M2={class:"text-center"},L2={class:"text-dark my-4 text-sm font-weight-normal"},V2=v("a",{href:"https://github.com/limjihoon99/be08-3rd-PotatoSpot-DAZZLE.git",target:"_blank"},"PotatoSpot",-1),F2=$e(". "),zw={name:"FooterDefault",props:{brand:{type:Object,name:String,logo:String,route:"",default:()=>({name:"Material Kit 2",logo:b2,route:"/"})},socials:{type:Array,icon:String,link:String,default:()=>[{icon:'<i class="fab fa-facebook text-lg opacity-8"></i>',link:"https://www.facebook.com/CreativeTim/"},{icon:'<i class="fab fa-twitter text-lg opacity-8"></i>',link:"https://twitter.com/creativetim"},{icon:'<i class="fab fa-dribbble text-lg opacity-8"></i>',link:"https://dribbble.com/creativetim"},{icon:'<i class="fab fa-github text-lg opacity-8"></i>',link:"https://github.com/creativetimofficial"},{icon:'<i class="fab fa-youtube text-lg opacity-8"></i>',link:"https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"}]},menus:{type:Array,name:String,items:{type:Array,name:String,href:String},default:()=>[{name:"About Us",items:[{name:"GitHub",href:"https://github.com/limjihoon99/be08-3rd-PotatoSpot-DAZZLE.git"},{name:"Notion",href:"https://charming-hospital-33d.notion.site/PotatoSpot-25078cd8018e471aa6be255639f2bee0"}]},{name:"Resources",items:[{name:"illustrations",href:"https://iradesign.io/"},{name:"icons",href:"https://fonts.google.com/icons"}]}]}},setup(t){return(e,n)=>(z(),X("footer",E2,[v("div",I2,[v("div",T2,[v("div",A2,[v("div",null,[v("a",{href:t.brand.route},[v("img",{src:t.brand.logo,class:"mb-3 footer-logo",alt:"main_logo"},null,8,R2)],8,S2),P2]),v("div",null,[v("ul",k2,[(z(!0),X(Ve,null,Jt(t.socials,({icon:r,link:s})=>(z(),X("li",{class:"nav-item",key:s},[v("a",{class:"nav-link pe-1",href:s,target:"_blank",innerHTML:r},null,8,C2)]))),128))])])]),(z(!0),X(Ve,null,Jt(t.menus,({name:r,items:s})=>(z(),X("div",{class:"col-md-2 col-sm-6 col-6 mb-4",key:r},[v("h6",x2,Ae(r),1),v("ul",O2,[(z(!0),X(Ve,null,Jt(s,i=>(z(),X("li",{class:"nav-item",key:i.name},[v("a",{class:"nav-link",href:i.href,target:"_blank"},Ae(i.name),9,N2)]))),128))])]))),128)),v("div",D2,[v("div",M2,[v("p",L2,[$e(" All rights reserved. Copyright \xA9 "+Ae(new Date().getFullYear())+" DAZZLE by ",1),V2,F2])])])])])]))}},U2={class:"header-2"},$2={class:"row"},qw={name:"Header",props:{image:{type:String,default:""},title:{type:[String,Object],default:"",text:String,variant:{validator(t){return["h1","h2","h3","h4","h5","h6"].includes(t)}},class:{type:String,default:""}},description:{type:[String,Object],default:"",text:String,class:String},mask:{type:String,default:"mask bg-gradient-success opacity-4"},center:{type:Boolean,default:!1},minHeight:{type:String,default:" min-vh-75"},fullWidth:{type:Boolean,default:!1}},setup(t){return(e,n)=>{var r;return z(),X("header",U2,[t.title?(z(),X("div",{key:0,class:Te(["page-header",t.minHeight]),style:Zn(`background-image: url(${t.image})`),loading:"lazy"},[v("span",{class:Te(t.mask)},null,2),v("div",{class:Te(t.fullWidth?"w-100":"container")},[v("div",$2,[v("div",{class:Te(`${(r=e.$attrs.class)!=null?r:"col-lg-7"} ${t.center?"text-center mx-auto":""}`)},[(z(),Mt(AE(t.title.variant?t.title.variant:"h1"),{class:Te(["text-white",t.title.class])},{default:ht(()=>[$e(Ae(typeof t.title=="object"?t.title.text:t.title),1)]),_:1},8,["class"])),v("p",{class:Te(["lead text-white",t.description.class])},Ae(typeof t.description=="object"?t.description.text:t.description),3),Mr(e.$slots,"default")],2)])],2)],6)):Mr(e.$slots,"default",{key:1})])}}};let Xm=0;const Jm="webkit moz ms o".split(" ");let pn,mn;const B2=typeof window=="undefined";if(B2)pn=function(){},mn=function(){};else{pn=window.requestAnimationFrame,mn=window.cancelAnimationFrame;let t;for(let e=0;e<Jm.length&&!(pn&&mn);e++)t=Jm[e],pn=pn||window[t+"RequestAnimationFrame"],mn=mn||window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];(!pn||!mn)&&(pn=function(e){const n=new Date().getTime(),r=Math.max(0,16-(n-Xm)),s=window.setTimeout(()=>{e(n+r)},r);return Xm=n+r,s},mn=function(e){window.clearTimeout(e)})}const j2={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(t,e,n,r){return n*(-Math.pow(2,-10*t/r)+1)*1024/1023+e}}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=pn(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){mn(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,pn(this.count)},reset(){this.startTime=null,mn(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(t){this.startTime||(this.startTime=t),this.timestamp=t;const e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=pn(this.count):this.$emit("callback")},isNumber(t){return!isNaN(parseFloat(t))},formatNumber(t){t=t.toFixed(this.decimals),t+="";const e=t.split(".");let n=e[0];const r=e.length>1?this.decimal+e[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;s.test(n);)n=n.replace(s,"$1"+this.separator+"$2");return this.prefix+n+r+this.suffix}},destroyed(){mn(this.rAF)}};function z2(t,e,n,r,s,i){return z(),X("span",null,Ae(s.displayValue),1)}var cc=_t(j2,[["render",z2]]);typeof window!="undefined"&&window.Vue&&window.Vue.component("count-to",cc);const q2={class:"text-center"},H2={class:"mt-3"},W2={class:"text-sm font-weight-normal"},Zm={name:"DefaultCounterCard",props:{count:{type:Number,required:!0},suffix:{type:String,default:""},duration:{type:Number,default:4e3},title:{type:String,required:!0},description:{type:String,required:!0},color:{validator(t){return["primary","secondary","info","success","warning","error","light","dark"].includes(t)}},divider:{validator(t){return["vertical","horizontal"].includes(t)}}},setup(t){return(e,n)=>{var r;return z(),X(Ve,null,[v("div",q2,[v("h1",{class:Te(`text-gradient text-${(r=t.color)!=null?r:"success"}`)},[ee(me(cc),{"start-val":0,"end-val":t.count,duration:t.duration},null,8,["end-val","duration"]),$e(Ae(t.suffix),1)],2),v("h5",H2,Ae(t.title),1),v("p",W2,Ae(t.description),1)]),v("hr",{class:Te(`${t.divider?t.divider:""} dark`)},null,2)],64)}}};const K2={class:"pt-3 pb-4",id:"count-stats"},G2={class:"container"},Q2={class:"row justify-content-center align-items-center"},Y2={class:"col-lg-9 z-index-2 border-radius-xl mx-auto py-3"},X2={class:"row justify-content-center align-items-center"},J2={class:"col-md-4 position-relative d-flex"},Z2={class:"col-md-4 position-relative d-flex"},eN={name:"PresentationCounter",setup(t){const e=Nn();return rr(async()=>{await e.fetchPhotoSpots()}),(n,r)=>(z(),X("section",K2,[v("div",G2,[v("div",Q2,[v("div",Y2,[v("div",X2,[v("div",J2,[ee(Zm,{class:"counter-card black-card",color:"dark",title:"Total Posts",description:"Explore the variety of posts shared by others.",count:me(e).totalPosts,duration:3e3},null,8,["count"])]),v("div",Z2,[ee(Zm,{class:"counter-card red-card",color:"danger",title:"Total Likes",description:"See how many likes posts have received.",count:me(e).totalLikes,suffix:"\u2764\uFE0F",duration:4e3},null,8,["count"])])])])])])]))}};var tN=_t(eN,[["__scopeId","data-v-7a2ee5ee"]]),nN="/assets/vue-mk-header.f96ba69e.jpg";const rN=kh("review",()=>{const t=le([]);return{comments:t,fetchComments:async n=>{try{const r=hd(Xo(un,"comments"),Vv("spotId","==",n)),s=await pd(r);t.value=s.docs.map(i=>({id:i.id,...i.data()}))}catch(r){console.error("Error fetching comments:",r)}}}}),sN=async(t,e,n)=>{try{const r=await zv(Xo(un,"comments"),{spotId:t,userEmail:e,content:n,timestamp:new Date});console.log("\uBB38\uC11C ID: ",r.id)}catch(r){console.error("\uC5D0\uB7EC \uBA54\uC2DC\uC9C0: ",r)}},iN=async(t,e,n,r,s,i,o,l,c,u)=>{try{const d=await zv(Xo(un,"photoSpots"),{userEmail:t,title:e,content:n,imgUrl:r,place:s,addr:i,x:o,y:l,likes:c,regTime:u});console.log("\uBB38\uC11C ID: ",d.id)}catch(d){console.error("\uC5D0\uB7EC \uBA54\uC2DC\uC9C0: ",d)}},Hw=async t=>{try{const e=wi(un,"photoSpots",t);await md(e,{likes:qv(1)})}catch(e){console.error("Error incrementing likes:",e)}};const Ww=t=>(er("data-v-2548cc74"),t=t(),tr(),t),oN={class:"modal-content"},aN={class:"modal-header"},lN={class:"modal-title"},cN={class:"like-count"},uN=Ww(()=>v("span",{class:"heart-icon"},"\u2764",-1)),hN={class:"modal-body d-flex"},dN={class:"post-details d-flex flex-column",style:{flex:"2","padding-right":"20px"}},fN={class:"post-image mb-3"},pN=["src"],mN={class:"post-content"},gN={class:"content-text"},_N={class:"comments-section",style:{flex:"1"}},yN=Ww(()=>v("div",{class:"comments-header"},[v("h6",null,"Comments")],-1)),vN={class:"comments-list"},wN=["onSubmit"],bN=$e(" Send comments "),EN={name:"DetailsSpotModal",props:{postId:{type:String,required:!0}},emits:["close"],setup(t,{emit:e}){const n=t,r=Nn(),s=rN(),i=hn(),o=Ie(()=>r.photoSpots.find(m=>m.id===n.postId)),l=le("");Ie(()=>r.likes);const c=Ie(()=>s.comments),u=()=>{e("close")},d=async()=>{i.firebaseUser!=null?l.value.trim()?(await sN(n.postId,i.userEmail,l.value.trim()),l.value="",s.fetchComments(n.postId)):alert("\uB313\uAE00 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694!"):alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694!")};rr(()=>{s.fetchComments(n.postId)});const p=async m=>{if(i.firebaseUser===null)alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694!");else try{await Hw(m),r.fetchPhotoSpots()}catch(y){console.error("Error incrementing like:",y)}};return(m,y)=>(z(),X("div",{class:"modal fade show modal-fade-in",tabindex:"-1",style:{display:"block"},"aria-modal":"true",role:"dialog",onClick:u},[v("div",{class:"modal-dialog modal-dialog-centered modal-xl",onClick:y[2]||(y[2]=jt(()=>{},["stop"]))},[v("div",oN,[v("div",aN,[v("h5",lN,Ae(me(o).title),1),v("button",{onClick:y[0]||(y[0]=T=>p(t.postId)),class:"like-button"},[v("span",cN,Ae(me(o).likes),1),uN])]),v("div",hN,[v("div",dN,[v("div",fN,[v("img",{src:me(o).imgUrl,alt:"Post Image",class:"img-fluid"},null,8,pN)]),v("div",mN,[v("p",gN,Ae(me(o).content),1)])]),v("div",_N,[yN,v("ul",vN,[(z(!0),X(Ve,null,Jt(me(c),T=>(z(),X("li",{key:T.id},Ae(T.content),1))),128))]),v("form",{onSubmit:jt(d,["prevent"]),class:"comment-form mt-3"},[ee(vn,{modelValue:l.value,"onUpdate:modelValue":y[1]||(y[1]=T=>l.value=T),class:"form-control commentInput bg-gray-100",placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",rows:"3"},null,8,["modelValue"]),ee(Ii,{class:"my-3 mb-2",variant:"gradient",color:"dark",fullWidth:"",type:"submit"},{default:ht(()=>[bN]),_:1})],40,wN)])])])])]))}};var Ld=_t(EN,[["__scopeId","data-v-2548cc74"]]);const IN={data(){return{text:"DAZZLE"}}},TN={class:"TextAnime1"},AN=["textContent"];function SN(t,e,n,r,s,i){return z(),X("div",TN,[(z(!0),X(Ve,null,Jt(s.text,(o,l)=>(z(),X("span",{key:l,textContent:Ae(o),class:"item delay-anime"},null,8,AN))),128))])}var RN=_t(IN,[["render",SN],["__scopeId","data-v-5735bfba"]]);const PN={class:"container position-sticky z-index-sticky top-0"},kN={class:"row"},CN={class:"col-12"},xN={class:"container"},ON={class:"row"},NN={class:"col-lg-7 text-center mx-auto position-relative"},DN={class:"text-white pt-3 mt-n5 me-2",style:{display:"inline-block "}},MN=v("p",{class:"lead text-white px-5 mt-3",style:{fontWeight:"500"}}," \uB2F9\uC2E0\uC758 \uD3EC\uD1A0\uC2A4\uD31F\uC744 \uACF5\uC720\uD558\uC138\uC694. ",-1),LN={class:"card card-body blur shadow-blur mx-3 mx-md-4 mt-n6"},VN={id:"presentationCounter"},FN={id:"thumbnails"},UN={id:"rankingList"},$N={name:"PresentationView",setup(t){const e=le(!1),n=le(null),r=o=>{n.value=o,e.value=!0},s=()=>{e.value=!1,n.value=null},i=document.getElementsByTagName("body")[0];return rr(()=>{i.classList.add("presentation-page"),i.classList.add("bg-gray-200"),i.classList.add("presentation-page"),i.classList.add("bg-gray-200")}),Bo(()=>{i.classList.remove("presentation-page"),i.classList.remove("bg-gray-200")}),(o,l)=>(z(),X(Ve,null,[v("div",PN,[v("div",kN,[v("div",CN,[ee(Md,{sticky:!0})])])]),ee(qw,null,{default:ht(()=>[v("div",{class:"page-header min-vh-75",style:Zn(`background-image: url(${me(nN)})`),loading:"lazy",id:"top"},[v("div",xN,[v("div",ON,[v("div",NN,[v("h1",DN,[(z(),Mt(RN,{key:0}))]),MN])])])],4)]),_:1}),v("div",LN,[v("div",VN,[ee(tN)]),v("div",FN,[ee(eO,{onOpenDetailsSpotModal3:r})]),v("div",UN,[ee(pO)])]),ee(zw),e.value?(z(),Mt(Ld,{key:0,"post-id":n.value,onClose:s},null,8,["post-id"])):nt("",!0)],64))}};var BN="/assets/myPageBackimage.e7bc9b77.jpg";const jN=["src","alt"],zN={name:"MaterialAvatar",props:{image:{type:String,required:!0},alt:{type:String,required:!0},size:{type:String,default:"xxl"},borderRadius:{type:String,default:""}},setup(t){function e(n,r){let s=n&&`avatar-${n}`,i=r&&`border-radius-${r}`;return`${s} ${i}`}return(n,r)=>(z(),X("img",{class:Te(["avatar",e(t.size,t.borderRadius)]),src:t.image,alt:t.alt},null,10,jN))}},qN={class:"text-center mt-2"},HN={class:"mt-3"},WN={class:"text-sm font-weight-normal"},eg={name:"UserDataCounter",props:{count:{type:Number,required:!0},suffix:{type:String,default:""},duration:{type:Number,default:4e3},title:{type:String,required:!0},description:{type:String,required:!0},color:{validator(t){return["primary","secondary","info","success","warning","error","light","dark"].includes(t)}},divider:{validator(t){return["vertical","horizontal"].includes(t)}}},setup(t){return(e,n)=>{var r;return z(),X(Ve,null,[v("div",qN,[v("h5",HN,Ae(t.title),1),v("h1",{class:Te(`text-gradient text-${(r=t.color)!=null?r:"success"}`),style:{"font-size":"40px"}},[ee(me(cc),{"start-val":0,"end-val":t.count,duration:t.duration},null,8,["end-val","duration"]),$e(Ae(t.suffix),1)],2),v("p",WN,Ae(t.description),1)]),v("hr",{class:Te(`${t.divider?t.divider:""} dark`)},null,2)],64)}}};function KN(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}if(document.querySelectorAll(".input-group").length!=0){var GN=document.querySelectorAll("input.form-control");GN.forEach(t=>KN(t,{onfocus:"focused(this)",onfocusout:"defocused(this)"}))}function QN(){for(var t=document.querySelectorAll("input"),e=0;e<t.length;e++)t[e].hasAttribute("value")&&t[e].parentElement.classList.add("is-filled"),t[e].addEventListener("focus",function(n){this.parentElement.classList.add("is-focused")},!1),t[e].onkeyup=function(n){this.value!=""?this.parentElement.classList.add("is-filled"):this.parentElement.classList.remove("is-filled")},t[e].addEventListener("focusout",function(n){this.value!=""&&this.parentElement.classList.add("is-filled"),this.parentElement.classList.remove("is-focused")},!1)}const tg=()=>{};let Vd={},Kw={},Gw=null,Qw={mark:tg,measure:tg};try{typeof window!="undefined"&&(Vd=window),typeof document!="undefined"&&(Kw=document),typeof MutationObserver!="undefined"&&(Gw=MutationObserver),typeof performance!="undefined"&&(Qw=performance)}catch{}const{userAgent:ng=""}=Vd.navigator||{},Br=Vd,Qe=Kw,rg=Gw,Oa=Qw;Br.document;const sr=!!Qe.documentElement&&!!Qe.head&&typeof Qe.addEventListener=="function"&&typeof Qe.createElement=="function",Yw=~ng.indexOf("MSIE")||~ng.indexOf("Trident/");var Ye="classic",Xw="duotone",Kt="sharp",Gt="sharp-duotone",YN=[Ye,Xw,Kt,Gt],XN={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},sg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},JN=["kit"],ZN=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,eD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,tD={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},nD={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},rD={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},sD={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},iD={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},oD={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Jw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},aD=["solid","regular","light","thin","duotone","brands"],Zw=[1,2,3,4,5,6,7,8,9,10],lD=Zw.concat([11,12,13,14,15,16,17,18,19,20]),eo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cD=[...Object.keys(sD),...aD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",eo.GROUP,eo.SWAP_OPACITY,eo.PRIMARY,eo.SECONDARY].concat(Zw.map(t=>"".concat(t,"x"))).concat(lD.map(t=>"w-".concat(t))),uD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hD={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},dD={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ig={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Xn="___FONT_AWESOME___",Gu=16,eb="fa",tb="svg-inline--fa",ws="data-fa-i2svg",Qu="data-fa-pseudo-element",fD="data-fa-pseudo-element-pending",Fd="data-prefix",Ud="data-icon",og="fontawesome-i2svg",pD="async",mD=["HTML","HEAD","STYLE","SCRIPT"],nb=(()=>{try{return!0}catch{return!1}})(),rb=[Ye,Kt,Gt];function ra(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ye]}})}const sb={...Jw};sb[Ye]={...Jw[Ye],...sg.kit,...sg["kit-duotone"]};const us=ra(sb),Yu={...oD};Yu[Ye]={...Yu[Ye],...ig.kit,...ig["kit-duotone"]};const Fo=ra(Yu),Xu={...iD};Xu[Ye]={...Xu[Ye],...dD.kit};const hs=ra(Xu),Ju={...rD};Ju[Ye]={...Ju[Ye],...hD.kit};const gD=ra(Ju),_D=ZN,ib="fa-layers-text",yD=eD,vD={...XN};ra(vD);const wD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qc=eo,ci=new Set;Object.keys(Fo[Ye]).map(ci.add.bind(ci));Object.keys(Fo[Kt]).map(ci.add.bind(ci));Object.keys(Fo[Gt]).map(ci.add.bind(ci));const bD=[...JN,...cD],go=Br.FontAwesomeConfig||{};function ED(t){var e=Qe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ID(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Qe&&typeof Qe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=ID(ED(n));s!=null&&(go[r]=s)});const ob={styleDefault:"solid",familyDefault:"classic",cssPrefix:eb,replacementClass:tb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};go.familyPrefix&&(go.cssPrefix=go.familyPrefix);const ui={...ob,...go};ui.autoReplaceSvg||(ui.observeMutations=!1);const se={};Object.keys(ob).forEach(t=>{Object.defineProperty(se,t,{enumerable:!0,set:function(e){ui[t]=e,_o.forEach(n=>n(se))},get:function(){return ui[t]}})});Object.defineProperty(se,"familyPrefix",{enumerable:!0,set:function(t){ui.cssPrefix=t,_o.forEach(e=>e(se))},get:function(){return ui.cssPrefix}});Br.FontAwesomeConfig=se;const _o=[];function TD(t){return _o.push(t),()=>{_o.splice(_o.indexOf(t),1)}}const mr=Gu,wn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function AD(t){if(!t||!sr)return;const e=Qe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Qe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Qe.head.insertBefore(e,r),t}const SD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Uo(){let t=12,e="";for(;t-- >0;)e+=SD[Math.random()*62|0];return e}function Ti(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $d(t){return t.classList?Ti(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ab(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function RD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ab(t[n]),'" '),"").trim()}function uc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Bd(t){return t.size!==wn.size||t.x!==wn.x||t.y!==wn.y||t.rotate!==wn.rotate||t.flipX||t.flipY}function PD(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function kD(t){let{transform:e,width:n=Gu,height:r=Gu,startCentered:s=!1}=t,i="";return s&&Yw?i+="translate(".concat(e.x/mr-n/2,"em, ").concat(e.y/mr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/mr,"em), calc(-50% + ").concat(e.y/mr,"em)) "):i+="translate(".concat(e.x/mr,"em, ").concat(e.y/mr,"em) "),i+="scale(".concat(e.size/mr*(e.flipX?-1:1),", ").concat(e.size/mr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var CD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function lb(){const t=eb,e=tb,n=se.cssPrefix,r=se.replacementClass;let s=CD;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}let ag=!1;function Yc(){se.autoAddCss&&!ag&&(AD(lb()),ag=!0)}var xD={mixout(){return{dom:{css:lb,insertCss:Yc}}},hooks(){return{beforeDOMElementCreation(){Yc()},beforeI2svg(){Yc()}}}};const Jn=Br||{};Jn[Xn]||(Jn[Xn]={});Jn[Xn].styles||(Jn[Xn].styles={});Jn[Xn].hooks||(Jn[Xn].hooks={});Jn[Xn].shims||(Jn[Xn].shims=[]);var bn=Jn[Xn];const cb=[],ub=function(){Qe.removeEventListener("DOMContentLoaded",ub),vl=1,cb.map(t=>t())};let vl=!1;sr&&(vl=(Qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Qe.readyState),vl||Qe.addEventListener("DOMContentLoaded",ub));function OD(t){!sr||(vl?setTimeout(t,0):cb.push(t))}function sa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?ab(t):"<".concat(e," ").concat(RD(n),">").concat(r.map(sa).join(""),"</").concat(e,">")}function lg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ND=function(e,n){return function(r,s,i,o){return e.call(n,r,s,i,o)}},Xc=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=s!==void 0?ND(n,s):n,c,u,d;for(r===void 0?(c=1,d=e[i[0]]):(c=0,d=r);c<o;c++)u=i[c],d=l(d,e[u],u,e);return d};function DD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Zu(t){const e=DD(t);return e.length===1?e[0].toString(16):null}function MD(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function cg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function eh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=cg(e);typeof bn.hooks.addPack=="function"&&!r?bn.hooks.addPack(t,cg(e)):bn.styles[t]={...bn.styles[t]||{},...s},t==="fas"&&eh("fa",e)}const{styles:ns,shims:LD}=bn,VD={[Ye]:Object.values(hs[Ye]),[Kt]:Object.values(hs[Kt]),[Gt]:Object.values(hs[Gt])};let jd=null,hb={},db={},fb={},pb={},mb={};const FD={[Ye]:Object.keys(us[Ye]),[Kt]:Object.keys(us[Kt]),[Gt]:Object.keys(us[Gt])};function UD(t){return~bD.indexOf(t)}function $D(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!UD(s)?s:null}const gb=()=>{const t=r=>Xc(ns,(s,i,o)=>(s[o]=Xc(i,r,{}),s),{});hb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),db=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),mb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const e="far"in ns||se.autoFetchSvg,n=Xc(LD,(r,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});fb=n.names,pb=n.unicodes,jd=hc(se.styleDefault,{family:se.familyDefault})};TD(t=>{jd=hc(t.styleDefault,{family:se.familyDefault})});gb();function zd(t,e){return(hb[t]||{})[e]}function BD(t,e){return(db[t]||{})[e]}function Ar(t,e){return(mb[t]||{})[e]}function _b(t){return fb[t]||{prefix:null,iconName:null}}function jD(t){const e=pb[t],n=zd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function jr(){return jd}const qd=()=>({prefix:null,iconName:null,rest:[]});function hc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ye}=e,r=us[n][t],s=Fo[n][t]||Fo[n][r],i=t in bn.styles?t:null;return s||i||null}const zD={[Ye]:Object.keys(hs[Ye]),[Kt]:Object.keys(hs[Kt]),[Gt]:Object.keys(hs[Gt])};function dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ye]:"".concat(se.cssPrefix,"-").concat(Ye),[Kt]:"".concat(se.cssPrefix,"-").concat(Kt),[Gt]:"".concat(se.cssPrefix,"-").concat(Gt)};let s=null,i=Ye;const o=YN.filter(c=>c!==Xw);o.forEach(c=>{(t.includes(r[c])||t.some(u=>zD[c].includes(u)))&&(i=c)});const l=t.reduce((c,u)=>{const d=$D(se.cssPrefix,u);if(ns[u]?(u=VD[i].includes(u)?gD[i][u]:u,s=u,c.prefix=u):FD[i].indexOf(u)>-1?(s=u,c.prefix=hc(u,{family:i})):d?c.iconName=d:u!==se.replacementClass&&!o.some(p=>u===r[p])&&c.rest.push(u),!n&&c.prefix&&c.iconName){const p=s==="fa"?_b(c.iconName):{},m=Ar(c.prefix,c.iconName);p.prefix&&(s=null),c.iconName=p.iconName||m||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!ns.far&&ns.fas&&!se.autoFetchSvg&&(c.prefix="fas")}return c},qd());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===Kt&&(ns.fass||se.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ar(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===Gt&&(ns.fasds||se.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Ar(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=jr()||"fas"),l}class qD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},eh(i,s[i]);const o=hs[Ye][i];o&&eh(o,s[i]),gb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:l}=r[s],c=l[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=l)}),e[i][o]=l}),e}}let ug=[],zs={};const Ys={},HD=Object.keys(Ys);function WD(t,e){let{mixoutsTo:n}=e;return ug=t,zs={},Object.keys(Ys).forEach(r=>{HD.indexOf(r)===-1&&delete Ys[r]}),ug.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{zs[o]||(zs[o]=[]),zs[o].push(i[o])})}r.provides&&r.provides(Ys)}),n}function th(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(zs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function bs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(zs[t]||[]).forEach(i=>{i.apply(null,n)})}function zr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ys[t]?Ys[t].apply(null,e):void 0}function nh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||jr();if(!!e)return e=Ar(n,e)||e,lg(yb.definitions,n,e)||lg(bn.styles,n,e)}const yb=new qD,KD=()=>{se.autoReplaceSvg=!1,se.observeMutations=!1,bs("noAuto")},GD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sr?(bs("beforeI2svg",t),zr("pseudoElements2svg",t),zr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;se.autoReplaceSvg===!1&&(se.autoReplaceSvg=!0),se.observeMutations=!0,OD(()=>{YD({autoReplaceSvgRoot:e}),bs("watch",t)})}},QD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ar(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=hc(t[0]);return{prefix:n,iconName:Ar(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(se.cssPrefix,"-"))>-1||t.match(_D))){const e=dc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||jr(),iconName:Ar(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=jr();return{prefix:e,iconName:Ar(e,t)||t}}}},Yt={noAuto:KD,config:se,dom:GD,parse:QD,library:yb,findIconDefinition:nh,toHtml:sa},YD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Qe}=t;(Object.keys(bn.styles).length>0||se.autoFetchSvg)&&sr&&se.autoReplaceSvg&&Yt.dom.i2svg({node:e})};function fc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>sa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!sr)return;const n=Qe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function XD(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Bd(o)&&n.found&&!r.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};s.style=uc({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function JD(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(se.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function Hd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:l,maskId:c,titleId:u,extra:d,watchable:p=!1}=t,{width:m,height:y}=n.found?n:e,T=r==="fak",N=[se.replacementClass,s?"".concat(se.cssPrefix,"-").concat(s):""].filter(te=>d.classes.indexOf(te)===-1).filter(te=>te!==""||!!te).concat(d.classes).join(" ");let P={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":s,class:N,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)}};const k=T&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};p&&(P.attributes[ws]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Uo())},children:[l]}),delete P.attributes.title);const O={...P,prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:{...k,...d.styles}},{children:L,attributes:H}=n.found&&e.found?zr("generateAbstractMask",O)||{children:[],attributes:{}}:zr("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=L,O.attributes=H,o?JD(O):XD(O)}function hg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:l=!1}=t,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};l&&(c[ws]="");const u={...o.styles};Bd(s)&&(u.transform=kD({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const d=uc(u);d.length>0&&(c.style=d);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ZD(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=uc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Jc}=bn;function rh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(se.cssPrefix,"-").concat(Qc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Qc.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Qc.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const eM={found:!1,width:512,height:512};function tM(t,e){!nb&&!se.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function sh(t,e){let n=e;return e==="fa"&&se.styleDefault!==null&&(e=jr()),new Promise((r,s)=>{if(n==="fa"){const i=_b(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Jc[e]&&Jc[e][t]){const i=Jc[e][t];return r(rh(i))}tM(t,e),r({...eM,icon:se.showMissingIcons&&t?zr("missingIconAbstract")||{}:{}})})}const dg=()=>{},ih=se.measurePerformance&&Oa&&Oa.mark&&Oa.measure?Oa:{mark:dg,measure:dg},to='FA "6.6.0"',nM=t=>(ih.mark("".concat(to," ").concat(t," begins")),()=>vb(t)),vb=t=>{ih.mark("".concat(to," ").concat(t," ends")),ih.measure("".concat(to," ").concat(t),"".concat(to," ").concat(t," begins"),"".concat(to," ").concat(t," ends"))};var Wd={begin:nM,end:vb};const Ga=()=>{};function fg(t){return typeof(t.getAttribute?t.getAttribute(ws):null)=="string"}function rM(t){const e=t.getAttribute?t.getAttribute(Fd):null,n=t.getAttribute?t.getAttribute(Ud):null;return e&&n}function sM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(se.replacementClass)}function iM(){return se.autoReplaceSvg===!0?Qa.replace:Qa[se.autoReplaceSvg]||Qa.replace}function oM(t){return Qe.createElementNS("http://www.w3.org/2000/svg",t)}function aM(t){return Qe.createElement(t)}function wb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?oM:aM}=e;if(typeof t=="string")return Qe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(wb(i,{ceFn:n}))}),r}function lM(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Qa={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(wb(n),e)}),e.getAttribute(ws)===null&&se.keepOriginalSource){let n=Qe.createComment(lM(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~$d(e).indexOf(se.replacementClass))return Qa.replace(t);const r=new RegExp("".concat(se.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===se.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>sa(i)).join(`
`);e.setAttribute(ws,""),e.innerHTML=s}};function pg(t){t()}function bb(t,e){const n=typeof e=="function"?e:Ga;if(t.length===0)n();else{let r=pg;se.mutateApproach===pD&&(r=Br.requestAnimationFrame||pg),r(()=>{const s=iM(),i=Wd.begin("mutate");t.map(s),i(),n()})}}let Kd=!1;function Eb(){Kd=!0}function oh(){Kd=!1}let wl=null;function mg(t){if(!rg||!se.observeMutations)return;const{treeCallback:e=Ga,nodeCallback:n=Ga,pseudoElementsCallback:r=Ga,observeMutationsRoot:s=Qe}=t;wl=new rg(i=>{if(Kd)return;const o=jr();Ti(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!fg(l.addedNodes[0])&&(se.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&se.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&fg(l.target)&&~wD.indexOf(l.attributeName))if(l.attributeName==="class"&&rM(l.target)){const{prefix:c,iconName:u}=dc($d(l.target));l.target.setAttribute(Fd,c||o),u&&l.target.setAttribute(Ud,u)}else sM(l.target)&&n(l.target)})}),sr&&wl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function cM(){!wl||wl.disconnect()}function uM(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function hM(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=dc($d(t));return s.prefix||(s.prefix=jr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=BD(s.prefix,t.innerText)||zd(s.prefix,Zu(t.innerText))),!s.iconName&&se.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function dM(t){const e=Ti(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return se.autoA11y&&(n?e["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(r||Uo()):(e["aria-hidden"]="true",e.focusable="false")),e}function fM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=hM(t),i=dM(t),o=th("parseNodeAttributes",{},t);let l=e.styleParser?uM(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:wn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i},...o}}const{styles:pM}=bn;function Ib(t){const e=se.autoReplaceSvg==="nest"?gg(t,{styleParser:!1}):gg(t);return~e.extra.classes.indexOf(ib)?zr("generateLayersText",t,e):zr("generateSvgReplacementMutation",t,e)}let xn=new Set;rb.map(t=>{xn.add("fa-".concat(t))});Object.keys(us[Ye]).map(xn.add.bind(xn));Object.keys(us[Kt]).map(xn.add.bind(xn));Object.keys(us[Gt]).map(xn.add.bind(xn));xn=[...xn];function _g(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sr)return Promise.resolve();const n=Qe.documentElement.classList,r=d=>n.add("".concat(og,"-").concat(d)),s=d=>n.remove("".concat(og,"-").concat(d)),i=se.autoFetchSvg?xn:rb.map(d=>"fa-".concat(d)).concat(Object.keys(pM));i.includes("fa")||i.push("fa");const o=[".".concat(ib,":not([").concat(ws,"])")].concat(i.map(d=>".".concat(d,":not([").concat(ws,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Ti(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();const c=Wd.begin("onTree"),u=l.reduce((d,p)=>{try{const m=Ib(p);m&&d.push(m)}catch(m){nb||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(u).then(m=>{bb(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),d()})}).catch(m=>{c(),p(m)})})}function mM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ib(t).then(n=>{n&&bb([n],e)})}function gM(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:nh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:nh(s||{})),t(r,{...n,mask:s})}}const _M=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=wn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:u={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:y}=t;return fc({type:"icon",...t},()=>(bs("beforeDOMElementCreation",{iconDefinition:t,params:e}),se.autoA11y&&(o?u["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(l||Uo()):(u["aria-hidden"]="true",u.focusable="false")),Hd({icons:{main:rh(y),mask:s?rh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...wn,...n},symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:u,styles:d,classes:c}})))};var yM={mixout(){return{icon:gM(_M)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=_g,t.nodeCallback=mM,t}}},provides(t){t.i2svg=function(e){const{node:n=Qe,callback:r=()=>{}}=e;return _g(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:l,symbol:c,mask:u,maskId:d,extra:p}=n;return new Promise((m,y)=>{Promise.all([sh(r,o),u.iconName?sh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[N,P]=T;m([e,Hd({icons:{main:N,mask:P},prefix:o,iconName:r,transform:l,symbol:c,maskId:d,title:s,titleId:i,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const l=uc(o);l.length>0&&(r.style=l);let c;return Bd(i)&&(c=zr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},vM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return fc({type:"layer"},()=>{bs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(se.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},wM={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return fc({type:"counter",content:t},()=>(bs("beforeDOMElementCreation",{content:t,params:e}),ZD({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(se.cssPrefix,"-layers-counter"),...r]}})))}}}},bM={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=wn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return fc({type:"text",content:t},()=>(bs("beforeDOMElementCreation",{content:t,params:e}),hg({content:t,transform:{...wn,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(se.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,l=null;if(Yw){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,l=u.height/c}return se.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,hg({content:e.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}};const EM=new RegExp('"',"ug"),yg=[1105920,1112319],vg={FontAwesome:{normal:"fas",400:"fas"},...nD,...tD,...uD},ah=Object.keys(vg).reduce((t,e)=>(t[e.toLowerCase()]=vg[e],t),{}),IM=Object.keys(ah).reduce((t,e)=>{const n=ah[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function TM(t){const e=t.replace(EM,""),n=MD(e,0),r=n>=yg[0]&&n<=yg[1],s=e.length===2?e[0]===e[1]:!1;return{value:Zu(s?e[0]:e),isSecondary:r||s}}function AM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(ah[n]||{})[s]||IM[n]}function wg(t,e){const n="".concat(fD).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ti(t.children).filter(m=>m.getAttribute(Qu)===e)[0],l=Br.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(yD),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let y=AM(c,d);const{value:T,isSecondary:N}=TM(m),P=u[0].startsWith("FontAwesome");let k=zd(y,T),O=k;if(P){const L=jD(T);L.iconName&&L.prefix&&(k=L.iconName,y=L.prefix)}if(k&&!N&&(!o||o.getAttribute(Fd)!==y||o.getAttribute(Ud)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);const L=fM(),{extra:H}=L;H.attributes[Qu]=e,sh(k,y).then(te=>{const q=Hd({...L,icons:{main:te,mask:qd()},prefix:y,iconName:O,extra:H,watchable:!0}),E=Qe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=q.map(_=>sa(_)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function SM(t){return Promise.all([wg(t,"::before"),wg(t,"::after")])}function RM(t){return t.parentNode!==document.head&&!~mD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Qu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function bg(t){if(!!sr)return new Promise((e,n)=>{const r=Ti(t.querySelectorAll("*")).filter(RM).map(SM),s=Wd.begin("searchPseudoElements");Eb(),Promise.all(r).then(()=>{s(),oh(),e()}).catch(()=>{s(),oh(),n()})})}var PM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=bg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Qe}=e;se.searchPseudoElements&&bg(n)}}};let Eg=!1;var kM={mixout(){return{dom:{unwatch(){Eb(),Eg=!0}}}},hooks(){return{bootstrap(){mg(th("mutationObserverCallbacks",{}))},noAuto(){cM()},watch(t){const{observeMutationsRoot:e}=t;Eg?oh():mg(th("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ig=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var CM={mixout(){return{parse:{transform:t=>Ig(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ig(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const Zc={x:0,y:0,width:"100%",height:"100%"};function Tg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xM(t){return t.tag==="g"?t.children:[t]}var OM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?dc(n.split(" ").map(s=>s.trim())):qd();return r.prefix||(r.prefix=jr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:l}=e;const{width:c,icon:u}=s,{width:d,icon:p}=i,m=PD({transform:l,containerWidth:d,iconWidth:c}),y={tag:"rect",attributes:{...Zc,fill:"white"}},T=u.children?{children:u.children.map(Tg)}:{},N={tag:"g",attributes:{...m.inner},children:[Tg({tag:u.tag,attributes:{...u.attributes,...m.path},...T})]},P={tag:"g",attributes:{...m.outer},children:[N]},k="mask-".concat(o||Uo()),O="clip-".concat(o||Uo()),L={tag:"mask",attributes:{...Zc,id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[y,P]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:xM(p)},L]};return n.push(H,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(k,")"),...Zc}}),{children:n,attributes:r}}}},NM={provides(t){let e=!1;Br.matchMedia&&(e=Br.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},DM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},MM=[xD,yM,vM,wM,bM,PM,kM,CM,OM,NM,DM];WD(MM,{mixoutsTo:Yt});Yt.noAuto;const Tb=Yt.config;Yt.library;Yt.dom;const bl=Yt.parse;Yt.findIconDefinition;Yt.toHtml;const LM=Yt.icon;Yt.layer;const VM=Yt.text;Yt.counter;function Ag(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function nn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ag(Object(n),!0).forEach(function(r){Ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ag(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function FM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function UM(t){var e=FM(t,"string");return typeof e=="symbol"?e:e+""}function El(t){return El=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},El(t)}function Ut(t,e,n){return e=UM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $M(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function BM(t,e){if(t==null)return{};var n=$M(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function lh(t){return jM(t)||zM(t)||qM(t)||HM()}function jM(t){if(Array.isArray(t))return ch(t)}function zM(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qM(t,e){if(!!t){if(typeof t=="string")return ch(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ch(t,e)}}function ch(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function HM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var WM=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ab={exports:{}};(function(t){(function(e){var n=function(k,O,L){if(!u(O)||p(O)||m(O)||y(O)||c(O))return O;var H,te=0,q=0;if(d(O))for(H=[],q=O.length;te<q;te++)H.push(n(k,O[te],L));else{H={};for(var E in O)Object.prototype.hasOwnProperty.call(O,E)&&(H[k(E,L)]=n(k,O[E],L))}return H},r=function(k,O){O=O||{};var L=O.separator||"_",H=O.split||/(?=[A-Z])/;return k.split(H).join(L)},s=function(k){return T(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,L){return L?L.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=s(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},l=Object.prototype.toString,c=function(k){return typeof k=="function"},u=function(k){return k===Object(k)},d=function(k){return l.call(k)=="[object Array]"},p=function(k){return l.call(k)=="[object Date]"},m=function(k){return l.call(k)=="[object RegExp]"},y=function(k){return l.call(k)=="[object Boolean]"},T=function(k){return k=k-0,k===k},N=function(k,O){var L=O&&"process"in O?O.process:O;return typeof L!="function"?k:function(H,te){return L(H,k,te)}},P={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(s,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(WM)})(Ab);var KM=Ab.exports,GM=["class","style"];function QM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=KM.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function YM(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Gd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Gd(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var d=t.attributes[u];switch(u){case"class":c.class=YM(d);break;case"style":c.style=QM(d);break;default:c.attrs[u]=d}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=BM(n,GM);return Ll(t.tag,nn(nn(nn({},e),{},{class:s.class,style:nn(nn({},s.style),o)},s.attrs),l),r)}var Sb=!1;try{Sb=!0}catch{}function XM(){if(!Sb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function yo(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ut({},t,e):{}}function JM(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ut(Ut(Ut(Ut(Ut(Ut(Ut(Ut(Ut(Ut(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ut(Ut(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Sg(t){if(t&&El(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(bl.icon)return bl.icon(t);if(t===null)return null;if(El(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var eu=$o({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ie(function(){return Sg(e.icon)}),i=Ie(function(){return yo("classes",JM(e))}),o=Ie(function(){return yo("transform",typeof e.transform=="string"?bl.transform(e.transform):e.transform)}),l=Ie(function(){return yo("mask",Sg(e.mask))}),c=Ie(function(){return LM(s.value,nn(nn(nn(nn({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});zn(c,function(d){if(!d)return XM("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=Ie(function(){return c.value?Gd(c.value.abstract[0],{},r):null});return function(){return u.value}}});$o({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,s=Tb.familyPrefix,i=Ie(function(){return["".concat(s,"-layers")].concat(lh(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return Ll("div",{class:i.value},r.default?r.default():[])}}});$o({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,s=Tb.familyPrefix,i=Ie(function(){return yo("classes",[].concat(lh(e.counter?["".concat(s,"-layers-counter")]:[]),lh(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Ie(function(){return yo("transform",typeof e.transform=="string"?bl.transform(e.transform):e.transform)}),l=Ie(function(){var u=VM(e.value.toString(),nn(nn({},o.value),i.value)),d=u.abstract;return e.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),c=Ie(function(){return Gd(l.value,{},r)});return function(){return c.value}}});const ZM={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},eL=ZM,tL={prefix:"fas",iconName:"user-pen",icon:[640,512,["user-edit"],"f4ff","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l293.1 0c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1l-91.4 0zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"]},nL=tL,rL={prefix:"fas",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"]};const sL={key:0,class:"profile-section py-1 position-relative"},iL={class:"container"},oL={class:"row"},aL={class:"col-12 mx-auto"},lL={class:"avatar-container mt-n8 mt-md-n11 text-center"},cL={class:"blur-shadow-avatar"},uL={class:"row"},hL={class:"col-lg-7 col-md-7 z-index-2 position-relative px-md-7 px-sm-2 mx-auto text-center"},dL={class:"profile-name mb-5"},fL=$e(" Edit Profile "),pL={class:"d-flex justify-content-around align-items-center mb-2"},mL={class:"col-auto text-center"},gL={class:"col-auto text-center"},_L={name:"MyPageProfile",setup(t){const e=hn(),n=Nn(),r=Ie(()=>e.profilePic),s=Ie(()=>e.userName),i=Ie(()=>n.photoSpots.filter(l=>l.userEmail===e.userEmail).length),o=Ie(()=>n.photoSpots.reduce((l,c)=>c.userEmail===e.userEmail?l+c.likes:l,0));return rr(async()=>{QN(),await n.fetchPhotoSpots(),await e.fetchUserData()}),zn([()=>e.profilePic,()=>n.photoSpots],async()=>{await e.fetchUserData(),await n.fetchPhotoSpots()}),(l,c)=>me(e).firebaseUser?(z(),X("section",sL,[v("div",iL,[v("div",oL,[v("div",aL,[v("div",lL,[v("div",cL,[ee(zN,{size:"xxl",class:"shadow-xl position-relative z-index-2 border border-light",image:me(r),alt:"Avatar"},null,8,["image"])])]),v("div",uL,[v("div",hL,[v("h1",dL,Ae(me(s)),1),v("button",{class:"btn btn-gradient btn-lg mb-3",onClick:c[0]||(c[0]=u=>l.$emit("open-modal-edit"))},[ee(me(eu),{icon:me(nL)},null,8,["icon"]),fL]),v("div",pL,[v("div",mL,[ee(eg,{title:"Posts",color:"dark",count:me(i),duration:4e3},{default:ht(()=>[ee(me(eu),{icon:me(eL),class:"me-2"},null,8,["icon"])]),_:1},8,["count"])]),v("div",gL,[ee(eg,{title:"Likes",color:"dark",count:me(o),duration:4e3},{default:ht(()=>[ee(me(eu),{icon:me(rL),class:"me-2"},null,8,["icon"])]),_:1},8,["count"])])])])])])])])])):nt("",!0)}};var yL=_t(_L,[["__scopeId","data-v-513e4688"]]);const vL={},wL={class:"rotating-card-container"},bL={class:"card card-rotate card-background min-height-300 card-background-mask-success shadow-success mt-md-0 mt-5"};function EL(t,e){return z(),X("div",wL,[v("div",bL,[Mr(t.$slots,"default")])])}var IL=_t(vL,[["render",EL]]);const TL={class:"card-body py-7 text-center",style:{height:"300px",width:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},AL={key:0,class:"material-icons text-white text-4xl my-3"},SL={key:1,class:"text-sm text-white text-uppercase font-weight-normal"},RL=["innerHTML"],PL={class:"text-white opacity-8"},kL={name:"RotatingCardFront",props:{image:{type:String,required:!0},icon:{type:String,default:""},label:{type:String,default:""},title:{type:String,required:!0},description:{type:String,required:!0}},setup(t){return(e,n)=>(z(),X("div",{style:Zn({backgroundImage:`url(${t.image})`,backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",height:"100%",width:"100%",borderRadius:"15px",overflow:"hidden"})},[v("div",TL,[t.icon?(z(),X("i",AL,Ae(t.icon),1)):nt("",!0),t.label?(z(),X("p",SL,Ae(t.label),1)):nt("",!0),v("h3",{class:"text-white",innerHTML:t.title},null,8,RL),v("p",PL,Ae(t.description),1)])],4))}},CL={class:"card-body pt-4 text-center bg-danger opacity-8"},xL=["innerHTML"],OL={class:"text-white"},NL={class:"buttons-group"},DL=["onClick"],ML={name:"RotatingCardBack",props:{image:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},action:{type:Array,required:!0,default:()=>[]}},emits:["card-clicked"],setup(t,{emit:e}){const n=t,r=s=>{e("card-clicked",s)};return(s,i)=>(z(),X("div",{class:"back",style:Zn({backgroundImage:`url(${n.image})`,backgroundSize:"cover",borderRadius:"15px",overflow:"hidden",height:"100%",width:"100%",opacity:.9,backgroundColor:s.backgroundColor})},[v("div",CL,[v("h3",{class:"text-white",innerHTML:n.title},null,8,xL),v("p",OL,Ae(n.description),1),v("div",NL,[(z(!0),X(Ve,null,Jt(n.action,({spotId:o,color:l,label:c},u)=>(z(),X("a",{key:u,target:"_blank",class:Te(["btn btn-sm mt-3 inline-block ms-1",`${l?`btn-${l}`:"btn-white"}`]),onClick:d=>r(o)},Ae(c),11,DL))),128))])])],4))}},LL={class:"text-center mt-2"},VL={class:"mt-3"},FL={class:"text-sm font-weight-normal"},UL={name:"LikeCounter",props:{count:{type:Number,required:!0},suffix:{type:String,default:""},duration:{type:Number,default:4e3},title:{type:String,required:!0},description:{type:String,required:!0},color:{validator(t){return["primary","secondary","info","success","warning","error","light","dark"].includes(t)}},divider:{validator(t){return["vertical","horizontal"].includes(t)}}},setup(t){return(e,n)=>{var r;return z(),X(Ve,null,[v("div",LL,[v("h5",VL,Ae(t.title),1),v("h1",{class:Te(`text-gradient text-${(r=t.color)!=null?r:"success"}`),style:{"font-size":"30px"}},[ee(me(cc),{"start-val":0,"end-val":t.count,duration:t.duration},null,8,["end-val","duration"]),$e(Ae(t.suffix),1)],2),v("p",FL,Ae(t.description),1)]),v("hr",{class:Te(`${t.divider?t.divider:""} dark`)},null,2)],64)}}};var Sr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Rb="Expected a function",Rg=0/0,$L="[object Symbol]",BL=/^\s+|\s+$/g,jL=/^[-+]0x[0-9a-f]+$/i,zL=/^0b[01]+$/i,qL=/^0o[0-7]+$/i,HL=parseInt,WL=typeof Sr=="object"&&Sr&&Sr.Object===Object&&Sr,KL=typeof self=="object"&&self&&self.Object===Object&&self,GL=WL||KL||Function("return this")(),QL=Object.prototype,YL=QL.toString,XL=Math.max,JL=Math.min,tu=function(){return GL.Date.now()};function ZL(t,e,n){var r,s,i,o,l,c,u=0,d=!1,p=!1,m=!0;if(typeof t!="function")throw new TypeError(Rb);e=Pg(e)||0,Il(n)&&(d=!!n.leading,p="maxWait"in n,i=p?XL(Pg(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m);function y(q){var E=r,_=s;return r=s=void 0,u=q,o=t.apply(_,E),o}function T(q){return u=q,l=setTimeout(k,e),d?y(q):o}function N(q){var E=q-c,_=q-u,b=e-E;return p?JL(b,i-_):b}function P(q){var E=q-c,_=q-u;return c===void 0||E>=e||E<0||p&&_>=i}function k(){var q=tu();if(P(q))return O(q);l=setTimeout(k,N(q))}function O(q){return l=void 0,m&&r?y(q):(r=s=void 0,o)}function L(){l!==void 0&&clearTimeout(l),u=0,r=c=s=l=void 0}function H(){return l===void 0?o:O(tu())}function te(){var q=tu(),E=P(q);if(r=arguments,s=this,c=q,E){if(l===void 0)return T(c);if(p)return l=setTimeout(k,e),y(c)}return l===void 0&&(l=setTimeout(k,e)),o}return te.cancel=L,te.flush=H,te}function eV(t,e,n){var r=!0,s=!0;if(typeof t!="function")throw new TypeError(Rb);return Il(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),ZL(t,e,{leading:r,maxWait:e,trailing:s})}function Il(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function tV(t){return!!t&&typeof t=="object"}function nV(t){return typeof t=="symbol"||tV(t)&&YL.call(t)==$L}function Pg(t){if(typeof t=="number")return t;if(nV(t))return Rg;if(Il(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Il(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(BL,"");var n=zL.test(t);return n||qL.test(t)?HL(t.slice(2),n?2:8):jL.test(t)?Rg:+t}var rV=eV,sV="Expected a function",kg=0/0,iV="[object Symbol]",oV=/^\s+|\s+$/g,aV=/^[-+]0x[0-9a-f]+$/i,lV=/^0b[01]+$/i,cV=/^0o[0-7]+$/i,uV=parseInt,hV=typeof Sr=="object"&&Sr&&Sr.Object===Object&&Sr,dV=typeof self=="object"&&self&&self.Object===Object&&self,fV=hV||dV||Function("return this")(),pV=Object.prototype,mV=pV.toString,gV=Math.max,_V=Math.min,nu=function(){return fV.Date.now()};function yV(t,e,n){var r,s,i,o,l,c,u=0,d=!1,p=!1,m=!0;if(typeof t!="function")throw new TypeError(sV);e=Cg(e)||0,uh(n)&&(d=!!n.leading,p="maxWait"in n,i=p?gV(Cg(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m);function y(q){var E=r,_=s;return r=s=void 0,u=q,o=t.apply(_,E),o}function T(q){return u=q,l=setTimeout(k,e),d?y(q):o}function N(q){var E=q-c,_=q-u,b=e-E;return p?_V(b,i-_):b}function P(q){var E=q-c,_=q-u;return c===void 0||E>=e||E<0||p&&_>=i}function k(){var q=nu();if(P(q))return O(q);l=setTimeout(k,N(q))}function O(q){return l=void 0,m&&r?y(q):(r=s=void 0,o)}function L(){l!==void 0&&clearTimeout(l),u=0,r=c=s=l=void 0}function H(){return l===void 0?o:O(nu())}function te(){var q=nu(),E=P(q);if(r=arguments,s=this,c=q,E){if(l===void 0)return T(c);if(p)return l=setTimeout(k,e),y(c)}return l===void 0&&(l=setTimeout(k,e)),o}return te.cancel=L,te.flush=H,te}function uh(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function vV(t){return!!t&&typeof t=="object"}function wV(t){return typeof t=="symbol"||vV(t)&&mV.call(t)==iV}function Cg(t){if(typeof t=="number")return t;if(wV(t))return kg;if(uh(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=uh(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(oV,"");var n=lV.test(t);return n||cV.test(t)?uV(t.slice(2),n?2:8):aV.test(t)?kg:+t}var xg=yV,Pb=function(){};function kb(t){var e=void 0,n=void 0,r=void 0;for(e=0;e<t.length;e+=1)if(n=t[e],n.dataset&&n.dataset.aos||(r=n.children&&kb(n.children),r))return!0;return!1}function bV(t){!t||t.forEach(function(e){var n=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes),s=n.concat(r);if(kb(s))return Pb()})}function Cb(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function EV(){return!!Cb()}function IV(t,e){var n=window.document,r=Cb(),s=new r(bV);Pb=e,s.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var Og={isSupported:EV,ready:IV},TV=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},AV=function(){function t(e,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),SV=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},RV=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,PV=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,kV=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,CV=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Ng(){return navigator.userAgent||navigator.vendor||window.opera||""}var xV=function(){function t(){TV(this,t)}return AV(t,[{key:"phone",value:function(){var n=Ng();return!!(RV.test(n)||PV.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=Ng();return!!(kV.test(n)||CV.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),Ya=new xV,OV=function(e,n){return n&&n.forEach(function(r){return e.classList.add(r)})},NV=function(e,n){return n&&n.forEach(function(r){return e.classList.remove(r)})},Na=function(e,n){var r=void 0;return Ya.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,!0,!0,{detail:n})):r=new CustomEvent(e,{detail:n}),document.dispatchEvent(r)},DV=function(e,n){var r=e.options,s=e.position,i=e.node;e.data;var o=function(){!e.animated||(NV(i,r.animatedClassNames),Na("aos:out",i),e.options.id&&Na("aos:in:"+e.options.id,i),e.animated=!1)},l=function(){e.animated||(OV(i,r.animatedClassNames),Na("aos:in",i),e.options.id&&Na("aos:in:"+e.options.id,i),e.animated=!0)};r.mirror&&n>=s.out&&!r.once?o():n>=s.in?l():e.animated&&!r.once&&o()},Dg=function(e){return e.forEach(function(n,r){return DV(n,window.pageYOffset)})},xb=function(e){for(var n=0,r=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),r+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:r,left:n}},Nr=function(t,e,n){var r=t.getAttribute("data-aos-"+e);if(typeof r!="undefined"){if(r==="true")return!0;if(r==="false")return!1}return r||n},MV=function(e,n,r){var s=window.innerHeight,i=Nr(e,"anchor"),o=Nr(e,"anchor-placement"),l=Number(Nr(e,"offset",o?0:n)),c=o||r,u=e;i&&document.querySelectorAll(i)&&(u=document.querySelectorAll(i)[0]);var d=xb(u).top-s;switch(c){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=s/2;break;case"center-center":d+=s/2+u.offsetHeight/2;break;case"bottom-center":d+=s/2+u.offsetHeight;break;case"top-top":d+=s;break;case"bottom-top":d+=s+u.offsetHeight;break;case"center-top":d+=s+u.offsetHeight/2;break}return d+l},LV=function(e,n){var r=Nr(e,"anchor"),s=Nr(e,"offset",n),i=e;r&&document.querySelectorAll(r)&&(i=document.querySelectorAll(r)[0]);var o=xb(i).top;return o+i.offsetHeight-s},VV=function(e,n){return e.forEach(function(r,s){var i=Nr(r.node,"mirror",n.mirror),o=Nr(r.node,"once",n.once),l=Nr(r.node,"id"),c=n.useClassNames&&r.node.getAttribute("data-aos"),u=[n.animatedClassName].concat(c?c.split(" "):[]).filter(function(d){return typeof d=="string"});n.initClassName&&r.node.classList.add(n.initClassName),r.position={in:MV(r.node,n.offset,n.anchorPlacement),out:i&&LV(r.node,n.offset)},r.options={once:o,mirror:i,animatedClassNames:u,id:l}}),e},Ob=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},Un=[],Mg=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},Nb=function(){return document.all&&!window.atob},FV=function(){return Un=VV(Un,et),Dg(Un),window.addEventListener("scroll",rV(function(){Dg(Un,et.once)},et.throttleDelay)),Un},rs=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(Mg=!0),Mg&&FV()},Db=function(){if(Un=Ob(),Lb(et.disable)||Nb())return Mb();rs()},Mb=function(){Un.forEach(function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},Lb=function(e){return e===!0||e==="mobile"&&Ya.mobile()||e==="phone"&&Ya.phone()||e==="tablet"&&Ya.tablet()||typeof e=="function"&&e()===!0},UV=function(e){return et=SV(et,e),Un=Ob(),!et.disableMutationObserver&&!Og.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),et.disableMutationObserver=!0),et.disableMutationObserver||Og.ready("[data-aos]",Db),Lb(et.disable)||Nb()?Mb():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),["DOMContentLoaded","load"].indexOf(et.startEvent)===-1?document.addEventListener(et.startEvent,function(){rs(!0)}):window.addEventListener("load",function(){rs(!0)}),et.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&rs(!0),window.addEventListener("resize",xg(rs,et.debounceDelay,!0)),window.addEventListener("orientationchange",xg(rs,et.debounceDelay,!0)),Un)},Qd={init:UV,refresh:rs,refreshHard:Db};const $V=t=>(er("data-v-52dd2671"),t=t(),tr(),t),BV={key:0,class:"best-posts-section py-3"},jV={class:"container"},zV=$V(()=>v("div",{class:"row section-header"},[v("h3",{class:"mb-3 text-center"},"\uC778\uAE30 \uD3EC\uD1A0\uC2A4\uD31F")],-1)),qV={class:"row"},HV=["data-aos-delay"],WV={class:"card-container"},KV={name:"MyPageBestPosts",emits:["open-details-spot-modal2"],setup(t,{emit:e}){const n=Nn(),r=hn(),s=le(r.firebaseUser),i=u=>{console.log(u),e("open-details-spot-modal2",u)},o=async()=>{await n.fetchPhotoSpots(),console.log(n.photoSpots)};rr(async()=>{await o(),Qd.refresh()}),zn(()=>r.firebaseUser,async(u,d)=>{u!==d&&(s.value=u,await o())});const l=Ie(()=>n.photoSpots.filter(u=>u.userEmail===r.userEmail)),c=Ie(()=>s.value?l.value.slice().sort((u,d)=>d.likes-u.likes).slice(0,4):[]);return(u,d)=>s.value&&me(c).length>0?(z(),X("section",BV,[v("div",jV,[zV,v("div",qV,[(z(!0),X(Ve,null,Jt(me(c),(p,m)=>(z(),X("div",{key:p.id,class:"col-lg-3 col-sm-6 d-flex justify-content-center mb-6 position-relative","data-aos":"fade-up","data-aos-delay":m*200,"data-aos-duration":"800"},[v("div",WV,[ee(UL,{class:"like-counter position-absolute",color:"danger",count:p.likes,suffix:"\u2665\uFE0F",duration:3e3},null,8,["count"]),ee(IL,{class:"rotating-card"},{default:ht(()=>[ee(kL,{image:p.imgUrl},null,8,["image"]),ee(ML,{image:p.imgUrl,title:p.title,description:p.content,action:[{spotId:p.id,label:"Detail Spot"}],onCardClicked:y=>i(p.id)},null,8,["image","title","description","action","onCardClicked"])]),_:2},1024)])],8,HV))),128))])])])):nt("",!0)}};var GV=_t(KV,[["__scopeId","data-v-52dd2671"]]);const QV={class:"card-title d-flex flex-column justify-content-end",style:{height:"100%",width:"100%",padding:"8px"}},YV={class:"text-white mb-9 text-center"},XV={name:"PostCard",props:{image:{type:String,required:!0},title:{type:String,default:""},postId:{type:String,required:!0}},emits:["card-clicked"],setup(t,{emit:e}){const n=t,r=()=>{e("card-clicked",n.postId)};return(s,i)=>(z(),X("div",{onClick:r,class:"card-link",style:{cursor:"pointer"}},[v("div",{class:"card",style:Zn({backgroundImage:`url(${t.image})`,backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",height:"200px",width:"100%",borderRadius:"15px",overflow:"hidden",position:"relative",transition:"transform 0.5s ease"})},[v("div",QV,[v("h6",YV,Ae(t.title),1)])],4)]))}};var JV=_t(XV,[["__scopeId","data-v-6115c377"]]);const ZV=t=>(er("data-v-590762b2"),t=t(),tr(),t),e4={class:"photospot-section py-3"},t4={class:"container"},n4=ZV(()=>v("div",{class:"row section-header"},[v("h3",{class:"mb-3 text-center"},"\uB0B4 \uD3EC\uD1A0\uC2A4\uD31F")],-1)),r4={class:"row mt-4"},s4={name:"MyPagePosts",emits:["open-details-spot-modal"],setup(t,{emit:e}){const n=Nn(),r=hn();rr(async()=>{await n.fetchPhotoSpots(),Qd.refresh()});const s=o=>{e("open-details-spot-modal",o)},i=Ie(()=>n.photoSpots.filter(o=>o.userEmail===r.userEmail));return(o,l)=>(z(),X("section",e4,[v("div",t4,[n4,v("div",r4,[(z(!0),X(Ve,null,Jt(me(i),c=>(z(),X("div",{class:"col-md-4 col-sm-6 mb-4 d-flex justify-content-center",key:c.id,"data-aos":"zoom-in","data-aos-delay":"100","data-aos-duration":"500"},[ee(JV,{class:"photospot-card",image:c.imgUrl,title:c.title,postId:c.id,onCardClicked:u=>s(c.id)},null,8,["image","title","postId","onCardClicked"])]))),128))])])]))}};var i4=_t(s4,[["__scopeId","data-v-590762b2"]]);const Vb=t=>(er("data-v-3e1f60a7"),t=t(),tr(),t),o4=["onClick"],a4={class:"modal-dialog modal-dialog-centered modal-custom"},l4={class:"modal-content"},c4=Vb(()=>v("h5",{class:"modal-title"},"Edit Profile",-1)),u4={class:"modal-body"},h4=["onSubmit"],d4={class:"mb-3 text-center position-relative"},f4=["src"],p4={class:"d-flex justify-content-center mt-2"},m4=Vb(()=>v("label",{for:"fileInput",class:"btn btn-primary btn-sm me-2"},"Choose Photo",-1)),g4={class:"mb-3"},_4={class:"text-center"},y4=$e(" Save Changes "),v4={name:"EditModal",emits:["close"],setup(t,{emit:e}){const n=hn(),r=le(n.userName),s=le(null),i=le(n.profilePic),o=jo(),l=()=>{e("close")},c=p=>{const m=p.target.files[0];s.value=m;const y=new FileReader;y.onload=T=>{i.value=T.target.result},y.readAsDataURL(m)},u=()=>{s.value=null,i.value=n.profilePic},d=async()=>{try{await wO(n.firebaseUser,r.value,s.value),alert("\uD504\uB85C\uD544\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),l(),o.go(0)}catch(p){console.error("Error updating profile:",p),alert("\uD504\uB85C\uD544 \uC5C5\uB370\uC774\uD2B8 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}};return(p,m)=>(z(),X("div",{class:"modal fade show modal-fade-in",tabindex:"-1",style:{display:"block"},"aria-modal":"true",role:"dialog",onClick:jt(l,["self"])},[v("div",a4,[v("div",l4,[v("div",{class:"modal-header"},[c4,v("button",{type:"button",class:"btn-close",onClick:l,"aria-label":"Close"})]),v("div",u4,[v("form",{role:"form",class:"text-start",onSubmit:jt(d,["prevent"])},[v("div",d4,[v("img",{src:i.value,alt:"Current Profile Picture",class:"img-fluid rounded-circle mb-3 profile-pic-preview"},null,8,f4),v("div",p4,[v("input",{type:"file",onChange:c,accept:"image/*",class:"form-control d-none",id:"fileInput"},null,32),m4,s.value?(z(),X("button",{key:0,type:"button",class:"btn btn-outline-danger btn-sm",onClick:u},"Cancel")):nt("",!0)])]),v("div",g4,[__(v("input",{"onUpdate:modelValue":m[0]||(m[0]=y=>r.value=y),type:"text",class:"form-control",placeholder:"Enter your name"},null,512),[[L_,r.value]])]),v("div",_4,[ee(Ii,{class:"my-4 mb-2",variant:"gradient",color:"secondary",fullWidth:"",type:"submit"},{default:ht(()=>[y4]),_:1})])],40,h4)])])])],8,o4))}};var w4=_t(v4,[["__scopeId","data-v-3e1f60a7"]]);const b4={class:"container position-sticky z-index-sticky top-0"},E4={class:"row"},I4={class:"col-12"},T4=v("span",{class:"mask bg-gradient-dark opacity-8"},null,-1),A4=[T4],S4={class:"bg-gray-200"},R4={class:"card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4"},P4={name:"MyPageView",setup(t){const e=le(!1),n=()=>e.value=!0,r=()=>e.value=!1,s=hn(),i=le(null),o=le(!1),l=u=>{i.value=u,o.value=!0},c=async()=>{o.value=!1,i.value=null,await s.fetchUserData(s.firebaseUser)};return(u,d)=>(z(),X(Ve,null,[v("div",b4,[v("div",E4,[v("div",I4,[ee(Md,{sticky:!0})])])]),ee(qw,null,{default:ht(()=>[v("div",{class:"page-header min-height-400",style:Zn({backgroundImage:`url(${me(BN)})`}),loading:"lazy"},A4,4)]),_:1}),v("div",S4,[v("div",R4,[ee(yL,{onOpenModalEdit:n}),ee(GV,{onOpenDetailsSpotModal2:l}),ee(i4,{data:u.data,onOpenDetailsSpotModal:l},null,8,["data"])])]),ee(zw),e.value?(z(),Mt(w4,{key:0,onClose:r})):nt("",!0),o.value?(z(),Mt(Ld,{key:1,"post-id":i.value,onClose:c},null,8,["post-id"])):nt("",!0)],64))}};let qi=window.kakao;const k4={props:["options"],data(){return{mapInstance:null}},mounted(){qi=qi||window.kakao;var t=this.$refs.map;const{center:e,level:n}=this.options;this.mapInstance=new qi.maps.Map(t,{center:new qi.maps.LatLng(e.lat,e.lng),level:n})},watch:{"options.level"(t){this.mapInstance.setLevel(t)},"options.center"(t){this.mapInstance.panTo(new qi.maps.LatLng(t.lat,t.lng))}}},C4={ref:"map"};function x4(t,e,n,r,s,i){return z(),X("div",C4,[Mr(t.$slots,"overlay")],512)}var O4=_t(k4,[["render",x4]]);const N4=async t=>{if(!t)return;const e=fl(Vo,`images/${t.name}`);try{const n=await Id(e,t);return await Td(n.ref)}catch(n){console.error("Error uploading file: ",n)}};const D4=t=>(er("data-v-395a77a7"),t=t(),tr(),t),M4={class:"modal-content rounded-lg shadow-lg"},L4=D4(()=>v("h5",{class:"modal-title"},"Add a photo spot",-1)),V4={class:"modal-body"},F4=["onSubmit"],U4={key:0},$4={class:"mb-3"},B4={class:"mb-3 text-center"},j4={key:0,class:"position-relative"},z4=["src"],q4={key:1},H4={class:"text-center"},W4=$e(" ADD "),K4={name:"PostModal",props:{x:String,y:String,location:String,address:String},emits:["close"],setup(t,{emit:e}){const n=t,r=hn(),s=Nn(),i=jo(),o=le(""),l=le(""),c=le(null),u=le(""),d=le(""),p=le(""),m=()=>new Date().toISOString(),y=()=>{e("close")},T=k=>{const O=k.target.files[0];O&&(c.value=O,d.value=URL.createObjectURL(O))},N=()=>{c.value=null,d.value="",URL.revokeObjectURL(d.value)},P=async()=>{if(r.userEmail)if(o.value&&l.value&&c.value)try{u.value=await N4(c.value);const k=m(),O=n.location==="\uC7A5\uC18C \uC5C6\uC74C"?p.value:n.location,L=await iN(r.userEmail,o.value,l.value,u.value,O,n.address,n.x,n.y,0,k);s.photoSpots.push(L),alert("\uD3EC\uD1A0\uC2A4\uD31F\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),y(),i.go(0)}catch(k){console.error("Error during submission:",k),alert("\uB4F1\uB85D \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}else alert("\uB0B4\uC6A9\uC744 \uC804\uBD80 \uC785\uB825\uD574\uC8FC\uC138\uC694!");else alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4")};return(k,O)=>(z(),X("div",{class:"modal fade show modal-fade-in",tabindex:"-1",style:{display:"block"},"aria-modal":"true",role:"dialog",onClick:y},[v("div",{class:"modal-dialog modal-dialog-centered",onClick:O[4]||(O[4]=jt(()=>{},["stop"]))},[v("div",M4,[v("div",{class:"modal-header border-bottom-0"},[L4,v("button",{type:"button",class:"btn-close",onClick:y})]),v("div",V4,[v("form",{role:"form",class:"text-start",onSubmit:jt(P,["prevent"])},[t.location==="\uC7A5\uC18C \uC5C6\uC74C"?(z(),X("div",U4,[ee(vn,{modelValue:p.value,"onUpdate:modelValue":O[0]||(O[0]=L=>p.value=L),class:"input-group-dynamic mb-3",placeholder:"\uC7A5\uC18C \uBA85",type:"text"},null,8,["modelValue"])])):nt("",!0),ee(vn,{modelValue:o.value,"onUpdate:modelValue":O[1]||(O[1]=L=>o.value=L),class:"input-group-dynamic mb-3",placeholder:"\uC81C\uBAA9",type:"text"},null,8,["modelValue"]),v("div",$4,[__(v("textarea",{"onUpdate:modelValue":O[2]||(O[2]=L=>l.value=L),class:"form-control textarea-custom",placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",rows:"4"},null,512),[[L_,l.value]])]),v("div",B4,[v("input",{type:"file",onChange:T,accept:"image/*",class:"form-control d-none",ref:"fileInput"},null,544),d.value?(z(),X("div",j4,[v("img",{src:d.value,alt:"Image Preview",class:"img-thumbnail mb-2",style:{"max-width":"100%",height:"auto"}},null,8,z4),v("button",{type:"button",class:"btn btn-danger btn-sm position-absolute top-0 end-0",onClick:N},"X")])):(z(),X("div",q4,[v("button",{type:"button",class:"btn btn-outline-primary",onClick:O[3]||(O[3]=L=>k.$refs.fileInput.click())},"Select a picture")]))]),v("div",H4,[ee(Ii,{class:"my-4 mb-2",variant:"gradient",color:"dark",fullWidth:"",type:"submit"},{default:ht(()=>[W4]),_:1})])],40,F4)])])])]))}};var G4=_t(K4,[["__scopeId","data-v-395a77a7"]]);const Rs=t=>(er("data-v-1ed5c865"),t=t(),tr(),t),Q4={class:"modal fade show modal-fade-in",tabindex:"-1",style:{display:"block"},"aria-modal":"true",role:"dialog"},Y4={class:"modal-dialog modal-dialog-centered modal-xl"},X4={class:"modal-content"},J4={class:"modal-header"},Z4={class:"modal-title"},eF={class:"modal-body d-flex"},tF={class:"left-section"},nF=Rs(()=>v("h6",null,"Photo Spots",-1)),rF={key:0},sF=["onClick"],iF={class:"spot-card"},oF=["src"],aF={class:"spot-info"},lF={class:"spot-title"},cF=["onClick"],uF={class:"like-count"},hF=Rs(()=>v("span",{class:"heart-icon"},"\u2764",-1)),dF={key:1,class:"no-photo-spots-message"},fF={class:"right-section"},pF=Rs(()=>v("h6",null,"Spot Info",-1)),mF=Rs(()=>v("strong",null,"\uC704\uB3C4:",-1)),gF=Rs(()=>v("strong",null,"\uACBD\uB3C4:",-1)),_F=Rs(()=>v("strong",null,"\uC8FC\uC18C:",-1)),yF=Rs(()=>v("strong",null,"\uC7A5\uC18C\uBA85:",-1)),vF=$e(" Add a photo spot "),wF={name:"DetailsMarkerModal",props:{x:String,y:String,location:String,address:String},emits:["close","view"],setup(t,{emit:e}){const n=t,r=Nn(),s=hn(),i=Ie(()=>r.photoSpots.filter(T=>T.addr===n.address).sort((T,N)=>N.likes-T.likes)),o=le(n.x),l=le(n.y),c=le(n.location),u=le(n.address),d=async T=>{if(s.firebaseUser===null)alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694!");else try{await Hw(T),r.fetchPhotoSpots()}catch(N){console.error("Error incrementing like:",N)}},p=()=>{e("close")},m=()=>{s.firebaseUser===null?alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694!"):e("postPhotoSpot")},y=T=>{e("showDetailSpot",T)};return(T,N)=>(z(),X("div",Q4,[v("div",Y4,[v("div",X4,[v("div",J4,[v("h5",Z4,Ae(c.value),1),v("button",{onClick:p,class:"close-button"},"X")]),v("div",eF,[v("div",tF,[nF,me(i).length?(z(),X("ul",rF,[(z(!0),X(Ve,null,Jt(me(i),P=>(z(),X("li",{key:P.id,onClick:k=>y(P.id)},[v("div",iF,[v("img",{src:P.imgUrl,alt:"\uD3EC\uD1A0\uC2A4\uD31F \uC774\uBBF8\uC9C0",class:"spot-image"},null,8,oF),v("div",aF,[v("p",lF,Ae(P.title),1),v("button",{onClick:jt(k=>d(P.id),["stop"]),class:"like-button"},[v("span",uF,Ae(P.likes),1),hF],8,cF)])])],8,sF))),128))])):(z(),X("p",dF," \uCCAB \uD3EC\uD1A0\uC2A4\uD31F\uC744 \uB4F1\uB85D\uD574\uBCF4\uC138\uC694!! "))]),v("div",fF,[pF,v("p",null,[mF,$e(" "+Ae(l.value),1)]),v("p",null,[gF,$e(" "+Ae(o.value),1)]),v("p",null,[_F,$e(" "+Ae(u.value),1)]),v("p",null,[yF,$e(" "+Ae(c.value),1)]),ee(Ii,{class:"register-button mt-auto",variant:"gradient",color:"dark",fullWidth:"",onClick:m},{default:ht(()=>[vF]),_:1})])])])])]))}};var bF=_t(wF,[["__scopeId","data-v-1ed5c865"]]);const EF={components:{KakaoMap:O4,NavbarDefault:Md,PostModal:G4,DetailsMarkerModal:bF,DetailsSpotModal:Ld,MaterialInput:vn},setup(){const t=le(!1),e=le(!1),n=le(!1),r=le(""),s=le(""),i=le(""),o=le(""),l=le(""),c=le(null),u=le(""),d=jo();return{showModalPost:t,showModalMarker:e,showModalDetailSpot:n,selectSpotId:r,selectX:s,selectY:i,selectPlaceName:o,selectPlaceAddr:l,openModalPost:()=>t.value=!0,closeModalPost:()=>t.value=!1,openModalMarker:()=>e.value=!0,closeModalMarker:()=>e.value=!1,openModalDetailSpot:k=>{r.value=k,n.value=!0},closeModalDetailSpot:()=>n.value=!1,marker:c,keyword:u,router:d}},data(){return{mapOption:{center:{lat:37.497212875468755,lng:126.92761685591375},level:4},markers:[],clusterer:null,infowindow:null,geocoder:null}},mounted(){const t=this.$refs.kmap,e=Nn();this.$nextTick(async()=>{const{kakao:n}=window;this.infowindow=new n.maps.InfoWindow({zIndex:1}),this.geocoder=new n.maps.services.Geocoder,this.clusterer=new n.maps.MarkerClusterer({map:t.mapInstance,averageCenter:!0,minLevel:10,disableClickZoom:!0,styles:[{width:"30px",height:"30px",background:"rgba(255, 100, 100, .8)",borderRadius:"15px",color:"#fff",textAlign:"center",lineHeight:"31px"}]}),this.map=t.mapInstance,await e.fetchPhotoSpots(),e.photoSpots.forEach((o,l)=>{const c=new n.maps.LatLng(o.y,o.x),u=this.addMarker(c,l);n.maps.event.addListener(u,"mouseover",()=>{this.displayInfowindow(u,o.place)}),n.maps.event.addListener(u,"mouseout",()=>{this.infowindow.close()}),n.maps.event.addListener(u,"click",()=>{this.selectX=o.x,this.selectY=o.y,this.selectPlaceName=o.place,this.selectPlaceAddr=o.addr,this.openModalMarker()}),this.markers.push(u)});const s=new n.maps.ZoomControl;this.map.addControl(s,n.maps.ControlPosition.BOTTOMRIGHT);const i=new n.maps.MapTypeControl;this.map.addControl(i,n.maps.ControlPosition.BOTTOMRIGHT),n.maps.event.addListener(this.map,"click",o=>{const l=o.latLng;this.marker&&this.marker.setMap(null),this.marker=new n.maps.Marker({position:l,map:this.map}),this.searchDetailAddrFromCoords(l,(c,u)=>{if(u===n.maps.services.Status.OK){const d=c[0].address.address_name,p=`${d}`;this.infowindow.setContent(p),this.infowindow.open(this.map,this.marker),n.maps.event.addListener(this.marker,"click",()=>{this.selectX=l.La,this.selectY=l.Ma,this.selectPlaceName="\uC7A5\uC18C \uC5C6\uC74C",this.selectPlaceAddr=d,this.openModalMarker()})}})}),document.getElementById("keyword").addEventListener("keyup",o=>{o.key==="Enter"&&this.searchPlaces()}),this.searchPlaces()})},methods:{zoom(t){const e=Math.max(1,this.mapOption.level+t);this.mapOption.level=e,this.map.setLevel(e)},searchPlaces(){const{kakao:t}=window,e=this.keyword;if(!e.trim()){this.router.go(0);return}new t.maps.services.Places().keywordSearch(e,this.placesSearchCB.bind(this))},placesSearchCB(t,e,n){e===kakao.maps.services.Status.OK?(this.displayPlaces(t),this.displayPagination(n)):e===kakao.maps.services.Status.ZERO_RESULT?alert("\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."):e===kakao.maps.services.Status.ERROR&&alert("\uAC80\uC0C9 \uACB0\uACFC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")},displayPlaces(t){const e=document.getElementById("placesList"),n=document.getElementById("menu_wrap"),r=document.createDocumentFragment(),s=new kakao.maps.LatLngBounds;this.removeAllChildNods(e),this.removeMarker(),t.forEach((i,o)=>{const l=new kakao.maps.LatLng(i.y,i.x),c=this.addMarker(l,o),u=this.getListItem(o,i,l);s.extend(l),kakao.maps.event.addListener(c,"mouseover",()=>{this.displayInfowindow(c,i.place_name)}),kakao.maps.event.addListener(c,"mouseout",()=>{this.infowindow.close()}),kakao.maps.event.addListener(c,"click",()=>{this.centerMap(l)}),kakao.maps.event.addListener(c,"click",()=>{console.log(i.x,i.y,i.place_name,i.address_name),console.log(i),this.selectX=i.x,this.selectY=i.y,this.selectPlaceName=i.place_name,this.selectPlaceAddr=i.address_name,this.openModalMarker()}),r.appendChild(u)}),e.appendChild(r),n.scrollTop=0,this.map.setBounds(s),this.clusterer.addMarkers(this.markers)},getListItem(t,e,n){const r=document.createElement("li");let s=`<span class="markerbg marker_${t+1}"></span>
                     <div class="info">
                       <h5>${e.place_name}</h5>`;return e.road_address_name?s+=`<span>${e.road_address_name}</span>
                    <span class="jibun gray">${e.address_name}</span>`:s+=`<span>${e.address_name}</span>`,s+=`<span class="tel">${e.phone}</span>
                  </div>`,r.innerHTML=s,r.className="item",r.addEventListener("click",()=>{this.centerMap(n),this.map.setLevel(4)}),r},addMarker(t,e){const{kakao:n}=window,r="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",s=new n.maps.Size(36,37),i={spriteSize:new n.maps.Size(36,691),spriteOrigin:new n.maps.Point(0,e*46+10),offset:new n.maps.Point(13,37)},o=new n.maps.MarkerImage(r,s,i),l=new n.maps.Marker({position:t,image:o});return l.setMap(this.map),this.markers.push(l),l},removeMarker(){this.markers.forEach(t=>t.setMap(null)),this.markers=[]},displayPagination(t){const e=document.getElementById("pagination"),n=document.createDocumentFragment();for(;e.hasChildNodes();)e.removeChild(e.lastChild);for(let r=1;r<=t.last;r++){const s=document.createElement("a");s.href="#",s.innerHTML=r,r===t.current?s.className="on":s.onclick=()=>{t.gotoPage(r)},n.appendChild(s)}e.appendChild(n)},displayInfowindow(t,e){const n=`<div style="padding:5px;z-index:1;">${e}</div>`;this.infowindow.setContent(n),this.infowindow.open(this.map,t)},removeAllChildNods(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)},centerMap(t){this.map.setCenter(t)},searchDetailAddrFromCoords(t,e){this.geocoder.coord2Address(t.getLng(),t.getLat(),e)}}},IF={class:"container position-sticky z-index-sticky top-0"},TF={class:"row"},AF={class:"col-12"},SF={class:"map-area"},RF={id:"menu_wrap",class:"search-bar mx-4 bg_white"},PF={class:"option"},kF={class:"container"},CF=v("button",{type:"submit",style:{"margin-left":"10px",height:"100%"}},"Search",-1),xF=v("hr",null,null,-1),OF=v("ul",{id:"placesList"},null,-1),NF=v("div",{id:"pagination"},null,-1);function DF(t,e,n,r,s,i){const o=Os("NavbarDefault"),l=Os("KakaoMap"),c=Os("MaterialInput"),u=Os("DetailsMarkerModal"),d=Os("PostModal"),p=Os("DetailsSpotModal");return z(),X(Ve,null,[v("div",null,[v("div",IF,[v("div",TF,[v("div",AF,[ee(o,{sticky:!0})])])]),v("div",SF,[ee(l,{ref:"kmap",class:"kmap",options:s.mapOption},null,8,["options"]),v("div",RF,[v("div",PF,[v("div",kF,[v("form",{onSubmit:e[1]||(e[1]=jt((...m)=>i.searchPlaces&&i.searchPlaces(...m),["prevent"])),style:{display:"flex","align-items":"flex-start","justify-content":"flex-end"}},[ee(c,{class:"input-group-outline mb-4",label:{class:"form-label"},type:"text",modelValue:r.keyword,"onUpdate:modelValue":e[0]||(e[0]=m=>r.keyword=m),style:{"margin-left":"10px",height:"100%","background-color":"rgba(255, 255, 255, 0.8)"}},null,8,["modelValue"]),CF],32)])]),xF,OF,NF])])]),r.showModalMarker?(z(),Mt(u,{key:0,location:r.selectPlaceName,address:r.selectPlaceAddr,x:r.selectX,y:r.selectY,onClose:r.closeModalMarker,onPostPhotoSpot:r.openModalPost,onShowDetailSpot:r.openModalDetailSpot},null,8,["location","address","x","y","onClose","onPostPhotoSpot","onShowDetailSpot"])):nt("",!0),r.showModalPost?(z(),Mt(d,{key:1,location:r.selectPlaceName,address:r.selectPlaceAddr,x:r.selectX,y:r.selectY,onClose:r.closeModalPost},null,8,["location","address","x","y","onClose"])):nt("",!0),r.showModalDetailSpot?(z(),Mt(p,{key:2,"post-id":r.selectSpotId,onClose:r.closeModalDetailSpot},null,8,["post-id","onClose"])):nt("",!0)],64)}var MF=_t(EF,[["render",DF]]);const LF=MT({history:ZI("/"),routes:[{path:"/",name:"presentation",component:$N},{path:"/mypage",name:"mypage",component:P4},{path:"/map",name:"map",component:MF}]});window.onload=function(){for(var t=document.querySelectorAll(".btn"),e=0;e<t.length;e++)t[e].addEventListener("click",function(n){var r=n.target,s=r.querySelector(".ripple");s=document.createElement("span"),s.classList.add("ripple"),s.style.width=s.style.height=Math.max(r.offsetWidth,r.offsetHeight)+"px",r.appendChild(s),s.style.left=n.offsetX-s.offsetWidth/2+"px",s.style.top=n.offsetY-s.offsetHeight/2+"px",s.classList.add("ripple"),setTimeout(function(){s.parentElement.removeChild(s)},600)},!1)};var VF={install(){}};const pc=RI(VT);Qd.init();pc.use(CI());pc.use(LF);pc.use(VF);pc.mount("#app");
