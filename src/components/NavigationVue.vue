<template>
  <v-row>
    <v-col>
      <v-navigation-drawer
        v-if="drawer == true"
        class="d-md-none white"
        absolute
        dark
        width="80%"
        height="100%"
        permanent
        bottom
        style="position: fixed;"
        @input="toggleBodyScroll(drawer)"
      >
      {{ drawer }}
        <v-list class="mt-12">
          <!-- Close Icon -->
          <v-icon color="black" @click="Close()">mdi-close</v-icon>

          <!-- Menu Items -->
          <v-list-item
            v-for="(val, i) in items1"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ val[0] }}</v-icon>
            </v-list-item-icon>
            <v-btn
              class="black--text"
              text
              @click="setActive(val[1])"
            >
              {{ val[1] }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      items1: [
        ["mdi-information-outline", "About"],
        ["mdi-head-snowflake-outline", "Skills"],
        ["mdi-briefcase-outline", "Experience"],
        ["mdi-account-box", "Contact"],
      ],
      drawer: false,
    };
  },
  props: {
    Drawer: Boolean,
  },
  watch: {
    Drawer(newval) {
      this.drawer = newval;
     
      this.toggleBodyScroll(newval); 
    },
  },

  methods: {
    // Scroll to section
    setActive(item) {
      this.drawer = false; // Close the drawer
      this.activeItem = item;
      this.$emit("drawerclose")

      // Scroll to the section by its ID
      const targetSection = document.getElementById(item.toLowerCase());
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    

    // Toggle body scroll based on drawer visibility
    toggleBodyScroll(isOpen) {
      if (isOpen) {
        document.body.style.overflow = "hidden"; // Disable scroll
      } else {
        document.body.style.overflow = ""; // Enable scroll
      }
    },
  },
  beforeDestroy() {
    // Ensure scroll is enabled when component is destroyed
    document.body.style.overflow = "";
  },
};
</script>
