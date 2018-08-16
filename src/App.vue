<template>
  <div id="app">
    <base-side></base-side>
    <router-view/>
  </div>
</template>

<script>
import BaseSide from "./components/BaseSide.vue";
export default {
    name: "App",
    data() {
        return {};
    },
    components: {
        BaseSide
    }
};
</script>

<style lang="scss">
@import url(/assets/scss/reset.scss);
#app {
  padding: 0 100px;
}
</style>
