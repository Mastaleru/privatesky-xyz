System.register(["./p-0b2166d8.system.js","./p-bf078d24.system.js","./p-3985fe0e.system.js","./p-54d811c0.system.js"],(function(t){"use strict";var e,r,i,o,n,p,c,s,a,d,l;return{setters:[function(t){e=t.r;r=t.h;i=t.c;o=t.g},function(t){n=t.T;p=t.f;c=t.s;s=t.e;a=t.g},function(t){d=t.C},function(t){l=t.T}],execute:function(){var h=undefined&&undefined.__decorate||function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)if(p=t[c])n=(o<3?p(n):o>3?p(e,r,n):p(e,r))||n;return o>3&&n&&Object.defineProperty(e,r,n),n};var f=t("psk_card",function(){function t(t){e(this,t);this.title="";this.id=""}t.prototype.render=function(){var t=this.id.trim().replace(/(\s+|:+|\/+)/g,"-").toLowerCase();var e=null;if(this.title){e=r("div",{class:"card-header"},r("h5",null,this.title,t.length>0?r("psk-copy-clipboard",{id:t},"#"):null))}return r("div",{class:"card psk-card",id:t},e,r("div",{class:"card-body"},r("slot",null)))};return t}());h([d(),n({description:"This property is the title of our own version of the html card.",isMandatory:false,propertyType:"string"})],f.prototype,"title",void 0);h([n({description:"This property is the id which will be used in order to create the unique element id and for the psk-copy-clipboard component.",isMandatory:false,propertyType:"string"})],f.prototype,"id",void 0);var u=undefined&&undefined.__decorate||function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)if(p=t[c])n=(o<3?p(n):o>3?p(e,r,n):p(e,r))||n;return o>3&&n&&Object.defineProperty(e,r,n),n};var y=t("psk_chapter",function(){function t(t){e(this,t);this.title="";this.reportedToc=false;var r=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=Math.random()*16|0,r=t=="x"?e:e&3|8;return r.toString(16)}))};this.guid=r();this.chapterInfo={title:this.title,guid:this.guid,children:[]};this.sendChapter=i(this,"psk-send-chapter",5)}t.prototype.componentDidLoad=function(){if(!this.reportedToc){this.sendChapter.emit(this.chapterInfo)}};t.prototype.receivedChapter=function(t){if(t.path&&t.path[0]&&o(this)!==t.path[0]){t.stopImmediatePropagation();if(this.chapterInfo.children.length>0){var e=false;this.chapterInfo.children.forEach((function(r){if(r.guid===t.detail.guid){r.children=t.detail.children;e=true}}));if(!e){this.chapterInfo.children.push(t.detail)}}else{this.chapterInfo.children.push(t.detail)}this.sendChapter.emit(this.chapterInfo);this.reportedToc=true}};t.prototype.render=function(){return r("psk-card",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},r("slot",null))};return t}());u([d(),n({description:"This property is the title, that will be used in order to create a psk-card ",isMandatory:false,propertyType:"string"})],y.prototype,"title",void 0);u([n({description:"This property is the guid that will be created as a unique 32 characters code passed as a id for the chapter",isMandatory:false,propertyType:"string"})],y.prototype,"guid",void 0);u([l({eventName:"psk-send-chapter",description:"This event is emitted the moment a chapter with a title is created.\n\t\t\t\t\t It will create a tree of children which will pe rendered for the UI."})],y.prototype,"sendChapter",void 0);var v=undefined&&undefined.__decorate||function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)if(p=t[c])n=(o<3?p(n):o>3?p(e,r,n):p(e,r))||n;return o>3&&n&&Object.defineProperty(e,r,n),n};var g=t("psk_copy_clipboard",function(){function t(t){e(this,t);this.id=""}t.prototype._copyToClipboardHandler=function(t){try{var e=window.location.href;if(window.location.href.indexOf("?chapter=")!==-1){e=window.location.href.split("?chapter=")[0]}navigator.clipboard.writeText(e+"?chapter="+t);var r=this.element.querySelector(".tooltip");r.innerHTML=p;r.setAttribute("class","tooltip copied");c(t,s(this.element,"psk-page"))}catch(i){console.error(i)}};t.prototype._resetTooltip=function(){var t=this.element.querySelector(".tooltip");t.innerHTML=a;t.setAttribute("class","tooltip")};t.prototype._isCopySupported=function(){var t=!!document.queryCommandSupported;["copy","cut"].forEach((function(e){t=t&&!!document.queryCommandSupported(e)}));return t};t.prototype.render=function(){var t=this;var e=this.id.trim().replace(/( |:|\/|\.)/g,"-").toLowerCase();if(e.length===0||!this._isCopySupported()){return}return r("div",{id:"tooltip",onClick:function(r){r.stopImmediatePropagation();t._copyToClipboardHandler(e)},onMouseOut:function(){t._resetTooltip()}},r("a",{class:"mark",href:"#"+e,onClick:function(t){t.preventDefault()}},r("slot",null)),r("span",{class:"tooltip"},a))};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});return t}());v([d(),n({description:"This property is the id of the textzone that will be copied to the clipboard.",isMandatory:false,propertyType:"string"})],g.prototype,"id",void 0)}}}));