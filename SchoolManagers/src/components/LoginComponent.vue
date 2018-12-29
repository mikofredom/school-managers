

<template>
    <v-app>
      <toolbar-component></toolbar-component>
      <h1 style='text-decoration:underline'>Accedez à la gestion de votre école <br/> en vous connectant en tant qu'administrateur</h1>
      <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm10 md10>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo">
                <v-toolbar-title>Connectez vous</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                    <v-text-field  prepend-icon="lock"
                      :append-icon="show2 ? 'visibility_off' : 'visibility'"
                      :type="show2 ? 'text' : 'password'"
                      name="confpassword"
                      label="Confirmation du mot de passe"
                      @click:append="show2 = !show2"
                    ></v-text-field>                
               </v-form>
              </v-card-text>
              <router-link to='/register' color="indigo" dark ><p style="text-decoration:underline;font-size:20px;font-family:Helvetica;text-align:left;float:left;margin:0.85em 0 0 1em;">Vous n avez pas encore enregistre votre ecole?</p></router-link>

              <v-card-actions >
                <v-spacer></v-spacer>

                <router-link to='/management/view'><v-btn color="indigo" dark  >Connexion</v-btn></router-link>
                                                
              </v-card-actions>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
        <footer-component></footer-component>
    </v-app>
</template>

<script>
import ToolbarComponent from './ToolbarComponent'
import FooterComponent from './FooterComponent'
export default {
    components:{ToolbarComponent,FooterComponent},
    data(){
         return {
             show2:false
         }
    }
}
</script>