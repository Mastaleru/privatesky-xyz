System.register(["./p-226ad382.system.js","./p-5c751093.system.js"],function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.r;r=e.h},function(e){n=e.T}],execute:function(){var p=undefined&&undefined.__decorate||function(e,t,r,n){var p=arguments.length,i=p<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)if(o=e[s])i=(p<3?o(i):p>3?o(t,r,i):o(t,r))||i;return p>3&&i&&Object.defineProperty(t,r,i),i};var i=e("psk_stepper",function(){function e(e){t(this,e);this.componentRender="psk-stepper-renderer"}e.prototype.render=function(){var e=this.componentRender;return r(e,{wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange})};return e}());p([n({description:"This property is the string that defines the psk-stepper render passed on by the psk-wizard.",isMandatory:false,propertyType:"string",defaultValue:"psk-stepper-renderer"})],i.prototype,"componentRender",void 0);p([n({description:"This parameter holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like information for the steps.(optional).",isMandatory:false,propertyType:"array for WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],i.prototype,"wizardSteps",void 0);p([n({description:"The WizardStep created by psk-wizard.",isMandatory:true,propertyType:"WizardStep"})],i.prototype,"activeStep",void 0);p([n({description:"This property is a function that modifies the way the step change is interpreted in the renderer.",isMandatory:true,propertyType:"Function"})],i.prototype,"handleStepChange",void 0)}}});