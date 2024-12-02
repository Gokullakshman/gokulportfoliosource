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

   

    <!-- For Desktop and Larger: Show Full Menu -->
    <v-row justify-end align-center v-show="$vuetify.breakpoint.mdAndUp" class=" pa-4 mt-4">
      <v-col md="3" class="d-flex justify-end align-center">
        <v-icon large color="orange" >mdi-face-man-profile</v-icon>&nbsp;&nbsp;
        <span   class="white--text" style=" font: bold 1.5rem sans-serif;">Portfolio</span>
      </v-col>
      <v-col md="9">
        <ul>
          <li>
            <v-btn text class="white--text">About</v-btn>
          </li>
          <li>
            <v-btn text class="white--text">Skills</v-btn>
          </li>
          <li>
            <router-link to="/experience">
              <v-btn text class="white--text">Experience</v-btn>
            </router-link>
          </li>
          <li>
            <v-btn text class="white--text">Education</v-btn>
          </li>
          <li>
            <router-link to="/contact#contact">
              <v-btn text class="white--text">Contact</v-btn>
            </router-link>
          </li>
        </ul>
      </v-col>
    </v-row>  
  </v-col> 
  
  <HelloImage></HelloImage>

      
        </v-row>    


        
       
        <SkillsSet></SkillsSet>
        <NavigationVue :Drawer="Drawer"></NavigationVue>
        
        <!-- <Navigation></Navigation> -->
        <!-- <v-row >
  <v-col cols="12" md="12">
    <span class="white--text">hello</span>
 

  </v-col>
 </v-row> -->
       
       <ToastVue v-if="Toast"></ToastVue>


      </div>
 
    
    
   
 
</template>
<script>
// import vuetify from '@/plugins/vuetify';
import HelloImage from '../components/HelloWorld.vue'
import SkillsSet from '../components/SkillsSet.vue'
// import Navigation from '../components/Navigation.vue'
import NavigationVue from '../components/NavigationVue.vue'
import ToastVue from '../components/ToastVue.vue'
  export default {
    data () {
      return {
        Toast:false,
        Drawer: false,
        items: [
          { title: 'About', icon: 'mdi-view-dashboard' },
          { title: 'Skills', icon: 'mdi-forum' },
          { title: 'Experience', icon: 'mdi-forum' },
          { title: 'Contact', icon: 'mdi-forum' },
          { title: 'Github Profile', icon: 'mdi-forum' },
          { title: 'Linkedin profile', icon: 'mdi-forum' },
          { title: 'Github Profile', icon: 'mdi-forum' },
        ],
        items1: [
        ["mdi-home", "About"],
        ["mdi-account", "Skills"],
        ["mdi-settings", "Experience"],
        ["mdi-information", "Contact"],
      ],
      }
    },
    components:{
      HelloImage,
      SkillsSet,
      NavigationVue,
      ToastVue
      // Navigation
    },
    navigateToContact() {
      this.$router.push({ path: "/", hash: "#contact" }); // Navigates to the contact section
    },
    mounted(){
      setTimeout(
        this.$toast({
  component: ToastVue,
  listeners: {
    myClick: () => this.$toast.success("Hi have a nice Day!!")
  }
}, {
  position: "bottom-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
})

     , 3700)

      }
    }

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