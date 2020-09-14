import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Avatar } from 'react-native-elements';

export class ItemCandidatos extends Component{ 
    constructor(){
        super();
    };
    render(){
        return <View>
            
                <View style={styles.fila}>
                    <View style={styles.touch}>
                        <View style={styles.contenido}>
                            <View style={styles.subContenido}>
                                <View style={styles.estiloImagen}>
                                    <Avatar
                                        rounded
                                        title='CAN'
                                        source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}
                                        size='large'
                                    />
                                </View>

                                <View style={styles.contenedorDescripcion}>
                                    <Text style={styles.textoNom}>
                                    {this.props.pCandidato.nombre} {this.props.pCandidato.apellidos}
                                    </Text>
                                    <Text style={{textAlign:'center'}}>
                                            {this.props.pCandidato.cedula}
                                    </Text>
                                    <Text style={{textAlign:'center'}}>
                                        {this.props.pCandidato.dignidad}
                                    </Text>
                                    <Text style={{textAlign:'center'}}>
                                        LISTA {this.props.pCandidato.lista}
                                    </Text>
                                </View>
                                <View style={styles.buttonMenu}>
                                    <Button
                                        style={styles.estiloBoton}
                                        title='MENU'
                                        onPress={()=>{
                                        this.props.nav.navigate("MenuInformacionScreen")
                                        }}>

                                    </Button>
                                </View>
                            </View>
                        </View>
            </View>
     </View>
     </View>
    }
}

const styles = StyleSheet.create({
    fila: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        borderRadius: 10,
        marginLeft: 10,
        marginRight:10,
        borderColor:'#11A6C1',
        borderWidth:2,
},
    touch: {
        flex: 3,
},
    textoNom: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
        contenido: {
                width: '100%',
    },
    subContenido: {
                flexDirection: 'row',
                paddingVertical: 15,
                alignItems: 'center',
    },
    button_item: {
                width: 30,
                height: 30,
                borderRadius: 10,
                marginVertical: 5,
                marginRight: 2,
    },
    contenedorDescripcion: { 
            flex: 3,
            marginLeft: 1,
    },
            texto: {
            fontSize: 13,
            textAlign: 'left',
    },
    textoNegrita: {
            fontSize: 15,
            textAlign: 'left',
            fontWeight: 'bold',
    },
    buttonMenu: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10,
            flexDirection: 'row',
            alignItems: 'center',
    },
    estiloBoton: {
            width: 30,
            height: 30,
            borderRadius: 10,
            marginVertical: 5,
            marginRight: 2,
    },
    estiloImagen:{
        marginLeft: 5, 
    },
  
});