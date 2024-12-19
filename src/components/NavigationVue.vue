<template>
  <v-row>
          <v-col>
                
        <v-navigation-drawer
        v-if="drawer==true"
        class="d-md-none white" 
        absolute
      dark
      width="100%"
      permanent
      bottom
      style=" position: fixed; overflow: hidden;"
    
    >
      <v-list class="mt-12">
        <v-list-item
          v-for="(val, i) in items1"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon  >{{ val[0] }}</v-icon>
          </v-list-item-icon>
          <v-btn  class="black--text" text @click="setActive(val[1])">{{ val[1] }}</v-btn>

          <!-- <v-list-item-content>
            <v-list-item-title  >{{ val[1] }}</v-list-item-title>
          </v-list-item-content> -->
        </v-list-item> 
        <v-col>
          <v-btn color="green" small  dense rounded href="https://github.com/Gokullakshman" target="_blank">Github profile</v-btn>
        </v-col>

        
      </v-list>
    </v-navigation-drawer> 
          </v-col>
        </v-row>
</template> 
<script>
 export default {
    data () {
      return {
        items1: [
        ["mdi-information-outline", "About"],
        ["mdi-head-snowflake-outline", "Skills"],
        ["mdi mdi-briefcase-outline", "Experience"],
        ["mdi-account-box", "Contact"],
      ],
      drawer:null
      }
    },
    props:{
      Drawer:Boolean
    },
    watch:{
      Drawer(newval){
        this.drawer = newval
      }
    },
    methods: {
    setActive(item) {
      this.drawer = false
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
 


  }
</script>