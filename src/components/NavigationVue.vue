<template>
  <v-row>
          <v-col>
                
        <v-navigation-drawer
        v-if="Drawer==true"
        class="d-md-none" 
        absolute
      dark
      width="80%"
      permanent
      style="background-color: rgba(0, 0, 0, 0.1); height: 100vh;"
    >
      <v-list class="mt-12">
        <v-list-item
          v-for="(val, i) in items1"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon >{{ val[0] }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  >{{ val[1] }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> 
        <v-col>
          <v-btn color="#854CE6" small  dense rounded>Github profile</v-btn>
        </v-col>
        <router-link to="/contact#contact">
    <v-btn text class="white--text">My</v-btn>
  </router-link>
        
      </v-list>
    </v-navigation-drawer> 
          </v-col>
        </v-row>
</template> 
<script>
 export default {
    data () {
      return {
        items1: [
        ["mdi-information-outline", "About"],
        ["mdi-head-snowflake-outline", "Skills"],
        ["mdi mdi-briefcase-outline", "Experience"],
        ["mdi-account-box", "Contact"],
      ],
      }
    },
    props:{
      Drawer:Boolean
    },
 


  }
</script>