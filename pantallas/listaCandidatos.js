import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {obtenerListaCandidatos} from '../conexion/recuperar';
import {ItemCandidatos} from '../componentes/ItemCandidatos';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ActionButton from 'react-native-action-button';
import {cargarConfiguracion} from '../conexion/conexionBdd';

export class ListaCandidatos extends Component {
    constructor(){
      super();
      if(!global.estaCargado){
        cargarConfiguracion();
      }
        obtenerListaCandidatos(this.repintarLista);
      this.state={
        listaCands:[],
      };
    };
    
    repintarLista= arreCandidatos=>{
        this.setState({listaCands:arreCandidatos})
    };
      render(){
          return <View style={styles.container}>
            
               <View>
                <FlatList
                    data={this.state.listaCands}
                    renderItem={(obj)=>{
                      return <ItemCandidatos
                               pCandidato={obj.item}
                               nav={this.props.navigation}
                               >

                              </ItemCandidatos>
                    }}
                      keyExtractor={(candidato)=>{
                        return candidato.id;
                      }}
                    >
                  </FlatList>
             </View>
             <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => { 
                      this.props.navigation.navigate("CandidatosScreen")
                    }}
                  />
      </View>
  }
  }
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  Text:{
  fontSize: 20,
  textAlign:'center',
  color:'#25C805',
  },
  Input:{
  alignItems: 'center',
  justifyContent: 'center',
  margin:4,
  },
  Button:{
  margin:20,
  
  },
  });
  