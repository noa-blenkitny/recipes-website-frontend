<template>
  <b-container>
    <h1 >
      My Favorites
      <img id="heartImg" src="../assets/fav2Img.png">
      <slot></slot>
    </h1>
    
    <br>
    <div v-if="show_recipes">
    <b-row v-for="(recipesList, index) in all_recipes" :key="index">
      <b-col v-for="r in recipesList" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
    </div>
    <div v-else>
      <h3>
        You have no favorites recipes yet...
        <br />
        <br />
        To add a favorite recipe click the heart icon on the recipe preview/recipe page
      </h3>
    </div>
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
      show_recipes: true,
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
        
        );

        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
         this.calcAllRecipes();
         if(this.recipes.length>0){
          this.show_recipes=true;
         }
         else{
          this.show_recipes=false;
         }
        
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
width: 40%;
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
h3 {
  font-family: "Patrick Hand", cursive;
  margin-right: auto;
  margin-left: auto;
  margin-top: 17%;
  text-align: center;
  color: rgb(144, 144, 144);
}
</style>
