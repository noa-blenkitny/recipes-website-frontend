(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35baac52"],{"0f87":function(e,t,r){},"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),s=r("ae40"),c=a("reduce"),o=s("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!o},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},5319:function(e,t,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),s=r("50c4"),c=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("14c3"),p=Math.max,d=Math.min,f=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,x=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,m=h?"$":"$0";return[function(r,n){var i=o(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!h&&b||"string"===typeof n&&-1===n.indexOf(m)){var a=r(t,e,this,n);if(a.done)return a.value}var o=i(e),f=String(this),v="function"===typeof n;v||(n=String(n));var g=o.global;if(g){var _=o.unicode;o.lastIndex=0}var y=[];while(1){var I=l(o,f);if(null===I)break;if(y.push(I),!g)break;var R=String(I[0]);""===R&&(o.lastIndex=u(f,s(o.lastIndex),_))}for(var w="",S=0,C=0;C<y.length;C++){I=y[C];for(var $=String(I[0]),k=p(d(c(I.index),f.length),0),T=[],A=1;A<I.length;A++)T.push(x(I[A]));var P=I.groups;if(v){var O=[$].concat(T,k,f);void 0!==P&&O.push(P);var U=String(n.apply(void 0,O))}else U=E($,f,k,T,P,n);k>=S&&(w+=f.slice(S,k)+U,S=k+$.length)}return w+f.slice(S)}];function E(e,r,n,i,s,c){var o=n+e.length,u=i.length,l=g;return void 0!==s&&(s=a(s),l=v),t.call(c,l,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":c=s[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var p=f(l/10);return 0===p?t:p<=u?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):t}c=i[l-1]}return void 0===c?"":c}))}}))},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.recipe?n("div",[n("div",{staticClass:"mt-3 mb-4"},[n("h1",[e._v(e._s(e.recipe.title))])]),n("b-row",{attrs:{"no-gutters":""}},[n("b-col",[n("img",{staticClass:"recipeimg",attrs:{src:e.recipe.image}})]),n("b-col",{staticClass:"recipecol"},[n("div",[n("b-icon",{attrs:{icon:"clock"}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" "),n("span",{staticStyle:{"font-size":"10px"}},[e._v("minutes")])],1),n("div",[n("img",{staticClass:"dishimg",attrs:{src:r("f110")}}),e._v(" "+e._s(e.recipe.servings)+" "),n("span",{staticStyle:{"font-size":"10px"}},[e._v("servings")])]),n("div",[n("b-icon",{attrs:{icon:"hand-thumbs-up"}}),e._v(" "+e._s(e.recipe.popularity)+" "),n("span",{staticStyle:{"font-size":"10px"}},[e._v("likes")])],1),e.recipe.vegan?n("img",{staticClass:"veganImg",attrs:{src:r("5e60")}}):e.recipe.vegetarian?n("img",{staticClass:"visitedImg",attrs:{src:r("8dde")}}):e._e(),e.recipe.glutenFree?n("img",{staticClass:"glutenfreeImg",attrs:{src:r("97fd")}}):e._e()])],1),n("b-row",{staticStyle:{"margin-left":"25px","margin-top":"5px"}},[n("div",[e.recipe.isFavorite?n("img",{staticClass:"favImg",attrs:{src:r("e029")}}):n("img",{staticClass:"favImg",staticStyle:{height:"18px",width:"18px"},attrs:{src:r("754d")},on:{click:e.addtofavorits}}),e.recipe.isVisited?n("img",{staticClass:"visitedImg",attrs:{src:r("9864")}}):e._e()])]),n("b-row",{staticClass:"recipe_body",attrs:{"no-gutters":""}},[n("b-col",[n("span",{staticStyle:{"font-size":"25px","text-decoration":"underline"}},[e._v("Ingredients:")]),n("ul",e._l(e.recipe.extendedIngredients,(function(t,r){return n("li",{key:r+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),n("b-col",{staticClass:"instructions"},[n("span",{staticStyle:{"font-size":"25px","text-decoration":"underline"}},[e._v("Instructions:")]),n("ol",e._l(e.recipe._instructions,(function(t){return n("li",{key:t.number},[e._v(" "+e._s(t.step)+" ")])})),0)])],1),e._v("> ")],1):e._e()])},i=[],a=(r("99af"),r("d81d"),r("13d5"),r("b0c0"),r("ac1f"),r("5319"),r("2909")),s=(r("96cf"),r("1da1")),c={data:function(){return{recipe:null}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,i,s,c,o,u,l,p,d,f,v,g,x,h,b,m,E;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,t.next=4,e.axios.get("https://bgnbrecipes.cs.bgu.ac.il/recipes/fullDetailes",{params:{recipeId:e.$route.params.recipeId}});case 4:if(r=t.sent,200!==r.status&&e.$router.replace("/NotFound"),!e.$root.store.username){t.next=9;break}return t.next=9,e.axios.post("https://bgnbrecipes.cs.bgu.ac.il/users/visited",{recipeId:e.$route.params.recipeId});case 9:console.log("response.status",r.status),t.next=17;break;case 12:return t.prev=12,t.t0=t["catch"](1),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 17:n=r.data,i=n.id,s=n.analyzedInstructions,c=n.instructions,o=n.extendedIngredients,u=n.popularity,l=n.readyInMinutes,p=n.servings,d=n.image,f=n.title,v=n.isFavorite,g=n.isVisited,x=n.glutenFree,h=n.vegetarian,b=n.vegan,m=s.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(a["a"])(e),Object(a["a"])(t))}),[]),E={id:i,instructions:c,_instructions:m,analyzedInstructions:s,extendedIngredients:o,popularity:u,readyInMinutes:l,servings:p,image:d,title:f,isFavorite:v,isVisited:g,glutenFree:x,vegetarian:h,vegan:b},e.recipe=E,t.next=26;break;case 23:t.prev=23,t.t1=t["catch"](0),console.log(t.t1);case 26:case"end":return t.stop()}}),t,null,[[0,23],[1,12]])})))()},methods:{addtofavorits:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$root.store.username){t.next=4;break}alert("you should loged in first"),t.next=15;break;case 4:return t.prev=4,console.log(e.recipe.id),t.next=8,e.axios.post("https://bgnbrecipes.cs.bgu.ac.il/users/favorites",{recipeId:e.recipe.id});case 8:t.sent,e.recipe.isFavorite=!0,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,12]])})))()}}},o=c,u=(r("b370"),r("2877")),l=Object(u["a"])(o,n,i,!1,null,"2937369e",null);t["default"]=l.exports},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],p=o||l||u;p&&(c=function(e){var t,r,i,c,p=this,d=u&&p.sticky,f=n.call(p),v=p.source,g=0,x=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),x=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(v="(?: "+v+")",x=" "+x,g++),r=new RegExp("^(?:"+v+")",f)),l&&(r=new RegExp("^"+v+"$(?!\\s)",f)),o&&(t=p.lastIndex),i=a.call(d?r:p,x),d?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=p.lastIndex,p.lastIndex+=i[0].length):p.lastIndex=0:o&&i&&(p.lastIndex=p.global?i.index+i[0].length:t),l&&i&&i.length>1&&s.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),e.exports=c},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),s=r("861d"),c=r("7b0b"),o=r("50c4"),u=r("8418"),l=r("65f0"),p=r("1dde"),d=r("b622"),f=r("2d00"),v=d("isConcatSpreadable"),g=9007199254740991,x="Maximum allowed index exceeded",h=f>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),b=p("concat"),m=function(e){if(!s(e))return!1;var t=e[v];return void 0!==t?!!t:a(e)},E=!h||!b;n({target:"Array",proto:!0,forced:E},{concat:function(e){var t,r,n,i,a,s=c(this),p=l(s,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?s:arguments[t],m(a)){if(i=o(a.length),d+i>g)throw TypeError(x);for(r=0;r<i;r++,d++)r in a&&u(p,d,a[r])}else{if(d>=g)throw TypeError(x);u(p,d++,a)}return p.length=d,p}})},"9f7f":function(e,t,r){"use strict";var n=r("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b370:function(e,t,r){"use strict";var n=r("0f87"),i=r.n(n);i.a},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),s=r("50c4"),c=function(e){return function(t,r,c,o){n(r);var u=i(t),l=a(u),p=s(u.length),d=e?p-1:0,f=e?-1:1;if(c<2)while(1){if(d in l){o=l[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in l&&(o=r(o,l[d],d,u));return o}};e.exports={left:c(!1),right:c(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),s=r("9263"),c=r("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),p=a("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var v=a(e),g=!i((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),x=g&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!g||!x||"replace"===e&&(!u||!l||d)||"split"===e&&!f){var h=/./[v],b=r(v,""[e],(function(e,t,r,n,i){return t.exec===s?g&&!i?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=b[0],E=b[1];n(String.prototype,e,m),n(RegExp.prototype,v,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}p&&c(RegExp.prototype[v],"sham",!0)}},f110:function(e,t,r){e.exports=r.p+"img/dishchef.79cfc610.png"}}]);
//# sourceMappingURL=chunk-35baac52.23928920.js.map