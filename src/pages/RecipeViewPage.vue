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
              <div>Likes: {{ recipe.popularity }} likes</div>
              <img
                v-if="recipe.isVisited"
                src="../assets/eye.png"
                class="visitedImg"
              />
              <img
                v-if="!recipe.isFavorite"
               @click="addtofavorits"
                src="../assets/emptyheart.png"
                class="favImg"
                style="height:18px; width:18px;"
              />
              <img v-else src="../assets/fullheart.png" class="favImg" />
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
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
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
          process.env.VUE_APP_ROOT_API_KEY + "/recipes/fullDetailes",
          // this.$root.store.server_domain + "recipes/fullDetailes",
          // "http://localhost:3000/recipes/fullDetailes",
          {
            params: { recipeId: this.$route.params.recipeId },
          }
        );
        if (response.status !== 200) this.$router.replace("/NotFound");
        if (this.$root.store.username) {
          
          await this.axios.post(
            process.env.VUE_APP_ROOT_API_KEY + "/users/visited",
            // this.$root.store.server_domain + "users/visited",
            // "http://localhost:3000/users/visited",
            {
              recipeId: this.$route.params.recipeId,
            }
            // {
            //   withCredentials: true
            // }
          );
        }
        console.log("response.status", response.status);
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        id,
        analyzedInstructions,
        instructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title,
        isFavorite,
        isVisited,
        glutenFree,
        vegetarian,
        vegan,
      } = response.data;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        id,
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title,
        isFavorite,
        isVisited,
        glutenFree,
        vegetarian,
        vegan,
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async addtofavorits() {
      if (!this.$root.store.username) {
        alert("you should loged in first");
      } else {
        try {
          console.log(this.recipe.id);
          const response = await this.axios.post(
            process.env.VUE_APP_ROOT_API_KEY + "/users/favorites",
            {
              recipeId: this.recipe.id,
            }
          );
          this.recipe.isFavorite = true;
        } catch (error) {
          console.log(error);
        }
      }
    },
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
.visitedImg
{
  width:28px;
  height:28px;
}
.favImg{
  width:20px;
  height:20px;
}
.veganImg{
  width:22px;
  height:28px;
}
.glutenfreeImg{
  width:22px;
  height:22px;
}
</style>
