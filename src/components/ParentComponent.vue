<template>
  <div>
    <h1>Texto recibido: {{ texto }}</h1>
    <Child @enviarTexto="actualizarTexto" />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: { Child },
  data() {
    return { texto: '' };
  },
  methods: {
    actualizarTexto(nuevoTexto) {
      this.texto = nuevoTexto;
    }
  }
};
</script>