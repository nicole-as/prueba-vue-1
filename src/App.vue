<template>
  <div id="app">
    <ParentComponent />
    <CounterComponent />
  </div>
</template>

<script>
import ParentComponent from './components/ParentComponent.vue';
import CounterComponent from './components/CounterComponent.vue';

export default {
  name: 'App',
  components: {
    ParentComponent,
    CounterComponent,
  },
};
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