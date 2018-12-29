<template>
 <v-app dark>
    <app-toolbar></app-toolbar>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
     style='background-color:#000000'
    >
      <v-list >
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Liste des ecoles</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Ajouter ecole</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
     
     <app-footer></app-footer>
</v-app>
</template>

<script>
   import AppToolbar from '@/components/AppToolbar'
   import AppFooter from '@/components/AppFooter'
   import AppContent from '@/components/AppContent'
export default {
   name:'school-add',
   components:{AppToolbar,AppFooter,AppContent},
   data(){
        return {
                  drawer: true,
          }
   }
}
</script>

<style>

</style>
