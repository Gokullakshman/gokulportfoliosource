<template>
  <div fill-height >
    <v-row  >
      <v-col xs12>
        <!-- For Mobile: Show only Portfolio -->
        <v-row class="pa-1">
          <v-col sm="12" class="d-md-none">
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="6" class="mt-4">
                <v-icon large color="green">mdi-face-man-profile</v-icon>&nbsp;&nbsp;
                <span class="green--text" style="font: bold 1.4rem sans-serif;">Port</span><span class="white--text" style="font: bold 1.5rem sans-serif;">folio</span>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex justify-end">
                <v-app-bar-nav-icon color="white" large @click.stop="Drawer = !Drawer"></v-app-bar-nav-icon>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <NavigationVue :Drawer="Drawer" />

        <!-- For Desktop and Larger: Show Full Menu -->
        <v-row justify-end align-center v-show="$vuetify.breakpoint.mdAndUp" class="pa-4 mt-4">
      
          <v-col md="3" class="d-flex justify-end align-center">
            <v-icon large color="green">mdi-face-man-profile</v-icon>&nbsp;&nbsp;
            <span class="green--text" style="font: bold 1.5rem sans-serif;">Port</span><span class="white--text" style="font: bold 1.5rem sans-serif;">folio</span>
          </v-col>
          <v-col md="9">
            <ul>
              <li v-for="(n, index) in navBarItem" :key="index">
                <v-btn text class="white--text" @click="setActive(n)">{{ n }}</v-btn>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavigationVue from '../components/NavigationVue.vue';

export default {
  data() {
    return {
      Toast: false,
      Drawer: false,
      navBarItem: ["About", "Skills", "Experience", "Education", "Contact"],
      activeItem: "About",
    };
  },
  components: {
    NavigationVue,
  },

  methods: {
    setActive(item) {
      this.activeItem = item;

      // Scroll to the section by its ID
      const targetSection = document.getElementById(item.toLowerCase());
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // You can adjust this based on where you want the section to land
        });
      }
    }
  },
 
};
</script>

<style scoped>
.d-xs-none {
  display: none !important;
}

@media (min-width: 600px) {
  .d-xs-none {
    display: block !important;
  }
}

.custom-outline {
  border: 3px solid #854ce6;
  color: black;
}

.border {
  color: rgba(242, 243, 244, 0.5);
  border: 1px solid rgba(242, 243, 244, 0.5);
  border-radius: 12px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  font: bold 1.5rem sans-serif;
  text-transform: uppercase;
  color: grey;
}

ul li {
  padding: 0 0.5em 0.25em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}

ul li:hover {
  color: #fff;
}

ul li:before {
  content: "";
  position: absolute;
  inset: calc(100% - 3px) 0 0 0; /* 3px = the thickness */
   text-decoration: green;
   background-color: green; /* the color */
 
  scale: 0 1;
  transition: 0.3s, translate 0s 0.3s;
 
}

ul:hover li:before {
  scale: 1;
}

ul li:hover:before {
  translate: 0;
  transition: 0.3s;
}

ul:hover li:has(~ li:hover):before {
  translate: 100% 0;
  transition: 0.2s 0.2s, scale 0s 0.4s;
}

ul:hover li:hover ~ li:before {
  translate: -100% 0;
  transition: 0.2s 0.2s, scale 0s 0.4s;
}
</style>
