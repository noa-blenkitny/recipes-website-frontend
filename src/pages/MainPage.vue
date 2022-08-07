<template>
  <div class="container">
    <b-row>
      <b-col class="align-middle">
    <RecipePreviewList title="Explore this recipes" class="RandomRecipes center" />
    <button @click="clickgenerateRandomRecipes" class="randBtn">Random</button>
    </b-col>
    <!-- <router-link v to="/login" tag="button">You need to Login to vue this</router-link> -->
    <b-col>
    <LoginPage v-if="!$root.store.username" right></LoginPage>
    
    <RecipePreviewVisitedList v-else 
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: false,
        center: true
      }"
      disabled
    ></RecipePreviewVisitedList>
    </b-col>
    </b-row>
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
import LoginPage from "./LoginPage";
export default {
  components: {
    RecipePreviewList,
    RecipePreviewVisitedList,
    LoginPage

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
*{
  margin-top: 15px;
}
.randBtn{
  background-color: rgb(13, 84, 87);
  color: white;
  border-radius: 20px;
  padding: 12px 28px;
  border: none;
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  margin-left: 18%;
  margin-bottom: 20px;
}
.randBtn:hover{
  background-color: rgb(25, 103, 105);
}
</style>
