<template>
  <div>
    <b-nav-item v-b-modal.modal-prevent-closing>New Recipe</b-nav-item>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Create A New Recipe"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      >Hello From Modal!
      <b-form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- Title -->
        <b-form-group
          id="input-group-Title"
          label-cols-sm="3"
          label="Title:"
          label-for="Title"
        >
          <b-form-input
            id="Title"
            v-model="$v.form.title.$model"
            type="text"
            :state="validateState('title')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.title.required">
            Title is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.title.alpha">
            should contain only characters
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- ReadyInMinutes -->
        <b-form-group
          id="input-group-minutes"
          label-cols-sm="3"
          label="Ready In Minutes:"
          label-for="Minutes"
        >
          <b-form-input
            id="Minutes"
            v-model="$v.form.minutes.$model"
            type="text"
            :state="validateState('minutes')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.minutes.required">
            Number of Minutes is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.minutes.integer">
            Must be an Integer
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.minutes.minValue">
            Must be bigger than 0
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- Image -->
        <b-form-group
          id="input-group-Image"
          label-cols-sm="3"
          label="Recipe Image:"
          label-for="Image"
        >
          <b-form-input
            id="Image"
            v-model="$v.form.image.$model"
            type="text"
            :state="validateState('image')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.image.required">
            Image is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.image.url">
            Must be a valid URL
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- Servings -->
        <b-form-group
          id="input-group-servings"
          label-cols-sm="3"
          label="Number of Servings:"
          label-for="Servings"
        >
          <b-form-input
            id="Servings"
            v-model="$v.form.servings.$model"
            type="text"
            :state="validateState('servings')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.servings.required">
            Number of Servings is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.servings.integer">
            Must be an Integer
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.servings.minValue">
            Must be bigger than 0
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- Ingredients -->
        <b-form-group
          id="input-group-ingredients"
          label-cols-sm="3"
          label="Ingredients:"
          label-for="ingredients_input"
        >
          <b-row class="my-1">
            <b-col sm="10">
              <b-form-input
                id="ingredients_input"
                v-model="$v.form.ingredients_input.$model"
                type="text"
                :state="validateState('ingredients_input')"
              ></b-form-input>

              <b-form-invalid-feedback
                v-if="!$v.form.ingredients_input.required"
              >
                Ingredients is required
              </b-form-invalid-feedback>
            </b-col>
            <b-col sm="0.5">
              <b-button
                @click="addNewIngredient"
                variant="outline-info"
                class="mb-2"
              >
                <b-icon icon="plus" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
          </b-row>
          <div
            class="previous"
            v-for="(item, counter) in ingridients"
            v-bind:key="counter"
          >
            <span @click="deleteIngredient(counter)">x</span>
            <b-form-input
              id="ingredients_input"
              v-model="item.name"
              type="text"
              :state="item.name.length <= 0 ? false : true"
            ></b-form-input>
            <b-form-invalid-feedback v-if="item.name.length <= 0">
              Ingredients is required
            </b-form-invalid-feedback>
          </div>
        </b-form-group>

        <!-- instructions -->
        <b-form-group
          id="input-group-instructions"
          label-cols-sm="3"
          label="Instructions:"
          label-for="instructions_input"
        >
          <b-row class="my-1">
            <b-col sm="10">
              <b-form-input
                id="instructions_input"
                v-model="$v.form.instructions_input.$model"
                type="text"
                :state="validateState('instructions_input')"
              ></b-form-input>

              <b-form-invalid-feedback
                v-if="!$v.form.instructions_input.required"
              >
                Instructions is required
              </b-form-invalid-feedback>
            </b-col>
            <b-col sm="0.5">
              <b-button
                @click="addNewInstruction"
                variant="outline-info"
                class="mb-2"
              >
                <b-icon icon="plus" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
          </b-row>
          <div
            class="previous"
            v-for="(item, counter) in instructions"
            v-bind:key="counter"
          >
            <span @click="deleteInstruction(counter)">x</span>
            <b-form-input
              id="instructions_input"
              v-model="item.name"
              type="text"
              :state="item.name.length <= 0 ? false : true"
            ></b-form-input>
            <b-form-invalid-feedback v-if="item.name.length <= 0">
              Instructions is required
            </b-form-invalid-feedback>

            <!-- <b-form-invalid-feedback v-if="!name.required">
              Ingredients is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!name.alphaNum">
              must contain only alpha numeric characters
            </b-form-invalid-feedback> -->
          </div>
        </b-form-group>

        <b-form-group
          label="Plain inline checkboxes"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            plain
          ></b-form-checkbox-group>
        </b-form-group>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Submit failed: {{ form.submitError }}
      </b-alert>
    </b-modal>
  </div>
