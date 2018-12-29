<template>
    <v-app id="inspire" dark>
  
    


   
  </v-app>
</template>

<script>
import SchoolManagementComponent from '/SchoolManagementComponent'
export default {
    name:'management-component',
    data(){
          return {
                  drawer: true,
          }
    }    ,
    props: {
        source: String
    }
}     
</script>

<style>

</style>
