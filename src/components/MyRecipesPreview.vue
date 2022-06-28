<template>
<div>
  <router-link
    :to="{ name: 'myfullrecipe', params: { recipeId: recipe.recipe_id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes }} likes</li>
        <!-- <img v-if="recipe.isVisited" src="../assets/eye.png" class = "visitedImg"/> -->
        <img v-if="recipe.vegan" src="../assets/vegansymbol.png" class = "veganImg"/>
        <img v-else-if="recipe.vegetarian" src="../assets/vegeterian.png" class = "visitedImg"/>
        <img v-if="recipe.glutenFree" src="../assets/glutenfree.png" class = "glutenfreeImg"/>
        
      </ul>
    </div>
  </router-link>
  <!-- <img v-if="!recipe.isFavorite" @click="addtofavorits" src="../assets/emptyheart.png"  class = "favImg" style="height:18px; width:18px;">
      <img v-else src="../assets/fullheart.png" class = "favImg"/> -->
      </div>
</template>

<script>
export default {
  
  // data() {
  //   return {
  //     is_logged_in
  //   };
  // },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
  };
  
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  overflow: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
.visitedImg
{
  width:28px;
  height:28px;
}
.favImg{
  width:20px;
  height:20px;
}
.veganImg{
  width:22px;
  height:28px;
}
.glutenfreeImg{
  width:22px;
  height:22px;
}

</style>
