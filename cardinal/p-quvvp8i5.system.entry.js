System.register(["./p-3369a689.system.js","./p-d7fc1715.system.js","./p-fa4e7901.system.js","./p-44df65c4.system.js","./p-61ba0e70.system.js","./p-030976a5.system.js"],(function(e){"use strict";var t,r,n,o,i;return{setters:[function(e){t=e.r;r=e.h},function(){},function(){},function(e){n=e.T},function(e){o=e.C},function(e){i=e.B}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var s=e("psk_page_loader",function(){function e(e){t(this,e);this.errorLoadingPage=false;this.type="div"}e.prototype.componentWillLoad=function(){var e=this;return new Promise((function(t){e.getPageContent(e.pageUrl,e.getPageHandler(t))}))};e.prototype.watchHandler=function(e){this.getPageContent(e,this.getPageHandler())};e.prototype.getPageHandler=function(e){var t=this;return function(r,n){if(r){t.errorLoadingPage=true}else{t.errorLoadingPage=false;t.pageContent=n}if(typeof e==="function"){e()}}};e.prototype.getPageContent=function(e,t){var r=this;var n=new XMLHttpRequest;n.open("GET",e);n.onload=function(){if(n.status!=200){t(new Error("Some error occurred"))}else{t(null,n.responseText)}};n.onerror=function(){r.errorLoadingPage=true};n.send()};e.prototype.render=function(){var e=null;if(this.type&&this.type.toLowerCase()==="iframe"){e=r("iframe",{class:"iframe_page_content",frameborder:"0",style:{overflow:"hidden",height:"100%",width:"100%"},src:"data:text/html;charset=utf-8, "+escape(this.pageContent)})}else{e=r("div",{class:"page_content",innerHTML:this.pageContent})}return this.errorLoadingPage?r("h4",null,"Page "+this.pageUrl+" could not be loaded!"):e};Object.defineProperty(e,"watchers",{get:function(){return{pageUrl:["watchHandler"]}},enumerable:true,configurable:true});return e}());a([i(),o()],s.prototype,"pageContent",void 0);a([n({description:["This property is the url for the page that needs to be loaded.","When this component loads a get http request will be issued and the cotent of that url will be rendered if it can be accessed."],isMandatory:true,propertyType:"string"})],s.prototype,"pageUrl",void 0);a([n({description:["This property indicates if the page should use an iframe or div to render the content retrieved using pageSrc property.","Accepted values: iframe, div","Default value:div"],isMandatory:false,propertyType:"string"})],s.prototype,"type",void 0)}}}));