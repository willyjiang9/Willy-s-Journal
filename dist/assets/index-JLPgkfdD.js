(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function XE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ly={exports:{}},wu={},My={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),JE=Symbol.for("react.portal"),ZE=Symbol.for("react.fragment"),eT=Symbol.for("react.strict_mode"),tT=Symbol.for("react.profiler"),nT=Symbol.for("react.provider"),rT=Symbol.for("react.context"),iT=Symbol.for("react.forward_ref"),sT=Symbol.for("react.suspense"),oT=Symbol.for("react.memo"),aT=Symbol.for("react.lazy"),im=Symbol.iterator;function lT(t){return t===null||typeof t!="object"?null:(t=im&&t[im]||t["@@iterator"],typeof t=="function"?t:null)}var Fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,jy={};function ms(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Fy}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zy(){}zy.prototype=ms.prototype;function Td(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Fy}var Id=Td.prototype=new zy;Id.constructor=Td;Uy(Id,ms.prototype);Id.isPureReactComponent=!0;var sm=Array.isArray,By=Object.prototype.hasOwnProperty,Sd={current:null},$y={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)By.call(e,r)&&!$y.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xo,type:t,key:s,ref:o,props:i,_owner:Sd.current}}function uT(t,e){return{$$typeof:Xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xo}function cT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var om=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cT(""+t.key):e.toString(36)}function fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xo:case JE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yc(o,0):r,sm(i)?(n="",t!=null&&(n=t.replace(om,"$&/")+"/"),fl(i,e,n,"",function(h){return h})):i!=null&&(kd(i)&&(i=uT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(om,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+yc(s,l);o+=fl(s,e,n,u,i)}else if(u=lT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+yc(s,l++),o+=fl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var r=[],i=0;return fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},pl={transition:null},dT={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Sd};function Hy(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=ms;se.Fragment=ZE;se.Profiler=tT;se.PureComponent=Td;se.StrictMode=eT;se.Suspense=sT;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dT;se.act=Hy;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Uy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)By.call(e,u)&&!$y.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Xo,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:rT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nT,_context:t},t.Consumer=t};se.createElement=Wy;se.createFactory=function(t){var e=Wy.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:iT,render:t}};se.isValidElement=kd;se.lazy=function(t){return{$$typeof:aT,_payload:{_status:-1,_result:t},_init:hT}};se.memo=function(t,e){return{$$typeof:oT,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};se.unstable_act=Hy;se.useCallback=function(t,e){return mt.current.useCallback(t,e)};se.useContext=function(t){return mt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};se.useEffect=function(t,e){return mt.current.useEffect(t,e)};se.useId=function(){return mt.current.useId()};se.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return mt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};se.useRef=function(t){return mt.current.useRef(t)};se.useState=function(t){return mt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return mt.current.useTransition()};se.version="18.3.1";My.exports=se;var J=My.exports;const fT=XE(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT=J,mT=Symbol.for("react.element"),gT=Symbol.for("react.fragment"),yT=Object.prototype.hasOwnProperty,_T=pT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vT={key:!0,ref:!0,__self:!0,__source:!0};function qy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yT.call(e,r)&&!vT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mT,type:t,key:s,ref:o,props:i,_owner:_T.current}}wu.Fragment=gT;wu.jsx=qy;wu.jsxs=qy;Ly.exports=wu;var _=Ly.exports,nh={},Ky={exports:{}},bt={},Gy={exports:{}},Qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var ee=$.length;$.push(Y);e:for(;0<ee;){var me=ee-1>>>1,re=$[me];if(0<i(re,Y))$[me]=Y,$[ee]=re,ee=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],ee=$.pop();if(ee!==Y){$[0]=ee;e:for(var me=0,re=$.length,Ie=re>>>1;me<Ie;){var Wt=2*(me+1)-1,St=$[Wt],kt=Wt+1,yt=$[kt];if(0>i(St,ee))kt<re&&0>i(yt,St)?($[me]=yt,$[kt]=ee,me=kt):($[me]=St,$[Wt]=ee,me=Wt);else if(kt<re&&0>i(yt,ee))$[me]=yt,$[kt]=ee,me=kt;else break e}}return Y}function i($,Y){var ee=$.sortIndex-Y.sortIndex;return ee!==0?ee:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,S=!1,C=!1,D=!1,V=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=$)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function O($){if(D=!1,A($),!C)if(n(u)!==null)C=!0,Wn(z);else{var Y=n(h);Y!==null&&Vt(O,Y.startTime-$)}}function z($,Y){C=!1,D&&(D=!1,k(y),y=-1),S=!0;var ee=g;try{for(A(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||$&&!R());){var me=m.callback;if(typeof me=="function"){m.callback=null,g=m.priorityLevel;var re=me(m.expirationTime<=Y);Y=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(u)&&r(u),A(Y)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var Wt=n(h);Wt!==null&&Vt(O,Wt.startTime-Y),Ie=!1}return Ie}finally{m=null,g=ee,S=!1}}var j=!1,E=null,y=-1,w=5,T=-1;function R(){return!(t.unstable_now()-T<w)}function P(){if(E!==null){var $=t.unstable_now();T=$;var Y=!0;try{Y=E(!0,$)}finally{Y?I():(j=!1,E=null)}}else j=!1}var I;if(typeof v=="function")I=function(){v(P)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,sn=et.port2;et.port1.onmessage=P,I=function(){sn.postMessage(null)}}else I=function(){V(P,0)};function Wn($){E=$,j||(j=!0,I())}function Vt($,Y){y=V(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,Wn(z))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var ee=g;g=Y;try{return $()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=g;g=$;try{return Y()}finally{g=ee}},t.unstable_scheduleCallback=function($,Y,ee){var me=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?me+ee:me):ee=me,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ee+re,$={id:f++,callback:Y,priorityLevel:$,startTime:ee,expirationTime:re,sortIndex:-1},ee>me?($.sortIndex=ee,e(h,$),n(u)===null&&$===n(h)&&(D?(k(y),y=-1):D=!0,Vt(O,ee-me))):($.sortIndex=re,e(u,$),C||S||(C=!0,Wn(z))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Y=g;return function(){var ee=g;g=Y;try{return $.apply(this,arguments)}finally{g=ee}}}})(Qy);Gy.exports=Qy;var wT=Gy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ET=J,Dt=wT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yy=new Set,Io={};function ui(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Io[t]=e,t=0;t<e.length;t++)Yy.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,TT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,am={},lm={};function IT(t){return rh.call(lm,t)?!0:rh.call(am,t)?!1:TT.test(t)?lm[t]=!0:(am[t]=!0,!1)}function ST(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kT(t,e,n,r){if(e===null||typeof e>"u"||ST(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ad,Rd);Je[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ad,Rd);Je[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ad,Rd);Je[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cd(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kT(e,n,i,r)&&(n=null),r||i===null?IT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=ET.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Di=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),Xy=Symbol.for("react.provider"),Jy=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),um=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,_c;function Ys(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var vc=!1;function wc(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function AT(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bi:return"Fragment";case Di:return"Portal";case ih:return"Profiler";case Pd:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jy:return(t.displayName||"Context")+".Consumer";case Xy:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nd:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function RT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CT(t){var e=e_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=CT(t))}function t_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n_(t,e){e=e.checked,e!=null&&Cd(t,"checked",e,!1)}function uh(t,e){n_(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&ch(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ch(t,e,n){(e!=="number"||Vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function Wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Xs(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function r_(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,s_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PT=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){PT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function o_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function a_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xT=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(xT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,Hi=null,qi=null;function pm(t){if(t=ea(t)){if(typeof gh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ku(e),gh(t.stateNode,t.type,e))}}function l_(t){Hi?qi?qi.push(t):qi=[t]:Hi=t}function u_(){if(Hi){var t=Hi,e=qi;if(qi=Hi=null,pm(t),e)for(t=0;t<e.length;t++)pm(e[t])}}function c_(t,e){return t(e)}function h_(){}var Ec=!1;function d_(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return c_(t,e,n)}finally{Ec=!1,(Hi!==null||qi!==null)&&(h_(),u_())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var yh=!1;if(Vn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){yh=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{yh=!1}function NT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var ao=!1,Ll=null,Ml=!1,_h=null,DT={onError:function(t){ao=!0,Ll=t}};function bT(t,e,n,r,i,s,o,l,u){ao=!1,Ll=null,NT.apply(DT,arguments)}function OT(t,e,n,r,i,s,o,l,u){if(bT.apply(this,arguments),ao){if(ao){var h=Ll;ao=!1,Ll=null}else throw Error(U(198));Ml||(Ml=!0,_h=h)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mm(t){if(ci(t)!==t)throw Error(U(188))}function VT(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mm(i),t;if(s===r)return mm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function p_(t){return t=VT(t),t!==null?m_(t):null}function m_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m_(t);if(e!==null)return e;t=t.sibling}return null}var g_=Dt.unstable_scheduleCallback,gm=Dt.unstable_cancelCallback,LT=Dt.unstable_shouldYield,MT=Dt.unstable_requestPaint,Oe=Dt.unstable_now,FT=Dt.unstable_getCurrentPriorityLevel,bd=Dt.unstable_ImmediatePriority,y_=Dt.unstable_UserBlockingPriority,Fl=Dt.unstable_NormalPriority,UT=Dt.unstable_LowPriority,__=Dt.unstable_IdlePriority,Eu=null,cn=null;function jT(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:$T,zT=Math.log,BT=Math.LN2;function $T(t){return t>>>=0,t===0?32:31-(zT(t)/BT|0)|0}var Wa=64,Ha=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Js(l):(s&=o,s!==0&&(r=Js(s)))}else o=n&~i,o!==0?r=Js(o):s!==0&&(r=Js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function WT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=WT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function qT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function w_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E_,Vd,T_,I_,S_,wh=!1,qa=[],ar=null,lr=null,ur=null,Ao=new Map,Ro=new Map,Jn=[],KT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ym(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GT(t,e,n,r,i){switch(e){case"focusin":return ar=Bs(ar,t,e,n,r,i),!0;case"dragenter":return lr=Bs(lr,t,e,n,r,i),!0;case"mouseover":return ur=Bs(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,Bs(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,Bs(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function k_(t){var e=Br(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=f_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=ea(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function _m(t,e,n){ml(t)&&n.delete(e)}function QT(){wh=!1,ar!==null&&ml(ar)&&(ar=null),lr!==null&&ml(lr)&&(lr=null),ur!==null&&ml(ur)&&(ur=null),Ao.forEach(_m),Ro.forEach(_m)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,wh||(wh=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,QT)))}function Co(t){function e(i){return $s(i,t)}if(0<qa.length){$s(qa[0],t);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&$s(ar,t),lr!==null&&$s(lr,t),ur!==null&&$s(ur,t),Ao.forEach(e),Ro.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)k_(n),n.blockedOn===null&&Jn.shift()}var Ki=$n.ReactCurrentBatchConfig,jl=!0;function YT(t,e,n,r){var i=de,s=Ki.transition;Ki.transition=null;try{de=1,Ld(t,e,n,r)}finally{de=i,Ki.transition=s}}function XT(t,e,n,r){var i=de,s=Ki.transition;Ki.transition=null;try{de=4,Ld(t,e,n,r)}finally{de=i,Ki.transition=s}}function Ld(t,e,n,r){if(jl){var i=Eh(t,e,n,r);if(i===null)Dc(t,e,r,zl,n),ym(t,r);else if(GT(i,t,e,n,r))r.stopPropagation();else if(ym(t,r),e&4&&-1<KT.indexOf(t)){for(;i!==null;){var s=ea(i);if(s!==null&&E_(s),s=Eh(t,e,n,r),s===null&&Dc(t,e,r,zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dc(t,e,r,null,n)}}var zl=null;function Eh(t,e,n,r){if(zl=null,t=Dd(r),t=Br(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function A_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FT()){case bd:return 1;case y_:return 4;case Fl:case UT:return 16;case __:return 536870912;default:return 16}default:return 16}}var ir=null,Md=null,gl=null;function R_(){if(gl)return gl;var t,e=Md,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function vm(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:vm,this.isPropagationStopped=vm,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Ot(gs),Zo=Ae({},gs,{view:0,detail:0}),JT=Ot(Zo),Ic,Sc,Ws,Tu=Ae({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Ic=t.screenX-Ws.screenX,Sc=t.screenY-Ws.screenY):Sc=Ic=0,Ws=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),wm=Ot(Tu),ZT=Ae({},Tu,{dataTransfer:0}),eI=Ot(ZT),tI=Ae({},Zo,{relatedTarget:0}),kc=Ot(tI),nI=Ae({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),rI=Ot(nI),iI=Ae({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sI=Ot(iI),oI=Ae({},gs,{data:0}),Em=Ot(oI),aI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uI[t])?!!e[t]:!1}function Ud(){return cI}var hI=Ae({},Zo,{key:function(t){if(t.key){var e=aI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dI=Ot(hI),fI=Ae({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Ot(fI),pI=Ae({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),mI=Ot(pI),gI=Ae({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),yI=Ot(gI),_I=Ae({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vI=Ot(_I),wI=[9,13,27,32],jd=Vn&&"CompositionEvent"in window,lo=null;Vn&&"documentMode"in document&&(lo=document.documentMode);var EI=Vn&&"TextEvent"in window&&!lo,C_=Vn&&(!jd||lo&&8<lo&&11>=lo),Im=" ",Sm=!1;function P_(t,e){switch(t){case"keyup":return wI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function TI(t,e){switch(t){case"compositionend":return x_(e);case"keypress":return e.which!==32?null:(Sm=!0,Im);case"textInput":return t=e.data,t===Im&&Sm?null:t;default:return null}}function II(t,e){if(Oi)return t==="compositionend"||!jd&&P_(t,e)?(t=R_(),gl=Md=ir=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C_&&e.locale!=="ko"?null:e.data;default:return null}}var SI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SI[t.type]:e==="textarea"}function N_(t,e,n,r){l_(r),e=Bl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,Po=null;function kI(t){B_(t,0)}function Iu(t){var e=Mi(t);if(t_(e))return t}function AI(t,e){if(t==="change")return e}var D_=!1;if(Vn){var Ac;if(Vn){var Rc="oninput"in document;if(!Rc){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),Rc=typeof Am.oninput=="function"}Ac=Rc}else Ac=!1;D_=Ac&&(!document.documentMode||9<document.documentMode)}function Rm(){uo&&(uo.detachEvent("onpropertychange",b_),Po=uo=null)}function b_(t){if(t.propertyName==="value"&&Iu(Po)){var e=[];N_(e,Po,t,Dd(t)),d_(kI,e)}}function RI(t,e,n){t==="focusin"?(Rm(),uo=e,Po=n,uo.attachEvent("onpropertychange",b_)):t==="focusout"&&Rm()}function CI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(Po)}function PI(t,e){if(t==="click")return Iu(e)}function xI(t,e){if(t==="input"||t==="change")return Iu(e)}function NI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:NI;function xo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rh.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,e){var n=Cm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cm(n)}}function O_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(){for(var t=window,e=Vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vl(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DI(t){var e=V_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O_(n.ownerDocument.documentElement,n)){if(r!==null&&zd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pm(n,s);var o=Pm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bI=Vn&&"documentMode"in document&&11>=document.documentMode,Vi=null,Th=null,co=null,Ih=!1;function xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||Vi==null||Vi!==Vl(r)||(r=Vi,"selectionStart"in r&&zd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&xo(co,r)||(co=r,r=Bl(Th,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vi)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Li={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Cc={},L_={};Vn&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Li.animationend.animation,delete Li.animationiteration.animation,delete Li.animationstart.animation),"TransitionEvent"in window||delete Li.transitionend.transition);function Su(t){if(Cc[t])return Cc[t];if(!Li[t])return t;var e=Li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return Cc[t]=e[n];return t}var M_=Su("animationend"),F_=Su("animationiteration"),U_=Su("animationstart"),j_=Su("transitionend"),z_=new Map,Nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){z_.set(t,e),ui(e,[t])}for(var Pc=0;Pc<Nm.length;Pc++){var xc=Nm[Pc],OI=xc.toLowerCase(),VI=xc[0].toUpperCase()+xc.slice(1);Sr(OI,"on"+VI)}Sr(M_,"onAnimationEnd");Sr(F_,"onAnimationIteration");Sr(U_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(j_,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zs));function Dm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OT(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Dm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Dm(i,l,h),s=u}}}if(Ml)throw t=_h,Ml=!1,_h=null,t}function ve(t,e){var n=e[Ch];n===void 0&&(n=e[Ch]=new Set);var r=t+"__bubble";n.has(r)||($_(e,t,2,!1),n.add(r))}function Nc(t,e,n){var r=0;e&&(r|=4),$_(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[Qa]){t[Qa]=!0,Yy.forEach(function(n){n!=="selectionchange"&&(LI.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,Nc("selectionchange",!1,e))}}function $_(t,e,n,r){switch(A_(e)){case 1:var i=YT;break;case 4:i=XT;break;default:i=Ld}n=i.bind(null,e,n,t),i=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}d_(function(){var h=s,f=Dd(n),m=[];e:{var g=z_.get(t);if(g!==void 0){var S=Fd,C=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":S=dI;break;case"focusin":C="focus",S=kc;break;case"focusout":C="blur",S=kc;break;case"beforeblur":case"afterblur":S=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=eI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=mI;break;case M_:case F_:case U_:S=rI;break;case j_:S=yI;break;case"scroll":S=JT;break;case"wheel":S=vI;break;case"copy":case"cut":case"paste":S=sI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Tm}var D=(e&4)!==0,V=!D&&t==="scroll",k=D?g!==null?g+"Capture":null:g;D=[];for(var v=h,A;v!==null;){A=v;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,k!==null&&(O=ko(v,k),O!=null&&D.push(Do(v,O,A)))),V)break;v=v.return}0<D.length&&(g=new S(g,C,null,n,f),m.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==mh&&(C=n.relatedTarget||n.fromElement)&&(Br(C)||C[Ln]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=h,C=C?Br(C):null,C!==null&&(V=ci(C),C!==V||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=h),S!==C)){if(D=wm,O="onMouseLeave",k="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=Tm,O="onPointerLeave",k="onPointerEnter",v="pointer"),V=S==null?g:Mi(S),A=C==null?g:Mi(C),g=new D(O,v+"leave",S,n,f),g.target=V,g.relatedTarget=A,O=null,Br(f)===h&&(D=new D(k,v+"enter",C,n,f),D.target=A,D.relatedTarget=V,O=D),V=O,S&&C)t:{for(D=S,k=C,v=0,A=D;A;A=Ci(A))v++;for(A=0,O=k;O;O=Ci(O))A++;for(;0<v-A;)D=Ci(D),v--;for(;0<A-v;)k=Ci(k),A--;for(;v--;){if(D===k||k!==null&&D===k.alternate)break t;D=Ci(D),k=Ci(k)}D=null}else D=null;S!==null&&bm(m,g,S,D,!1),C!==null&&V!==null&&bm(m,V,C,D,!0)}}e:{if(g=h?Mi(h):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var z=AI;else if(km(g))if(D_)z=xI;else{z=CI;var j=RI}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=PI);if(z&&(z=z(t,h))){N_(m,z,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&ch(g,"number",g.value)}switch(j=h?Mi(h):window,t){case"focusin":(km(j)||j.contentEditable==="true")&&(Vi=j,Th=h,co=null);break;case"focusout":co=Th=Vi=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,xm(m,n,f);break;case"selectionchange":if(bI)break;case"keydown":case"keyup":xm(m,n,f)}var E;if(jd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Oi?P_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(C_&&n.locale!=="ko"&&(Oi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Oi&&(E=R_()):(ir=f,Md="value"in ir?ir.value:ir.textContent,Oi=!0)),j=Bl(h,y),0<j.length&&(y=new Em(y,t,null,n,f),m.push({event:y,listeners:j}),E?y.data=E:(E=x_(n),E!==null&&(y.data=E)))),(E=EI?TI(t,n):II(t,n))&&(h=Bl(h,"onBeforeInput"),0<h.length&&(f=new Em("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}B_(m,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(t,n),s!=null&&r.unshift(Do(t,s,i)),s=ko(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function Ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ko(n,s),u!=null&&o.unshift(Do(n,u,l))):i||(u=ko(n,s),u!=null&&o.push(Do(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MI=/\r\n?/g,FI=/\u0000|\uFFFD/g;function Om(t){return(typeof t=="string"?t:""+t).replace(MI,`
`).replace(FI,"")}function Ya(t,e,n){if(e=Om(e),Om(t)!==e&&n)throw Error(U(425))}function $l(){}var Sh=null,kh=null;function Ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,UI=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,jI=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(t){return Vm.resolve(null).then(t).catch(zI)}:Rh;function zI(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),ln="__reactFiber$"+ys,bo="__reactProps$"+ys,Ln="__reactContainer$"+ys,Ch="__reactEvents$"+ys,BI="__reactListeners$"+ys,$I="__reactHandles$"+ys;function Br(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lm(t);t!==null;){if(n=t[ln])return n;t=Lm(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[ln]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ku(t){return t[bo]||null}var Ph=[],Fi=-1;function kr(t){return{current:t}}function Ee(t){0>Fi||(t.current=Ph[Fi],Ph[Fi]=null,Fi--)}function ye(t,e){Fi++,Ph[Fi]=t.current,t.current=e}var vr={},ut=kr(vr),Et=kr(!1),Xr=vr;function ts(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function Wl(){Ee(Et),Ee(ut)}function Mm(t,e,n){if(ut.current!==vr)throw Error(U(168));ye(ut,e),ye(Et,n)}function W_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,RT(t)||"Unknown",i));return Ae({},n,r)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Xr=ut.current,ye(ut,t),ye(Et,Et.current),!0}function Fm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=W_(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Et),Ee(ut),ye(ut,t)):Ee(Et),ye(Et,n)}var kn=null,Au=!1,Oc=!1;function H_(t){kn===null?kn=[t]:kn.push(t)}function WI(t){Au=!0,H_(t)}function Ar(){if(!Oc&&kn!==null){Oc=!0;var t=0,e=de;try{var n=kn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Au=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),g_(bd,Ar),i}finally{de=e,Oc=!1}}return null}var Ui=[],ji=0,ql=null,Kl=0,Lt=[],Mt=0,Jr=null,Rn=1,Cn="";function Ur(t,e){Ui[ji++]=Kl,Ui[ji++]=ql,ql=t,Kl=e}function q_(t,e,n){Lt[Mt++]=Rn,Lt[Mt++]=Cn,Lt[Mt++]=Jr,Jr=t;var r=Rn;t=Cn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-Jt(e)+i|n<<i|r,Cn=s+t}else Rn=1<<s|n<<i|r,Cn=t}function Bd(t){t.return!==null&&(Ur(t,1),q_(t,1,0))}function $d(t){for(;t===ql;)ql=Ui[--ji],Ui[ji]=null,Kl=Ui[--ji],Ui[ji]=null;for(;t===Jr;)Jr=Lt[--Mt],Lt[Mt]=null,Cn=Lt[--Mt],Lt[Mt]=null,Rn=Lt[--Mt],Lt[Mt]=null}var Nt=null,Ct=null,Te=!1,Yt=null;function K_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Ct=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Rn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Ct=null,!0):!1;default:return!1}}function xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nh(t){if(Te){var e=Ct;if(e){var n=e;if(!Um(t,e)){if(xh(t))throw Error(U(418));e=cr(n.nextSibling);var r=Nt;e&&Um(t,e)?K_(r,n):(t.flags=t.flags&-4097|2,Te=!1,Nt=t)}}else{if(xh(t))throw Error(U(418));t.flags=t.flags&-4097|2,Te=!1,Nt=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Xa(t){if(t!==Nt)return!1;if(!Te)return jm(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ah(t.type,t.memoizedProps)),e&&(e=Ct)){if(xh(t))throw G_(),Error(U(418));for(;e;)K_(t,e),e=cr(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Nt?cr(t.stateNode.nextSibling):null;return!0}function G_(){for(var t=Ct;t;)t=cr(t.nextSibling)}function ns(){Ct=Nt=null,Te=!1}function Wd(t){Yt===null?Yt=[t]:Yt.push(t)}var HI=$n.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zm(t){var e=t._init;return e(t._payload)}function Q_(t){function e(k,v){if(t){var A=k.deletions;A===null?(k.deletions=[v],k.flags|=16):A.push(v)}}function n(k,v){if(!t)return null;for(;v!==null;)e(k,v),v=v.sibling;return null}function r(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function i(k,v){return k=pr(k,v),k.index=0,k.sibling=null,k}function s(k,v,A){return k.index=A,t?(A=k.alternate,A!==null?(A=A.index,A<v?(k.flags|=2,v):A):(k.flags|=2,v)):(k.flags|=1048576,v)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,v,A,O){return v===null||v.tag!==6?(v=zc(A,k.mode,O),v.return=k,v):(v=i(v,A),v.return=k,v)}function u(k,v,A,O){var z=A.type;return z===bi?f(k,v,A.props.children,O,A.key):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yn&&zm(z)===v.type)?(O=i(v,A.props),O.ref=Hs(k,v,A),O.return=k,O):(O=Sl(A.type,A.key,A.props,null,k.mode,O),O.ref=Hs(k,v,A),O.return=k,O)}function h(k,v,A,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Bc(A,k.mode,O),v.return=k,v):(v=i(v,A.children||[]),v.return=k,v)}function f(k,v,A,O,z){return v===null||v.tag!==7?(v=Gr(A,k.mode,O,z),v.return=k,v):(v=i(v,A),v.return=k,v)}function m(k,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zc(""+v,k.mode,A),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return A=Sl(v.type,v.key,v.props,null,k.mode,A),A.ref=Hs(k,null,v),A.return=k,A;case Di:return v=Bc(v,k.mode,A),v.return=k,v;case Yn:var O=v._init;return m(k,O(v._payload),A)}if(Xs(v)||js(v))return v=Gr(v,k.mode,A,null),v.return=k,v;Ja(k,v)}return null}function g(k,v,A,O){var z=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:l(k,v,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case za:return A.key===z?u(k,v,A,O):null;case Di:return A.key===z?h(k,v,A,O):null;case Yn:return z=A._init,g(k,v,z(A._payload),O)}if(Xs(A)||js(A))return z!==null?null:f(k,v,A,O,null);Ja(k,A)}return null}function S(k,v,A,O,z){if(typeof O=="string"&&O!==""||typeof O=="number")return k=k.get(A)||null,l(v,k,""+O,z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case za:return k=k.get(O.key===null?A:O.key)||null,u(v,k,O,z);case Di:return k=k.get(O.key===null?A:O.key)||null,h(v,k,O,z);case Yn:var j=O._init;return S(k,v,A,j(O._payload),z)}if(Xs(O)||js(O))return k=k.get(A)||null,f(v,k,O,z,null);Ja(v,O)}return null}function C(k,v,A,O){for(var z=null,j=null,E=v,y=v=0,w=null;E!==null&&y<A.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var T=g(k,E,A[y],O);if(T===null){E===null&&(E=w);break}t&&E&&T.alternate===null&&e(k,E),v=s(T,v,y),j===null?z=T:j.sibling=T,j=T,E=w}if(y===A.length)return n(k,E),Te&&Ur(k,y),z;if(E===null){for(;y<A.length;y++)E=m(k,A[y],O),E!==null&&(v=s(E,v,y),j===null?z=E:j.sibling=E,j=E);return Te&&Ur(k,y),z}for(E=r(k,E);y<A.length;y++)w=S(E,k,y,A[y],O),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),v=s(w,v,y),j===null?z=w:j.sibling=w,j=w);return t&&E.forEach(function(R){return e(k,R)}),Te&&Ur(k,y),z}function D(k,v,A,O){var z=js(A);if(typeof z!="function")throw Error(U(150));if(A=z.call(A),A==null)throw Error(U(151));for(var j=z=null,E=v,y=v=0,w=null,T=A.next();E!==null&&!T.done;y++,T=A.next()){E.index>y?(w=E,E=null):w=E.sibling;var R=g(k,E,T.value,O);if(R===null){E===null&&(E=w);break}t&&E&&R.alternate===null&&e(k,E),v=s(R,v,y),j===null?z=R:j.sibling=R,j=R,E=w}if(T.done)return n(k,E),Te&&Ur(k,y),z;if(E===null){for(;!T.done;y++,T=A.next())T=m(k,T.value,O),T!==null&&(v=s(T,v,y),j===null?z=T:j.sibling=T,j=T);return Te&&Ur(k,y),z}for(E=r(k,E);!T.done;y++,T=A.next())T=S(E,k,y,T.value,O),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=s(T,v,y),j===null?z=T:j.sibling=T,j=T);return t&&E.forEach(function(P){return e(k,P)}),Te&&Ur(k,y),z}function V(k,v,A,O){if(typeof A=="object"&&A!==null&&A.type===bi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case za:e:{for(var z=A.key,j=v;j!==null;){if(j.key===z){if(z=A.type,z===bi){if(j.tag===7){n(k,j.sibling),v=i(j,A.props.children),v.return=k,k=v;break e}}else if(j.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yn&&zm(z)===j.type){n(k,j.sibling),v=i(j,A.props),v.ref=Hs(k,j,A),v.return=k,k=v;break e}n(k,j);break}else e(k,j);j=j.sibling}A.type===bi?(v=Gr(A.props.children,k.mode,O,A.key),v.return=k,k=v):(O=Sl(A.type,A.key,A.props,null,k.mode,O),O.ref=Hs(k,v,A),O.return=k,k=O)}return o(k);case Di:e:{for(j=A.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(k,v.sibling),v=i(v,A.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else e(k,v);v=v.sibling}v=Bc(A,k.mode,O),v.return=k,k=v}return o(k);case Yn:return j=A._init,V(k,v,j(A._payload),O)}if(Xs(A))return C(k,v,A,O);if(js(A))return D(k,v,A,O);Ja(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(k,v.sibling),v=i(v,A),v.return=k,k=v):(n(k,v),v=zc(A,k.mode,O),v.return=k,k=v),o(k)):n(k,v)}return V}var rs=Q_(!0),Y_=Q_(!1),Gl=kr(null),Ql=null,zi=null,Hd=null;function qd(){Hd=zi=Ql=null}function Kd(t){var e=Gl.current;Ee(Gl),t._currentValue=e}function Dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){Ql=t,Hd=zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},zi===null){if(Ql===null)throw Error(U(308));zi=t,Ql.dependencies={lanes:0,firstContext:t}}else zi=zi.next=t;return e}var $r=null;function Gd(t){$r===null?$r=[t]:$r.push(t)}function X_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function Qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Gd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}function Bm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,D=l;switch(g=e,S=n,D.tag){case 1:if(C=D.payload,typeof C=="function"){m=C.call(S,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=D.payload,g=typeof C=="function"?C.call(S,m,g):C,g==null)break e;m=Ae({},m,g);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=m):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=m}}function $m(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ta={},hn=kr(ta),Oo=kr(ta),Vo=kr(ta);function Wr(t){if(t===ta)throw Error(U(174));return t}function Yd(t,e){switch(ye(Vo,e),ye(Oo,t),ye(hn,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}Ee(hn),ye(hn,e)}function is(){Ee(hn),Ee(Oo),Ee(Vo)}function Z_(t){Wr(Vo.current);var e=Wr(hn.current),n=dh(e,t.type);e!==n&&(ye(Oo,t),ye(hn,n))}function Xd(t){Oo.current===t&&(Ee(hn),Ee(Oo))}var Se=kr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function Jd(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var vl=$n.ReactCurrentDispatcher,Lc=$n.ReactCurrentBatchConfig,Zr=0,ke=null,Fe=null,$e=null,Jl=!1,ho=!1,Lo=0,qI=0;function rt(){throw Error(U(321))}function Zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function ef(t,e,n,r,i,s){if(Zr=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?YI:XI,t=n(r,i),ho){s=0;do{if(ho=!1,Lo=0,25<=s)throw Error(U(301));s+=1,$e=Fe=null,e.updateQueue=null,vl.current=JI,t=n(r,i)}while(ho)}if(vl.current=Zl,e=Fe!==null&&Fe.next!==null,Zr=0,$e=Fe=ke=null,Jl=!1,e)throw Error(U(300));return t}function tf(){var t=Lo!==0;return Lo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ke.memoizedState=$e=t:$e=$e.next=t,$e}function Bt(){if(Fe===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=$e===null?ke.memoizedState:$e.next;if(e!==null)$e=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},$e===null?ke.memoizedState=$e=t:$e=$e.next=t}return $e}function Mo(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Zr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=f,ei|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,tn(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ev(){}function tv(t,e){var n=ke,r=Bt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,nf(iv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Fo(9,rv.bind(null,n,r,i,e),void 0,null),We===null)throw Error(U(349));Zr&30||nv(n,e,i)}return i}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,r){e.value=n,e.getSnapshot=r,sv(e)&&ov(t)}function iv(t,e,n){return n(function(){sv(e)&&ov(t)})}function sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function ov(t){var e=Mn(t,1);e!==null&&Zt(e,t,1,-1)}function Wm(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=QI.bind(null,ke,t),[e.memoizedState,t]}function Fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return Bt().memoizedState}function wl(t,e,n,r){var i=an();ke.flags|=t,i.memoizedState=Fo(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Zd(r,o.deps)){i.memoizedState=Fo(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Fo(1|e,n,s,r)}function Hm(t,e){return wl(8390656,8,t,e)}function nf(t,e){return Ru(2048,8,t,e)}function lv(t,e){return Ru(4,2,t,e)}function uv(t,e){return Ru(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,cv.bind(null,e,t),n)}function rf(){}function dv(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return Zr&21?(tn(n,e)||(n=v_(),ke.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function KI(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Lc.transition;Lc.transition={};try{t(!1),e()}finally{de=n,Lc.transition=r}}function mv(){return Bt().memoizedState}function GI(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))yv(e,n);else if(n=X_(t,e,n,r),n!==null){var i=ft();Zt(n,t,r,i),_v(n,e,r)}}function QI(t,e,n){var r=fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))yv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var u=e.interleaved;u===null?(i.next=i,Gd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=X_(t,e,i,r),n!==null&&(i=ft(),Zt(n,t,r,i),_v(n,e,r))}}function gv(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function yv(t,e){ho=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}var Zl={readContext:zt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},YI={readContext:zt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Hm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GI.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:Wm,useDebugValue:rf,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=Wm(!1),e=t[0];return t=KI.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=an();if(Te){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),We===null)throw Error(U(349));Zr&30||nv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hm(iv.bind(null,r,s,t),[t]),r.flags|=2048,Fo(9,rv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=We.identifierPrefix;if(Te){var n=Cn,r=Rn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XI={readContext:zt,useCallback:dv,useContext:zt,useEffect:nf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:Mc,useRef:av,useState:function(){return Mc(Mo)},useDebugValue:rf,useDeferredValue:function(t){var e=Bt();return pv(e,Fe.memoizedState,t)},useTransition:function(){var t=Mc(Mo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},JI={readContext:zt,useCallback:dv,useContext:zt,useEffect:nf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:Fc,useRef:av,useState:function(){return Fc(Mo)},useDebugValue:rf,useDeferredValue:function(t){var e=Bt();return Fe===null?e.memoizedState=t:pv(e,Fe.memoizedState,t)},useTransition:function(){var t=Fc(Mo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cu={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=fr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),_l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=fr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),_l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=fr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(Zt(e,t,r,n),_l(e,t,r))}};function qm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function vv(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=Tt(e)?Xr:ut.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cu.enqueueReplaceState(e,e.state,null)}function Oh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Qd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=Tt(e)?Xr:ut.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cu.enqueueReplaceState(i,i.state,null),Yl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",r=e;do n+=AT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZI=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tu||(tu=!0,Hh=r),Vh(t,e)},n}function Ev(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vh(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fS.bind(null,t,e,n),e.then(t,t))}function Qm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var eS=$n.ReactCurrentOwner,wt=!1;function dt(t,e,n,r){e.child=t===null?Y_(e,null,n,r):rs(e,t.child,n,r)}function Xm(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=ef(t,e,n,r,s,i),n=tf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Te&&n&&Bd(e),e.flags|=1,dt(t,e,r,i),e.child)}function Jm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tv(t,e,s,r,i)):(t=Sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return Lh(t,e,n,r,i)}function Iv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye($i,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye($i,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye($i,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye($i,Rt),Rt|=r;return dt(t,e,i,n),e.child}function Sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,i){var s=Tt(n)?Xr:ut.current;return s=ts(e,s),Gi(e,i),n=ef(t,e,n,r,s,i),r=tf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Te&&r&&Bd(e),e.flags|=1,dt(t,e,n,i),e.child)}function Zm(t,e,n,r,i){if(Tt(n)){var s=!0;Hl(e)}else s=!1;if(Gi(e,i),e.stateNode===null)El(t,e),vv(e,n,r),Oh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=zt(h):(h=Tt(n)?Xr:ut.current,h=ts(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Km(e,o,r,h),Xn=!1;var g=e.memoizedState;o.state=g,Yl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Et.current||Xn?(typeof f=="function"&&(bh(e,n,f,r),u=e.memoizedState),(l=Xn||qm(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,J_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Gt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=Tt(n)?Xr:ut.current,u=ts(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Km(e,o,r,u),Xn=!1,g=e.memoizedState,o.state=g,Yl(e,r,o,i);var C=e.memoizedState;l!==m||g!==C||Et.current||Xn?(typeof S=="function"&&(bh(e,n,S,r),C=e.memoizedState),(h=Xn||qm(e,n,h,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Mh(t,e,n,r,s,i)}function Mh(t,e,n,r,i,s){Sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fm(e,n,!1),Fn(t,e,s);r=e.stateNode,eS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&Fm(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?Mm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mm(t,e.context,!1),Yd(t,e.containerInfo)}function eg(t,e,n,r,i){return ns(),Wd(i),e.flags|=256,dt(t,e,n,r),e.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Av(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Se,i&1),t===null)return Nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nu(o,r,0,null),t=Gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=Fh,t):sf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return tS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=pr(l,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fh,r}return s=t.child,t=s.sibling,r=pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sf(t,e){return e=Nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&Wd(r),rs(e,t.child,null,n),t=sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uc(Error(U(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nu({mode:"visible",children:r.children},i,0,null),s=Gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Fh,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Uc(s,r,void 0),Za(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Zt(r,t,i,-1))}return hf(),r=Uc(Error(U(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=cr(i.nextSibling),Nt=e,Te=!0,Yt=null,t!==null&&(Lt[Mt++]=Rn,Lt[Mt++]=Cn,Lt[Mt++]=Jr,Rn=t.id,Cn=t.overflow,Jr=e),e=sf(e,r.children),e.flags|=4096,e)}function tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dh(t.return,e,n)}function jc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tg(t,n,e);else if(t.tag===19)tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nS(t,e,n){switch(e.tag){case 3:kv(e),ns();break;case 5:Z_(e);break;case 1:Tt(e.type)&&Hl(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?Av(t,e,n):(ye(Se,Se.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);ye(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,Iv(t,e,n)}return Fn(t,e,n)}var Cv,jh,Pv,xv;Cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jh=function(){};Pv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(hn.current);var s=null;switch(n){case"input":i=lh(t,i),r=lh(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=hh(t,i),r=hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}fh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Io.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Io.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};xv=function(t,e,n,r){n!==r&&(e.flags|=4)};function qs(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rS(t,e,n){var r=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return Tt(e.type)&&Wl(),it(e),null;case 3:return r=e.stateNode,is(),Ee(Et),Ee(ut),Jd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(Gh(Yt),Yt=null))),jh(t,e),it(e),null;case 5:Xd(e);var i=Wr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return it(e),null}if(t=Wr(hn.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ln]=e,r[bo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Zs.length;i++)ve(Zs[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":cm(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":dm(r,s),ve("invalid",r)}fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",""+l]):Io.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ba(r),hm(r,s,!0);break;case"textarea":Ba(r),fm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[bo]=r,Cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zs.length;i++)ve(Zs[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":cm(t,r),i=lh(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":dm(t,r),i=hh(t,r),ve("invalid",t);break;default:i=r}fh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?a_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&s_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&So(t,u):typeof u=="number"&&So(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&Cd(t,s,u,o))}switch(n){case"input":Ba(t),hm(t,r,!1);break;case"textarea":Ba(t),fm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)xv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Wr(Vo.current),Wr(hn.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return it(e),null;case 13:if(Ee(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Ct!==null&&e.mode&1&&!(e.flags&128))G_(),ns(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[ln]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Yt!==null&&(Gh(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Ue===0&&(Ue=3):hf())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return is(),jh(t,e),t===null&&No(e.stateNode.containerInfo),it(e),null;case 10:return Kd(e.type._context),it(e),null;case 17:return Tt(e.type)&&Wl(),it(e),null;case 19:if(Ee(Se),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qs(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>os&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return it(e),null}else 2*Oe()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Se.current,ye(Se,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return cf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function iS(t,e){switch($d(e),e.tag){case 1:return Tt(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),Ee(Et),Ee(ut),Jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(Ee(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Se),null;case 4:return is(),null;case 10:return Kd(e.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var el=!1,at=!1,sS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function zh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var ng=!1;function oS(t,e){if(Sh=jl,t=V_(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kh={focusedElem:t,selectionRange:n},jl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var D=C.memoizedProps,V=C.memoizedState,k=e.stateNode,v=k.getSnapshotBeforeUpdate(e.elementType===e.type?D:Gt(e.type,D),V);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Pe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=ng,ng=!1,C}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zh(e,n,s)}i=i.next}while(i!==r)}}function Pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[bo],delete e[Ch],delete e[BI],delete e[$I])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dv(t){return t.tag===5||t.tag===3||t.tag===4}function rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}var Ke=null,Qt=!1;function Gn(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Eu,n)}catch{}switch(n.tag){case 5:at||Bi(n,e);case 6:var r=Ke,i=Qt;Ke=null,Gn(t,e,n),Ke=r,Qt=i,Ke!==null&&(Qt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Qt?(t=Ke,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),Co(t)):bc(Ke,n.stateNode));break;case 4:r=Ke,i=Qt,Ke=n.stateNode.containerInfo,Qt=!0,Gn(t,e,n),Ke=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zh(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!at&&(Bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Gn(t,e,n),at=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sS),e.forEach(function(r){var i=mS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Qt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Qt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Ke===null)throw Error(U(160));bv(s,o,i),Ke=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Pe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),on(t),r&4){try{fo(3,t,t.return),Pu(3,t)}catch(D){Pe(t,t.return,D)}try{fo(5,t,t.return)}catch(D){Pe(t,t.return,D)}}break;case 1:Kt(e,t),on(t),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(Kt(e,t),on(t),r&512&&n!==null&&Bi(n,n.return),t.flags&32){var i=t.stateNode;try{So(i,"")}catch(D){Pe(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&n_(i,s),ph(l,o);var h=ph(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?a_(i,m):f==="dangerouslySetInnerHTML"?s_(i,m):f==="children"?So(i,m):Cd(i,f,m,h)}switch(l){case"input":uh(i,s);break;case"textarea":r_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Wi(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?Wi(i,!!s.multiple,s.defaultValue,!0):Wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[bo]=s}catch(D){Pe(t,t.return,D)}}break;case 6:if(Kt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Pe(t,t.return,D)}}break;case 3:if(Kt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(D){Pe(t,t.return,D)}break;case 4:Kt(e,t),on(t);break;case 13:Kt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lf=Oe())),r&4&&ig(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(h=at)||f,Kt(e,t),at=h):Kt(e,t),on(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,S=g.child,g.tag){case 0:case 11:case 14:case 15:fo(4,g,g.return);break;case 1:Bi(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(D){Pe(r,n,D)}}break;case 5:Bi(g,g.return);break;case 22:if(g.memoizedState!==null){og(m);continue}}S!==null?(S.return=g,H=S):og(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=o_("display",o))}catch(D){Pe(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Pe(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Kt(e,t),on(t),r&4&&ig(t);break;case 21:break;default:Kt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var s=rg(t);Wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=rg(t);$h(t,l,o);break;default:throw Error(U(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aS(t,e,n){H=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=el;var h=at;if(el=o,(at=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?ag(i):u!==null?(u.return=o,H=u):ag(i);for(;s!==null;)H=s,Vv(s),s=s.sibling;H=i,el=l,at=h}sg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):sg(t)}}function sg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$m(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$m(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Co(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}at||e.flags&512&&Bh(e)}catch(g){Pe(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function og(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function ag(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Bh(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Bh(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var lS=Math.ceil,eu=$n.ReactCurrentDispatcher,of=$n.ReactCurrentOwner,Ut=$n.ReactCurrentBatchConfig,ue=0,We=null,Le=null,Ye=0,Rt=0,$i=kr(0),Ue=0,Uo=null,ei=0,xu=0,af=0,po=null,_t=null,lf=0,os=1/0,Sn=null,tu=!1,Hh=null,dr=null,tl=!1,sr=null,nu=0,mo=0,qh=null,Tl=-1,Il=0;function ft(){return ue&6?Oe():Tl!==-1?Tl:Tl=Oe()}function fr(t){return t.mode&1?ue&2&&Ye!==0?Ye&-Ye:HI.transition!==null?(Il===0&&(Il=v_()),Il):(t=de,t!==0||(t=window.event,t=t===void 0?16:A_(t.type)),t):1}function Zt(t,e,n,r){if(50<mo)throw mo=0,qh=null,Error(U(185));Jo(t,n,r),(!(ue&2)||t!==We)&&(t===We&&(!(ue&2)&&(xu|=n),Ue===4&&Zn(t,Ye)),It(t,r),n===1&&ue===0&&!(e.mode&1)&&(os=Oe()+500,Au&&Ar()))}function It(t,e){var n=t.callbackNode;HT(t,e);var r=Ul(t,t===We?Ye:0);if(r===0)n!==null&&gm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gm(n),e===1)t.tag===0?WI(lg.bind(null,t)):H_(lg.bind(null,t)),jI(function(){!(ue&6)&&Ar()}),n=null;else{switch(w_(r)){case 1:n=bd;break;case 4:n=y_;break;case 16:n=Fl;break;case 536870912:n=__;break;default:n=Fl}n=$v(n,Lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lv(t,e){if(Tl=-1,Il=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=Ul(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ru(t,r);else{e=r;var i=ue;ue|=2;var s=Fv();(We!==t||Ye!==e)&&(Sn=null,os=Oe()+500,Kr(t,e));do try{hS();break}catch(l){Mv(t,l)}while(!0);qd(),eu.current=s,ue=i,Le!==null?e=0:(We=null,Ye=0,e=Ue)}if(e!==0){if(e===2&&(i=vh(t),i!==0&&(r=i,e=Kh(t,i))),e===1)throw n=Uo,Kr(t,0),Zn(t,r),It(t,Oe()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!uS(i)&&(e=ru(t,r),e===2&&(s=vh(t),s!==0&&(r=s,e=Kh(t,s))),e===1))throw n=Uo,Kr(t,0),Zn(t,r),It(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:jr(t,_t,Sn);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=lf+500-Oe(),10<e)){if(Ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rh(jr.bind(null,t,_t,Sn),e);break}jr(t,_t,Sn);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lS(r/1960))-r,10<r){t.timeoutHandle=Rh(jr.bind(null,t,_t,Sn),r);break}jr(t,_t,Sn);break;case 5:jr(t,_t,Sn);break;default:throw Error(U(329))}}}return It(t,Oe()),t.callbackNode===n?Lv.bind(null,t):null}function Kh(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=ru(t,e),t!==2&&(e=_t,_t=n,e!==null&&Gh(e)),t}function Gh(t){_t===null?_t=t:_t.push.apply(_t,t)}function uS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~af,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function lg(t){if(ue&6)throw Error(U(327));Qi();var e=Ul(t,0);if(!(e&1))return It(t,Oe()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var r=vh(t);r!==0&&(e=r,n=Kh(t,r))}if(n===1)throw n=Uo,Kr(t,0),Zn(t,e),It(t,Oe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,_t,Sn),It(t,Oe()),null}function uf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(os=Oe()+500,Au&&Ar())}}function ti(t){sr!==null&&sr.tag===0&&!(ue&6)&&Qi();var e=ue;ue|=1;var n=Ut.transition,r=de;try{if(Ut.transition=null,de=1,t)return t()}finally{de=r,Ut.transition=n,ue=e,!(ue&6)&&Ar()}}function cf(){Rt=$i.current,Ee($i)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UI(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch($d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:is(),Ee(Et),Ee(ut),Jd();break;case 5:Xd(r);break;case 4:is();break;case 13:Ee(Se);break;case 19:Ee(Se);break;case 10:Kd(r.type._context);break;case 22:case 23:cf()}n=n.return}if(We=t,Le=t=pr(t.current,null),Ye=Rt=e,Ue=0,Uo=null,af=xu=ei=0,_t=po=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function Mv(t,e){do{var n=Le;try{if(qd(),vl.current=Zl,Jl){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jl=!1}if(Zr=0,$e=Fe=ke=null,ho=!1,Lo=0,of.current=null,n===null||n.return===null){Ue=1,Uo=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Qm(o);if(S!==null){S.flags&=-257,Ym(S,o,l,s,e),S.mode&1&&Gm(s,h,e),e=S,u=h;var C=e.updateQueue;if(C===null){var D=new Set;D.add(u),e.updateQueue=D}else C.add(u);break e}else{if(!(e&1)){Gm(s,h,e),hf();break e}u=Error(U(426))}}else if(Te&&l.mode&1){var V=Qm(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Ym(V,o,l,s,e),Wd(ss(u,l));break e}}s=u=ss(u,l),Ue!==4&&(Ue=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=wv(s,u,e);Bm(s,k);break e;case 1:l=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(dr===null||!dr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Ev(s,l,e);Bm(s,O);break e}}s=s.return}while(s!==null)}jv(n)}catch(z){e=z,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Fv(){var t=eu.current;return eu.current=Zl,t===null?Zl:t}function hf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(ei&268435455)&&!(xu&268435455)||Zn(We,Ye)}function ru(t,e){var n=ue;ue|=2;var r=Fv();(We!==t||Ye!==e)&&(Sn=null,Kr(t,e));do try{cS();break}catch(i){Mv(t,i)}while(!0);if(qd(),ue=n,eu.current=r,Le!==null)throw Error(U(261));return We=null,Ye=0,Ue}function cS(){for(;Le!==null;)Uv(Le)}function hS(){for(;Le!==null&&!LT();)Uv(Le)}function Uv(t){var e=Bv(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?jv(t):Le=e,of.current=null}function jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iS(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=rS(n,e,Rt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function jr(t,e,n){var r=de,i=Ut.transition;try{Ut.transition=null,de=1,dS(t,e,n,r)}finally{Ut.transition=i,de=r}return null}function dS(t,e,n,r){do Qi();while(sr!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qT(t,s),t===We&&(Le=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,$v(Fl,function(){return Qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=de;de=1;var l=ue;ue|=4,of.current=null,oS(t,n),Ov(n,t),DI(kh),jl=!!Sh,kh=Sh=null,t.current=n,aS(n),MT(),ue=l,de=o,Ut.transition=s}else t.current=n;if(tl&&(tl=!1,sr=t,nu=i),s=t.pendingLanes,s===0&&(dr=null),jT(n.stateNode),It(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tu)throw tu=!1,t=Hh,Hh=null,t;return nu&1&&t.tag!==0&&Qi(),s=t.pendingLanes,s&1?t===qh?mo++:(mo=0,qh=t):mo=0,Ar(),null}function Qi(){if(sr!==null){var t=w_(nu),e=Ut.transition,n=de;try{if(Ut.transition=null,de=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,nu=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:fo(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,S=f.return;if(Nv(f),f===h){H=null;break}if(g!==null){g.return=S,H=g;break}H=S}}}var C=s.alternate;if(C!==null){var D=C.child;if(D!==null){C.child=null;do{var V=D.sibling;D.sibling=null,D=V}while(D!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,H=k;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pu(9,l)}}catch(z){Pe(l,l.return,z)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(ue=i,Ar(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Eu,t)}catch{}r=!0}return r}finally{de=n,Ut.transition=e}}return!1}function ug(t,e,n){e=ss(n,e),e=wv(t,e,1),t=hr(t,e,1),e=ft(),t!==null&&(Jo(t,1,e),It(t,e))}function Pe(t,e,n){if(t.tag===3)ug(t,t,n);else for(;e!==null;){if(e.tag===3){ug(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=ss(n,t),t=Ev(e,t,1),e=hr(e,t,1),t=ft(),e!==null&&(Jo(e,1,t),It(e,t));break}}e=e.return}}function fS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>Oe()-lf?Kr(t,0):af|=n),It(t,e)}function zv(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=ft();t=Mn(t,e),t!==null&&(Jo(t,e,n),It(t,n))}function pS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zv(t,n)}function mS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),zv(t,n)}var Bv;Bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,nS(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Te&&e.flags&1048576&&q_(e,Kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;El(t,e),t=e.pendingProps;var i=ts(e,ut.current);Gi(e,n),i=ef(null,e,r,t,i,n);var s=tf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,Hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qd(e),i.updater=Cu,e.stateNode=i,i._reactInternals=e,Oh(e,r,t,n),e=Mh(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&Bd(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(El(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yS(r),t=Gt(r,t),i){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=Zm(null,e,r,t,n);break e;case 11:e=Xm(null,e,r,t,n);break e;case 14:e=Jm(null,e,r,Gt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Zm(t,e,r,i,n);case 3:e:{if(kv(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,J_(t,e),Yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(U(423)),e),e=eg(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(U(424)),e),e=eg(t,e,r,n,i);break e}else for(Ct=cr(e.stateNode.containerInfo.firstChild),Nt=e,Te=!0,Yt=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=Fn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Z_(e),t===null&&Nh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ah(r,i)?o=null:s!==null&&Ah(r,s)&&(e.flags|=32),Sv(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Nh(e),null;case 13:return Av(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Xm(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Gl,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!Et.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Dh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=zt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),Jm(t,e,r,i,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),El(t,e),e.tag=1,Tt(r)?(t=!0,Hl(e)):t=!1,Gi(e,n),vv(e,r,i),Oh(e,r,i,n),Mh(null,e,r,!0,t,n);case 19:return Rv(t,e,n);case 22:return Iv(t,e,n)}throw Error(U(156,e.tag))};function $v(t,e){return g_(t,e)}function gS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new gS(t,e,n,r)}function df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yS(t){if(typeof t=="function")return df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===Nd)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bi:return Gr(n.children,i,s,e);case Pd:o=8,i|=8;break;case ih:return t=Ft(12,n,e,i|2),t.elementType=ih,t.lanes=s,t;case sh:return t=Ft(13,n,e,i),t.elementType=sh,t.lanes=s,t;case oh:return t=Ft(19,n,e,i),t.elementType=oh,t.lanes=s,t;case Zy:return Nu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xy:o=10;break e;case Jy:o=9;break e;case xd:o=11;break e;case Nd:o=14;break e;case Yn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Nu(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=Zy,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _S(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ff(t,e,n,r,i,s,o,l,u){return t=new _S(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qd(s),t}function vS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wv(t){if(!t)return vr;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Tt(n))return W_(t,n,e)}return e}function Hv(t,e,n,r,i,s,o,l,u){return t=ff(n,r,!0,t,i,s,o,l,u),t.context=Wv(null),n=t.current,r=ft(),i=fr(n),s=Dn(r,i),s.callback=e??null,hr(n,s,i),t.current.lanes=i,Jo(t,i,r),It(t,r),t}function Du(t,e,n,r){var i=e.current,s=ft(),o=fr(i);return n=Wv(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(Zt(t,i,o,s),_l(t,i,o)),o}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pf(t,e){cg(t,e),(t=t.alternate)&&cg(t,e)}function wS(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function mf(t){this._internalRoot=t}bu.prototype.render=mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Du(t,e,null,null)};bu.prototype.unmount=mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){Du(null,t,null,null)}),e[Ln]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=I_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&k_(t)}};function gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hg(){}function ES(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=iu(o);s.call(h)}}var o=Hv(e,r,t,0,null,!1,!1,"",hg);return t._reactRootContainer=o,t[Ln]=o.current,No(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=iu(u);l.call(h)}}var u=ff(t,0,!1,null,null,!1,!1,"",hg);return t._reactRootContainer=u,t[Ln]=u.current,No(t.nodeType===8?t.parentNode:t),ti(function(){Du(e,u,n,r)}),u}function Vu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=iu(o);l.call(u)}}Du(e,o,t,i)}else o=ES(n,e,t,i,r);return iu(o)}E_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(Od(e,n|1),It(e,Oe()),!(ue&6)&&(os=Oe()+500,Ar()))}break;case 13:ti(function(){var r=Mn(t,1);if(r!==null){var i=ft();Zt(r,t,1,i)}}),pf(t,1)}};Vd=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=ft();Zt(e,t,134217728,n)}pf(t,134217728)}};T_=function(t){if(t.tag===13){var e=fr(t),n=Mn(t,e);if(n!==null){var r=ft();Zt(n,t,e,r)}pf(t,e)}};I_=function(){return de};S_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};gh=function(t,e,n){switch(e){case"input":if(uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ku(r);if(!i)throw Error(U(90));t_(r),uh(r,i)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&Wi(t,!!n.multiple,e,!1)}};c_=uf;h_=ti;var TS={usingClientEntryPoint:!1,Events:[ea,Mi,ku,l_,u_,uf]},Ks={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IS={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||wS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Eu=nl.inject(IS),cn=nl}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gf(e))throw Error(U(200));return vS(t,e,null,n)};bt.createRoot=function(t,e){if(!gf(t))throw Error(U(299));var n=!1,r="",i=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ff(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,No(t.nodeType===8?t.parentNode:t),new mf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=p_(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return ti(t)};bt.hydrate=function(t,e,n){if(!Ou(e))throw Error(U(200));return Vu(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!gf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hv(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,No(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bu(e)};bt.render=function(t,e,n){if(!Ou(e))throw Error(U(200));return Vu(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(U(40));return t._reactRootContainer?(ti(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};bt.unstable_batchedUpdates=uf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ou(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Vu(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(t){console.error(t)}}Kv(),Ky.exports=bt;var SS=Ky.exports,dg=SS;nh.createRoot=dg.createRoot,nh.hydrateRoot=dg.hydrateRoot;var fg={};/**
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
 */const Gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(g=64)),r.push(n[f],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new AS;const g=s<<2|l>>4;if(r.push(g),h!==64){const S=l<<4&240|h>>2;if(r.push(S),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RS=function(t){const e=Gv(t);return Qv.encodeByteArray(e,!0)},su=function(t){return RS(t).replace(/\./g,"")},Yv=function(t){try{return Qv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PS=()=>CS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof fg>"u")return;const t=fg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yv(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return PS()||xS()||NS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xv=t=>{var e,n;return(n=(e=Lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jv=t=>{const e=Xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zv=()=>{var t;return(t=Lu())===null||t===void 0?void 0:t.config},ew=t=>{var e;return(e=Lu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class DS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function tw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[su(JSON.stringify(n)),su(JSON.stringify(o)),""].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function OS(){var t;const e=(t=Lu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FS(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function US(){return!OS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jS(){try{return typeof indexedDB=="object"}catch{return!1}}function zS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BS="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BS,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$S(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new yn(i,l,r)}}function $S(t,e){return t.replace(WS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WS=/\{\$([^}]+)}/g;function HS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(pg(s)&&pg(o)){if(!jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function pg(t){return t!==null&&typeof t=="object"}/**
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
 */function ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qS(t,e){const n=new KS(t,e);return n.subscribe.bind(n)}class KS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$c),i.error===void 0&&(i.error=$c),i.complete===void 0&&(i.complete=$c);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class QS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XS(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YS(t){return t===zr?void 0:t}function XS(t){return t.instantiationMode==="EAGER"}/**
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
 */class JS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const ZS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},e1=ae.INFO,t1={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},n1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=t1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yf{constructor(e){this.name=e,this._logLevel=e1,this._logHandler=n1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const r1=(t,e)=>e.some(n=>t instanceof n);let mg,gg;function i1(){return mg||(mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s1(){return gg||(gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,Qh=new WeakMap,rw=new WeakMap,Wc=new WeakMap,_f=new WeakMap;function o1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nw.set(n,t)}).catch(()=>{}),_f.set(e,t),e}function a1(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l1(t){Yh=t(Yh)}function u1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hc(this),e,...n);return rw.set(r,e.sort?e.sort():[e]),mr(r)}:s1().includes(t)?function(...e){return t.apply(Hc(this),e),mr(nw.get(this))}:function(...e){return mr(t.apply(Hc(this),e))}}function c1(t){return typeof t=="function"?u1(t):(t instanceof IDBTransaction&&a1(t),r1(t,i1())?new Proxy(t,Yh):t)}function mr(t){if(t instanceof IDBRequest)return o1(t);if(Wc.has(t))return Wc.get(t);const e=c1(t);return e!==t&&(Wc.set(t,e),_f.set(e,t)),e}const Hc=t=>_f.get(t);function h1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const d1=["get","getKey","getAll","getAllKeys","count"],f1=["put","add","delete","clear"],qc=new Map;function yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=f1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||d1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return qc.set(e,s),s}l1(t=>({...t,get:(e,n,r)=>yg(e,n)||t.get(e,n,r),has:(e,n)=>!!yg(e,n)||t.has(e,n)}));/**
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
 */class p1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function m1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xh="@firebase/app",_g="0.10.13";/**
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
 */const Un=new yf("@firebase/app"),g1="@firebase/app-compat",y1="@firebase/analytics-compat",_1="@firebase/analytics",v1="@firebase/app-check-compat",w1="@firebase/app-check",E1="@firebase/auth",T1="@firebase/auth-compat",I1="@firebase/database",S1="@firebase/data-connect",k1="@firebase/database-compat",A1="@firebase/functions",R1="@firebase/functions-compat",C1="@firebase/installations",P1="@firebase/installations-compat",x1="@firebase/messaging",N1="@firebase/messaging-compat",D1="@firebase/performance",b1="@firebase/performance-compat",O1="@firebase/remote-config",V1="@firebase/remote-config-compat",L1="@firebase/storage",M1="@firebase/storage-compat",F1="@firebase/firestore",U1="@firebase/vertexai-preview",j1="@firebase/firestore-compat",z1="firebase",B1="10.14.1";/**
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
 */const Jh="[DEFAULT]",$1={[Xh]:"fire-core",[g1]:"fire-core-compat",[_1]:"fire-analytics",[y1]:"fire-analytics-compat",[w1]:"fire-app-check",[v1]:"fire-app-check-compat",[E1]:"fire-auth",[T1]:"fire-auth-compat",[I1]:"fire-rtdb",[S1]:"fire-data-connect",[k1]:"fire-rtdb-compat",[A1]:"fire-fn",[R1]:"fire-fn-compat",[C1]:"fire-iid",[P1]:"fire-iid-compat",[x1]:"fire-fcm",[N1]:"fire-fcm-compat",[D1]:"fire-perf",[b1]:"fire-perf-compat",[O1]:"fire-rc",[V1]:"fire-rc-compat",[L1]:"fire-gcs",[M1]:"fire-gcs-compat",[F1]:"fire-fst",[j1]:"fire-fst-compat",[U1]:"fire-vertex","fire-js":"fire-js",[z1]:"fire-js-all"};/**
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
 */const ou=new Map,W1=new Map,Zh=new Map;function vg(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Zh.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of ou.values())vg(n,t);for(const n of W1.values())vg(n,t);return!0}function Mu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
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
 */const H1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new na("app","Firebase",H1);/**
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
 */class q1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=B1;function iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=Zv()),!n)throw gr.create("no-options");const s=ou.get(i);if(s){if(jo(n,s.options)&&jo(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new JS(i);for(const u of Zh.values())o.addComponent(u);const l=new q1(n,r,o);return ou.set(i,l),l}function vf(t=Jh){const e=ou.get(t);if(!e&&t===Jh&&Zv())return iw();if(!e)throw gr.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=$1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}ni(new wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const K1="firebase-heartbeat-database",G1=1,zo="firebase-heartbeat-store";let Kc=null;function sw(){return Kc||(Kc=h1(K1,G1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function Q1(t){try{const n=(await sw()).transaction(zo),r=await n.objectStore(zo).get(ow(t));return await n.done,r}catch(e){if(e instanceof yn)Un.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function wg(t,e){try{const r=(await sw()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,ow(t)),await r.done}catch(n){if(n instanceof yn)Un.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function ow(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Y1=1024,X1=30*24*60*60*1e3;class J1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ek(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Eg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=X1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Eg(),{heartbeatsToSend:r,unsentEntries:i}=Z1(this._heartbeatsCache.heartbeats),s=su(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function Eg(){return new Date().toISOString().substring(0,10)}function Z1(t,e=Y1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ek{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jS()?zS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tg(t){return su(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tk(t){ni(new wr("platform-logger",e=>new p1(e),"PRIVATE")),ni(new wr("heartbeat",e=>new J1(e),"PRIVATE")),dn(Xh,_g,t),dn(Xh,_g,"esm2017"),dn("fire-js","")}tk("");function wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nk=aw,lw=new na("auth","Firebase",aw());/**
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
 */const au=new yf("@firebase/auth");function rk(t,...e){au.logLevel<=ae.WARN&&au.warn(`Auth (${hi}): ${t}`,...e)}function kl(t,...e){au.logLevel<=ae.ERROR&&au.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw Tf(t,...e)}function en(t,...e){return Tf(t,...e)}function Ef(t,e,n){const r=Object.assign(Object.assign({},nk()),{[e]:n});return new na("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return Ef(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ik(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(t,"argument-error"),Ef(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lw.create(t,...e)}function X(t,e,...n){if(!t)throw Tf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kl(e),new Error(e)}function jn(t,e){t||Pn(e)}/**
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
 */function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sk(){return Ig()==="http:"||Ig()==="https:"}function Ig(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ok(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sk()||LS()||"connection"in navigator)?navigator.onLine:!0}function ak(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=bS()||MS()}get(){return ok()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function If(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uk=new ia(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cr(t,e,n,r,i={}){return cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ra(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return VS()||(h.referrerPolicy="no-referrer"),uw.fetch()(hw(t,t.config.apiHost,n,l),h)})}async function cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lk),e);try{const i=new hk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw rl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ef(t,f,h);$t(t,f)}}catch(i){if(i instanceof yn)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function sa(t,e,n,r,i={}){const s=await Cr(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?If(t.config,i):`${t.config.apiScheme}://${i}`}function ck(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),uk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}function Sg(t){return t!==void 0&&t.enterprise!==void 0}class dk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ck(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fk(t,e){return Cr(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
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
 */async function pk(t,e){return Cr(t,"POST","/v1/accounts:delete",e)}async function dw(t,e){return Cr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mk(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Sf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:go(Gc(i.auth_time)),issuedAtTime:go(Gc(i.iat)),expirationTime:go(Gc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gc(t){return Number(t)*1e3}function Sf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yv(n);return i?JSON.parse(i):(kl("Failed to decode base64 JWT payload"),null)}catch(i){return kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kg(t){const e=Sf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&gk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bo(t,dw(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fw(s.providerUserInfo):[],l=vk(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new td(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function _k(t){const e=xe(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fw(t){return t.map(e=>{var{providerId:n}=e,r=wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wk(t,e){const n=await cw(t,{},async()=>{const r=ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ek(t,e){return Cr(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
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
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=kg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yi;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Qn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new td(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mk(this,e)}reload(){return _k(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Bo(this,pk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:O,isAnonymous:z,providerData:j,stsTokenManager:E}=n;X(A&&E,e,"internal-error");const y=Yi.fromJSON(this.name,E);X(typeof A=="string",e,"internal-error"),Qn(m,e.name),Qn(g,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof z=="boolean",e,"internal-error"),Qn(S,e.name),Qn(C,e.name),Qn(D,e.name),Qn(V,e.name),Qn(k,e.name),Qn(v,e.name);const w=new xn({uid:A,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:z,photoURL:C,phoneNumber:S,tenantId:D,stsTokenManager:y,createdAt:k,lastLoginAt:v});return j&&Array.isArray(j)&&(w.providerData=j.map(T=>Object.assign({},T))),V&&(w._redirectEventId=V),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yi;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Yi;l.updateFromIdToken(r);const u=new xn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new td(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Ag=new Map;function Nn(t){jn(t instanceof Function,"Expected a class definition");let e=Ag.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ag.set(t,e),e)}/**
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
 */class pw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pw.type="NONE";const Rg=pw;/**
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
 */function Al(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Al(this.userKey,i.apiKey,s),this.fullPersistenceKey=Al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(Nn(Rg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Nn(Rg);const o=Al(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=xn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Xi(s,e,r))}}/**
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
 */function Cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_w(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Ew(e))return"Webos";if(gw(e))return"Safari";if((e.includes("chrome/")||yw(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mw(t=ct()){return/firefox\//i.test(t)}function gw(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yw(t=ct()){return/crios\//i.test(t)}function _w(t=ct()){return/iemobile/i.test(t)}function vw(t=ct()){return/android/i.test(t)}function ww(t=ct()){return/blackberry/i.test(t)}function Ew(t=ct()){return/webos/i.test(t)}function kf(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tk(t=ct()){var e;return kf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ik(){return FS()&&document.documentMode===10}function Tw(t=ct()){return kf(t)||vw(t)||Ew(t)||ww(t)||/windows phone/i.test(t)||_w(t)}/**
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
 */function Iw(t,e=[]){let n;switch(t){case"Browser":n=Cg(ct());break;case"Worker":n=`${Cg(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
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
 */class Sk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kk(t,e={}){return Cr(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
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
 */const Ak=6;class Rk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ak,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ck{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new Sk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dw(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ak()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(bn(this));const n=e?xe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kk(this),n=new Rk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ek(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pr(t){return xe(t)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=qS(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pk(t){Fu=t}function Sw(t){return Fu.loadJS(t)}function xk(){return Fu.recaptchaEnterpriseScript}function Nk(){return Fu.gapiScript}function Dk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bk="recaptcha-enterprise",Ok="NO_RECAPTCHA";class Vk{constructor(e){this.type=bk,this.auth=Pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{fk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new dk(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Sg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ok)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Sg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=xk();u.length!==0&&(u+=l),Sw(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function xg(t,e,n,r=!1){const i=new Vk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await xg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Lk(t,e){const n=Mu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jo(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function Mk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fk(t,e,n){const r=Pr(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kw(e),{host:o,port:l}=Uk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),jk()}function kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Uk(t){const e=kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ng(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ng(o)}}}function Ng(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Af{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function zk(t,e){return Cr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Bk(t,e){return sa(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
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
 */async function $k(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function Wk(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
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
 */class $o extends Af{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,n,"signInWithPassword",Bk);case"emailLink":return $k(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,r,"signUpPassword",zk);case"emailLink":return Wk(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ji(t,e){return sa(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
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
 */const Hk="http://localhost";class ri extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:Hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ra(n)}return e}}/**
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
 */function qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kk(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,r=eo(to(t)).deep_link_id;return(r?eo(to(r)).link:null)||r||n||e||t}class Rf{constructor(e){var n,r,i,s,o,l;const u=eo(to(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=qk((i=u.mode)!==null&&i!==void 0?i:null);X(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Kk(e);try{return new Rf(n)}catch{return null}}}/**
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
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rf.parseLink(n);return X(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oa extends Cf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends oa{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class An extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class tr extends oa{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends oa{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function Gk(t,e){return sa(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xn._fromIdTokenResponse(e,r,i),o=Dg(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dg(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class uu extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uu(e,n,r,i)}}function Aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uu._fromErrorAndOperation(t,s,e,r):s})}async function Qk(t,e,n=!1){const r=await Bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
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
 */async function Yk(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(bn(r));const i="reauthenticate";try{const s=await Bo(t,Aw(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Sf(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
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
 */async function Rw(t,e,n=!1){if(Xt(t.app))return Promise.reject(bn(t));const r="signIn",i=await Aw(t,r,e),s=await ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Xk(t,e){return Rw(Pr(t),e)}/**
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
 */async function Cw(t){const e=Pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Jk(t,e,n){if(Xt(t.app))return Promise.reject(bn(t));const r=Pr(t),o=await nd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Cw(t),u}),l=await ii._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Zk(t,e,n){return Xt(t.app)?Promise.reject(bn(t)):Xk(xe(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cw(t),r})}function eA(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function tA(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function nA(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function rA(t){return xe(t).signOut()}const cu="__sak";/**
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
 */class Pw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cu,"1"),this.storage.removeItem(cu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iA=1e3,sA=10;class xw extends Pw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ik()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xw.type="LOCAL";const oA=xw;/**
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
 */class Nw extends Pw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nw.type="SESSION";const Dw=Nw;/**
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
 */function aA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await aA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
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
 */function Pf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Pf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function uA(t){fn().location.href=t}/**
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
 */function bw(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function cA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dA(){return bw()?self:null}/**
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
 */const Ow="firebaseLocalStorageDb",fA=1,hu="firebaseLocalStorage",Vw="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ju(t,e){return t.transaction([hu],e?"readwrite":"readonly").objectStore(hu)}function pA(){const t=indexedDB.deleteDatabase(Ow);return new aa(t).toPromise()}function rd(){const t=indexedDB.open(Ow,fA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hu,{keyPath:Vw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hu)?e(r):(r.close(),await pA(),e(await rd()))})})}async function bg(t,e,n){const r=ju(t,!0).put({[Vw]:e,value:n});return new aa(r).toPromise()}async function mA(t,e){const n=ju(t,!1).get(e),r=await new aa(n).toPromise();return r===void 0?null:r.value}function Og(t,e){const n=ju(t,!0).delete(e);return new aa(n).toPromise()}const gA=800,yA=3;class Lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(dA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cA(),!this.activeServiceWorker)return;this.sender=new lA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await bg(e,cu,"1"),await Og(e,cu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ju(i,!1).getAll();return new aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lw.type="LOCAL";const _A=Lw;new ia(3e4,6e4);/**
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
 */function Mw(t,e){return e?Nn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xf extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vA(t){return Rw(t.auth,new xf(t),t.bypassAuthState)}function wA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Yk(n,new xf(t),t.bypassAuthState)}async function EA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Qk(n,new xf(t),t.bypassAuthState)}/**
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
 */class Fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vA;case"linkViaPopup":case"linkViaRedirect":return EA;case"reauthViaPopup":case"reauthViaRedirect":return wA;default:$t(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TA=new ia(2e3,1e4);async function IA(t,e,n){if(Xt(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=Pr(t);ik(t,e,Cf);const i=Mw(r,n);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}class Hr extends Fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TA.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const SA="pendingRedirect",Rl=new Map;class kA extends Fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rl.get(this.auth._key());if(!e){try{const r=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(t,e){const n=PA(e),r=CA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RA(t,e){Rl.set(t._key(),e)}function CA(t){return Nn(t._redirectPersistence)}function PA(t){return Al(SA,t.config.apiKey,t.name)}async function xA(t,e,n=!1){if(Xt(t.app))return Promise.reject(bn(t));const r=Pr(t),i=Mw(r,e),o=await new kA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const NA=10*60*1e3;class DA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vg(e))}saveEventToCache(e){this.cachedEventUids.add(Vg(e)),this.lastProcessedEventTime=Date.now()}}function Vg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uw(t);default:return!1}}/**
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
 */async function OA(t,e={}){return Cr(t,"GET","/v1/projects",e)}/**
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
 */const VA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LA=/^https?/;async function MA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OA(t);for(const n of e)try{if(FA(n))return}catch{}$t(t,"unauthorized-domain")}function FA(t){const e=ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LA.test(n))return!1;if(VA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UA=new ia(3e4,6e4);function Lg(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jA(t){return new Promise((e,n)=>{var r,i,s;function o(){Lg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lg(),n(en(t,"network-request-failed"))},timeout:UA.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const l=Dk("iframefcb");return fn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Sw(`${Nk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Cl=null,e})}let Cl=null;function zA(t){return Cl=Cl||jA(t),Cl}/**
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
 */const BA=new ia(5e3,15e3),$A="__/auth/iframe",WA="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KA(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?If(e,WA):`https://${t.config.authDomain}/${$A}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=qA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ra(r).slice(1)}`}async function GA(t){const e=await zA(t),n=fn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:KA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=fn().setTimeout(()=>{s(o)},BA.get());function u(){fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const QA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,XA=600,JA="_blank",ZA="http://localhost";class Mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eR(t,e,n,r=YA,i=XA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},QA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ct().toLowerCase();n&&(l=yw(h)?JA:n),mw(h)&&(e=e||ZA,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,C])=>`${g}${S}=${C},`,"");if(Tk(h)&&l!=="_self")return tR(e||"",l),new Mg(null);const m=window.open(e||"",l,f);X(m,t,"popup-blocked");try{m.focus()}catch{}return new Mg(m)}function tR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nR="__/auth/handler",rR="emulator/auth/handler",iR=encodeURIComponent("fac");async function Fg(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof Cf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof oa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${iR}=${encodeURIComponent(u)}`:"";return`${sR(t)}?${ra(l).slice(1)}${h}`}function sR({config:t}){return t.emulator?If(t,rR):`https://${t.authDomain}/${nR}`}/**
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
 */const Qc="webStorageSupport";class oR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dw,this._completeRedirectFn=xA,this._overrideRedirectResult=RA}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fg(e,n,r,ed(),i);return eR(e,o,Pf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Fg(e,n,r,ed(),i);return uA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GA(e),r=new DA(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tw()||gw()||kf()}}const aR=oR;var Ug="@firebase/auth",jg="1.7.9";/**
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
 */class lR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cR(t){ni(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(t)},h=new Ck(r,i,s,u);return Mk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new wr("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new lR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Ug,jg,uR(t)),dn(Ug,jg,"esm2017")}/**
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
 */const hR=5*60,dR=ew("authIdTokenMaxAge")||hR;let zg=null;const fR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dR)return;const i=n==null?void 0:n.token;zg!==i&&(zg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pR(t=vf()){const e=Mu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Lk(t,{popupRedirectResolver:aR,persistence:[_A,oA,Dw]}),r=ew("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=fR(s.toString());tA(n,o,()=>o(n.currentUser)),eA(n,l=>o(l))}}const i=Xv("auth");return i&&Fk(n,`http://${i}`),n}function mR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Pk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cR("Browser");var gR="firebase",yR="10.14.1";/**
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
 */dn(gR,yR,"app");var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,jw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(T,R,P){for(var I=Array(arguments.length-2),et=2;et<arguments.length;et++)I[et-2]=arguments[et];return y.prototype[R].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;16>R;++R)T[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],R=E.g[2];var P=E.g[3],I=y+(P^w&(R^P))+T[0]+3614090360&4294967295;y=w+(I<<7&4294967295|I>>>25),I=P+(R^y&(w^R))+T[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(w^P&(y^w))+T[2]+606105819&4294967295,R=P+(I<<17&4294967295|I>>>15),I=w+(y^R&(P^y))+T[3]+3250441966&4294967295,w=R+(I<<22&4294967295|I>>>10),I=y+(P^w&(R^P))+T[4]+4118548399&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(R^y&(w^R))+T[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(w^P&(y^w))+T[6]+2821735955&4294967295,R=P+(I<<17&4294967295|I>>>15),I=w+(y^R&(P^y))+T[7]+4249261313&4294967295,w=R+(I<<22&4294967295|I>>>10),I=y+(P^w&(R^P))+T[8]+1770035416&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(R^y&(w^R))+T[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(w^P&(y^w))+T[10]+4294925233&4294967295,R=P+(I<<17&4294967295|I>>>15),I=w+(y^R&(P^y))+T[11]+2304563134&4294967295,w=R+(I<<22&4294967295|I>>>10),I=y+(P^w&(R^P))+T[12]+1804603682&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(R^y&(w^R))+T[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(w^P&(y^w))+T[14]+2792965006&4294967295,R=P+(I<<17&4294967295|I>>>15),I=w+(y^R&(P^y))+T[15]+1236535329&4294967295,w=R+(I<<22&4294967295|I>>>10),I=y+(R^P&(w^R))+T[1]+4129170786&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^R&(y^w))+T[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^w&(P^y))+T[11]+643717713&4294967295,R=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(R^P))+T[0]+3921069994&4294967295,w=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(w^R))+T[5]+3593408605&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^R&(y^w))+T[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^w&(P^y))+T[15]+3634488961&4294967295,R=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(R^P))+T[4]+3889429448&4294967295,w=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(w^R))+T[9]+568446438&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^R&(y^w))+T[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^w&(P^y))+T[3]+4107603335&4294967295,R=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(R^P))+T[8]+1163531501&4294967295,w=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(w^R))+T[13]+2850285829&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^R&(y^w))+T[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^w&(P^y))+T[7]+1735328473&4294967295,R=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(R^P))+T[12]+2368359562&4294967295,w=R+(I<<20&4294967295|I>>>12),I=y+(w^R^P)+T[5]+4294588738&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^R)+T[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^w)+T[11]+1839030562&4294967295,R=P+(I<<16&4294967295|I>>>16),I=w+(R^P^y)+T[14]+4259657740&4294967295,w=R+(I<<23&4294967295|I>>>9),I=y+(w^R^P)+T[1]+2763975236&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^R)+T[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^w)+T[7]+4139469664&4294967295,R=P+(I<<16&4294967295|I>>>16),I=w+(R^P^y)+T[10]+3200236656&4294967295,w=R+(I<<23&4294967295|I>>>9),I=y+(w^R^P)+T[13]+681279174&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^R)+T[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^w)+T[3]+3572445317&4294967295,R=P+(I<<16&4294967295|I>>>16),I=w+(R^P^y)+T[6]+76029189&4294967295,w=R+(I<<23&4294967295|I>>>9),I=y+(w^R^P)+T[9]+3654602809&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^R)+T[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^w)+T[15]+530742520&4294967295,R=P+(I<<16&4294967295|I>>>16),I=w+(R^P^y)+T[2]+3299628645&4294967295,w=R+(I<<23&4294967295|I>>>9),I=y+(R^(w|~P))+T[0]+4096336452&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~R))+T[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~w))+T[14]+2878612391&4294967295,R=P+(I<<15&4294967295|I>>>17),I=w+(P^(R|~y))+T[5]+4237533241&4294967295,w=R+(I<<21&4294967295|I>>>11),I=y+(R^(w|~P))+T[12]+1700485571&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~R))+T[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~w))+T[10]+4293915773&4294967295,R=P+(I<<15&4294967295|I>>>17),I=w+(P^(R|~y))+T[1]+2240044497&4294967295,w=R+(I<<21&4294967295|I>>>11),I=y+(R^(w|~P))+T[8]+1873313359&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~R))+T[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~w))+T[6]+2734768916&4294967295,R=P+(I<<15&4294967295|I>>>17),I=w+(P^(R|~y))+T[13]+1309151649&4294967295,w=R+(I<<21&4294967295|I>>>11),I=y+(R^(w|~P))+T[4]+4149444226&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~R))+T[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~w))+T[2]+718787259&4294967295,R=P+(I<<15&4294967295|I>>>17),I=w+(P^(R|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,T=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=w;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<y;)if(T[R++]=E.charCodeAt(P++),R==this.blockSize){i(this,T),R=0;break}}else for(;P<y;)if(T[R++]=E[P++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)E[w++]=this.g[y]>>>T&255;return E};function s(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],T=!0,R=E.length-1;0<=R;R--){var P=E[R]|0;T&&P==y||(w[R]=P,T=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return V(h(-E));for(var y=[],w=1,T=0;E>=w;T++)y[T]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return V(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),T=m,R=0;R<E.length;R+=8){var P=Math.min(8,E.length-R),I=parseInt(E.substring(R,R+P),y);8>P?(P=h(Math.pow(y,P)),T=T.j(P).add(h(I))):(T=T.j(w),T=T.add(h(I)))}return T}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-V(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(D(this))return"-"+V(this).toString(E);for(var y=h(Math.pow(E,6)),w=this,T="";;){var R=O(w,y).g;w=k(w,R.j(y));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=R,C(w))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=k(this,E),D(E)?-1:C(E)?0:1};function V(E){for(var y=E.g.length,w=[],T=0;T<y;T++)w[T]=~E.g[T];return new o(w,~E.h).add(g)}t.abs=function(){return D(this)?V(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0,R=0;R<=y;R++){var P=T+(this.i(R)&65535)+(E.i(R)&65535),I=(P>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);T=I>>>16,P&=65535,I&=65535,w[R]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function k(E,y){return E.add(V(y))}t.j=function(E){if(C(this)||C(E))return m;if(D(this))return D(E)?V(this).j(V(E)):V(V(this).j(E));if(D(E))return V(this.j(V(E)));if(0>this.l(S)&&0>E.l(S))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<E.g.length;R++){var P=this.i(T)>>>16,I=this.i(T)&65535,et=E.i(R)>>>16,sn=E.i(R)&65535;w[2*T+2*R]+=I*sn,v(w,2*T+2*R),w[2*T+2*R+1]+=P*sn,v(w,2*T+2*R+1),w[2*T+2*R+1]+=I*et,v(w,2*T+2*R+1),w[2*T+2*R+2]+=P*et,v(w,2*T+2*R+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function O(E,y){if(C(y))throw Error("division by zero");if(C(E))return new A(m,m);if(D(E))return y=O(V(E),y),new A(V(y.g),V(y.h));if(D(y))return y=O(E,V(y)),new A(V(y.g),y.h);if(30<E.g.length){if(D(E)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,T=y;0>=T.l(E);)w=z(w),T=z(T);var R=j(w,1),P=j(T,1);for(T=j(T,2),w=j(w,2);!C(T);){var I=P.add(T);0>=I.l(E)&&(R=R.add(w),P=I),T=j(T,1),w=j(w,1)}return y=k(E,R.j(y)),new A(R,y)}for(R=m;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(w),I=P.j(y);D(I)||0<I.l(E);)w-=T,P=h(w),I=P.j(y);C(P)&&(P=g),R=R.add(P),E=k(E,I)}return new A(R,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&E.i(T);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|E.i(T);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^E.i(T);return new o(w,this.h^E.h)};function z(E){for(var y=E.g.length+1,w=[],T=0;T<y;T++)w[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(w,E.h)}function j(E,y){var w=y>>5;y%=32;for(var T=E.g.length-w,R=[],P=0;P<T;P++)R[P]=0<y?E.i(P+w)>>>y|E.i(P+w+1)<<32-y:E.i(P+w);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Qr=o}).apply(typeof Bg<"u"?Bg:typeof self<"u"?self:typeof window<"u"?window:{});var il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zw,no,Bw,Pl,id,$w,Ww,Hw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof il=="object"&&il];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var x=a[p];if(!(x in d))break e;d=d[x]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,x={next:function(){if(!p&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,p),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,x,b){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return c.prototype[x].apply(p,B)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const x=a.length||0,b=p.length||0;a.length=x+b;for(let B=0;B<b;B++)a[x+B]=p[B]}else a.push(p)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function j(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(d in p)a[d]=p[d];for(let b=0;b<w.length;b++)d=w[b],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Y;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class et{constructor(){this.h=this.g=null}add(c,d){const p=sn.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var sn=new k(()=>new Wn,a=>a.reset());class Wn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Vt,$=!1,Y=new et,ee=()=>{const a=l.Promise.resolve(void 0);Vt=()=>{a.then(me)}};var me=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){P(d)}var c=sn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Wt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function St(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(z){e:{try{O(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&St.aa.h.call(this)}}C(St,Ie);var kt={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),ma=0;function ga(a,c,d,p,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=x,this.key=++ma,this.da=this.fa=!1}function gi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _n(a){this.src=a,this.g={},this.h=0}_n.prototype.add=function(a,c,d,p,x){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var B=vn(a,c,p,x);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new ga(c,this.src,b,!!p,x),c.fa=d,a.push(c)),c};function yi(a,c){var d=c.type;if(d in a.g){var p=a.g[d],x=Array.prototype.indexOf.call(p,c,void 0),b;(b=0<=x)&&Array.prototype.splice.call(p,x,1),b&&(gi(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function vn(a,c,d,p){for(var x=0;x<a.length;++x){var b=a[x];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==p)return x}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),Nr={};function _i(a,c,d,p,x){if(Array.isArray(c)){for(var b=0;b<c.length;b++)_i(a,c[b],d,p,x);return null}return d=va(d),a&&a[yt]?a.K(c,d,h(p)?!!p.capture:!1,x):ks(a,c,d,!1,p,x)}function ks(a,c,d,p,x,b){if(!c)throw Error("Invalid event type");var B=h(x)?!!x.capture:!!x,pe=L(a);if(pe||(a[Ss]=pe=new _n(a)),d=pe.add(c,d,p,B,b),d.proxy)return d;if(p=wn(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Wt||(x=B),x===void 0&&(x=!1),a.addEventListener(c.toString(),p,x);else if(a.attachEvent)a.attachEvent(Rs(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function wn(){function a(d){return c.call(a.src,a.listener,d)}const c=_a;return a}function ya(a,c,d,p,x){if(Array.isArray(c))for(var b=0;b<c.length;b++)ya(a,c[b],d,p,x);else p=h(p)?!!p.capture:!!p,d=va(d),a&&a[yt]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=vn(b,d,p,x),-1<d&&(gi(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=L(a))&&(c=a.g[c.toString()],a=-1,c&&(a=vn(c,d,p,x)),(d=-1<a?c[a]:null)&&As(d))}function As(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[yt])yi(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Rs(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=L(c))?(yi(d,a),d.h==0&&(d.src=null,c[Ss]=null)):gi(a)}}}function Rs(a){return a in Nr?Nr[a]:Nr[a]="on"+a}function _a(a,c){if(a.da)a=!0;else{c=new St(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&As(a),a=d.call(p,c)}return a}function L(a){return a=a[Ss],a instanceof _n?a:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function va(a){return typeof a=="function"?a:(a[Cs]||(a[Cs]=function(c){return a.handleEvent(c)}),a[Cs])}function ze(){re.call(this),this.i=new _n(this),this.M=this,this.F=null}C(ze,re),ze.prototype[yt]=!0,ze.prototype.removeEventListener=function(a,c,d,p){ya(this,a,c,d,p)};function He(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var x=c;c=new Ie(p,a),T(c,x)}if(x=!0,d)for(var b=d.length-1;0<=b;b--){var B=c.g=d[b];x=vi(B,p,!0,c)&&x}if(B=c.g=a,x=vi(B,p,!0,c)&&x,x=vi(B,p,!1,c)&&x,d)for(b=0;b<d.length;b++)B=c.g=d[b],x=vi(B,p,!1,c)&&x}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)gi(d[p]);delete a.g[c],a.h--}}this.F=null},ze.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},ze.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function vi(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,b=0;b<c.length;++b){var B=c[b];if(B&&!B.da&&B.capture==d){var pe=B.listener,qe=B.ha||B.src;B.fa&&yi(a.i,B),x=pe.call(qe,p)!==!1&&x}}return x&&!p.defaultPrevented}function wa(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ea(a){a.g=wa(()=>{a.g=null,a.i&&(a.i=!1,Ea(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ta extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ea(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(a){re.call(this),this.h=a,this.g={}}C(Dr,re);var Ia=[];function Sa(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&As(c)},a),a.g={}}Dr.prototype.N=function(){Dr.aa.N.call(this),Sa(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=l.JSON.stringify,rc=l.JSON.parse,ic=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ps(){}Ps.prototype.h=null;function Ei(a){return a.h||(a.h=a.i())}function Ti(){}var br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ii(){Ie.call(this,"d")}C(Ii,Ie);function xs(){Ie.call(this,"c")}C(xs,Ie);var En={},ka=null;function Or(){return ka=ka||new ze}En.La="serverreachability";function N(a){Ie.call(this,En.La,a)}C(N,Ie);function G(a){const c=Or();He(c,new N(c))}En.STAT_EVENT="statevent";function ie(a,c){Ie.call(this,En.STAT_EVENT,a),this.stat=c}C(ie,Ie);function K(a){const c=Or();He(c,new ie(c,a))}En.Ma="timingevent";function ge(a,c){Ie.call(this,En.Ma,a),this.size=c}C(ge,Ie);function Ht(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ns(){this.g=!0}Ns.prototype.xa=function(){this.g=!1};function CE(a,c,d,p,x,b){a.info(function(){if(a.g)if(b)for(var B="",pe=b.split("&"),qe=0;qe<pe.length;qe++){var ce=pe[qe].split("=");if(1<ce.length){var tt=ce[0];ce=ce[1];var nt=tt.split("_");B=2<=nt.length&&nt[1]=="type"?B+(tt+"="+ce+"&"):B+(tt+"=redacted&")}}else B=null;else B=b;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+c+`
`+d+`
`+B})}function PE(a,c,d,p,x,b,B){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+c+`
`+d+`
`+b+" "+B})}function Si(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+NE(a,d)+(p?" "+p:"")})}function xE(a,c){a.info(function(){return"TIMEOUT: "+c})}Ns.prototype.info=function(){};function NE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var x=p[1];if(Array.isArray(x)&&!(1>x.length)){var b=x[0];if(b!="noop"&&b!="stop"&&b!="close")for(var B=1;B<x.length;B++)x[B]=""}}}}return wi(d)}catch{return c}}var Aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sc;function Ra(){}C(Ra,Ps),Ra.prototype.g=function(){return new XMLHttpRequest},Ra.prototype.i=function(){return{}},sc=new Ra;function Hn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Dr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wp}function wp(){this.i=null,this.g="",this.h=!1}var Ep={},oc={};function ac(a,c,d){a.L=1,a.v=Na(Tn(c)),a.m=d,a.P=!0,Tp(a,null)}function Tp(a,c){a.F=Date.now(),Ca(a),a.A=Tn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Lp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new wp,a.g=em(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Ta(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Ia[0]=x.toString()),x=Ia);for(var b=0;b<x.length;b++){var B=_i(d,x[b],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),G(),CE(a.i,a.u,a.A,a.l,a.R,a.m)}Hn.prototype.ca=function(a){a=a.target;const c=this.M;c&&In(a)==3?c.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const nt=In(this.g);var c=this.g.Ba();const Ri=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||$p(this.g)))){this.J||nt!=4||c==7||(c==8||0>=Ri?G(3):G(2)),lc(this);var d=this.g.Z();this.X=d;t:if(Ip(this)){var p=$p(this.g);a="";var x=p.length,b=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),Ds(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(b&&c==x-1)});p.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,PE(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,qe=this.g;if((pe=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var ce=pe;break t}}ce=null}if(d=ce)Si(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uc(this,d);else{this.o=!1,this.s=3,K(12),Vr(this),Ds(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<B.length;)if(qt=DE(this,B),qt==oc){nt==4&&(this.s=4,K(14),d=!1),Si(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Ep){this.s=4,K(15),Si(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Si(this.i,this.l,qt,null),uc(this,qt);if(Ip(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||B.length!=0||this.h.h||(this.s=1,K(16),d=!1),this.o=this.o&&d,!d)Si(this.i,this.l,B,"[Invalid Chunked Response]"),Vr(this),Ds(this);else if(0<B.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),mc(tt),tt.M=!0,K(11))}}else Si(this.i,this.l,B,null),uc(this,B);nt==4&&Vr(this),this.o&&!this.J&&(nt==4?Yp(this.j,this):(this.o=!1,Ca(this)))}else QE(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,K(12)):(this.s=0,K(13)),Vr(this),Ds(this)}}}catch{}finally{}};function Ip(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function DE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?oc:(d=Number(c.substring(d,p)),isNaN(d)?Ep:(p+=1,p+d>c.length?oc:(c=c.slice(p,p+d),a.C=p+d,c)))}Hn.prototype.cancel=function(){this.J=!0,Vr(this)};function Ca(a){a.S=Date.now()+a.I,Sp(a,a.I)}function Sp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ht(g(a.ba,a),c)}function lc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xE(this.i,this.A),this.L!=2&&(G(),K(17)),Vr(this),this.s=2,Ds(this)):Sp(this,this.S-a)};function Ds(a){a.j.G==0||a.J||Yp(a.j,a)}function Vr(a){lc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Sa(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function uc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||cc(d.h,a))){if(!a.K&&cc(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ma(d),Va(d);else break e;pc(d),K(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ht(g(d.Za,d),6e3));if(1>=Rp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mr(d,11)}else if((a.K||d.g==a)&&Ma(d),!v(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let ce=x[c];if(d.T=ce[0],ce=ce[1],d.G==2)if(ce[0]=="c"){d.K=ce[1],d.ia=ce[2];const tt=ce[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ce[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const Ri=ce[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(p=1.5*Ri,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const qt=a.g;if(qt){const Ua=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ua){var b=p.h;b.g||Ua.indexOf("spdy")==-1&&Ua.indexOf("quic")==-1&&Ua.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(hc(b,b.h),b.h=null))}if(p.D){const gc=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(p.ya=gc,_e(p.I,p.D,gc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var B=a;if(p.qa=Zp(p,p.J?p.ia:null,p.W),B.K){Cp(p.h,B);var pe=B,qe=p.L;qe&&(pe.I=qe),pe.B&&(lc(pe),Ca(pe)),p.g=B}else Gp(p);0<d.i.length&&La(d)}else ce[0]!="stop"&&ce[0]!="close"||Mr(d,7);else d.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Mr(d,7):fc(d):ce[0]!="noop"&&d.l&&d.l.ta(ce),d.v=0)}}G(4)}catch{}}var bE=class{constructor(a,c){this.g=a,this.map=c}};function kp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ap(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rp(a){return a.h?1:a.g?a.g.size:0}function cc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function hc(a,c){a.g?a.g.add(c):a.h=c}function Cp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}kp.prototype.cancel=function(){if(this.i=Pp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function OE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function VE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function xp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=VE(a),p=OE(a),x=p.length,b=0;b<x;b++)c.call(void 0,p[b],d&&d[b],a)}var Np=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),x=null;if(0<=p){var b=a[d].substring(0,p);x=a[d].substring(p+1)}else b=a[d];c(b,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,Pa(this,a.j),this.o=a.o,this.g=a.g,xa(this,a.s),this.l=a.l;var c=a.i,d=new Vs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Dp(this,d),this.m=a.m}else a&&(c=String(a).match(Np))?(this.h=!1,Pa(this,c[1]||"",!0),this.o=bs(c[2]||""),this.g=bs(c[3]||"",!0),xa(this,c[4]),this.l=bs(c[5]||"",!0),Dp(this,c[6]||"",!0),this.m=bs(c[7]||"")):(this.h=!1,this.i=new Vs(null,this.h))}Lr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Os(c,bp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Os(c,bp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Os(d,d.charAt(0)=="/"?UE:FE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Os(d,zE)),a.join("")};function Tn(a){return new Lr(a)}function Pa(a,c,d){a.j=d?bs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function xa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Dp(a,c,d){c instanceof Vs?(a.i=c,BE(a.i,a.h)):(d||(c=Os(c,jE)),a.i=new Vs(c,a.h))}function _e(a,c,d){a.i.set(c,d)}function Na(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,ME),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ME(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bp=/[#\/\?@]/g,FE=/[#\?:]/g,UE=/[#\?]/g,jE=/[#\?@]/g,zE=/#/g;function Vs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&LE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Vs.prototype,t.add=function(a,c){qn(this),this.i=null,a=ki(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Op(a,c){qn(a),c=ki(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Vp(a,c){return qn(a),c=ki(a,c),a.g.has(c)}t.forEach=function(a,c){qn(this),this.g.forEach(function(d,p){d.forEach(function(x){a.call(c,x,p,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const x=a[p];for(let b=0;b<x.length;b++)d.push(c[p])}return d},t.V=function(a){qn(this);let c=[];if(typeof a=="string")Vp(this,a)&&(c=c.concat(this.g.get(ki(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return qn(this),this.i=null,a=ki(this,a),Vp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Lp(a,c,d){Op(a,c),0<d.length&&(a.i=null,a.g.set(ki(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const b=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var x=b;B[p]!==""&&(x+="="+encodeURIComponent(String(B[p]))),a.push(x)}}return this.i=a.join("&")};function ki(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function BE(a,c){c&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(d,p){var x=p.toLowerCase();p!=x&&(Op(this,p),Lp(this,x,d))},a)),a.j=c}function $E(a,c){const d=new Ns;if(l.Image){const p=new Image;p.onload=S(Kn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=S(Kn,d,"TestLoadImage: error",!1,c,p),p.onabort=S(Kn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(Kn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function WE(a,c){const d=new Ns,p=new AbortController,x=setTimeout(()=>{p.abort(),Kn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(b=>{clearTimeout(x),b.ok?Kn(d,"TestPingServer: ok",!0,c):Kn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Kn(d,"TestPingServer: error",!1,c)})}function Kn(a,c,d,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(d)}catch{}}function HE(){this.g=new ic}function qE(a,c,d){const p=d||"";try{xp(a,function(x,b){let B=x;h(x)&&(B=wi(x)),c.push(p+b+"="+encodeURIComponent(B))})}catch(x){throw c.push(p+"type="+encodeURIComponent("_badmap")),x}}function Da(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Da,Ps),Da.prototype.g=function(){return new ba(this.l,this.j)},Da.prototype.i=function(a){return function(){return a}}({});function ba(a,c){ze.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ba,ze),t=ba.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ls(this):Ms(this),this.readyState==3&&Mp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ls(this))},t.Qa=function(a){this.g&&(this.response=a,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ms(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fp(a){let c="";return j(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function dc(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Fp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,c,d))}function Ce(a){ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ce,ze);var KE=/^https?$/i,GE=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sc.g(),this.v=this.o?Ei(this.o):Ei(sc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Up(this,b);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)d.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())d.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(GE,c,void 0))||p||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of d)this.g.setRequestHeader(b,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Up(this,b)}};function Up(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,jp(a),Oa(a)}function jp(a){a.A||(a.A=!0,He(a,"complete"),He(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,He(this,"complete"),He(this,"abort"),Oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oa(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zp(this):this.bb())},t.bb=function(){zp(this)};function zp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)wa(a.Ea,0,a);else if(He(a,"readystatechange"),In(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=B===0){var x=String(a.D).match(Np)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),p=!KE.test(x?x.toLowerCase():"")}d=p}if(d)He(a,"complete"),He(a,"success");else{a.m=6;try{var b=2<In(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",jp(a)}}finally{Oa(a)}}}}function Oa(a,c){if(a.g){Bp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||He(a,"ready");try{d.onreadystatechange=p}catch{}}}function Bp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),rc(c)}};function $p(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function QE(a){const c={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(v(a[p]))continue;var d=R(a[p]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[x]||[];c[x]=b,b.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Wp(a){this.Aa=0,this.i=[],this.j=new Ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,a),this.cb=Fs("retryDelaySeedMs",1e4,a),this.Wa=Fs("forwardChannelMaxRetries",2,a),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kp(a&&a.concurrentRequestLimit),this.Da=new HE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){K(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Zp(this,null,this.W),La(this)};function fc(a){if(Hp(a),a.G==3){var c=a.U++,d=Tn(a.I);if(_e(d,"SID",a.K),_e(d,"RID",c),_e(d,"TYPE","terminate"),Us(a,d),c=new Hn(a,a.j,c),c.L=2,c.v=Na(Tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=em(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ca(c)}Jp(a)}function Va(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function Hp(a){Va(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function La(a){if(!Ap(a.h)&&!a.s){a.s=!0;var c=a.Ga;Vt||ee(),$||(Vt(),$=!0),Y.add(c,a),a.B=0}}function YE(a,c){return Rp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ht(g(a.Ga,a,c),Xp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Hn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=y(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(x.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Kp(this,x,c),d=Tn(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),Us(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(Fp(b)))+"&"+c:this.m&&dc(d,this.m,b)),hc(this.h,x),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",c),_e(d,"SID","null"),x.T=!0,ac(x,d,null)):ac(x,d,c),this.G=2}}else this.G==3&&(a?qp(this,a):this.i.length==0||Ap(this.h)||qp(this))};function qp(a,c){var d;c?d=c.l:d=a.U++;const p=Tn(a.I);_e(p,"SID",a.K),_e(p,"RID",d),_e(p,"AID",a.T),Us(a,p),a.m&&a.o&&dc(p,a.m,a.o),d=new Hn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Kp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),hc(a.h,d),ac(d,p,c)}function Us(a,c){a.H&&j(a.H,function(d,p){_e(c,p,d)}),a.l&&xp({},function(d,p){_e(c,p,d)})}function Kp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let b=-1;for(;;){const B=["count="+d];b==-1?0<d?(b=x[0].g,B.push("ofs="+b)):b=0:B.push("ofs="+b);let pe=!0;for(let qe=0;qe<d;qe++){let ce=x[qe].g;const tt=x[qe].map;if(ce-=b,0>ce)b=Math.max(0,x[qe].g-100),pe=!1;else try{qE(tt,B,"req"+ce+"_")}catch{p&&p(tt)}}if(pe){p=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function Gp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Vt||ee(),$||(Vt(),$=!0),Y.add(c,a),a.v=0}}function pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ht(g(a.Fa,a),Xp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Qp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ht(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,K(10),Va(this),Qp(this))};function mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Qp(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Tn(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),Us(a,c),a.m&&a.o&&dc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Na(Tn(c)),d.m=null,d.P=!0,Tp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Va(this),pc(this),K(19))};function Ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Yp(a,c){var d=null;if(a.g==c){Ma(a),mc(a),a.g=null;var p=2}else if(cc(a.h,c))d=c.D,Cp(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;p=Or(),He(p,new ge(p,d)),La(a)}else Gp(a);else if(x=c.s,x==3||x==0&&0<c.X||!(p==1&&YE(a,c)||p==2&&pc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Xp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Mr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),p=a.Xa;const x=!p;p=new Lr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pa(p,"https"),Na(p),x?$E(p.toString(),d):WE(p.toString(),d)}else K(2);a.G=0,a.l&&a.l.sa(c),Jp(a),Hp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function Jp(a){if(a.G=0,a.ka=[],a.l){const c=Pp(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Zp(a,c,d){var p=d instanceof Lr?Tn(d):new Lr(d);if(p.g!="")c&&(p.g=c+"."+p.g),xa(p,p.s);else{var x=l.location;p=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var b=new Lr(null);p&&Pa(b,p),c&&(b.g=c),x&&xa(b,x),d&&(b.l=d),p=b}return d=a.D,c=a.ya,d&&c&&_e(p,d,c),_e(p,"VER",a.la),Us(a,p),p}function em(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ce(new Da({eb:d})):new Ce(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tm(){}t=tm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fa(){}Fa.prototype.g=function(a,c){return new At(a,c)};function At(a,c){ze.call(this),this.g=new Wp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ai(this)}C(At,ze),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){fc(this.g)},At.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=wi(a),a=d);c.i.push(new bE(c.Ya++,a)),c.G==3&&La(c)},At.prototype.N=function(){this.g.l=null,delete this.j,fc(this.g),delete this.g,At.aa.N.call(this)};function nm(a){Ii.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(nm,Ii);function rm(){xs.call(this),this.status=1}C(rm,xs);function Ai(a){this.g=a}C(Ai,tm),Ai.prototype.ua=function(){He(this.g,"a")},Ai.prototype.ta=function(a){He(this.g,new nm(a))},Ai.prototype.sa=function(a){He(this.g,new rm)},Ai.prototype.ra=function(){He(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Hw=function(){return new Fa},Ww=function(){return Or()},$w=En,id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,Pl=Aa,vp.COMPLETE="complete",Bw=vp,Ti.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",ze.prototype.listen=ze.prototype.K,no=Ti,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,zw=Ce}).apply(typeof il<"u"?il:typeof self<"u"?self:typeof window<"u"?window:{});const $g="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let vs="10.14.0";/**
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
 */const si=new yf("@firebase/firestore");function Gs(){return si.logLevel}function q(t,...e){if(si.logLevel<=ae.DEBUG){const n=e.map(Nf);si.debug(`Firestore (${vs}): ${t}`,...n)}}function zn(t,...e){if(si.logLevel<=ae.ERROR){const n=e.map(Nf);si.error(`Firestore (${vs}): ${t}`,...n)}}function as(t,...e){if(si.logLevel<=ae.WARN){const n=e.map(Nf);si.warn(`Firestore (${vs}): ${t}`,...n)}}function Nf(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function fe(t,e){t||Z()}function ne(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class vR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wR{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new qw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ot(e)}}class ER{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ER(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new IR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Kw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new je(0,0))}static max(){return new te(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Wo{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const AR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Wo{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return AR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(we.fromString(e))}static fromName(e){return new Q(we.fromString(e).popFirst(5))}static empty(){return new Q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new we(e.slice()))}}function RR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Er(i,Q.empty(),e)}function CR(t){return new Er(t.readTime,t.key,-1)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(te.min(),Q.empty(),-1)}static max(){return new Er(te.max(),Q.empty(),-1)}}function PR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const xR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function la(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==xR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function DR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ua(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Df{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Df.oe=-1;function zu(t){return t==null}function du(t){return t===0&&1/t==-1/0}function bR(t){return typeof t=="number"&&Number.isInteger(t)&&!du(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hg(this.data.getIterator())}getIteratorFrom(e){return new Hg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Hg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Xe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qw("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const OR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=OR.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function bf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Of(t){const e=t.mapValue.fields.__previous_value__;return bf(e)?Of(e):e}function Ho(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class VR{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ol={mapValue:{}};function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bf(t)?4:MR(t)?9007199254740991:LR(t)?10:11:Z()}function gn(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Tr(i.timestampValue),l=Tr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?du(o)===du(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Wg(o)!==Wg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!gn(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function Ko(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qg(t.timestampValue,e.timestampValue);case 4:return qg(Ho(t),Ho(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=oi(s),u=oi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=he(l[h],u[h]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(be(s.latitude),be(o.latitude));return l!==0?l:he(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},g=o.fields||{},S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=he(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Kg(S,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ol.mapValue&&o===ol.mapValue)return 0;if(s===ol.mapValue)return 1;if(o===ol.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=he(u[m],f[m]);if(g!==0)return g;const S=us(l[u[m]],h[f[m]]);if(S!==0)return S}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function qg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Tr(t),r=Tr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Kg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=us(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function cs(t){return sd(t)}function sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=sd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sd(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Gg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function od(t){return!!t&&"integerValue"in t}function Vf(t){return!!t&&"arrayValue"in t}function Qg(t){return!!t&&"nullValue"in t}function Yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xl(t){return!!t&&"mapValue"in t}function LR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=yo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(yo(this.value))}}function Yw(t){const e=[];return di(t.fields,(n,r)=>{const i=new Qe([n]);if(xl(r)){const s=Yw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
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
 */class lt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,te.min(),te.min(),te.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,te.min(),te.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,te.min(),te.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fu{constructor(e,n){this.position=e,this.inclusive=n}}function Xg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=us(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Go{constructor(e,n="asc"){this.field=e,this.dir=n}}function FR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Xw{}class Me extends Xw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jR(e,n,r):n==="array-contains"?new $R(e,r):n==="in"?new WR(e,r):n==="not-in"?new HR(e,r):n==="array-contains-any"?new qR(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zR(e,r):new BR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(us(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends Xw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return Jw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Jw(t){return t.op==="and"}function Zw(t){return UR(t)&&Jw(t)}function UR(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function ad(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(Zw(t))return t.filters.map(e=>ad(e)).join(",");{const e=t.filters.map(n=>ad(n)).join(",");return`${t.op}(${e})`}}function e0(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&gn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&e0(o,i.filters[l]),!0):!1}(t,e):void Z()}function t0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(t0).join(" ,")+"}"}(t):"Filter"}class jR extends Me{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class zR extends Me{constructor(e,n){super(e,"in",n),this.keys=n0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BR extends Me{constructor(e,n){super(e,"not-in",n),this.keys=n0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class $R extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vf(n)&&Ko(n.arrayValue,this.value)}}class WR extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class HR extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ko(this.value.arrayValue,n)}}class qR extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
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
 */class KR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Zg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KR(t,e,n,r,i,s,o)}function Lf(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ue=n}return e.ue}function Mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jg(t.startAt,e.startAt)&&Jg(t.endAt,e.endAt)}function ld(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ws{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GR(t,e,n,r,i,s,o,l){return new ws(t,e,n,r,i,s,o,l)}function Ff(t){return new ws(t)}function ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r0(t){return t.collectionGroup!==null}function _o(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Go(s,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new Go(Qe.keyField(),r))}return e.ce}function pn(t){const e=ne(t);return e.le||(e.le=QR(e,_o(t))),e.le}function QR(t,e){if(t.limitType==="F")return Zg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Go(i.field,s)});const n=t.endAt?new fu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fu(t.startAt.position,t.startAt.inclusive):null;return Zg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ud(t,e){const n=t.filters.concat([e]);return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cd(t,e,n){return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bu(t,e){return Mf(pn(t),pn(e))&&t.limitType===e.limitType}function i0(t){return`${Lf(pn(t))}|lt:${t.limitType}`}function Pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>t0(i)).join(", ")}]`),zu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>cs(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Xg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,_o(r),i)||r.endAt&&!function(o,l,u){const h=Xg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,_o(r),i))}(t,e)}function YR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s0(t){return(e,n)=>{let r=!1;for(const i of _o(t)){const s=XR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?us(u,h):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gw(this.inner)}size(){return this.innerSize}}/**
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
 */const JR=new Re(Q.comparator);function Bn(){return JR}const o0=new Re(Q.comparator);function ro(...t){let e=o0;for(const n of t)e=e.insert(n.key,n);return e}function a0(t){let e=o0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return vo()}function l0(){return vo()}function vo(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZR=new Re(Q.comparator),eC=new Xe(Q.comparator);function oe(...t){let e=eC;for(const n of t)e=e.add(n);return e}const tC=new Xe(he);function nC(){return tC}/**
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
 */function Uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:du(e)?"-0":e}}function u0(t){return{integerValue:""+t}}function rC(t,e){return bR(e)?u0(e):Uf(t,e)}/**
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
 */class Wu{constructor(){this._=void 0}}function iC(t,e,n){return t instanceof Qo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&bf(s)&&(s=Of(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof hs?h0(t,e):t instanceof Yo?d0(t,e):function(i,s){const o=c0(i,s),l=ty(o)+ty(i.Pe);return od(o)&&od(i.Pe)?u0(l):Uf(i.serializer,l)}(t,e)}function sC(t,e,n){return t instanceof hs?h0(t,e):t instanceof Yo?d0(t,e):n}function c0(t,e){return t instanceof pu?function(r){return od(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qo extends Wu{}class hs extends Wu{constructor(e){super(),this.elements=e}}function h0(t,e){const n=f0(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Yo extends Wu{constructor(e){super(),this.elements=e}}function d0(t,e){let n=f0(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}class pu extends Wu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ty(t){return be(t.integerValue||t.doubleValue)}function f0(t){return Vf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class p0{constructor(e,n){this.field=e,this.transform=n}}function oC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof hs&&i instanceof hs||r instanceof Yo&&i instanceof Yo?ls(r.elements,i.elements,gn):r instanceof pu&&i instanceof pu?gn(r.Pe,i.Pe):r instanceof Qo&&i instanceof Qo}(t.transform,e.transform)}class aC{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hu{}function m0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jf(t.key,jt.none()):new ca(t.key,t.data,jt.none());{const n=t.data,r=vt.empty();let i=new Xe(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xr(t.key,r,new Pt(i.toArray()),jt.none())}}function lC(t,e,n){t instanceof ca?function(i,s,o){const l=i.value.clone(),u=ry(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(i,s,o){if(!Nl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ry(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(g0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,r){return t instanceof ca?function(s,o,l,u){if(!Nl(s.precondition,o))return l;const h=s.value.clone(),f=iy(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(s,o,l,u){if(!Nl(s.precondition,o))return l;const h=iy(s.fieldTransforms,u,o),f=o.data;return f.setAll(g0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Nl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=c0(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function ny(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ls(r,i,(s,o)=>oC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends Hu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xr extends Hu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function g0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ry(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,sC(o,l,n[i]))}return r}function iy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iC(s,o,e))}return r}class jf extends Hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cC extends Hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=l0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=m0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>ny(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>ny(n,r))}}class zf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return ZR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zf(e,n,r,i)}}/**
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
 */class dC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,le;function pC(t){switch(t){default:return Z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function y0(t){if(t===void 0)return zn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return Z()}}(le=Ve||(Ve={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mC(){return new TextEncoder}/**
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
 */const gC=new Qr([4294967295,4294967295],0);function sy(t){const e=mC().encode(t),n=new jw;return n.update(e),new Uint8Array(n.digest())}function oy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([i,s],0)]}class Bf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Qr.fromNumber(r)));return i.compare(gC)===1&&(i=new Qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=sy(e),[r,i]=oy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Bf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=sy(e),[r,i]=oy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qu(te.min(),i,new Re(he),Bn(),oe())}}class ha{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,oe(),oe(),oe())}}/**
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
 */class Dl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class _0{constructor(e,n){this.targetId=e,this.me=n}}class v0{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ay{constructor(){this.fe=0,this.ge=uy(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new ha(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=uy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=ly(),this.Qe=new Re(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ld(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,lt.newNoDocument(o,te.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=oi(r).toUint8Array()}catch(u){if(u instanceof Qw)return as("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bf(o,i,s)}catch(u){return as(u instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ld(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,lt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new qu(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=ly(),this.Qe=new Re(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ay,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ay),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ly(){return new Re(Q.comparator)}function uy(){return new Re(Q.comparator)}const _C={asc:"ASCENDING",desc:"DESCENDING"},vC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wC={and:"AND",or:"OR"};class EC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hd(t,e){return t.useProto3Json||zu(e)?e:{value:e}}function mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TC(t,e){return mu(t,e.toTimestamp())}function mn(t){return fe(!!t),te.fromTimestamp(function(n){const r=Tr(n);return new je(r.seconds,r.nanos)}(t))}function $f(t,e){return dd(t,e).canonicalString()}function dd(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function E0(t){const e=we.fromString(t);return fe(A0(e)),e}function fd(t,e){return $f(t.databaseId,e.path)}function Yc(t,e){const n=E0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(I0(n))}function T0(t,e){return $f(t.databaseId,e)}function IC(t){const e=E0(t);return e.length===4?we.emptyPath():I0(e)}function pd(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function I0(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cy(t,e,n){return{name:fd(t,e),fields:n.value.mapValue.fields}}function SC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:y0(h.code);return new W(f,h.message||"")}(o);n=new v0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yc(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):te.min(),l=new vt({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Dl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yc(t,r.document),s=r.readTime?mn(r.readTime):te.min(),o=lt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Dl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yc(t,r.document),s=r.removedTargetIds||[];n=new Dl([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fC(i,s),l=r.targetId;n=new _0(l,o)}}return n}function kC(t,e){let n;if(e instanceof ca)n={update:cy(t,e.key,e.value)};else if(e instanceof jf)n={delete:fd(t,e.key)};else if(e instanceof xr)n={update:cy(t,e.key,e.data),updateMask:OC(e.fieldMask)};else{if(!(e instanceof cC))return Z();n={verify:fd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function AC(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(te.min())&&(o=mn(s)),new aC(o,i.transformResults||[])}(n,e))):[]}function RC(t,e){return{documents:[T0(t,e.path)]}}function CC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=T0(t,i);const s=function(h){if(h.length!==0)return k0(nn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:xi(g.field),direction:NC(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function PC(t){let e=IC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=S0(m);return g instanceof nn&&Zw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new Go(Ni(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,zu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new fu(S,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,S=m.values||[];return new fu(S,g)}(n.endAt)),GR(e,i,o,s,l,"F",u,h)}function xC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function S0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>S0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function NC(t){return _C[t]}function DC(t){return vC[t]}function bC(t){return wC[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Ni(t){return Qe.fromServerFormat(t.fieldPath)}function k0(t){return t instanceof Me?function(n){if(n.op==="=="){if(Yg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if(Qg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if(Qg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:DC(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>k0(i));return r.length===1?r[0]:{compositeFilter:{op:bC(n.op),filters:r}}}(t):Z()}function OC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class or{constructor(e,n,r,i,s=te.min(),o=te.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VC{constructor(e){this.ct=e}}function LC(t){const e=PC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cd(e,e.limit,"L"):e}/**
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
 */class MC{constructor(){this.un=new FC}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Er.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class FC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(we.comparator)).toArray()}}/**
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
 */class ds{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ds(0)}static kn(){return new ds(-1)}}/**
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
 */class UC{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wo(r.mutation,i,Pt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ro();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Bn();const o=vo(),l=function(){return vo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof xr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),wo(f.mutation,h,f.mutation.getFieldMask(),je.now())):o.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new jC(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vo();let i=new Re((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Pt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=l0();f.forEach(g=>{if(!s.has(g)){const S=m0(n.get(g),r.get(g));S!==null&&m.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(qr());let l=-1,u=s;return o.next(h=>F.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,oe())).next(f=>({batchId:l,changes:a0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ro();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const h=function(m,g){return new ws(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=ro();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&wo(f.mutation,h,Pt.empty(),je.now()),$u(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class BC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:LC(i.bundledQuery),readTime:mn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class $C{constructor(){this.overlays=new Re(Q.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=qr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=qr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dC(n,r));let s=this.Ir.get(n);s===void 0&&(s=oe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class WC{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Wf{constructor(){this.Tr=new Xe(Be.Er),this.dr=new Xe(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Be(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new we([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new we([])),r=new Be(n,e),i=new Be(n,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
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
 */class HC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(Be.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(he);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Be(new Q(s),0);let l=new Xe(he);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Be(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class qC{constructor(e){this.Mr=e,this.docs=function(){return new Re(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||PR(CR(f),r)<=0||(i.has(f.key)||$u(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KC(this)}getSize(e){return F.resolve(this.size)}}class KC extends UC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class GC{constructor(e){this.persistence=e,this.Nr=new Es(n=>Lf(n),Mf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wf,this.targetCount=0,this.kr=ds.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class QC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Df(0),this.Kr=!1,this.Kr=!0,this.$r=new WC,this.referenceDelegate=e(this),this.Ur=new GC(this),this.indexManager=new MC,this.remoteDocumentCache=function(i){return new qC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VC(n),this.Gr=new BC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $C,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new HC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new YC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YC extends NR{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Jr=new Wf,this.Yr=null}static Zr(e){return new Hf(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class qf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qf(e,n.fromCache,r,i)}}/**
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
 */class XC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return US()?8:DR(ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XC;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Gs()<=ae.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Gs()<=ae.DEBUG&&q("QueryEngine","Query:",Pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Gs()<=ae.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):F.resolve())}Yi(e,n){if(ey(n))return F.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cd(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,cd(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return ey(n)||i.isEqual(te.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Gs()<=ae.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pi(n)),this.rs(e,o,n,RR(i,-1)).next(l=>l))})}ts(e,n){let r=new Xe(s0(e));return n.forEach((i,s)=>{$u(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Gs()<=ae.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Pi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Er.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ZC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(he),this._s=new Es(s=>Lf(s),Mf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eP(t,e,n,r){return new ZC(t,e,n,r)}async function R0(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function tP(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let S=F.resolve();return g.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(D=>{const V=h.docVersions.get(C);fe(V!==null),D.version.compareTo(V)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function C0(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nP(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Ze.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(D,V,k){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=Bn(),h=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(rP(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(te.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function rP(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function iP(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sP(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function md(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ua(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function hy(t,e,n){const r=ne(t);let i=te.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=ne(u),g=m._s.get(f);return g!==void 0?F.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:oe())).next(l=>(oP(r,YR(e),l),{documents:l,Ts:s})))}function oP(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class dy{constructor(){this.activeTargetIds=nC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aP{constructor(){this.so=new dy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lP{_o(e){}shutdown(){}}/**
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
 */class fy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let al=null;function Xc(){return al===null?al=function(){return 268435456+Math.round(2147483648*Math.random())}():al++,"0x"+al.toString(16)}/**
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
 */const uP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const st="WebChannelConnection";class hP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Xc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw as("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Xc();return new Promise((o,l)=>{const u=new zw;u.setWithCredentials(!0),u.listenOnce(Bw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pl.NO_ERROR:const f=u.getResponseJson();q(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Pl.TIMEOUT:q(st,`RPC '${e}' ${s} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const m=u.getStatus();if(q(st,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const C=function(V){const k=V.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(k)>=0?k:M.UNKNOWN}(S.status);l(new W(C,S.message))}else l(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{q(st,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(st,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Xc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Hw(),l=Ww(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(st,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,S=!1;const C=new cP({Io:V=>{S?q(st,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(g||(q(st,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(st,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},To:()=>m.close()}),D=(V,k,v)=>{V.listen(k,A=>{try{v(A)}catch(O){setTimeout(()=>{throw O},0)}})};return D(m,no.EventType.OPEN,()=>{S||(q(st,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),D(m,no.EventType.CLOSE,()=>{S||(S=!0,q(st,`RPC '${e}' stream ${i} transport closed`),C.So())}),D(m,no.EventType.ERROR,V=>{S||(S=!0,as(st,`RPC '${e}' stream ${i} transport errored:`,V),C.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),D(m,no.EventType.MESSAGE,V=>{var k;if(!S){const v=V.data[0];fe(!!v);const A=v,O=A.error||((k=A[0])===null||k===void 0?void 0:k.error);if(O){q(st,`RPC '${e}' stream ${i} received error:`,O);const z=O.status;let j=function(w){const T=Ve[w];if(T!==void 0)return y0(T)}(z),E=O.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+z+" with message "+O.message),S=!0,C.So(new W(j,E)),m.close()}else q(st,`RPC '${e}' stream ${i} received:`,v),C.bo(v)}}),D(l,$w.STAT_EVENT,V=>{V.stat===id.PROXY?q(st,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===id.NOPROXY&&q(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Jc(){return typeof document<"u"?document:null}/**
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
 */function Ku(t){return new EC(t,!0)}/**
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
 */class P0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class x0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new P0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dP extends x0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=SC(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?mn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=pd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ld(u)?{documents:RC(s,u)}:{query:CC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=w0(s,o.resumeToken);const h=hd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=mu(s,o.snapshotVersion.toTimestamp());const h=hd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=xC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=pd(this.serializer),n.removeTarget=e,this.a_(n)}}class fP extends x0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=AC(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=pd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kC(this.serializer,r))};this.a_(n)}}/**
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
 */class pP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,dd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,dd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(zn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{fi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.L_.add(4),await da(h),h.q_.set("Unknown"),h.L_.delete(4),await Gu(h)}(this))})}),this.q_=new mP(r,i)}}async function Gu(t){if(fi(t))for(const e of t.B_)await e(!0)}async function da(t){for(const e of t.B_)await e(!1)}function N0(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Yf(n)?Qf(n):Ts(n).r_()&&Gf(n,e))}function Kf(t,e){const n=ne(t),r=Ts(n);n.N_.delete(e),r.r_()&&D0(n,e),n.N_.size===0&&(r.r_()?r.o_():fi(n)&&n.q_.set("Unknown"))}function Gf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ts(t).A_(e)}function D0(t,e){t.Q_.xe(e),Ts(t).R_(e)}function Qf(t){t.Q_=new yC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ts(t).start(),t.q_.v_()}function Yf(t){return fi(t)&&!Ts(t).n_()&&t.N_.size>0}function fi(t){return ne(t).L_.size===0}function b0(t){t.Q_=void 0}async function yP(t){t.q_.set("Online")}async function _P(t){t.N_.forEach((e,n)=>{Gf(t,e)})}async function vP(t,e){b0(t),Yf(t)?(t.q_.M_(e),Qf(t)):t.q_.set("Unknown")}async function wP(t,e,n){if(t.q_.set("Online"),e instanceof v0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(t,r)}else if(e instanceof Dl?t.Q_.Ke(e):e instanceof _0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await C0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),D0(s,u);const m=new or(f.target,u,h,f.sequenceNumber);Gf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await gu(t,r)}}async function gu(t,e,n){if(!ua(e))throw e;t.L_.add(1),await da(t),t.q_.set("Offline"),n||(n=()=>C0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Gu(t)})}function O0(t,e){return e().catch(n=>gu(t,n,e))}async function Qu(t){const e=ne(t),n=Ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;EP(e);)try{const i=await iP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,TP(e,i)}catch(i){await gu(e,i)}V0(e)&&L0(e)}function EP(t){return fi(t)&&t.O_.length<10}function TP(t,e){t.O_.push(e);const n=Ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function V0(t){return fi(t)&&!Ir(t).n_()&&t.O_.length>0}function L0(t){Ir(t).start()}async function IP(t){Ir(t).p_()}async function SP(t){const e=Ir(t);for(const n of t.O_)e.m_(n.mutations)}async function kP(t,e,n){const r=t.O_.shift(),i=zf.from(r,e,n);await O0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qu(t)}async function AP(t,e){e&&Ir(t).V_&&await async function(r,i){if(function(o){return pC(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Ir(r).s_(),await O0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qu(r)}}(t,e),V0(t)&&L0(t)}async function py(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.L_.add(3),await da(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Gu(n)}async function RP(t,e){const n=ne(t);e?(n.L_.delete(2),await Gu(n)):e||(n.L_.add(2),await da(n),n.q_.set("Unknown"))}function Ts(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new dP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yP.bind(null,t),Ro:_P.bind(null,t),mo:vP.bind(null,t),d_:wP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Yf(t)?Qf(t):t.q_.set("Unknown")):(await t.K_.stop(),b0(t))})),t.K_}function Ir(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new fP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IP.bind(null,t),mo:AP.bind(null,t),f_:SP.bind(null,t),g_:kP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Qu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Xf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Xf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jf(t,e){if(zn("AsyncQueue",`${e}: ${t}`),ua(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ro(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class my{constructor(){this.W_=new Re(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fs(e,n,Zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class CP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PP{constructor(){this.queries=gy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=gy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function gy(){return new Es(t=>i0(t),Bu)}async function M0(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new CP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Jf(o,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Zf(n)}async function F0(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xP(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Zf(n)}function NP(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Zf(t){t.Y_.forEach(e=>{e.next()})}var gd,yy;(yy=gd||(gd={})).ea="default",yy.Cache="cache";class U0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==gd.Cache}}/**
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
 */class j0{constructor(e){this.key=e}}class z0{constructor(e){this.key=e}}class DP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=s0(e),this.Ra=new Zi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new my,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),S=$u(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;g&&S?g.data.isEqual(S.data)?C!==D&&(r.track({type:3,doc:S}),V=!0):this.ga(g,S)||(r.track({type:2,doc:S}),V=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),V=!0):g&&!S&&(r.track({type:1,doc:g}),V=!0,(u||h)&&(l=!0)),V&&(S?(o=o.add(S),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(S,C){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return D(S)-D(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new fs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new my,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new z0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new j0(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return fs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class bP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OP{constructor(e){this.key=e,this.va=!1}}class VP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Es(l=>i0(l),Bu),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(Q.comparator),this.Na=new Map,this.La=new Wf,this.Ba={},this.ka=new Map,this.qa=ds.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function LP(t,e,n=!0){const r=K0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await B0(r,e,n,!0),i}async function MP(t,e){const n=K0(t);await B0(n,e,!0,!1)}async function B0(t,e,n,r){const i=await sP(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await FP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&N0(t.remoteStore,i),l}async function FP(t,e,n,r,i){t.Ka=(m,g,S)=>async function(D,V,k,v){let A=V.view.ma(k);A.ns&&(A=await hy(D.localStore,V.query,!1).then(({documents:E})=>V.view.ma(E,A)));const O=v&&v.targetChanges.get(V.targetId),z=v&&v.targetMismatches.get(V.targetId)!=null,j=V.view.applyChanges(A,D.isPrimaryClient,O,z);return vy(D,V.targetId,j.wa),j.snapshot}(t,m,g,S);const s=await hy(t.localStore,e,!0),o=new DP(e,s.Ts),l=o.ma(s.documents),u=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);vy(t,n,h.wa);const f=new bP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function UP(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Bu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await md(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Kf(r.remoteStore,i.targetId),yd(r,i.targetId)}).catch(la)):(yd(r,i.targetId),await md(r.localStore,i.targetId,!0))}async function jP(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kf(n.remoteStore,r.targetId))}async function zP(t,e,n){const r=GP(t);try{const i=await function(o,l){const u=ne(o),h=je.now(),f=l.reduce((S,C)=>S.add(C.key),oe());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=Bn(),D=oe();return u.cs.getEntries(S,f).next(V=>{C=V,C.forEach((k,v)=>{v.isValidDocument()||(D=D.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(V=>{m=V;const k=[];for(const v of l){const A=uC(v,m.get(v.key).overlayedDocument);A!=null&&k.push(new xr(v.key,A,Yw(A.value.mapValue),jt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,k,l)}).next(V=>{g=V;const k=V.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(S,V.batchId,k)})}).then(()=>({batchId:g.batchId,changes:a0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Re(he)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await fa(r,i.changes),await Qu(r.remoteStore)}catch(i){const s=Jf(i,"Failed to persist write");n.reject(s)}}async function $0(t,e){const n=ne(t);try{const r=await nP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await fa(n,r,e)}catch(r){await la(r)}}function _y(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&Zf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BP(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(Q.comparator);o=o.insert(s,lt.newNoDocument(s,te.min()));const l=oe().add(s),u=new qu(te.min(),new Map,new Re(he),o,l);await $0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ep(r)}else await md(r.localStore,e,!1).then(()=>yd(r,e,n)).catch(la)}async function $P(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await tP(n.localStore,e);H0(n,r,null),W0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await la(i)}}async function WP(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(fe(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);H0(r,e,n),W0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await la(i)}}function W0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function H0(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||q0(t,r)})}function q0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Kf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ep(t))}function vy(t,e,n){for(const r of n)r instanceof j0?(t.La.addReference(r.key,e),HP(t,r)):r instanceof z0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||q0(t,r.key)):Z()}function HP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),ep(t))}function ep(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(we.fromString(e)),r=t.qa.next();t.Na.set(r,new OP(n)),t.Oa=t.Oa.insert(n,r),N0(t.remoteStore,new or(pn(Ff(n.path)),r,"TargetPurposeLimboResolution",Df.oe))}}async function fa(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=qf.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(h,g=>F.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>F.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!ua(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const S=f.os.get(g),C=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,D)}}}(r.localStore,s))}async function qP(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await R0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.hs)}}function KP(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function K0(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BP.bind(null,e),e.Ca.d_=xP.bind(null,e.eventManager),e.Ca.$a=NP.bind(null,e.eventManager),e}function GP(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WP.bind(null,e),e}class yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eP(this.persistence,new JC,e.initialUser,this.serializer)}Ga(e){return new QC(Hf.Zr,this.serializer)}Wa(e){return new aP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yu.provider={build:()=>new yu};class _d{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_y(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qP.bind(null,this.syncEngine),await RP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PP}()}createDatastore(e){const n=Ku(e.databaseInfo.databaseId),r=function(s){return new hP(s)}(e.databaseInfo);return function(s,o,l,u){return new pP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new gP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_y(this.syncEngine,n,0),function(){return fy.D()?new fy:new lP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new VP(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await da(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_d.provider={build:()=>new _d};/**
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
 */class G0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class QP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=Kw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await R0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YP(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>py(e.remoteStore,i)),t._onlineComponents=e}async function YP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await Zc(t,new yu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Zc(t,new yu);return t._offlineComponents}async function Q0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await wy(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await wy(t,new _d))),t._onlineComponents}function XP(t){return Q0(t).then(e=>e.syncEngine)}async function Y0(t){const e=await Q0(t),n=e.eventManager;return n.onListen=LP.bind(null,e.syncEngine),n.onUnlisten=UP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=MP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jP.bind(null,e.syncEngine),n}function JP(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new G0({next:g=>{f.Za(),o.enqueueAndForget(()=>F0(s,m));const S=g.docs.has(l);!S&&g.fromCache?h.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?h.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new U0(Ff(l.path),f,{includeMetadataChanges:!0,_a:!0});return M0(s,m)}(await Y0(t),t.asyncQueue,e,n,r)),r.promise}function ZP(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new G0({next:g=>{f.Za(),o.enqueueAndForget(()=>F0(s,m)),g.fromCache&&u.source==="server"?h.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new U0(l,f,{includeMetadataChanges:!0,_a:!0});return M0(s,m)}(await Y0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function X0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ey=new Map;/**
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
 */function J0(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ex(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ty(t){if(!Q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iy(t){if(Q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Sy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ex("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _R;switch(r.type){case"firstParty":return new TR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ey.get(n);r&&(q("ComponentProvider","Removing Datastore"),Ey.delete(n),r.terminate())}(this),Promise.resolve()}}function tx(t,e,n,r={}){var i;const s=(t=rn(t,Xu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ot.MOCK_USER;else{l=tw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(h)}t._authCredentials=new vR(new qw(l,u))}}/**
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
 */class pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pi(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class yr extends pi{constructor(e,n,r){super(e,n,Ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new Q(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function nx(t,e,...n){if(t=xe(t),J0("collection","path",e),t instanceof Xu){const r=we.fromString(e,...n);return Iy(r),new yr(t,null,r)}{if(!(t instanceof pt||t instanceof yr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Iy(r),new yr(t.firestore,null,r)}}function _u(t,e,...n){if(t=xe(t),arguments.length===1&&(e=Kw.newId()),J0("doc","path",e),t instanceof Xu){const r=we.fromString(e,...n);return Ty(r),new pt(t,null,new Q(r))}{if(!(t instanceof pt||t instanceof yr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Ty(r),new pt(t.firestore,t instanceof yr?t.converter:null,new Q(r))}}/**
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
 */class ky{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new P0(this,"async_queue_retry"),this.Vu=()=>{const r=Jc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new On;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ua(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Xf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class mi extends Xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ky,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ky(e),this._firestoreClient=void 0,await e}}}function rx(t,e){const n=typeof t=="object"?t:vf(),r=typeof t=="string"?t:"(default)",i=Mu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jv("firestore");s&&tx(i,...s)}return i}function tp(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ix(t),t._firestoreClient}function ix(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new VR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,X0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new QP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(Ze.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ps(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pa{constructor(e){this._methodName=e}}/**
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
 */class np{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class rp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const sx=/^__.*__$/;class ox{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class Z0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Zu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(eE(this.Cu)&&sx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ax{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ku(e)}Qu(e,n,r,i=!1){return new Zu({Cu:e,methodName:n,qu:r,path:Qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ec(t){const e=t._freezeSettings(),n=Ku(t._databaseId);return new ax(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);op("Data must be an object, but it was:",o,r);const l=nE(r,o);let u,h;if(s.merge)u=new Pt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=vd(e,m,n);if(!o.contains(g))throw new W(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);iE(f,g)||f.push(g)}u=new Pt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new ox(new vt(l),u,h)}class tc extends pa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tc}}function lx(t,e,n){return new Zu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ip extends pa{_toFieldTransform(e){return new p0(e.path,new Qo)}isEqual(e){return e instanceof ip}}class sp extends pa{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=lx(this,e,!0),r=this.Ku.map(s=>Is(s,n)),i=new hs(r);return new p0(e.path,i)}isEqual(e){return e instanceof sp&&jo(this.Ku,e.Ku)}}function ux(t,e,n,r){const i=t.Qu(1,e,n);op("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();di(r,(u,h)=>{const f=ap(e,u,n);h=xe(h);const m=i.Nu(f);if(h instanceof tc)s.push(f);else{const g=Is(h,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new Pt(s);return new Z0(o,l,i.fieldTransforms)}function cx(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[vd(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(vd(e,s[g])),u.push(s[g+1]);const h=[],f=vt.empty();for(let g=l.length-1;g>=0;--g)if(!iE(h,l[g])){const S=l[g];let C=u[g];C=xe(C);const D=o.Nu(S);if(C instanceof tc)h.push(S);else{const V=Is(C,D);V!=null&&(h.push(S),f.set(S,V))}}const m=new Pt(h);return new Z0(f,m,o.fieldTransforms)}function hx(t,e,n,r=!1){return Is(n,t.Qu(r?4:3,e))}function Is(t,e){if(rE(t=xe(t)))return op("Unsupported field value:",e,t),nE(t,e);if(t instanceof pa)return function(r,i){if(!eE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Is(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:mu(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mu(i.serializer,s)}}if(r instanceof np)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ps)return{bytesValue:w0(i.serializer,r._byteString)};if(r instanceof pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$f(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof rp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Uf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Yu(r)}`)}(t,e)}function nE(t,e){const n={};return Gw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=Is(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof np||t instanceof ps||t instanceof pt||t instanceof pa||t instanceof rp)}function op(t,e,n){if(!rE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function vd(t,e,n){if((e=xe(e))instanceof Ju)return e._internalPath;if(typeof e=="string")return ap(t,e);throw vu("Field path arguments must be of type string or ",t,!1,void 0,n)}const dx=new RegExp("[~\\*/\\[\\]]");function ap(t,e,n){if(e.search(dx)>=0)throw vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ju(...e.split("."))._internalPath}catch{throw vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function iE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fx extends sE{data(){return super.data()}}function lp(t,e){return typeof e=="string"?ap(t,e):e instanceof Ju?e._internalPath:e._delegate._internalPath}/**
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
 */function px(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class up{}class oE extends up{}function mx(t,e,...n){let r=[];e instanceof up&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof hp).length,l=s.filter(u=>u instanceof cp).length;if(o>1||o>0&&l>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cp extends oE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cp(e,n,r)}_apply(e){const n=this._parse(e);return aE(e._query,n),new pi(e.firestore,e.converter,ud(e._query,n))}_parse(e){const n=ec(e.firestore);return function(s,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ry(m,f);const S=[];for(const C of m)S.push(Ay(u,s,C));g={arrayValue:{values:S}}}else g=Ay(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ry(m,f),g=hx(l,o,m,f==="in"||f==="not-in");return Me.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hp extends up{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)aE(o,u),o=ud(o,u)}(e._query,n),new pi(e.firestore,e.converter,ud(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dp extends oE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new dp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Go(s,o)}(e._query,this._field,this._direction);return new pi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ws(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function gx(t,e="asc"){const n=e,r=lp("orderBy",t);return dp._create(r,n)}function Ay(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r0(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!Q.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gg(t,new Q(r))}if(n instanceof pt)return Gg(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yu(n)}.`)}function Ry(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yx{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new rp(s)}convertGeoPoint(e){return new np(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Of(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);fe(A0(r));const i=new qo(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function lE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uE extends sE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bl extends uE{data(e={}){return super.data(e)}}class _x{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new so(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:vx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function wx(t){t=rn(t,pt);const e=rn(t.firestore,mi);return JP(tp(e),t._key).then(n=>kx(e,t,n))}class cE extends yx{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Ex(t){t=rn(t,pi);const e=rn(t.firestore,mi),n=tp(e),r=new cE(e);return px(t._query),ZP(n,t._query).then(i=>new _x(e,r,t,i))}function Tx(t,e,n){t=rn(t,pt);const r=rn(t.firestore,mi),i=lE(t.converter,e);return nc(r,[tE(ec(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,jt.none())])}function ll(t,e,n,...r){t=rn(t,pt);const i=rn(t.firestore,mi),s=ec(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof Ju?cx(s,"updateDoc",t._key,e,n,r):ux(s,"updateDoc",t._key,e),nc(i,[o.toMutation(t._key,jt.exists(!0))])}function Ix(t){return nc(rn(t.firestore,mi),[new jf(t._key,jt.none())])}function Sx(t,e){const n=rn(t.firestore,mi),r=_u(t),i=lE(t.converter,e);return nc(n,[tE(ec(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function nc(t,e){return function(r,i){const s=new On;return r.asyncQueue.enqueueAndForget(async()=>zP(await XP(r),i,s)),s.promise}(tp(t),e)}function kx(t,e,n){const r=n.docs.get(e._key),i=new cE(t);return new uE(t,i,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}function Ax(){return new ip("serverTimestamp")}function Rx(...t){return new sp("arrayUnion",t)}(function(e,n=!0){(function(i){vs=i})(hi),ni(new wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new mi(new wR(r.getProvider("auth-internal")),new SR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),dn($g,"4.7.3",e),dn($g,"4.7.3","esm2017")})();/**
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
 */const hE="firebasestorage.googleapis.com",dE="storageBucket",Cx=2*60*1e3,Px=10*60*1e3;/**
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
 */class De extends yn{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function eh(t){return"storage/"+t}function fp(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Ne.UNKNOWN,t)}function xx(t){return new De(Ne.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Nx(t){return new De(Ne.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Ne.UNAUTHENTICATED,t)}function bx(){return new De(Ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ox(t){return new De(Ne.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Vx(){return new De(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lx(){return new De(Ne.CANCELED,"User canceled the upload/download.")}function Mx(t){return new De(Ne.INVALID_URL,"Invalid URL '"+t+"'.")}function Fx(t){return new De(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ux(){return new De(Ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dE+"' property when initializing the app?")}function jx(){return new De(Ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zx(){return new De(Ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Bx(t){return new De(Ne.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function wd(t){return new De(Ne.INVALID_ARGUMENT,t)}function fE(){return new De(Ne.APP_DELETED,"The Firebase app was deleted.")}function $x(t){return new De(Ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Eo(t,e){return new De(Ne.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qs(t){throw new De(Ne.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw Fx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${f}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},D=n===hE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",k=new RegExp(`^https?://${D}/${i}/${V}`,"i"),A=[{regex:l,indices:u,postModify:s},{regex:S,indices:C,postModify:h},{regex:k,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<A.length;O++){const z=A[O],j=z.regex.exec(e);if(j){const E=j[z.indices.bucket];let y=j[z.indices.path];y||(y=""),r=new xt(E,y),z.postModify(r);break}}if(r==null)throw Mx(e);return r}}class Wx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Hx(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...V){h||(h=!0,e.apply(null,V))}function m(V){i=setTimeout(()=>{i=null,t(S,u())},V)}function g(){s&&clearTimeout(s)}function S(V,...k){if(h){g();return}if(V){g(),f.call(null,V,...k);return}if(u()||o){g(),f.call(null,V,...k);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let C=!1;function D(V){C||(C=!0,g(),!h&&(i!==null?(V||(l=2),clearTimeout(i),m(0)):V||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function qx(t){t(!1)}/**
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
 */function Kx(t){return t!==void 0}function Gx(t){return typeof t=="object"&&!Array.isArray(t)}function pp(t){return typeof t=="string"||t instanceof String}function Cy(t){return mp()&&t instanceof Blob}function mp(){return typeof Blob<"u"}function Py(t,e,n,r){if(r<e)throw wd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function gp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function pE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Yr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yr||(Yr={}));/**
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
 */function Qx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Yx{constructor(e,n,r,i,s,o,l,u,h,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,C)=>{this.resolve_=S,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ul(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Yr.NO_ERROR,u=s.getStatus();if(!l||Qx(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Yr.ABORT;r(!1,new ul(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new ul(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Kx(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=fp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?fE():Lx();o(u)}else{const u=Vx();o(u)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=Hx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Xx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Jx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Zx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function e2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function t2(t,e,n,r,i,s,o=!0){const l=pE(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return Zx(h,e),Xx(h,n),Jx(h,s),e2(h,r),new Yx(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function n2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function r2(...t){const e=n2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(mp())return new Blob(t);throw new De(Ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function i2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function s2(t){if(typeof atob>"u")throw Bx("base-64");return atob(t)}/**
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
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class th{constructor(e,n){this.data=e,this.contentType=n||null}}function o2(t,e){switch(t){case un.RAW:return new th(mE(e));case un.BASE64:case un.BASE64URL:return new th(gE(t,e));case un.DATA_URL:return new th(l2(e),u2(e))}throw fp()}function mE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function a2(t){let e;try{e=decodeURIComponent(t)}catch{throw Eo(un.DATA_URL,"Malformed data URL.")}return mE(e)}function gE(t,e){switch(t){case un.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Eo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Eo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=s2(e)}catch(i){throw i.message.includes("polyfill")?i:Eo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class yE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Eo(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=c2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function l2(t){const e=new yE(t);return e.base64?gE(un.BASE64,e.rest):a2(e.rest)}function u2(t){return new yE(t).contentType}function c2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class rr{constructor(e,n){let r=0,i="";Cy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Cy(this.data_)){const r=this.data_,i=i2(r,e,n);return i===null?null:new rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(mp()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(r2.apply(null,n))}else{const n=e.map(o=>pp(o)?o2(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new rr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function _E(t){let e;try{e=JSON.parse(t)}catch{return null}return Gx(e)?e:null}/**
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
 */function h2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function d2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function vE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function f2(t,e){return e}class ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||f2}}let cl=null;function p2(t){return!pp(t)||t.length<2?t:vE(t)}function wE(){if(cl)return cl;const t=[];t.push(new ht("bucket")),t.push(new ht("generation")),t.push(new ht("metageneration")),t.push(new ht("name","fullPath",!0));function e(s,o){return p2(o)}const n=new ht("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,t.push(i),t.push(new ht("timeCreated")),t.push(new ht("updated")),t.push(new ht("md5Hash",null,!0)),t.push(new ht("cacheControl",null,!0)),t.push(new ht("contentDisposition",null,!0)),t.push(new ht("contentEncoding",null,!0)),t.push(new ht("contentLanguage",null,!0)),t.push(new ht("contentType",null,!0)),t.push(new ht("metadata","customMetadata",!0)),cl=t,cl}function m2(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new xt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function g2(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return m2(r,t),r}function EE(t,e,n){const r=_E(e);return r===null?null:g2(t,r,n)}function y2(t,e,n,r){const i=_E(e);if(i===null||!pp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),S=gp(g,n,r),C=pE({alt:"media",token:h});return S+C})[0]}function _2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class TE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function IE(t){if(!t)throw fp()}function v2(t,e){function n(r,i){const s=EE(t,i,e);return IE(s!==null),s}return n}function w2(t,e){function n(r,i){const s=EE(t,i,e);return IE(s!==null),y2(s,i,t.host,t._protocol)}return n}function SE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=bx():i=Dx():n.getStatus()===402?i=Nx(t.bucket):n.getStatus()===403?i=Ox(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function E2(t){const e=SE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=xx(t.path)),s.serverResponse=i.serverResponse,s}return n}function T2(t,e,n){const r=e.fullServerUrl(),i=gp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new TE(i,s,w2(t,n),o);return l.errorHandler=E2(e),l}function I2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function S2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=I2(null,e)),r}function k2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let O=0;O<2;O++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=S2(e,r,i),f=_2(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",S=rr.getBlob(m,r,g);if(S===null)throw jx();const C={name:h.fullPath},D=gp(s,t.host,t._protocol),V="POST",k=t.maxUploadRetryTime,v=new TE(D,V,v2(t,n),k);return v.urlParams=C,v.headers=o,v.body=S.uploadData(),v.errorHandler=SE(e),v}class A2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Qs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class R2 extends A2{initXhr(){this.xhr_.responseType="text"}}function kE(){return new R2}/**
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
 */class li{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new li(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vE(this._location.path)}get storage(){return this._service}get parent(){const e=h2(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $x(e)}}function C2(t,e,n){t._throwIfRoot("uploadBytes");const r=k2(t.storage,t._location,wE(),new rr(e,!0),n);return t.storage.makeRequestWithTokens(r,kE).then(i=>({metadata:i,ref:t}))}function P2(t){t._throwIfRoot("getDownloadURL");const e=T2(t.storage,t._location,wE());return t.storage.makeRequestWithTokens(e,kE).then(n=>{if(n===null)throw zx();return n})}function x2(t,e){const n=d2(t._location.path,e),r=new xt(t._location.bucket,n);return new li(t.storage,r)}/**
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
 */function N2(t){return/^[A-Za-z]+:\/\//.test(t)}function D2(t,e){return new li(t,e)}function AE(t,e){if(t instanceof yp){const n=t;if(n._bucket==null)throw Ux();const r=new li(n,n._bucket);return e!=null?AE(r,e):r}else return e!==void 0?x2(t,e):t}function b2(t,e){if(e&&N2(e)){if(t instanceof yp)return D2(t,e);throw wd("To use ref(service, url), the first argument must be a Storage instance.")}else return AE(t,e)}function xy(t,e){const n=e==null?void 0:e[dE];return n==null?null:xt.makeFromBucketSpec(n,t)}function O2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:tw(i,t.app.options.projectId))}class yp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=hE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cx,this._maxUploadRetryTime=Px,this._requests=new Set,i!=null?this._bucket=xt.makeFromBucketSpec(i,this._host):this._bucket=xy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=xy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new li(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Wx(fE());{const o=t2(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ny="@firebase/storage",Dy="0.13.2";/**
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
 */const RE="storage";function V2(t,e,n){return t=xe(t),C2(t,e,n)}function L2(t){return t=xe(t),P2(t)}function M2(t,e){return t=xe(t),b2(t,e)}function F2(t=vf(),e){t=xe(t);const r=Mu(t,RE).getImmediate({identifier:e}),i=Jv("storage");return i&&U2(r,...i),r}function U2(t,e,n,r={}){O2(t,e,n,r)}function j2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yp(n,r,i,e,hi)}function z2(){ni(new wr(RE,j2,"PUBLIC").setMultipleInstances(!0)),dn(Ny,Dy,""),dn(Ny,Dy,"esm2017")}z2();const B2={apiKey:"AIzaSyBxtu3R8wlFf7AViwqF-q4kCyq7aqwBsug",authDomain:"willypersonalwebsite.firebaseapp.com",projectId:"willypersonalwebsite",storageBucket:"willypersonalwebsite.firebasestorage.app",messagingSenderId:"361639369330",appId:"1:361639369330:web:690107090380d82288c0eb"},_p=iw(B2),To=pR(_p),Ol=rx(_p),$2=F2(_p),by=["For when you need to get something out of your head.","For when you want to stay intentional about your days.","For when you just want to remember this moment.","For when you're figuring out who you are."],W2=[{icon:"✦",title:"Thoughts & Ideas",desc:"Had something on your mind at 2am? Write it down. No audience, no likes — just you."},{icon:"◎",title:"Daily Prompts",desc:"Not sure what to write? We'll ask you something worth thinking about."},{icon:"◇",title:"Gratitude",desc:"End the day noticing what went right. Small or big."},{icon:"□",title:"Plan Your Day",desc:"Set intentions in the morning. Be honest about how it actually went."},{icon:"▢",title:"Photo Memories",desc:"Some moments deserve more than a caption. Keep them here, privately."}],Fr=[{label:"Write a thought",preview:{meta:"Just now · Thought",content:"I've been overthinking this decision for weeks. Writing it out helps me realize I already know the answer."}},{label:"Answer a prompt",preview:{meta:"Today · Prompt",prompt:"What fear has quietly been running your life?",content:"Honestly? The fear of being average. I've been chasing things not because I love them but because..."}},{label:"Plan your day",preview:{meta:"Today · Day",todos:[{text:"Finish the project proposal",done:!0},{text:"Call mom back",done:!0},{text:"Go for a walk",done:!1},{text:"Read for 20 minutes",done:!1}]}},{label:"Add a memory",preview:{meta:"Today · Photo",photo:!0,content:"Golden hour from the rooftop. One of those evenings you want to hold onto."}},{label:"Look back",preview:{meta:"3 months ago · Thought",content:"I don't think I'm ready for any of this. Feels like everyone else has it figured out.",revisit:"You wrote this 3 months ago. Look how much has changed since then."}}];function H2({onSignup:t,onLogin:e}){const[n,r]=J.useState(0),[i,s]=J.useState(!0),[o,l]=J.useState(0),[u,h]=J.useState(!0);J.useEffect(()=>{const g=setInterval(()=>{s(!1),setTimeout(()=>{r(S=>(S+1)%by.length),s(!0)},400)},3e3);return()=>clearInterval(g)},[]);function f(g){h(!1),setTimeout(()=>{l(g),h(!0)},200)}const m=Fr[o];return _.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",background:"#faf9f7",color:"#1a1a18",minHeight:"100vh"},children:[_.jsxs("nav",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 48px",borderBottom:"1px solid #e8e6e0",position:"sticky",top:0,background:"#faf9f7",zIndex:100},children:[_.jsx("span",{style:{fontFamily:"'Lora', serif",fontSize:32,letterSpacing:"-0.5px"},children:"Folio"}),_.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[_.jsx("button",{onClick:e,style:{fontSize:14,background:"none",border:"none",color:"#888",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"Sign in"}),_.jsx("button",{onClick:t,style:{fontSize:14,background:"#1a1a18",color:"#faf9f7",border:"none",borderRadius:20,padding:"8px 20px",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"Try for free"})]})]}),_.jsxs("section",{style:{maxWidth:760,margin:"0 auto",padding:"100px 24px 80px",textAlign:"center"},children:[_.jsxs("h1",{style:{fontFamily:"'Lora', serif",fontSize:"clamp(36px, 6vw, 64px)",lineHeight:1.15,letterSpacing:"-1px",marginBottom:24,fontWeight:400},children:["Write freely.",_.jsx("br",{}),"Live intentionally."]}),_.jsxs("p",{style:{fontSize:18,color:"#555",lineHeight:1.7,marginBottom:16,maxWidth:520,margin:"0 auto 16px"},children:["Social media took away your private space.",_.jsx("br",{}),_.jsx("strong",{style:{color:"#1a1a18"},children:"Folio gives it back."})]}),_.jsx("div",{style:{height:32,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:48,marginTop:32},children:_.jsx("p",{style:{fontSize:15,color:"#888",fontStyle:"italic",opacity:i?1:0,transform:i?"translateY(0)":"translateY(6px)",transition:"opacity 0.4s ease, transform 0.4s ease"},children:by[n]})}),_.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[_.jsx("button",{onClick:t,style:{fontSize:15,background:"#1a1a18",color:"#faf9f7",border:"none",borderRadius:24,padding:"14px 32px",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",fontWeight:500},children:"Try for free"}),_.jsx("button",{onClick:e,style:{fontSize:15,background:"none",color:"#1a1a18",border:"1px solid #e8e6e0",borderRadius:24,padding:"14px 32px",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"Sign in"})]})]}),_.jsx("div",{style:{maxWidth:680,margin:"0 auto",height:1,background:"#e8e6e0"}}),_.jsxs("section",{style:{maxWidth:840,margin:"0 auto",padding:"80px 24px"},children:[_.jsx("p",{style:{fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:"#aaa",marginBottom:16,textAlign:"center"},children:"What it is"}),_.jsxs("h2",{style:{fontFamily:"'Lora', serif",fontSize:"clamp(24px, 4vw, 38px)",textAlign:"center",fontWeight:400,marginBottom:56,letterSpacing:"-0.5px"},children:["One space for everything",_.jsx("br",{}),"that matters to you"]}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:24},children:W2.map((g,S)=>_.jsxs("div",{style:{background:"#fff",border:"1px solid #e8e6e0",borderRadius:14,padding:"28px 24px"},children:[_.jsx("div",{style:{fontSize:20,marginBottom:14,color:"#1a1a18"},children:g.icon}),_.jsx("h3",{style:{fontFamily:"'Lora', serif",fontSize:17,fontWeight:400,marginBottom:8},children:g.title}),_.jsx("p",{style:{fontSize:13,color:"#888",lineHeight:1.65},children:g.desc})]},S))})]}),_.jsx("div",{style:{maxWidth:680,margin:"0 auto",height:1,background:"#e8e6e0"}}),_.jsxs("section",{style:{maxWidth:900,margin:"0 auto",padding:"80px 24px"},children:[_.jsx("p",{style:{fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:"#aaa",marginBottom:16,textAlign:"center"},children:"How it works"}),_.jsx("h2",{style:{fontFamily:"'Lora', serif",fontSize:"clamp(24px, 4vw, 38px)",textAlign:"center",fontWeight:400,marginBottom:56,letterSpacing:"-0.5px"},children:"See it in action"}),_.jsxs("div",{style:{display:"flex",gap:48,alignItems:"flex-start",flexWrap:"wrap",justifyContent:"center"},children:[_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,minWidth:200},children:Fr.map((g,S)=>_.jsxs("button",{onClick:()=>f(S),style:{textAlign:"left",padding:"12px 16px",borderRadius:10,border:"none",background:o===S?"#1a1a18":"transparent",color:o===S?"#faf9f7":"#888",fontSize:14,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",transition:"all 0.2s"},children:[_.jsxs("span",{style:{fontSize:11,opacity:.5,marginRight:8},children:["0",S+1]}),g.label]},S))}),_.jsx("div",{style:{width:260,flexShrink:0,background:"#1a1a18",borderRadius:36,padding:"12px",boxShadow:"0 40px 80px rgba(0,0,0,0.15)"},children:_.jsxs("div",{style:{background:"#faf9f7",borderRadius:26,overflow:"hidden",minHeight:460},children:[_.jsx("div",{style:{background:"#1a1a18",height:28,display:"flex",alignItems:"center",justifyContent:"center"},children:_.jsx("div",{style:{width:60,height:6,background:"#333",borderRadius:3}})}),_.jsxs("div",{style:{padding:"20px 16px",opacity:u?1:0,transform:u?"translateY(0)":"translateY(8px)",transition:"opacity 0.2s ease, transform 0.2s ease"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,paddingBottom:12,borderBottom:"1px solid #e8e6e0"},children:[_.jsx("span",{style:{fontFamily:"'Lora', serif",fontSize:14},children:"Folio"}),_.jsx("span",{style:{fontSize:10,background:"#1a1a18",color:"#fff",borderRadius:10,padding:"3px 8px"},children:"+ New"})]}),_.jsx("p",{style:{fontSize:9,color:"#aaa",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:10},children:m.preview.meta}),m.preview.prompt&&_.jsxs("p",{style:{fontSize:11,color:"#2d5a3d",fontStyle:"italic",marginBottom:10,lineHeight:1.5,background:"#f4f2ef",borderRadius:8,padding:"8px 10px"},children:['"',m.preview.prompt,'"']}),m.preview.photo&&_.jsx("div",{style:{width:"100%",height:120,background:"linear-gradient(135deg, #d4c5b0 0%, #c4b59e 50%, #b8a88e 100%)",borderRadius:10,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"center"},children:_.jsx("span",{style:{fontSize:24},children:"🌅"})}),m.preview.todos&&_.jsx("div",{style:{marginBottom:10},children:m.preview.todos.map((g,S)=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[_.jsx("div",{style:{width:14,height:14,borderRadius:3,flexShrink:0,border:`1.5px solid ${g.done?"#2d5a3d":"#e8e6e0"}`,background:g.done?"#2d5a3d":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:g.done&&_.jsx("svg",{width:"8",height:"8",viewBox:"0 0 12 12",fill:"none",stroke:"#fff",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:_.jsx("polyline",{points:"2 6 5 9 10 3"})})}),_.jsx("span",{style:{fontSize:11,color:g.done?"#aaa":"#1a1a18",textDecoration:g.done?"line-through":"none",lineHeight:1.4},children:g.text})]},S))}),m.preview.content&&_.jsx("p",{style:{fontSize:12,color:"#444",lineHeight:1.65,marginBottom:10},children:m.preview.content}),m.preview.revisit&&_.jsx("div",{style:{background:"#f4f2ef",borderRadius:8,padding:"10px 12px",marginTop:12,borderLeft:"2px solid #e8e6e0"},children:_.jsx("p",{style:{fontSize:10,color:"#888",lineHeight:1.6},children:m.preview.revisit})}),_.jsx("div",{style:{display:"flex",gap:4,justifyContent:"center",marginTop:24},children:Fr.map((g,S)=>_.jsx("div",{style:{width:S===o?16:5,height:5,borderRadius:3,background:S===o?"#1a1a18":"#e8e6e0",transition:"width 0.3s ease"}},S))})]})]})})]}),_.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:10,marginTop:32},children:[_.jsx("button",{onClick:()=>f(Math.max(0,o-1)),disabled:o===0,style:{fontSize:13,padding:"8px 18px",border:"1px solid #e8e6e0",borderRadius:20,background:"none",color:o===0?"#ccc":"#888",cursor:o===0?"default":"pointer",fontFamily:"'DM Sans', sans-serif"},children:"← Prev"}),_.jsx("button",{onClick:()=>f(Math.min(Fr.length-1,o+1)),disabled:o===Fr.length-1,style:{fontSize:13,padding:"8px 18px",border:"1px solid #e8e6e0",borderRadius:20,background:"none",color:o===Fr.length-1?"#ccc":"#888",cursor:o===Fr.length-1?"default":"pointer",fontFamily:"'DM Sans', sans-serif"},children:"Next →"})]})]}),_.jsx("div",{style:{maxWidth:680,margin:"0 auto",height:1,background:"#e8e6e0"}}),_.jsxs("section",{style:{maxWidth:480,margin:"0 auto",padding:"80px 24px",textAlign:"center"},children:[_.jsx("p",{style:{fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:"#aaa",marginBottom:48},children:"Pricing"}),_.jsxs("div",{style:{background:"#fff",border:"1px solid #e8e6e0",borderRadius:20,padding:"40px 36px",textAlign:"left"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[_.jsxs("div",{children:[_.jsx("p",{style:{fontFamily:"'Lora', serif",fontSize:22},children:"Pilot"}),_.jsxs("p",{style:{fontSize:28,fontWeight:500,marginTop:4},children:["$0",_.jsx("span",{style:{fontSize:14,color:"#888",fontWeight:400},children:"/mo"})]})]}),_.jsx("div",{style:{fontSize:11,background:"#f4f2ef",color:"#888",padding:"5px 12px",borderRadius:20,letterSpacing:"0.5px"},children:"FREE DURING PILOT"})]}),_.jsx("div",{style:{borderTop:"1px solid #e8e6e0",paddingTop:20,display:"flex",flexDirection:"column",gap:12},children:["All post types — thoughts, prompts, gratitude, day, photos","Daily rotating reflection prompts","Up to 5 photo uploads per day"].map((g,S)=>_.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10},children:[_.jsx("svg",{width:"16",height:"16",viewBox:"0 0 12 12",fill:"none",stroke:"#2d5a3d",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:2},children:_.jsx("polyline",{points:"2 6 5 9 10 3"})}),_.jsx("span",{style:{fontSize:14,color:"#444",lineHeight:1.5},children:g})]},S))}),_.jsx("button",{onClick:t,style:{marginTop:28,width:"100%",padding:"14px",background:"#1a1a18",color:"#faf9f7",border:"none",borderRadius:12,fontSize:15,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",fontWeight:500},children:"Get started free"})]})]}),_.jsx("div",{style:{maxWidth:680,margin:"0 auto",height:1,background:"#e8e6e0"}}),_.jsxs("footer",{style:{maxWidth:680,margin:"0 auto",padding:"40px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16},children:[_.jsx("span",{style:{fontFamily:"'Lora', serif",fontSize:18},children:"Folio"}),_.jsx("div",{style:{display:"flex",gap:20},children:["About","Privacy","Contact"].map(g=>_.jsx("a",{href:"#",style:{fontSize:13,color:"#aaa",textDecoration:"none"},children:g},g))}),_.jsx("p",{style:{fontSize:12,color:"#ccc",width:"100%",textAlign:"center",marginTop:8},children:"Built with intention."})]}),_.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { cursor: pointer; }
        @media (max-width: 600px) {
          nav { padding: 16px 20px !important; }
        }
      `})]})}const hl=[{emoji:"🔒",title:"Your private space",desc:"Everything you write in Folio is completely private. No followers, no likes, no judgment. Just you."},{emoji:"✦",title:"Create a post",desc:"Tap + New to write a thought, answer a daily prompt, plan your day, log gratitude, or upload a photo memory."},{emoji:"◎",title:"Five ways to reflect",desc:"Thought, Photo, Grateful, Day, and Prompt — each one is built for a different kind of moment in your life."},{emoji:"↩",title:"Come back to it",desc:"You can revisit old thoughts, add to your day, and look back on how far you've come. Folio grows with you."}];function q2({userId:t,onDone:e}){const[n,r]=J.useState(0),[i,s]=J.useState(!1);async function o(){s(!0);try{await Tx(_u(Ol,"users",t,"meta","onboarding"),{completed:!0})}catch(f){console.error(f)}setTimeout(()=>e(),300)}function l(){n<hl.length-1?r(f=>f+1):o()}const u=hl[n],h=n===hl.length-1;return _.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",padding:24,opacity:i?0:1,transition:"opacity 0.3s ease"},children:_.jsxs("div",{style:{background:"#faf9f7",borderRadius:20,padding:"40px 36px",maxWidth:400,width:"100%",textAlign:"center",boxShadow:"0 24px 60px rgba(0,0,0,0.2)"},children:[_.jsx("div",{style:{fontSize:36,marginBottom:20},children:u.emoji}),_.jsx("h2",{style:{fontFamily:"'Lora', serif",fontSize:22,fontWeight:400,marginBottom:12,color:"#1a1a18",letterSpacing:"-0.3px"},children:u.title}),_.jsx("p",{style:{fontSize:15,color:"#666",lineHeight:1.7,marginBottom:36},children:u.desc}),_.jsx("div",{style:{display:"flex",justifyContent:"center",gap:6,marginBottom:28},children:hl.map((f,m)=>_.jsx("div",{style:{width:m===n?20:6,height:6,borderRadius:3,background:m===n?"#1a1a18":"#e8e6e0",transition:"width 0.3s ease, background 0.3s ease"}},m))}),_.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[_.jsx("button",{onClick:o,style:{fontSize:13,padding:"10px 18px",background:"none",border:"1px solid #e8e6e0",borderRadius:20,color:"#aaa",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"Skip"}),_.jsx("button",{onClick:l,style:{fontSize:14,padding:"10px 24px",background:"#1a1a18",border:"none",borderRadius:20,color:"#faf9f7",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",fontWeight:500},children:h?"Let's go":"Next →"})]})]})})}const Oy=["All","Thought","Photo","Grateful","Day","Prompt"],dl=["What is something you believe that most people around you don't?","If your life had a title right now, what would it be?","What's a version of yourself you've abandoned? Do you miss them?","What would you do differently if no one would ever find out?","What fear has quietly been running your life?","What's something you've never said out loud but need to?","Who in your life challenges you the most, and what does that reveal about you?","What does your ideal day look like, and how far is it from today?","What have you outgrown but haven't let go of yet?","What's a decision you made that changed everything?","What do you want people to say about you at your funeral?","Where in your life are you settling?","What's the most honest thing you could say about yourself right now?","What would you regret not doing in the next 5 years?","What's a belief you inherited that you've never questioned?","When do you feel most like yourself?","What are you currently pretending not to know?","What does success actually mean to you — not what you've been told?","What's a pattern in your relationships you keep repeating?","What would you attempt if failure wasn't possible?","What part of your past do you still carry that no longer serves you?","Who are you when no one is watching?","What emotion do you avoid the most, and why?","What's something you're proud of that you never talk about?","What would you tell your 16-year-old self?","What story do you tell yourself that might not be true?","What are you waiting for permission to do?","What does your gut tell you that your brain keeps overriding?","What have you sacrificed for others that you secretly resent?","If money wasn't a factor, what would your life look like?","What chapter of your life are you currently in?","What's the difference between who you are and who you want to be?","What makes you feel most alive?","What's a conversation you've been avoiding?","What are you most curious about right now?","What do you need more of in your life? Less of?","What would it mean to truly forgive yourself?","What's something you've changed your mind about recently?","What kind of person do you want to be in a relationship?","What are you most afraid people will find out about you?","What does your body tell you that you often ignore?","If you could restart one thing in your life, what would it be?","What's a dream you've quietly given up on?","What boundaries do you need to set but haven't?","What does home mean to you?","What's the bravest thing you've ever done?","What are you grateful for that you never acknowledge?","What would you do today if it were your last normal day?","What's a compliment you've received that you never believed?","What parts of yourself do you hide from the world?","What's one thing you know you need to change but keep delaying?","What does your relationship with money say about you?","When did you last feel truly free?","What's a value you hold that you've compromised recently?","What do you envy in others, and what does that reveal about your desires?","What's something you've done that you're still not sure was right?","Who has shaped you the most, and how do you feel about that?","What's the hardest lesson you've learned?","What would a braver version of you do right now?","What's something you love about yourself that took a long time to accept?","What are you building, and does it feel meaningful?","What does your inner critic sound like, and whose voice is it?","What's a moment that changed how you see the world?","What would you do if you weren't afraid of disappointing people?","What's a version of your future that excites and terrifies you?","What do you need to hear right now that no one is saying?","What's something you've been carrying alone that you don't have to?","What makes you feel most misunderstood?","What's a habit that's quietly hurting you?","What would you do if you knew you only had one year left?","What does it feel like to be you on a hard day?","What's something that used to scare you that no longer does?","What's a question you're afraid to answer honestly?","What brings you peace that you don't make enough time for?","What's a risk worth taking that you've been putting off?","What do you want your life to stand for?","What's a moment where you surprised yourself?","What are you teaching others by how you live?","What would your life look like if you fully trusted yourself?"];function Vy(t=0){const r=Math.floor((new Date-new Date("2026-01-01"))/(1e3*60*60*24))+t;return dl[(r%dl.length+dl.length)%dl.length]}function Ed(){return new Date().toISOString().slice(0,10)}function K2(t){return new Date(t+"T12:00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function G2(t){return t.createdAt?t.createdAt.toDate?t.createdAt.toDate():new Date(t.createdAt):new Date}function Q2(t){return t.toISOString().slice(0,10)}function Y2(t){return t.toISOString().slice(0,7)}function X2(t){const[e,n]=t.split("-");return new Date(parseInt(e),parseInt(n)-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})}function J2(t){const e=new Date(t+"T12:00:00"),n=Ed(),r=new Date;r.setDate(r.getDate()-1);const i=r.toISOString().slice(0,10);return t===n?"Today":t===i?"Yesterday":e.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}function Z2({user:t}){const e=t.uid,n=()=>nx(Ol,"users",e,"posts"),r=N=>_u(Ol,"users",e,"posts",N),[i,s]=J.useState([]),[o,l]=J.useState("All"),[u,h]=J.useState("none"),[f,m]=J.useState({}),[g,S]=J.useState(!1),[C,D]=J.useState("Thought"),[V,k]=J.useState(null),[v,A]=J.useState(null),[O,z]=J.useState(""),[j,E]=J.useState(""),[y,w]=J.useState(""),[T,R]=J.useState(""),[P,I]=J.useState(["","",""]),[et,sn]=J.useState(""),[Wn,Vt]=J.useState(0),[$,Y]=J.useState(!1),[ee,me]=J.useState(!0),[re,Ie]=J.useState(()=>localStorage.getItem("theme")==="dark"),[Wt,St]=J.useState(null),[kt,yt]=J.useState(""),[ma,ga]=J.useState(!1),[gi,_n]=J.useState(null),[yi,vn]=J.useState(""),[Ss,Nr]=J.useState(null),[_i,ks]=J.useState(""),[wn,ya]=J.useState(!1),[As,Rs]=J.useState(!1),_a=J.useRef(),L={bg:re?"#111110":"#faf9f7",ink:re?"#f0ede8":"#1a1a18",muted:re?"#666":"#888",border:re?"#2a2a28":"#e8e6e0",surface:re?"#1c1c1a":"#ffffff",surface2:re?"#222220":"#f4f2ef",bodyText:re?"#bbb":"#444",thoughtText:re?"#ccc":"#333",accent:re?"#5a9e70":"#2d5a3d",green:re?"#4a9e6a":"#2d5a3d"};J.useEffect(()=>{document.body.style.background=L.bg,document.body.style.color=L.ink,localStorage.setItem("theme",re?"dark":"light")},[re]),J.useEffect(()=>{vi(),Cs()},[]);async function Cs(){try{(await wx(_u(Ol,"users",e,"meta","onboarding"))).exists()||Rs(!0)}catch(N){console.error(N)}}function va(){Ie(N=>!N)}function ze(){D({Thought:"Thought",Photo:"Photo",Grateful:"Grateful",Day:"Day",Prompt:"Prompt"}[o]||"Thought"),S(!0)}function He(N){m(G=>({...G,[N]:!G[N]}))}async function vi(){me(!0);try{const N=mx(n(),gx("createdAt","desc")),G=await Ex(N);s(G.docs.map(ie=>({id:ie.id,...ie.data()})))}catch(N){console.error(N)}me(!1)}async function wa(){Y(!0);try{let N={type:C,createdAt:Ax()};if(C==="Photo"){let ie=null;if(V){const K=M2($2,`users/${e}/photos/${Date.now()}_${V.name}`);await V2(K,V),ie=await L2(K)}N={...N,caption:O,imageUrl:ie}}else if(C==="Thought"){if(!j.trim()){Y(!1);return}const ie=Ei(y);N={...N,thought:j,spotifyId:ie,replies:[]}}else if(C==="Grateful"){if(!T.trim()){Y(!1);return}N={...N,grateful:T}}else if(C==="Day"){const ie=P.filter(ge=>ge.trim());if(!ie.length){Y(!1);return}if(i.find(ge=>ge.type==="Day"&&ge.dayKey===Ed())){alert("You've already created today's day entry."),Y(!1);return}N={...N,dayKey:Ed(),todos:ie.map(ge=>({text:ge,done:!1})),actuallyDid:""}}else if(C==="Prompt"){if(!et.trim()){Y(!1);return}N={...N,prompt:Vy(Wn),answer:et}}const G=await Sx(n(),N);s(ie=>[{id:G.id,...N,createdAt:{toDate:()=>new Date}},...ie]),wi()}catch(N){console.error(N),alert("Failed to save.")}Y(!1)}async function Ea(N,G){const ie=i.find(ge=>ge.id===N);if(!ie)return;const K=ie.todos.map((ge,Ht)=>Ht===G?{...ge,done:!ge.done}:ge);await ll(r(N),{todos:K}),s(ge=>ge.map(Ht=>Ht.id===N?{...Ht,todos:K}:Ht))}async function Ta(N){if(!_i.trim())return;const G=i.find(K=>K.id===N);if(!G)return;const ie=[...G.todos,{text:_i.trim(),done:!1}];await ll(r(N),{todos:ie}),s(K=>K.map(ge=>ge.id===N?{...ge,todos:ie}:ge)),ks(""),Nr(null)}async function Dr(N){const G=yi.trim();await ll(r(N),{actuallyDid:G}),s(ie=>ie.map(K=>K.id===N?{...K,actuallyDid:G}:K)),_n(null),vn("")}async function Ia(N){if(!kt.trim())return;ga(!0);const G={text:kt.trim(),createdAt:new Date().toISOString()};try{await ll(r(N),{replies:Rx(G)}),s(ie=>ie.map(K=>K.id===N?{...K,replies:[...K.replies||[],G]}:K)),yt(""),St(null)}catch(ie){console.error(ie)}ga(!1)}async function Sa(N){confirm("Delete this post?")&&(await Ix(r(N)),s(G=>G.filter(ie=>ie.id!==N)))}function wi(){S(!1),z(""),E(""),w(""),R(""),sn(""),I(["","",""]),Vt(0),k(null),A(null),D("Thought")}function rc(N){const G=N.target.files[0];G&&(k(G),A(URL.createObjectURL(G)))}function ic(N){if(!N)return"";const G=N.toDate?N.toDate():new Date(N);return G.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+" · "+G.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Ps(N){const G=new Date(N);return G.toLocaleDateString("en-US",{month:"short",day:"numeric"})+" · "+G.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Ei(N){if(!N)return null;const G=N.match(/track\/([a-zA-Z0-9]+)/);return G?G[1]:/^[a-zA-Z0-9]{22}$/.test(N.trim())?N.trim():null}const Ti=i.filter(N=>o==="All"||N.type===o);function br(){if(u==="none")return null;const N={};return Ti.forEach(G=>{const ie=G2(G),K=u==="day"?Q2(ie):Y2(ie);N[K]||(N[K]=[]),N[K].push(G)}),Object.entries(N).sort((G,ie)=>ie[0].localeCompare(G[0]))}const Ii=br(),xs=()=>_.jsx("button",{onClick:va,title:"Toggle dark mode",style:{width:32,height:32,borderRadius:"50%",border:`1.5px solid ${L.ink}`,background:re?L.ink:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s",cursor:"pointer",flexShrink:0},children:!re&&_.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`1.5px solid ${L.ink}`}})}),En=N=>({fontSize:13,padding:"6px 14px",background:o===N?L.ink:"none",border:`1px solid ${L.border}`,borderRadius:20,color:o===N?L.bg:L.muted,letterSpacing:"0.2px"}),ka=N=>({fontSize:13,padding:"8px 16px",background:C===N?L.ink:"none",border:"none",color:C===N?L.bg:L.muted,letterSpacing:"0.2px"});function Or(N){var G,ie;return _.jsxs("div",{style:{padding:"28px 0",borderBottom:`1px solid ${L.border}`},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:L.muted,letterSpacing:"0.4px",textTransform:"uppercase",marginBottom:10,flexWrap:"wrap"},children:[_.jsx("span",{children:ic(N.createdAt)}),_.jsx("span",{style:{opacity:.4,margin:"0 2px"},children:"·"}),_.jsx("span",{children:N.type}),_.jsx("button",{onClick:()=>Sa(N.id),style:{marginLeft:"auto",fontSize:11,background:"none",border:"none",color:L.border,cursor:"pointer",padding:"2px 6px"},children:"Delete"})]}),_.jsxs("div",{style:{filter:wn?"blur(12px)":"none",userSelect:wn?"none":"auto",transition:"filter 0.2s",pointerEvents:wn?"none":"auto"},children:[N.type==="Thought"&&_.jsxs(_.Fragment,{children:[_.jsxs("p",{style:{fontSize:17,lineHeight:1.75,color:L.thoughtText,marginBottom:N.spotifyId?16:0},children:['"',N.thought,'"']}),N.spotifyId&&_.jsx("iframe",{src:`https://open.spotify.com/embed/track/${N.spotifyId}?utm_source=generator&theme=${re?0:1}`,width:"100%",height:"80",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",style:{borderRadius:10,marginTop:4}}),((G=N.replies)==null?void 0:G.length)>0&&_.jsx("div",{style:{marginTop:20,paddingLeft:16,borderLeft:`2px solid ${L.border}`},children:N.replies.map((K,ge)=>_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("p",{style:{fontSize:11,color:L.muted,marginBottom:4},children:Ps(K.createdAt)}),_.jsxs("p",{style:{fontSize:15,lineHeight:1.75,color:L.thoughtText},children:['"',K.text,'"']})]},ge))}),Wt===N.id?_.jsxs("div",{style:{marginTop:16,paddingLeft:16,borderLeft:`2px solid ${L.ink}`},children:[_.jsx("textarea",{value:kt,onChange:K=>yt(K.target.value),placeholder:"Revisit this thought...",autoFocus:!0,rows:3,style:{width:"100%",border:"none",outline:"none",fontSize:15,lineHeight:1.7,resize:"none",background:"transparent",color:L.ink,display:"block"}}),_.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[_.jsx("button",{onClick:()=>{St(null),yt("")},style:{fontSize:12,padding:"6px 14px",background:"none",border:`1px solid ${L.border}`,borderRadius:20,color:L.muted},children:"Cancel"}),_.jsx("button",{onClick:()=>Ia(N.id),disabled:ma,style:{fontSize:12,padding:"6px 14px",background:L.ink,color:L.bg,border:"none",borderRadius:20},children:ma?"...":"Add"})]})]}):_.jsx("button",{onClick:()=>{St(N.id),yt("")},style:{marginTop:14,fontSize:12,color:L.muted,background:"none",border:"none",cursor:"pointer",padding:0},children:"↩ revisit"})]}),N.type==="Photo"&&_.jsxs(_.Fragment,{children:[N.imageUrl&&_.jsx("img",{src:N.imageUrl,alt:N.caption,style:{width:"100%",objectFit:"contain",borderRadius:10,marginBottom:12,display:"block"}}),N.caption&&_.jsx("p",{style:{fontSize:15,lineHeight:1.75,color:L.bodyText},children:N.caption})]}),N.type==="Grateful"&&_.jsx("p",{style:{fontSize:16,lineHeight:1.8,color:L.bodyText,whiteSpace:"pre-wrap"},children:N.grateful}),N.type==="Prompt"&&_.jsxs(_.Fragment,{children:[_.jsxs("p",{style:{fontSize:13,color:L.accent,fontStyle:"italic",marginBottom:10,lineHeight:1.5},children:['"',N.prompt,'"']}),_.jsx("p",{style:{fontSize:16,lineHeight:1.8,color:L.bodyText,whiteSpace:"pre-wrap"},children:N.answer})]}),N.type==="Day"&&_.jsxs(_.Fragment,{children:[_.jsx("p",{style:{fontFamily:"'Lora', serif",fontSize:18,fontWeight:500,color:L.ink,marginBottom:16},children:K2(N.dayKey)}),_.jsxs("div",{style:{marginBottom:20},children:[_.jsx("p",{style:{fontSize:11,color:L.muted,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:10},children:"To-do"}),(ie=N.todos)==null?void 0:ie.map((K,ge)=>_.jsxs("div",{onClick:()=>Ea(N.id,ge),style:{display:"flex",alignItems:"center",gap:12,marginBottom:10,cursor:"pointer"},children:[_.jsx("div",{style:{width:18,height:18,borderRadius:4,flexShrink:0,border:`1.5px solid ${K.done?L.green:L.border}`,background:K.done?L.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:K.done&&_.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:_.jsx("polyline",{points:"2 6 5 9 10 3"})})}),_.jsx("span",{style:{fontSize:15,color:K.done?L.muted:L.ink,textDecoration:K.done?"line-through":"none",lineHeight:1.5},children:K.text})]},ge)),Ss===N.id?_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:8},children:[_.jsx("div",{style:{width:18,height:18,borderRadius:4,border:`1.5px solid ${L.border}`,flexShrink:0}}),_.jsx("input",{value:_i,onChange:K=>ks(K.target.value),onKeyDown:K=>K.key==="Enter"&&Ta(N.id),placeholder:"New task...",autoFocus:!0,style:{flex:1,border:"none",outline:"none",fontSize:15,background:"transparent",color:L.ink,borderBottom:`1px solid ${L.border}`,paddingBottom:4}}),_.jsx("button",{onClick:()=>Ta(N.id),style:{fontSize:12,padding:"4px 12px",background:L.ink,color:L.bg,border:"none",borderRadius:12},children:"Add"}),_.jsx("button",{onClick:()=>{Nr(null),ks("")},style:{fontSize:12,color:L.muted,background:"none",border:"none",cursor:"pointer"},children:"✕"})]}):_.jsx("button",{onClick:()=>Nr(N.id),style:{fontSize:12,color:L.muted,background:"none",border:"none",cursor:"pointer",padding:0,marginTop:6},children:"+ add task"})]}),_.jsxs("div",{style:{paddingTop:16,borderTop:`1px solid ${L.border}`},children:[_.jsx("p",{style:{fontSize:11,color:L.muted,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:10},children:"What I actually did"}),gi===N.id?_.jsxs(_.Fragment,{children:[_.jsx("textarea",{value:yi,onChange:K=>vn(K.target.value),placeholder:"What did you actually end up doing...",autoFocus:!0,rows:4,style:{width:"100%",border:"none",outline:"none",fontSize:15,lineHeight:1.7,resize:"none",background:"transparent",color:L.ink,display:"block",borderBottom:`1px solid ${L.border}`}}),_.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[_.jsx("button",{onClick:()=>{_n(null),vn("")},style:{fontSize:12,padding:"6px 14px",background:"none",border:`1px solid ${L.border}`,borderRadius:20,color:L.muted},children:"Cancel"}),_.jsx("button",{onClick:()=>Dr(N.id),style:{fontSize:12,padding:"6px 14px",background:L.ink,color:L.bg,border:"none",borderRadius:20},children:"Save"})]})]}):N.actuallyDid?_.jsxs(_.Fragment,{children:[_.jsx("p",{style:{fontSize:15,lineHeight:1.75,color:L.bodyText,whiteSpace:"pre-wrap",marginBottom:8},children:N.actuallyDid}),_.jsx("button",{onClick:()=>{_n(N.id),vn(N.actuallyDid)},style:{fontSize:12,color:L.muted,background:"none",border:"none",cursor:"pointer",padding:0},children:"✏ edit"})]}):_.jsx("button",{onClick:()=>{_n(N.id),vn("")},style:{fontSize:12,color:L.muted,background:"none",border:"none",cursor:"pointer",padding:0},children:"↩ revisit — what did you actually do?"})]})]})]})]},N.id)}return _.jsxs("div",{style:{maxWidth:680,margin:"0 auto",padding:"0 20px 120px",color:L.ink,background:L.bg,minHeight:"100vh"},children:[As&&_.jsx(q2,{userId:e,onDone:()=>Rs(!1)}),_.jsxs("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px 0 20px",borderBottom:`1px solid ${L.border}`,flexWrap:"wrap",gap:10},children:[_.jsx("span",{style:{fontFamily:"'Lora', serif",fontSize:24,letterSpacing:"-0.3px",color:L.ink},children:"Folio"}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("div",{className:"header-filters",style:{display:"flex",gap:4},children:Oy.map(N=>_.jsx("button",{onClick:()=>l(N),style:En(N),children:N},N))}),_.jsx("div",{style:{display:"flex",border:`1px solid ${L.border}`,borderRadius:8,overflow:"hidden"},children:[["none","—"],["day","D"],["month","M"]].map(([N,G])=>_.jsx("button",{onClick:()=>h(N),style:{fontSize:12,padding:"6px 10px",background:u===N?L.ink:"none",border:"none",color:u===N?L.bg:L.muted,cursor:"pointer"},children:G},N))}),_.jsx("button",{onClick:()=>ya(N=>!N),title:"Privacy mode",style:{width:32,height:32,borderRadius:8,border:`1px solid ${wn?L.ink:L.border}`,background:wn?L.ink:"none",color:wn?L.bg:L.muted,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:_.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:wn?_.jsxs(_.Fragment,{children:[_.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),_.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),_.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):_.jsxs(_.Fragment,{children:[_.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),_.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}),_.jsx(xs,{}),_.jsx("button",{onClick:ze,style:{fontSize:14,padding:"8px 18px",background:L.ink,color:L.bg,border:"none",borderRadius:20,fontWeight:500},children:"+ New"}),_.jsx("button",{onClick:()=>rA(To),title:"Log out",style:{background:"none",border:`1px solid ${L.border}`,borderRadius:8,padding:"7px 9px",color:L.muted,display:"flex",alignItems:"center"},children:_.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[_.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),_.jsx("polyline",{points:"16 17 21 12 16 7"}),_.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]})]}),g&&_.jsx("div",{style:{background:L.surface,border:`1px solid ${L.border}`,borderRadius:14,margin:"24px 0"},children:_.jsxs("div",{style:{padding:20},children:[_.jsx("div",{style:{display:"flex",marginBottom:18,border:`1px solid ${L.border}`,borderRadius:8,overflow:"hidden",width:"fit-content"},children:["Thought","Photo","Grateful","Day","Prompt"].map(N=>_.jsx("button",{onClick:()=>D(N),style:ka(N),children:N},N))}),C==="Thought"&&_.jsxs(_.Fragment,{children:[_.jsx("textarea",{value:j,onChange:N=>E(N.target.value),placeholder:"What's on your mind...",rows:5,style:{width:"100%",border:"none",outline:"none",fontSize:16,lineHeight:1.7,resize:"none",background:"transparent",color:L.ink,display:"block"}}),_.jsxs("div",{style:{marginTop:14},children:[_.jsx("p",{style:{fontSize:12,color:L.muted,marginBottom:6},children:"Spotify track (optional)"}),_.jsx("input",{value:y,onChange:N=>w(N.target.value),placeholder:"Paste Spotify link or track ID...",style:{width:"100%",padding:"9px 12px",border:`1px solid ${L.border}`,borderRadius:8,fontSize:13,background:L.surface2,color:L.ink,outline:"none"}}),y&&Ei(y)&&_.jsx("p",{style:{fontSize:11,color:L.accent,marginTop:4},children:"✓ Spotify track detected"}),y&&!Ei(y)&&_.jsx("p",{style:{fontSize:11,color:"#c0392b",marginTop:4},children:"Paste the full Spotify share link"})]})]}),C==="Photo"&&_.jsxs(_.Fragment,{children:[v?_.jsxs("div",{style:{position:"relative",marginBottom:12},children:[_.jsx("img",{src:v,alt:"",style:{width:"100%",maxHeight:300,objectFit:"contain",borderRadius:10,display:"block"}}),_.jsx("button",{onClick:()=>{k(null),A(null)},style:{position:"absolute",top:8,right:8,background:"rgba(0,0,0,0.5)",color:"#fff",border:"none",borderRadius:"50%",width:26,height:26,fontSize:11,cursor:"pointer"},children:"✕"})]}):_.jsxs("div",{onClick:()=>_a.current.click(),style:{border:`1.5px dashed ${L.border}`,borderRadius:10,padding:40,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",marginBottom:14,color:L.muted},children:[_.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginBottom:8},children:[_.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),_.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),_.jsx("polyline",{points:"21 15 16 10 5 21"})]}),_.jsx("span",{style:{fontSize:13},children:"Tap to upload a photo"})]}),_.jsx("input",{type:"file",accept:"image/*",ref:_a,style:{display:"none"},onChange:rc}),_.jsx("textarea",{value:O,onChange:N=>z(N.target.value),placeholder:"Add a caption...",rows:3,style:{width:"100%",border:"none",outline:"none",fontSize:15,lineHeight:1.7,resize:"none",background:"transparent",color:L.ink,display:"block",minHeight:60}})]}),C==="Grateful"&&_.jsxs(_.Fragment,{children:[_.jsx("p",{style:{fontSize:13,color:L.muted,marginBottom:10},children:"What are you grateful for today?"}),_.jsx("textarea",{value:T,onChange:N=>R(N.target.value),placeholder:"I'm grateful for...",rows:5,style:{width:"100%",border:"none",outline:"none",fontSize:16,lineHeight:1.75,resize:"none",background:"transparent",color:L.ink,display:"block"}})]}),C==="Day"&&_.jsxs(_.Fragment,{children:[_.jsx("p",{style:{fontSize:13,color:L.muted,marginBottom:12},children:"What do you want to get done today?"}),P.map((N,G)=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[_.jsx("div",{style:{width:18,height:18,borderRadius:4,border:`1.5px solid ${L.border}`,flexShrink:0}}),_.jsx("input",{value:N,onChange:ie=>{const K=[...P];K[G]=ie.target.value,I(K)},placeholder:`Task ${G+1}`,style:{flex:1,border:"none",outline:"none",fontSize:15,background:"transparent",color:L.ink,borderBottom:`1px solid ${L.border}`,paddingBottom:4}})]},G)),_.jsx("button",{onClick:()=>I([...P,""]),style:{fontSize:12,color:L.muted,background:"none",border:"none",cursor:"pointer",padding:0,marginTop:4},children:"+ add task"})]}),C==="Prompt"&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{background:L.surface2,borderRadius:10,padding:"14px 16px",marginBottom:16},children:[_.jsxs("p",{style:{fontSize:14,color:L.accent,fontStyle:"italic",lineHeight:1.6,marginBottom:10},children:['"',Vy(Wn),'"']}),_.jsx("button",{onClick:()=>Vt(N=>N+1),style:{fontSize:11,color:L.muted,background:"none",border:"none",cursor:"pointer",padding:0},children:"↻ different prompt"})]}),_.jsx("textarea",{value:et,onChange:N=>sn(N.target.value),placeholder:"Write your answer...",rows:7,style:{width:"100%",border:"none",outline:"none",fontSize:16,lineHeight:1.75,resize:"none",background:"transparent",color:L.ink,display:"block"}})]}),_.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:16,paddingTop:14,borderTop:`1px solid ${L.border}`},children:[_.jsx("button",{onClick:wi,style:{fontSize:13,padding:"9px 18px",background:"none",border:`1px solid ${L.border}`,borderRadius:20,color:L.muted},children:"Cancel"}),_.jsx("button",{onClick:wa,disabled:$,style:{fontSize:13,padding:"9px 20px",background:L.ink,color:L.bg,border:"none",borderRadius:20},children:$?"Saving...":"Publish"})]})]})}),_.jsxs("main",{style:{marginTop:36},children:[ee&&_.jsx("p",{style:{color:L.muted,fontSize:14,textAlign:"center",padding:"60px 0"},children:"Loading..."}),!ee&&Ti.length===0&&_.jsxs("div",{style:{textAlign:"center",padding:"80px 0",color:L.muted},children:[_.jsx("p",{style:{fontSize:14},children:"Nothing here yet."}),_.jsx("p",{style:{fontSize:13,marginTop:6},children:"Hit + New to write your first post."})]}),Ii?Ii.map(([N,G])=>_.jsxs("div",{style:{marginBottom:8},children:[_.jsxs("button",{onClick:()=>He(N),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",background:"none",border:"none",cursor:"pointer",borderBottom:`1px solid ${L.border}`},children:[_.jsx("span",{style:{fontSize:13,fontWeight:500,color:L.ink},children:u==="day"?J2(N):X2(N)}),_.jsxs("span",{style:{fontSize:11,color:L.muted},children:[G.length," ",G.length===1?"entry":"entries"," ",f[N]?"▸":"▾"]})]}),!f[N]&&G.map(ie=>Or(ie))]},N)):Ti.map(N=>Or(N))]}),_.jsx("div",{className:"mobile-bottom-bar",style:{display:"none",position:"fixed",bottom:0,left:0,right:0,background:L.surface,borderTop:`1px solid ${L.border}`,padding:"10px 16px 24px",gap:6,zIndex:100,justifyContent:"center",flexWrap:"wrap"},children:Oy.map(N=>_.jsx("button",{onClick:()=>l(N),style:{fontSize:13,padding:"7px 16px",background:o===N?L.ink:L.surface2,border:`1px solid ${L.border}`,borderRadius:20,color:o===N?L.bg:L.muted},children:N},N))})]})}const eN=new An;function tN({mode:t,onBack:e}){const[n,r]=J.useState(""),[i,s]=J.useState(""),[o,l]=J.useState(""),[u,h]=J.useState(!1),f=t==="signup";async function m(S){S.preventDefault(),h(!0),l("");try{f?await Jk(To,n,i):await Zk(To,n,i)}catch(C){l({"auth/email-already-in-use":"An account with this email already exists.","auth/invalid-email":"Please enter a valid email.","auth/weak-password":"Password should be at least 6 characters.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password."}[C.code]||"Something went wrong. Try again.")}h(!1)}async function g(){h(!0),l("");try{await IA(To,eN)}catch{l("Google sign-in failed. Try again.")}h(!1)}return _.jsxs("div",{style:{minHeight:"100vh",background:"#faf9f7",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,fontFamily:"'DM Sans', sans-serif"},children:[_.jsx("button",{onClick:e,style:{position:"absolute",top:24,left:24,background:"none",border:"none",fontSize:14,color:"#888",cursor:"pointer"},children:"← Back"}),_.jsxs("div",{style:{width:"100%",maxWidth:360},children:[_.jsxs("div",{style:{textAlign:"center",marginBottom:36},children:[_.jsx("span",{style:{fontFamily:"'Lora', serif",fontSize:24},children:"Folio"}),_.jsx("p",{style:{fontSize:14,color:"#888",marginTop:8},children:f?"Create your private space":"Welcome back"})]}),_.jsxs("button",{onClick:g,disabled:u,style:{width:"100%",padding:"12px",border:"1px solid #e8e6e0",borderRadius:10,background:"#fff",fontSize:14,color:"#1a1a18",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:16,fontFamily:"'DM Sans', sans-serif"},children:[_.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[_.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),_.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),_.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),_.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Continue with Google"]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[_.jsx("div",{style:{flex:1,height:1,background:"#e8e6e0"}}),_.jsx("span",{style:{fontSize:12,color:"#aaa"},children:"or"}),_.jsx("div",{style:{flex:1,height:1,background:"#e8e6e0"}})]}),_.jsxs("form",{onSubmit:m,style:{display:"flex",flexDirection:"column",gap:12},children:[_.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:S=>r(S.target.value),required:!0,style:{padding:"12px 14px",border:"1px solid #e8e6e0",borderRadius:10,fontSize:15,background:"#fff",color:"#1a1a18",outline:"none",fontFamily:"'DM Sans', sans-serif"}}),_.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:S=>s(S.target.value),required:!0,style:{padding:"12px 14px",border:"1px solid #e8e6e0",borderRadius:10,fontSize:15,background:"#fff",color:"#1a1a18",outline:"none",fontFamily:"'DM Sans', sans-serif"}}),o&&_.jsx("p",{style:{fontSize:12,color:"#c0392b",textAlign:"center"},children:o}),_.jsx("button",{type:"submit",disabled:u,style:{padding:"13px",background:"#1a1a18",color:"#faf9f7",border:"none",borderRadius:10,fontSize:15,fontWeight:500,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",marginTop:4},children:u?"...":f?"Create account":"Sign in"})]}),_.jsxs("p",{style:{textAlign:"center",fontSize:13,color:"#888",marginTop:20},children:[f?"Already have an account?":"Don't have an account?"," ",_.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"#1a1a18",fontSize:13,cursor:"pointer",textDecoration:"underline",fontFamily:"'DM Sans', sans-serif"},children:f?"Sign in":"Sign up"})]})]}),_.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500&family=DM+Sans:wght@300;400;500&display=swap');"})]})}function nN(){const[t,e]=J.useState(void 0),[n,r]=J.useState(null);return J.useEffect(()=>nA(To,s=>e(s)),[]),t===void 0?_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#faf9f7"},children:[_.jsx("div",{style:{width:24,height:24,border:"2px solid #e8e6e0",borderTopColor:"#1a1a18",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}),_.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):t?_.jsx(Z2,{user:t}):n?_.jsx(tN,{mode:n,onBack:()=>r(null)}):_.jsx(H2,{onSignup:()=>r("signup"),onLogin:()=>r("login")})}nh.createRoot(document.getElementById("root")).render(_.jsx(fT.StrictMode,{children:_.jsx(nN,{})}));
