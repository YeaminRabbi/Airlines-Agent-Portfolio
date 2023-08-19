<template>
    <div>
        <header-section></header-section>

        <router-view></router-view>

        <footer-section></footer-section>
    </div>
</template>

<script>
import HeaderSection from '../components/frontend/Header.vue'
import FooterSection from '../components/frontend/Footer.vue'
export default {
    components: { HeaderSection, FooterSection },
    name: 'Master',
    
}
</script>