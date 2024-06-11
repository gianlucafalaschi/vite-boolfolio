<script>
import axios from 'axios';
import SingleProject from './SingleProject.vue';

export default {
    name: 'ProjectList',
    components: {
        SingleProject
    },
    data() {
        return {
            projects: []   // array inizialmente vuoto che contiene tutti i post
        }
    },
    methods: {
      getProjects() {
        // Funzione che prende i project dall'API
        axios.get('http://127.0.0.1:8000/api/projects')
        .then((response) => {
            this.projects = response.data.results;
        });
      }
    },
  mounted() {
    this.getProjects();   // la funzione per la chiamata axios viene chiamata al caricamento della pagian
  }
}
</script>

<template>
    <div class="container">
        <h1>All the projects</h1>

        <div class="row row-cols-3">                     
            <!-- :projectDetails è la props in SingleProject passata dinamicamente al singolo oggetto project -->
            <SingleProject v-for="project in projects" :projectDetails="project" :key="project.id"></SingleProject>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

h1 {
    color: $main-color;
}
</style>