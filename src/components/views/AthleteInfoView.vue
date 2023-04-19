
<script setup>
import { ref, onMounted } from 'vue'
import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.HYGRAPH_ENDPOINT //attention this arrive always with quote

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
const client = new GraphQLClient(endpoint.replace(/"/g, ''))

const trainers = ref([])

onMounted(() => {
    client
        .request(queryTrainer, {}, {endpoint})
        .then((data) => {
            trainers.value = data.trainers
            console.log('data', data)
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
