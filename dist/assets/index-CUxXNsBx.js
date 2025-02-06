function zp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ms(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nc={exports:{}},Eo={},_c={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),Tp=Symbol.for("react.portal"),Op=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),Ip=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),Dp=Symbol.for("react.context"),Mp=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),Fp=Symbol.for("react.memo"),Up=Symbol.for("react.lazy"),Wa=Symbol.iterator;function Bp(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rc=Object.assign,zc={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||Pc}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tc(){}Tc.prototype=Zn.prototype;function As(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||Pc}var Fs=As.prototype=new Tc;Fs.constructor=As;Rc(Fs,Zn.prototype);Fs.isPureReactComponent=!0;var Va=Array.isArray,Oc=Object.prototype.hasOwnProperty,Us={current:null},Lc={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Oc.call(t,r)&&!Lc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Jr,type:e,key:o,ref:l,props:i,_owner:Us.current}}function Wp(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function Vp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ha=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vp(""+e.key):t.toString(36)}function _i(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Jr:case Tp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Zo(l,0):r,Va(i)?(n="",e!=null&&(n=e.replace(Ha,"$&/")+"/"),_i(i,t,n,"",function(u){return u})):i!=null&&(Bs(i)&&(i=Wp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ha,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Va(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Zo(o,s);l+=_i(o,t,n,a,i)}else if(a=Bp(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Zo(o,s++),l+=_i(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function si(e,t,n){if(e==null)return e;var r=[],i=0;return _i(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Hp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Pi={transition:null},Qp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:Us};function $c(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!Bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Zn;I.Fragment=Op;I.Profiler=Ip;I.PureComponent=As;I.StrictMode=Lp;I.Suspense=Ap;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;I.act=$c;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Us.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Oc.call(t,a)&&!Lc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Dp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$p,_context:e},e.Consumer=e};I.createElement=Ic;I.createFactory=function(e){var t=Ic.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Mp,render:e}};I.isValidElement=Bs;I.lazy=function(e){return{$$typeof:Up,_payload:{_status:-1,_result:e},_init:Hp}};I.memo=function(e,t){return{$$typeof:Fp,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};I.unstable_act=$c;I.useCallback=function(e,t){return ve.current.useCallback(e,t)};I.useContext=function(e){return ve.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};I.useEffect=function(e,t){return ve.current.useEffect(e,t)};I.useId=function(){return ve.current.useId()};I.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ve.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};I.useRef=function(e){return ve.current.useRef(e)};I.useState=function(e){return ve.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ve.current.useTransition()};I.version="18.3.1";_c.exports=I;var S=_c.exports;const pe=Ms(S),Kp=zp({__proto__:null,default:pe},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=S,Gp=Symbol.for("react.element"),Xp=Symbol.for("react.fragment"),Zp=Object.prototype.hasOwnProperty,Jp=Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bp={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Zp.call(t,r)&&!bp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gp,type:e,key:o,ref:l,props:i,_owner:Jp.current}}Eo.Fragment=Xp;Eo.jsx=Dc;Eo.jsxs=Dc;Nc.exports=Eo;var f=Nc.exports,zl={},Mc={exports:{}},Oe={},Ac={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var T=_.length;_.push(z);e:for(;0<T;){var A=T-1>>>1,F=_[A];if(0<i(F,z))_[A]=z,_[T]=F,T=A;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],T=_.pop();if(T!==z){_[0]=T;e:for(var A=0,F=_.length,Kt=F>>>1;A<Kt;){var Be=2*(A+1)-1,gt=_[Be],Ne=Be+1,rt=_[Ne];if(0>i(gt,T))Ne<F&&0>i(rt,gt)?(_[A]=rt,_[Ne]=T,A=Ne):(_[A]=gt,_[Be]=T,A=Be);else if(Ne<F&&0>i(rt,T))_[A]=rt,_[Ne]=T,A=Ne;else break e}}return z}function i(_,z){var T=_.sortIndex-z.sortIndex;return T!==0?T:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,d=null,g=3,v=!1,y=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=_)r(u),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(u)}}function x(_){if(w=!1,m(_),!y)if(n(a)!==null)y=!0,nr(j);else{var z=n(u);z!==null&&Qt(x,z.startTime-_)}}function j(_,z){y=!1,w&&(w=!1,h(R),R=-1),v=!0;var T=g;try{for(m(z),d=n(a);d!==null&&(!(d.expirationTime>z)||_&&!je());){var A=d.callback;if(typeof A=="function"){d.callback=null,g=d.priorityLevel;var F=A(d.expirationTime<=z);z=e.unstable_now(),typeof F=="function"?d.callback=F:d===n(a)&&r(a),m(z)}else r(a);d=n(a)}if(d!==null)var Kt=!0;else{var Be=n(u);Be!==null&&Qt(x,Be.startTime-z),Kt=!1}return Kt}finally{d=null,g=T,v=!1}}var k=!1,E=null,R=-1,U=5,L=-1;function je(){return!(e.unstable_now()-L<U)}function Vt(){if(E!==null){var _=e.unstable_now();L=_;var z=!0;try{z=E(!0,_)}finally{z?Ht():(k=!1,E=null)}}else k=!1}var Ht;if(typeof c=="function")Ht=function(){c(Vt)};else if(typeof MessageChannel<"u"){var oi=new MessageChannel,Go=oi.port2;oi.port1.onmessage=Vt,Ht=function(){Go.postMessage(null)}}else Ht=function(){C(Vt,0)};function nr(_){E=_,k||(k=!0,Ht())}function Qt(_,z){R=C(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,nr(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var T=g;g=z;try{return _()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=g;g=_;try{return z()}finally{g=T}},e.unstable_scheduleCallback=function(_,z,T){var A=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?A+T:A):T=A,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=T+F,_={id:p++,callback:z,priorityLevel:_,startTime:T,expirationTime:F,sortIndex:-1},T>A?(_.sortIndex=T,t(u,_),n(a)===null&&_===n(u)&&(w?(h(R),R=-1):w=!0,Qt(x,T-A))):(_.sortIndex=F,t(a,_),y||v||(y=!0,nr(j))),_},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(_){var z=g;return function(){var T=g;g=z;try{return _.apply(this,arguments)}finally{g=T}}}})(Fc);Ac.exports=Fc;var qp=Ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh=S,Te=qp;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uc=new Set,Tr={};function dn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(Tr[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,th=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qa={},Ka={};function nh(e){return Tl.call(Ka,e)?!0:Tl.call(Qa,e)?!1:th.test(e)?Ka[e]=!0:(Qa[e]=!0,!1)}function rh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ih(e,t,n,r){if(t===null||typeof t>"u"||rh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ws=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ws,Vs);ae[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ws,Vs);ae[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ws,Vs);ae[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hs(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ih(t,n,i,r)&&(n=null),r||i===null?nh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),xn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Qs=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Ks=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),Ya=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Jo;function pr(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var bo=!1;function qo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function oh(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case xn:return"Portal";case Ol:return"Profiler";case Qs:return"StrictMode";case Ll:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wc:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case Ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ys:return t=e.displayName||null,t!==null?t:$l(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return $l(e(t))}catch{}}return null}function lh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(t);case 8:return t===Qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sh(e){var t=Hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=sh(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dl(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ga(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=At(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kc(e,t){t=t.checked,t!=null&&Hs(e,"checked",t,!1)}function Ml(e,t){Kc(e,t);var n=At(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||Hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(hr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:At(n)}}function Yc(e,t){var n=At(t.value),r=At(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ah=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){ah.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function Zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function Jc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var uh=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,t){if(t){if(uh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,Ln=null,In=null;function ba(e){if(e=ei(e)){if(typeof Hl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Po(t),Hl(e.stateNode,e.type,t))}}function bc(e){Ln?In?In.push(e):In=[e]:Ln=e}function qc(){if(Ln){var e=Ln,t=In;if(In=Ln=null,ba(e),t)for(e=0;e<t.length;e++)ba(t[e])}}function ed(e,t){return e(t)}function td(){}var el=!1;function nd(e,t,n){if(el)return e(t,n);el=!0;try{return ed(e,t,n)}finally{el=!1,(Ln!==null||In!==null)&&(td(),qc())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ql=!1;if(ct)try{var or={};Object.defineProperty(or,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Ql=!1}function ch(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var kr=!1,Qi=null,Ki=!1,Kl=null,dh={onError:function(e){kr=!0,Qi=e}};function fh(e,t,n,r,i,o,l,s,a){kr=!1,Qi=null,ch.apply(dh,arguments)}function ph(e,t,n,r,i,o,l,s,a){if(fh.apply(this,arguments),kr){if(kr){var u=Qi;kr=!1,Qi=null}else throw Error(N(198));Ki||(Ki=!0,Kl=u)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qa(e){if(fn(e)!==e)throw Error(N(188))}function hh(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qa(i),e;if(o===r)return qa(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function id(e){return e=hh(e),e!==null?od(e):null}function od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=od(e);if(t!==null)return t;e=e.sibling}return null}var ld=Te.unstable_scheduleCallback,eu=Te.unstable_cancelCallback,mh=Te.unstable_shouldYield,gh=Te.unstable_requestPaint,Z=Te.unstable_now,vh=Te.unstable_getCurrentPriorityLevel,Xs=Te.unstable_ImmediatePriority,sd=Te.unstable_UserBlockingPriority,Yi=Te.unstable_NormalPriority,yh=Te.unstable_LowPriority,ad=Te.unstable_IdlePriority,Co=null,tt=null;function xh(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:kh,wh=Math.log,Sh=Math.LN2;function kh(e){return e>>>=0,e===0?32:31-(wh(e)/Sh|0)|0}var di=64,fi=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=mr(s):(o&=l,o!==0&&(r=mr(o)))}else l=n&~i,l!==0?r=mr(l):o!==0&&(r=mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Eh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ch(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ke(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=Eh(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ud(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function jh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dd,Js,fd,pd,hd,Gl=!1,pi=[],Rt=null,zt=null,Tt=null,Ir=new Map,$r=new Map,Ct=[],Nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ei(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _h(e,t,n,r,i){switch(t){case"focusin":return Rt=lr(Rt,e,t,n,r,i),!0;case"dragenter":return zt=lr(zt,e,t,n,r,i),!0;case"mouseover":return Tt=lr(Tt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ir.set(o,lr(Ir.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$r.set(o,lr($r.get(o)||null,e,t,n,r,i)),!0}return!1}function md(e){var t=Jt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=rd(n),t!==null){e.blockedOn=t,hd(e.priority,function(){fd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=ei(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function nu(e,t,n){Ri(e)&&n.delete(t)}function Ph(){Gl=!1,Rt!==null&&Ri(Rt)&&(Rt=null),zt!==null&&Ri(zt)&&(zt=null),Tt!==null&&Ri(Tt)&&(Tt=null),Ir.forEach(nu),$r.forEach(nu)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Ph)))}function Dr(e){function t(i){return sr(i,e)}if(0<pi.length){sr(pi[0],e);for(var n=1;n<pi.length;n++){var r=pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&sr(Rt,e),zt!==null&&sr(zt,e),Tt!==null&&sr(Tt,e),Ir.forEach(t),$r.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)md(n),n.blockedOn===null&&Ct.shift()}var $n=ht.ReactCurrentBatchConfig,Xi=!0;function Rh(e,t,n,r){var i=M,o=$n.transition;$n.transition=null;try{M=1,bs(e,t,n,r)}finally{M=i,$n.transition=o}}function zh(e,t,n,r){var i=M,o=$n.transition;$n.transition=null;try{M=4,bs(e,t,n,r)}finally{M=i,$n.transition=o}}function bs(e,t,n,r){if(Xi){var i=Xl(e,t,n,r);if(i===null)dl(e,t,r,Zi,n),tu(e,r);else if(_h(i,e,t,n,r))r.stopPropagation();else if(tu(e,r),t&4&&-1<Nh.indexOf(e)){for(;i!==null;){var o=ei(i);if(o!==null&&dd(o),o=Xl(e,t,n,r),o===null&&dl(e,t,r,Zi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var Zi=null;function Xl(e,t,n,r){if(Zi=null,e=Gs(r),e=Jt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zi=e,null}function gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vh()){case Xs:return 1;case sd:return 4;case Yi:case yh:return 16;case ad:return 536870912;default:return 16}default:return 16}}var Nt=null,qs=null,zi=null;function vd(){if(zi)return zi;var e,t=qs,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return zi=i.slice(e,1<r?1-r:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function ru(){return!1}function Le(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:ru,this.isPropagationStopped=ru,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Le(Jn),qr=G({},Jn,{view:0,detail:0}),Th=Le(qr),nl,rl,ar,jo=G({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(nl=e.screenX-ar.screenX,rl=e.screenY-ar.screenY):rl=nl=0,ar=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),iu=Le(jo),Oh=G({},jo,{dataTransfer:0}),Lh=Le(Oh),Ih=G({},qr,{relatedTarget:0}),il=Le(Ih),$h=G({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dh=Le($h),Mh=G({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ah=Le(Mh),Fh=G({},Jn,{data:0}),ou=Le(Fh),Uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wh[e])?!!t[e]:!1}function ta(){return Vh}var Hh=G({},qr,{key:function(e){if(e.key){var t=Uh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qh=Le(Hh),Kh=G({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lu=Le(Kh),Yh=G({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Gh=Le(Yh),Xh=G({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zh=Le(Xh),Jh=G({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=Le(Jh),qh=[9,13,27,32],na=ct&&"CompositionEvent"in window,Er=null;ct&&"documentMode"in document&&(Er=document.documentMode);var em=ct&&"TextEvent"in window&&!Er,yd=ct&&(!na||Er&&8<Er&&11>=Er),su=" ",au=!1;function xd(e,t){switch(e){case"keyup":return qh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function tm(e,t){switch(e){case"compositionend":return wd(t);case"keypress":return t.which!==32?null:(au=!0,su);case"textInput":return e=t.data,e===su&&au?null:e;default:return null}}function nm(e,t){if(Sn)return e==="compositionend"||!na&&xd(e,t)?(e=vd(),zi=qs=Nt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yd&&t.locale!=="ko"?null:t.data;default:return null}}var rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rm[e.type]:t==="textarea"}function Sd(e,t,n,r){bc(r),t=Ji(t,"onChange"),0<t.length&&(n=new ea("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Mr=null;function im(e){Od(e,0)}function No(e){var t=Cn(e);if(Qc(t))return e}function om(e,t){if(e==="change")return t}var kd=!1;if(ct){var ol;if(ct){var ll="oninput"in document;if(!ll){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),ll=typeof cu.oninput=="function"}ol=ll}else ol=!1;kd=ol&&(!document.documentMode||9<document.documentMode)}function du(){Cr&&(Cr.detachEvent("onpropertychange",Ed),Mr=Cr=null)}function Ed(e){if(e.propertyName==="value"&&No(Mr)){var t=[];Sd(t,Mr,e,Gs(e)),nd(im,t)}}function lm(e,t,n){e==="focusin"?(du(),Cr=t,Mr=n,Cr.attachEvent("onpropertychange",Ed)):e==="focusout"&&du()}function sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(Mr)}function am(e,t){if(e==="click")return No(t)}function um(e,t){if(e==="input"||e==="change")return No(t)}function cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:cm;function Ar(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tl.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pu(e,t){var n=fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fu(n)}}function Cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jd(){for(var e=window,t=Hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dm(e){var t=jd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cd(n.ownerDocument.documentElement,n)){if(r!==null&&ra(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pu(n,o);var l=pu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fm=ct&&"documentMode"in document&&11>=document.documentMode,kn=null,Zl=null,jr=null,Jl=!1;function hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||kn==null||kn!==Hi(r)||(r=kn,"selectionStart"in r&&ra(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Ar(jr,r)||(jr=r,r=Ji(Zl,"onSelect"),0<r.length&&(t=new ea("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},sl={},Nd={};ct&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function _o(e){if(sl[e])return sl[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nd)return sl[e]=t[n];return e}var _d=_o("animationend"),Pd=_o("animationiteration"),Rd=_o("animationstart"),zd=_o("transitionend"),Td=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Td.set(e,t),dn(t,[e])}for(var al=0;al<mu.length;al++){var ul=mu[al],pm=ul.toLowerCase(),hm=ul[0].toUpperCase()+ul.slice(1);Ut(pm,"on"+hm)}Ut(_d,"onAnimationEnd");Ut(Pd,"onAnimationIteration");Ut(Rd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(zd,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ph(r,t,void 0,e),e.currentTarget=null}function Od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;gu(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;gu(i,s,u),o=a}}}if(Ki)throw e=Kl,Ki=!1,Kl=null,e}function W(e,t){var n=t[ns];n===void 0&&(n=t[ns]=new Set);var r=e+"__bubble";n.has(r)||(Ld(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),Ld(n,e,r,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[gi]){e[gi]=!0,Uc.forEach(function(n){n!=="selectionchange"&&(mm.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,cl("selectionchange",!1,t))}}function Ld(e,t,n,r){switch(gd(t)){case 1:var i=Rh;break;case 4:i=zh;break;default:i=bs}n=i.bind(null,t,n,e),i=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Jt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}nd(function(){var u=o,p=Gs(n),d=[];e:{var g=Td.get(e);if(g!==void 0){var v=ea,y=e;switch(e){case"keypress":if(Ti(n)===0)break e;case"keydown":case"keyup":v=Qh;break;case"focusin":y="focus",v=il;break;case"focusout":y="blur",v=il;break;case"beforeblur":case"afterblur":v=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Gh;break;case _d:case Pd:case Rd:v=Dh;break;case zd:v=Zh;break;case"scroll":v=Th;break;case"wheel":v=bh;break;case"copy":case"cut":case"paste":v=Ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=lu}var w=(t&4)!==0,C=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=Lr(c,h),x!=null&&w.push(Ur(c,x,m)))),C)break;c=c.return}0<w.length&&(g=new v(g,y,null,n,p),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Vl&&(y=n.relatedTarget||n.fromElement)&&(Jt(y)||y[dt]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Jt(y):null,y!==null&&(C=fn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=iu,x="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=lu,x="onPointerLeave",h="onPointerEnter",c="pointer"),C=v==null?g:Cn(v),m=y==null?g:Cn(y),g=new w(x,c+"leave",v,n,p),g.target=C,g.relatedTarget=m,x=null,Jt(p)===u&&(w=new w(h,c+"enter",y,n,p),w.target=m,w.relatedTarget=C,x=w),C=x,v&&y)t:{for(w=v,h=y,c=0,m=w;m;m=gn(m))c++;for(m=0,x=h;x;x=gn(x))m++;for(;0<c-m;)w=gn(w),c--;for(;0<m-c;)h=gn(h),m--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=gn(w),h=gn(h)}w=null}else w=null;v!==null&&vu(d,g,v,w,!1),y!==null&&C!==null&&vu(d,C,y,w,!0)}}e:{if(g=u?Cn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var j=om;else if(uu(g))if(kd)j=um;else{j=sm;var k=lm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=am);if(j&&(j=j(e,u))){Sd(d,j,n,p);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Al(g,"number",g.value)}switch(k=u?Cn(u):window,e){case"focusin":(uu(k)||k.contentEditable==="true")&&(kn=k,Zl=u,jr=null);break;case"focusout":jr=Zl=kn=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,hu(d,n,p);break;case"selectionchange":if(fm)break;case"keydown":case"keyup":hu(d,n,p)}var E;if(na)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Sn?xd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(yd&&n.locale!=="ko"&&(Sn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Sn&&(E=vd()):(Nt=p,qs="value"in Nt?Nt.value:Nt.textContent,Sn=!0)),k=Ji(u,R),0<k.length&&(R=new ou(R,e,null,n,p),d.push({event:R,listeners:k}),E?R.data=E:(E=wd(n),E!==null&&(R.data=E)))),(E=em?tm(e,n):nm(e,n))&&(u=Ji(u,"onBeforeInput"),0<u.length&&(p=new ou("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=E))}Od(d,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Lr(e,n),o!=null&&r.unshift(Ur(e,o,i)),o=Lr(e,t),o!=null&&r.push(Ur(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Lr(n,o),a!=null&&l.unshift(Ur(n,a,s))):i||(a=Lr(n,o),a!=null&&l.push(Ur(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var gm=/\r\n?/g,vm=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(gm,`
`).replace(vm,"")}function vi(e,t,n){if(t=yu(t),yu(e)!==t&&n)throw Error(N(425))}function bi(){}var bl=null,ql=null;function es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ts=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,xu=typeof Promise=="function"?Promise:void 0,xm=typeof queueMicrotask=="function"?queueMicrotask:typeof xu<"u"?function(e){return xu.resolve(null).then(e).catch(wm)}:ts;function wm(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),et="__reactFiber$"+bn,Br="__reactProps$"+bn,dt="__reactContainer$"+bn,ns="__reactEvents$"+bn,Sm="__reactListeners$"+bn,km="__reactHandles$"+bn;function Jt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wu(e);e!==null;){if(n=e[et])return n;e=wu(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[et]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Po(e){return e[Br]||null}var rs=[],jn=-1;function Bt(e){return{current:e}}function H(e){0>jn||(e.current=rs[jn],rs[jn]=null,jn--)}function B(e,t){jn++,rs[jn]=e.current,e.current=t}var Ft={},he=Bt(Ft),ke=Bt(!1),ln=Ft;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function qi(){H(ke),H(he)}function Su(e,t,n){if(he.current!==Ft)throw Error(N(168));B(he,t),B(ke,n)}function Id(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,lh(e)||"Unknown",i));return G({},n,r)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,ln=he.current,B(he,e),B(ke,ke.current),!0}function ku(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Id(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(he),B(he,e)):H(ke),B(ke,n)}var lt=null,Ro=!1,pl=!1;function $d(e){lt===null?lt=[e]:lt.push(e)}function Em(e){Ro=!0,$d(e)}function Wt(){if(!pl&&lt!==null){pl=!0;var e=0,t=M;try{var n=lt;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Ro=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),ld(Xs,Wt),i}finally{M=t,pl=!1}}return null}var Nn=[],_n=0,to=null,no=0,Ie=[],$e=0,sn=null,st=1,at="";function Gt(e,t){Nn[_n++]=no,Nn[_n++]=to,to=e,no=t}function Dd(e,t,n){Ie[$e++]=st,Ie[$e++]=at,Ie[$e++]=sn,sn=e;var r=st;e=at;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-Ke(t)+i|n<<i|r,at=o+e}else st=1<<o|n<<i|r,at=e}function ia(e){e.return!==null&&(Gt(e,1),Dd(e,1,0))}function oa(e){for(;e===to;)to=Nn[--_n],Nn[_n]=null,no=Nn[--_n],Nn[_n]=null;for(;e===sn;)sn=Ie[--$e],Ie[$e]=null,at=Ie[--$e],Ie[$e]=null,st=Ie[--$e],Ie[$e]=null}var ze=null,Re=null,Q=!1,Qe=null;function Md(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Re=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Re=null,!0):!1;default:return!1}}function is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function os(e){if(Q){var t=Re;if(t){var n=t;if(!Eu(e,t)){if(is(e))throw Error(N(418));t=Ot(n.nextSibling);var r=ze;t&&Eu(e,t)?Md(r,n):(e.flags=e.flags&-4097|2,Q=!1,ze=e)}}else{if(is(e))throw Error(N(418));e.flags=e.flags&-4097|2,Q=!1,ze=e}}}function Cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function yi(e){if(e!==ze)return!1;if(!Q)return Cu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!es(e.type,e.memoizedProps)),t&&(t=Re)){if(is(e))throw Ad(),Error(N(418));for(;t;)Md(e,t),t=Ot(t.nextSibling)}if(Cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=ze?Ot(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=Re;e;)e=Ot(e.nextSibling)}function Un(){Re=ze=null,Q=!1}function la(e){Qe===null?Qe=[e]:Qe.push(e)}var Cm=ht.ReactCurrentBatchConfig;function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function Fd(e){function t(h,c){if(e){var m=h.deletions;m===null?(h.deletions=[c],h.flags|=16):m.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Dt(h,c),h.index=0,h.sibling=null,h}function o(h,c,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<c?(h.flags|=2,c):m):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,c,m,x){return c===null||c.tag!==6?(c=wl(m,h.mode,x),c.return=h,c):(c=i(c,m),c.return=h,c)}function a(h,c,m,x){var j=m.type;return j===wn?p(h,c,m.props.children,x,m.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===wt&&ju(j)===c.type)?(x=i(c,m.props),x.ref=ur(h,c,m),x.return=h,x):(x=Ai(m.type,m.key,m.props,null,h.mode,x),x.ref=ur(h,c,m),x.return=h,x)}function u(h,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Sl(m,h.mode,x),c.return=h,c):(c=i(c,m.children||[]),c.return=h,c)}function p(h,c,m,x,j){return c===null||c.tag!==7?(c=nn(m,h.mode,x,j),c.return=h,c):(c=i(c,m),c.return=h,c)}function d(h,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wl(""+c,h.mode,m),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ai:return m=Ai(c.type,c.key,c.props,null,h.mode,m),m.ref=ur(h,null,c),m.return=h,m;case xn:return c=Sl(c,h.mode,m),c.return=h,c;case wt:var x=c._init;return d(h,x(c._payload),m)}if(hr(c)||ir(c))return c=nn(c,h.mode,m,null),c.return=h,c;xi(h,c)}return null}function g(h,c,m,x){var j=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(h,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ai:return m.key===j?a(h,c,m,x):null;case xn:return m.key===j?u(h,c,m,x):null;case wt:return j=m._init,g(h,c,j(m._payload),x)}if(hr(m)||ir(m))return j!==null?null:p(h,c,m,x,null);xi(h,m)}return null}function v(h,c,m,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,s(c,h,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ai:return h=h.get(x.key===null?m:x.key)||null,a(c,h,x,j);case xn:return h=h.get(x.key===null?m:x.key)||null,u(c,h,x,j);case wt:var k=x._init;return v(h,c,m,k(x._payload),j)}if(hr(x)||ir(x))return h=h.get(m)||null,p(c,h,x,j,null);xi(c,x)}return null}function y(h,c,m,x){for(var j=null,k=null,E=c,R=c=0,U=null;E!==null&&R<m.length;R++){E.index>R?(U=E,E=null):U=E.sibling;var L=g(h,E,m[R],x);if(L===null){E===null&&(E=U);break}e&&E&&L.alternate===null&&t(h,E),c=o(L,c,R),k===null?j=L:k.sibling=L,k=L,E=U}if(R===m.length)return n(h,E),Q&&Gt(h,R),j;if(E===null){for(;R<m.length;R++)E=d(h,m[R],x),E!==null&&(c=o(E,c,R),k===null?j=E:k.sibling=E,k=E);return Q&&Gt(h,R),j}for(E=r(h,E);R<m.length;R++)U=v(E,h,R,m[R],x),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?R:U.key),c=o(U,c,R),k===null?j=U:k.sibling=U,k=U);return e&&E.forEach(function(je){return t(h,je)}),Q&&Gt(h,R),j}function w(h,c,m,x){var j=ir(m);if(typeof j!="function")throw Error(N(150));if(m=j.call(m),m==null)throw Error(N(151));for(var k=j=null,E=c,R=c=0,U=null,L=m.next();E!==null&&!L.done;R++,L=m.next()){E.index>R?(U=E,E=null):U=E.sibling;var je=g(h,E,L.value,x);if(je===null){E===null&&(E=U);break}e&&E&&je.alternate===null&&t(h,E),c=o(je,c,R),k===null?j=je:k.sibling=je,k=je,E=U}if(L.done)return n(h,E),Q&&Gt(h,R),j;if(E===null){for(;!L.done;R++,L=m.next())L=d(h,L.value,x),L!==null&&(c=o(L,c,R),k===null?j=L:k.sibling=L,k=L);return Q&&Gt(h,R),j}for(E=r(h,E);!L.done;R++,L=m.next())L=v(E,h,R,L.value,x),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?R:L.key),c=o(L,c,R),k===null?j=L:k.sibling=L,k=L);return e&&E.forEach(function(Vt){return t(h,Vt)}),Q&&Gt(h,R),j}function C(h,c,m,x){if(typeof m=="object"&&m!==null&&m.type===wn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ai:e:{for(var j=m.key,k=c;k!==null;){if(k.key===j){if(j=m.type,j===wn){if(k.tag===7){n(h,k.sibling),c=i(k,m.props.children),c.return=h,h=c;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===wt&&ju(j)===k.type){n(h,k.sibling),c=i(k,m.props),c.ref=ur(h,k,m),c.return=h,h=c;break e}n(h,k);break}else t(h,k);k=k.sibling}m.type===wn?(c=nn(m.props.children,h.mode,x,m.key),c.return=h,h=c):(x=Ai(m.type,m.key,m.props,null,h.mode,x),x.ref=ur(h,c,m),x.return=h,h=x)}return l(h);case xn:e:{for(k=m.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(h,c.sibling),c=i(c,m.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Sl(m,h.mode,x),c.return=h,h=c}return l(h);case wt:return k=m._init,C(h,c,k(m._payload),x)}if(hr(m))return y(h,c,m,x);if(ir(m))return w(h,c,m,x);xi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,m),c.return=h,h=c):(n(h,c),c=wl(m,h.mode,x),c.return=h,h=c),l(h)):n(h,c)}return C}var Bn=Fd(!0),Ud=Fd(!1),ro=Bt(null),io=null,Pn=null,sa=null;function aa(){sa=Pn=io=null}function ua(e){var t=ro.current;H(ro),e._currentValue=t}function ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){io=e,sa=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(io===null)throw Error(N(308));Pn=e,io.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var bt=null;function ca(e){bt===null?bt=[e]:bt.push(e)}function Bd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ca(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,ca(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function Oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;St=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;l=0,p=u=a=null,s=o;do{var g=s.lane,v=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,g);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,d,g):y,g==null)break e;d=G({},d,g);break e;case 2:St=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=v,a=d):p=p.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);un|=l,e.lanes=l,e.memoizedState=d}}function _u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var ti={},nt=Bt(ti),Wr=Bt(ti),Vr=Bt(ti);function qt(e){if(e===ti)throw Error(N(174));return e}function fa(e,t){switch(B(Vr,t),B(Wr,e),B(nt,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}H(nt),B(nt,t)}function Wn(){H(nt),H(Wr),H(Vr)}function Vd(e){qt(Vr.current);var t=qt(nt.current),n=Ul(t,e.type);t!==n&&(B(Wr,e),B(nt,n))}function pa(e){Wr.current===e&&(H(nt),H(Wr))}var K=Bt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function ha(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Li=ht.ReactCurrentDispatcher,ml=ht.ReactCurrentBatchConfig,an=0,Y=null,te=null,re=null,so=!1,Nr=!1,Hr=0,jm=0;function ue(){throw Error(N(321))}function ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,o){if(an=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?Rm:zm,e=n(r,i),Nr){o=0;do{if(Nr=!1,Hr=0,25<=o)throw Error(N(301));o+=1,re=te=null,t.updateQueue=null,Li.current=Tm,e=n(r,i)}while(Nr)}if(Li.current=ao,t=te!==null&&te.next!==null,an=0,re=te=Y=null,so=!1,t)throw Error(N(300));return e}function va(){var e=Hr!==0;return Hr=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Fe(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(N(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function Qr(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var p=u.lane;if((an&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,l=r):a=a.next=d,Y.lanes|=p,un|=p}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Xe(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,un|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Xe(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hd(){}function Qd(e,t){var n=Y,r=Fe(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,ya(Gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Kr(9,Yd.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(N(349));an&30||Kd(n,t,i)}return i}function Kd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yd(e,t,n,r){t.value=n,t.getSnapshot=r,Xd(t)&&Zd(e)}function Gd(e,t,n){return n(function(){Xd(t)&&Zd(e)})}function Xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Zd(e){var t=ft(e,1);t!==null&&Ye(t,e,1,-1)}function Pu(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Pm.bind(null,Y,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jd(){return Fe().memoizedState}function Ii(e,t,n,r){var i=be();Y.flags|=e,i.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function zo(e,t,n,r){var i=Fe();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&ma(r,l.deps)){i.memoizedState=Kr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Kr(1|t,n,o,r)}function Ru(e,t){return Ii(8390656,8,e,t)}function ya(e,t){return zo(2048,8,e,t)}function bd(e,t){return zo(4,2,e,t)}function qd(e,t){return zo(4,4,e,t)}function ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tf(e,t,n){return n=n!=null?n.concat([e]):null,zo(4,4,ef.bind(null,t,e),n)}function xa(){}function nf(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function of(e,t,n){return an&21?(Xe(n,t)||(n=ud(),Y.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Nm(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),t()}finally{M=n,ml.transition=r}}function lf(){return Fe().memoizedState}function _m(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sf(e))af(t,n);else if(n=Bd(e,t,n,r),n!==null){var i=ge();Ye(n,e,r,i),uf(n,t,r)}}function Pm(e,t,n){var r=$t(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sf(e))af(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Xe(s,l)){var a=t.interleaved;a===null?(i.next=i,ca(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Bd(e,t,i,r),n!==null&&(i=ge(),Ye(n,e,r,i),uf(n,t,r))}}function sf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function af(e,t){Nr=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}var ao={readContext:Ae,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Rm={readContext:Ae,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4194308,4,ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_m.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:xa,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=Nm.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=be();if(Q){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),oe===null)throw Error(N(349));an&30||Kd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ru(Gd.bind(null,r,o,e),[e]),r.flags|=2048,Kr(9,Yd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=be(),t=oe.identifierPrefix;if(Q){var n=at,r=st;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zm={readContext:Ae,useCallback:nf,useContext:Ae,useEffect:ya,useImperativeHandle:tf,useInsertionEffect:bd,useLayoutEffect:qd,useMemo:rf,useReducer:gl,useRef:Jd,useState:function(){return gl(Qr)},useDebugValue:xa,useDeferredValue:function(e){var t=Fe();return of(t,te.memoizedState,e)},useTransition:function(){var e=gl(Qr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Qd,useId:lf,unstable_isNewReconciler:!1},Tm={readContext:Ae,useCallback:nf,useContext:Ae,useEffect:ya,useImperativeHandle:tf,useInsertionEffect:bd,useLayoutEffect:qd,useMemo:rf,useReducer:vl,useRef:Jd,useState:function(){return vl(Qr)},useDebugValue:xa,useDeferredValue:function(e){var t=Fe();return te===null?t.memoizedState=e:of(t,te.memoizedState,e)},useTransition:function(){var e=vl(Qr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Qd,useId:lf,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=$t(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Ye(t,e,i,r),Oi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=$t(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Ye(t,e,i,r),Oi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=$t(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(Ye(t,e,r,n),Oi(t,e,r))}};function zu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,o):!0}function cf(e,t,n){var r=!1,i=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=Ee(t)?ln:he.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,i):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Tu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function as(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},da(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=Ee(t)?ln:he.current,i.context=Fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ss(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=oh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function us(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Om=typeof WeakMap=="function"?WeakMap:Map;function df(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){co||(co=!0,xs=r),us(e,t)},n}function ff(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){us(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){us(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ou(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Om;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Km.bind(null,e,t,n),t.then(e,e))}function Lu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var Lm=ht.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?Ud(t,null,n,r):Bn(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var o=t.ref;return Dn(t,i),r=ga(e,t,n,r,o,i),n=va(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Q&&n&&ia(t),t.flags|=1,me(e,t,r,i),t.child)}function Du(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_a(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pf(e,t,o,r,i)):(e=Ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(l,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function pf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ar(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,pt(e,t,i)}return cs(e,t,n,r,i)}function hf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(zn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(zn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(zn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(zn,Pe),Pe|=r;return me(e,t,i,n),t.child}function mf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,n,r,i){var o=Ee(n)?ln:he.current;return o=Fn(t,o),Dn(t,i),n=ga(e,t,n,r,o,i),r=va(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Q&&r&&ia(t),t.flags|=1,me(e,t,n,i),t.child)}function Mu(e,t,n,r,i){if(Ee(n)){var o=!0;eo(t)}else o=!1;if(Dn(t,i),t.stateNode===null)$i(e,t),cf(t,n,r),as(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=Ee(n)?ln:he.current,u=Fn(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Tu(t,l,r,u),St=!1;var g=t.memoizedState;l.state=g,oo(t,r,l,i),a=t.memoizedState,s!==r||g!==a||ke.current||St?(typeof p=="function"&&(ss(t,n,p,r),a=t.memoizedState),(s=St||zu(t,n,s,r,g,a,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Wd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ve(t.type,s),l.props=u,d=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=Ee(n)?ln:he.current,a=Fn(t,a));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||g!==a)&&Tu(t,l,r,a),St=!1,g=t.memoizedState,l.state=g,oo(t,r,l,i);var y=t.memoizedState;s!==d||g!==y||ke.current||St?(typeof v=="function"&&(ss(t,n,v,r),y=t.memoizedState),(u=St||zu(t,n,u,r,g,y,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ds(e,t,n,r,o,i)}function ds(e,t,n,r,i,o){mf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ku(t,n,!1),pt(e,t,o);r=t.stateNode,Lm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,s,o)):me(e,t,s,o),t.memoizedState=r.state,i&&ku(t,n,!0),t.child}function gf(e){var t=e.stateNode;t.pendingContext?Su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Su(e,t.context,!1),fa(e,t.containerInfo)}function Au(e,t,n,r,i){return Un(),la(i),t.flags|=256,me(e,t,n,r),t.child}var fs={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function vf(e,t,n){var r=t.pendingProps,i=K.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(K,i&1),e===null)return os(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Io(l,r,0,null),e=nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ps(n),t.memoizedState=fs,e):wa(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Im(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Dt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Dt(s,o):(o=nn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ps(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=fs,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wa(e,t){return t=Io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&la(r),Bn(t,e.child,null,n),e=wa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Im(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(N(422))),wi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Io({mode:"visible",children:r.children},i,0,null),o=nn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,l),t.child.memoizedState=ps(l),t.memoizedState=fs,o);if(!(t.mode&1))return wi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(N(419)),r=yl(o,r,void 0),wi(e,t,l,r)}if(s=(l&e.childLanes)!==0,we||s){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(e,i),Ye(r,e,i,-1))}return Na(),r=yl(Error(N(421))),wi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ym.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Re=Ot(i.nextSibling),ze=t,Q=!0,Qe=null,e!==null&&(Ie[$e++]=st,Ie[$e++]=at,Ie[$e++]=sn,st=e.id,at=e.overflow,sn=t),t=wa(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ls(e.return,t,n)}function xl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function yf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xl(t,!0,n,null,o);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $m(e,t,n){switch(t.tag){case 3:gf(t),Un();break;case 5:Vd(t);break;case 1:Ee(t.type)&&eo(t);break;case 4:fa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(ro,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?vf(e,t,n):(B(K,K.current&1),e=pt(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,hf(e,t,n)}return pt(e,t,n)}var xf,hs,wf,Sf;xf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hs=function(){};wf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qt(nt.current);var o=null;switch(n){case"input":i=Dl(e,i),r=Dl(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Fl(e,i),r=Fl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bi)}Bl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&W("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Sf=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dm(e,t,n){var r=t.pendingProps;switch(oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ee(t.type)&&qi(),ce(t),null;case 3:return r=t.stateNode,Wn(),H(ke),H(he),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(ks(Qe),Qe=null))),hs(e,t),ce(t),null;case 5:pa(t);var i=qt(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)wf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ce(t),null}if(e=qt(nt.current),yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[Br]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)W(gr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ga(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Za(r,o),W("invalid",r)}Bl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",""+s]):Tr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":ui(r),Xa(r,o,!0);break;case"textarea":ui(r),Ja(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[Br]=r,xf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Wl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)W(gr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Ga(e,r),i=Dl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),W("invalid",e);break;case"textarea":Za(e,r),i=Fl(e,r),W("invalid",e);break;default:i=r}Bl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Jc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Xc(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Or(e,a):typeof a=="number"&&Or(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&W("scroll",e):a!=null&&Hs(e,o,a,l))}switch(n){case"input":ui(e),Xa(e,r,!1);break;case"textarea":ui(e),Ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+At(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?On(e,!!r.multiple,o,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Sf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=qt(Vr.current),qt(nt.current),yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return ce(t),null;case 13:if(H(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Re!==null&&t.mode&1&&!(t.flags&128))Ad(),Un(),t.flags|=98560,o=!1;else if(o=yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[et]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Qe!==null&&(ks(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Na())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Wn(),hs(e,t),e===null&&Fr(t.stateNode.containerInfo),ce(t),null;case 10:return ua(t.type._context),ce(t),null;case 17:return Ee(t.type)&&qi(),ce(t),null;case 19:if(H(K),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)cr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=lo(e),l!==null){for(t.flags|=128,cr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Hn&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304)}else{if(!r)if(e=lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Q)return ce(t),null}else 2*Z()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Mm(e,t){switch(oa(t),t.tag){case 1:return Ee(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),H(ke),H(he),ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pa(t),null;case 13:if(H(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(K),null;case 4:return Wn(),null;case 10:return ua(t.type._context),null;case 22:case 23:return ja(),null;case 24:return null;default:return null}}var Si=!1,fe=!1,Am=typeof WeakSet=="function"?WeakSet:Set,P=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function ms(e,t,n){try{n()}catch(r){X(e,t,r)}}var Uu=!1;function Fm(e,t){if(bl=Xi,e=jd(),ra(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,d=e,g=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(s=l+i),d!==o||r!==0&&d.nodeType!==3||(a=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===i&&(s=l),g===o&&++p===r&&(a=l),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:e,selectionRange:n},Xi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,C=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ve(t.type,w),C);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Uu,Uu=!1,y}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ms(t,n,o)}i=i.next}while(i!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kf(e){var t=e.alternate;t!==null&&(e.alternate=null,kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[Br],delete t[ns],delete t[Sm],delete t[km])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ef(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bi));else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}var le=null,He=!1;function yt(e,t,n){for(n=n.child;n!==null;)Cf(e,t,n),n=n.sibling}function Cf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:fe||Rn(n,t);case 6:var r=le,i=He;le=null,yt(e,t,n),le=r,He=i,le!==null&&(He?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(He?(e=le,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),Dr(e)):fl(le,n.stateNode));break;case 4:r=le,i=He,le=n.stateNode.containerInfo,He=!0,yt(e,t,n),le=r,He=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ms(n,t,l),i=i.next}while(i!==r)}yt(e,t,n);break;case 1:if(!fe&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,yt(e,t,n),fe=r):yt(e,t,n);break;default:yt(e,t,n)}}function Wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Am),t.forEach(function(r){var i=Gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,He=!1;break e;case 3:le=s.stateNode.containerInfo,He=!0;break e;case 4:le=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(le===null)throw Error(N(160));Cf(o,l,i),le=null,He=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jf(t,e),t=t.sibling}function jf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ze(e),r&4){try{_r(3,e,e.return),Oo(3,e)}catch(w){X(e,e.return,w)}try{_r(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:We(t,e),Ze(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(We(t,e),Ze(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{Or(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Kc(i,o),Wl(s,l);var u=Wl(s,o);for(l=0;l<a.length;l+=2){var p=a[l],d=a[l+1];p==="style"?Jc(i,d):p==="dangerouslySetInnerHTML"?Xc(i,d):p==="children"?Or(i,d):Hs(i,p,d,u)}switch(s){case"input":Ml(i,o);break;case"textarea":Yc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?On(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?On(i,!!o.multiple,o.defaultValue,!0):On(i,!!o.multiple,o.multiple?[]:"",!1))}i[Br]=o}catch(w){X(e,e.return,w)}}break;case 6:if(We(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){X(e,e.return,w)}}break;case 3:if(We(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:We(t,e),Ze(e);break;case 13:We(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ea=Z())),r&4&&Wu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(u=fe)||p,We(t,e),fe=u):We(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(d=P=p;P!==null;){switch(g=P,v=g.child,g.tag){case 0:case 11:case 14:case 15:_r(4,g,g.return);break;case 1:Rn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:Rn(g,g.return);break;case 22:if(g.memoizedState!==null){Hu(d);continue}}v!==null?(v.return=g,P=v):Hu(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Zc("display",l))}catch(w){X(e,e.return,w)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){X(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:We(t,e),Ze(e),r&4&&Wu(e);break;case 21:break;default:We(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ef(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Or(i,""),r.flags&=-33);var o=Bu(e);ys(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Bu(e);vs(e,s,l);break;default:throw Error(N(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Um(e,t,n){P=e,Nf(e)}function Nf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Si;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||fe;s=Si;var u=fe;if(Si=l,(fe=a)&&!u)for(P=i;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?Qu(i):a!==null?(a.return=l,P=a):Qu(i);for(;o!==null;)P=o,Nf(o),o=o.sibling;P=i,Si=s,fe=u}Vu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Vu(e)}}function Vu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_u(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_u(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Dr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}fe||t.flags&512&&gs(t)}catch(g){X(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Hu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Qu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{gs(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{gs(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Bm=Math.ceil,uo=ht.ReactCurrentDispatcher,Sa=ht.ReactCurrentOwner,Me=ht.ReactCurrentBatchConfig,$=0,oe=null,b=null,se=0,Pe=0,zn=Bt(0),ne=0,Yr=null,un=0,Lo=0,ka=0,Pr=null,xe=null,Ea=0,Hn=1/0,it=null,co=!1,xs=null,It=null,ki=!1,_t=null,fo=0,Rr=0,ws=null,Di=-1,Mi=0;function ge(){return $&6?Z():Di!==-1?Di:Di=Z()}function $t(e){return e.mode&1?$&2&&se!==0?se&-se:Cm.transition!==null?(Mi===0&&(Mi=ud()),Mi):(e=M,e!==0||(e=window.event,e=e===void 0?16:gd(e.type)),e):1}function Ye(e,t,n,r){if(50<Rr)throw Rr=0,ws=null,Error(N(185));br(e,n,r),(!($&2)||e!==oe)&&(e===oe&&(!($&2)&&(Lo|=n),ne===4&&jt(e,se)),Ce(e,r),n===1&&$===0&&!(t.mode&1)&&(Hn=Z()+500,Ro&&Wt()))}function Ce(e,t){var n=e.callbackNode;Ch(e,t);var r=Gi(e,e===oe?se:0);if(r===0)n!==null&&eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eu(n),t===1)e.tag===0?Em(Ku.bind(null,e)):$d(Ku.bind(null,e)),xm(function(){!($&6)&&Wt()}),n=null;else{switch(cd(r)){case 1:n=Xs;break;case 4:n=sd;break;case 16:n=Yi;break;case 536870912:n=ad;break;default:n=Yi}n=If(n,_f.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _f(e,t){if(Di=-1,Mi=0,$&6)throw Error(N(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Gi(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=po(e,r);else{t=r;var i=$;$|=2;var o=Rf();(oe!==e||se!==t)&&(it=null,Hn=Z()+500,tn(e,t));do try{Hm();break}catch(s){Pf(e,s)}while(!0);aa(),uo.current=o,$=i,b!==null?t=0:(oe=null,se=0,t=ne)}if(t!==0){if(t===2&&(i=Yl(e),i!==0&&(r=i,t=Ss(e,i))),t===1)throw n=Yr,tn(e,0),jt(e,r),Ce(e,Z()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wm(i)&&(t=po(e,r),t===2&&(o=Yl(e),o!==0&&(r=o,t=Ss(e,o))),t===1))throw n=Yr,tn(e,0),jt(e,r),Ce(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Xt(e,xe,it);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Ea+500-Z(),10<t)){if(Gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ts(Xt.bind(null,e,xe,it),t);break}Xt(e,xe,it);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ke(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bm(r/1960))-r,10<r){e.timeoutHandle=ts(Xt.bind(null,e,xe,it),r);break}Xt(e,xe,it);break;case 5:Xt(e,xe,it);break;default:throw Error(N(329))}}}return Ce(e,Z()),e.callbackNode===n?_f.bind(null,e):null}function Ss(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=po(e,t),e!==2&&(t=xe,xe=n,t!==null&&ks(t)),e}function ks(e){xe===null?xe=e:xe.push.apply(xe,e)}function Wm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~ka,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Ku(e){if($&6)throw Error(N(327));Mn();var t=Gi(e,0);if(!(t&1))return Ce(e,Z()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=Ss(e,r))}if(n===1)throw n=Yr,tn(e,0),jt(e,t),Ce(e,Z()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,xe,it),Ce(e,Z()),null}function Ca(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Hn=Z()+500,Ro&&Wt())}}function cn(e){_t!==null&&_t.tag===0&&!($&6)&&Mn();var t=$;$|=1;var n=Me.transition,r=M;try{if(Me.transition=null,M=1,e)return e()}finally{M=r,Me.transition=n,$=t,!($&6)&&Wt()}}function ja(){Pe=zn.current,H(zn)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ym(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:Wn(),H(ke),H(he),ha();break;case 5:pa(r);break;case 4:Wn();break;case 13:H(K);break;case 19:H(K);break;case 10:ua(r.type._context);break;case 22:case 23:ja()}n=n.return}if(oe=e,b=e=Dt(e.current,null),se=Pe=t,ne=0,Yr=null,ka=Lo=un=0,xe=Pr=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}bt=null}return e}function Pf(e,t){do{var n=b;try{if(aa(),Li.current=ao,so){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}so=!1}if(an=0,re=te=Y=null,Nr=!1,Hr=0,Sa.current=null,n===null||n.return===null){ne=1,Yr=t,b=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Lu(l);if(v!==null){v.flags&=-257,Iu(v,l,s,o,t),v.mode&1&&Ou(o,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){Ou(o,u,t),Na();break e}a=Error(N(426))}}else if(Q&&s.mode&1){var C=Lu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Iu(C,l,s,o,t),la(Vn(a,s));break e}}o=a=Vn(a,s),ne!==4&&(ne=2),Pr===null?Pr=[o]:Pr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=df(o,a,t);Nu(o,h);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(It===null||!It.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ff(o,s,t);Nu(o,x);break e}}o=o.return}while(o!==null)}Tf(n)}catch(j){t=j,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function Rf(){var e=uo.current;return uo.current=ao,e===null?ao:e}function Na(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(un&268435455)&&!(Lo&268435455)||jt(oe,se)}function po(e,t){var n=$;$|=2;var r=Rf();(oe!==e||se!==t)&&(it=null,tn(e,t));do try{Vm();break}catch(i){Pf(e,i)}while(!0);if(aa(),$=n,uo.current=r,b!==null)throw Error(N(261));return oe=null,se=0,ne}function Vm(){for(;b!==null;)zf(b)}function Hm(){for(;b!==null&&!mh();)zf(b)}function zf(e){var t=Lf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Tf(e):b=t,Sa.current=null}function Tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mm(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,b=null;return}}else if(n=Dm(n,t,Pe),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);ne===0&&(ne=5)}function Xt(e,t,n){var r=M,i=Me.transition;try{Me.transition=null,M=1,Qm(e,t,n,r)}finally{Me.transition=i,M=r}return null}function Qm(e,t,n,r){do Mn();while(_t!==null);if($&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jh(e,o),e===oe&&(b=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ki||(ki=!0,If(Yi,function(){return Mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var l=M;M=1;var s=$;$|=4,Sa.current=null,Fm(e,n),jf(n,e),dm(ql),Xi=!!bl,ql=bl=null,e.current=n,Um(n),gh(),$=s,M=l,Me.transition=o}else e.current=n;if(ki&&(ki=!1,_t=e,fo=i),o=e.pendingLanes,o===0&&(It=null),xh(n.stateNode),Ce(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(co)throw co=!1,e=xs,xs=null,e;return fo&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===ws?Rr++:(Rr=0,ws=e):Rr=0,Wt(),null}function Mn(){if(_t!==null){var e=cd(fo),t=Me.transition,n=M;try{if(Me.transition=null,M=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,fo=0,$&6)throw Error(N(331));var i=$;for($|=4,P=e.current;P!==null;){var o=P,l=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:_r(8,p,o)}var d=p.child;if(d!==null)d.return=p,P=d;else for(;P!==null;){p=P;var g=p.sibling,v=p.return;if(kf(p),p===u){P=null;break}if(g!==null){g.return=v,P=g;break}P=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}P=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,P=l;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_r(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,P=h;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oo(9,s)}}catch(j){X(s,s.return,j)}if(s===l){P=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,P=x;break e}P=s.return}}if($=i,Wt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{M=n,Me.transition=t}}return!1}function Yu(e,t,n){t=Vn(n,t),t=df(e,t,1),e=Lt(e,t,1),t=ge(),e!==null&&(br(e,1,t),Ce(e,t))}function X(e,t,n){if(e.tag===3)Yu(e,e,n);else for(;t!==null;){if(t.tag===3){Yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Vn(n,e),e=ff(t,e,1),t=Lt(t,e,1),e=ge(),t!==null&&(br(t,1,e),Ce(t,e));break}}t=t.return}}function Km(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>Z()-Ea?tn(e,0):ka|=n),Ce(e,t)}function Of(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=ge();e=ft(e,t),e!==null&&(br(e,t,n),Ce(e,n))}function Ym(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Of(e,n)}function Gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Of(e,n)}var Lf;Lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,$m(e,t,n);we=!!(e.flags&131072)}else we=!1,Q&&t.flags&1048576&&Dd(t,no,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$i(e,t),e=t.pendingProps;var i=Fn(t,he.current);Dn(t,n),i=ga(null,t,r,e,i,n);var o=va();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,eo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,da(t),i.updater=To,t.stateNode=i,i._reactInternals=t,as(t,r,e,n),t=ds(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&ia(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Zm(r),e=Ve(r,e),i){case 0:t=cs(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Du(null,t,r,Ve(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),cs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Mu(e,t,r,i,n);case 3:e:{if(gf(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Wd(e,t),oo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error(N(423)),t),t=Au(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(N(424)),t),t=Au(e,t,r,n,i);break e}else for(Re=Ot(t.stateNode.containerInfo.firstChild),ze=t,Q=!0,Qe=null,n=Ud(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){t=pt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Vd(t),e===null&&os(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,es(r,i)?l=null:o!==null&&es(r,o)&&(t.flags|=32),mf(e,t),me(e,t,l,n),t.child;case 6:return e===null&&os(t),null;case 13:return vf(e,t,n);case 4:return fa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),$u(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B(ro,r._currentValue),r._currentValue=l,o!==null)if(Xe(o.value,l)){if(o.children===i.children&&!ke.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ut(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ls(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(N(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ls(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=Ae(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),Du(e,t,r,i,n);case 15:return pf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),$i(e,t),t.tag=1,Ee(r)?(e=!0,eo(t)):e=!1,Dn(t,n),cf(t,r,i),as(t,r,i,n),ds(null,t,r,!0,e,n);case 19:return yf(e,t,n);case 22:return hf(e,t,n)}throw Error(N(156,t.tag))};function If(e,t){return ld(e,t)}function Xm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Xm(e,t,n,r)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zm(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ks)return 11;if(e===Ys)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ai(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")_a(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case wn:return nn(n.children,i,o,t);case Qs:l=8,i|=8;break;case Ol:return e=De(12,n,t,i|2),e.elementType=Ol,e.lanes=o,e;case Ll:return e=De(13,n,t,i),e.elementType=Ll,e.lanes=o,e;case Il:return e=De(19,n,t,i),e.elementType=Il,e.lanes=o,e;case Vc:return Io(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:l=10;break e;case Wc:l=9;break e;case Ks:l=11;break e;case Ys:l=14;break e;case wt:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nn(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Io(e,t,n,r){return e=De(22,e,r,t),e.elementType=Vc,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tl(0),this.expirationTimes=tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pa(e,t,n,r,i,o,l,s,a){return e=new Jm(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(o),e}function bm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Ft;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Id(e,n,t)}return t}function Df(e,t,n,r,i,o,l,s,a){return e=Pa(n,r,!0,e,i,o,l,s,a),e.context=$f(null),n=e.current,r=ge(),i=$t(n),o=ut(r,i),o.callback=t??null,Lt(n,o,i),e.current.lanes=i,br(e,i,r),Ce(e,r),e}function $o(e,t,n,r){var i=t.current,o=ge(),l=$t(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,l),e!==null&&(Ye(e,i,l,o),Oi(e,i,l)),l}function ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function qm(){return null}var Mf=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}Do.prototype.render=za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));$o(e,t,null,null)};Do.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){$o(null,e,null,null)}),t[dt]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=pd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&md(e)}};function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xu(){}function e0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ho(l);o.call(u)}}var l=Df(t,r,e,0,null,!1,!1,"",Xu);return e._reactRootContainer=l,e[dt]=l.current,Fr(e.nodeType===8?e.parentNode:e),cn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ho(a);s.call(u)}}var a=Pa(e,0,!1,null,null,!1,!1,"",Xu);return e._reactRootContainer=a,e[dt]=a.current,Fr(e.nodeType===8?e.parentNode:e),cn(function(){$o(t,a,n,r)}),a}function Ao(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=ho(l);s.call(a)}}$o(t,l,e,i)}else l=e0(n,t,e,i,r);return ho(l)}dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(Zs(t,n|1),Ce(t,Z()),!($&6)&&(Hn=Z()+500,Wt()))}break;case 13:cn(function(){var r=ft(e,1);if(r!==null){var i=ge();Ye(r,e,1,i)}}),Ra(e,1)}};Js=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ge();Ye(t,e,134217728,n)}Ra(e,134217728)}};fd=function(e){if(e.tag===13){var t=$t(e),n=ft(e,t);if(n!==null){var r=ge();Ye(n,e,t,r)}Ra(e,t)}};pd=function(){return M};hd=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Hl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(N(90));Qc(r),Ml(r,i)}}}break;case"textarea":Yc(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};ed=Ca;td=cn;var t0={usingClientEntryPoint:!1,Events:[ei,Cn,Po,bc,qc,Ca]},dr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n0={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=id(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{Co=Ei.inject(n0),tt=Ei}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ta(t))throw Error(N(200));return bm(e,t,null,n)};Oe.createRoot=function(e,t){if(!Ta(e))throw Error(N(299));var n=!1,r="",i=Mf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pa(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new za(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=id(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return cn(e)};Oe.hydrate=function(e,t,n){if(!Mo(t))throw Error(N(200));return Ao(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Ta(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Mf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Df(t,null,e,1,n??null,i,!1,o,l),e[dt]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Do(t)};Oe.render=function(e,t,n){if(!Mo(t))throw Error(N(200));return Ao(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(N(40));return e._reactRootContainer?(cn(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Oe.unstable_batchedUpdates=Ca;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ao(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Mc.exports=Oe;var Ff=Mc.exports;const vr=Ms(Ff);var Zu=Ff;zl.createRoot=Zu.createRoot,zl.hydrateRoot=Zu.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Ju="popstate";function r0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Es("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mo(i)}return o0(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function i0(){return Math.random().toString(36).substr(2,8)}function bu(e,t){return{usr:e.state,key:e.key,idx:t}}function Es(e,t,n,r){return n===void 0&&(n=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qn(t):t,{state:n,key:t&&t.key||r||i0()})}function mo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function o0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Pt.Pop,a=null,u=p();u==null&&(u=0,l.replaceState(Gr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function d(){s=Pt.Pop;let C=p(),h=C==null?null:C-u;u=C,a&&a({action:s,location:w.location,delta:h})}function g(C,h){s=Pt.Push;let c=Es(w.location,C,h);u=p()+1;let m=bu(c,u),x=w.createHref(c);try{l.pushState(m,"",x)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(x)}o&&a&&a({action:s,location:w.location,delta:1})}function v(C,h){s=Pt.Replace;let c=Es(w.location,C,h);u=p();let m=bu(c,u),x=w.createHref(c);l.replaceState(m,"",x),o&&a&&a({action:s,location:w.location,delta:0})}function y(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof C=="string"?C:mo(C);return c=c.replace(/ $/,"%20"),q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let w={get action(){return s},get location(){return e(i,l)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Ju,d),a=C,()=>{i.removeEventListener(Ju,d),a=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let h=y(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:v,go(C){return l.go(C)}};return w}var qu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qu||(qu={}));function l0(e,t,n){return n===void 0&&(n="/"),s0(e,t,n,!1)}function s0(e,t,n,r){let i=typeof t=="string"?qn(t):t,o=Oa(i.pathname||"/",n);if(o==null)return null;let l=Bf(e);a0(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let u=x0(o);s=v0(l[a],u,r)}return s}function Bf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Mt([r,a.relativePath]),p=n.concat(a);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bf(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:m0(u,o.index),routesMeta:p})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Wf(o.path))i(o,l,a)}),t}function Wf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Wf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function a0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:g0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const u0=/^:[\w-]+$/,c0=3,d0=2,f0=1,p0=10,h0=-2,ec=e=>e==="*";function m0(e,t){let n=e.split("/"),r=n.length;return n.some(ec)&&(r+=h0),t&&(r+=d0),n.filter(i=>!ec(i)).reduce((i,o)=>i+(u0.test(o)?c0:o===""?f0:p0),r)}function g0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function v0(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",d=tc({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},p),g=a.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=tc({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},p)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Mt([o,d.pathname]),pathnameBase:E0(Mt([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=Mt([o,d.pathnameBase]))}return l}function tc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=y0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:g,isOptional:v}=p;if(g==="*"){let w=s[d]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[d];return v&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function y0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Uf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function x0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Uf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Oa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function w0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qn(e):e;return{pathname:n?n.startsWith("/")?n:S0(n,t):t,search:C0(r),hash:j0(i)}}function S0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vf(e,t){let n=k0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qn(e):(i=Gr({},e),q(!i.pathname||!i.pathname.includes("?"),kl("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),kl("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),kl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}s=d>=0?t[d]:"/"}let a=w0(i,s),u=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||p)&&(a.pathname+="/"),a}const Mt=e=>e.join("/").replace(/\/\/+/g,"/"),E0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qf=["post","put","patch","delete"];new Set(Qf);const _0=["get",...Qf];new Set(_0);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}const La=S.createContext(null),P0=S.createContext(null),pn=S.createContext(null),Fo=S.createContext(null),hn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Kf=S.createContext(null);function R0(e,t){let{relative:n}=t===void 0?{}:t;ni()||q(!1);let{basename:r,navigator:i}=S.useContext(pn),{hash:o,pathname:l,search:s}=Gf(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Mt([r,l])),i.createHref({pathname:a,search:s,hash:o})}function ni(){return S.useContext(Fo)!=null}function Uo(){return ni()||q(!1),S.useContext(Fo).location}function Yf(e){S.useContext(pn).static||S.useLayoutEffect(e)}function z0(){let{isDataRoute:e}=S.useContext(hn);return e?V0():T0()}function T0(){ni()||q(!1);let e=S.useContext(La),{basename:t,future:n,navigator:r}=S.useContext(pn),{matches:i}=S.useContext(hn),{pathname:o}=Uo(),l=JSON.stringify(Vf(i,n.v7_relativeSplatPath)),s=S.useRef(!1);return Yf(()=>{s.current=!0}),S.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=Hf(u,JSON.parse(l),o,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Mt([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,l,o,e])}function Gf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(pn),{matches:i}=S.useContext(hn),{pathname:o}=Uo(),l=JSON.stringify(Vf(i,r.v7_relativeSplatPath));return S.useMemo(()=>Hf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function O0(e,t){return L0(e,t)}function L0(e,t,n,r){ni()||q(!1);let{navigator:i}=S.useContext(pn),{matches:o}=S.useContext(hn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=Uo(),p;if(t){var d;let C=typeof t=="string"?qn(t):t;a==="/"||(d=C.pathname)!=null&&d.startsWith(a)||q(!1),p=C}else p=u;let g=p.pathname||"/",v=g;if(a!=="/"){let C=a.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=l0(e,{pathname:v}),w=A0(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Mt([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Mt([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&w?S.createElement(Fo.Provider,{value:{location:Xr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Pt.Pop}},w):w}function I0(){let e=W0(),t=N0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const $0=S.createElement(I0,null);class D0 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(hn.Provider,{value:this.props.routeContext},S.createElement(Kf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function M0(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(La);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(hn.Provider,{value:t},r)}function A0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let p=l.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);p>=0||q(!1),l=l.slice(0,Math.min(l.length,p+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let d=l[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:g,errors:v}=n,y=d.route.loader&&g[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,d,g)=>{let v,y=!1,w=null,C=null;n&&(v=s&&d.route.id?s[d.route.id]:void 0,w=d.route.errorElement||$0,a&&(u<0&&g===0?(y=!0,C=null):u===g&&(y=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,g+1)),c=()=>{let m;return v?m=w:y?m=C:d.route.Component?m=S.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=p,S.createElement(M0,{match:d,routeContext:{outlet:p,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?S.createElement(D0,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Xf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xf||{}),go=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(go||{});function F0(e){let t=S.useContext(La);return t||q(!1),t}function U0(e){let t=S.useContext(P0);return t||q(!1),t}function B0(e){let t=S.useContext(hn);return t||q(!1),t}function Zf(e){let t=B0(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function W0(){var e;let t=S.useContext(Kf),n=U0(go.UseRouteError),r=Zf(go.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function V0(){let{router:e}=F0(Xf.UseNavigateStable),t=Zf(go.UseNavigateStable),n=S.useRef(!1);return Yf(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Xr({fromRouteId:t},o)))},[e,t])}function de(e){q(!1)}function H0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:o,static:l=!1,future:s}=e;ni()&&q(!1);let a=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:o,static:l,future:Xr({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=qn(r));let{pathname:p="/",search:d="",hash:g="",state:v=null,key:y="default"}=r,w=S.useMemo(()=>{let C=Oa(p,a);return C==null?null:{location:{pathname:C,search:d,hash:g,state:v,key:y},navigationType:i}},[a,p,d,g,v,y,i]);return w==null?null:S.createElement(pn.Provider,{value:u},S.createElement(Fo.Provider,{children:n,value:w}))}function Q0(e){let{children:t,location:n}=e;return O0(Cs(t),n)}new Promise(()=>{});function Cs(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Cs(r.props.children,o));return}r.type!==de&&q(!1),!r.props.index||!r.props.children||q(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Cs(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},js.apply(this,arguments)}function K0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Y0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function G0(e,t){return e.button===0&&(!t||t==="_self")&&!Y0(e)}const X0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z0="6";try{window.__reactRouterVersion=Z0}catch{}const J0="startTransition",nc=Kp[J0];function b0(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=r0({window:i,v5Compat:!0}));let l=o.current,[s,a]=S.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=S.useCallback(d=>{u&&nc?nc(()=>a(d)):a(d)},[a,u]);return S.useLayoutEffect(()=>l.listen(p),[l,p]),S.createElement(H0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const q0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yr=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:u,preventScrollReset:p,viewTransition:d}=t,g=K0(t,X0),{basename:v}=S.useContext(pn),y,w=!1;if(typeof u=="string"&&eg.test(u)&&(y=u,q0))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),j=Oa(x.pathname,v);x.origin===m.origin&&j!=null?u=j+x.search+x.hash:w=!0}catch{}let C=R0(u,{relative:i}),h=tg(u,{replace:l,state:s,target:a,preventScrollReset:p,relative:i,viewTransition:d});function c(m){r&&r(m),m.defaultPrevented||h(m)}return S.createElement("a",js({},g,{href:y||C,onClick:w||o?r:c,ref:n,target:a}))});var rc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(rc||(rc={}));var ic;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ic||(ic={}));function tg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:s}=t===void 0?{}:t,a=z0(),u=Uo(),p=Gf(e,{relative:l});return S.useCallback(d=>{if(G0(d,n)){d.preventDefault();let g=r!==void 0?r:mo(u)===mo(p);a(e,{replace:g,state:i,preventScrollReset:o,relative:l,viewTransition:s})}},[u,a,p,r,i,n,e,o,l,s])}var Jf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(o=i(o,r(s)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var l="";for(var s in o)t.call(o,s)&&o[s]&&(l=i(l,s));return l}function i(o,l){return l?o?o+" "+l:o+l:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Jf);var ng=Jf.exports;const mn=Ms(ng);function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ns.apply(null,arguments)}function bf(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function oc(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function rg(e){var t=ig(e,"string");return typeof t=="symbol"?t:String(t)}function ig(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function og(e,t,n){var r=S.useRef(e!==void 0),i=S.useState(t),o=i[0],l=i[1],s=e!==void 0,a=r.current;return r.current=s,!s&&a&&o!==t&&l(t),[s?e:o,S.useCallback(function(u){for(var p=arguments.length,d=new Array(p>1?p-1:0),g=1;g<p;g++)d[g-1]=arguments[g];n&&n.apply(void 0,[u].concat(d)),l(u)},[n])]}function lg(e,t){return Object.keys(t).reduce(function(n,r){var i,o=n,l=o[oc(r)],s=o[r],a=bf(o,[oc(r),r].map(rg)),u=t[r],p=og(s,l,e[u]),d=p[0],g=p[1];return Ns({},a,(i={},i[r]=d,i[u]=g,i))},e)}function _s(e,t){return _s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},_s(e,t)}function sg(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_s(e,t)}const ag=["xxl","xl","lg","md","sm","xs"],ug="xs",cg=S.createContext({prefixes:{},breakpoints:ag,minBreakpoint:ug});function er(e,t){const{prefixes:n}=S.useContext(cg);return e||n[t]||t}function dg(e){return e&&e.ownerDocument||document}function fg(e){var t=dg(e);return t&&t.defaultView||window}function pg(e,t){return fg(e).getComputedStyle(e,t)}var hg=/([A-Z])/g;function mg(e){return e.replace(hg,"-$1").toLowerCase()}var gg=/^ms-/;function Ci(e){return mg(e).replace(gg,"-ms-")}var vg=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function yg(e){return!!(e&&vg.test(e))}function vo(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(Ci(t))||pg(e).getPropertyValue(Ci(t));Object.keys(t).forEach(function(i){var o=t[i];!o&&o!==0?e.style.removeProperty(Ci(i)):yg(i)?r+=i+"("+o+") ":n+=Ci(i)+": "+o+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}const lc={disabled:!1},qf=pe.createContext(null);var xg=function(t){return t.scrollTop},xr="unmounted",kt="exited",Et="entering",Zt="entered",yo="exiting",mt=function(e){sg(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var l=i,s=l&&!l.isMounting?r.enter:r.appear,a;return o.appearStatus=null,r.in?s?(a=kt,o.appearStatus=Et):a=Zt:r.unmountOnExit||r.mountOnEnter?a=xr:a=kt,o.state={status:a},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var l=i.in;return l&&o.status===xr?{status:kt}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var l=this.state.status;this.props.in?l!==Et&&l!==Zt&&(o=Et):(l===Et||l===Zt)&&(o=yo)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,l,s;return o=l=s=i,i!=null&&typeof i!="number"&&(o=i.exit,l=i.enter,s=i.appear!==void 0?i.appear:l),{exit:o,enter:l,appear:s}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===Et){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:vr.findDOMNode(this);l&&xg(l)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===kt&&this.setState({status:xr})},n.performEnter=function(i){var o=this,l=this.props.enter,s=this.context?this.context.isMounting:i,a=this.props.nodeRef?[s]:[vr.findDOMNode(this),s],u=a[0],p=a[1],d=this.getTimeouts(),g=s?d.appear:d.enter;if(!i&&!l||lc.disabled){this.safeSetState({status:Zt},function(){o.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:Et},function(){o.props.onEntering(u,p),o.onTransitionEnd(g,function(){o.safeSetState({status:Zt},function(){o.props.onEntered(u,p)})})})},n.performExit=function(){var i=this,o=this.props.exit,l=this.getTimeouts(),s=this.props.nodeRef?void 0:vr.findDOMNode(this);if(!o||lc.disabled){this.safeSetState({status:kt},function(){i.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:yo},function(){i.props.onExiting(s),i.onTransitionEnd(l.exit,function(){i.safeSetState({status:kt},function(){i.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,l=!0;return this.nextCallback=function(s){l&&(l=!1,o.nextCallback=null,i(s))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var l=this.props.nodeRef?this.props.nodeRef.current:vr.findDOMNode(this),s=i==null&&!this.props.addEndListener;if(!l||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],u=a[0],p=a[1];this.props.addEndListener(u,p)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===xr)return null;var o=this.props,l=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var s=bf(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return pe.createElement(qf.Provider,{value:null},typeof l=="function"?l(i,s):pe.cloneElement(pe.Children.only(l),s))},t}(pe.Component);mt.contextType=qf;mt.propTypes={};function vn(){}mt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:vn,onEntering:vn,onEntered:vn,onExit:vn,onExiting:vn,onExited:vn};mt.UNMOUNTED=xr;mt.EXITED=kt;mt.ENTERING=Et;mt.ENTERED=Zt;mt.EXITING=yo;const wg=!!(typeof window<"u"&&window.document&&window.document.createElement);var Ps=!1,Rs=!1;try{var El={get passive(){return Ps=!0},get once(){return Rs=Ps=!0}};wg&&(window.addEventListener("test",El,El),window.removeEventListener("test",El,!0))}catch{}function Sg(e,t,n,r){if(r&&typeof r!="boolean"&&!Rs){var i=r.once,o=r.capture,l=n;!Rs&&i&&(l=n.__once||function s(a){this.removeEventListener(t,s,o),n.call(this,a)},n.__once=l),e.addEventListener(t,l,Ps?r:o)}e.addEventListener(t,n,r)}function kg(e,t,n,r){var i=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,i),n.__once&&e.removeEventListener(t,n.__once,i)}function ep(e,t,n,r){return Sg(e,t,n,r),function(){kg(e,t,n,r)}}function Eg(e,t,n,r){if(r===void 0&&(r=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,n,r),e.dispatchEvent(i)}}function Cg(e){var t=vo(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function jg(e,t,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||Eg(e,"transitionend",!0)},t+n),o=ep(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),o()}}function Ng(e,t,n,r){n==null&&(n=Cg(e)||0);var i=jg(e,n,r),o=ep(e,"transitionend",t);return function(){i(),o()}}function sc(e,t){const n=vo(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function _g(e,t){const n=sc(e,"transitionDuration"),r=sc(e,"transitionDelay"),i=Ng(e,o=>{o.target===e&&(i(),t(o))},n+r)}function fr(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...i){t.apply(this,i),n.apply(this,i)}},null)}function Pg(e){e.offsetHeight}const ac=e=>!e||typeof e=="function"?e:t=>{e.current=t};function Rg(e,t){const n=ac(e),r=ac(t);return i=>{n&&n(i),r&&r(i)}}function zg(e,t){return S.useMemo(()=>Rg(e,t),[e,t])}function Tg(e){return e&&"setState"in e?vr.findDOMNode(e):e??null}const Og=pe.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:i,onExited:o,addEndListener:l,children:s,childRef:a,...u},p)=>{const d=S.useRef(null),g=zg(d,a),v=k=>{g(Tg(k))},y=k=>E=>{k&&d.current&&k(d.current,E)},w=S.useCallback(y(e),[e]),C=S.useCallback(y(t),[t]),h=S.useCallback(y(n),[n]),c=S.useCallback(y(r),[r]),m=S.useCallback(y(i),[i]),x=S.useCallback(y(o),[o]),j=S.useCallback(y(l),[l]);return f.jsx(mt,{ref:p,...u,onEnter:w,onEntered:h,onEntering:C,onExit:c,onExited:x,onExiting:m,addEndListener:j,nodeRef:d,children:typeof s=="function"?(k,E)=>s(k,{...E,ref:v}):pe.cloneElement(s,{ref:v})})}),Lg={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Ig(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],i=Lg[e];return r+parseInt(vo(t,i[0]),10)+parseInt(vo(t,i[1]),10)}const $g={[kt]:"collapse",[yo]:"collapsing",[Et]:"collapsing",[Zt]:"collapse show"},Dg=pe.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:i,className:o,children:l,dimension:s="height",in:a=!1,timeout:u=300,mountOnEnter:p=!1,unmountOnExit:d=!1,appear:g=!1,getDimensionValue:v=Ig,...y},w)=>{const C=typeof s=="function"?s():s,h=S.useMemo(()=>fr(k=>{k.style[C]="0"},e),[C,e]),c=S.useMemo(()=>fr(k=>{const E=`scroll${C[0].toUpperCase()}${C.slice(1)}`;k.style[C]=`${k[E]}px`},t),[C,t]),m=S.useMemo(()=>fr(k=>{k.style[C]=null},n),[C,n]),x=S.useMemo(()=>fr(k=>{k.style[C]=`${v(C,k)}px`,Pg(k)},r),[r,v,C]),j=S.useMemo(()=>fr(k=>{k.style[C]=null},i),[C,i]);return f.jsx(Og,{ref:w,addEndListener:_g,...y,"aria-expanded":y.role?a:null,onEnter:h,onEntering:c,onEntered:m,onExit:x,onExiting:j,childRef:l.ref,in:a,timeout:u,mountOnEnter:p,unmountOnExit:d,appear:g,children:(k,E)=>pe.cloneElement(l,{...E,className:mn(o,l.props.className,$g[k],C==="width"&&"collapse-horizontal")})})});function tp(e,t){return Array.isArray(e)?e.includes(t):e===t}const ri=S.createContext({});ri.displayName="AccordionContext";const Ia=S.forwardRef(({as:e="div",bsPrefix:t,className:n,children:r,eventKey:i,...o},l)=>{const{activeEventKey:s}=S.useContext(ri);return t=er(t,"accordion-collapse"),f.jsx(Dg,{ref:l,in:tp(s,i),...o,className:mn(n,t),children:f.jsx(e,{children:S.Children.only(r)})})});Ia.displayName="AccordionCollapse";const Bo=S.createContext({eventKey:""});Bo.displayName="AccordionItemContext";const np=S.forwardRef(({as:e="div",bsPrefix:t,className:n,onEnter:r,onEntering:i,onEntered:o,onExit:l,onExiting:s,onExited:a,...u},p)=>{t=er(t,"accordion-body");const{eventKey:d}=S.useContext(Bo);return f.jsx(Ia,{eventKey:d,onEnter:r,onEntering:i,onEntered:o,onExit:l,onExiting:s,onExited:a,children:f.jsx(e,{ref:p,...u,className:mn(n,t)})})});np.displayName="AccordionBody";function Mg(e,t){const{activeEventKey:n,onSelect:r,alwaysOpen:i}=S.useContext(ri);return o=>{let l=e===n?null:e;i&&(Array.isArray(n)?n.includes(e)?l=n.filter(s=>s!==e):l=[...n,e]:l=[e]),r==null||r(l,o),t==null||t(o)}}const $a=S.forwardRef(({as:e="button",bsPrefix:t,className:n,onClick:r,...i},o)=>{t=er(t,"accordion-button");const{eventKey:l}=S.useContext(Bo),s=Mg(l,r),{activeEventKey:a}=S.useContext(ri);return e==="button"&&(i.type="button"),f.jsx(e,{ref:o,onClick:s,...i,"aria-expanded":Array.isArray(a)?a.includes(l):l===a,className:mn(n,t,!tp(a,l)&&"collapsed")})});$a.displayName="AccordionButton";const rp=S.forwardRef(({as:e="h2",bsPrefix:t,className:n,children:r,onClick:i,...o},l)=>(t=er(t,"accordion-header"),f.jsx(e,{ref:l,...o,className:mn(n,t),children:f.jsx($a,{onClick:i,children:r})})));rp.displayName="AccordionHeader";const ip=S.forwardRef(({as:e="div",bsPrefix:t,className:n,eventKey:r,...i},o)=>{t=er(t,"accordion-item");const l=S.useMemo(()=>({eventKey:r}),[r]);return f.jsx(Bo.Provider,{value:l,children:f.jsx(e,{ref:o,...i,className:mn(n,t)})})});ip.displayName="AccordionItem";const op=S.forwardRef((e,t)=>{const{as:n="div",activeKey:r,bsPrefix:i,className:o,onSelect:l,flush:s,alwaysOpen:a,...u}=lg(e,{activeKey:"onSelect"}),p=er(i,"accordion"),d=S.useMemo(()=>({activeEventKey:r,onSelect:l,alwaysOpen:a}),[r,l,a]);return f.jsx(ri.Provider,{value:d,children:f.jsx(n,{ref:t,...u,className:mn(o,p,s&&`${p}-flush`)})})});op.displayName="Accordion";const Je=Object.assign(op,{Button:$a,Collapse:Ia,Item:ip,Header:rp,Body:np});var Se=function(){return Se=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Se.apply(this,arguments)};function xo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var V="-ms-",zr="-moz-",D="-webkit-",lp="comm",Wo="rule",Da="decl",Ag="@import",sp="@keyframes",Fg="@layer",ap=Math.abs,Ma=String.fromCharCode,zs=Object.assign;function Ug(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function up(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Fi(e,t,n){return e.indexOf(t,n)}function ie(e,t){return e.charCodeAt(t)|0}function Qn(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function cp(e){return e.length}function wr(e,t){return t.push(e),e}function Bg(e,t){return e.map(t).join("")}function uc(e,t){return e.filter(function(n){return!ot(n,t)})}var Vo=1,Kn=1,dp=0,Ue=0,J=0,tr="";function Ho(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Vo,column:Kn,length:l,return:"",siblings:s}}function xt(e,t){return zs(Ho("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yn(e){for(;e.root;)e=xt(e.root,{children:[e]});wr(e,e.siblings)}function Wg(){return J}function Vg(){return J=Ue>0?ie(tr,--Ue):0,Kn--,J===10&&(Kn=1,Vo--),J}function Ge(){return J=Ue<dp?ie(tr,Ue++):0,Kn++,J===10&&(Kn=1,Vo++),J}function rn(){return ie(tr,Ue)}function Ui(){return Ue}function Qo(e,t){return Qn(tr,e,t)}function Ts(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hg(e){return Vo=Kn=1,dp=qe(tr=e),Ue=0,[]}function Qg(e){return tr="",e}function Cl(e){return up(Qo(Ue-1,Os(e===91?e+2:e===40?e+1:e)))}function Kg(e){for(;(J=rn())&&J<33;)Ge();return Ts(e)>2||Ts(J)>3?"":" "}function Yg(e,t){for(;--t&&Ge()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Qo(e,Ui()+(t<6&&rn()==32&&Ge()==32))}function Os(e){for(;Ge();)switch(J){case e:return Ue;case 34:case 39:e!==34&&e!==39&&Os(J);break;case 40:e===41&&Os(e);break;case 92:Ge();break}return Ue}function Gg(e,t){for(;Ge()&&e+J!==57;)if(e+J===84&&rn()===47)break;return"/*"+Qo(t,Ue-1)+"*"+Ma(e===47?e:Ge())}function Xg(e){for(;!Ts(rn());)Ge();return Qo(e,Ue)}function Zg(e){return Qg(Bi("",null,null,null,[""],e=Hg(e),0,[0],e))}function Bi(e,t,n,r,i,o,l,s,a){for(var u=0,p=0,d=l,g=0,v=0,y=0,w=1,C=1,h=1,c=0,m="",x=i,j=o,k=r,E=m;C;)switch(y=c,c=Ge()){case 40:if(y!=108&&ie(E,d-1)==58){Fi(E+=O(Cl(c),"&","&\f"),"&\f",ap(u?s[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Cl(c);break;case 9:case 10:case 13:case 32:E+=Kg(y);break;case 92:E+=Yg(Ui()-1,7);continue;case 47:switch(rn()){case 42:case 47:wr(Jg(Gg(Ge(),Ui()),t,n,a),a);break;default:E+="/"}break;case 123*w:s[u++]=qe(E)*h;case 125*w:case 59:case 0:switch(c){case 0:case 125:C=0;case 59+p:h==-1&&(E=O(E,/\f/g,"")),v>0&&qe(E)-d&&wr(v>32?dc(E+";",r,n,d-1,a):dc(O(E," ","")+";",r,n,d-2,a),a);break;case 59:E+=";";default:if(wr(k=cc(E,t,n,u,p,i,s,m,x=[],j=[],d,o),o),c===123)if(p===0)Bi(E,t,k,k,x,o,d,s,j);else switch(g===99&&ie(E,3)===110?100:g){case 100:case 108:case 109:case 115:Bi(e,k,k,r&&wr(cc(e,k,k,0,0,i,s,m,i,x=[],d,j),j),i,j,d,s,r?x:j);break;default:Bi(E,k,k,k,[""],j,0,s,j)}}u=p=v=0,w=h=1,m=E="",d=l;break;case 58:d=1+qe(E),v=y;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&Vg()==125)continue}switch(E+=Ma(c),c*w){case 38:h=p>0?1:(E+="\f",-1);break;case 44:s[u++]=(qe(E)-1)*h,h=1;break;case 64:rn()===45&&(E+=Cl(Ge())),g=rn(),p=d=qe(m=E+=Xg(Ui())),c++;break;case 45:y===45&&qe(E)==2&&(w=0)}}return o}function cc(e,t,n,r,i,o,l,s,a,u,p,d){for(var g=i-1,v=i===0?o:[""],y=cp(v),w=0,C=0,h=0;w<r;++w)for(var c=0,m=Qn(e,g+1,g=ap(C=l[w])),x=e;c<y;++c)(x=up(C>0?v[c]+" "+m:O(m,/&\f/g,v[c])))&&(a[h++]=x);return Ho(e,t,n,i===0?Wo:s,a,u,p,d)}function Jg(e,t,n,r){return Ho(e,t,n,lp,Ma(Wg()),Qn(e,2,-2),0,r)}function dc(e,t,n,r,i){return Ho(e,t,n,Da,Qn(e,0,r),Qn(e,r+1,-1),r,i)}function fp(e,t,n){switch(Ug(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+zr+e+V+e+e;case 5936:switch(ie(e,t+11)){case 114:return D+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+V+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+V+e+e;case 6165:return D+e+V+"flex-"+e+e;case 5187:return D+e+O(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return D+e+V+"flex-item-"+O(e,/flex-|-self/g,"")+(ot(e,/flex-|baseline/)?"":V+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return D+e+V+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+V+O(e,"shrink","negative")+e;case 5292:return D+e+V+O(e,"basis","preferred-size")+e;case 6060:return D+"box-"+O(e,"-grow","")+D+e+V+O(e,"grow","positive")+e;case 4554:return D+O(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!ot(e,/flex-|baseline/))return V+"grid-column-align"+Qn(e,t)+e;break;case 2592:case 3360:return V+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ot(r.props,/grid-\w+-end/)})?~Fi(e+(n=n[t].value),"span",0)?e:V+O(e,"-start","")+e+V+"grid-row-span:"+(~Fi(n,"span",0)?ot(n,/\d+/):+ot(n,/\d+/)-+ot(e,/\d+/))+";":V+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ot(r.props,/grid-\w+-start/)})?e:V+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+zr+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fi(e,"stretch",0)?fp(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,u){return V+i+":"+o+u+(l?V+i+"-span:"+(s?a:+a-+o)+u:"")+e});case 4949:if(ie(e,t+6)===121)return O(e,":",":"+D)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ie(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+V+"$2box$3")+e;case 100:return O(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function wo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function bg(e,t,n,r){switch(e.type){case Fg:if(e.children.length)break;case Ag:case Da:return e.return=e.return||e.value;case lp:return"";case sp:return e.return=e.value+"{"+wo(e.children,r)+"}";case Wo:if(!qe(e.value=e.props.join(",")))return""}return qe(n=wo(e.children,r))?e.return=e.value+"{"+n+"}":""}function qg(e){var t=cp(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function ev(e){return function(t){t.root||(t=t.return)&&e(t)}}function tv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Da:e.return=fp(e.value,e.length,n);return;case sp:return wo([xt(e,{value:O(e.value,"@","@"+D)})],r);case Wo:if(e.length)return Bg(n=e.props,function(i){switch(ot(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yn(xt(e,{props:[O(i,/:(read-\w+)/,":"+zr+"$1")]})),yn(xt(e,{props:[i]})),zs(e,{props:uc(n,r)});break;case"::placeholder":yn(xt(e,{props:[O(i,/:(plac\w+)/,":"+D+"input-$1")]})),yn(xt(e,{props:[O(i,/:(plac\w+)/,":"+zr+"$1")]})),yn(xt(e,{props:[O(i,/:(plac\w+)/,V+"input-$1")]})),yn(xt(e,{props:[i]})),zs(e,{props:uc(n,r)});break}return""})}}var nv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_e={},Yn=typeof process<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",pp="active",hp="data-styled-version",Ko="6.1.13",Aa=`/*!sc*/
`,So=typeof window<"u"&&"HTMLElement"in window,rv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY),Yo=Object.freeze([]),Gn=Object.freeze({});function iv(e,t,n){return n===void 0&&(n=Gn),e.theme!==n.theme&&e.theme||t||n.theme}var mp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ov=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lv=/(^-|-$)/g;function fc(e){return e.replace(ov,"-").replace(lv,"")}var sv=/(a)(d)/gi,ji=52,pc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ls(e){var t,n="";for(t=Math.abs(e);t>ji;t=t/ji|0)n=pc(t%ji)+n;return(pc(t%ji)+n).replace(sv,"$1-$2")}var jl,gp=5381,Tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vp=function(e){return Tn(gp,e)};function av(e){return Ls(vp(e)>>>0)}function uv(e){return e.displayName||e.name||"Component"}function Nl(e){return typeof e=="string"&&!0}var yp=typeof Symbol=="function"&&Symbol.for,xp=yp?Symbol.for("react.memo"):60115,cv=yp?Symbol.for("react.forward_ref"):60112,dv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pv=((jl={})[cv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jl[xp]=wp,jl);function hc(e){return("type"in(t=e)&&t.type.$$typeof)===xp?wp:"$$typeof"in e?pv[e.$$typeof]:dv;var t}var hv=Object.defineProperty,mv=Object.getOwnPropertyNames,mc=Object.getOwnPropertySymbols,gv=Object.getOwnPropertyDescriptor,vv=Object.getPrototypeOf,gc=Object.prototype;function Sp(e,t,n){if(typeof t!="string"){if(gc){var r=vv(t);r&&r!==gc&&Sp(e,r,n)}var i=mv(t);mc&&(i=i.concat(mc(t)));for(var o=hc(e),l=hc(t),s=0;s<i.length;++s){var a=i[s];if(!(a in fv||n&&n[a]||l&&a in l||o&&a in o)){var u=gv(t,a);try{hv(e,a,u)}catch{}}}}return e}function Xn(e){return typeof e=="function"}function Fa(e){return typeof e=="object"&&"styledComponentId"in e}function en(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Zr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Is(e,t,n){if(n===void 0&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Is(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=Is(e[r],t[r]);return e}function Ua(e,t){Object.defineProperty(e,"toString",{value:t})}function ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var yv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ii(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Aa);return n},e}(),Wi=new Map,ko=new Map,Vi=1,Ni=function(e){if(Wi.has(e))return Wi.get(e);for(;ko.has(Vi);)Vi++;var t=Vi++;return Wi.set(e,t),ko.set(t,e),t},xv=function(e,t){Vi=t+1,Wi.set(e,t),ko.set(t,e)},wv="style[".concat(Yn,"][").concat(hp,'="').concat(Ko,'"]'),Sv=new RegExp("^".concat(Yn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kv=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Ev=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Aa),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(Sv);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(xv(p,u),kv(e,p,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},yc=function(e){for(var t=document.querySelectorAll(wv),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Yn)!==pp&&(Ev(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Cv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Yn,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Yn,pp),r.setAttribute(hp,Ko);var l=Cv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},jv=function(){function e(t){this.element=kp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw ii(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Nv=function(){function e(t){this.element=kp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_v=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xc=So,Pv={isServer:!So,useCSSOMInjection:!rv},Ep=function(){function e(t,n,r){t===void 0&&(t=Gn),n===void 0&&(n={});var i=this;this.options=Se(Se({},Pv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&So&&xc&&(xc=!1,yc(this)),Ua(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",u=function(d){var g=function(h){return ko.get(h)}(d);if(g===void 0)return"continue";var v=o.names.get(g),y=l.getGroup(d);if(v===void 0||!v.size||y.length===0)return"continue";var w="".concat(Yn,".g").concat(d,'[id="').concat(g,'"]'),C="";v!==void 0&&v.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),a+="".concat(y).concat(w,'{content:"').concat(C,'"}').concat(Aa)},p=0;p<s;p++)u(p);return a}(i)})}return e.registerId=function(t){return Ni(t)},e.prototype.rehydrate=function(){!this.server&&So&&yc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Se(Se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _v(i):r?new jv(i):new Nv(i)}(this.options),new yv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ni(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ni(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ni(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Rv=/&/g,zv=/^\s*\/\/.*$/gm;function Cp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Cp(n.children,t)),n})}function Tv(e){var t,n,r,i=Gn,o=i.options,l=o===void 0?Gn:o,s=i.plugins,a=s===void 0?Yo:s,u=function(g,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},p=a.slice();p.push(function(g){g.type===Wo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Rv,n).replace(r,u))}),l.prefix&&p.push(tv),p.push(bg);var d=function(g,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var C=g.replace(zv,""),h=Zg(y||v?"".concat(y," ").concat(v," { ").concat(C," }"):C);l.namespace&&(h=Cp(h,l.namespace));var c=[];return wo(h,qg(p.concat(ev(function(m){return c.push(m)})))),c};return d.hash=a.length?a.reduce(function(g,v){return v.name||ii(15),Tn(g,v.name)},gp).toString():"",d}var Ov=new Ep,$s=Tv(),jp=pe.createContext({shouldForwardProp:void 0,styleSheet:Ov,stylis:$s});jp.Consumer;pe.createContext(void 0);function wc(){return S.useContext(jp)}var Lv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=$s);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ua(this,function(){throw ii(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$s),this.name+t.hash},e}(),Iv=function(e){return e>="A"&&e<="Z"};function Sc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Iv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Np=function(e){return e==null||e===!1||e===""},_p=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Np(o)&&(Array.isArray(o)&&o.isCss||Xn(o)?r.push("".concat(Sc(i),":"),o,";"):Zr(o)?r.push.apply(r,xo(xo(["".concat(i," {")],_p(o),!1),["}"],!1)):r.push("".concat(Sc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in nv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function on(e,t,n,r){if(Np(e))return[];if(Fa(e))return[".".concat(e.styledComponentId)];if(Xn(e)){if(!Xn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return on(i,t,n,r)}var o;return e instanceof Lv?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?_p(e):Array.isArray(e)?Array.prototype.concat.apply(Yo,e.map(function(l){return on(l,t,n,r)})):[e.toString()]}function $v(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!Fa(n))return!1}return!0}var Dv=vp(Ko),Mv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$v(t),this.componentId=n,this.baseHash=Tn(Dv,n),this.baseStyle=r,Ep.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=en(i,this.staticRulesId);else{var o=vc(on(this.rules,t,n,r)),l=Ls(Tn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=en(i,l),this.staticRulesId=l}else{for(var a=Tn(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")u+=d;else if(d){var g=vc(on(d,t,n,r));a=Tn(a,g+p),u+=g}}if(u){var v=Ls(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=en(i,v)}}return i},e}(),Pp=pe.createContext(void 0);Pp.Consumer;var _l={};function Av(e,t,n){var r=Fa(e),i=e,o=!Nl(e),l=t.attrs,s=l===void 0?Yo:l,a=t.componentId,u=a===void 0?function(x,j){var k=typeof x!="string"?"sc":fc(x);_l[k]=(_l[k]||0)+1;var E="".concat(k,"-").concat(av(Ko+k+_l[k]));return j?"".concat(j,"-").concat(E):E}(t.displayName,t.parentComponentId):a,p=t.displayName,d=p===void 0?function(x){return Nl(x)?"styled.".concat(x):"Styled(".concat(uv(x),")")}(e):p,g=t.displayName&&t.componentId?"".concat(fc(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(x,j){return w(x,j)&&C(x,j)}}else y=w}var h=new Mv(n,g,r?i.componentStyle:void 0);function c(x,j){return function(k,E,R){var U=k.attrs,L=k.componentStyle,je=k.defaultProps,Vt=k.foldedComponentIds,Ht=k.styledComponentId,oi=k.target,Go=pe.useContext(Pp),nr=wc(),Qt=k.shouldForwardProp||nr.shouldForwardProp,_=iv(E,Go,je)||Gn,z=function(gt,Ne,rt){for(var rr,Yt=Se(Se({},Ne),{className:void 0,theme:rt}),Xo=0;Xo<gt.length;Xo+=1){var li=Xn(rr=gt[Xo])?rr(Yt):rr;for(var vt in li)Yt[vt]=vt==="className"?en(Yt[vt],li[vt]):vt==="style"?Se(Se({},Yt[vt]),li[vt]):li[vt]}return Ne.className&&(Yt.className=en(Yt.className,Ne.className)),Yt}(U,E,_),T=z.as||oi,A={};for(var F in z)z[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&z.theme===_||(F==="forwardedAs"?A.as=z.forwardedAs:Qt&&!Qt(F,T)||(A[F]=z[F]));var Kt=function(gt,Ne){var rt=wc(),rr=gt.generateAndInjectStyles(Ne,rt.styleSheet,rt.stylis);return rr}(L,z),Be=en(Vt,Ht);return Kt&&(Be+=" "+Kt),z.className&&(Be+=" "+z.className),A[Nl(T)&&!mp.has(T)?"class":"className"]=Be,A.ref=R,S.createElement(T,A)}(m,x,j)}c.displayName=d;var m=pe.forwardRef(c);return m.attrs=v,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=y,m.foldedComponentIds=r?en(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(j){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var R=0,U=k;R<U.length;R++)Is(j,U[R],!0);return j}({},i.defaultProps,x):x}}),Ua(m,function(){return".".concat(m.styledComponentId)}),o&&Sp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function kc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ec=function(e){return Object.assign(e,{isCss:!0})};function Fv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||Zr(e))return Ec(on(kc(Yo,xo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?on(r):Ec(on(kc(r,t)))}function Ds(e,t,n){if(n===void 0&&(n=Gn),!t)throw ii(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Fv.apply(void 0,xo([i],o,!1)))};return r.attrs=function(i){return Ds(e,t,Se(Se({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ds(e,t,Se(Se({},n),i))},r}var Rp=function(e){return Ds(Av,e)},ee=Rp;mp.forEach(function(e){ee[e]=Rp(e)});const Uv=ee.div`
*{
    box-sizing: border-box;
    margin: 0;
    font-family: "Google Sans","Arial",sans-serif,"微軟正黑體";
}

body{
    background: #fff;
}

.box2>img{
    max-width: 100% ;
}

.box {
    width: 80%;
    display: flex;
    margin: 3% auto;
    background-color: antiquewhite;
    border-radius: 30px;
    overflow: hidden;
}

.box1,
.box2 {
    width: 50%;
}

.box1 {
    padding-left: 90px;
}

.title {
    margin: 30px 0 30px;
    font-size: 2rem;
    font-weight: 800;
    text-align: left;
}

.accordion {
    border-radius: 30px;
}

.accordion-item>.accordion-header {
    margin-bottom: 3px;

}

.accordion-item,
.accordion-item .accordion-button {
    background-color: rgb(245, 215, 176) !important;
}

.accordion-item:first-of-type,
.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;

}

.accordion-item:last-of-type,
.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
}

.accordion-item {
    width: 80%;
    background-color: #f8f9fa !important;
    border: none !important;

}

.accordion-button {
    font-weight: 600;
}

.accordion-button:not(.collapsed) {
    color: #b72929 !important;
    font-size: 1.5rem;
    transition: 0.3s;
}

.accordion-body {
    font-size: 16px;
    margin-bottom: 5px;
    background-color: rgb(245, 215, 176) !important;
}

@media (max-width: 1200px) {

    .box {
        width: 85%;
        display: flex;
        flex-wrap: wrap-reverse;
        margin: 5% auto;
        padding: 0;
    }

    .box1,
    .box2 {
        width: 100%;
    }

    .box1 {
        padding:15px;
    }
    img{
        width: 100%;
    }

    .title {
        margin: 30px 0;
        font-weight: 800;
        text-align: center;
        font-size: 2rem;
    }

    .accordion-item {
         width: 100%;
    }

    .accordion-body {
        font-size: 1.5rem;
    }
    .accordion-button {
        font-size: 1.5rem !important;
    }

    .accordion-button:not(.collapsed) {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {

    .title {
        margin: 30px 0;
        font-size: 1.2rem;
        font-weight: 800;
    }

    .accordion-button {
        font-size: 1rem !important;
    }

    .accordion-button:not(.collapsed) {
        font-size: 1rem;
    }

    .accordion-body {
        font-size: 0.8rem;
    }
}

@media (max-width: 576px) {
    .title{
        font-size: 1rem;
    }
}
`;function Bv(){const[e,t]=S.useState("01.jpg"),n=r=>{t(r)};return f.jsx(Uv,{children:f.jsxs("div",{className:"box",children:[f.jsxs("div",{className:"box1",children:[f.jsx("h2",{className:"title",children:"DEVILCASE 惡魔防摔殼 PRO"}),f.jsxs(Je,{defaultActiveKey:"0",flush:!0,children:[f.jsxs(Je.Item,{eventKey:"0",children:[f.jsx(Je.Header,{onClick:()=>n("02.jpg"),children:"永久抗菌"}),f.jsxs(Je.Body,{children:["SGS檢驗",f.jsx("code",{children:"99.99%"}),"耐用",f.jsx("code",{children:"永久有效抗菌"}),"通過歐美日等國際9大檢驗標準"]})]}),f.jsxs(Je.Item,{eventKey:"1",children:[f.jsx(Je.Header,{onClick:()=>n("03.jpg"),children:"多色的選擇搭配"}),f.jsx(Je.Body,{children:"多種穩重流行顏色供選擇，打造最具個人特色的設計"})]}),f.jsxs(Je.Item,{eventKey:"2",children:[f.jsx(Je.Header,{onClick:()=>n("04.jpg"),children:"超過軍規標準防摔"}),f.jsxs(Je.Body,{children:["數次戶外實測，實測高度次數超越軍規標準",f.jsx("code",{children:"2倍"}),"以上的測試標準"]})]})]})]}),f.jsx("div",{className:"box2",children:f.jsx("img",{src:`/images/block-collapsing-effect/${e}`,alt:"Product",id:"img"})})]})})}const Wv=ee.div`
* {
    margin: 0;
    box-sizing: border-box;
}

img {
    width: 100%;
}

.main {
    display: flex;
    text-align: center;
    width: 100%;
}

.box {
    margin: 20px;
    border: 1px solid #000;
    width: 25%;
    padding: 0;
}

.name {
    font-size: 32px;
    font-weight: bolder;
    margin: 20px 0;
}

.price {
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: 15px;
    color: crimson;
}

#textOutput {
    display: none;
}

.control_box {
    width: 30%;
    margin: 25px auto;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 3px 6px 3px rgb(0 0 0 / 12%);
    border-radius: 10px;

}

.control_name {
    font-size: 26px;
    margin: 10px;
    padding-top: 10px;
}

input[type="range"] {
    width: 300px;
}

.control_down {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
}

@media (max-width: 768px) {
    .main {
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .box {
        width: 45%;
        margin: 10px;
    }

    .name {
        font-size: 18px;
        margin: 10px 0;
    }

    .price {
        font-size: 22px;
        margin-bottom: 15px;
    }

    .control_box {
        width: 90%;
        margin: 15px auto;
    }

    .control_name {
        font-size: 22px;
    }

}
`,Vv=[{id:4,name:"惡魔防摔殼 標準版",price:980,image:"/images/slide-control/04.jpg"},{id:3,name:"惡魔防摔殼 標準磁吸版",price:1080,image:"/images/slide-control/03.jpg"},{id:2,name:"惡魔防摔殼 PRO",price:1180,image:"/images/slide-control/02.jpg"},{id:1,name:"惡魔防摔殼 PRO 2",price:1580,image:"/images/slide-control/01.jpg"}];function Hv(){const[e,t]=S.useState(1580),n=r=>{t(r.target.value)};return f.jsx(Wv,{children:f.jsxs("div",{className:"product-slider",children:[f.jsx("div",{className:"main",children:Vv.map(r=>f.jsxs("div",{className:"box",style:{display:r.price<=e?"block":"none"},children:[f.jsx("div",{className:"pic",children:f.jsx("img",{src:r.image,alt:r.name})}),f.jsx("div",{className:"name",children:r.name}),f.jsxs("div",{className:"price",children:["NT ",f.jsx("span",{className:"price_tag",children:r.price})]})]},r.id))}),f.jsxs("div",{className:"control_box",children:[f.jsx("div",{className:"control_name",children:"價格"}),f.jsxs("div",{className:"control_slide",children:[f.jsx("input",{id:"Input",type:"range",min:"980",max:"1580",step:"100",value:e,onChange:n}),f.jsx("output",{id:"textOutput",children:e})]}),f.jsxs("div",{className:"control_down",children:[f.jsx("div",{className:"control_text",children:"低"}),f.jsx("div",{className:"control_text",children:"高"})]})]})]})})}const Qv=ee.div`
body {
    background-color: #bcbdc3;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    width: 100%;
}

.card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 20px;
    /* width: 100%; */
}

.card-box {
    width: 23%;
}

.card {
    position: relative;
    /* width: 300px; */
    height: 400px;
    background-color: #fff;
    cursor: pointer;
    perspective: 1000px; /* 透視效果 */
    font-size: 18px;
    font-weight: bold;
    color: white;
    transition: transform 0.5s, background-color 0.5s;
}

.card.flip {
    background-color: rgba(45, 11, 195, 0.564);
}

.card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card-front,
.card-back {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    backface-visibility: hidden; /* 隱藏背面 */
}

.card-back {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(45, 11, 195, 0.564);
    color: white;
    transform: rotateY(180deg);
}

.card-title {
    color: #ffc71e;
    font-size: 26px;
}

.card-text {
    line-height: 35px;
}

hr {
    margin: 20px 0;
}

.card-price {
    font-size: 26px;
    text-align: center;
    margin: 20px 10px;
    color: #f05908;
    font-weight: bold;
}

.connect{
    background-color: #282828;
    color: #fff;
    text-align: center;
    width: 100vw;
    height: 50vw;
    z-index: 0;
}

.connect-box{
    margin: 5%;
    width: 30%;
    height: 80%;
    transition: width 2s;
    position: absolute;
    background-color: #46205e;
    z-index: 1;
}

.connect-text{
    font-size: 5rem;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    top: 50%;
    z-index: 2;
}

.connect-text:hover+.connect-box{
    width: 90%;
    margin-right: 0;
}

@media (max-width: 768px) {
    .card-container {
        flex-wrap: wrap;
    }

    .card-box {
        width: 100%;
    }

    .card {
        width: 100%;
    }

    .connect{
        width: 100vw;
        height: 100vw;
    }
    
    .connect-box{
        margin: 25px;
        width: 80vw;
        height: 80vw;
    }
    
    .connect-text{
        font-size: 1.2rem;
    }

    .connect-text:hover+.connect-box{
        width: 80vw;
        margin-right: none;
    }
}
`,Kv=({image:e,title:t,description:n,price:r})=>{const[i,o]=S.useState(!1),l=()=>{o(!i)};return f.jsxs("div",{className:"card-box",children:[f.jsx("div",{className:`card ${i?"flip":""}`,onClick:l,children:f.jsxs("div",{className:"card-inner",style:{transform:i?"rotateY(180deg)":"rotateY(0)"},children:[f.jsx("div",{className:"card-front",children:f.jsx("img",{src:e,alt:t})}),f.jsxs("div",{className:"card-back",style:{display:i?"block":"none"},children:[f.jsx("div",{className:"card-title",children:t}),f.jsx("hr",{}),f.jsx("div",{className:"card-text",children:n})]})]})}),f.jsxs("div",{className:"card-price",children:["NT $",r]})]})},Yv=()=>{const e=[{image:"./images/card-effect/pic01.jpg",title:"惡魔防摔殼 PRO 2",description:"防摔能力強，可替換四邊防撞邊角及金屬扣+掛繩組:相對其他款式更重。",price:1580},{image:"./images/card-effect/pic02.jpg",title:"惡魔防摔殼 PRO",description:"包覆與防護非常全面，防護性較其他款強，重量也較其他款型稍重。",price:1180},{image:"./images/card-effect/pic03.jpg",title:"惡魔防摔殼 標準版",description:'添加"抗黃因子"，減緩外殼泛黃速度。',price:980},{image:"./images/card-effect/pic04.jpg",title:"惡魔防摔殼 3",description:"表面材質親膚，彈性好，止滑能力佳，通過SGS無毒抗菌檢驗。",price:1180}];return f.jsx(Qv,{children:f.jsxs("div",{children:[f.jsx("div",{className:"card-container",children:e.map((t,n)=>f.jsx(Kv,{image:t.image,title:t.title,description:t.description,price:t.price},n))}),f.jsxs("div",{className:"connect",children:[f.jsx("div",{className:"connect-text",children:"devilcase@devilcase.com.tw"}),f.jsx("div",{className:"connect-box"})]})]})})},Gv=ee.div`
* {
    box-sizing: border-box;
    margin: 0;
    font-family: "Google Sans","Arial",sans-serif,"微軟正黑體";
}

img{
    width: 100%;
}

.content{
    position: relative;
    height: 100vh;
    overflow: hidden;
}

#up{
    background-color: black;
    width: 100%;
    height: 50%;
    transition: 0.5s;
}

.imgs{
    position: absolute;
    top: 20%;
    left: 45%;
    z-index: 1;
}

.down{
    width: 100%;
    height: 50%;
    position: relative;
    background-color: #fff;
}

.options{
    position: absolute;
    width: 45px;
    top: 10px;
    right: 25%;
}

.option{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid rgb(136, 136, 136);
    margin: 15px auto ;
    cursor: pointer;
}

/* .option:active{
    transition: 0.2s;
    border: 1px solid rgb(255, 0, 0);
} */

.black{
    background-color: black;
}

.white{
    background-color: rgb(252 249 243);
}

.red{
    background-color: rgb(179 4 40);
}

.yellow{
    background-color: rgb(253 227 126);
}

#text{
    font-size: 80px;
    font-weight: bolder;
    position: absolute;
    bottom: 15%;
    left: 49%;
}

@media (max-width: 1200px) {
    .imgs {
        top: 26%;
        left: 32%;
    }

    .options {
        top: 15px;
        right: 26%;
    }

    #text {
        bottom: 36%;
        left: 41%;
    }

}

@media (max-width: 768px) {
    .imgs {
        left: 31%;
    }

    .options {
        top: 17px;
        right: 17%;
    }

    #text {
        bottom: 20%;
        left: 42%;
    }
}

@media (max-width: 576px) {
    #up {
        width: 100vh;
    }
    img{
        width: 100%;
    }

    .imgs {
        width: 50%;
        left: 23%;
    }

    .options {
        top: 0px;
        right: 7%;
    }

    #text {
        bottom: 36%;
        left: 36%;
        font-size: 60px;
    }
}

@media (max-width: 414px) {
    #text {
        bottom: 15%;
    }
}

`,Xv=()=>{const e=[{image:"./images/toggle-effect/i11-black.png",text:"黑色",color:"black"},{image:"./images/toggle-effect/i11-silver.png",text:"白色",color:"rgb(252 249 243)"},{image:"./images/toggle-effect/i11-red.png",text:"紅色",color:"rgb(179 4 40)"},{image:"./images/toggle-effect/i11-yellow.png",text:"黃色",color:"rgb(253 227 126)"}],[t,n]=S.useState(0),r=i=>{n(i)};return f.jsx(Gv,{children:f.jsxs("div",{className:"content",children:[f.jsx("div",{id:"up",style:{backgroundColor:e[t].color}}),f.jsx("div",{className:"imgs",children:f.jsx("img",{src:e[t].image,alt:e[t].text,id:"img"})}),f.jsxs("div",{className:"down",children:[f.jsx("div",{className:"options",children:e.map((i,o)=>f.jsx("div",{className:"option",style:{backgroundColor:i.color},onClick:()=>r(o)},o))}),f.jsx("div",{id:"text",children:e[t].text})]})]})})},Zv=ee.div`
.content{
    overflow: hidden;
}
.box{
    // position: relative;
    margin: 20px;
    width: 100%;
    padding: 0;
}
.img-wrapper{
    width: 1280px;
    position: absolute;
}

#control {
    width: 1280px;
    overflow: auto;
    position: absolute;
    top: 80%;
}

#content{
    width:5000px;
}

img{
    width: 100%;
}

p {
    margin: 0 20px;
`,Jv=()=>{const[e,t]=S.useState(0),n=r=>{const i=r.target,o=i.scrollWidth-i.clientWidth,l=i.scrollLeft,a=o/38,u=Math.round(l/a);t(u)};return f.jsx(Zv,{children:f.jsxs("div",{className:"content",children:[f.jsx("div",{className:"box",children:f.jsx("div",{className:"img-wrapper",children:f.jsx("img",{id:"change_image",src:`./images/image-slider/c_aircross_${e}-1620x1000.png`,alt:`Slide ${e}`})})}),f.jsx("div",{id:"control",onScroll:n,children:f.jsx("div",{id:"content",children:f.jsx("br",{})})}),f.jsxs("p",{id:"show",children:["Horizontally: ",e,"px"]})]})})},bv=ee.div`
body {
    margin: 0;
    padding: 0;
    background: #232323;
    color: #cdcdcd;
    font-family: "Avenir Next", "Avenir", sans-serif;
}

#menuToggle {
    display: block;
    position: relative;
    top: 50px;
    left: 34%;
    z-index: 1;
}

#menuToggle a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
}

#menuToggle a:hover {
    color: tomato;
}

#menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: 0;
    /* left: -5px; */
    cursor: pointer;
    opacity: 0;
    z-index: 2;
}

/*漢堡條*/
#menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #494848;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

/* 點擊後漢堡條動畫*/
#menuToggle input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

/*隱藏漢堡條中間的線*/
#menuToggle input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

/*位移漢堡條最後一條位置*/
#menuToggle input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

#menu {
    position: absolute;
    width: 34%;
    height: calc(100vh);
    margin: -100px 0 0 -50px;
    /* padding: 50px; */
    padding-top: 100px;
    background: #ededed;
    list-style-type: none;
    transform: translate(0, -100%);
    transition: all 1s ease;
}

#menu li {
    padding: 10px 0;
    font-size: 22px;
}

#menuToggle input:checked~ul {
    transform: none;
}

@media (max-width: 768px) {
    #menu {
        margin: -100px 0 0 -30px;
        width: 100vw;
        height: 100vh;
    }

    #menuToggle {
        top: 50px;
        left: 30px;
    }
}
`,qv=()=>{const[e,t]=S.useState(!1),n=()=>t(!e);return f.jsx(bv,{children:f.jsx("nav",{role:"navigation",children:f.jsxs("div",{id:"menuToggle",children:[f.jsx("input",{type:"checkbox",checked:e,onChange:n}),f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{}),e&&f.jsxs("ul",{id:"menu",children:[f.jsx("li",{children:f.jsx(yr,{to:"/home",children:"Home"})}),f.jsx("li",{children:f.jsx(yr,{to:"/about",children:"About"})}),f.jsx("li",{children:f.jsx(yr,{to:"/info",children:"Info"})}),f.jsx("li",{children:f.jsx(yr,{to:"/contact",children:"Contact"})})]})]})})})},e1=ee.div`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-body {
  width: 90%;
  max-width: 500px;
  height: 400px;
  border: 1px solid rgb(210, 209, 209);
  margin: 30px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.content {
  margin: 20px;
}

.box1,
.box2 {
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

#tips {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

button {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 30px;
  padding: 10px 30px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(1);
}

#down-box {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}
`,t1=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(""),i=a=>{t(a.target.value)},o=a=>{r(a.target.value)},l=()=>{const a=document.getElementById("loginButton"),u=document.getElementById("tips"),p=document.getElementById("down-box");if(n===""){const d=p.getBoundingClientRect(),g=a.getBoundingClientRect(),v=d.width-g.width,y=d.height-g.height,w=Math.random()*v,C=Math.random()*y;a.style.marginLeft=`${w}px`,a.style.marginTop=`${C}px`,a.style.backgroundColor="red",u.textContent="請輸入密碼!!!"}else u.textContent="",a.style.backgroundColor="blue"},s=()=>{if(!e){alert("請輸入帳號!");return}if(!n){alert("請輸入密碼!");return}alert("登入成功")};return f.jsx(e1,{children:f.jsxs("div",{className:"login-body",children:[f.jsxs("div",{className:"content",children:[f.jsxs("div",{className:"box1",children:[f.jsx("p",{children:"帳號:"}),f.jsx("input",{type:"text",name:"username",id:"username",value:e,onChange:i})]}),f.jsxs("div",{className:"box2",children:[f.jsx("p",{children:"密碼:"}),f.jsx("input",{type:"password",name:"password",id:"password",value:n,onChange:o})]}),f.jsx("div",{id:"tips"})]}),f.jsx("div",{id:"down-box",children:f.jsx("button",{id:"loginButton",onMouseMove:l,onClick:s,children:"登入"})})]})})},n1=()=>{const[e,t]=S.useState("");let n=0,r=0,i=0,o=0;const l=a=>{const u=a.touches[0];u?(n=u.screenX,r=u.screenY):alert("TouchEvent error!")},s=a=>{const u=a.changedTouches[0];if(u){i=u.screenX,o=u.screenY;const p=n-i,d=r-o;Math.abs(p)>Math.abs(d)?t(p>0?"左":"右"):t(d>0?"上":"下")}else alert("TouchEvent error!")};return f.jsx("div",{style:{width:"100vw",height:"100vh",backgroundColor:"blanchedalmond",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2rem",color:"blue",padding:"100px",boxSizing:"border-box"},onTouchStart:l,onTouchEnd:s,children:e||"請滑動"})},r1=ee.div`
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.page {
    display: none;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.page.active {
    display: flex;
}

.page h1 {
    font-size: 10rem;
    color: #ffffff;
    font-weight: bold;
}

#page1 {
    background-color: #41a9ea;
}

#page2 {
    background-color: #f56fae;
}

#page3 {
    background-color: #c16bff;
}

.pic{
    height: auto;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(-20deg);
}

.float {
    animation: float2 3s ease-in-out infinite;
}

img{
    width: 70%;
}

/* 跑馬燈 */
#marquee {
    background-color: #f3bc08;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px 0;
}

#marquee span {
    display: inline-block;
    padding-right: 20px;
    font-size: 1.2rem;
    animation: marquee 5s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@media (max-width: 768px) {
    .page h1 {
        font-size: 5rem;
    }
}

`,Cc=[{id:"page1",title:"Iphone 14",img:"./images/Image-displacement-Marquee/i14-blue.png",bgColor:"#41a9ea"},{id:"page2",title:"Iphone 13",img:"./images/Image-displacement-Marquee/i13-pink.png",bgColor:"#f56fae"},{id:"page3",title:"Iphone 12",img:"./images/Image-displacement-Marquee/i12-purple.png",bgColor:"#c16bff"}],i1=()=>{const[e,t]=S.useState(0);return S.useEffect(()=>{const n=r=>{const i=Math.sign(r.deltaY),o=e+i;o>=0&&o<Cc.length&&t(o)};return window.addEventListener("wheel",n),()=>{window.removeEventListener("wheel",n)}},[e]),f.jsx(r1,{children:f.jsxs("div",{className:"app",children:[Cc.map((n,r)=>f.jsxs("div",{className:`page ${e===r?"active":""}`,style:{backgroundColor:n.bgColor},children:[f.jsx("h1",{children:n.title}),f.jsx("div",{className:"pic float",children:f.jsx("img",{src:n.img,alt:n.title})})]},n.id)),f.jsxs("div",{id:"marquee",children:[f.jsx("span",{children:"iPhone 新機上市!!! "}),f.jsx("span",{children:"iPhone 新機上市!!! "}),f.jsx("span",{children:"iPhone 新機上市!!! "}),f.jsx("span",{children:"iPhone 新機上市!!! "}),f.jsx("span",{children:"iPhone 新機上市!!! "}),f.jsx("span",{children:"iPhone 新機上市!!! "})]})]})})},o1=ee.div`
.context {
    width: 100%;
    height: 100vh;
    background-color: #ed833c;
    overflow: hidden;
}

.wrap {
    margin: 18% auto;
}

.title {
    font-size: 8rem;
    font-weight: bolder;
    text-align: center;
    color: hsla(0, 0%, 100%, 0.08);
    background-clip: text;
    -webkit-background-clip: text;
    background-image: radial-gradient(closest-side, #fff 100%, transparent 0);
    // background-position: 30%;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    /* transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1); */
}

@media (max-width: 768px) {
    .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        margin: 0;
        padding: 0;
    }

    .title {
        font-size: 3rem;
        color: hsla(0, 0%, 100%, 0.08);
        background-clip: none;
        -webkit-background-clip: none;
        background-image: none;
        background-position: 0%;
    }

    .title::before {
        position: absolute;
        content: 'Phone Case';
        font-size: 3rem;
        color: #fff;
        clip-path: circle(80px at 0% 50%);
        animation: spotlight 5s infinite;
    }

    /* 手機版動畫 */
    @keyframes spotlight {
        0% {
            clip-path: circle(80px at 0% 50%);
        }
        50% {
            clip-path: circle(80px at 100% 50%);
        }
        100% {
            clip-path: circle(80px at 0% 50%);
        }
    }
        
    .title-phone{
        display: none;
    }
}
`,l1=()=>{const[e,t]=S.useState(window.innerWidth),[n,r]=S.useState({x:0,y:0});return S.useEffect(()=>{const i=()=>{t(window.innerWidth)};if(window.addEventListener("resize",i),e>768){const o=l=>{const a=document.querySelector(".title").getBoundingClientRect(),u=l.clientX,p=l.clientY,d=u-300/2-a.left,g=p-300/2-a.top;r({x:d,y:g})};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}}return()=>{window.removeEventListener("resize",i)}},[e]),f.jsx(o1,{children:f.jsx("div",{className:"context",children:f.jsxs("div",{className:"wrap",children:[f.jsx("div",{className:"title",style:e>768?{backgroundPosition:`${n.x}px ${n.y}px`}:{},children:"Phone Case"}),e<=768&&f.jsx("div",{className:"title-phone",children:"Phone Case"})]})})})},s1=ee.div`
img {
  width: 100%;
  height: 100%;
}

.background {
  width: 500px;
  height: 100px;
  margin: 40px 60px 0;
}

.box {
  width: 50px;
  overflow: hidden;
}

.text {
  white-space: nowrap;/* 不換行 */
  font-size: 36px;
  font-weight: bolder;
  font-family: Arial;
}

/* 動態效果 */
.fadingEffect {
  width: 100%;
  animation: showHide 3s ease-in;
}

@keyframes showHide {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.pic {
  width: 30%;
  margin: 0 10px;
  border: 1px solid #000;
}

@media (max-width: 1200px) {
}

@media (max-width: 768px) {
  .boxes {
    width: 100%;
    overflow: hidden;
  }
  .background {
    width: 100vh;
    margin: 40px 0 0 10px;
  }
  .text {
    font-size: 32px;
  }
  .pic {
    display: block;
  }
}

@media (max-width: 576px) {
  .background {
    height: 50px;
    margin: 30px 0 20px 10px;
  }
  .text {
    font-size: 26px;
  }
}
`,Pl=()=>f.jsx(s1,{children:f.jsxs("div",{className:"boxes",children:[f.jsx("div",{className:"background",children:f.jsx("div",{className:"box fadingEffect",children:f.jsx("div",{className:"text",children:"DEVILCASE 惡魔防摔殼 PRO"})})}),f.jsxs("div",{className:"content",children:[f.jsx("div",{className:"pic",children:f.jsx("img",{src:"/images/text-animation/01.jpg",alt:"01"})}),f.jsx("div",{className:"pic",children:f.jsx("img",{src:"/images/text-animation/02.jpg",alt:"02"})}),f.jsx("div",{className:"pic",children:f.jsx("img",{src:"/images/text-animation/03.jpg",alt:"03"})})]})]})}),a1=()=>f.jsxs("div",{children:[f.jsx(Pl,{}),f.jsx(Pl,{}),f.jsx(Pl,{})]}),u1=ee.div`
body {
  height: 100vh;
  margin: 0;
}

.title {
  font-size: 46px;
  font-weight: 800;
  margin: 35px;
  text-align: left;
}

#wrap {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 420px;
  padding-bottom: 5px;
}

#slide {
  position: absolute;
  display: flex;
  animation: slide 12s linear infinite;
}

#slide:hover {
  animation-play-state: paused;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.img {
  width: 400px;
  margin: 0 20px;
}

img {
  width: 100%;
  box-shadow: 3px 3px 12px gray;
}

@media (max-width: 1200px) {
}

@media (max-width: 768px) {
  .title {
    font-size: 48px;
  }

  .img {
    width: 260px;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 24px;
    margin: 30px 12px;
    text-align: center;
  }

  .img {
    width: 170px;
    margin: 0 10px;
  }

  #wrap {
    height: 175px;
  }
}

@media (max-width: 414px) {
  .title {
    font-size: 22px;
    margin: 30px 2px;
  }
}
`,jc=({images:e})=>f.jsx("div",{id:"wrap",children:f.jsxs("div",{id:"slide",children:[e.map((t,n)=>f.jsx("div",{className:"img",children:f.jsx("img",{src:t,alt:`Slide ${n+1}`})},n)),e.map((t,n)=>f.jsx("div",{className:"img",children:f.jsx("img",{src:t,alt:`Slide Duplicate ${n+1}`})},`duplicate-${n}`))]})}),c1=()=>{const e=["/images/Slider/01.jpg","/images/Slider/02.jpg","/images/Slider/03.jpg","/images/Slider/04.jpg"];return f.jsx(u1,{children:f.jsxs("div",{children:[f.jsx("div",{className:"title",children:"DEVILCASE 惡魔防摔殼 PRO 2"}),f.jsx(jc,{images:e}),f.jsx("div",{className:"title",children:"DEVILCASE 惡魔防摔殼 PRO 2"}),f.jsx(jc,{images:e})]})})},d1=ee.div`
  display: flex;
  width: 100%;
  margin: 5% auto;
  justify-content: center;

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`,Ba=ee.div`
  margin: 2% 5%;
  position: relative;
  width: 20%;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 80%;
    margin-bottom: 10%;
  }
`,f1=ee.div`
  z-index: 1;
`,p1=ee.img`
  width: 75%;
  transition: all 1s;

  ${Ba}:hover & {
    width: 85%;

    @media (max-width: 576px) {
      width: 85%;
    }
  }
`,h1=ee.div`
  position: absolute;
  left: 142px;
  top: 376px;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  border-radius: 50%;
  transition: all 1s;
  background-color: #f8ecd9;

  ${Ba}:hover & {
    width: 250px;
    height: 250px;
    line-height: 250px;

    @media (max-width: 576px) {
      width: 250px;
      height: 250px;
      line-height: 250px;
    }
  }

  @media (max-width: 576px) {
    left: 80px;
    top: 270px;
    width: 172px;
    height: 172px;
    line-height: 172px;
  }
`,Rl=({image:e,description:t})=>f.jsxs(Ba,{children:[f.jsx(f1,{children:f.jsx(p1,{src:e,alt:t})}),f.jsx(h1,{children:t})]}),m1=()=>f.jsxs(d1,{children:[f.jsx(Rl,{image:"/images/product-description-zoom/i11-black.png",description:"Apple iPhone 11 黑色"}),f.jsx(Rl,{image:"/images/product-description-zoom/i11-silver.png",description:"Apple iPhone 11 白色"}),f.jsx(Rl,{image:"/images/product-description-zoom/i11-red.png",description:"Apple iPhone 11 紅色"})]}),g1=ee.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,v1=ee.div`
  flex: 1;
  height: 100%;
  transition: flex 0.8s ease;
  position: relative;
  background-color: ${e=>e.bgColor};

  &:hover {
    flex: 5;
  }

  &:hover .text {
    font-size: 56px;
    transition: 0.8s;
  }

  @media (max-width: 768px) {
    height: 18%;
  }
`,y1=ee.div`
  font-size: 42px;
  font-weight: bolder;
  text-align: center;
  margin-top: 500px;
  color: #fff;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`,x1=[{bgColor:"#006D77",text:"#006d77"},{bgColor:"#83C5BE",text:"#83c5be"},{bgColor:"#EDF6F9",text:"#edf6f9"},{bgColor:"#FFDDD2",text:"#ffddd2"},{bgColor:"#E29578",text:"#e29578"}],w1=()=>f.jsx(g1,{children:x1.map((e,t)=>f.jsx(v1,{bgColor:e.bgColor,children:f.jsx(y1,{className:"text",children:e.text})},t))}),S1=[{link:"/block-collapsing-effect",title:"商品介紹 - 區塊收合",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./slide-control",title:"滑動桿 - 控制價錢區塊",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./card-effect",title:"區塊翻牌+圖層向右延伸-聯絡我們",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./toggle-effect",title:"商品選擇 - 區塊置換",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./image-slider",title:"類3D換圖",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./menu",title:"menu效果",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./login-form",title:"帳密驗證 - 按鈕位移",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./touch-event",title:"手機觸控事件 上下左右",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./Image-displacement-Marquee",title:"商品圖片位移+跑馬燈css",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./text-spotlight-effect",title:"文字聚光燈效果(電腦版)",icons:["fa-brands fa-html5","fa-brands fa-css3-alt","fa-brands fa-js"]},{link:"./text-animation",title:"文字動畫效果",icons:["fa-brands fa-html5","fa-brands fa-css3-alt"]},{link:"./Slider",title:"圖片輪播效果",icons:["fa-brands fa-html5","fa-brands fa-css3-alt"]},{link:"./product-description-zoom",title:"商品說明動態縮放",icons:["fa-brands fa-html5","fa-brands fa-css3-alt"]},{link:"./block-scaling",title:"區塊伸縮效果",icons:["fa-brands fa-html5","fa-brands fa-css3-alt"]}];function k1({link:e,title:t,icons:n,image:r}){return f.jsx("div",{className:"box",children:f.jsxs(yr,{to:e,target:"_blank",children:[f.jsxs("div",{className:"box_title",children:[f.jsx("span",{children:t}),f.jsx("div",{className:"icon",children:n.map((i,o)=>f.jsx("i",{className:i},o))})]}),f.jsx("img",{src:r,alt:t})]})})}function E1(){return f.jsxs("div",{className:"wrap",children:[f.jsx("div",{className:"title",children:"WEB DESIGN"}),f.jsxs("div",{className:"system",children:[f.jsx("i",{className:"fa-solid fa-star"})," Functional"]}),f.jsx("div",{className:"boxes",children:S1.map((e,t)=>{const r=`/images/${String(t+1).padStart(2,"0")}.png`;return f.jsx(k1,{link:e.link,title:e.title,icons:e.icons,image:r},t)})})]})}function C1(){return f.jsx(b0,{children:f.jsxs(Q0,{children:[f.jsx(de,{path:"/",element:f.jsx(E1,{})}),f.jsx(de,{path:"/block-collapsing-effect",element:f.jsx(Bv,{})}),f.jsx(de,{path:"/slide-control",element:f.jsx(Hv,{})}),f.jsx(de,{path:"/card-effect",element:f.jsx(Yv,{})}),f.jsx(de,{path:"/toggle-effect",element:f.jsx(Xv,{})}),f.jsx(de,{path:"/image-slider",element:f.jsx(Jv,{})}),f.jsx(de,{path:"/menu",element:f.jsx(qv,{})}),f.jsx(de,{path:"/login-form",element:f.jsx(t1,{})}),f.jsx(de,{path:"/touch-event",element:f.jsx(n1,{})}),f.jsx(de,{path:"/Image-displacement-Marquee",element:f.jsx(i1,{})}),f.jsx(de,{path:"/text-spotlight-effect",element:f.jsx(l1,{})}),f.jsx(de,{path:"/text-animation",element:f.jsx(a1,{})}),f.jsx(de,{path:"/Slider",element:f.jsx(c1,{})}),f.jsx(de,{path:"/product-description-zoom",element:f.jsx(m1,{})}),f.jsx(de,{path:"/block-scaling",element:f.jsx(w1,{})})]})})}const j1=zl.createRoot(document.getElementById("root"));j1.render(f.jsx(pe.StrictMode,{children:f.jsx(C1,{})}));
