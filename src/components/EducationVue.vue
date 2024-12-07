<template>
    <div id="education">
        <v-row >
            <v-col cols="12" md="12" xs="12">
                <p class="white--text text-h4 d-flex justify-center font-weight-medium">Education</p>
            </v-col>
            <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
                <p  style="max-width: 600px;color: rgb(177, 178, 179);" class="text-h6 font-weight-medium  text-center d-flex justify-center"  :class="{'text-h6':$vuetify.breakpoint.mdAndUp}"  >My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
            </v-col>

            <v-col md="12" xs="12" class="d-flex justify-center" v-for="(n,index) in EducationDetails" :key="index">
                <v-card outlined class="black" style="box-shadow: #854CE6 0px 0px 1px 2px;" :width="$vuetify.breakpoint.mdAndUp ? '600':'320'" :height="$vuetify.breakpoint.mdAndUp ? '170':'220'">
                 <v-row class="mt-2" no-gutters>
                    <v-col   md="1" xs="1" class="d-flex mt-8 ml-6 ">
                        <v-sheet

  color="white"
  elevation="9"
  height="35"
  outlined
  rounded
  shaped
  width="35"
><v-img :src="n.image"></v-img>
                        </v-sheet>
                    </v-col>
                    <v-col md="9" xs="3" class="mt-2 ml-2">
                        <p  style="  color: rgb(177, 178, 179);
    font-family: Poppins, sans-serif;" class="font-weight-bold">{{ n.name }}<br><span class="font-weight-light ">{{ n.degree }}</span><br><span class="font-weight-light caption" >{{ n.year }}</span></p>

                        <!-- <p class="white--text" no-gutters>Bachelor of Computer Applications</p> -->
                    </v-col>
                    <v-col md="2">

                    </v-col>
                    <span  class="white--text d-flex justify-start d-block mb-6 pl-2" :class="{'caption':$vuetify.breakpoint.mobile}">{{ n.cgpa }}<br>{{ n.description }}</span>
                    <!-- <span  class="white--text d-flex justify-start d-block">Welcome</span> -->
                 </v-row>
                 <v-row>
                  
                 </v-row>
                </v-card>

            </v-col>
                <!-- <v-col class="md-3 d-flex justify-start">
                    <v-timeline  >
        <v-timeline-item small>timeline item</v-timeline-item>
        <v-timeline-item 
        small class="text-right">
        timeline item
        </v-timeline-item>
        <v-timeline-item small>timeline item</v-timeline-item>
    </v-timeline>
                </v-col> -->
       
            
        </v-row>
    </div>
</template>
<script>
export default{
    data(){
        return{
            EducationDetails:[
                {
                image:require('@/assets/college.jpg'),name:"Government Arts College,Kumbakonam",degree:"Bachelor of Computer Applications",
                year:"Jun2020 - Jun 2023",cgpa:"Grade:7.9%",description:"I completed my undergraduate studies at Government Arts College with a CGPA of 7.1."
            },
            {
                image:require('@/assets/images.jpg'),name:"Town Higher Secondary School,Kumbakonam",degree:"HSC(X11)",
                year:"Jun2018 - Mar2020",cgpa:"Grade:65%",description:"I completed my class 12  education at Town Hr.Secondary School,Kumbakonam."
            },
            {
                image:require('@/assets/vallalr.jpg'),name:"Vallalar Higher Secondary School,Kumbakonam",degree:"SSLC(X)",
                year:"Jun2017 - Mar2018",cgpa:"Grade:85%",description:"I completed my class 10 education at Vallalar Hr.Secondary School,Kumbakonam."
            }
        
        ]
        }
    }
}
</script>