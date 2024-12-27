<template>
  <div>
    <input v-model="inputTexto" placeholder="Escribe algo..." />
    <button @click="enviarTexto">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return { inputTexto: '' };
  },
  methods: {
    enviarTexto() {
      this.$emit('enviarTexto', this.inputTexto);
    }
  }
};
</script>