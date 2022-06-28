<template>
  <b-container>
    <h3>
      My Recipes
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.recipe_id">
        <MyRecipesPreview class="MyRecipesPreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MyRecipesPreview from "./MyRecipesPreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    MyRecipesPreview
  },
  data() {
    return {
      recipes: []
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
          process.env.VUE_APP_ROOT_API_KEY + "/users/myrecipes",
          // this.$root.store.server_domain + "/recipes/random",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        // const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
