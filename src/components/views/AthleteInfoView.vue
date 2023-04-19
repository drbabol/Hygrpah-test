
<script setup>
import { ref, onMounted } from 'vue'
import { GraphQLClient } from 'graphql-request'

const endpoint = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgc7zeg0416n01ujfiliedgg/master" // process.env.HYGRAPH_ENDPOINT

const queryTrainer = `
  {
    trainers {
      name
      lastName
      email
      courses {
        name
      }
    }
  }
`
const client = new GraphQLClient(endpoint)
console.log('test', client)  


const trainers = ref([])

onMounted(() => {
    client
        .request(queryTrainer)
        .then((data) => {
            trainers.value = data.trainers
            console.log(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

</script>

<template>
    <div class="mx-10 mt-10 mb-5 pl-2 text-h4">
        My courses
    </div>

    <v-card class="mx-10" title="Personal Course 1" text="" variant="tonal" >  
        <v-card-actions>
            <v-btn>Show athletes</v-btn>
        </v-card-actions>
    </v-card>

</template>

<style></style>
