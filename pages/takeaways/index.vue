<template>
  <div>
    <!-- The search input to filters takeaways -->
    <form class="uk-search uk-search-default uk-search-large uk-align-center uk-margin">
      <span uk-search-icon></span>
      <input class="uk-search-input" v-model="query" type="search" placeholder="Search..." />
    </form>
    <!-- UIKit Display Cards -->
    <div
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin"
      v-for="takeaway in filteredList"
      v-bind:key="takeaway.id"
      uk-grid
    >
      <div class="uk-card-media-left uk-cover-container">
        <img :src="'http://localhost:1337/' + takeaway.image.url" alt uk-cover />
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ takeaway.name }}</h3>
          <p>{{ takeaway.description }}</p>
          <!-- Generate a link to the takeaway using router-link -->
          <router-link
            :to="{ name: 'takeaways-id', params: { id: takeaway.id }}"
            tag="a"
            class="uk-button uk-button-primary"
          >See Menu</router-link>
        </div>
      </div>
    </div>
    <!--  If no takeaways have been found -->
    <div class="uk-container uk-container-center uk-text-center" v-if="filteredList.length == 0">
      <p>No records found</p>
    </div>
  </div>
</template>

<script>
// Import the takeaways query
import takeawaysQuery from '~/apollo/queries/takeaway/takeaways';

export default {
  data() {
    return {
      // Initialize variables
      takeaways: [],
      query: ""
    };
  },
  apollo: {
    takeaways: {
      prefetch: true,
      query: takeawaysQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.takeaways.filter(takeaway => {
        return takeaway.name.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  }
};
</script>