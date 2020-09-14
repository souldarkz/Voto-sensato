import React, { Component } from 'react';
import {StyleSheet, View, Text,Image, Button } from 'react-native';


export class ItemJudicatura extends Component {
    render(){
        return <View style={styles.container}>
                        <View style={styles.imagenTitulo}>
                            <Image
                                style={{ width: 350, height: 150 }}
                                source={require('../imagenes/Judicatura.jpeg')}
                            ></Image>
                        </View>
                        <Text style={styles.tetoTitulo}>JUDICATURA</Text>
                        <View style={styles.buttons}>
                            <Button 
                            title='FECHA'
                            onPress={()=>{
     
                            }}></Button>
                        </View>
                        <View style={styles.buttons}>
                            <Button
                            title='TIPO DE JUICIO'
                            onPress={()=>{
                           
                            }}></Button>
                        </View>
                        <View style={styles.buttons}>
                            <Button
                            title='DETALLES'
                            onPress={()=>{
                                
                            }}></Button>
                        </View>
                </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imagenTitulo:{
        alignItems:'center',
        marginTop:25,
        marginLeft:10,
        marginRight:10,
    },
    tetoTitulo:{
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight: 'bold',
    },
    buttons:{
        margin: 10,
    }
  });