<template>
<div id="app">
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  <Counter />
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
