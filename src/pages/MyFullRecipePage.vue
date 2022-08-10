<template>
  <div class="container">
    <div v-if="recipe">
      
      
      <div>
        <h1 >{{ recipe.title }}</h1>
      </div>
      <b-row no-gutters>
        <b-col>
              <img :src="recipe.image" class="recipeimg" />
              </b-col>
              <b-col class="recipecol">
              <div>
                <b-icon icon="clock"></b-icon>
               {{ recipe.readyInMinutes }} <span  style="font-size: 10px;">minutes</span></div>
              <div>
                <div>
                <img
                src="../assets/dishchef.png"
                class="dishimg"
                />
                {{recipe.servings}} <span  style="font-size: 10px;">servings</span>
              </div>
              <b-icon icon="hand-thumbs-up"></b-icon>   
              {{ recipe.aggregateLikes }} <span  style="font-size: 10px;">likes</span></div>
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
              </b-col>
             </b-row>
             <b-row no-gutters class="recipe_body">
              <b-col>
            <span style="font-size: 25px; text-decoration: underline;">Ingredients:</span>
            <ul>
              <li
                v-for="(r, index) in recipe._extendedIngredients"
                :key="index + '_' + r"
              >
                {{ r }}
              </li>
            </ul>
            </b-col>
            <b-col class="instructions">
            <span style="font-size: 25px;text-decoration: underline;">Instructions:</span>
            <ol>
              <li
                v-for="(s, index) in recipe._analyzedInstructions"
                :key="index"
              >
                {{ s }}
              </li>
            </ol>
            </b-col>
             </b-row>>
          
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
            "/users/myrecipes/fulldetailes/" +
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
        servings,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
      } = response.data[0];

      let _analyzedInstructions = analyzedInstructions.split("$$$"); //change to $$$
      let _extendedIngredients = extendedIngredients.split("$$$"); //change to $$$
      let _recipe = {
        _analyzedInstructions,
        _extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        servings,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.container{
  margin-top: 3%;
  font-family: 'Patrick Hand', cursive;
  font-size: 20px;
}
.recipeimg{
  display: block;
  margin-left: 5%;
  margin-right: auto;
  width:97%;
  border-radius: 3px;
  /* height: 100px; */

}
.recipecol{
  margin-left: 5%;
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
.dishimg {
  width: 28px;
  height: 28px;
}
.glutenfreeImg {
  width: 22px;
  height: 22px;
}
h1{
  margin-left: 2%;
  margin-top: 5px;
  margin-bottom: 4%;
}
.recipe_body{
  margin-top: 3%;
  margin-left: 2%;
}
.instructions{
  margin-right: 3%;
}
</style>
