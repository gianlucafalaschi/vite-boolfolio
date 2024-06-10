<script>
import ProjectList from './components/ProjectList.vue';

export default {
  components: {
    ProjectList
  }
}
</script>

<template>
  <ProjectList></ProjectList>
</template>

<style lang="scss">
@use './style/generic';  // generic va' importato solo in App.vue anche se viene usato in altri componenti
@use './style/partials/variables' as *;  // le variables vanno importate in tutti i componenti figli se vengono usate

h1 {
  color: $main-color;
}
</style>