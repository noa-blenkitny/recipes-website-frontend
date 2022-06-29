<template>
  <div class="container">
    <h1 class="title">Search Page
    <b-icon icon="search"></b-icon>
    </h1>
    <!-- diet div -->
    <div>
      <multiselect
        v-model="value_diet"
        :options="diets"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Diet"
        label="name"
        track-by="name"
      >
        <template slot="selection" slot-scope="{ isOpen }"
          ><span
            class="multiselect__single"
            v-if="value_diet.length &amp;&amp; !isOpen"
            >{{ value_diet.length }} diet options selected</span
          ></template
        >
      </multiselect>
      <br />
      <!-- <pre class="language-json"><code></code></pre> -->
    </div>

    <!-- cuisine div -->
    <div>
      <multiselect
        v-model="value_cuisine"
        :options="cuisines"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Cuisine"
        label="name"
        track-by="name"
      >
        <template slot="selection" slot-scope="{ isOpen }"
          ><span
            class="multiselect__single"
            v-if="value_cuisine.length &amp;&amp; !isOpen"
            >{{ value_cuisine.length }} cusine options selected</span
          ></template
        >
      </multiselect>
      <br />
      <!-- <pre class="language-json"><code></code></pre> -->
    </div>

    <!-- intolerance div -->
    <div>
      <multiselect
        v-model="value_intolerance"
        :options="intolerances"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Intolerance"
        label="name"
        track-by="name"
      >
        <template slot="selection" slot-scope="{  isOpen }"
          ><span
            class="multiselect__single"
            v-if="value_intolerance.length &amp;&amp; !isOpen"
            >{{ value_intolerance.length }} intolerance options selected</span
          ></template
        >
      </multiselect>
      <br />
      <!-- <pre class="language-json"><code></code></pre> -->
    </div>

    <!-- sort div -->
    <div>
      <multiselect
        v-model="value_sort"
        :options="sorts"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Sort by"
        label="name"
        track-by="name"
      >
        <template slot="selection" slot-scope="{  values, isOpen }"
          ><span
            class="multiselect__single"
            v-if="values.length &amp;&amp; !isOpen"
            >{{ values }} sort selected</span
          ></template
        >
      </multiselect>
      <!-- <pre class="language-json"><code></code></pre> -->
    </div>

    <!-- number retrieve -->
    <div class="number_label">
      <label id="number_label" for="demo-sb" style="margin-right: 10px;"
        >Number to retrieve:
      </label>
      <b-form-spinbutton
        id="sb-inline"
        v-model="value_number"
        inline
        min="5"
        max="15"
        step="5"
      ></b-form-spinbutton>
    </div>
    <!-- search div -->
    <div>
      <b-form @submit.prevent="onSearch">
        <b-form-group id="input-group-search_input" label-for="search_input">
          <b-row class="my-1">
            <b-col sm="9">
              <b-form-input
                id="search_input"
                v-model="$v.form.text.$model"
                :state="validateState('text')"
                placeholder="Search"
                type="text"
                autocomplete="off"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.text.required">
                search query is required
              </b-form-invalid-feedback>
            </b-col>
            <b-col sm="0.5">
              <b-button class="mysearchbtn" type="submit">Search</b-button>
            </b-col>
            <b-col sm="0.5">
              <b-button v-if="hasRecentSearch" @click="showRecentSearch" variant="outline-secondary" type="button">Show Recent Search</b-button>
            </b-col>
          </b-row>
        </b-form-group>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Search failed: {{ form.submitError }}
      </b-alert>
    </div>
    <!-- search result -->
    <div id="searchDiv">
      <b-row>
        <RecipeSearch
          class="recipeSearch"
          :value_diet="value_diet"
          :value_cuisine="value_cuisine"
          :value_intolerance="value_intolerance"
          :value_sort="value_sort"
          :value_number="value_number"
          :text="$v.form.text.$model"
        />
      </b-row>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import RecipeSearch from "../components/RecipeSearch";
//import diets from "../assets/diets";
import { required, alpha } from "vuelidate/lib/validators";

