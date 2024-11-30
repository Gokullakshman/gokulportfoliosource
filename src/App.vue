<template>
  <v-app style="background: linear-gradient(135deg, #46293d, #161638);">
  

    <v-main>
      <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
