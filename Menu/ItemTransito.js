import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export class ItemTransito extends Component {
    render(){
        return <View style={styles.container}>
                     <View style={styles.imagenTitulo}>
                            <Image
                                style={{ width: 350, height: 150 }}
                                source={require('../imagenes/Transito.jpg')}
                            ></Image>
                        </View>
                        <Text style={styles.tetoTitulo}>TRÁNSITO</Text>
                        <View style={styles.buttons}>
                            <Button 
                            title='FECHA'
                            onPress={()=>{
     
                            }}></Button>
                        </View>
                        <View style={styles.buttons}>
                            <Button
                            title='????'
                            onPress={()=>{
                           
                            }}></Button>
                        </View>
                        <View style={styles.buttons}>
                            <Button
                            title='????'
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