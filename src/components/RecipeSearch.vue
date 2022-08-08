<template>
  <b-container v-if="hasResults">
    <b-row v-for="(recipesList, index) in all_recipes" :key="index">
      <b-col v-for="r in recipesList" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
  <b-container v-else>
    <p class="noresults">no results found!</p>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipeSearch",
  components: {
    RecipePreview,
  },
  data() {
    return {
      recipes: [],
      all_recipes: [],
      hasResults: true,
    };
  },
  props: {
    value_diet: {
      type: Array,
    },
    value_cuisine: {
      type: Array,
    },
    value_intolerance: {
      type: Array,
    },
    value_sort: {
      type: String,
    },
    value_number: {
      type: Number,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    final_value_sort: {
      get() {
        if (this.value_sort!== null) {
          return this.value_sort.name;
        } else {
          return "";
        }

        // return this.value_sort;
      },
    },
    final_value_cuisine: {
      get() {
        if (this.value_cuisine.length > 0) {
          return this.value_cuisine.map((element) => element.name).join();
        } else {
          return "";
        }
      },
    },
    final_value_diet: {
      get() {
        if (this.value_diet.length > 0) {
          return this.value_diet.map((element) => element.name).join();
        } else {
          return "";
        }
      },
    },
    final_value_intolerance: {
      get() {
        if (this.value_intolerance.length > 0) {
          return this.value_intolerance.map((element) => element.name).join();
        } else {
          return "";
        }
      },
    },
  },
  methods: {
    calcAllRecipes()
    {
      this.all_recipes = [];
      let counter = 0;
      let groupOf3 = [];
      for (let index = 0; index < this.recipes.length; index++) {
          if (counter ==2 || index === this.recipes.length - 1){
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
    },
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          // "http://localhost:3000/recipes/random",
          process.env.VUE_APP_ROOT_API_KEY +
            "/recipes/search/query/" +
            this.text +
            "/number/" +
            this.value_number +
            "?cuisine=" +
            this.final_value_cuisine +
            "&diet=" +
            this.final_value_diet +
            "&intolerances=" +
            this.final_value_intolerance +
            "&sort=" +
            this.final_value_sort
                 );

        // alert(this.value_sort[0]);
        // const recipes = response.data.recipes;
        const recipes = response.data;

        this.recipes = [];
        this.all_recipes = [];
        this.recipes.push(...recipes);
        if (recipes.length > 0) {
          this.hasResults = true;
          this.calcAllRecipes();
        } else {
          this.hasResults = false;
        }
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
h1 {
  font-family: "Patrick Hand", cursive;
  width: 33%;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  font-size: 53px;
}
.noresults{
  font-family: "Patrick Hand", cursive;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5%;
  text-align: center;
  color: rgb(144, 144, 144);
  font-size: 25px;
}
</style>
