<template>
  <div class="uk-card uk-card-default uk-card-body uk-margin" uk-sticky="offset: 20; bottom: true">
    <img
      src="https://img.icons8.com/dotty/80/000000/shopping-basket.png"
      class="uk-align-right"
      height="100"
      width="100"
      alt
    />
    <div v-if="price > 0">
      <table class="uk-table uk-table-striped uk-table-small uk-table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (unit)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in selectedItems" v-bind:key="item.id">
            <td class="uk-width-1-2">{{ item.name }}</td>
            <td class="uk-table-shrink">£{{ item.price }}</td>
            <td class="uk-table-shrink">{{ item.quantity }}</td>
            <td>
              <a class="uk-margin-left">
                <span class="uk-badge" @click="addToBasket(item)">+</span>
              </a>
              <a>
                <span
                  class="uk-badge"
                  style="background: #f0506e;"
                  @click="removeFromBasket(item)"
                >-</span>
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="4" class="uk-text-right">Basket Total £{{ price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      addToBasket: "basket/add",
      removeFromBasket: "basket/remove"
    })
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    selectedItems() {
      return this.$store.getters["basket/items"];
    },
    price() {
      return this.$store.getters["basket/price"];
    },
    numberOfItems() {
      return this.$store.getters["basket/numberOfItems"];
    }
  }
};
</script>