<script>
export default {
    name: 'ProjectCard',
    /* per stampare name e summary delle card ho bisogno di projectDetails, che è un object */
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
                <div v-if="projectDetails.type">
                    <strong>Type:</strong> {{ projectDetails.type.name  }}
                </div>
                <div v-if="projectDetails.technologies.length > 0">
                    <strong>Technology:</strong> <span v-for="technology in projectDetails.technologies"> {{ technology.name }} &nbsp </span>
                </div>
                <!-- stampo il summary solo se è popolato --> 
                <p v-if="projectDetails.summary"  class="card-text">{{ projectDetails.summary }}</p>
                 <!--  <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
</style>