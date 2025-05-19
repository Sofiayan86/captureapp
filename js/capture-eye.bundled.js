/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,g=m.trustedTypes,v=g?g.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!h(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(s?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,f?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,C=k.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,M="?"+T,_=`<${M}>`,L=document,A=()=>L.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,H="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,O=/>/g,Z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,j=/"/g,N=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),F=new WeakMap,G=L.createTreeWalker(L,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=I;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,h=r.exec(i),null!==h);)c=r.lastIndex,r===I?"!--"===h[1]?r=B:void 0!==h[1]?r=O:void 0!==h[2]?(N.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=Z):void 0!==h[3]&&(r=Z):r===Z?">"===h[0]?(r=o??I,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?Z:'"'===h[3]?j:U):r===j||r===U?r=Z:r===B||r===O?r=I:(r=Z,o=void 0);const d=r===Z&&t[e+1].startsWith("/>")?" ":"";n+=r===I?i+_:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+T+d):i+T+(-2===l?e:d)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=W(t,e);if(this.el=q.createElement(h,i),G.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[n++],i=s.getAttribute(t).split(T),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(N.test(s.tagName)){const t=s.textContent.split(T),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),G.nextNode(),a.push({type:2,index:++o});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===M)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(T,t+1));)a.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const i=L.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===R)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=z(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??L).importNode(e,!0);G.currentNode=s;let o=G.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=G.nextNode(),n++)}return G.currentNode=L,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),z(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(L.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new K(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new q(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.k(A()),this.k(A()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=X(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=X(this,s[i+r],e,r),a===R&&(a=this._$AH[r]),n||=!z(a)||a!==this._$AH[r],a===D?t=D:t!==D&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class it extends Q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??D)===R)return;const i=this._$AH,s=t===D&&i!==D||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==D&&(i===D||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=k.litHtmlPolyfillSupport;ot?.(q,Y),(k.litHtmlVersions??=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Y(e.insertBefore(A(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w},lt=(t=ht,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function ct(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function dt(t){return ct({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const pt="https://static-cdn.numbersprotocol.io",mt={url:{numbersWebsite:"https://www.numbersprotocol.io",dataApi:"https://verify.numbersprotocol.io/api/1.1/wf/captureEyeData",assetApi:"https://api.numbersprotocol.io/api/v3/assets/",productApi:"https://api.numbersprotocol.io/api/v3/store/products/",ipfsGateway:"https://ipfs-pin.numbersprotocol.io/ipfs",explorer:"https://mainnet.num.network",profile:"https://asset.captureapp.xyz",showcase:"https://dashboard.captureapp.xyz/showcase",collect:"https://captureappiframe.numbersprotocol.io/checkout",fontFaceCssUrl:`${pt}/fonts/degular.css`,blankThumbnail:"https://via.placeholder.com/100",blockchainIcon:`${pt}/capture-eye/capture-eye-blockchain-icon.svg`,txIcon:`${pt}/capture-eye/capture-eye-tx-icon.svg`,curatorIcon:`${pt}/capture-eye/capture-eye-curator-icon.png`,generatedViaAi:`${pt}/capture-eye/generated-via-ai.png`,defaultEngagementImage:`${pt}/capture-eye/capture-ad.png`,defaultEngagementLink:"https://captureapp.xyz"},text:{defaultCopyrightZoneTitle:"Produced by",numbersMainnet:"Numbers Mainnet",viewMore:"View More",collect:"Collect"},layout:{original:"original",curated:"curated"},visibility:{hover:"hover",always:"always"},color:{defaultEye:"#377dde",mobileEye:"#333333"},position:{topLeft:"top left",topRight:"top right",bottomLeft:"bottom left",bottomRight:"bottom right"},crPin:{on:"on",off:"off"}};var gt;!function(t){t.SCRIPT="Script",t.CAPTURE_EYE="Capture eye",t.ENGAGEMENT_ZONE="Engagement zone"}(gt||(gt={}));class vt{constructor(){this.domain=window.location.hostname,this.path=window.location.pathname,this.path=this.path.startsWith("/")?this.path.substring(1):this.path,this.token=null,this.getToken()}trackInteraction(t,e="",i=""){const s=(new Date).toISOString();i.length>255&&(i=i.substring(0,255));const o=()=>{this.createEvent(t,s,e,i)};"requestIdleCallback"in window?requestIdleCallback(o):setTimeout(o,50)}createEvent(t,e,i="",s=""){const o=this.token;if(null===o)return void setTimeout((()=>{this.createEvent(t,e,i,s)}),1e3);if(""===o)return void console.error("Create event error: no valid token");const n={Authorization:`Bearer ${o}`,"Content-Type":"application/json"},r=JSON.stringify({name:t,datetime:e,nid:i,source_domain_name:this.domain,source_path:this.path,subid:s});fetch(vt.EVENT_API,{method:"POST",headers:n,body:r}).then((t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`)})).catch((t=>{console.error("Create event error:",t.message)}))}async getToken(){let t=sessionStorage.getItem(vt.TOKEN_CRYPTO_KEY_NAME);if(t)try{const e=await this.decryptData(t);return this.token=e,e}catch(t){console.log("Get invalid token from cache.")}try{const e=await fetch(vt.GET_TOKEN_CRYPTO_KEY_API,{method:"GET"});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);t=await e.text();const i=await this.decryptData(t);return sessionStorage.setItem(vt.TOKEN_CRYPTO_KEY_NAME,t),this.token=i,i}catch(t){return console.error(`Get token error: ${t}`),this.token="",this.token}}async decryptData(t){const e=await crypto.subtle.importKey("raw",this.base64ToUint8Array(t),{name:vt.TOKEN_CRYPTO_ALGORITHM},!0,["encrypt","decrypt"]),i=this.base64ToUint8Array(vt.TOKEN_CRYPTO_ENCRYPTED_TEXT),s=this.base64ToUint8Array(vt.TOKEN_CRYPTO_IV),o=await crypto.subtle.decrypt({name:vt.TOKEN_CRYPTO_ALGORITHM,iv:s},e,i);return(new TextDecoder).decode(o)}base64ToUint8Array(t){return Uint8Array.from(atob(t),(t=>t.charCodeAt(0)))}}vt.EVENT_API="https://api.numbersprotocol.io/api/v3/events/",vt.GET_TOKEN_CRYPTO_KEY_API="https://static-cdn.numbersprotocol.io/capture-eye/token-crypto-key.txt",vt.TOKEN_CRYPTO_KEY_NAME="tokenCryptoKey",vt.TOKEN_CRYPTO_ENCRYPTED_TEXT="cUtaBpS27se6oazDe4zGwLOSK6arfdfuFulXoJkklslbGgNkvHyUXa8EV6bVyw==",vt.TOKEN_CRYPTO_IV="P1PuJ76j0cHvUTsN",vt.TOKEN_CRYPTO_ALGORITHM="AES-GCM";const ft=new vt;class yt{constructor(){this.modalElement=null,this.handleRootClick=t=>{this.getModal().contains(t.target)||this.removeModal()},ft.trackInteraction(gt.SCRIPT)}get nid(){return this?.modalElement?.nid??""}get modalHidden(){return this?.modalElement?.modalHidden??!0}static getInstance(){return yt.instance||(yt.instance=new yt),yt.instance}async updateModal(t,e=150){const i=null!==this.modalElement;let s=this.getModal();s.modalHidden=!0,await new Promise((t=>setTimeout(t,e)));const o=s.nid!==t.nid;i&&o&&(s.clearModalOptions(),this.removeModal(),s=this.getModal()),s.modalHidden=!1,s.updateModalOptions(t),o&&(async function(t){const e={"Content-Type":"application/json"};try{const i=await fetch(`${mt.url.dataApi}?nid=${t}`,{method:"GET",headers:e});if(!i.ok){const t=await i.json();return void console.error(`Error ${i.status}: ${t.message}`)}const{response:{data:s}}=await i.json();if(console.debug(s),!s)return;const o=s.captureEyeCustom?.map((t=>({field:t._api_c2_field,value:t._api_c2_value,iconSource:t._api_c2_iconSource,url:t._api_c2_url}))),n={creator:s.assetCreator,creatorWallet:s.fullAssetTree?.["_api_c2_assetTree.creatorWallet"],createdTime:s.assetTimestampCreated,encodingFormat:s.fullAssetTree?.["_api_c2_assetTree.encodingFormat"],headline:s.headline,abstract:s.abstract,initialTransaction:s.initial_transaction,thumbnailUrl:s.thumnail_url,explorerUrl:s.initial_transaction?`${mt.url.explorer}/tx/${s.initial_transaction}`:"",assetSourceType:s.assetSourceType,captureTime:s.integrity_capture_time,captureLocation:s.fullAssetTree?.["_api_c2_assetTree.assetLocationCreated"],backendOwnerName:s.backend_owner_name,digitalSourceType:s.digitalSourceType,usedBy:s.usedBy,captureEyeCustom:o};return console.debug(n),n}catch(t){return void console.error("Fetch error:",t)}}(t.nid).then((t=>{this.updateModalAsset(t,!0)})),async function(t){try{const e=await fetch(`${mt.url.assetApi}${t}/`,{method:"GET"});if(e.ok)return`${(await e.json()).owner_name}`;const i=await e.json();console.error(`Error ${e.status}: ${i?.error?.type} ${i?.error?.message}`)}catch(t){console.error("Fetch error:",t)}}(t.nid).then((t=>{if(t){const e=`${mt.url.showcase}/${t.toLowerCase()}`;this.updateModalAsset({showcaseLink:e},!1)}})),async function(t){try{const e=await fetch(`${mt.url.productApi}?nid=${t}&available=true&limit=1`,{method:"GET"});if(e.ok){const{count:t}=await e.json();return t>0}const i=await e.json();console.error(`Error ${e.status}: ${i?.error?.type} ${i?.error?.message}`)}catch(t){console.error("Fetch error:",t)}return!1}(t.nid).then((t=>this.updateModalAsset({hasNftProduct:t},!1))))}removeModal(){this.modalElement&&(this.modalElement.modalHidden=!0,this.unregisterRootClickListener(),this.modalElement.remove(),this.modalElement=null)}getModal(){return this.modalElement||(this.modalElement=document.createElement("capture-eye-modal"),this.modalElement.addEventListener("remove-capture-eye-modal",(()=>{this.removeModal()})),document.body.appendChild(this.modalElement),this.registerRootClickListener()),this.modalElement}updateModalAsset(t,e){this.modalElement&&t&&this.modalElement.updateAsset(t,e)}registerRootClickListener(){document.body.addEventListener("click",this.handleRootClick)}unregisterRootClickListener(){document.body.removeEventListener("click",this.handleRootClick)}}function bt(){const t=navigator.userAgent,e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(t)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(t);if(!e&&window.screen.width>=768)return!1;let i=!1;if("maxTouchPoints"in navigator)i=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)i=navigator.msMaxTouchPoints>0;else{const t=matchMedia?.("(pointer:coarse)");"(pointer:coarse)"===t?.media?i=!!t.matches:"orientation"in window&&(i=!0)}return i||e}let wt=class extends nt{constructor(){super(),this.nid="",this.layout=mt.layout.original,this.modalHidden=!0,this._color="",this._copyrightZoneTitle="",this._engagementZones=[],this._engagementZoneIndex=0,this._engagementZoneRotationInterval=5e3,this._engagementZoneRotationIntervalId=void 0,this._headingSource="",this._position=void 0,this._actionButtonText="",this._actionButtonLink="",this._asset=void 0,this._assetLoaded=!1,this._imageLoaded=!1,this._crPin=mt.crPin.on}disconnectedCallback(){super.disconnectedCallback(),this.stopEngagementZoneRotation()}updated(t){if(t.has("modalHidden")||t.has("_assetLoaded")){const t=this.shadowRoot?.querySelector(".close-button");this.modalElement&&t&&!this.modalHidden&&this.updateModelPosition(t)}}updateAsset(t,e=!1){this._asset={...this._asset,...t},e&&(this._assetLoaded=!0)}updateModalOptions(t){t.nid&&(this.nid=t.nid),t.layout&&(this.layout=t.layout),void 0!==t.color&&t.color!==this._color&&(this._color=t.color,this.updateModalColor()),t.headingSource&&(this._headingSource=t.headingSource),t.copyrightZoneTitle&&(this._copyrightZoneTitle=t.copyrightZoneTitle),void 0!==t.engagementZones&&JSON.stringify(t.engagementZones)!==JSON.stringify(this._engagementZones)&&(this._imageLoaded=!1,this._engagementZones=t.engagementZones),void 0!==t.crPin&&(this._crPin=t.crPin),this.preloadEngagementZoneImages(),t.actionButtonText&&(this._actionButtonText=t.actionButtonText),t.actionButtonLink&&(this._actionButtonLink=t.actionButtonLink),t.position&&(this._position=t.position)}clearModalOptions(){this.stopEngagementZoneRotation(),this.nid="",this.layout=mt.layout.original,this._color="",this._copyrightZoneTitle="",this._engagementZones=[],this._engagementZoneIndex=0,this._engagementZoneRotationIntervalId=void 0,this._actionButtonText="",this._actionButtonLink="",this._asset=void 0,this._assetLoaded=!1,this._position=void 0,this._crPin=mt.crPin.on}remToPixels(t){return t*parseFloat(getComputedStyle(document.documentElement).fontSize)}startEngagementZoneRotation(){this._engagementZones.length<=1||(this._engagementZoneRotationIntervalId=setInterval((()=>{this._engagementZoneIndex=(this._engagementZoneIndex+1)%this._engagementZones.length}),this._engagementZoneRotationInterval))}stopEngagementZoneRotation(){this._engagementZoneRotationIntervalId&&clearInterval(this._engagementZoneRotationIntervalId)}rotateNext(){this._engagementZones.length<=1||(this._engagementZoneIndex=(this._engagementZoneIndex+1)%this._engagementZones.length)}rotatePrev(){this._engagementZones.length<=1||(this._engagementZoneIndex=(this._engagementZoneIndex-1+this._engagementZones.length)%this._engagementZones.length)}preloadEngagementZoneImages(){return new Promise(((t,e)=>{let i=0;const s=this._engagementZones.length>0?this._engagementZones.map((t=>t.image)):[mt.url.defaultEngagementImage];s.forEach((o=>{const n=new Image;n.src=o,n.onload=()=>{i++,i===s.length&&(this.handleImageLoad(),t())},n.onerror=()=>{console.error(`Image failed to load: ${o}`),e(new Error(`Image failed to load: ${o}`))}}))}))}handleImageLoad(){this._imageLoaded=!0,this.startEngagementZoneRotation()}isC2paSupported(){return"string"==typeof this._asset?.encodingFormat&&new Set(["video/msvideo","video/avi","application-msvideo","image/avif","application/x-c2pa-manifest-store","image/x-adobe-dng","image/heic","image/heif","image/jpeg","audio/mp4","audio/mpeg","video/mp4","application/mp4","video/quicktime","image/png","image/svg+xml","image/tiff","audio/x-wav","image/webp"]).has(this._asset?.encodingFormat)}isOriginal(){return this.layout==mt.layout.original}renderBadges(){const t="trainedAlgorithmicMedia"===this._asset?.digitalSourceType?V`<img
          src="${mt.url.generatedViaAi}"
          alt="Generated via AI"
          title="Generated via AI"
        />`:V``,e=this._crPin!==mt.crPin.off&&this.isC2paSupported()?V`<div
          class="button-content-credentials" title="Inspect Content Credentials"
          @click=${this.handleInspectContentCredentials}
        >
          <svg viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M14.6,8v6.6H8c-3.7,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6S14.6,4.3,14.6,8z
                M0,8c0-4.4,3.6-8,8-8s8,3.6,8,8v8H8 C3.6,16,0,12.4,0,8z
                M3.2,8.3c0,1.6,1.1,3,2.9,3c1.5,0,2.4-1,2.7-2.2H7.3c-0.2,0.6-0.6,
                0.9-1.2,0.9c-0.9,0-1.5-0.7-1.5-1.8
                s0.6-1.8,1.5-1.8c0.6,0,1,0.3,1.2,0.9h1.4C8.5,6.2,7.5,5.3,6.1,5.3C4.3,
                5.3,3.2,6.7,3.2,8.3z
                M10.7,5.4H9.3v5.8h1.4v-3
                c0-0.6,0.2-0.9,0.4-1.2c0.2-0.2,0.6-0.3,1.1-0.3h0.4V5.4h-0.4c-0.8,0-1.2,
                0.3-1.6,0.7L10.7,5.4L10.7,5.4z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
        </div>`:V``;return V`
      <div class="badge-container">
        ${t}
        ${e}
      </div>
    `}renderCreatorOrAssetSourceType(){return this.isOriginal()?V`
          <a
            class="link-text"
            href=${this._asset?.showcaseLink??"#"}
            target="_blank"
          >
            ${this._asset?.creator??""}
          </a>
        `:this._asset?.assetSourceType??""}renderHeading(){const t=this._assetLoaded?"abstract"===this._headingSource?this._asset?.abstract??"":this._asset?.headline??"":"";return V`
      <div class="${"heading headline"}" title=${t} @click=${this.toggleHeading}>
        ${this._assetLoaded?V`${t}`:V`<div class="shimmer-text" style="height: auto;">&nbsp;</div>`}
      </div>
    `}renderTop(){const t=this._asset?.thumbnailUrl?V`<img
          src=${this._asset?.thumbnailUrl}
          alt="Profile"
          class="profile-img"
        />`:"string"==typeof this._asset?.encodingFormat&&this._asset.encodingFormat.includes("audio/")?V`<svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          width="100"
          height="100"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 100 100"
          xml:space="preserve"
          class="profile-img"
        >
          <g>
            <path
              d="M501.969 5.638A23.063 23.063 0 0 0 483.603.231L160.83 46.341c-11.359 1.623-19.795 11.351-19.795 22.825V339.475c-13.656-7.956-29.509-12.537-46.421-12.537-51.021 0-92.531 41.51-92.531 92.531S43.592 512 94.613 512s92.531-41.51 92.531-92.531V181.383l276.663-39.523v151.504c-13.656-7.956-29.509-12.537-46.421-12.537-51.021 0-92.531 41.51-92.531 92.531 0 51.021 41.51 92.531 92.531 92.531s92.531-41.51 92.531-92.531V23.055a23.05 23.05 0 0 0-7.948-17.417z"
              fill="#808080"
              data-original="#000000"
              data-darkreader-inline-fill=""
              style="--darkreader-inline-fill: #292a2b;"
              class=""
            ></path>
          </g>
        </svg>`:V`<img
          src=${mt.url.blankThumbnail}
          alt="Profile"
          class="profile-img"
        />`,e=this.isOriginal()?this._asset?.captureTime?this._asset?.captureTime:this._asset?.createdTime:this._asset?.captureTime;return V`
      <div class="section">
        <div class="section-title">
          ${this._copyrightZoneTitle||mt.text.defaultCopyrightZoneTitle}
        </div>
        <div class="profile-container">
          ${this._assetLoaded?V`<a
                href=${`${mt.url.profile}/${this.nid}`}
                target="_blank"
                >${t}</a
              >`:V`<div class="shimmer-profile-img"></div>`}
          <div class="profile-text">
            <div class="top-name">
              ${this._assetLoaded?this.renderCreatorOrAssetSourceType():V`<div class="shimmer-text"></div>`}
            </div>
            <div class="top-info">
              ${this._assetLoaded?e??"":V`<div class="shimmer-text"></div>`}
            </div>
            <div class="top-info">
              ${this._assetLoaded?this._asset?.captureLocation??"":V`<div class="shimmer-text"></div>`}
            </div>
          </div>
        </div>
        ${this.renderHeading()}
      </div>
    `}renderIcon(t){return V`<img
      src=${t}
      loading="lazy"
      width="20"
      height="auto"
      alt=""
    />`}renderTransaction(){const t=((e=this._asset?.initialTransaction??"").length<60?"":`${e.slice(0,6)}...${e.slice(-6)}`)||"N/A";var e;return V`${this._assetLoaded?V`${this.renderIcon(mt.url.txIcon)}
          <span class="field-text">Blockchain Tx:</span>
          ${"N/A"!==t&&this._asset?.explorerUrl?V`<a
                class="link-text"
                href=${this._asset.explorerUrl}
                target="_blank"
              >
                <span class="value-text">${t}</span>
              </a>`:V`<span class="value-text">${t}</span>`}`:V`<span class="shimmer-text" style="height: 21.5px;"></span>`}`}renderDefaultProvenanceZone(){return V` <div class="section">
      <div class="section-title">
        ${this.isOriginal()?"Origins":"Curated By"}
      </div>
      ${this.isOriginal()?V`<div class="middle-row">
              ${this._assetLoaded?V`${this.renderIcon(mt.url.blockchainIcon)}
                    <span class="field-text">Blockchain:</span>
                    <a
                      class="link-text"
                      href=${mt.url.explorer}
                      target="_blank"
                    >
                      <span class="value-text"
                        >${mt.text.numbersMainnet}</span
                      >
                    </a>`:V`<span class="shimmer-text" style="height: 21.5px;"></span>`}
            </div>
            <div class="middle-row">${this.renderTransaction()}</div>`:V`<div class="middle-row">
            ${this._assetLoaded?V`${this.renderIcon(mt.url.curatorIcon)}
                  <span class="field-text">
                    ${this._asset?.backendOwnerName??""}
                  </span>`:V`<div class="shimmer-text" style="height: 21.5px;"></div>`}
          </div>`}
    </div>`}renderCustomProvenanceZone(){const t=this._asset?.captureEyeCustom;if(!Array.isArray(t))return V``;const e=t.filter((t=>t.field&&t.value));return V`
      <div class="section">
        <div class="section-title">
          ${this.isOriginal()?"Origins":"Curated By"}
        </div>
        ${e.map((t=>V`
            <div class="middle-row">
              ${t.iconSource?this.renderIcon(t.iconSource):V``}

              <span class="field-text">${t.field}:</span>
              ${t.url?V`<a class="link-text" href=${t.url} target="_blank"
                    ><span class="value-text">${t.value}</span></a
                  >`:V`<span class="value-text">${t.value}</span>`}
            </div>
          `))}
        <div class="middle-row">${this.renderTransaction()}</div>
      </div>
    `}renderBottom(){const t=this._actionButtonLink?this._actionButtonLink:this._asset?.hasNftProduct?`${mt.url.collect}?nid=${this.nid}&from=capture-eye`:this.isOriginal()?`${mt.url.profile}/${this.nid}`:this._asset?.usedBy??"",e=this._actionButtonText?this._actionButtonText:this._asset?.hasNftProduct?mt.text.collect:mt.text.viewMore;return V`
      <div class="section">
        <a href=${t} target="_blank"
          ><button class="view-more-btn">${e}</button></a
        >
        <div class="powered-by">
          ${this._assetLoaded?V`<a href=${mt.url.numbersWebsite} target="_blank"
                >Powered by Numbers Protocol</a
              >`:V`<div class="shimmer-text" style="height: auto;">&nbsp;</div>`}
        </div>
      </div>
    `}get currentEngagementZone(){const t={image:mt.url.defaultEngagementImage,link:mt.url.defaultEngagementLink};return this._engagementZones.length>0?this._engagementZones[this._engagementZoneIndex]:t}renderEngagementZone(){return V`
      <div class="slideshow-container">
        <a
          href=${this.currentEngagementZone.link}
          target="_blank"
          class="eng-link"
          @click=${this.trackEngagement}
        >
          <img
            src=${this.currentEngagementZone.image}
            alt="Slideshow Image"
            class="eng-img"
            style="display: ${this._imageLoaded?"block":"none"}"
          />
          ${this._imageLoaded?"":V`<div class="shimmer eng-img"></div>`}
        </a>
        <!-- Left and Right Arrows -->
        ${this._engagementZones.length>1?V` <button class="prev" @click=${this.rotatePrev}>
                &#10094;
              </button>
              <button class="next" @click=${this.rotateNext}>&#10095;</button>`:""}
      </div>
    `}render(){const t=bt(),e=this._color?this._color:t?mt.color.mobileEye:mt.color.defaultEye,i=t?24:32;return V`
      <div
        class="modal ${this.modalHidden?"modal-hidden":"modal-visible"}"
        @click=${this.handleModalClick}
      >
        <div class="modal-container">
          <div class="modal-content">
            <div class="card">
              ${this.renderBadges()}
              ${this.renderTop()}
              ${this._asset?.captureEyeCustom&&this._asset.captureEyeCustom.length>0?this.renderCustomProvenanceZone():this.renderDefaultProvenanceZone()}
              ${this.renderBottom()}
            </div>
          </div>
          ${this.renderEngagementZone()}
        </div>
        <div
          class="close-button ${this.modalHidden?"close-button-hidden":"close-button-visible"}"
          @click=${this.emitRemoveEvent}
        >
          ${function(t,e){return V`
    <svg
      style="--eye-color: ${t};"
      width="${e}"
      height="${e}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12
          0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        style="fill: var(--eye-color, #377dde);"
      />
      <path
        d="M17 7.875L16.125 7L12 11.125L7.875 7L7 7.875L11.125 12L7
          16.125L7.875 17L12 12.875L16.125 17L17 16.125L12.875 12L17 7.875Z"
        fill="white"
      />
    </svg>
  `}(e,i)}
        </div>
      </div>
    `}handleModalClick(t){t.stopPropagation();null!==t.target.closest("a")||t.preventDefault()}handleInspectContentCredentials(){const t=`${mt.url.profile}/${this.nid}/inspect`;window.open(t,"_blank","noopener,noreferrer")}emitRemoveEvent(){this.dispatchEvent(new CustomEvent("remove-capture-eye-modal"))}trackEngagement(){const t=this.currentEngagementZone.link===mt.url.defaultEngagementLink?"1":"0";ft.trackInteraction(gt.ENGAGEMENT_ZONE,this.nid,t)}updateModalColor(){if(this.style.setProperty("--primary-color",this._color),this.style.setProperty("--hover-color",""),!this._color)return;const t=document.createElement("canvas").getContext("2d");if(!t)return;t.fillStyle=this._color;let e=t.fillStyle;if(!/^#[0-9a-fA-F]{6}$/.test(e))return;function i(t){const i=parseInt(e.substring(t,t+2),16);return Math.round(i+.5*(255-i))}const s=i(1),o=i(3),n=i(5);e=`#${((1<<24)+(s<<16)+(o<<8)+n).toString(16).slice(1)}`,this.style.setProperty("--hover-color",e)}updateModelPosition(t){if(!this._position)return;const e=this.remToPixels(1),i=this._position.top+e,s=this._position.left+e,o=this._position.name.split(" ");let n=i,r=s;n>this.modalElement.offsetHeight&&(o.includes("bottom")||n+this.modalElement.offsetHeight>document.documentElement.scrollHeight)?n-=this.modalElement.offsetHeight:n+this.modalElement.offsetHeight>document.documentElement.scrollHeight&&(n=Math.max(0,document.documentElement.scrollHeight-this.modalElement.offsetHeight)),r>this.modalElement.offsetWidth&&(o.includes("right")||r+this.modalElement.offsetWidth>document.documentElement.scrollWidth)?r-=this.modalElement.offsetWidth:r+this.modalElement.offsetWidth>document.documentElement.scrollWidth&&(r=Math.max(0,document.documentElement.scrollWidth-this.modalElement.offsetWidth)),this.modalElement.style.top=`${n}px`,this.modalElement.style.left=`${r}px`;let a=i-n,h=s-r;0!=a&&a!=this.modalElement.offsetHeight&&0!=h&&h!=this.modalElement.offsetWidth&&(a<=h?a=0:h=0);const l=this.shadowRoot?.querySelector(".modal-container");l&&(l.style.transformOrigin=`${h}px ${a}px`),t.style.top=a-t.offsetHeight/2+"px",t.style.left=h-t.offsetWidth/2+"px"}toggleHeading(){const t=this.shadowRoot?.querySelector(".heading");t&&t.classList.toggle("expand")}};wt.styles=r`
    :host {
      --background-color: #fff;
      --primary-color: #027fe5;
      --hover-color: #6ebff2;
      --text-color: #000;
      --secondary-text-color: #333;
      --border-radius: 1rem;
      --box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
      --font-semibold: 'Degular-Semibold', Helvetica;
      --font-regular: 'Degular-Regular', Helvetica;
      --font-light: 'Degular-Light', Helvetica;
      --font-size: 1rem;
      --font-size-small: 0.875rem;
      --font-size-very-small: 0.7rem;
      --padding: 1rem;
    }

    :host {
      font-family: var(--font-light);
      font-size: var(--font-size);
      color: var(--text-color);
    }

    .modal {
      z-index: 1000;
      justify-content: flex-start;
      align-items: flex-start;
      display: none;
      position: absolute;
    }

    .modal-visible {
      display: flex;
    }

    .modal-hidden {
      display: none;
    }

    .modal-container {
      background-color: var(--background-color);
      border-radius: var(--border-radius);
      width: 20rem;
      box-shadow: var(--box-shadow);
      opacity: 0;
      transform: scale(0.5);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transition-behavior: allow-discrete;
    }

    .modal-visible .modal-container {
      opacity: 1;
      transform: scale(1);
    }

    .modal-hidden .modal-container {
      opacity: 0;
      transform: scale(0.5);
    }

    @starting-style {
      .modal.modal-visible .modal-container {
        opacity: 0;
        transform: scale(0.5);
      }
    }

    .modal-content {
      padding: 12px 24px 12px 24px;
    }

    .close-button {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10001;
      cursor: pointer;
      border-radius: 100vw;
      opacity: 0;
      transform: scale(0.5) rotate(0deg);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .close-button-visible {
      opacity: 1;
      transform: scale(1) rotate(90deg);
    }

    .close-button-hidden {
      opacity: 0;
      transform: scale(0.5) rotate(-90deg);
    }

    @starting-style {
      .close-button {
        opacity: 0;
        transform: scale(0.5) rotate(0deg);
      }
    }

    .close-button img {
      width: 100%;
    }

    .section {
      border-bottom: 1px solid #e2e2e2;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
    }

    .section:last-child {
      border-bottom: none;
    }

    .section-title {
      font-family: var(--font-light);
      color: var(--text-color);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding-top: 10px;
      padding-bottom: 5px;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 2;
      display: block;
    }

    .badge-container {
      display: flex;
      position: absolute;
      top: 16px;
      right: 24px;
      gap: 4px;
    }

    .badge-container div,
    .badge-container img {
      position: relative;
      width: 32px;
      height: 32px;
      display: block;
    }

    .button-content-credentials {
      cursor: pointer;
    }

    .button-content-credentials svg {
      width: 100%;
      height: 100%;
    }

    .profile-container {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .profile-img {
      border-radius: 0.5rem;
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
    }

    .profile-text {
      display: flex;
      flex-direction: column;
    }

    .top-name {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .top-info {
      color: var(--secondary-text-color);
      font-family: var(--font-light);
      font-size: var(--font-size-very-small);
    }

    .heading {
      font-family: var(--font-light);
      color: var(--secondary-text-color);
      margin-bottom: 1rem;
      font-size: var(--font-size-small);
      overflow: hidden;
      max-height: 100px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }

    .heading.expand {
      max-height: none;
      -webkit-line-clamp: none;
    }

    .middle-row {
      flex-flow: wrap;
      align-items: center;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      display: flex;
    }

    .field-text {
      margin-left: 10px;
    }

    .value-text {
      margin-left: 1ch;
    }

    a.link-text,
    a.link-text:link,
    a.link-text:visited {
      color: var(--primary-color);
      text-decoration: none;
    }

    a.link-text:hover {
      color: var(--hover-color);
    }

    .view-more-btn {
      font-family: var(--font-light);
      font-size: var(--font-size-small);
      color: var(--background-color);
      display: inline-block;
      background-color: var(--primary-color);
      width: 100%;
      text-transform: uppercase;
      padding: 0.5rem 2rem;
      border-radius: 100vw;
      text-align: center;
      transition: background-color 0.3s ease;
      border: none;
      cursor: pointer;
      margin-top: 1rem;
    }

    .view-more-btn:hover {
      background-color: var(--hover-color);
    }

    .powered-by {
      text-align: right;
      color: var(--secondary-text-color);
      font-size: var(--font-size-small);
      margin-top: 0.5rem;
    }

    .powered-by a,
    .powered-by a:visited {
      text-decoration: none;
      color: var(--secondary-text-color);
    }

    .slideshow-container {
      position: relative;
      width: 320px;
      height: 120px;
    }
    .eng-img {
      width: 320px;
      height: 120px;
      display: block;
      object-fit: contain;
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      background-color: #eee;
    }
    .prev,
    .next {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 30px; /* Make the buttons thinner */
      background-color: rgba(0, 0, 0, 0); /* Semi-transparent background */
      color: white;
      border: none;
      padding: 0;
      cursor: pointer;
      font-size: 18px;
      user-select: none;
      opacity: 0;
    }
    .prev {
      left: 0;
      border-bottom-left-radius: var(--border-radius);
    }
    .next {
      right: 0;
      border-bottom-right-radius: var(--border-radius);
    }
    .prev:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.3); /* Darker background on hover */
      opacity: 1;
    }

    /* Shimmer effect */
    .shimmer {
      display: inline-block;
      height: 200px;
      width: 100%;
      background: linear-gradient(
        to right,
        #eeeeee 0%,
        #dddddd 20%,
        #eeeeee 40%,
        #eeeeee 100%
      );
      background-size: 200% auto;
      animation: shimmer 1.5s infinite linear;
    }

    .shimmer-text {
      display: inline-block;
      height: 1rem;
      width: 100%;
      background: linear-gradient(
        to right,
        #eeeeee 0%,
        #dddddd 20%,
        #eeeeee 40%,
        #eeeeee 100%
      );
      background-size: 200% auto;
      animation: shimmer 1.5s infinite linear;
    }

    .shimmer-profile-img {
      display: inline-block;
      background: linear-gradient(
        to right,
        #eeeeee 0%,
        #dddddd 20%,
        #eeeeee 40%,
        #eeeeee 100%
      );
      background-size: 200% auto;
      animation: shimmer 1.5s infinite linear;
      border-radius: 0.5rem;
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
      margin-bottom: 0.375rem;
    }

    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `,t([ct({type:String})],wt.prototype,"nid",void 0),t([ct({type:String})],wt.prototype,"layout",void 0),t([ct({type:Boolean})],wt.prototype,"modalHidden",void 0),t([dt()],wt.prototype,"_color",void 0),t([dt()],wt.prototype,"_copyrightZoneTitle",void 0),t([dt()],wt.prototype,"_engagementZones",void 0),t([dt()],wt.prototype,"_engagementZoneIndex",void 0),t([dt()],wt.prototype,"_engagementZoneRotationInterval",void 0),t([dt()],wt.prototype,"_engagementZoneRotationIntervalId",void 0),t([dt()],wt.prototype,"_headingSource",void 0),t([dt()],wt.prototype,"_position",void 0),t([dt()],wt.prototype,"_actionButtonText",void 0),t([dt()],wt.prototype,"_actionButtonLink",void 0),t([dt()],wt.prototype,"_asset",void 0),t([dt()],wt.prototype,"_assetLoaded",void 0),t([dt()],wt.prototype,"_imageLoaded",void 0),t([dt()],wt.prototype,"_crPin",void 0),t([function(t,e){return(i,s,o)=>{const n=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:r}="object"==typeof s?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ut(0,0,{get(){if(e){let e=t.call(this);return void 0===e&&(e=n(this),r.call(this,e)),e}return n(this)}})}return ut(0,0,{get(){return n(this)}})}}(".modal")],wt.prototype,"modalElement",void 0),wt=t([at("capture-eye-modal")],wt);let $t=class extends nt{constructor(){super(...arguments),this.src="",this.width="100%",this.height="auto",this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1,this.mimeType=null}connectedCallback(){super.connectedCallback(),this.determineFileType()}async determineFileType(){if(this.src){try{const t=(await fetch(this.src,{method:"HEAD"})).headers.get("Content-Type");t?this.mimeType=t:console.error("Content-Type header not found")}catch(t){console.error("Error fetching content type:",t)}this.requestUpdate()}this.mimeType&&(this.isImageMimeType(this.mimeType)||this.isVideoMimeType(this.mimeType))||this.dispatchEvent(new Event("error"))}isImageMimeType(t){return t.startsWith("image/")}isVideoMimeType(t){return t.startsWith("video/")||"application/vnd.apple.mpegurl"===t}render(){return this.src?this.mimeType?this.isImageMimeType(this.mimeType)?V`<img
        src=${this.src}
        alt="Image"
        style="width: ${this.width}; height: ${this.height};"
        @error=${this.handleEvent}
      />`:this.isVideoMimeType(this.mimeType)?V`
        <video
          style="width: ${this.width}; height: ${this.height};"
          ?controls=${this.controls}
          ?autoplay=${this.autoplay}
          ?loop=${this.loop}
          ?muted=${this.muted}
          @error=${this.handleEvent}
        >
          <source src=${this.src} type=${this.mimeType} />
          Your browser does not support the video tag.
        </video>
      `:V`<div class="unsupported">Unsupported file format</div>`:V`<div class="loading"></div>`:V`<div class="unsupported">No source provided</div>`}handleEvent(t){this.dispatchEvent(new Event(t.type))}};$t.styles=r`
    :host {
      display: block;
    }
    img,
    video {
      width: var(--media-viewer-width, 100%);
      height: var(--media-viewer-height, auto);
      vertical-align: bottom;
    }
    .unsupported {
      color: red;
      font-size: 1rem;
      text-align: center;
    }
    .loading {
      text-align: center;
      font-size: 1rem;
      color: #888;
    }
  `,t([ct({type:String})],$t.prototype,"src",void 0),t([ct({type:String})],$t.prototype,"width",void 0),t([ct({type:String})],$t.prototype,"height",void 0),t([ct({type:Boolean})],$t.prototype,"controls",void 0),t([ct({type:Boolean})],$t.prototype,"autoplay",void 0),t([ct({type:Boolean})],$t.prototype,"loop",void 0),t([ct({type:Boolean})],$t.prototype,"muted",void 0),$t=t([at("media-viewer")],$t);let xt=class extends nt{get assetUrl(){return`${mt.url.ipfsGateway}/${this.nid}`}get assetProfileUrl(){return`${mt.url.profile}/${this.nid}`}constructor(){super(),this.nid="",this.layout=mt.layout.original,this.visibility=mt.visibility.hover,this.position="",this.color="",this.headingSource="",this.copyrightZoneTitle="",this.engagementImage="",this.engagementLink="",this.actionButtonText="",this.actionButtonLink="",this.crPin=mt.crPin.on,this._isFullVisibility=!1,this._resizeObserver=null,this.loadFontFace(),console.debug($t.name),console.debug(wt.name)}connectedCallback(){super.connectedCallback(),this._resizeObserver||this.visibility!==mt.visibility.always&&!bt()||(this._resizeObserver=new ResizeObserver((t=>{for(const e of t)this.handleResize(e)})),setTimeout((()=>{this.setButtonFullVisibility()}),3e3))}disconnectedCallback(){super.disconnectedCallback(),yt.getInstance().removeModal(),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}get isOpened(){return!yt.getInstance().modalHidden}open(){this.setButtonActive(!0),this.openEye()}close(){yt.getInstance().removeModal()}buttonTemplate(){if(!this.nid)return V``;const t=bt(),e=this.color?this.color:t?mt.color.mobileEye:mt.color.defaultEye,i=t?24:32,s=this.position.split(" ");return V`
      <div
        class="capture-eye-button ${this._isFullVisibility?"full-visibility":""}
          ${s.includes("bottom")?"position-bottom":"position-top"}
          ${s.includes("right")?"position-right":"position-left"}
          "
        @click=${this.openEye}
      >
        ${this.generateCaptureEyeSvg(e,i)}
      </div>
    `}render(){return V`
      <div class="capture-eye-container">
        <slot
          @mouseenter=${this.handleMouseEnter}
          @mouseleave=${this.handleMouseLeave}
          @slotchange=${this.handleSlotChange}
        ></slot>
        ${this.buttonTemplate()}
      </div>
    `}openEye(t){t&&(t.stopPropagation(),t.preventDefault());const e=yt.getInstance(),i=this.getButtonElement().getBoundingClientRect(),s={nid:this.nid,layout:this.layout,color:this.color,headingSource:this.headingSource,copyrightZoneTitle:this.copyrightZoneTitle,engagementZones:this.engagementZones,actionButtonText:this.actionButtonText,actionButtonLink:this.actionButtonLink,crPin:this.crPin,position:{top:i.top+window.scrollY,left:i.left+window.scrollX,name:this.position}};e.updateModal(s),this.setButtonActive(!1),this.nid&&ft.trackInteraction(gt.CAPTURE_EYE,this.nid,`layout=${this.layout},visibility=${this.visibility}`)}generateCaptureEyeSvg(t,e){return V`
      <svg
        style="--eye-color: ${t};"
        width="${e}"
        height="${e}"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_640_264)">
          <path
            d="M11.9821 23.8844C18.5457 23.8844 23.8665 18.5635 23.8665
              11.9999C23.8665 5.43633 18.5457 0.115479 11.9821 0.115479C5.4185
              0.115479 0.0976562 5.43633 0.0976562 11.9999C0.0976562 18.5635
              5.4185 23.8844 11.9821 23.8844Z"
            style="fill: var(--eye-color, #377dde);"
          />
          <path
            d="M18.4909 17.6401C18.4909 17.8801 18.3931 18.0956 18.2375
              18.2534C18.0798 18.4112 17.8642 18.5068 17.6242
              18.5068H15.542V20.3401H16.8131C17.2042 20.3401 17.5775 20.1845
              17.8531 19.909L19.8931 17.869C20.1687 17.5934 20.3242 17.2179
              20.3242 16.829V15.5579H18.4909V17.6401Z"
            fill="white"
          />
          <path
            d="M5.72876 18.2556C5.57098 18.0978 5.47542 17.8823 5.47542
              17.6423V15.5601H3.64209V16.8312C3.64209 17.2223 3.79765 17.5956
              4.0732 17.8712L6.1132 19.9112C6.38876 20.1867 6.76431 20.3423
              7.1532 20.3423H8.42431V18.5089H6.34209C6.10209 18.5089 5.88653
              18.4134 5.72876 18.2556Z"
            fill="white"
          />
          <path
            d="M5.47347 6.35991C5.47347 6.11991 5.57125 5.90436 5.7268
              5.74658C5.88458 5.5888 6.10014 5.49325 6.34014
              5.49325H8.42236V3.65991H7.15125C6.76014 3.65991 6.3868 3.81547
              6.11125 4.09102L4.07125 6.13102C3.79569 6.40658 3.64014 6.78213
              3.64014 7.17102V8.44436H5.47347V6.35991Z"
            fill="white"
          />
          <path
            d="M19.8911 6.13102L17.8512 4.09102C17.5756 3.81547 17.2 3.65991
              16.8112 3.65991H15.54V5.49325H17.6223C17.8623 5.49325 18.0778
              5.59102 18.2356 5.74658C18.3934 5.90436 18.4889 6.11991 18.4889
              6.35991V8.44213H20.3223V7.17102C20.3223 6.78213 20.1689 6.4088
              19.8911 6.13102Z"
            fill="white"
          />
          <path
            d="M19.1002 12.3777L19.3069 11.9999L19.1002 11.6221C18.4113 10.3621
              17.4024 9.30879 16.178 8.56657C14.9558 7.82657 13.518 7.3999
              11.9847 7.3999H11.9802C10.4469 7.3999 9.00909 7.82657 7.78465
              8.56879C6.56021 9.31101 5.5491 10.3666 4.86243 11.6243L4.65576
              12.0021L4.86243 12.3799C5.55132 13.6399 6.56021 14.6932 7.78465
              15.4355C9.00687 16.1777 10.4469 16.6043 11.978
              16.6043H11.9824C13.5158 16.6043 14.9535 16.1777 16.178
              15.4355C17.4024 14.691 18.4135 13.6377 19.1002 12.3777ZM11.9824
              15.031C11.0513 15.031 10.1713 14.8377 9.37132 14.4888C9.10465
              14.3732 8.84687 14.2399 8.60021 14.0888C7.77576 13.5888 7.07132
              12.911 6.53798 12.1088L6.46687 11.9999L6.54021 11.891C7.07354
              11.0888 7.77798 10.411 8.60243 9.91101C9.5891 9.31324 10.7424
              8.96879 11.9847 8.96879C13.2247 8.96879 14.378 9.31324 15.3669
              9.91101C16.1913 10.411 16.8958 11.0888 17.4291 11.891L17.5024
              11.9999L17.4291 12.1088C16.8958 12.911 16.1913 13.5888 15.3669
              14.0888C14.3758 14.6866 13.2224 15.031 11.9824 15.031Z"
            fill="white"
          />
          <path
            d="M11.9822 13.8934C13.0279 13.8934 13.8755 13.0457 13.8755
              12C13.8755 10.9544 13.0279 10.1067 11.9822 10.1067C10.9365 10.1067
              10.0889 10.9544 10.0889 12C10.0889 13.0457 10.9365 13.8934 11.9822
              13.8934Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_640_264">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `}getButtonElement(){return this.shadowRoot?.querySelector(".capture-eye-button")}handleMouseEnter(){this.setButtonActive(!0)}handleMouseLeave(){this.setButtonActive(!1)}handleResize(t){t.contentRect.width>0&&t.contentRect.height>0&&this.setButtonFullVisibility()}handleSlotChange(t){if(!this._resizeObserver)return;const e=t.target;if(!e)return;let i=!1;const s=e.assignedNodes({flatten:!0}).filter((t=>{if(t.nodeType!==Node.ELEMENT_NODE)return!1;const e=t.getBoundingClientRect();return e.width>0&&e.height>0&&(i=!0),!0}));0===s.length||i?this.setButtonFullVisibility():s.forEach((t=>{this._resizeObserver?.observe(t),t.addEventListener("error",(()=>this.setButtonFullVisibility()))}))}setButtonActive(t){const e=this.getButtonElement();e&&(t?e.classList.add("active"):e.classList.remove("active"))}setButtonFullVisibility(){this._resizeObserver&&(this._isFullVisibility=!0,this._resizeObserver.disconnect(),this._resizeObserver=null)}loadFontFace(){const t=document.createElement("link");t.href=mt.url.fontFaceCssUrl,t.rel="stylesheet",document.head.appendChild(t)}get engagementZones(){const t=this.engagementImage.split(",").map((t=>t.trim())).filter((t=>""!==t)),e=this.engagementLink.split(",").map((t=>t.trim())).filter((t=>""!==t));return t.map(((t,i)=>({image:t,link:e[i]||mt.url.defaultEngagementLink})))}};xt.styles=r`
    :host {
      display: block;
      font-family: 'Degular-Medium', Helvetica;
      --capture-eye-container-display: inline-block;
    }

    ::slotted(*) {
      display: block;
    }

    .capture-eye-container {
      position: relative;
      display: var(--capture-eye-container-display);
      vertical-align: bottom;
    }

    .capture-eye-button {
      position: absolute;
      justify-content: center;
      align-items: center;
      z-index: 100;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      border-radius: 100vw;
      opacity: 0.4;
      display: none; /* Hidden by default */
    }
    .capture-eye-button.position-top {
      top: 0;
      margin-top: 5px;
    }
    .capture-eye-button.position-bottom {
      bottom: 0;
      margin-bottom: 5px;
    }
    .capture-eye-button.position-left {
      left: 0;
      margin-left: 5px;
    }
    .capture-eye-button.position-right {
      right: 0;
      margin-right: 5px;
    }
    .capture-eye-button:hover {
      opacity: 1;
    }
    :host(:hover) .capture-eye-button,
    .capture-eye-button.active {
      display: flex; /* Show button on hover or when active */
    }

    .capture-eye-button.full-visibility {
      opacity: 1;
      display: flex;
    }

    @media (min-width: 401px) {
      .capture-eye-button:hover::before {
        max-width: 170px;
        /* Adjust to your desired maximum width */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        content: 'Click me!';
        position: absolute;
        /* Adjust as needed */
        padding: 5px 10px;
        background-color: #fff;
        /* Background color of the popup */
        color: #333;
        /* Text color */
        opacity: 0.7;
        border-radius: 5px;
        font-size: 12px;
        z-index: 1;
        /* To make sure it stays on top */
        pointer-events: none;
        /* Ensure it doesn't interfere with other interactions */
        font-family: 'Degular-Medium', Helvetica;
      }
      .capture-eye-button.position-left:hover::before {
        left: 220%;
        transform: translateX(-50%);
      }
      .capture-eye-button.position-right:hover::before {
        right: 220%;
        transform: translateX(50%);
      }
    }

    .capture-eye-no-scroll {
      overflow: hidden;
    }
  `,t([ct({type:String})],xt.prototype,"nid",void 0),t([ct({type:String})],xt.prototype,"layout",void 0),t([ct({type:String})],xt.prototype,"visibility",void 0),t([ct({type:String})],xt.prototype,"position",void 0),t([ct({type:String})],xt.prototype,"color",void 0),t([ct({type:String,attribute:"heading-source"})],xt.prototype,"headingSource",void 0),t([ct({type:String,attribute:"cz-title"})],xt.prototype,"copyrightZoneTitle",void 0),t([ct({type:String,attribute:"eng-img"})],xt.prototype,"engagementImage",void 0),t([ct({type:String,attribute:"eng-link"})],xt.prototype,"engagementLink",void 0),t([ct({type:String,attribute:"action-button-text"})],xt.prototype,"actionButtonText",void 0),t([ct({type:String,attribute:"action-button-link"})],xt.prototype,"actionButtonLink",void 0),t([ct({type:String,attribute:"cr-pin"})],xt.prototype,"crPin",void 0),t([dt({})],xt.prototype,"_isFullVisibility",void 0),xt=t([at("capture-eye")],xt);export{xt as CaptureEye};
//# sourceMappingURL=capture-eye.bundled.js.map
