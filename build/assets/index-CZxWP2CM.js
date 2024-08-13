function Xk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Xs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lE={exports:{}},td={},uE={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=Symbol.for("react.element"),Jk=Symbol.for("react.portal"),Zk=Symbol.for("react.fragment"),eC=Symbol.for("react.strict_mode"),tC=Symbol.for("react.profiler"),nC=Symbol.for("react.provider"),rC=Symbol.for("react.context"),iC=Symbol.for("react.forward_ref"),oC=Symbol.for("react.suspense"),sC=Symbol.for("react.memo"),aC=Symbol.for("react.lazy"),R0=Symbol.iterator;function lC(t){return t===null||typeof t!="object"?null:(t=R0&&t[R0]||t["@@iterator"],typeof t=="function"?t:null)}var cE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fE=Object.assign,dE={};function Js(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hE(){}hE.prototype=Js.prototype;function mg(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}var gg=mg.prototype=new hE;gg.constructor=mg;fE(gg,Js.prototype);gg.isPureReactComponent=!0;var N0=Array.isArray,pE=Object.prototype.hasOwnProperty,vg={current:null},mE={key:!0,ref:!0,__self:!0,__source:!0};function gE(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)pE.call(e,r)&&!mE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:tu,type:t,key:o,ref:s,props:i,_owner:vg.current}}function uC(t,e){return{$$typeof:tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yg(t){return typeof t=="object"&&t!==null&&t.$$typeof===tu}function cC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var O0=/\/+/g;function yh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cC(""+t.key):e.toString(36)}function Ac(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case tu:case Jk:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+yh(s,0):r,N0(i)?(n="",t!=null&&(n=t.replace(O0,"$&/")+"/"),Ac(i,e,n,"",function(c){return c})):i!=null&&(yg(i)&&(i=uC(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(O0,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",N0(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+yh(o,a);s+=Ac(o,e,n,u,i)}else if(u=lC(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+yh(o,a++),s+=Ac(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function qu(t,e,n){if(t==null)return t;var r=[],i=0;return Ac(t,r,"","",function(o){return e.call(n,o,i++)}),r}function fC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},kc={transition:null},dC={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:kc,ReactCurrentOwner:vg};function vE(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:qu,forEach:function(t,e,n){qu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qu(t,function(){e++}),e},toArray:function(t){return qu(t,function(e){return e})||[]},only:function(t){if(!yg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=Js;me.Fragment=Zk;me.Profiler=tC;me.PureComponent=mg;me.StrictMode=eC;me.Suspense=oC;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dC;me.act=vE;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=fE({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=vg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)pE.call(e,u)&&!mE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tu,type:t.type,key:i,ref:o,props:r,_owner:s}};me.createContext=function(t){return t={$$typeof:rC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nC,_context:t},t.Consumer=t};me.createElement=gE;me.createFactory=function(t){var e=gE.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:iC,render:t}};me.isValidElement=yg;me.lazy=function(t){return{$$typeof:aC,_payload:{_status:-1,_result:t},_init:fC}};me.memo=function(t,e){return{$$typeof:sC,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=kc.transition;kc.transition={};try{t()}finally{kc.transition=e}};me.unstable_act=vE;me.useCallback=function(t,e){return Kt.current.useCallback(t,e)};me.useContext=function(t){return Kt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};me.useEffect=function(t,e){return Kt.current.useEffect(t,e)};me.useId=function(){return Kt.current.useId()};me.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Kt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};me.useRef=function(t){return Kt.current.useRef(t)};me.useState=function(t){return Kt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Kt.current.useTransition()};me.version="18.3.1";uE.exports=me;var V=uE.exports;const jt=Xs(V),hC=Xk({__proto__:null,default:jt},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pC=V,mC=Symbol.for("react.element"),gC=Symbol.for("react.fragment"),vC=Object.prototype.hasOwnProperty,yC=pC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_C={key:!0,ref:!0,__self:!0,__source:!0};function yE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)vC.call(e,r)&&!_C.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mC,type:t,key:o,ref:s,props:i,_owner:yC.current}}td.Fragment=gC;td.jsx=yE;td.jsxs=yE;lE.exports=td;var b=lE.exports,yp={},_E={exports:{}},_n={},wE={exports:{}},EE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,J){var oe=F.length;F.push(J);e:for(;0<oe;){var pe=oe-1>>>1,de=F[pe];if(0<i(de,J))F[pe]=J,F[oe]=de,oe=pe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var J=F[0],oe=F.pop();if(oe!==J){F[0]=oe;e:for(var pe=0,de=F.length,xe=de>>>1;pe<xe;){var xt=2*(pe+1)-1,_t=F[xt],wt=xt+1,pt=F[wt];if(0>i(_t,oe))wt<de&&0>i(pt,_t)?(F[pe]=pt,F[wt]=oe,pe=wt):(F[pe]=_t,F[xt]=oe,pe=xt);else if(wt<de&&0>i(pt,oe))F[pe]=pt,F[wt]=oe,pe=wt;else break e}}return J}function i(F,J){var oe=F.sortIndex-J.sortIndex;return oe!==0?oe:F.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],c=[],f=1,h=null,p=3,g=!1,T=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(F){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=F)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function O(F){if(C=!1,I(F),!T)if(n(u)!==null)T=!0,Xt(j);else{var J=n(c);J!==null&&Q(O,J.startTime-F)}}function j(F,J){T=!1,C&&(C=!1,_(w),w=-1),g=!0;var oe=p;try{for(I(J),h=n(u);h!==null&&(!(h.expirationTime>J)||F&&!R());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,p=h.priorityLevel;var de=pe(h.expirationTime<=J);J=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(u)&&r(u),I(J)}else r(u);h=n(u)}if(h!==null)var xe=!0;else{var xt=n(c);xt!==null&&Q(O,xt.startTime-J),xe=!1}return xe}finally{h=null,p=oe,g=!1}}var U=!1,E=null,w=-1,A=5,x=-1;function R(){return!(t.unstable_now()-x<A)}function D(){if(E!==null){var F=t.unstable_now();x=F;var J=!0;try{J=E(!0,F)}finally{J?P():(U=!1,E=null)}}else U=!1}var P;if(typeof v=="function")P=function(){v(D)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,cn=ht.port2;ht.port1.onmessage=D,P=function(){cn.postMessage(null)}}else P=function(){k(D,0)};function Xt(F){E=F,U||(U=!0,P())}function Q(F,J){w=k(function(){F(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,Xt(j))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var oe=p;p=J;try{return F()}finally{p=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,J){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var oe=p;p=F;try{return J()}finally{p=oe}},t.unstable_scheduleCallback=function(F,J,oe){var pe=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?pe+oe:pe):oe=pe,F){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=oe+de,F={id:f++,callback:J,priorityLevel:F,startTime:oe,expirationTime:de,sortIndex:-1},oe>pe?(F.sortIndex=oe,e(c,F),n(u)===null&&F===n(c)&&(C?(_(w),w=-1):C=!0,Q(O,oe-pe))):(F.sortIndex=de,e(u,F),T||g||(T=!0,Xt(j))),F},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(F){var J=p;return function(){var oe=p;p=J;try{return F.apply(this,arguments)}finally{p=oe}}}})(EE);wE.exports=EE;var wC=wE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EC=V,vn=wC;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var TE=new Set,gl={};function Ro(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(gl[t]=e,t=0;t<e.length;t++)TE.add(e[t])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=Object.prototype.hasOwnProperty,TC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D0={},M0={};function IC(t){return _p.call(M0,t)?!0:_p.call(D0,t)?!1:TC.test(t)?M0[t]=!0:(D0[t]=!0,!1)}function SC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bC(t,e,n,r){if(e===null||typeof e>"u"||SC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _g=/[\-:]([a-z])/g;function wg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_g,wg);Ct[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_g,wg);Ct[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_g,wg);Ct[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eg(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bC(e,n,i,r)&&(n=null),r||i===null?IC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $r=EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),Xo=Symbol.for("react.portal"),Jo=Symbol.for("react.fragment"),Tg=Symbol.for("react.strict_mode"),wp=Symbol.for("react.profiler"),IE=Symbol.for("react.provider"),SE=Symbol.for("react.context"),Ig=Symbol.for("react.forward_ref"),Ep=Symbol.for("react.suspense"),Tp=Symbol.for("react.suspense_list"),Sg=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),bE=Symbol.for("react.offscreen"),L0=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=L0&&t[L0]||t["@@iterator"],typeof t=="function"?t:null)}var Ge=Object.assign,_h;function $a(t){if(_h===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_h=e&&e[1]||""}return`
`+_h+t}var wh=!1;function Eh(t,e){if(!t||wh)return"";wh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{wh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$a(t):""}function AC(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=Eh(t.type,!1),t;case 11:return t=Eh(t.type.render,!1),t;case 1:return t=Eh(t.type,!0),t;default:return""}}function Ip(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jo:return"Fragment";case Xo:return"Portal";case wp:return"Profiler";case Tg:return"StrictMode";case Ep:return"Suspense";case Tp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case SE:return(t.displayName||"Context")+".Consumer";case IE:return(t._context.displayName||"Context")+".Provider";case Ig:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sg:return e=t.displayName||null,e!==null?e:Ip(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return Ip(t(e))}catch{}}return null}function kC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ip(e);case 8:return e===Tg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function AE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CC(t){var e=AE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yu(t){t._valueTracker||(t._valueTracker=CC(t))}function kE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=AE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sp(t,e){var n=e.checked;return Ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function V0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function CE(t,e){e=e.checked,e!=null&&Eg(t,"checked",e,!1)}function bp(t,e){CE(t,e);var n=ki(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ap(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ap(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function F0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ap(t,e,n){(e!=="number"||nf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var za=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(za(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function PE(t,e){var n=ki(e.value),r=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function U0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ku,RE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ku=Ku||document.createElement("div"),Ku.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ku.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PC=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(t){PC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Za[e]=Za[t]})});function NE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Za.hasOwnProperty(t)&&Za[t]?(""+e).trim():e+"px"}function OE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=NE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xC=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pp(t,e){if(e){if(xC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function xp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=null;function bg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Np=null,ms=null,gs=null;function $0(t){if(t=iu(t)){if(typeof Np!="function")throw Error(H(280));var e=t.stateNode;e&&(e=sd(e),Np(t.stateNode,t.type,e))}}function DE(t){ms?gs?gs.push(t):gs=[t]:ms=t}function ME(){if(ms){var t=ms,e=gs;if(gs=ms=null,$0(t),e)for(t=0;t<e.length;t++)$0(e[t])}}function LE(t,e){return t(e)}function VE(){}var Th=!1;function FE(t,e,n){if(Th)return t(e,n);Th=!0;try{return LE(t,e,n)}finally{Th=!1,(ms!==null||gs!==null)&&(VE(),ME())}}function yl(t,e){var n=t.stateNode;if(n===null)return null;var r=sd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Op=!1;if(Pr)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){Op=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{Op=!1}function RC(t,e,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var el=!1,rf=null,of=!1,Dp=null,NC={onError:function(t){el=!0,rf=t}};function OC(t,e,n,r,i,o,s,a,u){el=!1,rf=null,RC.apply(NC,arguments)}function DC(t,e,n,r,i,o,s,a,u){if(OC.apply(this,arguments),el){if(el){var c=rf;el=!1,rf=null}else throw Error(H(198));of||(of=!0,Dp=c)}}function No(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z0(t){if(No(t)!==t)throw Error(H(188))}function MC(t){var e=t.alternate;if(!e){if(e=No(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return z0(i),t;if(o===r)return z0(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function UE(t){return t=MC(t),t!==null?$E(t):null}function $E(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$E(t);if(e!==null)return e;t=t.sibling}return null}var zE=vn.unstable_scheduleCallback,B0=vn.unstable_cancelCallback,LC=vn.unstable_shouldYield,VC=vn.unstable_requestPaint,Je=vn.unstable_now,FC=vn.unstable_getCurrentPriorityLevel,Ag=vn.unstable_ImmediatePriority,BE=vn.unstable_UserBlockingPriority,sf=vn.unstable_NormalPriority,jC=vn.unstable_LowPriority,WE=vn.unstable_IdlePriority,nd=null,or=null;function UC(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(nd,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:BC,$C=Math.log,zC=Math.LN2;function BC(t){return t>>>=0,t===0?32:31-($C(t)/zC|0)|0}var Qu=64,Xu=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function af(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ba(a):(o&=s,o!==0&&(r=Ba(o)))}else s=n&~i,s!==0?r=Ba(s):o!==0&&(r=Ba(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function WC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Un(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=WC(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function Mp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function HE(){var t=Qu;return Qu<<=1,!(Qu&4194240)&&(Qu=64),t}function Ih(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function qC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Un(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function kg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function qE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var GE,Cg,YE,KE,QE,Lp=!1,Ju=[],hi=null,pi=null,mi=null,_l=new Map,wl=new Map,ri=[],GC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function W0(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":_l.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(e.pointerId)}}function Na(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=iu(e),e!==null&&Cg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YC(t,e,n,r,i){switch(e){case"focusin":return hi=Na(hi,t,e,n,r,i),!0;case"dragenter":return pi=Na(pi,t,e,n,r,i),!0;case"mouseover":return mi=Na(mi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return _l.set(o,Na(_l.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wl.set(o,Na(wl.get(o)||null,t,e,n,r,i)),!0}return!1}function XE(t){var e=Zi(t.target);if(e!==null){var n=No(e);if(n!==null){if(e=n.tag,e===13){if(e=jE(n),e!==null){t.blockedOn=e,QE(t.priority,function(){YE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rp=r,n.target.dispatchEvent(r),Rp=null}else return e=iu(n),e!==null&&Cg(e),t.blockedOn=n,!1;e.shift()}return!0}function H0(t,e,n){Cc(t)&&n.delete(e)}function KC(){Lp=!1,hi!==null&&Cc(hi)&&(hi=null),pi!==null&&Cc(pi)&&(pi=null),mi!==null&&Cc(mi)&&(mi=null),_l.forEach(H0),wl.forEach(H0)}function Oa(t,e){t.blockedOn===e&&(t.blockedOn=null,Lp||(Lp=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,KC)))}function El(t){function e(i){return Oa(i,t)}if(0<Ju.length){Oa(Ju[0],t);for(var n=1;n<Ju.length;n++){var r=Ju[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&Oa(hi,t),pi!==null&&Oa(pi,t),mi!==null&&Oa(mi,t),_l.forEach(e),wl.forEach(e),n=0;n<ri.length;n++)r=ri[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ri.length&&(n=ri[0],n.blockedOn===null);)XE(n),n.blockedOn===null&&ri.shift()}var vs=$r.ReactCurrentBatchConfig,lf=!0;function QC(t,e,n,r){var i=Ce,o=vs.transition;vs.transition=null;try{Ce=1,Pg(t,e,n,r)}finally{Ce=i,vs.transition=o}}function XC(t,e,n,r){var i=Ce,o=vs.transition;vs.transition=null;try{Ce=4,Pg(t,e,n,r)}finally{Ce=i,vs.transition=o}}function Pg(t,e,n,r){if(lf){var i=Vp(t,e,n,r);if(i===null)Oh(t,e,r,uf,n),W0(t,r);else if(YC(i,t,e,n,r))r.stopPropagation();else if(W0(t,r),e&4&&-1<GC.indexOf(t)){for(;i!==null;){var o=iu(i);if(o!==null&&GE(o),o=Vp(t,e,n,r),o===null&&Oh(t,e,r,uf,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Oh(t,e,r,null,n)}}var uf=null;function Vp(t,e,n,r){if(uf=null,t=bg(r),t=Zi(t),t!==null)if(e=No(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uf=t,null}function JE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FC()){case Ag:return 1;case BE:return 4;case sf:case jC:return 16;case WE:return 536870912;default:return 16}default:return 16}}var ui=null,xg=null,Pc=null;function ZE(){if(Pc)return Pc;var t,e=xg,n=e.length,r,i="value"in ui?ui.value:ui.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Pc=i.slice(t,1<r?1-r:void 0)}function xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zu(){return!0}function q0(){return!1}function wn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zu:q0,this.isPropagationStopped=q0,this}return Ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zu)},persist:function(){},isPersistent:Zu}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rg=wn(Zs),ru=Ge({},Zs,{view:0,detail:0}),JC=wn(ru),Sh,bh,Da,rd=Ge({},ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ng,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(Sh=t.screenX-Da.screenX,bh=t.screenY-Da.screenY):bh=Sh=0,Da=t),Sh)},movementY:function(t){return"movementY"in t?t.movementY:bh}}),G0=wn(rd),ZC=Ge({},rd,{dataTransfer:0}),eP=wn(ZC),tP=Ge({},ru,{relatedTarget:0}),Ah=wn(tP),nP=Ge({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),rP=wn(nP),iP=Ge({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oP=wn(iP),sP=Ge({},Zs,{data:0}),Y0=wn(sP),aP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uP[t])?!!e[t]:!1}function Ng(){return cP}var fP=Ge({},ru,{key:function(t){if(t.key){var e=aP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ng,charCode:function(t){return t.type==="keypress"?xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dP=wn(fP),hP=Ge({},rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=wn(hP),pP=Ge({},ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ng}),mP=wn(pP),gP=Ge({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),vP=wn(gP),yP=Ge({},rd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_P=wn(yP),wP=[9,13,27,32],Og=Pr&&"CompositionEvent"in window,tl=null;Pr&&"documentMode"in document&&(tl=document.documentMode);var EP=Pr&&"TextEvent"in window&&!tl,eT=Pr&&(!Og||tl&&8<tl&&11>=tl),Q0=" ",X0=!1;function tT(t,e){switch(t){case"keyup":return wP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zo=!1;function TP(t,e){switch(t){case"compositionend":return nT(e);case"keypress":return e.which!==32?null:(X0=!0,Q0);case"textInput":return t=e.data,t===Q0&&X0?null:t;default:return null}}function IP(t,e){if(Zo)return t==="compositionend"||!Og&&tT(t,e)?(t=ZE(),Pc=xg=ui=null,Zo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eT&&e.locale!=="ko"?null:e.data;default:return null}}var SP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function J0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SP[t.type]:e==="textarea"}function rT(t,e,n,r){DE(r),e=cf(e,"onChange"),0<e.length&&(n=new Rg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var nl=null,Tl=null;function bP(t){pT(t,0)}function id(t){var e=ns(t);if(kE(e))return t}function AP(t,e){if(t==="change")return e}var iT=!1;if(Pr){var kh;if(Pr){var Ch="oninput"in document;if(!Ch){var Z0=document.createElement("div");Z0.setAttribute("oninput","return;"),Ch=typeof Z0.oninput=="function"}kh=Ch}else kh=!1;iT=kh&&(!document.documentMode||9<document.documentMode)}function e_(){nl&&(nl.detachEvent("onpropertychange",oT),Tl=nl=null)}function oT(t){if(t.propertyName==="value"&&id(Tl)){var e=[];rT(e,Tl,t,bg(t)),FE(bP,e)}}function kP(t,e,n){t==="focusin"?(e_(),nl=e,Tl=n,nl.attachEvent("onpropertychange",oT)):t==="focusout"&&e_()}function CP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return id(Tl)}function PP(t,e){if(t==="click")return id(e)}function xP(t,e){if(t==="input"||t==="change")return id(e)}function RP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:RP;function Il(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_p.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function t_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function n_(t,e){var n=t_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=t_(n)}}function sT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function aT(){for(var t=window,e=nf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nf(t.document)}return e}function Dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NP(t){var e=aT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sT(n.ownerDocument.documentElement,n)){if(r!==null&&Dg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=n_(n,o);var s=n_(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OP=Pr&&"documentMode"in document&&11>=document.documentMode,es=null,Fp=null,rl=null,jp=!1;function r_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jp||es==null||es!==nf(r)||(r=es,"selectionStart"in r&&Dg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rl&&Il(rl,r)||(rl=r,r=cf(Fp,"onSelect"),0<r.length&&(e=new Rg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=es)))}function ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:ec("Animation","AnimationEnd"),animationiteration:ec("Animation","AnimationIteration"),animationstart:ec("Animation","AnimationStart"),transitionend:ec("Transition","TransitionEnd")},Ph={},lT={};Pr&&(lT=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function od(t){if(Ph[t])return Ph[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lT)return Ph[t]=e[n];return t}var uT=od("animationend"),cT=od("animationiteration"),fT=od("animationstart"),dT=od("transitionend"),hT=new Map,i_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Li(t,e){hT.set(t,e),Ro(e,[t])}for(var xh=0;xh<i_.length;xh++){var Rh=i_[xh],DP=Rh.toLowerCase(),MP=Rh[0].toUpperCase()+Rh.slice(1);Li(DP,"on"+MP)}Li(uT,"onAnimationEnd");Li(cT,"onAnimationIteration");Li(fT,"onAnimationStart");Li("dblclick","onDoubleClick");Li("focusin","onFocus");Li("focusout","onBlur");Li(dT,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function o_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DC(r,e,void 0,t),t.currentTarget=null}function pT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;o_(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;o_(i,a,c),o=u}}}if(of)throw t=Dp,of=!1,Dp=null,t}function Fe(t,e){var n=e[Wp];n===void 0&&(n=e[Wp]=new Set);var r=t+"__bubble";n.has(r)||(mT(e,t,2,!1),n.add(r))}function Nh(t,e,n){var r=0;e&&(r|=4),mT(n,t,r,e)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Sl(t){if(!t[tc]){t[tc]=!0,TE.forEach(function(n){n!=="selectionchange"&&(LP.has(n)||Nh(n,!1,t),Nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tc]||(e[tc]=!0,Nh("selectionchange",!1,e))}}function mT(t,e,n,r){switch(JE(e)){case 1:var i=QC;break;case 4:i=XC;break;default:i=Pg}n=i.bind(null,e,n,t),i=void 0,!Op||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oh(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zi(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}FE(function(){var c=o,f=bg(n),h=[];e:{var p=hT.get(t);if(p!==void 0){var g=Rg,T=t;switch(t){case"keypress":if(xc(n)===0)break e;case"keydown":case"keyup":g=dP;break;case"focusin":T="focus",g=Ah;break;case"focusout":T="blur",g=Ah;break;case"beforeblur":case"afterblur":g=Ah;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=G0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mP;break;case uT:case cT:case fT:g=rP;break;case dT:g=vP;break;case"scroll":g=JC;break;case"wheel":g=_P;break;case"copy":case"cut":case"paste":g=oP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=K0}var C=(e&4)!==0,k=!C&&t==="scroll",_=C?p!==null?p+"Capture":null:p;C=[];for(var v=c,I;v!==null;){I=v;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,_!==null&&(O=yl(v,_),O!=null&&C.push(bl(v,O,I)))),k)break;v=v.return}0<C.length&&(p=new g(p,T,null,n,f),h.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Rp&&(T=n.relatedTarget||n.fromElement)&&(Zi(T)||T[xr]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=c,T=T?Zi(T):null,T!==null&&(k=No(T),T!==k||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=c),g!==T)){if(C=G0,O="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=K0,O="onPointerLeave",_="onPointerEnter",v="pointer"),k=g==null?p:ns(g),I=T==null?p:ns(T),p=new C(O,v+"leave",g,n,f),p.target=k,p.relatedTarget=I,O=null,Zi(f)===c&&(C=new C(_,v+"enter",T,n,f),C.target=I,C.relatedTarget=k,O=C),k=O,g&&T)t:{for(C=g,_=T,v=0,I=C;I;I=Wo(I))v++;for(I=0,O=_;O;O=Wo(O))I++;for(;0<v-I;)C=Wo(C),v--;for(;0<I-v;)_=Wo(_),I--;for(;v--;){if(C===_||_!==null&&C===_.alternate)break t;C=Wo(C),_=Wo(_)}C=null}else C=null;g!==null&&s_(h,p,g,C,!1),T!==null&&k!==null&&s_(h,k,T,C,!0)}}e:{if(p=c?ns(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var j=AP;else if(J0(p))if(iT)j=xP;else{j=CP;var U=kP}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=PP);if(j&&(j=j(t,c))){rT(h,j,n,f);break e}U&&U(t,p,c),t==="focusout"&&(U=p._wrapperState)&&U.controlled&&p.type==="number"&&Ap(p,"number",p.value)}switch(U=c?ns(c):window,t){case"focusin":(J0(U)||U.contentEditable==="true")&&(es=U,Fp=c,rl=null);break;case"focusout":rl=Fp=es=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,r_(h,n,f);break;case"selectionchange":if(OP)break;case"keydown":case"keyup":r_(h,n,f)}var E;if(Og)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Zo?tT(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(eT&&n.locale!=="ko"&&(Zo||w!=="onCompositionStart"?w==="onCompositionEnd"&&Zo&&(E=ZE()):(ui=f,xg="value"in ui?ui.value:ui.textContent,Zo=!0)),U=cf(c,w),0<U.length&&(w=new Y0(w,t,null,n,f),h.push({event:w,listeners:U}),E?w.data=E:(E=nT(n),E!==null&&(w.data=E)))),(E=EP?TP(t,n):IP(t,n))&&(c=cf(c,"onBeforeInput"),0<c.length&&(f=new Y0("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=E))}pT(h,e)})}function bl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cf(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yl(t,n),o!=null&&r.unshift(bl(t,o,i)),o=yl(t,e),o!=null&&r.push(bl(t,o,i))),t=t.return}return r}function Wo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function s_(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=yl(n,o),u!=null&&s.unshift(bl(n,u,a))):i||(u=yl(n,o),u!=null&&s.push(bl(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var VP=/\r\n?/g,FP=/\u0000|\uFFFD/g;function a_(t){return(typeof t=="string"?t:""+t).replace(VP,`
`).replace(FP,"")}function nc(t,e,n){if(e=a_(e),a_(t)!==e&&n)throw Error(H(425))}function ff(){}var Up=null,$p=null;function zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bp=typeof setTimeout=="function"?setTimeout:void 0,jP=typeof clearTimeout=="function"?clearTimeout:void 0,l_=typeof Promise=="function"?Promise:void 0,UP=typeof queueMicrotask=="function"?queueMicrotask:typeof l_<"u"?function(t){return l_.resolve(null).then(t).catch($P)}:Bp;function $P(t){setTimeout(function(){throw t})}function Dh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),El(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);El(e)}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function u_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Zn="__reactFiber$"+ea,Al="__reactProps$"+ea,xr="__reactContainer$"+ea,Wp="__reactEvents$"+ea,zP="__reactListeners$"+ea,BP="__reactHandles$"+ea;function Zi(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u_(t);t!==null;){if(n=t[Zn])return n;t=u_(t)}return e}t=n,n=t.parentNode}return null}function iu(t){return t=t[Zn]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function sd(t){return t[Al]||null}var Hp=[],rs=-1;function Vi(t){return{current:t}}function $e(t){0>rs||(t.current=Hp[rs],Hp[rs]=null,rs--)}function De(t,e){rs++,Hp[rs]=t.current,t.current=e}var Ci={},Ut=Vi(Ci),an=Vi(!1),po=Ci;function Ps(t,e){var n=t.type.contextTypes;if(!n)return Ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ln(t){return t=t.childContextTypes,t!=null}function df(){$e(an),$e(Ut)}function c_(t,e,n){if(Ut.current!==Ci)throw Error(H(168));De(Ut,e),De(an,n)}function gT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,kC(t)||"Unknown",i));return Ge({},n,r)}function hf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ci,po=Ut.current,De(Ut,t),De(an,an.current),!0}function f_(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=gT(t,e,po),r.__reactInternalMemoizedMergedChildContext=t,$e(an),$e(Ut),De(Ut,t)):$e(an),De(an,n)}var Er=null,ad=!1,Mh=!1;function vT(t){Er===null?Er=[t]:Er.push(t)}function WP(t){ad=!0,vT(t)}function Fi(){if(!Mh&&Er!==null){Mh=!0;var t=0,e=Ce;try{var n=Er;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Er=null,ad=!1}catch(i){throw Er!==null&&(Er=Er.slice(t+1)),zE(Ag,Fi),i}finally{Ce=e,Mh=!1}}return null}var is=[],os=0,pf=null,mf=0,In=[],Sn=0,mo=null,Tr=1,Ir="";function Yi(t,e){is[os++]=mf,is[os++]=pf,pf=t,mf=e}function yT(t,e,n){In[Sn++]=Tr,In[Sn++]=Ir,In[Sn++]=mo,mo=t;var r=Tr;t=Ir;var i=32-Un(r)-1;r&=~(1<<i),n+=1;var o=32-Un(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Tr=1<<32-Un(e)+i|n<<i|r,Ir=o+t}else Tr=1<<o|n<<i|r,Ir=t}function Mg(t){t.return!==null&&(Yi(t,1),yT(t,1,0))}function Lg(t){for(;t===pf;)pf=is[--os],is[os]=null,mf=is[--os],is[os]=null;for(;t===mo;)mo=In[--Sn],In[Sn]=null,Ir=In[--Sn],In[Sn]=null,Tr=In[--Sn],In[Sn]=null}var gn=null,pn=null,We=!1,Vn=null;function _T(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,pn=gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mo!==null?{id:Tr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,pn=null,!0):!1;default:return!1}}function qp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gp(t){if(We){var e=pn;if(e){var n=e;if(!d_(t,e)){if(qp(t))throw Error(H(418));e=gi(n.nextSibling);var r=gn;e&&d_(t,e)?_T(r,n):(t.flags=t.flags&-4097|2,We=!1,gn=t)}}else{if(qp(t))throw Error(H(418));t.flags=t.flags&-4097|2,We=!1,gn=t}}}function h_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function rc(t){if(t!==gn)return!1;if(!We)return h_(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zp(t.type,t.memoizedProps)),e&&(e=pn)){if(qp(t))throw wT(),Error(H(418));for(;e;)_T(t,e),e=gi(e.nextSibling)}if(h_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=gn?gi(t.stateNode.nextSibling):null;return!0}function wT(){for(var t=pn;t;)t=gi(t.nextSibling)}function xs(){pn=gn=null,We=!1}function Vg(t){Vn===null?Vn=[t]:Vn.push(t)}var HP=$r.ReactCurrentBatchConfig;function Ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function ic(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function p_(t){var e=t._init;return e(t._payload)}function ET(t){function e(_,v){if(t){var I=_.deletions;I===null?(_.deletions=[v],_.flags|=16):I.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=wi(_,v),_.index=0,_.sibling=null,_}function o(_,v,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<v?(_.flags|=2,v):I):(_.flags|=2,v)):(_.flags|=1048576,v)}function s(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,v,I,O){return v===null||v.tag!==6?(v=zh(I,_.mode,O),v.return=_,v):(v=i(v,I),v.return=_,v)}function u(_,v,I,O){var j=I.type;return j===Jo?f(_,v,I.props.children,O,I.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ti&&p_(j)===v.type)?(O=i(v,I.props),O.ref=Ma(_,v,I),O.return=_,O):(O=Vc(I.type,I.key,I.props,null,_.mode,O),O.ref=Ma(_,v,I),O.return=_,O)}function c(_,v,I,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Bh(I,_.mode,O),v.return=_,v):(v=i(v,I.children||[]),v.return=_,v)}function f(_,v,I,O,j){return v===null||v.tag!==7?(v=ao(I,_.mode,O,j),v.return=_,v):(v=i(v,I),v.return=_,v)}function h(_,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zh(""+v,_.mode,I),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gu:return I=Vc(v.type,v.key,v.props,null,_.mode,I),I.ref=Ma(_,null,v),I.return=_,I;case Xo:return v=Bh(v,_.mode,I),v.return=_,v;case ti:var O=v._init;return h(_,O(v._payload),I)}if(za(v)||xa(v))return v=ao(v,_.mode,I,null),v.return=_,v;ic(_,v)}return null}function p(_,v,I,O){var j=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:a(_,v,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Gu:return I.key===j?u(_,v,I,O):null;case Xo:return I.key===j?c(_,v,I,O):null;case ti:return j=I._init,p(_,v,j(I._payload),O)}if(za(I)||xa(I))return j!==null?null:f(_,v,I,O,null);ic(_,I)}return null}function g(_,v,I,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return _=_.get(I)||null,a(v,_,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Gu:return _=_.get(O.key===null?I:O.key)||null,u(v,_,O,j);case Xo:return _=_.get(O.key===null?I:O.key)||null,c(v,_,O,j);case ti:var U=O._init;return g(_,v,I,U(O._payload),j)}if(za(O)||xa(O))return _=_.get(I)||null,f(v,_,O,j,null);ic(v,O)}return null}function T(_,v,I,O){for(var j=null,U=null,E=v,w=v=0,A=null;E!==null&&w<I.length;w++){E.index>w?(A=E,E=null):A=E.sibling;var x=p(_,E,I[w],O);if(x===null){E===null&&(E=A);break}t&&E&&x.alternate===null&&e(_,E),v=o(x,v,w),U===null?j=x:U.sibling=x,U=x,E=A}if(w===I.length)return n(_,E),We&&Yi(_,w),j;if(E===null){for(;w<I.length;w++)E=h(_,I[w],O),E!==null&&(v=o(E,v,w),U===null?j=E:U.sibling=E,U=E);return We&&Yi(_,w),j}for(E=r(_,E);w<I.length;w++)A=g(E,_,w,I[w],O),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?w:A.key),v=o(A,v,w),U===null?j=A:U.sibling=A,U=A);return t&&E.forEach(function(R){return e(_,R)}),We&&Yi(_,w),j}function C(_,v,I,O){var j=xa(I);if(typeof j!="function")throw Error(H(150));if(I=j.call(I),I==null)throw Error(H(151));for(var U=j=null,E=v,w=v=0,A=null,x=I.next();E!==null&&!x.done;w++,x=I.next()){E.index>w?(A=E,E=null):A=E.sibling;var R=p(_,E,x.value,O);if(R===null){E===null&&(E=A);break}t&&E&&R.alternate===null&&e(_,E),v=o(R,v,w),U===null?j=R:U.sibling=R,U=R,E=A}if(x.done)return n(_,E),We&&Yi(_,w),j;if(E===null){for(;!x.done;w++,x=I.next())x=h(_,x.value,O),x!==null&&(v=o(x,v,w),U===null?j=x:U.sibling=x,U=x);return We&&Yi(_,w),j}for(E=r(_,E);!x.done;w++,x=I.next())x=g(E,_,w,x.value,O),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?w:x.key),v=o(x,v,w),U===null?j=x:U.sibling=x,U=x);return t&&E.forEach(function(D){return e(_,D)}),We&&Yi(_,w),j}function k(_,v,I,O){if(typeof I=="object"&&I!==null&&I.type===Jo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Gu:e:{for(var j=I.key,U=v;U!==null;){if(U.key===j){if(j=I.type,j===Jo){if(U.tag===7){n(_,U.sibling),v=i(U,I.props.children),v.return=_,_=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ti&&p_(j)===U.type){n(_,U.sibling),v=i(U,I.props),v.ref=Ma(_,U,I),v.return=_,_=v;break e}n(_,U);break}else e(_,U);U=U.sibling}I.type===Jo?(v=ao(I.props.children,_.mode,O,I.key),v.return=_,_=v):(O=Vc(I.type,I.key,I.props,null,_.mode,O),O.ref=Ma(_,v,I),O.return=_,_=O)}return s(_);case Xo:e:{for(U=I.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(_,v.sibling),v=i(v,I.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=Bh(I,_.mode,O),v.return=_,_=v}return s(_);case ti:return U=I._init,k(_,v,U(I._payload),O)}if(za(I))return T(_,v,I,O);if(xa(I))return C(_,v,I,O);ic(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,I),v.return=_,_=v):(n(_,v),v=zh(I,_.mode,O),v.return=_,_=v),s(_)):n(_,v)}return k}var Rs=ET(!0),TT=ET(!1),gf=Vi(null),vf=null,ss=null,Fg=null;function jg(){Fg=ss=vf=null}function Ug(t){var e=gf.current;$e(gf),t._currentValue=e}function Yp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){vf=t,Fg=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Fg!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(vf===null)throw Error(H(308));ss=t,vf.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var eo=null;function $g(t){eo===null?eo=[t]:eo.push(t)}function IT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$g(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rr(t,r)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function zg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ST(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rr(t,n)}return i=r.interleaved,i===null?(e.next=e,$g(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rr(t,n)}function Rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kg(t,n)}}function m_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yf(t,e,n,r){var i=t.updateQueue;ni=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;s=0,f=c=u=null,a=o;do{var p=a.lane,g=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,C=a;switch(p=e,g=n,C.tag){case 1:if(T=C.payload,typeof T=="function"){h=T.call(g,h,p);break e}h=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=C.payload,p=typeof T=="function"?T.call(g,h,p):T,p==null)break e;h=Ge({},h,p);break e;case 2:ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,u=h):f=f.next=g,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);vo|=s,t.lanes=s,t.memoizedState=h}}function g_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var ou={},sr=Vi(ou),kl=Vi(ou),Cl=Vi(ou);function to(t){if(t===ou)throw Error(H(174));return t}function Bg(t,e){switch(De(Cl,e),De(kl,t),De(sr,ou),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cp(e,t)}$e(sr),De(sr,e)}function Ns(){$e(sr),$e(kl),$e(Cl)}function bT(t){to(Cl.current);var e=to(sr.current),n=Cp(e,t.type);e!==n&&(De(kl,t),De(sr,n))}function Wg(t){kl.current===t&&($e(sr),$e(kl))}var He=Vi(0);function _f(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lh=[];function Hg(){for(var t=0;t<Lh.length;t++)Lh[t]._workInProgressVersionPrimary=null;Lh.length=0}var Nc=$r.ReactCurrentDispatcher,Vh=$r.ReactCurrentBatchConfig,go=0,qe=null,ut=null,gt=null,wf=!1,il=!1,Pl=0,qP=0;function Ot(){throw Error(H(321))}function qg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Gg(t,e,n,r,i,o){if(go=o,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nc.current=t===null||t.memoizedState===null?QP:XP,t=n(r,i),il){o=0;do{if(il=!1,Pl=0,25<=o)throw Error(H(301));o+=1,gt=ut=null,e.updateQueue=null,Nc.current=JP,t=n(r,i)}while(il)}if(Nc.current=Ef,e=ut!==null&&ut.next!==null,go=0,gt=ut=qe=null,wf=!1,e)throw Error(H(300));return t}function Yg(){var t=Pl!==0;return Pl=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?qe.memoizedState=gt=t:gt=gt.next=t,gt}function Cn(){if(ut===null){var t=qe.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=gt===null?qe.memoizedState:gt.next;if(e!==null)gt=e,ut=t;else{if(t===null)throw Error(H(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},gt===null?qe.memoizedState=gt=t:gt=gt.next=t}return gt}function xl(t,e){return typeof e=="function"?e(t):e}function Fh(t){var e=Cn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var f=c.lane;if((go&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,qe.lanes|=f,vo|=f}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,Wn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,qe.lanes|=o,vo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jh(t){var e=Cn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Wn(o,e.memoizedState)||(rn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function AT(){}function kT(t,e){var n=qe,r=Cn(),i=e(),o=!Wn(r.memoizedState,i);if(o&&(r.memoizedState=i,rn=!0),r=r.queue,Kg(xT.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,Rl(9,PT.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(H(349));go&30||CT(n,e,i)}return i}function CT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function PT(t,e,n,r){e.value=n,e.getSnapshot=r,RT(e)&&NT(t)}function xT(t,e,n){return n(function(){RT(e)&&NT(t)})}function RT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function NT(t){var e=Rr(t,1);e!==null&&$n(e,t,1,-1)}function v_(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:t},e.queue=t,t=t.dispatch=KP.bind(null,qe,t),[e.memoizedState,t]}function Rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function OT(){return Cn().memoizedState}function Oc(t,e,n,r){var i=Qn();qe.flags|=t,i.memoizedState=Rl(1|e,n,void 0,r===void 0?null:r)}function ld(t,e,n,r){var i=Cn();r=r===void 0?null:r;var o=void 0;if(ut!==null){var s=ut.memoizedState;if(o=s.destroy,r!==null&&qg(r,s.deps)){i.memoizedState=Rl(e,n,o,r);return}}qe.flags|=t,i.memoizedState=Rl(1|e,n,o,r)}function y_(t,e){return Oc(8390656,8,t,e)}function Kg(t,e){return ld(2048,8,t,e)}function DT(t,e){return ld(4,2,t,e)}function MT(t,e){return ld(4,4,t,e)}function LT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VT(t,e,n){return n=n!=null?n.concat([t]):null,ld(4,4,LT.bind(null,e,t),n)}function Qg(){}function FT(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jT(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function UT(t,e,n){return go&21?(Wn(n,e)||(n=HE(),qe.lanes|=n,vo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function GP(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=Vh.transition;Vh.transition={};try{t(!1),e()}finally{Ce=n,Vh.transition=r}}function $T(){return Cn().memoizedState}function YP(t,e,n){var r=_i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zT(t))BT(e,n);else if(n=IT(t,e,n,r),n!==null){var i=Ht();$n(n,t,r,i),WT(n,e,r)}}function KP(t,e,n){var r=_i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zT(t))BT(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,s)){var u=e.interleaved;u===null?(i.next=i,$g(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=IT(t,e,i,r),n!==null&&(i=Ht(),$n(n,t,r,i),WT(n,e,r))}}function zT(t){var e=t.alternate;return t===qe||e!==null&&e===qe}function BT(t,e){il=wf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function WT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kg(t,n)}}var Ef={readContext:kn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},QP={readContext:kn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:y_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4194308,4,LT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oc(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YP.bind(null,qe,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:v_,useDebugValue:Qg,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=v_(!1),e=t[0];return t=GP.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=qe,i=Qn();if(We){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),yt===null)throw Error(H(349));go&30||CT(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,y_(xT.bind(null,r,o,t),[t]),r.flags|=2048,Rl(9,PT.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Qn(),e=yt.identifierPrefix;if(We){var n=Ir,r=Tr;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XP={readContext:kn,useCallback:FT,useContext:kn,useEffect:Kg,useImperativeHandle:VT,useInsertionEffect:DT,useLayoutEffect:MT,useMemo:jT,useReducer:Fh,useRef:OT,useState:function(){return Fh(xl)},useDebugValue:Qg,useDeferredValue:function(t){var e=Cn();return UT(e,ut.memoizedState,t)},useTransition:function(){var t=Fh(xl)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:AT,useSyncExternalStore:kT,useId:$T,unstable_isNewReconciler:!1},JP={readContext:kn,useCallback:FT,useContext:kn,useEffect:Kg,useImperativeHandle:VT,useInsertionEffect:DT,useLayoutEffect:MT,useMemo:jT,useReducer:jh,useRef:OT,useState:function(){return jh(xl)},useDebugValue:Qg,useDeferredValue:function(t){var e=Cn();return ut===null?e.memoizedState=t:UT(e,ut.memoizedState,t)},useTransition:function(){var t=jh(xl)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:AT,useSyncExternalStore:kT,useId:$T,unstable_isNewReconciler:!1};function Mn(t,e){if(t&&t.defaultProps){e=Ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ud={isMounted:function(t){return(t=t._reactInternals)?No(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=_i(t),o=kr(r,i);o.payload=e,n!=null&&(o.callback=n),e=vi(t,o,i),e!==null&&($n(e,t,i,r),Rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=_i(t),o=kr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=vi(t,o,i),e!==null&&($n(e,t,i,r),Rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=_i(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=vi(t,i,r),e!==null&&($n(e,t,r,n),Rc(e,t,r))}};function __(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Il(n,r)||!Il(i,o):!0}function HT(t,e,n){var r=!1,i=Ci,o=e.contextType;return typeof o=="object"&&o!==null?o=kn(o):(i=ln(e)?po:Ut.current,r=e.contextTypes,o=(r=r!=null)?Ps(t,i):Ci),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ud,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function w_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ud.enqueueReplaceState(e,e.state,null)}function Qp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zg(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=kn(o):(o=ln(e)?po:Ut.current,i.context=Ps(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Kp(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ud.enqueueReplaceState(i,i.state,null),yf(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",r=e;do n+=AC(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZP=typeof WeakMap=="function"?WeakMap:Map;function qT(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){If||(If=!0,am=r),Xp(t,e)},n}function GT(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xp(t,e),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function E_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hx.bind(null,t,e,n),e.then(t,t))}function T_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function I_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,vi(n,e,1))),n.lanes|=1),t)}var ex=$r.ReactCurrentOwner,rn=!1;function Bt(t,e,n,r){e.child=t===null?TT(e,null,n,r):Rs(e,t.child,n,r)}function S_(t,e,n,r,i){n=n.render;var o=e.ref;return ys(e,i),r=Gg(t,e,n,r,o,i),n=Yg(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(We&&n&&Mg(e),e.flags|=1,Bt(t,e,r,i),e.child)}function b_(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!iv(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,YT(t,e,o,r,i)):(t=Vc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(s,r)&&t.ref===e.ref)return Nr(t,e,i)}return e.flags|=1,t=wi(o,r),t.ref=e.ref,t.return=e,e.child=t}function YT(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Il(o,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Nr(t,e,i)}return Jp(t,e,n,r,i)}function KT(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(ls,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(ls,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,De(ls,hn),hn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,De(ls,hn),hn|=r;return Bt(t,e,i,n),e.child}function QT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jp(t,e,n,r,i){var o=ln(n)?po:Ut.current;return o=Ps(e,o),ys(e,i),n=Gg(t,e,n,r,o,i),r=Yg(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(We&&r&&Mg(e),e.flags|=1,Bt(t,e,n,i),e.child)}function A_(t,e,n,r,i){if(ln(n)){var o=!0;hf(e)}else o=!1;if(ys(e,i),e.stateNode===null)Dc(t,e),HT(e,n,r),Qp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=ln(n)?po:Ut.current,c=Ps(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&w_(e,s,r,c),ni=!1;var p=e.memoizedState;s.state=p,yf(e,r,s,i),u=e.memoizedState,a!==r||p!==u||an.current||ni?(typeof f=="function"&&(Kp(e,n,f,r),u=e.memoizedState),(a=ni||__(e,n,a,r,p,u,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ST(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mn(e.type,a),s.props=c,h=e.pendingProps,p=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=kn(u):(u=ln(n)?po:Ut.current,u=Ps(e,u));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||p!==u)&&w_(e,s,r,u),ni=!1,p=e.memoizedState,s.state=p,yf(e,r,s,i);var T=e.memoizedState;a!==h||p!==T||an.current||ni?(typeof g=="function"&&(Kp(e,n,g,r),T=e.memoizedState),(c=ni||__(e,n,c,r,p,T,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,T,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,T,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),s.props=r,s.state=T,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Zp(t,e,n,r,o,i)}function Zp(t,e,n,r,i,o){QT(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&f_(e,n,!1),Nr(t,e,o);r=e.stateNode,ex.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Rs(e,t.child,null,o),e.child=Rs(e,null,a,o)):Bt(t,e,a,o),e.memoizedState=r.state,i&&f_(e,n,!0),e.child}function XT(t){var e=t.stateNode;e.pendingContext?c_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&c_(t,e.context,!1),Bg(t,e.containerInfo)}function k_(t,e,n,r,i){return xs(),Vg(i),e.flags|=256,Bt(t,e,n,r),e.child}var em={dehydrated:null,treeContext:null,retryLane:0};function tm(t){return{baseLanes:t,cachePool:null,transitions:null}}function JT(t,e,n){var r=e.pendingProps,i=He.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(He,i&1),t===null)return Gp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=dd(s,r,0,null),t=ao(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=tm(n),e.memoizedState=em,t):Xg(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tx(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=wi(a,o):(o=ao(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?tm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=em,r}return o=t.child,t=o.sibling,r=wi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xg(t,e){return e=dd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oc(t,e,n,r){return r!==null&&Vg(r),Rs(e,t.child,null,n),t=Xg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tx(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Uh(Error(H(422))),oc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=dd({mode:"visible",children:r.children},i,0,null),o=ao(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Rs(e,t.child,null,s),e.child.memoizedState=tm(s),e.memoizedState=em,o);if(!(e.mode&1))return oc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=Uh(o,r,void 0),oc(t,e,s,r)}if(a=(s&t.childLanes)!==0,rn||a){if(r=yt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rr(t,i),$n(r,t,i,-1))}return rv(),r=Uh(Error(H(421))),oc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=px.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,pn=gi(i.nextSibling),gn=e,We=!0,Vn=null,t!==null&&(In[Sn++]=Tr,In[Sn++]=Ir,In[Sn++]=mo,Tr=t.id,Ir=t.overflow,mo=e),e=Xg(e,r.children),e.flags|=4096,e)}function C_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yp(t.return,e,n)}function $h(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ZT(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Bt(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C_(t,n,e);else if(t.tag===19)C_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_f(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$h(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_f(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$h(e,!0,n,null,o);break;case"together":$h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nx(t,e,n){switch(e.tag){case 3:XT(e),xs();break;case 5:bT(e);break;case 1:ln(e.type)&&hf(e);break;case 4:Bg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(gf,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?JT(t,e,n):(De(He,He.current&1),t=Nr(t,e,n),t!==null?t.sibling:null);De(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ZT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,KT(t,e,n)}return Nr(t,e,n)}var eI,nm,tI,nI;eI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nm=function(){};tI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,to(sr.current);var o=null;switch(n){case"input":i=Sp(t,i),r=Sp(t,r),o=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),o=[];break;case"textarea":i=kp(t,i),r=kp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ff)}Pp(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Fe("scroll",t),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};nI=function(t,e,n,r){n!==r&&(e.flags|=4)};function La(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rx(t,e,n){var r=e.pendingProps;switch(Lg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return ln(e.type)&&df(),Dt(e),null;case 3:return r=e.stateNode,Ns(),$e(an),$e(Ut),Hg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(cm(Vn),Vn=null))),nm(t,e),Dt(e),null;case 5:Wg(e);var i=to(Cl.current);if(n=e.type,t!==null&&e.stateNode!=null)tI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Dt(e),null}if(t=to(sr.current),rc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Zn]=e,r[Al]=o,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<Wa.length;i++)Fe(Wa[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":V0(r,o),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fe("invalid",r);break;case"textarea":j0(r,o),Fe("invalid",r)}Pp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",""+a]):gl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Yu(r),F0(r,o,!0);break;case"textarea":Yu(r),U0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ff)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Zn]=e,t[Al]=r,eI(t,e,!1,!1),e.stateNode=t;e:{switch(s=xp(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wa.length;i++)Fe(Wa[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":V0(t,r),i=Sp(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":j0(t,r),i=kp(t,r),Fe("invalid",t);break;default:i=r}Pp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?OE(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&RE(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vl(t,u):typeof u=="number"&&vl(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gl.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Fe("scroll",t):u!=null&&Eg(t,o,u,s))}switch(n){case"input":Yu(t),F0(t,r,!1);break;case"textarea":Yu(t),U0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ki(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ps(t,!!r.multiple,o,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ff)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)nI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=to(Cl.current),to(sr.current),rc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(o=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:nc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return Dt(e),null;case 13:if($e(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&pn!==null&&e.mode&1&&!(e.flags&128))wT(),xs(),e.flags|=98560,o=!1;else if(o=rc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Zn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),o=!1}else Vn!==null&&(cm(Vn),Vn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?ct===0&&(ct=3):rv())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return Ns(),nm(t,e),t===null&&Sl(e.stateNode.containerInfo),Dt(e),null;case 10:return Ug(e.type._context),Dt(e),null;case 17:return ln(e.type)&&df(),Dt(e),null;case 19:if($e(He),o=e.memoizedState,o===null)return Dt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)La(o,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=_f(t),s!==null){for(e.flags|=128,La(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(He,He.current&1|2),e.child}t=t.sibling}o.tail!==null&&Je()>Ds&&(e.flags|=128,r=!0,La(o,!1),e.lanes=4194304)}else{if(!r)if(t=_f(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),La(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!We)return Dt(e),null}else 2*Je()-o.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,r=!0,La(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Je(),e.sibling=null,n=He.current,De(He,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return nv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function ix(t,e){switch(Lg(e),e.tag){case 1:return ln(e.type)&&df(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),$e(an),$e(Ut),Hg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wg(e),null;case 13:if($e(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $e(He),null;case 4:return Ns(),null;case 10:return Ug(e.type._context),null;case 22:case 23:return nv(),null;case 24:return null;default:return null}}var sc=!1,Vt=!1,ox=typeof WeakSet=="function"?WeakSet:Set,X=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function rm(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var P_=!1;function sx(t,e){if(Up=lf,t=aT(),Dg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,f=0,h=t,p=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++c===i&&(a=s),p===o&&++f===r&&(u=s),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($p={focusedElem:t,selectionRange:n},lf=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var C=T.memoizedProps,k=T.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?C:Mn(e.type,C),k);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(O){Qe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return T=P_,P_=!1,T}function ol(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&rm(e,n,o)}i=i.next}while(i!==r)}}function cd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function im(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rI(t){var e=t.alternate;e!==null&&(t.alternate=null,rI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Al],delete e[Wp],delete e[zP],delete e[BP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iI(t){return t.tag===5||t.tag===3||t.tag===4}function x_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function om(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ff));else if(r!==4&&(t=t.child,t!==null))for(om(t,e,n),t=t.sibling;t!==null;)om(t,e,n),t=t.sibling}function sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sm(t,e,n),t=t.sibling;t!==null;)sm(t,e,n),t=t.sibling}var It=null,Ln=!1;function Qr(t,e,n){for(n=n.child;n!==null;)oI(t,e,n),n=n.sibling}function oI(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(nd,n)}catch{}switch(n.tag){case 5:Vt||as(n,e);case 6:var r=It,i=Ln;It=null,Qr(t,e,n),It=r,Ln=i,It!==null&&(Ln?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Ln?(t=It,n=n.stateNode,t.nodeType===8?Dh(t.parentNode,n):t.nodeType===1&&Dh(t,n),El(t)):Dh(It,n.stateNode));break;case 4:r=It,i=Ln,It=n.stateNode.containerInfo,Ln=!0,Qr(t,e,n),It=r,Ln=i;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&rm(n,e,s),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Vt&&(as(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Qe(n,e,a)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,Qr(t,e,n),Vt=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function R_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ox),e.forEach(function(r){var i=mx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Ln=!1;break e;case 3:It=a.stateNode.containerInfo,Ln=!0;break e;case 4:It=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(It===null)throw Error(H(160));oI(o,s,i),It=null,Ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sI(e,t),e=e.sibling}function sI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),r&4){try{ol(3,t,t.return),cd(3,t)}catch(C){Qe(t,t.return,C)}try{ol(5,t,t.return)}catch(C){Qe(t,t.return,C)}}break;case 1:Dn(e,t),Kn(t),r&512&&n!==null&&as(n,n.return);break;case 5:if(Dn(e,t),Kn(t),r&512&&n!==null&&as(n,n.return),t.flags&32){var i=t.stateNode;try{vl(i,"")}catch(C){Qe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&CE(i,o),xp(a,s);var c=xp(a,o);for(s=0;s<u.length;s+=2){var f=u[s],h=u[s+1];f==="style"?OE(i,h):f==="dangerouslySetInnerHTML"?RE(i,h):f==="children"?vl(i,h):Eg(i,f,h,c)}switch(a){case"input":bp(i,o);break;case"textarea":PE(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?ps(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?ps(i,!!o.multiple,o.defaultValue,!0):ps(i,!!o.multiple,o.multiple?[]:"",!1))}i[Al]=o}catch(C){Qe(t,t.return,C)}}break;case 6:if(Dn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){Qe(t,t.return,C)}}break;case 3:if(Dn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(C){Qe(t,t.return,C)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ev=Je())),r&4&&R_(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,Dn(e,t),Vt=c):Dn(e,t),Kn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(X=t,f=t.child;f!==null;){for(h=X=f;X!==null;){switch(p=X,g=p.child,p.tag){case 0:case 11:case 14:case 15:ol(4,p,p.return);break;case 1:as(p,p.return);var T=p.stateNode;if(typeof T.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(C){Qe(r,n,C)}}break;case 5:as(p,p.return);break;case 22:if(p.memoizedState!==null){O_(h);continue}}g!==null?(g.return=p,X=g):O_(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=NE("display",s))}catch(C){Qe(t,t.return,C)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(C){Qe(t,t.return,C)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Kn(t),r&4&&R_(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iI(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vl(i,""),r.flags&=-33);var o=x_(t);sm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=x_(t);om(t,a,s);break;default:throw Error(H(161))}}catch(u){Qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ax(t,e,n){X=t,aI(t)}function aI(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||sc;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Vt;a=sc;var c=Vt;if(sc=s,(Vt=u)&&!c)for(X=i;X!==null;)s=X,u=s.child,s.tag===22&&s.memoizedState!==null?D_(i):u!==null?(u.return=s,X=u):D_(i);for(;o!==null;)X=o,aI(o),o=o.sibling;X=i,sc=a,Vt=c}N_(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):N_(t)}}function N_(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||cd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&g_(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}g_(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&El(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Vt||e.flags&512&&im(e)}catch(p){Qe(e,e.return,p)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function O_(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function D_(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cd(4,e)}catch(u){Qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Qe(e,i,u)}}var o=e.return;try{im(e)}catch(u){Qe(e,o,u)}break;case 5:var s=e.return;try{im(e)}catch(u){Qe(e,s,u)}}}catch(u){Qe(e,e.return,u)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var lx=Math.ceil,Tf=$r.ReactCurrentDispatcher,Jg=$r.ReactCurrentOwner,An=$r.ReactCurrentBatchConfig,Te=0,yt=null,rt=null,At=0,hn=0,ls=Vi(0),ct=0,Nl=null,vo=0,fd=0,Zg=0,sl=null,tn=null,ev=0,Ds=1/0,_r=null,If=!1,am=null,yi=null,ac=!1,ci=null,Sf=0,al=0,lm=null,Mc=-1,Lc=0;function Ht(){return Te&6?Je():Mc!==-1?Mc:Mc=Je()}function _i(t){return t.mode&1?Te&2&&At!==0?At&-At:HP.transition!==null?(Lc===0&&(Lc=HE()),Lc):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:JE(t.type)),t):1}function $n(t,e,n,r){if(50<al)throw al=0,lm=null,Error(H(185));nu(t,n,r),(!(Te&2)||t!==yt)&&(t===yt&&(!(Te&2)&&(fd|=n),ct===4&&ii(t,At)),un(t,r),n===1&&Te===0&&!(e.mode&1)&&(Ds=Je()+500,ad&&Fi()))}function un(t,e){var n=t.callbackNode;HC(t,e);var r=af(t,t===yt?At:0);if(r===0)n!==null&&B0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&B0(n),e===1)t.tag===0?WP(M_.bind(null,t)):vT(M_.bind(null,t)),UP(function(){!(Te&6)&&Fi()}),n=null;else{switch(qE(r)){case 1:n=Ag;break;case 4:n=BE;break;case 16:n=sf;break;case 536870912:n=WE;break;default:n=sf}n=mI(n,lI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lI(t,e){if(Mc=-1,Lc=0,Te&6)throw Error(H(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=af(t,t===yt?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bf(t,r);else{e=r;var i=Te;Te|=2;var o=cI();(yt!==t||At!==e)&&(_r=null,Ds=Je()+500,so(t,e));do try{fx();break}catch(a){uI(t,a)}while(!0);jg(),Tf.current=o,Te=i,rt!==null?e=0:(yt=null,At=0,e=ct)}if(e!==0){if(e===2&&(i=Mp(t),i!==0&&(r=i,e=um(t,i))),e===1)throw n=Nl,so(t,0),ii(t,r),un(t,Je()),n;if(e===6)ii(t,r);else{if(i=t.current.alternate,!(r&30)&&!ux(i)&&(e=bf(t,r),e===2&&(o=Mp(t),o!==0&&(r=o,e=um(t,o))),e===1))throw n=Nl,so(t,0),ii(t,r),un(t,Je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Ki(t,tn,_r);break;case 3:if(ii(t,r),(r&130023424)===r&&(e=ev+500-Je(),10<e)){if(af(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bp(Ki.bind(null,t,tn,_r),e);break}Ki(t,tn,_r);break;case 4:if(ii(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Un(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lx(r/1960))-r,10<r){t.timeoutHandle=Bp(Ki.bind(null,t,tn,_r),r);break}Ki(t,tn,_r);break;case 5:Ki(t,tn,_r);break;default:throw Error(H(329))}}}return un(t,Je()),t.callbackNode===n?lI.bind(null,t):null}function um(t,e){var n=sl;return t.current.memoizedState.isDehydrated&&(so(t,e).flags|=256),t=bf(t,e),t!==2&&(e=tn,tn=n,e!==null&&cm(e)),t}function cm(t){tn===null?tn=t:tn.push.apply(tn,t)}function ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Wn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ii(t,e){for(e&=~Zg,e&=~fd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function M_(t){if(Te&6)throw Error(H(327));_s();var e=af(t,0);if(!(e&1))return un(t,Je()),null;var n=bf(t,e);if(t.tag!==0&&n===2){var r=Mp(t);r!==0&&(e=r,n=um(t,r))}if(n===1)throw n=Nl,so(t,0),ii(t,e),un(t,Je()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,tn,_r),un(t,Je()),null}function tv(t,e){var n=Te;Te|=1;try{return t(e)}finally{Te=n,Te===0&&(Ds=Je()+500,ad&&Fi())}}function yo(t){ci!==null&&ci.tag===0&&!(Te&6)&&_s();var e=Te;Te|=1;var n=An.transition,r=Ce;try{if(An.transition=null,Ce=1,t)return t()}finally{Ce=r,An.transition=n,Te=e,!(Te&6)&&Fi()}}function nv(){hn=ls.current,$e(ls)}function so(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jP(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(Lg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&df();break;case 3:Ns(),$e(an),$e(Ut),Hg();break;case 5:Wg(r);break;case 4:Ns();break;case 13:$e(He);break;case 19:$e(He);break;case 10:Ug(r.type._context);break;case 22:case 23:nv()}n=n.return}if(yt=t,rt=t=wi(t.current,null),At=hn=e,ct=0,Nl=null,Zg=fd=vo=0,tn=sl=null,eo!==null){for(e=0;e<eo.length;e++)if(n=eo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}eo=null}return t}function uI(t,e){do{var n=rt;try{if(jg(),Nc.current=Ef,wf){for(var r=qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wf=!1}if(go=0,gt=ut=qe=null,il=!1,Pl=0,Jg.current=null,n===null||n.return===null){ct=1,Nl=e,rt=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=At,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=T_(s);if(g!==null){g.flags&=-257,I_(g,s,a,o,e),g.mode&1&&E_(o,c,e),e=g,u=c;var T=e.updateQueue;if(T===null){var C=new Set;C.add(u),e.updateQueue=C}else T.add(u);break e}else{if(!(e&1)){E_(o,c,e),rv();break e}u=Error(H(426))}}else if(We&&a.mode&1){var k=T_(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),I_(k,s,a,o,e),Vg(Os(u,a));break e}}o=u=Os(u,a),ct!==4&&(ct=2),sl===null?sl=[o]:sl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var _=qT(o,u,e);m_(o,_);break e;case 1:a=u;var v=o.type,I=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(yi===null||!yi.has(I)))){o.flags|=65536,e&=-e,o.lanes|=e;var O=GT(o,a,e);m_(o,O);break e}}o=o.return}while(o!==null)}dI(n)}catch(j){e=j,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function cI(){var t=Tf.current;return Tf.current=Ef,t===null?Ef:t}function rv(){(ct===0||ct===3||ct===2)&&(ct=4),yt===null||!(vo&268435455)&&!(fd&268435455)||ii(yt,At)}function bf(t,e){var n=Te;Te|=2;var r=cI();(yt!==t||At!==e)&&(_r=null,so(t,e));do try{cx();break}catch(i){uI(t,i)}while(!0);if(jg(),Te=n,Tf.current=r,rt!==null)throw Error(H(261));return yt=null,At=0,ct}function cx(){for(;rt!==null;)fI(rt)}function fx(){for(;rt!==null&&!LC();)fI(rt)}function fI(t){var e=pI(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?dI(t):rt=e,Jg.current=null}function dI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ix(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,rt=null;return}}else if(n=rx(n,e,hn),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);ct===0&&(ct=5)}function Ki(t,e,n){var r=Ce,i=An.transition;try{An.transition=null,Ce=1,dx(t,e,n,r)}finally{An.transition=i,Ce=r}return null}function dx(t,e,n,r){do _s();while(ci!==null);if(Te&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(qC(t,o),t===yt&&(rt=yt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ac||(ac=!0,mI(sf,function(){return _s(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=An.transition,An.transition=null;var s=Ce;Ce=1;var a=Te;Te|=4,Jg.current=null,sx(t,n),sI(n,t),NP($p),lf=!!Up,$p=Up=null,t.current=n,ax(n),VC(),Te=a,Ce=s,An.transition=o}else t.current=n;if(ac&&(ac=!1,ci=t,Sf=i),o=t.pendingLanes,o===0&&(yi=null),UC(n.stateNode),un(t,Je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(If)throw If=!1,t=am,am=null,t;return Sf&1&&t.tag!==0&&_s(),o=t.pendingLanes,o&1?t===lm?al++:(al=0,lm=t):al=0,Fi(),null}function _s(){if(ci!==null){var t=qE(Sf),e=An.transition,n=Ce;try{if(An.transition=null,Ce=16>t?16:t,ci===null)var r=!1;else{if(t=ci,ci=null,Sf=0,Te&6)throw Error(H(331));var i=Te;for(Te|=4,X=t.current;X!==null;){var o=X,s=o.child;if(X.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(X=c;X!==null;){var f=X;switch(f.tag){case 0:case 11:case 15:ol(8,f,o)}var h=f.child;if(h!==null)h.return=f,X=h;else for(;X!==null;){f=X;var p=f.sibling,g=f.return;if(rI(f),f===c){X=null;break}if(p!==null){p.return=g,X=p;break}X=g}}}var T=o.alternate;if(T!==null){var C=T.child;if(C!==null){T.child=null;do{var k=C.sibling;C.sibling=null,C=k}while(C!==null)}}X=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,X=s;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ol(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,X=_;break e}X=o.return}}var v=t.current;for(X=v;X!==null;){s=X;var I=s.child;if(s.subtreeFlags&2064&&I!==null)I.return=s,X=I;else e:for(s=v;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cd(9,a)}}catch(j){Qe(a,a.return,j)}if(a===s){X=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,X=O;break e}X=a.return}}if(Te=i,Fi(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(nd,t)}catch{}r=!0}return r}finally{Ce=n,An.transition=e}}return!1}function L_(t,e,n){e=Os(n,e),e=qT(t,e,1),t=vi(t,e,1),e=Ht(),t!==null&&(nu(t,1,e),un(t,e))}function Qe(t,e,n){if(t.tag===3)L_(t,t,n);else for(;e!==null;){if(e.tag===3){L_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){t=Os(n,t),t=GT(e,t,1),e=vi(e,t,1),t=Ht(),e!==null&&(nu(e,1,t),un(e,t));break}}e=e.return}}function hx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(At&n)===n&&(ct===4||ct===3&&(At&130023424)===At&&500>Je()-ev?so(t,0):Zg|=n),un(t,e)}function hI(t,e){e===0&&(t.mode&1?(e=Xu,Xu<<=1,!(Xu&130023424)&&(Xu=4194304)):e=1);var n=Ht();t=Rr(t,e),t!==null&&(nu(t,e,n),un(t,n))}function px(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hI(t,n)}function mx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),hI(t,n)}var pI;pI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,nx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,We&&e.flags&1048576&&yT(e,mf,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dc(t,e),t=e.pendingProps;var i=Ps(e,Ut.current);ys(e,n),i=Gg(null,e,r,t,i,n);var o=Yg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(o=!0,hf(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zg(e),i.updater=ud,e.stateNode=i,i._reactInternals=e,Qp(e,r,t,n),e=Zp(null,e,r,!0,o,n)):(e.tag=0,We&&o&&Mg(e),Bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vx(r),t=Mn(r,t),i){case 0:e=Jp(null,e,r,t,n);break e;case 1:e=A_(null,e,r,t,n);break e;case 11:e=S_(null,e,r,t,n);break e;case 14:e=b_(null,e,r,Mn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Jp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),A_(t,e,r,i,n);case 3:e:{if(XT(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ST(t,e),yf(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Os(Error(H(423)),e),e=k_(t,e,r,n,i);break e}else if(r!==i){i=Os(Error(H(424)),e),e=k_(t,e,r,n,i);break e}else for(pn=gi(e.stateNode.containerInfo.firstChild),gn=e,We=!0,Vn=null,n=TT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===i){e=Nr(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return bT(e),t===null&&Gp(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,zp(r,i)?s=null:o!==null&&zp(r,o)&&(e.flags|=32),QT(t,e),Bt(t,e,s,n),e.child;case 6:return t===null&&Gp(e),null;case 13:return JT(t,e,n);case 4:return Bg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rs(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),S_(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,De(gf,r._currentValue),r._currentValue=s,o!==null)if(Wn(o.value,s)){if(o.children===i.children&&!an.current){e=Nr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=kr(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Yp(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Yp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=kn(i),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,i=Mn(r,e.pendingProps),i=Mn(r.type,i),b_(t,e,r,i,n);case 15:return YT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Dc(t,e),e.tag=1,ln(r)?(t=!0,hf(e)):t=!1,ys(e,n),HT(e,r,i),Qp(e,r,i,n),Zp(null,e,r,!0,t,n);case 19:return ZT(t,e,n);case 22:return KT(t,e,n)}throw Error(H(156,e.tag))};function mI(t,e){return zE(t,e)}function gx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,r){return new gx(t,e,n,r)}function iv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vx(t){if(typeof t=="function")return iv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ig)return 11;if(t===Sg)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")iv(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Jo:return ao(n.children,i,o,e);case Tg:s=8,i|=8;break;case wp:return t=bn(12,n,e,i|2),t.elementType=wp,t.lanes=o,t;case Ep:return t=bn(13,n,e,i),t.elementType=Ep,t.lanes=o,t;case Tp:return t=bn(19,n,e,i),t.elementType=Tp,t.lanes=o,t;case bE:return dd(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case IE:s=10;break e;case SE:s=9;break e;case Ig:s=11;break e;case Sg:s=14;break e;case ti:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=bn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ao(t,e,n,r){return t=bn(7,t,r,e),t.lanes=n,t}function dd(t,e,n,r){return t=bn(22,t,r,e),t.elementType=bE,t.lanes=n,t.stateNode={isHidden:!1},t}function zh(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Bh(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ih(0),this.expirationTimes=Ih(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ih(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ov(t,e,n,r,i,o,s,a,u){return t=new yx(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=bn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zg(o),t}function _x(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gI(t){if(!t)return Ci;t=t._reactInternals;e:{if(No(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(ln(n))return gT(t,n,e)}return e}function vI(t,e,n,r,i,o,s,a,u){return t=ov(n,r,!0,t,i,o,s,a,u),t.context=gI(null),n=t.current,r=Ht(),i=_i(n),o=kr(r,i),o.callback=e??null,vi(n,o,i),t.current.lanes=i,nu(t,i,r),un(t,r),t}function hd(t,e,n,r){var i=e.current,o=Ht(),s=_i(i);return n=gI(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vi(i,e,s),t!==null&&($n(t,i,s,o),Rc(t,i,s)),s}function Af(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function V_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sv(t,e){V_(t,e),(t=t.alternate)&&V_(t,e)}function wx(){return null}var yI=typeof reportError=="function"?reportError:function(t){console.error(t)};function av(t){this._internalRoot=t}pd.prototype.render=av.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));hd(t,e,null,null)};pd.prototype.unmount=av.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yo(function(){hd(null,t,null,null)}),e[xr]=null}};function pd(t){this._internalRoot=t}pd.prototype.unstable_scheduleHydration=function(t){if(t){var e=KE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ri.length&&e!==0&&e<ri[n].priority;n++);ri.splice(n,0,t),n===0&&XE(t)}};function lv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function F_(){}function Ex(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Af(s);o.call(c)}}var s=vI(e,r,t,0,null,!1,!1,"",F_);return t._reactRootContainer=s,t[xr]=s.current,Sl(t.nodeType===8?t.parentNode:t),yo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Af(u);a.call(c)}}var u=ov(t,0,!1,null,null,!1,!1,"",F_);return t._reactRootContainer=u,t[xr]=u.current,Sl(t.nodeType===8?t.parentNode:t),yo(function(){hd(e,u,n,r)}),u}function gd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Af(s);a.call(u)}}hd(e,s,t,i)}else s=Ex(n,e,t,i,r);return Af(s)}GE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(kg(e,n|1),un(e,Je()),!(Te&6)&&(Ds=Je()+500,Fi()))}break;case 13:yo(function(){var r=Rr(t,1);if(r!==null){var i=Ht();$n(r,t,1,i)}}),sv(t,1)}};Cg=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=Ht();$n(e,t,134217728,n)}sv(t,134217728)}};YE=function(t){if(t.tag===13){var e=_i(t),n=Rr(t,e);if(n!==null){var r=Ht();$n(n,t,e,r)}sv(t,e)}};KE=function(){return Ce};QE=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};Np=function(t,e,n){switch(e){case"input":if(bp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sd(r);if(!i)throw Error(H(90));kE(r),bp(r,i)}}}break;case"textarea":PE(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};LE=tv;VE=yo;var Tx={usingClientEntryPoint:!1,Events:[iu,ns,sd,DE,ME,tv]},Va={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=UE(t),t===null?null:t.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{nd=lc.inject(Ix),or=lc}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lv(e))throw Error(H(200));return _x(t,e,null,n)};_n.createRoot=function(t,e){if(!lv(t))throw Error(H(299));var n=!1,r="",i=yI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ov(t,1,!1,null,null,n,!1,r,i),t[xr]=e.current,Sl(t.nodeType===8?t.parentNode:t),new av(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=UE(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return yo(t)};_n.hydrate=function(t,e,n){if(!md(e))throw Error(H(200));return gd(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!lv(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=yI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=vI(e,null,t,1,n??null,i,!1,o,s),t[xr]=e.current,Sl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pd(e)};_n.render=function(t,e,n){if(!md(e))throw Error(H(200));return gd(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!md(t))throw Error(H(40));return t._reactRootContainer?(yo(function(){gd(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};_n.unstable_batchedUpdates=tv;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!md(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return gd(t,e,n,!1,r)};_n.version="18.3.1-next-f1338f8080-20240426";function _I(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_I)}catch(t){console.error(t)}}_I(),_E.exports=_n;var Sx=_E.exports,j_=Sx;yp.createRoot=j_.createRoot,yp.hydrateRoot=j_.hydrateRoot;var wI={exports:{}},bx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ax=bx,kx=Ax;function EI(){}function TI(){}TI.resetWarningCache=EI;var Cx=function(){function t(r,i,o,s,a,u){if(u!==kx){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:TI,resetWarningCache:EI};return n.PropTypes=n,n};wI.exports=Cx();var Px=wI.exports;const ee=Xs(Px);function xx(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var II=V,Rx=xx(II);function U_(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var Ox=!!(typeof window<"u"&&window.document&&window.document.createElement);function Dx(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],a;function u(){a=t(s.map(function(f){return f.props})),c.canUseDOM?e(a):n&&(a=n(a))}var c=function(f){Nx(h,f);function h(){return f.apply(this,arguments)||this}h.peek=function(){return a},h.rewind=function(){if(h.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var T=a;return a=void 0,s=[],T};var p=h.prototype;return p.UNSAFE_componentWillMount=function(){s.push(this),u()},p.componentDidUpdate=function(){u()},p.componentWillUnmount=function(){var T=s.indexOf(this);s.splice(T,1),u()},p.render=function(){return Rx.createElement(o,this.props)},h}(II.PureComponent);return U_(c,"displayName","SideEffect("+r(o)+")"),U_(c,"canUseDOM",Ox),c}}var Mx=Dx;const Lx=Xs(Mx);var Vx=typeof Element<"u",Fx=typeof Map=="function",jx=typeof Set=="function",Ux=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Fc(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Fc(t[r],e[r]))return!1;return!0}var o;if(Fx&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!Fc(r.value[1],e.get(r.value[0])))return!1;return!0}if(jx&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Ux&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(Vx&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Fc(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var $x=function(e,n){try{return Fc(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const zx=Xs($x);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $_=Object.getOwnPropertySymbols,Bx=Object.prototype.hasOwnProperty,Wx=Object.prototype.propertyIsEnumerable;function Hx(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function qx(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Gx=qx()?Object.assign:function(t,e){for(var n,r=Hx(t),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)Bx.call(n,s)&&(r[s]=n[s]);if($_){i=$_(n);for(var a=0;a<i.length;a++)Wx.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};const Yx=Xs(Gx);var lo={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},ce={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(ce).map(function(t){return ce[t]});var Be={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},kf={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ol={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Kx=Object.keys(kf).reduce(function(t,e){return t[kf[e]]=e,t},{}),Qx=[ce.NOSCRIPT,ce.SCRIPT,ce.STYLE],Fn="data-react-helmet",Xx=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jx=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Zx=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),en=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eR=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},z_=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},tR=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},fm=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},nR=function(e){var n=ws(e,ce.TITLE),r=ws(e,Ol.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=ws(e,Ol.DEFAULT_TITLE);return n||i||void 0},rR=function(e){return ws(e,Ol.ON_CHANGE_CLIENT_STATE)||function(){}},Wh=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,i){return en({},r,i)},{})},iR=function(e,n){return n.filter(function(r){return typeof r[ce.BASE]<"u"}).map(function(r){return r[ce.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),s=0;s<o.length;s++){var a=o[s],u=a.toLowerCase();if(e.indexOf(u)!==-1&&i[u])return r.concat(i)}return r},[])},Fa=function(e,n,r){var i={};return r.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&lR("Helmet: "+e+' should be of type "Array". Instead found type "'+Xx(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,s){var a={};s.filter(function(p){for(var g=void 0,T=Object.keys(p),C=0;C<T.length;C++){var k=T[C],_=k.toLowerCase();n.indexOf(_)!==-1&&!(g===Be.REL&&p[g].toLowerCase()==="canonical")&&!(_===Be.REL&&p[_].toLowerCase()==="stylesheet")&&(g=_),n.indexOf(k)!==-1&&(k===Be.INNER_HTML||k===Be.CSS_TEXT||k===Be.ITEM_PROP)&&(g=k)}if(!g||!p[g])return!1;var v=p[g].toLowerCase();return i[g]||(i[g]={}),a[g]||(a[g]={}),i[g][v]?!1:(a[g][v]=!0,!0)}).reverse().forEach(function(p){return o.push(p)});for(var u=Object.keys(a),c=0;c<u.length;c++){var f=u[c],h=Yx({},i[f],a[f]);i[f]=h}return o},[]).reverse()},ws=function(e,n){for(var r=e.length-1;r>=0;r--){var i=e[r];if(i.hasOwnProperty(n))return i[n]}return null},oR=function(e){return{baseTag:iR([Be.HREF,Be.TARGET],e),bodyAttributes:Wh(lo.BODY,e),defer:ws(e,Ol.DEFER),encode:ws(e,Ol.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Wh(lo.HTML,e),linkTags:Fa(ce.LINK,[Be.REL,Be.HREF],e),metaTags:Fa(ce.META,[Be.NAME,Be.CHARSET,Be.HTTPEQUIV,Be.PROPERTY,Be.ITEM_PROP],e),noscriptTags:Fa(ce.NOSCRIPT,[Be.INNER_HTML],e),onChangeClientState:rR(e),scriptTags:Fa(ce.SCRIPT,[Be.SRC,Be.INNER_HTML],e),styleTags:Fa(ce.STYLE,[Be.CSS_TEXT],e),title:nR(e),titleAttributes:Wh(lo.TITLE,e)}},dm=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){dm(e)},0)}}(),B_=function(e){return clearTimeout(e)},sR=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||dm:global.requestAnimationFrame||dm,aR=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||B_:global.cancelAnimationFrame||B_,lR=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},ja=null,uR=function(e){ja&&aR(ja),e.defer?ja=sR(function(){W_(e,function(){ja=null})}):(W_(e),ja=null)},W_=function(e,n){var r=e.baseTag,i=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,f=e.scriptTags,h=e.styleTags,p=e.title,g=e.titleAttributes;hm(ce.BODY,i),hm(ce.HTML,o),cR(p,g);var T={baseTag:Ho(ce.BASE,r),linkTags:Ho(ce.LINK,s),metaTags:Ho(ce.META,a),noscriptTags:Ho(ce.NOSCRIPT,u),scriptTags:Ho(ce.SCRIPT,f),styleTags:Ho(ce.STYLE,h)},C={},k={};Object.keys(T).forEach(function(_){var v=T[_],I=v.newTags,O=v.oldTags;I.length&&(C[_]=I),O.length&&(k[_]=T[_].oldTags)}),n&&n(),c(e,C,k)},SI=function(e){return Array.isArray(e)?e.join(""):e},cR=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=SI(e)),hm(ce.TITLE,n)},hm=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var i=r.getAttribute(Fn),o=i?i.split(","):[],s=[].concat(o),a=Object.keys(n),u=0;u<a.length;u++){var c=a[u],f=n[c]||"";r.getAttribute(c)!==f&&r.setAttribute(c,f),o.indexOf(c)===-1&&o.push(c);var h=s.indexOf(c);h!==-1&&s.splice(h,1)}for(var p=s.length-1;p>=0;p--)r.removeAttribute(s[p]);o.length===s.length?r.removeAttribute(Fn):r.getAttribute(Fn)!==a.join(",")&&r.setAttribute(Fn,a.join(","))}},Ho=function(e,n){var r=document.head||document.querySelector(ce.HEAD),i=r.querySelectorAll(e+"["+Fn+"]"),o=Array.prototype.slice.call(i),s=[],a=void 0;return n&&n.length&&n.forEach(function(u){var c=document.createElement(e);for(var f in u)if(u.hasOwnProperty(f))if(f===Be.INNER_HTML)c.innerHTML=u.innerHTML;else if(f===Be.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=u.cssText:c.appendChild(document.createTextNode(u.cssText));else{var h=typeof u[f]>"u"?"":u[f];c.setAttribute(f,h)}c.setAttribute(Fn,"true"),o.some(function(p,g){return a=g,c.isEqualNode(p)})?o.splice(a,1):s.push(c)}),o.forEach(function(u){return u.parentNode.removeChild(u)}),s.forEach(function(u){return r.appendChild(u)}),{oldTags:o,newTags:s}},bI=function(e){return Object.keys(e).reduce(function(n,r){var i=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+i:i},"")},fR=function(e,n,r,i){var o=bI(r),s=SI(n);return o?"<"+e+" "+Fn+'="true" '+o+">"+fm(s,i)+"</"+e+">":"<"+e+" "+Fn+'="true">'+fm(s,i)+"</"+e+">"},dR=function(e,n,r){return n.reduce(function(i,o){var s=Object.keys(o).filter(function(c){return!(c===Be.INNER_HTML||c===Be.CSS_TEXT)}).reduce(function(c,f){var h=typeof o[f]>"u"?f:f+'="'+fm(o[f],r)+'"';return c?c+" "+h:h},""),a=o.innerHTML||o.cssText||"",u=Qx.indexOf(e)===-1;return i+"<"+e+" "+Fn+'="true" '+s+(u?"/>":">"+a+"</"+e+">")},"")},AI=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[kf[i]||i]=e[i],r},n)},hR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[Kx[i]||i]=e[i],r},n)},pR=function(e,n,r){var i,o=(i={key:n},i[Fn]=!0,i),s=AI(r,o);return[jt.createElement(ce.TITLE,s,n)]},mR=function(e,n){return n.map(function(r,i){var o,s=(o={key:i},o[Fn]=!0,o);return Object.keys(r).forEach(function(a){var u=kf[a]||a;if(u===Be.INNER_HTML||u===Be.CSS_TEXT){var c=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[u]=r[a]}),jt.createElement(e,s)})},vr=function(e,n,r){switch(e){case ce.TITLE:return{toComponent:function(){return pR(e,n.title,n.titleAttributes)},toString:function(){return fR(e,n.title,n.titleAttributes,r)}};case lo.BODY:case lo.HTML:return{toComponent:function(){return AI(n)},toString:function(){return bI(n)}};default:return{toComponent:function(){return mR(e,n)},toString:function(){return dR(e,n,r)}}}},kI=function(e){var n=e.baseTag,r=e.bodyAttributes,i=e.encode,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,f=e.styleTags,h=e.title,p=h===void 0?"":h,g=e.titleAttributes;return{base:vr(ce.BASE,n,i),bodyAttributes:vr(lo.BODY,r,i),htmlAttributes:vr(lo.HTML,o,i),link:vr(ce.LINK,s,i),meta:vr(ce.META,a,i),noscript:vr(ce.NOSCRIPT,u,i),script:vr(ce.SCRIPT,c,i),style:vr(ce.STYLE,f,i),title:vr(ce.TITLE,{title:p,titleAttributes:g},i)}},gR=function(e){var n,r;return r=n=function(i){eR(o,i);function o(){return Jx(this,o),tR(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(a){return!zx(this.props,a)},o.prototype.mapNestedChildrenToProps=function(a,u){if(!u)return null;switch(a.type){case ce.SCRIPT:case ce.NOSCRIPT:return{innerHTML:u};case ce.STYLE:return{cssText:u}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(a){var u,c=a.child,f=a.arrayTypeChildren,h=a.newChildProps,p=a.nestedChildren;return en({},f,(u={},u[c.type]=[].concat(f[c.type]||[],[en({},h,this.mapNestedChildrenToProps(c,p))]),u))},o.prototype.mapObjectTypeChildren=function(a){var u,c,f=a.child,h=a.newProps,p=a.newChildProps,g=a.nestedChildren;switch(f.type){case ce.TITLE:return en({},h,(u={},u[f.type]=g,u.titleAttributes=en({},p),u));case ce.BODY:return en({},h,{bodyAttributes:en({},p)});case ce.HTML:return en({},h,{htmlAttributes:en({},p)})}return en({},h,(c={},c[f.type]=en({},p),c))},o.prototype.mapArrayTypeChildrenToProps=function(a,u){var c=en({},u);return Object.keys(a).forEach(function(f){var h;c=en({},c,(h={},h[f]=a[f],h))}),c},o.prototype.warnOnInvalidChildren=function(a,u){return!0},o.prototype.mapChildrenToProps=function(a,u){var c=this,f={};return jt.Children.forEach(a,function(h){if(!(!h||!h.props)){var p=h.props,g=p.children,T=z_(p,["children"]),C=hR(T);switch(c.warnOnInvalidChildren(h,g),h.type){case ce.LINK:case ce.META:case ce.NOSCRIPT:case ce.SCRIPT:case ce.STYLE:f=c.flattenArrayTypeChildren({child:h,arrayTypeChildren:f,newChildProps:C,nestedChildren:g});break;default:u=c.mapObjectTypeChildren({child:h,newProps:u,newChildProps:C,nestedChildren:g});break}}}),u=this.mapArrayTypeChildrenToProps(f,u),u},o.prototype.render=function(){var a=this.props,u=a.children,c=z_(a,["children"]),f=en({},c);return u&&(f=this.mapChildrenToProps(u,f)),jt.createElement(e,f)},Zx(o,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),o}(jt.Component),n.propTypes={base:ee.object,bodyAttributes:ee.object,children:ee.oneOfType([ee.arrayOf(ee.node),ee.node]),defaultTitle:ee.string,defer:ee.bool,encodeSpecialCharacters:ee.bool,htmlAttributes:ee.object,link:ee.arrayOf(ee.object),meta:ee.arrayOf(ee.object),noscript:ee.arrayOf(ee.object),onChangeClientState:ee.func,script:ee.arrayOf(ee.object),style:ee.arrayOf(ee.object),title:ee.string,titleAttributes:ee.object,titleTemplate:ee.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var i=e.rewind();return i||(i=kI({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},vR=function(){return null},yR=Lx(oR,uR,kI)(vR),Or=gR(yR);Or.renderStatic=Or.rewind;var on=function(){return on=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},on.apply(this,arguments)};function uv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Dl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var je="-ms-",ll="-moz-",Ae="-webkit-",CI="comm",vd="rule",cv="decl",_R="@import",PI="@keyframes",wR="@layer",xI=Math.abs,fv=String.fromCharCode,pm=Object.assign;function ER(t,e){return vt(t,0)^45?(((e<<2^vt(t,0))<<2^vt(t,1))<<2^vt(t,2))<<2^vt(t,3):0}function RI(t){return t.trim()}function wr(t,e){return(t=e.exec(t))?t[0]:t}function he(t,e,n){return t.replace(e,n)}function jc(t,e,n){return t.indexOf(e,n)}function vt(t,e){return t.charCodeAt(e)|0}function Ms(t,e,n){return t.slice(e,n)}function Xn(t){return t.length}function NI(t){return t.length}function Ha(t,e){return e.push(t),t}function TR(t,e){return t.map(e).join("")}function H_(t,e){return t.filter(function(n){return!wr(n,e)})}var yd=1,Ls=1,OI=0,Pn=0,nt=0,ta="";function _d(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:yd,column:Ls,length:s,return:"",siblings:a}}function ei(t,e){return pm(_d("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function qo(t){for(;t.root;)t=ei(t.root,{children:[t]});Ha(t,t.siblings)}function IR(){return nt}function SR(){return nt=Pn>0?vt(ta,--Pn):0,Ls--,nt===10&&(Ls=1,yd--),nt}function zn(){return nt=Pn<OI?vt(ta,Pn++):0,Ls++,nt===10&&(Ls=1,yd++),nt}function uo(){return vt(ta,Pn)}function Uc(){return Pn}function wd(t,e){return Ms(ta,t,e)}function mm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bR(t){return yd=Ls=1,OI=Xn(ta=t),Pn=0,[]}function AR(t){return ta="",t}function Hh(t){return RI(wd(Pn-1,gm(t===91?t+2:t===40?t+1:t)))}function kR(t){for(;(nt=uo())&&nt<33;)zn();return mm(t)>2||mm(nt)>3?"":" "}function CR(t,e){for(;--e&&zn()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return wd(t,Uc()+(e<6&&uo()==32&&zn()==32))}function gm(t){for(;zn();)switch(nt){case t:return Pn;case 34:case 39:t!==34&&t!==39&&gm(nt);break;case 40:t===41&&gm(t);break;case 92:zn();break}return Pn}function PR(t,e){for(;zn()&&t+nt!==57;)if(t+nt===84&&uo()===47)break;return"/*"+wd(e,Pn-1)+"*"+fv(t===47?t:zn())}function xR(t){for(;!mm(uo());)zn();return wd(t,Pn)}function RR(t){return AR($c("",null,null,null,[""],t=bR(t),0,[0],t))}function $c(t,e,n,r,i,o,s,a,u){for(var c=0,f=0,h=s,p=0,g=0,T=0,C=1,k=1,_=1,v=0,I="",O=i,j=o,U=r,E=I;k;)switch(T=v,v=zn()){case 40:if(T!=108&&vt(E,h-1)==58){jc(E+=he(Hh(v),"&","&\f"),"&\f",xI(c?a[c-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:E+=Hh(v);break;case 9:case 10:case 13:case 32:E+=kR(T);break;case 92:E+=CR(Uc()-1,7);continue;case 47:switch(uo()){case 42:case 47:Ha(NR(PR(zn(),Uc()),e,n,u),u);break;default:E+="/"}break;case 123*C:a[c++]=Xn(E)*_;case 125*C:case 59:case 0:switch(v){case 0:case 125:k=0;case 59+f:_==-1&&(E=he(E,/\f/g,"")),g>0&&Xn(E)-h&&Ha(g>32?G_(E+";",r,n,h-1,u):G_(he(E," ","")+";",r,n,h-2,u),u);break;case 59:E+=";";default:if(Ha(U=q_(E,e,n,c,f,i,a,I,O=[],j=[],h,o),o),v===123)if(f===0)$c(E,e,U,U,O,o,h,a,j);else switch(p===99&&vt(E,3)===110?100:p){case 100:case 108:case 109:case 115:$c(t,U,U,r&&Ha(q_(t,U,U,0,0,i,a,I,i,O=[],h,j),j),i,j,h,a,r?O:j);break;default:$c(E,U,U,U,[""],j,0,a,j)}}c=f=g=0,C=_=1,I=E="",h=s;break;case 58:h=1+Xn(E),g=T;default:if(C<1){if(v==123)--C;else if(v==125&&C++==0&&SR()==125)continue}switch(E+=fv(v),v*C){case 38:_=f>0?1:(E+="\f",-1);break;case 44:a[c++]=(Xn(E)-1)*_,_=1;break;case 64:uo()===45&&(E+=Hh(zn())),p=uo(),f=h=Xn(I=E+=xR(Uc())),v++;break;case 45:T===45&&Xn(E)==2&&(C=0)}}return o}function q_(t,e,n,r,i,o,s,a,u,c,f,h){for(var p=i-1,g=i===0?o:[""],T=NI(g),C=0,k=0,_=0;C<r;++C)for(var v=0,I=Ms(t,p+1,p=xI(k=s[C])),O=t;v<T;++v)(O=RI(k>0?g[v]+" "+I:he(I,/&\f/g,g[v])))&&(u[_++]=O);return _d(t,e,n,i===0?vd:a,u,c,f,h)}function NR(t,e,n,r){return _d(t,e,n,CI,fv(IR()),Ms(t,2,-2),0,r)}function G_(t,e,n,r,i){return _d(t,e,n,cv,Ms(t,0,r),Ms(t,r+1,-1),r,i)}function DI(t,e,n){switch(ER(t,e)){case 5103:return Ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+t+t;case 4789:return ll+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+t+ll+t+je+t+t;case 5936:switch(vt(t,e+11)){case 114:return Ae+t+je+he(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ae+t+je+he(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ae+t+je+he(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ae+t+je+t+t;case 6165:return Ae+t+je+"flex-"+t+t;case 5187:return Ae+t+he(t,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+je+"flex-$1$2")+t;case 5443:return Ae+t+je+"flex-item-"+he(t,/flex-|-self/g,"")+(wr(t,/flex-|baseline/)?"":je+"grid-row-"+he(t,/flex-|-self/g,""))+t;case 4675:return Ae+t+je+"flex-line-pack"+he(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ae+t+je+he(t,"shrink","negative")+t;case 5292:return Ae+t+je+he(t,"basis","preferred-size")+t;case 6060:return Ae+"box-"+he(t,"-grow","")+Ae+t+je+he(t,"grow","positive")+t;case 4554:return Ae+he(t,/([^-])(transform)/g,"$1"+Ae+"$2")+t;case 6187:return he(he(he(t,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),t,"")+t;case 5495:case 3959:return he(t,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return he(he(t,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+t+t;case 4200:if(!wr(t,/flex-|baseline/))return je+"grid-column-align"+Ms(t,e)+t;break;case 2592:case 3360:return je+he(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,wr(r.props,/grid-\w+-end/)})?~jc(t+(n=n[e].value),"span",0)?t:je+he(t,"-start","")+t+je+"grid-row-span:"+(~jc(n,"span",0)?wr(n,/\d+/):+wr(n,/\d+/)-+wr(t,/\d+/))+";":je+he(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return wr(r.props,/grid-\w+-start/)})?t:je+he(he(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return he(t,/(.+)-inline(.+)/,Ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(t)-1-e>6)switch(vt(t,e+1)){case 109:if(vt(t,e+4)!==45)break;case 102:return he(t,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+ll+(vt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~jc(t,"stretch",0)?DI(he(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return he(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,c){return je+i+":"+o+c+(s?je+i+"-span:"+(a?u:+u-+o)+c:"")+t});case 4949:if(vt(t,e+6)===121)return he(t,":",":"+Ae)+t;break;case 6444:switch(vt(t,vt(t,14)===45?18:11)){case 120:return he(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(vt(t,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+je+"$2box$3")+t;case 100:return he(t,":",":"+je)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(t,"scroll-","scroll-snap-")+t}return t}function Cf(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function OR(t,e,n,r){switch(t.type){case wR:if(t.children.length)break;case _R:case cv:return t.return=t.return||t.value;case CI:return"";case PI:return t.return=t.value+"{"+Cf(t.children,r)+"}";case vd:if(!Xn(t.value=t.props.join(",")))return""}return Xn(n=Cf(t.children,r))?t.return=t.value+"{"+n+"}":""}function DR(t){var e=NI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function MR(t){return function(e){e.root||(e=e.return)&&t(e)}}function LR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case cv:t.return=DI(t.value,t.length,n);return;case PI:return Cf([ei(t,{value:he(t.value,"@","@"+Ae)})],r);case vd:if(t.length)return TR(n=t.props,function(i){switch(wr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qo(ei(t,{props:[he(i,/:(read-\w+)/,":"+ll+"$1")]})),qo(ei(t,{props:[i]})),pm(t,{props:H_(n,r)});break;case"::placeholder":qo(ei(t,{props:[he(i,/:(plac\w+)/,":"+Ae+"input-$1")]})),qo(ei(t,{props:[he(i,/:(plac\w+)/,":"+ll+"$1")]})),qo(ei(t,{props:[he(i,/:(plac\w+)/,je+"input-$1")]})),qo(ei(t,{props:[i]})),pm(t,{props:H_(n,r)});break}return""})}}var VR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn={},Vs=typeof process<"u"&&dn!==void 0&&(dn.REACT_APP_SC_ATTR||dn.SC_ATTR)||"data-styled",MI="active",LI="data-styled-version",Ed="6.1.11",dv=`/*!sc*/
`,hv=typeof window<"u"&&"HTMLElement"in window,FR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==""?dn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.SC_DISABLE_SPEEDY!==void 0&&dn.SC_DISABLE_SPEEDY!==""&&dn.SC_DISABLE_SPEEDY!=="false"&&dn.SC_DISABLE_SPEEDY),Td=Object.freeze([]),Fs=Object.freeze({});function jR(t,e,n){return n===void 0&&(n=Fs),t.theme!==n.theme&&t.theme||e||n.theme}var VI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),UR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$R=/(^-|-$)/g;function Y_(t){return t.replace(UR,"-").replace($R,"")}var zR=/(a)(d)/gi,uc=52,K_=function(t){return String.fromCharCode(t+(t>25?39:97))};function vm(t){var e,n="";for(e=Math.abs(t);e>uc;e=e/uc|0)n=K_(e%uc)+n;return(K_(e%uc)+n).replace(zR,"$1-$2")}var qh,FI=5381,us=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jI=function(t){return us(FI,t)};function UI(t){return vm(jI(t)>>>0)}function BR(t){return t.displayName||t.name||"Component"}function Gh(t){return typeof t=="string"&&!0}var $I=typeof Symbol=="function"&&Symbol.for,zI=$I?Symbol.for("react.memo"):60115,WR=$I?Symbol.for("react.forward_ref"):60112,HR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},GR=((qh={})[WR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qh[zI]=BI,qh);function Q_(t){return("type"in(e=t)&&e.type.$$typeof)===zI?BI:"$$typeof"in t?GR[t.$$typeof]:HR;var e}var YR=Object.defineProperty,KR=Object.getOwnPropertyNames,X_=Object.getOwnPropertySymbols,QR=Object.getOwnPropertyDescriptor,XR=Object.getPrototypeOf,J_=Object.prototype;function WI(t,e,n){if(typeof e!="string"){if(J_){var r=XR(e);r&&r!==J_&&WI(t,r,n)}var i=KR(e);X_&&(i=i.concat(X_(e)));for(var o=Q_(t),s=Q_(e),a=0;a<i.length;++a){var u=i[a];if(!(u in qR||n&&n[u]||s&&u in s||o&&u in o)){var c=QR(e,u);try{YR(t,u,c)}catch{}}}}return t}function js(t){return typeof t=="function"}function pv(t){return typeof t=="object"&&"styledComponentId"in t}function no(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ym(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Ml(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function _m(t,e,n){if(n===void 0&&(n=!1),!n&&!Ml(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=_m(t[r],e[r]);else if(Ml(e))for(var r in e)t[r]=_m(t[r],e[r]);return t}function mv(t,e){Object.defineProperty(t,"toString",{value:e})}function su(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var JR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw su(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(dv);return n},t}(),zc=new Map,Pf=new Map,Bc=1,cc=function(t){if(zc.has(t))return zc.get(t);for(;Pf.has(Bc);)Bc++;var e=Bc++;return zc.set(t,e),Pf.set(e,t),e},ZR=function(t,e){Bc=e+1,zc.set(t,e),Pf.set(e,t)},e2="style[".concat(Vs,"][").concat(LI,'="').concat(Ed,'"]'),t2=new RegExp("^".concat(Vs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),n2=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},r2=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(dv),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(t2);if(u){var c=0|parseInt(u[1],10),f=u[2];c!==0&&(ZR(f,c),n2(t,f,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function i2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var HI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Vs,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vs,MI),r.setAttribute(LI,Ed);var s=i2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},o2=function(){function t(e){this.element=HI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw su(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),s2=function(){function t(e){this.element=HI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),a2=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Z_=hv,l2={isServer:!hv,useCSSOMInjection:!FR},qI=function(){function t(e,n,r){e===void 0&&(e=Fs),n===void 0&&(n={});var i=this;this.options=on(on({},l2),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&hv&&Z_&&(Z_=!1,function(o){for(var s=document.querySelectorAll(e2),a=0,u=s.length;a<u;a++){var c=s[a];c&&c.getAttribute(Vs)!==MI&&(r2(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),mv(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",c=function(h){var p=function(_){return Pf.get(_)}(h);if(p===void 0)return"continue";var g=o.names.get(p),T=s.getGroup(h);if(g===void 0||T.length===0)return"continue";var C="".concat(Vs,".g").concat(h,'[id="').concat(p,'"]'),k="";g!==void 0&&g.forEach(function(_){_.length>0&&(k+="".concat(_,","))}),u+="".concat(T).concat(C,'{content:"').concat(k,'"}').concat(dv)},f=0;f<a;f++)c(f);return u}(i)})}return t.registerId=function(e){return cc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(on(on({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new a2(i):r?new o2(i):new s2(i)}(this.options),new JR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(cc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(cc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(cc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),u2=/&/g,c2=/^\s*\/\/.*$/gm;function GI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=GI(n.children,e)),n})}function f2(t){var e,n,r,i=Fs,o=i.options,s=o===void 0?Fs:o,a=i.plugins,u=a===void 0?Td:a,c=function(p,g,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):p},f=u.slice();f.push(function(p){p.type===vd&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(u2,n).replace(r,c))}),s.prefix&&f.push(LR),f.push(OR);var h=function(p,g,T,C){g===void 0&&(g=""),T===void 0&&(T=""),C===void 0&&(C="&"),e=C,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(c2,""),_=RR(T||g?"".concat(T," ").concat(g," { ").concat(k," }"):k);s.namespace&&(_=GI(_,s.namespace));var v=[];return Cf(_,DR(f.concat(MR(function(I){return v.push(I)})))),v};return h.hash=u.length?u.reduce(function(p,g){return g.name||su(15),us(p,g.name)},FI).toString():"",h}var d2=new qI,wm=f2(),YI=jt.createContext({shouldForwardProp:void 0,styleSheet:d2,stylis:wm});YI.Consumer;jt.createContext(void 0);function ew(){return V.useContext(YI)}var KI=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=wm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,mv(this,function(){throw su(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=wm),this.name+e.hash},t}(),h2=function(t){return t>="A"&&t<="Z"};function tw(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;h2(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var QI=function(t){return t==null||t===!1||t===""},XI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!QI(o)&&(Array.isArray(o)&&o.isCss||js(o)?r.push("".concat(tw(i),":"),o,";"):Ml(o)?r.push.apply(r,Dl(Dl(["".concat(i," {")],XI(o),!1),["}"],!1)):r.push("".concat(tw(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in VR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function co(t,e,n,r){if(QI(t))return[];if(pv(t))return[".".concat(t.styledComponentId)];if(js(t)){if(!js(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return co(i,e,n,r)}var o;return t instanceof KI?n?(t.inject(n,r),[t.getName(r)]):[t]:Ml(t)?XI(t):Array.isArray(t)?Array.prototype.concat.apply(Td,t.map(function(s){return co(s,e,n,r)})):[t.toString()]}function p2(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(js(n)&&!pv(n))return!1}return!0}var m2=jI(Ed),g2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&p2(e),this.componentId=n,this.baseHash=us(m2,n),this.baseStyle=r,qI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=no(i,this.staticRulesId);else{var o=ym(co(this.rules,e,n,r)),s=vm(us(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=no(i,s),this.staticRulesId=s}else{for(var u=us(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var p=ym(co(h,e,n,r));u=us(u,p+f),c+=p}}if(c){var g=vm(u>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=no(i,g)}}return i},t}(),JI=jt.createContext(void 0);JI.Consumer;var Yh={};function v2(t,e,n){var r=pv(t),i=t,o=!Gh(t),s=e.attrs,a=s===void 0?Td:s,u=e.componentId,c=u===void 0?function(O,j){var U=typeof O!="string"?"sc":Y_(O);Yh[U]=(Yh[U]||0)+1;var E="".concat(U,"-").concat(UI(Ed+U+Yh[U]));return j?"".concat(j,"-").concat(E):E}(e.displayName,e.parentComponentId):u,f=e.displayName,h=f===void 0?function(O){return Gh(O)?"styled.".concat(O):"Styled(".concat(BR(O),")")}(t):f,p=e.displayName&&e.componentId?"".concat(Y_(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;T=function(O,j){return C(O,j)&&k(O,j)}}else T=C}var _=new g2(n,p,r?i.componentStyle:void 0);function v(O,j){return function(U,E,w){var A=U.attrs,x=U.componentStyle,R=U.defaultProps,D=U.foldedComponentIds,P=U.styledComponentId,ht=U.target,cn=jt.useContext(JI),Xt=ew(),Q=U.shouldForwardProp||Xt.shouldForwardProp,F=jR(E,cn,R)||Fs,J=function(_t,wt,pt){for(var xn,Jt=on(on({},wt),{className:void 0,theme:pt}),Rn=0;Rn<_t.length;Rn+=1){var Tn=js(xn=_t[Rn])?xn(Jt):xn;for(var Zt in Tn)Jt[Zt]=Zt==="className"?no(Jt[Zt],Tn[Zt]):Zt==="style"?on(on({},Jt[Zt]),Tn[Zt]):Tn[Zt]}return wt.className&&(Jt.className=no(Jt.className,wt.className)),Jt}(A,E,F),oe=J.as||ht,pe={};for(var de in J)J[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&J.theme===F||(de==="forwardedAs"?pe.as=J.forwardedAs:Q&&!Q(de,oe)||(pe[de]=J[de]));var xe=function(_t,wt){var pt=ew(),xn=_t.generateAndInjectStyles(wt,pt.styleSheet,pt.stylis);return xn}(x,J),xt=no(D,P);return xe&&(xt+=" "+xe),J.className&&(xt+=" "+J.className),pe[Gh(oe)&&!VI.has(oe)?"class":"className"]=xt,pe.ref=w,V.createElement(oe,pe)}(I,O,j)}v.displayName=h;var I=jt.forwardRef(v);return I.attrs=g,I.componentStyle=_,I.displayName=h,I.shouldForwardProp=T,I.foldedComponentIds=r?no(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=p,I.target=r?i.target:t,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=r?function(j){for(var U=[],E=1;E<arguments.length;E++)U[E-1]=arguments[E];for(var w=0,A=U;w<A.length;w++)_m(j,A[w],!0);return j}({},i.defaultProps,O):O}}),mv(I,function(){return".".concat(I.styledComponentId)}),o&&WI(I,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function nw(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var rw=function(t){return Object.assign(t,{isCss:!0})};function ZI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(js(t)||Ml(t))return rw(co(nw(Td,Dl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?co(r):rw(co(nw(r,e)))}function Em(t,e,n){if(n===void 0&&(n=Fs),!e)throw su(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,ZI.apply(void 0,Dl([i],o,!1)))};return r.attrs=function(i){return Em(t,e,on(on({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Em(t,e,on(on({},n),i))},r}var eS=function(t){return Em(v2,t)},Ee=eS;VI.forEach(function(t){Ee[t]=eS(t)});function y2(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=ym(ZI.apply(void 0,Dl([t],e,!1))),i=UI(r);return new KI(i,r)}const na=Ee.div`
    width: 100%;
    padding: 2.5rem; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`,ra=Ee.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.5rem; /* 40px */
    
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2rem; /* 32px */
    }
`,gv=Ee.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
 
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
 
        & > div {
            display: flex;
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
        }
    }
`,_2=Ee.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ll.apply(this,arguments)}var fi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fi||(fi={}));const iw="popstate";function w2(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Tm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xf(i)}return T2(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function E2(){return Math.random().toString(36).substr(2,8)}function ow(t,e){return{usr:t.state,key:t.key,idx:e}}function Tm(t,e,n,r){return n===void 0&&(n=null),Ll({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ia(e):e,{state:n,key:e&&e.key||r||E2()})}function xf(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ia(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function T2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=fi.Pop,u=null,c=f();c==null&&(c=0,s.replaceState(Ll({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=fi.Pop;let k=f(),_=k==null?null:k-c;c=k,u&&u({action:a,location:C.location,delta:_})}function p(k,_){a=fi.Push;let v=Tm(C.location,k,_);c=f()+1;let I=ow(v,c),O=C.createHref(v);try{s.pushState(I,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}o&&u&&u({action:a,location:C.location,delta:1})}function g(k,_){a=fi.Replace;let v=Tm(C.location,k,_);c=f();let I=ow(v,c),O=C.createHref(v);s.replaceState(I,"",O),o&&u&&u({action:a,location:C.location,delta:0})}function T(k){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:xf(k);return v=v.replace(/ $/,"%20"),Ze(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let C={get action(){return a},get location(){return t(i,s)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(iw,h),u=k,()=>{i.removeEventListener(iw,h),u=null}},createHref(k){return e(i,k)},createURL:T,encodeLocation(k){let _=T(k);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:p,replace:g,go(k){return s.go(k)}};return C}var sw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sw||(sw={}));function I2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ia(e):e,i=vv(r.pathname||"/",n);if(i==null)return null;let o=nS(t);S2(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let u=L2(i);s=O2(o[a],u)}return s}function nS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ei([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nS(o.children,e,f,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:R2(c,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of rS(o.path))i(o,s,u)}),e}function rS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=rS(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function S2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:N2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b2=/^:[\w-]+$/,A2=3,k2=2,C2=1,P2=10,x2=-2,aw=t=>t==="*";function R2(t,e){let n=t.split("/"),r=n.length;return n.some(aw)&&(r+=x2),e&&(r+=k2),n.filter(i=>!aw(i)).reduce((i,o)=>i+(b2.test(o)?A2:o===""?C2:P2),r)}function N2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function O2(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],u=s===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=D2({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!f)return null;Object.assign(r,f.params);let h=a.route;o.push({params:r,pathname:Ei([i,f.pathname]),pathnameBase:U2(Ei([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Ei([i,f.pathnameBase]))}return o}function D2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=M2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,h)=>{let{paramName:p,isOptional:g}=f;if(p==="*"){let C=a[h]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const T=a[h];return g&&!T?c[p]=void 0:c[p]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function M2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function L2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function V2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ia(t):t;return{pathname:n?n.startsWith("/")?n:F2(n,e):e,search:$2(r),hash:z2(i)}}function F2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yv(t,e){let n=j2(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _v(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ia(t):(i=Ll({},t),Ze(!i.pathname||!i.pathname.includes("?"),Kh("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),Kh("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),Kh("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let h=e.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let u=V2(i,a),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Ei=t=>t.join("/").replace(/\/\/+/g,"/"),U2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,z2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function B2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iS=["post","put","patch","delete"];new Set(iS);const W2=["get",...iS];new Set(W2);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vl(){return Vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vl.apply(this,arguments)}const wv=V.createContext(null),H2=V.createContext(null),ji=V.createContext(null),Id=V.createContext(null),zr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),oS=V.createContext(null);function q2(t,e){let{relative:n}=e===void 0?{}:e;oa()||Ze(!1);let{basename:r,navigator:i}=V.useContext(ji),{hash:o,pathname:s,search:a}=aS(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Ei([r,s])),i.createHref({pathname:u,search:a,hash:o})}function oa(){return V.useContext(Id)!=null}function au(){return oa()||Ze(!1),V.useContext(Id).location}function sS(t){V.useContext(ji).static||V.useLayoutEffect(t)}function Ui(){let{isDataRoute:t}=V.useContext(zr);return t?sN():G2()}function G2(){oa()||Ze(!1);let t=V.useContext(wv),{basename:e,future:n,navigator:r}=V.useContext(ji),{matches:i}=V.useContext(zr),{pathname:o}=au(),s=JSON.stringify(yv(i,n.v7_relativeSplatPath)),a=V.useRef(!1);return sS(()=>{a.current=!0}),V.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=_v(c,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Ei([e,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[e,r,s,o,t])}function Y2(){let{matches:t}=V.useContext(zr),e=t[t.length-1];return e?e.params:{}}function aS(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(ji),{matches:i}=V.useContext(zr),{pathname:o}=au(),s=JSON.stringify(yv(i,r.v7_relativeSplatPath));return V.useMemo(()=>_v(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function K2(t,e){return Q2(t,e)}function Q2(t,e,n,r){oa()||Ze(!1);let{navigator:i}=V.useContext(ji),{matches:o}=V.useContext(zr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=au(),f;if(e){var h;let k=typeof e=="string"?ia(e):e;u==="/"||(h=k.pathname)!=null&&h.startsWith(u)||Ze(!1),f=k}else f=c;let p=f.pathname||"/",g=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=I2(t,{pathname:g}),C=tN(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Ei([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ei([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return e&&C?V.createElement(Id.Provider,{value:{location:Vl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:fi.Pop}},C):C}function X2(){let t=oN(),e=B2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const J2=V.createElement(X2,null);class Z2 extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(zr.Provider,{value:this.props.routeContext},V.createElement(oS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eN(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(wv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(zr.Provider,{value:e},r)}function tN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||Ze(!1),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:p,errors:g}=n,T=h.route.loader&&p[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||T){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,h,p)=>{let g,T=!1,C=null,k=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,C=h.route.errorElement||J2,u&&(c<0&&p===0?(T=!0,k=null):c===p&&(T=!0,k=h.route.hydrateFallbackElement||null)));let _=e.concat(s.slice(0,p+1)),v=()=>{let I;return g?I=C:T?I=k:h.route.Component?I=V.createElement(h.route.Component,null):h.route.element?I=h.route.element:I=f,V.createElement(eN,{match:h,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:I})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?V.createElement(Z2,{location:n.location,revalidation:n.revalidation,component:C,error:g,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var lS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(lS||{}),Rf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Rf||{});function nN(t){let e=V.useContext(wv);return e||Ze(!1),e}function rN(t){let e=V.useContext(H2);return e||Ze(!1),e}function iN(t){let e=V.useContext(zr);return e||Ze(!1),e}function uS(t){let e=iN(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function oN(){var t;let e=V.useContext(oS),n=rN(Rf.UseRouteError),r=uS(Rf.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function sN(){let{router:t}=nN(lS.UseNavigateStable),e=uS(Rf.UseNavigateStable),n=V.useRef(!1);return sS(()=>{n.current=!0}),V.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Vl({fromRouteId:e},o)))},[t,e])}function aN(t){let{to:e,replace:n,state:r,relative:i}=t;oa()||Ze(!1);let{future:o,static:s}=V.useContext(ji),{matches:a}=V.useContext(zr),{pathname:u}=au(),c=Ui(),f=_v(e,yv(a,o.v7_relativeSplatPath),u,i==="path"),h=JSON.stringify(f);return V.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:i}),[c,h,i,n,r]),null}function Qi(t){Ze(!1)}function lN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=fi.Pop,navigator:o,static:s=!1,future:a}=t;oa()&&Ze(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:o,static:s,future:Vl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=ia(r));let{pathname:f="/",search:h="",hash:p="",state:g=null,key:T="default"}=r,C=V.useMemo(()=>{let k=vv(f,u);return k==null?null:{location:{pathname:k,search:h,hash:p,state:g,key:T},navigationType:i}},[u,f,h,p,g,T,i]);return C==null?null:V.createElement(ji.Provider,{value:c},V.createElement(Id.Provider,{children:n,value:C}))}function uN(t){let{children:e,location:n}=t;return K2(Im(e),n)}new Promise(()=>{});function Im(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let o=[...e,i];if(r.type===V.Fragment){n.push.apply(n,Im(r.props.children,o));return}r.type!==Qi&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Im(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sm(){return Sm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sm.apply(this,arguments)}function cN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dN(t,e){return t.button===0&&(!e||e==="_self")&&!fN(t)}const hN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pN="6";try{window.__reactRouterVersion=pN}catch{}const mN="startTransition",lw=hC[mN];function gN(t){let{basename:e,children:n,future:r,window:i}=t,o=V.useRef();o.current==null&&(o.current=w2({window:i,v5Compat:!0}));let s=o.current,[a,u]=V.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},f=V.useCallback(h=>{c&&lw?lw(()=>u(h)):u(h)},[u,c]);return V.useLayoutEffect(()=>s.listen(f),[s,f]),V.createElement(lN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const vN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bm=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:c,preventScrollReset:f,unstable_viewTransition:h}=e,p=cN(e,hN),{basename:g}=V.useContext(ji),T,C=!1;if(typeof c=="string"&&yN.test(c)&&(T=c,vN))try{let I=new URL(window.location.href),O=c.startsWith("//")?new URL(I.protocol+c):new URL(c),j=vv(O.pathname,g);O.origin===I.origin&&j!=null?c=j+O.search+O.hash:C=!0}catch{}let k=q2(c,{relative:i}),_=_N(c,{replace:s,state:a,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:h});function v(I){r&&r(I),I.defaultPrevented||_(I)}return V.createElement("a",Sm({},p,{href:T||k,onClick:C||o?r:v,ref:n,target:u}))});var uw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(uw||(uw={}));var cw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(cw||(cw={}));function _N(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,u=Ui(),c=au(),f=aS(t,{relative:s});return V.useCallback(h=>{if(dN(h,n)){h.preventDefault();let p=r!==void 0?r:xf(c)===xf(f);u(t,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,u,f,r,i,n,t,o,s,a])}const Dr=Ee(bm)`
    background: ${t=>t.primario?"#5B69E2":"#000"};
    width: ${t=>t.conIcono?"15.62rem":"auto"}; /* 250px */
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
 
    svg {
        height: ${t=>t.iconoGrande?"100%":"0.75rem;"};  /* 12px */
        fill: white;
    }
`;function fw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fw(Object(n),!0).forEach(function(r){dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nf(t){"@babel/helpers - typeof";return Nf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nf(t)}function wN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function EN(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function TN(t,e,n){return e&&EN(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ev(t,e){return SN(t)||AN(t,e)||cS(t,e)||CN()}function lu(t){return IN(t)||bN(t)||cS(t)||kN()}function IN(t){if(Array.isArray(t))return Am(t)}function SN(t){if(Array.isArray(t))return t}function bN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function AN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(u){o=!0,a=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function cS(t,e){if(t){if(typeof t=="string")return Am(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Am(t,e)}}function Am(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function kN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dw=function(){},Tv={},fS={},dS=null,hS={mark:dw,measure:dw};try{typeof window<"u"&&(Tv=window),typeof document<"u"&&(fS=document),typeof MutationObserver<"u"&&(dS=MutationObserver),typeof performance<"u"&&(hS=performance)}catch{}var PN=Tv.navigator||{},hw=PN.userAgent,pw=hw===void 0?"":hw,Pi=Tv,ze=fS,mw=dS,fc=hS;Pi.document;var Br=!!ze.documentElement&&!!ze.head&&typeof ze.addEventListener=="function"&&typeof ze.createElement=="function",pS=~pw.indexOf("MSIE")||~pw.indexOf("Trident/"),dc,hc,pc,mc,gc,Mr="___FONT_AWESOME___",km=16,mS="fa",gS="svg-inline--fa",_o="data-fa-i2svg",Cm="data-fa-pseudo-element",xN="data-fa-pseudo-element-pending",Iv="data-prefix",Sv="data-icon",gw="fontawesome-i2svg",RN="async",NN=["HTML","HEAD","STYLE","SCRIPT"],vS=function(){try{return!0}catch{return!1}}(),Ue="classic",Xe="sharp",bv=[Ue,Xe];function uu(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ue]}})}var Fl=uu((dc={},dt(dc,Ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),dt(dc,Xe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),dc)),jl=uu((hc={},dt(hc,Ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),dt(hc,Xe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),hc)),Ul=uu((pc={},dt(pc,Ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),dt(pc,Xe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pc)),ON=uu((mc={},dt(mc,Ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),dt(mc,Xe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),mc)),DN=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,yS="fa-layers-text",MN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,LN=uu((gc={},dt(gc,Ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),dt(gc,Xe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),gc)),_S=[1,2,3,4,5,6,7,8,9,10],VN=_S.concat([11,12,13,14,15,16,17,18,19,20]),FN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ro={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$l=new Set;Object.keys(jl[Ue]).map($l.add.bind($l));Object.keys(jl[Xe]).map($l.add.bind($l));var jN=[].concat(bv,lu($l),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ro.GROUP,ro.SWAP_OPACITY,ro.PRIMARY,ro.SECONDARY]).concat(_S.map(function(t){return"".concat(t,"x")})).concat(VN.map(function(t){return"w-".concat(t)})),ul=Pi.FontAwesomeConfig||{};function UN(t){var e=ze.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $N(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ze&&typeof ze.querySelector=="function"){var zN=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zN.forEach(function(t){var e=Ev(t,2),n=e[0],r=e[1],i=$N(UN(n));i!=null&&(ul[r]=i)})}var wS={styleDefault:"solid",familyDefault:"classic",cssPrefix:mS,replacementClass:gS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ul.familyPrefix&&(ul.cssPrefix=ul.familyPrefix);var Us=K(K({},wS),ul);Us.autoReplaceSvg||(Us.observeMutations=!1);var te={};Object.keys(wS).forEach(function(t){Object.defineProperty(te,t,{enumerable:!0,set:function(n){Us[t]=n,cl.forEach(function(r){return r(te)})},get:function(){return Us[t]}})});Object.defineProperty(te,"familyPrefix",{enumerable:!0,set:function(e){Us.cssPrefix=e,cl.forEach(function(n){return n(te)})},get:function(){return Us.cssPrefix}});Pi.FontAwesomeConfig=te;var cl=[];function BN(t){return cl.push(t),function(){cl.splice(cl.indexOf(t),1)}}var Xr=km,nr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WN(t){if(!(!t||!Br)){var e=ze.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ze.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return ze.head.insertBefore(e,r),t}}var HN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zl(){for(var t=12,e="";t-- >0;)e+=HN[Math.random()*62|0];return e}function sa(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Av(t){return t.classList?sa(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ES(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qN(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ES(t[n]),'" ')},"").trim()}function Sd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function kv(t){return t.size!==nr.size||t.x!==nr.x||t.y!==nr.y||t.rotate!==nr.rotate||t.flipX||t.flipY}function GN(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function YN(t){var e=t.transform,n=t.width,r=n===void 0?km:n,i=t.height,o=i===void 0?km:i,s=t.startCentered,a=s===void 0?!1:s,u="";return a&&pS?u+="translate(".concat(e.x/Xr-r/2,"em, ").concat(e.y/Xr-o/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/Xr,"em), calc(-50% + ").concat(e.y/Xr,"em)) "):u+="translate(".concat(e.x/Xr,"em, ").concat(e.y/Xr,"em) "),u+="scale(".concat(e.size/Xr*(e.flipX?-1:1),", ").concat(e.size/Xr*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var KN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function TS(){var t=mS,e=gS,n=te.cssPrefix,r=te.replacementClass,i=KN;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var vw=!1;function Qh(){te.autoAddCss&&!vw&&(WN(TS()),vw=!0)}var QN={mixout:function(){return{dom:{css:TS,insertCss:Qh}}},hooks:function(){return{beforeDOMElementCreation:function(){Qh()},beforeI2svg:function(){Qh()}}}},Lr=Pi||{};Lr[Mr]||(Lr[Mr]={});Lr[Mr].styles||(Lr[Mr].styles={});Lr[Mr].hooks||(Lr[Mr].hooks={});Lr[Mr].shims||(Lr[Mr].shims=[]);var jn=Lr[Mr],IS=[],XN=function t(){ze.removeEventListener("DOMContentLoaded",t),Of=1,IS.map(function(e){return e()})},Of=!1;Br&&(Of=(ze.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ze.readyState),Of||ze.addEventListener("DOMContentLoaded",XN));function JN(t){Br&&(Of?setTimeout(t,0):IS.push(t))}function cu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?ES(t):"<".concat(e," ").concat(qN(r),">").concat(o.map(cu).join(""),"</").concat(e,">")}function yw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xh=function(e,n,r,i){var o=Object.keys(e),s=o.length,a=n,u,c,f;for(r===void 0?(u=1,f=e[o[0]]):(u=0,f=r);u<s;u++)c=o[u],f=a(f,e[c],c,e);return f};function ZN(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pm(t){var e=ZN(t);return e.length===1?e[0].toString(16):null}function eO(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function _w(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function xm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=_w(e);typeof jn.hooks.addPack=="function"&&!i?jn.hooks.addPack(t,_w(e)):jn.styles[t]=K(K({},jn.styles[t]||{}),o),t==="fas"&&xm("fa",e)}var vc,yc,_c,cs=jn.styles,tO=jn.shims,nO=(vc={},dt(vc,Ue,Object.values(Ul[Ue])),dt(vc,Xe,Object.values(Ul[Xe])),vc),Cv=null,SS={},bS={},AS={},kS={},CS={},rO=(yc={},dt(yc,Ue,Object.keys(Fl[Ue])),dt(yc,Xe,Object.keys(Fl[Xe])),yc);function iO(t){return~jN.indexOf(t)}function oO(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!iO(i)?i:null}var PS=function(){var e=function(o){return Xh(cs,function(s,a,u){return s[u]=Xh(a,o,{}),s},{})};SS=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=s})}return i}),bS=e(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=s})}return i}),CS=e(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(u){i[u]=s}),i});var n="far"in cs||te.autoFetchSvg,r=Xh(tO,function(i,o){var s=o[0],a=o[1],u=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:u}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});AS=r.names,kS=r.unicodes,Cv=bd(te.styleDefault,{family:te.familyDefault})};BN(function(t){Cv=bd(t.styleDefault,{family:te.familyDefault})});PS();function Pv(t,e){return(SS[t]||{})[e]}function sO(t,e){return(bS[t]||{})[e]}function io(t,e){return(CS[t]||{})[e]}function xS(t){return AS[t]||{prefix:null,iconName:null}}function aO(t){var e=kS[t],n=Pv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xi(){return Cv}var xv=function(){return{prefix:null,iconName:null,rest:[]}};function bd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ue:n,i=Fl[r][t],o=jl[r][t]||jl[r][i],s=t in jn.styles?t:null;return o||s||null}var ww=(_c={},dt(_c,Ue,Object.keys(Ul[Ue])),dt(_c,Xe,Object.keys(Ul[Xe])),_c);function Ad(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},dt(e,Ue,"".concat(te.cssPrefix,"-").concat(Ue)),dt(e,Xe,"".concat(te.cssPrefix,"-").concat(Xe)),e),s=null,a=Ue;(t.includes(o[Ue])||t.some(function(c){return ww[Ue].includes(c)}))&&(a=Ue),(t.includes(o[Xe])||t.some(function(c){return ww[Xe].includes(c)}))&&(a=Xe);var u=t.reduce(function(c,f){var h=oO(te.cssPrefix,f);if(cs[f]?(f=nO[a].includes(f)?ON[a][f]:f,s=f,c.prefix=f):rO[a].indexOf(f)>-1?(s=f,c.prefix=bd(f,{family:a})):h?c.iconName=h:f!==te.replacementClass&&f!==o[Ue]&&f!==o[Xe]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var p=s==="fa"?xS(c.iconName):{},g=io(c.prefix,c.iconName);p.prefix&&(s=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!cs.far&&cs.fas&&!te.autoFetchSvg&&(c.prefix="fas")}return c},xv());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&a===Xe&&(cs.fass||te.autoFetchSvg)&&(u.prefix="fass",u.iconName=io(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||s==="fa")&&(u.prefix=xi()||"fas"),u}var lO=function(){function t(){wN(this,t),this.definitions={}}return TN(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=K(K({},n.definitions[a]||{}),s[a]),xm(a,s[a]);var u=Ul[Ue][a];u&&xm(u,s[a]),PS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,u=s.iconName,c=s.icon,f=c[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][u]=c}),n}}]),t}(),Ew=[],fs={},Es={},uO=Object.keys(Es);function cO(t,e){var n=e.mixoutsTo;return Ew=t,fs={},Object.keys(Es).forEach(function(r){uO.indexOf(r)===-1&&delete Es[r]}),Ew.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Nf(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){fs[s]||(fs[s]=[]),fs[s].push(o[s])})}r.provides&&r.provides(Es)}),n}function Rm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=fs[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function wo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=fs[t]||[];i.forEach(function(o){o.apply(null,n)})}function Vr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Es[t]?Es[t].apply(null,e):void 0}function Nm(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||xi();if(e)return e=io(n,e)||e,yw(RS.definitions,n,e)||yw(jn.styles,n,e)}var RS=new lO,fO=function(){te.autoReplaceSvg=!1,te.observeMutations=!1,wo("noAuto")},dO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Br?(wo("beforeI2svg",e),Vr("pseudoElements2svg",e),Vr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;te.autoReplaceSvg===!1&&(te.autoReplaceSvg=!0),te.observeMutations=!0,JN(function(){pO({autoReplaceSvgRoot:n}),wo("watch",e)})}},hO={icon:function(e){if(e===null)return null;if(Nf(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:io(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=bd(e[0]);return{prefix:r,iconName:io(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(te.cssPrefix,"-"))>-1||e.match(DN))){var i=Ad(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||xi(),iconName:io(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=xi();return{prefix:o,iconName:io(o,e)||e}}}},En={noAuto:fO,config:te,dom:dO,parse:hO,library:RS,findIconDefinition:Nm,toHtml:cu},pO=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ze:n;(Object.keys(jn.styles).length>0||te.autoFetchSvg)&&Br&&te.autoReplaceSvg&&En.dom.i2svg({node:r})};function kd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return cu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Br){var r=ze.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function mO(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(kv(s)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=Sd(K(K({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function gO(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(te.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},i),{},{id:s}),children:r}]}]}function Rv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,u=t.title,c=t.maskId,f=t.titleId,h=t.extra,p=t.watchable,g=p===void 0?!1:p,T=r.found?r:n,C=T.width,k=T.height,_=i==="fak",v=[te.replacementClass,o?"".concat(te.cssPrefix,"-").concat(o):""].filter(function(A){return h.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(h.classes).join(" "),I={children:[],attributes:K(K({},h.attributes),{},{"data-prefix":i,"data-icon":o,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(k)})},O=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(C/k*16*.0625,"em")}:{};g&&(I.attributes[_o]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(f||zl())},children:[u]}),delete I.attributes.title);var j=K(K({},I),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:s,symbol:a,styles:K(K({},O),h.styles)}),U=r.found&&n.found?Vr("generateAbstractMask",j)||{children:[],attributes:{}}:Vr("generateAbstractIcon",j)||{children:[],attributes:{}},E=U.children,w=U.attributes;return j.children=E,j.attributes=w,a?gO(j):mO(j)}function Tw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,u=a===void 0?!1:a,c=K(K(K({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});u&&(c[_o]="");var f=K({},s.styles);kv(i)&&(f.transform=YN({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var h=Sd(f);h.length>0&&(c.style=h);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function vO(t){var e=t.content,n=t.title,r=t.extra,i=K(K(K({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Sd(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Jh=jn.styles;function Om(t){var e=t[0],n=t[1],r=t.slice(4),i=Ev(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(te.cssPrefix,"-").concat(ro.GROUP)},children:[{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(ro.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(ro.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var yO={found:!1,width:512,height:512};function _O(t,e){!vS&&!te.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dm(t,e){var n=e;return e==="fa"&&te.styleDefault!==null&&(e=xi()),new Promise(function(r,i){if(Vr("missingIconAbstract"),n==="fa"){var o=xS(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Jh[e]&&Jh[e][t]){var s=Jh[e][t];return r(Om(s))}_O(t,e),r(K(K({},yO),{},{icon:te.showMissingIcons&&t?Vr("missingIconAbstract")||{}:{}}))})}var Iw=function(){},Mm=te.measurePerformance&&fc&&fc.mark&&fc.measure?fc:{mark:Iw,measure:Iw},qa='FA "6.5.2"',wO=function(e){return Mm.mark("".concat(qa," ").concat(e," begins")),function(){return NS(e)}},NS=function(e){Mm.mark("".concat(qa," ").concat(e," ends")),Mm.measure("".concat(qa," ").concat(e),"".concat(qa," ").concat(e," begins"),"".concat(qa," ").concat(e," ends"))},Nv={begin:wO,end:NS},Wc=function(){};function Sw(t){var e=t.getAttribute?t.getAttribute(_o):null;return typeof e=="string"}function EO(t){var e=t.getAttribute?t.getAttribute(Iv):null,n=t.getAttribute?t.getAttribute(Sv):null;return e&&n}function TO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(te.replacementClass)}function IO(){if(te.autoReplaceSvg===!0)return Hc.replace;var t=Hc[te.autoReplaceSvg];return t||Hc.replace}function SO(t){return ze.createElementNS("http://www.w3.org/2000/svg",t)}function bO(t){return ze.createElement(t)}function OS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?SO:bO:n;if(typeof t=="string")return ze.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(OS(s,{ceFn:r}))}),i}function AO(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Hc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(OS(i),n)}),n.getAttribute(_o)===null&&te.keepOriginalSource){var r=ze.createComment(AO(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Av(n).indexOf(te.replacementClass))return Hc.replace(e);var i=new RegExp("".concat(te.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,u){return u===te.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return cu(a)}).join(`
`);n.setAttribute(_o,""),n.innerHTML=s}};function bw(t){t()}function DS(t,e){var n=typeof e=="function"?e:Wc;if(t.length===0)n();else{var r=bw;te.mutateApproach===RN&&(r=Pi.requestAnimationFrame||bw),r(function(){var i=IO(),o=Nv.begin("mutate");t.map(i),o(),n()})}}var Ov=!1;function MS(){Ov=!0}function Lm(){Ov=!1}var Df=null;function Aw(t){if(mw&&te.observeMutations){var e=t.treeCallback,n=e===void 0?Wc:e,r=t.nodeCallback,i=r===void 0?Wc:r,o=t.pseudoElementsCallback,s=o===void 0?Wc:o,a=t.observeMutationsRoot,u=a===void 0?ze:a;Df=new mw(function(c){if(!Ov){var f=xi();sa(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Sw(h.addedNodes[0])&&(te.searchPseudoElements&&s(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&te.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&Sw(h.target)&&~FN.indexOf(h.attributeName))if(h.attributeName==="class"&&EO(h.target)){var p=Ad(Av(h.target)),g=p.prefix,T=p.iconName;h.target.setAttribute(Iv,g||f),T&&h.target.setAttribute(Sv,T)}else TO(h.target)&&i(h.target)})}}),Br&&Df.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kO(){Df&&Df.disconnect()}function CO(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function PO(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ad(Av(t));return i.prefix||(i.prefix=xi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=sO(i.prefix,t.innerText)||Pv(i.prefix,Pm(t.innerText))),!i.iconName&&te.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function xO(t){var e=sa(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return te.autoA11y&&(n?e["aria-labelledby"]="".concat(te.replacementClass,"-title-").concat(r||zl()):(e["aria-hidden"]="true",e.focusable="false")),e}function RO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=PO(t),r=n.iconName,i=n.prefix,o=n.rest,s=xO(t),a=Rm("parseNodeAttributes",{},t),u=e.styleParser?CO(t):[];return K({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:nr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:u,attributes:s}},a)}var NO=jn.styles;function LS(t){var e=te.autoReplaceSvg==="nest"?kw(t,{styleParser:!1}):kw(t);return~e.extra.classes.indexOf(yS)?Vr("generateLayersText",t,e):Vr("generateSvgReplacementMutation",t,e)}var Ri=new Set;bv.map(function(t){Ri.add("fa-".concat(t))});Object.keys(Fl[Ue]).map(Ri.add.bind(Ri));Object.keys(Fl[Xe]).map(Ri.add.bind(Ri));Ri=lu(Ri);function Cw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Br)return Promise.resolve();var n=ze.documentElement.classList,r=function(h){return n.add("".concat(gw,"-").concat(h))},i=function(h){return n.remove("".concat(gw,"-").concat(h))},o=te.autoFetchSvg?Ri:bv.map(function(f){return"fa-".concat(f)}).concat(Object.keys(NO));o.includes("fa")||o.push("fa");var s=[".".concat(yS,":not([").concat(_o,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(_o,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=sa(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Nv.begin("onTree"),c=a.reduce(function(f,h){try{var p=LS(h);p&&f.push(p)}catch(g){vS||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,h){Promise.all(c).then(function(p){DS(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(function(p){u(),h(p)})})}function OO(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;LS(t).then(function(n){n&&DS([n],e)})}function DO(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Nm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Nm(i||{})),t(r,K(K({},n),{},{mask:i}))}}var MO=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?nr:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,u=a===void 0?null:a,c=n.maskId,f=c===void 0?null:c,h=n.title,p=h===void 0?null:h,g=n.titleId,T=g===void 0?null:g,C=n.classes,k=C===void 0?[]:C,_=n.attributes,v=_===void 0?{}:_,I=n.styles,O=I===void 0?{}:I;if(e){var j=e.prefix,U=e.iconName,E=e.icon;return kd(K({type:"icon"},e),function(){return wo("beforeDOMElementCreation",{iconDefinition:e,params:n}),te.autoA11y&&(p?v["aria-labelledby"]="".concat(te.replacementClass,"-title-").concat(T||zl()):(v["aria-hidden"]="true",v.focusable="false")),Rv({icons:{main:Om(E),mask:u?Om(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:U,transform:K(K({},nr),i),symbol:s,title:p,maskId:f,titleId:T,extra:{attributes:v,styles:O,classes:k}})})}},LO={mixout:function(){return{icon:DO(MO)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Cw,n.nodeCallback=OO,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ze:r,o=n.callback,s=o===void 0?function(){}:o;return Cw(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,u=r.transform,c=r.symbol,f=r.mask,h=r.maskId,p=r.extra;return new Promise(function(g,T){Promise.all([Dm(i,a),f.iconName?Dm(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var k=Ev(C,2),_=k[0],v=k[1];g([n,Rv({icons:{main:_,mask:v},prefix:a,iconName:i,transform:u,symbol:c,maskId:h,title:o,titleId:s,extra:p,watchable:!0})])}).catch(T)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,u=Sd(a);u.length>0&&(i.style=u);var c;return kv(s)&&(c=Vr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},VO={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return kd({type:"layer"},function(){wo("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(u){s=s.concat(u.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(te.cssPrefix,"-layers")].concat(lu(o)).join(" ")},children:s}]})}}}},FO={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,u=r.attributes,c=u===void 0?{}:u,f=r.styles,h=f===void 0?{}:f;return kd({type:"counter",content:n},function(){return wo("beforeDOMElementCreation",{content:n,params:r}),vO({content:n.toString(),title:o,extra:{attributes:c,styles:h,classes:["".concat(te.cssPrefix,"-layers-counter")].concat(lu(a))}})})}}}},jO={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?nr:i,s=r.title,a=s===void 0?null:s,u=r.classes,c=u===void 0?[]:u,f=r.attributes,h=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return kd({type:"text",content:n},function(){return wo("beforeDOMElementCreation",{content:n,params:r}),Tw({content:n,transform:K(K({},nr),o),title:a,extra:{attributes:h,styles:g,classes:["".concat(te.cssPrefix,"-layers-text")].concat(lu(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,u=null;if(pS){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/c,u=f.height/c}return te.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Tw({content:n.innerHTML,width:a,height:u,transform:o,title:i,extra:s,watchable:!0})])}}},UO=new RegExp('"',"ug"),Pw=[1105920,1112319];function $O(t){var e=t.replace(UO,""),n=eO(e,0),r=n>=Pw[0]&&n<=Pw[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pm(i?e[0]:e),isSecondary:r||i}}function xw(t,e){var n="".concat(xN).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=sa(t.children),s=o.filter(function(E){return E.getAttribute(Cm)===e})[0],a=Pi.getComputedStyle(t,e),u=a.getPropertyValue("font-family").match(MN),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&f!=="none"&&f!==""){var h=a.getPropertyValue("content"),p=~["Sharp"].indexOf(u[2])?Xe:Ue,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?jl[p][u[2].toLowerCase()]:LN[p][c],T=$O(h),C=T.value,k=T.isSecondary,_=u[0].startsWith("FontAwesome"),v=Pv(g,C),I=v;if(_){var O=aO(C);O.iconName&&O.prefix&&(v=O.iconName,g=O.prefix)}if(v&&!k&&(!s||s.getAttribute(Iv)!==g||s.getAttribute(Sv)!==I)){t.setAttribute(n,I),s&&t.removeChild(s);var j=RO(),U=j.extra;U.attributes[Cm]=e,Dm(v,g).then(function(E){var w=Rv(K(K({},j),{},{icons:{main:E,mask:xv()},prefix:g,iconName:I,extra:U,watchable:!0})),A=ze.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=w.map(function(x){return cu(x)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function zO(t){return Promise.all([xw(t,"::before"),xw(t,"::after")])}function BO(t){return t.parentNode!==document.head&&!~NN.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Cm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Rw(t){if(Br)return new Promise(function(e,n){var r=sa(t.querySelectorAll("*")).filter(BO).map(zO),i=Nv.begin("searchPseudoElements");MS(),Promise.all(r).then(function(){i(),Lm(),e()}).catch(function(){i(),Lm(),n()})})}var WO={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ze:r;te.searchPseudoElements&&Rw(i)}}},Nw=!1,HO={mixout:function(){return{dom:{unwatch:function(){MS(),Nw=!0}}}},hooks:function(){return{bootstrap:function(){Aw(Rm("mutationObserverCallbacks",{}))},noAuto:function(){kO()},watch:function(n){var r=n.observeMutationsRoot;Nw?Lm():Aw(Rm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ow=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},qO={mixout:function(){return{parse:{transform:function(n){return Ow(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ow(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(u," ").concat(c," ").concat(f)},p={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:h,path:p};return{tag:"g",attributes:K({},g.outer),children:[{tag:"g",attributes:K({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:K(K({},r.icon.attributes),g.path)}]}]}}}},Zh={x:0,y:0,width:"100%",height:"100%"};function Dw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function GO(t){return t.tag==="g"?t.children:[t]}var YO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Ad(i.split(" ").map(function(s){return s.trim()})):xv();return o.prefix||(o.prefix=xi()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,u=n.transform,c=o.width,f=o.icon,h=s.width,p=s.icon,g=GN({transform:u,containerWidth:h,iconWidth:c}),T={tag:"rect",attributes:K(K({},Zh),{},{fill:"white"})},C=f.children?{children:f.children.map(Dw)}:{},k={tag:"g",attributes:K({},g.inner),children:[Dw(K({tag:f.tag,attributes:K(K({},f.attributes),g.path)},C))]},_={tag:"g",attributes:K({},g.outer),children:[k]},v="mask-".concat(a||zl()),I="clip-".concat(a||zl()),O={tag:"mask",attributes:K(K({},Zh),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,_]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:GO(p)},O]};return r.push(j,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(v,")")},Zh)}),{children:r,attributes:i}}}},KO={provides:function(e){var n=!1;Pi.matchMedia&&(n=Pi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:K(K({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=K(K({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:K(K({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:K(K({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(K({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:K(K({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:K(K({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:K(K({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(K({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},QO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},XO=[QN,LO,VO,FO,jO,WO,HO,qO,YO,KO,QO];cO(XO,{mixoutsTo:En});En.noAuto;En.config;En.library;En.dom;var Vm=En.parse;En.findIconDefinition;En.toHtml;var JO=En.icon;En.layer;En.text;En.counter;function Mw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Jn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mw(Object(n),!0).forEach(function(r){ds(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mf(t){"@babel/helpers - typeof";return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mf(t)}function ds(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ZO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eD(t,e){if(t==null)return{};var n=ZO(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Fm(t){return tD(t)||nD(t)||rD(t)||iD()}function tD(t){if(Array.isArray(t))return jm(t)}function nD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rD(t,e){if(t){if(typeof t=="string")return jm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jm(t,e)}}function jm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function iD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,h=t.pulse,p=t.fixedWidth,g=t.inverse,T=t.border,C=t.listItem,k=t.flip,_=t.size,v=t.rotation,I=t.pull,O=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":p,"fa-inverse":g,"fa-border":T,"fa-li":C,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ds(e,"fa-".concat(_),typeof _<"u"&&_!==null),ds(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),ds(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),ds(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(O).map(function(j){return O[j]?j:null}).filter(function(j){return j})}function sD(t){return t=t-0,t===t}function VS(t){return sD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var aD=["style"];function lD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function uD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=VS(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[lD(i)]=o:e[i]=o,e},{})}function FS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return FS(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=uD(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[VS(c)]=f}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=eD(n,aD);return i.attrs.style=Jn(Jn({},i.attrs.style),s),t.apply(void 0,[e.tag,Jn(Jn({},i.attrs),a)].concat(Fm(r)))}var jS=!1;try{jS=!0}catch{}function cD(){if(!jS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Lw(t){if(t&&Mf(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vm.icon)return Vm.icon(t);if(t===null)return null;if(t&&Mf(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ep(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ds({},t,e):{}}var Vw={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ni=jt.forwardRef(function(t,e){var n=Jn(Jn({},Vw),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,u=n.titleId,c=n.maskId,f=Lw(r),h=ep("classes",[].concat(Fm(oD(n)),Fm((s||"").split(" ")))),p=ep("transform",typeof n.transform=="string"?Vm.transform(n.transform):n.transform),g=ep("mask",Lw(i)),T=JO(f,Jn(Jn(Jn(Jn({},h),p),g),{},{symbol:o,title:a,titleId:u,maskId:c}));if(!T)return cD("Could not find icon",f),null;var C=T.abstract,k={ref:e};return Object.keys(n).forEach(function(_){Vw.hasOwnProperty(_)||(k[_]=n[_])}),fD(C[0],k)});Ni.displayName="FontAwesomeIcon";Ni.propTypes={beat:ee.bool,border:ee.bool,beatFade:ee.bool,bounce:ee.bool,className:ee.string,fade:ee.bool,flash:ee.bool,mask:ee.oneOfType([ee.object,ee.array,ee.string]),maskId:ee.string,fixedWidth:ee.bool,inverse:ee.bool,flip:ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ee.oneOfType([ee.object,ee.array,ee.string]),listItem:ee.bool,pull:ee.oneOf(["right","left"]),pulse:ee.bool,rotation:ee.oneOf([0,90,180,270]),shake:ee.bool,size:ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ee.bool,spinPulse:ee.bool,spinReverse:ee.bool,symbol:ee.oneOfType([ee.bool,ee.string]),title:ee.string,titleId:ee.string,transform:ee.oneOfType([ee.string,ee.object]),swapOpacity:ee.bool};var fD=FS.bind(null,jt.createElement),dD={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},hD=dD,pD={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},mD={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},gD={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},vD={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},yD={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},Fw={};/**
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
 */const US=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_D=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},$S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;u||(g=64,s||(p=64)),r.push(n[f],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(US(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_D(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||h==null)throw new wD;const p=o<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const T=c<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ED=function(t){const e=US(t);return $S.encodeByteArray(e,!0)},Lf=function(t){return ED(t).replace(/\./g,"")},zS=function(t){try{return $S.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ID=()=>TD().__FIREBASE_DEFAULTS__,SD=()=>{if(typeof process>"u"||typeof Fw>"u")return;const t=Fw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zS(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return ID()||SD()||bD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},BS=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AD=t=>{const e=BS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WS=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config},HS=t=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function CD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lf(JSON.stringify(n)),Lf(JSON.stringify(s)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function xD(){var t;const e=(t=Cd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ND(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OD(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DD(){return!xD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MD(){try{return typeof indexedDB=="object"}catch{return!1}}function LD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const VD="FirebaseError";class Wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VD,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fu.prototype.create)}}class fu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?FD(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Wr(i,a,r)}}function FD(t,e){return t.replace(jD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jD=/\{\$([^}]+)}/g;function UD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(jw(o)&&jw(s)){if(!Vf(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jw(t){return t!==null&&typeof t=="object"}/**
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
 */function du(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $D(t,e){const n=new zD(t,e);return n.subscribe.bind(n)}class zD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tp),i.error===void 0&&(i.error=tp),i.complete===void 0&&(i.complete=tp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tp(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Eo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class WD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qD(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HD(t){return t===Xi?void 0:t}function qD(t){return t.instantiationMode==="EAGER"}/**
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
 */class GD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const YD={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},KD=ve.INFO,QD={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},XD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dv{constructor(e){this.name=e,this._logLevel=KD,this._logHandler=XD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const JD=(t,e)=>e.some(n=>t instanceof n);let Uw,$w;function ZD(){return Uw||(Uw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eM(){return $w||($w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qS=new WeakMap,Um=new WeakMap,GS=new WeakMap,np=new WeakMap,Mv=new WeakMap;function tM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ti(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&qS.set(n,t)}).catch(()=>{}),Mv.set(e,t),e}function nM(t){if(Um.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Um.set(t,e)}let $m={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Um.get(t);if(e==="objectStoreNames")return t.objectStoreNames||GS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rM(t){$m=t($m)}function iM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rp(this),e,...n);return GS.set(r,e.sort?e.sort():[e]),Ti(r)}:eM().includes(t)?function(...e){return t.apply(rp(this),e),Ti(qS.get(this))}:function(...e){return Ti(t.apply(rp(this),e))}}function oM(t){return typeof t=="function"?iM(t):(t instanceof IDBTransaction&&nM(t),JD(t,ZD())?new Proxy(t,$m):t)}function Ti(t){if(t instanceof IDBRequest)return tM(t);if(np.has(t))return np.get(t);const e=oM(t);return e!==t&&(np.set(t,e),Mv.set(e,t)),e}const rp=t=>Mv.get(t);function sM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ti(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Ti(s.result),u.oldVersion,u.newVersion,Ti(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const aM=["get","getKey","getAll","getAllKeys","count"],lM=["put","add","delete","clear"],ip=new Map;function zw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ip.get(e))return ip.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aM.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return ip.set(e,o),o}rM(t=>({...t,get:(e,n,r)=>zw(e,n)||t.get(e,n,r),has:(e,n)=>!!zw(e,n)||t.has(e,n)}));/**
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
 */class uM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zm="@firebase/app",Bw="0.10.5";/**
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
 */const To=new Dv("@firebase/app"),fM="@firebase/app-compat",dM="@firebase/analytics-compat",hM="@firebase/analytics",pM="@firebase/app-check-compat",mM="@firebase/app-check",gM="@firebase/auth",vM="@firebase/auth-compat",yM="@firebase/database",_M="@firebase/database-compat",wM="@firebase/functions",EM="@firebase/functions-compat",TM="@firebase/installations",IM="@firebase/installations-compat",SM="@firebase/messaging",bM="@firebase/messaging-compat",AM="@firebase/performance",kM="@firebase/performance-compat",CM="@firebase/remote-config",PM="@firebase/remote-config-compat",xM="@firebase/storage",RM="@firebase/storage-compat",NM="@firebase/firestore",OM="@firebase/vertexai-preview",DM="@firebase/firestore-compat",MM="firebase",LM="10.12.2";/**
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
 */const Bm="[DEFAULT]",VM={[zm]:"fire-core",[fM]:"fire-core-compat",[hM]:"fire-analytics",[dM]:"fire-analytics-compat",[mM]:"fire-app-check",[pM]:"fire-app-check-compat",[gM]:"fire-auth",[vM]:"fire-auth-compat",[yM]:"fire-rtdb",[_M]:"fire-rtdb-compat",[wM]:"fire-fn",[EM]:"fire-fn-compat",[TM]:"fire-iid",[IM]:"fire-iid-compat",[SM]:"fire-fcm",[bM]:"fire-fcm-compat",[AM]:"fire-perf",[kM]:"fire-perf-compat",[CM]:"fire-rc",[PM]:"fire-rc-compat",[xM]:"fire-gcs",[RM]:"fire-gcs-compat",[NM]:"fire-fst",[DM]:"fire-fst-compat",[OM]:"fire-vertex","fire-js":"fire-js",[MM]:"fire-js-all"};/**
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
 */const Ff=new Map,FM=new Map,Wm=new Map;function Ww(t,e){try{t.container.addComponent(e)}catch(n){To.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(Wm.has(e))return To.debug(`There were multiple attempts to register component ${e}.`),!1;Wm.set(e,t);for(const n of Ff.values())Ww(n,t);for(const n of FM.values())Ww(n,t);return!0}function Lv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rr(t){return t.settings!==void 0}/**
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
 */const jM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new fu("app","Firebase",jM);/**
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
 */class UM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Eo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
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
 */const aa=LM;function YS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ii.create("bad-app-name",{appName:String(i)});if(n||(n=WS()),!n)throw Ii.create("no-options");const o=Ff.get(i);if(o){if(Vf(n,o.options)&&Vf(r,o.config))return o;throw Ii.create("duplicate-app",{appName:i})}const s=new GD(i);for(const u of Wm.values())s.addComponent(u);const a=new UM(n,r,s);return Ff.set(i,a),a}function KS(t=Bm){const e=Ff.get(t);if(!e&&t===Bm&&WS())return YS();if(!e)throw Ii.create("no-app",{appName:t});return e}function Si(t,e,n){var r;let i=(r=VM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),To.warn(a.join(" "));return}$s(new Eo(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $M="firebase-heartbeat-database",zM=1,Bl="firebase-heartbeat-store";let op=null;function QS(){return op||(op=sM($M,zM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ii.create("idb-open",{originalErrorMessage:t.message})})),op}async function BM(t){try{const n=(await QS()).transaction(Bl),r=await n.objectStore(Bl).get(XS(t));return await n.done,r}catch(e){if(e instanceof Wr)To.warn(e.message);else{const n=Ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});To.warn(n.message)}}}async function Hw(t,e){try{const r=(await QS()).transaction(Bl,"readwrite");await r.objectStore(Bl).put(e,XS(t)),await r.done}catch(n){if(n instanceof Wr)To.warn(n.message);else{const r=Ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});To.warn(r.message)}}}function XS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WM=1024,HM=30*24*60*60*1e3;class qM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=HM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qw(),{heartbeatsToSend:r,unsentEntries:i}=GM(this._heartbeatsCache.heartbeats),o=Lf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function qw(){return new Date().toISOString().substring(0,10)}function GM(t,e=WM){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Gw(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MD()?LD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gw(t){return Lf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function KM(t){$s(new Eo("platform-logger",e=>new uM(e),"PRIVATE")),$s(new Eo("heartbeat",e=>new qM(e),"PRIVATE")),Si(zm,Bw,t),Si(zm,Bw,"esm2017"),Si("fire-js","")}KM("");var QM="firebase",XM="10.12.2";/**
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
 */Si(QM,XM,"app");var Yw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fo,JS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,w){function A(){}A.prototype=w.prototype,E.D=w.prototype,E.prototype=new A,E.prototype.constructor=E,E.C=function(x,R,D){for(var P=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)P[ht-2]=arguments[ht];return w.prototype[R].apply(x,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,w,A){A||(A=0);var x=Array(16);if(typeof w=="string")for(var R=0;16>R;++R)x[R]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(R=0;16>R;++R)x[R]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=E.g[0],A=E.g[1],R=E.g[2];var D=E.g[3],P=w+(D^A&(R^D))+x[0]+3614090360&4294967295;w=A+(P<<7&4294967295|P>>>25),P=D+(R^w&(A^R))+x[1]+3905402710&4294967295,D=w+(P<<12&4294967295|P>>>20),P=R+(A^D&(w^A))+x[2]+606105819&4294967295,R=D+(P<<17&4294967295|P>>>15),P=A+(w^R&(D^w))+x[3]+3250441966&4294967295,A=R+(P<<22&4294967295|P>>>10),P=w+(D^A&(R^D))+x[4]+4118548399&4294967295,w=A+(P<<7&4294967295|P>>>25),P=D+(R^w&(A^R))+x[5]+1200080426&4294967295,D=w+(P<<12&4294967295|P>>>20),P=R+(A^D&(w^A))+x[6]+2821735955&4294967295,R=D+(P<<17&4294967295|P>>>15),P=A+(w^R&(D^w))+x[7]+4249261313&4294967295,A=R+(P<<22&4294967295|P>>>10),P=w+(D^A&(R^D))+x[8]+1770035416&4294967295,w=A+(P<<7&4294967295|P>>>25),P=D+(R^w&(A^R))+x[9]+2336552879&4294967295,D=w+(P<<12&4294967295|P>>>20),P=R+(A^D&(w^A))+x[10]+4294925233&4294967295,R=D+(P<<17&4294967295|P>>>15),P=A+(w^R&(D^w))+x[11]+2304563134&4294967295,A=R+(P<<22&4294967295|P>>>10),P=w+(D^A&(R^D))+x[12]+1804603682&4294967295,w=A+(P<<7&4294967295|P>>>25),P=D+(R^w&(A^R))+x[13]+4254626195&4294967295,D=w+(P<<12&4294967295|P>>>20),P=R+(A^D&(w^A))+x[14]+2792965006&4294967295,R=D+(P<<17&4294967295|P>>>15),P=A+(w^R&(D^w))+x[15]+1236535329&4294967295,A=R+(P<<22&4294967295|P>>>10),P=w+(R^D&(A^R))+x[1]+4129170786&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^R&(w^A))+x[6]+3225465664&4294967295,D=w+(P<<9&4294967295|P>>>23),P=R+(w^A&(D^w))+x[11]+643717713&4294967295,R=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(R^D))+x[0]+3921069994&4294967295,A=R+(P<<20&4294967295|P>>>12),P=w+(R^D&(A^R))+x[5]+3593408605&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^R&(w^A))+x[10]+38016083&4294967295,D=w+(P<<9&4294967295|P>>>23),P=R+(w^A&(D^w))+x[15]+3634488961&4294967295,R=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(R^D))+x[4]+3889429448&4294967295,A=R+(P<<20&4294967295|P>>>12),P=w+(R^D&(A^R))+x[9]+568446438&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^R&(w^A))+x[14]+3275163606&4294967295,D=w+(P<<9&4294967295|P>>>23),P=R+(w^A&(D^w))+x[3]+4107603335&4294967295,R=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(R^D))+x[8]+1163531501&4294967295,A=R+(P<<20&4294967295|P>>>12),P=w+(R^D&(A^R))+x[13]+2850285829&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^R&(w^A))+x[2]+4243563512&4294967295,D=w+(P<<9&4294967295|P>>>23),P=R+(w^A&(D^w))+x[7]+1735328473&4294967295,R=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(R^D))+x[12]+2368359562&4294967295,A=R+(P<<20&4294967295|P>>>12),P=w+(A^R^D)+x[5]+4294588738&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^R)+x[8]+2272392833&4294967295,D=w+(P<<11&4294967295|P>>>21),P=R+(D^w^A)+x[11]+1839030562&4294967295,R=D+(P<<16&4294967295|P>>>16),P=A+(R^D^w)+x[14]+4259657740&4294967295,A=R+(P<<23&4294967295|P>>>9),P=w+(A^R^D)+x[1]+2763975236&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^R)+x[4]+1272893353&4294967295,D=w+(P<<11&4294967295|P>>>21),P=R+(D^w^A)+x[7]+4139469664&4294967295,R=D+(P<<16&4294967295|P>>>16),P=A+(R^D^w)+x[10]+3200236656&4294967295,A=R+(P<<23&4294967295|P>>>9),P=w+(A^R^D)+x[13]+681279174&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^R)+x[0]+3936430074&4294967295,D=w+(P<<11&4294967295|P>>>21),P=R+(D^w^A)+x[3]+3572445317&4294967295,R=D+(P<<16&4294967295|P>>>16),P=A+(R^D^w)+x[6]+76029189&4294967295,A=R+(P<<23&4294967295|P>>>9),P=w+(A^R^D)+x[9]+3654602809&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^R)+x[12]+3873151461&4294967295,D=w+(P<<11&4294967295|P>>>21),P=R+(D^w^A)+x[15]+530742520&4294967295,R=D+(P<<16&4294967295|P>>>16),P=A+(R^D^w)+x[2]+3299628645&4294967295,A=R+(P<<23&4294967295|P>>>9),P=w+(R^(A|~D))+x[0]+4096336452&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~R))+x[7]+1126891415&4294967295,D=w+(P<<10&4294967295|P>>>22),P=R+(w^(D|~A))+x[14]+2878612391&4294967295,R=D+(P<<15&4294967295|P>>>17),P=A+(D^(R|~w))+x[5]+4237533241&4294967295,A=R+(P<<21&4294967295|P>>>11),P=w+(R^(A|~D))+x[12]+1700485571&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~R))+x[3]+2399980690&4294967295,D=w+(P<<10&4294967295|P>>>22),P=R+(w^(D|~A))+x[10]+4293915773&4294967295,R=D+(P<<15&4294967295|P>>>17),P=A+(D^(R|~w))+x[1]+2240044497&4294967295,A=R+(P<<21&4294967295|P>>>11),P=w+(R^(A|~D))+x[8]+1873313359&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~R))+x[15]+4264355552&4294967295,D=w+(P<<10&4294967295|P>>>22),P=R+(w^(D|~A))+x[6]+2734768916&4294967295,R=D+(P<<15&4294967295|P>>>17),P=A+(D^(R|~w))+x[13]+1309151649&4294967295,A=R+(P<<21&4294967295|P>>>11),P=w+(R^(A|~D))+x[4]+4149444226&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~R))+x[11]+3174756917&4294967295,D=w+(P<<10&4294967295|P>>>22),P=R+(w^(D|~A))+x[2]+718787259&4294967295,R=D+(P<<15&4294967295|P>>>17),P=A+(D^(R|~w))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+w&4294967295,E.g[1]=E.g[1]+(R+(P<<21&4294967295|P>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+D&4294967295}r.prototype.u=function(E,w){w===void 0&&(w=E.length);for(var A=w-this.blockSize,x=this.B,R=this.h,D=0;D<w;){if(R==0)for(;D<=A;)i(this,E,D),D+=this.blockSize;if(typeof E=="string"){for(;D<w;)if(x[R++]=E.charCodeAt(D++),R==this.blockSize){i(this,x),R=0;break}}else for(;D<w;)if(x[R++]=E[D++],R==this.blockSize){i(this,x),R=0;break}}this.h=R,this.o+=w},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var w=1;w<E.length-8;++w)E[w]=0;var A=8*this.o;for(w=E.length-8;w<E.length;++w)E[w]=A&255,A/=256;for(this.u(E),E=Array(16),w=A=0;4>w;++w)for(var x=0;32>x;x+=8)E[A++]=this.g[w]>>>x&255;return E};function o(E,w){var A=a;return Object.prototype.hasOwnProperty.call(A,E)?A[E]:A[E]=w(E)}function s(E,w){this.h=w;for(var A=[],x=!0,R=E.length-1;0<=R;R--){var D=E[R]|0;x&&D==w||(A[R]=D,x=!1)}this.g=A}var a={};function u(E){return-128<=E&&128>E?o(E,function(w){return new s([w|0],0>w?-1:0)}):new s([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return h;if(0>E)return k(c(-E));for(var w=[],A=1,x=0;E>=A;x++)w[x]=E/A|0,A*=4294967296;return new s(w,0)}function f(E,w){if(E.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(E.charAt(0)=="-")return k(f(E.substring(1),w));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(w,8)),x=h,R=0;R<E.length;R+=8){var D=Math.min(8,E.length-R),P=parseInt(E.substring(R,R+D),w);8>D?(D=c(Math.pow(w,D)),x=x.j(D).add(c(P))):(x=x.j(A),x=x.add(c(P)))}return x}var h=u(0),p=u(1),g=u(16777216);t=s.prototype,t.m=function(){if(C(this))return-k(this).m();for(var E=0,w=1,A=0;A<this.g.length;A++){var x=this.i(A);E+=(0<=x?x:4294967296+x)*w,w*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(C(this))return"-"+k(this).toString(E);for(var w=c(Math.pow(E,6)),A=this,x="";;){var R=O(A,w).g;A=_(A,R.j(w));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(E);if(A=R,T(A))return D+x;for(;6>D.length;)D="0"+D;x=D+x}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(var w=0;w<E.g.length;w++)if(E.g[w]!=0)return!1;return!0}function C(E){return E.h==-1}t.l=function(E){return E=_(this,E),C(E)?-1:T(E)?0:1};function k(E){for(var w=E.g.length,A=[],x=0;x<w;x++)A[x]=~E.g[x];return new s(A,~E.h).add(p)}t.abs=function(){return C(this)?k(this):this},t.add=function(E){for(var w=Math.max(this.g.length,E.g.length),A=[],x=0,R=0;R<=w;R++){var D=x+(this.i(R)&65535)+(E.i(R)&65535),P=(D>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);x=P>>>16,D&=65535,P&=65535,A[R]=P<<16|D}return new s(A,A[A.length-1]&-2147483648?-1:0)};function _(E,w){return E.add(k(w))}t.j=function(E){if(T(this)||T(E))return h;if(C(this))return C(E)?k(this).j(k(E)):k(k(this).j(E));if(C(E))return k(this.j(k(E)));if(0>this.l(g)&&0>E.l(g))return c(this.m()*E.m());for(var w=this.g.length+E.g.length,A=[],x=0;x<2*w;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var R=0;R<E.g.length;R++){var D=this.i(x)>>>16,P=this.i(x)&65535,ht=E.i(R)>>>16,cn=E.i(R)&65535;A[2*x+2*R]+=P*cn,v(A,2*x+2*R),A[2*x+2*R+1]+=D*cn,v(A,2*x+2*R+1),A[2*x+2*R+1]+=P*ht,v(A,2*x+2*R+1),A[2*x+2*R+2]+=D*ht,v(A,2*x+2*R+2)}for(x=0;x<w;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=w;x<2*w;x++)A[x]=0;return new s(A,0)};function v(E,w){for(;(E[w]&65535)!=E[w];)E[w+1]+=E[w]>>>16,E[w]&=65535,w++}function I(E,w){this.g=E,this.h=w}function O(E,w){if(T(w))throw Error("division by zero");if(T(E))return new I(h,h);if(C(E))return w=O(k(E),w),new I(k(w.g),k(w.h));if(C(w))return w=O(E,k(w)),new I(k(w.g),w.h);if(30<E.g.length){if(C(E)||C(w))throw Error("slowDivide_ only works with positive integers.");for(var A=p,x=w;0>=x.l(E);)A=j(A),x=j(x);var R=U(A,1),D=U(x,1);for(x=U(x,2),A=U(A,2);!T(x);){var P=D.add(x);0>=P.l(E)&&(R=R.add(A),D=P),x=U(x,1),A=U(A,1)}return w=_(E,R.j(w)),new I(R,w)}for(R=h;0<=E.l(w);){for(A=Math.max(1,Math.floor(E.m()/w.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),D=c(A),P=D.j(w);C(P)||0<P.l(E);)A-=x,D=c(A),P=D.j(w);T(D)&&(D=p),R=R.add(D),E=_(E,P)}return new I(R,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var w=Math.max(this.g.length,E.g.length),A=[],x=0;x<w;x++)A[x]=this.i(x)&E.i(x);return new s(A,this.h&E.h)},t.or=function(E){for(var w=Math.max(this.g.length,E.g.length),A=[],x=0;x<w;x++)A[x]=this.i(x)|E.i(x);return new s(A,this.h|E.h)},t.xor=function(E){for(var w=Math.max(this.g.length,E.g.length),A=[],x=0;x<w;x++)A[x]=this.i(x)^E.i(x);return new s(A,this.h^E.h)};function j(E){for(var w=E.g.length+1,A=[],x=0;x<w;x++)A[x]=E.i(x)<<1|E.i(x-1)>>>31;return new s(A,E.h)}function U(E,w){var A=w>>5;w%=32;for(var x=E.g.length-A,R=[],D=0;D<x;D++)R[D]=0<w?E.i(D+A)>>>w|E.i(D+A+1)<<32-w:E.i(D+A);return new s(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,JS=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=f,fo=s}).apply(typeof Yw<"u"?Yw:typeof self<"u"?self:typeof window<"u"?window:{});var wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZS,eb,Ka,tb,qc,Hm,nb,rb,ib;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wc=="object"&&wc];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var M=l[y];if(!(M in m))break e;m=m[M]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function o(l,d){l instanceof String&&(l+="");var m=0,y=!1,M={next:function(){if(!y&&m<l.length){var L=m++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(l){return l||function(){return o(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,m){return l.call.apply(l.bind,arguments)}function h(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,y),l.apply(d,M)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,p.apply(null,arguments)}function g(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,M,L){for(var G=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)G[Re-2]=arguments[Re];return d.prototype[M].apply(y,G)}}function C(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function k(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const M=l.length||0,L=y.length||0;l.length=M+L;for(let G=0;G<L;G++)l[M+G]=y[G]}else l.push(y)}}class _{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var j=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function E(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function w(l){const d={};for(const m in l)d[m]=l[m];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,d){let m,y;for(let M=1;M<arguments.length;M++){y=arguments[M];for(m in y)l[m]=y[m];for(let L=0;L<A.length;L++)m=A[L],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function R(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function D(l){a.setTimeout(()=>{throw l},0)}function P(){var l=J;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ht{constructor(){this.h=this.g=null}add(d,m){const y=cn.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var cn=new _(()=>new Xt,l=>l.reset());class Xt{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,F=!1,J=new ht,oe=()=>{const l=a.Promise.resolve(void 0);Q=()=>{l.then(pe)}};var pe=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(m){D(m)}var d=cn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}F=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var xt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function _t(l,d){if(xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(j){e:{try{O(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&_t.aa.h.call(this)}}T(_t,xe);var wt={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),xn=0;function Jt(l,d,m,y,M){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=M,this.key=++xn,this.da=this.fa=!1}function Rn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Tn(l){this.src=l,this.g={},this.h=0}Tn.prototype.add=function(l,d,m,y,M){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var G=da(l,d,y,M);return-1<G?(d=l[G],m||(d.fa=!1)):(d=new Jt(d,this.src,L,!!y,M),d.fa=m,l.push(d)),d};function Zt(l,d){var m=d.type;if(m in l.g){var y=l.g[m],M=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=M)&&Array.prototype.splice.call(y,M,1),L&&(Rn(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function da(l,d,m,y){for(var M=0;M<l.length;++M){var L=l[M];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==y)return M}return-1}var Vo="closure_lm_"+(1e6*Math.random()|0),Fo={};function Pu(l,d,m,y,M){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Pu(l,d[L],m,y,M);return null}return m=Ru(m),l&&l[pt]?l.K(d,m,c(y)?!!y.capture:!!y,M):rh(l,d,m,!1,y,M)}function rh(l,d,m,y,M,L){if(!d)throw Error("Invalid event type");var G=c(M)?!!M.capture:!!M,Re=ma(l);if(Re||(l[Vo]=Re=new Tn(l)),m=Re.add(d,m,y,G,L),m.proxy)return m;if(y=ih(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)xt||(M=G),M===void 0&&(M=!1),l.addEventListener(d.toString(),y,M);else if(l.attachEvent)l.attachEvent(pa(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ih(){function l(m){return d.call(l.src,l.listener,m)}const d=oh;return l}function xu(l,d,m,y,M){if(Array.isArray(d))for(var L=0;L<d.length;L++)xu(l,d[L],m,y,M);else y=c(y)?!!y.capture:!!y,m=Ru(m),l&&l[pt]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],m=da(L,m,y,M),-1<m&&(Rn(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=ma(l))&&(d=l.g[d.toString()],l=-1,d&&(l=da(d,m,y,M)),(m=-1<l?d[l]:null)&&ha(m))}function ha(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[pt])Zt(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(pa(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=ma(d))?(Zt(m,l),m.h==0&&(m.src=null,d[Vo]=null)):Rn(l)}}}function pa(l){return l in Fo?Fo[l]:Fo[l]="on"+l}function oh(l,d){if(l.da)l=!0;else{d=new _t(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&ha(l),l=m.call(y,d)}return l}function ma(l){return l=l[Vo],l instanceof Tn?l:null}var ga="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ru(l){return typeof l=="function"?l:(l[ga]||(l[ga]=function(d){return l.handleEvent(d)}),l[ga])}function st(){de.call(this),this.i=new Tn(this),this.M=this,this.F=null}T(st,de),st.prototype[pt]=!0,st.prototype.removeEventListener=function(l,d,m,y){xu(this,l,d,m,y)};function Et(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new xe(d,l);else if(d instanceof xe)d.target=d.target||l;else{var M=d;d=new xe(y,l),x(d,M)}if(M=!0,m)for(var L=m.length-1;0<=L;L--){var G=d.g=m[L];M=Wi(G,y,!0,d)&&M}if(G=d.g=l,M=Wi(G,y,!0,d)&&M,M=Wi(G,y,!1,d)&&M,m)for(L=0;L<m.length;L++)G=d.g=m[L],M=Wi(G,y,!1,d)&&M}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)Rn(m[y]);delete l.g[d],l.h--}}this.F=null},st.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},st.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function Wi(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,L=0;L<d.length;++L){var G=d[L];if(G&&!G.da&&G.capture==m){var Re=G.listener,Tt=G.ha||G.src;G.fa&&Zt(l.i,G),M=Re.call(Tt,y)!==!1&&M}}return M&&!y.defaultPrevented}function va(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Nn(l){l.g=va(()=>{l.g=null,l.i&&(l.i=!1,Nn(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Nu extends de{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Nn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function S(l){de.call(this),this.h=l,this.g={}}T(S,de);var N=[];function B(l){U(l.g,function(d,m){this.g.hasOwnProperty(m)&&ha(d)},l),l.g={}}S.prototype.N=function(){S.aa.N.call(this),B(this)},S.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $=a.JSON.stringify,q=a.JSON.parse,ne=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ie(){}ie.prototype.h=null;function ye(l){return l.h||(l.h=l.i())}function Ie(){}var Pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ne(){xe.call(this,"d")}T(Ne,xe);function at(){xe.call(this,"c")}T(at,xe);var lt={},pr=null;function jo(){return pr=pr||new st}lt.La="serverreachability";function By(l){xe.call(this,lt.La,l)}T(By,xe);function ya(l){const d=jo();Et(d,new By(d))}lt.STAT_EVENT="statevent";function Wy(l,d){xe.call(this,lt.STAT_EVENT,l),this.stat=d}T(Wy,xe);function zt(l){const d=jo();Et(d,new Wy(d,l))}lt.Ma="timingevent";function Hy(l,d){xe.call(this,lt.Ma,l),this.size=d}T(Hy,xe);function _a(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function wa(){this.g=!0}wa.prototype.xa=function(){this.g=!1};function Ck(l,d,m,y,M,L){l.info(function(){if(l.g)if(L)for(var G="",Re=L.split("&"),Tt=0;Tt<Re.length;Tt++){var Se=Re[Tt].split("=");if(1<Se.length){var Rt=Se[0];Se=Se[1];var Nt=Rt.split("_");G=2<=Nt.length&&Nt[1]=="type"?G+(Rt+"="+Se+"&"):G+(Rt+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+y+") [attempt "+M+"]: "+d+`
`+m+`
`+G})}function Pk(l,d,m,y,M,L,G){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+M+"]: "+d+`
`+m+`
`+L+" "+G})}function Uo(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Rk(l,m)+(y?" "+y:"")})}function xk(l,d){l.info(function(){return"TIMEOUT: "+d})}wa.prototype.info=function(){};function Rk(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var M=y[1];if(Array.isArray(M)&&!(1>M.length)){var L=M[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<M.length;G++)M[G]=""}}}}return $(m)}catch{return d}}var Ou={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sh;function Du(){}T(Du,ie),Du.prototype.g=function(){return new XMLHttpRequest},Du.prototype.i=function(){return{}},sh=new Du;function Gr(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new S(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gy}function Gy(){this.i=null,this.g="",this.h=!1}var Yy={},ah={};function lh(l,d,m){l.L=1,l.v=Fu(mr(d)),l.m=m,l.P=!0,Ky(l,null)}function Ky(l,d){l.F=Date.now(),Mu(l),l.A=mr(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),u0(m.i,"t",y),l.C=0,m=l.j.J,l.h=new Gy,l.g=k0(l.j,m?d:null,!l.m),0<l.O&&(l.M=new Nu(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(N[0]=M.toString()),M=N);for(var L=0;L<M.length;L++){var G=Pu(m,M[L],y||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ya(),Ck(l.i,l.u,l.A,l.l,l.R,l.m)}Gr.prototype.ca=function(l){l=l.target;const d=this.M;d&&gr(l)==3?d.j():this.Y(l)},Gr.prototype.Y=function(l){try{if(l==this.g)e:{const Nt=gr(this.g);var d=this.g.Ba();const Bo=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||g0(this.g)))){this.J||Nt!=4||d==7||(d==8||0>=Bo?ya(3):ya(2)),uh(this);var m=this.g.Z();this.X=m;t:if(Qy(this)){var y=g0(this.g);l="";var M=y.length,L=gr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),Ea(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==M-1)});y.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,Pk(this.i,this.u,this.A,this.l,this.R,Nt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,Tt=this.g;if((Re=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Re)){var Se=Re;break t}}Se=null}if(m=Se)Uo(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ch(this,m);else{this.o=!1,this.s=3,zt(12),Hi(this),Ea(this);break e}}if(this.P){m=!0;let On;for(;!this.J&&this.C<G.length;)if(On=Nk(this,G),On==ah){Nt==4&&(this.s=4,zt(14),m=!1),Uo(this.i,this.l,null,"[Incomplete Response]");break}else if(On==Yy){this.s=4,zt(15),Uo(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Uo(this.i,this.l,On,null),ch(this,On);if(Qy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||G.length!=0||this.h.h||(this.s=1,zt(16),m=!1),this.o=this.o&&m,!m)Uo(this.i,this.l,G,"[Invalid Chunked Response]"),Hi(this),Ea(this);else if(0<G.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),gh(Rt),Rt.M=!0,zt(11))}}else Uo(this.i,this.l,G,null),ch(this,G);Nt==4&&Hi(this),this.o&&!this.J&&(Nt==4?I0(this.j,this):(this.o=!1,Mu(this)))}else Kk(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),Hi(this),Ea(this)}}}catch{}finally{}};function Qy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Nk(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?ah:(m=Number(d.substring(m,y)),isNaN(m)?Yy:(y+=1,y+m>d.length?ah:(d=d.slice(y,y+m),l.C=y+m,d)))}Gr.prototype.cancel=function(){this.J=!0,Hi(this)};function Mu(l){l.S=Date.now()+l.I,Xy(l,l.I)}function Xy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_a(p(l.ba,l),d)}function uh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(xk(this.i,this.A),this.L!=2&&(ya(),zt(17)),Hi(this),this.s=2,Ea(this)):Xy(this,this.S-l)};function Ea(l){l.j.G==0||l.J||I0(l.j,l)}function Hi(l){uh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,B(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function ch(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||fh(m.h,l))){if(!l.K&&fh(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var M=y;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Bu(m),$u(m);else break e;mh(m),zt(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=_a(p(m.Za,m),6e3));if(1>=e0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Gi(m,11)}else if((l.K||m.g==l)&&Bu(m),!v(d))for(M=m.Da.g.parse(d),d=0;d<M.length;d++){let Se=M[d];if(m.T=Se[0],Se=Se[1],m.G==2)if(Se[0]=="c"){m.K=Se[1],m.ia=Se[2];const Rt=Se[3];Rt!=null&&(m.la=Rt,m.j.info("VER="+m.la));const Nt=Se[4];Nt!=null&&(m.Aa=Nt,m.j.info("SVER="+m.Aa));const Bo=Se[5];Bo!=null&&typeof Bo=="number"&&0<Bo&&(y=1.5*Bo,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const On=l.g;if(On){const Hu=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hu){var L=y.h;L.g||Hu.indexOf("spdy")==-1&&Hu.indexOf("quic")==-1&&Hu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(dh(L,L.h),L.h=null))}if(y.D){const vh=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;vh&&(y.ya=vh,Ve(y.I,y.D,vh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var G=l;if(y.qa=A0(y,y.J?y.ia:null,y.W),G.K){t0(y.h,G);var Re=G,Tt=y.L;Tt&&(Re.I=Tt),Re.B&&(uh(Re),Mu(Re)),y.g=G}else E0(y);0<m.i.length&&zu(m)}else Se[0]!="stop"&&Se[0]!="close"||Gi(m,7);else m.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Gi(m,7):ph(m):Se[0]!="noop"&&m.l&&m.l.ta(Se),m.v=0)}}ya(4)}catch{}}var Ok=class{constructor(l,d){this.g=l,this.map=d}};function Jy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function e0(l){return l.h?1:l.g?l.g.size:0}function fh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function dh(l,d){l.g?l.g.add(d):l.h=d}function t0(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Jy.prototype.cancel=function(){if(this.i=n0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function n0(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return C(l.i)}function Dk(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function Mk(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function r0(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=Mk(l),y=Dk(l),M=y.length,L=0;L<M;L++)d.call(void 0,y[L],m&&m[L],l)}var i0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lk(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),M=null;if(0<=y){var L=l[m].substring(0,y);M=l[m].substring(y+1)}else L=l[m];d(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function qi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof qi){this.h=l.h,Lu(this,l.j),this.o=l.o,this.g=l.g,Vu(this,l.s),this.l=l.l;var d=l.i,m=new Sa;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),o0(this,m),this.m=l.m}else l&&(d=String(l).match(i0))?(this.h=!1,Lu(this,d[1]||"",!0),this.o=Ta(d[2]||""),this.g=Ta(d[3]||"",!0),Vu(this,d[4]),this.l=Ta(d[5]||"",!0),o0(this,d[6]||"",!0),this.m=Ta(d[7]||"")):(this.h=!1,this.i=new Sa(null,this.h))}qi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ia(d,s0,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ia(d,s0,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Ia(m,m.charAt(0)=="/"?jk:Fk,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Ia(m,$k)),l.join("")};function mr(l){return new qi(l)}function Lu(l,d,m){l.j=m?Ta(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Vu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function o0(l,d,m){d instanceof Sa?(l.i=d,zk(l.i,l.h)):(m||(d=Ia(d,Uk)),l.i=new Sa(d,l.h))}function Ve(l,d,m){l.i.set(d,m)}function Fu(l){return Ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ta(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ia(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,Vk),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Vk(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var s0=/[#\/\?@]/g,Fk=/[#\?:]/g,jk=/[#\?]/g,Uk=/[#\?@]/g,$k=/#/g;function Sa(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Yr(l){l.g||(l.g=new Map,l.h=0,l.i&&Lk(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Sa.prototype,t.add=function(l,d){Yr(this),this.i=null,l=$o(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function a0(l,d){Yr(l),d=$o(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function l0(l,d){return Yr(l),d=$o(l,d),l.g.has(d)}t.forEach=function(l,d){Yr(this),this.g.forEach(function(m,y){m.forEach(function(M){l.call(d,M,y,this)},this)},this)},t.na=function(){Yr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const M=l[y];for(let L=0;L<M.length;L++)m.push(d[y])}return m},t.V=function(l){Yr(this);let d=[];if(typeof l=="string")l0(this,l)&&(d=d.concat(this.g.get($o(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Yr(this),this.i=null,l=$o(this,l),l0(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function u0(l,d,m){a0(l,d),0<m.length&&(l.i=null,l.g.set($o(l,d),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const L=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var M=L;G[y]!==""&&(M+="="+encodeURIComponent(String(G[y]))),l.push(M)}}return this.i=l.join("&")};function $o(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function zk(l,d){d&&!l.j&&(Yr(l),l.i=null,l.g.forEach(function(m,y){var M=y.toLowerCase();y!=M&&(a0(this,y),u0(this,M,m))},l)),l.j=d}function Bk(l,d){const m=new wa;if(a.Image){const y=new Image;y.onload=g(Kr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=g(Kr,m,"TestLoadImage: error",!1,d,y),y.onabort=g(Kr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=g(Kr,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Wk(l,d){const m=new wa,y=new AbortController,M=setTimeout(()=>{y.abort(),Kr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(M),L.ok?Kr(m,"TestPingServer: ok",!0,d):Kr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),Kr(m,"TestPingServer: error",!1,d)})}function Kr(l,d,m,y,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),y(m)}catch{}}function Hk(){this.g=new ne}function qk(l,d,m){const y=m||"";try{r0(l,function(M,L){let G=M;c(M)&&(G=$(M)),d.push(y+L+"="+encodeURIComponent(G))})}catch(M){throw d.push(y+"type="+encodeURIComponent("_badmap")),M}}function ba(l){this.l=l.Ub||null,this.j=l.eb||!1}T(ba,ie),ba.prototype.g=function(){return new ju(this.l,this.j)},ba.prototype.i=function(l){return function(){return l}}({});function ju(l,d){st.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ju,st),t=ju.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,ka(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Aa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ka(this)),this.g&&(this.readyState=3,ka(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;c0(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function c0(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Aa(this):ka(this),this.readyState==3&&c0(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Aa(this))},t.Qa=function(l){this.g&&(this.response=l,Aa(this))},t.ga=function(){this.g&&Aa(this)};function Aa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ka(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function ka(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ju.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function f0(l){let d="";return U(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function hh(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=f0(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ve(l,d,m))}function Ke(l){st.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ke,st);var Gk=/^https?$/i,Yk=["POST","PUT"];t=Ke.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sh.g(),this.v=this.o?ye(this.o):ye(sh),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){d0(this,L);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var M in y)m.set(M,y[M]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Yk,d,void 0))||y||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of m)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{m0(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){d0(this,L)}};function d0(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,h0(l),Uu(l)}function h0(l){l.A||(l.A=!0,Et(l,"complete"),Et(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Et(this,"complete"),Et(this,"abort"),Uu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uu(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?p0(this):this.bb())},t.bb=function(){p0(this)};function p0(l){if(l.h&&typeof s<"u"&&(!l.v[1]||gr(l)!=4||l.Z()!=2)){if(l.u&&gr(l)==4)va(l.Ea,0,l);else if(Et(l,"readystatechange"),gr(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=G===0){var M=String(l.D).match(i0)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),y=!Gk.test(M?M.toLowerCase():"")}m=y}if(m)Et(l,"complete"),Et(l,"success");else{l.m=6;try{var L=2<gr(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",h0(l)}}finally{Uu(l)}}}}function Uu(l,d){if(l.g){m0(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Et(l,"ready");try{m.onreadystatechange=y}catch{}}}function m0(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function gr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<gr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),q(d)}};function g0(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Kk(l){const d={};l=(l.g&&2<=gr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(v(l[y]))continue;var m=R(l[y]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[M]||[];d[M]=L,L.push(m)}E(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ca(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function v0(l){this.Aa=0,this.i=[],this.j=new wa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ca("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ca("baseRetryDelayMs",5e3,l),this.cb=Ca("retryDelaySeedMs",1e4,l),this.Wa=Ca("forwardChannelMaxRetries",2,l),this.wa=Ca("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Jy(l&&l.concurrentRequestLimit),this.Da=new Hk,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=v0.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){zt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=A0(this,null,this.W),zu(this)};function ph(l){if(y0(l),l.G==3){var d=l.U++,m=mr(l.I);if(Ve(m,"SID",l.K),Ve(m,"RID",d),Ve(m,"TYPE","terminate"),Pa(l,m),d=new Gr(l,l.j,d),d.L=2,d.v=Fu(mr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=k0(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Mu(d)}b0(l)}function $u(l){l.g&&(gh(l),l.g.cancel(),l.g=null)}function y0(l){$u(l),l.u&&(a.clearTimeout(l.u),l.u=null),Bu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function zu(l){if(!Zy(l.h)&&!l.s){l.s=!0;var d=l.Ga;Q||oe(),F||(Q(),F=!0),J.add(d,l),l.B=0}}function Qk(l,d){return e0(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_a(p(l.Ga,l,d),S0(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Gr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=w(L),x(L,this.S)):L=this.S),this.m!==null||this.O||(M.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=w0(this,M,d),m=mr(this.I),Ve(m,"RID",l),Ve(m,"CVER",22),this.D&&Ve(m,"X-HTTP-Session-Id",this.D),Pa(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(f0(L)))+"&"+d:this.m&&hh(m,this.m,L)),dh(this.h,M),this.Ua&&Ve(m,"TYPE","init"),this.P?(Ve(m,"$req",d),Ve(m,"SID","null"),M.T=!0,lh(M,m,null)):lh(M,m,d),this.G=2}}else this.G==3&&(l?_0(this,l):this.i.length==0||Zy(this.h)||_0(this))};function _0(l,d){var m;d?m=d.l:m=l.U++;const y=mr(l.I);Ve(y,"SID",l.K),Ve(y,"RID",m),Ve(y,"AID",l.T),Pa(l,y),l.m&&l.o&&hh(y,l.m,l.o),m=new Gr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=w0(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),dh(l.h,m),lh(m,y,d)}function Pa(l,d){l.H&&U(l.H,function(m,y){Ve(d,y,m)}),l.l&&r0({},function(m,y){Ve(d,y,m)})}function w0(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var M=l.i;let L=-1;for(;;){const G=["count="+m];L==-1?0<m?(L=M[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let Re=!0;for(let Tt=0;Tt<m;Tt++){let Se=M[Tt].g;const Rt=M[Tt].map;if(Se-=L,0>Se)L=Math.max(0,M[Tt].g-100),Re=!1;else try{qk(Rt,G,"req"+Se+"_")}catch{y&&y(Rt)}}if(Re){y=G.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function E0(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Q||oe(),F||(Q(),F=!0),J.add(d,l),l.v=0}}function mh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_a(p(l.Fa,l),S0(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,T0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_a(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),$u(this),T0(this))};function gh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function T0(l){l.g=new Gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=mr(l.qa);Ve(d,"RID","rpc"),Ve(d,"SID",l.K),Ve(d,"AID",l.T),Ve(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ve(d,"TO",l.ja),Ve(d,"TYPE","xmlhttp"),Pa(l,d),l.m&&l.o&&hh(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Fu(mr(d)),m.m=null,m.P=!0,Ky(m,l)}t.Za=function(){this.C!=null&&(this.C=null,$u(this),mh(this),zt(19))};function Bu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function I0(l,d){var m=null;if(l.g==d){Bu(l),gh(l),l.g=null;var y=2}else if(fh(l.h,d))m=d.D,t0(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var M=l.B;y=jo(),Et(y,new Hy(y,m)),zu(l)}else E0(l);else if(M=d.s,M==3||M==0&&0<d.X||!(y==1&&Qk(l,d)||y==2&&mh(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),M){case 1:Gi(l,5);break;case 4:Gi(l,10);break;case 3:Gi(l,6);break;default:Gi(l,2)}}}function S0(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Gi(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const M=!y;y=new qi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Lu(y,"https"),Fu(y),M?Bk(y.toString(),m):Wk(y.toString(),m)}else zt(2);l.G=0,l.l&&l.l.sa(d),b0(l),y0(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function b0(l){if(l.G=0,l.ka=[],l.l){const d=n0(l.h);(d.length!=0||l.i.length!=0)&&(k(l.ka,d),k(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function A0(l,d,m){var y=m instanceof qi?mr(m):new qi(m);if(y.g!="")d&&(y.g=d+"."+y.g),Vu(y,y.s);else{var M=a.location;y=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var L=new qi(null);y&&Lu(L,y),d&&(L.g=d),M&&Vu(L,M),m&&(L.l=m),y=L}return m=l.D,d=l.ya,m&&d&&Ve(y,m,d),Ve(y,"VER",l.la),Pa(l,y),y}function k0(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ke(new ba({eb:m})):new Ke(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function C0(){}t=C0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wu(){}Wu.prototype.g=function(l,d){return new fn(l,d)};function fn(l,d){st.call(this),this.g=new v0(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!v(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new zo(this)}T(fn,st),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){ph(this.g)},fn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=$(l),l=m);d.i.push(new Ok(d.Ya++,l)),d.G==3&&zu(d)},fn.prototype.N=function(){this.g.l=null,delete this.j,ph(this.g),delete this.g,fn.aa.N.call(this)};function P0(l){Ne.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(P0,Ne);function x0(){at.call(this),this.status=1}T(x0,at);function zo(l){this.g=l}T(zo,C0),zo.prototype.ua=function(){Et(this.g,"a")},zo.prototype.ta=function(l){Et(this.g,new P0(l))},zo.prototype.sa=function(l){Et(this.g,new x0)},zo.prototype.ra=function(){Et(this.g,"b")},Wu.prototype.createWebChannel=Wu.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,ib=function(){return new Wu},rb=function(){return jo()},nb=lt,Hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ou.NO_ERROR=0,Ou.TIMEOUT=8,Ou.HTTP_ERROR=6,qc=Ou,qy.COMPLETE="complete",tb=qy,Ie.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",st.prototype.listen=st.prototype.K,Ka=Ie,eb=ba,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,ZS=Ke}).apply(typeof wc<"u"?wc:typeof self<"u"?self:typeof window<"u"?window:{});const Kw="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let la="10.12.1";/**
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
 */const Io=new Dv("@firebase/firestore");function Ua(){return Io.logLevel}function Z(t,...e){if(Io.logLevel<=ve.DEBUG){const n=e.map(Vv);Io.debug(`Firestore (${la}): ${t}`,...n)}}function Fr(t,...e){if(Io.logLevel<=ve.ERROR){const n=e.map(Vv);Io.error(`Firestore (${la}): ${t}`,...n)}}function zs(t,...e){if(Io.logLevel<=ve.WARN){const n=e.map(Vv);Io.warn(`Firestore (${la}): ${t}`,...n)}}function Vv(t){if(typeof t=="string")return t;try{/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${la}) INTERNAL ASSERTION FAILED: `+t;throw Fr(e),new Error(e)}function Me(t,e){t||le()}function fe(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ob{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class ZM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class e4{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new bi,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new bi)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new ob(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Lt(e)}}class t4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class n4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new t4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class r4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class i4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Z("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new r4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function o4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class sb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=o4(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new ft(0,0))}static max(){return new ue(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wl{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Wl{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const s4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Wl{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return s4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Y(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Oe.fromString(e))}static fromName(e){return new re(Oe.fromString(e).popFirst(5))}static empty(){return new re(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Oe(e.slice()))}}function a4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new ft(n+1,0):new ft(n,r));return new Oi(i,re.empty(),e)}function l4(t){return new Oi(t.readTime,t.key,-1)}class Oi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Oi(ue.min(),re.empty(),-1)}static max(){return new Oi(ue.max(),re.empty(),-1)}}function u4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const c4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class f4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function hu(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==c4)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(f=>{s[c]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new W((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function d4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fv.oe=-1;function Pd(t){return t==null}function jf(t){return t===0&&1/t==-1/0}function h4(t){return typeof t=="number"&&Number.isInteger(t)&&!jf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ab(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ec(this.root,e,this.comparator,!0)}}class Ec{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=o??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new St(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,o){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xw(this.data.getIterator())}getIteratorFrom(e){return new Xw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class Xw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new mn([])}unionWith(e){let n=new kt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new lb("Invalid base64 string: "+o):o}}(e);return new $t(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new $t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const p4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(t){if(Me(!!t),typeof t=="string"){let e=0;const n=p4.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function So(t){return typeof t=="string"?$t.fromBase64String(t):$t.fromUint8Array(t)}/**
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
 */function xd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jv(t){const e=t.mapValue.fields.__previous_value__;return xd(e)?jv(e):e}function Hl(t){const e=Di(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class m4{constructor(e,n,r,i,o,s,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ql{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ql&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xd(t)?4:g4(t)?9007199254740991:10:le()}function dr(t,e){if(t===e)return!0;const n=bo(t);if(n!==bo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Di(i.timestampValue),a=Di(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return So(i.bytesValue).isEqual(So(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=tt(i.doubleValue),a=tt(o.doubleValue);return s===a?jf(s)===jf(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(Qw(s)!==Qw(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!dr(s[u],a[u])))return!1;return!0}(t,e);default:return le()}}function Gl(t,e){return(t.values||[]).find(n=>dr(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=bo(t),r=bo(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=tt(o.integerValue||o.doubleValue),u=tt(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Jw(t.timestampValue,e.timestampValue);case 4:return Jw(Hl(t),Hl(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(o,s){const a=So(o),u=So(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let c=0;c<a.length&&c<u.length;c++){const f=be(a[c],u[c]);if(f!==0)return f}return be(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=be(tt(o.latitude),tt(s.latitude));return a!==0?a:be(tt(o.longitude),tt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],u=s.values||[];for(let c=0;c<a.length&&c<u.length;++c){const f=Ws(a[c],u[c]);if(f)return f}return be(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===Tc.mapValue&&s===Tc.mapValue)return 0;if(o===Tc.mapValue)return 1;if(s===Tc.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),c=s.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let h=0;h<u.length&&h<f.length;++h){const p=be(u[h],f[h]);if(p!==0)return p;const g=Ws(a[u[h]],c[f[h]]);if(g!==0)return g}return be(u.length,f.length)}(t.mapValue,e.mapValue);default:throw le()}}function Jw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Di(t),r=Di(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function Hs(t){return qm(t)}function qm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Di(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return So(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=qm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${qm(n.fields[s])}`;return i+"}"}(t.mapValue):le()}function Uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gm(t){return!!t&&"integerValue"in t}function Uv(t){return!!t&&"arrayValue"in t}function Zw(t){return!!t&&"nullValue"in t}function e1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gc(t){return!!t&&"mapValue"in t}function fl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function g4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fl(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=fl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Gc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oo(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new nn(fl(this.value))}}function ub(t){const e=[];return Oo(t.fields,(n,r)=>{const i=new bt([n]);if(Gc(r)){const o=ub(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new mn(e)}/**
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
 */class Ft{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Ft(e,0,ue.min(),ue.min(),ue.min(),nn.empty(),0)}static newFoundDocument(e,n,r,i){return new Ft(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new Ft(e,2,n,ue.min(),ue.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new Ft(e,3,n,ue.min(),ue.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qs{constructor(e,n){this.position=e,this.inclusive=n}}function t1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=re.comparator(re.fromName(s.referenceValue),n.key):r=Ws(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function n1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function v4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cb{}class it extends cb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _4(e,n,r):n==="array-contains"?new T4(e,r):n==="in"?new I4(e,r):n==="not-in"?new S4(e,r):n==="array-contains-any"?new b4(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new w4(e,r):new E4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ws(n,this.value)):n!==null&&bo(this.value)===bo(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends cb{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hn(e,n)}matches(e){return fb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fb(t){return t.op==="and"}function db(t){return y4(t)&&fb(t)}function y4(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Ym(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(db(t))return t.filters.map(e=>Ym(e)).join(",");{const e=t.filters.map(n=>Ym(n)).join(",");return`${t.op}(${e})`}}function hb(t,e){return t instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&dr(r.value,i.value)}(t,e):t instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&hb(s,i.filters[a]),!0):!1}(t,e):void le()}function pb(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(pb).join(" ,")+"}"}(t):"Filter"}class _4 extends it{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class w4 extends it{constructor(e,n){super(e,"in",n),this.keys=mb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class E4 extends it{constructor(e,n){super(e,"not-in",n),this.keys=mb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class T4 extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uv(n)&&Gl(n.arrayValue,this.value)}}class I4 extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gl(this.value.arrayValue,n)}}class S4 extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gl(this.value.arrayValue,n)}}class b4 extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gl(this.value.arrayValue,r))}}/**
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
 */class A4{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function r1(t,e=null,n=[],r=[],i=null,o=null,s=null){return new A4(t,e,n,r,i,o,s)}function $v(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ym(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Pd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.ue=n}return e.ue}function zv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!v4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!n1(t.startAt,e.startAt)&&n1(t.endAt,e.endAt)}function Km(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Do{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function k4(t,e,n,r,i,o,s,a){return new Do(t,e,n,r,i,o,s,a)}function Rd(t){return new Do(t)}function i1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bv(t){return t.collectionGroup!==null}function Ts(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new kt(bt.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Yl(o,r))}),n.has(bt.keyField().canonicalString())||e.ce.push(new Yl(bt.keyField(),r))}return e.ce}function ar(t){const e=fe(t);return e.le||(e.le=C4(e,Ts(t))),e.le}function C4(t,e){if(t.limitType==="F")return r1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Yl(i.field,o)});const n=t.endAt?new qs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qs(t.startAt.position,t.startAt.inclusive):null;return r1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qm(t,e){const n=t.filters.concat([e]);return new Do(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $f(t,e,n){return new Do(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nd(t,e){return zv(ar(t),ar(e))&&t.limitType===e.limitType}function gb(t){return`${$v(ar(t))}|lt:${t.limitType}`}function Yo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pb(i)).join(", ")}]`),Pd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Hs(i)).join(",")),`Target(${r})`}(ar(t))}; limitType=${t.limitType})`}function Od(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):re.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ts(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const c=t1(s,a,u);return s.inclusive?c<=0:c<0}(r.startAt,Ts(r),i)||r.endAt&&!function(s,a,u){const c=t1(s,a,u);return s.inclusive?c>=0:c>0}(r.endAt,Ts(r),i))}(t,e)}function P4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vb(t){return(e,n)=>{let r=!1;for(const i of Ts(t)){const o=x4(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function x4(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),c=a.data.field(o);return u!==null&&c!==null?Ws(u,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class ua{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oo(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return ab(this.inner)}size(){return this.innerSize}}/**
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
 */const R4=new Ye(re.comparator);function jr(){return R4}const yb=new Ye(re.comparator);function Qa(...t){let e=yb;for(const n of t)e=e.insert(n.key,n);return e}function _b(t){let e=yb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oo(){return dl()}function wb(){return dl()}function dl(){return new ua(t=>t.toString(),(t,e)=>t.isEqual(e))}const N4=new Ye(re.comparator),O4=new kt(re.comparator);function ge(...t){let e=O4;for(const n of t)e=e.add(n);return e}const D4=new kt(be);function M4(){return D4}/**
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
 */function Eb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jf(e)?"-0":e}}function Tb(t){return{integerValue:""+t}}function L4(t,e){return h4(e)?Tb(e):Eb(t,e)}/**
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
 */class Dd{constructor(){this._=void 0}}function V4(t,e,n){return t instanceof zf?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&xd(o)&&(o=jv(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Kl?Sb(t,e):t instanceof Ql?bb(t,e):function(i,o){const s=Ib(i,o),a=o1(s)+o1(i.Pe);return Gm(s)&&Gm(i.Pe)?Tb(a):Eb(i.serializer,a)}(t,e)}function F4(t,e,n){return t instanceof Kl?Sb(t,e):t instanceof Ql?bb(t,e):n}function Ib(t,e){return t instanceof Bf?function(r){return Gm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class zf extends Dd{}class Kl extends Dd{constructor(e){super(),this.elements=e}}function Sb(t,e){const n=Ab(e);for(const r of t.elements)n.some(i=>dr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ql extends Dd{constructor(e){super(),this.elements=e}}function bb(t,e){let n=Ab(e);for(const r of t.elements)n=n.filter(i=>!dr(i,r));return{arrayValue:{values:n}}}class Bf extends Dd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function o1(t){return tt(t.integerValue||t.doubleValue)}function Ab(t){return Uv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function j4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Kl&&i instanceof Kl||r instanceof Ql&&i instanceof Ql?Bs(r.elements,i.elements,dr):r instanceof Bf&&i instanceof Bf?dr(r.Pe,i.Pe):r instanceof zf&&i instanceof zf}(t.transform,e.transform)}class U4{constructor(e,n){this.version=e,this.transformResults=n}}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Md{}function kb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wv(t.key,Bn.none()):new mu(t.key,t.data,Bn.none());{const n=t.data,r=nn.empty();let i=new kt(bt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new $i(t.key,r,new mn(i.toArray()),Bn.none())}}function $4(t,e,n){t instanceof mu?function(i,o,s){const a=i.value.clone(),u=a1(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $i?function(i,o,s){if(!Yc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=a1(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(Cb(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function hl(t,e,n,r){return t instanceof mu?function(o,s,a,u){if(!Yc(o.precondition,s))return a;const c=o.value.clone(),f=l1(o.fieldTransforms,u,s);return c.setAll(f),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof $i?function(o,s,a,u){if(!Yc(o.precondition,s))return a;const c=l1(o.fieldTransforms,u,s),f=s.data;return f.setAll(Cb(o)),f.setAll(c),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(o,s,a){return Yc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function z4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=Ib(r.transform,i||null);o!=null&&(n===null&&(n=nn.empty()),n.set(r.field,o))}return n||null}function s1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bs(r,i,(o,s)=>j4(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mu extends Md{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $i extends Md{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function a1(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,F4(s,a,n[i]))}return r}function l1(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,V4(o,s,e))}return r}class Wv extends Md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class B4 extends Md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class W4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&$4(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wb();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=kb(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>s1(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>s1(n,r))}}class Hv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return N4}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Hv(e,n,r,i)}}/**
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
 */class H4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class q4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,_e;function G4(t){switch(t){default:return le();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function Pb(t){if(t===void 0)return Fr("GRPC error has no .code"),z.UNKNOWN;switch(t){case et.OK:return z.OK;case et.CANCELLED:return z.CANCELLED;case et.UNKNOWN:return z.UNKNOWN;case et.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case et.INTERNAL:return z.INTERNAL;case et.UNAVAILABLE:return z.UNAVAILABLE;case et.UNAUTHENTICATED:return z.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case et.NOT_FOUND:return z.NOT_FOUND;case et.ALREADY_EXISTS:return z.ALREADY_EXISTS;case et.PERMISSION_DENIED:return z.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case et.ABORTED:return z.ABORTED;case et.OUT_OF_RANGE:return z.OUT_OF_RANGE;case et.UNIMPLEMENTED:return z.UNIMPLEMENTED;case et.DATA_LOSS:return z.DATA_LOSS;default:return le()}}(_e=et||(et={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Y4(){return new TextEncoder}/**
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
 */const K4=new fo([4294967295,4294967295],0);function u1(t){const e=Y4().encode(t),n=new JS;return n.update(e),new Uint8Array(n.digest())}function c1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new fo([n,r],0),new fo([i,o],0)]}class qv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xa(`Invalid padding: ${n}`);if(r<0)throw new Xa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=fo.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(fo.fromNumber(r)));return i.compare(K4)===1&&(i=new fo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=u1(e),[r,i]=c1(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new qv(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=u1(e),[r,i]=c1(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ld{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ld(ue.min(),i,new Ye(be),jr(),ge())}}class gu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gu(r,n,ge(),ge(),ge())}}/**
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
 */class Kc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class xb{constructor(e,n){this.targetId=e,this.me=n}}class Rb{constructor(e,n,r=$t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class f1{constructor(){this.fe=0,this.ge=h1(),this.pe=$t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new gu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=h1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Q4{constructor(e){this.Le=e,this.Be=new Map,this.ke=jr(),this.qe=d1(),this.Qe=new Ye(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Km(o))if(r===0){const s=new re(o.path);this.Ue(n,s,Ft.newNoDocument(s,ue.min()))}else Me(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=So(r).toUint8Array()}catch(u){if(u instanceof lb)return zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new qv(s,i,o)}catch(u){return zs(u instanceof Xa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Km(a.target)){const u=new re(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Ft.newNoDocument(u,e))}o.be&&(n.set(s,o.Ce()),o.ve())}});let r=ge();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Ld(e,n,this.Qe,this.ke,r);return this.ke=jr(),this.qe=d1(),this.Qe=new Ye(be),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new f1,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new kt(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new f1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function d1(){return new Ye(re.comparator)}function h1(){return new Ye(re.comparator)}const X4={asc:"ASCENDING",desc:"DESCENDING"},J4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Z4={and:"AND",or:"OR"};class eL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xm(t,e){return t.useProto3Json||Pd(e)?e:{value:e}}function Wf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tL(t,e){return Wf(t,e.toTimestamp())}function lr(t){return Me(!!t),ue.fromTimestamp(function(n){const r=Di(n);return new ft(r.seconds,r.nanos)}(t))}function Gv(t,e){return Jm(t,e).canonicalString()}function Jm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ob(t){const e=Oe.fromString(t);return Me(Fb(e)),e}function Zm(t,e){return Gv(t.databaseId,e.path)}function sp(t,e){const n=Ob(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Mb(n))}function Db(t,e){return Gv(t.databaseId,e)}function nL(t){const e=Ob(t);return e.length===4?Oe.emptyPath():Mb(e)}function eg(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mb(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function p1(t,e,n){return{name:Zm(t,e),fields:n.value.mapValue.fields}}function rL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,f){return c.useProto3Json?(Me(f===void 0||typeof f=="string"),$t.fromBase64String(f||"")):(Me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(c){const f=c.code===void 0?z.UNKNOWN:Pb(c.code);return new Y(f,c.message||"")}(s);n=new Rb(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sp(t,r.document.name),o=lr(r.document.updateTime),s=r.document.createTime?lr(r.document.createTime):ue.min(),a=new nn({mapValue:{fields:r.document.fields}}),u=Ft.newFoundDocument(i,o,s,a),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Kc(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sp(t,r.document),o=r.readTime?lr(r.readTime):ue.min(),s=Ft.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Kc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sp(t,r.document),o=r.removedTargetIds||[];n=new Kc([],o,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new q4(i,o),a=r.targetId;n=new xb(a,s)}}return n}function iL(t,e){let n;if(e instanceof mu)n={update:p1(t,e.key,e.value)};else if(e instanceof Wv)n={delete:Zm(t,e.key)};else if(e instanceof $i)n={update:p1(t,e.key,e.data),updateMask:hL(e.fieldMask)};else{if(!(e instanceof B4))return le();n={verify:Zm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof zf)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Kl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ql)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bf)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:tL(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:le()}(t,e.precondition)),n}function oL(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?lr(i.updateTime):lr(o);return s.isEqual(ue.min())&&(s=lr(o)),new U4(s,i.transformResults||[])}(n,e))):[]}function sL(t,e){return{documents:[Db(t,e.path)]}}function aL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Db(t,i);const o=function(c){if(c.length!==0)return Vb(Hn.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(f=>function(p){return{field:Ko(p.field),direction:cL(p.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Xm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function lL(t){let e=nL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(h){const p=Lb(h);return p instanceof Hn&&db(p)?p.getFilters():[p]}(n.where));let s=[];n.orderBy&&(s=function(h){return h.map(p=>function(T){return new Yl(Qo(T.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Pd(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(h){const p=!!h.before,g=h.values||[];return new qs(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,g=h.values||[];return new qs(g,p)}(n.endAt)),k4(e,i,s,o,a,"F",u,c)}function uL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qo(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qo(n.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qo(n.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qo(n.unaryFilter.field);return it.create(s,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Qo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>Lb(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function cL(t){return X4[t]}function fL(t){return J4[t]}function dL(t){return Z4[t]}function Ko(t){return{fieldPath:t.canonicalString()}}function Qo(t){return bt.fromServerFormat(t.fieldPath)}function Vb(t){return t instanceof it?function(n){if(n.op==="=="){if(e1(n.value))return{unaryFilter:{field:Ko(n.field),op:"IS_NAN"}};if(Zw(n.value))return{unaryFilter:{field:Ko(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(e1(n.value))return{unaryFilter:{field:Ko(n.field),op:"IS_NOT_NAN"}};if(Zw(n.value))return{unaryFilter:{field:Ko(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ko(n.field),op:fL(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(i=>Vb(i));return r.length===1?r[0]:{compositeFilter:{op:dL(n.op),filters:r}}}(t):le()}function hL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class di{constructor(e,n,r,i,o=ue.min(),s=ue.min(),a=$t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pL{constructor(e){this.ct=e}}function mL(t){const e=lL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$f(e,e.limit,"L"):e}/**
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
 */class gL{constructor(){this._n=new vL}addToCollectionParentIndex(e,n){return this._n.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Oi.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Oi.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class vL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new kt(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new kt(Oe.comparator)).toArray()}}/**
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
 */class Gs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Gs(0)}static Ln(){return new Gs(-1)}}/**
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
 */class yL{constructor(){this.changes=new ua(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _L{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class wL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&hl(r.mutation,i,mn.empty(),ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=oo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Qa();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=oo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=jr();const s=dl(),a=function(){return dl()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof $i)?o=o.insert(c.key,c):f!==void 0?(s.set(c.key,f.mutation.getFieldMask()),hl(f.mutation,c,f.mutation.getFieldMask(),ft.now())):s.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,f)=>s.set(c,f)),n.forEach((c,f)=>{var h;return a.set(c,new _L(f,(h=s.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=dl();let i=new Ye((s,a)=>s-a),o=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||mn.empty();f=a.applyToLocalView(c,f),r.set(u,f);const h=(i.get(a.batchId)||ge()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,f=u.value,h=wb();f.forEach(p=>{if(!o.has(p)){const g=kb(n.get(p),r.get(p));g!==null&&h.set(p,g),o=o.add(p)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,h))}return W.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return re.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):W.resolve(oo());let a=-1,u=o;return s.next(c=>W.forEach(c,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),o.get(f)?W.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,ge())).next(f=>({batchId:a,changes:_b(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=Qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Qa();return this.indexManager.getCollectionParents(e,o).next(a=>W.forEach(a,u=>{const c=function(h,p){return new Do(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((h,p)=>{s=s.insert(h,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const f=c.getKey();s.get(f)===null&&(s=s.insert(f,Ft.newInvalidDocument(f)))});let a=Qa();return s.forEach((u,c)=>{const f=o.get(u);f!==void 0&&hl(f.mutation,c,mn.empty(),ft.now()),Od(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class EL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return W.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:lr(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:mL(i.bundledQuery),readTime:lr(i.readTime)}}(n)),W.resolve()}}/**
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
 */class TL{constructor(){this.overlays=new Ye(re.comparator),this.hr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oo();return W.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=oo(),o=n.length+1,s=new re(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Ye((c,f)=>c-f);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=o.get(c.largestBatchId);f===null&&(f=oo(),o=o.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=oo(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return W.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new H4(n,r));let o=this.hr.get(n);o===void 0&&(o=ge(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
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
 */class Yv{constructor(){this.Pr=new kt(mt.Ir),this.Tr=new kt(mt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new mt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new re(new Oe([])),r=new mt(n,e),i=new mt(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new re(new Oe([])),r=new mt(n,e),i=new mt(n,e+1);let o=ge();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new mt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return re.comparator(e.key,n.key)||be(e.pr,n.pr)}static Er(e,n){return be(e.pr,n.pr)||re.comparator(e.key,n.key)}}/**
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
 */class IL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new kt(mt.Ir)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new W4(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.wr=this.wr.add(new mt(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return W.resolve(s)}lookupMutationBatch(e,n){return W.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return W.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const a=this.Sr(s.pr);o.push(a)}),W.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(be);return n.forEach(i=>{const o=new mt(i,0),s=new mt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],a=>{r=r.add(a.pr)})}),W.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;re.isDocumentKey(o)||(o=o.child(""));const s=new mt(new re(o),0);let a=new kt(be);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},s),W.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return W.forEach(n.mutations,i=>{const o=new mt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new mt(n,0),i=this.wr.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class SL{constructor(e){this.vr=e,this.docs=function(){return new Ye(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():Ft.newInvalidDocument(n))}getEntries(e,n){let r=jr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ft.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=jr();const s=n.path,a=new re(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||u4(l4(f),r)<=0||(i.has(f.key)||Od(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return W.resolve(o)}getAllFromCollectionGroup(e,n,r,i){le()}Fr(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bL(this)}getSize(e){return W.resolve(this.size)}}class bL extends yL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class AL{constructor(e){this.persistence=e,this.Mr=new ua(n=>$v(n),zv),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yv,this.targetCount=0,this.Lr=Gs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),W.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.qn(n),W.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),W.waitFor(o).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),W.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Nr.containsKey(n))}}/**
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
 */class kL{constructor(e,n){this.Br={},this.overlays={},this.kr=new Fv(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new AL(this),this.indexManager=new gL,this.remoteDocumentCache=function(i){return new SL(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new pL(n),this.$r=new EL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new IL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new CL(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return W.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class CL extends f4{constructor(e){super(),this.currentSequenceNumber=e}}class Kv{constructor(e){this.persistence=e,this.zr=new Yv,this.jr=null}static Hr(e){return new Kv(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),W.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Jr,r=>{const i=re.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return W.or([()=>W.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Qv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ge(),i=ge();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Qv(e,n.fromCache,r,i)}}/**
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
 */class PL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xL{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return DD()?8:d4(Pt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new PL;return this.Ji(e,n,s).next(a=>{if(o.result=a,this.Ui)return this.Yi(e,n,s,a.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ua()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),W.resolve()):(Ua()<=ve.DEBUG&&Z("QueryEngine","Query:",Yo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ua()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(n))):W.resolve())}ji(e,n){if(i1(n))return W.resolve(null);let r=ar(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$f(n,null,"F"),r=ar(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ge(...o);return this.zi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,s,u.readTime)?this.ji(e,$f(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return i1(n)||i.isEqual(ue.min())?W.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?W.resolve(null):(Ua()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yo(n)),this.es(e,s,n,a4(i,-1)).next(a=>a))})}Zi(e,n){let r=new kt(vb(e));return n.forEach((i,o)=>{Od(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return Ua()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Yo(n)),this.zi.getDocumentsMatchingQuery(e,n,Oi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class RL{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ye(be),this.rs=new ua(o=>$v(o),zv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function NL(t,e,n,r){return new RL(t,e,n,r)}async function jb(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=ge();for(const c of i){s.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of o){a.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:s,addedBatchIds:a}))})})}function OL(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,f){const h=c.batch,p=h.keys();let g=W.resolve();return p.forEach(T=>{g=g.next(()=>f.getEntry(u,T)).next(C=>{const k=c.docVersions.get(T);Me(k!==null),C.version.compareTo(k)<0&&(h.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),f.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ub(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function DL(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((f,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(o,f.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(o,f.addedDocuments,h)));let g=p.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken($t.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),i=i.insert(h,g),function(C,k,_){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,g,f)&&a.push(n.Qr.updateTargetData(o,g))});let u=jr(),c=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(ML(o,s,e.documentUpdates).next(f=>{u=f.cs,c=f.ls})),!r.isEqual(ue.min())){const f=n.Qr.getLastRemoteSnapshotVersion(o).next(h=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return W.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,c)).next(()=>u)}).then(o=>(n.ns=i,o))}function ML(t,e,n){let r=ge(),i=ge();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=jr();return n.forEach((a,u)=>{const c=o.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:s,ls:i}})}function LL(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VL(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,W.resolve(i)):n.Qr.allocateTargetId(r).next(s=>(i=new di(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function tg(t,e,n){const r=fe(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!pu(s))throw s;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function m1(t,e,n){const r=fe(t);let i=ue.min(),o=ge();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,c,f){const h=fe(u),p=h.rs.get(f);return p!==void 0?W.resolve(h.ns.get(p)):h.Qr.getTargetData(c,f)}(r,s,ar(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(s,e,n?i:ue.min(),n?o:ge())).next(a=>(FL(r,P4(e),a),{documents:a,hs:o})))}function FL(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class g1{constructor(){this.activeTargetIds=M4()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jL{constructor(){this.no=new g1,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new g1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UL{io(e){}shutdown(){}}/**
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
 */class v1{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ic=null;function ap(){return Ic===null?Ic=function(){return 268435456+Math.round(2147483648*Math.random())}():Ic++,"0x"+Ic.toString(16)}/**
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
 */const $L={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Mt="WebChannelConnection";class BL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(n,r,i,o,s){const a=ap(),u=this.vo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,o,s),this.Mo(n,u,c,i).then(f=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw zs("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}xo(n,r,i,o,s,a){return this.Co(n,r,i,o,s)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+la}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}vo(n,r){const i=$L[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const o=ap();return new Promise((s,a)=>{const u=new ZS;u.setWithCredentials(!0),u.listenOnce(tb.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case qc.NO_ERROR:const f=u.getResponseJson();Z(Mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case qc.TIMEOUT:Z(Mt,`RPC '${e}' ${o} timed out`),a(new Y(z.DEADLINE_EXCEEDED,"Request time out"));break;case qc.HTTP_ERROR:const h=u.getStatus();if(Z(Mt,`RPC '${e}' ${o} failed with status:`,h,"response text:",u.getResponseText()),h>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const T=function(k){const _=k.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(_)>=0?_:z.UNKNOWN}(g.status);a(new Y(T,g.message))}else a(new Y(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Y(z.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Z(Mt,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);Z(Mt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ap(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ib(),a=rb(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new eb({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=o.join("");Z(Mt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const h=s.createWebChannel(f,u);let p=!1,g=!1;const T=new zL({lo:k=>{g?Z(Mt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(Z(Mt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),Z(Mt,`RPC '${e}' stream ${i} sending:`,k),h.send(k))},ho:()=>h.close()}),C=(k,_,v)=>{k.listen(_,I=>{try{v(I)}catch(O){setTimeout(()=>{throw O},0)}})};return C(h,Ka.EventType.OPEN,()=>{g||(Z(Mt,`RPC '${e}' stream ${i} transport opened.`),T.mo())}),C(h,Ka.EventType.CLOSE,()=>{g||(g=!0,Z(Mt,`RPC '${e}' stream ${i} transport closed`),T.po())}),C(h,Ka.EventType.ERROR,k=>{g||(g=!0,zs(Mt,`RPC '${e}' stream ${i} transport errored:`,k),T.po(new Y(z.UNAVAILABLE,"The operation could not be completed")))}),C(h,Ka.EventType.MESSAGE,k=>{var _;if(!g){const v=k.data[0];Me(!!v);const I=v,O=I.error||((_=I[0])===null||_===void 0?void 0:_.error);if(O){Z(Mt,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let U=function(A){const x=et[A];if(x!==void 0)return Pb(x)}(j),E=O.message;U===void 0&&(U=z.INTERNAL,E="Unknown error status: "+j+" with message "+O.message),g=!0,T.po(new Y(U,E)),h.close()}else Z(Mt,`RPC '${e}' stream ${i} received:`,v),T.yo(v)}}),C(a,nb.STAT_EVENT,k=>{k.stat===Hm.PROXY?Z(Mt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Hm.NOPROXY&&Z(Mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.fo()},0),T}}function lp(){return typeof document<"u"?document:null}/**
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
 */function Vd(t){return new eL(t,!0)}/**
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
 */class $b{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class zb{constructor(e,n,r,i,o,s,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new $b(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Fr(n.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Y(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WL extends zb{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=rL(this.serializer,e),r=function(o){if(!("targetChange"in o))return ue.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ue.min():s.readTime?lr(s.readTime):ue.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=eg(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=Km(u)?{documents:sL(o,u)}:{query:aL(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=Nb(o,s.resumeToken);const c=Xm(o,s.expectedCount);c!==null&&(a.expectedCount=c)}else if(s.snapshotVersion.compareTo(ue.min())>0){a.readTime=Wf(o,s.snapshotVersion.toTimestamp());const c=Xm(o,s.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=uL(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=eg(this.serializer),n.removeTarget=e,this.i_(n)}}class HL extends zb{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=oL(e.writeResults,e.commitTime),r=lr(e.commitTime);return this.listener.A_(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=eg(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iL(this.serializer,r))};this.i_(n)}}/**
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
 */class qL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Y(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,Jm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(z.UNKNOWN,o.toString())})}xo(e,n,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.xo(e,Jm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(z.UNKNOWN,s.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class GL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Fr(n),this.y_=!1):Z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class YL{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(s=>{r.enqueueAndForget(async()=>{Mo(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=fe(u);c.M_.add(4),await vu(c),c.N_.set("Unknown"),c.M_.delete(4),await Fd(c)}(this))})}),this.N_=new GL(r,i)}}async function Fd(t){if(Mo(t))for(const e of t.x_)await e(!0)}async function vu(t){for(const e of t.x_)await e(!1)}function Bb(t,e){const n=fe(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ey(n)?Zv(n):ca(n).Xo()&&Jv(n,e))}function Xv(t,e){const n=fe(t),r=ca(n);n.F_.delete(e),r.Xo()&&Wb(n,e),n.F_.size===0&&(r.Xo()?r.n_():Mo(n)&&n.N_.set("Unknown"))}function Jv(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ca(t).P_(e)}function Wb(t,e){t.L_.xe(e),ca(t).I_(e)}function Zv(t){t.L_=new Q4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ca(t).start(),t.N_.w_()}function ey(t){return Mo(t)&&!ca(t).Zo()&&t.F_.size>0}function Mo(t){return fe(t).M_.size===0}function Hb(t){t.L_=void 0}async function KL(t){t.N_.set("Online")}async function QL(t){t.F_.forEach((e,n)=>{Jv(t,e)})}async function XL(t,e){Hb(t),ey(t)?(t.N_.D_(e),Zv(t)):t.N_.set("Unknown")}async function JL(t,e,n){if(t.N_.set("Online"),e instanceof Rb&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hf(t,r)}else if(e instanceof Kc?t.L_.Ke(e):e instanceof xb?t.L_.He(e):t.L_.We(e),!n.isEqual(ue.min()))try{const r=await Ub(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.L_.rt(s);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=o.F_.get(c);f&&o.F_.set(c,f.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,c)=>{const f=o.F_.get(u);if(!f)return;o.F_.set(u,f.withResumeToken($t.EMPTY_BYTE_STRING,f.snapshotVersion)),Wb(o,u);const h=new di(f.target,u,c,f.sequenceNumber);Jv(o,h)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Hf(t,r)}}async function Hf(t,e,n){if(!pu(e))throw e;t.M_.add(1),await vu(t),t.N_.set("Offline"),n||(n=()=>Ub(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Fd(t)})}function qb(t,e){return e().catch(n=>Hf(t,n,e))}async function jd(t){const e=fe(t),n=Mi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;ZL(e);)try{const i=await LL(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,e5(e,i)}catch(i){await Hf(e,i)}Gb(e)&&Yb(e)}function ZL(t){return Mo(t)&&t.v_.length<10}function e5(t,e){t.v_.push(e);const n=Mi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Gb(t){return Mo(t)&&!Mi(t).Zo()&&t.v_.length>0}function Yb(t){Mi(t).start()}async function t5(t){Mi(t).V_()}async function n5(t){const e=Mi(t);for(const n of t.v_)e.d_(n.mutations)}async function r5(t,e,n){const r=t.v_.shift(),i=Hv.from(r,e,n);await qb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jd(t)}async function i5(t,e){e&&Mi(t).E_&&await async function(r,i){if(function(s){return G4(s)&&s!==z.ABORTED}(i.code)){const o=r.v_.shift();Mi(r).t_(),await qb(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await jd(r)}}(t,e),Gb(t)&&Yb(t)}async function y1(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Mo(n);n.M_.add(3),await vu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Fd(n)}async function o5(t,e){const n=fe(t);e?(n.M_.delete(2),await Fd(n)):e||(n.M_.add(2),await vu(n),n.N_.set("Unknown"))}function ca(t){return t.B_||(t.B_=function(n,r,i){const o=fe(n);return o.f_(),new WL(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:KL.bind(null,t),To:QL.bind(null,t),Ao:XL.bind(null,t),h_:JL.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),ey(t)?Zv(t):t.N_.set("Unknown")):(await t.B_.stop(),Hb(t))})),t.B_}function Mi(t){return t.k_||(t.k_=function(n,r,i){const o=fe(n);return o.f_(),new HL(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:t5.bind(null,t),Ao:i5.bind(null,t),R_:n5.bind(null,t),A_:r5.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await jd(t)):(await t.k_.stop(),t.v_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class ty{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new ty(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ny(t,e){if(Fr("AsyncQueue",`${e}: ${t}`),pu(t))return new Y(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Qa(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new Is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class _1{constructor(){this.q_=new Ye(re.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):le():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,i,o,s,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Ys(e,n,Is.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class s5{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class a5{constructor(){this.queries=new ua(e=>gb(e),Nd),this.onlineState="Unknown",this.z_=new Set}}async function Kb(t,e){const n=fe(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new s5,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await n.onListen(i,!0);break;case 1:o.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=ny(s,`Initialization of query '${Yo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.U_.push(e),e.j_(n.onlineState),o.K_&&e.H_(o.K_)&&ry(n)}async function Qb(t,e){const n=fe(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.U_.indexOf(e);s>=0&&(o.U_.splice(s,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function l5(t,e){const n=fe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.U_)a.H_(i)&&(r=!0);s.K_=i}}r&&ry(n)}function u5(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const o of i.U_)o.onError(n);r.queries.delete(e)}function ry(t){t.z_.forEach(e=>{e.next()})}var ng,w1;(w1=ng||(ng={})).J_="default",w1.Cache="cache";class Xb{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ng.Cache}}/**
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
 */class Jb{constructor(e){this.key=e}}class Zb{constructor(e){this.key=e}}class c5{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=vb(e),this.Ta=new Is(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new _1,i=n?n.Ta:this.Ta;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,h)=>{const p=i.get(f),g=Od(this.query,h)?h:null,T=!!p&&this.mutatedKeys.has(p.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?T!==C&&(r.track({type:3,doc:g}),k=!0):this.Ra(p,g)||(r.track({type:2,doc:g}),k=!0,(u&&this.Ia(g,u)>0||c&&this.Ia(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),k=!0):p&&!g&&(r.track({type:1,doc:p}),k=!0,(u||c)&&(a=!0)),k&&(g?(s=s.add(g),o=C?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ta:s,Aa:r,Xi:a,mutatedKeys:o}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const s=e.Aa.Q_();s.sort((f,h)=>function(g,T){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return C(g)-C(T)}(f.type,h.type)||this.Ia(f.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,s.length!==0||c?{snapshot:new Ys(this.query,e.Ta,o,s,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new _1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Zb(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Jb(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ys.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class f5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class d5{constructor(e){this.key=e,this.wa=!1}}class h5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new ua(a=>gb(a),Nd),this.Da=new Map,this.Ca=new Set,this.va=new Ye(re.comparator),this.Fa=new Map,this.Ma=new Yv,this.xa={},this.Oa=new Map,this.Na=Gs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function p5(t,e,n=!0){const r=oA(t);let i;const o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await eA(r,e,n,!0),i}async function m5(t,e){const n=oA(t);await eA(n,e,!0,!1)}async function eA(t,e,n,r){const i=await VL(t.localStore,ar(e)),o=i.targetId,s=n?t.sharedClientState.addLocalQueryTarget(o):"not-current";let a;return r&&(a=await g5(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&Bb(t.remoteStore,i),a}async function g5(t,e,n,r,i){t.Ba=(h,p,g)=>async function(C,k,_,v){let I=k.view.da(_);I.Xi&&(I=await m1(C.localStore,k.query,!1).then(({documents:E})=>k.view.da(E,I)));const O=v&&v.targetChanges.get(k.targetId),j=v&&v.targetMismatches.get(k.targetId)!=null,U=k.view.applyChanges(I,C.isPrimaryClient,O,j);return T1(C,k.targetId,U.fa),U.snapshot}(t,h,p,g);const o=await m1(t.localStore,e,!0),s=new c5(e,o.hs),a=s.da(o.documents),u=gu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(a,t.isPrimaryClient,u);T1(t,n,c.fa);const f=new f5(e,n,s);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function v5(t,e,n){const r=fe(t),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(s=>!Nd(s,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xv(r.remoteStore,i.targetId),rg(r,i.targetId)}).catch(hu)):(rg(r,i.targetId),await tg(r.localStore,i.targetId,!0))}async function y5(t,e){const n=fe(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xv(n.remoteStore,r.targetId))}async function _5(t,e,n){const r=A5(t);try{const i=await function(s,a){const u=fe(s),c=ft.now(),f=a.reduce((g,T)=>g.add(T.key),ge());let h,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=jr(),C=ge();return u.os.getEntries(g,f).next(k=>{T=k,T.forEach((_,v)=>{v.isValidDocument()||(C=C.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,T)).next(k=>{h=k;const _=[];for(const v of a){const I=z4(v,h.get(v.key).overlayedDocument);I!=null&&_.push(new $i(v.key,I,ub(I.value.mapValue),Bn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,_,a)}).next(k=>{p=k;const _=k.applyToLocalDocumentSet(h,C);return u.documentOverlayCache.saveOverlays(g,k.batchId,_)})}).then(()=>({batchId:p.batchId,changes:_b(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let c=s.xa[s.currentUser.toKey()];c||(c=new Ye(be)),c=c.insert(a,u),s.xa[s.currentUser.toKey()]=c}(r,i.batchId,n),await yu(r,i.changes),await jd(r.remoteStore)}catch(i){const o=ny(i,"Failed to persist write");n.reject(o)}}async function tA(t,e){const n=fe(t);try{const r=await DL(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Fa.get(o);s&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.wa=!0:i.modifiedDocuments.size>0?Me(s.wa):i.removedDocuments.size>0&&(Me(s.wa),s.wa=!1))}),await yu(n,r,e)}catch(r){await hu(r)}}function E1(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((o,s)=>{const a=s.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=fe(s);u.onlineState=a;let c=!1;u.queries.forEach((f,h)=>{for(const p of h.U_)p.j_(a)&&(c=!0)}),c&&ry(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function w5(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),o=i&&i.key;if(o){let s=new Ye(re.comparator);s=s.insert(o,Ft.newNoDocument(o,ue.min()));const a=ge().add(o),u=new Ld(ue.min(),new Map,new Ye(be),s,a);await tA(r,u),r.va=r.va.remove(o),r.Fa.delete(e),iy(r)}else await tg(r.localStore,e,!1).then(()=>rg(r,e,n)).catch(hu)}async function E5(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await OL(n.localStore,e);rA(n,r,null),nA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yu(n,i)}catch(i){await hu(i)}}async function T5(t,e,n){const r=fe(t);try{const i=await function(s,a){const u=fe(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(Me(h!==null),f=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);rA(r,e,n),nA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yu(r,i)}catch(i){await hu(i)}}function nA(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function rA(t,e,n){const r=fe(t);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function rg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||iA(t,r)})}function iA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Xv(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),iy(t))}function T1(t,e,n){for(const r of n)r instanceof Jb?(t.Ma.addReference(r.key,e),I5(t,r)):r instanceof Zb?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||iA(t,r.key)):le()}function I5(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),iy(t))}function iy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new re(Oe.fromString(e)),r=t.Na.next();t.Fa.set(r,new d5(n)),t.va=t.va.insert(n,r),Bb(t.remoteStore,new di(ar(Rd(n.path)),r,"TargetPurposeLimboResolution",Fv.oe))}}async function yu(t,e,n){const r=fe(t),i=[],o=[],s=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{s.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const f=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Qv.Ki(u.targetId,c);o.push(f)}}))}),await Promise.all(s),r.Sa.h_(i),await async function(u,c){const f=fe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>W.forEach(c,p=>W.forEach(p.qi,g=>f.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>W.forEach(p.Qi,g=>f.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!pu(h))throw h;Z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const g=f.ns.get(p),T=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(T);f.ns=f.ns.insert(p,C)}}}(r.localStore,o))}async function S5(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await jb(n.localStore,e);n.currentUser=e,function(o,s){o.Oa.forEach(a=>{a.forEach(u=>{u.reject(new Y(z.CANCELLED,s))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yu(n,r.us)}}function b5(t,e){const n=fe(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const o=n.Da.get(e);if(!o)return i;for(const s of o){const a=n.ba.get(s);i=i.unionWith(a.view.Ea)}return i}}function oA(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w5.bind(null,e),e.Sa.h_=l5.bind(null,e.eventManager),e.Sa.ka=u5.bind(null,e.eventManager),e}function A5(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T5.bind(null,e),e}class I1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return NL(this.persistence,new xL,e.initialUser,this.serializer)}createPersistence(e){return new kL(Kv.Hr,this.serializer)}createSharedClientState(e){return new jL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class k5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>E1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=S5.bind(null,this.syncEngine),await o5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a5}()}createDatastore(e){const n=Vd(e.databaseInfo.databaseId),r=function(o){return new BL(o)}(e.databaseInfo);return function(o,s,a,u){return new qL(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new YL(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>E1(this.syncEngine,n,0),function(){return v1.D()?new v1:new UL}())}createSyncEngine(e,n){return function(i,o,s,a,u,c,f){const h=new h5(i,o,s,a,u,c);return f&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=fe(r);Z("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await vu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class sA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class C5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=sb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ny(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function up(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x5(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>y1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>y1(e.remoteStore,i)),t._onlineComponents=e}function P5(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function x5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await up(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!P5(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await up(t,new I1)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await up(t,new I1);return t._offlineComponents}async function aA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await S1(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await S1(t,new k5))),t._onlineComponents}function R5(t){return aA(t).then(e=>e.syncEngine)}async function ig(t){const e=await aA(t),n=e.eventManager;return n.onListen=p5.bind(null,e.syncEngine),n.onUnlisten=v5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=m5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=y5.bind(null,e.syncEngine),n}function N5(t,e,n={}){const r=new bi;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,c){const f=new sA({next:p=>{s.enqueueAndForget(()=>Qb(o,h));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new Y(z.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?c.reject(new Y(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new Xb(Rd(a.path),f,{includeMetadataChanges:!0,ra:!0});return Kb(o,h)}(await ig(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function lA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const b1=new Map;/**
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
 */function uA(t,e,n){if(!n)throw new Y(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function O5(t,e,n,r){if(e===!0&&r===!0)throw new Y(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A1(t){if(!re.isDocumentKey(t))throw new Y(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k1(t){if(re.isDocumentKey(t))throw new Y(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new Y(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class C1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y(z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y(z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y(z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $d{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JM;switch(r.type){case"firstParty":return new n4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b1.get(n);r&&(Z("ComponentProvider","Removing Datastore"),b1.delete(n),r.terminate())}(this),Promise.resolve()}}function D5(t,e,n,r={}){var i;const o=(t=ur(t,$d))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Lt.MOCK_USER;else{a=CD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Lt(c)}t._authCredentials=new ZM(new ob(a,u))}}/**
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
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Ai extends Hr{constructor(e,n,r){super(e,n,Rd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new re(e))}withConverter(e){return new Ai(this.firestore,e,this._path)}}function qf(t,e,...n){if(t=ot(t),uA("collection","path",e),t instanceof $d){const r=Oe.fromString(e,...n);return k1(r),new Ai(t,null,r)}{if(!(t instanceof qt||t instanceof Ai))throw new Y(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return k1(r),new Ai(t.firestore,null,r)}}function zd(t,e,...n){if(t=ot(t),arguments.length===1&&(e=sb.newId()),uA("doc","path",e),t instanceof $d){const r=Oe.fromString(e,...n);return A1(r),new qt(t,null,new re(r))}{if(!(t instanceof qt||t instanceof Ai))throw new Y(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return A1(r),new qt(t.firestore,t instanceof Ai?t.converter:null,new re(r))}}/**
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
 */class M5{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new $b(this,"async_queue_retry"),this.hu=()=>{const n=lp();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=lp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=lp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new bi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!pu(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=ty.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&le()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function P1(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Ao extends $d{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new M5}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cA(this),this._firestoreClient.terminate()}}function L5(t,e){const n=KS(),r="(default)",i=Lv(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=AD("firestore");o&&D5(i,...o)}return i}function oy(t){return t._firestoreClient||cA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cA(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,c,f){return new m4(a,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,lA(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new C5(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks($t.fromBase64String(e))}catch(n){throw new Y(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sy{constructor(e){this._methodName=e}}/**
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
 */class ay{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const V5=/^__.*__$/;class F5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,n,this.fieldTransforms):new mu(e,this.data,n,this.fieldTransforms)}}class fA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $i(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class ly{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ly(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Gf(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(dA(this.fu)&&V5.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class j5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vd(e)}Fu(e,n,r,i=!1){return new ly({fu:e,methodName:n,vu:r,path:bt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wd(t){const e=t._freezeSettings(),n=Vd(t._databaseId);return new j5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function U5(t,e,n,r,i,o={}){const s=t.Fu(o.merge||o.mergeFields?2:0,e,n,i);uy("Data must be an object, but it was:",s,r);const a=pA(r,s);let u,c;if(o.merge)u=new mn(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const h of o.mergeFields){const p=og(e,h,n);if(!s.contains(p))throw new Y(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);gA(f,p)||f.push(p)}u=new mn(f),c=s.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=s.fieldTransforms;return new F5(new nn(a),u,c)}class Hd extends sy{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hd}}function $5(t,e,n,r){const i=t.Fu(1,e,n);uy("Data must be an object, but it was:",i,r);const o=[],s=nn.empty();Oo(r,(u,c)=>{const f=cy(e,u,n);c=ot(c);const h=i.Su(f);if(c instanceof Hd)o.push(f);else{const p=_u(c,h);p!=null&&(o.push(f),s.set(f,p))}});const a=new mn(o);return new fA(s,a,i.fieldTransforms)}function z5(t,e,n,r,i,o){const s=t.Fu(1,e,n),a=[og(e,r,n)],u=[i];if(o.length%2!=0)throw new Y(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<o.length;p+=2)a.push(og(e,o[p])),u.push(o[p+1]);const c=[],f=nn.empty();for(let p=a.length-1;p>=0;--p)if(!gA(c,a[p])){const g=a[p];let T=u[p];T=ot(T);const C=s.Su(g);if(T instanceof Hd)c.push(g);else{const k=_u(T,C);k!=null&&(c.push(g),f.set(g,k))}}const h=new mn(c);return new fA(f,h,s.fieldTransforms)}function hA(t,e,n,r=!1){return _u(n,t.Fu(r?4:3,e))}function _u(t,e){if(mA(t=ot(t)))return uy("Unsupported field value:",e,t),pA(t,e);if(t instanceof sy)return function(r,i){if(!dA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=_u(a,i.bu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return L4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ft.fromDate(r);return{timestampValue:Wf(i.serializer,o)}}if(r instanceof ft){const o=new ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wf(i.serializer,o)}}if(r instanceof ay)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:Nb(i.serializer,r._byteString)};if(r instanceof qt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Du(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Gv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ud(r)}`)}(t,e)}function pA(t,e){const n={};return ab(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oo(t,(r,i)=>{const o=_u(i,e.pu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function mA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof ay||t instanceof Ks||t instanceof qt||t instanceof sy)}function uy(t,e,n){if(!mA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ud(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function og(t,e,n){if((e=ot(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return cy(t,e);throw Gf("Field path arguments must be of type string or ",t,!1,void 0,n)}const B5=new RegExp("[~\\*/\\[\\]]");function cy(t,e,n){if(e.search(B5)>=0)throw Gf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bd(...e.split("."))._internalPath}catch{throw Gf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gf(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Y(z.INVALID_ARGUMENT,a+t+u)}function gA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class fy{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class W5 extends fy{data(){return super.data()}}function qd(t,e){return typeof e=="string"?cy(t,e):e instanceof Bd?e._internalPath:e._delegate._internalPath}/**
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
 */function H5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dy{}class Gd extends dy{}function sg(t,e,...n){let r=[];e instanceof dy&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof hy).length,a=o.filter(u=>u instanceof Yd).length;if(s>1||s>0&&a>0)throw new Y(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yd extends Gd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yd(e,n,r)}_apply(e){const n=this._parse(e);return vA(e._query,n),new Hr(e.firestore,e.converter,Qm(e._query,n))}_parse(e){const n=Wd(e.firestore);return function(o,s,a,u,c,f,h){let p;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){N1(h,f);const g=[];for(const T of h)g.push(R1(u,o,T));p={arrayValue:{values:g}}}else p=R1(u,o,h)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||N1(h,f),p=hA(a,s,h,f==="in"||f==="not-in");return it.create(c,f,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function pl(t,e,n){const r=e,i=qd("where",t);return Yd._create(i,r,n)}class hy extends dy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)vA(s,u),s=Qm(s,u)}(e._query,n),new Hr(e.firestore,e.converter,Qm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class py extends Gd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new py(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Y(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yl(o,s)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new Do(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ag(t,e="asc"){const n=e,r=qd("orderBy",t);return py._create(r,n)}class my extends Gd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new my(e,n,r)}_apply(e){return new Hr(e.firestore,e.converter,$f(e._query,this._limit,this._limitType))}}function x1(t){return my._create("limit",t,"F")}class gy extends Gd{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new gy(e,n,r)}_apply(e){const n=G5(e,this.type,this._docOrFields,this._inclusive);return new Hr(e.firestore,e.converter,function(i,o){return new Do(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,o,i.endAt)}(e._query,n))}}function q5(...t){return gy._create("startAfter",t,!1)}function G5(t,e,n,r){if(n[0]=ot(n[0]),n[0]instanceof fy)return function(o,s,a,u,c){if(!u)throw new Y(z.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const f=[];for(const h of Ts(o))if(h.field.isKeyField())f.push(Uf(s,u.key));else{const p=u.data.field(h.field);if(xd(p))throw new Y(z.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const g=h.field.canonicalString();throw new Y(z.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}f.push(p)}return new qs(f,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Wd(t.firestore);return function(s,a,u,c,f,h){const p=s.explicitOrderBy;if(f.length>p.length)throw new Y(z.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let T=0;T<f.length;T++){const C=f[T];if(p[T].field.isKeyField()){if(typeof C!="string")throw new Y(z.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!Bv(s)&&C.indexOf("/")!==-1)throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const k=s.path.child(Oe.fromString(C));if(!re.isDocumentKey(k))throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const _=new re(k);g.push(Uf(a,_))}else{const k=hA(u,c,C);g.push(k)}}return new qs(g,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function R1(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new Y(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bv(e)&&n.indexOf("/")!==-1)throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!re.isDocumentKey(r))throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Uf(t,new re(r))}if(n instanceof qt)return Uf(t,n._key);throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ud(n)}.`)}function N1(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vA(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Y5{convertValue(e,n="none"){switch(bo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(So(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Oo(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new ay(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=Di(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Me(Fb(r));const i=new ql(r.get(1),r.get(3)),o=new re(r.popFirst(5));return i.isEqual(n)||Fr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function K5(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ja{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yA extends fy{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Qc extends yA{data(e={}){return super.data(e)}}class Q5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ja(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qc(this._firestore,this._userDataWriter,r.key,r,new Ja(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new Qc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ja(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new Qc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ja(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:X5(a.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function X5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function J5(t){t=ur(t,qt);const e=ur(t.firestore,Ao);return N5(oy(e),t._key).then(n=>wA(e,t,n))}class _A extends Y5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function Z5(t,e,n,...r){t=ur(t,qt);const i=ur(t.firestore,Ao),o=Wd(i);let s;return s=typeof(e=ot(e))=="string"||e instanceof Bd?z5(o,"updateDoc",t._key,e,n,r):$5(o,"updateDoc",t._key,e),vy(i,[s.toMutation(t._key,Bn.exists(!0))])}function e3(t){return vy(ur(t.firestore,Ao),[new Wv(t._key,Bn.none())])}function t3(t,e){const n=ur(t.firestore,Ao),r=zd(t),i=K5(t.converter,e);return vy(n,[U5(Wd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Bn.exists(!1))]).then(()=>r)}function lg(t,...e){var n,r,i;t=ot(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||P1(e[s])||(o=e[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(P1(e[s])){const h=e[s];e[s]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[s+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[s+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,f;if(t instanceof qt)c=ur(t.firestore,Ao),f=Rd(t._key.path),u={next:h=>{e[s]&&e[s](wA(c,t,h))},error:e[s+1],complete:e[s+2]};else{const h=ur(t,Hr);c=ur(h.firestore,Ao),f=h._query;const p=new _A(c);u={next:g=>{e[s]&&e[s](new Q5(c,p,h,g))},error:e[s+1],complete:e[s+2]},H5(t._query)}return function(p,g,T,C){const k=new sA(C),_=new Xb(g,k,T);return p.asyncQueue.enqueueAndForget(async()=>Kb(await ig(p),_)),()=>{k.$a(),p.asyncQueue.enqueueAndForget(async()=>Qb(await ig(p),_))}}(oy(c),f,a,u)}function vy(t,e){return function(r,i){const o=new bi;return r.asyncQueue.enqueueAndForget(async()=>_5(await R5(r),i,o)),o.promise}(oy(t),e)}function wA(t,e,n){const r=n.docs.get(e._key),i=new _A(t);return new yA(t,i,e._key,r,new Ja(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){la=i})(aa),$s(new Eo("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new Ao(new e4(r.getProvider("auth-internal")),new i4(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(c.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Si(Kw,"4.6.3",e),Si(Kw,"4.6.3","esm2017")})();function EA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n3=EA,TA=new fu("auth","Firebase",EA());/**
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
 */const Yf=new Dv("@firebase/auth");function r3(t,...e){Yf.logLevel<=ve.WARN&&Yf.warn(`Auth (${aa}): ${t}`,...e)}function Xc(t,...e){Yf.logLevel<=ve.ERROR&&Yf.error(`Auth (${aa}): ${t}`,...e)}/**
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
 */function qn(t,...e){throw yy(t,...e)}function cr(t,...e){return yy(t,...e)}function IA(t,e,n){const r=Object.assign(Object.assign({},n3()),{[e]:n});return new fu("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return IA(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TA.create(t,...e)}function ae(t,e,...n){if(!t)throw yy(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xc(e),new Error(e)}function Ur(t,e){t||Sr(e)}/**
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
 */function ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function i3(){return O1()==="http:"||O1()==="https:"}function O1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function o3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i3()||RD()||"connection"in navigator)?navigator.onLine:!0}function s3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ur(n>e,"Short delay should be less than long delay!"),this.isMobile=PD()||ND()}get(){return o3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _y(t,e){Ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class SA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const a3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const l3=new wu(3e4,6e4);function zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bi(t,e,n,r,i={}){return bA(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=du(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),SA.fetch()(AA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},o))})}async function bA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},a3),e);try{const i=new c3(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Sc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Sc(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Sc(t,"user-disabled",s);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw IA(t,f,c);qn(t,f)}}catch(i){if(i instanceof Wr)throw i;qn(t,"network-request-failed",{message:String(i)})}}async function Eu(t,e,n,r,i={}){const o=await Bi(t,e,n,r,i);return"mfaPendingCredential"in o&&qn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function AA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_y(t.config,i):`${t.config.apiScheme}://${i}`}function u3(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class c3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cr(this.auth,"network-request-failed")),l3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cr(t,e,r);return i.customData._tokenResponse=n,i}function D1(t){return t!==void 0&&t.enterprise!==void 0}class f3{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return u3(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function d3(t,e){return Bi(t,"GET","/v2/recaptchaConfig",zi(t,e))}/**
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
 */async function h3(t,e){return Bi(t,"POST","/v1/accounts:delete",e)}async function kA(t,e){return Bi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ml(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p3(t,e=!1){const n=ot(t),r=await n.getIdToken(e),i=wy(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ml(cp(i.auth_time)),issuedAtTime:ml(cp(i.iat)),expirationTime:ml(cp(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function cp(t){return Number(t)*1e3}function wy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xc("JWT malformed, contained fewer than 3 sections"),null;try{const i=zS(n);return i?JSON.parse(i):(Xc("Failed to decode base64 JWT payload"),null)}catch(i){return Xc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function M1(t){const e=wy(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wr&&m3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class g3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ml(this.lastLoginAt),this.creationTime=ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kf(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xl(t,kA(n,{idToken:r}));ae(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?CA(o.providerUserInfo):[],a=y3(t.providerData,s),u=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new cg(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function v3(t){const e=ot(t);await Kf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CA(t){return t.map(e=>{var{providerId:n}=e,r=uv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _3(t,e){const n=await bA(t,{},async()=>{const r=du({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=AA(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",SA.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function w3(t,e){return Bi(t,"POST","/v2/accounts:revokeToken",zi(t,e))}/**
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
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=M1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await _3(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ss;return r&&(ae(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ae(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function Jr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class br{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=uv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new cg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Xl(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return p3(this,e)}reload(){return v3(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Xl(this,h3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,c,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,T=(s=n.photoURL)!==null&&s!==void 0?s:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:O,isAnonymous:j,providerData:U,stsTokenManager:E}=n;ae(I&&E,e,"internal-error");const w=Ss.fromJSON(this.name,E);ae(typeof I=="string",e,"internal-error"),Jr(h,e.name),Jr(p,e.name),ae(typeof O=="boolean",e,"internal-error"),ae(typeof j=="boolean",e,"internal-error"),Jr(g,e.name),Jr(T,e.name),Jr(C,e.name),Jr(k,e.name),Jr(_,e.name),Jr(v,e.name);const A=new br({uid:I,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:j,photoURL:T,phoneNumber:g,tenantId:C,stsTokenManager:w,createdAt:_,lastLoginAt:v});return U&&Array.isArray(U)&&(A.providerData=U.map(x=>Object.assign({},x))),k&&(A._redirectEventId=k),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ss;i.updateFromServerResponse(n);const o=new br({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kf(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ae(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?CA(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ss;a.updateFromIdToken(r);const u=new br({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new cg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,c),u}}/**
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
 */const L1=new Map;function Ar(t){Ur(t instanceof Function,"Expected a class definition");let e=L1.get(t);return e?(Ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,L1.set(t,e),e)}/**
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
 */class PA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PA.type="NONE";const V1=PA;/**
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
 */function Jc(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Jc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Jc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(Ar(V1),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||Ar(V1);const s=Jc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(s);if(f){const h=br._fromJSON(e,f);c!==o&&(a=h),o=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new bs(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new bs(o,e,r))}}/**
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
 */function F1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DA(e))return"Blackberry";if(MA(e))return"Webos";if(Ey(e))return"Safari";if((e.includes("chrome/")||RA(e))&&!e.includes("edge/"))return"Chrome";if(OA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xA(t=Pt()){return/firefox\//i.test(t)}function Ey(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RA(t=Pt()){return/crios\//i.test(t)}function NA(t=Pt()){return/iemobile/i.test(t)}function OA(t=Pt()){return/android/i.test(t)}function DA(t=Pt()){return/blackberry/i.test(t)}function MA(t=Pt()){return/webos/i.test(t)}function Kd(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function E3(t=Pt()){var e;return Kd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T3(){return OD()&&document.documentMode===10}function LA(t=Pt()){return Kd(t)||OA(t)||MA(t)||DA(t)||/windows phone/i.test(t)||NA(t)}function I3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function VA(t,e=[]){let n;switch(t){case"Browser":n=F1(Pt());break;case"Worker":n=`${F1(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${aa}/${r}`}/**
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
 */class S3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function b3(t,e={}){return Bi(t,"GET","/v2/passwordPolicy",zi(t,e))}/**
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
 */const A3=6;class k3{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:A3,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class C3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j1(this),this.idTokenSubscription=new j1(this),this.beforeStateQueue=new S3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kA(this,{idToken:e}),r=await br._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(Cr(this));const n=e?ot(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b3(this),n=new k3(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await w3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&r3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lo(t){return ot(t)}class j1{constructor(e){this.auth=e,this.observer=null,this.addObserver=$D(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P3(t){Qd=t}function FA(t){return Qd.loadJS(t)}function x3(){return Qd.recaptchaEnterpriseScript}function R3(){return Qd.gapiScript}function N3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const O3="recaptcha-enterprise",D3="NO_RECAPTCHA";class M3{constructor(e){this.type=O3,this.auth=Lo(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{d3(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new f3(u);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;D1(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(c=>{s(c)}).catch(()=>{s(D3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&D1(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=x3();u.length!==0&&(u+=a),FA(u).then(()=>{i(a,o,s)}).catch(c=>{s(c)})}}).catch(a=>{s(a)})})}}async function U1(t,e,n,r=!1){const i=new M3(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function fg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await U1(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await U1(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function L3(t,e){const n=Lv(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vf(o,e??{}))return i;qn(i,"already-initialized")}return n.initialize({options:e})}function V3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function F3(t,e,n){const r=Lo(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=jA(e),{host:s,port:a}=j3(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),U3()}function jA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function j3(t){const e=jA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:$1(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:$1(s)}}}function $1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function U3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ty{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function $3(t,e){return Bi(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function z3(t,e){return Eu(t,"POST","/v1/accounts:signInWithPassword",zi(t,e))}/**
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
 */async function B3(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}async function W3(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}/**
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
 */class Jl extends Ty{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fg(e,n,"signInWithPassword",z3);case"emailLink":return B3(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fg(e,r,"signUpPassword",$3);case"emailLink":return W3(e,{idToken:n,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function As(t,e){return Eu(t,"POST","/v1/accounts:signInWithIdp",zi(t,e))}/**
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
 */const H3="http://localhost";class ko extends Ty{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ko(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=uv(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ko(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:H3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=du(n)}return e}}/**
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
 */function q3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G3(t){const e=Ga(Ya(t)).link,n=e?Ga(Ya(e)).deep_link_id:null,r=Ga(Ya(t)).deep_link_id;return(r?Ga(Ya(r)).link:null)||r||n||e||t}class Iy{constructor(e){var n,r,i,o,s,a;const u=Ga(Ya(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,h=q3((i=u.mode)!==null&&i!==void 0?i:null);ae(c&&f&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=f,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=G3(e);try{return new Iy(n)}catch{return null}}}/**
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
 */class fa{constructor(){this.providerId=fa.PROVIDER_ID}static credential(e,n){return Jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Iy.parseLink(n);return ae(r,"argument-error"),Jl._fromEmailAndCode(e,r.code,r.tenantId)}}fa.PROVIDER_ID="password";fa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class UA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tu extends UA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends Tu{constructor(){super("facebook.com")}static credential(e){return ko._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class si extends Tu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ko._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return si.credential(n,r)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
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
 */class ai extends Tu{constructor(){super("github.com")}static credential(e){return ko._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
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
 */class li extends Tu{constructor(){super("twitter.com")}static credential(e,n){return ko._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return li.credential(n,r)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
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
 */async function Y3(t,e){return Eu(t,"POST","/v1/accounts:signUp",zi(t,e))}/**
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
 */class Co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await br._fromIdTokenResponse(e,r,i),s=z1(r);return new Co({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=z1(r);return new Co({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function z1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qf extends Wr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qf.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qf(e,n,r,i)}}function $A(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Qf._fromErrorAndOperation(t,o,e,r):o})}async function K3(t,e,n=!1){const r=await Xl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Co._forOperation(t,"link",r)}/**
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
 */async function Q3(t,e,n=!1){const{auth:r}=t;if(rr(r.app))return Promise.reject(Cr(r));const i="reauthenticate";try{const o=await Xl(t,$A(r,i,e,t),n);ae(o.idToken,r,"internal-error");const s=wy(o.idToken);ae(s,r,"internal-error");const{sub:a}=s;return ae(t.uid===a,r,"user-mismatch"),Co._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),o}}/**
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
 */async function zA(t,e,n=!1){if(rr(t.app))return Promise.reject(Cr(t));const r="signIn",i=await $A(t,r,e),o=await Co._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function X3(t,e){return zA(Lo(t),e)}/**
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
 */async function BA(t){const e=Lo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function J3(t,e,n){if(rr(t.app))return Promise.reject(Cr(t));const r=Lo(t),s=await fg(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Y3).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&BA(t),u}),a=await Co._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function Z3(t,e,n){return rr(t.app)?Promise.reject(Cr(t)):X3(ot(t),fa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BA(t),r})}function eV(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function tV(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function nV(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function rV(t){return ot(t).signOut()}const Xf="__sak";/**
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
 */class WA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xf,"1"),this.storage.removeItem(Xf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iV(){const t=Pt();return Ey(t)||Kd(t)}const oV=1e3,sV=10;class HA extends WA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iV()&&I3(),this.fallbackToPolling=LA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);T3()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HA.type="LOCAL";const aV=HA;/**
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
 */class qA extends WA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qA.type="SESSION";const GA=qA;/**
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
 */function lV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),u=await lV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xd.receivers=[];/**
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
 */function Sy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const c=Sy("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function fr(){return window}function cV(t){fr().location.href=t}/**
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
 */function YA(){return typeof fr().WorkerGlobalScope<"u"&&typeof fr().importScripts=="function"}async function fV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hV(){return YA()?self:null}/**
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
 */const KA="firebaseLocalStorageDb",pV=1,Jf="firebaseLocalStorage",QA="fbase_key";class Iu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jd(t,e){return t.transaction([Jf],e?"readwrite":"readonly").objectStore(Jf)}function mV(){const t=indexedDB.deleteDatabase(KA);return new Iu(t).toPromise()}function dg(){const t=indexedDB.open(KA,pV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jf,{keyPath:QA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jf)?e(r):(r.close(),await mV(),e(await dg()))})})}async function B1(t,e,n){const r=Jd(t,!0).put({[QA]:e,value:n});return new Iu(r).toPromise()}async function gV(t,e){const n=Jd(t,!1).get(e),r=await new Iu(n).toPromise();return r===void 0?null:r.value}function W1(t,e){const n=Jd(t,!0).delete(e);return new Iu(n).toPromise()}const vV=800,yV=3;class XA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xd._getInstance(hV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fV(),!this.activeServiceWorker)return;this.sender=new uV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dg();return await B1(e,Xf,"1"),await W1(e,Xf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>B1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Jd(i,!1).getAll();return new Iu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XA.type="LOCAL";const _V=XA;new wu(3e4,6e4);/**
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
 */function wV(t,e){return e?Ar(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class by extends Ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EV(t){return zA(t.auth,new by(t),t.bypassAuthState)}function TV(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Q3(n,new by(t),t.bypassAuthState)}async function IV(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),K3(n,new by(t),t.bypassAuthState)}/**
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
 */class JA{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EV;case"linkViaPopup":case"linkViaRedirect":return IV;case"reauthViaPopup":case"reauthViaRedirect":return TV;default:qn(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SV=new wu(2e3,1e4);class hs extends JA{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=Sy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SV.get())};e()}}hs.currentPopupAction=null;/**
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
 */const bV="pendingRedirect",Zc=new Map;class AV extends JA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zc.get(this.auth._key());if(!e){try{const r=await kV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zc.set(this.auth._key(),e)}return this.bypassAuthState||Zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kV(t,e){const n=xV(e),r=PV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CV(t,e){Zc.set(t._key(),e)}function PV(t){return Ar(t._redirectPersistence)}function xV(t){return Jc(bV,t.config.apiKey,t.name)}async function RV(t,e,n=!1){if(rr(t.app))return Promise.reject(Cr(t));const r=Lo(t),i=wV(r,e),s=await new AV(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const NV=10*60*1e3;class OV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NV&&this.cachedEventUids.clear(),this.cachedEventUids.has(H1(e))}saveEventToCache(e){this.cachedEventUids.add(H1(e)),this.lastProcessedEventTime=Date.now()}}function H1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZA(t);default:return!1}}/**
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
 */async function MV(t,e={}){return Bi(t,"GET","/v1/projects",e)}/**
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
 */const LV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VV=/^https?/;async function FV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MV(t);for(const n of e)try{if(jV(n))return}catch{}qn(t,"unauthorized-domain")}function jV(t){const e=ug(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!VV.test(n))return!1;if(LV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UV=new wu(3e4,6e4);function q1(){const t=fr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $V(t){return new Promise((e,n)=>{var r,i,o;function s(){q1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{q1(),n(cr(t,"network-request-failed"))},timeout:UV.get()})}if(!((i=(r=fr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=fr().gapi)===null||o===void 0)&&o.load)s();else{const a=N3("iframefcb");return fr()[a]=()=>{gapi.load?s():n(cr(t,"network-request-failed"))},FA(`${R3()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ef=null,e})}let ef=null;function zV(t){return ef=ef||$V(t),ef}/**
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
 */const BV=new wu(5e3,15e3),WV="__/auth/iframe",HV="emulator/auth/iframe",qV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YV(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_y(e,HV):`https://${t.config.authDomain}/${WV}`,r={apiKey:e.apiKey,appName:t.name,v:aa},i=GV.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${du(r).slice(1)}`}async function KV(t){const e=await zV(t),n=fr().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:YV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qV,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=cr(t,"network-request-failed"),a=fr().setTimeout(()=>{o(s)},BV.get());function u(){fr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const QV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XV=500,JV=600,ZV="_blank",eF="http://localhost";class G1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tF(t,e,n,r=XV,i=JV){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},QV),{width:r.toString(),height:i.toString(),top:o,left:s}),c=Pt().toLowerCase();n&&(a=RA(c)?ZV:n),xA(c)&&(e=e||eF,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[g,T])=>`${p}${g}=${T},`,"");if(E3(c)&&a!=="_self")return nF(e||"",a),new G1(null);const h=window.open(e||"",a,f);ae(h,t,"popup-blocked");try{h.focus()}catch{}return new G1(h)}function nF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rF="__/auth/handler",iF="emulator/auth/handler",oF=encodeURIComponent("fac");async function Y1(t,e,n,r,i,o){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:aa,eventId:i};if(e instanceof UA){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",UD(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))s[f]=h}if(e instanceof Tu){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),c=u?`#${oF}=${encodeURIComponent(u)}`:"";return`${sF(t)}?${du(a).slice(1)}${c}`}function sF({config:t}){return t.emulator?_y(t,iF):`https://${t.authDomain}/${rF}`}/**
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
 */const fp="webStorageSupport";class aF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GA,this._completeRedirectFn=RV,this._overrideRedirectResult=CV}async _openPopup(e,n,r,i){var o;Ur((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Y1(e,n,r,ug(),i);return tF(e,s,Sy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Y1(e,n,r,ug(),i);return cV(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ur(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KV(e),r=new OV(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fp,{type:fp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[fp];s!==void 0&&n(!!s),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LA()||Ey()||Kd()}}const lF=aF;var K1="@firebase/auth",Q1="1.7.4";/**
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
 */class uF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fF(t){$s(new Eo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ae(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VA(t)},c=new C3(r,i,o,u);return V3(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new Eo("auth-internal",e=>{const n=Lo(e.getProvider("auth").getImmediate());return(r=>new uF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Si(K1,Q1,cF(t)),Si(K1,Q1,"esm2017")}/**
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
 */const dF=5*60,hF=HS("authIdTokenMaxAge")||dF;let X1=null;const pF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hF)return;const i=n==null?void 0:n.token;X1!==i&&(X1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mF(t=KS()){const e=Lv(t,"auth");if(e.isInitialized())return e.getImmediate();const n=L3(t,{popupRedirectResolver:lF,persistence:[_V,aV,GA]}),r=HS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=pF(o.toString());tV(n,s,()=>s(n.currentUser)),eV(n,a=>s(a))}}const i=BS("auth");return i&&F3(n,`http://${i}`),n}function gF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}P3({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=cr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",gF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fF("Browser");const vF={apiKey:"AIzaSyD1LZub7njKK5oJoe87L4aHT-PTT2vURfg",authDomain:"app-lista-gastos-c3ebb.firebaseapp.com",projectId:"app-lista-gastos-c3ebb",storageBucket:"app-lista-gastos-c3ebb.appspot.com",messagingSenderId:"704911211582",appId:"1:704911211582:web:9b9188f4f6215b9bfde56f"};YS(vF);const Zd=mF(),Po=L5(),yF=()=>{const t=Ui(),e=async()=>{try{await rV(Zd),t("/iniciar-sesion")}catch(n){console.log(n)}};return b.jsx(Dr,{as:"button",onClick:e,children:b.jsx(Ni,{icon:hD})})},Yt={fondo:"#F9F9F9",colorPrimario:"#5B69E2",colorSecundario:"#000",verde:"#43A854",rojo:"#E34747",grisClaro:"#E8EFF1",grisClaro2:"#CBDDE2",azulClaro:"#8792F1"},_F=Ee.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`,Ay=Ee.form`
    padding: 0 2.5rem; /* 40px */
 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        padding: 2.5rem 0;
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`,ho=Ee.input`
    font-size: 2.5rem; /* 40px */
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid ${Yt.grisClaro};
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2.2rem; /* 24px */
    }
`,wF=Ee(ho)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;
`,ky=Ee.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  /* 40px */
`,EF=Ee.div`
    background: ${Yt.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${Yt.grisClaro2};
    }
`,TF=Ee.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`,IF=Ee.div`
    background: ${Yt.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`,SF=Ee.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${Yt.grisClaro2};
    }
`,bF=({categoria:t,cambiarCategoria:e})=>{const[n,r]=V.useState(!1),i=[{id:"comida",texto:"Comida"},{id:"cuentas y pagos",texto:"Cuentas y pagos"},{id:"hogar",texto:"Hogar"},{id:"transporte",texto:"Transporte"},{id:"ropa",texto:"Ropa"},{id:"salud e higiene",texto:"Salud e Higiene"},{id:"compras",texto:"Compras"},{id:"diversion",texto:"Diversion"}],o=s=>{e(s.currentTarget.dataset.valor)};return b.jsxs(EF,{onClick:()=>r(!n),children:[b.jsxs(TF,{children:[t," ",b.jsx(Ni,{icon:gD})]}),n&&b.jsx(IF,{children:i.map(s=>b.jsx(SF,{"data-valor":s.id,onClick:o,children:s.texto},s.id))})]})};function we(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function yn(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function Wt(t,e){const n=we(t);return isNaN(e)?yn(t,NaN):(e&&n.setDate(n.getDate()+e),n)}function Gn(t,e){const n=we(t);if(isNaN(e))return yn(t,NaN);if(!e)return n;const r=n.getDate(),i=yn(t,n.getTime());i.setMonth(n.getMonth()+e+1,0);const o=i.getDate();return r>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}const Cy=6048e5,AF=864e5;let kF={};function Su(){return kF}function hr(t,e){var a,u,c,f;const n=Su(),r=(e==null?void 0:e.weekStartsOn)??((u=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.weekStartsOn)??0,i=we(t),o=i.getDay(),s=(o<r?7:0)+o-r;return i.setDate(i.getDate()-s),i.setHours(0,0,0,0),i}function xo(t){return hr(t,{weekStartsOn:1})}function ek(t){const e=we(t),n=e.getFullYear(),r=yn(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=xo(r),o=yn(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=xo(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function Qs(t){const e=we(t);return e.setHours(0,0,0,0),e}function Zf(t){const e=we(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ir(t,e){const n=Qs(t),r=Qs(e),i=+n-Zf(n),o=+r-Zf(r);return Math.round((i-o)/AF)}function CF(t){const e=ek(t),n=yn(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),xo(n)}function hg(t,e){const n=e*7;return Wt(t,n)}function PF(t,e){return Gn(t,e*12)}function xF(t){let e;return t.forEach(function(n){const r=we(n);(e===void 0||e<r||isNaN(Number(r)))&&(e=r)}),e||new Date(NaN)}function RF(t){let e;return t.forEach(n=>{const r=we(n);(!e||e>r||isNaN(+r))&&(e=r)}),e||new Date(NaN)}function sn(t,e){const n=Qs(t),r=Qs(e);return+n==+r}function Py(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function NF(t){if(!Py(t)&&typeof t!="number")return!1;const e=we(t);return!isNaN(Number(e))}function Zl(t,e){const n=we(t),r=we(e),i=n.getFullYear()-r.getFullYear(),o=n.getMonth()-r.getMonth();return i*12+o}function OF(t,e,n){const r=hr(t,n),i=hr(e,n),o=+r-Zf(r),s=+i-Zf(i);return Math.round((o-s)/Cy)}function eh(t){const e=we(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function Gt(t){const e=we(t);return e.setDate(1),e.setHours(0,0,0,0),e}function tk(t){const e=we(t),n=yn(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function xy(t,e){var a,u,c,f;const n=Su(),r=(e==null?void 0:e.weekStartsOn)??((u=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.weekStartsOn)??0,i=we(t),o=i.getDay(),s=(o<r?-7:0)+6-(o-r);return i.setDate(i.getDate()+s),i.setHours(23,59,59,999),i}function nk(t){return xy(t,{weekStartsOn:1})}const DF={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},MF=(t,e,n)=>{let r;const i=DF[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ks(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const LF={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},VF={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},FF={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},jF={date:ks({formats:LF,defaultWidth:"full"}),time:ks({formats:VF,defaultWidth:"full"}),dateTime:ks({formats:FF,defaultWidth:"full"})},UF={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$F=(t,e,n,r)=>UF[t];function er(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):s;i=t.formattingValues[a]||t.formattingValues[s]}else{const s=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return i[o]}}const zF={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},BF={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},WF={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},HF={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qF={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},GF={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},YF=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},KF={ordinalNumber:YF,era:er({values:zF,defaultWidth:"wide"}),quarter:er({values:BF,defaultWidth:"wide",argumentCallback:t=>t-1}),month:er({values:WF,defaultWidth:"wide"}),day:er({values:HF,defaultWidth:"wide"}),dayPeriod:er({values:qF,defaultWidth:"wide",formattingValues:GF,defaultFormattingWidth:"wide"})};function tr(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;const s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?XF(a,h=>h.test(s)):QF(a,h=>h.test(s));let c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const f=e.slice(s.length);return{value:c,rest:f}}}function QF(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function XF(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function rk(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const a=e.slice(i.length);return{value:s,rest:a}}}const JF=/^(\d+)(th|st|nd|rd)?/i,ZF=/\d+/i,ej={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},tj={any:[/^b/i,/^(a|c)/i]},nj={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rj={any:[/1/i,/2/i,/3/i,/4/i]},ij={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},oj={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},sj={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},aj={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},lj={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},uj={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cj={ordinalNumber:rk({matchPattern:JF,parsePattern:ZF,valueCallback:t=>parseInt(t,10)}),era:tr({matchPatterns:ej,defaultMatchWidth:"wide",parsePatterns:tj,defaultParseWidth:"any"}),quarter:tr({matchPatterns:nj,defaultMatchWidth:"wide",parsePatterns:rj,defaultParseWidth:"any",valueCallback:t=>t+1}),month:tr({matchPatterns:ij,defaultMatchWidth:"wide",parsePatterns:oj,defaultParseWidth:"any"}),day:tr({matchPatterns:sj,defaultMatchWidth:"wide",parsePatterns:aj,defaultParseWidth:"any"}),dayPeriod:tr({matchPatterns:lj,defaultMatchWidth:"any",parsePatterns:uj,defaultParseWidth:"any"})},ik={code:"en-US",formatDistance:MF,formatLong:jF,formatRelative:$F,localize:KF,match:cj,options:{weekStartsOn:0,firstWeekContainsDate:1}};function fj(t){const e=we(t);return ir(e,tk(e))+1}function ok(t){const e=we(t),n=+xo(e)-+CF(e);return Math.round(n/Cy)+1}function sk(t,e){var f,h,p,g;const n=we(t),r=n.getFullYear(),i=Su(),o=(e==null?void 0:e.firstWeekContainsDate)??((h=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??i.firstWeekContainsDate??((g=(p=i.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,s=yn(t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const a=hr(s,e),u=yn(t,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const c=hr(u,e);return n.getTime()>=a.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function dj(t,e){var a,u,c,f;const n=Su(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??1,i=sk(t,e),o=yn(t,0);return o.setFullYear(i,0,r),o.setHours(0,0,0,0),hr(o,e)}function ak(t,e){const n=we(t),r=+hr(n,e)-+dj(n,e);return Math.round(r/Cy)+1}function ke(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Zr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return ke(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ke(n+1,2)},d(t,e){return ke(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ke(t.getHours()%12||12,e.length)},H(t,e){return ke(t.getHours(),e.length)},m(t,e){return ke(t.getMinutes(),e.length)},s(t,e){return ke(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return ke(i,e.length)}},Go={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},J1={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Zr.y(t,e)},Y:function(t,e,n,r){const i=sk(t,r),o=i>0?i:1-i;if(e==="YY"){const s=o%100;return ke(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):ke(o,e.length)},R:function(t,e){const n=ek(t);return ke(n,e.length)},u:function(t,e){const n=t.getFullYear();return ke(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ke(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ke(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Zr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return ke(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=ak(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):ke(i,e.length)},I:function(t,e,n){const r=ok(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):ke(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Zr.d(t,e)},D:function(t,e,n){const r=fj(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):ke(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return ke(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return ke(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return ke(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=Go.noon:r===0?i=Go.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=Go.evening:r>=12?i=Go.afternoon:r>=4?i=Go.morning:i=Go.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Zr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Zr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):ke(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):ke(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Zr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Zr.s(t,e)},S:function(t,e){return Zr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return eE(r);case"XXXX":case"XX":return Ji(r);case"XXXXX":case"XXX":default:return Ji(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return eE(r);case"xxxx":case"xx":return Ji(r);case"xxxxx":case"xxx":default:return Ji(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Z1(r,":");case"OOOO":default:return"GMT"+Ji(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Z1(r,":");case"zzzz":default:return"GMT"+Ji(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return ke(r,e.length)},T:function(t,e,n){const r=t.getTime();return ke(r,e.length)}};function Z1(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),o=r%60;return o===0?n+String(i):n+String(i)+e+ke(o,2)}function eE(t,e){return t%60===0?(t>0?"-":"+")+ke(Math.abs(t)/60,2):Ji(t,e)}function Ji(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=ke(Math.trunc(r/60),2),o=ke(r%60,2);return n+i+e+o}const tE=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},lk=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},hj=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return tE(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",tE(r,e)).replace("{{time}}",lk(i,e))},pj={p:lk,P:hj},mj=/^D+$/,gj=/^Y+$/,vj=["D","DD","YY","YYYY"];function yj(t){return mj.test(t)}function _j(t){return gj.test(t)}function wj(t,e,n){const r=Ej(t,e,n);if(console.warn(r),vj.includes(t))throw new RangeError(r)}function Ej(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Tj=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ij=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Sj=/^'([^]*?)'?$/,bj=/''/g,Aj=/[a-zA-Z]/;function qr(t,e,n){var f,h,p,g,T,C,k,_;const r=Su(),i=(n==null?void 0:n.locale)??r.locale??ik,o=(n==null?void 0:n.firstWeekContainsDate)??((h=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(p=r.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((C=(T=n==null?void 0:n.locale)==null?void 0:T.options)==null?void 0:C.weekStartsOn)??r.weekStartsOn??((_=(k=r.locale)==null?void 0:k.options)==null?void 0:_.weekStartsOn)??0,a=we(t);if(!NF(a))throw new RangeError("Invalid time value");let u=e.match(Ij).map(v=>{const I=v[0];if(I==="p"||I==="P"){const O=pj[I];return O(v,i.formatLong)}return v}).join("").match(Tj).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const I=v[0];if(I==="'")return{isToken:!1,value:kj(v)};if(J1[I])return{isToken:!0,value:v};if(I.match(Aj))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(u=i.localize.preprocessor(a,u));const c={firstWeekContainsDate:o,weekStartsOn:s,locale:i};return u.map(v=>{if(!v.isToken)return v.value;const I=v.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&_j(I)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&yj(I))&&wj(I,e,String(t));const O=J1[I[0]];return O(a,I,i.localize,c)}).join("")}function kj(t){const e=t.match(Sj);return e?e[1].replace(bj,"'"):t}function uk(t){return we(t*1e3)}function Cj(t){const e=we(t),n=e.getFullYear(),r=e.getMonth(),i=yn(t,0);return i.setFullYear(n,r+1,0),i.setHours(0,0,0,0),i.getDate()}function eu(t){return Math.trunc(+we(t)/1e3)}function Pj(t){const e=we(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(0,0,0,0),e}function xj(t,e){return OF(Pj(t),Gt(t),e)+1}function pg(t,e){const n=we(t),r=we(e);return n.getTime()>r.getTime()}function ck(t,e){const n=we(t),r=we(e);return+n<+r}function Ry(t,e){const n=we(t),r=we(e);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function Rj(t,e){const n=we(t),r=we(e);return n.getFullYear()===r.getFullYear()}function dp(t,e){return Wt(t,-e)}function hp(t,e){const n=we(t),r=n.getFullYear(),i=n.getDate(),o=yn(t,0);o.setFullYear(r,e,15),o.setHours(0,0,0,0);const s=Cj(o);return n.setMonth(e,Math.min(i,s)),n}function nE(t,e){const n=we(t);return isNaN(+n)?yn(t,NaN):(n.setFullYear(e),n)}const Nj={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},Oj=(t,e,n)=>{let r;const i=Nj[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"en "+r:"hace "+r:r},Dj={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},Mj={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Lj={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Vj={date:ks({formats:Dj,defaultWidth:"full"}),time:ks({formats:Mj,defaultWidth:"full"}),dateTime:ks({formats:Lj,defaultWidth:"full"})},Fj={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},jj={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},Uj=(t,e,n,r)=>e.getHours()!==1?jj[t]:Fj[t],$j={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},zj={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},Bj={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},Wj={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},Hj={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},qj={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},Gj=(t,e)=>Number(t)+"º",Yj={ordinalNumber:Gj,era:er({values:$j,defaultWidth:"wide"}),quarter:er({values:zj,defaultWidth:"wide",argumentCallback:t=>Number(t)-1}),month:er({values:Bj,defaultWidth:"wide"}),day:er({values:Wj,defaultWidth:"wide"}),dayPeriod:er({values:Hj,defaultWidth:"wide",formattingValues:qj,defaultFormattingWidth:"wide"})},Kj=/^(\d+)(º)?/i,Qj=/\d+/i,Xj={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},Jj={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},Zj={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},e9={any:[/1/i,/2/i,/3/i,/4/i]},t9={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},n9={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},r9={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},i9={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},o9={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},s9={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},a9={ordinalNumber:rk({matchPattern:Kj,parsePattern:Qj,valueCallback:function(t){return parseInt(t,10)}}),era:tr({matchPatterns:Xj,defaultMatchWidth:"wide",parsePatterns:Jj,defaultParseWidth:"any"}),quarter:tr({matchPatterns:Zj,defaultMatchWidth:"wide",parsePatterns:e9,defaultParseWidth:"any",valueCallback:t=>t+1}),month:tr({matchPatterns:t9,defaultMatchWidth:"wide",parsePatterns:n9,defaultParseWidth:"any"}),day:tr({matchPatterns:r9,defaultMatchWidth:"wide",parsePatterns:i9,defaultParseWidth:"any"}),dayPeriod:tr({matchPatterns:o9,defaultMatchWidth:"any",parsePatterns:s9,defaultParseWidth:"any"})},Ny={code:"es",formatDistance:Oj,formatLong:Vj,formatRelative:Uj,localize:Yj,match:a9,options:{weekStartsOn:1,firstWeekContainsDate:1}};var se=function(){return se=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},se.apply(this,arguments)};function l9(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fk(t,e,n){for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function bu(t){return t.mode==="multiple"}function Au(t){return t.mode==="range"}function th(t){return t.mode==="single"}var u9={root:"rdp",multiple_months:"rdp-multiple_months",with_weeknumber:"rdp-with_weeknumber",vhidden:"rdp-vhidden",button_reset:"rdp-button_reset",button:"rdp-button",caption:"rdp-caption",caption_start:"rdp-caption_start",caption_end:"rdp-caption_end",caption_between:"rdp-caption_between",caption_label:"rdp-caption_label",caption_dropdowns:"rdp-caption_dropdowns",dropdown:"rdp-dropdown",dropdown_month:"rdp-dropdown_month",dropdown_year:"rdp-dropdown_year",dropdown_icon:"rdp-dropdown_icon",months:"rdp-months",month:"rdp-month",table:"rdp-table",tbody:"rdp-tbody",tfoot:"rdp-tfoot",head:"rdp-head",head_row:"rdp-head_row",head_cell:"rdp-head_cell",nav:"rdp-nav",nav_button:"rdp-nav_button",nav_button_previous:"rdp-nav_button_previous",nav_button_next:"rdp-nav_button_next",nav_icon:"rdp-nav_icon",row:"rdp-row",weeknumber:"rdp-weeknumber",cell:"rdp-cell",day:"rdp-day",day_today:"rdp-day_today",day_outside:"rdp-day_outside",day_selected:"rdp-day_selected",day_disabled:"rdp-day_disabled",day_hidden:"rdp-day_hidden",day_range_start:"rdp-day_range_start",day_range_end:"rdp-day_range_end",day_range_middle:"rdp-day_range_middle"};function c9(t,e){return qr(t,"LLLL y",e)}function f9(t,e){return qr(t,"d",e)}function d9(t,e){return qr(t,"LLLL",e)}function h9(t){return"".concat(t)}function p9(t,e){return qr(t,"cccccc",e)}function m9(t,e){return qr(t,"yyyy",e)}var g9=Object.freeze({__proto__:null,formatCaption:c9,formatDay:f9,formatMonthCaption:d9,formatWeekNumber:h9,formatWeekdayName:p9,formatYearCaption:m9}),v9=function(t,e,n){return qr(t,"do MMMM (EEEE)",n)},y9=function(){return"Month: "},_9=function(){return"Go to next month"},w9=function(){return"Go to previous month"},E9=function(t,e){return qr(t,"cccc",e)},T9=function(t){return"Week n. ".concat(t)},I9=function(){return"Year: "},S9=Object.freeze({__proto__:null,labelDay:v9,labelMonthDropdown:y9,labelNext:_9,labelPrevious:w9,labelWeekNumber:T9,labelWeekday:E9,labelYearDropdown:I9});function b9(){var t="buttons",e=u9,n=ik,r={},i={},o=1,s={},a=new Date;return{captionLayout:t,classNames:e,formatters:g9,labels:S9,locale:n,modifiersClassNames:r,modifiers:i,numberOfMonths:o,styles:s,today:a,mode:"default"}}function A9(t){var e=t.fromYear,n=t.toYear,r=t.fromMonth,i=t.toMonth,o=t.fromDate,s=t.toDate;return r?o=Gt(r):e&&(o=new Date(e,0,1)),i?s=eh(i):n&&(s=new Date(n,11,31)),{fromDate:o?Qs(o):void 0,toDate:s?Qs(s):void 0}}var dk=V.createContext(void 0);function k9(t){var e,n=t.initialProps,r=b9(),i=A9(n),o=i.fromDate,s=i.toDate,a=(e=n.captionLayout)!==null&&e!==void 0?e:r.captionLayout;a!=="buttons"&&(!o||!s)&&(a="buttons");var u;(th(n)||bu(n)||Au(n))&&(u=n.onSelect);var c=se(se(se({},r),n),{captionLayout:a,classNames:se(se({},r.classNames),n.classNames),components:se({},n.components),formatters:se(se({},r.formatters),n.formatters),fromDate:o,labels:se(se({},r.labels),n.labels),mode:n.mode||r.mode,modifiers:se(se({},r.modifiers),n.modifiers),modifiersClassNames:se(se({},r.modifiersClassNames),n.modifiersClassNames),onSelect:u,styles:se(se({},r.styles),n.styles),toDate:s});return b.jsx(dk.Provider,{value:c,children:t.children})}function Le(){var t=V.useContext(dk);if(!t)throw new Error("useDayPicker must be used within a DayPickerProvider.");return t}function hk(t){var e=Le(),n=e.locale,r=e.classNames,i=e.styles,o=e.formatters.formatCaption;return b.jsx("div",{className:r.caption_label,style:i.caption_label,"aria-live":"polite",role:"presentation",id:t.id,children:o(t.displayMonth,{locale:n})})}function C9(t){return b.jsx("svg",se({width:"8px",height:"8px",viewBox:"0 0 120 120","data-testid":"iconDropdown"},t,{children:b.jsx("path",{d:"M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",fill:"currentColor",fillRule:"nonzero"})}))}function pk(t){var e,n,r=t.onChange,i=t.value,o=t.children,s=t.caption,a=t.className,u=t.style,c=Le(),f=(n=(e=c.components)===null||e===void 0?void 0:e.IconDropdown)!==null&&n!==void 0?n:C9;return b.jsxs("div",{className:a,style:u,children:[b.jsx("span",{className:c.classNames.vhidden,children:t["aria-label"]}),b.jsx("select",{name:t.name,"aria-label":t["aria-label"],className:c.classNames.dropdown,style:c.styles.dropdown,value:i,onChange:r,children:o}),b.jsxs("div",{className:c.classNames.caption_label,style:c.styles.caption_label,"aria-hidden":"true",children:[s,b.jsx(f,{className:c.classNames.dropdown_icon,style:c.styles.dropdown_icon})]})]})}function P9(t){var e,n=Le(),r=n.fromDate,i=n.toDate,o=n.styles,s=n.locale,a=n.formatters.formatMonthCaption,u=n.classNames,c=n.components,f=n.labels.labelMonthDropdown;if(!r)return b.jsx(b.Fragment,{});if(!i)return b.jsx(b.Fragment,{});var h=[];if(Rj(r,i))for(var p=Gt(r),g=r.getMonth();g<=i.getMonth();g++)h.push(hp(p,g));else for(var p=Gt(new Date),g=0;g<=11;g++)h.push(hp(p,g));var T=function(k){var _=Number(k.target.value),v=hp(Gt(t.displayMonth),_);t.onChange(v)},C=(e=c==null?void 0:c.Dropdown)!==null&&e!==void 0?e:pk;return b.jsx(C,{name:"months","aria-label":f(),className:u.dropdown_month,style:o.dropdown_month,onChange:T,value:t.displayMonth.getMonth(),caption:a(t.displayMonth,{locale:s}),children:h.map(function(k){return b.jsx("option",{value:k.getMonth(),children:a(k,{locale:s})},k.getMonth())})})}function x9(t){var e,n=t.displayMonth,r=Le(),i=r.fromDate,o=r.toDate,s=r.locale,a=r.styles,u=r.classNames,c=r.components,f=r.formatters.formatYearCaption,h=r.labels.labelYearDropdown,p=[];if(!i)return b.jsx(b.Fragment,{});if(!o)return b.jsx(b.Fragment,{});for(var g=i.getFullYear(),T=o.getFullYear(),C=g;C<=T;C++)p.push(nE(tk(new Date),C));var k=function(v){var I=nE(Gt(n),Number(v.target.value));t.onChange(I)},_=(e=c==null?void 0:c.Dropdown)!==null&&e!==void 0?e:pk;return b.jsx(_,{name:"years","aria-label":h(),className:u.dropdown_year,style:a.dropdown_year,onChange:k,value:n.getFullYear(),caption:f(n,{locale:s}),children:p.map(function(v){return b.jsx("option",{value:v.getFullYear(),children:f(v,{locale:s})},v.getFullYear())})})}function R9(t,e){var n=V.useState(t),r=n[0],i=n[1],o=e===void 0?r:e;return[o,i]}function N9(t){var e=t.month,n=t.defaultMonth,r=t.today,i=e||n||r||new Date,o=t.toDate,s=t.fromDate,a=t.numberOfMonths,u=a===void 0?1:a;if(o&&Zl(o,i)<0){var c=-1*(u-1);i=Gn(o,c)}return s&&Zl(i,s)<0&&(i=s),Gt(i)}function O9(){var t=Le(),e=N9(t),n=R9(e,t.month),r=n[0],i=n[1],o=function(s){var a;if(!t.disableNavigation){var u=Gt(s);i(u),(a=t.onMonthChange)===null||a===void 0||a.call(t,u)}};return[r,o]}function D9(t,e){for(var n=e.reverseMonths,r=e.numberOfMonths,i=Gt(t),o=Gt(Gn(i,r)),s=Zl(o,i),a=[],u=0;u<s;u++){var c=Gn(i,u);a.push(c)}return n&&(a=a.reverse()),a}function M9(t,e){if(!e.disableNavigation){var n=e.toDate,r=e.pagedNavigation,i=e.numberOfMonths,o=i===void 0?1:i,s=r?o:1,a=Gt(t);if(!n)return Gn(a,s);var u=Zl(n,t);if(!(u<o))return Gn(a,s)}}function L9(t,e){if(!e.disableNavigation){var n=e.fromDate,r=e.pagedNavigation,i=e.numberOfMonths,o=i===void 0?1:i,s=r?o:1,a=Gt(t);if(!n)return Gn(a,-s);var u=Zl(a,n);if(!(u<=0))return Gn(a,-s)}}var mk=V.createContext(void 0);function V9(t){var e=Le(),n=O9(),r=n[0],i=n[1],o=D9(r,e),s=M9(r,e),a=L9(r,e),u=function(h){return o.some(function(p){return Ry(h,p)})},c=function(h,p){u(h)||(p&&ck(h,p)?i(Gn(h,1+e.numberOfMonths*-1)):i(h))},f={currentMonth:r,displayMonths:o,goToMonth:i,goToDate:c,previousMonth:a,nextMonth:s,isDateDisplayed:u};return b.jsx(mk.Provider,{value:f,children:t.children})}function ku(){var t=V.useContext(mk);if(!t)throw new Error("useNavigation must be used within a NavigationProvider");return t}function rE(t){var e,n=Le(),r=n.classNames,i=n.styles,o=n.components,s=ku().goToMonth,a=function(f){s(Gn(f,t.displayIndex?-t.displayIndex:0))},u=(e=o==null?void 0:o.CaptionLabel)!==null&&e!==void 0?e:hk,c=b.jsx(u,{id:t.id,displayMonth:t.displayMonth});return b.jsxs("div",{className:r.caption_dropdowns,style:i.caption_dropdowns,children:[b.jsx("div",{className:r.vhidden,children:c}),b.jsx(P9,{onChange:a,displayMonth:t.displayMonth}),b.jsx(x9,{onChange:a,displayMonth:t.displayMonth})]})}function F9(t){return b.jsx("svg",se({width:"16px",height:"16px",viewBox:"0 0 120 120"},t,{children:b.jsx("path",{d:"M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",fill:"currentColor",fillRule:"nonzero"})}))}function j9(t){return b.jsx("svg",se({width:"16px",height:"16px",viewBox:"0 0 120 120"},t,{children:b.jsx("path",{d:"M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",fill:"currentColor"})}))}var ed=V.forwardRef(function(t,e){var n=Le(),r=n.classNames,i=n.styles,o=[r.button_reset,r.button];t.className&&o.push(t.className);var s=o.join(" "),a=se(se({},i.button_reset),i.button);return t.style&&Object.assign(a,t.style),b.jsx("button",se({},t,{ref:e,type:"button",className:s,style:a}))});function U9(t){var e,n,r=Le(),i=r.dir,o=r.locale,s=r.classNames,a=r.styles,u=r.labels,c=u.labelPrevious,f=u.labelNext,h=r.components;if(!t.nextMonth&&!t.previousMonth)return b.jsx(b.Fragment,{});var p=c(t.previousMonth,{locale:o}),g=[s.nav_button,s.nav_button_previous].join(" "),T=f(t.nextMonth,{locale:o}),C=[s.nav_button,s.nav_button_next].join(" "),k=(e=h==null?void 0:h.IconRight)!==null&&e!==void 0?e:j9,_=(n=h==null?void 0:h.IconLeft)!==null&&n!==void 0?n:F9;return b.jsxs("div",{className:s.nav,style:a.nav,children:[!t.hidePrevious&&b.jsx(ed,{name:"previous-month","aria-label":p,className:g,style:a.nav_button_previous,disabled:!t.previousMonth,onClick:t.onPreviousClick,children:i==="rtl"?b.jsx(k,{className:s.nav_icon,style:a.nav_icon}):b.jsx(_,{className:s.nav_icon,style:a.nav_icon})}),!t.hideNext&&b.jsx(ed,{name:"next-month","aria-label":T,className:C,style:a.nav_button_next,disabled:!t.nextMonth,onClick:t.onNextClick,children:i==="rtl"?b.jsx(_,{className:s.nav_icon,style:a.nav_icon}):b.jsx(k,{className:s.nav_icon,style:a.nav_icon})})]})}function iE(t){var e=Le().numberOfMonths,n=ku(),r=n.previousMonth,i=n.nextMonth,o=n.goToMonth,s=n.displayMonths,a=s.findIndex(function(T){return Ry(t.displayMonth,T)}),u=a===0,c=a===s.length-1,f=e>1&&(u||!c),h=e>1&&(c||!u),p=function(){r&&o(r)},g=function(){i&&o(i)};return b.jsx(U9,{displayMonth:t.displayMonth,hideNext:f,hidePrevious:h,nextMonth:i,previousMonth:r,onPreviousClick:p,onNextClick:g})}function $9(t){var e,n=Le(),r=n.classNames,i=n.disableNavigation,o=n.styles,s=n.captionLayout,a=n.components,u=(e=a==null?void 0:a.CaptionLabel)!==null&&e!==void 0?e:hk,c;return i?c=b.jsx(u,{id:t.id,displayMonth:t.displayMonth}):s==="dropdown"?c=b.jsx(rE,{displayMonth:t.displayMonth,id:t.id}):s==="dropdown-buttons"?c=b.jsxs(b.Fragment,{children:[b.jsx(rE,{displayMonth:t.displayMonth,displayIndex:t.displayIndex,id:t.id}),b.jsx(iE,{displayMonth:t.displayMonth,displayIndex:t.displayIndex,id:t.id})]}):c=b.jsxs(b.Fragment,{children:[b.jsx(u,{id:t.id,displayMonth:t.displayMonth,displayIndex:t.displayIndex}),b.jsx(iE,{displayMonth:t.displayMonth,id:t.id})]}),b.jsx("div",{className:r.caption,style:o.caption,children:c})}function z9(t){var e=Le(),n=e.footer,r=e.styles,i=e.classNames.tfoot;return n?b.jsx("tfoot",{className:i,style:r.tfoot,children:b.jsx("tr",{children:b.jsx("td",{colSpan:8,children:n})})}):b.jsx(b.Fragment,{})}function B9(t,e,n){for(var r=n?xo(new Date):hr(new Date,{locale:t,weekStartsOn:e}),i=[],o=0;o<7;o++){var s=Wt(r,o);i.push(s)}return i}function W9(){var t=Le(),e=t.classNames,n=t.styles,r=t.showWeekNumber,i=t.locale,o=t.weekStartsOn,s=t.ISOWeek,a=t.formatters.formatWeekdayName,u=t.labels.labelWeekday,c=B9(i,o,s);return b.jsxs("tr",{style:n.head_row,className:e.head_row,children:[r&&b.jsx("td",{style:n.head_cell,className:e.head_cell}),c.map(function(f,h){return b.jsx("th",{scope:"col",className:e.head_cell,style:n.head_cell,"aria-label":u(f,{locale:i}),children:a(f,{locale:i})},h)})]})}function H9(){var t,e=Le(),n=e.classNames,r=e.styles,i=e.components,o=(t=i==null?void 0:i.HeadRow)!==null&&t!==void 0?t:W9;return b.jsx("thead",{style:r.head,className:n.head,children:b.jsx(o,{})})}function q9(t){var e=Le(),n=e.locale,r=e.formatters.formatDay;return b.jsx(b.Fragment,{children:r(t.date,{locale:n})})}var Oy=V.createContext(void 0);function G9(t){if(!bu(t.initialProps)){var e={selected:void 0,modifiers:{disabled:[]}};return b.jsx(Oy.Provider,{value:e,children:t.children})}return b.jsx(Y9,{initialProps:t.initialProps,children:t.children})}function Y9(t){var e=t.initialProps,n=t.children,r=e.selected,i=e.min,o=e.max,s=function(c,f,h){var p,g;(p=e.onDayClick)===null||p===void 0||p.call(e,c,f,h);var T=!!(f.selected&&i&&(r==null?void 0:r.length)===i);if(!T){var C=!!(!f.selected&&o&&(r==null?void 0:r.length)===o);if(!C){var k=r?fk([],r):[];if(f.selected){var _=k.findIndex(function(v){return sn(c,v)});k.splice(_,1)}else k.push(c);(g=e.onSelect)===null||g===void 0||g.call(e,k,c,f,h)}}},a={disabled:[]};r&&a.disabled.push(function(c){var f=o&&r.length>o-1,h=r.some(function(p){return sn(p,c)});return!!(f&&!h)});var u={selected:r,onDayClick:s,modifiers:a};return b.jsx(Oy.Provider,{value:u,children:n})}function Dy(){var t=V.useContext(Oy);if(!t)throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");return t}function K9(t,e){var n=e||{},r=n.from,i=n.to;return r&&i?sn(i,t)&&sn(r,t)?void 0:sn(i,t)?{from:i,to:void 0}:sn(r,t)?void 0:pg(r,t)?{from:t,to:i}:{from:r,to:t}:i?pg(t,i)?{from:i,to:t}:{from:t,to:i}:r?ck(t,r)?{from:t,to:r}:{from:r,to:t}:{from:t,to:void 0}}var My=V.createContext(void 0);function Q9(t){if(!Au(t.initialProps)){var e={selected:void 0,modifiers:{range_start:[],range_end:[],range_middle:[],disabled:[]}};return b.jsx(My.Provider,{value:e,children:t.children})}return b.jsx(X9,{initialProps:t.initialProps,children:t.children})}function X9(t){var e=t.initialProps,n=t.children,r=e.selected,i=r||{},o=i.from,s=i.to,a=e.min,u=e.max,c=function(g,T,C){var k,_;(k=e.onDayClick)===null||k===void 0||k.call(e,g,T,C);var v=K9(g,r);(_=e.onSelect)===null||_===void 0||_.call(e,v,g,T,C)},f={range_start:[],range_end:[],range_middle:[],disabled:[]};if(o?(f.range_start=[o],s?(f.range_end=[s],sn(o,s)||(f.range_middle=[{after:o,before:s}])):f.range_end=[o]):s&&(f.range_start=[s],f.range_end=[s]),a&&(o&&!s&&f.disabled.push({after:dp(o,a-1),before:Wt(o,a-1)}),o&&s&&f.disabled.push({after:o,before:Wt(o,a-1)}),!o&&s&&f.disabled.push({after:dp(s,a-1),before:Wt(s,a-1)})),u){if(o&&!s&&(f.disabled.push({before:Wt(o,-u+1)}),f.disabled.push({after:Wt(o,u-1)})),o&&s){var h=ir(s,o)+1,p=u-h;f.disabled.push({before:dp(o,p)}),f.disabled.push({after:Wt(s,p)})}!o&&s&&(f.disabled.push({before:Wt(s,-u+1)}),f.disabled.push({after:Wt(s,u-1)}))}return b.jsx(My.Provider,{value:{selected:r,onDayClick:c,modifiers:f},children:n})}function Ly(){var t=V.useContext(My);if(!t)throw new Error("useSelectRange must be used within a SelectRangeProvider");return t}function tf(t){return Array.isArray(t)?fk([],t):t!==void 0?[t]:[]}function J9(t){var e={};return Object.entries(t).forEach(function(n){var r=n[0],i=n[1];e[r]=tf(i)}),e}var Yn;(function(t){t.Outside="outside",t.Disabled="disabled",t.Selected="selected",t.Hidden="hidden",t.Today="today",t.RangeStart="range_start",t.RangeEnd="range_end",t.RangeMiddle="range_middle"})(Yn||(Yn={}));var Z9=Yn.Selected,yr=Yn.Disabled,e6=Yn.Hidden,t6=Yn.Today,pp=Yn.RangeEnd,mp=Yn.RangeMiddle,gp=Yn.RangeStart,n6=Yn.Outside;function r6(t,e,n){var r,i=(r={},r[Z9]=tf(t.selected),r[yr]=tf(t.disabled),r[e6]=tf(t.hidden),r[t6]=[t.today],r[pp]=[],r[mp]=[],r[gp]=[],r[n6]=[],r);return t.fromDate&&i[yr].push({before:t.fromDate}),t.toDate&&i[yr].push({after:t.toDate}),bu(t)?i[yr]=i[yr].concat(e.modifiers[yr]):Au(t)&&(i[yr]=i[yr].concat(n.modifiers[yr]),i[gp]=n.modifiers[gp],i[mp]=n.modifiers[mp],i[pp]=n.modifiers[pp]),i}var gk=V.createContext(void 0);function i6(t){var e=Le(),n=Dy(),r=Ly(),i=r6(e,n,r),o=J9(e.modifiers),s=se(se({},i),o);return b.jsx(gk.Provider,{value:s,children:t.children})}function vk(){var t=V.useContext(gk);if(!t)throw new Error("useModifiers must be used within a ModifiersProvider");return t}function o6(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function s6(t){return!!(t&&typeof t=="object"&&"from"in t)}function a6(t){return!!(t&&typeof t=="object"&&"after"in t)}function l6(t){return!!(t&&typeof t=="object"&&"before"in t)}function u6(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function c6(t,e){var n,r=e.from,i=e.to;if(r&&i){var o=ir(i,r)<0;o&&(n=[i,r],r=n[0],i=n[1]);var s=ir(t,r)>=0&&ir(i,t)>=0;return s}return i?sn(i,t):r?sn(r,t):!1}function f6(t){return Py(t)}function d6(t){return Array.isArray(t)&&t.every(Py)}function h6(t,e){return e.some(function(n){if(typeof n=="boolean")return n;if(f6(n))return sn(t,n);if(d6(n))return n.includes(t);if(s6(n))return c6(t,n);if(u6(n))return n.dayOfWeek.includes(t.getDay());if(o6(n)){var r=ir(n.before,t),i=ir(n.after,t),o=r>0,s=i<0,a=pg(n.before,n.after);return a?s&&o:o||s}return a6(n)?ir(t,n.after)>0:l6(n)?ir(n.before,t)>0:typeof n=="function"?n(t):!1})}function Vy(t,e,n){var r=Object.keys(e).reduce(function(o,s){var a=e[s];return h6(t,a)&&o.push(s),o},[]),i={};return r.forEach(function(o){return i[o]=!0}),n&&!Ry(t,n)&&(i.outside=!0),i}function p6(t,e){for(var n=Gt(t[0]),r=eh(t[t.length-1]),i,o,s=n;s<=r;){var a=Vy(s,e),u=!a.disabled&&!a.hidden;if(!u){s=Wt(s,1);continue}if(a.selected)return s;a.today&&!o&&(o=s),i||(i=s),s=Wt(s,1)}return o||i}var m6=365;function yk(t,e){var n=e.moveBy,r=e.direction,i=e.context,o=e.modifiers,s=e.retry,a=s===void 0?{count:0,lastFocused:t}:s,u=i.weekStartsOn,c=i.fromDate,f=i.toDate,h=i.locale,p={day:Wt,week:hg,month:Gn,year:PF,startOfWeek:function(k){return i.ISOWeek?xo(k):hr(k,{locale:h,weekStartsOn:u})},endOfWeek:function(k){return i.ISOWeek?nk(k):xy(k,{locale:h,weekStartsOn:u})}},g=p[n](t,r==="after"?1:-1);r==="before"&&c?g=xF([c,g]):r==="after"&&f&&(g=RF([f,g]));var T=!0;if(o){var C=Vy(g,o);T=!C.disabled&&!C.hidden}return T?g:a.count>m6?a.lastFocused:yk(g,{moveBy:n,direction:r,context:i,modifiers:o,retry:se(se({},a),{count:a.count+1})})}var _k=V.createContext(void 0);function g6(t){var e=ku(),n=vk(),r=V.useState(),i=r[0],o=r[1],s=V.useState(),a=s[0],u=s[1],c=p6(e.displayMonths,n),f=i??(a&&e.isDateDisplayed(a))?a:c,h=function(){u(i),o(void 0)},p=function(k){o(k)},g=Le(),T=function(k,_){if(i){var v=yk(i,{moveBy:k,direction:_,context:g,modifiers:n});sn(i,v)||(e.goToDate(v,i),p(v))}},C={focusedDay:i,focusTarget:f,blur:h,focus:p,focusDayAfter:function(){return T("day","after")},focusDayBefore:function(){return T("day","before")},focusWeekAfter:function(){return T("week","after")},focusWeekBefore:function(){return T("week","before")},focusMonthBefore:function(){return T("month","before")},focusMonthAfter:function(){return T("month","after")},focusYearBefore:function(){return T("year","before")},focusYearAfter:function(){return T("year","after")},focusStartOfWeek:function(){return T("startOfWeek","before")},focusEndOfWeek:function(){return T("endOfWeek","after")}};return b.jsx(_k.Provider,{value:C,children:t.children})}function Fy(){var t=V.useContext(_k);if(!t)throw new Error("useFocusContext must be used within a FocusProvider");return t}function v6(t,e){var n=vk(),r=Vy(t,n,e);return r}var jy=V.createContext(void 0);function y6(t){if(!th(t.initialProps)){var e={selected:void 0};return b.jsx(jy.Provider,{value:e,children:t.children})}return b.jsx(_6,{initialProps:t.initialProps,children:t.children})}function _6(t){var e=t.initialProps,n=t.children,r=function(o,s,a){var u,c,f;if((u=e.onDayClick)===null||u===void 0||u.call(e,o,s,a),s.selected&&!e.required){(c=e.onSelect)===null||c===void 0||c.call(e,void 0,o,s,a);return}(f=e.onSelect)===null||f===void 0||f.call(e,o,o,s,a)},i={selected:e.selected,onDayClick:r};return b.jsx(jy.Provider,{value:i,children:n})}function wk(){var t=V.useContext(jy);if(!t)throw new Error("useSelectSingle must be used within a SelectSingleProvider");return t}function w6(t,e){var n=Le(),r=wk(),i=Dy(),o=Ly(),s=Fy(),a=s.focusDayAfter,u=s.focusDayBefore,c=s.focusWeekAfter,f=s.focusWeekBefore,h=s.blur,p=s.focus,g=s.focusMonthBefore,T=s.focusMonthAfter,C=s.focusYearBefore,k=s.focusYearAfter,_=s.focusStartOfWeek,v=s.focusEndOfWeek,I=function(Q){var F,J,oe,pe;th(n)?(F=r.onDayClick)===null||F===void 0||F.call(r,t,e,Q):bu(n)?(J=i.onDayClick)===null||J===void 0||J.call(i,t,e,Q):Au(n)?(oe=o.onDayClick)===null||oe===void 0||oe.call(o,t,e,Q):(pe=n.onDayClick)===null||pe===void 0||pe.call(n,t,e,Q)},O=function(Q){var F;p(t),(F=n.onDayFocus)===null||F===void 0||F.call(n,t,e,Q)},j=function(Q){var F;h(),(F=n.onDayBlur)===null||F===void 0||F.call(n,t,e,Q)},U=function(Q){var F;(F=n.onDayMouseEnter)===null||F===void 0||F.call(n,t,e,Q)},E=function(Q){var F;(F=n.onDayMouseLeave)===null||F===void 0||F.call(n,t,e,Q)},w=function(Q){var F;(F=n.onDayPointerEnter)===null||F===void 0||F.call(n,t,e,Q)},A=function(Q){var F;(F=n.onDayPointerLeave)===null||F===void 0||F.call(n,t,e,Q)},x=function(Q){var F;(F=n.onDayTouchCancel)===null||F===void 0||F.call(n,t,e,Q)},R=function(Q){var F;(F=n.onDayTouchEnd)===null||F===void 0||F.call(n,t,e,Q)},D=function(Q){var F;(F=n.onDayTouchMove)===null||F===void 0||F.call(n,t,e,Q)},P=function(Q){var F;(F=n.onDayTouchStart)===null||F===void 0||F.call(n,t,e,Q)},ht=function(Q){var F;(F=n.onDayKeyUp)===null||F===void 0||F.call(n,t,e,Q)},cn=function(Q){var F;switch(Q.key){case"ArrowLeft":Q.preventDefault(),Q.stopPropagation(),n.dir==="rtl"?a():u();break;case"ArrowRight":Q.preventDefault(),Q.stopPropagation(),n.dir==="rtl"?u():a();break;case"ArrowDown":Q.preventDefault(),Q.stopPropagation(),c();break;case"ArrowUp":Q.preventDefault(),Q.stopPropagation(),f();break;case"PageUp":Q.preventDefault(),Q.stopPropagation(),Q.shiftKey?C():g();break;case"PageDown":Q.preventDefault(),Q.stopPropagation(),Q.shiftKey?k():T();break;case"Home":Q.preventDefault(),Q.stopPropagation(),_();break;case"End":Q.preventDefault(),Q.stopPropagation(),v();break}(F=n.onDayKeyDown)===null||F===void 0||F.call(n,t,e,Q)},Xt={onClick:I,onFocus:O,onBlur:j,onKeyDown:cn,onKeyUp:ht,onMouseEnter:U,onMouseLeave:E,onPointerEnter:w,onPointerLeave:A,onTouchCancel:x,onTouchEnd:R,onTouchMove:D,onTouchStart:P};return Xt}function E6(){var t=Le(),e=wk(),n=Dy(),r=Ly(),i=th(t)?e.selected:bu(t)?n.selected:Au(t)?r.selected:void 0;return i}function T6(t){return Object.values(Yn).includes(t)}function I6(t,e){var n=[t.classNames.day];return Object.keys(e).forEach(function(r){var i=t.modifiersClassNames[r];if(i)n.push(i);else if(T6(r)){var o=t.classNames["day_".concat(r)];o&&n.push(o)}}),n}function S6(t,e){var n=se({},t.styles.day);return Object.keys(e).forEach(function(r){var i;n=se(se({},n),(i=t.modifiersStyles)===null||i===void 0?void 0:i[r])}),n}function b6(t,e,n){var r,i,o,s=Le(),a=Fy(),u=v6(t,e),c=w6(t,u),f=E6(),h=!!(s.onDayClick||s.mode!=="default");V.useEffect(function(){var U;u.outside||a.focusedDay&&h&&sn(a.focusedDay,t)&&((U=n.current)===null||U===void 0||U.focus())},[a.focusedDay,t,n,h,u.outside]);var p=I6(s,u).join(" "),g=S6(s,u),T=!!(u.outside&&!s.showOutsideDays||u.hidden),C=(o=(i=s.components)===null||i===void 0?void 0:i.DayContent)!==null&&o!==void 0?o:q9,k=b.jsx(C,{date:t,displayMonth:e,activeModifiers:u}),_={style:g,className:p,children:k,role:"gridcell"},v=a.focusTarget&&sn(a.focusTarget,t)&&!u.outside,I=a.focusedDay&&sn(a.focusedDay,t),O=se(se(se({},_),(r={disabled:u.disabled,role:"gridcell"},r["aria-selected"]=u.selected,r.tabIndex=I||v?0:-1,r)),c),j={isButton:h,isHidden:T,activeModifiers:u,selectedDays:f,buttonProps:O,divProps:_};return j}function A6(t){var e=V.useRef(null),n=b6(t.date,t.displayMonth,e);return n.isHidden?b.jsx("div",{role:"gridcell"}):n.isButton?b.jsx(ed,se({name:"day",ref:e},n.buttonProps)):b.jsx("div",se({},n.divProps))}function k6(t){var e=t.number,n=t.dates,r=Le(),i=r.onWeekNumberClick,o=r.styles,s=r.classNames,a=r.locale,u=r.labels.labelWeekNumber,c=r.formatters.formatWeekNumber,f=c(Number(e),{locale:a});if(!i)return b.jsx("span",{className:s.weeknumber,style:o.weeknumber,children:f});var h=u(Number(e),{locale:a}),p=function(g){i(e,n,g)};return b.jsx(ed,{name:"week-number","aria-label":h,className:s.weeknumber,style:o.weeknumber,onClick:p,children:f})}function C6(t){var e,n,r=Le(),i=r.styles,o=r.classNames,s=r.showWeekNumber,a=r.components,u=(e=a==null?void 0:a.Day)!==null&&e!==void 0?e:A6,c=(n=a==null?void 0:a.WeekNumber)!==null&&n!==void 0?n:k6,f;return s&&(f=b.jsx("td",{className:o.cell,style:i.cell,children:b.jsx(c,{number:t.weekNumber,dates:t.dates})})),b.jsxs("tr",{className:o.row,style:i.row,children:[f,t.dates.map(function(h){return b.jsx("td",{className:o.cell,style:i.cell,role:"presentation",children:b.jsx(u,{displayMonth:t.displayMonth,date:h})},eu(h))})]})}function oE(t,e,n){for(var r=n!=null&&n.ISOWeek?nk(e):xy(e,n),i=n!=null&&n.ISOWeek?xo(t):hr(t,n),o=ir(r,i),s=[],a=0;a<=o;a++)s.push(Wt(i,a));var u=s.reduce(function(c,f){var h=n!=null&&n.ISOWeek?ok(f):ak(f,n),p=c.find(function(g){return g.weekNumber===h});return p?(p.dates.push(f),c):(c.push({weekNumber:h,dates:[f]}),c)},[]);return u}function P6(t,e){var n=oE(Gt(t),eh(t),e);if(e!=null&&e.useFixedWeeks){var r=xj(t,e);if(r<6){var i=n[n.length-1],o=i.dates[i.dates.length-1],s=hg(o,6-r),a=oE(hg(o,1),s,e);n.push.apply(n,a)}}return n}function x6(t){var e,n,r,i=Le(),o=i.locale,s=i.classNames,a=i.styles,u=i.hideHead,c=i.fixedWeeks,f=i.components,h=i.weekStartsOn,p=i.firstWeekContainsDate,g=i.ISOWeek,T=P6(t.displayMonth,{useFixedWeeks:!!c,ISOWeek:g,locale:o,weekStartsOn:h,firstWeekContainsDate:p}),C=(e=f==null?void 0:f.Head)!==null&&e!==void 0?e:H9,k=(n=f==null?void 0:f.Row)!==null&&n!==void 0?n:C6,_=(r=f==null?void 0:f.Footer)!==null&&r!==void 0?r:z9;return b.jsxs("table",{id:t.id,className:s.table,style:a.table,role:"grid","aria-labelledby":t["aria-labelledby"],children:[!u&&b.jsx(C,{}),b.jsx("tbody",{className:s.tbody,style:a.tbody,children:T.map(function(v){return b.jsx(k,{displayMonth:t.displayMonth,dates:v.dates,weekNumber:v.weekNumber},v.weekNumber)})}),b.jsx(_,{displayMonth:t.displayMonth})]})}function R6(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var N6=R6()?V.useLayoutEffect:V.useEffect,vp=!1,O6=0;function sE(){return"react-day-picker-".concat(++O6)}function D6(t){var e,n=t??(vp?sE():null),r=V.useState(n),i=r[0],o=r[1];return N6(function(){i===null&&o(sE())},[]),V.useEffect(function(){vp===!1&&(vp=!0)},[]),(e=t??i)!==null&&e!==void 0?e:void 0}function M6(t){var e,n,r=Le(),i=r.dir,o=r.classNames,s=r.styles,a=r.components,u=ku().displayMonths,c=D6(r.id?"".concat(r.id,"-").concat(t.displayIndex):void 0),f=r.id?"".concat(r.id,"-grid-").concat(t.displayIndex):void 0,h=[o.month],p=s.month,g=t.displayIndex===0,T=t.displayIndex===u.length-1,C=!g&&!T;i==="rtl"&&(e=[g,T],T=e[0],g=e[1]),g&&(h.push(o.caption_start),p=se(se({},p),s.caption_start)),T&&(h.push(o.caption_end),p=se(se({},p),s.caption_end)),C&&(h.push(o.caption_between),p=se(se({},p),s.caption_between));var k=(n=a==null?void 0:a.Caption)!==null&&n!==void 0?n:$9;return b.jsxs("div",{className:h.join(" "),style:p,children:[b.jsx(k,{id:c,displayMonth:t.displayMonth,displayIndex:t.displayIndex}),b.jsx(x6,{id:f,"aria-labelledby":c,displayMonth:t.displayMonth})]},t.displayIndex)}function L6(t){var e=Le(),n=e.classNames,r=e.styles;return b.jsx("div",{className:n.months,style:r.months,children:t.children})}function V6(t){var e,n,r=t.initialProps,i=Le(),o=Fy(),s=ku(),a=V.useState(!1),u=a[0],c=a[1];V.useEffect(function(){i.initialFocus&&o.focusTarget&&(u||(o.focus(o.focusTarget),c(!0)))},[i.initialFocus,u,o.focus,o.focusTarget,o]);var f=[i.classNames.root,i.className];i.numberOfMonths>1&&f.push(i.classNames.multiple_months),i.showWeekNumber&&f.push(i.classNames.with_weeknumber);var h=se(se({},i.styles.root),i.style),p=Object.keys(r).filter(function(T){return T.startsWith("data-")}).reduce(function(T,C){var k;return se(se({},T),(k={},k[C]=r[C],k))},{}),g=(n=(e=r.components)===null||e===void 0?void 0:e.Months)!==null&&n!==void 0?n:L6;return b.jsx("div",se({className:f.join(" "),style:h,dir:i.dir,id:i.id,nonce:r.nonce,title:r.title,lang:r.lang},p,{children:b.jsx(g,{children:s.displayMonths.map(function(T,C){return b.jsx(M6,{displayIndex:C,displayMonth:T},C)})})}))}function F6(t){var e=t.children,n=l9(t,["children"]);return b.jsx(k9,{initialProps:n,children:b.jsx(V9,{children:b.jsx(y6,{initialProps:n,children:b.jsx(G9,{initialProps:n,children:b.jsx(Q9,{initialProps:n,children:b.jsx(i6,{children:b.jsx(g6,{children:e})})})})})})})}function j6(t){return b.jsx(F6,se({},t,{children:b.jsx(V6,{initialProps:t})}))}const U6=Ee.div`
    position: relative;
 
    input {
        font-family: 'Work Sans', sans-serif;
        box-sizing: border-box;
        background: ${Yt.grisClaro};
        border: none;
        cursor: pointer;
        border-radius: 0.625rem; /* 10px */
        height: 5rem; /* 80px */
        width: 100%;
        padding: 0 1.25rem; /* 20px */
        font-size: 1.5rem; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    }
 
    .rdp {
        position: absolute;
    }
 
    .rdp-months {
        display: flex;
        justify-content: center;
    }
 
    .rdp-month {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        border-radius: 10px;
    }
 
    @media (max-width: 60rem) {
        /* 950px */
        & > * {
            width: 100%;
        }
    }
`,$6=(t=new Date)=>qr(t,"dd 'de' MMMM 'del' yyyy ",{locale:Ny}),z6=({fecha:t,cambiarFecha:e})=>{const[n,r]=V.useState(!1);return b.jsxs(U6,{children:[b.jsx("input",{type:"text",readOnly:!0,value:$6(t),onClick:()=>r(!n)}),n&&b.jsx(j6,{mode:"single",selected:t,onSelect:e,locale:Ny})]})},B6=({categoria:t,descripcion:e,cantidad:n,fecha:r,uidUsuario:i})=>t3(qf(Po,"gastos"),{categoria:t,descripcion:e,cantidad:Number(n),fecha:r,uidUsuario:i}),Ek=jt.createContext(),Cu=()=>V.useContext(Ek),W6=({children:t})=>{const[e,n]=V.useState(),[r,i]=V.useState(!0);return V.useEffect(()=>nV(Zd,s=>{n(s),i(!1)}),[]),b.jsx(Ek.Provider,{value:{usuario:e},children:!r&&t})},H6=y2`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`,q6=Ee.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${H6} 4s ease forwards;
 
    p {
 
        background: ${t=>t.tipo==="error"?Yt.rojo:t.tipo==="exito"?Yt.verde:"#000"};
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`,Uy=({tipo:t,mensaje:e,estadoAlerta:n,cambiarEstadoAlerta:r})=>(V.useEffect(()=>{let i;return n===!0&&(i=setTimeout(()=>{r(!1)},4e3)),()=>clearTimeout(i)},[n,r]),b.jsx(b.Fragment,{children:n&&b.jsx(q6,{tipo:t,children:b.jsx("p",{children:e})})})),G6=async({id:t,categoria:e,descripcion:n,cantidad:r,fecha:i})=>{const o=zd(Po,"gastos",t);return await Z5(o,{categoria:e,descripcion:n,cantidad:Number(r),fecha:i})},Tk=({gasto:t})=>{const[e,n]=V.useState(""),[r,i]=V.useState(""),[o,s]=V.useState("hogar"),[a,u]=V.useState(new Date),[c,f]=V.useState(!1),[h,p]=V.useState({}),{usuario:g}=Cu(),T=Ui();V.useEffect(()=>{t&&(t.data().uidUsuario===g.uid?(s(t.data().categoria),u(uk(t.data().fecha)),n(t.data().descripcion),i(t.data().cantidad)):T("/lista"))},[t,g,T]);const C=_=>{_.target.name==="descripcion"?n(_.target.value):_.target.name==="cantidad"&&i(_.target.value.replace(/[^0-9.]/g,""))},k=_=>{_.preventDefault();let v=parseFloat(r).toFixed(2);e!==""&&r!==""?v?t?G6({id:t.id,categoria:o,descripcion:e,cantidad:r,fecha:eu(a)}).then(()=>{T.push("/lista")}).catch(I=>{console.log(I)}):B6({categoria:o,descripcion:e,cantidad:r,fecha:eu(a),uidUsuario:g.uid}).then(()=>{s("hogar"),n(""),i(""),u(new Date),f(!0),p({tipo:"exito",mensaje:"El gasto fue agregado correctamente."})}).catch(I=>{f(!0),p({tipo:"error",mensaje:"Hubo un problema al intentar agregar el gasto."})}):(f(!0),p({tipo:"error",mensaje:"El valor que ingresaste no es correcto"})):(f(!0),p({tipo:"error",mensaje:"Por favor rellena todos los campos."}))};return b.jsxs(Ay,{onSubmit:k,children:[b.jsxs(_F,{children:[b.jsx(bF,{categoria:o,cambiarCategoria:s}),b.jsx(z6,{fecha:a,cambiarFecha:u})]}),b.jsxs("div",{children:[b.jsx(ho,{type:"text",name:"descripcion",placeholder:"Descripción",value:e,onChange:C}),b.jsx(wF,{type:"text",name:"cantidad",placeholder:"$0.00",value:r,onChange:C})]}),b.jsx(ky,{children:b.jsxs(Dr,{as:"button",primario:!0,conIcono:!0,type:"submit",children:[t?"Editar gasto":"Agregar Gasto",b.jsx(Ni,{icon:vD,style:{marginRight:"5px"}})]})}),b.jsx(Uy,{tipo:h.tipo,mensaje:h.mensaje,estadoAlerta:c,cambiarEstadoAlerta:f})]})},$y=t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t),Ik=()=>{const[t,e]=V.useState([]),{usuario:n}=Cu();return V.useEffect(()=>{const r=eu(Gt(new Date)),i=eu(eh(new Date));if(n){const o=sg(qf(Po,"gastos"),ag("fecha","desc"),pl("fecha",">=",r),pl("fecha","<=",i),pl("uidUsuario","==",n.uid));return lg(o,a=>{e(a.docs.map(u=>({...u.data(),id:u.id})))},a=>{console.log(a)})}},[n]),t},Sk=jt.createContext(),Y6=()=>V.useContext(Sk),K6=({children:t})=>{const[e,n]=V.useState(0),r=Ik();return V.useEffect(()=>{let i=0;r.forEach(o=>{i+=o.cantidad}),n(i)},[r]),b.jsx(Sk.Provider,{value:{total:e},children:t})},Q6=Ee.div`
    background: ${Yt.verde};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`,nh=()=>{const{total:t}=Y6();return b.jsxs(Q6,{children:[b.jsx("p",{children:"Total Gastado en el mes:"}),b.jsx("p",{children:$y(t)})]})},X6=()=>b.jsxs(b.Fragment,{children:[b.jsx(Or,{children:b.jsx("title",{children:"Agregar gasto"})}),b.jsx(na,{children:b.jsxs(gv,{children:[b.jsx(ra,{children:"Agregar gasto"}),b.jsxs(_2,{children:[b.jsx(Dr,{to:"/categorias",children:"Categorias"}),b.jsx(Dr,{to:"/lista",children:"Lista de Gastos"}),b.jsx(yF,{})]})]})}),b.jsx(Tk,{}),b.jsx(nh,{})]});var bk={exports:{}};(function(t){(function(){function e(S,N,B){return S.call.apply(S.bind,arguments)}function n(S,N,B){if(!S)throw Error();if(2<arguments.length){var $=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,$),S.apply(N,q)}}return function(){return S.apply(N,arguments)}}function r(S,N,B){return r=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?e:n,r.apply(null,arguments)}var i=Date.now||function(){return+new Date};function o(S,N){this.a=S,this.o=N||S,this.c=this.o.document}var s=!!window.FontFace;function a(S,N,B,$){if(N=S.c.createElement(N),B)for(var q in B)B.hasOwnProperty(q)&&(q=="style"?N.style.cssText=B[q]:N.setAttribute(q,B[q]));return $&&N.appendChild(S.c.createTextNode($)),N}function u(S,N,B){S=S.c.getElementsByTagName(N)[0],S||(S=document.documentElement),S.insertBefore(B,S.lastChild)}function c(S){S.parentNode&&S.parentNode.removeChild(S)}function f(S,N,B){N=N||[],B=B||[];for(var $=S.className.split(/\s+/),q=0;q<N.length;q+=1){for(var ne=!1,ie=0;ie<$.length;ie+=1)if(N[q]===$[ie]){ne=!0;break}ne||$.push(N[q])}for(N=[],q=0;q<$.length;q+=1){for(ne=!1,ie=0;ie<B.length;ie+=1)if($[q]===B[ie]){ne=!0;break}ne||N.push($[q])}S.className=N.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(S,N){for(var B=S.className.split(/\s+/),$=0,q=B.length;$<q;$++)if(B[$]==N)return!0;return!1}function p(S){return S.o.location.hostname||S.a.location.hostname}function g(S,N,B){function $(){ye&&q&&ne&&(ye(ie),ye=null)}N=a(S,"link",{rel:"stylesheet",href:N,media:"all"});var q=!1,ne=!0,ie=null,ye=B||null;s?(N.onload=function(){q=!0,$()},N.onerror=function(){q=!0,ie=Error("Stylesheet failed to load"),$()}):setTimeout(function(){q=!0,$()},0),u(S,"head",N)}function T(S,N,B,$){var q=S.c.getElementsByTagName("head")[0];if(q){var ne=a(S,"script",{src:N}),ie=!1;return ne.onload=ne.onreadystatechange=function(){ie||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(ie=!0,B&&B(null),ne.onload=ne.onreadystatechange=null,ne.parentNode.tagName=="HEAD"&&q.removeChild(ne))},q.appendChild(ne),setTimeout(function(){ie||(ie=!0,B&&B(Error("Script load timeout")))},$||5e3),ne}return null}function C(){this.a=0,this.c=null}function k(S){return S.a++,function(){S.a--,v(S)}}function _(S,N){S.c=N,v(S)}function v(S){S.a==0&&S.c&&(S.c(),S.c=null)}function I(S){this.a=S||"-"}I.prototype.c=function(S){for(var N=[],B=0;B<arguments.length;B++)N.push(arguments[B].replace(/[\W_]+/g,"").toLowerCase());return N.join(this.a)};function O(S,N){this.c=S,this.f=4,this.a="n";var B=(N||"n4").match(/^([nio])([1-9])$/i);B&&(this.a=B[1],this.f=parseInt(B[2],10))}function j(S){return w(S)+" "+(S.f+"00")+" 300px "+U(S.c)}function U(S){var N=[];S=S.split(/,\s*/);for(var B=0;B<S.length;B++){var $=S[B].replace(/['"]/g,"");$.indexOf(" ")!=-1||/^\d/.test($)?N.push("'"+$+"'"):N.push($)}return N.join(",")}function E(S){return S.a+S.f}function w(S){var N="normal";return S.a==="o"?N="oblique":S.a==="i"&&(N="italic"),N}function A(S){var N=4,B="n",$=null;return S&&(($=S.match(/(normal|oblique|italic)/i))&&$[1]&&(B=$[1].substr(0,1).toLowerCase()),($=S.match(/([1-9]00|normal|bold)/i))&&$[1]&&(/bold/i.test($[1])?N=7:/[1-9]00/.test($[1])&&(N=parseInt($[1].substr(0,1),10)))),B+N}function x(S,N){this.c=S,this.f=S.o.document.documentElement,this.h=N,this.a=new I("-"),this.j=N.events!==!1,this.g=N.classes!==!1}function R(S){S.g&&f(S.f,[S.a.c("wf","loading")]),P(S,"loading")}function D(S){if(S.g){var N=h(S.f,S.a.c("wf","active")),B=[],$=[S.a.c("wf","loading")];N||B.push(S.a.c("wf","inactive")),f(S.f,B,$)}P(S,"inactive")}function P(S,N,B){S.j&&S.h[N]&&(B?S.h[N](B.c,E(B)):S.h[N]())}function ht(){this.c={}}function cn(S,N,B){var $=[],q;for(q in N)if(N.hasOwnProperty(q)){var ne=S.c[q];ne&&$.push(ne(N[q],B))}return $}function Xt(S,N){this.c=S,this.f=N,this.a=a(this.c,"span",{"aria-hidden":"true"},this.f)}function Q(S){u(S.c,"body",S.a)}function F(S){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+U(S.c)+";"+("font-style:"+w(S)+";font-weight:"+(S.f+"00")+";")}function J(S,N,B,$,q,ne){this.g=S,this.j=N,this.a=$,this.c=B,this.f=q||3e3,this.h=ne||void 0}J.prototype.start=function(){var S=this.c.o.document,N=this,B=i(),$=new Promise(function(ie,ye){function Ie(){i()-B>=N.f?ye():S.fonts.load(j(N.a),N.h).then(function(Pe){1<=Pe.length?ie():setTimeout(Ie,25)},function(){ye()})}Ie()}),q=null,ne=new Promise(function(ie,ye){q=setTimeout(ye,N.f)});Promise.race([ne,$]).then(function(){q&&(clearTimeout(q),q=null),N.g(N.a)},function(){N.j(N.a)})};function oe(S,N,B,$,q,ne,ie){this.v=S,this.B=N,this.c=B,this.a=$,this.s=ie||"BESbswy",this.f={},this.w=q||3e3,this.u=ne||null,this.m=this.j=this.h=this.g=null,this.g=new Xt(this.c,this.s),this.h=new Xt(this.c,this.s),this.j=new Xt(this.c,this.s),this.m=new Xt(this.c,this.s),S=new O(this.a.c+",serif",E(this.a)),S=F(S),this.g.a.style.cssText=S,S=new O(this.a.c+",sans-serif",E(this.a)),S=F(S),this.h.a.style.cssText=S,S=new O("serif",E(this.a)),S=F(S),this.j.a.style.cssText=S,S=new O("sans-serif",E(this.a)),S=F(S),this.m.a.style.cssText=S,Q(this.g),Q(this.h),Q(this.j),Q(this.m)}var pe={D:"serif",C:"sans-serif"},de=null;function xe(){if(de===null){var S=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);de=!!S&&(536>parseInt(S[1],10)||parseInt(S[1],10)===536&&11>=parseInt(S[2],10))}return de}oe.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),_t(this)};function xt(S,N,B){for(var $ in pe)if(pe.hasOwnProperty($)&&N===S.f[pe[$]]&&B===S.f[pe[$]])return!0;return!1}function _t(S){var N=S.g.a.offsetWidth,B=S.h.a.offsetWidth,$;($=N===S.f.serif&&B===S.f["sans-serif"])||($=xe()&&xt(S,N,B)),$?i()-S.A>=S.w?xe()&&xt(S,N,B)&&(S.u===null||S.u.hasOwnProperty(S.a.c))?pt(S,S.v):pt(S,S.B):wt(S):pt(S,S.v)}function wt(S){setTimeout(r(function(){_t(this)},S),50)}function pt(S,N){setTimeout(r(function(){c(this.g.a),c(this.h.a),c(this.j.a),c(this.m.a),N(this.a)},S),0)}function xn(S,N,B){this.c=S,this.a=N,this.f=0,this.m=this.j=!1,this.s=B}var Jt=null;xn.prototype.g=function(S){var N=this.a;N.g&&f(N.f,[N.a.c("wf",S.c,E(S).toString(),"active")],[N.a.c("wf",S.c,E(S).toString(),"loading"),N.a.c("wf",S.c,E(S).toString(),"inactive")]),P(N,"fontactive",S),this.m=!0,Rn(this)},xn.prototype.h=function(S){var N=this.a;if(N.g){var B=h(N.f,N.a.c("wf",S.c,E(S).toString(),"active")),$=[],q=[N.a.c("wf",S.c,E(S).toString(),"loading")];B||$.push(N.a.c("wf",S.c,E(S).toString(),"inactive")),f(N.f,$,q)}P(N,"fontinactive",S),Rn(this)};function Rn(S){--S.f==0&&S.j&&(S.m?(S=S.a,S.g&&f(S.f,[S.a.c("wf","active")],[S.a.c("wf","loading"),S.a.c("wf","inactive")]),P(S,"active")):D(S.a))}function Tn(S){this.j=S,this.a=new ht,this.h=0,this.f=this.g=!0}Tn.prototype.load=function(S){this.c=new o(this.j,S.context||this.j),this.g=S.events!==!1,this.f=S.classes!==!1,da(this,new x(this.c,S),S)};function Zt(S,N,B,$,q){var ne=--S.h==0;(S.f||S.g)&&setTimeout(function(){var ie=q||null,ye=$||null||{};if(B.length===0&&ne)D(N.a);else{N.f+=B.length,ne&&(N.j=ne);var Ie,Pe=[];for(Ie=0;Ie<B.length;Ie++){var Ne=B[Ie],at=ye[Ne.c],lt=N.a,pr=Ne;if(lt.g&&f(lt.f,[lt.a.c("wf",pr.c,E(pr).toString(),"loading")]),P(lt,"fontloading",pr),lt=null,Jt===null)if(window.FontFace){var pr=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),jo=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);Jt=pr?42<parseInt(pr[1],10):!jo}else Jt=!1;Jt?lt=new J(r(N.g,N),r(N.h,N),N.c,Ne,N.s,at):lt=new oe(r(N.g,N),r(N.h,N),N.c,Ne,N.s,ie,at),Pe.push(lt)}for(Ie=0;Ie<Pe.length;Ie++)Pe[Ie].start()}},0)}function da(S,N,B){var q=[],$=B.timeout;R(N);var q=cn(S.a,B,S.c),ne=new xn(S.c,N,$);for(S.h=q.length,N=0,B=q.length;N<B;N++)q[N].load(function(ie,ye,Ie){Zt(S,ne,ie,ye,Ie)})}function Vo(S,N){this.c=S,this.a=N}Vo.prototype.load=function(S){function N(){if(ne["__mti_fntLst"+$]){var ie=ne["__mti_fntLst"+$](),ye=[],Ie;if(ie)for(var Pe=0;Pe<ie.length;Pe++){var Ne=ie[Pe].fontfamily;ie[Pe].fontStyle!=null&&ie[Pe].fontWeight!=null?(Ie=ie[Pe].fontStyle+ie[Pe].fontWeight,ye.push(new O(Ne,Ie))):ye.push(new O(Ne))}S(ye)}else setTimeout(function(){N()},50)}var B=this,$=B.a.projectId,q=B.a.version;if($){var ne=B.c.o;T(this.c,(B.a.api||"https://fast.fonts.net/jsapi")+"/"+$+".js"+(q?"?v="+q:""),function(ie){ie?S([]):(ne["__MonotypeConfiguration__"+$]=function(){return B.a},N())}).id="__MonotypeAPIScript__"+$}else S([])};function Fo(S,N){this.c=S,this.a=N}Fo.prototype.load=function(S){var N,B,$=this.a.urls||[],q=this.a.families||[],ne=this.a.testStrings||{},ie=new C;for(N=0,B=$.length;N<B;N++)g(this.c,$[N],k(ie));var ye=[];for(N=0,B=q.length;N<B;N++)if($=q[N].split(":"),$[1])for(var Ie=$[1].split(","),Pe=0;Pe<Ie.length;Pe+=1)ye.push(new O($[0],Ie[Pe]));else ye.push(new O($[0]));_(ie,function(){S(ye,ne)})};function Pu(S,N){S?this.c=S:this.c=rh,this.a=[],this.f=[],this.g=N||""}var rh="https://fonts.googleapis.com/css";function ih(S,N){for(var B=N.length,$=0;$<B;$++){var q=N[$].split(":");q.length==3&&S.f.push(q.pop());var ne="";q.length==2&&q[1]!=""&&(ne=":"),S.a.push(q.join(ne))}}function xu(S){if(S.a.length==0)throw Error("No fonts to load!");if(S.c.indexOf("kit=")!=-1)return S.c;for(var N=S.a.length,B=[],$=0;$<N;$++)B.push(S.a[$].replace(/ /g,"+"));return N=S.c+"?family="+B.join("%7C"),0<S.f.length&&(N+="&subset="+S.f.join(",")),0<S.g.length&&(N+="&text="+encodeURIComponent(S.g)),N}function ha(S){this.f=S,this.a=[],this.c={}}var pa={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},oh={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ma={i:"i",italic:"i",n:"n",normal:"n"},ga=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Ru(S){for(var N=S.f.length,B=0;B<N;B++){var $=S.f[B].split(":"),q=$[0].replace(/\+/g," "),ne=["n4"];if(2<=$.length){var ie,ye=$[1];if(ie=[],ye)for(var ye=ye.split(","),Ie=ye.length,Pe=0;Pe<Ie;Pe++){var Ne;if(Ne=ye[Pe],Ne.match(/^[\w-]+$/)){var at=ga.exec(Ne.toLowerCase());if(at==null)Ne="";else{if(Ne=at[2],Ne=Ne==null||Ne==""?"n":ma[Ne],at=at[1],at==null||at=="")at="4";else var lt=oh[at],at=lt||(isNaN(at)?"4":at.substr(0,1));Ne=[Ne,at].join("")}}else Ne="";Ne&&ie.push(Ne)}0<ie.length&&(ne=ie),$.length==3&&($=$[2],ie=[],$=$?$.split(","):ie,0<$.length&&($=pa[$[0]])&&(S.c[q]=$))}for(S.c[q]||($=pa[q])&&(S.c[q]=$),$=0;$<ne.length;$+=1)S.a.push(new O(q,ne[$]))}}function st(S,N){this.c=S,this.a=N}var Et={Arimo:!0,Cousine:!0,Tinos:!0};st.prototype.load=function(S){var N=new C,B=this.c,$=new Pu(this.a.api,this.a.text),q=this.a.families;ih($,q);var ne=new ha(q);Ru(ne),g(B,xu($),k(N)),_(N,function(){S(ne.a,ne.c,Et)})};function Wi(S,N){this.c=S,this.a=N}Wi.prototype.load=function(S){var N=this.a.id,B=this.c.o;N?T(this.c,(this.a.api||"https://use.typekit.net")+"/"+N+".js",function($){if($)S([]);else if(B.Typekit&&B.Typekit.config&&B.Typekit.config.fn){$=B.Typekit.config.fn;for(var q=[],ne=0;ne<$.length;ne+=2)for(var ie=$[ne],ye=$[ne+1],Ie=0;Ie<ye.length;Ie++)q.push(new O(ie,ye[Ie]));try{B.Typekit.load({events:!1,classes:!1,async:!0})}catch{}S(q)}},2e3):S([])};function va(S,N){this.c=S,this.f=N,this.a=[]}va.prototype.load=function(S){var N=this.f.id,B=this.c.o,$=this;N?(B.__webfontfontdeckmodule__||(B.__webfontfontdeckmodule__={}),B.__webfontfontdeckmodule__[N]=function(q,ne){for(var ie=0,ye=ne.fonts.length;ie<ye;++ie){var Ie=ne.fonts[ie];$.a.push(new O(Ie.name,A("font-weight:"+Ie.weight+";font-style:"+Ie.style)))}S($.a)},T(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+p(this.c)+"/"+N+".js",function(q){q&&S([])})):S([])};var Nn=new Tn(window);Nn.a.c.custom=function(S,N){return new Fo(N,S)},Nn.a.c.fontdeck=function(S,N){return new va(N,S)},Nn.a.c.monotype=function(S,N){return new Vo(N,S)},Nn.a.c.typekit=function(S,N){return new Wi(N,S)},Nn.a.c.google=function(S,N){return new st(N,S)};var Nu={load:r(Nn.load,Nn)};t.exports?t.exports=Nu:(window.WebFont=Nu,window.WebFontConfig&&Nn.load(window.WebFontConfig))})()})(bk);var J6=bk.exports;const Z6=Xs(J6),eU=Ee.div`
    background: #fff;
    width: 90%;
    max-width: 70rem; /*1110px*/
    height: 90vh;
    max-height: 50rem;  /* 800px */
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0.625rem; /* 10px */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 100;
 
    @media(max-width: 60rem){ /* 950px */
        height: 95vh;
        max-height: none;
    }
`,tU=Ee.button`
    display: block;
    width: 3.12rem; /* 50px */
    height: 3.12rem; /* 50px */
    line-height: 3.12rem; /* 50px */
    text-align: center;
    margin-right: 1.25rem; /* 20px */
    border: none;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem; /* 5px */
    cursor: pointer;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`,zy=({ruta:t="/"})=>{const e=Ui();return b.jsx(tU,{onClick:()=>e(t),children:b.jsx(Ni,{icon:mD})})},nU=t=>{const e=Ui(),[n,r]=V.useState("");return V.useEffect(()=>{(async()=>{const o=await J5(zd(Po,"gastos",t));o.exists?r(o):e("/lista")})()},[e,t]),n},rU=()=>{const{id:t}=Y2(),e=nU(t);return b.jsxs(b.Fragment,{children:[b.jsx(Or,{children:b.jsx("title",{children:"Editar Gasto"})}),b.jsxs(na,{children:[b.jsx(zy,{ruta:"/lista"}),b.jsx(ra,{children:"Editar Gasto"})]}),b.jsx(Tk,{gasto:e}),b.jsx(nh,{})]})},iU=()=>{const[t,e]=V.useState([]),n=Ik();return V.useEffect(()=>{const r=n.reduce((i,o)=>{const s=o.categoria,a=o.cantidad;return i[s]+=a,i},{comida:0,"cuentas y pagos":0,hogar:0,transporte:0,ropa:0,"salud e higiene":0,compras:0,diversion:0});e(Object.keys(r).map(i=>({categoria:i,cantidad:r[i]})))},[n,e]),t},oU=Ee.ul`
    list-style: none;
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    overflow-y: auto;
 
    li {
        grid-template-columns: 1fr 1fr 1fr auto;
    }
 
    @media (max-width: 50rem) { /*80px*/
        li {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }
`,sU=Ee.li`
    padding: 1.25rem 0; /* 20px */
    border-bottom: 2px solid #F2F2F2;
    display: grid;
    gap: 0.31rem; /* 5px */
    justify-content: space-between;
 
    & > div {
        width: 100%;
        display: flex;
        align-items: center;
    }
 
    &:hover button,
    &:hover a {
        opacity: 1;
    }
`,aU=Ee.ul`
    list-style: none;
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    overflow-y: auto;
`,lU=Ee.li`
    padding: 1.25rem 0; /* 20px */
    border-bottom: 2px solid #F2F2F2;
    display: flex;
    justify-content: space-between;
`,Ak=Ee.div`
    font-weight: 500;
    font-size: 1.25rem; /* 20px */
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
    svg {
        width: 3.12rem; /* 50px */
        height: auto;
        margin-right: 1.25rem; /* 20px */
        border-radius: 0.62rem; /* 10px */
    }
 
    @media (max-width: 50rem) { /* 80px */
        font-size: 1.12rem;
    }
`,uU=Ee.div`
    justify-content: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    @media (max-width: 50rem) { /* 50px */
        justify-content: end;
    }
`,kk=Ee.div`
    font-size: 1.25rem; /* 20px */
    font-weight: 700;
    justify-content: end;
 
    @media (max-width: 50rem) { /* 80px */
        justify-content: start;
    }
`,cU=Ee.div`
    border-radius: 0.31rem; /* 5px */
    background: ${Yt.azulClaro};
    text-align: center;
    color: #fff;
    padding: 0.62rem 3.12rem; /* 10px 50px */
    display: inline-block;
    margin: 1.25rem 0; /* 20px */
 
    @media (max-width: 50rem) { /* 80px */
        width: 100%;
    }
`,fU=Ee.div`
    @media (max-width: 50rem) { /* 80px */
        justify-content: end;
    }
`,aE=Ee.button`
    outline: none;
    background: ${Yt.grisClaro};
    border: none;
    width: 2.5rem; /* 40px */
    display: inline-block;
    height: 2.5rem; /* 40px */
    line-height: 2.5rem; /* 40px */
    font-size: 16px;
    cursor: pointer;
    border-radius: 0.31rem; /* 5px */
    margin-left: 0.625rem; /* 10px */
    transition: .3s ease all;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
 
    &:hover {
        background: ${Yt.grisClaro2};
    }
 
    svg {
        width: 1.125rem; /* 18px */
    }
 
    @media (max-width: 50rem) { /* 80px */
        opacity: 1;
    }
`,dU=Ee.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,hU=Ee.h3`
    color: ${Yt.grisClaro2};
    font-weight: 400;
    font-size: 40px;
    padding: 2.5rem 0; /* 40px */
`,pU=Ee.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem; /* 40px */
`,mU=Ee.button`
    background: ${Yt.grisClaro};
    border: none;
    border-radius: 7px;
    color: #000;
    font-family: 'Work Sans', sans-serif;
    padding: 1rem 1.87rem; /* 20px 30px */
    
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    transition: .3s ease all;
 
    &:hover {
        background: ${Yt.grisClaro2};
    }
`,gU=()=>{const t=iU();return console.log(t),b.jsxs(b.Fragment,{children:[b.jsx(Or,{children:b.jsx("title",{children:"Gastos por Categoría"})}),b.jsxs(na,{children:[b.jsx(zy,{}),b.jsx(ra,{children:"Gastos por Categoría"})]}),b.jsx(aU,{children:t.map((e,n)=>b.jsxs(lU,{children:[b.jsx(Ak,{children:e.categoria}),b.jsx(kk,{children:$y(e.cantidad)})]},n))}),b.jsx(nh,{})]})},vU=()=>{const t=Ui(),[e,n]=V.useState(""),[r,i]=V.useState(""),[o,s]=V.useState(!1),[a,u]=V.useState({}),c=h=>{h.target.name==="email"?n(h.target.value):h.target.name==="password"&&i(h.target.value)},f=async h=>{if(h.preventDefault(),s(!1),u({}),!/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(e)){s(!0),u({tipo:"error",mensaje:"Por ingresa un correo electrónico valido"});return}if(e===""||r===""){s(!0),u({tipo:"error",mensaje:"Por favor rellena todos los datos"});return}try{await Z3(Zd,e,r),t("/")}catch(g){console.log(g),s(!0);let T;switch(g.code){case"auth/invalid-credential":T="El correo o la contraseña no es correcto.";break;case"auth/user-not-found":T="No se encontro ninguna cuenta con este correo electrónico.";break;default:T="Hubo un error al intentar crear la cuenta.";break}u({tipo:"error",mensaje:T})}};return b.jsxs(b.Fragment,{children:[b.jsx(Or,{children:b.jsx("title",{children:"Iniciar Sesión"})}),b.jsx(na,{children:b.jsxs(gv,{children:[b.jsx(ra,{children:"Iniciar Sesión"}),b.jsx("div",{children:b.jsx(Dr,{to:"/crear-cuenta",children:"Registrarse"})})]})}),b.jsxs(Ay,{onSubmit:f,children:[b.jsx(ho,{type:"email",name:"email",placeholder:"Correo Electronico",value:e,onChange:c}),b.jsx(ho,{type:"password",name:"password",placeholder:"Contraseña",value:r,onChange:c}),b.jsx(ky,{children:b.jsx(Dr,{as:"button",primario:!0,type:"submit",children:"Iniciar Sesión"})})]}),b.jsx(Uy,{tipo:a.tipo,mensaje:a.mensaje,estadoAlerta:o,cambiarEstadoAlerta:s})]})},yU=t=>{const{usuario:e}=Cu(),[n,r]=V.useState([]),[i,o]=V.useState(!1),[s,a]=V.useState(null);return V.useEffect(()=>{const c=sg(qf(Po,"gastos"),pl("uidUsuario","==",e.uid),ag("fecha","desc"),x1(10));return lg(c,h=>{h.docs.length>0?(a(h.docs[h.docs.length-1]),o(!0)):o(!1),r(h.docs.map(p=>({...p.data(),id:p.id})))})},[e]),[n,()=>{if(s){const c=sg(qf(Po,"gastos"),pl("uidUsuario","==",e.uid),ag("fecha","desc"),q5(s),x1(10));lg(c,f=>{f.docs.length>0?(a(f.docs[f.docs.length-1]),r(n.concat(f.docs.map(h=>({...h.data(),id:h.id}))))):o(!1)},f=>{console.log(f)})}},i]},_U=async t=>{await e3(zd(Po,"gastos",t))},wU=()=>{Cu();const[t,e,n]=yU(),r=o=>qr(uk(o),"dd 'de' MMMM 'del' yyyy",{locale:Ny}),i=t.reduce((o,s)=>{const a=r(s.fecha);return o[a]||(o[a]=[]),o[a].push(s),o},{});return b.jsxs(b.Fragment,{children:[b.jsx(Or,{children:b.jsx("title",{children:"Lista de Gastos"})}),b.jsxs(na,{children:[b.jsx(zy,{}),b.jsx(ra,{children:"Lista de Gastos"})]}),b.jsxs(oU,{children:[Object.keys(i).map((o,s)=>b.jsxs("div",{children:[b.jsx(cU,{children:o}),i[o].map(a=>b.jsxs(sU,{children:[b.jsx(Ak,{children:a.categoria}),b.jsx(uU,{children:a.descripcion}),b.jsx(kk,{children:$y(a.cantidad)}),b.jsxs(fU,{children:[b.jsx(aE,{as:bm,to:`/editar/${a.id}`,children:b.jsx(Ni,{icon:pD})}),b.jsx(aE,{onClick:()=>_U(a.id),children:b.jsx(Ni,{icon:yD})})]})]},a.id))]},s)),n&&b.jsx(pU,{children:b.jsx(mU,{onClick:()=>e(),children:"Cargar más"})}),t.length===0&&b.jsxs(dU,{children:[b.jsx(hU,{children:"No hay gastos por mostrar"}),b.jsx(Dr,{as:bm,to:"/",children:"Agregar gasto"})]})]}),b.jsx(nh,{})]})},EU=()=>{const t=Ui(),[e,n]=V.useState(""),[r,i]=V.useState(""),[o,s]=V.useState(""),[a,u]=V.useState(!1),[c,f]=V.useState({}),h=g=>{switch(g.target.name){case"email":n(g.target.value);break;case"password":i(g.target.value);break;case"password2":s(g.target.value);break}},p=async g=>{if(g.preventDefault(),u(!1),f({}),!/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(e)){u(!0),f({tipo:"error",mensaje:"Por favor ingrese un correo electrónico valido"});return}if(e===""||r===""||o===""){u(!0),f({tipo:"error",mensaje:"Por favor rellena todos los datos"});return}if(r!==o){u(!0),f({tipo:"error",mensaje:"Las contraseñas no son iguales"});return}try{await J3(Zd,e,r),t("/")}catch(C){u(!0);let k;switch(C.code){case"auth/invalid-password":k="La contraseña tiene que ser de al menos 6 caracteres.";break;case"auth/email-already-in-use":k="Ya existe una cuenta con el correo electrónico proporcionado.";break;case"auth/invalid-email":k="El correo electrónico no es válido.";break;default:k="Hubo un error al intentar crear la cuenta.";break}f({tipo:"error",mensaje:k})}};return b.jsxs(b.Fragment,{children:[b.jsx(Or,{children:b.jsx("title",{children:"Crear cuenta"})}),b.jsx(na,{children:b.jsxs(gv,{children:[b.jsx(ra,{children:"Crear cuenta "}),b.jsx("div",{children:b.jsx(Dr,{to:"/iniciar-sesion",children:"Iniciar Sesión "})})]})}),b.jsxs(Ay,{onSubmit:p,children:[b.jsx(ho,{type:"email",name:"email",placeholder:"Correo Electronico",value:e,onChange:h}),b.jsx(ho,{type:"password",name:"password",placeholder:"Contraseña",value:r,onChange:h}),b.jsx(ho,{type:"password",name:"password2",placeholder:"Repetir la Contraseña",value:o,onChange:h}),b.jsx(ky,{children:b.jsx(Dr,{as:"button",primario:!0,type:"submit",children:"Crear cuenta"})})]}),b.jsx(Uy,{tipo:c.tipo,mensaje:c.mensaje,estadoAlerta:a,cambiarEstadoAlerta:u})]})},TU="/favicon.ico",IU="/assets/puntos-DJ44Rc9k.svg",SU=({children:t})=>{const e={margin:0,padding:0,minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0",position:"relative"},n={width:"90%",height:"90%",maxWidth:"90vw",maxHeight:"90vh",overflow:"auto",position:"relative",zIndex:1,display:"flex",justifyContent:"center",alignItems:"center"},r={content:`url(${IU})`,position:"absolute",width:"9vw",height:"9vw",zIndex:2},i={...r,top:"0",left:"0"},o={...r,bottom:"0",right:"0"};return b.jsxs("div",{style:e,children:[b.jsx("div",{style:i}),b.jsx("div",{style:o}),b.jsx("div",{style:n,children:t})]})},bc=({children:t})=>{const{usuario:e}=Cu();return e?t:b.jsx(aN,{replace:!0,to:"/iniciar-sesion"})};Z6.load({google:{families:["Work Sans:400,500,700","sans-serif"]}});yp.createRoot(document.getElementById("root")).render(b.jsx(jt.StrictMode,{children:b.jsxs(b.Fragment,{children:[b.jsx(Or,{children:b.jsx("link",{rel:"icon",href:TU,type:"image/x-icon"})}),b.jsx(W6,{children:b.jsx(SU,{children:b.jsx(K6,{children:b.jsx(gN,{children:b.jsx(eU,{children:b.jsxs(uN,{children:[b.jsx(Qi,{path:"/iniciar-sesion",element:b.jsx(vU,{})}),b.jsx(Qi,{path:"/crear-cuenta",element:b.jsx(EU,{})}),b.jsx(Qi,{path:"/categorias",element:b.jsx(bc,{children:b.jsx(gU,{})})}),b.jsx(Qi,{path:"/lista",element:b.jsx(bc,{children:b.jsx(wU,{})})}),b.jsx(Qi,{path:"/editar/:id",element:b.jsx(bc,{children:b.jsx(rU,{})})}),b.jsx(Qi,{path:"/",element:b.jsx(bc,{children:b.jsx(X6,{})})})]})})})})})})]})}));
