System.register(["./p-0b2166d8.system.js","./p-bf078d24.system.js","./p-3985fe0e.system.js","./p-e3e2a55c.system.js"],(function(t){"use strict";var e,n,o,r,i,s;return{setters:[function(t){e=t.r;n=t.h;o=t.g},function(t){r=t.T},function(t){i=t.C},function(t){s=t.P}],execute:function(){var c=undefined&&undefined.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)if(s=t[c])i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i;return r>3&&i&&Object.defineProperty(e,n,i),i};var p=t("psk_tag",function(){function t(t){e(this,t);this.title="";this.componentCode=""}t.prototype.componentWillLoad=function(){this.componentCode=this.host.innerHTML;var t=this.host.querySelector("link");if(t){this.host.innerHTML=t.outerHTML;this.componentCode=this.componentCode.replace(t.outerHTML,"");t&&t.remove()}else{this.host.innerHTML=""}};t.prototype.componentDidLoad=function(){s.highlightAllUnder(this.host)};t.prototype.render=function(){var t=n("pre",{class:"text-center"},n("code",{class:"language-html","data-lang":"html"},this.componentCode));if(this.title.replace(/\s/g,"")===""){return n("div",null,t)}return n("psk-chapter",{title:this.title},t)};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});return t}());c([i(),r({description:"This property is the title of the psk-chapter that will to be created.",isMandatory:false,propertyType:"string"})],p.prototype,"title",void 0)}}}));