<template>
  <b-container>
    <h1 >
      My Favorites
      <img id="heartImg" src="../assets/fav2Img.png">
      <slot></slot>
    </h1>
    
    <br>
    <b-row v-for="(recipesList, index) in all_recipes" :key="index">
      <b-col v-for="r in recipesList" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  data() {
    return {
      recipes: [],
      all_recipes: [],
    };
  },
  mounted() {
    this.show_fav_recipes();
  },
  methods: {
    async show_fav_recipes() {
      try {
        const response = await this.axios.get(
          // "http://localhost:3000/recipes/random",
          process.env.VUE_APP_ROOT_API_KEY + "/users/favorites"
          // this.$root.store.server_domain + "/recipes/random",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        // const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
         this.calcAllRecipes();
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
     calcAllRecipes()
    {
      let counter = 0;
      let groupOf3 = [];
      for (let index = 0; index < this.recipes.length; index++) {
          if (counter ==2 || index === this.recipes.length - 1 ){
            groupOf3.push(this.recipes[index]);
            this.all_recipes.push(groupOf3);
            groupOf3 = [];
            counter = 0;
          }
          else
          {
            groupOf3.push(this.recipes[index]);
            counter++;
          }
        
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.recipePreview{
  margin: 10px;
}
h1{
font-family: 'Patrick Hand', cursive;
width: 33%;
margin-right: auto;
margin-top: 5%;
margin-bottom: 5%;
margin-left: auto;
font-size: 53px;
}
#heartImg
{
  height: 25%;
  width: 25%;
}
</style>
