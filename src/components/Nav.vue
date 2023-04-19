<script setup>



const logedUser ="luke.gallo@test.com"

</script>

<template>
                <v-navigation-drawer expand-on-hover permanent rail>
                    
                    <v-list>
                        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/46.jpg" title="Luke Gallo"
                            :subtitle="logedUser"></v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-widgets" title="Home" value="home" to="/"></v-list-item>
                        <v-list-item prepend-icon="mdi-account-multiple" title="Athletes" value="athlete"
                            to="athlete"></v-list-item>
                        <v-list-item prepend-icon="mdi-calendar" title="Calendar" value="calendar"
                            to="calendar"></v-list-item>
                        <v-list-item prepend-icon="mdi-logout" title="Logout" value="login" to="login"></v-list-item>
                    </v-list>

                </v-navigation-drawer>

                <!-- <v-main style="height: 100vh"></v-main> -->
</template>