<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <RecipePreviewList title="Explore this recipes" class="RandomRecipes center" />
    <button @click="clickgenerateRandomRecipes">Random</button>
    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
    <RecipePreviewVisitedList v-else 
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: false,
        center: true
      }"
      disabled
    ></RecipePreviewVisitedList>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import RecipePreviewVisitedList from "../components/RecipePreviewVisitedList";
export default {
  components: {
    RecipePreviewList,
    RecipePreviewVisitedList

  },

  methods:
  {
    async clickgenerateRandomRecipes(){
      
       return this.$children[0].updateRecipes()
    }
  },
  mounted()
  {
    console.log(this.$children)
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
