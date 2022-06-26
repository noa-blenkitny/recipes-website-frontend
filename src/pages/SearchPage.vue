<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
  <!-- diet div -->
  <div>
  <multiselect v-model="value_diet" :options="diets" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Diet" label="name" track-by="name">
    <template slot="selection" slot-scope="{ isOpen }"><span class="multiselect__single" v-if="value_diet.length &amp;&amp; !isOpen">{{ value_diet.length }} diet options selected</span></template>
  </multiselect>
  <br>
  <!-- <pre class="language-json"><code></code></pre> -->
  </div>

<!-- cuisine div -->
<div>
  <multiselect v-model="value_cuisine" :options="cuisines" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Cuisine" label="name" track-by="name">
    <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single" v-if="value_cuisine.length &amp;&amp; !isOpen">{{ values.length }} cusine options selected</span></template>
  </multiselect>
  <br>
  <!-- <pre class="language-json"><code></code></pre> -->
  </div>

  <!-- intolerance div -->
<div>
  <multiselect v-model="value_intolerance" :options="intolerances" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Intolerance" label="name" track-by="name">
    <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single" v-if="value_intolerance.length &amp;&amp; !isOpen">{{values.length}} intolerance options selected</span></template>
  </multiselect>
  <br>
  <!-- <pre class="language-json"><code></code></pre> -->
  </div>

<!-- sort div -->
<div>
  <multiselect v-model="value_sort" :options="sorts" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Sort by" label="name" track-by="name">
    <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values }} sort selected</span></template>
  </multiselect>
  <!-- <pre class="language-json"><code></code></pre> -->
  </div>

<!-- number retrieve -->
  <div>
    <label id="number_label" for="demo-sb" style="margin-right: 10px;">Number to retrieve </label>
    <b-form-spinbutton id="sb-inline" v-model="value_number" inline min="5" max="15" step="5"></b-form-spinbutton>
  </div>
  <!-- search div -->
  <div>
    <b-form @submit.prevent="SearcgRecipes">
    <b-row class="my-1">
    <b-col sm="0.5">
        <b-icon icon="search"></b-icon>
      </b-col>
      <b-col sm="9">
        <b-form-input id="search_input" v-model="text" :state="validateState('search_input')" placeholder="Search"></b-form-input>
      </b-col>
      <b-col sm="0.5">
         <b-button variant="outline-info" type="submit">Search</b-button>
      </b-col>
      </b-row>
       <b-form-invalid-feedback v-if="!$v.form.search_input.required">
          search query is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.search_input.alpha">
          should contain only characters
        </b-form-invalid-feedback>
      </b-form>
       <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
  </div>
  <!-- search result -->
  <div id="searchDiv">
    <b-row>
        <RecipeSearch class="recipeSearch" :value_diet="value_diet" :value_cuisine="value_cuisine" :value_intolerance="value_intolerance"
        :value_sort="value_sort" :value_number="value_number" :text="text" />
    </b-row>
    </div>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import RecipeSearch from '../components/RecipeSearch'
//import diets from "../assets/diets";
import {
  required,
  alpha,
} from "vuelidate/lib/validators";


export default {
  components: {
    Multiselect,
    RecipeSearch
  },
  data () {
    return {
      value_diet: [],
      value_cuisine: [],
      value_intolerance: [],
      value_sort: [],
      cuisines: [
        { name: 'African'},
        { name: 'American'},
        { name: 'British'},
        { name: 'Cajun'},
        { name: 'Caribbean'},
        { name: 'Chinese'},
        { name: 'Eastern European'},
        { name: 'European'},
        { name: 'French'},
        { name: 'German'},
        { name: 'Greek'},
        { name: 'Indian'},
        { name: 'Irish'},
        { name: 'Italian'},
        { name: 'Japanese'},
        { name: 'Jewish'},
        { name: 'Korean'},
        { name: 'Latin American'},
        { name: 'Mediterranean'},
        { name: 'Mexican'},
        { name: 'Middle Eastern'},
        { name: 'Nordic'},
        { name: 'Southern'},
        { name: 'Spanish'},
        { name: 'Thai'},
        { name: 'Vietnamese'},
      ],
      value_number: 5,
      form:
      {
      text: "",
      submitError: undefined
      },
      diets:[{ name: 'Gluten Free'},
        { name: 'Ketogenic'},
        { name: 'Vegetarian'},
        { name: 'Lacto-Vegetarian'},
        { name: 'Ovo-Vegetarian'},
        { name: 'Vegan'},
        { name: 'Pescetarian'},
        { name: 'Paleo'},
        { name: 'Primal'},
        { name: 'Low FODMAP'},
        { name: 'Whole30'}
        ],
      intolerances:[
          { name: 'Dairy'},
          { name: 'Egg'},
          { name: 'Gluten'},
          { name: 'Grain'},
          { name: 'Peanut'},
          { name: 'Seafood'},
          { name: 'Sesame'},
          { name: 'Shellfish'},
          { name: 'Soy'},
          { name: 'Sulfite'},
          { name: 'Tree Nut'},
          { name: 'Wheat'}
      ],
      sorts:[
        { name: 'Popularity'},
        { name: 'Time'}
      ],
      validated: false
    }
  },
  methods: {
    async SearcgRecipes(){
      
       return await this.$children[6].updateRecipes()
    },
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
  
  },
  mounted() {
    // console.log(this.$children)
  },
  validations: {
    form: {
      search_input: {
        required,
        alpha
      }
    }
  }
}
</script>

<style src="../../dist/css/multiselect.css">

</style>
