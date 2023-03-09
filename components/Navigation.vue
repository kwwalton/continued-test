<template>
  <v-container>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/search">Search</NuxtLink></li>
        <li><NuxtLink to="/favorites">Favorites</NuxtLink></li>
      </ul>
    </nav>
  </v-container>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
}
li {
  margin-right: 20px;
  text-decoration: none;
}
</style>
