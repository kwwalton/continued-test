<template>
  <v-container>
    <v-tabs v-model="tab" grow>
      <v-tab value="starwars">Star Wars</v-tab>
      <v-tab value="pokemon">Pokemon</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="starwars">
        <h1 class="pt-6 text-center">Star Wars Vehicles</h1>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="starWarsSearch"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <!-- NOTE: You will only see this progress indicator when running on client (navigate from another route) -->
          <!-- This is not the skeleton loader you were hoping for. They used to be in Vuetify 2. -->
          <v-progress-linear
            v-if="starWarsLoadingData"
            indeterminate
            color="yellow-darken-2"
          />
          <v-data-table
            v-else
            :headers="starWarsHeaders"
            :items="starWarsVehicles"
            :search="starWarsSearch"
            v-model:sort-by="starWarsSortBy"
          >
            <template v-slot:item.name="{ item }">
              <div class="pt-4 d-flex flex-column">
                <nuxt-link :to="`/vehicle/${item.raw.id}`" class="mt-4">{{
                  item.raw.name
                }}</nuxt-link>
                <!-- NOTE: this is so ugly but I am out of time -->
                <!-- You would want to not show this button if already a fav, better to use a cute heart icon instead of unstyled button -->
                <v-btn
                  size="x-small"
                  class="my-4"
                  @click="store.addToFavorites({ name: item.raw.name })"
                >
                  Add to favorites
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-window-item>

      <v-window-item value="pokemon">
        <h1 class="pt-6 text-center">Pokemon</h1>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="pokemonSearch"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <!-- NOTE: You will only see this progress indicator when running on client (navigate from another route) -->
          <!-- This is not the skeleton loader you were hoping for. They used to be in Vuetify 2. -->
          <v-progress-linear
            v-if="pokemonLoadingData"
            indeterminate
            color="yellow-darken-2"
          />
          <v-data-table
            v-else
            :headers="pokemonHeaders"
            :items="pokemon"
            :search="pokemonSearch"
            v-model:sort-by="pokemonSortBy"
          >
            <template v-slot:item.name="{ item }">
              <nuxt-link :to="`/pokemon/${item.raw.id}`">{{
                item.raw.name
              }}</nuxt-link>
            </template>
          </v-data-table>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import getStarWarsVehicles from '@/graphql/starwars/queries/getStarWarsVehicles.gql'
import getPokemon from '@/graphql/pokemon/queries/getPokemon.gql'
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'

import { useFavoritesStore } from '@/pinia/favorites'
const store = useFavoritesStore()

const route = useRoute()
const hasTabSpecified = Object.keys(route.query).includes('tab')
let tab = ref(null)

if (hasTabSpecified) tab.value = route.query['tab']

const starWarsHeaders = ref([
  { title: 'Name', align: 'start', key: 'name' },
  { title: 'Model', key: 'model', sortable: false },
  { title: 'Max Atmosphering Speed', key: 'maxAtmospheringSpeed' },
  { title: 'Passengers', key: 'passengers' },
  { title: 'Length', key: 'length' },
])
let starWarsVehicles = ref([])
const starWarsSearch = ref('')
const starWarsSortBy = ref([{ key: 'name', order: 'asc' }])
let starWarsLoadingData = ref(true)

const pokemonHeaders = ref([
  { title: 'ID', align: 'start', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Evolution Chain ID', key: 'evolution_chain_id' },
  { title: 'Base Happiness', key: 'base_happiness' },
  { title: 'Capture Rate', key: 'capture_rate' },
  { title: 'Color', key: 'pokemon_v2_pokemoncolor.name' },
])
let pokemon = ref([])
const pokemonSearch = ref('')
const pokemonSortBy = ref([{ key: 'id', order: 'asc' }])
let pokemonLoadingData = ref(true)

const { onResult: swOnResult } = useQuery(
  getStarWarsVehicles,
  {},
  { clientId: 'starwars' }
)

swOnResult((queryResult) => {
  starWarsVehicles.value = queryResult.data.allVehicles.vehicles
  starWarsLoadingData.value = false
  return starWarsVehicles
})

const { onResult: pkOnResult } = useQuery(
  getPokemon,
  {},
  { clientId: 'pokemon' }
)

pkOnResult((queryResult) => {
  pokemon.value = queryResult.data.pokemon_v2_pokemonspecies
  pokemonLoadingData.value = false

  return pokemon
})
</script>
