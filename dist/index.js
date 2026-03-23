"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(H,y){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));y.exports=A
});var p=o(function(I,h){
var O=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),f=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=q();function a(e){if(!(this instanceof a))return new a(e);if(!O(e))throw new TypeError(g('29hH0',e));return f.call(this,j,e,{env:{memory:e}}),this}S(a,f);m(a.prototype,"main",function(r,i,s,t){return this._instance.exports.stdlib_strided_dapxsumors(r,i,s,t)});m(a.prototype,"ndarray",function(r,i,s,t,d){return this._instance.exports.stdlib_strided_dapxsumors_ndarray(r,i,s,t,d)});h.exports=a
});var M=o(function(J,w){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),v=p();function n(){return this instanceof n?(v.call(this,new E({initial:0})),this):new n}z(n,v);x(n.prototype,"main",function(r,i,s,t){return this.ndarray(r,i,s,t,B(r,t))});x(n.prototype,"ndarray",function(r,i,s,t,d){var c,u;return c=T(this,[V(r,s,t,d)]),u=c[0],v.prototype.ndarray.call(this,r,i,u.ptr,u.stride,u.offset)});w.exports=n
});var b=o(function(K,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=M(),D=p(),l=new C;l.initializeSync();k(l,"Module",D.bind(null));_.exports=l
});var F=b();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
