<template>
  <v-container>
    <nuxt-link :to="'/search?tab=pokemon'">Back to Search</nuxt-link>

    <h1 class="pt-6 text-center">Pokemon Details</h1>

    <v-progress-linear
      v-if="isPokemonDataLoading"
      indeterminate
      color="yellow-darken-2"
    />

    <v-card v-else class="mt-4">
      <v-card-item>
        <v-card-title class="my-4 mx-4">
          <h2>{{ pokemonDetails.name }}</h2>
        </v-card-title>

        <v-card-text>
          <p><b>Base Experience:</b> {{ pokemonDetails.base_experience }}</p>
          <p><b>Species:</b> {{ pokemonDetails.pokemon_species_id }}</p>
          <v-divider class="mt-4 mb-4"></v-divider>

          <h3>Encounters</h3>
          <v-container
            fluid
            v-if="
              pokemonDetails.pokemon_v2_encounters &&
              pokemonDetails.pokemon_v2_encounters.length
            "
            class="px-0"
          >
            <v-row>
              <v-col
                v-for="encounter in pokemonDetails.pokemon_v2_encounters"
                key="encounter.id"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="bg-blue-grey-darken-4 pa-3">
                  <p class="text-blue-grey-lighten-5">
                    <b>Id:</b> {{ encounter.id }}
                  </p>
                  <p class="text-blue-grey-lighten-5">
                    <b>Location Area Id:</b> {{ encounter.location_area_id }}
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import getPokemonDetails from '@/graphql/pokemon/queries/getPokemonDetails.gql'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'

const route = useRoute()
let pokemonDetails = ref({})
let isPokemonDataLoading = ref(true)

const { onResult } = useQuery(
  getPokemonDetails,
  { pokemonId: parseInt(route.params.id) },
  { clientId: 'pokemon' }
)
onResult((queryResult) => {
  pokemonDetails.value = queryResult.data.pokemon_v2_pokemon_by_pk
  isPokemonDataLoading.value = false
  console.table(pokemonDetails.value)
  return pokemonDetails
})
</script>

<style scoped>
p {
  margin: 0;
  color: #939393;
}
</style>
