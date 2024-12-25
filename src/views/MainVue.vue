<template>
    <v-main >

    <NavigationBar></NavigationBar>
    <router-view />
    </v-main>


</template> 
<script>
import NavigationBar from '@/components/NavigationBar.vue';

export default{
    data(){
        return{

        }
    },
    components:{
        NavigationBar
    }
}
</script>

