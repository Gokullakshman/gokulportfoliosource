<template>
  <div fill-height class="fixed-top">
    <v-row>
      <v-col xs12>
        <v-row class="pa-1">
          <v-col sm="12" class="d-md-none">
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="6" class="mt-4">
                <v-icon large color="black">mdi-face-man-profile</v-icon
                >&nbsp;&nbsp;
                <span class="black--text"
                  ><vgl-wave text="Portfolio"></vgl-wave
                ></span>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex justify-end">
                <v-app-bar-nav-icon
                  color="black"
                  large
                 @click="Drawertrue()"
                ></v-app-bar-nav-icon>
              </v-col>
              <NavigationVue   :Drawer="Drawer" />
            </v-row>
          </v-col>
        </v-row>

        <!-- For Desktop and Larger: Show Full Menu -->
        <v-row
          justify-end
          align-center
          v-show="$vuetify.breakpoint.mdAndUp"
          class="white pa-2"
          data-aos="fade-left"
        >
          <v-col md="3" class="d-flex justify-end align-center">
            <v-icon large color="black">mdi-face-man-profile</v-icon
            >&nbsp;&nbsp;
            <span class="black--text" style="font: bold 1.5rem sans-serif"
              ><vgl-wave text="Portfolio"></vgl-wave
            ></span>
          </v-col>
          <v-col md="9" class="d-flex align-end justify-end">
            <ul>
              <li v-for="(n, index) in navBarItem" :key="index">
                <v-btn
                  text
                  :class="{
                    'black white--text rounded-lg': blackcolorindex == index,
                  }"
                  @mouseover="mapBlackColor(index)"
                  @mouseleave="blackcolorindex = null"
                  class="black--text sansfooter"
                  @click="setActive(n)"
                  ><vgl-wave v-if="blackcolorindex == index"  :text="n"></vgl-wave
                ><span v-else>{{ n }}</span></v-btn>
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
      blackcolorindex: null,
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
  const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

  // Scroll to the target with an offset of 8px
  window.scrollTo({
    top: targetPosition + 10, // Adjust the position
    behavior: "smooth", // Smooth animation
  });
}

    },
    mapBlackColor(index) {
      this.blackcolorindex = index;
    },
    Drawertrue(){
      this.$drawer = true
      console.log("this.$drawer",this.$drawer)
    }
  },
  mounted:{
    call(){
      console.log(this.$drawer)
    }
  }
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
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it appears above other elements */
  background-color: rgba(
    242,
    243,
    247,
    1
  ); /* Set background color to match your design */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
}
.sansfooter{

font-family: "Open Sans", sans-serif;
font-weight: 600;
text-transform: capitalize;


}
</style>
