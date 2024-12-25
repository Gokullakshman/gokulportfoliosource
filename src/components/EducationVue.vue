<template>
  <div id="education">
    <v-row>
      <v-col cols="12" md="12" xs="12">
        <p class="black--text d-flex justify-center sansboldtitle">Education</p>
      </v-col>
      <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
        <p
          style="max-width: 600px"
          class="sanslightDescribeExperience text-center d-flex justify-center"
          :class="{ 'text-paragraph': $vuetify.breakpoint.mdAndUp }"
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </v-col>

      <v-col
        md="12"
        xs="12"
        class="d-flex justify-center"
        v-for="(n, index) in EducationDetails"
        :key="index"
        data-aos="fade-up-right"
      >
        <v-card
          rounded
          outlined
          style="background-color: rgba(242, 243, 247, 1)"
          class="v-scroll-animation"
          :class="{ 'active-hover': ActiveIndex === index }"
          @mouseover="ActiveIndex = index"
          @mouseleave="ActiveIndex = null"
          :elevation="0"
          :width="$vuetify.breakpoint.mdAndUp ? '600' : '320'"
          :height="$vuetify.breakpoint.mdAndUp ? '170' : '220'"
        >
          <v-row class="mt-2" no-gutters>
            <v-col md="1" xs="1" class="d-flex mt-8 ml-6">
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
              <p
                style="font-family: Poppins, sans-serif"
                class="font-weight-bold text-paragraph"
              >
                {{ n.name }}<br /><span
                  class="font-weight-light"
                  :class="{
                    'sanslightDescribeEducation': $vuetify.breakpoint.mobile,
                  }"
                  >{{ n.degree }}</span
                ><br /><span class="font-weight-light caption">{{
                  n.year
                }}</span>
              </p>

              <!-- <p class="black--text" no-gutters>Bachelor of Computer Applications</p> -->
            </v-col>
            <template v-if="$vuetify.breakpoint.mobile">
                <v-col md="2" > </v-col>
            </template>
           
             <span
              class="sanslightDescribeEducation d-flex justify-start d-block mb-6 pl-2"
              :class="{ caption: $vuetify.breakpoint.mobile }"
              >{{ n.cgpa }}<br />{{ n.description }}</span
            >
            <!-- <span  class="white--text d-flex justify-start d-block">Welcome</span> -->
          </v-row>
          <v-row> </v-row>
        </v-card>
      </v-col>
     
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      EducationDetails: [
        {
          image: require("@/assets/college.jpg"),
          name: "Government Arts College,Kumbakonam",
          degree: "Bachelor of Computer Applications",
          year: "Jun2020 - Jun 2023",
          cgpa: "Grade:7.9%",
          description:
            "I completed my UG studies at Government Arts College with a CGPA of 7.1.",
        },
        {
          image: require("@/assets/images.jpg"),
          name: "Town Higher Secondary School,Kumbakonam",
          degree: "HSC(X11)",
          year: "Jun2018 - Mar2020",
          cgpa: "Grade:65%",
          description:
            "I completed my class 12  education at Town Hr.Secondary School,Kumbakonam.",
        },
        {
          image: require("@/assets/vallalr.jpg"),
          name: "Vallalar Higher Secondary School,Kumbakonam",
          degree: "SSLC(X)",
          year: "Jun2017 - Mar2018",
          cgpa: "Grade:85%",
          description:
            "I completed my class 10 education at Vallalar Hr.Secondary School,Kumbakonam.",
        },
      ],
      ActiveIndex: null,
    };
  },
};
</script>
<style scoped>


.active-hover {
  border-color: #000000 !important; /* Green border on hover */
  background-color: rgba(0, 255, 0, 0.1); /* Light green background on hover */
  transition: border-color 0.3s ease, background-color 0.3s ease; /* Smooth transition */
}

.sanslightDescribeEducation {
  font-family: "Open Sans", sans-serif;
  font-weight: 450;
  font-size: 14px;
}
</style>
