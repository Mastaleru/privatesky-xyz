System.register(["./p-226ad382.system.js","./p-5c751093.system.js","./p-7db317d0.system.js","./p-c055737c.system.js"],function(e){"use strict";var t,o,i,n,a,r;return{setters:[function(e){t=e.r;o=e.h;i=e.g},function(e){n=e.T},function(e){a=e.C},function(e){r=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,o,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)if(r=e[s])a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a;return n>3&&a&&Object.defineProperty(t,o,a),a};var l=e("psk_radio_group",function(){function e(e){t(this,e);this.options=null;this.label=null;this.value=null;this.name=null;this.required=false;this.invalid=true}e.prototype.onChangeRadioHandler=function(e){var t=this;e.preventDefault();e.stopImmediatePropagation();if(!e.detail||!e.detail.value){return}var o=this._host.querySelectorAll("psk-radio");o.forEach(function(o){var i=o.getElementsByTagName("input")[0];if(i.value===e.detail.value){t.value=e.detail.value;t.__updateModel.call(t);i.checked=true}else{i.checked=false}})};e.prototype.render=function(){return o("div",{class:"form-group"},o("psk-label",{for:this.name,label:this.label}),o("div",{id:"psk-radio-group",class:"form-group"},this.options&&this.options.map(function(e){var t=e.name?e.name:e.label&&e.label.replace(/\s/g,"").toLowerCase();return o("psk-radio",Object.assign({},e,{name:t}))}),o("slot",null)))};e.prototype.__updateModel=function(){if(this["changeModel"]){this["changeModel"].call(this,"value",this.value)}else{console.warn("[psk-radio-group] Function named -=changeModel=- is not defined!")}};Object.defineProperty(e.prototype,"_host",{get:function(){return i(this)},enumerable:true,configurable:true});return e}());s([a(),r()],l.prototype,"options",void 0);s([n({description:['By filling out this property, the component will display above the group, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],l.prototype,"label",void 0);s([n({description:["Specifies the selected value of a psk-radio component inside the group.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],l.prototype,"value",void 0);s([n({description:["Specifies the name of a psk-radio-group component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],l.prototype,"name",void 0);s([n({description:["Specifies that a psk-radio inside the group must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],l.prototype,"required",void 0);s([n({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean",specialNote:"For the moment, there is no visual implelentation for this attribute, but it will be in a further iteration."})],l.prototype,"invalid",void 0)}}});