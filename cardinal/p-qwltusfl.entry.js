import{r as e,h as t,g as o}from"./p-bd5842d7.js";import{C as r}from"./p-853e84b9.js";const s=class{constructor(t){e(this,t),this.appIsAvailable=!1,this.htmlLoader=s.__createLoader(),document.getElementsByTagName("body")[0].appendChild(this.htmlLoader)}static __createLoader(){let e="";for(let t=1;t<=12;t++)e+=`<div class="sk-circle${t} sk-circle"></div>`;let t=document.createElement("div");return t.className="app-loader",t.innerHTML=`<div class='sk-fading-circle'>${e}</div>`,t}componentWillLoad(){return new Promise((e,t)=>{this.controllerName?r.getController(this.controllerName).then(t=>{this.controller=new t(this.host),this.controller.checkApp().then(t=>{t&&(console.log(t),this.appIsAvailable=!0),e()})}).catch(e=>{t(e)}):t("A controller is mandatory!")})}componentDidLoad(){document.getElementsByTagName("body")[0].removeChild(this.htmlLoader)}render(){return t("stencil-router",null,t("stencil-route-switch",{scrollTopOffset:0},this.appIsAvailable?t("stencil-route",{url:"/",component:"psk-page-loader",exact:!0,componentProps:{pageUrl:"/pages/app.html"}}):[t("stencil-route",{url:"/",component:"psk-page-loader",exact:!0,componentProps:{pageUrl:"/pages/wizard/new.html"}}),t("stencil-route",{url:"/init",component:"psk-page-loader",exact:!0,componentProps:{pageUrl:"/pages/wizard/init.html"}}),t("stencil-route",{url:"/restore",component:"psk-page-loader",exact:!0,componentProps:{pageUrl:"/pages/wizard/restore.html"}})]))}get host(){return o(this)}};export{s as psk_app_loader};