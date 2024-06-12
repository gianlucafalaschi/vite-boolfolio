<script>
import AppNewsletterSignup from  '../components/AppNewsletterSignup.vue';
export default {
    name: 'AppAbout',
    components: {
        AppNewsletterSignup
    }
}
</script>

<template>
    <div class="container">
        Sono la pagina about
        <AppNewsletterSignup></AppNewsletterSignup>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
</style>