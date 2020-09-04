import firebase from 'firebase';
import '@firebase/firestore'

export const cargarConfiguracion=()=>{
    console.log('Cargar Configuracion');

    const firebaseConfig = {
        apiKey: "AIzaSyBh2htV2Godi6VoA-0j-Nt5xPge8APhIB0",
        authDomain: "votosensato-fef89.firebaseapp.com",
        databaseURL: "https://votosensato-fef89.firebaseio.com",
        projectId: "votosensato-fef89",
        storageBucket: "votosensato-fef89.appspot.com",
        messagingSenderId: "1067939039972",
        appId: "1:1067939039972:web:8d7d455983a2d9f19cbaf1"
      };
      // Initialize Firebase

      firebaseApp = firebase.initializeApp(firebaseConfig);    
      global.bdd = firebase.firestore();
      global.estaCargado = true;
}