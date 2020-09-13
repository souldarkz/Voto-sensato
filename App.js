import { StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import {Dignidades} from "./pantallas/Dignidades";
import {Candidatos} from './pantallas/Candidatos';
import {ListaCandidatos} from './pantallas/ListaCandidatos';
import {cargarConfiguracion} from "./conexion/conexionBdd";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function TabHome() {
  return <Tab.Navigator>
              <Tab.Screen
                name='ListaCandidatosScreen'
                component={ListaCandidatos}
                options= {{
                  tabBarLabel:'ListaCandidatos',
                  tabBarIcon: ()=>(
                    <Icon
                      name='user'
                      size={32}
                      color="skyblue"/>
                  )
                }}>  
              </Tab.Screen> 
              <Tab.Screen
                name='CandidatosScreen'
                component={Candidatos}
                options= {{
                  tabBarLabel:'Candidatos',
                  tabBarIcon: ()=>(
                    <Icon
                      name='user'
                      size={32}
                      color="skyblue"/>
                  )
                }}>  
              </Tab.Screen> 

              <Tab.Screen
                name='DignidadScreen'
                component={Dignidades}
                options= {{
                  tabBarLabel:'Dignidades',
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
                  <HomeStack.Navigator initialRouteName= 'TabHomeScreen'>
                         <HomeStack.Screen name='TabHomeScreen' component={TabHome}></HomeStack.Screen>
                         <HomeStack.Screen name='ListaCandidatosScreen' component={ListaCandidatos}></HomeStack.Screen>
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