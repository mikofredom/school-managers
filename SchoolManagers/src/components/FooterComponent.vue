<template>
    <v-footer dark height="auto" style='margin-top:1.5em'>
    <v-card class="flex" flat tile style='background-color:#607D8B'>
      <v-card-title  >
        <strong class="subheading">Suivez nous sur nos reseaux sociaux!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon large>{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>SchoolManagers</strong>
      </v-card-actions>
    </v-card>
</v-footer>
</template>

<script>
export default {
    name:'footer-component',
    data(){
     return {
        icons: [
          'fa fa-facebook-square',
          'fa fa-twitter',
          'fa fa-youtube',
          
        ]
      }
    }
}
</script>

<style>

</style>
