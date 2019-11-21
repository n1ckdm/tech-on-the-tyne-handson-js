<template>  
<div>

  <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span> go back</a>

  <client-only placeholder="Basket...">

    <div uk-grid>
        <div class="uk-width-expand@m">
            <Basket />
        </div>
    </div>
  </client-only>


</div>  
</template>

<script>  
import Basket from '~/components/Basket.vue'  

export default {  
  components: {
    Basket
  },
  methods: {
    async handleSubmit() {
    
    }
  }
}
</script>