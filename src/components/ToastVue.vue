<template>
    <div class="container">
      <span>Say Hi!! to me</span>&nbsp;&nbsp;
      <!-- <button
       outlined
        class="action"
        @click.stop="clicked"
      >Send</button> -->
      <v-btn class="action"
      @click.stop="clicked" outlined>
      send
      </v-btn>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      clicked() {
        this.$emit("myClick");
      }
    }
  };
  </script>