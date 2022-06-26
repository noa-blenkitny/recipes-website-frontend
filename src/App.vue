<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- for everybody -->
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'main' }">Vue Recipes</b-nav-item>
            <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          </b-navbar-nav>
          <!-- for guest -->
          <b-navbar-nav v-if="!$root.store.username">
            <b-nav-text> Hello Guest: </b-nav-text>
            <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
            <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
          </b-navbar-nav>

          <!-- for logged in member- right side btn -->
          <b-navbar-nav class="ml-auto" v-if="$root.store.username">
            <b-nav-form>
              <b-button
                size="sm"
                @click="Logout"
                class="my-2 my-sm-0"
                type="button"
                >Logout</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
          <!-- <span v-else>
            {{ $root.store.username }}: <button @click="Logout">Logout</button>
          </span> -->
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />

    <div></div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    async Logout() {
      try {
        const response = await this.axios.post(
          process.env.VUE_APP_ROOT_API_KEY + "/Logout"
          // this.$root.store.server_domain +"/Logout",
          // "http://localhost:3000/Logout"
        );
        this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");
        this.$router.push("/").catch(() => {
          this.$forceUpdate();
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    // clickgenerateRandomRecipes()
    // {
    //   console.log("heree")
    // }
  },
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
