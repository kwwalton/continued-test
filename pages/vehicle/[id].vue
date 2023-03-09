<template>
  <v-container>
    <nuxt-link :to="'/search?tab=starwars'">Back to Search</nuxt-link>

    <h1 class="pt-6 text-center">Vehicle Details</h1>

    <v-progress-linear
      v-if="starWarsLoadingData"
      indeterminate
      color="yellow-darken-2"
    />

    <v-card v-else class="mt-4">
      <v-card-item>
        <v-card-title class="my-4 mx-4">
          <h2>{{ starWarsVehicleDetails.name }}</h2>
        </v-card-title>

        <v-card-text>
          <p><b>Model:</b> {{ starWarsVehicleDetails.model }}</p>
          <p>
            <b>Max Atmosphering Speed:</b>
            {{ starWarsVehicleDetails.maxAtmospheringSpeed }}
          </p>
          <p><b>Passengers:</b> {{ starWarsVehicleDetails.passengers }}</p>
          <p><b>Length:</b> {{ starWarsVehicleDetails.length }}</p>
          <p><b>Vehicle Class:</b> {{ starWarsVehicleDetails.vehicleClass }}</p>
          <p><b>Crew:</b> {{ starWarsVehicleDetails.crew }}</p>
          <v-divider class="mt-4 mb-4"></v-divider>
          <h3>Film Connection</h3>
          <v-container
            fluid
            v-if="
              starWarsVehicleDetails.filmConnection &&
              starWarsVehicleDetails.filmConnection.films.length
            "
            class="px-0"
          >
            <v-row>
              <v-col
                v-for="film in starWarsVehicleDetails.filmConnection?.films"
                key="film.episodeID"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="bg-blue-grey-darken-4 pa-3">
                  <p class="text-blue-grey-lighten-5">{{ film.title }}</p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script>
import getStarWarsVehicleDetails from '@/graphql/starwars/queries/getStarWarsVehicleDetails.gql'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
export default {
  name: 'VehicleDetailsPage',
  setup() {
    const route = useRoute()
    let starWarsVehicleDetails = ref({})
    let starWarsLoadingData = ref(true)

    const { onResult } = useQuery(
      getStarWarsVehicleDetails,
      { vehicleId: route.params.id },
      { clientId: 'starwars' }
    )

    onResult((queryResult) => {
      starWarsVehicleDetails.value = queryResult.data.vehicle
      starWarsLoadingData.value = false
      return starWarsVehicleDetails
    })

    return {
      starWarsVehicleDetails,
      starWarsLoadingData,
    }
  },
}
</script>

<style scoped>
p {
  margin: 0;
  color: #939393;
}
</style>
