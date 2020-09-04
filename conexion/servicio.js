import { Alert } from 'react-native';

export const guardarCandidato= (candidato, fnExito)=>{
    console.log('Entra al metodo')
    global
    .bdd
    .collection('candidato')
    .doc(candidato.cedula)
    .set({
        candidato
    })
    .then(()=>{
      Alert.alert('Info','Persona guardada exitosamente');
      fnExito();
    })
    .catch((error)=>{
      Alert.alert('Error','Error al guardar:'+ error.message);
    })
    console.log('Sale del metodo')
  };
  