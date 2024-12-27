<template>
  <div>
    <h1>Contador: {{ contador }}</h1>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['valorContador'])
  },
  methods: {
    ...mapActions(['incrementar', 'decrementar'])
  }
};
</script>