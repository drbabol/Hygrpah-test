
<script setup>
import { ref, onMounted } from 'vue'
import { GraphQLClient } from 'graphql-request'
import { useUserStore } from "../store/user.js";
import { queryCoursesAthletesFromATrainer } from "../../queries/myQueries"

const userStore  = useUserStore()

const endpoint = process.env.HYGRAPH_ENDPOINT //attention this arrive always with quote

const client = new GraphQLClient(endpoint.replace(/"/g, ''))


const trainerLogged = userStore.email;
const trainerCourses = ref([]);

onMounted(() => {
    client
        .request(queryCoursesAthletesFromATrainer,  { email: trainerLogged })
        .then((data) => {
          trainerCourses.value = data.courses;
        })
        .catch((error) => {
            console.error(error)
        })
})

const addEditButt = ['Add','Edit']

</script>

<template>
    <div class="mx-10 mt-10 mb-5 pl-2 text-h4">
      List of athletes attending my courses
    </div>

    <div v-for="(course, index) in trainerCourses" :key="index">
      <v-card class="mx-10 mt-10 py-5" :title="course.name" text="" variant="tonal" >
        <v-card-actions>
        <v-btn @click="course.showAthletes = !course.showAthletes">
          {{ course.showAthletes ? 'Hide athletes' : 'Show athletes' }}
        </v-btn>
      </v-card-actions>
      <v-card-text v-if="course.showAthletes">
        <ul class="d-flex flex-column">
          <v-checkbox-btn class="mb-0" v-for="(athlete, index) in course.athletes" :key="index" 
            :label="athlete.name" 
            :disabled="true">
          </v-checkbox-btn>
        </ul>
        
        <v-container class="mt-5">
          <v-row no-gutters>
            <v-col class="mx-2"
              v-for="n in 2"
              :key="n"
              cols="12"
              sm="1"
            >
              <v-sheet>

                <v-btn outline color="blue-grey-lighten-4">
                  {{ addEditButt[n-1] }}
                </v-btn>
                
              </v-sheet>

            </v-col>
          </v-row>
        </v-container>

                
     
      </v-card-text>
      </v-card>
    </div>

</template>

<style></style>
