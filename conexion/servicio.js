import { Alert } from 'react-native';

export const guardarCandidato = (candidato, fnExito)=>{
    console.log('Entra al metodo')
    global
    .bdd
    .collection('candidatos')
    .doc(candidato.cedula)
    .set(
        candidato
    )
    .then(()=>{
      Alert.alert('Info','Candidato guardado exitosamente');
      fnExito();
    })
    .catch((error)=>{
      Alert.alert('Error','Error al guardar:'+ error.message);
    })
    console.log('Sale del metodo')
  };
  export const guardarRegistroSri= (registroSri, fnExito)=>{
    console.log('Entra al metodo')
    global
    .bdd
    .collection('candidatos')
    .doc(global.cedulaCandidato)
    .collection('SRI')
    .add(
        registroSri
    )
    .then(()=>{
      Alert.alert('Info','Candidato guardado exitosamente');
      fnExito();
    })
    .catch((error)=>{
      Alert.alert('Error','Error al guardar:'+ error.message);
    })
    console.log('Sale del metodo')
  };
  