export default {
  components: {
    Multiselect,
    RecipeSearch,
  },
  data() {
    return {
      hasRecentSearch: false,
      value_diet: [],
      value_cuisine: [],
      value_intolerance: [],
      value_sort: [],
      cuisines: [
        { name: "African" },
        { name: "American" },
        { name: "British" },
        { name: "Cajun" },
        { name: "Caribbean" },
        { name: "Chinese" },
        { name: "Eastern European" },
        { name: "European" },
        { name: "French" },
        { name: "German" },
        { name: "Greek" },
        { name: "Indian" },
        { name: "Irish" },
        { name: "Italian" },
        { name: "Japanese" },
        { name: "Jewish" },
        { name: "Korean" },
        { name: "Latin American" },
        { name: "Mediterranean" },
        { name: "Mexican" },
        { name: "Middle Eastern" },
        { name: "Nordic" },
        { name: "Southern" },
        { name: "Spanish" },
        { name: "Thai" },
        { name: "Vietnamese" },
      ],
      value_number: 5,
      form: {
        submitError: undefined,
        text: "",
      },
      diets: [
        { name: "Gluten Free" },
        { name: "Ketogenic" },
        { name: "Vegetarian" },
        { name: "Lacto-Vegetarian" },
        { name: "Ovo-Vegetarian" },
        { name: "Vegan" },
        { name: "Pescetarian" },
        { name: "Paleo" },
        { name: "Primal" },
        { name: "Low FODMAP" },
        { name: "Whole30" },
      ],
      intolerances: [
        { name: "Dairy" },
        { name: "Egg" },
        { name: "Gluten" },
        { name: "Grain" },
        { name: "Peanut" },
        { name: "Seafood" },
        { name: "Sesame" },
        { name: "Shellfish" },
        { name: "Soy" },
        { name: "Sulfite" },
        { name: "Tree Nut" },
        { name: "Wheat" },
      ],
      sorts: [{ name: "Popularity" }, { name: "Time" }],
      validated: false,
    };
  },
  methods: {
    async SearcgRecipes() {
      try {
        let recentSearch = sessionStorage.getItem("recentSearch");
        let recentSearchParams = {
          text: this.$v.form.text.$model,
          value_diet: this.value_diet,
          value_cuisine: this.value_cuisine,
          value_intolerance: this.value_intolerance,
          value_sort: this.value_sort,
          value_number: this.value_number,
        };

        if (recentSearch != null) {
          sessionStorage.removeItem("recentSearch");

        }
        sessionStorage.setItem("recentSearch", JSON.stringify(recentSearchParams));
        this.hasRecentSearch = true;
        return await this.$children[6].updateRecipes();
      } catch {
        this.form.submitError = err.response.data.message;
      }
    },
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    onSearch() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.SearcgRecipes();
    },
    showRecentSearch()
    {
      try{
        
      let recentSearch = JSON.parse(sessionStorage.getItem("recentSearch"));
      this.value_diet= recentSearch.value_diet;
      this.value_cuisine= recentSearch.value_cuisine;
      this.value_intolerance= recentSearch.value_intolerance;
      this.value_sort= recentSearch.value_sort;
      this.value_number= recentSearch.value_number;
      this.$v.form.text.$model = recentSearch.text;
      }
      catch
      {
        console.log("in catch");
      }
    }
  },
  mounted() {
    let recentSearch = sessionStorage.getItem("recentSearch");
    if (recentSearch != null) {
      this.hasRecentSearch = true;
    }
    else{
      this.hasRecentSearch = false;
    }
    // console.log(this.$children)
  },
  validations: {
    form: {
      text: {
        required
      },
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<style>
h1{
width: 33%;
margin-right: auto;
margin-top: 5%;
margin-bottom: 5%;
margin-left: auto;
font-size: 53px;
}
.mysearchbtn{
  background: rgb(13, 84, 87);
  color: white;
  font-family: 'Patrick Hand', cursive;
  letter-spacing: 1px;

}
.mysearchbtn:hover{
  background-color: rgb(25, 103, 105);

}
.number_label{
  margin-top: 15px;
  margin-bottom: 5px;
}
.container{
  font-family: 'Patrick Hand', cursive!important;
  letter-spacing: 1px;
}

</style>
