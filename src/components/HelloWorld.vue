<template>
  <div style="background-color: rgba(242, 243, 247, 1);" data-aos="fade-right" >
    <v-container fill-height  id="about" :style="$vuetify.breakpoint.mdAndUp ? {'height':'100vh'} : 'dd'" :class="{'mt-12' :$vuetify.breakpoint.mobile}">

  
<v-row class="mt-2 d-flex justify-space-around" >
  <v-col
    md="6"
    xs="12"
    :class="{'d-flex justify-end pl-10 text-center text-h6':$vuetify.breakpoint.mdAndUp,
      'd-flex justify-end pl-10  text-center text-h6 pa-9':$vuetify.breakpoint.mobile,'order-0':$vuetify.breakpoint.mdAndUp,'order-1':$vuetify.breakpoint.mobile }"
    v-show="$vuetify.breakpoint.mdAndUp"
  >   
        <v-col column cols="12" :class="{'mt-7':$vuetify.breakpoint.mdAndUp}">
          <p  class="sanslight"> 
            <span class="sansbold" :style="$vuetify.breakpoint.mobile ? {'font-size':'29px'} : 'd'"  style="color: #C5B358;">Hi,Iam Gokul S</span>
          <span class="font-weight-bold d-flex justify-center ma-4  black--text" :class="{'display-1' :$vuetify.breakpoint.mdAndUp}"><vue-typer
  :text='["Full Stack Developer","Vue js","Golang","MySQL"]'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='100'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='select-all'
  :erase-on-complete='false'
  caret-animation='blink'
></vue-typer></span>
          <span :class="{'sanslight':$vuetify.breakpoint.mobile}" class="pa-4">
            As a full-stack web developer with one year of experience in web development, I leverage my diverse skill set to create innovative and effective solutions. With extensive project experience, I bring versatility and a commitment to excellence to every project I undertake. I am dedicated to continuous growth and learning, aiming to make a positive impact in the digital landscape through my creative contributions. 

          </span>
       
          
         </p> 
         <v-btn   outlined large color="black" class="black--text sansbold" style="font-size: 13px;" :block="$vuetify.breakpoint.mobile"  target="_blank" :href="'/GokulResume.pdf'">View my Resume</v-btn>
        </v-col>
        
      
       
        

        
          
        
 
  </v-col>

  <!-- <v-col cols="12" md="12" :class="{'d-flex justify-center order-2 ':$vuetify.breakpoint.mobile ,'d-flex justify-start':$vuetify.breakpoint.mdAndUp
  }">
    <v-btn large rounded color="#854CE6" class="white--text"  d-block >View My Resume</v-btn>
  </v-col> -->
  

  <v-col cols="12" xs="12" md="6" :class="{
      'd-flex justify-center ml-4 mt-4 ': $vuetify.breakpoint.xsOnly,
      
      'd-flex justify-end ': !$vuetify.breakpoint.xsOnly,
      'order-1':$vuetify.breakpoint.mdAndUp,'order-0':$vuetify.breakpoint.mobile
    }" no-gutters>
    <v-img
      lazy-src="../assets/developer.png"
      :height="($vuetify.breakpoint.mobile ? '213px' : ($vuetify.breakpoint.md ? '300px' : '433px'))"
      max-width="362"
      src="../assets/developer.png"
    ></v-img>
  </v-col>   
  <!-- :height="$vuetify.breakpoint.mobile ? '213' :'433'" -->

</v-row>   




</v-container>


  </div>
 
 
</template>

<script>
import { VueTyper } from 'vue-typer'
export default{
  methods:{
    viewResume() {
      // Replace the URL below with the actual path to your resume file
      const resumeUrl = "../assets/GokulResume.pdf";
      window.open(resumeUrl, "_blank");
    }

  },
  components:{
    VueTyper
  }
  
}

</script>
<style scoped>


.text-paragraph {
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -.009375rem;
    --tw-text-opacity: 1;
    color: rgb(77 77 77 / var(--tw-text-opacity));
}
.sanslight {
  font-family: "Open Sans", sans-serif;
  font-weight: 220;
  font-size: 20px;
}

.sansbold {
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
  font-size: 39px;
  text-transform: capitalize
}

.sansitalic {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
}
.vue-typer {
  font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
}

.vue-typer .custom.char.typed {
  color: #607D8B;
}
.vue-typer .custom.char.selected {
  color: #607D8B;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
/* color: rgba(2, 3, 34, .6);
    font-family: var(--rr-ff-body);
        color: var(--rr-text-body);
        font-weight: var(--rr-fw-regular);
        font-size: 14px;
       
        line-height: 1.4;  kathiravan*/



</style>