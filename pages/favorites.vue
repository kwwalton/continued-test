<template>
  <v-container>
    <h1>Favorites</h1>
    <p>
      With more time, you would see more functionality and styling and other
      nice touches that you consider a must have in a production app.
    </p>

    <ul v-if="store.favorites.length">
      <li v-for="favorite in store.favorites" :key="favorite.name">
        {{ favorite.name }}
      </li>
    </ul>
  </v-container>
</template>

<script setup>
// NOTE: this is rough, but you get the gist of it
import { useFavoritesStore } from '@/pinia/favorites'
const store = useFavoritesStore()
</script>
