<script>
export default {
    name: 'SingleProject',
    /* per stampare name e summary delle card ho bisogno di project, che è un object */
    props: {
        projectDetails: Object 
    },
    data() {
    return {
      
    }
  },
}
</script>

<template>
    <div class="col">
        <div class="card my-4">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{ projectDetails.name }}</h5>
                 <p v-if="projectDetails.summary"  class="card-text">{{ projectDetails.summary }}</p>
                 <!--  <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
</style>