<template>
  <div class="container">
    <b-icon icon="person-circle" aria-hidden="true" font-scale="4" class="myiconlogin"></b-icon>
    <h1 class="title"><span>Login</span></h1>
    <b-form @submit.prevent="onLogin" class="myformstyle">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="mx-auto w-100 myloginbtn"
        >Login</b-button
      >
      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try { 
        const response = await this.axios.post(
          process.env.VUE_APP_ROOT_API_KEY +"/Login",
          {
            username: this.form.username,
            password: this.form.password
          }
        );
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
  margin-top: 6%;
}
.myformstyle{
  font-family: "Playfair Display", serif!important;
  font-weight:540;
  color: rgb(144, 144, 144);
}
h1 {
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid rgb(144, 144, 144);
   line-height: 0.1em;
   margin: 10px 0 20px; 
   margin-bottom: 12%;
   font-family: "Playfair Display", serif!important;
   font-weight:540;
   color: rgb(144, 144, 144);
} 

h1 span { 
    background:rgb(255, 247, 252); 
    padding:0 10px; 
}

.myiconlogin {
  margin-bottom: 8%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: rgb(144, 144, 144);
}
.myloginbtn{
  width:100px;
  display:block;
  background:rgb(13, 84, 87);
  border:none;
}
.myloginbtn:hover{

  background:rgb(27, 106, 109);
}
</style>
