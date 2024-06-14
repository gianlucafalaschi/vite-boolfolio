<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            project: null
        };
    },
    methods: {
        getProjectDetails() {
            // Funzione che prende il project dall'API.     $route.params.slug  è la sintassi che mi permette di leggere lo slug dell'url
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`) // url dell'API
            .then((response) => {
                this.project = response.data.project;  // salvo i dati in project
            });
        }
    },
    mounted() {
        this.getProjectDetails();
    }
}
</script>

<template>
    <div class="container">
        <h1>Sono il single project</h1>
        <!-- inizialmente, prima di avere la risposta per la chiamata axios, 
         project è null, per evitare errori mettiamo stampiamo solo se project è diverso da null  -->
        <div v-if="project"> 
            <h2>{{ project.name }}</h2>
            <h3 v-if="project.client_name">{{ project.client_name }}</h3>
            <div class="mt-3" v-if="project.cover_image">
                <!-- la parte fissa dell'immagine la posso vedere dall'inspect nel sito backoffice -->
                <img :src="`http://127.0.0.1:8000/storage/${project.cover_image}`" alt="project.name"> 
            </div>
            <p class="mt-3" v-if="project.summary">{{ project.summary }}</p>
            


        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables'
</style>