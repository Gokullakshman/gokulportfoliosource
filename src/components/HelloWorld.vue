<template>
  <div style="background-color: rgba(242, 243, 247, 1);" data-aos="fade-right" class="mt-6">
    <v-container fill-height  id="about"  >

  
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
          <span class="display-1 font-weight-bold d-flex justify-center mb-4 typewriter black--text">Hi,&nbsp;I am &nbsp; <a class="font-weight-bold display-1 black--text">Gokul S</a></span>
          
          As a full-stack web developer
          with a passion for blockchain and finance, I leverage my diverse
          expertise to craft innovative solutions. With a background in
          mentorship and multiple project experiences, I bring versatility and
          a commitment to excellence to every endeavor. Continuously seeking
          growth and learning, I aim to make a positive impact in the digital
          realm through my creative contributions. 
          
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
      :height="$vuetify.breakpoint.mobile ? '213' :'433'"
      max-width="362"
      src="../assets/developer.png"
    ></v-img>
  </v-col>   


</v-row>   




</v-container>


  </div>
 
 
</template>

<script>
export default{
  methods:{
    viewResume() {
      // Replace the URL below with the actual path to your resume file
      const resumeUrl = "../assets/GokulResume.pdf";
      window.open(resumeUrl, "_blank");
    }

  }
  
}

</script>
<style scoped>
.typewriter {
  overflow: hidden; 
  white-space: nowrap;
  margin: 0 auto; 
  letter-spacing: .15em; 
  animation: 
    typing 2.5s steps(20, end),
    blink-caret .75s step-end infinite;
   
}


@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.text-paragraph {
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -.009375rem;
    --tw-text-opacity: 1;
    color: rgb(77 77 77 / var(--tw-text-opacity));
}
.sanslight {
  font-family: "Open Sans", sans-serif;
  font-weight: 280;
  font-size: 17px;
}

.sansbold {
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
  font-size: 10px;
}

.sansitalic {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
}

/* color: rgba(2, 3, 34, .6);
    font-family: var(--rr-ff-body);
        color: var(--rr-text-body);
        font-weight: var(--rr-fw-regular);
        font-size: 14px;
       
        line-height: 1.4;  kathiravan*/



</style>