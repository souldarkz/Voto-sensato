import React, { Component } from 'react';
import { Avatar, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {guardarCandidato} from '../conexion/servicio';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export class Candidatos extends Component{
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
          lista:'',
        };
      };
      limpiarCajas=()=>{
        this.setState({
          cedula:'',
          nombre:'',
          apellidos:'',
          dignidad:'',
          lista:'',
        });
      };
    render(){
        return <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:"center",textAlignVertical:"center",color:'#28ABC4',}}>CANDIDATOS</Text>
            <View style={{alignItems:'center'}}>
                <Avatar
                    rounded
                    title='CAN'
                    source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}
                    size='large'
                    ></Avatar>
            </View>
            <Text style={styles.Text}>INGRESAR CANDIDATO</Text>
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
                        color='#28ABC4'
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
                        color='#28ABC4'
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
                        color='#28ABC4'
                    />
                    }>
                </Input>
                <Input
                value={this.state.dignidad}
                label='DIGNIDAD:'
                placeholder='Ingrese Dignidad'
                onChangeText={(text)=>{
                        this.setState({dignidad:text});
                }}
                leftIcon={
                    <Icon
                        name='user'
                        size={15}
                        color='#28ABC4'
                    />
                    }>
                </Input>
                <Input
                value={this.state.lista}
                label='LISTA:'
                placeholder='Ingrese la Lista'
                onChangeText={(text)=>{
                        this.setState({lista:text});
                }}
                leftIcon={
                    <Icon
                        name='user'
                        size={15}
                        color='#28ABC4'
                    />
                    }>
                </Input>
            </View>
            <View>
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
                    lista:this.state.lista,
                        }
                        ,this.limpiarCajas);
                }}
                icon={
                <Icon
                    name="upload"
                    size={25}
                    color="#28ABC4"
                />
                    }
                iconRight>
                </Button>
            </View>
               </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:30,
    },
    Text:{
        fontSize: 20,
        textAlign:'center',
        color:'#28ABC4',
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