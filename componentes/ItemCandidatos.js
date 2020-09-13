import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class ItemCandidatos extends Component{ 
    constructor(){
        super();
    }
    render(){
        return <View>
            
                <Text>
                   cedula: {this.props.pCandidato.cedula}
                </Text>
                <Text>
                   nombre: {this.props.pCandidato.nombre}
                </Text>
                <Button
                title='I'
                onPress={()=>{
                    this.props.nav.navigate("MenuInformacionScreen")
                }}>

                </Button>
            </View>
        
    }
}
