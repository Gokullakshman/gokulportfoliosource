<template>
  <v-app 
>

 
    <MainVue  class="scrollbar"/>

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
/* For Webkit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 6px; /* Adjust the width of the scrollbar */
  height: 6px; /* Adjust the height of the horizontal scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #888; /* Scrollbar color */
  border-radius: 1px; /* Rounded corners */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Darker color when hovered */
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Track color */
  border-radius: 1px;
}

</style>
