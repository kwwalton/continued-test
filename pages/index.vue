<template>
  <v-row justify="center" align="center">
    <v-col cols="8">
      <v-card>
        <v-card-title class="headline text-center">
          Welcome to the Continu<b>ed</b> Front End Development Assignment (v3)!
        </v-card-title>
        <v-card-text>
          <div class="text-center pb-3">
            <NuxtLink to="https://nuxt.com/docs" target="_blank">Nuxt Docs</NuxtLink> |
            <NuxtLink to="https://next.vuetifyjs.com/en/getting-started/installation/" target="_blank">Vuetify Docs</NuxtLink>
          </div>
          <v-divider />

          <p>This assignment is intended to assess your ability to work with the primary
              aspects of our tech stack: Vue, Nuxt, and GraphQL.  You have been provided this 
              repository as a starting point for the assignment tasks outlined below.
          </p>
          <p><b>Please plan to spend no longer than 2 hours on this assessment.</b>
            You are encouraged to utilize the framework documentation and GraphQL API playgrounds
              to complete the assessment.
          </p>
          <p>Your final submission will be evaluated based on an error-free demonstration of the
              requested tasks, organization of code, formatting and styling of the application pages, 
              accessibility, scalability, and readability.
          </p>
          <p>We respect your time and your development capabilities.  No individual code submitted
              as part of this assessment will be utilized by Continu<b>ed</b> for any purpose beyond 
              evaluating your skill set against the criteria of our open position.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            to="/search"
          >
            Continue to the Assignment
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
  
<style lang="scss">
.v-card p {
  padding: .5rem 0;
}
</style>