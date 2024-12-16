<template>
  <div id="skills">
     <v-row >
  <v-col cols="12" xs="12" md="12" class="d-flex justify-center display-1 font-weight-bold white--text ">Skills</v-col>
  <v-col cols="12" md="12" xs="12" class="text-center">
    <p style=" color: rgb(203, 213, 225);"  :class="{'d-flex justify-center font-weight-light text-h6':$vuetify.breakpoint.mdAndUp ,'text-h6 font-weight-medium':$vuetify.breakpoint.mobile}">
      Here are some of my skills,which i have been working on web
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <br>
      </template>
      development
    </p>
  </v-col>
 <v-col xs="12" md="6" :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
  
  <v-card

outlined

:height="$vuetify.breakpoint.mobile ? '300' :'250'"
:width="$vuetify.breakpoint.mobile ? '300' :'380'"
 class="hover-card"
        :class="{ 'active-hover': ActiveIndex === 1 }"
        @mouseover="ActiveIndex=1"  @mouseleave="ActiveIndex=0"

>
<v-row >
<v-col  xs="12" md="12" cols="12"  class="d-flex justify-center align-center pt-4"><span class="Heading ">Front<strong>end</strong></span> </v-col>
<v-col  xs="12" md="6" cols="12"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 green" label> <v-icon large color="green">mdi-vuejs</v-icon><span class="white--text caption">VueJs</span></v-chip>
</v-col>
<v-col cols="12" xs="12" md="6"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 yellow" label> <v-icon large color="yellow">mdi-language-javascript</v-icon><span class="white--text caption">Javascript</span></v-chip>
</v-col>
</v-row>



<v-row class="mt-1">
<v-col  xs="6" md="6"  :class="{'d-flex justify-end  ':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 orange" label> <v-icon large color="orange">mdi-language-html5</v-icon><span class="white--text">HTML</span></v-chip>
</v-col>
<v-col  xs="6" md="6"  :class="{'d-flex justify-start':$vuetify.breakpoint.mobile}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 info" label> <v-icon large color="info">mdi-language-css3</v-icon><span class="white--text">CSS</span></v-chip>
</v-col>
<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center mt-2':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 info" label> <v-icon large color="info">mdi-vuetify</v-icon><span class="white--text">Vuetify</span></v-chip>
</v-col>
</v-row>





</v-card>

 </v-col> 

 <v-col xs="12" md="6" :class="{'d-flex justify-center ml-1 mt-6 mb-4':$vuetify.breakpoint.mobile}" >
  <v-card
outlined
:height="$vuetify.breakpoint.mobile ? '300' :'250'"
:width="$vuetify.breakpoint.mobile ? '300' :'380'"
class="hover-card"
        :class="{ 'active-hover': ActiveIndex === 2 }"
        @mouseover="ActiveIndex=2"  @mouseleave="ActiveIndex=0"

><v-row >
  {{ ActiveIndex }}
<v-col  xs="12" md="12" cols="12"  class="d-flex justify-center align-center pt-0"><span class="Heading">Backend</span> </v-col>
<v-col  xs="12" md="6" cols="12"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 blue" label> <v-img src="../assets/java.png" height="40" width="40" class="pa-4"></v-img><span class="white--text caption">Java</span></v-chip>
</v-col>
<v-col cols="12" xs="12" md="6"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 info" label> <v-icon large color="info">mdi-language-go</v-icon><span class="white--text caption">Golang </span></v-chip>
</v-col>
</v-row>



<v-row class="mt-1">

<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center mt-2':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 info" label> <v-icon large color="info">mdi-database</v-icon><span class="white--text">MySQL</span></v-chip>
</v-col>
</v-row>

</v-card>

 </v-col> 

 <v-row class="mb-6">
  <v-col  md="12" xs="12" lg="12" class="d-flex justify-center mt-6 mb-6 ml-2">
    <v-card
outlined
:height="$vuetify.breakpoint.mobile ? '300' :'250'"
:width="$vuetify.breakpoint.mobile ? '300' :'380'"
class="hover-card"
        :class="{ 'active-hover': ActiveIndex === 3 }"
        @mouseover="ActiveIndex=3"  @mouseleave="ActiveIndex=0"

><v-row >
<v-col  xs="12" md="12" cols="12"  class="d-flex justify-center align-center pt-4"><span class="Heading">Other Tools</span> </v-col>
<v-col  xs="12" md="6" cols="12"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile,'d-flex justify-end':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 red" label> <v-img src="../assets//git.png" height="35" width="35" class="pa-4"></v-img><span class="white--text caption">Git</span></v-chip>
</v-col>
<v-col cols="12" xs="12" md="6"  :class="{'d-flex justify-center':$vuetify.breakpoint.mobile}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 info" label><v-img src="../assets/github.png" height="18" width="18" class="pa-4"></v-img><span class="white--text caption">Github</span></v-chip>
</v-col>
</v-row>



<v-row class="mt-1"> 

<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center mt-2':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 orange" height="20" label><v-img src="../assets/postman.png" height="2" width="2" class="pa-4"></v-img><span class="white--text">Postman</span></v-chip>
</v-col> 

<v-col  cols="12" xs="12" md="12" :class="{'d-flex justify-center ':$vuetify.breakpoint.mobile,'d-flex justify-center mt-1':$vuetify.breakpoint.mdAndUp}">
<v-chip outlined  class="pa-3 pt-4 pb-4 pr-3 info"  label><v-img src="../assets/Vs.png" height="2" width="2" class="pa-4"></v-img><span class="white--text">VSCode</span></v-chip>
</v-col>
</v-row>

</v-card>
  </v-col>
 </v-row> 
</v-row> 

<!-- <v-row class="black">
  <v-col  md="12" xs="12" lg="12" class="d-flex justify-center mt-6 mb-6 ml-5">
     <span class="white--text">hello</span>
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



<style scoped>

 .Heading{
  font-size: 28px;
    font-weight: 600;
    color: rgb(71, 223, 170);
    font-family: Poppins, sans-serif;
 }
 .headingH6{
  font-size: 10px;
    font-weight: 600;
    color: rgb(177, 178, 179);
    font-family: Poppins, sans-serif;
 }

 

.hover-card {
  background-color: transparent  !important;
  border: 2px solid #444444; /* Default border color */
  transition: border-color 0.1s ease, background-color 0.3s ease;
}

.active-hover {
  border-color: #3fbe3f !important; /* Green border on hover */
  background-color: rgba(0, 255, 0, 0.1); /* Light green background on hover */
  transition: border-color 0.3s ease, background-color 0.3s ease; /* Smooth transition */
}
</style>