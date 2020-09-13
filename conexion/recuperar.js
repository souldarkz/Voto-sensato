
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