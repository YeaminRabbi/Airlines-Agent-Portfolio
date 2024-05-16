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
          <li class="nav-item" :class="{ active: $route.name === 'About' }">
            <router-link class="nav-link" :to="{ name: 'About'}">About</router-link>
          </li>
          
          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownVisa" role="button" @click="toggleDropdown('visa')" :aria-expanded="isVisaDropdownOpen ? 'true' : 'false'">
              Visa Process
            </a>
            <div class="dropdown-menu" :class="{ show: isVisaDropdownOpen }" aria-labelledby="navbarDropdownVisa">
              <router-link class="dropdown-item" :to="{ name: 'Visit'}" @click.native="closeDropdown('visa')">Visit</router-link>
              <router-link class="dropdown-item" :to="{ name: 'Medical'}" @click.native="closeDropdown('visa')">Medical</router-link>
              <router-link class="dropdown-item" :to="{ name: 'Student'}" @click.native="closeDropdown('visa')">Student</router-link>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownGroup" role="button" @click="toggleDropdown('group')" :aria-expanded="isGroupDropdownOpen ? 'true' : 'false'">
              Other Services
            </a>
            <div class="dropdown-menu" :class="{ show: isGroupDropdownOpen }" aria-labelledby="navbarDropdownGroup">
              <router-link class="dropdown-item" :to="{ name: 'Group'}" @click.native="closeDropdown('group')">Group</router-link>
              <router-link class="dropdown-item" :to="{ name: 'Instant'}" @click.native="closeDropdown('group')">Instant</router-link>
            </div>
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
  data() {
    return {
      isVisaDropdownOpen: false,
      isGroupDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown(dropdown) {
      if (dropdown === 'visa') {
        this.isVisaDropdownOpen = !this.isVisaDropdownOpen;
        this.isGroupDropdownOpen = false; // Close the other dropdown
      } else if (dropdown === 'group') {
        this.isGroupDropdownOpen = !this.isGroupDropdownOpen;
        this.isVisaDropdownOpen = false; // Close the other dropdown
      }
    },
    closeDropdown(dropdown) {
      if (dropdown === 'visa') {
        this.isVisaDropdownOpen = false;
      } else if (dropdown === 'group') {
        this.isGroupDropdownOpen = false;
      }
    }
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
