<template>
<div>
  <b-card no-body
  :title="recipe.title"
  img-top
  class="mb-2"
  style="max-width: 20rem;"
  tag="article"
  >
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
  <b-card-img
  :src="recipe.image" class="recipe-image">
  </b-card-img>
    <!-- <div class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </div> -->
  </router-link>
      <div class="recipe-footer">
      <b-card-title :title="recipe.title" class="recipe-title text-center">
        {{ recipe.title }}
      </b-card-title>
      <ul class="recipe-overview">
        <b-row>
          <b-col>
            <b-icon icon="clock"></b-icon>
        {{ recipe.readyInMinutes }} <span style="font-size: 10px;"> minutes
        </span>
        </b-col>
        <b-col>
          <b-icon icon="hand-thumbs-up"></b-icon>
        {{ recipe.popularity }} <span style="font-size: 10px;">likes </span>
        </b-col>
        </b-row>
        <b-row class="rowtocenter">
          <b-col sm="4" v-if="recipe.vegan">
        <img src="../assets/vegansymbol.png" class = "veganImg"/>
        </b-col>
        <b-col sm="4" v-else-if="recipe.vegetarian">
        <img src="../assets/vegeterian.png" class = "vegetarianImg"/>
        </b-col>
        <b-col sm="4">
        <img v-if="recipe.glutenFree" src="../assets/glutenfree.png" class = "glutenfreeImg"/>
        </b-col>
        </b-row>
        
        <img v-if="recipe.isVisited" src="../assets/eye.png" class = "visitedImg float-right" />
        <img v-if="!recipe.isFavorite" @click="addtofavorits" src="../assets/emptyheart.png"  class = "favImg float-right" style="height:18px; width:18px;">
        <img v-else src="../assets/fullheart.png" class = "favImg float-right"/>
      </ul>
    </div>
      </b-card>
      </div>
</template>

<script>
export default {

  props: {
    recipe: {
      type: Object,
      required: true
    }
,
// created() {
//         this.$root.$refs.RecipePreview = this;
//     },
  },methods:
  {
    async addtofavorits(){
      
       if(!this.$root.store.username){
          alert("you should log in first")
       }
       else{
        try {
        const response = await this.axios.post(
          // "http://localhost:3000/recipes/random",
          process.env.VUE_APP_ROOT_API_KEY + "/users/favorites",
          // this.$root.store.server_domain + "/recipes/random",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        {
            recipeId: this.recipe.id,
          }
        );
        this.recipe.isFavorite = true;
       }
        catch (error) {
        console.log(error);
      }
    }
  }
  }
  
};
</script>

<style scoped>
.recipe-title{
  font-family: 'Patrick Hand', cursive;
}
.visitedImg
{
  width:28px;
  height:28px;
}
.favImg{
  width:20px;
  height:20px;
  margin-top: 4px;
  margin-right: 2px;
}
.veganImg{
  width:22px;
  height:28px;
  margin-bottom: 8px;
}
.glutenfreeImg{
  width:22px;
  height:22px;
}
.vegetarianImg{
  width:28px;
  height:28px;
}
.rowtocenter{
  margin: auto;
  width: 55%;
  padding-top: 10px;
}

</style>
