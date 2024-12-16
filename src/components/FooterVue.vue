<template>
    <div>
        <v-footer
        id="footer"
        class="mt-5"
  
    dark
    padless
    style="width: 100%;"
  >
    <v-card
    style="background: linear-gradient(135deg, #000000 0%, #0c1b2a 25%, #0c1b2a 50%,  #000000  100%);"
      outlined
      flat
      tile
      class=" white--text text-center"
      width="1900"
    >
      <v-card-text>
        <v-btn
          v-for="n in socialmedia"
          :key="n.icon"
          :href="n.link"
          class="mx-4 "
          icon
          :color="n.color"
          target="_blank"
         
        >
          <v-icon size="24px" >
            {{ n.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <v-col cols="12">
            <v-btn
          v-for="link in links"
          :key="link"
          class="white--text"
          :class="{'mx-12':$vuetify.breakpoint.mobile,'mx-4':$vuetify.breakpoint.mdandUp,'green--text':hoveredlink == link}"
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
        <v-icon color="green">mdi-whatsapp</v-icon>&nbsp; <strong>+91 6383163259</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </div>
</template> 
<script>
  export default {
    data: () => ({
      socialmedia: [{
        icon:'mdi-instagram',
        link:"https://github.com/Gokullakshman",
        color:"pink"
      },
      {
        icon:'mdi-twitter',
        link:"https://x.com/ThalaphathyMax",
        color:"blue"
      },
      {
        icon:'mdi-linkedin',
        link:"https://www.linkedin.com/in/gokul-s-38893b280/",
        color:"info"
      },
      {
        icon:'mdi-github',
        link:"https://github.com/Gokullakshman",
        color:"white"
      }
       
        
        
        
      ],
      links: [
        'About',
        'Skills',
        'Experience',
        'Contact',
        
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


