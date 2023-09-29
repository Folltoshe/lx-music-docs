import{c as le,b as f,d as a,u as P,e as c,f as de,g as se,h as ce,i as u,j as ue,k as be,l as fe,m as L,n as ge,o as $,p as ve,q as pe,r as m,s as me}from"./Space-55467d16.js";import{g as h,i as he,h as d,t as T,j as B}from"./app-64ec91fb.js";import{t as xe}from"./toString-98922312.js";function Ce(e,n,r){var o=-1,t=e.length;n<0&&(n=-n>t?0:t+n),r=r>t?t:r,r<0&&(r+=t),t=n>r?0:r-n>>>0,n>>>=0;for(var l=Array(t);++o<t;)l[o]=e[o+n];return l}function ze(e,n,r){var o=e.length;return r=r===void 0?o:r,!n&&r>=o?e:Ce(e,n,r)}var Se="\\ud800-\\udfff",ye="\\u0300-\\u036f",ke="\\ufe20-\\ufe2f",we="\\u20d0-\\u20ff",$e=ye+ke+we,Re="\\ufe0e\\ufe0f",Me="\\u200d",Be=RegExp("["+Me+Se+$e+Re+"]");function _(e){return Be.test(e)}function Pe(e){return e.split("")}var j="\\ud800-\\udfff",Le="\\u0300-\\u036f",Te="\\ufe20-\\ufe2f",_e="\\u20d0-\\u20ff",je=Le+Te+_e,Fe="\\ufe0e\\ufe0f",Ee="["+j+"]",R="["+je+"]",M="\\ud83c[\\udffb-\\udfff]",He="(?:"+R+"|"+M+")",F="[^"+j+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",H="[\\ud800-\\udbff][\\udc00-\\udfff]",Ie="\\u200d",I=He+"?",O="["+Fe+"]?",Oe="(?:"+Ie+"(?:"+[F,E,H].join("|")+")"+O+I+")*",Ae=O+I+Oe,Ve="(?:"+[F+R+"?",R,E,H,Ee].join("|")+")",We=RegExp(M+"(?="+M+")|"+Ve+Ae,"g");function qe(e){return e.match(We)||[]}function De(e){return _(e)?qe(e):Pe(e)}function Ne(e){return function(n){n=xe(n);var r=_(n)?De(n):void 0,o=r?r[0]:n.charAt(0),t=r?ze(r,1).join(""):n.slice(1);return o[e]()+t}}var Ue=Ne("toUpperCase");const Ze=Ue;function Je(e,n){return h({name:Ze(e),setup(){var r;const o=(r=he(le,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var t;const l=(t=o==null?void 0:o.value)===null||t===void 0?void 0:t[e];return l?l():n}}})}const Ke=Je("close",d("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},d("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},d("g",{fill:"currentColor","fill-rule":"nonzero"},d("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Xe=f("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[a("svg",`
 height: 1em;
 width: 1em;
 `)]),Ye=h({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){P("-base-icon",Xe,T(e,"clsPrefix"))},render(){return d("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Ge=f("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[c("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),a("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),de("disabled",[a("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),a("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),a("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),c("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),c("round",[a("&::before",`
 border-radius: 50%;
 `)])]),Qe=h({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return P("-base-close",Ge,T(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:r,absolute:o,round:t,isButtonTag:l}=e;return d(l?"button":"div",{type:l?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:l?void 0:"button",disabled:r,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,t&&`${n}-base-close--round`],onMousedown:b=>{e.focusable||b.preventDefault()},onClick:e.onClick},d(Ye,{clsPrefix:n},{default:()=>d(Ke,null)}))}}}),eo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},oo=e=>{const{primaryColor:n,borderRadius:r,lineHeight:o,fontSize:t,cardColor:l,textColor2:g,textColor1:b,dividerColor:s,fontWeightStrong:i,closeIconColor:v,closeIconColorHover:x,closeIconColorPressed:C,closeColorHover:z,closeColorPressed:S,modalColor:y,boxShadow1:k,popoverColor:w,actionColor:p}=e;return Object.assign(Object.assign({},eo),{lineHeight:o,color:l,colorModal:y,colorPopover:w,colorTarget:n,colorEmbedded:p,colorEmbeddedModal:p,colorEmbeddedPopover:p,textColor:g,titleTextColor:b,borderColor:s,actionColor:p,titleFontWeight:i,closeColorHover:z,closeColorPressed:S,closeBorderRadius:r,closeIconColor:v,closeIconColorHover:x,closeIconColorPressed:C,fontSizeSmall:t,fontSizeMedium:t,fontSizeLarge:t,fontSizeHuge:t,boxShadow:k,borderRadius:r})},ro={name:"Card",common:se,self:oo},no=ro,to=a([f("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ce({background:"var(--n-color-modal)"}),c("hoverable",[a("&:hover","box-shadow: var(--n-box-shadow);")]),c("content-segmented",[a(">",[u("content",{paddingTop:"var(--n-padding-bottom)"})])]),c("content-soft-segmented",[a(">",[u("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),c("footer-segmented",[a(">",[u("footer",{paddingTop:"var(--n-padding-bottom)"})])]),c("footer-soft-segmented",[a(">",[u("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),a(">",[f("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[u("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),u("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),u("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),u("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),u("content","flex: 1; min-width: 0;"),u("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[a("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),u("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),f("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[a("img",`
 display: block;
 width: 100%;
 `)]),c("bordered",`
 border: 1px solid var(--n-border-color);
 `,[a("&:target","border-color: var(--n-color-target);")]),c("action-segmented",[a(">",[u("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("content-segmented, content-soft-segmented",[a(">",[u("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("footer-segmented, footer-soft-segmented",[a(">",[u("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ue(f("card",`
 background: var(--n-color-modal);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),be(f("card",`
 background: var(--n-color-popover);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ao={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},io=Object.assign(Object.assign({},L.props),ao),uo=h({name:"Card",props:io,setup(e){const n=()=>{const{onClose:i}=e;i&&me(i)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:t}=fe(e),l=L("Card","-card",to,no,e,o),g=ge("Card",t,o),b=B(()=>{const{size:i}=e,{self:{color:v,colorModal:x,colorTarget:C,textColor:z,titleTextColor:S,titleFontWeight:y,borderColor:k,actionColor:w,borderRadius:p,lineHeight:A,closeIconColor:V,closeIconColorHover:W,closeIconColorPressed:q,closeColorHover:D,closeColorPressed:N,closeBorderRadius:U,closeIconSize:Z,closeSize:J,boxShadow:K,colorPopover:X,colorEmbedded:Y,colorEmbeddedModal:G,colorEmbeddedPopover:Q,[$("padding",i)]:ee,[$("fontSize",i)]:oe,[$("titleFontSize",i)]:re},common:{cubicBezierEaseInOut:ne}}=l.value,{top:te,left:ae,bottom:ie}=ve(ee);return{"--n-bezier":ne,"--n-border-radius":p,"--n-color":v,"--n-color-modal":x,"--n-color-popover":X,"--n-color-embedded":Y,"--n-color-embedded-modal":G,"--n-color-embedded-popover":Q,"--n-color-target":C,"--n-text-color":z,"--n-line-height":A,"--n-action-color":w,"--n-title-text-color":S,"--n-title-font-weight":y,"--n-close-icon-color":V,"--n-close-icon-color-hover":W,"--n-close-icon-color-pressed":q,"--n-close-color-hover":D,"--n-close-color-pressed":N,"--n-border-color":k,"--n-box-shadow":K,"--n-padding-top":te,"--n-padding-bottom":ie,"--n-padding-left":ae,"--n-font-size":oe,"--n-title-font-size":re,"--n-close-size":J,"--n-close-icon-size":Z,"--n-close-border-radius":U}}),s=r?pe("card",B(()=>e.size[0]),b,e):void 0;return{rtlEnabled:g,mergedClsPrefix:o,mergedTheme:l,handleCloseClick:n,cssVars:r?void 0:b,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{segmented:e,bordered:n,hoverable:r,mergedClsPrefix:o,rtlEnabled:t,onRender:l,embedded:g,tag:b,$slots:s}=this;return l==null||l(),d(b,{class:[`${o}-card`,this.themeClass,g&&`${o}-card--embedded`,{[`${o}-card--rtl`]:t,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},m(s.cover,i=>i&&d("div",{class:`${o}-card-cover`,role:"none"},i)),m(s.header,i=>i||this.title||this.closable?d("div",{class:`${o}-card-header`,style:this.headerStyle},d("div",{class:`${o}-card-header__main`,role:"heading"},i||this.title),m(s["header-extra"],v=>v&&d("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?d(Qe,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(s.default,i=>i&&d("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},i)),m(s.footer,i=>i&&[d("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},i)]),m(s.action,i=>i&&d("div",{class:`${o}-card__action`,role:"none"},i)))}});export{uo as _};
