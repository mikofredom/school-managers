<template>
<v-toolbar color="blue-grey darken-4" dark >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>SchoolManagers</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
     <v-list style="padding-top:1.5em; background-color:#263238">
     <router-link to="/register"> <v-btn flat >Inscription</v-btn></router-link>
     <router-link to="/login">  <v-btn flat>Connexion</v-btn></router-link>
     </v-list>
    </v-toolbar-items>
  </v-toolbar>
    
</template>

<script>
export default {
     name:'toolbar-component'
}
</script>

<style>

</style>
