import{r as e,h as t}from"./p-bd5842d7.js";import{T as i}from"./p-adaa4b01.js";import{C as a}from"./p-92afb37f.js";import{B as o}from"./p-b496a514.js";var s=function(e,t,i,a){var o,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l};const l=["Bytes","KB","MB","GB","TB"],r=class{constructor(t){e(this,t),this.files=[],this.removeFileFromList=null}static bytesToSize(e){if(0==e)return"0 Byte";let t=parseInt(String(Math.floor(Math.log(e)/Math.log(1024))));return Math.round(e/Math.pow(1024,t))+" "+l[t]}render(){return this.files&&0!==this.files.length?this.files.map((e,i)=>{let a=null;switch(e.name.substr(e.name.lastIndexOf(".")+1)){case"pdf":a="fa-file-pdf-o";break;case"xls":a="fa-file-excel-o";break;case"doc":case"docx":a="fa-file-word-o";break;case"jpg":case"png":a="fa-file-picture-o";break;default:a="fa-file-o"}return t("button",{type:"button",class:"btn btn-primary mr-2 mt-2"},t("span",{class:`icon mr-1 fa ${a}`}),e.name,t("span",{class:"badge badge-light ml-1"},r.bytesToSize(e.size)),null!==this.removeFileFromList&&t("span",{class:"fa fa-remove fa-2x pull-right",onClick:e=>{e.preventDefault(),e.stopImmediatePropagation(),this.removeFileFromList(i)}}))}):t("h5",null,"No attachments available!")}};s([a(),o(),i({description:"This parameter holds the files that can be downloaded. They can be downloaded one by one by clicking on the desired file, or all at the same time.",specialNote:"WgFile is a custom type. Inside it, the following information can be stored:\n\t\t\tname of the file,\n\t\t\tsize of the file,\n\t\t\ttype of the file (by extension),\n\t\t\t? content of the file",isMandatory:!0,propertyType:"array of WgFile items (WgFile[])"})],r.prototype,"files",void 0),s([i({description:"If this property is given to the component, then a red X will be displayed on the right of each file card giving the possibility to remove the file (this functionality should be implemented by the programmer providing him the possibility to have custom behavior before the deletion of the file).",specialNote:"The function will receive one parameter, the index of the file in the WgFile array.",isMandatory:!1,propertyType:"Function",defaultValue:"null"})],r.prototype,"removeFileFromList",void 0);export{r as psk_attachments_list};