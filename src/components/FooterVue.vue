<template>
    <div>
        <v-footer
        id="footer"
        class="mt-5"
  
    dark
    padless
  >
    <v-card
      style="background: linear-gradient(135deg, #46293d, #161638);"
      outlined
      flat
      tile
      class=" white--text text-center"
      width="1900"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
         
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <v-col cols="12">
            <v-btn
          v-for="link in links"
          :key="link"
          class="white--text"
          :class="{'mx-12':$vuetify.breakpoint.mobile,'mx-4':$vuetify.breakpoint.mdandUp,'purple--text':hoveredlink == link}"
          text
           @click="setActive(link)"
           @mouseover="SetHoveredLink(link)"
           @mouseleave="RemoveHoveredLink"
           
        >
        {{ link }}
        </v-btn>

        </v-col>
       
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>All rights Reserved</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </div>
</template> 
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      links: [
        'Home',
        'Skills',
        'Experience',
        'Contact',
        'About',
      ],
      hoveredlink:null
    }),
    methods:{
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
    },
    SetHoveredLink(val){
      this.hoveredlink = val
    },
    RemoveHoveredLink(){
        this.hoveredlink = null
    }

    }
    
    
    
  }
</script>


