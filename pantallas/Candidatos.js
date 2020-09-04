import React, { Component } from "react";
import { View, StyleSheet} from 'react-native';
import { Input, Button, Text, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {guardarCandidato} from '../conexion/servicio'
import {cargarConfiguracion } from '../conexion/conexionBdd';


export class Candidatos extends Component {
  constructor(){
    super();
    if(!global.estaCargado){
      cargarConfiguracion();
    }
    this.state={
      cedula:'',
      nombre:'',
      apellidos:'',
      dignidad:'',
      usuario:[],
    };
  };
  limpiarCajas=()=>{
    this.setState({
      cedula:'',
      nombre:'',
      apellidos:'',
      dignidad:'',
    })
  }
    render(){
        return <View style={styles.container}>
        <Text style={styles.Text}>INGRESAR CANDIDATO</Text>
        <View style={{alignItems:'center'}}>
          <Avatar
              rounded
              title='CAN'
              source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}
              size='large'
              ></Avatar>
        </View>
        <View style={styles.Input}>
            <Input
            value={this.state.cedula}
            label='CEDULA:'
            keyboardType='decimal-pad'
            placeholder='Ingrese numero de cedula'
            onChangeText={(text)=>{
                    this.setState({cedula:text});
            }}
            leftIcon={
                <Icon
                  name='address-card'
                  size={15}
                  color='#25C805'
                />
              }>
            </Input>
            <Input
            value={this.state.nombre}
            label='NOMBRE:'
            placeholder='Ingrese Nombre'
            onChangeText={(text)=>{
                    this.setState({nombre:text});
            }}
            leftIcon={
                <Icon
                  name='user'
                  size={15}
                  color='#25C805'
                />
              }>
            </Input>
            <Input
            value={this.state.apellidos}
            label='APELLIDOS:'
            placeholder='Ingrese Apellidos'
            onChangeText={(text)=>{
                    this.setState({apellidos:text});
            }}
            leftIcon={
                <Icon
                  name='user'
                  size={15}
                  color='#25C805'
                />
              }>
            </Input>
            <Input
            value={this.state.correo}
            label='DIGNIDAD:'
            placeholder='Ingrese Dignidad'
            onChangeText={(text)=>{
                    this.setState({dignidad:text});
            }}
            leftIcon={
                <Icon
                  name='user'
                  size={15}
                  color='#25C805'
                />
              }>
            </Input>
        </View>
        <View style={styles.Button}>
          <Button
           title='GUARDAR  '
           type='outline'
           onPress={()=>{
              guardarCandidato({
                cedula:this.state.cedula,
                nombre:this.state.nombre,
                apellidos:this.state.apellidos,
                dignidad:this.state.dignidad,
                  }
                  ,this.limpiarCajas);
           }}
           icon={
            <Icon
              name="upload"
              size={25}
              color="#25C805"
            />
                }
            iconRight>

          </Button>
        </View>
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
