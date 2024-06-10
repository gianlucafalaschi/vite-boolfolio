<script>
export default {

}
</script>

<template>
  <h1>Ciao Ciao</h1>
</template>

<style lang="scss">
@use './style/generic';
@use './style/partials/variables' as *;  // le variables vanno importate in tutti ii componenti figli se vengono usate

h1 {
  color: $main-color;
}
</style>