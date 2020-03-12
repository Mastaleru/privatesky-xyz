import{r as t,h as e,g as o}from"./p-bd5842d7.js";import"./p-18c69f0f.js";import{T as n}from"./p-7aa21657.js";import{C as s}from"./p-92afb37f.js";import{C as r}from"./p-853e84b9.js";var i=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};const a=class{constructor(e){t(this,e),this.formActions=""}componentWillLoad(){if("string"==typeof this.controllerName)return new Promise((t,e)=>{r.getController(this.controllerName).then(e=>{this.controller=new e(this._host),t()}).catch(e)})}render(){return e("div",{class:"container"},e("form",null,e("slot",null),this._createFormActions(this.formActions)))}_createFormActions(t){if(0===t.trim().length)return null;let o=[];return o=t.split(",").map(t=>e("psk-button",{"button-class":t,"event-name":t,label:t})),e("div",{id:"actions",class:"container-fluid"},o)}get _host(){return o(this)}};i([s()],a.prototype,"controller",void 0),i([n({description:["This attributes is setting the controller of the form. The default value for this attribute is FormController, a default controller for handling form submitions created inside Cardinal.Js.",'Information about creating a controller can be found inside the documentation: <psk-link page="Cardinal/controllers">Controllers Documentation</psk-link>',"All the "],isMandatory:!1,propertyType:"string",defaultValue:"FormController",specialNote:"If the controller name is not provided, then the default FormController is assumed."})],a.prototype,"controllerName",void 0),i([n({description:['By defining this attribute, the user is able to control the behaviour of the form, so by definition, this attribute holds the possible actions inside the form, the defined actions should be sepparated by comma(",").',"Also, as a recommendation, the values should be provided using lowercases, and if there are more words inside an action, to be written using dash symbol(-)","Example of form actions: submit, reset-form, validate-form, cancel",'Using all these actions, the component will generate a <psk-link page="web-components/psk-button">psk-button</psk-link>.','If this attribute is not defined, you can also add <psk-link page="web-components/psk-button">psk-button</psk-link> components anywhere in the form. The rule is the same, the event-name attribute assigned to the psk-button component needs to be registered in the form\'s controller.'],isMandatory:!1,propertyType:"string values sepparated by comma (,)",defaultValue:"null",specialNote:["If this attribute has no value, then the form will have no actions."]})],a.prototype,"formActions",void 0);export{a as psk_form};