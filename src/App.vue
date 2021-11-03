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
      <DoubleCounter />
    </v-main>
  </v-app>
</div>
</template>

<script>
import Counter from './components/Counter.vue' 
import DoubleCounter from './components/DoubleCounter.vue'

export default {
  name: 'app',
  components: {
    Counter,
    DoubleCounter
  },
  data: () => ({
    //
  }),
};
</script>