</template>

<script>
import {
  required,
  integer,
  minValue,
  url,
  alpha,
  alphaNum,
} from "vuelidate/lib/validators";
export default {
  // components: {useVuelidate, reactive, helpers},
  data() {
    return {
      form: {
        title: "",
        minutes: "",
        image: "",
        servings: "",
        ingredients_input: "",
        instructions_input: "",
      },
      ingridients: [],
      instructions: [],
      selected: [],
      options: [
        { text: "Vegan", value: "vegan" },
        { text: "Vegeterian", value: "vegeterian" },
        { text: "Gluten Free", value: "glutenFree" },
      ],
      errors: [],
      validated: false,
    };
  },

  validations: {
    form: {
      title: {
        required,
        alpha,
      },
      minutes: {
        required,
        integer,
        minValue: minValue(0),
      },
      image: {
        required,
        url,
      },
      servings: {
        required,
        integer,
        minValue: minValue(0),
      },
      ingredients_input: {
        required,
      },
      instructions_input: {
        required,
      },
    },
  },
  methods: {
    addNewIngredient() {
      this.ingridients.push({ name: "" });
    },
    addNewInstruction() {
      this.instructions.push({ name: "" });
    },
    deleteIngredient(counter) {
      this.ingridients.splice(counter, 1);
      console.log(this.ingridients);
    },
    deleteInstruction(counter) {
      this.instructions.splice(counter, 1);
      console.log(this.instructions);
    },
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },

    resetModal() {
      this.form = {
        title: "",
        minutes: "",
        image: "",
        servings: "",
        ingredients_input: "",
        instructions_input: "",
      };
      this.ingridients = [];
      this.instructions = [];
      this.selected = [];
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },

    async handleSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      for (let index = 0; index < this.ingridients.length; index++) {
        let dict = this.ingridients[index];
        if (dict.name.length <= 0) return;
      }
      for (let i = 0; i < this.instructions.length; i++) {
        let dict_ins = this.instructions[i];
        if (dict_ins.name.length <= 0) return;
      }
      
      ////////////////logic///////////
      try {
        let exIng;
        if (this.ingridients.length > 0) {
          let arrayOfIngNames = this.ingridients.map((ing) => (ing.name));
          let allIng = arrayOfIngNames.join("$$$");
          exIng = this.form.ingredients_input + "$$$" + allIng ;
        } else {
          exIng = this.form.ingredients_input;
        }
        let analyzedIns;
        if (this.instructions.length > 0) {
          let arrayOfInsNames = this.instructions.map((ins) => (ins.name));
          let allIns = arrayOfInsNames.join("$$$");
          analyzedIns =
            this.form.instructions_input + "$$$" + allIns;
        } else {
          analyzedIns = this.form.instructions_input;
        }
        const response = await this.axios.post(
          process.env.VUE_APP_ROOT_API_KEY + "/users/createrecipe",
          {
            title: this.form.title,
            readyInMinutes: this.form.minutes,
            image: this.form.image,
            popularity: "0",
            vegan: this.selected.includes("vegan") ? "1" : "0",
            vegetarian: this.selected.includes("vegetarian") ? "1" : "0",
            glutenFree: this.selected.includes("glutenFree") ? "1" : "0",
            extendedIngredients: exIng,
            servings: this.form.servings,
            analyzedInstructions: analyzedIns,
          }
        );
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }

      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style></style>
