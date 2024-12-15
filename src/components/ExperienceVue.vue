<template>
    <div id="experience">
        <v-row >
        <v-col cols="12" xs="12" md="12" class="d-flex justify-center">
            <span class="white--text text-h4 font-weight-bold">Experience</span>
        </v-col>
        <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
            <p  class="text-center text-h6 font-weight-light"    :class="{'text-h6':$vuetify.breakpoint.mdAndUp }" style="max-width: 600px;color: rgb(177, 178, 179);">Here I present my journey as a full-stack web developer, highlighting my extensive experience in blockchain, finance, and mentorship. Through my portfolio, I showcase the diverse projects and technologies I've mastered, demonstrating my expertise in web development and beyond.</p>
        </v-col>
        
    </v-row> 

    <v-row >
        <v-col class="d-flex justify-center mb-6">
            <v-sheet border style="background-color: #000014;" @mouseover="expand=true" @mouseleave="expand=false" :width="$vuetify.breakpoint.mdAndUp ? '600':'350'"   :height="expand ? ($vuetify.breakpoint.mdAndUp ? '440':'720') : ($vuetify.breakpoint.mdAndUp ? '260':'420')">
                <v-row >
                    <v-col  cols="12" md="12" xs="12" class="d-flex align-center ml-4">
                        <v-sheet

  color="white"
  elevation="9"
  height="35"
  outlined
  rounded
  shaped
  width="35"
><v-img src="../assets/flattrade.png"></v-img></v-sheet>
<span class=" pl-4 font-weight-bold mt-4 white--text">Software Engineer <br>  <span class="white--text caption">Flattrade</span>
    <br><span class="caption">March 2024 -Till</span></span>
   
<!-- <span class="white--text">hellllllllllllllll</span> -->

                    </v-col>
                </v-row>

                <v-row class="mb-4" no-gutters>
                    <v-col cols="12" xs="12" md="12" class="pl-4">
                        <p class="pa-1"  style="  color: rgb(177, 178, 179);
    font-family: Poppins, sans-serif;">{{ expand ?  fulltext :truncatetext }}<span v-if="$vuetify.breakpoint.mobile && !expand" @click="expand=true" class="caption ml-3 info--text">seemore...</span> <span v-if="$vuetify.breakpoint.mobile && expand" @click="expand=false" class="caption ml-3 info--text">seeless...</span></p>
                      
                    </v-col> 
                    <v-col cols="12" md="12" xs="12" class="pl-4">
                        <span  class="caption font-weight-bold" style="  color: rgb(177, 178, 179);
    font-family: Poppins, sans-serif;">Skills:
• Vuejs
• Vuetify
• Golang
• MySQL
• Javascript
• HTML
• CSS
• Git
</span>
                    </v-col>
                </v-row>




            </v-sheet>
        </v-col>
    </v-row> 

   

    </div>
   
</template>

<script>

export default{
    data(){
        return{
            truncatetext:"Led the successful development of an online flight booking application using ASP.NET MVC technology, contributing to its user-friendly and efficient design. Collaborated with cross-functional teams to design and implement multiple projects from conception to deployment, ensuring high-quality deliverables",
            fulltext:"Led the successful development of an online flight booking application using ASP.NET MVC technology, contributing to its user-friendly and efficient design. Collaborated with cross-functional teams to design and implement multiple projects from conception to deployment, ensuring high-quality deliverables within project timelines. Applied expertise in ASP.NET MVC, C#, and SQL Server to build robust back-end logic, ensuring seamless integration with front-end components for a cohesive user experience. Specialized in implementing secure payment gateway integration within the flight booking application, ensuring seamless and reliable payment processing for customers. Demonstrated versatility by working on diverse projects, showcasing adaptability from online booking tools to Human Resource Management Systems (HRMS).",
            expand:false
        }
    },
 

}
</script>