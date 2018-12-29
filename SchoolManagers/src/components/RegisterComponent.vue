<template>
  <v-app>
      <toolbar-component></toolbar-component>
    <v-content style='background-color:white'>
      <h1 style='text-decoration:underline'>Bienvenue sur SchoolManager!</h1>
      <h3>Inscrivez vous pour béneficier de nos services</h3>
       <v-layout justify-center style='margin-top:1em'>
           <v-flex xs12 sm9>
                <v-toolbar color="indigo" dark>
                      <v-toolbar-title>Inscrivez-vous</v-toolbar-title>
                        <v-spacer></v-spacer>
               </v-toolbar>
              <v-card>
                  <v-container fluid grid-list-md>
                     <v-layout row wrap>
                         <v-form style='width:90%;margin:0 auto' ref="form" v-model="valid" lazy-validation align-center>
          
          <v-text-field v-model="superAdminName" :rules="emailRules" label="E-mail de l'administrateur principal" required></v-text-field>
          <v-text-field
            v-model="superAdminPassword"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="password"
            label="Mot de passe de l'administrateur principal"
            hint="Au moins 8 caracteres"
            
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field  v-model="superAdminPasswordConfirm" 
            :append-icon="show2 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="confpassword"
            label="Confirmation du mot de passe"
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-btn color='indigo' dark :disabled="!valid" @click="submit" >
            Envoyer
          </v-btn>
          <v-btn @click="clear" dark color='indigo'> Tout effacer</v-btn>
        </v-form>
               
                   </v-layout>
                  </v-container>
               </v-card>
            </v-flex>
      </v-layout>
       
    </v-content>
     <footer-component></footer-component>
 </v-app>
</template>
<script>

   import FooterComponent from './FooterComponent'
   import ToolbarComponent from './ToolbarComponent'
   export default {
       components:{FooterComponent,ToolbarComponent},
      data(){
        return {
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            password: 'Password',
            rules: {
              required: value => !!value || 'Required.',
              min: v => v.length >= 8 || 'Min 8 characters',
              emailMatch: () => ('The email and password you entered don\'t match')
            },
            valid: true,
            schoolName: '',
            nameRules: [
              v => !!v || 'Ce champ est requis',
              v => (v && v.length >= 3) || 'Le nom doit avoir au moins 3 caracteres'
            ],
            email: '',
            emailRules: [
              v => !!v || "L'email est requis",
              v => /.+@.+/.test(v) || "L'email doit etre valide"
            ],
            select: null,
            items: [
              'Ecole avec primaire',
              'Ecole avec college',
              'Ecole avec lycee',
              'Ecole avec primaire et college',
              'Ecole avec primaire et lycee',
              'Ecole avec college et lycee',
              'Ecole avec primaire,college et lycee'
            ],
            schoolType:'',
            superAdminName:'',
            superAdminPassword:''
        }    
      } 
   }  
</script>