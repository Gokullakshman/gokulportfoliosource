<template>  
<div fill-height class="" >
  <v-row  >
    <v-col xs12  >
    <!-- For Mobile: Show only Portfolio -->
    <v-row class="pa-1 " >
      <v-col sm="12" class="d-md-none ">
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="6" class="d-flex ">
            <v-icon class=" white" outlined :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'"
            :rounded="$vuetify.breakpoint.xsOnly" >mdi-face-man-profile</v-icon>
            <span class="white--text pl-4">Portfolio</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex justify-end">
            <v-app-bar-nav-icon     color="white" large @click.stop="Drawer =!Drawer"></v-app-bar-nav-icon>
          </v-col>
        </v-row>
       
       
      
         
    
      </v-col>
    

      
    
    </v-row> 

   

    <!-- For Desktop and Larger: Show Full Menu -->
    <v-layout justify-center align-center v-show="$vuetify.breakpoint.mdAndUp" class=" pa-4 mt-4">
      <v-flex md3 >
        <span class="white--text">Portfolio</span>
      </v-flex>
      <v-flex md4>
        <v-layout >
          <v-flex>
            <v-btn text class="white--text">About</v-btn>
          </v-flex>
          <v-flex>
            <v-btn text class="white--text">Skills</v-btn>
          </v-flex>
          <v-flex>
            <router-link to="/experience">
              <v-btn text class="white--text">Experience</v-btn>
            </router-link>
       
          </v-flex>
          <v-flex>
            <v-btn text class="white--text">Projects</v-btn>
          </v-flex>
          <v-flex>
            <v-btn text class="white--text">Education</v-btn>
          </v-flex>
          <v-flex>
  <router-link to="/contact#contact">
    <v-btn text class="white--text">Contact</v-btn>
  </router-link>
</v-flex>
          <v-flex>
            <v-btn outlined rounded color="#854CE6">LinkedIn Profile</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>  
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
       
       


      </div>
 
    
    
   
 
</template>
<script>
// import vuetify from '@/plugins/vuetify';
import HelloImage from '../components/HelloWorld.vue'
import SkillsSet from '../components/SkillsSet.vue'
// import Navigation from '../components/Navigation.vue'
import NavigationVue from '../components/NavigationVue.vue'
  export default {
    data () {
      return {
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
      NavigationVue
      // Navigation
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
</style>