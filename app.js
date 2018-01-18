// https://d3js.org Version 4.9.1. Copyright 2017 Mike Bostock.
(function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})})(this,function(t){"use strict";function n(t){return function(n,e){return js(t(n),e)}}function e(t,n){return[t,n]}function r(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=sf?10:o>=ff?5:o>=lf?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=sf?10:o>=ff?5:o>=lf?2:1)}function i(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=sf?i*=10:o>=ff?i*=5:o>=lf&&(i*=2),n<t?-i:i}function o(t){return t.length}function u(t){return"translate("+(t+.5)+",0)"}function a(t){return"translate(0,"+(t+.5)+")"}function c(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return t(e)+n}}function s(){return!this.__axis}function f(t,n){function e(e){var u=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,a=null==o?n.tickFormat?n.tickFormat.apply(n,r):Cf:o,_=Math.max(f,0)+h,y=n.range(),g=y[0]+.5,m=y[y.length-1]+.5,x=(n.bandwidth?c:Cf)(n.copy()),b=e.selection?e.selection():e,w=b.selectAll(".domain").data([null]),M=b.selectAll(".tick").data(u,n).order(),T=M.exit(),k=M.enter().append("g").attr("class","tick"),N=M.select("line"),S=M.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),M=M.merge(k),N=N.merge(k.append("line").attr("stroke","#000").attr(d+"2",p*f)),S=S.merge(k.append("text").attr("fill","#000").attr(d,p*_).attr("dy",t===zf?"0em":t===Lf?"0.71em":"0.32em")),e!==b&&(w=w.transition(e),M=M.transition(e),N=N.transition(e),S=S.transition(e),T=T.transition(e).attr("opacity",qf).attr("transform",function(t){return isFinite(t=x(t))?v(t):this.getAttribute("transform")}),k.attr("opacity",qf).attr("transform",function(t){var n=this.parentNode.__axis;return v(n&&isFinite(n=n(t))?n:x(t))})),T.remove(),w.attr("d",t===Rf||t==Pf?"M"+p*l+","+g+"H0.5V"+m+"H"+p*l:"M"+g+","+p*l+"V0.5H"+m+"V"+p*l),M.attr("opacity",1).attr("transform",function(t){return v(x(t))}),N.attr(d+"2",p*f),S.attr(d,p*_).text(a),b.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Pf?"start":t===Rf?"end":"middle"),b.each(function(){this.__axis=x})}var r=[],i=null,o=null,f=6,l=6,h=3,p=t===zf||t===Rf?-1:1,d=t===Rf||t===Pf?"x":"y",v=t===zf||t===Lf?u:a;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=Af.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:Af.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:Af.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(o=t,e):o},e.tickSize=function(t){return arguments.length?(f=l=+t,e):f},e.tickSizeInner=function(t){return arguments.length?(f=+t,e):f},e.tickSizeOuter=function(t){return arguments.length?(l=+t,e):l},e.tickPadding=function(t){return arguments.length?(h=+t,e):h},e}function l(t){return f(zf,t)}function h(t){return f(Pf,t)}function p(t){return f(Lf,t)}function d(t){return f(Rf,t)}function v(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new _(r)}function _(t){this._=t}function y(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function g(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function m(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Uf,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function x(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Df&&n.documentElement.namespaceURI===Df?n.createElement(t):n.createElementNS(e,t)}}function b(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function w(){return new M}function M(){this._="@"+(++Yf).toString(36)}function T(t,n,e){return t=k(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function k(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function N(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function S(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function E(t,n,e){var r=$f.hasOwnProperty(t.type)?T:k;return function(i,o,u){var a,c=this.__on,s=r(n,o,u);if(c)for(var f=0,l=c.length;f<l;++f)if((a=c[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(a):this.__on=[a]}}function A(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function C(){}function z(){return[]}function P(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function L(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new P(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function R(t,n,e,r,i,o,u){var a,c,s,f={},l=n.length,h=o.length,p=new Array(l);for(a=0;a<l;++a)(c=n[a])&&(p[a]=s=ol+u.call(c,c.__data__,a,n),s in f?i[a]=c:f[s]=c);for(a=0;a<h;++a)s=ol+u.call(t,o[a],a,o),(c=f[s])?(r[a]=c,c.__data__=o[a],f[s]=null):e[a]=new P(t,o[a]);for(a=0;a<l;++a)(c=n[a])&&f[p[a]]===c&&(i[a]=c)}function q(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function U(t){return function(){this.removeAttribute(t)}}function D(t){return function(){this.removeAttributeNS(t.space,t.local)}}function O(t,n){return function(){this.setAttribute(t,n)}}function F(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function I(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Y(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function B(t){return function(){this.style.removeProperty(t)}}function H(t,n,e){return function(){this.style.setProperty(t,n,e)}}function j(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function X(t,n){return t.style.getPropertyValue(n)||gl(t).getComputedStyle(t,null).getPropertyValue(n)}function $(t){return function(){delete this[t]}}function V(t,n){return function(){this[t]=n}}function W(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function Z(t){return t.trim().split(/^|\s+/)}function G(t){return t.classList||new J(t)}function J(t){this._node=t,this._names=Z(t.getAttribute("class")||"")}function Q(t,n){for(var e=G(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function K(t,n){for(var e=G(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function tt(t){return function(){Q(this,t)}}function nt(t){return function(){K(this,t)}}function et(t,n){return function(){(n.apply(this,arguments)?Q:K)(this,t)}}function rt(){this.textContent=""}function it(t){return function(){this.textContent=t}}function ot(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function ut(){this.innerHTML=""}function at(t){return function(){this.innerHTML=t}}function ct(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function st(){this.nextSibling&&this.parentNode.appendChild(this)}function ft(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function lt(){return null}function ht(){var t=this.parentNode;t&&t.removeChild(this)}function pt(t,n,e){var r=gl(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function dt(t,n){return function(){return pt(this,t,n)}}function vt(t,n){return function(){return pt(this,t,n.apply(this,arguments))}}function _t(t,n){this._groups=t,this._parents=n}function yt(){return new _t([[document.documentElement]],zl)}function gt(){t.event.stopImmediatePropagation()}function mt(t,n){var e=t.document.documentElement,r=Pl(t).on("dragstart.drag",null);n&&(r.on("click.drag",Ul,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function xt(t,n,e,r,i,o,u,a,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=u,this.dx=a,this.dy=c,this._=s}function bt(){return!t.event.button}function wt(){return this.parentNode}function Mt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Tt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function kt(){}function Nt(t){var n;return t=(t+"").trim().toLowerCase(),(n=jl.exec(t))?(n=parseInt(n[1],16),new zt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Xl.exec(t))?St(parseInt(n[1],16)):(n=$l.exec(t))?new zt(n[1],n[2],n[3],1):(n=Vl.exec(t))?new zt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Wl.exec(t))?Et(n[1],n[2],n[3],n[4]):(n=Zl.exec(t))?Et(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Gl.exec(t))?Pt(n[1],n[2]/100,n[3]/100,1):(n=Jl.exec(t))?Pt(n[1],n[2]/100,n[3]/100,n[4]):Ql.hasOwnProperty(t)?St(Ql[t]):"transparent"===t?new zt(NaN,NaN,NaN,0):null}function St(t){return new zt(t>>16&255,t>>8&255,255&t,1)}function Et(t,n,e,r){return r<=0&&(t=n=e=NaN),new zt(t,n,e,r)}function At(t){return t instanceof kt||(t=Nt(t)),t?(t=t.rgb(),new zt(t.r,t.g,t.b,t.opacity)):new zt}function Ct(t,n,e,r){return 1===arguments.length?At(t):new zt(t,n,e,null==r?1:r)}function zt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Pt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new qt(t,n,e,r)}function Lt(t){if(t instanceof qt)return new qt(t.h,t.s,t.l,t.opacity);if(t instanceof kt||(t=Nt(t)),!t)return new qt;if(t instanceof qt)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new qt(u,a,c,t.opacity)}function Rt(t,n,e,r){return 1===arguments.length?Lt(t):new qt(t,n,e,null==r?1:r)}function qt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Ut(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Dt(t){if(t instanceof Ft)return new Ft(t.l,t.a,t.b,t.opacity);if(t instanceof $t){var n=t.h*Kl;return new Ft(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof zt||(t=At(t));var e=Ht(t.r),r=Ht(t.g),i=Ht(t.b),o=It((.4124564*e+.3575761*r+.1804375*i)/nh),u=It((.2126729*e+.7151522*r+.072175*i)/eh);return new Ft(116*u-16,500*(o-u),200*(u-It((.0193339*e+.119192*r+.9503041*i)/rh)),t.opacity)}function Ot(t,n,e,r){return 1===arguments.length?Dt(t):new Ft(t,n,e,null==r?1:r)}function Ft(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function It(t){return t>ah?Math.pow(t,1/3):t/uh+ih}function Yt(t){return t>oh?t*t*t:uh*(t-ih)}function Bt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ht(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function jt(t){if(t instanceof $t)return new $t(t.h,t.c,t.l,t.opacity);t instanceof Ft||(t=Dt(t));var n=Math.atan2(t.b,t.a)*th;return new $t(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xt(t,n,e,r){return 1===arguments.length?jt(t):new $t(t,n,e,null==r?1:r)}function $t(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Vt(t){if(t instanceof Zt)return new Zt(t.h,t.s,t.l,t.opacity);t instanceof zt||(t=At(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(vh*r+ph*n-dh*e)/(vh+ph-dh),o=r-i,u=(hh*(e-i)-fh*o)/lh,a=Math.sqrt(u*u+o*o)/(hh*i*(1-i)),c=a?Math.atan2(u,o)*th-120:NaN;return new Zt(c<0?c+360:c,a,i,t.opacity)}function Wt(t,n,e,r){return 1===arguments.length?Vt(t):new Zt(t,n,e,null==r?1:r)}function Zt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Gt(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}function Jt(t,n){return function(e){return t+e*n}}function Qt(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Kt(t,n){var e=n-t;return e?Jt(t,e>180||e<-180?e-360*Math.round(e/360):e):Th(isNaN(t)?n:t)}function tn(t){return 1==(t=+t)?nn:function(n,e){return e-n?Qt(n,e,t):Th(isNaN(n)?e:n)}}function nn(t,n){var e=n-t;return e?Jt(t,e):Th(isNaN(t)?n:t)}function en(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(e=0;e<i;++e)r=Ct(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0;return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}function rn(t){return function(){return t}}function on(t){return function(n){return t(n)+""}}function un(t){return"none"===t?Oh:(_h||(_h=document.createElement("DIV"),yh=document.documentElement,gh=document.defaultView),_h.style.transform=t,t=gh.getComputedStyle(yh.appendChild(_h),null).getPropertyValue("transform"),yh.removeChild(_h),t=t.slice(7,-1).split(","),Fh(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function an(t){return null==t?Oh:(mh||(mh=document.createElementNS("http://www.w3.org/2000/svg","g")),mh.setAttribute("transform",t),(t=mh.transform.baseVal.consolidate())?(t=t.matrix,Fh(t.a,t.b,t.c,t.d,t.e,t.f)):Oh)}function cn(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function o(t,r,i,o,u,a){if(t!==i||r!==o){var c=u.push("translate(",null,n,null,e);a.push({i:c-4,x:Ch(t,i)},{i:c-2,x:Ch(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}function u(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:Ch(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function a(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:Ch(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function c(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:Ch(t,e)},{i:a-2,x:Ch(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),u(n.rotate,e.rotate,r,i),a(n.skewX,e.skewX,r,i),c(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,o=i.length;++e<o;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function sn(t){return((t=Math.exp(t))+1/t)/2}function fn(t){return((t=Math.exp(t))-1/t)/2}function ln(t){return((t=Math.exp(2*t))-1)/(t+1)}function hn(t){return function(n,e){var r=t((n=Rt(n)).h,(e=Rt(e)).h),i=nn(n.s,e.s),o=nn(n.l,e.l),u=nn(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function pn(t,n){var e=nn((t=Ot(t)).l,(n=Ot(n)).l),r=nn(t.a,n.a),i=nn(t.b,n.b),o=nn(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function dn(t){return function(n,e){var r=t((n=Xt(n)).h,(e=Xt(e)).h),i=nn(n.c,e.c),o=nn(n.l,e.l),u=nn(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function vn(t){return function n(e){function r(n,r){var i=t((n=Wt(n)).h,(r=Wt(r)).h),o=nn(n.s,r.s),u=nn(n.l,r.l),a=nn(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=u(Math.pow(t,e)),n.opacity=a(t),n+""}}return e=+e,r.gamma=n,r}(1)}function _n(){return ep||(op(yn),ep=ip.now()+rp)}function yn(){ep=0}function gn(){this._call=this._time=this._next=null}function mn(t,n,e){var r=new gn;return r.restart(t,n,e),r}function xn(){_n(),++Jh;for(var t,n=xh;n;)(t=ep-n._time)>=0&&n._call.call(null,t),n=n._next;--Jh}function bn(){ep=(np=ip.now())+rp,Jh=Qh=0;try{xn()}finally{Jh=0,Mn(),ep=0}}function wn(){var t=ip.now(),n=t-np;n>tp&&(rp-=n,np=t)}function Mn(){for(var t,n,e=xh,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:xh=n);bh=t,Tn(r)}function Tn(t){if(!Jh){Qh&&(Qh=clearTimeout(Qh));var n=t-ep;n>24?(t<1/0&&(Qh=setTimeout(bn,n)),Kh&&(Kh=clearInterval(Kh))):(Kh||(np=ep,Kh=setInterval(wn,tp)),Jh=1,op(bn))}}function kn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>fp)throw new Error("too late");return e}function Nn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>hp)throw new Error("too late");return e}function Sn(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function En(t,n,e){function r(t){e.state=lp,e.timer.restart(i,e.delay,e.time),e.delay<=t&&i(t-e.delay)}function i(r){var s,f,l,h;if(e.state!==lp)return u();for(s in c)if(h=c[s],h.name===e.name){if(h.state===pp)return up(i);h.state===dp?(h.state=_p,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete c[s]):+s<n&&(h.state=_p,h.timer.stop(),delete c[s])}if(up(function(){e.state===pp&&(e.state=dp,e.timer.restart(o,e.delay,e.time),o(r))}),e.state=hp,e.on.call("start",t,t.__data__,e.index,e.group),e.state===hp){for(e.state=pp,a=new Array(l=e.tween.length),s=0,f=-1;s<l;++s)(h=e.tween[s].value.call(t,t.__data__,e.index,e.group))&&(a[++f]=h);a.length=f+1}}function o(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=vp,1),i=-1,o=a.length;++i<o;)a[i].call(null,r);e.state===vp&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=_p,e.timer.stop(),delete c[n];for(var r in c)return;delete t.__transition}var a,c=t.__transition;c[n]=e,e.timer=mn(r,0,e.time)}function An(t,n){var e,r;return function(){var i=Nn(this,t),o=i.tween;if(o!==e){r=e=o;for(var u=0,a=r.length;u<a;++u)if(r[u].name===n){r=r.slice(),r.splice(u,1);break}}i.tween=r}}function Cn(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Nn(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},c=0,s=i.length;c<s;++c)if(i[c].name===n){i[c]=a;break}c===s&&i.push(a)}o.tween=i}}function zn(t,n,e){var r=t._id;return t.each(function(){var t=Nn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Sn(t,r).value[n]}}function Pn(t){return function(){this.removeAttribute(t)}}function Ln(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Rn(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}}function qn(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}function Un(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttribute(t):(u=this.getAttribute(t),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function Dn(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttributeNS(t.space,t.local):(u=this.getAttributeNS(t.space,t.local),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function On(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function Fn(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function In(t,n){return function(){kn(this,t).delay=+n.apply(this,arguments)}}function Yn(t,n){return n=+n,function(){kn(this,t).delay=n}}function Bn(t,n){return function(){Nn(this,t).duration=+n.apply(this,arguments)}}function Hn(t,n){return n=+n,function(){Nn(this,t).duration=n}}function jn(t,n){if("function"!=typeof n)throw new Error;return function(){Nn(this,t).ease=n}}function Xn(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function $n(t,n,e){var r,i,o=Xn(n)?kn:Nn;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}function Vn(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function Wn(t,n){var e,r,i;return function(){var o=X(this,t),u=(this.style.removeProperty(t),X(this,t));return o===u?null:o===e&&u===r?i:i=n(e=o,r=u)}}function Zn(t){return function(){this.style.removeProperty(t)}}function Gn(t,n,e){var r,i;return function(){var o=X(this,t);return o===e?null:o===r?i:i=n(r=o,e)}}function Jn(t,n,e){var r,i,o;return function(){var u=X(this,t),a=e(this);return null==a&&(this.style.removeProperty(t),a=X(this,t)),u===a?null:u===r&&a===i?o:o=n(r=u,i=a)}}function Qn(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function Kn(t){return function(){this.textContent=t}}function te(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function ne(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function ee(t){return yt().transition(t)}function re(){return++Fp}function ie(t){return+t}function oe(t){return t*t}function ue(t){return t*(2-t)}function ae(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function ce(t){return t*t*t}function se(t){return--t*t*t+1}function fe(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function le(t){return 1-Math.cos(t*Xp)}function he(t){return Math.sin(t*Xp)}function pe(t){return(1-Math.cos(jp*t))/2}function de(t){return Math.pow(2,10*t-10)}function ve(t){return 1-Math.pow(2,-10*t)}function _e(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function ye(t){return 1-Math.sqrt(1-t*t)}function ge(t){return Math.sqrt(1- --t*t)}function me(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function xe(t){return 1-be(1-t)}function be(t){return(t=+t)<$p?nd*t*t:t<Wp?nd*(t-=Vp)*t+Zp:t<Jp?nd*(t-=Gp)*t+Qp:nd*(t-=Kp)*t+td}function we(t){return((t*=2)<=1?1-be(1-t):be(t-1)+1)/2}function Me(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return sd.time=_n(),sd;return e}function Te(){t.event.stopImmediatePropagation()}function ke(t){return{type:t}}function Ne(){return!t.event.button}function Se(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Ee(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Ae(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Ce(t){var n=t.__brush;return n?n.dim.output(n.selection):null}function ze(){return Le(xd)}function Pe(){return Le(bd)}function Le(n){function e(t){var e=t.property("__brush",a).selectAll(".overlay").data([ke("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Md.overlay).merge(e).each(function(){var t=Ee(this).extent;Pl(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([ke("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Md.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Md[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",u)}function r(){var t=Pl(this),n=Ee(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function u(){function e(){var t=Gf(T);!U||w||M||(Math.abs(t[0]-O[0])>Math.abs(t[1]-O[1])?M=!0:w=!0),O=t,b=!0,vd(),o()}function o(){var t;switch(m=O[0]-D[0],x=O[1]-D[1],N){case yd:case _d:S&&(m=Math.max(P-l,Math.min(R-v,m)),h=l+m,_=v+m),E&&(x=Math.max(L-p,Math.min(q-y,x)),d=p+x,g=y+x);break;case gd:S<0?(m=Math.max(P-l,Math.min(R-l,m)),h=l+m,_=v):S>0&&(m=Math.max(P-v,Math.min(R-v,m)),h=l,_=v+m),E<0?(x=Math.max(L-p,Math.min(q-p,x)),d=p+x,g=y):E>0&&(x=Math.max(L-y,Math.min(q-y,x)),d=p,g=y+x);break;case md:S&&(h=Math.max(P,Math.min(R,l-m*S)),_=Math.max(P,Math.min(R,v+m*S))),E&&(d=Math.max(L,Math.min(q,p-x*E)),g=Math.max(L,Math.min(q,y+x*E)))}_<h&&(S*=-1,t=l,l=v,v=t,t=h,h=_,_=t,k in Td&&Y.attr("cursor",Md[k=Td[k]])),g<d&&(E*=-1,t=p,p=y,y=t,t=d,d=g,g=t,k in kd&&Y.attr("cursor",Md[k=kd[k]])),A.selection&&(z=A.selection),w&&(h=z[0][0],_=z[1][0]),M&&(d=z[0][1],g=z[1][1]),z[0][0]===h&&z[0][1]===d&&z[1][0]===_&&z[1][1]===g||(A.selection=[[h,d],[_,g]],r.call(T),F.brush())}function u(){if(Te(),t.event.touches){if(t.event.touches.length)return;c&&clearTimeout(c),c=setTimeout(function(){c=null},500),I.on("touchmove.brush touchend.brush touchcancel.brush",null)}else mt(t.event.view,b),B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);I.attr("pointer-events","all"),Y.attr("cursor",Md.overlay),A.selection&&(z=A.selection),Ae(z)&&(A.selection=null,r.call(T)),F.end()}function a(){switch(t.event.keyCode){case 16:U=S&&E;break;case 18:N===gd&&(S&&(v=_-m*S,l=h+m*S),E&&(y=g-x*E,p=d+x*E),N=md,o());break;case 32:N!==gd&&N!==md||(S<0?v=_-m:S>0&&(l=h-m),E<0?y=g-x:E>0&&(p=d-x),N=yd,Y.attr("cursor",Md.selection),o());break;default:return}vd()}function s(){switch(t.event.keyCode){case 16:U&&(w=M=U=!1,o());break;case 18:N===md&&(S<0?v=_:S>0&&(l=h),E<0?y=g:E>0&&(p=d),N=gd,o());break;case 32:N===yd&&(t.event.altKey?(S&&(v=_-m*S,l=h+m*S),E&&(y=g-x*E,p=d+x*E),N=md):(S<0?v=_:S>0&&(l=h),E<0?y=g:E>0&&(p=d),N=gd),Y.attr("cursor",Md[k]),o());break;default:return}vd()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return vd()}else if(c)return;if(f.apply(this,arguments)){var l,h,p,d,v,_,y,g,m,x,b,w,M,T=this,k=t.event.target.__data__.type,N="selection"===(t.event.metaKey?k="overlay":k)?_d:t.event.altKey?md:gd,S=n===bd?null:Nd[k],E=n===xd?null:Sd[k],A=Ee(T),C=A.extent,z=A.selection,P=C[0][0],L=C[0][1],R=C[1][0],q=C[1][1],U=S&&E&&t.event.shiftKey,D=Gf(T),O=D,F=i(T,arguments).beforestart();"overlay"===k?A.selection=z=[[l=n===bd?P:D[0],p=n===xd?L:D[1]],[v=n===bd?R:l,y=n===xd?q:p]]:(l=z[0][0],p=z[0][1],v=z[1][0],y=z[1][1]),h=l,d=p,_=v,g=y;var I=Pl(T).attr("pointer-events","none"),Y=I.selectAll(".overlay").attr("cursor",Md[k]);if(t.event.touches)I.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",u,!0);else{var B=Pl(t.event.view).on("keydown.brush",a,!0).on("keyup.brush",s,!0).on("mousemove.brush",e,!0).on("mouseup.brush",u,!0);Dl(t.event.view)}Te(),gp(T),r.call(T),F.start()}}function a(){var t=this.__brush||{selection:null};return t.extent=s.apply(this,arguments),t.dim=n,t}var c,s=Se,f=Ne,l=v(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){u.selection=1===t&&Ae(s)?null:f(t),r.call(o),a.brush()}var o=this,u=o.__brush,a=i(o,arguments),c=u.selection,s=n.input("function"==typeof e?e.apply(this,arguments):e,u.extent),f=qh(c,s);return c&&s?t:t(1)}):t.each(function(){var t=this,o=arguments,u=t.__brush,a=n.input("function"==typeof e?e.apply(t,o):e,u.extent),c=i(t,o).beforestart();gp(t),u.selection=null==a||Ae(a)?null:a,r.call(t),c.start().brush().end()})},o.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){A(new dd(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(s="function"==typeof t?t:pd([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):s},e.filter=function(t){return arguments.length?(f="function"==typeof t?t:pd(!!t),e):f},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function Re(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function qe(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Ue(){return new qe}function De(t){return t.source}function Oe(t){return t.target}function Fe(t){return t.radius}function Ie(t){return t.startAngle}function Ye(t){return t.endAngle}function Be(){}function He(t,n){var e=new Be;if(t instanceof Be)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var u in t)e.set(u,t[u]);return e}function je(){return{}}function Xe(t,n,e){t[n]=e}function $e(){return He()}function Ve(t,n,e){t.set(n,e)}function We(){}function Ze(t,n){var e=new We;if(t instanceof We)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function Ge(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Je(t,n){var e=Ge(t);return function(r,i){return n(e(r),i,t)}}function Qe(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Ke(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,c,s,f,l,h,p=t._root,d={data:r},v=t._x0,_=t._y0,y=t._x1,g=t._y1;if(!p)return t._root=d,t;for(;p.length;)if((s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u,i=p,!(p=p[l=f<<1|s]))return i[l]=d,t;if(a=+t._x.call(null,p.data),c=+t._y.call(null,p.data),n===a&&e===c)return d.next=p,i?i[l]=d:t._root=d,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u}while((l=f<<1|s)==(h=(c>=u)<<1|a>=o));return i[h]=p,i[l]=d,t}function tr(t){var n,e,r,i,o=t.length,u=new Array(o),a=new Array(o),c=1/0,s=1/0,f=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,a[e]=i,r<c&&(c=r),r>f&&(f=r),i<s&&(s=i),i>l&&(l=i));for(f<c&&(c=this._x0,f=this._x1),l<s&&(s=this._y0,l=this._y1),this.cover(c,s).cover(f,l),e=0;e<o;++e)Ke(this,u[e],a[e],t[e]);return this}function nr(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function er(t){return t[0]}function rr(t){return t[1]}function ir(t,n,e){var r=new or(null==n?er:n,null==e?rr:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function or(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function ur(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function ar(t){return t.x+t.vx}function cr(t){return t.y+t.vy}function sr(t){return t.index}function fr(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function lr(t){return t.x}function hr(t){return t.y}function pr(t){return new dr(t)}function dr(t){if(!(n=Ov.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],a=n[6]&&+n[6],c=!!n[7],s=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(c=!0,f="g"):Dv[f]||(f=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,
this.sign=i,this.symbol=o,this.zero=u,this.width=a,this.comma=c,this.precision=s,this.type=f}function vr(n){return Fv=Bv(n),t.format=Fv.format,t.formatPrefix=Fv.formatPrefix,Fv}function _r(){this.reset()}function yr(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function gr(t){return t>1?0:t<-1?N_:Math.acos(t)}function mr(t){return t>1?S_:t<-1?-S_:Math.asin(t)}function xr(t){return(t=I_(t/2))*t}function br(){}function wr(t,n){t&&X_.hasOwnProperty(t.type)&&X_[t.type](t,n)}function Mr(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Tr(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)Mr(t[e],n,1);n.polygonEnd()}function kr(){Z_.point=Sr}function Nr(){Er(Vv,Wv)}function Sr(t,n){Z_.point=Er,Vv=t,Wv=n,t*=z_,n*=z_,Zv=t,Gv=q_(n=n/2+E_),Jv=I_(n)}function Er(t,n){t*=z_,n*=z_,n=n/2+E_;var e=t-Zv,r=e>=0?1:-1,i=r*e,o=q_(n),u=I_(n),a=Jv*u,c=Gv*o+a*q_(i),s=a*r*I_(i);V_.add(R_(s,c)),Zv=t,Gv=o,Jv=u}function Ar(t){return[R_(t[1],t[0]),mr(t[2])]}function Cr(t){var n=t[0],e=t[1],r=q_(e);return[r*q_(n),r*I_(n),I_(e)]}function zr(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Pr(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Lr(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Rr(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function qr(t){var n=B_(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function Ur(t,n){u_.push(a_=[Qv=t,t_=t]),n<Kv&&(Kv=n),n>n_&&(n_=n)}function Dr(t,n){var e=Cr([t*z_,n*z_]);if(o_){var r=Pr(o_,e),i=[r[1],-r[0],0],o=Pr(i,r);qr(o),o=Ar(o);var u,a=t-e_,c=a>0?1:-1,s=o[0]*C_*c,f=P_(a)>180;f^(c*e_<s&&s<c*t)?(u=o[1]*C_)>n_&&(n_=u):(s=(s+360)%360-180,f^(c*e_<s&&s<c*t)?(u=-o[1]*C_)<Kv&&(Kv=u):(n<Kv&&(Kv=n),n>n_&&(n_=n))),f?t<e_?Hr(Qv,t)>Hr(Qv,t_)&&(t_=t):Hr(t,t_)>Hr(Qv,t_)&&(Qv=t):t_>=Qv?(t<Qv&&(Qv=t),t>t_&&(t_=t)):t>e_?Hr(Qv,t)>Hr(Qv,t_)&&(t_=t):Hr(t,t_)>Hr(Qv,t_)&&(Qv=t)}else u_.push(a_=[Qv=t,t_=t]);n<Kv&&(Kv=n),n>n_&&(n_=n),o_=e,e_=t}function Or(){Q_.point=Dr}function Fr(){a_[0]=Qv,a_[1]=t_,Q_.point=Ur,o_=null}function Ir(t,n){if(o_){var e=t-e_;J_.add(P_(e)>180?e+(e>0?360:-360):e)}else r_=t,i_=n;Z_.point(t,n),Dr(t,n)}function Yr(){Z_.lineStart()}function Br(){Ir(r_,i_),Z_.lineEnd(),P_(J_)>k_&&(Qv=-(t_=180)),a_[0]=Qv,a_[1]=t_,o_=null}function Hr(t,n){return(n-=t)<0?n+360:n}function jr(t,n){return t[0]-n[0]}function Xr(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function $r(t,n){t*=z_,n*=z_;var e=q_(n);Vr(e*q_(t),e*I_(t),I_(n))}function Vr(t,n,e){++c_,f_+=(t-f_)/c_,l_+=(n-l_)/c_,h_+=(e-h_)/c_}function Wr(){ty.point=Zr}function Zr(t,n){t*=z_,n*=z_;var e=q_(n);b_=e*q_(t),w_=e*I_(t),M_=I_(n),ty.point=Gr,Vr(b_,w_,M_)}function Gr(t,n){t*=z_,n*=z_;var e=q_(n),r=e*q_(t),i=e*I_(t),o=I_(n),u=R_(B_((u=w_*o-M_*i)*u+(u=M_*r-b_*o)*u+(u=b_*i-w_*r)*u),b_*r+w_*i+M_*o);s_+=u,p_+=u*(b_+(b_=r)),d_+=u*(w_+(w_=i)),v_+=u*(M_+(M_=o)),Vr(b_,w_,M_)}function Jr(){ty.point=$r}function Qr(){ty.point=ti}function Kr(){ni(m_,x_),ty.point=$r}function ti(t,n){m_=t,x_=n,t*=z_,n*=z_,ty.point=ni;var e=q_(n);b_=e*q_(t),w_=e*I_(t),M_=I_(n),Vr(b_,w_,M_)}function ni(t,n){t*=z_,n*=z_;var e=q_(n),r=e*q_(t),i=e*I_(t),o=I_(n),u=w_*o-M_*i,a=M_*r-b_*o,c=b_*i-w_*r,s=B_(u*u+a*a+c*c),f=mr(s),l=s&&-f/s;__+=l*u,y_+=l*a,g_+=l*c,s_+=f,p_+=f*(b_+(b_=r)),d_+=f*(w_+(w_=i)),v_+=f*(M_+(M_=o)),Vr(b_,w_,M_)}function ei(t,n){return[t>N_?t-A_:t<-N_?t+A_:t,n]}function ri(t,n,e){return(t%=A_)?n||e?ry(oi(t),ui(n,e)):oi(t):n||e?ui(n,e):ei}function ii(t){return function(n,e){return n+=t,[n>N_?n-A_:n<-N_?n+A_:n,e]}}function oi(t){var n=ii(t);return n.invert=ii(-t),n}function ui(t,n){function e(t,n){var e=q_(n),a=q_(t)*e,c=I_(t)*e,s=I_(n),f=s*r+a*i;return[R_(c*o-f*u,a*r-s*i),mr(f*o+c*u)]}var r=q_(t),i=I_(t),o=q_(n),u=I_(n);return e.invert=function(t,n){var e=q_(n),a=q_(t)*e,c=I_(t)*e,s=I_(n),f=s*o-c*u;return[R_(c*o+s*u,a*r+f*i),mr(f*r-a*i)]},e}function ai(t,n,e,r,i,o){if(e){var u=q_(n),a=I_(n),c=r*e;null==i?(i=n+r*A_,o=n-c/2):(i=ci(u,i),o=ci(u,o),(r>0?i<o:i>o)&&(i+=r*A_));for(var s,f=i;r>0?f>o:f<o;f-=c)s=Ar([u,-a*q_(f),-a*I_(f)]),t.point(s[0],s[1])}}function ci(t,n){n=Cr(n),n[0]-=t,qr(n);var e=gr(-n[1]);return((-n[2]<0?-e:e)+A_-k_)%A_}function si(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function fi(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function li(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,a,s){var f=0,l=0;if(null==i||(f=u(i,a))!==(l=u(o,a))||c(i,o)<0^a>0)do{s.point(0===f||3===f?t:e,f>1?r:n)}while((f=(f+a+4)%4)!==l);else s.point(o[0],o[1])}function u(r,i){return P_(r[0]-t)<k_?i>0?0:3:P_(r[0]-e)<k_?i>0?2:1:P_(r[1]-n)<k_?i>0?1:0:i>0?3:2}function a(t,n){return c(t.x,n.x)}function c(t,n){var e=u(t,1),r=u(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(u){function c(t,n){i(t,n)&&N.point(t,n)}function s(){for(var n=0,e=0,i=_.length;e<i;++e)for(var o,u,a=_[e],c=1,s=a.length,f=a[0],l=f[0],h=f[1];c<s;++c)o=l,u=h,f=a[c],l=f[0],h=f[1],u<=r?h>r&&(l-o)*(r-u)>(h-u)*(t-o)&&++n:h<=r&&(l-o)*(r-u)<(h-u)*(t-o)&&--n;return n}function f(){N=S,v=[],_=[],k=!0}function l(){var t=s(),n=k&&t,e=(v=bf(v)).length;(n||e)&&(u.polygonStart(),n&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),e&&xy(v,a,t,o,u),u.polygonEnd()),N=u,v=_=y=null}function h(){E.point=d,_&&_.push(y=[]),T=!0,M=!1,b=w=NaN}function p(){v&&(d(g,m),x&&M&&S.rejoin(),v.push(S.result())),E.point=c,M&&N.lineEnd()}function d(o,u){var a=i(o,u);if(_&&y.push([o,u]),T)g=o,m=u,x=a,T=!1,a&&(N.lineStart(),N.point(o,u));else if(a&&M)N.point(o,u);else{var c=[b=Math.max(wy,Math.min(by,b)),w=Math.max(wy,Math.min(by,w))],s=[o=Math.max(wy,Math.min(by,o)),u=Math.max(wy,Math.min(by,u))];gy(c,s,t,n,e,r)?(M||(N.lineStart(),N.point(c[0],c[1])),N.point(s[0],s[1]),a||N.lineEnd(),k=!1):a&&(N.lineStart(),N.point(o,u),k=!1)}b=o,w=u,M=a}var v,_,y,g,m,x,b,w,M,T,k,N=u,S=yy(),E={point:c,lineStart:h,lineEnd:p,polygonStart:f,polygonEnd:l};return E}}function hi(){Sy.point=di,Sy.lineEnd=pi}function pi(){Sy.point=Sy.lineEnd=br}function di(t,n){t*=z_,n*=z_,iy=t,oy=I_(n),uy=q_(n),Sy.point=vi}function vi(t,n){t*=z_,n*=z_;var e=I_(n),r=q_(n),i=P_(t-iy),o=q_(i),u=I_(i),a=r*u,c=uy*e-oy*r*o,s=oy*e+uy*r*o;Ny.add(R_(B_(a*a+c*c),s)),iy=t,oy=e,uy=r}function _i(t,n){return!(!t||!Ly.hasOwnProperty(t.type))&&Ly[t.type](t,n)}function yi(t,n){return 0===zy(t,n)}function gi(t,n){var e=zy(t[0],t[1]);return zy(t[0],n)+zy(n,t[1])<=e+k_}function mi(t,n){return!!ky(t.map(xi),bi(n))}function xi(t){return t=t.map(bi),t.pop(),t}function bi(t){return[t[0]*z_,t[1]*z_]}function wi(t,n,e){var r=cf(t,n-k_,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function Mi(t,n,e){var r=cf(t,n-k_,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Ti(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return cf(U_(o/_)*_,i,_).map(h).concat(cf(U_(s/y)*y,c,y).map(p)).concat(cf(U_(r/d)*d,e,d).filter(function(t){return P_(t%_)>k_}).map(f)).concat(cf(U_(a/v)*v,u,v).filter(function(t){return P_(t%y)>k_}).map(l))}var e,r,i,o,u,a,c,s,f,l,h,p,d=10,v=d,_=90,y=360,g=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[h(o).concat(p(c).slice(1),h(i).reverse().slice(1),p(s).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],s=+n[0][1],c=+n[1][1],o>i&&(n=o,o=i,i=n),s>c&&(n=s,s=c,c=n),t.precision(g)):[[o,s],[i,c]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],a=+n[0][1],u=+n[1][1],r>e&&(n=r,r=e,e=n),a>u&&(n=a,a=u,u=n),t.precision(g)):[[r,a],[e,u]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(_=+n[0],y=+n[1],t):[_,y]},t.stepMinor=function(n){return arguments.length?(d=+n[0],v=+n[1],t):[d,v]},t.precision=function(n){return arguments.length?(g=+n,f=wi(a,u,90),l=Mi(r,e,g),h=wi(s,c,90),p=Mi(o,i,g),t):g},t.extentMajor([[-180,-90+k_],[180,90-k_]]).extentMinor([[-180,-80-k_],[180,80+k_]])}function ki(){return Ti()()}function Ni(){Fy.point=Si}function Si(t,n){Fy.point=Ei,ay=sy=t,cy=fy=n}function Ei(t,n){Oy.add(fy*t-sy*n),sy=t,fy=n}function Ai(){Ei(ay,cy)}function Ci(t,n){t<Iy&&(Iy=t),t>By&&(By=t),n<Yy&&(Yy=n),n>Hy&&(Hy=n)}function zi(t,n){Xy+=t,$y+=n,++Vy}function Pi(){tg.point=Li}function Li(t,n){tg.point=Ri,zi(py=t,dy=n)}function Ri(t,n){var e=t-py,r=n-dy,i=B_(e*e+r*r);Wy+=i*(py+t)/2,Zy+=i*(dy+n)/2,Gy+=i,zi(py=t,dy=n)}function qi(){tg.point=zi}function Ui(){tg.point=Oi}function Di(){Fi(ly,hy)}function Oi(t,n){tg.point=Fi,zi(ly=py=t,hy=dy=n)}function Fi(t,n){var e=t-py,r=n-dy,i=B_(e*e+r*r);Wy+=i*(py+t)/2,Zy+=i*(dy+n)/2,Gy+=i,i=dy*t-py*n,Jy+=i*(py+t),Qy+=i*(dy+n),Ky+=3*i,zi(py=t,dy=n)}function Ii(t){this._context=t}function Yi(t,n){ag.point=Bi,eg=ig=t,rg=og=n}function Bi(t,n){ig-=t,og-=n,ug.add(B_(ig*ig+og*og)),ig=t,og=n}function Hi(){this._string=[]}function ji(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Xi(t){return t.length>1}function $i(t,n){return((t=t.x)[0]<0?t[1]-S_-k_:S_-t[1])-((n=n.x)[0]<0?n[1]-S_-k_:S_-n[1])}function Vi(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,u){var a=o>0?N_:-N_,c=P_(o-e);P_(c-N_)<k_?(t.point(e,r=(r+u)/2>0?S_:-S_),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),n=0):i!==a&&c>=N_&&(P_(e-i)<k_&&(e-=i*k_),P_(o-a)<k_&&(o-=a*k_),r=Wi(e,r,o,u),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),n=0),t.point(e=o,r=u),i=a},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}function Wi(t,n,e,r){var i,o,u=I_(t-e);return P_(u)>k_?L_((I_(n)*(o=q_(r))*I_(e)-I_(r)*(i=q_(n))*I_(t))/(i*o*u)):(n+r)/2}function Zi(t,n,e,r){var i;if(null==t)i=e*S_,r.point(-N_,i),r.point(0,i),r.point(N_,i),r.point(N_,0),r.point(N_,-i),r.point(0,-i),r.point(-N_,-i),r.point(-N_,0),r.point(-N_,i);else if(P_(t[0]-n[0])>k_){var o=t[0]<n[0]?N_:-N_;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}function Gi(t){return function(n){var e=new Ji;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Ji(){}function Qi(t,n,e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([0,0]),null!=o&&t.clipExtent(null),$_(e,t.stream(jy));var u=jy.result(),a=Math.min(r/(u[1][0]-u[0][0]),i/(u[1][1]-u[0][1])),c=+n[0][0]+(r-a*(u[1][0]+u[0][0]))/2,s=+n[0][1]+(i-a*(u[1][1]+u[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*a).translate([c,s])}function Ki(t,n,e){return Qi(t,[[0,0],n],e)}function to(t){return Gi({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}function no(t,n){function e(r,i,o,u,a,c,s,f,l,h,p,d,v,_){var y=s-r,g=f-i,m=y*y+g*g;if(m>4*n&&v--){var x=u+h,b=a+p,w=c+d,M=B_(x*x+b*b+w*w),T=mr(w/=M),k=P_(P_(w)-1)<k_||P_(o-l)<k_?(o+l)/2:R_(b,x),N=t(k,T),S=N[0],E=N[1],A=S-r,C=E-i,z=g*A-y*C;(z*z/m>n||P_((y*A+g*C)/m-.5)>.3||u*h+a*p+c*d<dg)&&(e(r,i,o,u,a,c,S,E,k,x/=M,b/=M,w,v,_),_.point(S,E),e(S,E,k,x,b,w,s,f,l,h,p,d,v,_))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){y=NaN,w.point=o,n.lineStart()}function o(r,i){var o=Cr([r,i]),u=t(r,i);e(y,g,_,m,x,b,y=u[0],g=u[1],_=r,m=o[0],x=o[1],b=o[2],pg,n),n.point(y,g)}function u(){w.point=r,n.lineEnd()}function a(){i(),w.point=c,w.lineEnd=s}function c(t,n){o(f=t,n),l=y,h=g,p=m,d=x,v=b,w.point=o}function s(){e(y,g,_,m,x,b,l,h,f,p,d,v,pg,n),w.lineEnd=u,u()}var f,l,h,p,d,v,_,y,g,m,x,b,w={point:r,lineStart:i,lineEnd:u,polygonStart:function(){n.polygonStart(),w.lineStart=a},polygonEnd:function(){n.polygonEnd(),w.lineStart=i}};return w}}function eo(t){return ro(function(){return t})()}function ro(t){function n(t){return t=f(t[0]*z_,t[1]*z_),[t[0]*_+a,c-t[1]*_]}function e(t){return(t=f.invert((t[0]-a)/_,(c-t[1])/_))&&[t[0]*C_,t[1]*C_]}function r(t,n){return t=u(t,n),[t[0]*_+a,c-t[1]*_]}function i(){f=ry(s=ri(b,w,M),u);var t=u(m,x);return a=y-t[0]*_,c=g+t[1]*_,o()}function o(){return d=v=null,n}var u,a,c,s,f,l,h,p,d,v,_=150,y=480,g=250,m=0,x=0,b=0,w=0,M=0,T=null,k=fg,N=null,S=Uy,E=.5,A=vg(r,E);return n.stream=function(t){return d&&v===t?d:d=_g(k(s,A(S(v=t))))},n.clipAngle=function(t){return arguments.length?(k=+t?lg(T=t*z_,6*z_):(T=null,fg),o()):T*C_},n.clipExtent=function(t){return arguments.length?(S=null==t?(N=l=h=p=null,Uy):li(N=+t[0][0],l=+t[0][1],h=+t[1][0],p=+t[1][1]),o()):null==N?null:[[N,l],[h,p]]},n.scale=function(t){return arguments.length?(_=+t,i()):_},n.translate=function(t){return arguments.length?(y=+t[0],g=+t[1],i()):[y,g]},n.center=function(t){return arguments.length?(m=t[0]%360*z_,x=t[1]%360*z_,i()):[m*C_,x*C_]},n.rotate=function(t){return arguments.length?(b=t[0]%360*z_,w=t[1]%360*z_,M=t.length>2?t[2]%360*z_:0,i()):[b*C_,w*C_,M*C_]},n.precision=function(t){return arguments.length?(A=vg(r,E=t*t),o()):B_(E)},n.fitExtent=function(t,e){return Qi(n,t,e)},n.fitSize=function(t,e){return Ki(n,t,e)},function(){return u=t.apply(this,arguments),n.invert=u.invert&&e,i()}}function io(t){var n=0,e=N_/3,r=ro(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*z_,e=t[1]*z_):[n*C_,e*C_]},i}function oo(t){function n(t,n){return[t*e,I_(n)/e]}var e=q_(t);return n.invert=function(t,n){return[t/e,mr(n*e)]},n}function uo(t,n){function e(t,n){var e=B_(o-2*i*I_(n))/i;return[e*I_(t*=i),u-e*q_(t)]}var r=I_(t),i=(r+I_(n))/2;if(P_(i)<k_)return oo(t);var o=1+r*(2*i-r),u=B_(o)/i;return e.invert=function(t,n){var e=u-n;return[R_(t,P_(e))/i*Y_(e),mr((o-(t*t+e*e)*i*i)/(2*i))]},e}function ao(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}function co(t){return function(n,e){var r=q_(n),i=q_(e),o=t(r*i);return[o*i*I_(n),o*I_(e)]}}function so(t){return function(n,e){var r=B_(n*n+e*e),i=t(r),o=I_(i),u=q_(i);return[R_(n*o,r*u),mr(r&&e*o/r)]}}function fo(t,n){return[t,O_(H_((S_+n)/2))]}function lo(t){function n(){var n=N_*a(),u=o(vy(o.rotate()).invert([0,0]));return s(null==f?[[u[0]-n,u[1]-n],[u[0]+n,u[1]+n]]:t===fo?[[Math.max(u[0]-n,f),e],[Math.min(u[0]+n,r),i]]:[[f,Math.max(u[1]-n,e)],[r,Math.min(u[1]+n,i)]])}var e,r,i,o=eo(t),u=o.center,a=o.scale,c=o.translate,s=o.clipExtent,f=null;return o.scale=function(t){return arguments.length?(a(t),n()):a()},o.translate=function(t){return arguments.length?(c(t),n()):c()},o.center=function(t){return arguments.length?(u(t),n()):u()},o.clipExtent=function(t){return arguments.length?(null==t?f=e=r=i=null:(f=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),n()):null==f?null:[[f,e],[r,i]]},n()}function ho(t){return H_((S_+t)/2)}function po(t,n){function e(t,n){o>0?n<-S_+k_&&(n=-S_+k_):n>S_-k_&&(n=S_-k_);var e=o/F_(ho(n),i);return[e*I_(i*t),o-e*q_(i*t)]}var r=q_(t),i=t===n?I_(t):O_(r/q_(n))/O_(ho(n)/ho(t)),o=r*F_(ho(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=Y_(i)*B_(t*t+e*e);return[R_(t,P_(e))/i*Y_(e),2*L_(F_(o/r,1/i))-S_]},e):fo}function vo(t,n){return[t,n]}function _o(t,n){function e(t,n){var e=o-n,r=i*t;return[e*I_(r),o-e*q_(r)]}var r=q_(t),i=t===n?I_(t):(r-q_(n))/(n-t),o=r/i+t;return P_(i)<k_?vo:(e.invert=function(t,n){var e=o-n;return[R_(t,P_(e))/i*Y_(e),o-Y_(i)*B_(t*t+e*e)]},e)}function yo(t,n){var e=q_(n),r=q_(t)*e;return[e*I_(t)/r,I_(n)/r]}function go(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?Uy:Gi({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function mo(t,n){return[q_(n)*I_(t),I_(n)]}function xo(t,n){var e=q_(n),r=1+q_(t)*e;return[e*I_(t)/r,I_(n)/r]}function bo(t,n){return[O_(H_((S_+n)/2)),-t]}function wo(t,n){return t.parent===n.parent?1:2}function Mo(t){return t.reduce(To,0)/t.length}function To(t,n){return t+n.x}function ko(t){return 1+t.reduce(No,0)}function No(t,n){return Math.max(t,n.y)}function So(t){for(var n;n=t.children;)t=n[0];return t}function Eo(t){for(var n;n=t.children;)t=n[n.length-1];return t}function Ao(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function Co(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}function zo(t,n){var e,r,i,o,u,a=new Uo(t),c=+t.value&&(a.value=t.value),s=[a];for(null==n&&(n=Lo);e=s.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(u=i.length))for(e.children=new Array(u),o=u-1;o>=0;--o)s.push(r=e.children[o]=new Uo(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(qo)}function Po(){return zo(this).eachBefore(Ro)}function Lo(t){return t.children}function Ro(t){t.data=t.data.data}function qo(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Uo(t){this.data=t,this.depth=this.height=0,this.parent=null}function Do(t){this._=t,this.next=null}function Oo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r-n.r;return i*i+1e-6>e*e+r*r}function Fo(t,n){var e,r,i,o=null,u=t.head;switch(n.length){case 1:e=Io(n[0]);break;case 2:e=Yo(n[0],n[1]);break;case 3:e=Bo(n[0],n[1],n[2])}for(;u;)i=u._,r=u.next,e&&Oo(e,i)?o=u:(o?(t.tail=o,o.next=null):t.head=t.tail=null,n.push(i),e=Fo(t,n),n.pop(),t.head?(u.next=t.head,t.head=u):(u.next=null,t.head=t.tail=u),o=t.tail,o.next=r),u=r;return t.tail=o,e}function Io(t){return{x:t.x,y:t.y,r:t.r}}function Yo(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,u=n.y,a=n.r,c=o-e,s=u-r,f=a-i,l=Math.sqrt(c*c+s*s);return{x:(e+o+c/l*f)/2,y:(r+u+s/l*f)/2,r:(l+i+a)/2}}function Bo(t,n,e){var r=t.x,i=t.y,o=t.r,u=n.x,a=n.y,c=n.r,s=e.x,f=e.y,l=e.r,h=2*(r-u),p=2*(i-a),d=2*(c-o),v=r*r+i*i-o*o-u*u-a*a+c*c,_=2*(r-s),y=2*(i-f),g=2*(l-o),m=r*r+i*i-o*o-s*s-f*f+l*l,x=_*p-h*y,b=(p*m-y*v)/x-r,w=(y*d-p*g)/x,M=(_*v-h*m)/x-i,T=(h*g-_*d)/x,k=w*w+T*T-1,N=2*(b*w+M*T+o),S=b*b+M*M-o*o,E=(-N-Math.sqrt(N*N-4*k*S))/(2*k);return{x:b+w*E+r,y:M+T*E+i,r:E}}function Ho(t,n,e){var r=t.x,i=t.y,o=n.r+e.r,u=t.r+e.r,a=n.x-r,c=n.y-i,s=a*a+c*c;if(s){var f=.5+((u*=u)-(o*=o))/(2*s),l=Math.sqrt(Math.max(0,2*o*(u+s)-(u-=s)*u-o*o))/(2*s);e.x=r+f*a+l*c,e.y=i+f*c-l*a}else e.x=r+u,e.y=i}function jo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i-1e-6>e*e+r*r}function Xo(t,n,e){var r=t._,i=t.next._,o=r.r+i.r,u=(r.x*i.r+i.x*r.r)/o-n,a=(r.y*i.r+i.y*r.r)/o-e;return u*u+a*a}function $o(t){this._=t,this.next=null,this.previous=null}function Vo(t){if(!(i=t.length))return 0;var n,e,r,i;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Ho(e,n,r=t[2]);var o,u,a,c,s,f,l,h=n.r*n.r,p=e.r*e.r,d=r.r*r.r,v=h+p+d,_=h*n.x+p*e.x+d*r.x,y=h*n.y+p*e.y+d*r.y;n=new $o(n),e=new $o(e),r=new $o(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(a=3;a<i;++a){Ho(n._,e._,r=t[a]),r=new $o(r),c=e.next,s=n.previous,f=e._.r,l=n._.r;do{if(f<=l){if(jo(c._,r._)){e=c,n.next=e,e.previous=n,--a;continue t}f+=c._.r,c=c.next}else{if(jo(s._,r._)){n=s,n.next=e,e.previous=n,--a;continue t}l+=s._.r,s=s.previous}}while(c!==s.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,v+=d=r._.r*r._.r,_+=d*r._.x,y+=d*r._.y,h=Xo(n,o=_/v,u=y/v);(r=r.next)!==e;)(d=Xo(r,o,u))<h&&(n=r,h=d);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=$g(n),a=0;a<i;++a)n=t[a],n.x-=r.x,n.y-=r.y;return r.r}function Wo(t){return null==t?null:Zo(t)}function Zo(t){if("function"!=typeof t)throw new Error;return t}function Go(){return 0}function Jo(t){return Math.sqrt(t.value)}function Qo(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Ko(t,n){return function(e){if(r=e.children){var r,i,o,u=r.length,a=t(e)*n||0;if(a)for(i=0;i<u;++i)r[i].r+=a;if(o=Vo(r),a)for(i=0;i<u;++i)r[i].r-=a;e.r=o+a}}}function tu(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function nu(t){return t.id}function eu(t){return t.parentId}function ru(t,n){return t.parent===n.parent?1:2}function iu(t){var n=t.children;return n?n[0]:t.t}function ou(t){var n=t.children;return n?n[n.length-1]:t.t}function uu(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function au(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)n=i[o],n.z+=e,n.m+=e,e+=n.s+(r+=n.c)}function cu(t,n,e){return t.a.parent===n.parent?t.a:e}function su(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function fu(t){for(var n,e,r,i,o,u=new su(t,0),a=[u];n=a.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)a.push(e=n.children[i]=new su(r[i],i)),e.parent=n;return(u.parent=new su(null,0)).children=[u],u}function lu(t,n,e,r,i,o){for(var u,a,c,s,f,l,h,p,d,v,_,y=[],g=n.children,m=0,x=0,b=g.length,w=n.value;m<b;){c=i-e,s=o-r;do{f=g[x++].value}while(!f&&x<b);for(l=h=f,v=Math.max(s/c,c/s)/(w*t),_=f*f*v,d=Math.max(h/_,_/l);x<b;++x){if(f+=a=g[x].value,a<l&&(l=a),a>h&&(h=a),_=f*f*v,(p=Math.max(h/_,_/l))>d){f-=a;break}d=p}y.push(u={value:f,dice:c<s,children:g.slice(m,x)}),u.dice?Jg(u,e,r,i,w?r+=s*f/w:o):im(u,e,r,w?e+=c*f/w:i,o),w-=f,m=x}return y}function hu(t,n){return t[0]-n[0]||t[1]-n[1]}function pu(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&pm(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function du(t){this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function vu(t){if(!t._start)try{_u(t)}catch(n){if(t._tasks[t._ended+t._active-1])gu(t,n);else if(!t._data)throw n}}function _u(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=yu(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||gm)}}function yu(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?gu(t,e):(t._data[n]=r,t._waiting?vu(t):mu(t))))}}function gu(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(n){}t._active=NaN,mu(t)}function mu(t){if(!t._active&&t._call){var n=t._data;t._data=void 0,t._call(t._error,n)}}function xu(t){if(null==t)t=1/0;else if(!((t=+t)>=1))throw new Error("invalid concurrency");return new du(t)}function bu(t){return function(n,e){t(null==n?e:null)}}function wu(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function Mu(t,n){return function(e){return t(e.responseText,n)}}function Tu(t){function n(n){var o=n+"",u=e.get(o);if(!u){if(i!==Om)return i;e.set(o,u=r.push(n))}return t[(u-1)%t.length]}var e=He(),r=[],i=Om;return t=null==t?[]:Dm.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=He();for(var i,o,u=-1,a=t.length;++u<a;)e.has(o=(i=t[u])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=Dm.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return Tu().domain(r).range(t).unknown(i)},n}function ku(){function t(){var t=i().length,r=u[1]<u[0],l=u[r-0],h=u[1-r];n=(h-l)/Math.max(1,t-c+2*s),a&&(n=Math.floor(n)),l+=(h-l-n*(t-c))*f,e=n*(1-c),a&&(l=Math.round(l),e=Math.round(e));var p=cf(t).map(function(t){return l+n*t});return o(r?p.reverse():p)}var n,e,r=Tu().unknown(void 0),i=r.domain,o=r.range,u=[0,1],a=!1,c=0,s=0,f=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(u=[+n[0],+n[1]],t()):u.slice()},r.rangeRound=function(n){return u=[+n[0],+n[1]],a=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(a=!!n,t()):a},r.padding=function(n){return arguments.length?(c=s=Math.max(0,Math.min(1,n)),t()):c},r.paddingInner=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.paddingOuter=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.copy=function(){return ku().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)},t()}function Nu(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return Nu(n())},t}function Su(){return Nu(ku().paddingInner(1))}function Eu(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Fm(n)}function Au(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function Cu(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function zu(t,n,e,r){var i=t[0],o=t[1],u=n[0],a=n[1];return o<i?(i=e(o,i),u=r(a,u)):(i=e(i,o),u=r(u,a)),function(t){return u(i(t))}}function Pu(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),u=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)o[a]=e(t[a],t[a+1]),u[a]=r(n[a],n[a+1]);return function(n){var e=Vs(t,n,1,i)-1;return u[e](o[e](n))}}function Lu(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function Ru(t,n){function e(){return i=Math.min(a.length,c.length)>2?Pu:zu,o=u=null,r}function r(n){return(o||(o=i(a,c,f?Au(t):t,s)))(+n)}var i,o,u,a=Ym,c=Ym,s=qh,f=!1;return r.invert=function(t){return(u||(u=i(c,a,Eu,f?Cu(n):n)))(+t)},r.domain=function(t){return arguments.length?(a=Um.call(t,Im),e()):a.slice()},r.range=function(t){return arguments.length?(c=Dm.call(t),e()):c.slice()},r.rangeRound=function(t){return c=Dm.call(t),s=Uh,e()},r.clamp=function(t){return arguments.length?(f=!!t,e()):f},r.interpolate=function(t){return arguments.length?(s=t,e()):s},e()}function qu(t){var n=t.domain;return t.ticks=function(t){var e=n();return hf(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return Bm(n(),t,e)},t.nice=function(e){null==e&&(e=10);var i,o=n(),u=0,a=o.length-1,c=o[u],s=o[a];return s<c&&(i=c,c=s,s=i,i=u,u=a,a=i),i=r(c,s,e),i>0?(c=Math.floor(c/i)*i,s=Math.ceil(s/i)*i,i=r(c,s,e)):i<0&&(c=Math.ceil(c*i)/i,s=Math.floor(s*i)/i,i=r(c,s,e)),i>0?(o[u]=Math.floor(c/i)*i,o[a]=Math.ceil(s/i)*i,n(o)):i<0&&(o[u]=Math.ceil(c*i)/i,o[a]=Math.floor(s*i)/i,n(o)),t},t}function Uu(){var t=Ru(Eu,Ch);return t.copy=function(){return Lu(t,Uu())},qu(t)}function Du(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=Um.call(e,Im),t):n.slice()},t.copy=function(){return Du().domain(n)},qu(t)}function Ou(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:Fm(n)}function Fu(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function Iu(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Yu(t){return 10===t?Iu:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function Bu(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Hu(t){return function(n){return-t(-n)}}function ju(){function n(){return o=Bu(i),u=Yu(i),r()[0]<0&&(o=Hu(o),u=Hu(u)),e}var e=Ru(Ou,Fu).domain([1,10]),r=e.domain,i=10,o=Bu(10),u=Yu(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),a=e[0],c=e[e.length-1];(n=c<a)&&(h=a,a=c,c=h);var s,f,l,h=o(a),p=o(c),d=null==t?10:+t,v=[];if(!(i%1)&&p-h<d){if(h=Math.round(h)-1,p=Math.round(p)+1,a>0){for(;h<p;++h)for(f=1,s=u(h);f<i;++f)if(!((l=s*f)<a)){if(l>c)break;v.push(l)}}else for(;h<p;++h)for(f=i-1,s=u(h);f>=1;--f)if(!((l=s*f)<a)){if(l>c)break;v.push(l)}}else v=hf(h,p,Math.min(p-h,d)).map(u);return n?v.reverse():v},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var a=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/u(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=a?r(t):""}},e.nice=function(){return r(Hm(r(),{floor:function(t){return u(Math.floor(o(t)))},ceil:function(t){return u(Math.ceil(o(t)))}}))},e.copy=function(){return Lu(e,ju().base(i))},e}function Xu(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function $u(){function t(t,n){return(n=Xu(n,e)-(t=Xu(t,e)))?function(r){return(Xu(r,e)-t)/n}:Fm(n)}function n(t,n){return n=Xu(n,e)-(t=Xu(t,e)),function(r){return Xu(t+n*r,1/e)}}var e=1,r=Ru(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return Lu(r,$u().exponent(e))},qu(r)}function Vu(){return $u().exponent(.5)}function Wu(){function t(){var t=0,o=Math.max(1,r.length);for(i=new Array(o-1);++t<o;)i[t-1]=vf(e,t/o);return n}function n(t){if(!isNaN(t=+t))return r[Vs(i,t)]}var e=[],r=[],i=[];return n.invertExtent=function(t){var n=r.indexOf(t);return n<0?[NaN,NaN]:[n>0?i[n-1]:e[0],n<i.length?i[n]:e[e.length-1]]},n.domain=function(n){if(!arguments.length)return e.slice();e=[];for(var r,i=0,o=n.length;i<o;++i)null==(r=n[i])||isNaN(r=+r)||e.push(r);return e.sort(js),t()},n.range=function(n){return arguments.length?(r=Dm.call(n),t()):r.slice()},n.quantiles=function(){return i.slice()},n.copy=function(){return Wu().domain(e).range(r)},n}function Zu(){function t(t){if(t<=t)return u[Vs(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],u=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(u=Dm.call(t)).length-1,n()):u.slice()},t.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Zu().domain([e,r]).range(u)},qu(t)}function Gu(){function t(t){if(t<=t)return e[Vs(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=Dm.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=Dm.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return Gu().domain(n).range(e)},t}function Ju(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(new Date(+e))}while(n(e,o),t(e),e<r);return u},i.filter=function(e){return Ju(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return jm.setTime(+n),Xm.setTime(+r),t(jm),t(Xm),Math.floor(e(jm,Xm))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}function Qu(t){return Ju(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Wm)/Zm})}function Ku(t){return Ju(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/Zm})}function ta(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function na(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function ea(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function ra(t){function n(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=Vx[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),
u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function e(t,n){return function(e){var i=ea(1900);if(r(i,t,e+="",0)!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var o="Z"in i?na(ea(i.y)).getUTCDay():n(ea(i.y)).getDay();i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(o+5)%7:i.w+7*i.U-(o+6)%7}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,na(i)):n(i)}}function r(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=B[i in Vx?n.charAt(u++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function i(t,n,e){var r=C.exec(n.slice(e));return r?(t.p=z[r[0].toLowerCase()],e+r[0].length):-1}function o(t,n,e){var r=R.exec(n.slice(e));return r?(t.w=q[r[0].toLowerCase()],e+r[0].length):-1}function u(t,n,e){var r=P.exec(n.slice(e));return r?(t.w=L[r[0].toLowerCase()],e+r[0].length):-1}function a(t,n,e){var r=O.exec(n.slice(e));return r?(t.m=F[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){var r=U.exec(n.slice(e));return r?(t.m=D[r[0].toLowerCase()],e+r[0].length):-1}function s(t,n,e){return r(t,w,n,e)}function f(t,n,e){return r(t,M,n,e)}function l(t,n,e){return r(t,T,n,e)}function h(t){return S[t.getDay()]}function p(t){return N[t.getDay()]}function d(t){return A[t.getMonth()]}function v(t){return E[t.getMonth()]}function _(t){return k[+(t.getHours()>=12)]}function y(t){return S[t.getUTCDay()]}function g(t){return N[t.getUTCDay()]}function m(t){return A[t.getUTCMonth()]}function x(t){return E[t.getUTCMonth()]}function b(t){return k[+(t.getUTCHours()>=12)]}var w=t.dateTime,M=t.date,T=t.time,k=t.periods,N=t.days,S=t.shortDays,E=t.months,A=t.shortMonths,C=ua(k),z=aa(k),P=ua(N),L=aa(N),R=ua(S),q=aa(S),U=ua(E),D=aa(E),O=ua(A),F=aa(A),I={a:h,A:p,b:d,B:v,c:null,d:wa,e:wa,H:Ma,I:Ta,j:ka,L:Na,m:Sa,M:Ea,p:_,S:Aa,U:Ca,w:za,W:Pa,x:null,X:null,y:La,Y:Ra,Z:qa,"%":Ga},Y={a:y,A:g,b:m,B:x,c:null,d:Ua,e:Ua,H:Da,I:Oa,j:Fa,L:Ia,m:Ya,M:Ba,p:b,S:Ha,U:ja,w:Xa,W:$a,x:null,X:null,y:Va,Y:Wa,Z:Za,"%":Ga},B={a:o,A:u,b:a,B:c,c:s,d:va,e:va,H:ya,I:ya,j:_a,L:xa,m:da,M:ga,p:i,S:ma,U:sa,w:ca,W:fa,x:f,X:l,y:ha,Y:la,Z:pa,"%":ba};return I.x=n(M,I),I.X=n(T,I),I.c=n(w,I),Y.x=n(M,Y),Y.X=n(T,Y),Y.c=n(w,Y),{format:function(t){var e=n(t+="",I);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",ta);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",Y);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,na);return n.toString=function(){return t},n}}}function ia(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function oa(t){return t.replace(Gx,"\\$&")}function ua(t){return new RegExp("^(?:"+t.map(oa).join("|")+")","i")}function aa(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function ca(t,n,e){var r=Wx.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function sa(t,n,e){var r=Wx.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function fa(t,n,e){var r=Wx.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function la(t,n,e){var r=Wx.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function ha(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function pa(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function da(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function va(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function _a(t,n,e){var r=Wx.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function ya(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function ga(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function ma(t,n,e){var r=Wx.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function xa(t,n,e){var r=Wx.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function ba(t,n,e){var r=Zx.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function wa(t,n){return ia(t.getDate(),n,2)}function Ma(t,n){return ia(t.getHours(),n,2)}function Ta(t,n){return ia(t.getHours()%12||12,n,2)}function ka(t,n){return ia(1+ex.count(xx(t),t),n,3)}function Na(t,n){return ia(t.getMilliseconds(),n,3)}function Sa(t,n){return ia(t.getMonth()+1,n,2)}function Ea(t,n){return ia(t.getMinutes(),n,2)}function Aa(t,n){return ia(t.getSeconds(),n,2)}function Ca(t,n){return ia(ix.count(xx(t),t),n,2)}function za(t){return t.getDay()}function Pa(t,n){return ia(ox.count(xx(t),t),n,2)}function La(t,n){return ia(t.getFullYear()%100,n,2)}function Ra(t,n){return ia(t.getFullYear()%1e4,n,4)}function qa(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ia(n/60|0,"0",2)+ia(n%60,"0",2)}function Ua(t,n){return ia(t.getUTCDate(),n,2)}function Da(t,n){return ia(t.getUTCHours(),n,2)}function Oa(t,n){return ia(t.getUTCHours()%12||12,n,2)}function Fa(t,n){return ia(1+Nx.count(jx(t),t),n,3)}function Ia(t,n){return ia(t.getUTCMilliseconds(),n,3)}function Ya(t,n){return ia(t.getUTCMonth()+1,n,2)}function Ba(t,n){return ia(t.getUTCMinutes(),n,2)}function Ha(t,n){return ia(t.getUTCSeconds(),n,2)}function ja(t,n){return ia(Ex.count(jx(t),t),n,2)}function Xa(t){return t.getUTCDay()}function $a(t,n){return ia(Ax.count(jx(t),t),n,2)}function Va(t,n){return ia(t.getUTCFullYear()%100,n,2)}function Wa(t,n){return ia(t.getUTCFullYear()%1e4,n,4)}function Za(){return"+0000"}function Ga(){return"%"}function Ja(n){return Xx=ra(n),t.timeFormat=Xx.format,t.timeParse=Xx.parse,t.utcFormat=Xx.utcFormat,t.utcParse=Xx.utcParse,Xx}function Qa(t){return t.toISOString()}function Ka(t){var n=new Date(t);return isNaN(n)?null:n}function tc(t){return new Date(t)}function nc(t){return t instanceof Date?+t:+new Date(+t)}function ec(t,n,e,r,o,u,a,c,s){function f(i){return(a(i)<i?v:u(i)<i?_:o(i)<i?y:r(i)<i?g:n(i)<i?e(i)<i?m:x:t(i)<i?b:w)(i)}function l(n,e,r,o){if(null==n&&(n=10),"number"==typeof n){var u=Math.abs(r-e)/n,a=Xs(function(t){return t[2]}).right(M,u);a===M.length?(o=i(e/ob,r/ob,n),n=t):a?(a=M[u/M[a-1][2]<M[a][2]/u?a-1:a],o=a[1],n=a[0]):(o=i(e,r,n),n=c)}return null==o?n:n.every(o)}var h=Ru(Eu,Ch),p=h.invert,d=h.domain,v=s(".%L"),_=s(":%S"),y=s("%I:%M"),g=s("%I %p"),m=s("%a %d"),x=s("%b %d"),b=s("%B"),w=s("%Y"),M=[[a,1,Kx],[a,5,5*Kx],[a,15,15*Kx],[a,30,30*Kx],[u,1,tb],[u,5,5*tb],[u,15,15*tb],[u,30,30*tb],[o,1,nb],[o,3,3*nb],[o,6,6*nb],[o,12,12*nb],[r,1,eb],[r,2,2*eb],[e,1,rb],[n,1,ib],[n,3,3*ib],[t,1,ob]];return h.invert=function(t){return new Date(p(t))},h.domain=function(t){return arguments.length?d(Um.call(t,nc)):d().map(tc)},h.ticks=function(t,n){var e,r=d(),i=r[0],o=r[r.length-1],u=o<i;return u&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],u?e.reverse():e},h.tickFormat=function(t,n){return null==n?f:s(n)},h.nice=function(t,n){var e=d();return(t=l(t,e[0],e[e.length-1],n))?d(Hm(e,t)):h},h.copy=function(){return Lu(h,ec(t,n,e,r,o,u,a,c,s))},h}function rc(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function ic(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return ic(t).domain([e,r]).clamp(i)},qu(n)}function oc(t){return t>1?0:t<-1?zb:Math.acos(t)}function uc(t){return t>=1?Pb:t<=-1?-Pb:Math.asin(t)}function ac(t){return t.innerRadius}function cc(t){return t.outerRadius}function sc(t){return t.startAngle}function fc(t){return t.endAngle}function lc(t){return t&&t.padAngle}function hc(t,n,e,r,i,o,u,a){var c=e-t,s=r-n,f=u-i,l=a-o,h=(f*(n-o)-l*(t-i))/(l*c-f*s);return[t+h*c,n+h*s]}function pc(t,n,e,r,i,o,u){var a=t-e,c=n-r,s=(u?o:-o)/Ab(a*a+c*c),f=s*c,l=-s*a,h=t+f,p=n+l,d=e+f,v=r+l,_=(h+d)/2,y=(p+v)/2,g=d-h,m=v-p,x=g*g+m*m,b=i-o,w=h*v-d*p,M=(m<0?-1:1)*Ab(Nb(0,b*b*x-w*w)),T=(w*m-g*M)/x,k=(-w*g-m*M)/x,N=(w*m+g*M)/x,S=(-w*g+m*M)/x,E=T-_,A=k-y,C=N-_,z=S-y;return E*E+A*A>C*C+z*z&&(T=N,k=S),{cx:T,cy:k,x01:-f,y01:-l,x11:T*(i/b-1),y11:k*(i/b-1)}}function dc(t){this._context=t}function vc(t){return t[0]}function _c(t){return t[1]}function yc(t){this._curve=t}function gc(t){function n(n){return new yc(t(n))}return n._curve=t,n}function mc(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(gc(t)):n()._curve},t}function xc(t){return t.source}function bc(t){return t.target}function wc(t){function n(){var n,a=jb.call(arguments),c=e.apply(this,a),s=r.apply(this,a);if(u||(u=n=Ue()),t(u,+i.apply(this,(a[0]=c,a)),+o.apply(this,a),+i.apply(this,(a[0]=s,a)),+o.apply(this,a)),n)return u=null,n+""||null}var e=xc,r=bc,i=vc,o=_c,u=null;return n.source=function(t){return arguments.length?(e=t,n):e},n.target=function(t){return arguments.length?(r=t,n):r},n.x=function(t){return arguments.length?(i="function"==typeof t?t:wb(+t),n):i},n.y=function(t){return arguments.length?(o="function"==typeof t?t:wb(+t),n):o},n.context=function(t){return arguments.length?(u=null==t?null:t,n):u},n}function Mc(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Tc(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function kc(t,n,e,r,i){var o=Xb(n,e),u=Xb(n,e=(e+i)/2),a=Xb(r,e),c=Xb(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(u[0],u[1],a[0],a[1],c[0],c[1])}function Nc(){return wc(Mc)}function Sc(){return wc(Tc)}function Ec(){var t=wc(kc);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}function Ac(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function Cc(t){this._context=t}function zc(t){this._context=t}function Pc(t){this._context=t}function Lc(t,n){this._basis=new Cc(t),this._beta=n}function Rc(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function qc(t,n){this._context=t,this._k=(1-n)/6}function Uc(t,n){this._context=t,this._k=(1-n)/6}function Dc(t,n){this._context=t,this._k=(1-n)/6}function Oc(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>Cb){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>Cb){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*s+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function Fc(t,n){this._context=t,this._alpha=n}function Ic(t,n){this._context=t,this._alpha=n}function Yc(t,n){this._context=t,this._alpha=n}function Bc(t){this._context=t}function Hc(t){return t<0?-1:1}function jc(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i);return(Hc(o)+Hc(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function Xc(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function $c(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3;t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function Vc(t){this._context=t}function Wc(t){this._context=new Zc(t)}function Zc(t){this._context=t}function Gc(t){return new Vc(t)}function Jc(t){return new Wc(t)}function Qc(t){this._context=t}function Kc(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function ts(t,n){this._context=t,this._t=n}function ns(t){return new ts(t,0)}function es(t){return new ts(t,1)}function rs(t,n){return t[n]}function is(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function os(t){return t[0]}function us(t){return t[1]}function as(){this._=null}function cs(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function ss(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function fs(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ls(t){for(;t.L;)t=t.L;return t}function hs(t,n,e,r){var i=[null,null],o=Yw.push(i)-1;return i.left=t,i.right=n,e&&ds(i,t,n,e),r&&ds(i,n,t,r),Fw[t.index].halfedges.push(o),Fw[n.index].halfedges.push(o),i}function ps(t,n,e){var r=[n,e];return r.left=t,r}function ds(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function vs(t,n,e,r,i){var o,u=t[0],a=t[1],c=u[0],s=u[1],f=a[0],l=a[1],h=0,p=1,d=f-c,v=l-s;if(o=n-c,d||!(o>0)){if(o/=d,d<0){if(o<h)return;o<p&&(p=o)}else if(d>0){if(o>p)return;o>h&&(h=o)}if(o=r-c,d||!(o<0)){if(o/=d,d<0){if(o>p)return;o>h&&(h=o)}else if(d>0){if(o<h)return;o<p&&(p=o)}if(o=e-s,v||!(o>0)){if(o/=v,v<0){if(o<h)return;o<p&&(p=o)}else if(v>0){if(o>p)return;o>h&&(h=o)}if(o=i-s,v||!(o<0)){if(o/=v,v<0){if(o>p)return;o>h&&(h=o)}else if(v>0){if(o<h)return;o<p&&(p=o)}return!(h>0||p<1)||(h>0&&(t[0]=[c+h*d,s+h*v]),p<1&&(t[1]=[c+p*d,s+p*v]),!0)}}}}}function _s(t,n,e,r,i){var o=t[1];if(o)return!0;var u,a,c=t[0],s=t.left,f=t.right,l=s[0],h=s[1],p=f[0],d=f[1],v=(l+p)/2,_=(h+d)/2;if(d===h){if(v<n||v>=r)return;if(l>p){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=(l-p)/(d-h),a=_-u*v,u<-1||u>1)if(l>p){if(c){if(c[1]>=i)return}else c=[(e-a)/u,e];o=[(i-a)/u,i]}else{if(c){if(c[1]<e)return}else c=[(i-a)/u,i];o=[(e-a)/u,e]}else if(h<d){if(c){if(c[0]>=r)return}else c=[n,u*n+a];o=[r,u*r+a]}else{if(c){if(c[0]<n)return}else c=[r,u*r+a];o=[n,u*n+a]}return t[0]=c,t[1]=o,!0}function ys(t,n,e,r){for(var i,o=Yw.length;o--;)_s(i=Yw[o],t,n,e,r)&&vs(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>jw||Math.abs(i[0][1]-i[1][1])>jw)||delete Yw[o]}function gs(t){return Fw[t.index]={site:t,halfedges:[]}}function ms(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function xs(t,n){return n[+(n.left!==t.site)]}function bs(t,n){return n[+(n.left===t.site)]}function ws(){for(var t,n,e,r,i=0,o=Fw.length;i<o;++i)if((t=Fw[i])&&(r=(n=t.halfedges).length)){var u=new Array(r),a=new Array(r);for(e=0;e<r;++e)u[e]=e,a[e]=ms(t,Yw[n[e]]);for(u.sort(function(t,n){return a[n]-a[t]}),e=0;e<r;++e)a[e]=n[u[e]];for(e=0;e<r;++e)n[e]=a[e]}}function Ms(t,n,e,r){var i,o,u,a,c,s,f,l,h,p,d,v,_=Fw.length,y=!0;for(i=0;i<_;++i)if(o=Fw[i]){for(u=o.site,c=o.halfedges,a=c.length;a--;)Yw[c[a]]||c.splice(a,1);for(a=0,s=c.length;a<s;)p=bs(o,Yw[c[a]]),d=p[0],v=p[1],f=xs(o,Yw[c[++a%s]]),l=f[0],h=f[1],(Math.abs(d-l)>jw||Math.abs(v-h)>jw)&&(c.splice(a,0,Yw.push(ps(u,p,Math.abs(d-t)<jw&&r-v>jw?[t,Math.abs(l-t)<jw?h:r]:Math.abs(v-r)<jw&&e-d>jw?[Math.abs(h-r)<jw?l:e,r]:Math.abs(d-e)<jw&&v-n>jw?[e,Math.abs(l-e)<jw?h:n]:Math.abs(v-n)<jw&&d-t>jw?[Math.abs(h-n)<jw?l:t,n]:null))-1),++s);s&&(y=!1)}if(y){var g,m,x,b=1/0;for(i=0,y=null;i<_;++i)(o=Fw[i])&&(u=o.site,g=u[0]-t,m=u[1]-n,(x=g*g+m*m)<b&&(b=x,y=o));if(y){var w=[t,n],M=[t,r],T=[e,r],k=[e,n];y.halfedges.push(Yw.push(ps(u=y.site,w,M))-1,Yw.push(ps(u,M,T))-1,Yw.push(ps(u,T,k))-1,Yw.push(ps(u,k,w))-1)}}for(i=0;i<_;++i)(o=Fw[i])&&(o.halfedges.length||delete Fw[i])}function Ts(){cs(this),this.x=this.y=this.arc=this.site=this.cy=null}function ks(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var u=i[0],a=i[1],c=r[0]-u,s=r[1]-a,f=o[0]-u,l=o[1]-a,h=2*(c*l-s*f);if(!(h>=-Xw)){var p=c*c+s*s,d=f*f+l*l,v=(l*p-s*d)/h,_=(c*d-f*p)/h,y=Bw.pop()||new Ts;y.arc=t,y.site=i,y.x=v+u,y.y=(y.cy=_+a)+Math.sqrt(v*v+_*_),t.circle=y;for(var g=null,m=Iw._;m;)if(y.y<m.y||y.y===m.y&&y.x<=m.x){if(!m.L){g=m.P;break}m=m.L}else{if(!m.R){g=m;break}m=m.R}Iw.insert(g,y),g||(Dw=y)}}}}function Ns(t){var n=t.circle;n&&(n.P||(Dw=n.N),Iw.remove(n),Bw.push(n),cs(n),t.circle=null)}function Ss(){cs(this),this.edge=this.site=this.circle=null}function Es(t){var n=Hw.pop()||new Ss;return n.site=t,n}function As(t){Ns(t),Ow.remove(t),Hw.push(t),cs(t)}function Cs(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,u=t.N,a=[t];As(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<jw&&Math.abs(r-c.circle.cy)<jw;)o=c.P,a.unshift(c),As(c),c=o;a.unshift(c),Ns(c);for(var s=u;s.circle&&Math.abs(e-s.circle.x)<jw&&Math.abs(r-s.circle.cy)<jw;)u=s.N,a.push(s),As(s),s=u;a.push(s),Ns(s);var f,l=a.length;for(f=1;f<l;++f)s=a[f],c=a[f-1],ds(s.edge,c.site,s.site,i);c=a[0],s=a[l-1],s.edge=hs(c.site,s.site,null,i),ks(c),ks(s)}function zs(t){for(var n,e,r,i,o=t[0],u=t[1],a=Ow._;a;)if((r=Ps(a,u)-o)>jw)a=a.L;else{if(!((i=o-Ls(a,u))>jw)){r>-jw?(n=a.P,e=a):i>-jw?(n=a,e=a.N):n=e=a;break}if(!a.R){n=a;break}a=a.R}gs(t);var c=Es(t);if(Ow.insert(n,c),n||e){if(n===e)return Ns(n),e=Es(n.site),Ow.insert(c,e),c.edge=e.edge=hs(n.site,c.site),ks(n),void ks(e);if(!e)return void(c.edge=hs(n.site,c.site));Ns(n),Ns(e);var s=n.site,f=s[0],l=s[1],h=t[0]-f,p=t[1]-l,d=e.site,v=d[0]-f,_=d[1]-l,y=2*(h*_-p*v),g=h*h+p*p,m=v*v+_*_,x=[(_*g-p*m)/y+f,(h*m-v*g)/y+l];ds(e.edge,s,d,x),c.edge=hs(s,t,null,x),e.edge=hs(t,d,null,x),ks(n),ks(e)}}function Ps(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var u=t.P;if(!u)return-1/0;e=u.site;var a=e[0],c=e[1],s=c-n;if(!s)return a;var f=a-r,l=1/o-1/s,h=f/s;return l?(-h+Math.sqrt(h*h-2*l*(f*f/(-2*s)-c+s/2+i-o/2)))/l+r:(r+a)/2}function Ls(t,n){var e=t.N;if(e)return Ps(e,n);var r=t.site;return r[1]===n?r[0]:1/0}function Rs(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function qs(t,n){return n[1]-t[1]||n[0]-t[0]}function Us(t,n){var e,r,i,o=t.sort(qs).pop();for(Yw=[],Fw=new Array(t.length),Ow=new as,Iw=new as;;)if(i=Dw,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(zs(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;Cs(i.arc)}if(ws(),n){var u=+n[0][0],a=+n[0][1],c=+n[1][0],s=+n[1][1];ys(u,a,c,s),Ms(u,a,c,s)}this.edges=Yw,this.cells=Fw,Ow=Iw=Yw=Fw=null}function Ds(t,n,e){this.target=t,this.type=n,this.transform=e}function Os(t,n,e){this.k=t,this.x=n,this.y=e}function Fs(t){return t.__zoom||Ww}function Is(){t.event.stopImmediatePropagation()}function Ys(){return!t.event.button}function Bs(){var t,n,e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,t=e.width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function Hs(){return this.__zoom||Ww}var js=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},Xs=function(t){return 1===t.length&&(t=n(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}},$s=Xs(js),Vs=$s.right,Ws=$s.left,Zs=function(t,n){null==n&&(n=e);for(var r=0,i=t.length-1,o=t[0],u=new Array(i<0?0:i);r<i;)u[r]=n(o,o=t[++r]);return u},Gs=function(t,n,r){var i,o,u,a,c=t.length,s=n.length,f=new Array(c*s);for(null==r&&(r=e),i=u=0;i<c;++i)for(a=t[i],o=0;o<s;++o,++u)f[u]=r(a,n[o]);return f},Js=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Qs=function(t){return null===t?NaN:+t},Ks=function(t,n){var e,r,i=t.length,o=0,u=-1,a=0,c=0;if(null==n)for(;++u<i;)isNaN(e=Qs(t[u]))||(r=e-a,a+=r/++o,c+=r*(e-a));else for(;++u<i;)isNaN(e=Qs(n(t[u],u,t)))||(r=e-a,a+=r/++o,c+=r*(e-a));if(o>1)return c/(o-1)},tf=function(t,n){var e=Ks(t,n);return e?Math.sqrt(e):e},nf=function(t,n){var e,r,i,o=t.length,u=-1;if(null==n){for(;++u<o;)if(null!=(e=t[u])&&e>=e)for(r=i=e;++u<o;)null!=(e=t[u])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++u<o;)if(null!=(e=n(t[u],u,t))&&e>=e)for(r=i=e;++u<o;)null!=(e=n(t[u],u,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]},ef=Array.prototype,rf=ef.slice,of=ef.map,uf=function(t){return function(){return t}},af=function(t){return t},cf=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o},sf=Math.sqrt(50),ff=Math.sqrt(10),lf=Math.sqrt(2),hf=function(t,n,e){var i,o,u,a=n<t,c=-1;if(a&&(i=t,t=n,n=i),0===(u=r(t,n,e))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),o=new Array(i=Math.ceil(n-t+1));++c<i;)o[c]=(t+c)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),o=new Array(i=Math.ceil(t-n+1));++c<i;)o[c]=(t-c)/u;return a&&o.reverse(),o},pf=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},df=function(){function t(t){var o,u,a=t.length,c=new Array(a);for(o=0;o<a;++o)c[o]=n(t[o],o,t);var s=e(c),f=s[0],l=s[1],h=r(c,f,l);Array.isArray(h)||(h=i(f,l,h),h=cf(Math.ceil(f/h)*h,Math.floor(l/h)*h,h));for(var p=h.length;h[0]<=f;)h.shift(),--p;for(;h[p-1]>l;)h.pop(),--p;var d,v=new Array(p+1);for(o=0;o<=p;++o)d=v[o]=[],d.x0=o>0?h[o-1]:f,d.x1=o<p?h[o]:l;for(o=0;o<a;++o)u=c[o],f<=u&&u<=l&&v[Vs(h,u,0,p)].push(t[o]);return v}var n=af,e=nf,r=pf;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:uf(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:uf([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:uf(Array.isArray(n)?rf.call(n):n),t):r},t},vf=function(t,n,e){if(null==e&&(e=Qs),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t);return u+(+e(t[o+1],o+1,t)-u)*(i-o)}},_f=function(t,n,e){return t=of.call(t,Qs).sort(js),Math.ceil((e-n)/(2*(vf(t,.75)-vf(t,.25))*Math.pow(t.length,-1/3)))},yf=function(t,n,e){return Math.ceil((e-n)/(3.5*tf(t)*Math.pow(t.length,-1/3)))},gf=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r},mf=function(t,n){var e,r=t.length,i=r,o=-1,u=0;if(null==n)for(;++o<r;)isNaN(e=Qs(t[o]))?--i:u+=e;else for(;++o<r;)isNaN(e=Qs(n(t[o],o,t)))?--i:u+=e;if(i)return u/i},xf=function(t,n){var e,r=t.length,i=-1,o=[];if(null==n)for(;++i<r;)isNaN(e=Qs(t[i]))||o.push(e);else for(;++i<r;)isNaN(e=Qs(n(t[i],i,t)))||o.push(e);return vf(o.sort(js),.5)},bf=function(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--u]=r[n];return e},wf=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r},Mf=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},Tf=function(t,n){if(e=t.length){var e,r,i=0,o=0,u=t[o];for(null==n&&(n=js);++i<e;)(n(r=t[i],u)<0||0!==n(u,u))&&(u=r,o=i);return 0===n(u,u)?o:void 0}},kf=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},Nf=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},Sf=function(t){if(!(i=t.length))return[];for(var n=-1,e=wf(t,o),r=new Array(e);++n<e;)for(var i,u=-1,a=r[n]=new Array(i);++u<i;)a[u]=t[u][n];return r},Ef=function(){return Sf(arguments)},Af=Array.prototype.slice,Cf=function(t){return t},zf=1,Pf=2,Lf=3,Rf=4,qf=1e-6,Uf={value:function(){}};_.prototype=v.prototype={constructor:_,on:function(t,n){var e,r=this._,i=y(t+"",r),o=-1,u=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=i[o]).type)r[e]=m(r[e],t.name,n);else if(null==n)for(e in r)r[e]=m(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=g(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new _(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var Df="http://www.w3.org/1999/xhtml",Of={svg:"http://www.w3.org/2000/svg",xhtml:Df,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Ff=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Of.hasOwnProperty(n)?{space:Of[n],local:t}:t},If=function(t){var n=Ff(t);return(n.local?b:x)(n)},Yf=0;M.prototype=w.prototype={constructor:M,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var Bf=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var Hf=document.documentElement;if(!Hf.matches){var jf=Hf.webkitMatchesSelector||Hf.msMatchesSelector||Hf.mozMatchesSelector||Hf.oMatchesSelector;Bf=function(t){return function(){return jf.call(this,t)}}}}var Xf=Bf,$f={};if(t.event=null,"undefined"!=typeof document){"onmouseenter"in document.documentElement||($f={mouseenter:"mouseover",mouseleave:"mouseout"})}var Vf=function(t,n,e){var r,i,o=N(t+""),u=o.length;{if(!(arguments.length<2)){for(a=n?E:S,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,f=a.length;s<f;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value}},Wf=function(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e},Zf=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},Gf=function(t){var n=Wf();return n.changedTouches&&(n=n.changedTouches[0]),Zf(t,n)},Jf=function(t){return null==t?C:function(){return this.querySelector(t)}},Qf=function(t){"function"!=typeof t&&(t=Jf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),f=0;f<c;++f)(o=a[f])&&(u=t.call(o,o.__data__,f,a))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u);return new _t(r,this._parents)},Kf=function(t){return null==t?z:function(){return this.querySelectorAll(t)}},tl=function(t){"function"!=typeof t&&(t=Kf(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new _t(r,i)},nl=function(t){"function"!=typeof t&&(t=Xf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new _t(r,this._parents)},el=function(t){return new Array(t.length)},rl=function(){return new _t(this._enter||this._groups.map(el),this._parents)};P.prototype={constructor:P,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var il=function(t){return function(){return t}},ol="$",ul=function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?R:L,r=this._parents,i=this._groups;"function"!=typeof t&&(t=il(t));for(var o=i.length,u=new Array(o),a=new Array(o),c=new Array(o),s=0;s<o;++s){var f=r[s],l=i[s],h=l.length,p=t.call(f,f&&f.__data__,s,r),d=p.length,v=a[s]=new Array(d),_=u[s]=new Array(d);e(f,l,v,_,c[s]=new Array(h),p,n);for(var y,g,m=0,x=0;m<d;++m)if(y=v[m]){for(m>=x&&(x=m+1);!(g=_[x])&&++x<d;);y._next=g||null}}return u=new _t(u,r),u._enter=a,u._exit=c,u},al=function(){return new _t(this._exit||this._groups.map(el),this._parents)},cl=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new _t(u,this._parents)},sl=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},fl=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=q);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),f=0;f<c;++f)(u=a[f])&&(s[f]=u);s.sort(n)}return new _t(i,this._parents).order()},ll=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},hl=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},pl=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},dl=function(){var t=0;return this.each(function(){++t}),t},vl=function(){return!this.node()},_l=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},yl=function(t,n){var e=Ff(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?D:U:"function"==typeof n?e.local?Y:I:e.local?F:O)(e,n))},gl=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView},ml=function(t,n,e){return arguments.length>1?this.each((null==n?B:"function"==typeof n?j:H)(t,n,null==e?"":e)):X(this.node(),t)},xl=function(t,n){return arguments.length>1?this.each((null==n?$:"function"==typeof n?W:V)(t,n)):this.node()[t]};J.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var bl=function(t,n){var e=Z(t+"");if(arguments.length<2){for(var r=G(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?et:n?tt:nt)(e,n))},wl=function(t){return arguments.length?this.each(null==t?rt:("function"==typeof t?ot:it)(t)):this.node().textContent},Ml=function(t){return arguments.length?this.each(null==t?ut:("function"==typeof t?ct:at)(t)):this.node().innerHTML},Tl=function(){return this.each(st)},kl=function(){return this.each(ft)},Nl=function(t){var n="function"==typeof t?t:If(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},Sl=function(t,n){var e="function"==typeof t?t:If(t),r=null==n?lt:"function"==typeof n?n:Jf(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},El=function(){return this.each(ht)},Al=function(t){return arguments.length?this.property("__data__",t):this.node().__data__},Cl=function(t,n){return this.each(("function"==typeof n?vt:dt)(t,n))},zl=[null];_t.prototype=yt.prototype={constructor:_t,select:Qf,selectAll:tl,filter:nl,data:ul,enter:rl,exit:al,merge:cl,order:sl,sort:fl,call:ll,nodes:hl,node:pl,size:dl,empty:vl,each:_l,attr:yl,style:ml,property:xl,classed:bl,text:wl,html:Ml,raise:Tl,lower:kl,append:Nl,insert:Sl,remove:El,datum:Al,on:Vf,dispatch:Cl};var Pl=function(t){return"string"==typeof t?new _t([[document.querySelector(t)]],[document.documentElement]):new _t([[t]],zl)},Ll=function(t){return"string"==typeof t?new _t([document.querySelectorAll(t)],[document.documentElement]):new _t([null==t?[]:t],zl)
},Rl=function(t,n,e){arguments.length<3&&(e=n,n=Wf().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Zf(t,r);return null},ql=function(t,n){null==n&&(n=Wf().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Zf(t,n[e]);return i},Ul=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Dl=function(t){var n=t.document.documentElement,e=Pl(t).on("dragstart.drag",Ul,!0);"onselectstart"in n?e.on("selectstart.drag",Ul,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")},Ol=function(t){return function(){return t}};xt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var Fl=function(){function n(t){t.on("mousedown.drag",e).on("touchstart.drag",o).on("touchmove.drag",u).on("touchend.drag touchcancel.drag",a).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!h&&p.apply(this,arguments)){var n=c("mouse",d.apply(this,arguments),Gf,this,arguments);n&&(Pl(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),Dl(t.event.view),gt(),l=!1,s=t.event.clientX,f=t.event.clientY,n("start"))}}function r(){if(Ul(),!l){var n=t.event.clientX-s,e=t.event.clientY-f;l=n*n+e*e>x}y.mouse("drag")}function i(){Pl(t.event.view).on("mousemove.drag mouseup.drag",null),mt(t.event.view,l),Ul(),y.mouse("end")}function o(){if(p.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=d.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=c(r[n].identifier,i,Rl,this,arguments))&&(gt(),e("start"))}}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=y[r[n].identifier])&&(Ul(),e("drag"))}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(h&&clearTimeout(h),h=setTimeout(function(){h=null},500),n=0;n<i;++n)(e=y[r[n].identifier])&&(gt(),e("end"))}function c(e,r,i,o,u){var a,c,s,f=i(r,e),l=g.copy();if(A(new xt(n,"beforestart",a,e,m,f[0],f[1],0,0,l),function(){return null!=(t.event.subject=a=_.apply(o,u))&&(c=a.x-f[0]||0,s=a.y-f[1]||0,!0)}))return function t(h){var p,d=f;switch(h){case"start":y[e]=t,p=m++;break;case"end":delete y[e],--m;case"drag":f=i(r,e),p=m}A(new xt(n,h,a,e,p,f[0]+c,f[1]+s,f[0]-d[0],f[1]-d[1],l),l.apply,l,[h,o,u])}}var s,f,l,h,p=bt,d=wt,_=Mt,y={},g=v("start","drag","end"),m=0,x=0;return n.filter=function(t){return arguments.length?(p="function"==typeof t?t:Ol(!!t),n):p},n.container=function(t){return arguments.length?(d="function"==typeof t?t:Ol(t),n):d},n.subject=function(t){return arguments.length?(_="function"==typeof t?t:Ol(t),n):_},n.on=function(){var t=g.on.apply(g,arguments);return t===g?n:t},n.clickDistance=function(t){return arguments.length?(x=(t=+t)*t,n):Math.sqrt(x)},n},Il=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t},Yl="\\s*([+-]?\\d+)\\s*",Bl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Hl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",jl=/^#([0-9a-f]{3})$/,Xl=/^#([0-9a-f]{6})$/,$l=new RegExp("^rgb\\("+[Yl,Yl,Yl]+"\\)$"),Vl=new RegExp("^rgb\\("+[Hl,Hl,Hl]+"\\)$"),Wl=new RegExp("^rgba\\("+[Yl,Yl,Yl,Bl]+"\\)$"),Zl=new RegExp("^rgba\\("+[Hl,Hl,Hl,Bl]+"\\)$"),Gl=new RegExp("^hsl\\("+[Bl,Hl,Hl]+"\\)$"),Jl=new RegExp("^hsla\\("+[Bl,Hl,Hl,Bl]+"\\)$"),Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Il(kt,Nt,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),Il(zt,Ct,Tt(kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new zt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new zt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Il(qt,Rt,Tt(kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new qt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new qt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new zt(Ut(t>=240?t-240:t+120,i,r),Ut(t,i,r),Ut(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Kl=Math.PI/180,th=180/Math.PI,nh=.95047,eh=1,rh=1.08883,ih=4/29,oh=6/29,uh=3*oh*oh,ah=oh*oh*oh;Il(Ft,Ot,Tt(kt,{brighter:function(t){return new Ft(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Ft(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=eh*Yt(t),n=nh*Yt(n),e=rh*Yt(e),new zt(Bt(3.2404542*n-1.5371385*t-.4985314*e),Bt(-.969266*n+1.8760108*t+.041556*e),Bt(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),Il($t,Xt,Tt(kt,{brighter:function(t){return new $t(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new $t(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Dt(this).rgb()}}));var ch=-.14861,sh=1.78277,fh=-.29227,lh=-.90649,hh=1.97294,ph=hh*lh,dh=hh*sh,vh=sh*fh-lh*ch;Il(Zt,Wt,Tt(kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Zt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Zt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Kl,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new zt(255*(n+e*(ch*r+sh*i)),255*(n+e*(fh*r+lh*i)),255*(n+e*(hh*r)),this.opacity)}}));var _h,yh,gh,mh,xh,bh,wh=function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],u=r>0?t[r-1]:2*i-o,a=r<n-1?t[r+2]:2*o-i;return Gt((e-r/n)*n,u,i,o,a)}},Mh=function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],u=t[(r+1)%n],a=t[(r+2)%n];return Gt((e-r/n)*n,i,o,u,a)}},Th=function(t){return function(){return t}},kh=function t(n){function e(t,n){var e=r((t=Ct(t)).r,(n=Ct(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),u=nn(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}var r=tn(n);return e.gamma=t,e}(1),Nh=en(wh),Sh=en(Mh),Eh=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),u=new Array(r);for(e=0;e<i;++e)o[e]=qh(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}},Ah=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}},Ch=function(t,n){return t=+t,n-=t,function(e){return t+n*e}},zh=function(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=qh(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},Ph=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Lh=new RegExp(Ph.source,"g"),Rh=function(t,n){var e,r,i,o=Ph.lastIndex=Lh.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=Ph.exec(t))&&(r=Lh.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:Ch(e,r)})),o=Lh.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?on(c[0].x):rn(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})},qh=function(t,n){var e,r=typeof n;return null==n||"boolean"===r?Th(n):("number"===r?Ch:"string"===r?(e=Nt(n))?(n=e,kh):Rh:n instanceof Nt?kh:n instanceof Date?Ah:Array.isArray(n)?Eh:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?zh:Ch)(t,n)},Uh=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}},Dh=180/Math.PI,Oh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Fh=function(t,n,e,r,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Dh,skewX:Math.atan(c)*Dh,scaleX:u,scaleY:a}},Ih=cn(un,"px, ","px)","deg)"),Yh=cn(an,", ",")",")"),Bh=Math.SQRT2,Hh=function(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],c=n[1],s=n[2],f=a-i,l=c-o,h=f*f+l*l;if(h<1e-12)r=Math.log(s/u)/Bh,e=function(t){return[i+t*f,o+t*l,u*Math.exp(Bh*t*r)]};else{var p=Math.sqrt(h),d=(s*s-u*u+4*h)/(2*u*2*p),v=(s*s-u*u-4*h)/(2*s*2*p),_=Math.log(Math.sqrt(d*d+1)-d),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-_)/Bh,e=function(t){var n=t*r,e=sn(_),a=u/(2*p)*(e*ln(Bh*n+_)-fn(_));return[i+a*f,o+a*l,u*e/sn(Bh*n+_)]}}return e.duration=1e3*r,e},jh=hn(Kt),Xh=hn(nn),$h=dn(Kt),Vh=dn(nn),Wh=vn(Kt),Zh=vn(nn),Gh=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},Jh=0,Qh=0,Kh=0,tp=1e3,np=0,ep=0,rp=0,ip="object"==typeof performance&&performance.now?performance:Date,op="function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){setTimeout(t,17)};gn.prototype=mn.prototype={constructor:gn,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?_n():+e)+(null==n?0:+n),this._next||bh===this||(bh?bh._next=this:xh=this,bh=this),this._call=t,this._time=e,Tn()},stop:function(){this._call&&(this._call=null,this._time=1/0,Tn())}};var up=function(t,n,e){var r=new gn;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r},ap=function(t,n,e){var r=new gn,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?_n():+e,r.restart(function o(u){u+=i,r.restart(o,i+=n,e),t(u)},n,e),r)},cp=v("start","end","interrupt"),sp=[],fp=0,lp=1,hp=2,pp=3,dp=4,vp=5,_p=6,yp=function(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};En(t,e,{name:n,index:r,group:i,on:cp,tween:sp,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:fp})},gp=function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>hp&&e.state<vp,e.state=_p,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}},mp=function(t){return this.each(function(){gp(this,t)})},xp=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Sn(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?An:Cn)(e,t,n))},bp=function(t,n){var e;return("number"==typeof n?Ch:n instanceof Nt?kh:(e=Nt(n))?(n=e,kh):Rh)(t,n)},wp=function(t,n){var e=Ff(t),r="transform"===e?Yh:bp;return this.attrTween(t,"function"==typeof n?(e.local?Dn:Un)(e,r,zn(this,"attr."+t,n)):null==n?(e.local?Ln:Pn)(e):(e.local?qn:Rn)(e,r,n+""))},Mp=function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=Ff(t);return this.tween(e,(r.local?On:Fn)(r,n))},Tp=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?In:Yn)(n,t)):Sn(this.node(),n).delay},kp=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Bn:Hn)(n,t)):Sn(this.node(),n).duration},Np=function(t){var n=this._id;return arguments.length?this.each(jn(n,t)):Sn(this.node(),n).ease},Sp=function(t){"function"!=typeof t&&(t=Xf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new ne(r,this._parents,this._name,this._id)},Ep=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new ne(u,this._parents,this._name,this._id)},Ap=function(t,n){var e=this._id;return arguments.length<2?Sn(this.node(),e).on.on(t):this.each($n(e,t,n))},Cp=function(){return this.on("end.remove",Vn(this._id))},zp=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Jf(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,c,s=r[u],f=s.length,l=o[u]=new Array(f),h=0;h<f;++h)(a=s[h])&&(c=t.call(a,a.__data__,h,s))&&("__data__"in a&&(c.__data__=a.__data__),l[h]=c,yp(l[h],n,e,h,l,Sn(a,e)));return new ne(o,this._parents,n,e)},Pp=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Kf(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var c,s=r[a],f=s.length,l=0;l<f;++l)if(c=s[l]){for(var h,p=t.call(c,c.__data__,l,s),d=Sn(c,e),v=0,_=p.length;v<_;++v)(h=p[v])&&yp(h,n,e,v,p,d);o.push(p),u.push(c)}return new ne(o,u,n,e)},Lp=yt.prototype.constructor,Rp=function(){return new Lp(this._groups,this._parents)},qp=function(t,n,e){var r="transform"==(t+="")?Ih:bp;return null==n?this.styleTween(t,Wn(t,r)).on("end.style."+t,Zn(t)):this.styleTween(t,"function"==typeof n?Jn(t,r,zn(this,"style."+t,n)):Gn(t,r,n+""),e)},Up=function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,Qn(t,n,null==e?"":e))},Dp=function(t){return this.tween("text","function"==typeof t?te(zn(this,"text",t)):Kn(null==t?"":t+""))},Op=function(){for(var t=this._name,n=this._id,e=re(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)if(u=a[s]){var f=Sn(u,n);yp(u,t,e,s,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new ne(r,this._parents,t,e)},Fp=0,Ip=yt.prototype;ne.prototype=ee.prototype={constructor:ne,select:zp,selectAll:Pp,filter:Sp,merge:Ep,selection:Rp,transition:Op,call:Ip.call,nodes:Ip.nodes,node:Ip.node,size:Ip.size,empty:Ip.empty,each:Ip.each,on:Ap,attr:wp,attrTween:Mp,style:qp,styleTween:Up,text:Dp,remove:Cp,tween:xp,delay:Tp,duration:kp,ease:Np};var Yp=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Bp=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Hp=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),jp=Math.PI,Xp=jp/2,$p=4/11,Vp=6/11,Wp=8/11,Zp=.75,Gp=9/11,Jp=10/11,Qp=.9375,Kp=21/22,td=63/64,nd=1/$p/$p,ed=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),rd=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),id=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),od=2*Math.PI,ud=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=od);return r.amplitude=function(n){return t(n,e*od)},r.period=function(e){return t(n,e)},r}(1,.3),ad=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=od);return r.amplitude=function(n){return t(n,e*od)},r.period=function(e){return t(n,e)},r}(1,.3),cd=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=od);return r.amplitude=function(n){return t(n,e*od)},r.period=function(e){return t(n,e)},r}(1,.3),sd={time:null,delay:0,duration:250,ease:fe},fd=function(t){var n,e;t instanceof ne?(n=t._id,t=t._name):(n=re(),(e=sd).time=_n(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)(u=a[s])&&yp(u,t,n,s,a,e||Me(u,n));return new ne(r,this._parents,t,n)};yt.prototype.interrupt=mp,yt.prototype.transition=fd;var ld=[null],hd=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>lp&&e.name===n)return new ne([[t]],ld,n,+r)}return null},pd=function(t){return function(){return t}},dd=function(t,n,e){this.target=t,this.type=n,this.selection=e},vd=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},_d={name:"drag"},yd={name:"space"},gd={name:"handle"},md={name:"center"},xd={name:"x",handles:["e","w"].map(ke),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},bd={name:"y",handles:["n","s"].map(ke),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},wd={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(ke),input:function(t){return t},output:function(t){return t}},Md={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Td={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},kd={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Nd={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Sd={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},Ed=function(){return Le(wd)},Ad=Math.cos,Cd=Math.sin,zd=Math.PI,Pd=zd/2,Ld=2*zd,Rd=Math.max,qd=function(){function t(t){var o,u,a,c,s,f,l=t.length,h=[],p=cf(l),d=[],v=[],_=v.groups=new Array(l),y=new Array(l*l);for(o=0,s=-1;++s<l;){for(u=0,f=-1;++f<l;)u+=t[s][f];h.push(u),d.push(cf(l)),o+=u}for(e&&p.sort(function(t,n){return e(h[t],h[n])}),r&&d.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),o=Rd(0,Ld-n*l)/o,c=o?n:Ld/l,u=0,s=-1;++s<l;){for(a=u,f=-1;++f<l;){var g=p[s],m=d[g][f],x=t[g][m],b=u,w=u+=x*o;y[m*l+g]={index:g,subindex:m,startAngle:b,endAngle:w,value:x}}_[g]={index:g,startAngle:a,endAngle:u,value:h[g]},u+=c}for(s=-1;++s<l;)for(f=s-1;++f<l;){var M=y[f*l+s],T=y[s*l+f];(M.value||T.value)&&v.push(M.value<T.value?{source:T,target:M}:{source:M,target:T})}return i?v.sort(i):v}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=Rd(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=Re(n))._=n,t):i&&i._},t},Ud=Array.prototype.slice,Dd=function(t){return function(){return t}},Od=Math.PI,Fd=2*Od,Id=Fd-1e-6;qe.prototype=Ue.prototype={constructor:qe,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,a=e-t,c=r-n,s=o-t,f=u-n,l=s*s+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(f*a-c*s)>1e-6&&i){var h=e-o,p=r-u,d=a*a+c*c,v=h*h+p*p,_=Math.sqrt(d),y=Math.sqrt(l),g=i*Math.tan((Od-Math.acos((d+l-v)/(2*_*y)))/2),m=g/y,x=g/_;Math.abs(m-1)>1e-6&&(this._+="L"+(t+m*s)+","+(n+m*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>s*p)+","+(this._x1=t+x*a)+","+(this._y1=n+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,e=+e;var u=e*Math.cos(r),a=e*Math.sin(r),c=t+u,s=n+a,f=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+s:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-s)>1e-6)&&(this._+="L"+c+","+s),e&&(l<0&&(l=l%Fd+Fd),l>Id?this._+="A"+e+","+e+",0,1,"+f+","+(t-u)+","+(n-a)+"A"+e+","+e+",0,1,"+f+","+(this._x1=c)+","+(this._y1=s):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Od)+","+f+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var Yd=function(){function t(){var t,a=Ud.call(arguments),c=n.apply(this,a),s=e.apply(this,a),f=+r.apply(this,(a[0]=c,a)),l=i.apply(this,a)-Pd,h=o.apply(this,a)-Pd,p=f*Ad(l),d=f*Cd(l),v=+r.apply(this,(a[0]=s,a)),_=i.apply(this,a)-Pd,y=o.apply(this,a)-Pd;if(u||(u=t=Ue()),u.moveTo(p,d),u.arc(0,0,f,l,h),l===_&&h===y||(u.quadraticCurveTo(0,0,v*Ad(_),v*Cd(_)),u.arc(0,0,v,_,y)),u.quadraticCurveTo(0,0,p,d),u.closePath(),t)return u=null,t+""||null}var n=De,e=Oe,r=Fe,i=Ie,o=Ye,u=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:Dd(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Dd(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Dd(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(u=null==n?null:n,t):u},t};Be.prototype=He.prototype={constructor:Be,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var Bd=function(){function t(n,i,u,a){if(i>=o.length)return null!=r?r(n):null!=e?n.sort(e):n;for(var c,s,f,l=-1,h=n.length,p=o[i++],d=He(),v=u();++l<h;)(f=d.get(c=p(s=n[l])+""))?f.push(s):d.set(c,[s]);return d.each(function(n,e){a(v,e,t(n,i,u,a))}),v}function n(t,e){if(++e>o.length)return t;var i,a=u[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=a?i.sort(function(t,n){return a(t.key,n.key)}):i}var e,r,i,o=[],u=[];return i={object:function(n){return t(n,0,je,Xe)},map:function(n){return t(n,0,$e,Ve)},entries:function(e){return n(t(e,0,$e,Ve),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return u[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},Hd=He.prototype;We.prototype=Ze.prototype={constructor:We,has:Hd.has,add:function(t){return t+="",this["$"+t]=t,this},remove:Hd.remove,clear:Hd.clear,values:Hd.keys,size:Hd.size,empty:Hd.empty,each:Hd.each};var jd=function(t){var n=[];for(var e in t)n.push(e);return n},Xd=function(t){var n=[];for(var e in t)n.push(t[e]);return n},$d=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},Vd=function(t){function n(t,n){var r,i,o=e(t,function(t,e){if(r)return r(t,e-1);i=t,r=n?Je(t,n):Ge(t)});return o.columns=i,o}function e(t,n){function e(){if(f>=s)return u;if(i)return i=!1,o;var n,e=f;if(34===t.charCodeAt(e)){for(var r=e;r++<s;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return f=r+2,n=t.charCodeAt(r+1),13===n?(i=!0,10===t.charCodeAt(r+2)&&++f):10===n&&(i=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;f<s;){var a=1;if(10===(n=t.charCodeAt(f++)))i=!0;else if(13===n)i=!0,10===t.charCodeAt(f)&&(++f,++a);else if(n!==c)continue;return t.slice(e,f-a)}return t.slice(e)}for(var r,i,o={},u={},a=[],s=t.length,f=0,l=0;(r=e())!==u;){for(var h=[];r!==o&&r!==u;)h.push(r),r=e();n&&null==(h=n(h,l++))||a.push(h)}return a}function r(n,e){return null==e&&(e=Qe(n)),[e.map(u).join(t)].concat(n.map(function(n){return e.map(function(t){return u(n[t])}).join(t)})).join("\n")}function i(t){return t.map(o).join("\n")}function o(n){return n.map(u).join(t)}function u(t){return null==t?"":a.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var a=new RegExp('["'+t+"\n\r]"),c=t.charCodeAt(0);return{parse:n,parseRows:e,format:r,formatRows:i}},Wd=Vd(","),Zd=Wd.parse,Gd=Wd.parseRows,Jd=Wd.format,Qd=Wd.formatRows,Kd=Vd("\t"),tv=Kd.parse,nv=Kd.parseRows,ev=Kd.format,rv=Kd.formatRows,iv=function(t,n){function e(){var e,i,o=r.length,u=0,a=0;for(e=0;e<o;++e)i=r[e],u+=i.x,a+=i.y;for(u=u/o-t,a=a/o-n,e=0;e<o;++e)i=r[e],i.x-=u,i.y-=a}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},ov=function(t){return function(){return t}},uv=function(){return 1e-6*(Math.random()-.5)},av=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Ke(this.cover(n,e),n,e,t)},cv=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var u,a,c=i-e,s=this._root;switch(a=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,o=r+c,t>i||n>o);break;case 1:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,o=r+c,e>t||n>o);break;case 2:do{u=new Array(4),u[a]=s,s=u}while(c*=2,i=e+c,r=o-c,t>i||r>n);break;case 3:do{u=new Array(4),u[a]=s,s=u}while(c*=2,e=i-c,r=o-c,e>t||r>n)}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},sv=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},fv=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},lv=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i},hv=function(t,n,e){var r,i,o,u,a,c,s,f=this._x0,l=this._y0,h=this._x1,p=this._y1,d=[],v=this._root;for(v&&d.push(new lv(v,f,l,h,p)),null==e?e=1/0:(f=t-e,l=n-e,h=t+e,p=n+e,e*=e);c=d.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>p||(u=c.x1)<f||(a=c.y1)<l))if(v.length){var _=(i+u)/2,y=(o+a)/2;d.push(new lv(v[3],_,y,u,a),new lv(v[2],i,y,_,a),new lv(v[1],_,o,u,y),new lv(v[0],i,o,_,y)),(s=(n>=y)<<1|t>=_)&&(c=d[d.length-1],d[d.length-1]=d[d.length-1-s],d[d.length-1-s]=c)}else{var g=t-+this._x.call(null,v.data),m=n-+this._y.call(null,v.data),x=g*g+m*m;if(x<e){var b=Math.sqrt(e=x);f=t-b,l=n-b,h=t+b,p=n+b,r=v.data}}return r},pv=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,c,s,f,l,h,p=this._root,d=this._x0,v=this._y0,_=this._x1,y=this._y1;if(!p)return this;if(p.length)for(;;){if((s=o>=(a=(d+_)/2))?d=a:_=a,(f=u>=(c=(v+y)/2))?v=c:y=c,n=p,!(p=p[l=f<<1|s]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[h]=p:this._root=p),this):(this._root=i,this)},dv=function(){return this._root},vv=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},_v=function(t){var n,e,r,i,o,u,a=[],c=this._root;for(c&&a.push(new lv(c,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&c.length){var s=(r+o)/2,f=(i+u)/2;(e=c[3])&&a.push(new lv(e,s,f,o,u)),(e=c[2])&&a.push(new lv(e,r,f,s,u)),(e=c[1])&&a.push(new lv(e,s,i,o,f)),(e=c[0])&&a.push(new lv(e,r,i,s,f))}return this},yv=function(t){var n,e=[],r=[];for(this._root&&e.push(new lv(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,a=n.y0,c=n.x1,s=n.y1,f=(u+c)/2,l=(a+s)/2;(o=i[0])&&e.push(new lv(o,u,a,f,l)),(o=i[1])&&e.push(new lv(o,f,a,c,l)),(o=i[2])&&e.push(new lv(o,u,l,f,s)),(o=i[3])&&e.push(new lv(o,f,l,c,s))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},gv=function(t){return arguments.length?(this._x=t,this):this._x},mv=function(t){return arguments.length?(this._y=t,this):this._y},xv=ir.prototype=or.prototype;xv.copy=function(){var t,n,e=new or(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=ur(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=ur(n));return e},xv.add=av,xv.addAll=tr,xv.cover=cv,xv.data=sv,xv.extent=fv,xv.find=hv,xv.remove=pv,xv.removeAll=nr,xv.root=dv,xv.size=vv,xv.visit=_v,xv.visitAfter=yv,xv.x=gv,xv.y=mv;var bv,wv=function(t){function n(){function t(t,n,e,r,i){var o=t.data,a=t.r,p=l+a;{if(!o)return n>s+p||r<s-p||e>f+p||i<f-p;if(o.index>c.index){var d=s-o.x-o.vx,v=f-o.y-o.vy,_=d*d+v*v;_<p*p&&(0===d&&(d=uv(),_+=d*d),0===v&&(v=uv(),_+=v*v),_=(p-(_=Math.sqrt(_)))/_*u,c.vx+=(d*=_)*(p=(a*=a)/(h+a)),c.vy+=(v*=_)*p,o.vx-=d*(p=1-p),o.vy-=v*p)}}}for(var n,r,c,s,f,l,h,p=i.length,d=0;d<a;++d)for(r=ir(i,ar,cr).visitAfter(e),n=0;n<p;++n)c=i[n],l=o[c.index],h=l*l,s=c.x+c.vx,f=c.y+c.vy,r.visit(t)}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i)}}var i,o,u=1,a=1
;return"function"!=typeof t&&(t=ov(null==t?1:+t)),n.initialize=function(t){i=t,r()},n.iterations=function(t){return arguments.length?(a=+t,n):a},n.strength=function(t){return arguments.length?(u=+t,n):u},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:ov(+e),r(),n):t},n},Mv=function(t){function n(t){return 1/Math.min(s[t.source.index],s[t.target.index])}function e(n){for(var e=0,r=t.length;e<d;++e)for(var i,o,c,s,l,h,p,v=0;v<r;++v)i=t[v],o=i.source,c=i.target,s=c.x+c.vx-o.x-o.vx||uv(),l=c.y+c.vy-o.y-o.vy||uv(),h=Math.sqrt(s*s+l*l),h=(h-a[v])/h*n*u[v],s*=h,l*=h,c.vx-=s*(p=f[v]),c.vy-=l*p,o.vx+=s*(p=1-p),o.vy+=l*p}function r(){if(c){var n,e,r=c.length,h=t.length,p=He(c,l);for(n=0,s=new Array(r);n<h;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=fr(p,e.source)),"object"!=typeof e.target&&(e.target=fr(p,e.target)),s[e.source.index]=(s[e.source.index]||0)+1,s[e.target.index]=(s[e.target.index]||0)+1;for(n=0,f=new Array(h);n<h;++n)e=t[n],f[n]=s[e.source.index]/(s[e.source.index]+s[e.target.index]);u=new Array(h),i(),a=new Array(h),o()}}function i(){if(c)for(var n=0,e=t.length;n<e;++n)u[n]=+h(t[n],n,t)}function o(){if(c)for(var n=0,e=t.length;n<e;++n)a[n]=+p(t[n],n,t)}var u,a,c,s,f,l=sr,h=n,p=ov(30),d=1;return null==t&&(t=[]),e.initialize=function(t){c=t,r()},e.links=function(n){return arguments.length?(t=n,r(),e):t},e.id=function(t){return arguments.length?(l=t,e):l},e.iterations=function(t){return arguments.length?(d=+t,e):d},e.strength=function(t){return arguments.length?(h="function"==typeof t?t:ov(+t),i(),e):h},e.distance=function(t){return arguments.length?(p="function"==typeof t?t:ov(+t),o(),e):p},e},Tv=10,kv=Math.PI*(3-Math.sqrt(5)),Nv=function(t){function n(){e(),p.call("tick",o),u<a&&(h.stop(),p.call("end",o))}function e(){var n,e,r=t.length;for(u+=(s-u)*c,l.each(function(t){t(u)}),n=0;n<r;++n)e=t[n],null==e.fx?e.x+=e.vx*=f:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=f:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=Tv*Math.sqrt(e),o=e*kv;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var o,u=1,a=.001,c=1-Math.pow(a,1/300),s=0,f=.6,l=He(),h=mn(n),p=v("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(u=+t,o):u},alphaMin:function(t){return arguments.length?(a=+t,o):a},alphaDecay:function(t){return arguments.length?(c=+t,o):+c},alphaTarget:function(t){return arguments.length?(s=+t,o):s},velocityDecay:function(t){return arguments.length?(f=1-t,o):1-f},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,u,a,c,s=0,f=t.length;for(null==r?r=1/0:r*=r,s=0;s<f;++s)a=t[s],i=n-a.x,o=e-a.y,(u=i*i+o*o)<r&&(c=a,r=u);return c},on:function(t,n){return arguments.length>1?(p.on(t,n),o):p.on(t)}}},Sv=function(){function t(t){var n,a=i.length,c=ir(i,lr,hr).visitAfter(e);for(u=t,n=0;n<a;++n)o=i[n],c.visit(r)}function n(){if(i){var t,n,e=i.length;for(a=new Array(e),t=0;t<e;++t)n=i[t],a[n.index]=+c(n,t,i)}}function e(t){var n,e,r,i,o,u=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=n.value)&&(u+=e,r+=e*n.x,i+=e*n.y);t.x=r/u,t.y=i/u}else{n=t,n.x=n.data.x,n.y=n.data.y;do{u+=a[n.data.index]}while(n=n.next)}t.value=u}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,c=t.y-o.y,h=r-n,p=i*i+c*c;if(h*h/l<p)return p<f&&(0===i&&(i=uv(),p+=i*i),0===c&&(c=uv(),p+=c*c),p<s&&(p=Math.sqrt(s*p)),o.vx+=i*t.value*u/p,o.vy+=c*t.value*u/p),!0;if(!(t.length||p>=f)){(t.data!==o||t.next)&&(0===i&&(i=uv(),p+=i*i),0===c&&(c=uv(),p+=c*c),p<s&&(p=Math.sqrt(s*p)));do{t.data!==o&&(h=a[t.data.index]*u/p,o.vx+=i*h,o.vy+=c*h)}while(t=t.next)}}var i,o,u,a,c=ov(-30),s=1,f=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(c="function"==typeof e?e:ov(+e),n(),t):c},t.distanceMin=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.distanceMax=function(n){return arguments.length?(f=n*n,t):Math.sqrt(f)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},Ev=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=ov(.1);return"function"!=typeof t&&(t=ov(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:ov(+t),e(),n):u},n.x=function(r){return arguments.length?(t="function"==typeof r?r:ov(+r),e(),n):t},n},Av=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=ov(.1);return"function"!=typeof t&&(t=ov(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:ov(+t),e(),n):u},n.y=function(r){return arguments.length?(t="function"==typeof r?r:ov(+r),e(),n):t},n},Cv=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},zv=function(t){return t=Cv(Math.abs(t)),t?t[1]:NaN},Pv=function(t,n){return function(e,r){for(var i=e.length,o=[],u=0,a=t[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(e.substring(i-=a,i+a)),!((c+=a+1)>r));)a=t[u=(u+1)%t.length];return o.reverse().join(n)}},Lv=function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}},Rv=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},qv=function(t,n){var e=Cv(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(bv=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length;return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Cv(t,Math.max(0,n+o-1))[0]},Uv=function(t,n){var e=Cv(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},Dv={"":Rv,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Uv(100*t,n)},r:Uv,s:qv,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Ov=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;pr.prototype=dr.prototype,dr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var Fv,Iv=function(t){return t},Yv=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],Bv=function(t){function n(t){function n(t){var n,i,a,f=_,x=y;if("c"===v)x=g(t)+x,t="";else{t=+t;var b=t<0;if(t=g(Math.abs(t),d),b&&0==+t&&(b=!1),f=(b?"("===s?s:"-":"-"===s||"("===s?"":s)+f,x=x+("s"===v?Yv[8+bv/3]:"")+(b&&"("===s?")":""),m)for(n=-1,i=t.length;++n<i;)if(48>(a=t.charCodeAt(n))||a>57){x=(46===a?o+t.slice(n+1):t.slice(n))+x,t=t.slice(0,n);break}}p&&!l&&(t=r(t,1/0));var w=f.length+t.length+x.length,M=w<h?new Array(h-w+1).join(e):"";switch(p&&l&&(t=r(M+t,M.length?h-x.length:1/0),M=""),c){case"<":t=f+t+x+M;break;case"=":t=f+M+t+x;break;case"^":t=M.slice(0,w=M.length>>1)+f+t+x+M.slice(w);break;default:t=M+f+t+x}return u(t)}t=pr(t);var e=t.fill,c=t.align,s=t.sign,f=t.symbol,l=t.zero,h=t.width,p=t.comma,d=t.precision,v=t.type,_="$"===f?i[0]:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",y="$"===f?i[1]:/[%p]/.test(v)?a:"",g=Dv[v],m=!v||/[defgprs%]/.test(v);return d=null==d?v?6:12:/[gprs]/.test(v)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d)),n.toString=function(){return t+""},n}function e(t,e){var r=n((t=pr(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(zv(e)/3))),o=Math.pow(10,-i),u=Yv[8+i/3];return function(t){return r(o*t)+u}}var r=t.grouping&&t.thousands?Pv(t.grouping,t.thousands):Iv,i=t.currency,o=t.decimal,u=t.numerals?Lv(t.numerals):Iv,a=t.percent||"%";return{format:n,formatPrefix:e}};vr({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var Hv=function(t){return Math.max(0,-zv(Math.abs(t)))},jv=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(zv(n)/3)))-zv(Math.abs(t)))},Xv=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,zv(n)-zv(t))+1},$v=function(){return new _r};_r.prototype={constructor:_r,reset:function(){this.s=this.t=0},add:function(t){yr(T_,t,this.t),yr(this,T_.s,this.s),this.s?this.t+=T_.t:this.s=T_.t},valueOf:function(){return this.s}};var Vv,Wv,Zv,Gv,Jv,Qv,Kv,t_,n_,e_,r_,i_,o_,u_,a_,c_,s_,f_,l_,h_,p_,d_,v_,__,y_,g_,m_,x_,b_,w_,M_,T_=new _r,k_=1e-6,N_=Math.PI,S_=N_/2,E_=N_/4,A_=2*N_,C_=180/N_,z_=N_/180,P_=Math.abs,L_=Math.atan,R_=Math.atan2,q_=Math.cos,U_=Math.ceil,D_=Math.exp,O_=Math.log,F_=Math.pow,I_=Math.sin,Y_=Math.sign||function(t){return t>0?1:t<0?-1:0},B_=Math.sqrt,H_=Math.tan,j_={Feature:function(t,n){wr(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)wr(e[r].geometry,n)}},X_={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){Mr(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Mr(e[r],n,0)},Polygon:function(t,n){Tr(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Tr(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)wr(e[r],n)}},$_=function(t,n){t&&j_.hasOwnProperty(t.type)?j_[t.type](t,n):wr(t,n)},V_=$v(),W_=$v(),Z_={point:br,lineStart:br,lineEnd:br,polygonStart:function(){V_.reset(),Z_.lineStart=kr,Z_.lineEnd=Nr},polygonEnd:function(){var t=+V_;W_.add(t<0?A_+t:t),this.lineStart=this.lineEnd=this.point=br},sphere:function(){W_.add(A_)}},G_=function(t){return W_.reset(),$_(t,Z_),2*W_},J_=$v(),Q_={point:Ur,lineStart:Or,lineEnd:Fr,polygonStart:function(){Q_.point=Ir,Q_.lineStart=Yr,Q_.lineEnd=Br,J_.reset(),Z_.polygonStart()},polygonEnd:function(){Z_.polygonEnd(),Q_.point=Ur,Q_.lineStart=Or,Q_.lineEnd=Fr,V_<0?(Qv=-(t_=180),Kv=-(n_=90)):J_>k_?n_=90:J_<-k_&&(Kv=-90),a_[0]=Qv,a_[1]=t_}},K_=function(t){var n,e,r,i,o,u,a;if(n_=t_=-(Qv=Kv=1/0),u_=[],$_(t,Q_),e=u_.length){for(u_.sort(jr),n=1,r=u_[0],o=[r];n<e;++n)i=u_[n],Xr(r,i[0])||Xr(r,i[1])?(Hr(r[0],i[1])>Hr(r[0],r[1])&&(r[1]=i[1]),Hr(i[0],r[1])>Hr(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(u=-1/0,e=o.length-1,n=0,r=o[e];n<=e;r=i,++n)i=o[n],(a=Hr(r[1],i[0]))>u&&(u=a,Qv=i[0],t_=r[1])}return u_=a_=null,Qv===1/0||Kv===1/0?[[NaN,NaN],[NaN,NaN]]:[[Qv,Kv],[t_,n_]]},ty={sphere:br,point:$r,lineStart:Wr,lineEnd:Jr,polygonStart:function(){ty.lineStart=Qr,ty.lineEnd=Kr},polygonEnd:function(){ty.lineStart=Wr,ty.lineEnd=Jr}},ny=function(t){c_=s_=f_=l_=h_=p_=d_=v_=__=y_=g_=0,$_(t,ty);var n=__,e=y_,r=g_,i=n*n+e*e+r*r;return i<1e-12&&(n=p_,e=d_,r=v_,s_<k_&&(n=f_,e=l_,r=h_),(i=n*n+e*e+r*r)<1e-12)?[NaN,NaN]:[R_(e,n)*C_,mr(r/B_(i))*C_]},ey=function(t){return function(){return t}},ry=function(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e};ei.invert=ei;var iy,oy,uy,ay,cy,sy,fy,ly,hy,py,dy,vy=function(t){function n(n){return n=t(n[0]*z_,n[1]*z_),n[0]*=C_,n[1]*=C_,n}return t=ri(t[0]*z_,t[1]*z_,t.length>2?t[2]*z_:0),n.invert=function(n){return n=t.invert(n[0]*z_,n[1]*z_),n[0]*=C_,n[1]*=C_,n},n},_y=function(){function t(t,n){e.push(t=r(t,n)),t[0]*=C_,t[1]*=C_}function n(){var t=i.apply(this,arguments),n=o.apply(this,arguments)*z_,c=u.apply(this,arguments)*z_;return e=[],r=ri(-t[0]*z_,-t[1]*z_,0).invert,ai(a,n,c,1),t={type:"Polygon",coordinates:[e]},e=r=null,t}var e,r,i=ey([0,0]),o=ey(90),u=ey(6),a={point:t};return n.center=function(t){return arguments.length?(i="function"==typeof t?t:ey([+t[0],+t[1]]),n):i},n.radius=function(t){return arguments.length?(o="function"==typeof t?t:ey(+t),n):o},n.precision=function(t){return arguments.length?(u="function"==typeof t?t:ey(+t),n):u},n},yy=function(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:br,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}},gy=function(t,n,e,r,i,o){var u,a=t[0],c=t[1],s=n[0],f=n[1],l=0,h=1,p=s-a,d=f-c;if(u=e-a,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<h&&(h=u)}else if(p>0){if(u>h)return;u>l&&(l=u)}if(u=i-a,p||!(u<0)){if(u/=p,p<0){if(u>h)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<h&&(h=u)}if(u=r-c,d||!(u>0)){if(u/=d,d<0){if(u<l)return;u<h&&(h=u)}else if(d>0){if(u>h)return;u>l&&(l=u)}if(u=o-c,d||!(u<0)){if(u/=d,d<0){if(u>h)return;u>l&&(l=u)}else if(d>0){if(u<l)return;u<h&&(h=u)}return l>0&&(t[0]=a+l*p,t[1]=c+l*d),h<1&&(n[0]=a+h*p,n[1]=c+h*d),!0}}}}},my=function(t,n){return P_(t[0]-n[0])<k_&&P_(t[1]-n[1])<k_},xy=function(t,n,e,r,i){var o,u,a=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],u=t[n];if(my(r,u)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}a.push(e=new si(r,t,null,!0)),c.push(e.o=new si(r,null,e,!1)),a.push(e=new si(u,t,null,!1)),c.push(e.o=new si(u,null,e,!0))}}),a.length){for(c.sort(n),fi(a),fi(c),o=0,u=c.length;o<u;++o)c[o].e=e=!e;for(var s,f,l=a[0];;){for(var h=l,p=!0;h.v;)if((h=h.n)===l)return;s=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(o=0,u=s.length;o<u;++o)i.point((f=s[o])[0],f[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(p)for(s=h.p.z,o=s.length-1;o>=0;--o)i.point((f=s[o])[0],f[1]);else r(h.x,h.p.x,-1,i);h=h.p}h=h.o,s=h.z,p=!p}while(!h.v);i.lineEnd()}}},by=1e9,wy=-by,My=function(){var t,n,e,r=0,i=0,o=960,u=500;return e={stream:function(e){return t&&n===e?t:t=li(r,i,o,u)(n=e)},extent:function(a){return arguments.length?(r=+a[0][0],i=+a[0][1],o=+a[1][0],u=+a[1][1],t=n=null,e):[[r,i],[o,u]]}}},Ty=$v(),ky=function(t,n){var e=n[0],r=n[1],i=[I_(e),-q_(e),0],o=0,u=0;Ty.reset();for(var a=0,c=t.length;a<c;++a)if(f=(s=t[a]).length)for(var s,f,l=s[f-1],h=l[0],p=l[1]/2+E_,d=I_(p),v=q_(p),_=0;_<f;++_,h=g,d=x,v=b,l=y){var y=s[_],g=y[0],m=y[1]/2+E_,x=I_(m),b=q_(m),w=g-h,M=w>=0?1:-1,T=M*w,k=T>N_,N=d*x;if(Ty.add(R_(N*M*I_(T),v*b+N*q_(T))),o+=k?w+M*A_:w,k^h>=e^g>=e){var S=Pr(Cr(l),Cr(y));qr(S);var E=Pr(i,S);qr(E);var A=(k^w>=0?-1:1)*mr(E[2]);(r>A||r===A&&(S[0]||S[1]))&&(u+=k^w>=0?1:-1)}}return(o<-k_||o<k_&&Ty<-k_)^1&u},Ny=$v(),Sy={sphere:br,point:br,lineStart:hi,lineEnd:br,polygonStart:br,polygonEnd:br},Ey=function(t){return Ny.reset(),$_(t,Sy),+Ny},Ay=[null,null],Cy={type:"LineString",coordinates:Ay},zy=function(t,n){return Ay[0]=t,Ay[1]=n,Ey(Cy)},Py={Feature:function(t,n){return _i(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(_i(e[r].geometry,n))return!0;return!1}},Ly={Sphere:function(){return!0},Point:function(t,n){return yi(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(yi(e[r],n))return!0;return!1},LineString:function(t,n){return gi(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(gi(e[r],n))return!0;return!1},Polygon:function(t,n){return mi(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(mi(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(_i(e[r],n))return!0;return!1}},Ry=function(t,n){return(t&&Py.hasOwnProperty(t.type)?Py[t.type]:_i)(t,n)},qy=function(t,n){var e=t[0]*z_,r=t[1]*z_,i=n[0]*z_,o=n[1]*z_,u=q_(r),a=I_(r),c=q_(o),s=I_(o),f=u*q_(e),l=u*I_(e),h=c*q_(i),p=c*I_(i),d=2*mr(B_(xr(o-r)+u*c*xr(i-e))),v=I_(d),_=d?function(t){var n=I_(t*=d)/v,e=I_(d-t)/v,r=e*f+n*h,i=e*l+n*p,o=e*a+n*s;return[R_(i,r)*C_,R_(o,B_(r*r+i*i))*C_]}:function(){return[e*C_,r*C_]};return _.distance=d,_},Uy=function(t){return t},Dy=$v(),Oy=$v(),Fy={point:br,lineStart:br,lineEnd:br,polygonStart:function(){Fy.lineStart=Ni,Fy.lineEnd=Ai},polygonEnd:function(){Fy.lineStart=Fy.lineEnd=Fy.point=br,Dy.add(P_(Oy)),Oy.reset()},result:function(){var t=Dy/2;return Dy.reset(),t}},Iy=1/0,Yy=Iy,By=-Iy,Hy=By,jy={point:Ci,lineStart:br,lineEnd:br,polygonStart:br,polygonEnd:br,result:function(){var t=[[Iy,Yy],[By,Hy]];return By=Hy=-(Yy=Iy=1/0),t}},Xy=0,$y=0,Vy=0,Wy=0,Zy=0,Gy=0,Jy=0,Qy=0,Ky=0,tg={point:zi,lineStart:Pi,lineEnd:qi,polygonStart:function(){tg.lineStart=Ui,tg.lineEnd=Di},polygonEnd:function(){tg.point=zi,tg.lineStart=Pi,tg.lineEnd=qi},result:function(){var t=Ky?[Jy/Ky,Qy/Ky]:Gy?[Wy/Gy,Zy/Gy]:Vy?[Xy/Vy,$y/Vy]:[NaN,NaN];return Xy=$y=Vy=Wy=Zy=Gy=Jy=Qy=Ky=0,t}};Ii.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,A_)}},result:br};var ng,eg,rg,ig,og,ug=$v(),ag={point:br,lineStart:function(){ag.point=Yi},lineEnd:function(){ng&&Bi(eg,rg),ag.point=br},polygonStart:function(){ng=!0},polygonEnd:function(){ng=null},result:function(){var t=+ug;return ug.reset(),t}};Hi.prototype={_radius:4.5,_circle:ji(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=ji(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}};var cg=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),$_(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return $_(t,r(Fy)),Fy.result()},e.measure=function(t){return $_(t,r(ag)),ag.result()},e.bounds=function(t){return $_(t,r(jy)),jy.result()},e.centroid=function(t){return $_(t,r(tg)),tg.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,Uy):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Hi):new Ii(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},sg=function(t,n,e,r){return function(i,o){function u(n,e){var r=i(n,e);t(n=r[0],e=r[1])&&o.point(n,e)}function a(t,n){var e=i(t,n);_.point(e[0],e[1])}function c(){b.point=a,_.lineStart()}function s(){b.point=u,_.lineEnd()}function f(t,n){v.push([t,n]);var e=i(t,n);m.point(e[0],e[1])}function l(){m.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),m.lineEnd();var t,n,e,r,i=m.clean(),u=g.result(),a=u.length;if(v.pop(),p.push(v),v=null,a)if(1&i){if(e=u[0],(n=e.length-1)>0){for(x||(o.polygonStart(),x=!0),o.lineStart(),t=0;t<n;++t)o.point((r=e[t])[0],r[1]);o.lineEnd()}}else a>1&&2&i&&u.push(u.pop().concat(u.shift())),d.push(u.filter(Xi))}var p,d,v,_=n(o),y=i.invert(r[0],r[1]),g=yy(),m=n(g),x=!1,b={point:u,lineStart:c,lineEnd:s,polygonStart:function(){b.point=f,b.lineStart=l,b.lineEnd=h,d=[],p=[]},polygonEnd:function(){b.point=u,b.lineStart=c,b.lineEnd=s,d=bf(d);var t=ky(p,y);d.length?(x||(o.polygonStart(),x=!0),xy(d,$i,t,e,o)):t&&(x||(o.polygonStart(),x=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),x&&(o.polygonEnd(),x=!1),d=p=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};return b}},fg=sg(function(){return!0},Vi,Zi,[-N_,-S_]),lg=function(t,n){function e(e,r,i,o){ai(o,t,n,i,e,r)}function r(t,n){return q_(t)*q_(n)>a}function i(t){var n,e,i,a,f;return{lineStart:function(){a=i=!1,f=1},point:function(l,h){var p,d=[l,h],v=r(l,h),_=c?v?0:u(l,h):v?u(l+(l<0?N_:-N_),h):0;if(!n&&(a=i=v)&&t.lineStart(),v!==i&&(!(p=o(n,d))||my(n,p)||my(d,p))&&(d[0]+=k_,d[1]+=k_,v=r(d[0],d[1])),v!==i)f=0,v?(t.lineStart(),p=o(d,n),t.point(p[0],p[1])):(p=o(n,d),t.point(p[0],p[1]),t.lineEnd()),n=p;else if(s&&n&&c^v){var y;_&e||!(y=o(d,n,!0))||(f=0,c?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&my(n,d)||t.point(d[0],d[1]),n=d,i=v,e=_},lineEnd:function(){i&&t.lineEnd(),n=null},clean:function(){return f|(a&&i)<<1}}}function o(t,n,e){var r=Cr(t),i=Cr(n),o=[1,0,0],u=Pr(r,i),c=zr(u,u),s=u[0],f=c-s*s;if(!f)return!e&&t;var l=a*c/f,h=-a*s/f,p=Pr(o,u),d=Rr(o,l);Lr(d,Rr(u,h));var v=p,_=zr(d,v),y=zr(v,v),g=_*_-y*(zr(d,d)-1);if(!(g<0)){var m=B_(g),x=Rr(v,(-_-m)/y);if(Lr(x,d),x=Ar(x),!e)return x;var b,w=t[0],M=n[0],T=t[1],k=n[1];M<w&&(b=w,w=M,M=b);var N=M-w,S=P_(N-N_)<k_,E=S||N<k_;if(!S&&k<T&&(b=T,T=k,k=b),E?S?T+k>0^x[1]<(P_(x[0]-w)<k_?T:k):T<=x[1]&&x[1]<=k:N>N_^(w<=x[0]&&x[0]<=M)){var A=Rr(v,(-_+m)/y);return Lr(A,d),[x,Ar(A)]}}}function u(n,e){var r=c?t:N_-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var a=q_(t),c=a>0,s=P_(a)>k_;return sg(r,i,e,c?[0,-t]:[-N_,t-N_])},hg=function(t){return{stream:Gi(t)}};Ji.prototype={constructor:Ji,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var pg=16,dg=q_(30*z_),vg=function(t,n){return+n?no(t,n):to(t)},_g=Gi({point:function(t,n){this.stream.point(t*z_,n*z_)}}),yg=function(){return io(uo).scale(155.424).center([0,33.6442])},gg=function(){return yg().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])},mg=function(){function t(t){var n=t[0],e=t[1];return a=null,i.point(n,e),a||(o.point(n,e),a)||(u.point(n,e),a)}function n(){return e=r=null,t}var e,r,i,o,u,a,c=gg(),s=yg().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=yg().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){a=[t,n]}};return t.invert=function(t){var n=c.scale(),e=c.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:c).invert(t)},t.stream=function(t){return e&&r===t?e:e=ao([c.stream(r=t),s.stream(t),f.stream(t)])},t.precision=function(t){return arguments.length?(c.precision(t),s.precision(t),f.precision(t),n()):c.precision()},t.scale=function(n){return arguments.length?(c.scale(n),s.scale(.35*n),f.scale(n),t.translate(c.translate())):c.scale()},t.translate=function(t){if(!arguments.length)return c.translate();var e=c.scale(),r=+t[0],a=+t[1];return i=c.translate(t).clipExtent([[r-.455*e,a-.238*e],[r+.455*e,a+.238*e]]).stream(l),o=s.translate([r-.307*e,a+.201*e]).clipExtent([[r-.425*e+k_,a+.12*e+k_],[r-.214*e-k_,a+.234*e-k_]]).stream(l),u=f.translate([r-.205*e,a+.212*e]).clipExtent([[r-.214*e+k_,a+.166*e+k_],[r-.115*e-k_,a+.234*e-k_]]).stream(l),n()},t.fitExtent=function(n,e){return Qi(t,n,e)},t.fitSize=function(n,e){return Ki(t,n,e)},t.scale(1070)},xg=co(function(t){return B_(2/(1+t))});xg.invert=so(function(t){return 2*mr(t/2)});var bg=function(){return eo(xg).scale(124.75).clipAngle(179.999)},wg=co(function(t){return(t=gr(t))&&t/I_(t)});wg.invert=so(function(t){return t});var Mg=function(){return eo(wg).scale(79.4188).clipAngle(179.999)};fo.invert=function(t,n){return[t,2*L_(D_(n))-S_]};var Tg=function(){return lo(fo).scale(961/A_)},kg=function(){return io(po).scale(109.5).parallels([30,30])};vo.invert=vo;var Ng=function(){return eo(vo).scale(152.63)},Sg=function(){return io(_o).scale(131.154).center([0,13.9389])};yo.invert=so(L_);var Eg=function(){return eo(yo).scale(144.049).clipAngle(60)},Ag=function(){function t(){return i=o=null,u}var n,e,r,i,o,u,a=1,c=0,s=0,f=1,l=1,h=Uy,p=null,d=Uy;return u={stream:function(t){return i&&o===t?i:i=h(d(o=t))},clipExtent:function(i){return arguments.length?(d=null==i?(p=n=e=r=null,Uy):li(p=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==p?null:[[p,n],[e,r]]},scale:function(n){return arguments.length?(h=go((a=+n)*f,a*l,c,s),t()):a},translate:function(n){return arguments.length?(h=go(a*f,a*l,c=+n[0],s=+n[1]),t()):[c,s]},reflectX:function(n){return arguments.length?(h=go(a*(f=n?-1:1),a*l,c,s),t()):f<0},reflectY:function(n){return arguments.length?(h=go(a*f,a*(l=n?-1:1),c,s),t()):l<0},fitExtent:function(t,n){return Qi(u,t,n)},fitSize:function(t,n){return Ki(u,t,n)}}};mo.invert=so(mr);var Cg=function(){return eo(mo).scale(249.5).clipAngle(90+k_)};xo.invert=so(function(t){return 2*L_(t)});var zg=function(){return eo(xo).scale(250).clipAngle(142)};bo.invert=function(t,n){return[-n,2*L_(D_(t))-S_]};var Pg=function(){var t=lo(bo),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)},Lg=function(){function t(t){var o,u=0;t.eachAfter(function(t){var e=t.children;e?(t.x=Mo(e),t.y=ko(e)):(t.x=o?u+=n(t,o):0,t.y=0,o=t)});var a=So(t),c=Eo(t),s=a.x-n(a,c)/2,f=c.x+n(c,a)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-s)/(f-s)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=wo,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},Rg=function(){return this.eachAfter(Ao)},qg=function(t){var n,e,r,i,o=this,u=[o];do{for(n=u.reverse(),u=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r])}while(u.length);return this},Ug=function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},Dg=function(t){for(var n,e,r,i=this,o=[i],u=[];i=o.pop();)if(u.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=u.pop();)t(i);return this},Og=function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},Fg=function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},Ig=function(t){for(var n=this,e=Co(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},Yg=function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},Bg=function(){var t=[];return this.each(function(n){t.push(n)}),t},Hg=function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},jg=function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n};Uo.prototype=zo.prototype={constructor:Uo,count:Rg,each:qg,eachAfter:Dg,eachBefore:Ug,sum:Og,sort:Fg,path:Ig,ancestors:Yg,descendants:Bg,leaves:Hg,links:jg,copy:Po};var Xg=function(t){for(var n=(t=t.slice()).length,e=null,r=e;n;){var i=new Do(t[n-1]);r=r?r.next=i:e=i,t[void 0]=t[--n]}return{head:e,tail:r}},$g=function(t){return Fo(Xg(t),[])},Vg=function(t){return Vo(t),t},Wg=function(t){return function(){return t}},Zg=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(Qo(n)).eachAfter(Ko(i,.5)).eachBefore(tu(1)):t.eachBefore(Qo(Jo)).eachAfter(Ko(Go,1)).eachAfter(Ko(i,t.r/Math.min(e,r))).eachBefore(tu(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=Go;return t.radius=function(e){return arguments.length?(n=Wo(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Wg(+n),t):i},t},Gg=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},Jg=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(r-n)/t.value;++a<c;)o=u[a],o.y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*s},Qg=function(){function t(t){var u=t.height+1;return t.x0=t.y0=i,t.x1=e,t.y1=r/u,t.eachBefore(n(r,u)),o&&t.eachBefore(Gg),t}function n(t,n){return function(e){e.children&&Jg(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var r=e.x0,o=e.y0,u=e.x1-i,a=e.y1-i;u<r&&(r=u=(r+u)/2),a<o&&(o=a=(o+a)/2),e.x0=r,e.y0=o,e.x1=u,e.y1=a}}var e=1,r=1,i=0,o=!1;return t.round=function(n){return arguments.length?(o=!!n,t):o},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i=+n,t):i},t},Kg="$",tm={depth:-1},nm={},em=function(){function t(t){var r,i,o,u,a,c,s,f=t.length,l=new Array(f),h={};for(i=0;i<f;++i)r=t[i],a=l[i]=new Uo(r),null!=(c=n(r,i,t))&&(c+="")&&(s=Kg+(a.id=c),h[s]=s in h?nm:a);for(i=0;i<f;++i)if(a=l[i],null!=(c=e(t[i],i,t))&&(c+="")){if(!(u=h[Kg+c]))throw new Error("missing: "+c);if(u===nm)throw new Error("ambiguous: "+c);u.children?u.children.push(a):u.children=[a],a.parent=u}else{if(o)throw new Error("multiple roots");o=a}if(!o)throw new Error("no root");if(o.parent=tm,o.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(qo),o.parent=null,f>0)throw new Error("cycle");return o}var n=nu,e=eu;return t.id=function(e){return arguments.length?(n=Zo(e),t):n},t.parentId=function(n){return arguments.length?(e=Zo(n),t):e},t};su.prototype=Object.create(Uo.prototype);var rm=function(){function t(t){var r=fu(t);if(r.eachAfter(n),r.parent.m=-r.z,r.eachBefore(e),c)t.eachBefore(i);else{var s=t,f=t,l=t;t.eachBefore(function(t){t.x<s.x&&(s=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var h=s===f?1:o(s,f)/2,p=h-s.x,d=u/(f.x+h+p),v=a/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+p)*d,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,i=t.i?e[t.i-1]:null;if(n){au(t);var u=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+o(t._,i._),t.m=t.z-u):t.z=u}else i&&(t.z=i.z+o(t._,i._));t.parent.A=r(t,i,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t,n,e){if(n){for(var r,i=t,u=t,a=n,c=i.parent.children[0],s=i.m,f=u.m,l=a.m,h=c.m;a=ou(a),i=iu(i),a&&i;)c=iu(c),u=ou(u),u.a=t,r=a.z+l-i.z-s+o(a._,i._),r>0&&(uu(cu(a,t,e),t,r),s+=r,f+=r),l+=a.m,s+=i.m,h+=c.m,f+=u.m;a&&!ou(u)&&(u.t=a,u.m+=l-f),i&&!iu(c)&&(c.t=i,c.m+=s-h,e=t)}return e}function i(t){t.x*=u,t.y=t.depth*a}var o=ru,u=1,a=1,c=null;return t.separation=function(n){return arguments.length?(o=n,t):o},t.size=function(n){return arguments.length?(c=!1,u=+n[0],a=+n[1],t):c?null:[u,a]},t.nodeSize=function(n){return arguments.length?(c=!0,u=+n[0],a=+n[1],t):c?[u,a]:null},t},im=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(i-e)/t.value;++a<c;)o=u[a],o.x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*s},om=(1+Math.sqrt(5))/2,um=function t(n){function e(t,e,r,i,o){lu(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(om),am=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),u=[0],r&&t.eachBefore(Gg),t}function n(t){var n=u[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,
t.children&&(n=u[t.depth+1]=a(t)/2,r+=l(t)-n,i+=c(t)-n,o-=s(t)-n,h-=f(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=um,r=!1,i=1,o=1,u=[0],a=Go,c=Go,s=Go,f=Go,l=Go;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=Zo(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(a="function"==typeof n?n:Wg(+n),t):a},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(c="function"==typeof n?n:Wg(+n),t):c},t.paddingRight=function(n){return arguments.length?(s="function"==typeof n?n:Wg(+n),t):s},t.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:Wg(+n),t):f},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Wg(+n),t):l},t},cm=function(t,n,e,r,i){function o(t,n,e,r,i,u,a){if(t>=n-1){var s=c[t];return s.x0=r,s.y0=i,s.x1=u,s.y1=a,void 0}for(var l=f[t],h=e/2+l,p=t+1,d=n-1;p<d;){var v=p+d>>>1;f[v]<h?p=v+1:d=v}h-f[p-1]<f[p]-h&&t+1<p&&--p;var _=f[p]-l,y=e-_;if(u-r>a-i){var g=(r*y+u*_)/e;o(t,p,_,r,i,g,a),o(p,n,y,g,i,u,a)}else{var m=(i*y+a*_)/e;o(t,p,_,r,i,u,m),o(p,n,y,r,m,u,a)}}var u,a,c=t.children,s=c.length,f=new Array(s+1);for(f[0]=a=u=0;u<s;++u)f[u+1]=a+=c[u].value;o(0,s,t.value,n,e,r,i)},sm=function(t,n,e,r,i){(1&t.depth?im:Jg)(t,n,e,r,i)},fm=function t(n){function e(t,e,r,i,o){if((u=t._squarify)&&u.ratio===n)for(var u,a,c,s,f,l=-1,h=u.length,p=t.value;++l<h;){for(a=u[l],c=a.children,s=a.value=0,f=c.length;s<f;++s)a.value+=c[s].value;a.dice?Jg(a,e,r,i,r+=(o-r)*a.value/p):im(a,e,r,e+=(i-e)*a.value/p,o),p-=a.value}else t._squarify=u=lu(n,t,e,r,i,o),u.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(om),lm=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},hm=function(t){for(var n,e,r=-1,i=t.length,o=0,u=0,a=t[i-1],c=0;++r<i;)n=a,a=t[r],c+=e=n[0]*a[1]-a[0]*n[1],o+=(n[0]+a[0])*e,u+=(n[1]+a[1])*e;return c*=3,[o/c,u/c]},pm=function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])},dm=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(hu),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=pu(r),u=pu(i),a=u[0]===o[0],c=u[u.length-1]===o[o.length-1],s=[];for(n=o.length-1;n>=0;--n)s.push(t[r[o[n]][2]]);for(n=+a;n<u.length-c;++n)s.push(t[r[u[n]][2]]);return s},vm=function(t,n){for(var e,r,i=t.length,o=t[i-1],u=n[0],a=n[1],c=o[0],s=o[1],f=!1,l=0;l<i;++l)o=t[l],e=o[0],r=o[1],r>a!=s>a&&u<(c-e)*(a-r)/(s-r)+e&&(f=!f),c=e,s=r;return f},_m=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],u=o[0],a=o[1],c=0;++r<i;)n=u,e=a,o=t[r],u=o[0],a=o[1],n-=u,e-=a,c+=Math.sqrt(n*n+e*e);return c},ym=[].slice,gm={};du.prototype=xu.prototype={constructor:du,defer:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("defer after await");if(null!=this._error)return this;var n=ym.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),vu(this),this},abort:function(){return null==this._error&&gu(this,new Error("abort")),this},await:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=function(n,e){t.apply(null,[n].concat(e))},mu(this),this},awaitAll:function(t){if("function"!=typeof t)throw new Error("invalid callback");if(this._call)throw new Error("multiple await");return this._call=t,mu(this),this}};var mm=function(){return Math.random()},xm=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(mm),bm=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(mm),wm=function t(n){function e(){var t=bm.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(mm),Mm=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(mm),Tm=function t(n){function e(t){var e=Mm.source(n)(t);return function(){return e()/t}}return e.source=t,e}(mm),km=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(mm),Nm=function(t,n){function e(t){var n,e=s.status;if(!e&&wu(s)||e>=200&&e<300||304===e){if(o)try{n=o.call(r,s)}catch(t){return void a.call("error",r,t)}else n=s;a.call("load",r,n)}else a.call("error",r,t)}var r,i,o,u,a=v("beforesend","progress","load","error"),c=He(),s=new XMLHttpRequest,f=null,l=null,h=0;if("undefined"==typeof XDomainRequest||"withCredentials"in s||!/^(http(s)?:)?\/\//.test(t)||(s=new XDomainRequest),"onload"in s?s.onload=s.onerror=s.ontimeout=e:s.onreadystatechange=function(t){s.readyState>3&&e(t)},s.onprogress=function(t){a.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?c.get(t):(null==n?c.remove(t):c.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(u=t,r):u},timeout:function(t){return arguments.length?(h=+t,r):h},user:function(t){return arguments.length<1?f:(f=null==t?null:t+"",r)},password:function(t){return arguments.length<1?l:(l=null==t?null:t+"",r)},response:function(t){return o=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,o){return s.open(n,t,!0,f,l),null==i||c.has("accept")||c.set("accept",i+",*/*"),s.setRequestHeader&&c.each(function(t,n){s.setRequestHeader(n,t)}),null!=i&&s.overrideMimeType&&s.overrideMimeType(i),null!=u&&(s.responseType=u),h>0&&(s.timeout=h),null==o&&"function"==typeof e&&(o=e,e=null),null!=o&&1===o.length&&(o=bu(o)),null!=o&&r.on("error",o).on("load",function(t){o(null,t)}),a.call("beforesend",r,s),s.send(null==e?null:e),r},abort:function(){return s.abort(),r},on:function(){var t=a.on.apply(a,arguments);return t===a?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r},Sm=function(t,n){return function(e,r){var i=Nm(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}},Em=Sm("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),Am=Sm("application/json",function(t){return JSON.parse(t.responseText)}),Cm=Sm("text/plain",function(t){return t.responseText}),zm=Sm("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),Pm=function(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var o=Nm(e).mimeType(t);return o.row=function(t){return arguments.length?o.response(Mu(n,r=t)):r},o.row(r),i?o.get(i):o}},Lm=Pm("text/csv",Zd),Rm=Pm("text/tab-separated-values",tv),qm=Array.prototype,Um=qm.map,Dm=qm.slice,Om={name:"implicit"},Fm=function(t){return function(){return t}},Im=function(t){return+t},Ym=[0,1],Bm=function(n,e,r){var o,u=n[0],a=n[n.length-1],c=i(u,a,null==e?10:e);switch(r=pr(null==r?",f":r),r.type){case"s":var s=Math.max(Math.abs(u),Math.abs(a));return null!=r.precision||isNaN(o=jv(c,s))||(r.precision=o),t.formatPrefix(r,s);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(o=Xv(c,Math.max(Math.abs(u),Math.abs(a))))||(r.precision=o-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(o=Hv(c))||(r.precision=o-2*("%"===r.type))}return t.format(r)},Hm=function(t,n){t=t.slice();var e,r=0,i=t.length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t},jm=new Date,Xm=new Date,$m=Ju(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});$m.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Ju(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):$m:null};var Vm=$m.range,Wm=6e4,Zm=6048e5,Gm=Ju(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),Jm=Gm.range,Qm=Ju(function(t){t.setTime(Math.floor(t/Wm)*Wm)},function(t,n){t.setTime(+t+n*Wm)},function(t,n){return(n-t)/Wm},function(t){return t.getMinutes()}),Km=Qm.range,tx=Ju(function(t){var n=t.getTimezoneOffset()*Wm%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),nx=tx.range,ex=Ju(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Wm)/864e5},function(t){return t.getDate()-1}),rx=ex.range,ix=Qu(0),ox=Qu(1),ux=Qu(2),ax=Qu(3),cx=Qu(4),sx=Qu(5),fx=Qu(6),lx=ix.range,hx=ox.range,px=ux.range,dx=ax.range,vx=cx.range,_x=sx.range,yx=fx.range,gx=Ju(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),mx=gx.range,xx=Ju(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});xx.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ju(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var bx=xx.range,wx=Ju(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Wm)},function(t,n){return(n-t)/Wm},function(t){return t.getUTCMinutes()}),Mx=wx.range,Tx=Ju(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),kx=Tx.range,Nx=Ju(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Sx=Nx.range,Ex=Ku(0),Ax=Ku(1),Cx=Ku(2),zx=Ku(3),Px=Ku(4),Lx=Ku(5),Rx=Ku(6),qx=Ex.range,Ux=Ax.range,Dx=Cx.range,Ox=zx.range,Fx=Px.range,Ix=Lx.range,Yx=Rx.range,Bx=Ju(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),Hx=Bx.range,jx=Ju(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});jx.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ju(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Xx,$x=jx.range,Vx={"-":"",_:" ",0:"0"},Wx=/^\s*\d+/,Zx=/^%/,Gx=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;Ja({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Jx=Date.prototype.toISOString?Qa:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"),Qx=+new Date("2000-01-01T00:00:00.000Z")?Ka:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),Kx=1e3,tb=60*Kx,nb=60*tb,eb=24*nb,rb=7*eb,ib=30*eb,ob=365*eb,ub=function(){return ec(xx,gx,ix,ex,tx,Qm,Gm,$m,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},ab=function(){return ec(jx,Bx,Ex,Nx,Tx,wx,Gm,$m,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},cb=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})},sb=cb("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),fb=cb("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),lb=cb("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),hb=cb("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),pb=Zh(Wt(300,.5,0),Wt(-240,.5,1)),db=Zh(Wt(-100,.75,.35),Wt(80,1.5,.8)),vb=Zh(Wt(260,.75,.35),Wt(80,1.5,.8)),_b=Wt(),yb=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return _b.h=360*t-100,_b.s=1.5-1.5*n,_b.l=.8-.9*n,_b+""},gb=rc(cb("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),mb=rc(cb("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),xb=rc(cb("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),bb=rc(cb("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),wb=function(t){return function(){return t}},Mb=Math.abs,Tb=Math.atan2,kb=Math.cos,Nb=Math.max,Sb=Math.min,Eb=Math.sin,Ab=Math.sqrt,Cb=1e-12,zb=Math.PI,Pb=zb/2,Lb=2*zb,Rb=function(){function t(){var t,s,f=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-Pb,p=u.apply(this,arguments)-Pb,d=Mb(p-h),v=p>h;if(c||(c=t=Ue()),l<f&&(s=l,l=f,f=s),l>Cb)if(d>Lb-Cb)c.moveTo(l*kb(h),l*Eb(h)),c.arc(0,0,l,h,p,!v),f>Cb&&(c.moveTo(f*kb(p),f*Eb(p)),c.arc(0,0,f,p,h,v));else{var _,y,g=h,m=p,x=h,b=p,w=d,M=d,T=a.apply(this,arguments)/2,k=T>Cb&&(i?+i.apply(this,arguments):Ab(f*f+l*l)),N=Sb(Mb(l-f)/2,+r.apply(this,arguments)),S=N,E=N;if(k>Cb){var A=uc(k/f*Eb(T)),C=uc(k/l*Eb(T));(w-=2*A)>Cb?(A*=v?1:-1,x+=A,b-=A):(w=0,x=b=(h+p)/2),(M-=2*C)>Cb?(C*=v?1:-1,g+=C,m-=C):(M=0,g=m=(h+p)/2)}var z=l*kb(g),P=l*Eb(g),L=f*kb(b),R=f*Eb(b);if(N>Cb){var q=l*kb(m),U=l*Eb(m),D=f*kb(x),O=f*Eb(x);if(d<zb){var F=w>Cb?hc(z,P,D,O,q,U,L,R):[L,R],I=z-F[0],Y=P-F[1],B=q-F[0],H=U-F[1],j=1/Eb(oc((I*B+Y*H)/(Ab(I*I+Y*Y)*Ab(B*B+H*H)))/2),X=Ab(F[0]*F[0]+F[1]*F[1]);S=Sb(N,(f-X)/(j-1)),E=Sb(N,(l-X)/(j+1))}}M>Cb?E>Cb?(_=pc(D,O,z,P,l,E,v),y=pc(q,U,L,R,l,E,v),c.moveTo(_.cx+_.x01,_.cy+_.y01),E<N?c.arc(_.cx,_.cy,E,Tb(_.y01,_.x01),Tb(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,E,Tb(_.y01,_.x01),Tb(_.y11,_.x11),!v),c.arc(0,0,l,Tb(_.cy+_.y11,_.cx+_.x11),Tb(y.cy+y.y11,y.cx+y.x11),!v),c.arc(y.cx,y.cy,E,Tb(y.y11,y.x11),Tb(y.y01,y.x01),!v))):(c.moveTo(z,P),c.arc(0,0,l,g,m,!v)):c.moveTo(z,P),f>Cb&&w>Cb?S>Cb?(_=pc(L,R,q,U,f,-S,v),y=pc(z,P,D,O,f,-S,v),c.lineTo(_.cx+_.x01,_.cy+_.y01),S<N?c.arc(_.cx,_.cy,S,Tb(_.y01,_.x01),Tb(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,S,Tb(_.y01,_.x01),Tb(_.y11,_.x11),!v),c.arc(0,0,f,Tb(_.cy+_.y11,_.cx+_.x11),Tb(y.cy+y.y11,y.cx+y.x11),v),c.arc(y.cx,y.cy,S,Tb(y.y11,y.x11),Tb(y.y01,y.x01),!v))):c.arc(0,0,f,b,x,v):c.lineTo(L,R)}else c.moveTo(0,0);if(c.closePath(),t)return c=null,t+""||null}var n=ac,e=cc,r=wb(0),i=null,o=sc,u=fc,a=lc,c=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +u.apply(this,arguments))/2-zb/2;return[kb(r)*t,Eb(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:wb(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:wb(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:wb(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:wb(+n),t):o},t.endAngle=function(n){return arguments.length?(u="function"==typeof n?n:wb(+n),t):u},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:wb(+n),t):a},t.context=function(n){return arguments.length?(c=null==n?null:n,t):c},t};dc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var qb=function(t){return new dc(t)},Ub=function(){function t(t){var a,c,s,f=t.length,l=!1;for(null==i&&(u=o(s=Ue())),a=0;a<=f;++a)!(a<f&&r(c=t[a],a,t))===l&&((l=!l)?u.lineStart():u.lineEnd()),l&&u.point(+n(c,a,t),+e(c,a,t));if(s)return u=null,s+""||null}var n=vc,e=_c,r=wb(!0),i=null,o=qb,u=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:wb(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:wb(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(u=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=u=null:u=o(i=n),t):i},t},Db=function(){function t(t){var n,f,l,h,p,d=t.length,v=!1,_=new Array(d),y=new Array(d);for(null==a&&(s=c(p=Ue())),n=0;n<=d;++n){if(!(n<d&&u(h=t[n],n,t))===v)if(v=!v)f=n,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),l=n-1;l>=f;--l)s.point(_[l],y[l]);s.lineEnd(),s.areaEnd()}v&&(_[n]=+e(h,n,t),y[n]=+i(h,n,t),s.point(r?+r(h,n,t):_[n],o?+o(h,n,t):y[n]))}if(p)return s=null,p+""||null}function n(){return Ub().defined(u).curve(c).context(a)}var e=vc,r=null,i=wb(0),o=_c,u=wb(!0),a=null,c=qb,s=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:wb(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:wb(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:wb(!!n),t):u},t.curve=function(n){return arguments.length?(c=n,null!=a&&(s=c(a)),t):c},t.context=function(n){return arguments.length?(null==n?a=s=null:s=c(a=n),t):a},t},Ob=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Fb=function(t){return t},Ib=function(){function t(t){var a,c,s,f,l,h=t.length,p=0,d=new Array(h),v=new Array(h),_=+i.apply(this,arguments),y=Math.min(Lb,Math.max(-Lb,o.apply(this,arguments)-_)),g=Math.min(Math.abs(y)/h,u.apply(this,arguments)),m=g*(y<0?-1:1);for(a=0;a<h;++a)(l=v[d[a]=a]=+n(t[a],a,t))>0&&(p+=l);for(null!=e?d.sort(function(t,n){return e(v[t],v[n])}):null!=r&&d.sort(function(n,e){return r(t[n],t[e])}),a=0,s=p?(y-h*m)/p:0;a<h;++a,_=f)c=d[a],l=v[c],f=_+(l>0?l*s:0)+m,v[c]={data:t[c],index:a,value:l,startAngle:_,endAngle:f,padAngle:g};return v}var n=Fb,e=Ob,r=null,i=wb(0),o=wb(Lb),u=wb(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:wb(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:wb(+n),t):o},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:wb(+n),t):u},t},Yb=gc(qb);yc.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Bb=function(){return mc(Ub().curve(Yb))},Hb=function(){var t=Db().curve(Yb),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return mc(e())},delete t.lineX0,t.lineEndAngle=function(){return mc(r())},delete t.lineX1,t.lineInnerRadius=function(){return mc(i())},delete t.lineY0,t.lineOuterRadius=function(){return mc(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(gc(t)):n()._curve},t},jb=Array.prototype.slice,Xb=function(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]},$b={draw:function(t,n){var e=Math.sqrt(n/zb);t.moveTo(e,0),t.arc(0,0,e,0,Lb)}},Vb={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},Wb=Math.sqrt(1/3),Zb=2*Wb,Gb={draw:function(t,n){var e=Math.sqrt(n/Zb),r=e*Wb;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Jb=Math.sin(zb/10)/Math.sin(7*zb/10),Qb=Math.sin(Lb/10)*Jb,Kb=-Math.cos(Lb/10)*Jb,tw={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=Qb*e,i=Kb*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var u=Lb*o/5,a=Math.cos(u),c=Math.sin(u);t.lineTo(c*e,-a*e),t.lineTo(a*r-c*i,c*r+a*i)}t.closePath()}},nw={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},ew=Math.sqrt(3),rw={draw:function(t,n){var e=-Math.sqrt(n/(3*ew));t.moveTo(0,2*e),t.lineTo(-ew*e,-e),t.lineTo(ew*e,-e),t.closePath()}},iw=-.5,ow=Math.sqrt(3)/2,uw=1/Math.sqrt(12),aw=3*(uw/2+1),cw={draw:function(t,n){var e=Math.sqrt(n/aw),r=e/2,i=e*uw,o=r,u=e*uw+e,a=-o,c=u;t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,c),t.lineTo(iw*r-ow*i,ow*r+iw*i),t.lineTo(iw*o-ow*u,ow*o+iw*u),t.lineTo(iw*a-ow*c,ow*a+iw*c),t.lineTo(iw*r+ow*i,iw*i-ow*r),t.lineTo(iw*o+ow*u,iw*u-ow*o),t.lineTo(iw*a+ow*c,iw*c-ow*a),t.closePath()}},sw=[$b,Vb,Gb,nw,tw,rw,cw],fw=function(){function t(){var t;if(r||(r=t=Ue()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=wb($b),e=wb(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:wb(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:wb(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},lw=function(){};Cc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ac(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ac(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var hw=function(t){return new Cc(t)};zc.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Ac(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var pw=function(t){return new zc(t)};Pc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Ac(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var dw=function(t){return new Pc(t)};Lc.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*u),this._beta*n[c]+(1-this._beta)*(o+r*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var vw=function t(n){function e(t){return 1===n?new Cc(t):new Lc(t,n)}return e.beta=function(n){return t(+n)},e}(.85);qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Rc(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Rc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,
this._y1=this._y2,this._y2=n}};var _w=function t(n){function e(t){return new qc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Uc.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Rc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var yw=function t(n){function e(t){return new Uc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Dc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Rc(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var gw=function t(n){function e(t){return new Dc(t,n)}return e.tension=function(n){return t(+n)},e}(0);Fc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Oc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var mw=function t(n){function e(t){return n?new Fc(t,n):new qc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Ic.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Oc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var xw=function t(n){function e(t){return n?new Ic(t,n):new Uc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Yc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Oc(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var bw=function t(n){function e(t){return n?new Yc(t,n):new Dc(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Bc.prototype={areaStart:lw,areaEnd:lw,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};var ww=function(t){return new Bc(t)};Vc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:$c(this,this._t0,Xc(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,$c(this,Xc(this,e=jc(this,t,n)),e);break;default:$c(this,this._t0,e=jc(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Wc.prototype=Object.create(Vc.prototype)).point=function(t,n){Vc.prototype.point.call(this,n,t)},Zc.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=Kc(t),i=Kc(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var Mw=function(t){return new Qc(t)};ts.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var Tw=function(t){return new ts(t,.5)},kw=function(t,n){if((i=t.length)>1)for(var e,r,i,o=1,u=t[n[0]],a=u.length;o<i;++o)for(r=u,u=t[n[o]],e=0;e<a;++e)u[e][1]+=u[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]},Nw=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e},Sw=function(){function t(t){var o,u,a=n.apply(this,arguments),c=t.length,s=a.length,f=new Array(s);for(o=0;o<s;++o){for(var l,h=a[o],p=f[o]=new Array(c),d=0;d<c;++d)p[d]=l=[0,+i(t[d],h,d,t)],l.data=t[d];p.key=h}for(o=0,u=e(f);o<s;++o)f[u[o]].index=o;return r(f,u),f}var n=wb([]),e=Nw,r=kw,i=rs;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:wb(jb.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:wb(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?Nw:"function"==typeof n?n:wb(jb.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?kw:n,t):r},t},Ew=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}kw(t,n)}},Aw=function(t,n){if((a=t.length)>1)for(var e,r,i,o,u,a,c=0,s=t[n[0]].length;c<s;++c)for(o=u=0,e=0;e<a;++e)(i=(r=t[n[e]][c])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):r[0]=o},Cw=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0;i[r][1]+=i[r][0]=-a/2}kw(t,n)}},zw=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,c=0,s=0;a<i;++a){for(var f=t[n[a]],l=f[u][1]||0,h=f[u-1][1]||0,p=(l-h)/2,d=0;d<a;++d){var v=t[n[d]];p+=(v[u][1]||0)-(v[u-1][1]||0)}c+=l,s+=p*l}e[u-1][1]+=e[u-1][0]=o,c&&(o-=s/c)}e[u-1][1]+=e[u-1][0]=o,kw(t,n)}},Pw=function(t){var n=t.map(is);return Nw(t).sort(function(t,e){return n[t]-n[e]})},Lw=function(t){return Pw(t).reverse()},Rw=function(t){var n,e,r=t.length,i=t.map(is),o=Nw(t).sort(function(t,n){return i[n]-i[t]}),u=0,a=0,c=[],s=[];for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],c.push(e)):(a+=i[e],s.push(e));return s.reverse().concat(c)},qw=function(t){return Nw(t).reverse()},Uw=function(t){return function(){return t}};as.prototype={constructor:as,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=ls(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(ss(this,e),t=e,e=t.U),e.C=!1,r.C=!0,fs(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(fs(this,e),t=e,e=t.U),e.C=!1,r.C=!0,ss(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,u=t.R;if(e=o?u?ls(u):o:u,i?i.L===t?i.L=e:i.R=e:this._=e,o&&u?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==u?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=u,u.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,ss(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,fs(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,ss(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,fs(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,ss(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,fs(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Dw,Ow,Fw,Iw,Yw,Bw=[],Hw=[],jw=1e-6,Xw=1e-12;Us.prototype={constructor:Us,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return xs(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,u,a=e.site,c=-1,s=n[i[o-1]],f=s.left===a?s.right:s.left;++c<o;)u=f,s=n[i[c]],f=s.left===a?s.right:s.left,u&&f&&r<u.index&&r<f.index&&Rs(a,u,f)<0&&t.push([a.data,u.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,u=o._found||0,a=o.cells.length;!(i=o.cells[u]);)if(++u>=a)return null;var c=t-i.site[0],s=n-i.site[1],f=c*c+s*s;do{i=o.cells[r=u],u=null,i.halfedges.forEach(function(e){var r=o.edges[e],a=r.left;if(a!==i.site&&a||(a=r.right)){var c=t-a[0],s=n-a[1],l=c*c+s*s;l<f&&(f=l,u=a.index)}})}while(null!==u);return o._found=r,null==e||f<=e*e?i.site:null}};var $w=function(){function t(t){return new Us(t.map(function(r,i){var o=[Math.round(n(r,i,t)/jw)*jw,Math.round(e(r,i,t)/jw)*jw];return o.index=i,o.data=r,o}),r)}var n=os,e=us,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:Uw(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Uw(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},Vw=function(t){return function(){return t}};Os.prototype={constructor:Os,scale:function(t){return 1===t?this:new Os(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Os(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ww=new Os(1,0,0);Fs.prototype=Os.prototype;var Zw=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Gw=function(){function n(t){t.on("wheel.zoom",s).on("mousedown.zoom",f).on("dblclick.zoom",l).on("touchstart.zoom",h).on("touchmove.zoom",p).on("touchend.zoom touchcancel.zoom",d).style("-webkit-tap-highlight-color","rgba(0,0,0,0)").property("__zoom",Hs)}function e(t,n){return n=Math.max(x,Math.min(b,n)),n===t.k?t:new Os(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Os(t.k,r,i)}function i(t,n){var e=t.invertX(n[0][0])-w,r=t.invertX(n[1][0])-M,i=t.invertY(n[0][1])-T,o=t.invertY(n[1][1])-k;return t.translate(r>e?(e+r)/2:Math.min(0,e)||Math.max(0,r),o>i?(i+o)/2:Math.min(0,i)||Math.max(0,o))}function o(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function u(t,n,e){t.on("start.zoom",function(){a(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){a(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,i=a(t,r),u=m.apply(t,r),c=e||o(u),s=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),f=t.__zoom,l="function"==typeof n?n.apply(t,r):n,h=S(f.invert(c).concat(s/f.k),l.invert(c).concat(s/l.k));return function(t){if(1===t)t=l;else{var n=h(t),e=s/n[2];t=new Os(e,c[0]-n[0]*e,c[1]-n[1]*e)}i.zoom(null,t)}})}function a(t,n){for(var e,r=0,i=E.length;r<i;++r)if((e=E[r]).that===t)return e;return new c(t,n)}function c(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=m.apply(t,n)}function s(){function n(){o.wheel=null,o.end()}if(g.apply(this,arguments)){var o=a(this,arguments),u=this.__zoom,c=Math.max(x,Math.min(b,u.k*Math.pow(2,-t.event.deltaY*(t.event.deltaMode?120:1)/500))),s=Gf(this);if(o.wheel)o.mouse[0][0]===s[0]&&o.mouse[0][1]===s[1]||(o.mouse[1]=u.invert(o.mouse[0]=s)),clearTimeout(o.wheel);else{if(u.k===c)return;o.mouse=[s,u.invert(s)],gp(this),o.start()}Zw(),o.wheel=setTimeout(n,P),o.zoom("mouse",i(r(e(u,c),o.mouse[0],o.mouse[1]),o.extent))}}function f(){function n(){if(Zw(),!o.moved){var n=t.event.clientX-s,e=t.event.clientY-f;o.moved=n*n+e*e>L}o.zoom("mouse",i(r(o.that.__zoom,o.mouse[0]=Gf(o.that),o.mouse[1]),o.extent))}function e(){u.on("mousemove.zoom mouseup.zoom",null),mt(t.event.view,o.moved),Zw(),o.end()}if(!y&&g.apply(this,arguments)){var o=a(this,arguments),u=Pl(t.event.view).on("mousemove.zoom",n,!0).on("mouseup.zoom",e,!0),c=Gf(this),s=t.event.clientX,f=t.event.clientY;Dl(t.event.view),Is(),o.mouse=[c,this.__zoom.invert(c)],gp(this),o.start()}}function l(){if(g.apply(this,arguments)){var o=this.__zoom,a=Gf(this),c=o.invert(a),s=o.k*(t.event.shiftKey?.5:2),f=i(r(e(o,s),a,c),m.apply(this,arguments));Zw(),N>0?Pl(this).transition().duration(N).call(u,f,a):Pl(this).call(n.transform,f)}}function h(){if(g.apply(this,arguments)){var n,e,r,i,o=a(this,arguments),u=t.event.changedTouches,c=u.length;for(Is(),e=0;e<c;++e)r=u[e],i=Rl(this,u,r.identifier),i=[i,this.__zoom.invert(i),r.identifier],o.touch0?o.touch1||(o.touch1=i):(o.touch0=i,n=!0);if(_&&(_=clearTimeout(_),!o.touch1))return o.end(),void((i=Pl(this).on("dblclick.zoom"))&&i.apply(this,arguments));n&&(_=setTimeout(function(){_=null},z),gp(this),o.start())}}function p(){var n,o,u,c,s=a(this,arguments),f=t.event.changedTouches,l=f.length;for(Zw(),_&&(_=clearTimeout(_)),n=0;n<l;++n)o=f[n],u=Rl(this,f,o.identifier),s.touch0&&s.touch0[2]===o.identifier?s.touch0[0]=u:s.touch1&&s.touch1[2]===o.identifier&&(s.touch1[0]=u);if(o=s.that.__zoom,s.touch1){var h=s.touch0[0],p=s.touch0[1],d=s.touch1[0],v=s.touch1[1],y=(y=d[0]-h[0])*y+(y=d[1]-h[1])*y,g=(g=v[0]-p[0])*g+(g=v[1]-p[1])*g;o=e(o,Math.sqrt(y/g)),u=[(h[0]+d[0])/2,(h[1]+d[1])/2],c=[(p[0]+v[0])/2,(p[1]+v[1])/2]}else{if(!s.touch0)return;u=s.touch0[0],c=s.touch0[1]}s.zoom("touch",i(r(o,u,c),s.extent))}function d(){var n,e,r=a(this,arguments),i=t.event.changedTouches,o=i.length;for(Is(),y&&clearTimeout(y),y=setTimeout(function(){y=null},z),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0?r.touch0[1]=this.__zoom.invert(r.touch0[0]):r.end()}var _,y,g=Ys,m=Bs,x=0,b=1/0,w=-b,M=b,T=w,k=M,N=250,S=Hh,E=[],C=v("start","zoom","end"),z=500,P=150,L=0;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",Hs),t!==e?u(t,n):e.interrupt().each(function(){a(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)})},n.scaleTo=function(t,u){n.transform(t,function(){var t=m.apply(this,arguments),n=this.__zoom,a=o(t),c=n.invert(a);return i(r(e(n,"function"==typeof u?u.apply(this,arguments):u),a,c),t)})},n.translateBy=function(t,e,r){n.transform(t,function(){return i(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),m.apply(this,arguments))})},c.prototype={start:function(){return 1==++this.active&&(this.index=E.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(E.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){A(new Ds(n,t,this.that.__zoom),C.apply,C,[t,this.that,this.args])}},n.filter=function(t){return arguments.length?(g="function"==typeof t?t:Vw(!!t),n):g},n.extent=function(t){return arguments.length?(m="function"==typeof t?t:Vw([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):m},n.scaleExtent=function(t){return arguments.length?(x=+t[0],b=+t[1],n):[x,b]},n.translateExtent=function(t){return arguments.length?(w=+t[0][0],M=+t[1][0],T=+t[0][1],k=+t[1][1],n):[[w,T],[M,k]]},n.duration=function(t){return arguments.length?(N=+t,n):N},n.interpolate=function(t){return arguments.length?(S=t,n):S},n.on=function(){var t=C.on.apply(C,arguments);return t===C?n:t},n.clickDistance=function(t){return arguments.length?(L=(t=+t)*t,n):Math.sqrt(L)},n};t.version="4.9.1",t.bisect=Vs,t.bisectRight=Vs,t.bisectLeft=Ws,t.ascending=js,t.bisector=Xs,t.cross=Gs,t.descending=Js,t.deviation=tf,t.extent=nf,t.histogram=df,t.thresholdFreedmanDiaconis=_f,t.thresholdScott=yf,t.thresholdSturges=pf,t.max=gf,t.mean=mf,t.median=xf,t.merge=bf,t.min=wf,t.pairs=Zs,t.permute=Mf,t.quantile=vf,t.range=cf,t.scan=Tf,t.shuffle=kf,t.sum=Nf,t.ticks=hf,t.tickIncrement=r,t.tickStep=i,t.transpose=Sf,t.variance=Ks,t.zip=Ef,t.axisTop=l,t.axisRight=h,t.axisBottom=p,t.axisLeft=d,t.brush=Ed,t.brushX=ze,t.brushY=Pe,t.brushSelection=Ce,t.chord=qd,t.ribbon=Yd,t.nest=Bd,t.set=Ze,t.map=He,t.keys=jd,t.values=Xd,t.entries=$d,t.color=Nt,t.rgb=Ct,t.hsl=Rt,t.lab=Ot,t.hcl=Xt,t.cubehelix=Wt,t.dispatch=v,t.drag=Fl,t.dragDisable=Dl,t.dragEnable=mt,t.dsvFormat=Vd,t.csvParse=Zd,t.csvParseRows=Gd,t.csvFormat=Jd,t.csvFormatRows=Qd,t.tsvParse=tv,t.tsvParseRows=nv,t.tsvFormat=ev,t.tsvFormatRows=rv,t.easeLinear=ie,t.easeQuad=ae,t.easeQuadIn=oe,t.easeQuadOut=ue,t.easeQuadInOut=ae,t.easeCubic=fe,t.easeCubicIn=ce,t.easeCubicOut=se,t.easeCubicInOut=fe,t.easePoly=Hp,t.easePolyIn=Yp,t.easePolyOut=Bp,t.easePolyInOut=Hp,t.easeSin=pe,t.easeSinIn=le,t.easeSinOut=he,t.easeSinInOut=pe,t.easeExp=_e,t.easeExpIn=de,t.easeExpOut=ve,t.easeExpInOut=_e,t.easeCircle=me,t.easeCircleIn=ye,t.easeCircleOut=ge,t.easeCircleInOut=me,t.easeBounce=be,t.easeBounceIn=xe,t.easeBounceOut=be,t.easeBounceInOut=we,t.easeBack=id,t.easeBackIn=ed,t.easeBackOut=rd,t.easeBackInOut=id,t.easeElastic=ad,t.easeElasticIn=ud,t.easeElasticOut=ad,t.easeElasticInOut=cd,t.forceCenter=iv,t.forceCollide=wv,t.forceLink=Mv,t.forceManyBody=Sv,t.forceSimulation=Nv,t.forceX=Ev,t.forceY=Av,t.formatDefaultLocale=vr,t.formatLocale=Bv,t.formatSpecifier=pr,t.precisionFixed=Hv,t.precisionPrefix=jv,t.precisionRound=Xv,t.geoArea=G_,t.geoBounds=K_,t.geoCentroid=ny,t.geoCircle=_y,t.geoClipExtent=My,t.geoContains=Ry,t.geoDistance=zy,t.geoGraticule=Ti,t.geoGraticule10=ki,t.geoInterpolate=qy,t.geoLength=Ey,t.geoPath=cg,t.geoAlbers=gg,t.geoAlbersUsa=mg,t.geoAzimuthalEqualArea=bg,t.geoAzimuthalEqualAreaRaw=xg,t.geoAzimuthalEquidistant=Mg,t.geoAzimuthalEquidistantRaw=wg,t.geoConicConformal=kg,t.geoConicConformalRaw=po,t.geoConicEqualArea=yg,t.geoConicEqualAreaRaw=uo,t.geoConicEquidistant=Sg,t.geoConicEquidistantRaw=_o,t.geoEquirectangular=Ng,t.geoEquirectangularRaw=vo,t.geoGnomonic=Eg,t.geoGnomonicRaw=yo,t.geoIdentity=Ag,t.geoProjection=eo,t.geoProjectionMutator=ro,t.geoMercator=Tg,t.geoMercatorRaw=fo,t.geoOrthographic=Cg,t.geoOrthographicRaw=mo,t.geoStereographic=zg,t.geoStereographicRaw=xo,t.geoTransverseMercator=Pg,t.geoTransverseMercatorRaw=bo,t.geoRotation=vy,t.geoStream=$_,t.geoTransform=hg,t.cluster=Lg,t.hierarchy=zo,t.pack=Zg,t.packSiblings=Vg,t.packEnclose=$g,t.partition=Qg,t.stratify=em,t.tree=rm,t.treemap=am,t.treemapBinary=cm,t.treemapDice=Jg,t.treemapSlice=im,t.treemapSliceDice=sm,t.treemapSquarify=um,t.treemapResquarify=fm,t.interpolate=qh,t.interpolateArray=Eh,t.interpolateBasis=wh,t.interpolateBasisClosed=Mh,t.interpolateDate=Ah,t.interpolateNumber=Ch,t.interpolateObject=zh,t.interpolateRound=Uh,t.interpolateString=Rh,t.interpolateTransformCss=Ih,t.interpolateTransformSvg=Yh,t.interpolateZoom=Hh,t.interpolateRgb=kh,t.interpolateRgbBasis=Nh,t.interpolateRgbBasisClosed=Sh,t.interpolateHsl=jh,t.interpolateHslLong=Xh,t.interpolateLab=pn,t.interpolateHcl=$h,t.interpolateHclLong=Vh,t.interpolateCubehelix=Wh,t.interpolateCubehelixLong=Zh,t.quantize=Gh,t.path=Ue,t.polygonArea=lm,t.polygonCentroid=hm;t.polygonHull=dm,t.polygonContains=vm,t.polygonLength=_m,t.quadtree=ir,t.queue=xu,t.randomUniform=xm,t.randomNormal=bm,t.randomLogNormal=wm,t.randomBates=Tm,t.randomIrwinHall=Mm,t.randomExponential=km,t.request=Nm,t.html=Em,t.json=Am,t.text=Cm,t.xml=zm,t.csv=Lm,t.tsv=Rm,t.scaleBand=ku,t.scalePoint=Su,t.scaleIdentity=Du,t.scaleLinear=Uu,t.scaleLog=ju,t.scaleOrdinal=Tu,t.scaleImplicit=Om,t.scalePow=$u,t.scaleSqrt=Vu,t.scaleQuantile=Wu,t.scaleQuantize=Zu,t.scaleThreshold=Gu,t.scaleTime=ub,t.scaleUtc=ab,t.schemeCategory10=sb,t.schemeCategory20b=fb,t.schemeCategory20c=lb,t.schemeCategory20=hb,t.interpolateCubehelixDefault=pb,t.interpolateRainbow=yb,t.interpolateWarm=db,t.interpolateCool=vb,t.interpolateViridis=gb,t.interpolateMagma=mb,t.interpolateInferno=xb,t.interpolatePlasma=bb,t.scaleSequential=ic,t.creator=If,t.local=w,t.matcher=Xf,t.mouse=Gf,t.namespace=Ff,t.namespaces=Of,t.select=Pl,t.selectAll=Ll,t.selection=yt,t.selector=Jf,t.selectorAll=Kf,t.style=X,t.touch=Rl,t.touches=ql,t.window=gl,t.customEvent=A,t.arc=Rb,t.area=Db,t.line=Ub,t.pie=Ib,t.radialArea=Hb,t.radialLine=Bb,t.linkHorizontal=Nc,t.linkVertical=Sc,t.linkRadial=Ec,t.symbol=fw,t.symbols=sw,t.symbolCircle=$b,t.symbolCross=Vb,t.symbolDiamond=Gb,t.symbolSquare=nw,t.symbolStar=tw,t.symbolTriangle=rw,t.symbolWye=cw,t.curveBasisClosed=pw,t.curveBasisOpen=dw,t.curveBasis=hw,t.curveBundle=vw,t.curveCardinalClosed=yw,t.curveCardinalOpen=gw,t.curveCardinal=_w,t.curveCatmullRomClosed=xw,t.curveCatmullRomOpen=bw,t.curveCatmullRom=mw,t.curveLinearClosed=ww,t.curveLinear=qb,t.curveMonotoneX=Gc,t.curveMonotoneY=Jc,t.curveNatural=Mw,t.curveStep=Tw,t.curveStepAfter=es,t.curveStepBefore=ns,t.stack=Sw,t.stackOffsetExpand=Ew,t.stackOffsetDiverging=Aw,t.stackOffsetNone=kw,t.stackOffsetSilhouette=Cw,t.stackOffsetWiggle=zw,t.stackOrderAscending=Pw,t.stackOrderDescending=Lw,t.stackOrderInsideOut=Rw,t.stackOrderNone=Nw,t.stackOrderReverse=qw,t.timeInterval=Ju,t.timeMillisecond=$m,t.timeMilliseconds=Vm,t.utcMillisecond=$m,t.utcMilliseconds=Vm,t.timeSecond=Gm,t.timeSeconds=Jm,t.utcSecond=Gm,t.utcSeconds=Jm,t.timeMinute=Qm,t.timeMinutes=Km,t.timeHour=tx,t.timeHours=nx,t.timeDay=ex,t.timeDays=rx,t.timeWeek=ix,t.timeWeeks=lx,t.timeSunday=ix,t.timeSundays=lx,t.timeMonday=ox,t.timeMondays=hx,t.timeTuesday=ux,t.timeTuesdays=px,t.timeWednesday=ax,t.timeWednesdays=dx,t.timeThursday=cx,t.timeThursdays=vx,t.timeFriday=sx,t.timeFridays=_x,t.timeSaturday=fx,t.timeSaturdays=yx,t.timeMonth=gx,t.timeMonths=mx,t.timeYear=xx,t.timeYears=bx,t.utcMinute=wx,t.utcMinutes=Mx,t.utcHour=Tx,t.utcHours=kx,t.utcDay=Nx,t.utcDays=Sx,t.utcWeek=Ex,t.utcWeeks=qx,t.utcSunday=Ex,t.utcSundays=qx,t.utcMonday=Ax,t.utcMondays=Ux,t.utcTuesday=Cx,t.utcTuesdays=Dx,t.utcWednesday=zx,t.utcWednesdays=Ox,t.utcThursday=Px,t.utcThursdays=Fx,t.utcFriday=Lx,t.utcFridays=Ix,t.utcSaturday=Rx,t.utcSaturdays=Yx,t.utcMonth=Bx,t.utcMonths=Hx,t.utcYear=jx,t.utcYears=$x,t.timeFormatDefaultLocale=Ja,t.timeFormatLocale=ra,t.isoFormat=Jx,t.isoParse=Qx,t.now=_n,t.timer=mn,t.timerFlush=xn,t.timeout=up,t.interval=ap,t.transition=ee,t.active=hd,t.interrupt=gp,t.voronoi=$w,t.zoom=Gw,t.zoomTransform=Fs,t.zoomIdentity=Ww,Object.defineProperty(t,"__esModule",{value:!0})});

 
// https://github.com/topojson/topojson Version 3.0.0. Copyright 2017 Mike Bostock.
(function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(r.topojson=r.topojson||{})})(this,function(r){"use strict";function n(r,n){var e=n.id,o=n.bbox,a=null==n.properties?{}:n.properties,i=t(r,n);return null==e&&null==o?{type:"Feature",properties:a,geometry:i}:null==o?{type:"Feature",id:e,properties:a,geometry:i}:{type:"Feature",id:e,bbox:o,properties:a,geometry:i}}function t(r,n){function t(r,n){n.length&&n.pop();for(var t=f[r<0?~r:r],e=0,o=t.length;e<o;++e)n.push(c(t[e],e));r<0&&j(n,o)}function e(r){return c(r)}function o(r){for(var n=[],e=0,o=r.length;e<o;++e)t(r[e],n);return n.length<2&&n.push(n[0]),n}function a(r){for(var n=o(r);n.length<4;)n.push(n[0]);return n}function i(r){return r.map(a)}function u(r){var n,t=r.type;switch(t){case"GeometryCollection":return{type:t,geometries:r.geometries.map(u)};case"Point":n=e(r.coordinates);break;case"MultiPoint":n=r.coordinates.map(e);break;case"LineString":n=o(r.arcs);break;case"MultiLineString":n=r.arcs.map(o);break;case"Polygon":n=i(r.arcs);break;case"MultiPolygon":n=r.arcs.map(i);break;default:return null}return{type:t,coordinates:n}}var c=C(r.transform),f=r.arcs;return u(n)}function e(r,n,t){var e,a,i;if(arguments.length>1)e=o(r,n,t);else for(a=0,e=new Array(i=r.arcs.length);a<i;++a)e[a]=a;return{type:"MultiLineString",arcs:_(r,e)}}function o(r,n,t){function e(r){var n=r<0?~r:r;(l[n]||(l[n]=[])).push({i:r,g:c})}function o(r){r.forEach(e)}function a(r){r.forEach(o)}function i(r){r.forEach(a)}function u(r){switch(c=r,r.type){case"GeometryCollection":r.geometries.forEach(u);break;case"LineString":o(r.arcs);break;case"MultiLineString":case"Polygon":a(r.arcs);break;case"MultiPolygon":i(r.arcs)}}var c,f=[],l=[];return u(n),l.forEach(null==t?function(r){f.push(r[0].i)}:function(r){t(r[0].g,r[r.length-1].g)&&f.push(r[0].i)}),f}function a(r){for(var n,t=-1,e=r.length,o=r[e-1],a=0;++t<e;)n=o,o=r[t],a+=n[0]*o[1]-n[1]*o[0];return Math.abs(a)}function i(r,n){function e(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(e);break;case"Polygon":o(r.arcs);break;case"MultiPolygon":r.arcs.forEach(o)}}function o(r){r.forEach(function(n){n.forEach(function(n){(u[n=n<0?~n:n]||(u[n]=[])).push(r)})}),c.push(r)}function i(n){return a(t(r,{type:"Polygon",arcs:[n]}).coordinates[0])}var u={},c=[],f=[];return n.forEach(e),c.forEach(function(r){if(!r._){var n=[],t=[r];for(r._=1,f.push(n);r=t.pop();)n.push(r),r.forEach(function(r){r.forEach(function(r){u[r<0?~r:r].forEach(function(r){r._||(r._=1,t.push(r))})})})}}),c.forEach(function(r){delete r._}),{type:"MultiPolygon",arcs:f.map(function(n){var t,e=[];if(n.forEach(function(r){r.forEach(function(r){r.forEach(function(r){u[r<0?~r:r].length<2&&e.push(r)})})}),e=_(r,e),(t=e.length)>1)for(var o,a,c=1,f=i(e[0]);c<t;++c)(o=i(e[c]))>f&&(a=e[0],e[0]=e[c],e[c]=a,f=o);return e})}}function u(r,n,t,e){c(r,n,t),c(r,n,n+e),c(r,n+e,t)}function c(r,n,t){for(var e,o=n+(t---n>>1);n<o;++n,--t)e=r[n],r[n]=r[t],r[t]=e}function f(r){return null==r?{type:null}:("FeatureCollection"===r.type?l:"Feature"===r.type?s:h)(r)}function l(r){var n={type:"GeometryCollection",geometries:r.features.map(s)};return null!=r.bbox&&(n.bbox=r.bbox),n}function s(r){var n,t=h(r.geometry);null!=r.id&&(t.id=r.id),null!=r.bbox&&(t.bbox=r.bbox);for(n in r.properties){t.properties=r.properties;break}return t}function h(r){if(null==r)return{type:null};var n="GeometryCollection"===r.type?{type:"GeometryCollection",geometries:r.geometries.map(h)}:"Point"===r.type||"MultiPoint"===r.type?{type:r.type,coordinates:r.coordinates}:{type:r.type,arcs:r.coordinates};return null!=r.bbox&&(n.bbox=r.bbox),n}function p(r){var n,t=r[0],e=r[1];return e<t&&(n=t,t=e,e=n),t+31*e}function g(r,n){var t,e=r[0],o=r[1],a=n[0],i=n[1];return o<e&&(t=e,e=o,o=t),i<a&&(t=a,a=i,i=t),e===a&&o===i}function y(){return!0}function v(r){return r}function b(r){return null!=r.type}function m(r){var n=r[0],t=r[1],e=r[2];return Math.abs((n[0]-e[0])*(t[1]-n[1])-(n[0]-t[0])*(e[1]-n[1]))/2}function d(r){for(var n,t=-1,e=r.length,o=r[e-1],a=0;++t<e;)n=o,o=r[t],a+=n[0]*o[1]-n[1]*o[0];return Math.abs(a)/2}function M(r,n){return r[1][2]-n[1][2]}function E(r){return[r[0],r[1],0]}function x(r,n){if(t=r.length){if((n=+n)<=0||t<2)return r[0];if(n>=1)return r[t-1];var t,e=(t-1)*n,o=Math.floor(e),a=r[o];return a+(r[o+1]-a)*(e-o)}}function P(r,n){return n-r}function w(r,n){for(var t,e,o,a=0,i=r.length,u=0,c=r[n?a++:i-1],f=c[0]*pr,l=c[1]*pr/2+hr,s=yr(l),h=vr(l);a<i;++a){c=r[a],t=f,f=c[0]*pr,l=c[1]*pr/2+hr,e=s,s=yr(l),o=h,h=vr(l);var p=f-t,g=p>=0?1:-1,y=g*p,v=o*h,b=e*s+v*yr(y),m=v*g*vr(y);u+=gr(m,b)}return u}function k(r,n){var t=w(r,!0);return n&&(t*=-1),2*(t<0?sr+t:t)}function A(r){var n=w(r,!1);return 2*(n<0?sr+n:n)}var L=function(r){return r},C=function(r){if(null==r)return L;var n,t,e=r.scale[0],o=r.scale[1],a=r.translate[0],i=r.translate[1];return function(r,u){u||(n=t=0);var c=2,f=r.length,l=new Array(f);for(l[0]=(n+=r[0])*e+a,l[1]=(t+=r[1])*o+i;c<f;)l[c]=r[c],++c;return l}},S=function(r){function n(r){r=o(r),r[0]<a&&(a=r[0]),r[0]>u&&(u=r[0]),r[1]<i&&(i=r[1]),r[1]>c&&(c=r[1])}function t(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(t);break;case"Point":n(r.coordinates);break;case"MultiPoint":r.coordinates.forEach(n)}}var e,o=C(r.transform),a=1/0,i=a,u=-a,c=-a;r.arcs.forEach(function(r){for(var n,t=-1,e=r.length;++t<e;)n=o(r[t],t),n[0]<a&&(a=n[0]),n[0]>u&&(u=n[0]),n[1]<i&&(i=n[1]),n[1]>c&&(c=n[1])});for(e in r.objects)t(r.objects[e]);return[a,i,u,c]},j=function(r,n){for(var t,e=r.length,o=e-n;o<--e;)t=r[o],r[o++]=r[e],r[e]=t},G=function(r,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return n(r,t)})}:n(r,t)},_=function(r,n){function t(n){var t,e=r.arcs[n<0?~n:n],o=e[0];return r.transform?(t=[0,0],e.forEach(function(r){t[0]+=r[0],t[1]+=r[1]})):t=e[e.length-1],n<0?[t,o]:[o,t]}function e(r,n){for(var t in r){var e=r[t];delete n[e.start],delete e.start,delete e.end,e.forEach(function(r){o[r<0?~r:r]=1}),u.push(e)}}var o={},a={},i={},u=[],c=-1;return n.forEach(function(t,e){var o,a=r.arcs[t<0?~t:t];a.length<3&&!a[1][0]&&!a[1][1]&&(o=n[++c],n[c]=t,n[e]=o)}),n.forEach(function(r){var n,e,o=t(r),u=o[0],c=o[1];if(n=i[u])if(delete i[n.end],n.push(r),n.end=c,e=a[c]){delete a[e.start];var f=e===n?n:n.concat(e);a[f.start=n.start]=i[f.end=e.end]=f}else a[n.start]=i[n.end]=n;else if(n=a[c])if(delete a[n.start],n.unshift(r),n.start=u,e=i[u]){delete i[e.end];var l=e===n?n:e.concat(n);a[l.start=e.start]=i[l.end=n.end]=l}else a[n.start]=i[n.end]=n;else n=[r],a[n.start=u]=i[n.end=c]=n}),e(i,a),e(a,i),n.forEach(function(r){o[r<0?~r:r]||u.push([r])}),u},I=function(r){return t(r,e.apply(this,arguments))},F=function(r){return t(r,i.apply(this,arguments))},T=function(r,n){for(var t=0,e=r.length;t<e;){var o=t+e>>>1;r[o]<n?t=o+1:e=o}return t},N=function(r){function n(r,n){r.forEach(function(r){r<0&&(r=~r);var t=o[r];t?t.push(n):o[r]=[n]})}function t(r,t){r.forEach(function(r){n(r,t)})}function e(r,n){"GeometryCollection"===r.type?r.geometries.forEach(function(r){e(r,n)}):r.type in i&&i[r.type](r.arcs,n)}var o={},a=r.map(function(){return[]}),i={LineString:n,MultiLineString:t,Polygon:t,MultiPolygon:function(r,n){r.forEach(function(r){t(r,n)})}};r.forEach(e);for(var u in o)for(var c=o[u],f=c.length,l=0;l<f;++l)for(var s=l+1;s<f;++s){var h,p=c[l],g=c[s];(h=a[p])[u=T(h,g)]!==g&&h.splice(u,0,g),(h=a[g])[u=T(h,p)]!==p&&h.splice(u,0,p)}return a},O=function(r){if(null==r)return L;var n,t,e=r.scale[0],o=r.scale[1],a=r.translate[0],i=r.translate[1];return function(r,u){u||(n=t=0);var c=2,f=r.length,l=new Array(f),s=Math.round((r[0]-a)/e),h=Math.round((r[1]-i)/o);for(l[0]=s-n,n=s,l[1]=h-t,t=h;c<f;)l[c]=r[c],++c;return l}},q=function(r,n){function t(r){return h(r)}function e(r){var n;switch(r.type){case"GeometryCollection":n={type:"GeometryCollection",geometries:r.geometries.map(e)};break;case"Point":n={type:"Point",coordinates:t(r.coordinates)};break;case"MultiPoint":n={type:"MultiPoint",coordinates:r.coordinates.map(t)};break;default:return r}return null!=r.id&&(n.id=r.id),null!=r.bbox&&(n.bbox=r.bbox),null!=r.properties&&(n.properties=r.properties),n}function o(r){var n,t=0,e=1,o=r.length,a=new Array(o);for(a[0]=h(r[0],0);++t<o;)((n=h(r[t],t))[0]||n[1])&&(a[e++]=n);return 1===e&&(a[e++]=[0,0]),a.length=e,a}if(r.transform)throw new Error("already quantized");if(n&&n.scale)l=r.bbox;else{if(!((a=Math.floor(n))>=2))throw new Error("n must be ≥2");l=r.bbox||S(r);var a,i=l[0],u=l[1],c=l[2],f=l[3];n={scale:[c-i?(c-i)/(a-1):1,f-u?(f-u)/(a-1):1],translate:[i,u]}}var l,s,h=O(n),p=r.objects,g={};for(s in p)g[s]=e(p[s]);return{type:"Topology",bbox:l,transform:n,objects:g,arcs:r.arcs.map(o)}},U=function(r){function n(r){null!=r&&f.hasOwnProperty(r.type)&&f[r.type](r)}function t(r){var n=r[0],t=r[1];n<a&&(a=n),n>u&&(u=n),t<i&&(i=t),t>c&&(c=t)}function e(r){r.forEach(t)}function o(r){r.forEach(e)}var a=1/0,i=1/0,u=-1/0,c=-1/0,f={GeometryCollection:function(r){r.geometries.forEach(n)},Point:function(r){t(r.coordinates)},MultiPoint:function(r){r.coordinates.forEach(t)},LineString:function(r){e(r.arcs)},MultiLineString:function(r){r.arcs.forEach(e)},Polygon:function(r){r.arcs.forEach(e)},MultiPolygon:function(r){r.arcs.forEach(o)}};for(var l in r)n(r[l]);return u>=a&&c>=i?[a,i,u,c]:void 0},z=function(r,n,t,e,o){function a(e){for(var a=n(e)&f,i=c[a],u=0;i!=o;){if(t(i,e))return!0;if(++u>=r)throw new Error("full hashset");i=c[a=a+1&f]}return c[a]=e,!0}function i(e){for(var a=n(e)&f,i=c[a],u=0;i!=o;){if(t(i,e))return!0;if(++u>=r)break;i=c[a=a+1&f]}return!1}function u(){for(var r=[],n=0,t=c.length;n<t;++n){var e=c[n];e!=o&&r.push(e)}return r}3===arguments.length&&(e=Array,o=null);for(var c=new e(r=1<<Math.max(4,Math.ceil(Math.log(r)/Math.LN2))),f=r-1,l=0;l<r;++l)c[l]=o;return{add:a,has:i,values:u}},R=function(r,n,t,e,o,a){function i(e,a){for(var i=n(e)&h,u=l[i],c=0;u!=o;){if(t(u,e))return s[i]=a;if(++c>=r)throw new Error("full hashmap");u=l[i=i+1&h]}return l[i]=e,s[i]=a,a}function u(e,a){for(var i=n(e)&h,u=l[i],c=0;u!=o;){if(t(u,e))return s[i];if(++c>=r)throw new Error("full hashmap");u=l[i=i+1&h]}return l[i]=e,s[i]=a,a}function c(e,a){for(var i=n(e)&h,u=l[i],c=0;u!=o;){if(t(u,e))return s[i];if(++c>=r)break;u=l[i=i+1&h]}return a}function f(){for(var r=[],n=0,t=l.length;n<t;++n){var e=l[n];e!=o&&r.push(e)}return r}3===arguments.length&&(e=a=Array,o=null);for(var l=new e(r=1<<Math.max(4,Math.ceil(Math.log(r)/Math.LN2))),s=new a(r),h=r-1,p=0;p<r;++p)l[p]=o;return{set:i,maybeSet:u,get:c,keys:f}},V=function(r,n){return r[0]===n[0]&&r[1]===n[1]},W=new ArrayBuffer(16),B=new Float64Array(W),D=new Uint32Array(W),H=function(r){B[0]=r[0],B[1]=r[1];var n=D[0]^D[1];return 2147483647&(n=n<<5^n>>7^D[2]^D[3])},J=function(r){function n(r,n,t,e){if(p[t]!==r){p[t]=r;var o=g[t];if(o>=0){var a=y[t];o===n&&a===e||o===e&&a===n||(++b,v[t]=1)}else g[t]=n,y[t]=e}}function t(r){return H(f[r])}function e(r,n){return V(f[r],f[n])}var o,a,i,u,c,f=r.coordinates,l=r.lines,s=r.rings,h=function(){for(var r=R(1.4*f.length,t,e,Int32Array,-1,Int32Array),n=new Int32Array(f.length),o=0,a=f.length;o<a;++o)n[o]=r.maybeSet(o,o);return n}(),p=new Int32Array(f.length),g=new Int32Array(f.length),y=new Int32Array(f.length),v=new Int8Array(f.length),b=0;for(o=0,a=f.length;o<a;++o)p[o]=g[o]=y[o]=-1;for(o=0,a=l.length;o<a;++o){var m=l[o],d=m[0],M=m[1];for(u=h[d],c=h[++d],++b,v[u]=1;++d<=M;)n(o,i=u,u=c,c=h[d]);++b,v[c]=1}for(o=0,a=f.length;o<a;++o)p[o]=-1;for(o=0,a=s.length;o<a;++o){var E=s[o],x=E[0]+1,P=E[1];for(i=h[P-1],u=h[x-1],c=h[x],n(o,i,u,c);++x<=P;)n(o,i=u,u=c,c=h[x])}p=g=y=null;var w,k=z(1.4*b,H,V);for(o=0,a=f.length;o<a;++o)v[w=h[o]]&&k.add(f[w]);return k},K=function(r){var n,t,e,o=J(r),a=r.coordinates,i=r.lines,c=r.rings;for(t=0,e=i.length;t<e;++t)for(var f=i[t],l=f[0],s=f[1];++l<s;)o.has(a[l])&&(n={0:l,1:f[1]},f[1]=l,f=f.next=n);for(t=0,e=c.length;t<e;++t)for(var h=c[t],p=h[0],g=p,y=h[1],v=o.has(a[p]);++g<y;)o.has(a[g])&&(v?(n={0:g,1:h[1]},h[1]=g,h=h.next=n):(u(a,p,y,y-g),a[y]=a[p],v=!0,g=p));return r},Q=function(r){function n(r){var n,o,a,i,u,c,f,l;if(a=y.get(n=s[r[0]]))for(f=0,l=a.length;f<l;++f)if(i=a[f],t(i,r))return r[0]=i[0],void(r[1]=i[1]);if(u=y.get(o=s[r[1]]))for(f=0,l=u.length;f<l;++f)if(c=u[f],e(c,r))return r[1]=c[0],void(r[0]=c[1]);a?a.push(r):y.set(n,[r]),u?u.push(r):y.set(o,[r]),v.push(r)}function t(r,n){var t=r[0],e=n[0],o=r[1];if(t-o!=e-n[1])return!1;for(;t<=o;++t,++e)if(!V(s[t],s[e]))return!1;return!0}function e(r,n){var t=r[0],e=n[0],o=r[1],a=n[1];if(t-o!=e-a)return!1;for(;t<=o;++t,--a)if(!V(s[t],s[a]))return!1;return!0}function o(r,n){var t=r[0],e=n[0],o=r[1],a=n[1],u=o-t;if(u!==a-e)return!1;for(var c=i(r),f=i(n),l=0;l<u;++l)if(!V(s[t+(l+c)%u],s[e+(l+f)%u]))return!1;return!0}function a(r,n){var t=r[0],e=n[0],o=r[1],a=n[1],u=o-t;if(u!==a-e)return!1;for(var c=i(r),f=u-i(n),l=0;l<u;++l)if(!V(s[t+(l+c)%u],s[a-(l+f)%u]))return!1;return!0}function i(r){for(var n=r[0],t=r[1],e=n,o=e,a=s[e];++e<t;){var i=s[e];(i[0]<a[0]||i[0]===a[0]&&i[1]<a[1])&&(o=e,a=i)}return o-n}var u,c,f,l,s=r.coordinates,h=r.lines,p=r.rings,g=h.length+p.length;for(delete r.lines,delete r.rings,f=0,l=h.length;f<l;++f)for(u=h[f];u=u.next;)++g;for(f=0,l=p.length;f<l;++f)for(c=p[f];c=c.next;)++g;var y=R(2*g*1.4,H,V),v=r.arcs=[];for(f=0,l=h.length;f<l;++f){u=h[f];do{n(u)}while(u=u.next)}for(f=0,l=p.length;f<l;++f)if(c=p[f],c.next)do{n(c)}while(c=c.next);else(function(r){var n,t,e,u,c;if(t=y.get(n=s[r[0]]))for(u=0,c=t.length;u<c;++u){if(e=t[u],o(e,r))return r[0]=e[0],void(r[1]=e[1]);if(a(e,r))return r[0]=e[1],void(r[1]=e[0])}if(t=y.get(n=s[r[0]+i(r)]))for(u=0,c=t.length;u<c;++u){if(e=t[u],o(e,r))return r[0]=e[0],void(r[1]=e[1]);if(a(e,r))return r[0]=e[1],void(r[1]=e[0])}t?t.push(r):y.set(n,[r]),v.push(r)})(c);return r},X=function(r){for(var n=-1,t=r.length;++n<t;){for(var e,o,a=r[n],i=0,u=1,c=a.length,f=a[0],l=f[0],s=f[1];++i<c;)f=a[i],e=f[0],o=f[1],e===l&&o===s||(a[u++]=[e-l,o-s],l=e,s=o);1===u&&(a[u++]=[0,0]),a.length=u}return r},Y=function(r){function n(r){r&&f.hasOwnProperty(r.type)&&f[r.type](r)}function t(r){for(var n=0,t=r.length;n<t;++n)c[++a]=r[n];var e={0:a-t+1,1:a};return i.push(e),e}function e(r){for(var n=0,t=r.length;n<t;++n)c[++a]=r[n];var e={0:a-t+1,1:a};return u.push(e),e}function o(r){return r.map(e)}var a=-1,i=[],u=[],c=[],f={GeometryCollection:function(r){r.geometries.forEach(n)},LineString:function(r){r.arcs=t(r.arcs)},MultiLineString:function(r){r.arcs=r.arcs.map(t)},Polygon:function(r){r.arcs=r.arcs.map(e)},MultiPolygon:function(r){r.arcs=r.arcs.map(o)}};for(var l in r)n(r[l]);return{type:"Topology",coordinates:c,lines:i,rings:u,objects:r}},Z=function(r){var n,t={};for(n in r)t[n]=f(r[n]);return t},$=function(r,n,t){function e(r){return[Math.round((r[0]-f)*p),Math.round((r[1]-l)*g)]}function o(r,n){for(var t,e,o,a,i,u=-1,c=0,s=r.length,h=new Array(s);++u<s;)t=r[u],a=Math.round((t[0]-f)*p),i=Math.round((t[1]-l)*g),a===e&&i===o||(h[c++]=[e=a,o=i]);for(h.length=c;c<n;)c=h.push([h[0][0],h[0][1]]);return h}function a(r){return o(r,2)}function i(r){return o(r,4)}function u(r){return r.map(i)}function c(r){null!=r&&y.hasOwnProperty(r.type)&&y[r.type](r)}var f=n[0],l=n[1],s=n[2],h=n[3],p=s-f?(t-1)/(s-f):1,g=h-l?(t-1)/(h-l):1,y={GeometryCollection:function(r){r.geometries.forEach(c)},Point:function(r){r.coordinates=e(r.coordinates)},MultiPoint:function(r){r.coordinates=r.coordinates.map(e)},LineString:function(r){r.arcs=a(r.arcs)},MultiLineString:function(r){r.arcs=r.arcs.map(a)},Polygon:function(r){r.arcs=u(r.arcs)},MultiPolygon:function(r){r.arcs=r.arcs.map(u)}};for(var v in r)c(r[v]);return{scale:[1/p,1/g],translate:[f,l]}},rr=function(r,n){function t(r){r&&l.hasOwnProperty(r.type)&&l[r.type](r)}function e(r){var n=[];do{var t=f.get(r);n.push(r[0]<r[1]?t:~t)}while(r=r.next);return n}function o(r){return r.map(e)}var a=U(r=Z(r)),i=n>0&&a&&$(r,a,n),u=Q(K(Y(r))),c=u.coordinates,f=R(1.4*u.arcs.length,p,g);r=u.objects,u.bbox=a,u.arcs=u.arcs.map(function(r,n){return f.set(r,n),c.slice(r[0],r[1]+1)}),delete u.coordinates,c=null;var l={GeometryCollection:function(r){r.geometries.forEach(t)},LineString:function(r){r.arcs=e(r.arcs)},MultiLineString:function(r){r.arcs=r.arcs.map(e)},Polygon:function(r){r.arcs=r.arcs.map(e)},MultiPolygon:function(r){r.arcs=r.arcs.map(o)}};for(var s in r)t(r[s]);return i&&(u.transform=i,u.arcs=X(u.arcs)),u},nr=function(r){function n(r){var t;switch(r.type){case"GeometryCollection":t={type:"GeometryCollection",geometries:r.geometries.map(n)};break;case"LineString":t={type:"LineString",arcs:e(r.arcs)};break;case"MultiLineString":t={type:"MultiLineString",arcs:r.arcs.map(e)};break;case"Polygon":t={type:"Polygon",arcs:r.arcs.map(e)};break;case"MultiPolygon":t={type:"MultiPolygon",arcs:r.arcs.map(o)};break;default:return r}return null!=r.id&&(t.id=r.id),null!=r.bbox&&(t.bbox=r.bbox),null!=r.properties&&(t.properties=r.properties),t}function t(r){var n,t=r<0&&(r=~r,!0);return null==(n=s[r])&&(s[r]=n=++l,f[n]=c[r]),t?~n:n}function e(r){return r.map(t)}function o(r){return r.map(e)}var a,i=r.objects,u={},c=r.arcs,f=[],l=-1,s=new Array(c.length);for(a in i)u[a]=n(i[a]);return{type:"Topology",bbox:r.bbox,transform:r.transform,objects:u,arcs:f}},tr=function(r,n){function t(r){var n,o;switch(r.type){case"Polygon":o=e(r.arcs),n=o?{type:"Polygon",arcs:o}:{type:null};break;case"MultiPolygon":o=r.arcs.map(e).filter(v),n=o.length?{type:"MultiPolygon",arcs:o}:{type:null};break;case"GeometryCollection":o=r.geometries.map(t).filter(b),n=o.length?{type:"GeometryCollection",geometries:o}:{type:null};break;default:return r}return null!=r.id&&(n.id=r.id),null!=r.bbox&&(n.bbox=r.bbox),null!=r.properties&&(n.properties=r.properties),n}function e(r){return r.length&&o(r[0])?[r[0]].concat(r.slice(1).filter(a)):null}function o(r){return n(r,!1)}function a(r){return n(r,!0)}var i,u=r.objects,c={};null==n&&(n=y);for(i in u)c[i]=t(u[i]);return nr({type:"Topology",bbox:r.bbox,transform:r.transform,objects:c,arcs:r.arcs})},er=function(r){function n(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(n);break;case"Polygon":t(r.arcs);break;case"MultiPolygon":r.arcs.forEach(t)}}function t(r){for(var n=0,t=r.length;n<t;++n,++a)for(var e=r[n],i=0,u=e.length;i<u;++i){var c=e[i];c<0&&(c=~c);var f=o[c];o[c]=f>=0&&f!==a?-1:a}}var e,o={},a=0;for(e in r.objects)n(r.objects[e]);return function(r){for(var n,t=0,e=r.length;t<e;++t)if(n=r[t],o[n<0?~n:n]<0)return!0;return!1}},or=function(r,n,t){return n=null==n?Number.MIN_VALUE:+n,null==t&&(t=d),function(e,o){return t(G(r,{type:"Polygon",arcs:[e]}).geometry.coordinates[0],o)>=n}},ar=function(r,n,t){var e=er(r),o=or(r,n,t);return function(r,n){return e(r,n)||o(r,n)}},ir=function(){function r(r,n){for(;n>0;){var t=(n+1>>1)-1,o=e[t];if(M(r,o)>=0)break;e[o._=n]=o,e[r._=n=t]=r}}function n(r,n){for(;;){var t=n+1<<1,a=t-1,i=n,u=e[i];if(a<o&&M(e[a],u)<0&&(u=e[i=a]),t<o&&M(e[t],u)<0&&(u=e[i=t]),i===n)break;e[u._=n]=u,e[r._=n=i]=r}}var t={},e=[],o=0;return t.push=function(n){return r(e[n._=o]=n,o++),o},t.pop=function(){if(!(o<=0)){var r,t=e[0];return--o>0&&(r=e[o],n(e[r._=0]=r,0)),t}},t.remove=function(t){var a,i=t._;if(e[i]===t)return i!==--o&&(a=e[o],(M(a,t)<0?r:n)(e[a._=i]=a,i)),i},t},ur=function(r,n){function t(r){o.remove(r),r[1][2]=n(r),o.push(r)}var e=r.transform?C(r.transform):E,o=ir();null==n&&(n=m);var a=r.arcs.map(function(r){var a,i,u,c=[],f=0;for(r=r.map(e),i=1,u=r.length-1;i<u;++i)a=[r[i-1],r[i],r[i+1]],a[1][2]=n(a),c.push(a),o.push(a);for(r[0][2]=r[u][2]=1/0,i=0,u=c.length;i<u;++i)a=c[i],a.previous=c[i-1],a.next=c[i+1];for(;a=o.pop();){var l=a.previous,s=a.next;a[1][2]<f?a[1][2]=f:f=a[1][2],l&&(l.next=s,l[2]=a[2],t(l)),s&&(s.previous=l,s[0]=a[0],t(s))}return r});return{type:"Topology",bbox:r.bbox,objects:r.objects,arcs:a}},cr=function(r,n){var t=[];return r.arcs.forEach(function(r){r.forEach(function(r){isFinite(r[2])&&t.push(r[2])})}),t.length&&x(t.sort(P),n)},fr=function(r,n){n=null==n?Number.MIN_VALUE:+n;var t=r.arcs.map(function(r){for(var t,e=-1,o=0,a=r.length,i=new Array(a);++e<a;)(t=r[e])[2]>=n&&(i[o++]=[t[0],t[1]]);return i.length=o,i});return{type:"Topology",transform:r.transform,bbox:r.bbox,objects:r.objects,arcs:t}},lr=Math.PI,sr=2*lr,hr=lr/4,pr=lr/180,gr=Math.atan2,yr=Math.cos,vr=Math.sin;r.bbox=S,r.feature=G,r.mesh=I,r.meshArcs=e,r.merge=F,r.mergeArcs=i,r.neighbors=N,r.quantize=q,r.transform=C,r.untransform=O,r.topology=rr,r.filter=tr,r.filterAttached=er,r.filterAttachedWeight=ar,r.filterWeight=or,r.planarRingArea=d,r.planarTriangleArea=m,r.presimplify=ur,r.quantile=cr,r.simplify=fr,r.sphericalRingArea=k,r.sphericalTriangleArea=A,Object.defineProperty(r,"__esModule",{value:!0})});

 
(function () {
'use strict';

//directory

var dir = {
	rackspace: 'https://c24215cec6c97b637db6-9c0895f07c3474f6636f95b6bf3db172.ssl.cf1.rackcdn.com/interactives/2018',
	ts: (new RegExp("^/|/$", "g")),
	ds: (new RegExp("/{2,}", "g")),
	folders: {}
};

dir.local = function(root_directory){
	if(arguments.length > 0){
		dir.rackspace = root_directory.replace(this.ts, "");
	}
	else{
		dir.rackspace = ".";
	}
	return this;
};

dir.add = function(name, relative_path){
	if(arguments.length==1){
		dir.folders[name] = name.replace(this.ts, "");
	}
	else if(arguments.length > 1){
		dir.folders[name] = relative_path.replace(this.ts, "");
	}
	return this;
};

dir.url = function(name, file_name){
	if(arguments.length==0){
		var path = dir.rackspace;
	}
	else if(arguments.length==1){
		var path = dir.rackspace + "/" + name;
	}
	else{
		var path = dir.rackspace + "/" + dir.folders[name] + "/" + file_name;
	}

	return path;
};

function degradation(root){
	
	if(arguments.length==0){
		root = document.body;
	}

	var d = {};

	var browser_compat_alert = function(){
		root.innerHTML = '<p style="margin:0em;text-align:center;line-height:2em;padding:2em;">This interactive feature requires a modern browser<br />such as Chrome, Firefox, IE10+, or Safari.</p>';
	};

	//browser compatibility check
	d.browser = function(root_el){
		if(arguments.length){
			root = root_el;
		}

		if(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || 
			!Array.prototype.filter || !Array.prototype.map || !Array.prototype.forEach || !Array.prototype.indexOf){
			browser_compat_alert();
			return false;
		}
		else{
			return true;
		}
	};

	d.alert = function(container){
		if(arguments.length){
			container.innerHTML = '<p style="margin:0em;text-align:center;line-height:2em;padding:2em;">An error has occurred.<br />Please refresh the page.</p>';
		}
		else{
			root.innerHTML = '<p style="margin:0em;text-align:center;line-height:2em;padding:2em;">An error has occurred.<br />Please refresh the page.</p>';
		}

		return d;
	};

	return d;
}

//tests: handle undefined values
//need to document these for aesthetics for the user

//to do; handling missing values ok?
//to do: look into the ticks methods for legends -- useful or should the api be pruned?
//to do: create more unit tests for scales
//to do:fix ticks for radii -- needs to be built based on absolute values

//color palettes
//credit: these palettes includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
var palettes = {
	colorbrewer: {
		sequential:{
			red:{
				"3":['#fee0d2','#fc9272','#de2d26'],
				"4":['#fee5d9','#fcae91','#fb6a4a','#cb181d'],
				"5":['#fee5d9','#fcae91','#fb6a4a','#de2d26','#a50f15'],
				"6":['#fee5d9','#fcbba1','#fc9272','#fb6a4a','#de2d26','#a50f15'],
				"7":['#fee5d9','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d']
			},
			blue:{
				"3":['#deebf7','#9ecae1','#3182bd'],
				"4":['#eff3ff','#bdd7e7','#6baed6','#2171b5'],
				"5":['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c'],
				"6":['#eff3ff','#c6dbef','#9ecae1','#6baed6','#3182bd','#08519c'],
				"7":['#eff3ff','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#084594']
			},
			gnbu:{
				"3":['#e0f3db','#a8ddb5','#43a2ca'],
				"4":['#f0f9e8','#bae4bc','#7bccc4','#2b8cbe'],
				"5":['#f0f9e8','#bae4bc','#7bccc4','#43a2ca','#0868ac'],
				"6":['#f0f9e8','#ccebc5','#a8ddb5','#7bccc4','#43a2ca','#0868ac'],
				"7":['#f0f9e8','#ccebc5','#a8ddb5','#7bccc4','#4eb3d3','#2b8cbe','#08589e']
			},
			ylgnbu:{
				"3":['#edf8b1','#7fcdbb','#2c7fb8'],
				"4":['#ffffcc','#a1dab4','#41b6c4','#225ea8'],
				"5":['#ffffcc','#a1dab4','#41b6c4','#2c7fb8','#253494'],
				"6":['#ffffcc','#c7e9b4','#7fcdbb','#41b6c4','#2c7fb8','#253494'],
				"7":['#ffffcc','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#0c2c84']
			},
			ylorrd:{
				"3":['#ffeda0','#feb24c','#f03b20'],
				"4":['#ffffb2','#fecc5c','#fd8d3c','#e31a1c'],
				"5":['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'],
				"6":['#ffffb2','#fed976','#feb24c','#fd8d3c','#f03b20','#bd0026'],
				"7":['#ffffb2','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#b10026']
			},
			rdpu:{
				"3":['#fde0dd','#fa9fb5','#c51b8a'],
				"4":['#feebe2','#fbb4b9','#f768a1','#ae017e'],
				"5":['#feebe2','#fbb4b9','#f768a1','#c51b8a','#7a0177'],
				"6":['#feebe2','#fcc5c0','#fa9fb5','#f768a1','#c51b8a','#7a0177'],
				"7":['#feebe2','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177']
			},
			ylgn:{
				"3":['#f7fcb9','#addd8e','#31a354'],
				"4":['#ffffcc','#c2e699','#78c679','#238443'],
				"5":['#ffffcc','#c2e699','#78c679','#31a354','#006837'],
				"6":['#ffffcc','#d9f0a3','#addd8e','#78c679','#31a354','#006837'],
				"7":['#ffffcc','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#005a32']
			},
			bupu:{
				"3":['#e0ecf4','#9ebcda','#8856a7'],
				"4":['#edf8fb','#b3cde3','#8c96c6','#88419d'],
				"5":['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'],
				"6":['#edf8fb','#bfd3e6','#9ebcda','#8c96c6','#8856a7','#810f7c'],
				"7":['#edf8fb','#bfd3e6','#9ebcda','#8c96c6','#8c6bb1','#88419d','#6e016b']
			}
		},
		diverging:{
			rdylbu:{
				"3":['#fc8d59','#ffffbf','#91bfdb'],
				"5":['#d7191c','#fdae61','#ffffbf','#abd9e9','#2c7bb6'],
				"7":['#d73027','#fc8d59','#fee090','#ffffbf','#e0f3f8','#91bfdb','#4575b4'],
				"9":['#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4']
			},
			rdbu:{
				"3":['#ef8a62','#f7f7f7','#67a9cf'],
				"5":['#ca0020','#f4a582','#f7f7f7','#92c5de','#0571b0'],
				"7":['#b2182b','#ef8a62','#fddbc7','#f7f7f7','#d1e5f0','#67a9cf','#2166ac'],
				"9":['#b2182b','#d6604d','#f4a582','#fddbc7','#f7f7f7','#d1e5f0','#92c5de','#4393c3','#2166ac']
			},
		}
	},
	missing : "#dddddd"
};


function aesthetics(data){
	//console.log(data);
	//get distribution of variable in data
	var distro = function(variable){
		//sorted values
		var vals = data.map(function(d){return d[variable]}).sort(function(a,b){return a-b});

		//percentiles to compute
		var dec = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
		var quint = [0.2, 0.4, 0.6, 0.8];

		//ranking function
		var rank = function(v){return vals.indexOf(v)+1;};

		//deciles
		var deciles = dec.map(function(d){
			return d3.quantile(vals, d);
		});

		//quintiles
		var quintiles = quint.map(function(d){
			return d3.quantile(vals, d);
		});
		
		//summary stats
		var range = d3.extent(vals);
		var mean = d3.mean(vals);
		var median = d3.median(vals);
		var sd = d3.deviation(vals);
		var cv = sd/mean;

		return {
			deciles: deciles,
			quintiles: quintiles,
			range:range,
			min:range[0],
			max:range[1],
			absmax:d3.max([Math.abs(range[0]), Math.abs(range[1])]),
			mean:mean,
			median:median,
			sd:sd,
			cv:cv,
			values:vals,
			rankfun:rank
		}
	};

	//internal aesthetic factory functions

	//requirement: aesthetic mapping functions must only take a variable name as an argument
	//the returned object may have any number of methods, but is required to have only one--a map method that takes
	//values from data and returns an aesthetic value (e.g. "red" for stroke).
	//the map method is called with the a record from data as its only argument as well as the corresponding geo object as this
	//subsequent tweaking of parameters can be done by using scale-specific methods

	//to do: split apart quantile, quantize, categorical and change the way you set scale on the front end.
	//use a generic set_scale method for all attributes that creates the necessary methods (e.g. map) and missing value handlers

	//quantitative colors
	var aes_color = function(variable){
		var di = distro(variable);
		
		var min = di.min;
		var max = di.max;

		//default scale parameters
		var midpoint = min < 0 && max > 0 ? 0 : null;
		var pal_type = midpoint === null ? "sequential" : "diverging";
		var scale_type = "quantize"; //can be quantize, quantile, or linear

		//palette(s)
		var pal = null;
		var lpal = {low:null, high:null, mid:"#ffffff"};
		

		//aes object methods
		var aes = {};

		//aesthetic mapping function
		aes.map = null;

		//record break values for quantize/quantile scales
		var breaks = null;
		var ticks = null;

		var manual_domain = null;

		//rebuild the scale
		var set_scale = function(){
			
			//set domain
			if(manual_domain != null){
				var domain = manual_domain;
			}
			else if(scale_type=="quantile"){
				var domain = di.values.slice(0);
			}
			else if(pal_type=="diverging"){
				//record the biggest absolute distance between the extremes and the midpoint
				var midpoint_distance = Math.max(Math.abs(max-midpoint), Math.abs(min-midpoint));
				
				//extend the domain equal distances from the midpoint -- enough to capture the most extreme (relative to midpoint)
				var domain = [midpoint-midpoint_distance, midpoint+midpoint_distance];
			}
			else{
				var domain = [min, max];
			}			

			//set palette
			if(pal==null && (scale_type=="quantize" || scale_type=="quantile")){
				pal = pal_type=="diverging" ? palettes.colorbrewer.diverging.rdylbu["7"].slice(0) : 
											  (min < 0 ? palettes.colorbrewer.sequential.ylorrd["5"].slice(0) : 
												  	     palettes.colorbrewer.sequential.ylgnbu["5"].slice(0));
			}
			else if((lpal.low==null || lpal.high==null) && scale_type=="linear"){
				lpal.low = pal_type=="diverging" ? "#67000d" : "#e4f1fd"; //if diverging, low is dark red, otherwise faint blue
				lpal.high = "#063766"; //default to dark blue
				lpal.mid = "#ffffff"; //mid is always #ffffff by default
			}

			//set the mapping function (from value to color)
			if(scale_type == "quantize"){
				var aes_map = d3.scaleQuantize().domain(domain).range(pal);
				breaks = pal.map(function(d){
					return aes_map.invertExtent(d);
				});
				ticks = pal.map(function(d,i){
					return {value:breaks[i], color:d}
				});
			}
			else if(scale_type == "quantile"){
				var aes_map = d3.scaleQuantile().domain(domain).range(pal);
				var brk = aes_map.quantiles();
				breaks = brk.map(function(d,i){
					if(i==0){
						return [min, d];
					}
					else{
						return [brk[i-1], d];
					}
				});
				//add top end to breaks
				breaks.push([brk[brk.length-1], max]);
				ticks = pal.map(function(d,i){
					return {value:breaks[i], color:d}
				});
			}
			else if(scale_type == "linear" && pal_type == "sequential"){
				var interpolator = d3.interpolateLab(lpal.low, lpal.high);
				var linear_scale = d3.scaleLinear().domain(domain).range([0,1]);
				var aes_map = function(v){return interpolator(linear_scale(v))};
				breaks = null;
				ticks = null;
			}
			else if(scale_type == "linear" && pal_type == "diverging"){
				var interpolator_high = d3.interpolateLab(lpal.mid, lpal.high);
				var interpolator_low = d3.interpolateLab(lpal.mid, lpal.low);
				var linear_scale_high = d3.scaleLinear().domain([midpoint, domain[1]]).range([0,1]);
				var linear_scale_low = d3.scaleLinear().domain([midpoint, domain[0]]).range([0,1]);
				var aes_map = function(v){
					return v >= midpoint ? interpolator_high(linear_scale_high(v)) : interpolator_low(linear_scale_low(v));
				};
				breaks = null;
				ticks = null;
			}
			else{
				var aes_map = function(v){return "#dddddd"};
				breaks = null;
				ticks = null;
			}

			//decorate with missing values handler -- record could also be missing or undefined
			aes.map = function(record){
				var v = record != null ? record[variable] : null;
				return v==null ? palettes.missing : aes_map(v); 
			};
		};

		//set a manual domain override
		aes.domain = function(dom){
			manual_domain = dom;
			set_scale();
			return aes;
		};

		//each of these changes to the scale necesitates a reworking of the scale
		aes.flip = function(){
			//flip only has an impact on the existing scale
			if(scale_type == "linear"){
				var h = lpal.high;
				lpal.high = lpal.low;
				lpal.low = h;
			}
			else{
				pal.reverse();
			}
			
			set_scale();
			return aes;
		};

		aes.quantize = function(palette){
			scale_type = "quantize";
			if(arguments.length == 0){pal = null;}
			else{pal = palette;}
			
			set_scale();
			return aes;
		};

		aes.quantile = function(palette){
			scale_type = "quantile";
			if(arguments.length == 0){pal = null;}
			else{pal = palette;}
			
			set_scale();
			return aes;
		};

		aes.linear = function(low, high, mid){
			scale_type = "linear";
			if(arguments.length==0){
				lpal.low = null;
				lpal.high = null;
				lpal.mid = "#ffffff";
			}
			else if(arguments.length==1){
				lpal.low = low;
			}
			else if(arguments.length==2){
				lpal.low = low;
				lpal.high = high;
			}
			else{
				lpal.low = low;
				lpal.high = high;
				lpal.mid = mid;
			}
			
			set_scale();
			return aes;
		};

		aes.midpoint = function(mp){
			isnumber = !isNaN(parseFloat(mp)) && isFinite(mp);
			isinrange = mp > min && mp < max;
			midpoint = arguments.length==0 || !isnumber || !isinrange ? null : mp;
			
			//keep palette type up do date -- apart from the default setting, this is the only place
			//where pal_type is set -- it should never be inferred from data after default
			pal_type = midpoint == null ? "sequential" : "diverging";

			set_scale();
			return aes;
		};

		//return breaks
		aes.breaks = function(){
			return breaks;
		};

		aes.ticks = function(){
			return ticks;
		};

		//build the default scale
		set_scale();

		return aes;
	};

	//to do: implement
	//to do: more robust handling of negative values
	//per bostock: To avoid distortion, make sure that the minimum domain and range values are both zero! (for sqrt)
	var aes_radius = function(variable){
		var distribution = distro(variable);

		var maxR = 25;
		var minR = 0;
		var missingR = minR;

		var domain = [0, distribution.absmax];

		var scale = d3.scaleSqrt().domain(domain).range([minR, maxR]);

		var aes = {};

		function set_scale(){
			aes.map = function(record){
				var v = record != null ? record[variable] : null;
				return v==null ? missingR : scale(Math.abs(v)); 
			};
		}

		aes.radii = function(min_radii, max_radii, missing_r){
			if(arguments.length == 0){
				return {min:minR, max:maxR}
			}
			else if(arguments.length == 1){
				minR = min_radii;
			}
			else if(arguments.length == 2){
				minR = min_radii;
				maxR = max_radii;
			}
			else{
				minR = min_radii;
				maxR = max_radii;	
				missingR = missing_r;			
			}

			scale = d3.scaleSqrt().domain(domain).range([minR, maxR]);

			set_scale();

			return aes;
		};

		//set scale breaks manually - breaks.length should equal sizes.length-1;
		aes.breaks = function(breaks, sizes){
			scale = function(v){
				var i = -1;
				var r = null;
				while(++i < breaks.length){
					if(v < breaks[i]){
						r = sizes[i];
						break;
					}
				}

				if(r===null){
					r = sizes[sizes.length-1];
				}

				return r;
			};

			set_scale();
		};

		aes.domain = function(custom_domain){
			if(arguments.length){
				domain = custom_domain;
				scale.domain(custom_domain);
				set_scale();
				return aes;
			}
			else{
				return scale.domain();
			}
		};

		aes.ticks = function(values){
			var vals;
			if(arguments.length){
				vals = values;
			}
			else{
				vals = d3.range(0, 9, 4).map(function(i){return distribution.deciles[i]});
			}

			return vals.map(function(d){
				//this format is acceptable by aes.map
				var v = {};
				v.value = d;
				v.r = scale(d);
				return v;
			});
		};

		set_scale(); //initialize

		return aes;
		
	};

	//to do: implement -- returned object must have a map method that takes a record and returns a value
	//map method must hande null and undefined records
	var aes_x = function(variable){

	};

	//to do: implement
	var aes_y = function(variable){

	};

	var aes_color_categorical = function(variable){
		
		var all_cols = d3.schemeCategory20c;
		var vals = data.map(function(d){return d[variable]});

		var levels;
		var labels;
		var colors;
		var aes = {}; //exposed methods
		
		//set default levels
		var set_default_levels = function(){	
			levels = [];
			var i = -1;
			while(++i < vals.length){
				if(levels.indexOf(vals[i]) == -1){
					levels.push(vals[i]);
				}
			}
			labels = levels.slice(0);
		};

		var set_default_colors = function(){
			if(levels.length <= 5){
				colors = levels.map(function(d,i){return all_cols[i*4]});
			}
			else if(levels.length <= 10){
				colors = levels.map(function(d,i){return all_cols[i*2]});
			}
			else if(levels.length <= 20){
				colors = levels.map(function(d,i){return all_cols[i]});
			}
			else{
				//some colors will repeat
				colors = levels.map(function(d,i){return all_cols[i%20]});
			}			
		};

		var set_scale = function(){
			var scale = d3.scaleOrdinal().domain(levels).range(colors).unknown(palettes.missing);
			aes.map = function(record){
				var v = record != null ? record[variable] : null;
				return v==null ? palettes.missing : scale(v); 
			};
		};

		//set defaults
		set_default_levels();
		set_default_colors();
		set_scale();

		//set levels, colors, and optional labels
		aes.levels = function(lev, col, lab){
			if(lev===null){
				set_default_levels(); //also sets labels
				set_default_colors();
			}
			else if(arguments.length==0){
				var get_levels = levels.slice(0);
					get_levels.labels = labels;
					get_levels.colors = colors;
				return get_levels;
			}
			else if(arguments.length==1){
				levels = lev;
				labels = levels.slice(0);
				set_default_colors();
			}
			else if(arguments.length==2){
				levels = lev;
				labels = levels.slice(0);
				colors = col;
			}
			else{
				levels = lev;
				labels = lab;
				colors = col;
			}
			set_scale();

			return aes;
		};

		//get label for a value
		aes.label = function(v){
			var i = levels.indexOf(v);
			if(i==-1){
				return null;
			}
			else{
				return labels[i];
			}
		};

		return aes;
	};

	//aesthetic factory functions -- call these to generate scales/aesthetic mappers for stroke, fill, r, etc.
	//the result of the factory function is an object with a map method. map methods take an observation from data and return an aesthetic value
	//missing values are passed to the map method as null, the map method is called with the geographic feature as 'this'
	return {
		stroke: aes_color,
		fill: aes_color,
		strokecat: aes_color_categorical,
		fillcat: aes_color_categorical,
		r: aes_radius,
		cx: aes_x,
		cy: aes_y 
	}

}

//to do: make more explicit whether scrollbars are included

function get_dim(el){

	//viewport height/width -- note that window.innerwidth includes scrollbars so will be wider than clientWidth
	var window_height = Math.max(document.documentElement.clientHeight, (window.innerHeight || 0));
	var window_width = Math.max(document.documentElement.clientWidth, (window.innerWidth || 0));

	if(arguments.length > 0){
		var element = el;
		var get_viewport = false;
	}
	else{ 
		var element = document.documentElement;
		var get_viewport = true;
	}

	var err = false;

	try{
		var box = element.getBoundingClientRect();
		var w = Math.floor(box.right - box.left);
		var h = Math.floor(box.bottom - box.top);
	}
	catch(e){
		var box = {};
		var w = window_width;
		var h = window_height;
		err = true;
	}

	//if we want viewport dims: 1) derived w is better than window_width because it subtracts scroll bars,
	//							2) window_height is best because it is limited to viewable area while derived h will cover the whole doc
	//							   --note that window_height may not subtract horizontal scroll bar height, but this is less of a problem
	var dim = {width: w, height: (get_viewport ? window_height : h), error:err, box:box, viewport_height: window_height};

	return dim;
}

//To do: make tooltip variable width
//To do: selectively call tooltip on enter only? Or just add this to api

function tooltips(layer, dom, annotation_group){

	var tip = dom.tip;
	var tip_inner = dom.tip_inner;

	var parent_node = tip.node().parentNode;

	var tip_width = dom.dim.width;
	var tip_pad = dom.dim.pad;

	var enabled = false;

	//to do: handle cases where tooltip goes above/below viewport

	var container_viewport = get_dim(parent_node); //dimnsions of tooltip container;

	//hide on mousedown - useful on mobile
	d3.select(parent_node).on("mousedown", hide);




	//clone an svg feature attributes in the annotation_group layer 
	function annotate_feature(svg_feature){
	
		var ag = d3.select(annotation_group);
		ag.selectAll("*").remove(); //clear the layer

		if(svg_feature!=null){

			var thiz = d3.select(svg_feature);
			var datum = thiz.datum();
			
			var dattr = thiz.attr("d");
			var type = svg_feature.tagName.toLowerCase();
			var is_points = type == "circle";


			if(is_points){
				var point = ag.append("circle").attr("cx", thiz.attr("cx"))
													   .attr("cy", thiz.attr("cy"))
													   .attr("r", thiz.attr("r"))
													   .attr("fill",thiz.attr("fill"))
													   .attr("stroke","#111111")
													   .attr("stroke-width","1.5");
			}
			else{
				var poly = ag.append("path").attr("d", thiz.attr("d"))
													.attr("fill", thiz.attr("fill"))
													.attr("stroke", "#111111")
													.attr("stroke-width","1.5");
			}
		}
	}


	var T = {};

	T.width = function(w){
		if(arguments.length==0){
			return tip_width;
		}
		else{
			tip_width = w;
			return T;
		}
	};

	var tiptimer;

	//hide tooltips
	function hide(){
		tip.style("visibility","hidden").style("left", "-300px").style("top","0%");
		dom.arrows.L.style("visibility","hidden");
		dom.arrows.R.style("visibility","hidden");
	}

	//show tooltips using pos.left, pos.top
	function show(pos){

			dom.arrows.L.style("visibility","hidden");
			dom.arrows.R.style("visibility","hidden");

			if(tip_width + pos.left + tip_pad <= container_viewport.width){
				var left = pos.left;
				dom.arrows.L.style("visibility","visible");
			}
			else if(pos.left - tip_width - (2*tip_pad) >= 0){
				var left= pos.left - tip_width - (2*tip_pad);
				dom.arrows.R.style("visibility","visible");
			}
			else{
				var left = 0;
			}

			var top = pos.top - 25;

			//to do -- run these calcs in timeout at some point to ensure sizing is correct -- for some reason is very slow in callback
			var box = tip.node().getBoundingClientRect();
			var container_top = container_viewport.box.top;

			var height = box.bottom - box.top;


		tip.style("visibility","visible").style("opacity","1").style("left", left+"px").style("top", top+"px").style("width",(tip_width+(2*tip_pad))+"px");
		//tip_inner.style("width",tip_width+"px")
	}

	//show tooltip, using mouse events to get pos.x/pos.y
	function show_mouse(d, i){
		clearTimeout(tiptimer);
		try{
			if(!enabled){throw "Tooltips are disabled"}
			//update on mouseenter

			container_viewport = get_dim(parent_node);
			
			var mouse = d3.mouse(parent_node);

			show({left:mouse[0], top:mouse[1]});
		}
		catch(e){
			//console.log(e);
			hide();
		}
		//console.log(layer.lookup(d.properties.geo_id));
	}


	//register tooltips that apply to geo layer on an arbitrary selection of points or polys, 
	//all annotations will be drawn in annotation_group (e.g. highlights, etc)
	//this function is typically not used by the user, except when applying tooltips to free_layers
	T.apply = function(sel, build){
		
		sel.on("mouseenter", function(d,i){
			annotate_feature(this); //
			build.call(tip_inner.node(), d);
			show_mouse(d,i);
		});

		//mousemove is a subset of mouseenter
		sel.on("mousemove", function(d,i){
			//no need to annotate (done on enter)
			build.call(tip_inner.node(), d);
			show_mouse(d,i);
		});		

		sel.on("mouseleave", function(d,i){
			tiptimer = setTimeout(hide, 300);
			annotate_feature(null);
		});

		//return a function that will clear annotations from anno_group
		var clearIt = function(){
			annotate_feature(null);
		};

		return clearIt;
	};


	T.off = function(){
		enabled = false;
		annotate_feature(null); //remove any annotation
		hide();
		return T;
	};

	T.hide = function(){
		annotate_feature(null);
		hide();
		return T;
	};

	//tooltip text formatting function
	//text function takes data obs, tooltip as this object
	var text = function(d){return JSON.stringify(d);};
	//data accessor takes data bound to point or poly and returns bound data
	var accessor = function(d){return layer.lookup(d.properties.geo_id);};
	//combine text and accessor -- call with build.call
	var build = function(d){
		//this == tooltip node
		var that = this;
		var data = accessor(d);
		text.call(that, data);		
	};

	//apply tooltips to all geo features in a layer
	//text_accessor is a function that takes a data observation and has access to tooltip node as this object
	//optional data_accessor takes data bound to path/circle and returns data observation -- in geo layers, setting this is likely not necessary. but useful for free_layers
	T.text = T.on = function(text_accessor, data_accessor){
		enabled = true;

		if(typeof text_accessor === "function"){text = text_accessor;}
		if(typeof data_accessor === "function"){accessor = data_accessor;} 

		var geodata = layer.geo();
		if(geodata != null){
			var i = -1;
			while(++i < geodata.length){
				if(geodata[i].hasOwnProperty("selection")){
					T.apply(geodata[i].selection, build);
				}
			}
		}

		return T;
	};

	//programmatic tooltips -- relies on text/data accessors passed to T.text/T.on above
	T.highlight = function(geo_id){
		clearTimeout(tiptimer);

		var geodata = layer.geo();
		var svg_feature = null;
		
		try{
			//geodata could be null
			var nodes = geodata.map(function(d){
				var n = [];
				if(d.hasOwnProperty("selection")){
					n = d.selection.nodes();
				}
				return n;
			});
			//flatten to a single layer of nodes
			var allnodes = [].concat.apply([], nodes);
			
			var i=-1;
			while(++i < allnodes.length){
				try{
					if(allnodes[i].__data__.properties.geo_id == geo_id){
						svg_feature = allnodes[i];
						break;
					}
				}
				catch(e){
					svg_feature = null;
				}
			}
		}
		catch(e){
			svg_feature = null;
		}

		container_viewport = get_dim(parent_node);

		if(svg_feature !== null){
			var bbox = svg_feature.getBBox();
			var x = bbox.x + bbox.width/2;
			var y = bbox.y + bbox.height/2;

			show({left:x, top:y});
			annotate_feature(svg_feature);

			build.call(tip_inner.node(), svg_feature.__data__);
		}
	};	

	T.enabled = function(){
		return enabled;
	};

	return T;

}

//left off with L.geo -- how to handle multiple layers of data
//need to implement L.aes to return whole aes methods to user -- need the option of limiting aesthetics to data on map -- or is that really the only option (yes, i think so)

//see "to dos" in code

//TO DO: transfer all to dos to issues tracked in bitbucket

//unit tests:
// 1) initial data bind
// 2) update data: a) append scenario, b) replace scenario
// 3) initial geo 
// 4) update geos: a) append, b) replace
// 5) aesthetics on bound geos only or on all data uploaded

//to do: shouldn't attr and style methods just operate directly on svg selection

//future features -- if duplicates are present in the code, provide a mechanism to "roll up" thes observations into summary data
//to do: enforce geo added only is featurecollection with feature.properties.geo_id available as unique geo id. ensures clean update of aesthetics on resize due to use of key function 
//to do: handle dimension module better (is it the viewport or the window? scrollbars?)

//requirements: geo_id field in geo data must be called "geo_id"
//              we only support FeatureCollection and array of points with lon, lat for fields

//layer_data should be in the form of [{feature data 0}, {feature data 1}, ... {feature data n}]
//geo_id is the name of the property in {feature data} that uniquely identifies a geography (according to reference 
//  geography spec), or an accessor function that generates a geo_id from a {feature data} observation
//layer_type should be one of: state, county, tract, metro, place
//point_or_poly should take either "point" or "poly". If missing, the (geotype-dependent) default is used

//to do: check on calc of composite bbox
//to do: currently the library assumes a FeatureCollection is a polygon: layer.geo only supports registering a polygon feature collection or an array of points

//to do: refactor code for tooltips and legends. tooltips are sloppy when not applied to geo layers. also get more sophisticated about placement
//legends need to be less ad-hoc and with better layout
//to do: make default height of maps shorter to deal with fixed bar at top
//to do: map will draw on resize even if the user hasn't called draw()
//to do: do a final draw in a timeout? How can we make sure there are no errors with this? Don't do anything unti first good dimension is taken.  Request animation frame?

function layer(){

	//Layer object, L
	var L = {};

	//each layer has a bounding box of the form [left, bottom, right, top]
	L.bbox = null;

	//aesthetic methods
	L.aes = {};

	//aesthetic mapping function registry for svg attributes
	var aes_mappings = {};

	//style mappings for svg css styles
	var style_mappings = {};

	//container for geo data
	var geodata = null;
	var is_points = false;
	//container for layer data to depict
	var de_duped = null;
	var matched = null;
	var lookup = null;

	//this is why you shouldn't call layer() directly, layers are created with the parent map object as this; all layers share same projection
	var map = this.map;
	//console.log(map);
	var svg = map.svg.append("g"); //just a wrapper -- to avoid reordering layers, don't touch this except to show/hide
	var svg_group = svg.append("g"); //one group to hold all geos -- provides a quick way to remove all sub-layers
	var anno_group = svg.append("g").style("pointer-events","none"); //annotation layer on top of main geo layer

	//record any warnings about the layer
	var warnings = {
		duplicates: null,
		missings: null,
		unknowns: null
	};

	L.warnings = function(){
		return warnings;
	};

	L.is_poly = function(){
		return !is_points;
	};

	//show/hide the layer -- optionally specify a transition duration for fade in/out
	L.hide = function(dur, callback){

		if(arguments.length > 0 && !!dur){
			svg.transition().duration(dur).style("opacity",0).on("end", function(){
				svg.style("visibility","hidden").style("pointer-events","none");
				if(!!callback){callback();}
			});
		}
		else{
			svg.interrupt().style("opacity",0).style("visibility","hidden").style("pointer-events","none");
			if(!!callback){callback();}
		}

		return L;
	};

	L.show = function(dur, callback){

		svg.style("visibility","visible").style("pointer-events",null);

		if(arguments.length > 0 && !!dur){
			svg.transition().duration(dur).style("opacity",1).on("end", function(){
				if(!!callback){callback();}
			});
		}
		else{
			svg.interrupt().style("opacity",1);
			if(!!callback){callback();}
		}

		return L;
	};


	//set aesthetics based on distribution in data, if passed, or in matched data (default)
	//matched is created in qa(), so call this after qa()
	var set_aes = function(data){
		//console.log(matched);
		try{
			if(arguments.length > 0){
				var aes = aesthetics(data);
			}
			else{
				var aes = aesthetics(matched);
			}

			//function that decorates aes factory functions with attr and scale names
			//scale_name is used to retrieve factory function from aes object created by aesthetics() above
			//calling the decorated factory function registers the returned aesthetic function in aes_mappings object
			var aes_decorator = function(attr, scale_name){
				if(arguments.length < 2){
					scale_name = attr;
				}

				//the user interfaces with this function
				//if the user passes null, the aesthetic function is de-registered
				//if the user passes no arguments, the registered function is returned
				//if the user passes a variable name, a new aesthetic function is registered and returned to the user for
				//tweaking useing the methods specific to the aesthetic function
				return function(variable_in_data){
					if(variable_in_data===null){
						delete aes_mappings[attr];
						return null;
					}
					else if(arguments.length==0){
						return aes_mappings[attr];
					}
					else{
						//spin out a new aesthetic mapping function and store in aes_mappings
						var aesthetic_fn = aes[scale_name](variable_in_data);
						aes_mappings[attr] = aesthetic_fn; //register
						return aesthetic_fn; //return to user for further tweaking
					}

				}		
			}; 

			//these are the same method names exposed in aes
			L.aes.stroke = aes_decorator("stroke");
			L.aes.strokecat = aes_decorator("stroke", "strokecat");
			L.aes.fill = aes_decorator("fill");
			L.aes.fillcat = aes_decorator("fill","fillcat");
			L.aes.r = aes_decorator("r");
			L.aes.cx = aes_decorator("cx");
			L.aes.cy = aes_decorator("cy");
		}
		catch(e){
			console.log(e);
		}

		return L;
	};

	//set an arbitrary attribute for the features of this layer
	//attr_mapper can be a function that takes a merged data value as an argument and returns an aesthetic value, or it can be a constant
	//if a function attr_mapper will be called with the corresponding geo feature as this object
	L.attr = function(attr, attr_mapper){
		if(arguments.length==0){
			return null;
		}
		else if(arguments.length==1){
			return aes_mappings[attr];
		}
		else if(arguments.length > 1 && attr_mapper===null){
			delete aes_mappings[attr];
			return L;
		}
		else if(attr in {r:1, stroke:1, fill:1, "stroke-dasharray":1, "stroke-width":1, "fill-opacity":1, opacity:1, cx:1, cy:1, filter:1}){
			aes_mappings[attr] = {map:attr_mapper};
			return L;
		}
		else{
			return null
		}
	};

	//apply static styles to elements in layer -- analagous to attr above
	//style_mapper called with merged data value as argument and geo object as this
	L.style = function(style, style_mapper){
		if(arguments.length==0){
			return null;
		}
		else if(arguments.length==1){
			return style_mappings[style];
		}
		else if(arguments.length > 1 && style_mapper===null){
			delete style_mappings[style];
			return L;
		}
		else{
			style_mappings[style] = {map: style_mapper};
			return L;
		}

	};

	//run data matching checks
	//to do: fix to handle array of geodata 
	var qa = function(){
		var num_missing = 0;
		var num_unknown = 0;

		var missing = {}; //geos in reference geography, but not in data
		var unknown = {}; //geos in data, but not in reference geography

		var geos = [];

		//determine what geos are here 
		geodata.forEach(function(D){
			D.data.features.forEach(function(d){
				geos.push(d.properties.geo_id);
			});
		});

		//look through geos and find values missing from data
		var i = -1;
		while(++i < geos.length){
			if(!lookup.hasOwnProperty(geos[i])){
				missing[geos[i]] = missing.hasOwnProperty(geos[i]) ? missing[geos[i]] + 1 : 1;
				num_missing += 1;
			}
		}

		//look through data lookup and find unknown geos (compared to geodata)
		matched = []; //data in both -- used to compute aesthetics
		for(var l in lookup){
			if(lookup.hasOwnProperty(l)){
				if(geos.indexOf(l) == -1){
					unknown[l] = unknown.hasOwnProperty[l] ? unknown[l] + 1 : 1;
					num_unknown += 1;
				}
				else{
					matched.push(lookup[l]);
				}
			}
		}

		if(num_missing > 0){
			warnings.missings = {
				description: "The geography data contains " + num_missing + " geographies that were not in the bound data.",
				data: missing
			};
		}

		if(num_unknown > 0){
			warnings.unknowns = {
				description: "The bound data contains " + num_unknown + " geographies that are not in the geographic data.",
				data: unknown
			};
		}
	};
	
	var de_duper = function(array, get_geo_id){
		
		//de-duped array of data
		var de_duped = [];

		var lookup = {};

		//keep track of merge warnings
		var dupes = {};	
		var num_dupes = 0;

		//de-duped data -- keep only first obs encountered for a geo
		array.forEach(function(d,i){

			var id = get_geo_id(d);

			if(lookup.hasOwnProperty(id)){
				//lookup already has data for geography -- observation is a duplicate
				num_dupes += 1;
				dupes[id] = dupes.hasOwnProperty(id) ? dupes[id] + 1 : 1;
			}
			else{
				lookup[id] = d;
				de_duped.push(d);
			}
		});

		if(num_dupes > 0){
			var warning = {
				description: "The latest data upload included " + num_dupes + " duplicated records. These duplicated records will not be depicted in the map.",
				data: dupes
			};
		}
		else{
			var warning = null;
		}

		return {
			lookup: lookup,
			de_duped: de_duped,
			warning:warning
		}
	};

	//add data (or get de-duped data)
	L.data = function(layer_data, geo_id, append_to_current){
		if(arguments.length==0){
			return de_duped;
		}

		//default geo_id property assumed to be "geo_id"
		if(arguments.length < 2){
			geo_id = "geo_id"; 
		}

		//set the geo id accessor for each record in data
		if(typeof geo_id !== "function"){
			var get_geo_id = function(d){return d[geo_id]+""};
		}
		else{
			var get_geo_id = geo_id;
		}

		//de duped
		var de_du = de_duper(layer_data, get_geo_id); 

		//if appending to current... 
		//go through existing lookup and add data that isn't in de_du.lookup (above)
		if(arguments.length >= 3 && !!append_to_current && lookup != null){
			for(var l in lookup){
				if(lookup.hasOwnProperty(l) && !de_du.lookup.hasOwnProperty(l)){
					//if something is in old lookup, but not in new, then add it to the new lookup and de_duped arrays
					de_du.lookup[l] = lookup[l];
					de_du.de_duped.push(lookup[l]);

				}
			}
		}

		//assign new data
		de_duped = de_du.de_duped;
		lookup = de_du.lookup;
		warnings.duplicates = de_du.warning;

		//run qa, build aesthetic mappers
		if(lookup!=null && geodata!=null){
			qa();
			set_aes();
		}

		return L;
	};

	//lookup a data record for geo_id -- returns null if missing or data not set
	L.lookup = function(geo_id){
		return lookup != null && lookup[geo_id] != null ? lookup[geo_id] : null;
	};

	//function to standardize data entry for L.geo
	L.buildFeatureCollection = function(){

	};

	//note that points and polygons are not compatible in the same layer because they do not share the same eligible attributes
	var new_geo = function(geo_data, append){

		//accepted types geojson featurecollection for polygons, or array of points for points (to be converted to featurecollection as well)
		//geographic identifier must be "geo_id", geographic name, if relevant, must be "geo_name"
		if(geo_data.hasOwnProperty("type") && geo_data.type=="FeatureCollection"){
			//geojson -- geo_data.features == [{type:"feature", properties:{prop:propval}}, {}] 
			if(is_points){append=false;} //do not mix points and polys in layer
			is_points = false;
			var geoBounds = d3.geoBounds(geo_data);
			var bbox = [geoBounds[0][0], geoBounds[0][1], geoBounds[1][0], geoBounds[1][1]];

			geo_data.bbox = bbox;

		}
		else{
			//array of point data
			//to do: offload all conversion to a geo api
			if(!is_points){append=false;}
			is_points = true;

			//build features array
			var features = geo_data.map(function(d,i){
											return {
													"type": "Feature",
													"geometry": {
														"type": "Point",
														"coordinates": [d.lon, d.lat]
													},
													"properties": d
													}	
										});

			//add features to FeatureCollection
			var geo_data = {
				"type": "FeatureCollection",
				"features": features 
			};

			var geoBounds = d3.geoBounds(geo_data);
			var bbox = [geoBounds[0][0], geoBounds[0][1], geoBounds[1][0], geoBounds[1][1]];
			geo_data.bbox = bbox;
		}

		//set layer bbox
		if(L.bbox == null || !append){
			L.bbox = bbox;
		}
		else{
			//expand layer bounding box if necessary
			if(bbox[0] < L.bbox[0]){L.bbox[0] = bbox[0];}
			if(bbox[1] < L.bbox[1]){L.bbox[1] = bbox[1];}
			if(bbox[2] > L.bbox[2]){L.bbox[2] = bbox[2];}
			if(bbox[3] > L.bbox[3]){L.bbox[3] = bbox[3];}
		}

		if(geodata == null || !append){
			svg_group.remove(); //remove main layer and sub-layers
			svg_group = svg.append("g"); //new main layer
			
			anno_group.raise(); //keep this layer's annotation group on top
			geodata = [{data: geo_data, g:svg_group.append("g")}];
		}
		else{
			geodata.push({data: geo_data, g:svg_group.append("g")});
		}

		//run qa, build aesthetic mappers
		if(lookup!=null && geodata!=null){
			qa();
			set_aes();
		}

	};

	L.geo = function(geo_data){
		if(arguments.length==0 || !geo_data){
			return geodata;
		}
		else{
			//replace existing geo
			new_geo(geo_data, false);
		} 
		return L;
	};

	//add geo to an existing layer -- useful if making async data pulls, but note auto projections will be based off of first geo json
	//in any layer used for that purpose, also will not append mixed types (polys and points). if no geodata is present, this is the same as L.geo 
	L.append_geo = function(geo_data){
		if(arguments.length==0 || !geo_data){
			return geodata;
		}
		else{
			//append to existing geo
			new_geo(geo_data, true);
		} 
		return L;
	};

	//build a projection based on composite bbox in layer (composite because it is the smallest bbox that fits all sub geos within layer)
	//assigns to private projection variable defined above
	L.get_albers = function(){
		var bbox = L.bbox;

		if(bbox != null){
			var lat_delta = bbox[3] - bbox[1];
		}

		var parallel1 = bbox[3] - (lat_delta/4); //higher (1/4 lower than top)
		var parallel0 = bbox[1] + (lat_delta/4); //lower

		var rotateX = bbox[0] + ((bbox[2] - bbox[0])/2);
		var centerY = bbox[1] + (lat_delta/2);

		return d3.geoAlbers()
		    .rotate([-rotateX,0])
		    .center([0,centerY])
		    .parallels([parallel0, parallel1]);

	};	

	//tooltips
	//to do: streamline the tooltips api... 
	var ttips = tooltips(L, this.dom.tooltip, anno_group.node());
	
	//allow the user to pass a tooltip build function using data and a data accessor that takes point/poly data and returns data to build fn
	L.tooltips = function(fn, dfn){
		if(arguments.length && !fn){
			ttips.off();
		}
		else if(typeof fn === "function"){
			ttips.on(fn, dfn);
		}

		return ttips;
	};

	//draw the layer
	L.draw = function(resize_only){
		var proj = map.projection();
		var path = d3.geoPath().projection(proj);

		//aesthetic mapping, yes or no?
		var apply_all = (arguments.length==0 || !resize_only);

		//methods that take in the geo object data, return record from lookup -- draw only accepts geojson now, no longer arrays of points
		var get_record = function(d){
			var geo_id = d.properties.geo_id;
			return L.lookup(geo_id); //handles null data
		}; 

		//default, read-only aesthetics
		var default_aes = {
			point:{
				"r":10,
				"stroke":"#efefef",
				"fill":"#efefef",
				"cx": function(feature){return proj(feature.geometry.coordinates)[0]},
				"cy": function(feature){return proj(feature.geometry.coordinates)[1]}
			},
			poly:{
				"stroke":"#aaaaaa",
				"fill": "#efefef",
				"d": path
			}
		};

		var resize_props = {"r":1, "cx":1, "cy":1, "d":1};

		//set aesthetics
		//to do: parse this out more appropriately -- only r, cx, cy, and d should get redrawn on reisze
		var apply_aes = function(selection, point_or_poly){

			var aes_defaults = default_aes[point_or_poly]; 

			//apply defaults, based on geography only
			for(var da in aes_defaults){
				if(aes_defaults.hasOwnProperty(da) && !aes_mappings.hasOwnProperty(da) && 
					(apply_all || resize_props.hasOwnProperty(da) ) ){
					//console.log("Applying attr: "+da);
					//if da is a valid default and has not been registered by user as custom aes, apply it to selection
					selection.attr(da, aes_defaults[da]);
				}
			}

			//now loop through user-specified aesthetics if we are applying all aesthetics on this draw
			for(var a in aes_mappings){
				if(aes_mappings.hasOwnProperty(a) && (apply_all || resize_props.hasOwnProperty(a) ) ){
					if(typeof aes_mappings[a].map === "function"){
						selection.attr(a, function(d,i){
							//data record for given feature -- may be null or undefined
							var record_in_data = get_record(d);

							//missing values get passed to function as null
							if(typeof record_in_data === "undefined"){
								//shouldn't encounter undefined as layer.lookup() handles this case
								//alert("undefined!!");
								record_in_data = null;
							}

							//all aes methods have a map method that take data record and return aesthetic value
							return aes_mappings[a].map.call(d, record_in_data);
						});
					}
					else{
						//apply attribute as a constant
						selection.attr(a, aes_mappings[a].map);
					}
					//console.log("Applying custom attr: "+a);
				}
			}

			//biggest bubbles on bottom
			try{
				if(point_or_poly === "point"){
					var radius_lookup = {};
					selection.each(function(d,i){
						radius_lookup[d.properties.geo_id] = d3.select(this).attr("r");
					}).sort(function(a,b){
						var arad = radius_lookup[a.properties.geo_id];
						var brad = radius_lookup[b.properties.geo_id];
						return brad - arad;
					});
				}
			}
			catch(e){
				console.log(e);
			}

			//apply any styles always, for now
			for(var s in style_mappings){
				if(style_mappings.hasOwnProperty(s)){
					if(typeof style_mappings[s].map === "function"){
						selection.style(s, function(d,i){
							//data record for given feature -- may be null or undefined
							var record_in_data = get_record(d);

							//missing values get passed to function as null
							if(typeof record_in_data === "undefined"){
								record_in_data = null;
							}

							//all style methods have a map method that take data record and return style value
							return style_mappings[s].map.call(d, record_in_data);
						});
					}
					else{
						//apply attribute as a constant
						selection.style(s, style_mappings[s].map);
					}
				}
			}
		};

		if(is_points){
			var i = -1;
			while(++i < geodata.length){
				var tmp = null;
				tmp = geodata[i].g.selectAll("circle").data(geodata[i].data.features, function(d){return d.properties.geo_id});
				tmp.exit().remove();
				geodata[i].selection = tmp.enter().append("circle").merge(tmp);

				apply_aes(geodata[i].selection, "point");
				//apply tooltip events to all features in layer
				if(ttips.enabled()){ttips.on();}
			}
			
		}
		else{
			var i = -1;
			while(++i < geodata.length){
				var tmp = null;
				tmp = geodata[i].g.selectAll("path").data(geodata[i].data.features, function(d){return d.properties.geo_id});
				tmp.exit().remove();
				geodata[i].selection = tmp.enter().append("path").merge(tmp);

				apply_aes(geodata[i].selection, "poly");
				//apply tooltip events to all features in layer -- need to update here when selection is created for geodata
				if(ttips.enabled()){ttips.on();}
			}

		}

	};
	
	return L;
}

//this is a simple function for adding an arbitrary layer 
//to do -- enable tooltips as they are in standard layers

function layer_free(draw_fn){

	//Layer object, L
	var L = {};

	//this is why you shouldn't call layer() directly, layers are created with the parent map object as this; all layers share same projection
	var map = this;
	//console.log(map);
	var svg = map.svg.append("g"); //just a wrapper for the layer -- to avoid reordering layers, don't touch this
	
	var svg_group = svg.append("g"); //provides a quick way to remove all sub-layers

	var anno_group = svg.append("g").style("pointer-events","none");

	var get_geo_id; //data accessor

	//record any warnings about the layer
	var warnings = {

	};

	L.warnings = function(){
		return warnings;
	};

	L.is_poly = function(){
		return false;
	};

	L.hide = function(dur, callback){


		if(arguments.length > 0 && !!dur){
			svg.transition().duration(dur).style("opacity",0).on("end", function(){
				svg.style("visibility","hidden").style("pointer-events","none");
				if(!!callback){callback();}
			});
		}
		else{
			svg.interrupt().style("opacity",0).style("visibility","hidden").style("pointer-events","none");
			if(!!callback){callback();}
		}

		return L;
	};

	L.show = function(dur, callback){

		svg.style("visibility","visible").style("pointer-events",null);

		if(arguments.length > 0 && !!dur){
			svg.transition().duration(dur).style("opacity",1).on("end", function(){
				if(!!callback){callback();}
			});
		}
		else{
			svg.interrupt().style("opacity",1);
			if(!!callback){callback();}
		}

		return L;
	};

	//draw the layer
	L.draw = function(resize_only){
		var context = {dimensions: map.get_dim(), svg:svg_group.node(), anno_group:anno_group.node()};
		draw_fn.call(context);
	};
	
	return L;
}

//synchronous geojson api
//hold small file size data here
//requires topojson

//to do: revisit the geo data here, especially metro points
//to do: how to only do set up once -- each time you call geo_api_sync, things like us_border are created

function geo_api_sync(){
	var api = {};

	var geo_point = {

	};

	var geo_poly = {

	};

	geo_poly.state = {"type":"Topology","bbox":[-179.174265,18.917465999999997,-66.949895,71.352561],"transform":{"scale":[0.0011222549225492254,0.0005243561935619356],"translate":[-179.174265,18.917465999999997]},"objects":{"geos":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[0]],[[1,2]]],"properties":{"geo_id":"23","geo_name":"Maine","geo_name2":"ME"}},{"type":"MultiPolygon","arcs":[[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]]],"properties":{"geo_id":"15","geo_name":"Hawaii","geo_name2":"HI"}},{"type":"Polygon","arcs":[[11,12,13,14,15]],"properties":{"geo_id":"04","geo_name":"Arizona","geo_name2":"AZ"}},{"type":"Polygon","arcs":[[16,17,18,19,20,21]],"properties":{"geo_id":"05","geo_name":"Arkansas","geo_name2":"AR"}},{"type":"Polygon","arcs":[[22,23,24,25]],"properties":{"geo_id":"10","geo_name":"Delaware","geo_name2":"DE"}},{"type":"Polygon","arcs":[[26,27,28,29,30,31]],"properties":{"geo_id":"13","geo_name":"Georgia","geo_name2":"GA"}},{"type":"Polygon","arcs":[[32,33,34,35,36]],"properties":{"geo_id":"27","geo_name":"Minnesota","geo_name2":"MN"}},{"type":"MultiPolygon","arcs":[[[37]],[[38]],[[39]],[[40]],[[41]],[[42,43,-12,44]]],"properties":{"geo_id":"06","geo_name":"California","geo_name2":"CA"}},{"type":"Polygon","arcs":[[45,46]],"properties":{"geo_id":"11","geo_name":"District of Columbia","geo_name2":"DC"}},{"type":"MultiPolygon","arcs":[[[47]],[[48]],[[49]],[[-31,50,51]]],"properties":{"geo_id":"12","geo_name":"Florida","geo_name2":"FL"}},{"type":"Polygon","arcs":[[52,53,54,55,56,57,58]],"properties":{"geo_id":"16","geo_name":"Idaho","geo_name2":"ID"}},{"type":"Polygon","arcs":[[59,60,61,62,63,64]],"properties":{"geo_id":"17","geo_name":"Illinois","geo_name2":"IL"}},{"type":"Polygon","arcs":[[-35,65,-60,66,67,68]],"properties":{"geo_id":"19","geo_name":"Iowa","geo_name2":"IA"}},{"type":"Polygon","arcs":[[-64,69,70,71,72,73,74]],"properties":{"geo_id":"21","geo_name":"Kentucky","geo_name2":"KY"}},{"type":"Polygon","arcs":[[-20,75,76,77]],"properties":{"geo_id":"22","geo_name":"Louisiana","geo_name2":"LA"}},{"type":"MultiPolygon","arcs":[[[78]],[[79,-25,80,81,82,83,-46,84,85]]],"properties":{"geo_id":"24","geo_name":"Maryland","geo_name2":"MD"}},{"type":"MultiPolygon","arcs":[[[86]],[[87]],[[88]],[[89,90,91]],[[92]],[[93,94]]],"properties":{"geo_id":"26","geo_name":"Michigan","geo_name2":"MI"}},{"type":"Polygon","arcs":[[-67,-65,-75,95,-17,96,97,98]],"properties":{"geo_id":"29","geo_name":"Missouri","geo_name2":"MO"}},{"type":"Polygon","arcs":[[99,100,101,102,-55]],"properties":{"geo_id":"30","geo_name":"Montana","geo_name2":"MT"}},{"type":"MultiPolygon","arcs":[[[103]],[[104,105,106,107,108,109,110]]],"properties":{"geo_id":"36","geo_name":"New York","geo_name2":"NY"}},{"type":"Polygon","arcs":[[111,-59,112,-43,113]],"properties":{"geo_id":"41","geo_name":"Oregon","geo_name2":"OR"}},{"type":"Polygon","arcs":[[-96,-74,114,115,-27,116,117,-18]],"properties":{"geo_id":"47","geo_name":"Tennessee","geo_name2":"TN"}},{"type":"Polygon","arcs":[[118,-21,-78,119,120]],"properties":{"geo_id":"48","geo_name":"Texas","geo_name2":"TX"}},{"type":"MultiPolygon","arcs":[[[-82,121]],[[122,-85,-47,-84,123,124,-115,-73]]],"properties":{"geo_id":"51","geo_name":"Virginia","geo_name2":"VA"}},{"type":"MultiPolygon","arcs":[[[125]],[[126]],[[127,-95,128,-61,-66,-34]]],"properties":{"geo_id":"55","geo_name":"Wisconsin","geo_name2":"WI"}},{"type":"Polygon","arcs":[[-102,129,-36,-69,130,131]],"properties":{"geo_id":"46","geo_name":"South Dakota","geo_name2":"SD"}},{"type":"Polygon","arcs":[[-57,132,133,-14,134]],"properties":{"geo_id":"49","geo_name":"Utah","geo_name2":"UT"}},{"type":"Polygon","arcs":[[135,-91,136,-70,-63]],"properties":{"geo_id":"18","geo_name":"Indiana","geo_name2":"IN"}},{"type":"MultiPolygon","arcs":[[[137]],[[138]],[[139,140,141,142,143,-107]]],"properties":{"geo_id":"25","geo_name":"Massachusetts","geo_name2":"MA"}},{"type":"Polygon","arcs":[[-19,-118,144,145,-76]],"properties":{"geo_id":"28","geo_name":"Mississippi","geo_name2":"MS"}},{"type":"Polygon","arcs":[[-131,-68,-99,146,147,148]],"properties":{"geo_id":"31","geo_name":"Nebraska","geo_name2":"NE"}},{"type":"Polygon","arcs":[[149,150,-121,151,-15]],"properties":{"geo_id":"35","geo_name":"New Mexico","geo_name2":"NM"}},{"type":"Polygon","arcs":[[-125,152,153,-28,-116]],"properties":{"geo_id":"37","geo_name":"North Carolina","geo_name2":"NC"}},{"type":"MultiPolygon","arcs":[[[154]],[[155,-143,156]]],"properties":{"geo_id":"44","geo_name":"Rhode Island","geo_name2":"RI"}},{"type":"MultiPolygon","arcs":[[[157]],[[-90,158,159,160,-71,-137]]],"properties":{"geo_id":"39","geo_name":"Ohio","geo_name2":"OH"}},{"type":"Polygon","arcs":[[161,162,-97,-22,-119,-151]],"properties":{"geo_id":"40","geo_name":"Oklahoma","geo_name2":"OK"}},{"type":"Polygon","arcs":[[-154,163,-29]],"properties":{"geo_id":"45","geo_name":"South Carolina","geo_name2":"SC"}},{"type":"Polygon","arcs":[[164,-148,165,-162,-150,-134]],"properties":{"geo_id":"08","geo_name":"Colorado","geo_name2":"CO"}},{"type":"Polygon","arcs":[[-147,-98,-163,-166]],"properties":{"geo_id":"20","geo_name":"Kansas","geo_name2":"KS"}},{"type":"Polygon","arcs":[[-144,-156,166,-108]],"properties":{"geo_id":"09","geo_name":"Connecticut","geo_name2":"CT"}},{"type":"Polygon","arcs":[[-113,-58,-135,-13,-44]],"properties":{"geo_id":"32","geo_name":"Nevada","geo_name2":"NV"}},{"type":"MultiPolygon","arcs":[[[167]],[[-53,-112,168]]],"properties":{"geo_id":"53","geo_name":"Washington","geo_name2":"WA"}},{"type":"Polygon","arcs":[[-161,169,-86,-123,-72]],"properties":{"geo_id":"54","geo_name":"West Virginia","geo_name2":"WV"}},{"type":"Polygon","arcs":[[-132,-149,-165,-133,-56,-103]],"properties":{"geo_id":"56","geo_name":"Wyoming","geo_name2":"WY"}},{"type":"Polygon","arcs":[[-117,-32,-52,170,-145]],"properties":{"geo_id":"01","geo_name":"Alabama","geo_name2":"AL"}},{"type":"Polygon","arcs":[[171,-3,172,-141,173]],"properties":{"geo_id":"33","geo_name":"New Hampshire","geo_name2":"NH"}},{"type":"Polygon","arcs":[[174,-110,175,-23]],"properties":{"geo_id":"34","geo_name":"New Jersey","geo_name2":"NJ"}},{"type":"Polygon","arcs":[[176,-37,-130,-101]],"properties":{"geo_id":"38","geo_name":"North Dakota","geo_name2":"ND"}},{"type":"Polygon","arcs":[[177,-111,-175,-26,-80,-170,-160]],"properties":{"geo_id":"42","geo_name":"Pennsylvania","geo_name2":"PA"}},{"type":"Polygon","arcs":[[178,-174,-140,-106]],"properties":{"geo_id":"50","geo_name":"Vermont","geo_name2":"VT"}},{"type":"MultiPolygon","arcs":[[[179]],[[180]],[[181]],[[182]],[[183]],[[184]],[[185]],[[186]],[[187]],[[188]],[[189]],[[190]],[[191]],[[192]],[[193]],[[194]],[[195]],[[196]],[[197]],[[198]],[[199]],[[200]],[[201]],[[202]],[[203]],[[204]],[[205]],[[206]],[[207]],[[208]],[[209]],[[210]],[[211]],[[212]],[[213]],[[214]],[[215]],[[216]]],"properties":{"geo_id":"02","geo_name":"Alaska","geo_name2":"AK"}}],"bbox":[-179.174265,18.917465999999997,-66.949895,71.352561]}},"arcs":[[[98240,47616],[44,37],[23,-104],[-35,-88],[-50,60],[18,95]],[[96315,50325],[41,12],[23,63],[56,-26],[33,-67],[18,-109],[43,-9],[9,71],[4,29],[19,47],[-10,57],[12,67],[-18,45],[40,59],[23,-5],[23,-55],[46,-10],[39,-20],[-1,84],[-35,47],[-43,110],[31,103],[34,65],[52,62],[35,71],[94,69],[56,58],[-28,98],[17,43],[59,86],[63,71],[6,81],[-11,56],[-43,-2],[9,71],[-13,39],[10,80],[36,76],[24,79],[-46,83],[32,115],[20,73],[24,29],[-2,60],[41,57],[38,44],[35,50],[23,36],[28,275],[23,232],[159,343],[225,477],[113,238],[195,395],[57,-12],[43,-29],[61,-26],[-13,-84],[12,-253],[66,-62],[58,-65],[87,71],[114,51],[63,13],[15,61],[72,29],[42,-20],[76,12],[-8,66],[20,54],[82,-3],[58,-27],[46,-49],[62,-80],[76,-103],[41,-42],[56,-147],[89,-101],[0,-517],[1,-368],[5,-615],[2,-460],[0,-191],[27,-38],[-48,-93],[36,-75],[-36,-92],[20,-97],[-19,-101],[82,3],[32,-93],[38,-18],[87,-49],[71,17],[28,-62],[5,-134],[-53,-9],[-6,-86],[51,-149],[-30,-140],[-18,-62],[24,-51],[56,-166],[46,-54],[37,40],[24,84],[60,-37],[38,-16],[43,-97],[19,-83],[8,-75],[44,-171],[44,-69],[-8,-104],[38,-60],[-68,-94],[-42,-50],[-39,-68],[-47,-84],[-57,-48],[-53,-72],[-67,48],[-27,-42],[-44,-4],[-39,-85],[-26,-88],[16,-63],[-68,-91],[-49,111],[-17,74],[-47,-46],[-78,-13],[-39,-58],[-16,-86],[-39,-49],[-33,33],[-38,-46],[-31,6],[-32,-113],[-48,64],[-20,43],[-56,-25],[14,-87],[-17,-41],[-33,-76],[49,-78],[-118,17],[-7,-72],[-15,-171],[-95,16],[-58,-31],[-72,-54],[-30,-117],[-35,-12],[-11,139],[-98,-36],[-85,-62],[-27,99],[-27,102],[41,55],[-56,113],[-79,29],[-12,-119],[-19,-79],[39,-97],[-32,-75],[21,-64],[-29,-62],[-49,4],[-39,2],[-34,-106],[-26,-5],[-33,-75],[-37,-43],[-30,116],[-34,74],[-26,-64],[-14,-26],[-58,-137],[-44,7],[-23,-34],[-65,-37],[-59,-22],[-33,-93],[-47,-30],[-23,-51],[-20,7],[-6,103],[-48,31],[-60,-59],[-16,-64],[-62,6],[-22,-79],[-65,5],[-20,-56],[-23,-93],[9,-75],[-35,-34],[-67,-24],[-36,4],[-21,-80],[52,-55],[-51,-87],[-29,-99],[-44,-39],[-46,7],[-32,-42],[-28,-99],[7,-80],[1,-12],[-18,-111],[-24,-56],[-38,-111],[-34,-31]],[[96654,46042],[-47,38],[-64,94],[3,97],[11,71],[-53,101],[-46,104],[-54,98],[14,102],[7,85],[5,68],[-16,115],[-8,250],[-7,263],[-10,484],[-7,317],[-2,82],[-7,264],[-3,114],[-13,450],[-18,503],[-24,583]],[[20605,1646],[39,71],[27,62],[24,13],[30,57],[20,86],[33,70],[21,27],[6,82],[-22,70],[-36,116],[-11,102],[11,149],[33,31],[49,-33],[55,-60],[29,-59],[60,-74],[35,-54],[35,13],[50,-33],[102,-89],[105,-101],[92,-146],[38,-77],[34,-80],[-4,-151],[3,-92],[37,22],[35,-1],[23,-92],[6,-110],[24,-54],[84,-106],[34,-37],[-1,-56],[-54,-128],[-60,-98],[-69,-97],[-82,-77],[-41,-43],[-42,-14],[-52,25],[-43,-44],[-43,-80],[-26,-15],[-56,-94],[-46,-27],[-45,-130],[-32,-118],[-20,-71],[-22,-55],[-30,-46],[-48,99],[-71,85],[-68,43],[-29,119],[2,153],[9,151],[10,77],[2,94],[-18,129],[-14,73],[-24,62],[-16,133],[-8,99],[-17,66],[-28,14],[-4,37],[-28,117],[13,95]],[[20026,3820],[17,114],[55,91],[50,-23],[40,-117],[33,-108],[69,34],[63,58],[81,-16],[42,-87],[56,-59],[64,-97],[51,-28],[16,-98],[-15,-88],[-37,-63],[-77,-72],[-72,2],[-66,-61],[-83,-34],[-48,37],[-11,111],[-13,153],[-3,33],[-10,71],[-29,16],[-28,-40],[-15,15],[-69,67],[-50,132],[-11,57]],[[20052,3132],[54,65],[38,21],[22,-47],[3,-100],[-42,-31],[-73,-13],[-30,53],[28,52]],[[19706,3806],[44,32],[64,-9],[58,-58],[32,-60],[25,-82],[-26,-106],[-47,-38],[-16,-10],[-53,-9],[-20,78],[-1,97],[-17,53],[-43,58],[0,54]],[[19512,4274],[24,49],[-10,79],[53,-12],[65,-34],[79,-20],[23,18],[27,22],[19,0],[37,-82],[3,0],[68,-2],[88,16],[30,-34],[-27,-90],[-56,-84],[-67,-34],[-68,32],[-65,43],[-48,25],[-81,-21],[-72,-6],[-52,26],[30,109]],[[18661,5085],[95,6],[40,78],[26,83],[52,70],[22,9],[39,-118],[42,-144],[36,-87],[-8,-120],[28,-51],[44,40],[38,-4],[-2,-106],[12,-86],[53,-85],[-19,-56],[-24,-39],[-51,27],[-20,-25],[-27,-14],[-37,51],[-34,42],[-54,12],[-28,6],[-38,-13],[-57,-20],[-13,-1],[-24,89],[-9,55],[-35,59],[-3,49],[-45,110],[2,69],[-42,104],[41,10]],[[17278,6002],[34,63],[14,81],[22,37],[84,80],[27,42],[33,-4],[29,-34],[21,49],[50,-18],[26,24],[36,-35],[44,-59],[17,-115],[-22,-117],[-15,-38],[2,-81],[-4,-91],[-43,-74],[-53,-84],[-73,29],[-42,17],[-26,-1],[-41,80],[-52,52],[-42,31],[-28,79],[2,87]],[[16863,5526],[18,141],[32,64],[50,50],[14,27],[8,62],[36,15],[12,-13],[7,-29],[-17,-33],[-14,-70],[6,-59],[-40,-37],[-29,-17],[-16,-40],[-14,-47],[-14,-82],[-22,20],[-17,48]],[[57433,26320],[13,44],[34,-14],[44,13],[42,12],[35,67],[56,120],[5,108],[-12,41],[-4,93],[-27,98],[-57,24],[-47,-10],[-38,13],[-32,129],[24,103],[1,135],[3,48],[-43,62],[14,68],[0,101],[-16,54],[46,26],[34,8],[6,21],[28,109],[65,117],[-4,104],[3,105],[18,59],[8,50],[-7,79],[-14,128],[13,70],[-3,69],[-23,54],[22,54],[49,103],[17,60],[5,69],[2,27],[20,36],[51,43],[49,62],[57,38],[46,102],[34,37],[-1,88],[-29,75],[-81,107],[-63,93],[-39,1],[0,126],[-39,122],[-38,211],[-23,64],[-76,173],[-52,110],[4,133],[-3,113]],[[57510,30675],[7,127],[5,101],[19,-1],[23,34],[-13,235],[-35,281],[-34,76],[2,143],[8,165],[-32,77],[-7,157],[-6,155],[31,96],[-28,70],[-27,80],[-10,126],[-1,116],[6,64],[62,25],[35,45],[50,20],[53,-1],[22,-41],[35,-6],[28,37],[40,-5],[31,-67],[19,-86],[40,-52],[51,-38],[55,17],[12,54],[34,131],[48,138],[-2,143],[1,108],[-2,531],[-1,756]],[[58029,34486],[76,-1],[890,1],[60,0],[62,0],[254,1],[6,0],[161,0],[842,1],[6,0],[114,-2],[188,4],[282,1],[250,-10],[418,0],[450,3],[401,-1]],[[62489,34483],[0,-237],[0,-1445],[0,-452],[-1,-507],[0,-478],[0,-358],[1,-412],[0,-834],[-1,-1234],[0,-888],[0,-383],[0,-822],[-1,-670],[0,-653],[-1,-548],[-1,-885]],[[62485,23677],[-695,3],[-561,-2],[-548,-2],[-260,177],[-890,603],[-863,570],[-372,246],[-947,620],[2,55],[14,53],[-16,27],[13,55],[-9,45],[40,61],[40,132]],[[75345,33531],[229,0],[253,-1],[105,-1],[82,0],[149,1],[103,0],[140,-1],[100,-1],[19,0],[149,0],[243,0],[13,0],[60,0],[185,0],[31,0],[160,-1],[178,1],[26,0],[120,1],[280,1],[26,0],[172,-3],[38,-1],[2,0],[248,1],[97,1],[208,1],[17,0],[168,0],[73,0],[244,-5],[60,-1],[11,-68],[9,-85],[58,-55],[2,-56],[0,-103],[-46,-71],[-36,-99],[-58,-56],[-13,-86],[-53,-50],[-39,-126],[-27,-98],[71,1],[165,4],[129,1],[52,1],[150,2]],[[79698,32579],[41,-101],[31,-50],[3,-34],[1,-16],[-67,-41],[-6,-49],[5,-73],[-65,-51],[-60,-67],[-46,14],[-36,-114],[51,-85],[20,-46],[-50,-36],[-11,-90],[-12,-36],[-71,17],[-7,-103],[21,-75],[-20,-80],[-23,15],[-37,-25],[22,-89],[-31,-112],[-40,-57],[62,-47],[4,-89],[-6,-74],[8,-88],[-62,20],[-19,-72],[-14,-77],[-60,-20],[-32,-22],[-8,-63]],[[79184,30663],[58,-111],[-5,-58],[-56,-68],[-79,-69],[-55,-1],[-9,-88],[-29,-46],[-36,-119],[-3,-74],[-33,-91],[33,-91],[-17,-82],[-13,-126],[7,-83],[-59,-60],[-17,-92],[-61,54],[-32,-40],[11,-102],[-53,-19],[-25,-83],[-48,-22],[10,-76],[-10,-45],[-39,-23],[-7,-76],[40,-28],[24,-43],[-16,-86],[-45,-17],[-33,-34],[-23,-44],[-38,15],[-36,-45],[47,-33],[8,-69],[-31,-58],[8,-101],[24,-35],[-1,-81],[-52,25],[-24,-4],[-28,-52],[61,-63],[-23,-102],[-69,-18],[42,-77],[-52,-66],[-23,-90],[23,-69],[16,-58],[21,-68],[30,-64],[-25,-85],[15,-131],[35,-12],[16,-78],[-14,-99],[-18,-94],[-44,6],[-24,-70],[54,-83],[-41,-96]],[[78421,26865],[-88,1],[-153,2],[-47,1],[-344,3],[-173,1],[-137,1],[-248,6],[-198,4],[-221,6],[-15,0],[-186,1],[-37,0],[-123,1],[-101,0],[-28,1],[-180,1],[-81,0],[-204,-1]],[[75857,26893],[1,269],[-1,325],[0,201],[0,220],[-26,40],[-63,11],[-36,27],[-27,-41],[-22,12],[-58,-24],[-31,5],[-14,-20],[-30,17],[-28,23],[-59,115]],[[75463,28073],[3,289],[4,289],[2,150],[5,325],[4,324],[4,282],[3,243],[3,179],[5,308],[1,83],[4,245],[7,407],[3,179],[-16,242],[-21,271],[-19,247],[-33,419],[-18,218],[-9,114],[-22,263],[-28,381]],[[92456,39829],[-40,-69],[-16,-97],[-28,-55],[-23,-74],[-22,-33],[14,-65],[28,-34],[-13,-82],[-1,-71]],[[92355,39249],[-58,-36],[19,-77],[45,-97],[14,-33],[33,-76],[54,-126],[12,-145],[-11,-105],[10,-144],[49,-73],[31,-137],[3,-17],[-1,-49],[64,-132],[65,-103],[41,-13],[21,27],[16,-192],[16,-306],[4,-162]],[[92782,37253],[-121,-1],[-139,3],[-123,3],[-191,12],[-6,157],[-7,177],[-13,371],[-23,597],[-7,198],[-10,249],[-19,658]],[[92123,39677],[13,0],[19,68],[32,65],[48,56],[61,25],[22,9],[79,-19],[59,-52]],[[83376,30642],[117,-2],[79,-1],[19,0],[77,3],[11,1],[196,3],[58,1],[3,0],[103,1],[45,0],[31,0],[43,0],[94,1],[101,-1],[166,1]],[[84519,30649],[172,-1],[111,-1],[61,0],[282,-2],[63,5],[59,4],[143,9],[191,9]],[[85601,30672],[-14,-86],[-15,-58],[-54,-77],[-46,-59],[-28,-58],[-35,-64],[3,-57],[-29,-59],[3,-23],[8,-58],[2,-8],[54,-71],[50,-67],[60,-41],[46,-97],[5,-11],[41,-70],[2,-3],[48,-40],[3,1],[58,17],[47,-20],[28,-137],[17,-78],[38,-118],[5,-16],[27,-83],[8,-62],[18,-123],[65,-127],[42,-129],[3,-9],[26,-100],[5,-21],[39,-16],[73,-134],[95,-89],[76,-170],[21,-83],[14,-57],[34,-90],[17,-10],[25,-14],[8,-4],[69,-97],[11,-30],[22,-67],[58,-59],[6,-100],[-12,-128],[78,-76],[-1,-118],[74,-73],[1,-12],[7,-87],[86,-92],[38,-27],[12,-9],[52,-77],[37,-55],[2,-137],[32,-87],[39,-127],[6,-166],[1,-10],[17,-163],[-3,-91],[9,-13],[52,-72],[39,-27],[8,-6],[72,-150],[0,-103],[19,-50],[36,-96],[4,-111],[-22,-74],[5,-20],[25,-95],[5,-122],[67,-55],[28,32],[57,-83],[51,-44]],[[87581,25016],[38,-20],[-4,-69],[-56,-85],[-27,-58],[-53,-107],[-32,-84],[-36,-99],[-48,-73],[-8,-44],[6,-146],[-36,-128],[-3,-74],[-33,-104],[-40,-111],[-18,-102],[16,-90],[-20,-113],[-19,-73],[-57,-133],[-30,-21],[1,-101],[-17,-107],[7,-49],[3,-25],[3,-132],[-31,-166],[-17,-98],[14,-115]],[[87084,22489],[-56,25],[-19,1],[-30,-15],[-64,27],[-31,29],[-57,9],[-28,46],[-40,31],[-54,5],[-30,54],[-36,13],[-46,-79],[-34,-68],[-8,-111],[-7,-70],[30,-103],[-2,-134],[-9,-160],[-12,-84],[1,-64],[-48,-17],[-43,5],[-33,9],[-27,107],[8,95],[-25,89],[10,83],[-179,31],[-36,7],[-111,14],[-94,12],[-167,21],[-227,28],[-158,20],[-43,6],[-127,16],[-100,11],[-117,13],[-69,8],[-166,18],[-68,8],[-37,4],[-143,13],[-85,7],[-84,8],[-301,32],[-46,3],[-48,116],[-14,118],[-1,85],[-43,111],[-20,77],[3,45]],[[83913,23044],[-8,101],[-22,104],[-64,149],[0,138],[16,69],[1,26],[1,25],[-4,79],[23,130],[-5,71],[18,97],[9,48],[-14,50],[-1,94],[-60,143],[6,72],[-20,203],[25,103],[41,141],[4,47],[10,134],[4,48],[-10,93],[54,94],[60,64],[10,23],[25,62],[-57,81],[-47,59],[22,50],[2,31],[8,121],[-31,155],[-56,113],[-17,143],[-23,138],[-41,183],[-21,66],[-43,471],[-4,41],[-51,569],[-18,194],[-21,235],[-20,219],[-23,255],[-11,119],[-20,223],[-7,84],[-30,308],[-11,109],[-25,250],[-9,94],[-19,191],[-24,240],[-19,211],[-11,121],[-9,116]],[[73018,57372],[266,-2],[468,0],[383,0],[566,-2],[19,0],[148,0],[0,355],[0,237],[0,143],[85,-59],[61,30],[33,0],[66,-68],[55,-23],[17,-204],[21,-170],[21,-48],[0,-191],[28,0],[32,-221],[-2,-83],[-8,-97],[67,-99],[98,-71],[56,-14],[14,10],[37,26],[96,-13],[27,-41],[1,-52],[141,-24],[147,-24],[74,-3],[34,-113],[-9,-84],[126,-19],[100,24],[84,32],[3,88],[83,25],[21,41],[125,31],[58,-34],[48,4],[119,9],[54,-70],[148,-106],[83,7],[3,-66],[-23,-79],[73,-50],[54,14],[52,-65],[-12,-119],[48,-107],[42,-144],[48,39],[17,72],[1,87],[29,59],[89,16],[96,-8],[49,-72],[17,-140],[78,-19],[85,-61],[15,-10],[59,-3],[20,-152],[118,-21],[15,-105],[69,26],[115,5],[77,28],[84,107],[107,94],[3,2],[112,89],[56,12],[35,-126],[25,-106],[65,-50],[122,51],[85,-31],[137,-5],[162,16],[95,-47],[50,-128],[93,-58],[106,64],[111,-23],[121,6],[-59,-76],[-94,-45],[-68,-63],[-50,-51],[-116,-56],[-45,-60],[-87,-37],[-103,-63],[-121,-46],[-88,-36],[-103,-61],[-98,-89],[-79,-61],[-118,-129],[-138,-175],[-110,-159],[-103,-195],[-111,-176],[-62,-91],[-104,-94],[-64,-121],[-82,-83],[-62,-94],[-89,-81],[-95,-110],[-44,-57],[42,-186]],[[77664,52996],[-32,8],[-44,46],[-38,-6],[-35,-69],[-20,-58],[-78,-3],[0,-320],[-1,-479],[0,-324],[-40,-42],[-12,-70],[-36,7],[-51,-33],[-20,-55],[-65,-6],[-32,-45],[-67,-42],[-58,-77],[-34,-93],[-15,-86],[-44,-102],[-39,-41],[-16,-145],[6,-125],[71,-21],[39,-10],[26,-61],[37,-101],[35,-66],[-10,-80],[-36,-113],[-56,-99],[-5,-171],[21,-136],[3,-20],[-56,-91],[37,-82],[10,-154],[-16,-167],[-33,-164],[12,-18],[54,-84],[31,-48],[70,-146],[61,-67],[134,-37],[34,1],[39,-38],[3,-2],[20,-100],[41,-60],[12,-17],[108,-60],[23,-17],[108,-82],[42,-83],[21,-166],[34,-65],[34,-63],[87,-67],[64,-124],[66,-71],[13,-5],[105,-43],[15,-33],[59,-128],[60,-123],[3,-11],[38,-141],[-26,-203],[18,-126],[18,-68],[14,-123]],[[78375,46882],[-244,1],[-106,0],[-107,0],[-84,0],[-227,0],[-89,0],[-240,-1],[-93,0],[-283,-1],[-137,0],[-22,0],[-160,0],[-239,-1],[-71,0],[-64,0],[-287,1],[-247,1],[-127,0],[-47,0],[-367,0],[-53,1],[-268,0],[-154,-1],[-88,0],[-310,-1],[-24,0],[-171,1],[-129,0],[-227,0]],[[73710,46882],[0,99],[0,567],[0,662],[1,312],[-1,350],[-2,499],[-1,328],[-1,630],[-22,73],[-35,56],[-36,20],[-50,42],[-51,4],[-32,51],[-28,80],[-34,109],[-56,111],[-7,48],[22,67],[73,90],[64,59],[38,93],[38,67],[14,106],[7,121]],[[73611,51526],[-9,155],[1,10],[16,118],[-36,259],[-5,191],[-41,74],[-55,146],[-32,249],[-41,136],[3,106],[-1,162],[22,257],[-62,186],[13,136],[-7,132],[-12,241],[-16,312],[2,112],[1,139],[-25,147],[-41,183],[-60,190],[-37,169],[-28,177],[-33,125],[-36,147],[1,9],[3,39],[11,122],[-7,165],[-2,164],[-8,194],[0,17],[1,6],[4,76],[38,160],[-19,87],[-28,113],[-30,181],[-37,149],[-1,105]],[[53981,27748],[97,38],[102,-149],[75,-110],[-35,-100],[-44,40],[-81,12],[-15,83],[-72,123],[-27,63]],[[53981,26925],[48,-105],[83,-163],[83,-140],[-64,-40],[-56,83],[-83,167],[-54,162],[43,36]],[[53103,27388],[61,55],[74,-79],[-2,-72],[-31,-24],[-72,34],[-30,86]],[[52803,28875],[52,25],[105,-42],[154,8],[86,1],[25,0],[70,-6],[1,-96],[-26,-11],[-86,3],[-59,3],[-97,-23],[-52,-50],[-66,6],[-69,33],[-3,83],[-35,66]],[[52400,28910],[112,-37],[95,-59],[72,22],[63,-103],[9,-79],[-67,-53],[-65,-36],[-51,62],[-18,55],[-147,66],[-80,69],[77,93]],[[48975,44018],[188,-5],[159,-1],[147,-1],[123,8],[75,5],[78,-5],[104,11],[76,8],[89,-11],[219,1],[266,9],[189,-1],[167,-4],[227,-5],[153,-6],[203,-6],[7,0],[168,1],[193,-8],[138,0],[167,1],[171,0],[284,1],[163,0]],[[52729,44010],[0,-228],[1,-488],[-2,-830],[1,-606],[1,-276],[1,-763],[0,-372],[-1,-323],[-2,-447],[-2,-350],[-3,-472],[2,-240],[1,-101],[0,-86],[1,-129],[86,-127],[282,-417],[2,-3],[229,-341],[44,-65],[109,-163],[185,-278],[400,-610],[65,-101],[361,-560],[168,-262],[137,-213],[388,-616],[70,-113],[147,-235],[457,-741],[100,-165],[252,-414],[179,-297],[41,-69],[177,-294],[217,-366],[90,-152],[128,-217],[103,-176],[214,-367],[152,-262]],[[57433,26320],[-250,-36],[-414,-62],[-518,-83],[-53,-10],[-387,-66],[-77,-14],[-206,-36],[-238,-45],[-11,162],[-28,101],[-25,32],[-44,-37],[-8,59],[0,165],[-23,68],[-1,33],[7,23],[10,-4],[6,19],[1,77],[-23,214],[-31,155],[-42,143],[-74,191],[-91,185],[-43,40],[-44,103],[-62,38],[-10,44],[-78,131],[-24,41],[-77,61],[-65,93],[-79,144],[-39,44],[-46,-32],[-66,-62],[-53,17],[-33,37],[-37,7],[-29,74],[31,57],[-17,152],[-42,162],[-53,111],[-75,22],[-67,-11],[-59,-2],[-53,-59],[-44,63],[-90,27],[-102,80],[-36,8],[-105,128],[-26,99],[-12,75],[-38,44],[-56,86],[-76,101],[-67,41],[-72,49],[-60,-24],[-22,-25],[-68,39],[-45,0],[-34,-13],[-87,68],[-70,32],[-81,23],[-137,-6],[-139,-44],[-54,144],[-34,38],[-28,27],[-37,-6],[-20,52],[39,212],[-12,73],[-10,14],[14,230],[-54,87],[19,136],[14,110],[4,86],[-6,87],[-35,56],[-34,44],[-38,-30],[-80,84],[-45,83],[15,88],[16,127],[-20,132],[-64,45],[-42,14],[-99,211],[-47,122],[-94,59],[-37,89],[-16,133],[-67,118],[-49,78],[-21,162],[-41,84],[-38,20],[-42,142],[-52,126],[-89,118],[-41,27],[-56,117],[-13,173],[-34,175],[-26,185],[42,99],[56,-44],[41,136],[16,181],[5,72],[-19,66],[-44,156],[-40,71],[-40,5],[-67,-39],[-71,9],[-89,111],[-48,112],[-22,55],[-34,26],[-19,55],[-47,82],[-19,117],[11,127],[4,42],[-7,72],[-30,117],[-3,48],[-42,59],[-21,55],[-1,105],[19,69],[0,141],[-13,162],[41,57],[60,9],[12,-29],[7,-99],[18,-18],[-4,-27],[-28,-14],[29,-220],[103,-65],[68,-103],[35,32],[15,15],[-29,101],[-7,112],[-9,52],[-46,59],[-32,53],[-2,54],[-54,42],[-18,63],[26,38],[-27,150],[-40,-6],[-41,96],[51,43],[-1,56],[23,3],[19,2],[53,78],[-35,103],[-82,73],[-87,-68],[-7,-144],[41,-69],[-32,-56],[2,-86],[34,-54],[27,-78],[-58,-49],[-48,7],[-57,85],[-69,60],[-21,-24],[-47,79],[-38,79],[-52,76],[-74,29],[-31,-75],[-33,21],[45,209],[6,119],[-30,118],[1,68],[-16,46],[-44,4],[-13,69],[-15,105],[-72,161],[-75,69],[-73,104],[-16,59],[-82,197],[-65,80],[-51,108],[-59,87],[-19,54],[-45,78],[-20,80],[37,126],[-27,198],[-40,131],[-29,148],[-24,171],[10,163],[43,203],[-14,131],[-9,119],[-33,74],[-20,208],[-50,59],[-42,113],[-72,174],[-30,15],[-16,109],[-47,72],[-43,27],[-63,103],[-75,114],[-18,32],[9,135],[-11,82],[-39,121],[20,128],[76,295],[111,350],[52,278],[-6,113],[-26,74],[-8,98],[36,97],[28,187],[26,290],[-17,206],[-31,155],[-24,153],[-10,38],[-32,13],[-49,108],[23,103],[15,180],[-8,110]],[[90937,38174],[70,117],[34,-57],[83,-139],[-62,-105],[-53,-88]],[[91009,37902],[0,146],[-46,69],[-26,57]],[[86756,10778],[54,161],[70,88],[79,71],[12,37],[113,109],[124,-111],[55,-155],[-88,-69],[-54,-27],[-37,37],[-66,-41],[-69,-54],[-80,-66],[-114,-25],[1,45]],[[86575,10729],[28,71],[102,7],[-44,-164],[-98,1],[12,85]],[[86421,10789],[39,91],[51,-62],[-12,-108],[-70,-7],[-8,86]],[[87084,22489],[15,-22],[-14,-185],[8,-150],[4,-31],[3,-18],[13,-28],[13,-271],[20,-166],[76,-644],[16,-61],[8,-117],[5,-71],[41,-218],[42,-220],[54,-244],[50,-227],[72,-305],[52,-160],[107,-360],[53,-161],[72,-216],[56,-153],[53,-263],[-56,-93],[-17,-142],[2,-150],[13,-152],[38,-247],[89,-359],[57,-229],[47,-272],[12,-77],[57,-338],[49,-223],[40,-179],[13,-110],[19,-75],[31,-194],[32,-212],[7,-87],[4,-61],[2,-20],[-3,-182],[0,-59],[0,-62],[-3,-82],[-10,-114],[-10,-158],[-13,-202],[-9,-137],[-21,-309],[-8,-327],[3,-79],[1,-3],[4,-103],[-13,-106],[-28,-186],[-19,37],[-47,91],[-32,-141],[-32,-86],[-11,-142],[-21,-140],[24,-145],[67,62],[53,189],[11,-132],[-67,-239],[-107,-331],[-123,-293],[-138,-254],[-280,-302],[-123,-73],[-40,78],[98,118],[170,151],[211,296],[84,169],[15,117],[4,82],[-42,13],[-96,-33],[-54,-70],[-33,-10],[-57,74],[-57,-23],[-36,-63],[-83,-30],[-63,-12],[-55,122],[-26,120],[21,166],[1,142],[-55,186],[-29,179],[-44,143],[-59,57],[-25,139],[-78,77],[-127,147],[-52,-71],[-48,96],[-27,178],[-46,289],[-32,335],[-71,208],[-29,30],[-51,-1],[-54,-57],[-46,27],[-49,76],[-57,238],[-17,186],[0,111],[-45,194],[-49,167],[-74,255],[-57,245],[-21,88],[-63,180],[-33,78],[-39,91],[-46,179],[21,-4],[62,-11],[58,139],[29,94],[34,115],[33,33],[40,86],[-14,80],[-37,24],[-57,49],[-29,-60],[-32,-71],[-3,-89],[-24,-62],[-47,-143],[-25,-24],[-5,125],[-7,101],[-39,115],[-50,119],[5,158],[11,156],[0,3],[-20,157],[-8,136],[86,134],[29,154],[30,182],[6,25],[23,97],[7,115],[-10,148],[0,140],[-39,48],[-1,152],[-15,95],[37,105],[-32,92],[-31,101],[-1,91],[-57,85],[23,30],[-26,84],[-89,20],[-61,17],[-18,-100],[-33,10],[-23,126],[4,97],[-29,40],[-56,41],[-5,104],[-24,95],[-34,74],[-48,9],[-12,59],[-83,103],[-4,138],[-8,143],[-62,54],[-48,46],[-40,123],[-38,133],[-48,117],[-97,112],[-128,118],[-61,109],[-56,10],[-55,-21],[-48,-33],[-26,22],[-73,-52],[-68,-93],[22,-89],[0,-2],[7,-71],[-14,-51],[-66,12],[-42,41],[-58,-28],[-37,-42],[11,-148],[-35,-47],[-79,-43],[-75,-136],[-89,-69],[-150,-131],[-100,106],[-91,74],[-83,-41],[-45,188],[-12,160],[28,150],[-36,55],[-55,22],[-75,124],[-26,57],[-86,77],[-102,156],[-168,176],[-80,62],[-118,77],[-156,64],[-13,6],[-197,30],[-149,-22],[-45,-7],[-61,-23],[-210,-78],[-101,-24],[-46,5],[-89,-40],[-88,-32]],[[81671,21670],[59,122],[18,112],[58,64],[-42,40],[-27,95],[12,82],[27,103],[0,101],[-37,67],[-72,87],[-17,56],[-83,188],[39,163],[-7,88],[71,0],[84,1],[101,1],[133,1],[209,-3],[86,0],[41,-1],[87,-2],[111,-2],[156,-1],[21,0],[158,-1],[136,0],[126,-1],[128,4],[152,3],[72,2],[9,0],[138,3],[167,2],[102,0],[26,0]],[[55476,51640],[-24,125],[-35,46],[42,110],[10,54],[-35,55],[-1,102],[-29,95],[-59,97],[25,107],[-4,118],[0,1302],[-1,403],[-1,705],[0,461],[0,130],[1,152],[5,568],[1,446],[1,362],[0,291]],[[55372,57369],[246,1],[302,1],[328,1]],[[56248,57372],[0,-951],[0,-40],[1,-327],[0,-179],[0,-173],[-1,-239],[10,-29],[7,-22],[63,-143],[53,-105],[49,-54],[9,-103],[99,-122],[-11,-80],[38,-60],[-24,-90],[3,-83],[74,-97],[-52,-47],[-16,-75],[118,-97],[41,-101],[55,-56],[88,-37],[40,-18],[31,-88],[32,-67],[60,-83],[61,-133],[44,-75],[35,-96],[63,-74],[30,-35],[-14,-89],[56,-107],[80,-63],[21,-76],[61,3],[19,-16],[45,-36],[5,-105],[27,-10],[39,-16],[84,9],[82,38],[22,-26],[14,-16],[-10,-132],[-18,-133],[-46,-18],[17,-166],[-34,-47],[-8,-145],[-9,-71],[-7,-70],[3,-120],[-61,-12],[-6,-81],[54,-54],[-18,-127],[35,-80],[35,-51],[-10,-96],[22,-55],[-31,-52],[-83,-37],[-41,-107],[52,-110],[4,-101],[-32,-35],[-2,-84],[13,-41],[15,-50],[44,-29],[79,-97],[80,-23],[24,109],[58,14],[92,112],[61,95],[-1,81],[40,8],[20,-34],[44,-73],[34,-40],[49,-41],[3,-150],[38,-81],[-3,-101],[28,-82],[-3,-114],[76,-172],[67,-203],[57,-54],[53,-78],[12,-100],[-10,-102],[-22,-81],[46,-130],[40,-15],[68,-68],[48,45],[103,-111],[27,-107],[46,-151],[-10,-99],[48,-112],[0,-89],[50,-105],[62,-70],[49,48],[4,4],[-5,67],[83,108],[24,7],[94,-23],[115,-21],[76,-61],[26,154],[65,76],[57,-48],[86,-28],[81,17],[146,51],[56,-100],[92,92],[78,-6],[48,-3],[39,53],[45,183],[10,32],[17,47],[48,66],[7,-7],[47,-51],[49,-108],[40,-85],[20,-91],[52,-76],[18,-81],[66,-37]],[[60704,48739],[0,-189],[0,-496],[1,-251],[1,-143],[0,-420],[1,-357],[1,-353],[0,-464],[1,-667],[-2,-398],[-1,-314],[0,-663]],[[60706,44024],[-292,-2],[-86,-2],[-33,0],[-216,-1],[-320,-3],[-44,2],[-95,5],[-341,-2],[-314,-4],[-222,-4],[-220,-5],[-286,-9],[-200,10]],[[58037,44009],[-214,1],[-282,0],[-268,11],[-124,-3],[-245,-5],[-278,3],[-218,-1],[-412,1],[-261,0],[-350,4],[-7,1]],[[55378,44021],[0,722],[0,818],[-1,415],[0,1089],[1,160],[2,274],[34,109],[9,28],[14,166],[20,89],[-36,107],[71,128],[2,3],[-6,48],[-56,28],[-6,79],[-78,3],[-55,77],[-44,-35],[-41,56],[4,15],[18,62],[-22,60],[-23,59],[25,69],[-10,99],[52,84],[22,65],[43,180],[29,144],[43,56],[73,58],[38,102],[21,57],[28,112],[-22,95],[16,99],[51,88],[0,1],[26,69],[52,269],[5,27],[14,86],[77,246],[76,236],[35,93],[-57,126],[-7,100],[-51,85],[-65,6],[-63,85],[-45,26],[-65,128],[-24,98],[-26,70]],[[78195,40928],[42,40],[-7,101],[11,111],[-24,46],[18,92],[31,58],[82,48],[54,-2],[2,1],[57,67],[2,51],[3,48],[21,104],[-1,79],[43,91],[53,83],[29,80],[7,124],[-11,175],[-36,99],[-39,6],[-36,93],[-29,67],[36,160],[0,1],[2,10],[6,57],[33,103],[55,13],[37,-14],[51,48],[72,9],[76,4],[74,58],[42,59],[52,6],[46,8],[40,75],[46,32],[22,36],[3,126],[19,58],[3,64],[1,26],[55,72],[6,5],[55,56],[-1,62],[15,75],[6,88],[1,16],[15,110],[-21,85],[2,126],[-41,81],[-55,49],[-61,54],[-56,69],[-27,74],[12,80],[-26,71],[-63,87],[-43,68],[-22,17],[-50,47],[3,69]],[[78887,44990],[183,-2],[10,0],[181,1],[264,-4],[80,-1],[306,-7],[82,-2],[32,-1],[288,-7],[45,-1],[46,0],[146,-3],[62,-1],[178,3],[181,1],[78,0],[15,0],[269,-5],[87,-2]],[[81420,44959],[-3,-136],[-15,-113],[-13,-114],[1,-7],[30,-172],[1,-3],[35,-103],[16,-46],[47,-88],[6,-12],[12,-89],[31,-183],[8,-50],[1,-5],[11,-21],[-2,-17],[-2,-25],[6,-49],[19,-66],[1,-4],[5,-17],[19,-64],[26,-34],[6,-47],[0,-30]],[[81666,43464],[-1,-340],[-1,-442],[0,-252],[0,-269],[0,-28],[0,-219],[0,-686],[-3,-543],[-2,-456],[-1,-662],[1,-109],[0,-249],[0,-14],[0,-232],[-41,-15],[-20,-52],[5,-102],[1,-23],[15,-69],[-57,-85],[2,-17],[12,-106],[47,-85],[-6,-107],[44,-56],[2,-123],[-18,-61],[11,-44],[12,-49],[20,-132],[-41,-152],[-66,-73],[-16,-97],[-21,-91],[6,-55],[-53,-62],[-24,-84],[-35,-123],[-46,-122],[-68,-73],[-54,-60],[-6,-75],[43,-88],[-31,-99],[-24,-85],[-37,-47],[12,-132],[-21,-133],[-24,-68],[35,-109]],[[81217,36009],[-28,-108],[-65,-86],[-25,-82],[25,-152],[1,-3],[53,-84],[5,-47],[4,-31],[-85,-40],[-111,-28],[-68,-91],[-54,33],[-42,-41],[-19,-116],[-25,-93],[39,-135],[42,-134],[-18,-98],[-28,-58],[-50,-2],[-71,87],[-73,54],[-53,26],[-73,80],[-86,59],[-62,-6],[-51,-68],[-36,-91],[-62,-127],[1,-4],[34,-104],[-3,-68]],[[80233,34451],[-56,15],[-56,49],[-90,51],[-22,116],[-64,162],[-13,124],[-42,55],[20,82],[19,19],[40,40],[2,98],[-40,113],[-37,121],[10,55],[3,21],[4,20],[-11,85],[-14,136],[-62,52],[-68,69],[-26,104],[-76,78],[-61,93],[-65,-63],[-45,92],[17,91],[-48,6],[-64,87],[-40,67],[-83,83],[-30,64],[-62,103],[-37,104],[-8,166],[20,103],[6,13],[3,6],[46,97],[15,110],[9,43],[5,24],[6,26],[57,128],[4,91],[-13,54],[-13,73],[38,88],[1,1],[43,63],[4,83],[-84,94],[-20,23],[-61,24],[-87,70],[-64,4],[-29,-98],[-49,-76],[-36,8],[-55,86],[-17,122],[-33,133],[29,89],[-24,96],[-20,200],[-98,162],[-86,115],[-90,91],[-23,88],[-33,84],[-42,13],[-23,88],[-91,141],[-27,39],[-55,82],[3,56],[3,55],[-33,64],[-34,47],[7,119],[-8,73],[-41,139],[-13,113],[-12,176],[5,57],[8,92],[4,40],[20,100],[45,107]],[[78375,46882],[-13,-94],[19,-60],[10,-32],[-7,-56],[47,-74],[42,-40],[44,-114],[-26,-61],[-42,-91],[-36,-75],[0,-104],[0,-79],[14,-98],[3,-22],[16,-138],[35,-75],[25,-169],[47,-107],[68,-68],[40,-18],[39,-18],[97,-37],[38,-37],[25,-95],[27,-130]],[[78195,40928],[-70,45],[-19,59],[-40,54],[-39,74],[-10,75],[-46,22],[-13,54],[-39,66],[-187,-14],[-214,-11],[-153,-6],[-92,-4],[-164,-8],[-43,-3],[-25,0],[-202,-4],[-139,-7],[-34,-2],[-187,-4],[-26,-1],[-163,-1],[-36,0],[-157,-4],[-60,-1],[-155,-6],[-68,-2],[-125,-2],[-70,-1],[-143,-1],[-56,0],[-88,2],[-167,4],[-85,2],[-137,4],[-119,3],[-118,2],[-35,1],[-142,4],[-207,6]],[[74322,41323],[16,34],[-30,95],[-57,56],[-38,103],[48,89],[-6,119],[27,79],[-24,72],[8,91],[-33,86],[1,67],[1,59],[-4,78],[6,68],[4,51],[-47,-5],[-2,102],[19,77],[-31,84],[-3,91],[1,38],[5,126],[-54,27],[-20,141],[-67,-30],[-10,63],[-24,100],[6,105],[3,15],[18,87],[21,135],[-39,90],[-45,133],[23,123],[-81,92],[-44,47],[4,126],[-70,102],[9,91],[1,8],[0,88],[-64,138],[-3,140],[27,97],[-57,55]],[[73717,44956],[-29,37],[-14,14],[15,74],[-45,163],[-58,89],[-29,71],[2,103],[40,92],[35,97],[-3,84],[37,70],[-18,35],[25,53],[-17,66],[47,53],[6,28],[11,60],[-17,56],[-15,148],[-42,0],[-27,50],[-23,84],[43,17],[5,90],[3,73],[-65,93],[9,67],[-13,59],[130,0]],[[81217,36009],[52,-33],[30,15],[29,54],[-31,101],[12,55],[3,16],[44,25],[57,-88],[75,32],[10,-17],[28,-51],[49,-8],[16,89],[51,51],[58,-10],[33,26],[27,21],[77,-70],[25,-28],[30,-34],[14,-16],[67,-49],[38,-65],[28,-76],[43,114],[13,91],[29,85],[29,12],[44,17],[47,69],[55,48],[3,2],[27,-78],[52,-121],[57,-45],[10,-8],[28,-23],[14,102],[80,-7],[-14,125],[3,133],[30,11],[15,4],[33,78],[1,1],[41,71],[28,20],[31,23],[38,-93],[64,-146],[99,-25],[55,-73],[33,40],[19,23],[21,22],[26,26],[16,157],[8,131],[1,17],[49,98],[21,82],[19,-10],[39,-19],[60,53],[33,90],[11,68],[11,74],[30,63],[80,34],[22,69],[36,37],[0,1],[16,42],[-18,99],[-3,117],[-9,103],[43,43],[53,-4],[8,2],[51,12],[33,-36],[32,-48],[13,-18],[36,15],[67,88],[45,32],[53,37],[94,23],[39,-8],[9,124],[4,16],[11,44],[-40,28],[-42,45],[40,78],[-15,75],[-42,98],[32,49],[36,53]],[[84075,38501],[62,79],[33,-28],[33,-65],[49,-38],[13,-10],[50,50],[40,4],[6,1],[5,1],[12,27],[17,10],[15,-14],[11,-58],[28,-72],[66,-36],[5,-13],[21,-59],[9,-65],[49,-144],[-1,-72],[7,-24],[12,-46],[69,-31],[73,-34],[1,-1],[65,30],[45,-23],[21,-14],[47,-31],[16,-67],[45,-39],[10,-72],[59,-38],[24,-15],[29,22],[3,3],[15,69],[83,43],[83,-62],[57,-15],[50,-74],[30,-45],[20,27],[22,29],[60,-16],[38,38],[15,60],[63,70],[10,16],[17,26],[61,25],[48,24],[6,-27],[10,-45],[2,-76],[16,-141],[35,-61],[10,-18],[68,-10],[43,-81],[11,-14],[40,-59],[22,-105]],[[86059,37197],[-3,-147],[23,-55],[-9,-129],[-15,-90],[-25,-127],[69,-136],[75,-165],[-20,-114],[61,-85],[18,-56],[26,-79],[38,-75],[6,-31],[22,-114],[62,-63],[75,-111],[69,-96],[86,-13]],[[86617,35511],[-208,-310],[-96,-144],[-41,-66],[-84,-41],[-97,-84],[-6,-7],[-144,-160],[4,-103],[-26,-65],[-57,-32],[-48,-63],[3,-102],[-26,-74],[-105,-66],[-56,6],[-35,-104],[-19,-101],[-89,-31],[-134,-76],[-45,-39],[-80,-1],[-78,-61],[-54,-63]],[[85096,33724],[-14,-35],[-182,8],[-83,6],[-213,4],[-31,2],[-212,7],[-248,12],[-7,1],[-141,17],[-27,4],[-108,15],[-161,7],[-13,1],[-130,-16],[-46,-6],[-217,10],[-50,3],[-76,3],[-91,10],[-95,10],[-110,10],[-184,17],[-85,8],[-39,-27],[-49,27],[-140,-7],[-44,-2],[-221,-5],[-48,-1],[-197,-5],[-11,-1],[-261,-6],[-47,-2],[-142,-7],[3,58],[-144,25],[-53,2],[13,-91],[20,-150],[-15,-98],[-68,-3],[-323,5],[-20,0],[-4,0],[-268,1],[-131,1],[-220,6],[-120,-8],[-64,-4],[-109,-2]],[[79870,33528],[-28,76],[24,70],[58,-16],[63,-7],[27,114],[45,3],[3,0],[40,-88],[46,-16],[26,107],[20,49],[10,21],[-33,104],[40,75],[1,58],[0,5],[7,111],[25,85],[15,101],[4,25],[-30,46]],[[78421,26865],[28,-45],[56,-82],[1,-94],[-60,-75],[-21,-70],[3,-69],[40,-69],[50,-28],[-37,-76],[17,-162],[22,-41],[5,-10],[0,-2],[34,-107],[-44,-8],[7,-141],[77,-26],[-18,-139],[58,-19],[-24,-112],[-38,-131],[-105,-12],[62,-191],[4,-14],[-40,-96],[-1,-52],[-33,-69],[-53,-26],[-4,-102],[-47,-82],[-50,-83],[-49,18],[-13,-83],[35,-98],[2,-5],[-56,-25],[-13,-168],[-60,-45],[5,-63],[18,-79],[-46,-22],[-25,-69],[6,-113],[-20,-93],[-3,-99],[24,-89],[-49,-57],[-51,11],[-20,-63],[48,-78],[-28,-108],[24,-87],[31,-80],[-69,-96],[368,0],[43,0],[103,0],[209,1],[60,0],[170,1],[18,0],[178,0],[2,0],[77,1],[322,2],[55,1],[96,0],[-19,-170],[-38,-177],[-39,-178],[9,-111],[4,-47],[27,-177],[70,-141],[11,-45],[19,-76],[40,-202],[24,-173],[74,-70]],[[79884,21480],[-72,-72],[-46,-47],[-24,-81],[-88,-58],[-56,-51],[-7,-126],[51,-35],[46,-32],[38,-83],[48,-20],[44,34],[21,195],[72,110],[44,38],[91,-4],[35,62],[62,83],[45,27],[-3,-163],[-26,-134],[-14,-130],[-5,-92],[-50,-141],[19,-89],[-114,27],[-4,-169],[-55,-58],[-35,-38],[-27,32],[-60,-73],[34,-127],[-5,-94],[34,-114],[44,-54],[91,-27],[61,-8],[48,-97],[51,14],[59,-124],[16,-114],[81,-8],[10,-92],[-46,-146],[-45,-31],[-29,-85],[6,-73],[-68,59],[-36,69],[-56,-92],[-70,-146],[-3,159],[38,104],[-26,99],[-38,49],[-44,126],[-73,52],[-38,18],[-29,73],[-77,26],[-104,28],[-36,-22],[-65,-102],[-91,-133],[-57,-75],[-90,-113],[-100,-41],[-96,-15],[-40,5],[-146,-2],[-86,-33],[-57,4],[-49,26],[-9,93],[-57,110],[-52,14],[-84,34],[-57,58],[-108,57],[-50,97],[52,59],[10,60],[-61,58],[-26,56],[14,45],[-42,100],[-59,-51],[-22,55],[-40,62],[-6,66],[-4,54],[-52,70],[-39,-1],[18,131],[-39,89],[-62,7],[-63,-47],[-40,-42],[-18,-144],[62,-60],[82,-51],[-51,-150],[-47,-32],[-84,85],[-102,104],[-31,24],[-84,-7],[-83,-81],[-63,-15],[-77,31],[-57,25],[-84,32],[-44,22],[-60,30],[-174,144],[-101,83],[-85,48],[-79,41],[-106,9],[-103,-15],[-113,-8],[-181,-51],[-51,-41],[-35,-47]],[[76040,20545],[-22,64],[-25,72],[-34,79],[50,93],[18,39],[20,42],[20,115],[59,128],[31,58],[2,4],[2,111],[-1,117],[-9,98],[2,36],[4,60],[-48,104],[14,128],[6,10],[32,52],[-7,146],[-17,74],[40,91],[-1,62],[49,104],[11,112],[43,123],[10,127],[4,15],[21,90],[-17,81],[9,79],[7,82],[-8,147],[5,109],[-60,-6],[-10,146],[-55,80],[6,141],[-26,102],[-46,76],[21,68],[-55,44],[-42,113],[16,69],[12,149],[-45,200],[-50,167],[-60,63],[-58,126],[0,278],[0,430],[-1,383],[0,867]],[[91894,36441],[34,21],[25,-60],[-5,-128],[-55,30],[1,137]],[[88837,39675],[75,0],[309,3],[102,0],[109,0],[76,0],[306,0],[33,0],[217,-1],[21,0],[274,-2],[267,-2],[8,0],[196,0],[20,0],[194,0],[8,0],[181,2],[64,0],[130,0],[134,0],[160,1],[6,0],[87,0],[288,1],[21,0]],[[92782,37253],[-32,-242],[-16,-25],[-36,-173],[-30,-173],[-15,-65],[-43,-131]],[[92610,36444],[-340,-63],[-41,-83]],[[92229,36298],[-47,40],[-55,2],[-68,-103],[-29,-3],[-5,110],[37,122],[-1,41],[-5,78],[-65,44],[-5,120],[70,26],[-22,78],[-50,14],[-84,11],[6,-128],[18,-125],[6,-86],[-39,19],[-41,73],[6,129],[-42,75],[-73,140],[-36,37],[7,71],[-27,78],[-50,170],[53,95],[-12,52],[10,77],[43,8],[25,-6],[33,-1],[-8,120],[-23,-4],[-34,80],[-32,0],[-43,-64],[-22,13],[6,84],[-44,51],[9,60],[62,16],[35,105],[46,-75],[26,33],[-13,120],[1,68],[-42,0],[-60,-33],[-14,-97],[-37,-19],[12,169],[36,129],[18,63],[33,-21],[29,-19],[-1,139],[-12,53],[-28,50],[31,129],[29,108],[29,55],[17,71],[43,69],[44,30],[18,12],[31,39],[-5,74],[-44,-2],[-76,-90],[-69,-100],[-65,-98],[-47,-100],[-41,-33],[-26,-49],[-34,0],[-31,-2],[-25,-51],[87,-88],[6,-96],[1,-75],[24,-59],[-49,-54],[-20,-51],[19,-29],[-17,-64],[-19,-43],[-24,-64],[24,-24],[-33,-99],[-28,-58],[29,-61],[-3,-116],[16,-91],[-5,-146],[22,-108],[37,-77],[51,-101],[6,-54],[-14,-95],[25,-29],[-16,-108],[35,-117],[30,-76],[-10,-74],[8,-120],[-45,82],[-52,76],[-45,-7],[-53,71],[-45,117],[-73,38],[-60,2],[-58,32],[-52,32],[-52,81],[-47,69],[-24,142],[-13,45],[-53,-40],[-42,-27],[-78,-57],[-44,105],[12,196],[56,119],[49,26],[-1,39]],[[90928,37603],[-2,74],[41,60],[6,8],[23,1],[11,54],[0,16],[2,74],[0,12]],[[90937,38174],[-24,57],[-50,7],[-42,35],[1,78],[-55,48],[-44,19],[-91,27],[-17,56],[-35,29],[-1,77],[32,46],[23,63],[-33,62],[-50,54],[-31,43],[-70,29],[-47,8]],[[90403,38912],[-24,61],[5,92],[-52,142],[-22,95],[-6,117],[-85,39],[-72,-12],[-68,133],[-127,-23],[-78,-53],[-63,-17],[-49,-112],[-20,-71],[-116,8],[-57,27],[-46,21],[-29,103],[-28,55],[-72,-161],[-81,-142],[-13,-75],[-70,63],[-50,-2],[-67,-136],[-85,-142],[-19,-32],[-63,-60],[-63,-95],[-55,-43],[2,264],[2,357],[5,362]],[[84257,51448],[88,-126],[87,-55],[57,-53],[-34,-84],[-80,6],[-92,144],[-57,101],[31,67]],[[83290,51146],[44,13],[114,166],[146,-24],[-15,-92],[-118,-329],[-46,-47],[-55,27],[-66,212],[-4,74]],[[82901,49824],[84,222],[49,-16],[31,-61],[-20,-107],[-93,-139],[-66,24],[15,77]],[[85293,43511],[-117,-8],[-159,-10],[-104,-6],[-226,-14],[-202,-11],[-69,-4],[-328,-17]],[[84088,43441],[0,122],[-17,0],[-331,0],[-32,0],[-53,0],[-328,-1],[-117,-1],[-242,1],[-145,1],[-246,-1],[-20,0],[-103,0],[-165,1]],[[82289,43563],[117,144],[85,158],[86,317],[32,95],[89,207],[9,21],[64,268],[6,47],[33,231],[10,170],[2,30],[17,224],[-6,231],[-10,199],[-26,182],[-17,67],[-38,146],[-81,273],[-37,179],[-27,159],[-45,149],[-10,97],[27,103],[59,139],[8,92],[4,40],[-15,148],[-14,101],[-34,97],[-11,69],[50,78],[25,39],[34,103],[4,10],[32,96],[74,221],[15,107],[2,156],[11,67],[14,93],[-29,155],[5,97],[78,56],[64,25],[9,70],[11,83],[7,170],[70,-9],[43,119],[69,-58],[66,76],[30,140],[58,79],[43,149],[73,76],[18,-64],[-31,-255],[10,-31],[31,-102],[40,33],[39,49],[45,56],[12,106],[-12,151],[3,51],[5,121],[68,86],[88,85],[90,4],[36,2],[86,23],[41,64],[-61,38],[-53,14],[-61,162],[-9,90],[51,135],[81,89],[-39,141],[132,-16],[84,71],[36,-16],[12,-6],[147,-151],[82,-88],[43,33],[75,-10],[105,-73],[14,-9],[62,-123],[27,-114],[87,-11],[79,-11],[60,-96],[129,-74],[87,-84],[99,7],[92,-156],[-18,-90],[18,-38],[62,-128],[44,-216],[-66,28],[-52,55],[-39,-37],[6,-97],[-3,-113],[77,-104],[29,-11],[4,-42],[17,-191],[18,-131],[-34,-154],[-3,-234],[-17,-292],[-58,-59],[-36,-70],[-73,-7],[-39,-202],[-14,-189],[-85,-39],[-12,-91],[-85,-6],[-72,-47],[-37,-129],[-17,-221],[-16,-80],[34,-119],[82,2],[77,-96],[28,-42],[14,-21],[137,245],[16,28],[5,22],[24,92],[42,175],[23,66],[111,35],[18,67],[113,38],[79,43],[19,56],[86,46],[121,-88],[74,-143],[68,-223],[19,-174],[5,-94],[11,-208],[48,-304],[15,-375],[15,-108],[18,-127],[63,-185],[-12,-102],[-36,-123],[2,-239],[-38,-238],[-66,-159],[-85,-60],[-24,188],[59,77],[-60,27],[-83,-88],[31,-56],[9,-68],[-92,-43],[-10,-173],[-48,-189],[-58,-37],[-96,-81],[-17,-113],[-16,-107],[0,-165],[-46,-69],[-28,-121],[-47,-95],[-50,-26],[-14,-86],[-49,-52],[-40,-84],[15,-130],[-26,-15]],[[80154,55288],[37,51],[144,110],[69,52],[42,29],[69,42],[78,86],[86,88],[76,51],[108,68],[-2,-84],[-109,-123],[-26,-117],[-124,-87],[-120,-57],[-41,-123],[-130,-86],[-101,-60],[-39,50],[-47,49],[30,61]],[[79087,52729],[81,79],[80,32],[171,84],[114,137],[30,49],[47,73],[99,50],[70,-10],[64,13],[63,18],[75,5],[167,131],[76,137],[101,31],[62,14],[23,48],[8,17],[32,111],[66,78],[103,121],[102,71],[64,84],[11,14],[73,148],[119,98],[60,50],[118,39],[139,18],[114,-10],[108,-34],[79,-60],[-12,-68],[-174,7],[-126,-4],[-2,-103],[-65,-57],[-71,-85],[-87,-100],[-41,-133],[-89,-112],[-41,-145],[-47,-119],[-15,-36],[-20,-139],[94,42],[114,109],[90,71],[70,-92],[18,-2],[129,-15],[110,-63],[80,-67],[82,-112],[19,-119],[63,-139],[108,-129],[13,-138],[171,-19],[52,16],[125,39],[65,-115],[83,-31],[54,56],[48,145],[61,-41],[62,-88],[87,123],[243,194],[44,36],[128,2],[116,24],[21,5],[320,-16],[200,139],[17,4],[58,15],[186,18],[-57,-186],[1,-232],[51,-148],[107,-30],[153,52],[63,-59],[102,-31],[28,50],[37,66],[113,-16],[89,90],[67,-43],[-6,-90],[-12,-187],[36,-221],[-9,-29],[-6,-128],[79,-81],[46,-95],[82,-76],[59,127],[86,-14],[108,-21],[105,-179],[-41,-148],[-50,-5],[-67,56],[-127,-15],[-98,54],[-151,9],[-31,-5],[-125,-23],[-108,-46],[-93,88],[-77,-58],[-59,7],[-90,-84],[25,-112],[-77,20],[-111,137],[-77,144],[-132,85],[-102,29],[-103,31],[-142,-5],[-96,-183],[-43,-45],[-101,38],[-49,-62],[-43,-54],[-141,88],[-184,-44],[-63,-206],[-81,-140],[-90,-101],[-68,-166],[-17,-150],[-68,131],[7,153],[51,79],[-112,150],[-58,-169],[-112,-95],[-95,88],[-90,-109],[-73,-213],[-31,-92],[-56,-179],[-101,-257],[-75,-156],[-37,-183]],[[81607,49924],[-51,21],[-42,84],[-42,89],[27,92],[39,135],[9,100],[-44,29],[-39,-55],[-44,-3],[-56,-1],[6,77],[8,97],[37,55],[1,99],[16,95],[8,66],[-42,84],[39,39],[-21,57],[-67,98],[-78,17],[-25,60],[-47,-25],[-51,31],[-26,44],[54,103],[-37,89],[-56,47],[-60,31],[-57,-7],[-63,61],[-26,-23],[-104,79],[-60,-11],[-17,-47],[-40,-2],[-19,46],[-54,26],[-64,-11],[-108,97],[-52,46],[-90,80],[-487,201],[-259,107],[-170,71],[-34,159],[-51,152],[-63,36],[-41,65],[-49,-37],[-28,62]],[[79870,33528],[17,-69],[-19,-80],[28,-79],[-11,-64],[-69,-4],[-10,-64],[51,-60],[-43,-76],[-67,20],[-13,-45],[58,-75],[3,-5],[28,-90],[-45,-61],[-33,-41],[-11,-118],[-36,-38]],[[75345,33531],[0,215],[0,294],[0,443]],[[75345,34483],[0,308],[0,340],[0,49],[0,89],[0,517],[3,583],[0,94],[1,44],[1,339],[0,457],[0,134],[3,363],[0,5],[0,203],[1,257],[0,118],[0,133],[14,79],[-28,3],[-51,53],[-54,-27],[-52,68],[-23,68],[-28,62],[-45,95],[17,131],[-52,14],[-32,78],[-60,102],[-57,114],[33,43],[27,35],[2,36],[6,75],[59,63],[0,71],[64,1],[35,49],[-10,45],[-6,102],[-45,95],[-20,46],[-60,-6],[-56,-68],[-54,64],[-79,92],[-69,108]],[[74730,40207],[-36,55],[-31,-4],[-28,82],[18,73],[-34,62],[-43,91],[8,91],[-67,44],[-5,61],[-41,35],[-49,25],[11,83],[-7,57],[-31,128],[-9,58],[-18,64],[-38,-2],[-8,113]],[[56248,57372],[489,0],[261,-3],[429,3],[43,0],[269,1],[175,-3],[100,-1],[143,-1],[191,-2],[282,2],[232,-1],[822,1],[44,0],[259,-1],[314,-2],[206,0],[237,1],[233,1],[188,0],[83,2],[238,0],[598,2],[9,0],[213,-1],[223,-1],[408,0],[273,1],[474,0],[235,-1],[69,1],[164,0],[501,0],[341,-1],[109,0],[55,0],[245,1],[374,-1],[81,0],[185,0],[162,-1],[296,2],[441,0]],[[66942,57370],[-1,-291],[1,-407],[1,-266],[0,-200],[1,-282],[2,-468],[0,-47],[1,-321],[-1,-381],[-1,-518],[0,-3],[0,-387],[-1,-369],[0,-419],[1,-138],[0,-192],[0,-60],[0,-353],[0,-85],[0,-638]],[[66945,51545],[1,-121],[0,-33],[1,-219],[1,-366],[0,-128],[1,-295],[0,-235],[0,-168],[1,-241],[-16,-2]],[[66934,49737],[-863,6],[-45,0],[-688,0],[-157,-6],[-213,-7],[-557,4],[-412,11],[-499,0],[-77,0],[-224,-2],[-224,-2],[-108,0],[-393,0],[-36,12],[-420,-6],[-200,1],[-175,0],[-293,-8],[-340,-13],[-71,21],[-231,-3],[-11,-257],[1,-270],[0,-112],[0,-79],[6,-288]],[[95482,42636],[82,31],[9,-74],[-105,-32],[14,75]],[[88583,44535],[119,105],[155,165],[64,105],[88,86],[80,66],[49,35],[2,9],[22,84],[43,60],[13,85],[68,51],[60,58],[48,87],[-13,66],[-15,78],[-26,36],[3,90],[-17,37],[-30,9],[-52,71],[13,119],[-12,17],[-50,22],[13,90],[4,17],[10,37],[-8,131],[-15,77],[210,105],[256,100],[73,2],[121,4],[164,5],[134,-20],[159,-41],[8,-1],[42,-4],[89,-110],[98,-91],[44,28],[112,45],[31,13],[68,-6],[120,16],[116,-27],[42,-2],[99,66],[65,25],[41,37],[34,28],[48,116],[12,13],[90,97],[88,96],[41,8],[2,1],[44,-26],[75,32],[28,87],[7,143],[-15,198],[-15,96],[-60,101],[-57,30],[-72,20],[27,81],[118,89],[-25,101],[-61,12],[12,79],[-8,53],[14,62],[19,60],[42,75],[72,20],[37,48],[3,78],[57,36],[86,92],[46,3],[78,107],[25,33],[23,93],[37,85],[177,272],[128,186],[80,96],[70,98],[100,81],[69,57],[54,54],[11,36],[76,11],[65,60],[80,-46],[17,2],[72,10],[30,4],[156,-5],[180,-8],[184,10],[137,7],[209,5],[264,14]],[[94302,49763],[-1,-77],[5,-101],[-36,-116],[12,-58],[21,-35],[7,-11],[-21,-98],[-7,-97],[-22,-153],[21,-100],[4,-9],[13,-31],[31,-75],[17,-127],[-24,-110],[-12,-49],[9,-90],[6,-89],[1,-10],[-30,-53],[-40,-121],[-19,-128],[-18,-109],[27,-59],[-4,-69],[3,-87],[30,-103],[-15,-111],[7,-18],[28,-72],[-38,-136],[-18,-78],[-10,-113],[26,-59],[61,110],[32,-78],[44,-95],[-9,-327],[-3,-93],[-12,-532],[-8,-386],[-11,-60],[23,-107]],[[94372,45443],[-38,-216],[-40,-234],[-28,-161],[-24,-140],[-87,-507],[17,-62],[2,-8]],[[94174,44115],[-16,-430],[-13,-349],[-9,-217],[-6,-164],[-13,-278],[61,-158],[-190,-186],[-29,-27],[61,-158],[0,-27],[2,-35],[0,-1]],[[94022,42085],[-36,-87],[-52,-51],[-9,-60],[23,-10],[24,-11],[53,15],[33,38],[104,39],[3,9],[10,44],[44,-22],[39,39],[55,-49],[85,-43],[6,-3],[71,45],[4,51],[31,31],[62,-14],[161,3],[135,22],[109,38],[73,87],[52,82],[50,42],[31,61],[57,30],[90,72],[7,-29],[-65,-129],[-25,-82],[58,-52],[49,24],[32,118],[38,-26],[-10,-90],[39,-64],[82,96],[36,18],[56,-19],[-72,-123],[-143,-90],[-179,-106],[-87,-70],[-322,-195],[-148,-97],[-79,-64],[-119,-64],[-56,-29],[-87,-20],[-40,19],[-65,-33],[-74,-38],[-119,-20],[-98,12],[-22,3],[-45,-28],[-102,-63],[-45,52],[-59,52],[-49,-95],[-78,-69],[-54,-17]],[[93485,41165],[10,81],[29,26],[11,65],[2,73],[2,2],[26,25],[9,2],[66,10],[14,30],[3,6],[18,38],[0,2],[5,21],[9,39],[2,5],[5,23],[9,36],[26,79],[12,35],[2,9],[2,7],[17,63],[8,33],[3,15],[11,61],[2,7],[12,63],[11,87],[-131,118],[-152,141],[-20,19],[-60,57],[-58,60],[-81,84],[-211,208]],[[93098,42795],[-36,131],[-58,10],[-80,46],[-83,78],[-54,150],[-5,128],[-4,211],[-18,94],[-35,74],[-69,41],[-65,44],[-25,118],[-44,87],[-121,13],[-68,-1],[-283,-1],[-210,1],[-35,0],[-282,0],[-86,2],[-328,1],[-72,0],[-537,-3],[-125,-1],[-73,0],[-177,2],[-156,-1],[-58,0],[-33,0],[-257,1],[-287,-1],[-57,0],[-70,-1],[-366,-1],[-124,1],[-134,0],[-1,253],[1,264]],[[49567,52143],[60,19],[47,-75],[-3,-91],[53,-68],[7,0],[74,-3],[60,50],[42,35],[45,-8],[99,-98],[37,-55],[52,-40],[43,-132],[38,-102],[2,-92],[23,-86],[-9,-110],[30,-97],[-11,-150],[16,-35],[16,-35],[84,-65],[135,-51],[48,-37],[52,23],[43,-52],[62,-8],[12,11],[58,53],[73,11],[88,62],[46,55],[25,18],[20,15],[30,59],[50,26],[68,-24],[59,21],[121,41],[8,-6],[74,-47],[15,-9],[77,20],[109,-64],[28,-123],[55,18],[33,61],[126,16],[27,-16],[16,-10],[36,55],[148,84],[33,39],[15,18],[39,2],[76,-89],[16,0],[75,-1],[109,42],[63,8],[62,90],[63,23],[63,51],[31,24],[86,27],[59,17],[118,18],[62,120],[26,11],[74,-37],[50,14],[60,16],[96,35],[117,-14],[57,49],[66,79],[1,0],[275,2],[63,0],[213,-1],[331,-1],[17,0],[232,0],[102,-2],[110,-3],[112,-2],[390,-2]],[[55378,44021],[-153,0],[-183,-2],[-197,-1],[-222,0],[-289,-3],[-270,-3],[-245,-5],[-201,2],[-185,-1],[-103,1],[-32,0],[-326,5],[-243,-4]],[[48975,44018],[-52,90],[-39,42],[-33,118],[-9,97],[-20,89],[-24,45],[0,108],[-13,85],[-9,168],[32,190],[-1,110],[-11,115],[-34,35],[2,26],[-55,86],[-38,202],[64,211],[1,6],[39,223],[22,169],[14,122],[12,88],[-16,61],[42,77],[59,179],[48,230],[13,103],[22,181],[30,301],[9,90],[25,369],[10,249],[-4,98],[28,247],[0,163],[17,250],[1,135],[-9,181],[9,71],[36,218],[12,182],[0,4],[31,187],[2,136],[9,121],[-15,129],[17,159],[-14,112],[25,143],[8,185],[0,90],[-26,92],[2,49],[4,103],[-5,135],[-24,74],[50,59],[8,123],[-27,190],[-73,107],[38,72],[77,-107],[65,25],[73,39],[35,-45],[51,52],[66,23],[35,58]],[[85096,33724],[181,-3],[174,-2],[260,-6],[137,-3],[198,3],[108,1],[172,-1],[46,0],[61,-1],[25,0],[189,-1],[10,42],[86,-3],[160,-5],[-27,-45]],[[86876,33700],[-20,-98],[4,-132],[-35,-104],[8,-45],[17,-97],[-56,5],[-57,12],[-67,-87],[-46,-141],[-61,-198],[-46,-35],[-42,-3],[-12,61],[-63,43],[-48,-60],[-29,12],[-44,-35],[-55,-61],[-50,-146],[-38,-47],[-45,-54],[-47,39],[14,99],[-30,69],[-86,-84],[-48,-49],[-7,-77],[-26,-54],[-40,45],[-44,-39],[10,-100],[-34,-90],[-36,-85],[-63,9],[-43,-22],[-58,-24],[-32,-72],[-51,-18],[-37,-112],[-45,6],[-66,-94],[-28,-16],[-41,-76],[-79,7],[-59,3],[-105,-12],[-69,-82],[-61,-87],[-50,-40],[-43,-86],[13,-68],[-28,-45],[13,-100],[-66,-92],[-72,-13],[-40,54],[-53,-81],[-3,-40],[-32,-414]],[[83376,30642],[-231,4],[-398,8],[-140,-1],[-281,3],[-47,1],[-334,12],[-5,0],[-7,1],[-340,8],[-17,0],[-202,4],[-132,0],[-181,4],[3,-23]],[[81064,30663],[-52,-1],[-94,1],[-95,0],[-282,-1],[-32,0],[-173,-1],[-9,0],[-153,-1],[-137,0],[-74,-1],[-186,1],[-71,0],[-64,0],[-458,3]],[[67874,33532],[748,0],[116,0],[184,-1],[180,0],[480,-1],[117,1],[62,0],[260,0],[42,0],[209,0],[274,0],[3,0],[0,-2802],[0,-542],[0,-354],[2,1],[61,30],[78,-133],[21,-37],[48,-100],[61,-103],[86,-13],[14,63],[97,-20],[4,-1],[45,-31],[22,118],[40,-10],[67,-96],[48,-117],[9,-21],[19,-190],[52,-10],[65,-15],[50,14],[45,-8],[11,-2],[60,-82],[58,-9],[62,-47],[42,4],[38,60],[34,-16],[29,-14],[44,-103],[47,-59],[46,34],[8,6],[14,83],[31,55],[40,-21],[84,-36],[50,-25],[27,51],[13,26],[22,-96],[0,-106],[15,-88],[68,-13],[52,-9],[-5,-127],[1,-64],[1,-24],[76,-55],[56,58],[38,86],[79,126],[56,-44],[11,-88],[31,-44],[3,-3],[64,38],[2,-6],[29,-82],[7,-90],[63,-8],[49,87],[64,67],[36,26],[35,-127],[-35,-72],[50,-167],[52,25],[3,74],[8,74],[21,82],[62,58],[-3,61],[33,50],[7,1],[9,1],[26,3],[7,-84],[42,-106],[50,41],[15,-51],[58,-20],[27,86],[20,76],[58,-64],[4,-5],[-3,-95],[18,-22],[44,-2],[19,-85],[59,12],[29,-64],[21,-59],[15,-40],[50,78],[26,66],[43,-42],[50,101],[19,59],[79,19],[114,64],[43,-22],[38,-6],[21,-4],[28,27],[46,45],[61,18],[59,41],[41,0],[28,-79],[70,-32],[85,-2],[37,11],[24,8],[27,99],[24,61],[63,-44],[5,-5],[49,-60],[43,-80],[58,-20],[37,-79],[34,-66],[54,-70],[67,16],[30,-51],[16,-26],[75,-65],[51,-7],[39,-91],[39,30]],[[76040,20545],[-21,-22],[-89,6],[-85,-21],[-93,-66],[-172,-142],[-15,-12],[-116,-96],[-83,-71],[-68,-71],[-54,-118],[8,-71],[-72,-100],[-199,-250],[-88,-154],[-59,-85],[-94,-169],[-76,-129],[-51,-14],[-60,-66],[-73,-79],[-85,-94],[-114,-132],[-168,-146],[-173,-164],[-119,-150],[-55,-80],[-47,-122],[-169,-181],[-78,-111],[-64,-103],[-54,-97],[-30,-55],[-105,-234],[-37,-140],[-40,-93],[-45,-132],[-64,-229],[-40,-164],[-34,-159],[-36,-209],[-20,-158],[-18,-333],[11,-333],[39,-351],[31,-193],[30,-185],[24,-175],[27,-202],[34,-425],[6,-124],[6,-89],[-10,-42],[-45,23],[-63,-49],[-54,-24],[-25,-39],[6,-64],[-12,-55],[-44,1],[-29,74],[-37,1],[-41,77],[-36,34],[-54,131],[-48,32],[-55,16],[-32,44],[-68,6],[-65,3],[-59,8],[-26,-43],[-46,34],[-52,-6],[-42,0],[-46,33],[-49,70],[-74,91],[-50,79],[-54,30],[-65,39],[-33,32],[-37,-31],[-39,57],[-73,116],[-24,82],[-75,-23],[-60,70],[-65,34],[-45,-30],[-25,57],[17,97],[-12,44],[-59,95],[-26,203],[-8,130],[-30,121],[-23,105],[-54,70],[-28,94],[-24,102],[-53,83],[4,154],[11,100],[-13,122],[-17,86],[-21,51],[-38,21],[38,203],[-7,74],[-2,94],[-27,-3],[-2,155],[-24,65],[-60,38],[-72,39],[-48,119],[-38,47],[-38,70],[-30,87],[-24,97],[-11,82],[-13,95],[-47,44],[-39,157],[-42,98],[-88,105],[-21,33],[-62,102],[-18,97],[-29,116],[-15,124],[-28,95],[-18,74],[-8,114],[-46,79],[-46,86],[-5,104],[-24,89],[-2,81],[-37,58],[-45,129],[-17,102],[-12,141],[-13,131],[-47,56],[-40,75],[-21,113],[-47,83],[-34,70],[-97,105],[-57,182],[-69,28],[-50,90],[-55,0],[-45,110],[-2,119],[-53,45],[-30,141],[-47,41],[-44,10],[-52,57],[-83,-56],[-53,4],[-85,43],[-59,8],[-81,25],[-49,-9],[-46,-30],[-38,11],[-41,51],[-59,46],[-65,65],[-44,-29],[-17,-80],[-21,-105],[-68,28],[-39,1],[-34,-54],[-55,-8],[-57,-19],[-15,-117],[-40,-105],[-35,-124],[-27,-65],[-20,-149],[5,-86],[-42,-90],[-17,-124],[18,-87],[-42,-97],[-69,-56],[-36,-111],[-36,-33],[-21,-112],[-24,-86],[-90,18],[-47,-18],[-72,70],[-91,92],[-54,103],[-61,56],[-60,39],[-58,40],[-57,125],[-60,47],[-106,27],[-72,66],[-78,100],[-34,82],[-42,105],[-71,82],[-56,36],[-72,116],[-78,138],[-23,180],[-48,141],[-47,127],[-12,150],[-16,66],[10,158],[-9,199],[-34,91],[-19,80],[-55,132],[-32,38],[-9,130],[-17,146],[-32,133],[-42,10],[-26,119],[-55,26],[-32,63],[-55,72],[-52,85],[-86,30],[-70,68],[-5,69],[-79,103],[-62,90],[-19,86],[-43,121],[-73,72],[-57,58],[-19,67],[-67,165],[-61,57],[-14,88],[-45,53],[-68,12],[-85,110],[-54,109],[-39,93],[-21,111],[-43,127],[-16,45],[-43,79],[-44,14],[-15,-22],[-39,67]],[[64732,24536],[-47,59],[-49,110],[11,81],[-6,109],[11,56],[215,1],[157,1],[181,0],[220,1],[532,-3],[210,0],[63,0],[182,0],[551,-1],[40,0],[229,0],[353,0],[234,1],[0,165],[0,110],[-1,720],[0,125],[0,499],[2,209],[3,496],[3,323],[3,347],[5,485],[3,485],[0,573],[1,458],[0,243],[0,395],[0,363],[0,73],[1,838],[0,223],[1,602],[-1,849],[35,0]],[[92610,36444],[-86,-252],[-37,-83],[-52,34],[-45,-70],[-56,-161],[-36,-162],[-20,-103],[6,-92],[-58,-147],[7,-32],[6,-29],[-55,-150],[-14,-72],[-38,-73],[-15,-96],[-19,-102],[-72,-144],[-40,-54],[-33,21],[-17,168],[-22,191],[32,152],[10,146],[27,198],[4,29],[38,136],[35,129],[42,89],[-5,80],[73,47],[30,64],[-49,103],[78,89]],[[86617,35511],[32,-49],[-47,-110],[43,-66],[3,-59],[33,-109],[41,-89],[67,-20],[28,-61],[4,-6],[54,-71],[105,8],[24,32],[45,52],[49,39],[59,127],[122,-196],[100,83],[104,40],[14,3],[54,10],[75,55],[-42,93],[16,69],[6,2],[1,0],[18,6],[59,-99],[94,80],[107,116],[66,-86],[5,-7],[58,69],[97,141],[8,94],[52,72],[-61,115],[2,5],[29,65],[35,120],[17,84],[60,119],[68,119],[17,30],[58,146],[8,37],[21,91],[20,139],[59,93],[47,65],[9,12],[-15,77],[62,82],[40,142],[-1,62],[19,90],[18,153],[95,-73],[59,-183],[95,-57],[52,-17],[12,-3],[59,109],[3,12],[24,91],[42,150],[55,101],[4,58],[28,136],[30,71],[21,79],[116,-147],[43,130],[43,120],[81,61],[55,108],[52,51],[26,83],[22,68],[84,134],[-13,54],[21,97],[3,74],[54,147],[3,106],[-9,108],[105,-144],[38,-50],[137,-190],[183,-252],[17,69],[27,116],[53,175]],[[90928,37603],[-104,1],[-43,-140],[-25,-181],[5,-159],[31,-64],[15,-32],[92,24],[61,13],[41,14],[24,-59],[-5,-50],[27,-45],[5,-10],[29,-59],[-4,-55],[46,-33],[64,-64],[80,-3],[58,-10],[63,-15],[11,-74],[58,-77],[23,-57],[16,-43],[58,-76],[98,-81],[72,-87],[-13,-107],[-53,-73],[-2,-142],[-14,-94],[44,-101],[-17,-115],[8,-41],[14,-78],[21,-140],[1,-89],[-24,-125],[-81,123],[-24,41],[-39,-31],[44,-137],[23,-71],[-28,-86],[41,-68],[4,-6],[29,-92],[16,-46],[19,-57],[-29,-158],[6,-15],[14,-30],[12,-25],[70,-64],[11,-5],[79,-38],[40,36],[42,-10],[31,-233],[36,-206],[27,-117],[21,-153]],[[92053,33628],[-142,0],[-85,0],[-170,0],[-159,0],[-45,1],[-175,0],[-160,-10],[-220,1],[-23,0],[-97,-1],[-401,-1],[-16,0],[-118,-1],[-131,-1],[-77,-1],[-170,-2],[-119,-2],[-47,-1],[-199,1],[-56,0],[-130,1],[-175,-1],[-71,0],[-111,-1],[-113,0],[-36,-1],[-182,2],[-158,1],[-121,1],[-23,0],[-216,3],[-121,11],[-161,16],[-83,8],[-120,-1],[-55,-1],[-143,10],[-102,10],[-157,8],[-131,7],[-158,16]],[[82192,50545],[87,56],[27,-72],[-55,-114],[-29,-110],[-50,108],[20,132]],[[78768,53603],[32,22],[80,35],[80,-33],[14,-38],[30,-106],[-11,-49],[-22,-39],[-79,-17],[-38,94],[-29,56],[-49,33],[-8,42]],[[77664,52996],[48,-45],[66,14],[60,0],[156,85],[63,44],[21,0],[35,0],[89,61],[45,16],[41,55],[52,19],[40,57],[39,-42],[34,48],[38,18],[47,45],[45,43],[-5,108],[58,38],[64,-75],[41,-46],[55,-84],[-48,-136],[-55,-110],[-18,-49],[25,-77],[-56,-78],[-15,-79],[-21,-47],[27,-9],[24,-9],[62,63],[31,17],[35,41],[16,87],[66,-89],[87,-115],[15,2],[38,7],[61,-54],[17,9]],[[81607,49924],[-31,-96],[-5,-130],[-59,-5],[-58,-22],[-45,-17],[-27,-56],[4,-96],[-14,-31],[-45,-75],[-33,-119],[-37,-69],[-17,-107],[3,-104],[-38,-70],[32,-64],[55,-18],[40,85],[29,65],[81,59],[13,28],[11,25],[10,19],[16,31],[-1,60],[66,141],[58,101],[45,11],[14,23],[61,32],[48,92],[50,151],[64,129],[24,164],[56,11],[48,70],[11,90],[46,68],[36,13],[35,-17],[-1,-120],[-58,-77],[-2,-100],[-15,-106],[-68,-127],[-44,-123],[-16,-119],[-62,-100],[-38,-118],[-50,-183],[-24,-84],[-40,-86],[-46,-240],[-42,-265],[21,-117],[13,-94],[-29,-98],[-54,-53],[-49,-95],[-39,-221],[-33,-176],[9,-121],[23,-82],[-7,-85],[2,-82],[-75,-222],[-3,-134],[-42,-138],[-43,-215],[-7,-211],[-3,-136],[27,-117],[-23,-93],[47,-137],[7,-166],[3,-7],[9,-21],[49,-109],[-16,-161],[-27,-108],[1,-124],[12,-166]],[[66945,51545],[342,0],[202,0],[192,0],[199,-1],[48,0],[55,0],[156,0],[137,0],[199,0],[214,-1],[78,0],[1,0],[182,0],[212,0],[171,-1],[230,0],[307,0],[234,0],[183,-1],[127,-2],[242,-1],[144,-2],[96,1],[107,-2],[130,0],[225,0],[77,0],[251,-3],[88,-1],[188,-3],[307,-1],[55,0],[26,0],[180,-1],[209,0],[280,0],[130,1],[462,-1]],[[73717,44956],[-50,-15],[-21,53],[-77,-8],[-42,115],[-46,71],[11,106],[-72,7],[-21,68],[-93,67],[-53,-18],[-53,73],[-95,18],[-73,92],[-21,63],[-58,24],[-35,-19],[-67,19],[-31,-38],[-57,15],[-75,5],[-90,-24],[-90,27],[-50,14],[-17,-24],[-25,-103],[-40,-56],[-76,-10],[-62,85],[-39,60],[-74,40],[-43,26],[-25,22],[-70,61],[-43,21],[-39,65],[-18,67],[-311,-1],[-362,0],[-250,0],[-281,0],[-311,0],[-714,-1],[-203,1],[-761,2],[-291,1],[-342,1],[-186,0],[-423,1],[-26,0],[-488,0]],[[66938,45929],[-1,551],[-1,513],[0,562],[0,549],[0,75],[0,133],[-1,841],[-1,584]],[[60706,44024],[1,-805],[0,-27],[-1,-391],[0,-691],[452,-3],[372,1],[65,0],[43,1],[254,1],[414,6],[179,-1]],[[62485,42115],[2,-333],[0,-312],[0,-17],[-3,-902],[1,-583],[-1,-969],[0,-459],[-8,-1194],[0,-428],[16,-212],[0,-540],[-1,-756],[-2,-927]],[[58029,34486],[-1,168],[0,374],[-1,396],[1,215],[0,269],[2,258],[0,510],[0,193],[0,295],[0,321],[0,199],[2,384],[-1,242],[1,943],[0,561],[0,213],[1,366],[0,37],[0,536],[1,186],[2,440],[1,521],[0,397],[2,541],[0,500],[-2,458]],[[81666,43464],[48,-67],[49,29],[44,-112],[93,-17],[35,16],[86,41],[87,46],[85,80],[21,20],[75,63]],[[84088,43441],[1,-316],[1,-199],[0,-34],[0,-261],[0,-36],[1,-250],[0,-252],[0,-127],[1,-371],[-1,-431],[-1,-285],[-4,-468],[-3,-363],[-2,-363],[-3,-638],[-3,-314],[0,-232]],[[97036,42706],[73,6],[102,11],[26,138],[58,-63],[22,-180],[-49,-51],[-73,6],[-102,15],[-57,118]],[[96538,42788],[68,23],[63,144],[74,79],[45,-57],[51,-53],[29,-11],[14,-125],[-115,-8],[-104,-13],[-67,-74],[-47,-101],[-10,126],[-1,70]],[[94372,45443],[109,-4],[106,-5],[4,0],[79,-4],[59,-2],[49,-3],[261,-15],[51,-3]],[[95090,45407],[7,0],[35,-3],[115,-6],[71,-5],[70,-4],[39,-2],[135,-8],[27,-1],[83,-5],[54,-3],[97,-5],[254,-13],[51,-2],[34,75],[1,0],[8,0],[57,2],[-4,102],[33,47],[29,-7],[47,-11],[14,48],[15,53],[58,19],[32,30],[59,-28],[42,4]],[[96553,45684],[11,-172],[29,-135],[38,-79],[43,-14],[32,52],[38,-23],[8,-81],[-54,-101],[-39,-9],[-94,-30],[-40,-22],[11,-114],[-45,-39],[-24,-81],[-62,-7],[1,-7],[6,-123],[-20,-66],[4,-16],[23,-85],[17,27],[28,45],[32,-10],[27,-62],[13,-6],[42,-21],[7,-10],[45,-72],[41,-149],[5,-12],[36,-86],[-5,-68],[-31,-77],[15,-85],[48,-38],[22,17],[33,-63],[19,-111],[-14,-82],[4,-8],[38,-72],[47,-40],[105,-32],[46,-28],[50,42],[83,30],[87,54],[19,41],[-2,83],[-56,62],[-5,103],[-8,140],[-60,27],[-36,-12],[-48,83],[49,36],[45,20],[80,-54],[49,-125],[13,-101],[5,-40],[34,-221],[7,-224],[-2,-132],[-31,-136],[-41,-14],[0,145],[4,98],[-43,-12],[-92,-28],[-99,-62],[-46,24],[-71,-46],[-40,-28],[-27,-63],[-75,-20],[-84,-56],[-71,-62],[-50,-76],[-60,-39],[-81,-32],[12,87],[114,82],[72,87],[25,30],[3,83],[-63,74],[-50,-112],[-28,9],[-51,-20],[-28,-70],[-36,-58],[-48,-21],[-44,20],[-31,-23]],[[96283,43062],[-15,201],[4,109],[-56,29],[-59,147],[-60,58],[-10,94],[1,117],[-38,0],[0,112],[0,63],[0,65],[-68,-4],[-90,-5],[-42,-2],[-172,-10]],[[95678,44036],[-1,30],[-75,3],[-92,3],[-102,3],[-86,3],[-106,4],[-71,1],[-117,3],[-71,-7],[-113,11],[-28,-64],[-39,-8],[-33,73],[-136,3],[-48,3],[-65,4],[-93,5],[-228,9]],[[81064,30663],[40,-140],[51,-58],[-33,-514],[-18,-304],[-16,-271],[-27,-447],[-4,-54],[-36,-598],[-6,-88],[-18,-314],[-26,-468],[-12,-199],[-20,-368],[-7,-119],[-23,-414],[-14,-255],[-28,-514],[-7,-111],[-22,-376],[-14,-229],[0,-271],[5,-177],[4,-146],[9,-354],[0,-28],[15,-585],[5,-222],[12,-501],[1,-7],[7,-359],[8,-332]],[[80890,21840],[-13,-52],[-33,11],[-22,-53],[-46,38],[-53,-17],[-27,44],[-45,15],[-33,-35],[-42,7],[-64,25],[-67,63],[-68,-5],[-100,-43],[-93,-71],[-95,-45],[-45,-27],[-71,-92],[-21,-76],[-25,-26],[-43,-21]],[[74730,40207],[-28,0],[-397,0],[-201,1],[-12,0],[-116,-1],[-76,1],[-205,0],[-299,1],[-61,0],[-38,0],[-83,0],[-321,1],[-41,0],[-322,1],[-40,0],[-98,0],[-128,0],[-177,0],[-205,0],[-97,0],[-101,0],[-303,0],[-100,0],[-288,-1],[-112,0],[-165,-1],[-325,0],[-14,1],[-253,0],[-233,1],[-18,0],[-269,0],[-208,0],[-104,0],[-117,0],[-258,1],[-196,0]],[[68721,40212],[0,640],[0,21],[0,173],[0,491],[0,99],[0,482],[-450,0],[-86,0],[-377,0],[-273,-1],[-171,0],[-426,-1]],[[66938,42116],[0,216],[0,312],[0,220],[0,420],[0,518],[0,222],[0,28],[0,445],[0,477],[0,213],[0,37],[0,705]],[[62489,34483],[379,1],[215,0],[337,1],[463,0],[54,0],[484,0],[7,-14],[351,2],[118,1],[300,2],[8,0],[249,1],[164,0],[102,0],[150,0],[27,0],[59,0],[30,-1],[347,-3],[350,0],[295,5],[245,3],[576,4],[75,0]],[[67874,34485],[0,-172],[0,-447],[0,-138],[0,-196]],[[64732,24536],[-3,2],[-411,-1],[-271,0],[-111,0],[-701,0],[0,-541],[0,-318],[-445,0],[-136,-2],[-169,1]],[[92053,33628],[26,-220],[37,-276],[23,-111],[47,-226],[53,-178],[79,-300],[45,-179],[21,-78],[33,-251],[-25,-391],[-42,-316],[-90,-11],[-110,-71],[-138,-121],[-89,-110],[-111,-141],[-85,-157],[-69,-102],[-68,-129],[-57,-134],[-76,-240],[-16,76],[-58,85],[-96,46],[-160,-27],[-184,-85],[-21,-10],[-93,-87],[-73,-99],[-125,-122],[-46,-65],[-107,-148],[-70,-133],[-45,-85],[-58,-158],[-77,-364],[-17,-98],[-23,-128],[-41,10],[-11,57],[-105,45],[-124,1],[-96,-20],[-140,-97]],[[89671,28480],[-67,123],[-31,56],[-144,259],[-231,417],[-256,469],[-92,162],[-190,333],[-16,0],[-206,6],[-136,3],[-217,8],[-215,7],[-210,12],[14,214],[-52,125],[-57,134],[-28,68],[-95,-120],[-14,55],[19,94],[-6,51],[-254,25],[-35,3],[-113,11],[-244,19],[-94,7],[-85,6],[-63,5],[-157,8],[-71,3],[-51,7],[-52,7],[-40,-48],[-68,-41],[-40,-18],[-97,-41],[-54,-87],[-33,12],[-101,-56],[-99,-56],[-89,-50]],[[95827,42431],[34,135],[43,11],[10,-117],[13,-61],[-66,-6],[-34,38]],[[95623,42724],[22,65],[-3,111],[37,8],[6,246],[2,98],[-1,244],[-2,157],[-6,383]],[[96283,43062],[-18,-22],[-47,-53],[-47,45],[-35,12],[-25,-70],[-34,-1],[-34,19],[-35,-12],[-24,-88],[-25,-69],[-64,3],[-61,-24],[-69,-46],[-75,-21],[-69,-31],[2,20]],[[85819,43437],[34,55],[38,-55],[-6,-97],[-47,-28],[-19,125]],[[85293,43511],[39,-79],[74,20],[85,-110],[60,-38],[87,-55],[34,-76],[84,-78],[67,118],[22,21],[104,-87],[24,-86],[2,-8],[64,-122],[74,-71],[65,-10],[88,77],[12,1],[71,7],[78,78],[98,48],[68,34],[23,-20],[8,-7],[20,-17],[103,7],[10,1],[38,-8],[26,-6],[94,99],[129,180],[20,28],[69,110],[91,101],[91,51],[118,101],[44,18],[91,38],[89,77],[195,92],[56,38]],[[87908,43978],[0,-244],[0,-343],[0,-324],[0,-21],[0,-296],[0,-193],[-1,-621],[0,-8],[0,-4],[0,-94],[1,-405]],[[87908,41425],[-58,-45],[-38,9],[-37,-72],[41,-118],[16,-141],[-24,-116],[22,-156],[-34,-100],[-35,-123],[-20,-67],[-27,-137],[-3,-208],[-22,-39],[-34,-60],[-19,-137],[-1,-88],[-40,-71],[31,-85],[5,-14],[-32,-94],[-69,-106],[-84,-131],[-34,-55],[-47,-115],[-51,-35],[-56,-78],[-88,-84],[-41,11],[-17,82],[-39,28],[-42,-69],[-50,-81],[-5,-104],[-44,-1],[-57,-4],[-30,-103],[-36,-66],[0,-7],[8,-142],[-57,-43],[13,-84],[15,-113],[-46,-67],[-63,-31],[-39,122],[-58,69],[-31,-22],[-42,-80],[-41,-135],[-24,-154],[-42,-42],[7,-81],[14,-192],[9,-97],[-39,-32],[-49,4],[-17,-64],[-10,-122],[-17,-90],[-52,-28],[-58,-14],[-55,-24],[-46,-20],[-30,34]],[[67874,34485],[143,-1],[128,-8],[306,-1],[279,-3]],[[68730,34472],[12,0],[112,1],[309,3],[63,1],[244,3],[129,1],[108,1],[80,1],[198,3],[72,1],[413,1],[77,0],[7,0],[300,-2],[104,-1],[76,0],[44,-1],[247,0],[115,0],[186,0],[220,-2],[170,-1],[6,0],[210,1],[59,0],[217,1],[29,0],[273,0],[69,0],[212,0],[42,0],[312,0],[200,0],[23,0],[252,0],[193,1],[32,0],[33,0],[126,0],[189,0],[46,0],[102,0],[76,0],[222,0],[59,0],[11,0],[252,-1],[84,0]],[[89671,28480],[-117,-64],[-90,-94],[-80,-119],[-67,-126],[-52,-129],[-29,-74],[-50,-95],[-45,-152],[-24,-146],[-16,-170],[7,-60],[-38,-98],[-68,-87],[-34,-38],[-9,-75],[-18,-83],[-57,16],[-53,-27],[-35,65],[-52,-55],[-23,-65],[33,-87],[-28,-54],[-84,-91],[-28,-85],[-82,-76],[-44,-60],[-15,-96],[-74,-85],[-29,-65],[-68,-5],[-64,-47],[-37,-60],[-50,-30],[-82,-100],[-67,-15],[-46,46],[-17,-65],[24,-97],[21,-67],[-19,-93],[-75,-75],[-51,-26],[-43,35],[-62,65],[-46,-63],[35,-52],[51,-93],[-46,-107],[-81,-97],[-42,-19],[-24,-124]],[[62485,42115],[712,-1],[296,2],[491,3],[45,0],[407,-4],[481,-5],[92,-1],[24,0],[814,1],[297,0],[79,0],[319,7],[396,-1]],[[68721,40212],[0,-351],[2,-467],[0,-11],[1,-371],[1,-459],[1,-164],[0,-666],[1,-158],[0,-440],[0,-220],[0,-12],[1,-285],[2,-714],[0,-28],[0,-888],[0,-290],[0,-136],[0,-80]],[[95623,42724],[-23,31],[-62,-12],[-58,-25],[-65,-5],[-36,-28],[-59,31],[-31,-29],[-51,-39],[-50,-5],[-33,-30],[-18,32],[-59,-16],[-67,-38],[-45,35],[-50,-5],[-32,-37],[-62,-10],[-23,45],[-85,-43],[-49,31],[-45,-48],[-30,-52],[-53,-23],[-26,-77],[-19,-13],[-65,21],[-53,-77],[-61,-15],[-37,-11],[16,-35],[-29,-52],[-31,-21],[-41,8],[-44,-25],[-40,-41],[-30,-2],[-55,-59]],[[49844,56767],[148,31],[45,41],[36,115],[37,17],[107,-88],[67,-157],[-50,-109],[25,-81],[-7,-102],[-35,-48],[13,-105],[-63,-20],[-48,41],[-99,39],[-91,86],[-55,162],[-30,178]],[[49567,52143],[-109,15],[-28,73],[-52,-57],[-42,16],[-61,-84],[-30,11],[-41,60],[-13,28],[-99,-46],[14,114],[7,317],[-11,262],[97,11],[33,69],[-46,79],[-94,40],[-18,144],[-33,181],[-38,40],[10,130],[-17,311],[-7,31],[-36,216],[-74,130],[-32,363],[-50,277],[-54,145],[-60,133],[-77,98],[-41,145],[-12,162],[-1,94],[-31,104],[28,127],[18,146],[-50,171],[65,9],[95,-70],[147,-132],[116,-38],[133,-91],[46,-75],[152,-32],[134,4],[51,0],[108,-22],[97,-52],[114,-20],[67,9],[84,110],[70,-106],[55,-57],[52,15],[31,22],[69,47],[65,16],[56,-76],[-4,-166],[1,-82],[45,-99],[15,4],[15,4],[39,49],[24,31],[3,55],[-57,66],[8,152],[-31,101],[-70,57],[-37,127],[41,106],[36,185],[1,8],[-21,115],[34,101],[7,111],[-25,109],[-35,147],[-9,127],[-11,94],[-55,86],[-24,111],[56,116],[452,0],[136,0],[310,-10],[316,5],[240,3],[245,-1],[120,-1],[304,1],[334,-3],[484,2],[290,0],[264,0],[569,0],[174,0],[352,1],[158,-1],[144,-1],[210,-1]],[[87908,41425],[0,-566],[0,-621],[0,-563],[87,0],[308,0],[30,0],[112,0],[136,-1],[256,1]],[[81671,21670],[-123,-58],[-145,-41],[-66,21],[77,77],[9,85],[-61,113],[-43,119],[-18,79],[29,121],[-12,67],[-15,127],[-68,62],[-48,-77],[-3,-108],[-15,-80],[-19,-86],[-2,-189],[-27,-155],[-53,1],[-56,-4],[-48,95],[-46,36],[-28,-35]],[[95944,49768],[2,107],[44,75],[27,117],[12,53],[-30,78],[70,59],[68,61],[35,-65],[55,-51],[39,3],[27,75],[22,45]],[[96654,46042],[-28,-91],[-27,-70],[-29,-98],[-17,-99]],[[95090,45407],[-17,65],[-55,84],[-14,117],[21,60],[0,109],[35,24],[43,70],[-16,76],[24,81],[-15,128],[2,14],[8,103],[7,34],[10,58],[17,109],[-9,81],[14,126],[15,123],[1,154],[41,60],[3,5],[40,214],[56,75],[10,25],[25,67],[12,125],[57,144],[-10,82],[33,72],[0,1],[4,8],[34,131],[-22,156],[7,118],[7,86],[39,62],[51,25],[62,-1],[34,20],[16,10],[36,89],[14,8],[64,33],[40,91],[59,63],[-7,88],[39,60],[-7,92],[-29,72],[-38,156],[51,111],[43,144],[25,59],[-34,122],[28,72]],[[92456,39829],[4,5],[18,23],[35,45],[8,11],[43,5],[31,11],[34,13],[9,10],[25,29],[37,23],[7,5],[-2,97],[15,35],[52,50],[1,1],[62,86],[15,17],[36,42],[61,26],[34,80],[50,10],[41,45],[2,2],[-35,86],[-56,81],[-29,69],[-42,72],[-38,80],[-21,81],[-49,7],[-28,24],[-13,75],[7,50],[-14,127],[-52,52],[-45,-12],[-3,131],[-2,149],[14,92],[59,49],[2,2],[16,111],[23,70],[-29,78],[-32,102],[56,73],[49,81],[21,61],[8,25],[3,8],[66,86],[34,138],[46,130],[49,85],[59,32]],[[93485,41165],[-1,-72],[33,-31],[16,-15],[44,13],[43,-7],[54,-48],[26,100],[19,11],[18,-130],[5,-116],[-9,-131],[-17,-119],[-26,-179],[-30,-274],[-12,-130],[-12,-212],[-9,-83],[-80,-250],[-90,-224],[-11,-69],[-56,-133],[-41,-78],[-97,-90],[-53,-82],[-58,-112],[-22,-62],[-39,-114],[8,-32],[-65,-153],[-26,-70],[-50,-87],[-62,-23],[-30,9],[11,130],[46,164],[16,107],[-18,60],[-82,31],[-45,46],[-38,-9],[-41,-55],[-27,78],[-41,77],[-28,43],[-36,13],[-37,76],[-26,30],[-39,60],[-38,44],[-21,69],[-63,42],[7,71]],[[66942,57370],[600,-2],[389,1],[78,0],[565,-1],[174,0],[353,1],[115,0],[330,0],[619,0],[221,0],[240,0],[346,0],[133,0],[336,1],[116,1],[819,0],[155,1],[487,0]],[[87908,43978],[169,112],[156,150],[16,67],[43,44],[60,-19],[86,85],[71,53],[74,65]],[[94302,49763],[135,4],[20,0],[108,3],[100,-1],[315,-5],[25,-4],[20,-3],[163,-4],[290,2],[97,2],[15,0],[184,7],[73,2],[97,2]],[[0,61717],[159,258],[61,-59],[16,-82],[-145,-171],[-49,-59],[-42,113]],[[254,62272],[188,106],[113,-30],[-30,-88],[-133,-41],[-82,9],[-56,44]],[[871,62911],[95,27],[123,-8],[58,-123],[115,-7],[127,15],[-30,-101],[-94,-56],[-65,-115],[-36,-63],[-37,-157],[-121,63],[-65,91],[57,52],[65,20],[-12,126],[-81,51],[-123,108],[24,77]],[[265,62783],[87,26],[41,-129],[-53,-73],[-92,64],[17,112]],[[1340,62602],[159,52],[159,15],[76,49],[26,203],[16,62],[73,-13],[48,-72],[-48,-131],[-5,-211],[-76,-42],[-76,-32],[-65,31],[-121,-27],[-149,-55],[-50,95],[33,76]],[[1982,62494],[29,211],[121,67],[17,68],[-43,113],[33,74],[67,-3],[106,74],[27,-91],[-5,-87],[-19,-129],[129,36],[107,21],[123,20],[4,125],[-13,97],[-25,125],[55,101],[84,-16],[43,-82],[107,-136],[71,-10],[128,8],[190,36],[23,-77],[-192,-74],[-133,-27],[-155,-139],[-31,-86],[-142,-62],[-118,-52],[-158,-29],[-68,-53],[-100,-77],[-53,-72],[-83,-8],[-116,-48],[-43,30],[33,152]],[[5847,63677],[60,97],[86,64],[109,-47],[22,-70],[-101,-102],[-101,-42],[-100,-18],[25,118]],[[7005,64033],[50,67],[54,-55],[-27,-125],[-69,30],[-8,83]],[[3451,63198],[241,69],[128,70],[153,-2],[143,63],[82,100],[6,192],[113,114],[128,84],[105,-52],[74,-139],[-55,-155],[21,-195],[110,12],[219,12],[110,25],[138,-98],[179,35],[202,-37],[-29,-82],[-168,-39],[-200,-29],[-106,-6],[-163,57],[-112,-23],[-71,12],[-177,43],[-159,33],[-93,-15],[-24,-131],[-131,46],[-161,-56],[-139,23],[-109,-24],[-125,9],[-150,-8],[20,92]],[[7446,64305],[130,118],[125,-35],[-47,-176],[-90,-12],[-92,-78],[-47,34],[21,149]],[[8023,64589],[70,256],[58,49],[151,-70],[84,133],[-51,169],[65,51],[60,-111],[16,-159],[-4,-167],[-33,-166],[-102,27],[-119,-5],[-112,-130],[-116,-22],[33,145]],[[10143,65639],[86,100],[92,10],[119,94],[79,15],[81,53],[80,87],[47,52],[-23,104],[48,52],[32,62],[27,81],[32,91],[-82,84],[-39,52],[0,76],[98,149],[135,83],[122,51],[88,-1],[51,-105],[70,-68],[64,60],[71,89],[82,-47],[35,17],[48,22],[86,-54],[-77,-65],[-44,-37],[-35,-75],[-62,-14],[-76,-115],[61,-42],[123,93],[76,34],[14,-51],[-36,-183],[-94,-39],[-68,-69],[-111,-64],[-57,-109],[-65,-102],[-67,-82],[-82,-88],[-115,-21],[-104,-2],[-72,-8],[-81,-23],[-112,-93],[-15,-57],[-97,-8],[-63,-116],[-45,17],[-74,-53],[-112,45],[-93,66],[54,52]],[[12094,66992],[119,66],[167,68],[125,30],[118,7],[111,117],[53,56],[54,-5],[-47,-122],[-125,-187],[-118,22],[-177,-65],[-239,-28],[-41,41]],[[11684,67259],[91,68],[82,-11],[216,160],[131,-7],[84,-188],[-147,-161],[-210,-82],[-81,-63],[-23,51],[-129,-36],[-59,150],[45,119]],[[8811,64588],[215,209],[76,81],[88,152],[67,55],[-17,143],[37,119],[161,198],[122,-40],[22,109],[23,143],[47,150],[93,87],[188,78],[100,-76],[112,-7],[-17,-86],[-43,-87],[12,-80],[-104,-85],[-118,-102],[-182,-117],[-42,-108],[-62,-114],[-39,-105],[-140,-89],[-66,-81],[-60,-113],[-85,1],[-138,-148],[-147,-102],[-81,-42],[-22,57]],[[5435,79692],[145,-191],[58,-167],[268,-199],[147,-57],[127,-87],[-14,-75],[-144,32],[-191,39],[-237,221],[-149,99],[-46,298],[36,87]],[[6538,85147],[40,106],[-10,183],[53,127],[116,4],[27,-133],[27,-94],[217,-86],[320,-97],[81,33],[226,163],[105,46],[128,-5],[69,-35],[81,-96],[71,-25],[42,-142],[37,-119],[134,-64],[179,-23],[80,-79],[93,-54],[334,-37],[134,-14],[224,-71],[-59,-149],[-80,-123],[-87,-31],[-121,77],[-138,-9],[-184,-114],[-88,-74],[-37,-91],[8,-95],[-63,-75],[-106,43],[-28,158],[-82,120],[-150,109],[-122,35],[-69,-5],[-36,114],[-113,144],[-207,118],[-208,80],[-153,13],[-141,-57],[-53,-54],[-131,-113],[-85,34],[-124,59],[-83,49],[-80,197],[12,152]],[[22791,77179],[96,54],[68,0],[58,-71],[-35,-90],[-114,-19],[-28,20],[-45,106]],[[10464,78724],[101,66],[182,0],[156,-32],[85,-8],[27,75],[-21,36],[109,112],[87,-16],[60,82],[52,52],[106,-65],[116,64],[82,91],[41,-132],[59,-91],[137,45],[181,-97],[-38,-107],[35,-72],[-36,-66],[51,-75],[-38,-112],[67,-88],[91,-126],[-45,-86],[-110,-48],[-57,33],[-77,-59],[-112,4],[-92,-61],[1,-122],[-95,-49],[-72,117],[-81,52],[-134,15],[-136,60],[-115,67],[-129,100],[-113,43],[-142,100],[-96,50],[-9,113],[-78,135]],[[24157,79144],[99,178],[101,-47],[-46,-87],[-58,-138],[-110,-51],[14,145]],[[14551,67879],[231,-119],[214,-89],[-39,-64],[-70,-48],[-126,51],[-135,6],[-91,100],[16,163]],[[15815,69226],[62,9],[23,-4],[-12,-116],[-96,38],[23,73]],[[15573,69288],[155,43],[-33,-123],[-117,-16],[-5,96]],[[16860,68648],[54,238],[5,153],[44,101],[100,62],[138,154],[24,-67],[24,-136],[130,8],[133,135],[29,-123],[134,-271],[120,-251],[-61,-97],[-33,3],[-124,144],[-50,164],[-116,19],[-105,55],[-54,-74],[-191,-12],[-64,-111],[-114,-188],[-23,94]],[[16322,69420],[43,99],[108,61],[151,-43],[164,109],[65,51],[110,-24],[-15,-140],[-136,-142],[-31,-98],[-113,71],[-53,-62],[37,-142],[-35,-99],[-116,58],[-70,-17],[-77,-64],[-19,165],[-13,217]],[[7801,73033],[104,48],[142,9],[9,-117],[-136,-101],[-121,63],[2,98]],[[21683,71522],[120,192],[171,158],[270,11],[102,15],[64,-86],[130,-13],[-8,-61],[-119,-99],[-218,28],[-235,12],[-84,-53],[-106,-140],[-87,36]],[[19501,71800],[104,61],[72,-33],[103,-77],[-63,-39],[-109,19],[-140,-9],[33,78]],[[8337,71928],[182,-20],[124,4],[19,-79],[-115,-89],[-92,5],[-118,179]],[[21737,73326],[77,152],[67,131],[86,120],[98,40],[106,87],[85,39],[181,-15],[57,76],[-4,222],[137,121],[53,27],[65,-20],[122,55],[-19,61],[43,68],[88,-77],[77,94],[-59,102],[-48,39],[51,90],[41,64],[83,42],[18,87],[90,95],[51,93],[106,63],[38,116],[85,21],[48,94],[83,17],[-23,142],[45,110],[50,34],[95,-2],[88,38],[16,-94],[-45,-127],[-71,-88],[-41,-94],[13,-105],[59,-32],[40,8],[38,61],[-10,61],[48,10],[66,-100],[88,38],[35,-55],[96,-37],[147,-161],[19,-100],[-59,-82],[-153,30],[-70,-67],[-136,-25],[-98,-30],[-96,19],[-41,-69],[-114,-62],[-98,-60],[39,-81],[-26,-103],[-47,-65],[13,-78],[33,-45],[64,78],[41,82],[97,-10],[84,120],[8,-53],[88,-61],[-24,-156],[124,-82],[-77,-87],[-126,-37],[47,-112],[65,-60],[136,-25],[2,-57],[-89,-126],[-57,-114],[62,-159],[-62,-79],[-135,174],[-85,28],[-28,-127],[-26,-113],[-58,-79],[-109,-31],[-112,-16],[-5,-132],[62,-43],[-18,-63],[-146,-54],[-121,-118],[-60,-80],[-67,-33],[-55,187],[-74,10],[-84,-70],[34,-103],[1,-205],[-55,-1],[-85,-61],[-69,-47],[-56,-16],[-56,-97],[-62,-50],[-40,-106],[-122,-15],[22,116],[-158,199],[-6,137],[-84,95],[-108,64],[4,242],[-63,245],[-87,51],[-91,9],[13,148]],[[39397,75304],[85,-88],[69,-130],[46,-104],[11,-48],[21,-92],[82,20],[131,-24],[117,-46],[66,18],[73,-37],[-9,-91],[41,-58],[45,-96],[78,-156],[85,-205],[7,-232],[79,-145],[-8,-79],[-48,-160],[4,-222],[71,-108],[-48,-77],[-31,-6],[-96,67],[-104,-70],[-83,-155],[-98,-92],[-67,-41],[-7,-53],[-51,-48],[-48,-59],[-61,-15],[-61,165],[-5,248],[75,319],[-46,202],[-79,328],[-12,182],[-38,302],[-28,273],[-72,188],[-84,270],[-2,155]],[[40311,70569],[106,83],[75,123],[65,105],[14,84],[-26,181],[14,111],[0,88],[66,48],[146,-38],[198,1],[34,-35],[71,-129],[35,-15],[65,-28],[70,-98],[48,-132],[-56,-8],[33,-90],[20,-53],[195,-216],[132,-246],[7,-207],[71,-16],[73,-218],[141,-178],[-103,-79],[118,-244],[79,-25],[53,-180],[-44,-145],[38,-147],[1,-248],[23,-203],[-37,-113],[-27,-59],[-121,-13],[-56,59],[-71,-12],[-52,62],[-33,63],[-95,-6],[-115,-54],[-32,-149],[-70,-3],[-101,52],[-9,101],[-37,57],[-64,72],[-97,187],[-59,110],[-29,108],[-37,112],[22,85],[-16,118],[-44,35],[-53,-22],[-56,18],[-60,62],[3,65],[-106,52],[-9,-173],[-54,28],[-29,137],[51,108],[2,105],[-60,73],[-81,6],[32,165],[22,93],[11,128],[65,131],[-52,107],[1,100],[-143,22],[-53,22],[-13,115]],[[20872,70380],[56,82],[73,122],[67,-31],[-21,-126],[-11,-108],[-22,-53],[-114,20],[-28,94]],[[19996,70868],[45,41],[61,-65],[-3,-90],[-57,-45],[-47,54],[1,105]],[[39903,72368],[109,136],[68,-3],[42,44],[89,-65],[36,-136],[57,-88],[66,77],[-47,221],[-114,129],[36,86],[108,45],[132,-49],[181,-64],[180,-69],[15,0],[190,6],[110,-149],[69,-236],[95,-51],[48,-121],[110,-101],[8,-116],[-54,-108],[-121,-72],[-112,32],[-97,-7],[-126,-123],[-105,16],[-102,-11],[-40,-5],[-174,-22],[-148,-97],[-11,-137],[-38,-84],[-4,-100],[-54,-82],[13,-66],[-30,-104],[-51,-6],[-62,13],[-30,-124],[19,-87],[-16,-133],[-80,-72],[-42,-61],[-51,-62],[-29,65],[-27,157],[74,-5],[80,208],[-51,190],[-20,229],[-11,155],[45,114],[-7,93],[48,165],[-39,47],[-70,-2],[17,125],[-67,92],[-38,293],[23,80]],[[37969,74601],[22,112],[82,37],[72,68],[-19,198],[86,-2],[102,26],[127,22],[139,-32],[84,51],[63,-104],[191,-121],[198,-137],[149,-16],[141,-98],[22,-220],[-70,-71],[47,-190],[11,-40],[102,-503],[-1,-244],[-26,-205],[104,-551],[38,-143],[29,-183],[30,-182],[12,-138],[-10,-159],[-38,-56],[25,-150],[6,-191],[1,-152],[-17,-129],[-18,-60],[-80,83],[-42,66],[-26,123],[-68,98],[-55,146],[-72,176],[-58,140],[-47,143],[-35,-24],[-80,116],[-51,62],[-93,24],[-75,133],[39,48],[27,48],[31,97],[79,150],[-93,94],[-101,68],[-30,-114],[-28,-69],[-169,-40],[-27,13],[10,168],[80,77],[2,82],[-71,7],[-34,97],[30,115],[-19,75],[-30,165],[-46,97],[-92,105],[-36,79],[-67,7],[-67,128],[-11,112],[-48,165],[-61,117],[-77,41],[-23,81],[-79,58],[9,206]],[[16124,75746],[20,127],[123,86],[194,134],[19,-71],[-179,-379],[-72,-53],[-102,-7],[-3,163]],[[9842,89135],[133,137],[294,130],[327,193],[458,327],[651,383],[562,288],[527,199],[370,107],[4,1],[510,20],[196,-65],[-111,-113],[-62,-118],[-67,-91],[22,-155],[5,-91],[-73,-67],[8,-66],[100,-172],[97,-77],[177,49],[111,-1],[201,-48],[133,33],[219,25],[115,-96],[177,18],[82,-34],[173,90],[267,-107],[55,98],[144,196],[59,121],[57,43],[127,-14],[19,-60],[108,-25],[183,45],[-85,154],[-208,102],[-225,54],[-106,-1],[-198,-89],[47,209],[-10,100],[-206,211],[-62,125],[-155,74],[-135,30],[-112,223],[39,86],[103,89],[-1,56],[-149,34],[-185,-14],[-150,74],[-256,59],[-261,60],[-98,33],[-35,192],[-123,393],[-153,286],[-183,163],[-248,141],[-499,394],[-228,179],[-41,17],[-260,106],[-164,37],[-92,59],[-102,153],[-199,130],[-256,85],[-212,6],[220,131],[234,70],[41,150],[47,177],[33,215],[-28,280],[268,-9],[358,-24],[494,51],[393,67],[244,25],[290,133],[315,235],[293,347],[83,237],[1,348],[70,238],[74,167],[179,198],[254,327],[179,198],[377,238],[265,-50],[262,-11],[423,152],[533,348],[308,281],[197,167],[424,154],[51,-110],[233,-47],[249,5],[185,47],[298,24],[235,83],[310,192],[218,227],[240,275],[86,90],[215,125],[33,-107],[198,-70],[209,-33],[27,-110],[133,17],[274,-40],[60,-134],[-11,-66],[-154,-91],[-50,-66],[-170,-39],[-24,-89],[49,-125],[172,-41],[168,30],[51,74],[-25,104],[133,103],[91,162],[180,126],[105,-37],[322,-226],[-24,-124],[32,-222],[126,10],[125,-19],[145,-82],[211,205],[200,-5],[214,13],[167,62],[169,-18],[129,-56],[185,-3],[244,-45],[178,-65],[27,-56],[-138,-97],[-4,-89],[-108,-27],[35,-127],[123,-28],[194,-34],[92,-40],[248,-30],[-33,-84],[-5,-129],[210,-9],[184,-58],[109,-48],[138,111],[104,52],[104,4],[204,35],[128,-42],[100,-79],[203,40],[185,137],[113,-24],[248,38],[252,-62],[222,-112],[234,6],[169,-136],[10,-86],[102,-18],[132,84],[216,-65],[87,-40],[88,-140],[297,-59],[176,35],[64,-99],[152,-15],[94,73],[337,0],[337,-51],[110,-36],[132,49],[209,-156],[168,-90],[231,-86],[243,-52],[98,29],[107,-25],[194,131],[161,25],[321,128],[354,44],[82,-26],[127,50],[252,-120],[225,-87],[262,-161],[43,-80],[147,-38],[200,-111],[269,-93],[252,-180],[196,-21],[185,-73],[0,-2188],[0,-5070],[0,-1],[1,-7509],[0,-2880],[0,-164],[416,-156],[56,165],[430,-239],[260,296],[545,33],[4,-65],[-106,-444],[137,-177],[307,-168],[53,-224],[52,-77],[873,-971],[95,-489],[-25,-152],[1,0],[69,5],[163,177],[357,260],[33,37],[219,13],[83,186],[19,42],[-7,343],[104,-28],[110,143],[-2,65],[-101,77],[142,78],[218,45],[200,124],[218,135],[219,-195],[15,-63],[89,-78],[78,-114],[1,-169],[-37,-101],[51,-77],[-17,-69],[60,-124],[231,-62],[34,-127],[87,-101],[76,0],[91,-178],[-19,-112],[65,-24],[-1,-84],[70,-117],[365,-248],[126,-231],[285,-342],[-73,-80],[105,-219],[149,-230],[89,-287],[185,-299],[100,-263],[90,-197],[86,-187],[170,-296],[104,-254],[-107,-229],[286,-84],[-61,-305],[-6,-32],[227,-133],[-27,-99],[59,-288],[226,22],[107,-125],[262,-190],[71,-78],[2,-2],[245,-67],[62,-54],[106,-143],[138,-54],[37,-189],[73,-25],[88,-58],[127,38],[88,-236],[-8,-146],[-64,-177],[-35,-32],[-23,-152],[34,-86],[-8,-226],[31,-138],[41,-118],[14,-174],[37,-69],[-17,-71],[-92,-145],[-57,-159],[-47,-151],[-105,-200],[-169,-211],[-96,-61],[8,-75],[-52,-43],[-46,70],[-48,60],[-47,-37],[-20,7],[-59,72],[-13,152],[-11,90],[-13,78],[-33,41],[13,91],[-14,88],[-35,53],[-32,86],[-5,54],[-60,12],[-27,-171],[1,-124],[-50,-102],[0,-93],[45,-40],[-52,-101],[-66,-15],[-94,72],[-52,64],[-91,2],[-25,29],[10,75],[5,35],[-37,60],[51,102],[-14,35],[-128,40],[-71,134],[-30,173],[7,251],[9,68],[-114,79],[-127,100],[-61,72],[-16,96],[-20,120],[-37,116],[120,93],[56,122],[-91,84],[-98,11],[-39,-139],[-66,51],[-47,148],[-38,210],[-90,-85],[-102,172],[-9,201],[-112,41],[-30,2],[-44,50],[-30,57],[-61,37],[-36,29],[0,30],[8,23],[75,155],[72,35],[93,-17],[146,26],[88,126],[70,67],[-70,141],[-12,122],[-13,105],[-210,189],[-89,261],[-40,105],[-200,73],[-76,96],[-67,-46],[-129,89],[-69,159],[49,119],[16,121],[-39,200],[-4,109],[-90,92],[-50,89],[20,168],[-43,150],[-5,11],[-125,262],[-179,242],[-26,171],[-61,90],[-78,-4],[-126,22],[-79,36],[-148,38],[-107,275],[-166,126],[-113,-12],[-36,-4],[32,-143],[17,-124],[-46,-32],[12,-176],[-125,70],[-70,12],[-91,190],[-42,-8],[-79,-16],[-94,-11],[-70,139],[-169,-31],[-110,-2],[-63,-71],[-137,-54],[-153,-23],[-95,27],[-29,-74],[8,-62],[-21,-52],[-98,3],[-14,103],[-125,82],[-48,102],[-67,65],[-82,-13],[-143,107],[-104,74],[-189,183],[-77,38],[-24,92],[-138,163],[-94,100],[3,18],[12,77],[-24,80],[-102,136],[-141,143],[-119,71],[-248,116],[-152,150],[-101,75],[-135,74],[-178,96],[-133,81],[-189,153],[-204,165],[106,147],[140,36],[-3,126],[-17,216],[-150,23],[-85,-60],[-186,-88],[-85,-39],[-59,-92],[-151,23],[-339,55],[-116,44],[-209,118],[-210,108],[-83,105],[-98,70],[-125,0],[-157,91],[-134,27],[-324,90],[-284,44],[-146,-7],[-143,-42],[-177,-19],[-318,-40],[-140,-52],[-103,-46],[-97,51],[-41,55],[-52,109],[-68,35],[-144,-50],[-72,109],[-112,58],[-89,50],[-245,45],[-25,114],[-117,61],[-42,-46],[-106,29],[-111,79],[-117,-65],[-114,-32],[-171,93],[-140,70],[-89,-42],[-97,-32],[-32,-18],[-143,-22],[-87,-62],[-104,-103],[-39,4],[-38,70],[-198,21],[-69,-97],[-135,-131],[-100,-121],[-106,-175],[33,-103],[-101,-15],[-16,-90],[70,-56],[-104,-68],[-122,-46],[-106,-42],[-100,-61],[-47,38],[14,102],[52,66],[-90,167],[-129,-13],[-136,-38],[30,83],[-84,110],[-78,-107],[-68,-80],[-139,-38],[-49,55],[-100,15],[-52,-54],[-68,56],[-89,-22],[-78,51],[-87,-57],[-44,-127],[-94,-69],[-86,129],[-89,-98],[-20,-104],[79,-51],[-19,-123],[-88,53],[-94,-53],[-13,-132],[-86,122],[-68,-18],[-74,-117],[-117,-141],[-131,-171],[-15,-81],[-55,-47],[-23,-110],[-40,2],[-43,150],[-18,66],[-74,-21],[-25,-113],[-64,-154],[-36,-26],[-90,74],[-80,-49],[22,-71],[-48,-66],[-53,-17],[-111,-27],[-144,18],[-48,5],[-115,39],[33,-204],[-204,-87],[-175,103],[-51,159],[-61,98],[19,126],[68,145],[128,90],[202,106],[168,94],[109,109],[-82,127],[-135,-92],[-173,-3],[-92,75],[-110,158],[50,144],[50,139],[35,176],[99,171],[165,217],[36,160],[13,144],[54,28],[22,208],[-19,124],[-42,140],[-54,146],[36,43],[97,69],[177,33],[149,126],[169,161],[182,134],[89,54],[54,-23],[131,-235],[76,-20],[110,-22],[76,116],[41,52],[90,62],[32,22],[-102,124],[-154,119],[-54,24],[-179,-45],[33,67],[8,66],[14,119],[-197,-27],[-98,46],[-129,-7],[-131,-72],[-100,-34],[-29,-29],[-67,-66],[-66,-147],[-40,-71],[-77,-12],[-86,-57],[-117,1],[-107,-86],[-107,-117],[-71,-96],[20,-83],[66,-149],[-11,-42],[-162,22],[-126,-117],[-86,-156],[-112,-77],[-62,-123],[26,-113],[60,-39],[-127,-92],[-30,-110],[-115,-89],[-31,-67],[-4,-70],[26,-107],[-23,-124],[-92,-153],[-19,-91],[-143,-87],[-95,13],[-37,-97],[-7,-152],[-31,-114],[-92,-71],[-76,-41],[-61,-13],[-90,20],[-118,-12],[-10,-63],[-22,-78],[-95,-6],[-69,-18],[56,-152],[-43,-65],[-102,-11],[-57,-36],[-65,-39],[-29,-110],[-81,-75],[-17,-136],[-28,-84],[-7,-94],[104,-97],[117,-18],[123,17],[88,5],[88,-141],[104,-10],[78,-84],[62,-82],[50,-78],[-91,-87],[-30,-150],[-38,-64],[-96,-42],[-34,-90],[-124,-61],[-108,7],[-52,-96],[-18,-122],[-64,-10],[-61,-100],[76,-93],[-79,-73],[-26,-138],[-38,-132],[-68,-150],[-106,-79],[-122,-74],[-92,-63],[-164,-30],[-99,46],[-134,-54],[-82,-87],[51,-94],[-32,-74],[-156,-79],[-11,-125],[-62,-83],[-136,87],[-91,32],[-5,-171],[-13,-60],[-84,-44],[-8,-159],[-163,-28],[-117,-18],[30,-142],[-70,-22],[-114,10],[-127,-85],[23,-123],[-6,-168],[8,-125],[-36,-44],[-61,-76],[-32,-97],[-64,-160],[-78,18],[-59,-13],[-108,-171],[-98,43],[-88,-68],[-35,-88],[-98,-132],[-95,68],[-108,-50],[-106,-47],[-30,-96],[100,-115],[-40,-50],[-97,8],[-61,-22],[-40,83],[-65,33],[-113,-52],[44,-146],[46,-100],[-46,-110],[-91,38],[-139,-30],[-106,10],[-34,29],[-78,-27],[-59,-76],[-46,-163],[67,-11],[113,-38],[72,-42],[80,-121],[-148,-110],[-81,-73],[-18,-133],[-33,-134],[-70,-29],[-114,29],[-13,-69],[-85,2],[-134,-16],[-176,-69],[9,-153],[-275,-229],[-123,-73],[-35,-93],[-111,-104],[-33,-6],[-24,86],[72,78],[6,181],[40,100],[-46,68],[-81,26],[-69,-95],[-79,1],[-80,-21],[-29,-135],[-64,-76],[-133,-77],[-100,-73],[-64,-133],[1,-51],[-52,-61],[-118,73],[-12,-101],[-102,-15],[-49,40],[-125,0],[-92,-123],[-155,-100],[-207,6],[-25,50],[32,105],[8,108],[83,139],[-14,111],[-80,11],[-94,-26],[-63,-114],[-37,-88],[12,-203],[-81,-150],[-77,-119],[41,-172],[88,-43],[127,-96],[23,-73],[-125,25],[-91,-50],[-101,91],[-45,23],[-86,-72],[-58,54],[-64,-68],[-26,-73],[-15,-126],[-1,-155],[-41,-77],[-59,-10],[-70,114],[-7,64],[20,205],[-52,29],[-87,-90],[-17,-62],[-107,-26],[-112,-60],[-71,44],[-43,83],[-92,-129],[-75,-77],[-94,-89],[-87,-55],[64,-64],[86,-3],[103,-119],[28,-125],[-166,57],[-150,-35],[-161,-68],[-206,26],[-209,-23],[-195,-99],[-72,-92],[-13,-113],[-93,-86],[-163,-55],[-93,6],[-104,71],[-38,129],[-37,64],[-3,90],[75,77],[109,48],[60,109],[87,232],[1,135],[125,72],[82,-74],[124,71],[76,73],[111,26],[89,107],[108,31],[220,-28],[87,-164],[76,37],[56,112],[-30,178],[163,102],[89,-15],[152,50],[-35,103],[78,90],[153,178],[68,141],[178,263],[130,203],[88,73],[62,79],[135,82],[82,111],[85,23],[233,96],[262,110],[171,22],[140,1],[-3,-147],[16,-116],[204,-43],[49,11],[46,91],[-68,82],[-50,44],[90,179],[74,250],[18,137],[145,128],[68,101],[143,95],[141,179],[261,158],[281,215],[220,196],[71,-63],[35,-31],[97,4],[79,29],[8,70],[-35,124],[6,147],[132,273],[188,285],[81,76],[130,68],[136,227],[141,136],[84,32],[-5,88],[-22,90],[23,184],[36,219],[41,419],[36,114],[68,132],[-60,115],[6,190],[53,197],[149,161],[61,85],[98,136],[65,113],[61,184],[-20,51],[-89,8],[-33,-16],[-210,-103],[-163,-104],[-184,-90],[-322,-169],[-82,10],[-89,86],[-40,158],[-42,41],[-126,63],[40,104],[-89,103],[-132,-89],[-20,-114],[9,-97],[-72,-111],[30,-132],[110,-274],[-81,-143],[-76,-33],[-163,62],[-147,343],[-162,326],[-109,114],[-99,22],[37,75],[-12,90],[-86,-4],[-32,-102],[-40,-99],[-103,-84],[-63,106],[-153,58],[-73,67],[-80,101],[59,77],[-55,145],[-177,-113],[-191,-172],[-82,-175],[-44,94],[-115,-55],[-75,-53],[-121,-84],[-104,-67],[-30,-146],[-159,-105],[-180,-113],[-44,115],[-201,-10],[-129,79],[158,77],[152,87],[53,213],[-35,278],[-95,194],[-77,153],[-46,153],[50,161],[128,179],[52,68],[78,44],[-62,143],[-90,159],[-11,93],[-143,289],[-56,134],[-30,91],[-76,169],[-128,211],[-71,14],[-38,-84],[-1,-98],[7,-97],[-25,-99],[-95,-8],[-103,1],[-63,-73],[-108,-50],[-217,-120],[-254,-67],[-280,-27],[-141,15],[-181,80],[-67,170],[27,52],[42,56],[-126,105],[-123,98],[-95,194],[-91,68],[-71,117],[-69,-5],[-185,107],[-129,160],[53,51],[49,21],[52,107],[-27,28],[-96,-20],[-86,-65],[-75,2],[-78,15],[-51,84],[47,58],[143,55],[119,141],[73,28],[-17,88],[-27,53],[9,125],[-49,144],[-21,25],[-77,90],[55,71],[68,93],[-73,63],[-57,109],[-109,37],[-53,-172],[-66,8],[-85,17],[-76,87],[6,171],[9,97],[-146,60],[-40,-6],[-80,183],[40,54],[76,36],[40,75],[-106,87],[-42,40],[-77,-31],[-68,-89],[-66,39],[-56,181],[61,221],[83,81],[-39,90],[137,67],[122,-45],[146,41],[-9,52],[-83,168],[-10,178],[73,161],[191,272],[168,276],[154,181],[40,145],[80,114],[111,52],[-24,127],[-10,103],[56,187],[114,225],[69,173],[147,171],[208,93],[127,21],[162,-76],[135,-17],[104,-138],[77,-11],[191,-186],[233,39],[120,118],[67,65],[21,98],[86,17],[114,126],[62,69],[94,176],[61,86],[-186,158],[-130,77],[107,91],[166,18],[132,-177],[160,-53],[81,-129],[273,36],[227,-10],[205,57],[105,137],[259,365],[15,144],[-120,324],[-36,129],[-19,295],[-192,234],[-76,104],[-215,48],[31,159],[71,79],[171,-98],[183,85],[178,149],[8,187],[-136,200],[-128,90],[-47,55],[-72,-28],[-102,-102],[-43,-109],[-126,-38],[-114,45],[-113,-52],[-94,-76],[-162,-32],[-114,-39],[-42,-101],[-272,-169],[-56,-97],[-26,-179],[-121,-100],[-61,197],[-19,120],[-74,81],[-82,-44],[5,-79],[-57,-76],[-37,-107],[-104,142],[-146,131],[-243,84],[-128,11],[-129,-45],[-154,26],[-143,-6],[-214,-86],[-232,-128],[-173,-30],[-258,90],[-470,113],[-372,83],[-158,129],[-61,198],[3,80],[64,105],[-22,59],[-137,139],[-100,67],[-35,70],[-155,187],[22,25],[225,-25],[137,79],[26,131],[93,77],[-82,82],[-141,32],[-137,-6],[-133,53],[-149,46],[-251,25],[-111,28],[-188,146],[-148,93],[-175,59],[-73,166]]]};

	geo_point.metro = [{"geo_id":"10180","geo_name":"Abilene, TX","pop2010":165252,"pop2015":169578,"t100":0,"lon":-99.71755,"lat":32.44977},{"geo_id":"10420","geo_name":"Akron, OH","pop2010":703200,"pop2015":704243,"t100":1,"lon":-81.34969,"lat":41.14818},{"geo_id":"10500","geo_name":"Albany, GA","pop2010":157308,"pop2015":153526,"t100":0,"lon":-84.17018,"lat":31.58657},{"geo_id":"10540","geo_name":"Albany, OR","pop2010":116672,"pop2015":120547,"t100":0,"lon":-122.53841,"lat":44.48857},{"geo_id":"10580","geo_name":"Albany-Schenectady-Troy, NY","pop2010":870716,"pop2015":881830,"t100":1,"lon":-73.9377,"lat":42.78914},{"geo_id":"10740","geo_name":"Albuquerque, NM","pop2010":887077,"pop2015":907301,"t100":1,"lon":-106.47079,"lat":35.12124},{"geo_id":"10780","geo_name":"Alexandria, LA","pop2010":153922,"pop2015":154484,"t100":0,"lon":-92.54385,"lat":31.33456},{"geo_id":"10900","geo_name":"Allentown-Bethlehem-Easton, PA-NJ","pop2010":821173,"pop2015":832327,"t100":1,"lon":-75.40179,"lat":40.78826},{"geo_id":"11020","geo_name":"Altoona, PA","pop2010":127089,"pop2015":125593,"t100":0,"lon":-78.34724,"lat":40.48341},{"geo_id":"11100","geo_name":"Amarillo, TX","pop2010":251933,"pop2015":262056,"t100":0,"lon":-101.91041,"lat":35.24882},{"geo_id":"11180","geo_name":"Ames, IA","pop2010":89542,"pop2015":96021,"t100":0,"lon":-93.46499,"lat":42.03621},{"geo_id":"11260","geo_name":"Anchorage, AK","pop2010":380821,"pop2015":399790,"t100":0,"lon":-149.54292,"lat":62.23702},{"geo_id":"11460","geo_name":"Ann Arbor, MI","pop2010":344791,"pop2015":358880,"t100":0,"lon":-83.83853,"lat":42.25311},{"geo_id":"11500","geo_name":"Anniston-Oxford-Jacksonville, AL","pop2010":118572,"pop2015":115620,"t100":0,"lon":-85.82433,"lat":33.77381},{"geo_id":"11540","geo_name":"Appleton, WI","pop2010":225666,"pop2015":233007,"t100":0,"lon":-88.37142,"lat":44.28871},{"geo_id":"11700","geo_name":"Asheville, NC","pop2010":424858,"pop2015":446840,"t100":0,"lon":-82.68533,"lat":35.60165},{"geo_id":"12020","geo_name":"Athens-Clarke County, GA","pop2010":192541,"pop2015":203189,"t100":0,"lon":-83.2169,"lat":33.95029},{"geo_id":"12060","geo_name":"Atlanta-Sandy Springs-Roswell, GA","pop2010":5286728,"pop2015":5710795,"t100":1,"lon":-84.39655,"lat":33.69587},{"geo_id":"12100","geo_name":"Atlantic City-Hammonton, NJ","pop2010":274549,"pop2015":274219,"t100":0,"lon":-74.66095,"lat":39.47771},{"geo_id":"12220","geo_name":"Auburn-Opelika, AL","pop2010":140247,"pop2015":156993,"t100":0,"lon":-85.35927,"lat":32.6077},{"geo_id":"12260","geo_name":"Augusta-Richmond County, GA-SC","pop2010":564873,"pop2015":590146,"t100":1,"lon":-81.98039,"lat":33.45706},{"geo_id":"12420","geo_name":"Austin-Round Rock, TX","pop2010":1716289,"pop2015":2000860,"t100":1,"lon":-97.655,"lat":30.26279},{"geo_id":"12540","geo_name":"Bakersfield, CA","pop2010":839631,"pop2015":882176,"t100":1,"lon":-118.72778,"lat":35.34329},{"geo_id":"12580","geo_name":"Baltimore-Columbia-Towson, MD","pop2010":2710489,"pop2015":2797407,"t100":1,"lon":-76.67215,"lat":39.38384},{"geo_id":"12620","geo_name":"Bangor, ME","pop2010":153923,"pop2015":152692,"t100":0,"lon":-68.65045,"lat":45.40154},{"geo_id":"12700","geo_name":"Barnstable Town, MA","pop2010":215888,"pop2015":214333,"t100":0,"lon":-70.29213,"lat":41.72365},{"geo_id":"12940","geo_name":"Baton Rouge, LA","pop2010":802484,"pop2015":830480,"t100":1,"lon":-91.13242,"lat":30.57093},{"geo_id":"12980","geo_name":"Battle Creek, MI","pop2010":136146,"pop2015":134314,"t100":0,"lon":-85.00494,"lat":42.24634},{"geo_id":"13020","geo_name":"Bay City, MI","pop2010":107771,"pop2015":105659,"t100":0,"lon":-83.99158,"lat":43.70139},{"geo_id":"13140","geo_name":"Beaumont-Port Arthur, TX","pop2010":403190,"pop2015":408419,"t100":0,"lon":-94.07065,"lat":30.30501},{"geo_id":"13220","geo_name":"Beckley, WV","pop2010":124898,"pop2015":122507,"t100":0,"lon":-81.16114,"lat":37.91032},{"geo_id":"13380","geo_name":"Bellingham, WA","pop2010":201140,"pop2015":212284,"t100":0,"lon":-121.71245,"lat":48.82578},{"geo_id":"13460","geo_name":"Bend-Redmond, OR","pop2010":157733,"pop2015":175268,"t100":0,"lon":-121.22767,"lat":43.91454},{"geo_id":"13740","geo_name":"Billings, MT","pop2010":158934,"pop2015":168283,"t100":0,"lon":-108.71518,"lat":45.7811},{"geo_id":"13780","geo_name":"Binghamton, NY","pop2010":251725,"pop2015":246020,"t100":0,"lon":-76.02649,"lat":42.16225},{"geo_id":"13820","geo_name":"Birmingham-Hoover, AL","pop2010":1128047,"pop2015":1145647,"t100":1,"lon":-86.81439,"lat":33.46395},{"geo_id":"13900","geo_name":"Bismarck, ND","pop2010":114778,"pop2015":129517,"t100":0,"lon":-100.99054,"lat":46.72858},{"geo_id":"13980","geo_name":"Blacksburg-Christiansburg-Radford, VA","pop2010":178237,"pop2015":181747,"t100":0,"lon":-80.53324,"lat":37.12014},{"geo_id":"14010","geo_name":"Bloomington, IL","pop2010":186133,"pop2015":189413,"t100":0,"lon":-88.86336,"lat":40.41217},{"geo_id":"14020","geo_name":"Bloomington, IN","pop2010":159549,"pop2015":165577,"t100":0,"lon":-86.67678,"lat":39.23409},{"geo_id":"14100","geo_name":"Bloomsburg-Berwick, PA","pop2010":85562,"pop2015":85229,"t100":0,"lon":-76.45701,"lat":41.03917},{"geo_id":"14260","geo_name":"Boise City, ID","pop2010":616561,"pop2015":676909,"t100":1,"lon":-116.14168,"lat":43.0153},{"geo_id":"14460","geo_name":"Boston-Cambridge-Newton, MA-NH","pop2010":4552402,"pop2015":4774321,"t100":1,"lon":-71.10341,"lat":42.55381},{"geo_id":"14500","geo_name":"Boulder, CO","pop2010":294567,"pop2015":319372,"t100":0,"lon":-105.35861,"lat":40.09339},{"geo_id":"14540","geo_name":"Bowling Green, KY","pop2010":158599,"pop2015":168436,"t100":0,"lon":-86.4092,"lat":37.04262},{"geo_id":"14740","geo_name":"Bremerton-Silverdale, WA","pop2010":251133,"pop2015":260131,"t100":0,"lon":-122.67694,"lat":47.61212},{"geo_id":"14860","geo_name":"Bridgeport-Stamford-Norwalk, CT","pop2010":916829,"pop2015":948053,"t100":1,"lon":-73.38907,"lat":41.26825},{"geo_id":"15180","geo_name":"Brownsville-Harlingen, TX","pop2010":406220,"pop2015":422156,"t100":0,"lon":-97.53328,"lat":26.12802},{"geo_id":"15260","geo_name":"Brunswick, GA","pop2010":112370,"pop2015":116003,"t100":0,"lon":-81.63289,"lat":31.31939},{"geo_id":"15380","geo_name":"Buffalo-Cheektowaga-Niagara Falls, NY","pop2010":1135509,"pop2015":1135230,"t100":1,"lon":-78.73837,"lat":42.91215},{"geo_id":"15500","geo_name":"Burlington, NC","pop2010":151131,"pop2015":158276,"t100":0,"lon":-79.39888,"lat":36.04364},{"geo_id":"15540","geo_name":"Burlington-South Burlington, VT","pop2010":211261,"pop2015":217042,"t100":0,"lon":-73.03008,"lat":44.69049},{"geo_id":"15680","geo_name":"California-Lexington Park, MD","pop2010":105151,"pop2015":111413,"t100":0,"lon":-76.60898,"lat":38.30266},{"geo_id":"15940","geo_name":"Canton-Massillon, OH","pop2010":404422,"pop2015":402976,"t100":0,"lon":-81.24983,"lat":40.71786},{"geo_id":"15980","geo_name":"Cape Coral-Fort Myers, FL","pop2010":618754,"pop2015":701982,"t100":1,"lon":-81.82069,"lat":26.57868},{"geo_id":"16020","geo_name":"Cape Girardeau, MO-IL","pop2010":96275,"pop2015":97534,"t100":0,"lon":-89.77152,"lat":37.32348},{"geo_id":"16060","geo_name":"Carbondale-Marion, IL","pop2010":126575,"pop2015":126828,"t100":0,"lon":-89.19055,"lat":37.76223},{"geo_id":"16180","geo_name":"Carson City, NV","pop2010":55274,"pop2015":54521,"t100":0,"lon":-119.74227,"lat":39.15838},{"geo_id":"16220","geo_name":"Casper, WY","pop2010":75450,"pop2015":82178,"t100":0,"lon":-106.79796,"lat":42.96244},{"geo_id":"16300","geo_name":"Cedar Rapids, IA","pop2010":257940,"pop2015":266040,"t100":0,"lon":-91.63143,"lat":42.09153},{"geo_id":"16540","geo_name":"Chambersburg-Waynesboro, PA","pop2010":149618,"pop2015":153638,"t100":0,"lon":-77.71846,"lat":39.92887},{"geo_id":"16580","geo_name":"Champaign-Urbana, IL","pop2010":231891,"pop2015":238984,"t100":0,"lon":-88.29627,"lat":40.226},{"geo_id":"16620","geo_name":"Charleston, WV","pop2010":227078,"pop2015":220614,"t100":0,"lon":-81.49495,"lat":38.27085},{"geo_id":"16700","geo_name":"Charleston-North Charleston, SC","pop2010":664607,"pop2015":744526,"t100":1,"lon":-80.04409,"lat":33.04161},{"geo_id":"16740","geo_name":"Charlotte-Concord-Gastonia, NC-SC","pop2010":2217012,"pop2015":2426363,"t100":1,"lon":-80.86895,"lat":35.18707},{"geo_id":"16820","geo_name":"Charlottesville, VA","pop2010":218705,"pop2015":229514,"t100":0,"lon":-78.57651,"lat":37.85067},{"geo_id":"16860","geo_name":"Chattanooga, TN-GA","pop2010":528143,"pop2015":547776,"t100":1,"lon":-85.35889,"lat":35.05048},{"geo_id":"16940","geo_name":"Cheyenne, WY","pop2010":91738,"pop2015":97121,"t100":0,"lon":-104.68875,"lat":41.30709},{"geo_id":"16980","geo_name":"Chicago-Naperville-Elgin, IL-IN-WI","pop2010":9461105,"pop2015":9551031,"t100":1,"lon":-87.96401,"lat":41.70346},{"geo_id":"17020","geo_name":"Chico, CA","pop2010":220000,"pop2015":225411,"t100":0,"lon":-121.59872,"lat":39.66916},{"geo_id":"17140","geo_name":"Cincinnati, OH-KY-IN","pop2010":2114580,"pop2015":2157719,"t100":1,"lon":-84.42787,"lat":39.07085},{"geo_id":"17300","geo_name":"Clarksville, TN-KY","pop2010":260625,"pop2015":281021,"t100":0,"lon":-87.56418,"lat":36.74753},{"geo_id":"17420","geo_name":"Cleveland, TN","pop2010":115788,"pop2015":120864,"t100":0,"lon":-84.66432,"lat":35.13624},{"geo_id":"17460","geo_name":"Cleveland-Elyria, OH","pop2010":2077240,"pop2015":2060810,"t100":1,"lon":-81.68392,"lat":41.37554},{"geo_id":"17660","geo_name":"Coeur d'Alene, ID","pop2010":138494,"pop2015":150346,"t100":0,"lon":-116.70065,"lat":47.67324},{"geo_id":"17780","geo_name":"College Station-Bryan, TX","pop2010":228660,"pop2015":249156,"t100":0,"lon":-96.491,"lat":30.75727},{"geo_id":"17820","geo_name":"Colorado Springs, CO","pop2010":645613,"pop2015":697856,"t100":1,"lon":-104.65854,"lat":38.84266},{"geo_id":"17860","geo_name":"Columbia, MO","pop2010":162642,"pop2015":174974,"t100":0,"lon":-92.30559,"lat":38.98807},{"geo_id":"17900","geo_name":"Columbia, SC","pop2010":767598,"pop2015":810068,"t100":1,"lon":-81.04336,"lat":34.0902},{"geo_id":"17980","geo_name":"Columbus, GA-AL","pop2010":294865,"pop2015":313749,"t100":0,"lon":-84.91344,"lat":32.44187},{"geo_id":"18020","geo_name":"Columbus, IN","pop2010":76794,"pop2015":81162,"t100":0,"lon":-85.89675,"lat":39.20913},{"geo_id":"18140","geo_name":"Columbus, OH","pop2010":1901974,"pop2015":2021632,"t100":1,"lon":-82.83849,"lat":39.96695},{"geo_id":"18580","geo_name":"Corpus Christi, TX","pop2010":428185,"pop2015":452422,"t100":0,"lon":-97.49542,"lat":27.90258},{"geo_id":"18700","geo_name":"Corvallis, OR","pop2010":85579,"pop2015":87572,"t100":0,"lon":-123.42915,"lat":44.49106},{"geo_id":"18880","geo_name":"Crestview-Fort Walton Beach-Destin, FL","pop2010":235865,"pop2015":262172,"t100":0,"lon":-86.3655,"lat":30.66548},{"geo_id":"19060","geo_name":"Cumberland, MD-WV","pop2010":103299,"pop2015":99979,"t100":0,"lon":-78.80588,"lat":39.52937},{"geo_id":"19100","geo_name":"Dallas-Fort Worth-Arlington, TX","pop2010":6426214,"pop2015":7102796,"t100":1,"lon":-97.02517,"lat":32.81818},{"geo_id":"19140","geo_name":"Dalton, GA","pop2010":142227,"pop2015":143781,"t100":0,"lon":-84.84583,"lat":34.80138},{"geo_id":"19180","geo_name":"Danville, IL","pop2010":81625,"pop2015":79282,"t100":0,"lon":-87.732,"lat":40.1818},{"geo_id":"19300","geo_name":"Daphne-Fairhope-Foley, AL","pop2010":182265,"pop2015":203709,"t100":0,"lon":-87.7227,"lat":30.72941},{"geo_id":"19340","geo_name":"Davenport-Moline-Rock Island, IA-IL","pop2010":379690,"pop2015":383606,"t100":0,"lon":-90.46853,"lat":41.39663},{"geo_id":"19380","geo_name":"Dayton, OH","pop2010":799232,"pop2015":800909,"t100":1,"lon":-84.13996,"lat":39.82953},{"geo_id":"19460","geo_name":"Decatur, AL","pop2010":153829,"pop2015":152680,"t100":0,"lon":-87.10092,"lat":34.48849},{"geo_id":"19500","geo_name":"Decatur, IL","pop2010":110768,"pop2015":107303,"t100":0,"lon":-88.96343,"lat":39.86065},{"geo_id":"19660","geo_name":"Deltona-Daytona Beach-Ormond Beach, FL","pop2010":590289,"pop2015":623279,"t100":1,"lon":-81.2182,"lat":29.16992},{"geo_id":"19740","geo_name":"Denver-Aurora-Lakewood, CO","pop2010":2543482,"pop2015":2814330,"t100":1,"lon":-104.89423,"lat":39.43424},{"geo_id":"19780","geo_name":"Des Moines-West Des Moines, IA","pop2010":569633,"pop2015":622899,"t100":1,"lon":-93.94314,"lat":41.54787},{"geo_id":"19820","geo_name":"Detroit-Warren-Dearborn, MI","pop2010":4296250,"pop2015":4302043,"t100":1,"lon":-83.23326,"lat":42.72034},{"geo_id":"20020","geo_name":"Dothan, AL","pop2010":145639,"pop2015":148171,"t100":0,"lon":-85.45507,"lat":31.25833},{"geo_id":"20100","geo_name":"Dover, DE","pop2010":162310,"pop2015":173533,"t100":0,"lon":-75.56831,"lat":39.08571},{"geo_id":"20220","geo_name":"Dubuque, IA","pop2010":93653,"pop2015":97125,"t100":0,"lon":-90.88088,"lat":42.4687},{"geo_id":"20260","geo_name":"Duluth, MN-WI","pop2010":279771,"pop2015":279601,"t100":0,"lon":-92.407,"lat":47.33344},{"geo_id":"20500","geo_name":"Durham-Chapel Hill, NC","pop2010":504357,"pop2015":552493,"t100":0,"lon":-79.10054,"lat":35.99395},{"geo_id":"20700","geo_name":"East Stroudsburg, PA","pop2010":169842,"pop2015":166397,"t100":0,"lon":-75.3433,"lat":41.05867},{"geo_id":"20740","geo_name":"Eau Claire, WI","pop2010":161151,"pop2015":165636,"t100":0,"lon":-91.28274,"lat":44.93922},{"geo_id":"20940","geo_name":"El Centro, CA","pop2010":174528,"pop2015":180191,"t100":0,"lon":-115.36272,"lat":33.04052},{"geo_id":"21060","geo_name":"Elizabethtown-Fort Knox, KY","pop2010":148338,"pop2015":148604,"t100":0,"lon":-85.97183,"lat":37.73516},{"geo_id":"21140","geo_name":"Elkhart-Goshen, IN","pop2010":197559,"pop2015":203474,"t100":0,"lon":-85.85884,"lat":41.5977},{"geo_id":"21300","geo_name":"Elmira, NY","pop2010":88830,"pop2015":87071,"t100":0,"lon":-76.76376,"lat":42.13928},{"geo_id":"21340","geo_name":"El Paso, TX","pop2010":804123,"pop2015":838972,"t100":1,"lon":-105.53863,"lat":31.51179},{"geo_id":"21500","geo_name":"Erie, PA","pop2010":280566,"pop2015":278045,"t100":0,"lon":-80.033,"lat":41.99246},{"geo_id":"21660","geo_name":"Eugene, OR","pop2010":351715,"pop2015":362895,"t100":0,"lon":-122.84544,"lat":43.93798},{"geo_id":"21780","geo_name":"Evansville, IN-KY","pop2010":311552,"pop2015":315693,"t100":0,"lon":-87.57672,"lat":37.96777},{"geo_id":"21820","geo_name":"Fairbanks, AK","pop2010":97581,"pop2015":99631,"t100":0,"lon":-146.56732,"lat":64.80709},{"geo_id":"22020","geo_name":"Fargo, ND-MN","pop2010":208777,"pop2015":233836,"t100":0,"lon":-96.9612,"lat":46.9175},{"geo_id":"22140","geo_name":"Farmington, NM","pop2010":130044,"pop2015":118737,"t100":0,"lon":-108.32042,"lat":36.50816},{"geo_id":"22180","geo_name":"Fayetteville, NC","pop2010":366383,"pop2015":376509,"t100":0,"lon":-78.97864,"lat":35.03471},{"geo_id":"22220","geo_name":"Fayetteville-Springdale-Rogers, AR-MO","pop2010":463204,"pop2015":513559,"t100":0,"lon":-94.12063,"lat":36.19539},{"geo_id":"22380","geo_name":"Flagstaff, AZ","pop2010":134421,"pop2015":139097,"t100":0,"lon":-111.77106,"lat":35.83923},{"geo_id":"22420","geo_name":"Flint, MI","pop2010":425790,"pop2015":410849,"t100":0,"lon":-83.7059,"lat":43.02244},{"geo_id":"22500","geo_name":"Florence, SC","pop2010":205566,"pop2015":206448,"t100":0,"lon":-79.80734,"lat":34.15372},{"geo_id":"22520","geo_name":"Florence-Muscle Shoals, AL","pop2010":147137,"pop2015":146950,"t100":0,"lon":-87.72068,"lat":34.80817},{"geo_id":"22540","geo_name":"Fond du Lac, WI","pop2010":101633,"pop2015":101973,"t100":0,"lon":-88.48885,"lat":43.75355},{"geo_id":"22660","geo_name":"Fort Collins, CO","pop2010":299630,"pop2015":333577,"t100":0,"lon":-105.46139,"lat":40.66641},{"geo_id":"22900","geo_name":"Fort Smith, AR-OK","pop2010":280467,"pop2015":280241,"t100":0,"lon":-94.56622,"lat":35.18734},{"geo_id":"23060","geo_name":"Fort Wayne, IN","pop2010":416257,"pop2015":429820,"t100":0,"lon":-85.21653,"lat":41.00547},{"geo_id":"23420","geo_name":"Fresno, CA","pop2010":930450,"pop2015":974861,"t100":1,"lon":-119.64919,"lat":36.75656},{"geo_id":"23460","geo_name":"Gadsden, AL","pop2010":104430,"pop2015":103057,"t100":0,"lon":-86.03653,"lat":34.04251},{"geo_id":"23540","geo_name":"Gainesville, FL","pop2010":264275,"pop2015":277163,"t100":0,"lon":-82.47234,"lat":29.6891},{"geo_id":"23580","geo_name":"Gainesville, GA","pop2010":179684,"pop2015":193535,"t100":0,"lon":-83.81975,"lat":34.32172},{"geo_id":"23900","geo_name":"Gettysburg, PA","pop2010":101407,"pop2015":102295,"t100":0,"lon":-77.22035,"lat":39.86765},{"geo_id":"24020","geo_name":"Glens Falls, NY","pop2010":128923,"pop2015":126918,"t100":0,"lon":-73.64916,"lat":43.44536},{"geo_id":"24140","geo_name":"Goldsboro, NC","pop2010":122623,"pop2015":124132,"t100":0,"lon":-77.99846,"lat":35.35835},{"geo_id":"24220","geo_name":"Grand Forks, ND-MN","pop2010":98461,"pop2015":102449,"t100":0,"lon":-96.84521,"lat":47.83617},{"geo_id":"24260","geo_name":"Grand Island, NE","pop2010":81850,"pop2015":85066,"t100":0,"lon":-98.27606,"lat":41.03386},{"geo_id":"24300","geo_name":"Grand Junction, CO","pop2010":146723,"pop2015":148513,"t100":0,"lon":-108.46866,"lat":39.01745},{"geo_id":"24340","geo_name":"Grand Rapids-Wyoming, MI","pop2010":988938,"pop2015":1038583,"t100":1,"lon":-85.48828,"lat":42.99883},{"geo_id":"24420","geo_name":"Grants Pass, OR","pop2010":82713,"pop2015":84745,"t100":0,"lon":-123.55629,"lat":42.36417},{"geo_id":"24500","geo_name":"Great Falls, MT","pop2010":81327,"pop2015":82278,"t100":0,"lon":-111.34717,"lat":47.30866},{"geo_id":"24540","geo_name":"Greeley, CO","pop2010":252825,"pop2015":285174,"t100":0,"lon":-104.39296,"lat":40.55506},{"geo_id":"24580","geo_name":"Green Bay, WI","pop2010":306241,"pop2015":316519,"t100":0,"lon":-88.07747,"lat":44.77526},{"geo_id":"24660","geo_name":"Greensboro-High Point, NC","pop2010":723801,"pop2015":752157,"t100":1,"lon":-79.79125,"lat":36.02635},{"geo_id":"24780","geo_name":"Greenville, NC","pop2010":168148,"pop2015":175842,"t100":0,"lon":-77.37159,"lat":35.59072},{"geo_id":"24860","geo_name":"Greenville-Anderson-Mauldin, SC","pop2010":824112,"pop2015":874869,"t100":1,"lon":-82.41681,"lat":34.68887},{"geo_id":"25060","geo_name":"Gulfport-Biloxi-Pascagoula, MS","pop2010":370702,"pop2015":389255,"t100":0,"lon":-89.01965,"lat":30.50053},{"geo_id":"25180","geo_name":"Hagerstown-Martinsburg, MD-WV","pop2010":251599,"pop2015":261486,"t100":0,"lon":-77.89972,"lat":39.54647},{"geo_id":"25220","geo_name":"Hammond, LA","pop2010":121097,"pop2015":128755,"t100":0,"lon":-90.40616,"lat":30.62899},{"geo_id":"25260","geo_name":"Hanford-Corcoran, CA","pop2010":152982,"pop2015":150965,"t100":0,"lon":-119.81388,"lat":36.0761},{"geo_id":"25420","geo_name":"Harrisburg-Carlisle, PA","pop2010":549475,"pop2015":565006,"t100":1,"lon":-77.09446,"lat":40.32777},{"geo_id":"25500","geo_name":"Harrisonburg, VA","pop2010":125228,"pop2015":131131,"t100":0,"lon":-78.87171,"lat":38.51161},{"geo_id":"25540","geo_name":"Hartford-West Hartford-East Hartford, CT","pop2010":1212381,"pop2015":1211324,"t100":1,"lon":-72.57895,"lat":41.73265},{"geo_id":"25620","geo_name":"Hattiesburg, MS","pop2010":142842,"pop2015":148839,"t100":0,"lon":-89.2307,"lat":31.18601},{"geo_id":"25860","geo_name":"Hickory-Lenoir-Morganton, NC","pop2010":365497,"pop2015":362510,"t100":0,"lon":-81.45716,"lat":35.81414},{"geo_id":"25940","geo_name":"Hilton Head Island-Bluffton-Beaufort, SC","pop2010":187010,"pop2015":207413,"t100":0,"lon":-80.8718,"lat":32.40671},{"geo_id":"25980","geo_name":"Hinesville, GA","pop2010":77917,"pop2015":80198,"t100":0,"lon":-81.60451,"lat":31.79805},{"geo_id":"26140","geo_name":"Homosassa Springs, FL","pop2010":141236,"pop2015":141058,"t100":0,"lon":-82.45955,"lat":28.85471},{"geo_id":"26300","geo_name":"Hot Springs, AR","pop2010":96024,"pop2015":97177,"t100":0,"lon":-93.14922,"lat":34.57692},{"geo_id":"26380","geo_name":"Houma-Thibodaux, LA","pop2010":208178,"pop2015":212297,"t100":0,"lon":-90.66204,"lat":29.46936},{"geo_id":"26420","geo_name":"Houston-The Woodlands-Sugar Land, TX","pop2010":5920416,"pop2015":6656947,"t100":1,"lon":-95.39645,"lat":29.78191},{"geo_id":"26580","geo_name":"Huntington-Ashland, WV-KY-OH","pop2010":364908,"pop2015":361580,"t100":0,"lon":-82.38323,"lat":38.37894},{"geo_id":"26620","geo_name":"Huntsville, AL","pop2010":417593,"pop2015":444752,"t100":0,"lon":-86.7352,"lat":34.78308},{"geo_id":"26820","geo_name":"Idaho Falls, ID","pop2010":133265,"pop2015":139747,"t100":0,"lon":-112.43376,"lat":43.62418},{"geo_id":"26900","geo_name":"Indianapolis-Carmel-Anderson, IN","pop2010":1887877,"pop2015":1988817,"t100":1,"lon":-86.2069,"lat":39.74684},{"geo_id":"26980","geo_name":"Iowa City, IA","pop2010":152586,"pop2015":166498,"t100":0,"lon":-91.64948,"lat":41.51124},{"geo_id":"27060","geo_name":"Ithaca, NY","pop2010":101564,"pop2015":104926,"t100":0,"lon":-76.47048,"lat":42.44869},{"geo_id":"27100","geo_name":"Jackson, MI","pop2010":160248,"pop2015":159494,"t100":0,"lon":-84.42259,"lat":42.24807},{"geo_id":"27140","geo_name":"Jackson, MS","pop2010":567122,"pop2015":578777,"t100":1,"lon":-90.22161,"lat":32.31708},{"geo_id":"27180","geo_name":"Jackson, TN","pop2010":130011,"pop2015":129682,"t100":0,"lon":-88.84671,"lat":35.60901},{"geo_id":"27260","geo_name":"Jacksonville, FL","pop2010":1345596,"pop2015":1449481,"t100":1,"lon":-81.79257,"lat":30.23654},{"geo_id":"27340","geo_name":"Jacksonville, NC","pop2010":177772,"pop2015":186311,"t100":0,"lon":-77.4262,"lat":34.72713},{"geo_id":"27500","geo_name":"Janesville-Beloit, WI","pop2010":160331,"pop2015":161448,"t100":0,"lon":-89.07155,"lat":42.67133},{"geo_id":"27620","geo_name":"Jefferson City, MO","pop2010":149807,"pop2015":151145,"t100":0,"lon":-92.09093,"lat":38.63976},{"geo_id":"27740","geo_name":"Johnson City, TN","pop2010":198716,"pop2015":200648,"t100":0,"lon":-82.33732,"lat":36.25183},{"geo_id":"27780","geo_name":"Johnstown, PA","pop2010":143679,"pop2015":136411,"t100":0,"lon":-78.72055,"lat":40.49112},{"geo_id":"27860","geo_name":"Jonesboro, AR","pop2010":121026,"pop2015":128394,"t100":0,"lon":-90.64796,"lat":35.6986},{"geo_id":"27900","geo_name":"Joplin, MO","pop2010":175518,"pop2015":177211,"t100":0,"lon":-94.33998,"lat":37.05685},{"geo_id":"27980","geo_name":"Kahului-Wailuku-Lahaina, HI","pop2010":154924,"pop2015":164726,"t100":0,"lon":-156.33971,"lat":20.79366},{"geo_id":"28020","geo_name":"Kalamazoo-Portage, MI","pop2010":326589,"pop2015":335340,"t100":0,"lon":-85.78362,"lat":42.24865},{"geo_id":"28100","geo_name":"Kankakee, IL","pop2010":113449,"pop2015":110879,"t100":0,"lon":-87.86206,"lat":41.13747},{"geo_id":"28140","geo_name":"Kansas City, MO-KS","pop2010":2009342,"pop2015":2087471,"t100":1,"lon":-94.44642,"lat":38.93678},{"geo_id":"28420","geo_name":"Kennewick-Richland, WA","pop2010":253340,"pop2015":279116,"t100":0,"lon":-119.25651,"lat":46.36383},{"geo_id":"28660","geo_name":"Killeen-Temple, TX","pop2010":405300,"pop2015":431032,"t100":0,"lon":-97.78759,"lat":31.2079},{"geo_id":"28700","geo_name":"Kingsport-Bristol-Bristol, TN-VA","pop2010":309544,"pop2015":307120,"t100":0,"lon":-82.43889,"lat":36.61129},{"geo_id":"28740","geo_name":"Kingston, NY","pop2010":182493,"pop2015":180143,"t100":0,"lon":-74.26261,"lat":41.88875},{"geo_id":"28940","geo_name":"Knoxville, TN","pop2010":837571,"pop2015":861424,"t100":1,"lon":-84.13579,"lat":36.04342},{"geo_id":"29020","geo_name":"Kokomo, IN","pop2010":82752,"pop2015":82556,"t100":0,"lon":-86.11352,"lat":40.48528},{"geo_id":"29100","geo_name":"La Crosse-Onalaska, WI-MN","pop2010":133665,"pop2015":136985,"t100":0,"lon":-91.31998,"lat":43.77975},{"geo_id":"29180","geo_name":"Lafayette, LA","pop2010":466750,"pop2015":490488,"t100":0,"lon":-92.06016,"lat":30.02104},{"geo_id":"29200","geo_name":"Lafayette-West Lafayette, IN","pop2010":201789,"pop2015":214363,"t100":0,"lon":-86.92749,"lat":40.51508},{"geo_id":"29340","geo_name":"Lake Charles, LA","pop2010":199607,"pop2015":205605,"t100":0,"lon":-93.25771,"lat":30.01688},{"geo_id":"29420","geo_name":"Lake Havasu City-Kingman, AZ","pop2010":200186,"pop2015":204737,"t100":0,"lon":-113.75959,"lat":35.70574},{"geo_id":"29460","geo_name":"Lakeland-Winter Haven, FL","pop2010":602095,"pop2015":650092,"t100":1,"lon":-81.69913,"lat":27.95028},{"geo_id":"29540","geo_name":"Lancaster, PA","pop2010":519445,"pop2015":536624,"t100":0,"lon":-76.24453,"lat":40.04013},{"geo_id":"29620","geo_name":"Lansing-East Lansing, MI","pop2010":464036,"pop2015":472276,"t100":0,"lon":-84.6075,"lat":42.71373},{"geo_id":"29700","geo_name":"Laredo, TX","pop2010":250304,"pop2015":269721,"t100":0,"lon":-99.33314,"lat":27.76193},{"geo_id":"29740","geo_name":"Las Cruces, NM","pop2010":209233,"pop2015":214295,"t100":0,"lon":-106.83241,"lat":32.35177},{"geo_id":"29820","geo_name":"Las Vegas-Henderson-Paradise, NV","pop2010":1951269,"pop2015":2114801,"t100":1,"lon":-115.0156,"lat":36.21495},{"geo_id":"29940","geo_name":"Lawrence, KS","pop2010":110826,"pop2015":118053,"t100":0,"lon":-95.29067,"lat":38.88222},{"geo_id":"30020","geo_name":"Lawton, OK","pop2010":130291,"pop2015":130644,"t100":0,"lon":-98.43387,"lat":34.52534},{"geo_id":"30140","geo_name":"Lebanon, PA","pop2010":133568,"pop2015":137067,"t100":0,"lon":-76.45652,"lat":40.3668},{"geo_id":"30300","geo_name":"Lewiston, ID-WA","pop2010":60888,"pop2015":62153,"t100":0,"lon":-116.94046,"lat":46.26696},{"geo_id":"30340","geo_name":"Lewiston-Auburn, ME","pop2010":107702,"pop2015":107233,"t100":0,"lon":-70.20295,"lat":44.16639},{"geo_id":"30460","geo_name":"Lexington-Fayette, KY","pop2010":472099,"pop2015":500535,"t100":0,"lon":-84.43138,"lat":38.09248},{"geo_id":"30620","geo_name":"Lima, OH","pop2010":106331,"pop2015":104425,"t100":0,"lon":-84.11239,"lat":40.76955},{"geo_id":"30700","geo_name":"Lincoln, NE","pop2010":302157,"pop2015":323578,"t100":0,"lon":-96.87077,"lat":40.8199},{"geo_id":"30780","geo_name":"Little Rock-North Little Rock-Conway, AR","pop2010":699757,"pop2015":731612,"t100":1,"lon":-92.39605,"lat":34.75591},{"geo_id":"30860","geo_name":"Logan, UT-ID","pop2010":125442,"pop2015":133857,"t100":0,"lon":-111.76887,"lat":41.88691},{"geo_id":"30980","geo_name":"Longview, TX","pop2010":214369,"pop2015":217781,"t100":0,"lon":-94.829,"lat":32.37314},{"geo_id":"31020","geo_name":"Longview, WA","pop2010":102410,"pop2015":103468,"t100":0,"lon":-122.67952,"lat":46.19303},{"geo_id":"31080","geo_name":"Los Angeles-Long Beach-Anaheim, CA","pop2010":12828837,"pop2015":13340068,"t100":1,"lon":-118.13882,"lat":34.24737},{"geo_id":"31140","geo_name":"Louisville/Jefferson County, KY-IN","pop2010":1235708,"pop2015":1278413,"t100":1,"lon":-85.66996,"lat":38.33707},{"geo_id":"31180","geo_name":"Lubbock, TX","pop2010":290805,"pop2015":311154,"t100":0,"lon":-101.64478,"lat":33.46829},{"geo_id":"31340","geo_name":"Lynchburg, VA","pop2010":246412,"pop2015":259950,"t100":0,"lon":-79.22129,"lat":37.3664},{"geo_id":"31420","geo_name":"Macon, GA","pop2010":232293,"pop2015":230096,"t100":0,"lon":-83.7131,"lat":32.86046},{"geo_id":"31460","geo_name":"Madera, CA","pop2010":150865,"pop2015":154998,"t100":0,"lon":-119.75983,"lat":37.21764},{"geo_id":"31540","geo_name":"Madison, WI","pop2010":605435,"pop2015":641385,"t100":1,"lon":-89.59095,"lat":43.07942},{"geo_id":"31700","geo_name":"Manchester-Nashua, NH","pop2010":400721,"pop2015":406678,"t100":0,"lon":-71.72087,"lat":42.91739},{"geo_id":"31740","geo_name":"Manhattan, KS","pop2010":92719,"pop2015":98545,"t100":0,"lon":-96.5088,"lat":39.34102},{"geo_id":"31860","geo_name":"Mankato-North Mankato, MN","pop2010":96740,"pop2015":99134,"t100":0,"lon":-94.13538,"lat":44.15421},{"geo_id":"31900","geo_name":"Mansfield, OH","pop2010":124475,"pop2015":121707,"t100":0,"lon":-82.54248,"lat":40.77305},{"geo_id":"32580","geo_name":"McAllen-Edinburg-Mission, TX","pop2010":774769,"pop2015":842304,"t100":1,"lon":-98.18056,"lat":26.39641},{"geo_id":"32780","geo_name":"Medford, OR","pop2010":203206,"pop2015":212567,"t100":0,"lon":-122.72914,"lat":42.43138},{"geo_id":"32820","geo_name":"Memphis, TN-MS-AR","pop2010":1324829,"pop2015":1344127,"t100":1,"lon":-89.81524,"lat":35.00759},{"geo_id":"32900","geo_name":"Merced, CA","pop2010":255793,"pop2015":268455,"t100":0,"lon":-120.71372,"lat":37.19286},{"geo_id":"33100","geo_name":"Miami-Fort Lauderdale-West Palm Beach, FL","pop2010":5564635,"pop2015":6012331,"t100":1,"lon":-80.50589,"lat":26.16073},{"geo_id":"33140","geo_name":"Michigan City-La Porte, IN","pop2010":111467,"pop2015":110884,"t100":0,"lon":-86.73759,"lat":41.54714},{"geo_id":"33220","geo_name":"Midland, MI","pop2010":83629,"pop2015":83632,"t100":0,"lon":-84.38804,"lat":43.64331},{"geo_id":"33260","geo_name":"Midland, TX","pop2010":141671,"pop2015":166718,"t100":0,"lon":-101.99107,"lat":32.08965},{"geo_id":"33340","geo_name":"Milwaukee-Waukesha-West Allis, WI","pop2010":1555908,"pop2015":1575747,"t100":1,"lon":-88.17343,"lat":43.17734},{"geo_id":"33460","geo_name":"Minneapolis-St. Paul-Bloomington, MN-WI","pop2010":3348859,"pop2015":3524583,"t100":1,"lon":-93.34635,"lat":45.06567},{"geo_id":"33540","geo_name":"Missoula, MT","pop2010":109299,"pop2015":114181,"t100":0,"lon":-113.9216,"lat":47.03746},{"geo_id":"33660","geo_name":"Mobile, AL","pop2010":412992,"pop2015":415395,"t100":0,"lon":-88.20707,"lat":30.79443},{"geo_id":"33700","geo_name":"Modesto, CA","pop2010":514453,"pop2015":538388,"t100":0,"lon":-120.99523,"lat":37.55809},{"geo_id":"33740","geo_name":"Monroe, LA","pop2010":176441,"pop2015":179238,"t100":0,"lon":-92.28789,"lat":32.68306},{"geo_id":"33780","geo_name":"Monroe, MI","pop2010":152021,"pop2015":149568,"t100":0,"lon":-83.53736,"lat":41.92845},{"geo_id":"33860","geo_name":"Montgomery, AL","pop2010":374536,"pop2015":373792,"t100":0,"lon":-86.40146,"lat":32.36321},{"geo_id":"34060","geo_name":"Morgantown, WV","pop2010":129709,"pop2015":138176,"t100":0,"lon":-79.80347,"lat":39.52639},{"geo_id":"34100","geo_name":"Morristown, TN","pop2010":113951,"pop2015":116642,"t100":0,"lon":-83.38375,"lat":36.10786},{"geo_id":"34580","geo_name":"Mount Vernon-Anacortes, WA","pop2010":116901,"pop2015":121846,"t100":0,"lon":-121.72245,"lat":48.47816},{"geo_id":"34620","geo_name":"Muncie, IN","pop2010":117671,"pop2015":116852,"t100":0,"lon":-85.39733,"lat":40.22787},{"geo_id":"34740","geo_name":"Muskegon, MI","pop2010":172188,"pop2015":172790,"t100":0,"lon":-86.15198,"lat":43.29138},{"geo_id":"34820","geo_name":"Myrtle Beach-Conway-North Myrtle Beach, SC-NC","pop2010":376722,"pop2015":431964,"t100":0,"lon":-78.66224,"lat":33.98761},{"geo_id":"34900","geo_name":"Napa, CA","pop2010":136484,"pop2015":142456,"t100":0,"lon":-122.33244,"lat":38.5107},{"geo_id":"34940","geo_name":"Naples-Immokalee-Marco Island, FL","pop2010":321520,"pop2015":357305,"t100":0,"lon":-81.3445,"lat":26.11693},{"geo_id":"34980","geo_name":"Nashville-Davidson--Murfreesboro--Franklin, TN","pop2010":1670890,"pop2015":1830345,"t100":1,"lon":-86.72491,"lat":36.08809},{"geo_id":"35100","geo_name":"New Bern, NC","pop2010":126802,"pop2015":126245,"t100":0,"lon":-77.07821,"lat":35.09379},{"geo_id":"35300","geo_name":"New Haven-Milford, CT","pop2010":862477,"pop2015":859470,"t100":1,"lon":-72.93774,"lat":41.41204},{"geo_id":"35380","geo_name":"New Orleans-Metairie, LA","pop2010":1189866,"pop2015":1262888,"t100":1,"lon":-89.9602,"lat":29.91839},{"geo_id":"35620","geo_name":"New York-Newark-Jersey City, NY-NJ-PA","pop2010":19567410,"pop2015":20182305,"t100":1,"lon":-74.08915,"lat":40.9223},{"geo_id":"35660","geo_name":"Niles-Benton Harbor, MI","pop2010":156813,"pop2015":154636,"t100":0,"lon":-86.41253,"lat":41.95469},{"geo_id":"35840","geo_name":"North Port-Sarasota-Bradenton, FL","pop2010":702281,"pop2015":768918,"t100":1,"lon":-82.32237,"lat":27.34782},{"geo_id":"35980","geo_name":"Norwich-New London, CT","pop2010":274055,"pop2015":271863,"t100":0,"lon":-72.10294,"lat":41.48762},{"geo_id":"36100","geo_name":"Ocala, FL","pop2010":331298,"pop2015":343254,"t100":0,"lon":-82.05831,"lat":29.20763},{"geo_id":"36140","geo_name":"Ocean City, NJ","pop2010":97265,"pop2015":94727,"t100":0,"lon":-74.80016,"lat":39.14823},{"geo_id":"36220","geo_name":"Odessa, TX","pop2010":137130,"pop2015":159436,"t100":0,"lon":-102.54294,"lat":31.86899},{"geo_id":"36260","geo_name":"Ogden-Clearfield, UT","pop2010":597159,"pop2015":642850,"t100":1,"lon":-112.81807,"lat":41.4327},{"geo_id":"36420","geo_name":"Oklahoma City, OK","pop2010":1252987,"pop2015":1358452,"t100":1,"lon":-97.50489,"lat":35.42866},{"geo_id":"36500","geo_name":"Olympia-Tumwater, WA","pop2010":252264,"pop2015":269536,"t100":0,"lon":-122.82981,"lat":46.92867},{"geo_id":"36540","geo_name":"Omaha-Council Bluffs, NE-IA","pop2010":865350,"pop2015":915312,"t100":1,"lon":-95.99977,"lat":41.29036},{"geo_id":"36740","geo_name":"Orlando-Kissimmee-Sanford, FL","pop2010":2134411,"pop2015":2387138,"t100":1,"lon":-81.36358,"lat":28.43351},{"geo_id":"36780","geo_name":"Oshkosh-Neenah, WI","pop2010":166994,"pop2015":169546,"t100":0,"lon":-88.64477,"lat":44.06887},{"geo_id":"36980","geo_name":"Owensboro, KY","pop2010":114752,"pop2015":117463,"t100":0,"lon":-87.05898,"lat":37.69922},{"geo_id":"37100","geo_name":"Oxnard-Thousand Oaks-Ventura, CA","pop2010":823318,"pop2015":850536,"t100":1,"lon":-119.0789,"lat":34.47314},{"geo_id":"37340","geo_name":"Palm Bay-Melbourne-Titusville, FL","pop2010":543376,"pop2015":568088,"t100":1,"lon":-80.73251,"lat":28.29376},{"geo_id":"37460","geo_name":"Panama City, FL","pop2010":184715,"pop2015":197506,"t100":0,"lon":-85.46651,"lat":30.14391},{"geo_id":"37620","geo_name":"Parkersburg-Vienna, WV","pop2010":92673,"pop2015":92332,"t100":0,"lon":-81.46352,"lat":39.14486},{"geo_id":"37860","geo_name":"Pensacola-Ferry Pass-Brent, FL","pop2010":448991,"pop2015":478043,"t100":0,"lon":-87.15658,"lat":30.68793},{"geo_id":"37900","geo_name":"Peoria, IL","pop2010":379186,"pop2015":378018,"t100":0,"lon":-89.51588,"lat":40.78894},{"geo_id":"37980","geo_name":"Philadelphia-Camden-Wilmington, PA-NJ-DE-MD","pop2010":5965343,"pop2015":6069875,"t100":1,"lon":-75.30322,"lat":39.9046},{"geo_id":"38060","geo_name":"Phoenix-Mesa-Scottsdale, AZ","pop2010":4192887,"pop2015":4574531,"t100":1,"lon":-112.07073,"lat":33.18583},{"geo_id":"38220","geo_name":"Pine Bluff, AR","pop2010":100258,"pop2015":93696,"t100":0,"lon":-91.94763,"lat":34.07777},{"geo_id":"38300","geo_name":"Pittsburgh, PA","pop2010":2356285,"pop2015":2353045,"t100":1,"lon":-79.83087,"lat":40.43941},{"geo_id":"38340","geo_name":"Pittsfield, MA","pop2010":131219,"pop2015":127828,"t100":0,"lon":-73.20619,"lat":42.37112},{"geo_id":"38540","geo_name":"Pocatello, ID","pop2010":82839,"pop2015":83744,"t100":0,"lon":-112.22598,"lat":42.66913},{"geo_id":"38860","geo_name":"Portland-South Portland, ME","pop2010":514098,"pop2015":526295,"t100":0,"lon":-70.46948,"lat":43.69402},{"geo_id":"38900","geo_name":"Portland-Vancouver-Hillsboro, OR-WA","pop2010":2226009,"pop2015":2389228,"t100":1,"lon":-122.47825,"lat":45.59765},{"geo_id":"38940","geo_name":"Port St. Lucie, FL","pop2010":424107,"pop2015":454846,"t100":0,"lon":-80.44979,"lat":27.21985},{"geo_id":"39140","geo_name":"Prescott, AZ","pop2010":211033,"pop2015":222255,"t100":0,"lon":-112.55481,"lat":34.59954},{"geo_id":"39300","geo_name":"Providence-Warwick, RI-MA","pop2010":1600852,"pop2015":1613070,"t100":1,"lon":-71.3998,"lat":41.72421},{"geo_id":"39340","geo_name":"Provo-Orem, UT","pop2010":526810,"pop2015":585799,"t100":1,"lon":-112.35358,"lat":39.86421},{"geo_id":"39380","geo_name":"Pueblo, CO","pop2010":159063,"pop2015":163591,"t100":0,"lon":-104.51274,"lat":38.17359},{"geo_id":"39460","geo_name":"Punta Gorda, FL","pop2010":159978,"pop2015":173115,"t100":0,"lon":-81.91395,"lat":26.90506},{"geo_id":"39540","geo_name":"Racine, WI","pop2010":195408,"pop2015":195080,"t100":0,"lon":-88.06112,"lat":42.74731},{"geo_id":"39580","geo_name":"Raleigh, NC","pop2010":1130490,"pop2015":1273568,"t100":1,"lon":-78.4617,"lat":35.75394},{"geo_id":"39660","geo_name":"Rapid City, SD","pop2010":134598,"pop2015":144134,"t100":0,"lon":-102.89974,"lat":44.1917},{"geo_id":"39740","geo_name":"Reading, PA","pop2010":411442,"pop2015":415271,"t100":0,"lon":-75.92679,"lat":40.41423},{"geo_id":"39820","geo_name":"Redding, CA","pop2010":177223,"pop2015":179533,"t100":0,"lon":-122.04231,"lat":40.76374},{"geo_id":"39900","geo_name":"Reno, NV","pop2010":425417,"pop2015":450890,"t100":0,"lon":-119.65748,"lat":40.61822},{"geo_id":"40060","geo_name":"Richmond, VA","pop2010":1208101,"pop2015":1271334,"t100":1,"lon":-77.47248,"lat":37.46045},{"geo_id":"40140","geo_name":"Riverside-San Bernardino-Ontario, CA","pop2010":4224851,"pop2015":4489159,"t100":1,"lon":-116.12824,"lat":34.55222},{"geo_id":"40220","geo_name":"Roanoke, VA","pop2010":308707,"pop2015":314560,"t100":0,"lon":-79.94608,"lat":37.29035},{"geo_id":"40340","geo_name":"Rochester, MN","pop2010":206877,"pop2015":213873,"t100":0,"lon":-92.3378,"lat":43.9561},{"geo_id":"40380","geo_name":"Rochester, NY","pop2010":1079671,"pop2015":1081954,"t100":1,"lon":-77.50946,"lat":42.96878},{"geo_id":"40420","geo_name":"Rockford, IL","pop2010":349431,"pop2015":340663,"t100":0,"lon":-89.04127,"lat":42.33339},{"geo_id":"40580","geo_name":"Rocky Mount, NC","pop2010":152392,"pop2015":148069,"t100":0,"lon":-77.79555,"lat":35.94072},{"geo_id":"40660","geo_name":"Rome, GA","pop2010":96317,"pop2015":96504,"t100":0,"lon":-85.21224,"lat":34.27468},{"geo_id":"40900","geo_name":"Sacramento--Roseville--Arden-Arcade, CA","pop2010":2149127,"pop2015":2274194,"t100":1,"lon":-120.99846,"lat":38.78115},{"geo_id":"40980","geo_name":"Saginaw, MI","pop2010":200169,"pop2015":193307,"t100":0,"lon":-84.05277,"lat":43.33025},{"geo_id":"41060","geo_name":"St. Cloud, MN","pop2010":189093,"pop2015":194418,"t100":0,"lon":-94.47322,"lat":45.58632},{"geo_id":"41100","geo_name":"St. George, UT","pop2010":138115,"pop2015":155602,"t100":0,"lon":-113.50636,"lat":37.28135},{"geo_id":"41140","geo_name":"St. Joseph, MO-KS","pop2010":127329,"pop2015":126880,"t100":0,"lon":-94.78567,"lat":39.83479},{"geo_id":"41180","geo_name":"St. Louis, MO-IL","pop2010":2787701,"pop2015":2811588,"t100":1,"lon":-90.34993,"lat":38.73358},{"geo_id":"41420","geo_name":"Salem, OR","pop2010":390738,"pop2015":410091,"t100":0,"lon":-122.89636,"lat":44.90342},{"geo_id":"41500","geo_name":"Salinas, CA","pop2010":415057,"pop2015":433898,"t100":0,"lon":-121.23989,"lat":36.21784},{"geo_id":"41540","geo_name":"Salisbury, MD-DE","pop2010":373802,"pop2015":395300,"t100":0,"lon":-75.46814,"lat":38.41768},{"geo_id":"41620","geo_name":"Salt Lake City, UT","pop2010":1087873,"pop2015":1170266,"t100":1,"lon":-113.0109,"lat":40.4709},{"geo_id":"41660","geo_name":"San Angelo, TX","pop2010":111823,"pop2015":119659,"t100":0,"lon":-100.6719,"lat":31.36269},{"geo_id":"41700","geo_name":"San Antonio-New Braunfels, TX","pop2010":2142508,"pop2015":2384075,"t100":1,"lon":-98.60154,"lat":29.42828},{"geo_id":"41740","geo_name":"San Diego-Carlsbad, CA","pop2010":3095313,"pop2015":3299521,"t100":1,"lon":-116.73186,"lat":33.03348},{"geo_id":"41860","geo_name":"San Francisco-Oakland-Hayward, CA","pop2010":4335391,"pop2015":4656132,"t100":1,"lon":-122.01491,"lat":37.70206},{"geo_id":"41940","geo_name":"San Jose-Sunnyvale-Santa Clara, CA","pop2010":1836911,"pop2015":1976836,"t100":1,"lon":-121.37455,"lat":36.90902},{"geo_id":"42020","geo_name":"San Luis Obispo-Paso Robles-Arroyo Grande, CA","pop2010":269637,"pop2015":281401,"t100":0,"lon":-120.40392,"lat":35.38755},{"geo_id":"42100","geo_name":"Santa Cruz-Watsonville, CA","pop2010":262382,"pop2015":274146,"t100":0,"lon":-122.00986,"lat":37.05765},{"geo_id":"42140","geo_name":"Santa Fe, NM","pop2010":144170,"pop2015":148686,"t100":0,"lon":-105.97598,"lat":35.50731},{"geo_id":"42200","geo_name":"Santa Maria-Santa Barbara, CA","pop2010":423895,"pop2015":444769,"t100":0,"lon":-120.02186,"lat":34.72473},{"geo_id":"42220","geo_name":"Santa Rosa, CA","pop2010":483878,"pop2015":502146,"t100":0,"lon":-122.8896,"lat":38.52979},{"geo_id":"42340","geo_name":"Savannah, GA","pop2010":347611,"pop2015":379199,"t100":0,"lon":-81.30163,"lat":32.13123},{"geo_id":"42540","geo_name":"Scranton--Wilkes-Barre--Hazleton, PA","pop2010":563631,"pop2015":558166,"t100":1,"lon":-75.89452,"lat":41.32314},{"geo_id":"42660","geo_name":"Seattle-Tacoma-Bellevue, WA","pop2010":3439809,"pop2015":3733580,"t100":1,"lon":-121.86564,"lat":47.55345},{"geo_id":"42680","geo_name":"Sebastian-Vero Beach, FL","pop2010":138028,"pop2015":147919,"t100":0,"lon":-80.60667,"lat":27.69335},{"geo_id":"42700","geo_name":"Sebring, FL","pop2010":98786,"pop2015":99491,"t100":0,"lon":-81.344,"lat":27.34372},{"geo_id":"43100","geo_name":"Sheboygan, WI","pop2010":115507,"pop2015":115569,"t100":0,"lon":-87.94566,"lat":43.72109},{"geo_id":"43300","geo_name":"Sherman-Denison, TX","pop2010":120877,"pop2015":125467,"t100":0,"lon":-96.67726,"lat":33.62699},{"geo_id":"43340","geo_name":"Shreveport-Bossier City, LA","pop2010":439811,"pop2015":443708,"t100":0,"lon":-93.66922,"lat":32.48892},{"geo_id":"43420","geo_name":"Sierra Vista-Douglas, AZ","pop2010":131346,"pop2015":126427,"t100":0,"lon":-109.75189,"lat":31.8791},{"geo_id":"43580","geo_name":"Sioux City, IA-NE-SD","pop2010":168563,"pop2015":169069,"t100":0,"lon":-96.37304,"lat":42.57915},{"geo_id":"43620","geo_name":"Sioux Falls, SD","pop2010":228261,"pop2015":251854,"t100":0,"lon":-96.98928,"lat":43.49943},{"geo_id":"43780","geo_name":"South Bend-Mishawaka, IN-MI","pop2010":319224,"pop2015":320098,"t100":0,"lon":-86.13148,"lat":41.77501},{"geo_id":"43900","geo_name":"Spartanburg, SC","pop2010":313268,"pop2015":325079,"t100":0,"lon":-81.84878,"lat":34.83813},{"geo_id":"44060","geo_name":"Spokane-Spokane Valley, WA","pop2010":527753,"pop2015":547824,"t100":1,"lon":-117.57219,"lat":48.19339},{"geo_id":"44100","geo_name":"Springfield, IL","pop2010":210170,"pop2015":211156,"t100":0,"lon":-89.69797,"lat":39.82868},{"geo_id":"44140","geo_name":"Springfield, MA","pop2010":621570,"pop2015":631982,"t100":1,"lon":-72.64483,"lat":42.22917},{"geo_id":"44180","geo_name":"Springfield, MO","pop2010":436712,"pop2015":456456,"t100":0,"lon":-93.17545,"lat":37.36415},{"geo_id":"44220","geo_name":"Springfield, OH","pop2010":138333,"pop2015":135959,"t100":0,"lon":-83.78444,"lat":39.91886},{"geo_id":"44300","geo_name":"State College, PA","pop2010":153990,"pop2015":160580,"t100":0,"lon":-77.81847,"lat":40.91898},{"geo_id":"44420","geo_name":"Staunton-Waynesboro, VA","pop2010":118502,"pop2015":120221,"t100":0,"lon":-79.1275,"lat":38.16498},{"geo_id":"44700","geo_name":"Stockton-Lodi, CA","pop2010":685306,"pop2015":726106,"t100":1,"lon":-121.27231,"lat":37.93234},{"geo_id":"44940","geo_name":"Sumter, SC","pop2010":107456,"pop2015":107480,"t100":0,"lon":-80.38,"lat":33.9154},{"geo_id":"45060","geo_name":"Syracuse, NY","pop2010":662577,"pop2015":660458,"t100":1,"lon":-76.03377,"lat":43.15681},{"geo_id":"45220","geo_name":"Tallahassee, FL","pop2010":367413,"pop2015":377924,"t100":0,"lon":-84.28871,"lat":30.40552},{"geo_id":"45300","geo_name":"Tampa-St. Petersburg-Clearwater, FL","pop2010":2783243,"pop2015":2975225,"t100":1,"lon":-82.4056,"lat":28.15434},{"geo_id":"45460","geo_name":"Terre Haute, IN","pop2010":172425,"pop2015":171019,"t100":0,"lon":-87.34376,"lat":39.39619},{"geo_id":"45500","geo_name":"Texarkana, TX-AR","pop2010":149198,"pop2015":149769,"t100":0,"lon":-94.20917,"lat":33.47064},{"geo_id":"45540","geo_name":"The Villages, FL","pop2010":93420,"pop2015":118891,"t100":0,"lon":-82.0795,"lat":28.70466},{"geo_id":"45780","geo_name":"Toledo, OH","pop2010":610001,"pop2015":605956,"t100":1,"lon":-83.78038,"lat":41.49856},{"geo_id":"45820","geo_name":"Topeka, KS","pop2010":233870,"pop2015":233791,"t100":0,"lon":-95.80212,"lat":39.04378},{"geo_id":"45940","geo_name":"Trenton, NJ","pop2010":366513,"pop2015":371398,"t100":0,"lon":-74.69956,"lat":40.2823},{"geo_id":"46060","geo_name":"Tucson, AZ","pop2010":980263,"pop2015":1010025,"t100":1,"lon":-111.78996,"lat":32.09743},{"geo_id":"46140","geo_name":"Tulsa, OK","pop2010":937478,"pop2015":981005,"t100":1,"lon":-96.16542,"lat":36.24962},{"geo_id":"46220","geo_name":"Tuscaloosa, AL","pop2010":230162,"pop2015":239908,"t100":0,"lon":-87.72047,"lat":33.16593},{"geo_id":"46340","geo_name":"Tyler, TX","pop2010":209714,"pop2015":222936,"t100":0,"lon":-95.26912,"lat":32.37421},{"geo_id":"46520","geo_name":"Urban Honolulu, HI","pop2010":953207,"pop2015":998714,"t100":1,"lon":-157.97572,"lat":21.4604},{"geo_id":"46540","geo_name":"Utica-Rome, NY","pop2010":299397,"pop2015":295600,"t100":0,"lon":-75.1761,"lat":43.33565},{"geo_id":"46660","geo_name":"Valdosta, GA","pop2010":139588,"pop2015":142875,"t100":0,"lon":-83.23649,"lat":30.82865},{"geo_id":"46700","geo_name":"Vallejo-Fairfield, CA","pop2010":413344,"pop2015":436092,"t100":0,"lon":-121.9384,"lat":38.26951},{"geo_id":"47020","geo_name":"Victoria, TX","pop2010":94003,"pop2015":99913,"t100":0,"lon":-97.19736,"lat":28.72709},{"geo_id":"47220","geo_name":"Vineland-Bridgeton, NJ","pop2010":156898,"pop2015":155854,"t100":0,"lon":-75.1098,"lat":39.37245},{"geo_id":"47260","geo_name":"Virginia Beach-Norfolk-Newport News, VA-NC","pop2010":1676822,"pop2015":1724876,"t100":1,"lon":-76.4147,"lat":36.65574},{"geo_id":"47300","geo_name":"Visalia-Porterville, CA","pop2010":442179,"pop2015":459863,"t100":0,"lon":-118.79931,"lat":36.22057},{"geo_id":"47380","geo_name":"Waco, TX","pop2010":252772,"pop2015":262813,"t100":0,"lon":-97.09008,"lat":31.42647},{"geo_id":"47460","geo_name":"Walla Walla, WA","pop2010":62859,"pop2015":64282,"t100":0,"lon":-118.25201,"lat":46.25748},{"geo_id":"47580","geo_name":"Warner Robins, GA","pop2010":179605,"pop2015":188149,"t100":0,"lon":-83.63997,"lat":32.40932},{"geo_id":"47900","geo_name":"Washington-Arlington-Alexandria, DC-VA-MD-WV","pop2010":5636232,"pop2015":6097684,"t100":1,"lon":-77.47239,"lat":38.83189},{"geo_id":"47940","geo_name":"Waterloo-Cedar Falls, IA","pop2010":167819,"pop2015":170612,"t100":0,"lon":-92.46851,"lat":42.53627},{"geo_id":"48060","geo_name":"Watertown-Fort Drum, NY","pop2010":116229,"pop2015":117635,"t100":0,"lon":-75.92057,"lat":44.05295},{"geo_id":"48140","geo_name":"Wausau, WI","pop2010":134063,"pop2015":135868,"t100":0,"lon":-89.75863,"lat":44.89793},{"geo_id":"48260","geo_name":"Weirton-Steubenville, WV-OH","pop2010":124454,"pop2015":120512,"t100":0,"lon":-80.70309,"lat":40.38802},{"geo_id":"48300","geo_name":"Wenatchee, WA","pop2010":110884,"pop2015":116178,"t100":0,"lon":-120.26362,"lat":47.81814},{"geo_id":"48540","geo_name":"Wheeling, WV-OH","pop2010":147950,"pop2015":144198,"t100":0,"lon":-80.84199,"lat":39.97602},{"geo_id":"48620","geo_name":"Wichita, KS","pop2010":630919,"pop2015":644610,"t100":1,"lon":-97.39811,"lat":37.62504},{"geo_id":"48660","geo_name":"Wichita Falls, TX","pop2010":151306,"pop2015":150780,"t100":0,"lon":-98.49065,"lat":33.775},{"geo_id":"48700","geo_name":"Williamsport, PA","pop2010":116111,"pop2015":116048,"t100":0,"lon":-77.06629,"lat":41.34307},{"geo_id":"48900","geo_name":"Wilmington, NC","pop2010":254884,"pop2015":277969,"t100":0,"lon":-77.90067,"lat":34.46884},{"geo_id":"49020","geo_name":"Winchester, VA-WV","pop2010":128472,"pop2015":133836,"t100":0,"lon":-78.46576,"lat":39.26989},{"geo_id":"49180","geo_name":"Winston-Salem, NC","pop2010":640595,"pop2015":659330,"t100":1,"lon":-80.3451,"lat":36.07244},{"geo_id":"49340","geo_name":"Worcester, MA-CT","pop2010":916980,"pop2015":935536,"t100":1,"lon":-71.92866,"lat":42.2188},{"geo_id":"49420","geo_name":"Yakima, WA","pop2010":243231,"pop2015":248830,"t100":0,"lon":-120.74007,"lat":46.4594},{"geo_id":"49620","geo_name":"York-Hanover, PA","pop2010":434972,"pop2015":442867,"t100":0,"lon":-76.73069,"lat":39.92316},{"geo_id":"49660","geo_name":"Youngstown-Warren-Boardman, OH-PA","pop2010":565773,"pop2015":549885,"t100":1,"lon":-80.56419,"lat":41.24169},{"geo_id":"49700","geo_name":"Yuba City, CA","pop2010":166892,"pop2015":170955,"t100":0,"lon":-121.52227,"lat":39.15262},{"geo_id":"49740","geo_name":"Yuma, AZ","pop2010":195751,"pop2015":204275,"t100":0,"lon":-113.90635,"lat":32.76904}];

	var us_border = topojson.mesh(geo_poly.state, geo_poly.state.objects.geos, function(a,b){
					return a===b;
				});

	geo_poly.us = {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"geometry": us_border,
				"properties": {
					"geo_id":"us"
				}
			}	
		]
	};

	//list geographies available in api
	api.ls = function(){
		var available = [];
		for(var pt in geo_point){
			if(geo_point.hasOwnProperty(pt)){
				available.push(pt + " point");
			}
		}

		for(var ply in geo_poly){
			if(geo_poly.hasOwnProperty(ply)){
				available.push(ply + " polygon");
			}
		}
		return available;	
	};

	var default_types = {
		state: "poly",
		county: "poly",
		tract: "poly",
		metro: "point",
		place: "point",
		us: "poly",
		lakes: "poly"
	};	

	api.get = function(geo, point_or_poly){
		var type = arguments.length==1 || point_or_poly==null ? default_types[geo] : point_or_poly;

		geo = geo.toLowerCase();

		if(type != "point" && type != "poly"){
			throw "Invalid geography type"
		}

		if(type=="poly" && geo!="us"){
			var topo = geo_poly[geo];
			var geoj = topojson.feature(topo, topo.objects.geos);
			geoj.bbox = topojson.bbox(topo);
		}
		else if(type=="poly" && geo=="us"){
			var geoj = geo_poly.us;
		}
		else{
			//simply an array of objects with lon/lat properties -- will be converted to geojson in mapping tool
			var geoj = geo_point[geo];
		}

		return geoj;
	};

	return api
}

//to do: figure out how to reserve the proper amount of space prior to draw so that auto layout doesn't have any issues -- if
//to do: major work on making layout more robust, responsive, etc
//to do: make ticks available for linear scales
//to do: better selection for radii examples // better alignment of bubbles in legend
//legend is added after set_dim() called, then it won't be accurate. SO, could reserve some space, or run draw in callback

function legend(container){
	//landscape is default
	var landscape = true;

	var L = {};

	var values = [];
	var labels = [];

	var outer_wrap = d3.select(container);
	var inner_wrap = outer_wrap.append("div").classed("c-fix",true);

	var default_radius = 8;
	var default_fill = "none";

	var bubble_values = null;
	var swatch_values = null;

	L.wrap = function(container, keep_previous){
		if(arguments.length==0){
			return outer_wrap;
		}
		else{
			if(!keep_previous){
				outer_wrap.remove();
			}
			outer_wrap = d3.select(container);
			inner_wrap = outer_wrap.append("div").classed("c-fix",true);
		}
		return L;
	};

	//
	L.bubble = function(values, formatter, title, left){
		bubble_values = values;

		var padding = 8;

		var format = typeof formatter == "function" ? formatter : function(v){return v};
		
		if(arguments.length > 3){
			var L = left.toLowerCase() == "left" ? "left" : "right";
		}
		else{
			var L = "none";
		}
		

		inner_wrap.selectAll("div.bubble-legend").remove();
		var wrap = inner_wrap.append("div").classed("bubble-legend", true)
							 .style("float", L)
							 .style("margin","0em " + (L ? "2em" : "0em") + " 0em " + (L ? "0em" : "2em"));

		var svg = wrap.append("svg").style("overflow","visible");
		var g = svg.append("g").attr("transform","translate(0,25)");

		var maxr = d3.max(values, function(d){return d.r});

		svg.attr("height", 2*maxr + 2*padding + 25);

		if(landscape){
			
			var bubbles = g.selectAll("circle").data(values).enter().append("circle")
								.attr("r", function(d){
									return d.r;
								})
								.attr("fill","none")
								.attr("stroke", "#333333")
								.attr("cx", function(d,i){
									return maxr + padding;
								})
								.attr("cy", function(d,i){
									return 2*maxr - d.r + padding;
								});

			var ledes = g.selectAll("line").data(values).enter().append("path")
							.attr("d", function(d,i){
								return "M"+(maxr+padding)+","+((2*maxr)-(2*d.r)+padding)+" l"+(maxr+(2*padding))+",0";
							})
							.attr("stroke","#333333")
							.attr("stroke-dasharray", "2,2");

			var text = g.selectAll("text").data(values).enter().append("text")
							.attr("x", (2*maxr+(3*padding))+1)
							.attr("y", function(d,i){
								return ((2*maxr)-(2*d.r)+padding)+(i==0 ? 8 : (i==1 ? 4 : 1));
							})
							.text(function(d,i){
								return format(d.value);
							})
							.style("font-size","13px");


			if(title !== "" && title !== null){
				var title_text = svg.append("text").text(title).attr("x", "50%").attr("text-anchor","middle").attr("y",12);
			}
			else{
				var title_text = null;
				g.attr("transform", "translate(0,10)");
			}

			setTimeout(function(){
				var box = g.node().getBoundingClientRect();
				var box1 = title_text !== null ? title_text.node().getBoundingClientRect() : {left:10, right:0, top:0, bottom:0};
				var w = box.right - box.left + (2*padding);
				var w1 = box1.right - box1.left;
				var h = box.bottom-box.top+box1.bottom-box1.top+10;
				svg.attr("width", Math.max(w1,w)).attr("height", h);
			},0);

		}

		return L;
	};

	L.swatch = function(values, formatter, title, left){
		swatch_values = values;

		var padding = 12;

		var format = typeof formatter == "function" ? formatter : function(v){return v};

		if(arguments.length > 3){
			var L = left.toLowerCase() == "left" ? "left" : "right";
		}
		else{
			var L = "none";
		}

		inner_wrap.selectAll("div.swatch-legend").remove();
		var wrap = inner_wrap.append("div").classed("c-fix swatch-legend", true)
							 .style("float", L)
							 .style("margin","0em " + (L ? "2em" : "0em") + " 0em " + (L ? "0em" : "2em"))
							 .style("opacity","0");

		var svgwrap = wrap.append("div").style("margin","0rem auto");
		var title_text = svgwrap.append("p").style("margin","0rem").style("display","none");
		var svg = svgwrap.append("svg").attr("width","100%").attr("height","100%");
		var g = svg.append("g").attr("transform","translate(0,0)");

		var s_height = 15;
		var s_width = 35;

		//svgwrap.style("height", (2*s_height + 2*padding + 25)+"px");

		if(landscape){

			var text = g.selectAll("text").data(values).enter().append("text")
							.attr("x", function(d,i){return s_width*i + padding})
							.attr("y", 11)
							.text(function(d,i){
								return format(d.value);
							})
							.style("font-size","13px");	

			setTimeout(function(){
				var max = s_width;
				text.each(function(){
					var box = this.getBoundingClientRect();
					var w = box.right - box.left;
					if(w > max){
						max = w;
					}
				});
				text.attr("x", function(d,i){
					return (max+padding)*i; 
				});
				
				var swatches = g.selectAll("rect").data(values).enter().append("rect")
								.attr("width", max)
								.attr("height", s_height)
								.attr("fill",function(d){return d.color})
								.attr("stroke", "none")
								.attr("x", function(d,i){
									return (max + padding)*i;
								})
								.attr("y", 13);

				if(title != null){
					title_text.text(title).style("display","block");
				}
				else{
					title_text.text("").style("display","none");
				}
				
				setTimeout(function(){
					var box = g.node().getBoundingClientRect();
					//var box1 = title_text.node().getBoundingClientRect();
					var w = box.right - box.left;
					//var w1 = box1.right - box1.left;
					var h = box.bottom-box.top+10;
					svg.attr("width", w+"px").attr("height",h+"px");

					wrap.transition().duration(500).style("opacity",1);
				},0);

			},0);		

		}
		return L;
	};

	L.add = function(name, callback){
		inner_wrap.selectAll("div." + name).remove();
		var wrap = inner_wrap.append("div").classed(name, true).style("float","left").style("margin","0em 1em 0em 2em");
		callback(wrap);
	};

	//L.gradient = function(){

	//}

	//set legend as portrait and redraw if already drawn
	//L.portrait = function(){
	//	landscape = false;
	//	if(bubble_values != null){
	//		L.bubble(bubble_values, bubble_v2r, bubble_v2c);
	//	}
	//	return L;
	//}

	return L;
}

//dependencies: d3 v4.0+, topojson v3.0+

//tests: categorical scale: https://jsfiddle.net/b1x28zf9/5/
//to do: test out default projection and its translate/scaling for different sized containers
//to do: use more sophisticated auto sizing of projection, both for the default projection and for the geos in an arbitrary layer
//       --in particular, allow the user to automatically scale/translate the projection to fit all geos in a layer (even points --currently just poly) 
//		 --remember that the user can add numerous sub-layers of geography to a single map layer. so there could be 5 geojson objects in a given
//       --map layer. how to automatically fit to the union of all of those geojson objects when the fitExtent method only works on a
//		 --single geojson object. Will need to write a custom method that is based on fitExtent but works on multiple geojson objects (also for points!)
//future features: add a table option to view data that matches a geography
//to do: make points into valid geojson features which could be used as fit_layers
//known issues: if the page does not yet have scroll bars, a map could get clipped when scroll bars are added
//to do: enforce application of projection after a layer has been added (map depends on having geo data to set projection scale and zoom functionality)
//to do: investigate any unexpected behavior that may occur if the default projection is used with subsequent geos (no layer fit)
//to do: zoom out is off a little bit -- see digitalization map

function mapd(root_container){	
	
	if(arguments.length==0){
		var new_node = document.createElement("div");
		root_container = document.body.appendChild(new_node);
	}

	//browser compatability testing
	if(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || 
		!Array.prototype.filter || !Array.prototype.map || !Array.prototype.forEach || !Array.prototype.indexOf){
		root_container.innerHTML = '<p style="font-style:italic;text-align:center;margin:30px 0px 30px 0px;">This interactive feature requires a modern browser such as Chrome, Firefox, IE10+, or Safari.</p>';
		return null;
	}

	//dom structure
	//dom_root (passed as arg to mapd)
	//...top_wrap (hold menu/legend, may float alongside or above map)
	//......menu_wrap 
	//......legend_wrap
	//...container_wrap (holds map) -- eligible space for map -- width remains at 100% of parent -- width of this element is queried
	//......outer_wrap (parent of svg, canvas, tooltip) -- width of this element is set programmatically
	//.........map_canvas (canvas background)
	//.........map_svg (main svg) -- all drawing is done on a root <g> under map_svg
	//.........tooltip_wrap -- tooltip

	var dom_root = d3.select(root_container);

	//hold menu elements
	//to do: make menu building capabilities more robust
	var title_wrap = dom_root.append("div").classed("c-fix",true);
	var top_wrap = dom_root.append("div").classed("c-fix",true);
		var menu_wrap = top_wrap.append("div").classed("c-fix",true);
		var legend_wrap = top_wrap.append("div").classed("c-fix map-legend",true);

	//container is given a width of 100%, a non-zero min-height, and 0 padding to aid in accurate resizing
	//you should never set the dimensions of this element
	var container_wrap = dom_root.append("div")
								  .style("width","100%")
								  .style("min-height","150px")
								  .style("padding","0px")
								  .style("position","relative")
								  .classed("map_container_wrap", true);

	//container_wrap node
	var container = container_wrap.node();

	//the dom element that should be resized (height only, for now) to fit map
	var outer_wrap = container_wrap.append("div")
									.style("padding","0px")
									.style("width","100%")
									.style("height","100%")
									.style("min-height","150px")
									.style("position","relative")
									.style("overflow","hidden");

	var map_canvas = outer_wrap.append("canvas").style("width","100%").style("height","100%").style("position","absolute").style("z-index","1");
	var map_svg = outer_wrap.append("svg").attr("width","100%").attr("height","100%").style("position","relative").style("z-index","2");

	//TOOLTIP
	var tip_pad = 20;
	var tip_width = 250;
	var tooltip_wrap = container_wrap.append("div")
								 .style("position","absolute")
								 .style("visibility","hidden")
								 .style("opacity","0")
								 .style("pointer-events","none")
								 .style("z-index","20")
								 .style("min-height","5em");	

	//content for tooltip
	var tooltip_inner = tooltip_wrap.append("div")
									.style("margin","0px "+tip_pad+"px")
									.style("background-color","#ffffff")
									.style("padding","10px 15px")
									.style("position","relative")
									.style("z-index",10)
									.style("border","1px solid #333333")
									.style("border-radius","5px")
							   		.style("min-height","50px")
									.style("box-shadow", "4px 4px 10px 0px rgba(0,0,0,0.25)");

	//arrow indicators pointing to geo
	var arrowL = tooltip_wrap.append("svg").attr("width",(tip_pad+2)+"px").attr("height","100%")
					   .style("position","absolute").style("left","0px").style("top","15px").style("z-index",20);
					   
		arrowL.append("path").attr("d", "M"+tip_pad+",0 l-15,10 l15,10 z").attr("fill","#ffffff")
					   .attr("stroke","#333333").style("pointer-events","none");
		arrowL.append("path").attr("d", "M"+(tip_pad+2)+",0 l-15,10 l15,10 z").attr("fill","#ffffff")
					   .attr("stroke","none").style("pointer-events","none");			

	var arrowR = tooltip_wrap.append("svg").attr("width",(tip_pad+2)+"px").attr("height","100%")
					   .style("position","absolute").style("right","0px").style("top","15px").style("z-index",20);
		arrowR.append("path").attr("d", "M2,0 l15,10 l-15,10 z").attr("fill","#ffffff")
					   .attr("stroke","#333333").style("pointer-events","none");
		arrowR.append("path").attr("d", "M0,0 l15,10 l-15,10 z").attr("fill","#ffffff")
					   .attr("stroke","none").style("pointer-events","none");

	var tooltip_dom = { 
					    tip:tooltip_wrap, 
					    tip_inner:tooltip_inner, 
					    arrows:{L:arrowL, R:arrowR}, 
					    dim:{width:tip_width, pad:tip_pad}
					  };
	//END TOOLTIP	


	var zoom_button = outer_wrap.append("div").style("position","absolute").style("top","60%").style("right","10px")
												.style("width","70px").style("height","50px")
												.style("z-index","10")
												.style("cursor","pointer")
												.style("padding","10px 15px")
												.style("border","1px solid #dddddd")
												.style("border-radius","15px")
												.style("background-color","rgba(255,255,255,0.8)")
												.style("z-index","10");

	var zoom_svg = zoom_button.append("svg").attr("width","40px").attr("height","30px")
									.attr("viewBox","0 0 40 30");
	var zoom_in_g = zoom_svg.append("g").attr("transform","translate(0,-1050)")
											.attr("stroke","#333333")//.attr("stroke","#0d73d6")
											.attr("stroke-linecap","round")
											.attr("fill","none");	

		zoom_in_g.append("path").attr("stroke-width","4")
					.attr("d", "m23.282 1070.1 7.3299 7.3299m-6.0819-15.665c-0.000012 4.979-4.0363 9.0152-9.0152 9.0152-4.979 0-9.0152-4.0362-9.0152-9.0152 0.0000119-4.979 4.0363-9.0152 9.0152-9.0152 4.979 0 9.0152 4.0362 9.0152 9.0152z");
		zoom_in_g.append("path").attr("stroke-width","2")
					.attr("d", "m10.856 1061.7h9.0873m-4.5437-4.5436v9.0873");

	var zoom_out_g = zoom_svg.append("g").attr("transform","translate(0,-1050)")
											.attr("stroke","#dc2a2a")
											.attr("stroke-linecap","round")
											.attr("fill","none")
											.style("visibility","hidden");	

		zoom_out_g.append("path").attr("stroke-width","4")
					.attr("d", "m23.282 1070.1 7.3299 7.3299m-6.0819-15.665c-0.000012 4.979-4.0363 9.0152-9.0152 9.0152-4.979 0-9.0152-4.0362-9.0152-9.0152 0.0000119-4.979 4.0363-9.0152 9.0152-9.0152 4.979 0 9.0152 4.0362 9.0152 9.0152z");
		zoom_out_g.append("path").attr("stroke-width","2")
					.attr("d", "m10.856 1061.7h9.0873");

	//public map object								 
	var map = {
		svg: map_svg.append("g"),
		canvas:map_canvas
	};

	//hold all layers generated for this map
	var layers = [];

	//layer should only be called as a method of map so the proper context can be set
	map.layer = function(){
		var dom_context = {
							root: dom_root,
							parent: outer_wrap,
							tooltip: tooltip_dom
						  };

		var l = layer.call({map:map, dom:dom_context});
		layers.push(l);
		return l;
	};

	//the draw function is called with this set to {dimensions: current, global dimensions, svg: <g> element on which to draw layer}
	map.layer_free = function(draw_fn){
		var l = layer_free.call(map, draw_fn);
		layers.push(l);
		return l;
	};

	map.get_layers = function(){
		return layers;
	};

	map.menu = function(){
		return menu_wrap;
	};

	map.title = function(){
		return title_wrap;
	};

	map.legend = legend(legend_wrap.node());

	//set map countainer (outer_wrap) height -- does not touch container
	var set_height = function(h, units){
		var mapHeight = {value:50, units:"vh"};

		if(arguments.length==0){
			return mapHeight.value+mapHeight.units;
		}
		else if(arguments.length==1 || units == null){
			mapHeight.value = h;
			mapHeight.units = "px";
		}
		else{
			mapHeight.value = h;
			mapHeight.units = units;			
		}
		outer_wrap.style("height", mapHeight.value+mapHeight.units);
		
		return mapHeight;
	};

	//should not need to set width
	var set_width = function(w, units){
		var mapWidth = {value:100, units:"%"};

		if(arguments.length==0){
			return mapWidth.value+mapWidth.units;
		}
		else if(arguments.length==1 || units == null){
			mapWidth.value = w;
			mapWidth.units = "px";
		}
		else{
			mapWidth.value = w;
			mapWidth.units = units;			
		}
		outer_wrap.style("width", mapWidth.value+mapWidth.units);
		
		return mapWidth;
	};

	//by default, the map is responsive and auto sizes to container dimensions
	//but the user can override this behavior using map.responsive() and setting fixed dimensions using map.height() and map.width()
	var fixedHeight = null;
	var fixedWidth = null;

	map.height = function(height, units){
		if(height===null){
			fixedHeight = null;
			set_height(100,"%");
		}
		else{
			fixedHeight = set_height(height, units);
		}
	};

	map.width = function(width, units){
		if(width===null){
			fixedWidth = null;
			set_width(100,"%");
		}
		else{
			fixedWidth = set_width(width, units);
		}
	};

	//record container dimensions // create default projection

	//record dimensions of container
	//dimensions updated before each redraw and initialized once below
	var dimensions;
	var g_translate = [0,0]; //record dragging of <g>roup
	
	var center = [0,0];
	var relative_center = [0.5, 0.5]; //what position, [0,1] is the center of the map relative to the range of projected [lon,lat]
	
	var zoom_scalar = 1;

	var default_aspect = 0.66; //aspect ratio to revert to
	var aspect = default_aspect; //aspect ratio of map on page (container width * aspect ratio = height);

	//set the available drawing dimensions based on CONTAINER, taking into consideration a rudimentary aspect ratio of the underlying geo
	//utilized by projection methods that determines how big to draw map
	map.set_dim = function(){
		
		//get dimensions of container -- how wide is it?
		var new_dim = get_dim(container);

		//console.log(aspect);
		if(aspect <= 1){
			new_dim.height = aspect*new_dim.width;
		}
		else{
			new_dim.height = new_dim.viewport_height;
		}

		//HEIGHT OVERRIDES -- THESE ARE BUGGY (UNNECESSARY?) -- TO DO: Eliminate auto layout
		//enforce height restriction #1 -- map can't be taller than viewport
		/*if(new_dim.height > new_dim.viewport_height){
			new_dim.height = new_dim.viewport_height;
		}

		//enforce height restriction #2 -- subtract the distance of map from top of root element (accounts for menu)
		try{
			var top_of_root = dom_root.node().getBoundingClientRect().top;
			var top_of_container = new_dim.box.top;

			//if there's space between top of map and root, remove it from height allowed for map
			//to do: fine-tune so remove might always force map+menu to take up viewport height
			var remove = top_of_container - top_of_root;
			
			//only remove what is there and don't remove if you don't have to (map + menu isn't taller than viewport)
			if(remove < new_dim.height && (new_dim.height + remove) > new_dim.viewport_height){
				new_dim.height = new_dim.height - remove;
			}
		}
		catch(e){
			new_dim.height = new_dim.viewport_height;
		}*/		

		var height_diff = dimensions==null ? new_dim.height : new_dim.height - dimensions.height;
		var width_diff = dimensions==null ? new_dim.width : new_dim.width - dimensions.width;

		//set
		dimensions = new_dim;

		//set the wrapper to the calculated height
		set_height(new_dim.height);

		//record the center in unzoomed coords
		center = [dimensions.width/2, dimensions.height/2];

		//return T/F: have the container dimensions changed since the last time they were checked/set?
		return {width:dimensions.width, height:dimensions.height, changed: (width_diff != 0 || height_diff != 0)};
	};
	map.set_dim(); //initialize dimensions

	//get the current dimensions of the map -- only reset on calls to map.set_dim (this is important to avoid layers independently calculating dims)
	map.get_dim = function(){
		return dimensions;
	};

	//PROJECTION
	//store projection in private var; default will be set with map.projection(null)
	var projection = null;

	//construct a default AlbersUsa projection based on dimensions of container -- mutates the private projection variable used elsewhere
	var default_projection = function(){
		aspect = default_aspect; //determines the height of the svg container based on given width
		var scale = 1.35; //scalar of width to be used for AlbersUsa
		
		//determine a height of best fit -- try to fit full width, but go down to as much as 30% of width to see if map will fit height
		var calculated_height;
		var calculated_width;
		var proportion = 1;
		while(proportion >= 0.3){
			calculated_width = dimensions.width*proportion;
			calculated_height = aspect*calculated_width;
			//will it fit?
			if(calculated_height <= dimensions.height){
				break;
			}
			//step down 5%
			proportion -= 0.05;
		}

		return d3.geoAlbersUsa().scale(calculated_width*scale).translate([dimensions.width/2, dimensions.height/2]);
	};

	//scale and translate projection to fit layer_to_fit in current dimension
	//apply projection AFTER first geo layer to set aspect
	//to do -- make it so it doesn't matter when you apply a projection -- it will always be in good shape before drawing -- or throw an error if calling map.projection and no geo has been set
	map.projection = function(proj){
		
		if(arguments.length == 0){
			//get
			return projection;
		}
		else if(proj===null){
			proj = default_projection();
		}

		if(layers.length > 0){
			var layer_to_fit = layers[0];

			//fitExtent
			var min_point = [5,5];
			var max_point = [(dimensions.width*zoom_scalar)-15, (dimensions.height*zoom_scalar)-15];
			if(max_point[0] < 50){max_point[0] = 50;}
			if(max_point[1] < 50){max_point[1] = 50;}
			
			var previous_scale = proj.scale();
			proj.fitExtent([min_point, max_point], layer_to_fit.geo()[0].data); //fit to first geojson object in layer
			var new_scale = proj.scale();

			//could use ratio of new_scale:previous_scale instead of zoom_scalar

			//From docs: The scale factor corresponds linearly to the distance between projected points; however, absolute scale factors are not equivalent across projections.
			try{
				//get projected bounds -- better than using projected bbox coordinates because those can be null for projections like AlbersUsa
				var bounds = d3.geoPath().projection(proj).bounds(layer_to_fit.geo()[0].data);

				var bboxHeight = bounds[1][1]-bounds[0][1];
				var bboxWidth = bounds[1][0]-bounds[0][0];

				//track the aspect ratio of the map
				aspect = Math.abs(bboxHeight/bboxWidth); //max lat becomes min due to svg coords
				//track how the projected bounding box changes in size
				//if(map_bounds==null){map_bounds = bounds}
				//scale_change = [bounds[1][0]-map_bounds[1][0], bounds[1][1]-map_bounds[1][1]];
			}
			catch(e){
				aspect = default_aspect; //reset to default;
				//scale_change = [1, 1];
				console.log(e);
			}
		}
		else{
			//console.log("no bounds set");
		}

		//set projection
		projection = proj;

		return map;
	};

	//dragging and zooming behavior

	//enable/disable zoom/drag
	var zoom_enabled = true;
	map.zoomable = function(a){
		if(arguments.length > 0 && !a){
			zoom_enabled = false;
			zoom_button.style("display","none");
			//console.log("turn off zoom");
		}
		else{
			zoom_enabled = true;
			zoom_button.style("display","block");
			//console.log("turn on zoom");
		}
		return map;
	};

	var drag_start_coords;
	var drag = d3.drag().on("drag", function(d){
		if(zoom_enabled){
			var x = d3.event.x;
			var y = d3.event.y;
			
			var delta_x = g_translate[0] + (x-drag_start_coords[0]);
			var delta_y = g_translate[1] + (y-drag_start_coords[1]);

			map.svg.attr("transform", "translate("+delta_x+","+delta_y+")");
			//console.log(delta_x + ", " + delta_y);
		}
	}).on("start", function(d){
		if(zoom_enabled){
			drag_start_coords = [d3.event.x, d3.event.y];
		}
	}).on("end", function(d){
		if(zoom_enabled){
			var x = d3.event.x;
			var y = d3.event.y;	
			
			//record the translate for use in subsequent drag events
			g_translate[0] = g_translate[0] + (x-drag_start_coords[0]);
			g_translate[1] = g_translate[1] + (y-drag_start_coords[1]);	

			//determine the "relative center": for the point in the center of the current view, what is the relative position of that
			//point in the full range of projected lon,lat; e.g. [0.5,0.5] is the center, [0.75, 0.25] is top right quadrant
			var tx_center = [center[0]-g_translate[0], center[1]-g_translate[1]];
			var width = center[0]*2*zoom_scalar;
			var height = center[1]*2*zoom_scalar;
			relative_center = [tx_center[0]/width, tx_center[1]/height]; //what position in [0,1] of map ranges is in center of view
		}
	});
	map_svg.call(drag);

	var zoom_index = 0;
	var zoom_scale = [1,2,4,8,14];
	var zoom_colors = ["#ffffff", "#dddddd", "#bbbbbb", "#999999", "#777777"];
	zoom_button.on("mousedown", function(){
		if(zoom_enabled){
			d3.event.stopPropagation();
			map.zoom();
		}
	});

	map.zoomLevels = function(num_levels){
		if(num_levels > 0 && num_levels <= zoom_scale.length){
			zoom_scale = zoom_scale.slice(0, num_levels);
		}

		return map;
	};

	map.zoom = function(level){

		if(arguments.length > 0){
			zoom_index = level;
		}
		else{
			zoom_index = (++zoom_index) % zoom_scale.length;
		}

		zoom_scalar = zoom_scale[zoom_index];

		if(zoom_index == zoom_scale.length-1){
			zoom_in_g.style("visibility","hidden");
			zoom_out_g.style("visibility","visible");
		}
		else{
			zoom_out_g.style("visibility","hidden");
			zoom_in_g.style("visibility","visible");
		}
		
		//re-center upon drawing
		if(zoom_index === 0){
			g_translate = [0,0];
			relative_center = [0.5, 0.5];			
		}

		//force a redraw to incorporate new zoom_scalar
		map.draw(true, true);		

		return map;
	};


	//draw all layers
	map.draw = function(resize_only, force){

		//set the default projection if it hasn't been set otherwise
		if(projection===null){
			map.projection(projection);
		}

		//before drawing set dimensions
		var dimensions_changed = map.set_dim().changed;
		//console.log("Have dimensions changed since last draw? " + (dimensions_changed ? "Yes" : "No"));
		
		//rescale projection, if necessary
		//currently scale is set by first layer in the map -- projections are fit to it
		//if the user wants to handle responsive projection then they should not make the map responsive
		if(dimensions_changed || !!force){
			//refit projection to dimensions using the first layer
			map.projection(projection);
		}



		resize_only = arguments.length > 0 && !!resize_only;

		var l = -1;
		while(++l < layers.length){
			layers[l].draw(resize_only);
		}

		//determine any translate needed
		var new_width = center[0]*2*zoom_scalar;
		var new_height = center[1]*2*zoom_scalar;

		var center_this = [relative_center[0]*new_width, relative_center[1]*new_height];
		g_translate[0] = center[0] - center_this[0];
		g_translate[1] = center[1] - center_this[1];

		map.svg.attr("transform", "translate("+g_translate[0]+","+g_translate[1]+")");

		return map;
	};

	map.clear = function(){
		layers = []; //remove all internal layer data -- do this before setting a projection again
		
		map.projection(null);
		
		//create new, blank svg
		map.svg.remove();
		map.svg = map_svg.append("g");

		g_translate = [0,0];
		relative_center = [0.5, 0.5];
		
		zoom_index = 0; //used to determine (ordinal) level of zoom
		zoom_scalar = 1;
		
		//when in use, wipe canvas too, reset legend

		//hide tooltip
		tooltip_wrap.style("top","-200px")
					.style("left","-100px")
					.style("visibility","hidden")
					;

		tooltip_inner.html("");		

		return map;
	};

	//enable/disable responsiveness -- enabled by default
	var is_responsive = true;
	map.responsive = function(make_responsive){
		if(arguments.length==0){
			//toggle
			is_responsive = !is_responsive; 
		}
		else if(!make_responsive){
			is_responsive = false;
		}
		else{
			is_responsive = true;
		}

		return map;
	};

	//good to draw after a timeout to avoid expensive redrawing
	//and to allow reflow/paints to take effect before setting dimensions and redrawing
	var resize_timer;
	window.addEventListener("resize", function(){
		clearTimeout(resize_timer);
		if(is_responsive){
			resize_timer = setTimeout(function(){
				map.draw(true); //resize_only set to true
			}, 250);
		}
	});

	//make syncronous geo data available to layer
	var geo_api = geo_api_sync();

	//provide an interface to a geo api get method
	map.geo = function(geo, type){
		if(arguments.length == 1){
			var geo_data = geo_api.get(geo);	
		}
		else if(arguments.length > 1){
			var geo_data = geo_api.get(geo, type);
		}
		else{
			var geo_data = null;
		}
		
		return geo_data;
		
	};	

	return map;
}

//v1.0 developed for congressional district poverty, gig economy, and gci summit

var format = {};
format.rank = function(r){
	try{
	    if(r == null){
	        throw "badInput";
	    }
	    else{
	        
	        var c = r + "";
	        var f = +(c.substring(c.length-1)); //take last letter and coerce to an integer
	         
	        var e = ["th","st","nd","rd","th","th","th","th","th","th"];
	 
	        var m = (+r)%100; 
	        var r_ = (m>10 && m<20) ? c + "th" : (c + e[f]); //exceptions: X11th, X12th, X13th, X14th
	    }
	}
	catch(e){
	    var r_ = "N/A";
	}

	return r_; 
};

format.ranker = function(values, ascending){
	if(arguments.length > 1 && !!ascending){
		var vals = values.slice(0).sort(function(a,b){
			if(a==b){
				return 0;
			}
			else if(a==null){
				return 1;
			}
			else if(b==null){
				return -1;
			}
			else{
				return a-b;
			}
		});
	}
	else{
		var vals = values.slice(0).sort(function(a,b){
			if(a==b){
				return 0;
			}
			else if(a==null){
				return 1;
			}
			else if(b==null){
				return -1;
			}
			else{
				return b-a;
			}
		});
	}

	return function(v){
		//null or undefined get null rank
		return v==null ? null : vals.indexOf(v)+1;
	}
};

//percent change
format.pct0 = d3.format("+,.0%");
format.pct1 = d3.format("+,.1%");

//percent change
format.ch0 = d3.format("+,.0f");
format.ch1 = d3.format("+,.1f");

//shares
format.sh0 = d3.format(",.0%");
format.sh1 = d3.format(",.1%");

//share change
format.shch0 = function(v){return format.ch0(v*100)+" points"};
format.shch1 = function(v){return format.ch1(v*100)+" points"};

//numeric
format.num0 = d3.format(",.0f");
format.num1 = d3.format(",.1f");
format.num2 = d3.format(",.2f");
format.num3 = d3.format(",.3f");

//USD
format.doll0 = function(v){return "$" + format.num0(v)};
format.doll1 = function(v){return "$" + format.num1(v)};
format.doll2 = function(v){return "$" + format.num2(v)};

format.dolle30 = function(v){return "$" + format.num0(v*1000)};

//id
format.id = function(v){return v};

//possessive
format.possessive = function(v){
	var s = v+"";
	var last = s.slice(-1).toLowerCase();
	return last=="s" ? s+"'" : s+"'s";
};

//wrapper that handles missings/nulls
format.fn = function(v, fmt){
	if(format.hasOwnProperty(fmt)){
		var fn = format[fmt];
	}
	else{
		var fn = format.id;
	}
	return v==null ? "N/A" : fn(v);
};

//similar to fn above, but returns a decorated function instead of a value
format.fn0 = function(fmt){
	if(format.hasOwnProperty(fmt)){
		var fn = format[fmt];
	}
	else{
		var fn = format.id;
	}
	return function(v){
		return v==null ? "N/A" : fn(v);
	}
};

//main function
function main(){


  //local
  dir.local("./");
  dir.add("assets", "assets");

  //production data
  //dir.add("assets", "millennial-generation/assets");
  var compat = degradation(document.getElementById("metro-interactive"));


  //browser degradation
  if(compat.browser()){

    var map_finding = d3.select("#finding-panel");


    //add graphics
    d3.select("#graphic-cgen-gap").append("img").attr("src", dir.url("assets", "cgg.svg"));
    d3.select("#graphic-race").append("img").attr("src", dir.url("assets", "race.svg"));
    d3.select("#graphic-edu").append("img").attr("src", dir.url("assets", "edu.svg"));
    d3.select("#graphic-ownership").append("img").attr("src", dir.url("assets", "ownership.svg"));
    d3.select("#graphic-poverty").append("img").attr("src", dir.url("assets", "poverty.svg"));
    d3.select("#graphic-marriage").append("img").attr("src", dir.url("assets", "marriage.svg"));

    d3.json(dir.url("assets", "millenials_data.json"), function(error, data){
      if(error){
        //no-op
      } 
      else{

        var map_wrap = d3.select("#map-panel");


        //build svg filters
        var defs = map_wrap.append("div").style("height","1px").append("svg").append("defs");
        var filter = defs.append("filter").attr("id","feBlur").attr("width","150%").attr("height","150%");
        filter.append("feOffset").attr("result","offsetout").attr("in","SourceGraphic").attr("dx","6").attr("dy","6");
        filter.append("feColorMatrix").attr("result","matrixout").attr("in","offsetout").attr("type","matrix").attr("values","0.25 0 0 0 0 0 0.25 0 0 0 0 0 0.25 0 0 0 0 0 1 0");
        filter.append("feGaussianBlur").attr("result","blurout").attr("in","matrixout").attr("stdDeviation","6");
        filter.append("feBlend").attr("in","SourceGraphic").attr("in2","blurout").attr("mode","normal");

        var filter2 = defs.append("filter").attr("id","feBlur2").attr("width","150%").attr("height","150%");
        filter2.append("feOffset").attr("result","offsetout").attr("in","SourceGraphic").attr("dx","2").attr("dy","2");
        filter2.append("feColorMatrix").attr("result","matrixout").attr("in","offsetout").attr("type","matrix").attr("values","0.25 0 0 0 0 0 0.25 0 0 0 0 0 0.25 0 0 0 0 0 0.5 0");
        filter2.append("feGaussianBlur").attr("result","blurout").attr("in","matrixout").attr("stdDeviation","5");
        filter2.append("feBlend").attr("in","SourceGraphic").attr("in2","blurout").attr("mode","normal");      

        
        var map = mapd(map_wrap.append("div").node()).zoomable(true).responsive(true).zoomLevels(2);
        var us_layer = map.layer().geo(map.geo("us")).attr("filter","url(#feBlur2)");
        var state_layer = map.layer().geo(map.geo("state")).attr("stroke","#999999").attr("fill","#ffffff");
        var metro_layer = map.layer().geo(map.geo("metro").filter(function(d){return d.t100==1}))
                              .attr("stroke","#999999").attr("fill-opacity","0.9").data(data, "CBSA_Code").attr("r","8");  

        var title = d3.select("#map-title");

        //render map to div below map
        var legend_wrap = map_wrap.append("div").style("margin","0.5rem auto 0.25rem auto").classed("c-fix",true)
                                  .append("div").style("float","right").style("border-top","1px solid #aaaaaa")
                                  .style("padding","10px").classed("map-legend",true); 

        map.legend.wrap(legend_wrap.node()); 

        var pal = ['#c6dbef','#9ecae1','#6baed6','#3182bd','#08519c'];
        
        var map_var = null;  //used to highlight chart in tooltip                    
        var map_scenes = {
          "pop":{
              var:"MShare15",
              varname:"Millennials share of total population, 2015",
              button:"Overall",
              text:[
                "This interactive map presents statistics for the race/ethnicity breakdown and overall millennial population share for the nation’s 100 largest metropolitan areas. <b><em>Note: Hover over each metro area to view relevant statistics.</em></b>",
                "Racial and ethnic minorities make up more than half of the millennial population in 10 states, including California, Texas, Arizona, Florida, and New Jersey. In another 10 states, including New York, Illinois, and North and South Carolina, minorities comprise more than 40 percent of millennial residents. Notably, the District of Columbia is a sizeable 34.8 percent millennial.",
                "Among metropolitan areas, the 15 with the highest shares of millennials are all in the fast-growing South and West, such as Austin, San Diego, and Los Angeles. The lowest millennial shares tend to be in Florida, such as Tampa and Miami, in the Northeast, such as Pittsburgh, and in the Midwest, such as Cleveland and Detroit."
                ],
              draw: function(){
                var fill = metro_layer.aes.fill("MShare15").quantile(pal);    
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();  
              }
            },

          "white":{
            var:"White",
            varname:'Share of millennials who are <b>white</b>, 2015',
            button:"White",
            text:[
              "The largest white millennial settlements are in the biggest metropolitan areas—New York, Chicago, and Los Angeles—as well as Philadelphia, Boston, Dallas, and Washington, D.C.",
              "Among the 100 largest metropolitan areas, 18 have millennial populations that are at least 60 percent white, including Seattle, Charlotte, Tampa, and Philadelphia. Only four of the largest 100 metropolitan areas house millennial populations where whites exceed 80 percent (Knoxville, Tenn.; Provo Utah; Pittsburgh; and Spokane, Wash.). Conversely, 30 are “minority white,” including Miami, Houston, Los Angeles, New York, Atlanta and Chicago. ",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("White").quantile(pal);
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          },

          "black":{
            var:"Black",
            varname:'Share of millennials who are <b>black</b>, 2015',
            button:"Black",
            text:[
              "In general, black millennials settle more often in Southern areas (including Atlanta, Dallas, Houston, and Miami, as well as New York, Philadelphia, and Washington, D.C.). In Atlanta, Charlotte, and Detroit, blacks are the largest minority group among millennials.",
              "The largest black millennial settlement and young adult gain areas have a distinctly Southern bent. Atlanta ranks first in black young adult gains and second in the size of black millennial settlement. Other metropolitan areas that saw black young adult gain are Dallas, Houston, Washington, D.C., and Miami in the South, as well as New York and Philadelphia",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("Black").quantile(pal);
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          },

          "hispanic":{
            var:"Hispanic",
            varname:'Share of millennials who are <b>Hispanic</b>, 2015',
            button:"Hispanic",
            text:[
              "New York and Los Angeles are major settlement areas for Hispanic millennials. In general, Hispanic millennials settle more often in Southern areas—Houston, Miami, and Dallas—along with Riverside, Calif., and Chicago. Additionally, New York, Los Angeles, and Houston are top gainers for Hispanic millennials.",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("Hispanic").quantile(pal);  
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          },

          "asian":{
            var:"Asian",
            varname:'Share of millennials who are <b>Asian</b>, 2015',
            button:"Asian",
            text:[
              "New York and Los Angeles are major settlement areas for Asian millennials. In general, Asian millennials settle more often in the West, including in San Francisco, San Jose, and Seattle, along with Chicago and Washington, D.C. Additionally, New York, Los Angeles, and Houston are top gainers for Asian millennials.",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("Asian").quantile(pal);
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          }
        };       

        var map_buttons_u = d3.select("#millennials-map .button-panel").selectAll("div").data(["pop", "white", "black", "hispanic", "asian"]);
        var map_buttons = map_buttons_u.enter().append("div").merge(map_buttons_u);
            map_buttons_u.exit().remove();

        map_buttons.html(function(d){
          return '<p class="no-select" style="font-size:0.85rem;text-transform:uppercase;text-align:center;">' + map_scenes[d].button + '</p>';
        });        

        //var poprank = format.ranker(data.map(function(d){return d.MPop15}));
        //var sharerank = format.ranker(data.map(function(d){return d.MShare15}));

        var tip_code = null;
        var scale = d3.scaleLinear().domain([0,100]).range([0,90]); //range in %
        var tooltip = function(obs){
          var tip = d3.select(this);

          if(tip_code !== obs.CBSA_Code){

            var p = tip.selectAll("p").data(['<strong style="font-size:17px;">' + obs.CBSA_Title + '</strong>', 
                                             '<em>Millennial share: ' + format.num1(obs.MShare15) + '% of pop.</em>',
                                             '<em>Millennials by race/ethnicity</em>'
                                            ]);

            p.enter().append("p").merge(p).html(function(d){return d}).style("font-size","15px")
                      .style("margin",function(d,i){return i==2 ? "11px 0px 3px 0px" : "4px 0px 7px 0px"})
                      .style("line-height","1.4em");


            var svg = tip.selectAll("svg").data([obs]);
            svg.exit().remove();

            var bar_g = svg.enter().append("svg").attr("width","100%").attr("height","200px").merge(svg).style("border-top","1px solid #aaaaaa")
                          .selectAll("g").data([{share: obs.White, fill: "#b2b2b2", label: "White"},
                                               {share: obs.Black, fill: "#5b5b5b", label: "Black"},
                                               {share: obs.Hispanic, fill: "#2fc4f2", label: "Hispanic"},
                                               {share: obs.Asian, fill: "#70ad47", label: "Asian"},
                                               {share: obs.AIAN, fill: "#ed7d31", label: "Am. Indian/Alaska Native"},
                                               {share: obs.TwoPlus, fill: "#ffc000", label: "2+ Races"}]);
                bar_g.exit().remove();
            var bar_ge = bar_g.enter().append("g");
                bar_ge.append("text").attr("y","12").attr("x",scale(0)+"%").style("font-size","13px");
                bar_ge.append("rect").attr("y","15").attr("height","10px").attr("x",scale(0)+"%");

            var g = bar_ge.merge(bar_g).attr("transform",function(d,i){
              return "translate(0," + (10 + (i*30)) + ")";
            });

            var rects = g.select("rect").attr("fill", function(d){return d.fill}).attr("width", function(d){return (scale(d.share)-scale(0))+"%"});
            var texts = g.select("text").text(function(d){return d.label + " (" + format.num1(d.share) + "%)"})
                          .style("font-weight", function(d){return d.label === map_var ? "bold" : "normal"});

            tip_code = obs.CBSA_Code;

            analytics('hover', 'share_of_millennials');
          }
        };

        metro_layer.tooltips(tooltip);    


        function button_select(d){
          map_buttons.classed("selected", function(dd, ii){
            return dd==d;
          });

          var scene = map_scenes[d];
          title.html(scene.varname).style("text-align","center").style("margin","1.5rem 0px 0px 0px").style("font-weight","bold");
          map_var = scene.var;

          var p = map_finding.selectAll("p").data(scene.text);
          p.exit().remove();
          p.enter().append("p").merge(p).html(function(d){return d});

          scene.draw();

        }         

        map_buttons.on("mousedown", function(d){
          button_select(d);

          analytics('menu_tap', 'share_of_millennials');
        });

        //initialize map       
        button_select("pop");    

      } //end draw block -- no error in data retrieval
    
    }); //end json data callback

  } //end compat browser block

  //ANALYTICS
  function analytics(action, label){
    
    //default arg for label is 'null'
    if(arguments.length < 2 || label == null){
      label = 'null';
    }

    dataLayer.push({
                    'event': 'Interactive',
                    'category': 'Interactive',
                    'action': action,
                    'label': label
                  });
  }

} //close main()


document.addEventListener("DOMContentLoaded", main);

}());
