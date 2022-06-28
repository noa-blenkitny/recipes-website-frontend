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
    this.show_my_recipes();
  },
  methods: {
    async show_my_recipes() {
      try {
        const response = await this.axios.get(
          process.env.VUE_APP_ROOT_API_KEY + "/users/myrecipes",
        );
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
