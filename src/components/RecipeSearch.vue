<template>
  <b-container v-if="hasResults">
    <b-row >
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
  <b-container v-else>
    <p> no results found!</p>
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
      hasResults:true
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
      type: Array,
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
    final_value_sort:{
      get()
      {
        if (this.value_sort.length > 0) {
          return this.value_sort[0];
        } else {
          return "";
        }
            
        // return this.value_sort;
        
      }
    },
    final_value_cuisine:
    {
      get()
      {
        if (this.value_cuisine.length > 0) {
          return (this.value_cuisine.map(
            (element) => element.name
          )).join();
        }
        else {
          return "";
        }
      }
    },
      final_value_diet:
    {
      get()
      {
        if (this.value_diet.length > 0) {
          return (this.value_diet.map(
            (element) => element.name
          )).join();
        }
        else {
          return "";
        }
      }
    },   
    final_value_intolerance:
    {
      get()
      {
        if (this.value_intolerance.length > 0) {
          return (this.value_intolerance.map(
            (element) => element.name
          )).join();
        }
        else {
          return "";
        }
      }
    },
  },
  methods: {
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
          //   {
          // //     params: { searchQuery: this.text,
          // //         num: this.value_number,
          // //         cuisine: this.value_cuisine,
          // //         diet: this.value_diet,
          // //         intolerances: this.value_intolerance,
          // //         sort: this.value_sort
          // //   }
          //   }
          // this.$root.store.server_domain + "/recipes/random",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        // const recipes = response.data.recipes;
        const recipes = response.data;
        
        this.recipes = [];
        this.recipes.push(...recipes);
        if(recipes.length > 0)
        {
          this.hasResults = true;
        }
        else
        {
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
h1{
font-family: 'Patrick Hand', cursive;
width: 33%;
margin-right: auto;
margin-top: 5%;
margin-bottom: 5%;
margin-left: auto;
font-size: 53px;
}
</style>
