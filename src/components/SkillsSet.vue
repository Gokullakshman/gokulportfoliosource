<template>
  <div id="skills" class="mt-7">
     <v-row >
  <v-col cols="12" xs="12" md="12" :class="{'d-flex justify-center display-1 font-weight-light black--text':$vuetify.breakpoint.mdAndUp,'d-flex justify-center  sansboldtitle':$vuetify.breakpoint.mobile}">Skills</v-col>
  <v-col cols="12" md="12" xs="12" class="text-center">
    <p   :class="{'d-flex justify-center sanslightDescribeExperience':$vuetify.breakpoint.mdAndUp ,'sanslightDescribeExperience':$vuetify.breakpoint.mobile}">
      Here are some of my skills,which i have been working on web
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <br>
      </template>
      development
    </p>
  </v-col>
 <v-col xs="12" md="6" data-aos="fade-up-right" :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
  
  <v-card

rounded
outlined

:height="$vuetify.breakpoint.mobile ? '300' :'250'"
:width="$vuetify.breakpoint.mobile ? '300' :'380'"
class="rounded-lg"
        :class="{ 'active-hover': ActiveIndex === 1 }"
        @mouseover="ActiveIndex=1"  @mouseleave="ActiveIndex=0"
        style="background-color: rgba(242, 243, 247, 0.3);"

>
<v-row >
<v-col  xs="12" md="12" cols="12"  class="d-flex justify-center align-center pt-4"><span class="sanslight" style=" font-weight: 370;  font-size: 27px;">Frontend</span> </v-col>
<v-col  xs="12" md="6" cols="12"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
 <v-icon large color="green">mdi-vuejs</v-icon><span class="black--text sanssmall pt-1">VueJs</span>
</v-col>
<v-col cols="12" xs="12" md="6"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile}">
 <v-icon large color="yellow">mdi-language-javascript</v-icon><span class="black--text sanssmall pt-1 pl-1">Javascript</span>
</v-col>
</v-row>



<v-row class="mt-1">
<v-col  xs="6" md="6"  :class="{'d-flex justify-end  ':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
<v-icon large color="orange">mdi-language-html5</v-icon><span class="black--text sanssmall pt-1 pl-1">HTML</span>
</v-col>
<v-col  xs="6" md="6"  :class="{'d-flex justify-start':$vuetify.breakpoint.mobile}">
 <v-icon large color="info">mdi-language-css3</v-icon><span class="black--text sanssmall pt-1 pl-1">CSS</span>
</v-col>
<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center mt-2':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
 <v-icon large color="info">mdi-vuetify</v-icon><span class="black--text sanssmall pt-1 pl-1">Vuetify</span>
</v-col>
</v-row>





</v-card>

 </v-col> 

 <v-col xs="12" md="6"  :class="{'d-flex justify-center ml-1 mt-6 mb-4':$vuetify.breakpoint.mobile}" data-aos="fade-up-left">
  <v-card
  outlined
  rounded

  

:height="$vuetify.breakpoint.mobile ? '300' :'250'"
:width="$vuetify.breakpoint.mobile ? '300' :'380'"
style="background-color: rgba(242, 243, 247, 0.3);"
        :class="{ 'active-hover': ActiveIndex === 2 }"
        @mouseover="ActiveIndex=2"  @mouseleave="ActiveIndex=0"

><v-row >
<v-col  xs="12" md="12" cols="12"  class="d-flex justify-center align-center pt-6"><span class="sanslight" style=" font-weight: 300;  font-size: 27px;">Backend</span> </v-col>
<v-col  xs="12" md="6" cols="12"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 white" label> <v-img src="@/assets/java.png" height="40" width="40" class="pa-4"></v-img><span class="black--text sanssmall">Java</span></v-chip>
</v-col>
<v-col cols="12" xs="12" md="6"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile}">
 <v-icon large color="info">mdi-language-go</v-icon><span class="black--text sanssmall pl-1 pt-2">Golang </span>
</v-col>
</v-row>



<v-row class="mt-1">

<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center mt-2':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
<v-icon large color="info">mdi-database</v-icon><span class="black--text sanssmall pl-1 pt-1">MySQL</span>
</v-col>
</v-row>

</v-card>

 </v-col> 

 <v-row class="mb-6" data-aos="fade-up-left">
  <v-col  md="12" xs="12" lg="12" class="d-flex justify-center mt-6 mb-2 ml-2" >
    <v-card
    outlined
:height="$vuetify.breakpoint.mobile ? '300' :'250'"
:width="$vuetify.breakpoint.mobile ? '300' :'380'"
class="rounded-lg"
        :class="{ 'active-hover': ActiveIndex === 3 }"
        @mouseover="ActiveIndex=3"  @mouseleave="ActiveIndex=0"
        style="background-color: rgba(242, 243, 247, 0.3);"

><v-row >
<v-col  xs="12" md="12" cols="12"  class="d-flex justify-center align-center pt-4"><span class="sanslight" style=" font-weight: 300;  font-size: 27px;">Other Tools</span> </v-col>
<v-col  xs="12" md="6" cols="12"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 white" label> <v-img src="@/assets//git.png" height="35" width="35" class="pa-4"></v-img><span class="black--text sanssmall pl-1">Git</span></v-chip>
</v-col>
<v-col cols="12" xs="12" md="6"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 white" label><v-img src="@/assets/github.png" height="18" width="18" class="pa-4"></v-img><span class="black--text sanssmall pl-1">Github</span></v-chip>
</v-col>
</v-row>



<v-row class="mt-1"> 

<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center mt-2':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 white" height="20" label><v-img src="@/assets/postman.png" height="2" width="2" class="pa-4"></v-img><span class="black--text sanssmall pl-1">Postman</span></v-chip>
</v-col> 

<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center ':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 white"  label><v-img src="@/assets/Vs.png" height="2" width="2" class="pa-4"></v-img><span class="black--text sanssmall pl-1">VSCode</span></v-chip>
</v-col>
</v-row>

</v-card>
  </v-col>
 </v-row> 
</v-row> 

<!-- <v-row class="black">
  <v-col  md="12" xs="12" lg="12" class="d-flex justify-center mt-6 mb-6 ml-5">
     <span class="black--text">hello</span>
  </v-col>
 </v-row> -->


  </div>
   


</template>
<script>
 export default{
    data(){
      return{
        ActiveIndex:0
      }
    }
  }

</script>



<style >



 


.active-hover {
  border-color: #000000 !important; /* Green border on hover */
  background-color: rgba(15, 9, 9, 0); /* Light green background on hover */
  transition: border-color 0.3s ease, background-color 0.3s ease; /* Smooth transition */
}
.sansboldtitle {
  font-family: "Open Sans", sans-serif;
  font-weight: 520;
  font-size: 30px;
}

.sanssmall{
  font-family: "Open Sans", sans-serif;
  font-weight: 430;
  font-size: 14px;
}
</style>