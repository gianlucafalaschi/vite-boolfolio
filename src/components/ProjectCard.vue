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
  methods: {
    truncateText(text) {
      // se il testo è piu lungo di 100 caratteri
      // lo taglio a 100 caratteri e aggiungo ...
      if(text.length > 100) {
       return text.substr(0, 99) + '...'  // substr torna una funzione di testo, parte dal carattere 0 fino al 99
      }
      // altrimenti il testo rimane invariato
      return text   
      
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
                <!-- stampo le technologies solo se l'array che le contiene ha piu' di 0 elementi -->
                <div v-if="projectDetails.technologies.length > 0">
                    <strong>Technology:</strong> <span v-for="technology in projectDetails.technologies"> {{ technology.name }} &nbsp </span>
                </div>
                <!-- stampo il summary solo se è popolato -->          <!-- chiamo la funzione che taglia il testo se sopra i 100 caratteri -->
                <p v-if="projectDetails.summary"  class="card-text">{{ truncateText(projectDetails.summary) }}</p>
                 <!--  <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
</style>