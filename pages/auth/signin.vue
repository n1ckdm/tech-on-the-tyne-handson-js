<template>
  <div>
    <div class="uk-child-width-1-3@m uk-grid">
      <div>
        <div class="uk-card uk-card-small uk-card-body"></div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body">
          <form @submit.stop.prevent="handleSubmit">
            <fieldset class="uk-fieldset">
              <legend class="uk-legend">Sign in</legend>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <input class="uk-input" v-model="email" type="email" placeholder="email" />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <input class="uk-input" v-model="password" type="password" placeholder="password" />
              </div>

              <div class="uk-margin">
                <button
                  class="uk-button uk-button-primary uk-width-1-1"
                  :disabled="loading"
                  type="submit"
                >Submit</button>
              </div>

              <div class="uk-margin">
                <p>
                  No account?
                  <router-link :to="{ name: 'auth-register'}">Register</router-link>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-small uk-card-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import strapi from "~/store/Strapi";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.login(this.email, this.password);
        this.loading = false;
        this.setUser(response.user);
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    // call the auth code
    ...mapMutations({
      setUser: "auth/setUser"
    })
  }
};
</script>