import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';

export class Candidatos extends Component {
    render(){
        return <View style={styles.container}>
            <Text style={styles.tituloPagina}>CANDIDATOS</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    tituloPagina:{
      fontSize:20,
      textAlign:'center',
      textAlignVertical:'center',
      color:'#808080',
      
    },

  });