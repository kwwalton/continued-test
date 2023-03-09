<template>
  <v-app theme="dark">
    <Navigation />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer app>
      <span>
        &copy; {{ new Date().getFullYear() }} Continu<strong>ed</strong>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
