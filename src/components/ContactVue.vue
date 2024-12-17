

<template>
    <div id="contact">
       
        <v-row class="pt-10 ">
            <v-col cols="12" md="12" xs="12" >
                <span class="black--text d-flex justify-center text-h4 font-weight-medium">Get in touch</span>
            </v-col>
            <v-col cols="12" md="12" xs="12" >
                <span class="black--text d-flex justify-center px-6  text-paragraph">Feel free to reach out to me for any questions or &nbsp; <span class="black--text">opportunities!</span>
                    </span>
            </v-col>
            <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
                <v-card  rounded outlined   :width="$vuetify.breakpoint.mdAndUp ? '550':'390'"  
                :height ="$vuetify.breakpoint.mdAndUp ? '540':'560'" >

                <v-row class="mt-6">
                    <v-col cols="12" md="12" xs="12">
                        <span class="black--text text-h6 pa-7">Email Me 🚀</span>
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
                       <v-btn class="white--text font-weight-bold black"  block height="40" @click="SendEmailProcess()">Send</v-btn>
                    </v-col>
                </v-row>

                </v-card>



          

            </v-col>
        </v-row> 
      
     

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
            }
        }
    },

    methods:{
        SendEmailProcess(){
            if(this.mailDetails.youremail=="" || this.mailDetails.subject == "" ){
                return
            }else{
                const serviceID = "service_i3w46j3"; // Replace with your Email Service ID
      const templateID = "template_d3u4f5q"; // Replace with your Template ID
      const userID = "P2Yzwj4FQdA8B7zyi"; // Replace with your User ID

      const templateParams = {
        from_name: this.mailDetails.yourname,
        from_email: this.mailDetails.youremail,
        to_name:"gokulkarthi6383@gmail.com",
        message: this.mailDetails.description
      };

      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then(
          (response) => {
            console.log("Email sent successfully:", response.status, response.text);
            alert("Email sent!");
          },
          (error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
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

::-webkit-input-placeholder { /* Edge */
padding: 10px;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
padding: 10px;
}

</style>