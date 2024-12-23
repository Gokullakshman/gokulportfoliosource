<template>
    <div>
      <v-row>
            <v-col cols="12" md="12" class="d-flex justify-end pr-10">
                <v-icon  color="black" large @click="setActive('About')">mdi-arrow-up-circle</v-icon>
            </v-col>
      
      </v-row>
        <v-footer
        id="footer"
        class="mt-5"
        
  
    dark
    padless
    style="width: 100%;"
  >
    <v-card
    
      outlined
     
      class=" white--text text-center black"
      width="1900"
    >
      <v-card-text>
         <!-- :color="hoveredindex == index ? 'currentcolor' : 'defaultcolor'" -->
        <v-btn
          v-for="(n,index) in socialmedia"
          :key="n.icon"
          :href="n.link"
          class="mx-4 "
          icon
         :color="hoveredindex == index ? currentcolor :defaultcolor"
          @mouseover="getcolor(index)"
          @mouseleave="hoveredindex = null"
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
          v-for="(link,index) in links"
          :key="link"
          class="white--text sansfooter"
          :class="{'mx-12':$vuetify.breakpoint.mobile,'mx-4':$vuetify.breakpoint.mdandUp,'black--text':hoveredlink == index}"
          text
           @click="setActive(link)"
           @mouseover="SetHoveredLink(index)"
           @mouseleave="RemoveHoveredLink"
           
        >
        {{ link }}
        </v-btn>

        </v-col>
       
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <v-icon color="green">mdi-whatsapp</v-icon>&nbsp; <strong  class="white--text">+91 6383163259</strong>
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
        link:"https://www.instagram.com/gokul_karthii/",
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
      },
      {
        icon:'mdi-gmail',
        link:"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvwDjzHGFgMrCWGFqVLKBKHLhbfMthXxJnPnpDKLBPTjWmdwVxtWTCFWdWLMdJRKcCPnB",
        color:"red"
      }
       
        
        
        
      ],
      links: [
        'About',
        'Skills',
        'Experience',
        'Education',
        'Contact',
        
        
      ],
      hoveredlink:null,
      currentcolor:"",
      currentindex:null,
      hoveredindex:null,
      defaultcolor:"white"
    }),
    methods:{
      setActive(item) {
  this.activeItem = item;

  // Get the target section by ID
  const targetSection = document.getElementById(item.toLowerCase());
  if (targetSection) {
    // Calculate target position including offset for navbar height
    const navbarHeight = 60; // Replace 60 with your actual navbar height in pixels
    const offset = 10; // Additional margin you want below the section
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

    // Scroll to the target with the offset
    window.scrollTo({
      top: targetPosition - navbarHeight - offset, // Adjusted scroll position
      behavior: "smooth", // Smooth animation
    });
  }

 
},
    SetHoveredLink(val){
      this.hoveredlink = val
    },
    RemoveHoveredLink(){
        this.hoveredlink = null
    },
    getcolor(index){
      console.log("this.socialmedia[index].color",this.socialmedia[index].color)
       
        this.currentcolor= this.socialmedia[index].color
        this.hoveredindex = index
     

    }

    }
    
    
    
  }
</script>
<style>

.sansfooter{

  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-transform: capitalize;

}

</style>


