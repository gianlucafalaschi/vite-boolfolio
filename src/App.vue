<script>
// import ProjectList from './components/ProjectList.vue';      componente tolto, sostituito con router-view
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
   // ProjectList,       componente tolto, sostituito con router-view
    AppHeader
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style lang="scss">
@use './style/generic';  // generic va' importato solo in App.vue anche se viene usato in altri componenti
@use './style/partials/variables' as *;  // le variables vanno importate in tutti i componenti figli se vengono usate

h1 {
  color: $main-color;
}
</style>