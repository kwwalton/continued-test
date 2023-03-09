# continued-fe-assignment-v3

Welcome to the Continu**ed** Front End Development Assignment (v3)!

This assignment is intended to assess your ability to work with the primary aspects of our tech stack: Vue 3, Nuxt 3, and GraphQL.  You have been provided this repository as a starting point for the assignment tasks outlined below.

**Please plan to spend no longer than 2 hours on this assessment.**  You are encouraged to utilize the framework documentation and GraphQL API playgrounds to complete the assessment.

Your final submission will be evaluated based on an error-free demonstration of the requested tasks, organization of code, formatting and styling of the application pages, accessibility, scalability, and readability.

We respect your time and your development capabilities.  No individual code submitted as part of this assessment will be utilized by Continu**ed** for any purpose beyond evaluating your skill set against the criteria of our open position.

## Tasks

### Search Page
- Using a Vuetify prop for the `v-tab` component, adjust the tabs to take up the full horizontal width.
- Adjust the `getPokemon.gql` GraphQL query to request an additional field, `capture_rate`, and display it in the table after `base_happiness`.
- Add a link on the Pokemon table, linking each Pokemon's name to bring up the `pokemon/[id].vue` Detail Page when clicked on.
- Convert the `setup()` function to use `<script setup>` instead.
- Add skeleton loaders (custom or separately installed package) to both tables while data is being returned from the queries, keying off of the `starWarsLoadingData` and `pokemonLoadingData` variables.


### Star Wars Vehicle Detail Page
- Running a Google Lighthouse audit for `Accessibility` using the Chrome Dev Tools, identify and resolve any color contrast issues found.
- Finish building out the `vehicle/[id].vue` page using Vuetify components such as `v-card` to format and style the vehicle data retrieved from the API.  Ensure that your display works across all viewports.
-  Format and display the `Film Connection` information retreieved from the query onto this page.

### Pokemon Detail Page
- Using the [Pokemon GraphQL Explorer](https://studio.apollographql.com/public/poke-gql/explorer?variant=current), choose a selection of fields of your choice from the API and complete the `getPokemonDetails.gql` query file accordingly.
- Use `apollo` to request the Pokemon Details data from the API and display it on the `pokemon/[id].vue` page.  Format and style the display of the data using Vuetify components however you wish, but ensure that your display works across all viewports.

### Stretch Goals
If you have additional time during the assessment, you may optionally choose to take on one or more of the following additional tasks:
- Choose an icon set supported by Vuetify, then install and configure it to work with Nuxt 3.  Additional package installation may be required.  Add icons of your choice to the tables on the Search Page.
- Create a new custom component that wraps Vuetify's `<v-chip>` and applies custom styling of your choice.  Add it to the `components` directory, creating the sub-directory structure according to [Atomic Design Principles](https://bradfrost.com/blog/post/atomic-web-design/).  Finally, import your custom component into the Search Page and use it to style the `Color` column of the Pokemon table.
- Set up a new Pinia store (package already installed) in the project to store favorite Star Wars vehicles.  Add a button to the Star Wars table on the Search Page to add a vehicle to a list of favorites.  Display the favorite vehicles in a manner of your choice on a separate page, ensuring there is a clear way to navigate to them.

## Resources

### Framework Docs
- [Vue](https://vuejs.org/guide/introduction.html)
- [Nuxt](https://nuxt.com/docs/getting-started/introduction)
- [Vuetify](https://next.vuetifyjs.com/en/getting-started/installation/)

### GraphQL API Playgrounds
- [Star Wars](https://studio.apollographql.com/public/star-wars-swapi/explorer?variant=current)
- [Pokemon](https://studio.apollographql.com/public/poke-gql/explorer?variant=current)

## Installation
Please fork this repository to your individual GitHub account as a starting point, then clone it down to your local machine:
`git clone git@github.com:<YOUR GH USERNAME>/continued-fe-assignment-v3`.

Create a branch to complete the assignment tasks and push it up to your remote repository fork once you are ready to submit your work.

### Prerequisites
It is strongly recommended to install [nvm](https://github.com/nvm-sh/nvm).  This project is configured with an `.nvmrc` file to ensure you use a specific version of node to avoid any potential build/compilation errors.

### Build Setup
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

#### Development Server
Start the development server on http://localhost:3000

```bash
npm run dev
```

#### Production
Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

