<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe._extendedIngredients"
                :key="index + '_' + r"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="(s, index) in recipe._analyzedInstructions" :key="index">
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
      // response = this.$route.params.response;

      try {

        response = await this.axios.get(
            process.env.VUE_APP_ROOT_API_KEY +"/users/myrecipes/fulldetailes",
          // this.$root.store.server_domain + "recipes/fullDetailes",
          // "http://localhost:3000/recipes/fullDetailes",
          {
             recipeId: this.$route.params.recipeId
          }
        );
        if (response.status !== 200) this.$router.replace("/NotFound");
        console.log("response.status", response.status);
       
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
      } = response.data;

      let _analyzedInstructions = analyzedInstructions.split(',')//change to $$$
      let _extendedIngredients = extendedIngredients.split(',')//change to $$$

      let _recipe = {
        _analyzedInstructions,
        _extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
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
</style>
