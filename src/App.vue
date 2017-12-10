<template>
  <div id="app">
    <cake-header></cake-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';
export default {
  components: {
      'cake-header': header
  },
  data() {
    return {

    };
  }
}
</script>
<style>
  @import './style/reset.css';
  @import './style/index.css';
  @import './style/element.css';
</style>

