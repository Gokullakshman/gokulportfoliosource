

<template>
    <div id="contact">
        <v-row class="pt-10 ">
            <v-col cols="12" md="12" xs="12" >
                <span class="white--text d-flex justify-center text-h5 font-weight-bold">Contact US</span>
            </v-col>
            <v-col cols="12" md="12" xs="12" >
                <span class="white--text d-flex justify-center px-6 text-h6 font-weight-light">Feel free to reach out to me for any questions or opportunities!
                    </span>
            </v-col>
            <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
                <v-card  rounded class="black" style="box-shadow: #854CE4 2px 2px 2px 0px;" :width="$vuetify.breakpoint.mdAndUp ? '550':'390'"  
                :height ="$vuetify.breakpoint.mdAndUp ? '540':'560'" >

                <v-row class="mt-6">
                    <v-col cols="12" md="12" xs="12">
                        <span class="white--text text-h6 pa-7">Email Me 🚀</span>
                    </v-col>
                    <v-col cols="12" md="12"  class="d-flex justify-center">
                        <input
      type="text"
      placeholder="Your email"
      class="input"
      required
      :style="$vuetify.breakpoint.mdAndUp? 'input' : {height:'60px',width:'310px'}" 
      v-model="mailDetails.youremail"
    />
                    </v-col>
                    <v-col cols="12" md="12"  class="d-flex justify-center">
                        <input
      type="text"
      id="password"
      placeholder="Your name"
      class="input"
      required
      :style="$vuetify.breakpoint.mdAndUp? 'input' : {height:'60px',width:'310px'}" 
      v-model="mailDetails.yourname"
    />
                    </v-col>
                    <v-col cols="12" md="12"  class="d-flex justify-center">
                        <input
      type="text"

      placeholder="Subject"
      class="input"
      required
      :style="$vuetify.breakpoint.mdAndUp? 'input' : {height:'60px',width:'310px'}" 
      v-model="mailDetails.subject"
    />
                    </v-col>
                    <v-col  xs="12" class="d-flex justify-center">
                       <textarea placeholder="Message" class="input" :style="$vuetify.breakpoint.mdAndUp? {height:'140px'} : {height:'130px',width:'310px'}" v-model="mailDetails.description"></textarea>
                    </v-col>
                    <v-col  xs="10" class="d-flex justify-center px-10">
                       <v-btn class="black--text font-weight-bold " style="background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%);" block height="40" @click="SendEmail()">Send</v-btn>
                    </v-col>
                </v-row>

                </v-card>



          

            </v-col>
        </v-row> 
      
      <FooterVue></FooterVue>

    </div>
</template>
<script>
// import EventService from '@/services/EventService';
import FooterVue from './FooterVue.vue'
export default{
    data(){
        return{
            mailDetails:{
                youremail:"",
                yourname:"",
                subject:"",
                description:""
            }
        }
    },
    components:{
      FooterVue
    },
    methods:{
        SendEmail(){
            if(this.mailDetails.youremail=="" || this.mailDetails.subject == "" ){
                return
            }else{
                var input={
                  yourEmail:this.mailDetails.youremail,
                  yourName:this.mailDetails.yourname,
                  subject:this.mailDetails.subject,
                  description:this.mailDetails.description
                }
                console.log("input",input)
               
            }
        }
    }
}

</script>

<style>
.contact {
  background: linear-gradient(135deg, #46293d, #161638);
  margin: 0;
  font-family: Arial, sans-serif;
  color: white;
}

.input{
    background-color: transparent;
    border: 1px solid rgb(177, 178, 179);
    outline: none;
    font-size: 18px;
    color: rgb(242, 243, 244);
    border-radius: 12px;
    width:490px;
    height: 50px;

}
.textarea{
    background-color: transparent;
    border: 1px solid rgb(177, 178, 179);
    outline: none;
    font-size: 18px;
    color: rgb(242, 243, 244);
    border-radius: 12px;
    height: 150px;

}
.mobileinput{
    width:40px;
    height: 50px;
}


</style>