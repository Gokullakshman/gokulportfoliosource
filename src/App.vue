<template>
  <v-app style="background: linear-gradient(135deg, #46293d, #161638);">
  

 
    <MainVue />

  </v-app>
</template>

<script>
import MainVue from "./views/MainVue.vue"
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    MainVue
  }
};
</script>
<style>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Debug overflow issues (optional) */
* {
  box-sizing: border-box; /* Include padding and border in width calculations */
}

/* Additional utility to prevent overflowing elements */
.v-app {
  overflow-x: hidden;
}
.app-layout {
  overflow: hidden; /* Prevent unnecessary scrolling */
}

.main-layout {
  overflow-y: auto; /* Ensure content scrolls only within the main area */
  height: 100vh; /* Fit the viewport height */
}

</style>
