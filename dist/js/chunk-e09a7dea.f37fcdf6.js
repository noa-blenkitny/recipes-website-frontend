(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e09a7dea"],{"6ab5":function(e,t,r){"use strict";r.r(t);var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("RecipePreviewFavList")],1)},n=[],i=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("b-container",[c("h1",[e._v(" My Favorites "),c("img",{attrs:{id:"heartImg",src:r("a443")}}),e._t("default")],2),c("br"),e._l(e.all_recipes,(function(t,r){return c("b-row",{key:r},e._l(t,(function(e){return c("b-col",{key:e.id},[c("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)}))],2)},s=[],a=r("2909"),o=(r("96cf"),r("1da1")),u=r("832a"),p={name:"RecipePreviewList",components:{RecipePreview:u["a"]},data:function(){return{recipes:[],all_recipes:[]}},mounted:function(){this.show_fav_recipes()},methods:{show_fav_recipes:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("https://bgnbrecipes.cs.bgu.ac.il/users/favorites");case 3:c=t.sent,n=c.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(a["a"])(n)),e.calcAllRecipes(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},calcAllRecipes:function(){for(var e=0,t=[],r=0;r<this.recipes.length;r++)2==e||r===this.recipes.length-1?(t.push(this.recipes[r]),this.all_recipes.push(t),t=[],e=0):(t.push(this.recipes[r]),e++)}}},l=p,f=(r("6c56"),r("2877")),h=Object(f["a"])(l,i,s,!1,null,"c07f23b0",null),v=h.exports,b={components:{RecipePreviewFavList:v},name:"FavoritesPage",data:function(){return{}},mounted:function(){},methods:{}},d=b,w=Object(f["a"])(d,c,n,!1,null,"3e1ae0f8",null);t["default"]=w.exports},"6c56":function(e,t,r){"use strict";var c=r("bce1"),n=r.n(c);n.a},a443:function(e,t,r){e.exports=r.p+"img/fav2Img.bdc1e54d.png"},bce1:function(e,t,r){}}]);
//# sourceMappingURL=chunk-e09a7dea.f37fcdf6.js.map