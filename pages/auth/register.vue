<template>  
<div>

  <div class="uk-child-width-1-2@m uk-grid uk-grid-match" uk-height-match=".register-card">
     <div>
          <div class="uk-card uk-card-default uk-card-body register-card"  >
            <img src="/TechOnTheTyne.jpeg" height="500" width="500" class="uk-align-center" alt="">
          </div>
     </div>
     <div>
          <div class="uk-card uk-card-default uk-card-large uk-card-body register-card">

              <form @submit.stop.prevent="handleSubmit">
                  <fieldset class="uk-fieldset">

                      <legend class="uk-legend">Register</legend>

                      <div class="uk-margin">
                        <label class="uk-form-label">Username:</label>
                        <input class="uk-input" v-model="username" type="email" placeholder="username">
                      </div>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Password:</label>
                        <input class="uk-input" v-model="password" type="password" placeholder="password">
                      </div>

                      <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-width-1-1" :disabled="loading" type="submit">Submit</button>
                      </div>

                      <div class="uk-margin">
                        <p>
                          Already have an account?
                          <router-link :to="{ name: 'auth-signin'}">
                            Login
                          </router-link>
                        </p>
                      </div>
                  </fieldset>
              </form>
          </div>
     </div>
  </div>

</div>  
</template>

<script>  
import { mapMutations } from 'vuex'  
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:1337/'
const strapi = new Strapi(apiUrl)


export default {  
  data() {
    return {
      email: '',
      password: '',
      username: '',
      loading: false
    }
  },
  methods: {
    // register a user
    async handleSubmit() {
      try {
        this.loading = true
        this.email = this.username;
        const response = await strapi.register(
          this.username, // use the email address for the user name
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
         this.$router.push('/')
      } catch (err) {
           console.log(err)
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>