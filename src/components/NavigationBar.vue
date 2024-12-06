<template>  
    <div fill-height class="" >
      <v-row  >
        <v-col xs12  >
        <!-- For Mobile: Show only Portfolio -->
        <v-row class="pa-1 " >
          <v-col sm="12" class="d-md-none ">
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="6" class="mt-4 ">
                <v-icon large color="orange" >mdi-face-man-profile</v-icon>
                <span class="orange--text pl-4 font-weight-bold" >Portfolio</span>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex justify-end">
                <v-app-bar-nav-icon     color="white" large @click.stop="Drawer =!Drawer"></v-app-bar-nav-icon>
              </v-col>
            </v-row>
           
           
          
             
        
          </v-col>
        
    
          
        
        </v-row> 

        <NavigationVue :Drawer="Drawer"></NavigationVue>
    
       
    
        <!-- For Desktop and Larger: Show Full Menu -->
        <v-row justify-end align-center v-show="$vuetify.breakpoint.mdAndUp" class=" pa-4 mt-4">
          <v-col md="3" class="d-flex justify-end align-center">
            <v-icon large color="orange" >mdi-face-man-profile</v-icon>&nbsp;&nbsp;
            <span   class="white--text" style=" font: bold 1.5rem sans-serif;">Portfolio</span>
          </v-col>
          <v-col md="9">
            <ul>
              <li v-for="(n,index) in navBarItem" :key="index">
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
      import NavigationVue from '../components/NavigationVue.vue'
       export default {
            data () {
              return {
                Toast:false,
                Drawer: false,
                navBarItem:["About","Skills","Experience","Education","Contact"],
                activeItem:"About"
              }
            },
            components:{
      NavigationVue
            },
            mounted() {
        // Add scroll event listener when component is mounted
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        // Clean up the event listener when component is destroyed
        window.removeEventListener('scroll', this.onScroll);
    },
    methods:{
        setActive(item) {
            this.activeItem = item; // Set the clicked item as active

            // Get the target section based on the item
            let targetSection = document.getElementById(item.toLowerCase());
            if (targetSection) {
                // Get the offset position of the target section
                let offsetTop = targetSection.offsetTop;

                // Optionally, you can apply a custom offset if needed (e.g., for a fixed header)
                let customOffset = 75; // Adjust this value based on your layout

                // Scroll to the desired position
                window.scrollTo({
                    top: offsetTop - customOffset, // Adjust position with custom offset
                    behavior: 'smooth'             // Smooth scroll effect
                });
            }
        },
        onScroll() {
            const sections = this.navBarItem.map(nav => document.getElementById(nav.toLowerCase()));
            let active = '';

            // Check each section's position in the viewport
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const rect = section.getBoundingClientRect();

                // Check if the section is in view (adjust threshold as needed)
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    active = this.navBarItem[i];
                    break;
                }
            }

            // Update the active item if needed
            if (active && active !== this.activeItem) {
                this.activeItem = active;
            }
        },
    }
        }
    </script>
    <style>.d-xs-none {
        display: none !important;
      }
      
      @media (min-width: 600px) {
        .d-xs-none {
          display: block !important;
        }
      }
      .custom-outline{
        border: 3px solid #854CE6;
        color: black;
       
      }
      .border{
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
        padding: 0 .5em .25em;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: .3s;
      }
      ul li:hover {
        color: #fff;
      }
      ul li:before {
        content: "";
        position: absolute;
        inset: calc(100% - 3px) 0 0 0; /* 3px = the thickness */
        background: #a320ce; /* the color */
        scale: 0 1;
        transition: .3s, translate 0s .3s;
        text-decoration: #a320ce;
      }
      ul:hover li:before {
        scale: 1;
      }
      ul li:hover:before {
        translate: 0;
        transition: .3s;
      }
      ul:hover li:has(~ li:hover):before {
        translate: 100% 0;
        transition: .2s .2s,scale 0s .4s;
      }
      ul:hover li:hover ~ li:before {
        translate: -100% 0;
        transition: .2s .2s,scale 0s .4s;
      }
      
      
      
      
      
      </style>
       