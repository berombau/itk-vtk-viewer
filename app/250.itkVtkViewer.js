"use strict";(self.webpackChunkitk_vtk_viewer=self.webpackChunkitk_vtk_viewer||[]).push([[250],{474:(e,t,r)=>{var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._messageId=1,r._messages=new Map,r._worker=e,r._worker.onmessage=r._onMessage.bind(r),r._id=Math.ceil(1e7*Math.random()),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"terminate",value:function(){this._worker.terminate()}},{key:"isFree",value:function(){return 0===this._messages.size}},{key:"jobsLength",value:function(){return this._messages.size}},{key:"exec",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments[3];return new Promise((function(i,a){var s=r._messageId++;r._messages.set(s,[i,a,o]),r._worker.postMessage([s,t,e],n||[])}))}},{key:"postMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];return new Promise((function(o,i){var a=t._messageId++;t._messages.set(a,[o,i,n]),t._worker.postMessage([a,e],r||[])}))}},{key:"emit",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this._worker.postMessage({eventName:e,args:r})}},{key:"_onMessage",value:function(e){var r;if(!Array.isArray(e.data)&&e.data.eventName)return(r=i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"emit",this)).call.apply(r,[this,e.data.eventName].concat(a(e.data.args)));var n,o=(n=e.data,Array.isArray(n)?n:Array.from(n)),s=o[0],u=o.slice(1);if(1===s)this._onEvent.apply(this,a(u));else{if(0!==s)throw new Error("Wrong message type '"+s+"'");this._onResult.apply(this,a(u))}}},{key:"_onResult",value:function(e,t,r){var o=this._messages.get(e),i=n(o,2),a=i[0],s=i[1];return this._messages.delete(e),1===t?a(r):s(r)}},{key:"_onEvent",value:function(e,t,r){var o=this._messages.get(e),i=n(o,3)[2];i&&i(t,r)}}]),t}(r(6603));e.exports=s},6579:(e,t,r)=>{var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=r(6603),c="main",f=function e(t,r){s(this,e),this.payload=t,this.transferable=r};e.exports=function(e){var t,r,y,p=(y=e,(r=c)in(t={})?Object.defineProperty(t,r,{value:y,enumerable:!0,configurable:!0,writable:!0}):t.main=y,t),h=self.postMessage.bind(self),v=new(function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"emit",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return h({eventName:e,args:r}),this}},{key:"emitLocally",value:function(e){for(var r,n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];(r=o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"emit",this)).call.apply(r,[this,e].concat(i))}},{key:"operation",value:function(e,t){return p[e]=t,this}}]),t}(l)),d=function(e,t,r){var n,o=function(t){t&&t instanceof f?m(e,1,t.payload,t.transferable):m(e,1,t)},a=function(t){m(e,0,{message:t.message,stack:t.stack})};try{var s=b(e,t,r);"object"===(void 0===(n=s)?"undefined":i(n))&&"function"==typeof n.then&&"function"==typeof n.catch?s.then(o).catch(a):o(s)}catch(e){a(e)}},b=function(e,t,r){var n=p[r||c];if(!n)throw new Error("Not found handler for this request");return n(t,g.bind(null,e))},m=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];h([0,e,t,r],n)},g=function(e,t,r){if(!t)throw new Error("eventName is required");if("string"!=typeof t)throw new Error("eventName should be string");h([1,e,t,r])};return self.addEventListener("message",(function(e){var t=e.data;Array.isArray(t)?d.apply(void 0,a(t)):t&&t.eventName&&v.emitLocally.apply(v,[t.eventName].concat(a(t.args)))})),v},e.exports.TransferableResponse=f},6603:e=>{var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,"__listeners",{value:{},enumerable:!1,writable:!1})}return t(e,[{key:"emit",value:function(e){if(!this.__listeners[e])return this;for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=!0,i=!1,a=void 0;try{for(var s,u=this.__listeners[e][Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var l=s.value;l.apply(void 0,r)}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}return this}},{key:"once",value:function(e,t){var r=this;return this.on(e,(function n(){r.off(e,n),t.apply(void 0,arguments)}))}},{key:"on",value:function(e,t){return this.__listeners[e]||(this.__listeners[e]=[]),this.__listeners[e].push(t),this}},{key:"off",value:function(e,t){return this.__listeners[e]=t?this.__listeners[e].filter((function(e){return e!==t})):[],this}}]),e}();e.exports=r},8211:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:()=>n})},5754:(e,t,r)=>{function n(e){if(Array.isArray(e))return e}r.d(t,{Z:()=>n})},3218:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8211);function o(e){if(Array.isArray(e))return(0,n.Z)(e)}},4390:(e,t,r)=>{function n(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,u,"next",e)}function u(e){n(a,o,i,s,u,"throw",e)}s(void 0)}))}}r.d(t,{Z:()=>o})},8270:(e,t,r)=>{function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:()=>n})},7012:(e,t,r)=>{function n(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:()=>n})},5683:(e,t,r)=>{function n(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}r.d(t,{Z:()=>n})},514:(e,t,r)=>{function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:()=>n})},4773:(e,t,r)=>{function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:()=>n})},4641:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5754),o=r(5683),i=r(1883),a=r(514);function s(e,t){return(0,n.Z)(e)||(0,o.Z)(e,t)||(0,i.Z)(e,t)||(0,a.Z)()}},3486:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(3218),o=r(7012),i=r(1883),a=r(4773);function s(e){return(0,n.Z)(e)||(0,o.Z)(e)||(0,i.Z)(e)||(0,a.Z)()}},1311:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})},1883:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8211);function o(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},5334:(e,t,r)=>{r.d(t,{Z:()=>n});const n={Float32:"float32",Float64:"float64",SpacePrecisionType:"float64"}},9377:(e,t,r)=>{r.d(t,{Z:()=>n});const n={Int8:"int8",UInt8:"uint8",Int16:"int16",UInt16:"uint16",Int32:"int32",UInt32:"uint32",Int64:"int64",UInt64:"uint64",SizeValueType:"uint64",IdentifierType:"uint64",IndexValueType:"int64",OffsetValueType:"int64"}},16:(e,t,r)=>{r.d(t,{Z:()=>n});const n=class{constructor(e,t){this.fcn=t,this.workerQueue=new Array(e),this.workerQueue.fill(null),this.runInfo=[]}runTasks(e,t=null){const r={taskQueue:[],results:[],addingTasks:!1,postponed:!1,runningWorkers:0,index:0,completedTasks:0,progressCallback:t,canceled:!1};return this.runInfo.push(r),r.index=this.runInfo.length-1,{promise:new Promise(((t,n)=>{r.resolve=t,r.reject=n,r.results=new Array(e.length),r.completedTasks=0,r.addingTasks=!0,e.forEach(((e,t)=>{this.addTask(r.index,t,e)})),r.addingTasks=!1})),runId:r.index}}terminateWorkers(){for(let e=0;e<this.workerQueue.length;e++){const t=this.workerQueue[e];null!=t&&t.terminate(),this.workerQueue[e]=null}}cancel(e){const t=this.runInfo[e];null!=t&&(t.canceled=!0)}addTask(e,t,r){const n=this.runInfo[e];if(!0===(null==n?void 0:n.canceled))return n.reject("Remaining tasks canceled"),void this.clearTask(n.index);if(this.workerQueue.length>0){const o=this.workerQueue.pop();n.runningWorkers++,this.fcn(o,...r).then((r=>{var{webWorker:o}=r,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(r,["webWorker"]);if(this.workerQueue.push(o),null!==this.runInfo[e])if(n.runningWorkers--,n.results[t]=i,n.completedTasks++,null!=n.progressCallback&&n.progressCallback(n.completedTasks,n.results.length),n.taskQueue.length>0){const t=n.taskQueue.shift();this.addTask(e,t[0],t[1])}else if(!n.addingTasks&&0===n.runningWorkers){const e=n.results;n.resolve(e),this.clearTask(n.index)}})).catch((e=>{n.reject(e),this.clearTask(n.index)}))}else 0!==n.runningWorkers||n.postponed?n.taskQueue.push([t,r]):(n.postponed=!0,setTimeout((()=>{n.postponed=!1,this.addTask(n.index,t,r)}),50))}clearTask(e){this.runInfo[e].results=[],this.runInfo[e].taskQueue=[],this.runInfo[e].progressCallback=null,this.runInfo[e].canceled=null,this.runInfo[e].reject=()=>{},this.runInfo[e].resolve=()=>{}}}}}]);
//# sourceMappingURL=250.itkVtkViewer.js.map