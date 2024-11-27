<template>
    <div>
        <v-row class="pt-10 contact">
            <v-col cols="12" md="12" xs="12" >
                <span class="white--text d-flex justify-center text-h5 font-weight-bold">Contact US</span>
            </v-col>
            <v-col cols="12" md="12" xs="12" >
                <span class="white--text d-flex justify-center text-h6 font-weight-light">Feel free to reach out to me for any questions or opportunities!
                    </span>
            </v-col>
            <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
                <v-card  rounded class="black" style="box-shadow: #854CE4 2px 2px 2px 0px;" :width="$vuetify.breakpoint.mdAndUp ? '600':'350'"  
                :height ="$vuetify.breakpoint.mdAndUp ? '470':'350'" >

                <v-row class="mt-6">
                    <v-col cols="12" md="12" xs="12">
                        <span class="white--text text-h6 pa-7">Email Me 🚀</span>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-text-field
            label="your email"
            outlined
          ></v-text-field>
                    </v-col>
                </v-row>

                </v-card>



          

            </v-col>
        </v-row>
    </div>
</template>
<style>
.contact {
  background: linear-gradient(135deg, #46293d, #161638);
  margin: 0;
  font-family: Arial, sans-serif;
  color: white;
}


</style>