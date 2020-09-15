
 export const obtenerListaCandidatos = (fnRepintar) => {
    global
      .bdd
      .collection('candidatos')
      .get()
      .then((querySnapshot)=> {
        let documentos = querySnapshot.docs;
        let candidato = null;
        let candidatos = [];
        for (let i = 0; i < documentos.length; i++) {
            candidato = documentos[i].data();
            candidato.id = documentos[i].id;
            candidatos.push(candidato);
        }
        console.log('todas los candidatos',candidatos);
        fnRepintar(candidatos);
      })
      .catch(error=>{
          console.log("Error",error);
      });
      
  };
  export const obtenerListaSri = (fnRepintar) => {
    global
      .bdd
      .collection('candidatos')
      .doc(global.cedulaCandidato)
      .collection('SRI')
      .get()
      .then((querySnapshot)=> {
        let documentos = querySnapshot.docs;
        let registroSri = null;
        let registrosSri = [];
        for (let i = 0; i < documentos.length; i++) {
            registroSri = documentos[i].data();
            registroSri.id = documentos[i].id;
            registrosSri.push(registroSri);
        }
        console.log('todas los registro SRI',registrosSri);
        fnRepintar(registrosSri);
      })
      .catch(error=>{
          console.log("Error",error);
      });
      
  };