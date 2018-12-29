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
       <v-list>
         <v-list-tile >
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Tableau de bord</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
              
              
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
    </v-navigation-drawer>
    <app-content></app-content>
    <app-footer></app-footer>
    
      </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
import AppFooter from '@/components/AppFooter'
import AppContent from '@/components/AppContent'
export default {
  name:'school-management',
  components:{AppToolbar,AppFooter,AppContent},
  data(){
       return {
        items: [
          {
            action: 'supervised_user_circle',
            title: 'Administrateurs',
            active: true,
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
              
            ]
          },
          {
            action: 'group_work',
            title: 'Groupes',
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
            ]
          },
          {
            action: 'class',
            title: 'Gestion des classes',
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
            ]
          },
          {
            action: 'person',
            title: 'Enseignants',
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
            ]
          },
          {
            action: 'child_care',
            title: 'Eleves',
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
            ]
          },
          {
            action: 'date_range',
            title: 'Emplois du temps',
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
            ]
          },
          {
            action: 'description',
            title: 'Bulletins',
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
            ]
          },
          {
            action: 'wallpaper',
            title: 'Certificats de scolarite',
            items: [
              { title: 'Voir la liste' },
              { title: 'Ajouter' },
            ]
          },
          {
            action: 'credit_card',
            title: 'Cartes',
            items: [
              { title: 'Voir la liste' },
              { title: 'Concevoir' },
            ]
          },
        ]
          
    
       }
  }
}
</script>

<style>

</style>
