<script>
import axios from 'axios';

export default {
    name: 'ProjectList',
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
            <!-- single Project -->
            <div v-for="project in projects" class="col">
                <div class="card my-4">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p v-if="project.summary"  class="card-text">{{ project.summary }}</p>
                       <!--  <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
            <!--/ single Project -->
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

h1 {
    color: $main-color;
}
</style>