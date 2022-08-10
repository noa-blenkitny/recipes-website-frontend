<template>
  <b-container>
    <h1>
      Family Recipes
      <img id="familyImg" src="../assets/family.png">
      <slot></slot>
    </h1>
    <div v-if="recipes.length!=0">
    <b-row>
      <b-col v-for="r in recipes" :key="r.recipe_id">
        <FamilyRecipePreview class="FamilyRecipesPreview" :recipe="r" />
      </b-col>
    </b-row>
    </div>
    <div v-else>
      <h3>
        You have no family recipes...
      </h3>
    </div>
  </b-container>
</template>

<script>
import FamilyRecipePreview from "./FamilyRecipePreview.vue";
export default {
  name: "FamillyRecipePreviewList",
  components: {
    FamilyRecipePreview
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.show_family_recipes();
  },
  methods: {
    async show_family_recipes() {
      try {
        const response = await this.axios.get(
          process.env.VUE_APP_ROOT_API_KEY + "/users/familyrecipes",
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        
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
h1{
font-family: 'Patrick Hand', cursive;
width: 40%;
margin-right: auto;
margin-top: 5%;
margin-bottom: 5%;
margin-left: auto;
font-size: 53px;
}
#familyImg
{
  height: 17%;
  width: 17%;
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
