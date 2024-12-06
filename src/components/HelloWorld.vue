<template>

    <v-container fill-height   >

  
<v-row class="mt-10 d-flex justify-space-around">
  <v-col
    md="6"
    xs="12"
    :class="{'d-flex justify-end pl-10 text-center text-h6':$vuetify.breakpoint.mdAndUp,
      'd-flex justify-end pl-10  text-center text-h6 pa-9':$vuetify.breakpoint.mobile,'order-0':$vuetify.breakpoint.mdAndUp,'order-1':$vuetify.breakpoint.mobile }"
    v-show="$vuetify.breakpoint.mdAndUp"
  >   
        <v-col column cols="12">
          <p style=" color: rgb(177, 178, 179);" class=""> 
          <span class="display-1 font-weight-bold d-flex justify-center mb-4 typewriter">Hi,I am Gokul S</span>
          
          As a full-stack web developer
          with a passion for blockchain and finance, I leverage my diverse
          expertise to craft innovative solutions. With a background in
          mentorship and multiple project experiences, I bring versatility and
          a commitment to excellence to every endeavor. Continuously seeking
          growth and learning, I aim to make a positive impact in the digital
          realm through my creative contributions. 
          
         </p> 
         <v-btn rounded large color="#854CE6" class="white--text" :block="$vuetify.breakpoint.mobile">View my Resume</v-btn>
        </v-col>
        
      
       

        

        
          
        
 
  </v-col>

  <!-- <v-col cols="12" md="12" :class="{'d-flex justify-center order-2 ':$vuetify.breakpoint.mobile ,'d-flex justify-start':$vuetify.breakpoint.mdAndUp
  }">
    <v-btn large rounded color="#854CE6" class="white--text"  d-block >View My Resume</v-btn>
  </v-col> -->
  

  <v-col cols="12" xs="12" md="6" :class="{
      'd-flex justify-center ': $vuetify.breakpoint.xsOnly,
      'd-flex justify-end ': !$vuetify.breakpoint.xsOnly,
      'order-1':$vuetify.breakpoint.mdAndUp,'order-0':$vuetify.breakpoint.mobile
    }">
    <v-img
      lazy-src="https://sirancheevi.com/static/media/portfolio.9ab12bcb3d562306dd3e.png"
      :height="$vuetify.breakpoint.mobile ? '283' :'403'"
      max-width="362"
      src="https://sirancheevi.com/static/media/portfolio.9ab12bcb3d562306dd3e.png"
    ></v-img>
  </v-col>   


</v-row>   



</v-container>

 
</template>

<script>

</script>
<style>
.typewriter {
  overflow: hidden; 
  white-space: nowrap;
  margin: 0 auto; 
  letter-spacing: .15em; 
  animation: 
    typing 2.5s steps(20, end),
    blink-caret .75s step-end infinite;
    color: orange;
}


@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}




</style>