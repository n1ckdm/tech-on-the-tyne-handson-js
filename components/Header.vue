<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/" exact>
              <img src="/TechOnTheTyneSquare.png"  width="80" height="80"  alt="Tech on the Tyne" /> &nbsp; 
            </router-link>
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/takeaways" exact>Takeways</router-link>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <!-- If logged in -->
        <ul class="uk-navbar-nav" v-if="username">
           <li>
            <router-link data-uk-icon="icon:cart" tag="a" title="Basket" class="navbar-brand" to="/store/basket" exact></router-link>
          </li>
          <li>
            <a href="#" data-uk-icon="icon:user"></a>
            <div class="uk-navbar-dropdown uk-navbar-dropdown-bottom-left">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-nav-header uk-text-small uk-text-primary">YOUR ACCOUNT</li>
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: info"></span>
                    Hi: {{ username }}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: refresh"></span> Edit
                  </a>
                </li>
                <li class="uk-nav-divider"></li>
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: thumbnails"></span> Your Orders
                  </a>
                </li>
                <li class="uk-nav-divider"></li>
                <li>
                  <a href="#" @click="logout">
                    <span data-uk-icon="icon: sign-out"></span> Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="uk-width-small uk-visible@m"><div></div></li>
        </ul>

        <!-- If logged out -->
        <ul class="uk-navbar-nav" v-else>
          <li>
             <router-link :to="{ name: 'auth-register'}">Register</router-link>
          </li>
          <li>
             <router-link :to="{ name: 'auth-signin'}">Sign In</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </client-only>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    }
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>  