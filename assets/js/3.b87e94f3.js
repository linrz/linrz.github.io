(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{111:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},112:function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},113:function(t,e,n){var r=n(252),o=n(253),i=n(255),a=Object.defineProperty;e.f=n(35)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},114:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},115:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},116:function(t,e,n){"use strict";var r=n(22);e.__esModule=!0,e.default=void 0;var o=r(n(0)),i=n(266),a=r(n(267)),u=o.default.prototype,s=o.default.util.defineReactive;s(u,"$vantLang","zh-CN"),s(u,"$vantMessages",{"zh-CN":a.default});var f={messages:function(){return u.$vantMessages[u.$vantLang]},use:function(t,e){var n;u.$vantLang=t,this.add(((n={})[t]=e,n))},add:function(t){void 0===t&&(t={}),(0,i.deepAssign)(u.$vantMessages,t)}};e.default=f},117:function(t,e,n){"use strict";e.__esModule=!0,e.camelize=function(t){return t.replace(r,(function(t,e){return e.toUpperCase()}))},e.padZero=function(t,e){void 0===e&&(e=2);var n=t+"";for(;n.length<e;)n="0"+n;return n};var r=/-(\w)/g},22:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},242:function(t,e,n){"use strict";var r=n(99),o=n(109)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n(243)(i)),"Array",{indexOf:function(t){return a?i.apply(this,arguments)||0:o(this,t,arguments[1])}})},243:function(t,e,n){"use strict";var r=n(28);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},244:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(245),o=n.n(r);function i(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},245:function(t,e,n){t.exports=n(246)},246:function(t,e,n){n(247);var r=n(112).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},247:function(t,e,n){var r=n(248);r(r.S+r.F*!n(35),"Object",{defineProperty:n(113).f})},248:function(t,e,n){var r=n(111),o=n(112),i=n(249),a=n(251),u=n(257),s=function(t,e,n){var f,c,l,h=t&s.F,d=t&s.G,p=t&s.S,v=t&s.P,g=t&s.B,m=t&s.W,y=d?o:o[e]||(o[e]={}),C=y.prototype,w=d?r:p?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(c=!h&&w&&void 0!==w[f])&&u(y,f)||(l=c?w[f]:n[f],y[f]=d&&"function"!=typeof w[f]?n[f]:g&&c?i(l,r):m&&w[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((y.virtual||(y.virtual={}))[f]=l,t&s.R&&C&&!C[f]&&a(C,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},249:function(t,e,n){var r=n(250);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},250:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},251:function(t,e,n){var r=n(113),o=n(256);t.exports=n(35)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},252:function(t,e,n){var r=n(57);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},253:function(t,e,n){t.exports=!n(35)&&!n(114)((function(){return 7!=Object.defineProperty(n(254)("div"),"a",{get:function(){return 7}}).a}))},254:function(t,e,n){var r=n(57),o=n(111).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},255:function(t,e,n){var r=n(57);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},256:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},257:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},258:function(t,e,n){var r=n(34).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(20)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},259:function(t,e,n){"use strict";
/*!
 * qrcode.vue v1.7.0
 * A Vue component to generate QRCode.
 * © 2017-2019 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var r=1,o=2,i=4,a=8;function u(t){this.mode=i,this.data=t}u.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var s=u,f={L:1,M:0,Q:3,H:2};function c(t,e){this.totalCount=t,this.dataCount=e}c.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c.getRSBlocks=function(t,e){var n=c.getRsBlockTable(t,e);if(null==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,o=new Array,i=0;i<r;i++)for(var a=n[3*i+0],u=n[3*i+1],s=n[3*i+2],f=0;f<a;f++)o.push(new c(u,s));return o},c.getRsBlockTable=function(t,e){switch(e){case f.L:return c.RS_BLOCK_TABLE[4*(t-1)+0];case f.M:return c.RS_BLOCK_TABLE[4*(t-1)+1];case f.Q:return c.RS_BLOCK_TABLE[4*(t-1)+2];case f.H:return c.RS_BLOCK_TABLE[4*(t-1)+3];default:return}};var l=c;function h(){this.buffer=new Array,this.length=0}h.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};for(var d=h,p={glog:function(t){if(t<1)throw new Error("glog("+t+")");return p.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return p.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},v=0;v<8;v++)p.EXP_TABLE[v]=1<<v;for(v=8;v<256;v++)p.EXP_TABLE[v]=p.EXP_TABLE[v-4]^p.EXP_TABLE[v-5]^p.EXP_TABLE[v-6]^p.EXP_TABLE[v-8];for(v=0;v<255;v++)p.LOG_TABLE[p.EXP_TABLE[v]]=v;var g=p;function m(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}m.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=g.gexp(g.glog(this.get(n))+g.glog(t.get(r)));return new m(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=g.glog(this.get(0))-g.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<t.getLength();r++)n[r]^=g.gexp(g.glog(t.get(r))+e);return new m(n,0).mod(t)}};var y=m,C=0,w=1,b=2,L=3,P=4,E=5,_=6,A=7,B={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;B.getBCHDigit(e)-B.getBCHDigit(B.G15)>=0;)e^=B.G15<<B.getBCHDigit(e)-B.getBCHDigit(B.G15);return(t<<10|e)^B.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;B.getBCHDigit(e)-B.getBCHDigit(B.G18)>=0;)e^=B.G18<<B.getBCHDigit(e)-B.getBCHDigit(B.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return B.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case C:return(e+n)%2==0;case w:return e%2==0;case b:return n%3==0;case L:return(e+n)%3==0;case P:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case E:return e*n%2+e*n%3==0;case _:return(e*n%2+e*n%3)%2==0;case A:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new y([1],0),n=0;n<t;n++)e=e.multiply(new y([1,g.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r:return 10;case o:return 9;case i:case a:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r:return 12;case o:return 11;case i:return 16;case a:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r:return 14;case o:return 13;case i:return 16;case a:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(r,o),u=-1;u<=1;u++)if(!(r+u<0||e<=r+u))for(var s=-1;s<=1;s++)o+s<0||e<=o+s||0==u&&0==s||a==t.isDark(r+u,o+s)&&i++;i>5&&(n+=3+i-5)}for(r=0;r<e-1;r++)for(o=0;o<e-1;o++){var f=0;t.isDark(r,o)&&f++,t.isDark(r+1,o)&&f++,t.isDark(r,o+1)&&f++,t.isDark(r+1,o+1)&&f++,0!=f&&4!=f||(n+=3)}for(r=0;r<e;r++)for(o=0;o<e-6;o++)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(o=0;o<e;o++)for(r=0;r<e-6;r++)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);var c=0;for(o=0;o<e;o++)for(r=0;r<e;r++)t.isDark(r,o)&&c++;return n+=10*(Math.abs(100*c/e/e-50)/5)}},M=B;function x(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var S=x.prototype;S.addData=function(t){var e=new s(t);this.dataList.push(e),this.dataCache=null},S.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},S.getModuleCount=function(){return this.moduleCount},S.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=l.getRSBlocks(t,this.errorCorrectLevel),n=new d,r=0,o=0;o<e.length;o++)r+=e[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];n.put(i.mode,4),n.put(i.getLength(),M.getLengthInBits(i.mode,t)),i.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},S.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=x.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},S.setupPositionProbePattern=function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},S.getBestMaskPattern=function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=M.getLostPoint(this);(0==n||t>r)&&(t=r,e=n)}return e},S.createMovieClip=function(t,e,n){var r=t.createEmptyMovieClip(e,n);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var u=1*a;this.modules[o][a]&&(r.beginFill(0,100),r.moveTo(u,i),r.lineTo(u+1,i),r.lineTo(u+1,i+1),r.lineTo(u,i+1),r.endFill())}return r},S.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},S.setupPositionAdjustPattern=function(){for(var t=M.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],o=t[n];if(null==this.modules[r][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[r+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},S.setupTypeNumber=function(t){for(var e=M.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},S.setupTypeInfo=function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=M.getBCHTypeInfo(n),o=0;o<15;o++){var i=!t&&1==(r>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(r>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},S.mapData=function(t,e){for(var n=-1,r=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var u=0;u<2;u++)if(null==this.modules[r][a-u]){var s=!1;i<t.length&&(s=1==(t[i]>>>o&1)),M.getMask(e,r,a-u)&&(s=!s),this.modules[r][a-u]=s,-1==--o&&(i++,o=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}},x.PAD0=236,x.PAD1=17,x.createData=function(t,e,n){for(var r=l.getRSBlocks(t,e),o=new d,i=0;i<n.length;i++){var a=n[i];o.put(a.mode,4),o.put(a.getLength(),M.getLengthInBits(a.mode,t)),a.write(o)}var u=0;for(i=0;i<r.length;i++)u+=r[i].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(x.PAD0,8),o.getLengthInBits()>=8*u));)o.put(x.PAD1,8);return x.createBytes(o,r)},x.createBytes=function(t,e){for(var n=0,r=0,o=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var s=e[u].dataCount,f=e[u].totalCount-s;r=Math.max(r,s),o=Math.max(o,f),i[u]=new Array(s);for(var c=0;c<i[u].length;c++)i[u][c]=255&t.buffer[c+n];n+=s;var l=M.getErrorCorrectPolynomial(f),h=new y(i[u],l.getLength()-1).mod(l);a[u]=new Array(l.getLength()-1);for(c=0;c<a[u].length;c++){var d=c+h.getLength()-a[u].length;a[u][c]=d>=0?h.get(d):0}}var p=0;for(c=0;c<e.length;c++)p+=e[c].totalCount;var v=new Array(p),g=0;for(c=0;c<r;c++)for(u=0;u<e.length;u++)c<i[u].length&&(v[g++]=i[u][c]);for(c=0;c<o;c++)for(u=0;u<e.length;u++)c<a[u].length&&(v[g++]=a[u][c]);return v};var k=x;var D={props:{value:{type:String,required:!0,default:""},className:{type:String,default:""},size:{type:[Number,String],default:100,validator:function(t){return!0!==isNaN(Number(t))}},level:{type:String,default:"L",validator:function(t){return["L","Q","M","H"].indexOf(t)>-1}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}},data:function(){return{numCells:0,fgPath:""}},updated:function(){this.render()},mounted:function(){this.render()},methods:{render:function(){var t=this.value,e=this.size,n=this.level,r=this.background,o=this.foreground,i=this.renderAs,a=e>>>0,u=new k(-1,f[n]);u.addData(function(t){for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r<2048?(e+=String.fromCharCode(192|r>>6),e+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(e+=String.fromCharCode(224|r>>12),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&t.charCodeAt(n)),e+=String.fromCharCode(240|r>>18),e+=String.fromCharCode(128|r>>12&63),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|63&r))}return e}(t)),u.make();var s=u.modules,c=a/s.length,l=a/s.length,h=window.devicePixelRatio||1;if("svg"===i)this.numCells=s.length,this.fgPath=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[];return t.forEach((function(t,r){var o=null;t.forEach((function(i,a){if(!i&&null!==o)return n.push("M".concat(o+e," ").concat(r+e,"h").concat(a-o,"v1H").concat(o+e,"z")),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?n.push("M".concat(a+e,",").concat(r+e," h1v1H").concat(a+e,"z")):n.push("M".concat(o+e,",").concat(r+e," h").concat(a+1-o,"v1H").concat(o+e,"z"))}}))})),n.join("")}(s);else{var d=this.$refs["qrcode-vue"],p=d.getContext("2d");d.height=d.width=a*h,p.scale(h,h),s.forEach((function(t,e){t.forEach((function(t,n){p.fillStyle=t?o:r;var i=Math.ceil((n+1)*c)-Math.floor(n*c),a=Math.ceil((e+1)*l)-Math.floor(e*l);p.fillRect(Math.round(n*c),Math.round(e*l),i,a)}))}))}}},render:function(t){var e=this.className,n=this.value,r=this.level,o=this.background,i=this.foreground,a=this.size,u=this.renderAs,s=this.numCells,f=this.fgPath;return t("div",{class:this.class||e,attrs:{value:n,level:r,background:o,foreground:i}},["svg"===u?t("svg",{attrs:{height:a,width:a,shapeRendering:"crispEdges",viewBox:"0 0 ".concat(s," ").concat(s)},style:{width:a+"px",height:a+"px"}},[t("path",{attrs:{fill:o,d:"M0,0 h".concat(s,"v").concat(s,"H0z")}}),t("path",{attrs:{fill:i,d:f}})]):t("canvas",{attrs:{height:a,width:a},style:{width:a+"px",height:a+"px"},ref:"qrcode-vue"},[])])}};e.a=D},260:function(t,e,n){},261:function(t,e,n){"use strict";var r=n(22);e.__esModule=!0,e.default=void 0;var o=r(n(262)),i=r(n(115)),a=n(29),u=n(272),s=n(273),f=(0,a.createNamespace)("overlay"),c=f[0],l=f[1];function h(t){(0,s.preventDefault)(t,!0)}function d(t,e,n,r){var s=(0,i.default)({zIndex:e.zIndex},e.customStyle);return(0,a.isDef)(e.duration)&&(s.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",(0,o.default)([{directives:[{name:"show",value:e.show}],style:s,class:[l(),e.className],on:{touchmove:h}},(0,u.inherit)(r,!0)]),[n.default&&n.default()])])}d.props={show:Boolean,duration:[Number,String],className:null,customStyle:Object,zIndex:{type:[Number,String],default:1}};var p=c(d);e.default=p},262:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}var o=["attrs","props","domProps"],i=["class","style","directives"],a=["on","nativeOn"],u=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==o.indexOf(n))t[n]=r({},t[n],e[n]);else if(-1!==i.indexOf(n)){var s=t[n]instanceof Array?t[n]:[t[n]],f=e[n]instanceof Array?e[n]:[e[n]];t[n]=s.concat(f)}else if(-1!==a.indexOf(n))for(var c in e[n])if(t[n][c]){var l=t[n][c]instanceof Array?t[n][c]:[t[n][c]],h=e[n][c]instanceof Array?e[n][c]:[e[n][c]];t[n][c]=l.concat(h)}else t[n][c]=e[n][c];else if("hook"==n)for(var d in e[n])t[n][d]=t[n][d]?u(t[n][d],e[n][d]):e[n][d];else t[n]=e[n];else t[n]=e[n];return t}),{})}},263:function(t,e,n){"use strict";e.__esModule=!0,e.createNamespace=function(t){return t="van-"+t,[(0,o.createComponent)(t),(0,r.createBEM)(t),(0,i.createI18N)(t)]};var r=n(264),o=n(265),i=n(269)},264:function(t,e,n){"use strict";e.__esModule=!0,e.createBEM=function(t){return function(e,n){return e&&"string"!=typeof e&&(n=e,e=""),e=r(t,e,"__"),n?[e,o(e,n)]:e}};function r(t,e,n){return e?t+n+e:t}function o(t,e){if("string"==typeof e)return r(t,e,"--");if(Array.isArray(e))return e.map((function(e){return o(t,e)}));var n={};return e&&Object.keys(e).forEach((function(r){n[t+"--"+r]=e[r]})),n}},265:function(t,e,n){"use strict";var r=n(22);e.__esModule=!0,e.unifySlots=u,e.createComponent=function(t){return function(e){var n;return"function"==typeof e&&(e={functional:!0,props:(n=e).props,model:n.model,render:function(t,e){return n(t,e.props,u(e),e)}}),e.functional||(e.mixins=e.mixins||[],e.mixins.push(i.SlotsMixin)),e.name=t,e.install=a,e}},n(116);var o=n(117),i=n(268);r(n(0));function a(t){var e=this.name;t.component(e,this),t.component((0,o.camelize)("-"+e),this)}function u(t){var e=t.scopedSlots||t.data.scopedSlots||{},n=t.slots();return Object.keys(n).forEach((function(t){e[t]||(e[t]=function(){return n[t]})})),e}},266:function(t,e,n){"use strict";e.__esModule=!0,e.deepAssign=i;var r=n(29),o=Object.prototype.hasOwnProperty;function i(t,e){return Object.keys(e).forEach((function(n){!function(t,e,n){var a=e[n];(0,r.isDef)(a)&&(o.call(t,n)&&(0,r.isObj)(a)&&"function"!=typeof a?t[n]=i(Object(t[n]),e[n]):t[n]=a)}(t,e,n)})),t}},267:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;e.default={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(t,e){return t+"年"+e+"月"}},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"暂无可用",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}},268:function(t,e,n){"use strict";var r=n(22);e.__esModule=!0,e.SlotsMixin=void 0;var o=r(n(0)).default.extend({methods:{slots:function(t,e){void 0===t&&(t="default");var n=this.$slots,r=this.$scopedSlots[t];return r?r(e):n[t]}}});e.SlotsMixin=o},269:function(t,e,n){"use strict";var r=n(22);e.__esModule=!0,e.createI18N=function(t){var e=(0,i.camelize)(t)+".";return function(t){for(var n=(0,o.get)(a.default.messages(),e+t)||(0,o.get)(a.default.messages(),t),r=arguments.length,i=new Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];return"function"==typeof n?n.apply(void 0,i):n}};var o=n(29),i=n(117),a=r(n(116))},270:function(t,e,n){"use strict";e.__esModule=!0,e.addUnit=function(t){if(!(0,r.isDef)(t))return;return t=String(t),(0,o.isNumber)(t)?t+"px":t};var r=n(29),o=n(271)},271:function(t,e,n){"use strict";e.__esModule=!0,e.isNumber=function(t){return/^\d+(\.\d+)?$/.test(t)},e.isNaN=function(t){if(Number.isNaN)return Number.isNaN(t);return t!=t}},272:function(t,e,n){"use strict";var r=n(22);e.__esModule=!0,e.inherit=function(t,e){var n=a.reduce((function(e,n){return t.data[n]&&(e[u[n]||n]=t.data[n]),e}),{});e&&(n.on=n.on||{},(0,o.default)(n.on,t.data.on));return n},e.emit=function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=t.listeners[e];i&&(Array.isArray(i)?i.forEach((function(t){t.apply(void 0,r)})):i.apply(void 0,r))},e.mount=function(t,e){var n=new i.default({el:document.createElement("div"),props:t.props,render:function(n){return n(t,(0,o.default)({props:this.$props},e))}});return document.body.appendChild(n.$el),n};var o=r(n(115)),i=r(n(0)),a=["ref","style","class","attrs","nativeOn","directives","staticClass","staticStyle"],u={nativeOn:"on"}},273:function(t,e,n){"use strict";e.__esModule=!0,e.on=function(t,e,n,i){void 0===i&&(i=!1);r.isServer||t.addEventListener(e,n,!!o&&{capture:!1,passive:i})},e.off=function(t,e,n){r.isServer||t.removeEventListener(e,n)},e.stopPropagation=a,e.preventDefault=function(t,e){("boolean"!=typeof t.cancelable||t.cancelable)&&t.preventDefault();e&&a(t)},e.supportsPassive=void 0;var r=n(29),o=!1;if(e.supportsPassive=o,!r.isServer)try{var i={};Object.defineProperty(i,"passive",{get:function(){e.supportsPassive=o=!0}}),window.addEventListener("test-passive",null,i)}catch(t){}function a(t){t.stopPropagation()}},29:function(t,e,n){"use strict";var r=n(22);e.__esModule=!0,e.noop=function(){},e.isDef=s,e.isObj=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},e.get=function(t,e){var n=e.split("."),r=t;return n.forEach((function(t){r=s(r[t])?r[t]:""})),r},e.isServer=e.addUnit=e.createNamespace=void 0;var o=r(n(0)),i=n(263);e.createNamespace=i.createNamespace;var a=n(270);e.addUnit=a.addUnit;var u=o.default.prototype.$isServer;function s(t){return null!=t}e.isServer=u},35:function(t,e,n){t.exports=!n(114)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},57:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}}]);