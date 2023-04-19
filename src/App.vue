<script setup>
import Nav from './components/Nav.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
  <v-app>
      <Nav></Nav>
    <v-main >
   
        <RouterView />
    

    </v-main>
  </v-app>
</template>


