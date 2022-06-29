<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
        <h3>Summary: {{recipe.summary}}</h3>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
              <img
                v-if="recipe.vegan"
                src="../assets/vegansymbol.png"
                class="veganImg"
              />
              <img
                v-else-if="recipe.vegetarian"
                src="../assets/vegeterian.png"
                class="visitedImg"
              />
              <img
                v-if="recipe.glutenFree"
                src="../assets/glutenfree.png"
                class="glutenfreeImg"
              />
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe._extendedIngredients"
                :key="index + '_' + r"
              >
                {{ r }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li
                v-for="(s, index) in recipe._analyzedInstructions"
                :key="index"
              >
                {{ s }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
    };
  },
  async created() {
    try {
      let response;
      try {
        response = await this.axios.get(
          process.env.VUE_APP_ROOT_API_KEY +
            "/users/familyrecipes/fulldetailes/" +
            this.$route.params.recipeId
        );

        if (response.status !== 200) {
          this.$router.replace("/NotFound");
          console.log("response.status", response.status);
          return;
        }
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        summary
      } = response.data[0];

      let _analyzedInstructions = analyzedInstructions.split("$$$"); //change to $$$
      let _extendedIngredients = extendedIngredients.split("$$$"); //change to $$$
      let _recipe = {
        _analyzedInstructions,
        _extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        summary
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
.visitedImg {
  width: 28px;
  height: 28px;
}
.favImg {
  width: 20px;
  height: 20px;
}
.veganImg {
  width: 22px;
  height: 28px;
}
.glutenfreeImg {
  width: 22px;
  height: 22px;
}
</style>
