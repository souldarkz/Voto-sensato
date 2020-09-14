import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';

export class MenuInformacion extends Component {
    constructor(){
        super();
    };
    render(){
        return <View style={styles.container}>
                <View>
                <Text style={{fontSize:20,textAlign:"center",textAlignVertical:"center",fontWeight: 'bold',}}
                     >VOTO SENSATO</Text>
                     <Text style={{fontSize:20,textAlign:"center",textAlignVertical:"center",fontWeight: 'bold',color:'#28ABC4',}}
                     >MENU DE INFORMACIÓN</Text>
                </View>

                <View style={styles.button}>
                    <Button
                       title='SRI'
                       onPress={()=>{
                        this.props.navigation.navigate('ItemSriScreen');
                       }}
                    ></Button>
                </View>
                <View style={styles.button}>
                    <Button
                        title='JUDICATURA'
                        onPress={()=>{
                            this.props.navigation.navigate('ItemJudicaturaScreen');
                        }}
                    ></Button>
                </View>
                <View style={styles.button}>
                    <Button
                        title='TRANSITO'
                        onPress={()=>{
                            this.props.navigation.navigate('ItemTransitoScreen');
                        }}
                    ></Button>
                </View>
                <View style={styles.button}>
                    <Button
                        title='PARTICIPACIONES ANTERIORES'
                        onPress={()=>{
                            this.props.navigation.navigate('ItemParticipacionesAnterScreen');
                        }}
                    ></Button>
                </View>
             </View>
            
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
    },
    button:{
        margin:20,
    },
  });