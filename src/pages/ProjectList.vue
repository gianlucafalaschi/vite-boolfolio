<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: []   // array inizialmente vuoto che contiene tutti i post
        }
    },
    methods: {
      getProjects() {
        // Funzione che prende i project dall'API
        axios.get('http://127.0.0.1:8000/api/projects') // url dell'API
        .then((response) => {
            this.projects = response.data.results;  // salvo i dati nell'array projects
        });
      }
    },
  mounted() {
    this.getProjects();   // la funzione per la chiamata axios viene chiamata al caricamento della pagina
  }
}
</script>

<template>
    <div class="container">
        <h1>All the projects</h1>

        <div class="row row-cols-3">                     
            <div v-for="project in projects" class="col" :key="project.id">
                <!-- :projectDetails è la props in ProjectCard passata dinamicamente al singolo oggetto project -->
                <ProjectCard  :projectDetails="project"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

h1 {
    color: $main-color;
}
</style>