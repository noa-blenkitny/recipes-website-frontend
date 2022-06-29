<template>
  <div>
    <b-card
      no-body
      :title="recipe.title"
      img-top
      class="mb-2"
      style="max-width: 20rem;"
      tag="article"
    >
      <router-link
        :to="{ name: 'myfullrecipe', params: { recipeId: recipe.recipe_id } }"
        class="recipe-preview"
      >
        <b-card-img :src="recipe.image" class="recipe-image"> </b-card-img>
      </router-link>
      <div class="recipe-footer">
        <b-card-title :title="recipe.title" class="recipe-title text-center">
          {{ recipe.title }}
        </b-card-title>
        <ul class="recipe-overview">
          <b-row>
            <b-col>
              <b-icon icon="clock"></b-icon>
              {{ recipe.readyInMinutes }}
              <span style="font-size: 10px;"> minutes </span>
            </b-col>
            <b-col>
              <b-icon icon="hand-thumbs-up"></b-icon>
              {{ recipe.popularity }}
              <span style="font-size: 10px;">likes </span>
            </b-col>
          </b-row>
          <b-row class="rowtocenter">
            <b-col sm="4" v-if="recipe.vegan">
              <img src="../assets/vegansymbol.png" class="veganImg" />
            </b-col>
            <b-col sm="4" v-else-if="recipe.vegetarian">
              <img src="../assets/vegeterian.png" class="vegetarianImg" />
            </b-col>
            <b-col sm="4">
              <img
                v-if="recipe.glutenFree"
                src="../assets/glutenfree.png"
                class="glutenfreeImg"
              />
            </b-col>
          </b-row>
        </ul>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.recipe-title{
  font-family: 'Patrick Hand', cursive;
}
.visitedImg
{
  width:28px;
  height:28px;
}
.favImg{
  width:20px;
  height:20px;
  margin-top: 4px;
  margin-right: 2px;
}
.veganImg{
  width:22px;
  height:28px;
  margin-bottom: 8px;
}
.glutenfreeImg{
  width:22px;
  height:22px;
}
.vegetarianImg{
  width:28px;
  height:28px;
}
.rowtocenter{
  margin: auto;
  width: 55%;
  padding-top: 10px;
}

</style>
