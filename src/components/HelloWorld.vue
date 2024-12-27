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
          <p  class="sanslightweb"> 
            <span class="sansbold" :style="$vuetify.breakpoint.mobile ? {'font-size':'29px'} : 'd'"  style="color: #C5B358;">Hi,Iam Gokul S</span>
          <span  :style="$vuetify.breakpoint.mobile ? {'font-size':'18px'} : 'd'" class="font-weight-bold  d-flex justify-center ma-4  black--text" :class="{'text-h6' :$vuetify.breakpoint.mdAndUp}"><vue-typer
  :text='["FullStack Developer","Vue js","Vuetify","Golang","MySQL"]'
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
         <v-btn width="200"   outlined large class="white--text sanslight" style="font-size: 13px; background-color: #C5B358;" :block="$vuetify.breakpoint.mobile"  target="_blank" :href="'GokulResume.pdf'">View my Resume</v-btn>
        </v-col>
        
      
       
        

        
          
        
 
  </v-col>



  <v-col cols="12" xs="12" md="6" :class="{
      'd-flex justify-center align-center ml-4 mt-4 ': $vuetify.breakpoint.xsOnly,
      'd-flex justify-center ml-4 mt-4 ': $vuetify.breakpoint.width>758 && $vuetify.breakpoint.width<1000 ,
      'd-flex justify-end ': !$vuetify.breakpoint.xsOnly,
      'order-1':$vuetify.breakpoint.mdAndUp,'order-0 d-flex mt-4':$vuetify.breakpoint.mobile
    }" no-gutters>
    <v-img
      lazy-src="@/assets/developer.png"
      :height="($vuetify.breakpoint.mobile ? '223px' : ($vuetify.breakpoint.md ? '300px' : '433px'))"
      max-width="362"
      src="@/assets/developer.png"
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
  components:{
    VueTyper
  },

 
  
   
  
  
}

</script>
<style scoped>



.sanslight {
  font-family: "Open Sans", sans-serif;
  font-weight: 230;
  font-size: 17px;
}
.sanslightweb{
  font-family: "Open Sans", sans-serif;
  font-weight: 230;
  font-size: 20px;
}

.sansbold {
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
  font-size: 35px;
  text-transform: capitalize
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

</style>