<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="none" class="myNav">
        <b-navbar-brand
          style="font-family: 'Playfair Display', serif;
          color: rgb(235, 235, 235);"
          >BGNB</b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- for everybody -->
          <b-navbar-nav>
            <b-nav-item class="myNavItems" :to="{ name: 'main' }"
              >Home</b-nav-item
            >
            <b-nav-item class="myNavItems" :to="{ name: 'search' }"
              >Search</b-nav-item
            >
            <b-nav-item class="myNavItems" :to="{ name: 'about' }"
              >About</b-nav-item
            >
          </b-navbar-nav>
          <!-- for guest -->
          <b-navbar-nav v-if="!$root.store.username">
            <b-nav-item class="myNavItems" :to="{ name: 'register' }"
              >Register</b-nav-item
            >
            <b-nav-item class="myNavItems" :to="{ name: 'login' }"
              >Login</b-nav-item
            >
          </b-navbar-nav>
          <!-- for logged in member- left side dropdown -->
          <b-navbar-nav v-if="$root.store.username">
            <b-nav-item-dropdown  class="myNavItems" text="Personal" right>
              <b-dropdown-item :to="{ name: 'favorites' }" class="myDropItem"
                >Favorites</b-dropdown-item
              >
              <b-dropdown-item :to="{ name: 'myrecipes' }" class="myDropItem"
                >My Recipes</b-dropdown-item
              >
              <b-dropdown-item :to="{ name: 'familyrecipes' }" class="myDropItem"
                >Family Recipes</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <NewRecipeModal class="myNavItems"></NewRecipeModal>
          </b-navbar-nav>

          <!-- for logged in member- right side btn -->
          <b-navbar-nav class="ml-auto" v-if="$root.store.username">
            <b-nav-text
              style="color:rgb(125, 180, 182); font-family: 'Playfair Display', serif;  letter-spacing: 1px;"
            >
              Hello {{ $root.store.username }}
            </b-nav-text>
            <b-nav-form>
              <b-button
              id="logoutBtn"
                size="sm"
                @click="Logout"
                class="my-2 my-sm-0 myNavItems"
                type="button"
                >Logout</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" v-else>
            <b-nav-text
              style="color:rgb(125, 180, 182); font-family: 'Playfair Display', serif;  letter-spacing: 1px;"
            >
              Hello Guest
            </b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />

    <div></div>
  </div>
</template>

<script>
import NewRecipeModal from "./components/NewRecipeModal";
export default {
  name: "App",
  components: {
    NewRecipeModal,
  },
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
  },
};
</script>

<style lang="scss" >
@import "@/scss/form-style.scss";
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
// start of NAVBAR
.myNav {
  background-color: rgb(13, 84, 87);
}

.myNavItems {
  margin-left: 8px;
  margin-right: 8px;
  letter-spacing: 1px;
  font-family: "Playfair Display", serif;
  color: rgb(235, 235, 235);
}
.myNavItems:hover {
  background-position: bottom center; /*Adjust the background-position to move the line*/
  background-size: 115% 2px; /*Adjust the background size to control length and height*/
  background-repeat: no-repeat;
  background-image: linear-gradient(#a7425d 0 0);
}

.dropdown-menu {
  background-color: rgb(125, 180, 182)!important;
}
.dropdown-item:hover {
    background-color: rgb(125, 180, 182)!important;
    background-image: linear-gradient(#a7425d 0 0);
    background-repeat: no-repeat;
    background-position: bottom center; background-size: 100% 2px;
}
//maybe make it ligther or even remove comletely and use default style? also now when one of the drop items is active it dissaper
.router-link-exact-active {
  color: rgb(125, 180, 182)!important;
  // color: white !important;
}
.router-link-exact-active .dropdown-item{
    color: rgb(125, 180, 182)!important;
  }
#logoutBtn
{
    background-color: rgb(13, 84, 87);
    border: none;
    color: rgb(235, 235, 235);
    font-size: medium
}

// end of NAVBAR

</style>
