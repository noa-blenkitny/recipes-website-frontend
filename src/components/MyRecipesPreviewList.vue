<template>
  <b-container>
    <h1>
      My Recipes
      <img id="hatImg" src="../assets/hat.png" />
      <slot></slot>
    </h1>
    <div v-if="all_recipes.length > 0">
      <b-row v-for="(recipesList, index) in all_recipes" :key="index">
        <b-col v-for="r in recipesList" :key="r.recipe_id">
          <MyRecipesPreview class="MyRecipesPreview" :recipe="r" />
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <h3>
        You have no recipes yet...
        <br />
        <br />
        To add a recipe click the "New Recipe" tab
      </h3>
    </div>
  </b-container>
</template>

<script>
import MyRecipesPreview from "./MyRecipesPreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    MyRecipesPreview,
  },
  data() {
    return {
      recipes: [],
      all_recipes: [],
    };
  },
  mounted() {
    this.show_my_recipes();
  },

  methods: {
    async show_my_recipes() {
      try {
        const response = await this.axios.get(
          process.env.VUE_APP_ROOT_API_KEY + "/users/myrecipes"
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        this.calcAllRecipes();
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    calcAllRecipes() {
      let counter = 0;
      let groupOf3 = [];
      for (let index = 0; index < this.recipes.length; index++) {
        if (counter == 2 || index === this.recipes.length - 1) {
          groupOf3.push(this.recipes[index]);
          this.all_recipes.push(groupOf3);
          groupOf3 = [];
          counter = 0;
        } else {
          groupOf3.push(this.recipes[index]);
          counter++;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.MyRecipesPreview {
  margin: 10px;
}
h1 {
  font-family: "Patrick Hand", cursive;
  width: 28%;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  font-size: 53px;
}
h3 {
  font-family: "Patrick Hand", cursive;
  margin-right: auto;
  margin-left: auto;
  margin-top: 17%;
  text-align: center;
  color: rgb(144, 144, 144);
}
#hatImg {
  height: 25%;
  width: 25%;
}
</style>
