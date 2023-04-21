<script setup>

import { useUserStore } from "./store/user.js";

const userStore  = useUserStore()

</script>

<template>
                <v-navigation-drawer expand-on-hover permanent rail>
                    
                    <v-list>
                        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/46.jpg" :title="`${userStore.name} ${userStore.lastName}`"
                            :subtitle=userStore.email></v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-widgets" title="Home" value="home" to="/"></v-list-item>
                        <v-list-item prepend-icon="mdi-account-multiple" title="Athletes & Courses" value="athlete"
                            to="athlete"></v-list-item>
                        <v-list-item prepend-icon="mdi-calendar" title="Calendar" value="calendar"
                            to="calendar"></v-list-item>
                        <v-list-item prepend-icon="mdi-logout" title="Logout" value="login" to="login"></v-list-item>
                    </v-list>

                </v-navigation-drawer>

                <!-- <v-main style="height: 100vh"></v-main> -->
</template>