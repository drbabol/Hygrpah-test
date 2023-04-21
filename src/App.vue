<script setup>
import LoginView from './components/views/LoginView.vue';
import Nav from './components/Nav.vue';
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './components/store/user.js';

const userStore = useUserStore();

// Computed property to check if there is a logged user
const showLogin = (email) => {
  return email !== undefined;
}

</script>


<template>
  <v-app>
    <!-- Conditionally render the LoginView component when there is no email from the user (false)-->
    <template v-if="!showLogin(userStore.email)">
      <LoginView></LoginView>
    </template>

    <!-- Render the Nav and RouterView components if there is a logged user -->
    <template v-else>
      <Nav></Nav>
      <v-main>
        <RouterView />
      </v-main>
    </template>
  </v-app>
</template>


