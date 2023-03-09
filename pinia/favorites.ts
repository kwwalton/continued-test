// NOTE: defineImport was made available globally in the config
// import { defineStore } from "@pinia/nuxt"

interface IFavorite {
  name: string
}

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref(new Array<IFavorite>())
  function addToFavorites(payload: IFavorite) {
    favorites.value.push(payload)
  }

  return { favorites, addToFavorites }
})
