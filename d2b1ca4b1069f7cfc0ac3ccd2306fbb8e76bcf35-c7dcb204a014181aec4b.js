(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{K4iA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("RBN/");var r=n("q1tI"),a=n.n(r);const o=e=>{let{className:t,headingLevel:n="h2",headingFontSize:r,text:o,...i}=e;const c=n;return a.a.createElement(c,Object.assign({className:"sub-header "+t,style:r?{fontSize:r}:{}},i),o)};o.defaultProps={className:""}},"RBN/":function(e,t,n){},XSxc:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"initialize",(function(){return X})),n.d(r,"ga",(function(){return B})),n.d(r,"set",(function(){return K})),n.d(r,"send",(function(){return M})),n.d(r,"pageview",(function(){return Q})),n.d(r,"modalview",(function(){return V})),n.d(r,"timing",(function(){return Z})),n.d(r,"event",(function(){return U})),n.d(r,"exception",(function(){return W})),n.d(r,"plugin",(function(){return H})),n.d(r,"outboundLink",(function(){return Y})),n.d(r,"testModeAPI",(function(){return ee})),n.d(r,"default",(function(){return te}));var a=n("dI71"),o=(n("jGxn"),n("q1tI")),i=n.n(o),c=n("gcgQ"),l=n("Wbzz"),s=n("17x9"),u=n.n(s);function f(e){console.warn("[react-ga]",e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(){var e,n;b(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return w(v(n=m(this,(e=h(t)).call.apply(e,[this].concat(a)))),"handleClick",(function(e){var r=n.props,a=r.target,o=r.eventLabel,i=r.to,c=r.onClick,l=r.trackerNames,s={label:o},u="_blank"!==a,f=!(e.ctrlKey||e.shiftKey||e.metaKey||1===e.button);u&&f?(e.preventDefault(),t.trackLink(s,(function(){window.location.href=i}),l)):t.trackLink(s,(function(){}),l),c&&c(e)})),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d(e,["to"]),{href:t,onClick:this.handleClick});return"_blank"===this.props.target&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,i.a.createElement("a",n)}}])&&y(n.prototype,r),a&&y(n,a),t}(o.Component);function k(e){return e.replace(/^\s+|\s+$/g,"")}w(j,"trackLink",(function(){f("ga tracking not enabled")})),w(j,"propTypes",{eventLabel:u.a.string.isRequired,target:u.a.string,to:u.a.string,onClick:u.a.func,trackerNames:u.a.arrayOf(u.a.string)}),w(j,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var P=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function S(e,t){return function(e){return"string"==typeof e&&-1!==e.indexOf("@")}(e)?(f("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):t?k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(P)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}function N(e){console.info("[react-ga]",e)}var E=[],A={calls:E,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];E.push([].concat(t))},resetCalls:function(){E.length=0}};function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _="undefined"==typeof window||"undefined"==typeof document,L=!1,I=!0,z=!1,J=!0,F=function(){var e;return z?A.ga.apply(A,arguments):!_&&(window.ga?(e=window).ga.apply(e,arguments):f("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function G(e){return S(e,I)}function R(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0];"string"==typeof a?(!J&&Array.isArray(e)||F.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){F.apply(void 0,T(["".concat(e,".").concat(a)].concat(n.slice(1))))}))):f("ga command must be a string")}function $(e,t){e?t&&(t.debug&&!0===t.debug&&(L=!0),!1===t.titleCase&&(I=!1),t.useExistingGa)||(t&&t.gaOptions?F("create",e,t.gaOptions):F("create",e,"auto")):f("gaTrackingID is required in initialize()")}function X(e,t){if(t&&!0===t.testMode)z=!0;else{if(_)return!1;t&&!0===t.standardImplementation||function(e){var t,n,r,a,o,i,c,l="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?l=e.gaAddress:e&&e.debug&&(l="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",a=l,o="ga",t.GoogleAnalyticsObject=o,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=a,c.parentNode.insertBefore(i,c)}(t)}return J=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===q(e)?$(e.trackingId,e):f("All configs must be an object")})):$(e,t),!0}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(F.apply(void 0,t),L&&(N("called ga('arguments');"),N("with arguments: ".concat(JSON.stringify(t))))),window.ga}function K(e,t){e?"object"===q(e)?(0===Object.keys(e).length&&f("empty `fieldsObject` given to .set()"),R(t,"set",e),L&&(N("called ga('set', fieldsObject);"),N("with fieldsObject: ".concat(JSON.stringify(e))))):f("Expected `fieldsObject` arg to be an Object"):f("`fieldsObject` is required in .set()")}function M(e,t){R(t,"send",e),L&&(N("called ga('send', fieldObject);"),N("with fieldObject: ".concat(JSON.stringify(e))),N("with trackers: ".concat(JSON.stringify(t))))}function Q(e,t,n){if(e){var r=k(e);if(""!==r){var a={};if(n&&(a.title=n),R(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},a)),L){N("called ga('send', 'pageview', path);");var o="";n&&(o=" and title: ".concat(n)),N("with path: ".concat(r).concat(o))}}else f("path cannot be an empty string in .pageview()")}else f("path is required in .pageview()")}function V(e,t){if(e){var n,r="/"===(n=k(e)).substring(0,1)?n.substring(1):n;if(""!==r){var a="/modal/".concat(r);R(t,"send","pageview",a),L&&(N("called ga('send', 'pageview', path);"),N("with path: ".concat(a)))}else f("modalName cannot be an empty string or a single / in .modalview()")}else f("modalName is required in .modalview(modalName)")}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,a=e.label,o=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var i={hitType:"timing",timingCategory:G(t),timingVar:G(n),timingValue:r};a&&(i.timingLabel=G(a)),M(i,o)}else f("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,a=e.value,o=e.nonInteraction,i=e.transport,c=x(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:G(t),eventAction:G(n)};r&&(s.eventLabel=G(r)),void 0!==a&&("number"!=typeof a?f("Expected `args.value` arg to be a Number."):s.eventValue=a),void 0!==o&&("boolean"!=typeof o?f("`args.nonInteraction` must be a boolean."):s.nonInteraction=o),void 0!==i&&("string"!=typeof i?f("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&f("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){s[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){s[e]=c[e]})),M(s,l)}else f("args.category AND args.action are required in event()")}function W(e,t){var n=e.description,r=e.fatal,a={hitType:"exception"};n&&(a.exDescription=G(n)),void 0!==r&&("boolean"!=typeof r?f("`args.fatal` must be a boolean."):a.exFatal=r),M(a,t)}var H={require:function(e,t,n){if(e){var r=k(e);if(""!==r){var a=n?"".concat(n,".require"):"require";if(t){if("object"!==q(t))return void f("Expected `options` arg to be an Object");0===Object.keys(t).length&&f("Empty `options` given to .require()"),B(a,r,t),L&&N("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else B(a,r),L&&N("called ga('require', '".concat(r,"');"))}else f("`name` cannot be an empty string in .require()")}else f("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)f("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)f("Expected `action` arg to be a String.");else{var a="".concat(e,":").concat(t);n=n||null,r&&n?(B(a,r,n),L&&(N("called ga('".concat(a,"');")),N('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(B(a,n),L&&(N("called ga('".concat(a,"');")),N("with payload: ".concat(JSON.stringify(n))))):(B(a),L&&N("called ga('".concat(a,"');")))}}};function Y(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:G(e.label)},a=!1,o=setTimeout((function(){a=!0,t()}),250);r.hitCallback=function(){clearTimeout(o),a||t()},M(r,n)}else f("args.label is required in outboundLink()");else f("hitCallback function is required")}var ee=A,te={initialize:X,ga:B,set:K,send:M,pageview:Q,modalview:V,timing:Z,event:U,exception:W,plugin:H,outboundLink:Y,testModeAPI:A};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j.origTrackLink=j.trackLink,j.trackLink=Y;var ae=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:j}),oe=n("c7NW"),ie=n.n(oe);ae.initialize("UA-135975842-1");let ce=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpened:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},n.handleClick=function(){const{isOpened:e}=this.state,{title:t,track:n}=this.props;this.setState({isOpened:!e},()=>{n&&ae.event({category:"FAQ",action:`${t} ${e?"closed":"expanded"}`})})},n.render=function(){const{title:e,content:t,className:n,containerClassName:r,list:a,titleStyle:o,selectedItem:s}=this.props,{isOpened:u}=this.state,f=ie()(e);return i.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+r},i.a.createElement("button",{className:`accordion accordion__title ${u?"active":""} ${n}`,style:o,"aria-controls":f,"aria-expanded":u,onClick:()=>this.handleClick()},e),u&&i.a.createElement("div",{className:"panel",id:f},t&&i.a.createElement(c.a,{className:"col-8 push-right-1",text:t}),a&&i.a.createElement("ul",null,a.map(e=>i.a.createElement("li",{key:e.text,className:s===e.id?"selected":void 0},i.a.createElement(l.Link,{to:e.href},e.text))))))},t}(o.Component);ce.defaultProps={className:"",track:!1,containerClassName:"",initiallyOpened:!1,titleStyle:{}};t.a=ce},gcgQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("zXXn");var r=n("76ZC"),a=n.n(r),o=n("q1tI"),i=n.n(o);const c=e=>{let{text:t,className:n,heading:r,headingFontSize:o,bold:c,centered:l,noPadding:s,headingFont:u,...f}=e;const p=[];l&&p.push("centered"),c&&p.push("bold"),s&&p.push("body-text--no-padding"),u&&p.push("heading-font");return i.a.createElement("div",Object.assign({className:"body-text "+n},f),r.title&&(()=>{if(r){const e=r.level;return i.a.createElement(e,{className:"body-text__title",style:o?{fontSize:o}:{}},r.title)}return null})(),t&&"string"==typeof t?i.a.createElement("p",{className:"body-text__content "+p.join(" ")},t):t&&t.map(e=>i.a.createElement("div",{key:e,className:"body-text__content "+p.join(" ")},a()(e))))};c.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1}},jGxn:function(e,t,n){},zXXn:function(e,t,n){}}]);
//# sourceMappingURL=d2b1ca4b1069f7cfc0ac3ccd2306fbb8e76bcf35-c7dcb204a014181aec4b.js.map