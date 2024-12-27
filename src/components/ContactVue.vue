

<template>
    <div id="contact">
       
        <v-row class="pt-10" >
            <v-col cols="12" md="12" xs="12" >
                <span class="black--text d-flex justify-center sansboldtitle">Get in touch</span>
            </v-col>
            <v-col cols="12" md="12" xs="12" >
                <span class="black--text d-flex justify-center px-6 sanslightDescribeExperience">Have questions or opportunities? I’m just a message away!
                    </span>
            </v-col>
            <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
                <v-card  rounded outlined   :width="$vuetify.breakpoint.mdAndUp ? '550':'390'"  
                :height ="$vuetify.breakpoint.mdAndUp ? '540':'560'" data-aos="zoom-in" >

                <v-row class="mt-6">
                    <v-col cols="12" md="12" xs="12">
                        <span class="black--text sanslightDescribeExperience pa-7">Email Me 🚀</span>
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
                       <v-btn v-if="$vuetify.breakpoint.mdAndUp" :outlined="!SendButton"  :class="{'white--text font-weight-light black': SendButton, 'black--text font-weight-bold' :!SendButton}" @mouseover="SendButton = true" @mouseleave="SendButton = false"  block height="40" @click="SendEmailProcess()">Send</v-btn> 
                       <v-btn v-else  class="sanslight black white--text"  block height="40" @click="SendEmailProcess()">Send</v-btn>
                    </v-col>
                </v-row>

                </v-card>



          

            </v-col>
        </v-row>  
        <v-snackbar
      v-model="snackbar"
      timeout="3000"
    >
      {{ Emailtext }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
      
     

    </div>
</template>
<script>
// import EventService from '@/services/EventService';

import emailjs from "emailjs-com";

export default{
    data(){
        return{
            mailDetails:{
                youremail:"",
                yourname:"",
                subject:"",
                description:""
            },
            SendButton:false,
            snackbar:false,
            Emailtext:"",
            concatmessage:"",
            res:""
        }
    },

    methods:{
        SendEmailProcess(){
            if((this.mailDetails.youremail=="" && this.mailDetails.yourname == "") || ( this.mailDetails.subject == "" )){
                this.Emailtext = "Please provide your email or name and subject"
                this.snackbar = true
                return
            }else{
                const serviceID = "service_i3w46j3"; 
      const templateID = "template_d3u4f5q"; 
      const userID = "P2Yzwj4FQdA8B7zyi";  
      this.concatmessage = "Subject : "+this.mailDetails.subject + "Description : "+ this.mailDetails.description + " FromMail : " + this.mailDetails.youremail


      const templateParams = {
        from_name: this.mailDetails.yourname,
        from_email: this.mailDetails.youremail,
        to_name:"gokulkarthi6383@gmail.com",
        message:this.concatmessage
      };
      
      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then(
          (response) => {
           this.snackbar = true
           this.res = response
           this. mailDetails.youremail = ""
          this. mailDetails. yourname=""
          this. mailDetails.subject= ""
          this. mailDetails. description = ""
          this.Emailtext = "Email sent successfully!!!"
          },
          (error) => {
            this.Emailtext = "Something went wrong"
            this.res= error
            this.snackbar = true
          }
        );
  
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
    color: rgb(0, 0, 0);
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
::placeholder{

padding: 10px;
font-weight: 300;
    line-height: 150%;
    letter-spacing: -.009375rem;
    --tw-text-opacity: 4;
    color: rgb(77 77 77 / var(--tw-text-opacity));


}

::-webkit-input-placeholder { 
padding: 10px;
}

:-ms-input-placeholder { 
padding: 10px;
}
::-webkit-textarea-placeholder { 
padding: 10px;
}

:-ms-textarea-placeholder { 
padding: 10px;
}
input {
  padding-left: 10px; /* Matches placeholder padding */
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.009375rem;
  --tw-text-opacity: 4;
  color: rgb(77 77 77 / var(--tw-text-opacity)); /* Normal text color */
}

input::placeholder {
  padding-left: 0; /* No extra padding for placeholder */
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.009375rem;
  color: rgb(77 77 77 / var(--tw-text-opacity)); /* Placeholder color */
}

textarea{
    padding-left: 10px; /* Matches placeholder padding */
  font-weight: 300;
  line-height: 220%;
  letter-spacing: -0.009375rem;
  --tw-text-opacity: 4;
  color: rgb(77 77 77 / var(--tw-text-opacity));
}
textarea::placeholder{
    padding-left: 0; /* No extra padding for placeholder */
  font-weight: 300;
  line-height: 120%;
  letter-spacing: -0.009375rem;
  color: rgb(77 77 77 / var(--tw-text-opacity)); /* Placeholder color */
}


</style>