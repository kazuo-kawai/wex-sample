<template>
<div id="app">
  <v-app>
    <v-app-bar app
      color="primary"
      dark
    >
    <span>カウンター</span>
    </v-app-bar>
    <v-main>
      <Counter />
    </v-main>
  </v-app>
</div>
</template>

<script>
import Counter from './components/Counter.vue' 
export default {
  name: 'app',
  components: {
    Counter
  },
  data: () => ({
    //
  }),
};
</script>
