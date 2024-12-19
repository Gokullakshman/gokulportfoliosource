<template>  
<div fill-height class="" >  


      
       <HelloImage ></HelloImage>
        <SkillsSet  
       ></SkillsSet>
        <ExperienceVue></ExperienceVue>
        <EducationVue/>
        <ContactVue></ContactVue>
        <FooterVue></FooterVue>
        <!-- <NavigationVue :Drawer="Drawer"></NavigationVue> -->
        
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
import EducationVue   from '../components/EducationVue.vue';
import ContactVue  from '../components/ContactVue.vue';
// import Navigation from '../components/Navigation.vue'

import ToastVue from '../components/ToastVue.vue'
import ExperienceVue from '../components/ExperienceVue.vue'
import FooterVue from '../components/FooterVue.vue'
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
      ToastVue,
      ExperienceVue,
      EducationVue,
      ContactVue,
      FooterVue
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
  timeout: 3000,
  closeOnClick: false,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: false,
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