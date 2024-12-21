<template>
    <div id="experience" data-aos="zoom-in-up">
        <v-row>
            <v-col cols="12" xs="12" md="12" class="d-flex justify-center">
                
                <span class="black--text sansboldtitle">Experience</span>
            </v-col>
            <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
                <p class="text-center sanslightDescribeExperience"
                    :class="{ 'text-paragraph': $vuetify.breakpoint.mdAndUp }" style="max-width: 600px;">Here I present my
                    journey as a full-stack web developer, highlighting my extensive experience in blockchain, finance,
                    and mentorship. Through my portfolio, I showcase the diverse projects and technologies I've
                    mastered, demonstrating my expertise in web development and beyond.</p>
            </v-col>

        </v-row>

        <v-row>
            <v-col class="d-flex justify-center mb-6">
                <v-card rounded outlined style="background-color: rgba(242, 243, 247, 0.3);"  class="rounded-lg"
                    :class="{ 'active-hover': expand }" @mouseover="expand = true" @mouseleave="expand = false"
                    :width="$vuetify.breakpoint.mdAndUp ? '600' : '350'"
                    :height="expand ? ($vuetify.breakpoint.mdAndUp ? '440' : '510') : ($vuetify.breakpoint.mdAndUp ? '260' : '330')">
                    <v-row>
                        <v-col cols="12" md="12" xs="12" class="d-flex align-center ml-4">
                            <v-sheet color="white" elevation="9" height="35" outlined rounded shaped width="35"><v-img
                                    src="../assets/flattrade.png"></v-img></v-sheet>
                            <span class=" pl-4 font-weight-bold mt-4 black--text">Software Developer <br> <span
                                    class="black--text caption">Flattrade</span>
                                <br><span class="caption">March 2024 -Till</span></span>
                        </v-col>
                    </v-row>

                    <v-row class="mb-4" no-gutters>
                        <v-col cols="12" xs="12" md="12" class="pl-4">
                            <p class="pa-1 sanslightdesk" :class="{'sanslight':$vuetify.breakpoint.mobile}">{{ expand ? fulltext : truncatetext }}<span
                                    v-if="$vuetify.breakpoint.mobile && !expand" @click="expand = true"
                                    class="caption ml-3 info--text">seemore...</span> <span
                                    v-if="$vuetify.breakpoint.mobile && expand" @click="expand = false"
                                    class="caption ml-3 info--text">seeless...</span></p>

                        </v-col>
                        <v-col cols="12" md="12" xs="12" class="pl-4">
                            <span class="sansbold" >Skills:
                              <span :style="{ 'font-family': 'Open Sans, sans-serif','font-size':'14px'}">• Vuejs
                                • Vuetify
                                • Golang
                                • MySQL
                                • Javascript
                                • HTML
                                • CSS
                                • Git</span>  
                            </span>
                        </v-col>
                    </v-row>




                </v-card>
            </v-col>
        </v-row>



    </div>

</template>

<script>

export default {
    data() {
        return {
            truncatetext: "Led the successful development of an online flight booking application using ASP.NET MVC technology, contributing to its user-friendly and efficient design. Collaborated with cross-functional teams to design and implement multiple projects from conception to deployment, ensuring high-quality deliverables",
            fulltext: "Led the successful development of an online flight booking application using ASP.NET MVC technology, contributing to its user-friendly and efficient design. Collaborated with cross-functional teams to design and implement multiple projects from conception to deployment, ensuring high-quality deliverables within project timelines. Applied expertise in ASP.NET MVC, C#, and SQL Server to build robust back-end logic, ensuring seamless integration with front-end components for a cohesive user experience. Specialized in implementing secure payment gateway integration within the flight booking application, ensuring seamless and reliable payment processing for customers. Demonstrated versatility by working on diverse projects, showcasing adaptability from online booking tools to Human Resource Management Systems (HRMS).",
            expand: false
        }
    },


}
</script>
<style >
.hover-card {
    background-color: transparent !important;
    border: 2px solid #444444;
    /* Default border color */
    transition: border-color 0.1s ease, background-color 0.3s ease;
}

.active-hover {
    border-color: #000000 !important;
    /* Green border on hover */
    background-color: rgba(0, 255, 0, 0.1);
    /* Light green background on hover */
    transition: border-color 0.3s ease, background-color 0.3s ease;
    /* Smooth transition */
}

.customeducationtext {
    color: rgba(2, 3, 34, .6);
    font-family: var(--rr-ff-body);
    color: var(--rr-text-body);
    font-weight: var(--rr-fw-regular);
    font-size: 14px;

    line-height: 1.4;

}

.sanslightDescribeExperience {
    font-family: "Open Sans", sans-serif;
    font-weight: 490;
    font-size: 15px;
    font-style: italic;
}

.sanslight {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 13px;
}
.sanslightdesk{
    font-family: "Open Sans", sans-serif;
    font-weight: 440;
    font-size: 15px;
}

.sansbold {
    font-family: "Open Sans", sans-serif;
    font-weight: 690;
    font-size: 16px;
}
</style>