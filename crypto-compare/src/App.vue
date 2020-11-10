<template>
  <div id="app">
    <CryptoChart />
  </div>
</template>

<script>
import CryptoChart from './components/CryptoChart.vue'

export default {
  name: 'App',
  components: {
    CryptoChart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
