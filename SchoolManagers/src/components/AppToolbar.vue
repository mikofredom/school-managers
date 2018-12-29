<template>
  <v-app>
    <v-toolbar app fixed clipped-left color="blue-grey darken-4">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>SchoolManagers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-list style="padding-top:1.5em; background-color:#263238">
          <router-link to="/user/pofile" style='color:white;text-decoration:none;'><span style='margin-bottom:1.2em'> <img style='width:35px ;height:35px;border-radius:50% 50%' src="../assets/mike1.jpg"/><span style='float:right'>Mike Logovi<br/>-Secretaire</span></span></router-link>
          
          </v-list>
    </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
   name:'app-toolbar'
}
</script>

<style>

</style>
