<template>
     <nav class="navbar navbar-expand-lg navbar-dark probootstrap_navbar" id="probootstrap-navbar">
          <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'Home' }">Mafi Tour</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#probootstrap-menu" aria-controls="probootstrap-menu" aria-expanded="false" aria-label="Toggle navigation">
              <span><i class="ion-navicon"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="probootstrap-menu">
              <ul class="navbar-nav ml-auto">
                
                <li class="nav-item" :class="{ active: $route.name === 'Home' }">
                    <router-link class="nav-link" :to="{ name: 'Home'}">Home</router-link>
                </li>

                <li class="nav-item" :class="{ active: $route.name === 'CityGuide' }">
                    <router-link class="nav-link" :to="{ name: 'City' }">City Guide</router-link>
                </li>

                <li class="nav-item" :class="{ active: $route.name === 'Service' }">
                    <router-link class="nav-link" :to="{ name: 'Service' }">Service</router-link>
                </li>

                <li class="nav-item" :class="{ active: $route.name === 'Contact' }">
                    <router-link class="nav-link" :to="{ name: 'Contact' }">Contact</router-link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
</template>


<script>
export default {
    name: 'Header',
    methods: {
        isCurrentRoute(path) {
            return this.$route.path === path
        }
    }
}
</script>

