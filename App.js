import { StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import {Dignidades} from "./pantallas/Dignidades";
import {Candidatos} from './pantallas/Candidatos';
import {listaCandidato} from './pantallas/listaCandidatos';
import {cargarConfiguracion} from "./conexion/conexionBdd";
import{Encuestas} from "./pantallas/encuestas"


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function TabHome() {
  return <Tab.Navigator>
              <Tab.Screen
                name='listaCandidatosScreen'
                component={listaCandidato}
                options= {{
                  tabBarLabel:'listaCandidato',
                  tabBarIcon: ()=>(
                    <Icon
                      name='user'
                      size={32}
                      color="skyblue"/>
                  )
                }}>  
              </Tab.Screen> 
              <Tab.Screen
                name='EncuestasScreen'
                component={Encuestas}
                options= {{
                  tabBarLabel:'Encuestas',
                  tabBarIcon: ()=>(
                    <Icon
                      name='user'
                      size={32}
                      color="skyblue"/>
                  )
                }}>  
              </Tab.Screen>

          </Tab.Navigator>
}


export default function App() {

    if(!global.estaCargado){
      cargarConfiguracion();
    };

    return  <NavigationContainer>
                  <HomeStack.Navigator initialRouteName= 'INICIO'>
                         <HomeStack.Screen name='TabHomeScreen' component={TabHome} options={{headerShown:false}}></HomeStack.Screen>
                         <HomeStack.Screen name='listaCandidatosScreen' component={listaCandidato}></HomeStack.Screen>
                         <HomeStack.Screen name='CandidatosScreen' component={Candidatos}></HomeStack.Screen>
                         <HomeStack.Screen name='DignidadScreen' component={Dignidades}></HomeStack.Screen>     
                  </HomeStack.Navigator>
            </NavigationContainer>
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});