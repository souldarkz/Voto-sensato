import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';

export class MenuInformacion extends Component {
    render(){
        return <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:"center",textAlignVertical:"center"}}>Menu Informacion</Text>
            <Button
            title='SRI'
            >
                
            </Button>
            <Button
            title='JUDICATURA'
            >
                
            </Button>
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
  });