<template>
    <div id="experience" data-aos="zoom-in-up">
        <v-row>
            <v-col cols="12" xs="12" md="12" class="d-flex justify-center">
                
                <span class="black--text sansboldtitle">Experience</span>
            </v-col>
            <v-col cols="12" md="12" xs="12" class="d-flex justify-center">
                <p class="text-center sanslightDescribeExperience"
                    :class="{ 'text-paragraph': $vuetify.breakpoint.mdAndUp }" style="max-width: 600px;">Here I present my journey as a full-stack web developer, highlighting my extensive experience and skills. Through my portfolio, I showcase the diverse technologies I've mastered, demonstrating my expertise in web development and beyond.</p>
            </v-col>

        </v-row>

        <v-row>
            <v-col class="d-flex justify-center mb-6">
                <v-card rounded outlined style="background-color: rgba(242, 243, 247, 0.3);"  class="rounded-lg"
                    :class="{ 'active-hover': expand }" @mouseover="expand = true" @mouseleave="expand = false"
                    :width="$vuetify.breakpoint.mdAndUp ? '600' : '350'"
                    :height="expand ? ($vuetify.breakpoint.mdAndUp ? '490' : '740') : ($vuetify.breakpoint.mdAndUp ? '260' : '360')">
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
            truncatetext: "In my current role as a full-stack web developer, I am actively involved in developing a bug tracking system that allows employees to raise tickets for issues they encounter. This system streamlines the process of identifying and resolving bugs, enhancing overall productivity and collaboration within the....",
            fulltext: "In my current role as a full-stack web developer, I am actively involved in developing a bug tracking system that allows employees to raise tickets for issues they encounter. This system streamlines the process of identifying and resolving bugs, enhancing overall productivity and collaboration within the teamAdditionally, I work on a release management feature where employees can submit requests, specifying the branch name and repository for their changes. This functionality ensures that all code updates are organized and easily accessible, facilitating a smoother transition to live environments.By implementing these systems, I contribute to improving workflow efficiency and ensuring that our development processes are transparent and well-managed. My experience in this role has deepened my understanding of both front-end and back-end development, as well as the importance of effective communication within a team. I am committed to delivering high-quality solutions that meet the needs of our users and support the company's goals",
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
    font-size: 16px;
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