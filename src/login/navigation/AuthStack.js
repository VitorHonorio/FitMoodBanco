import React,{ useEffect, useState } from "react";
import {View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [ isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
     
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    }, [])

    if (isFirstLaunch === null) {
        return null ;
    }  else {
        routeName = 'Login';
    } 

    return (
        <Stack.Navigator initialRouteName={routeName}>
           
            <Stack.Screen
              name='Login'
              component={LoginScreen}
              options={{header: () => null}}
            />
            <Stack.Screen 
            name='Signup' 
            component={SignupScreen} 
            options={({navigation}) => ({
              title: '',
              headerStyle: {
                  backgroundColor: '#CCFCFC',
                  shadowColor: '#CCFCFC',
                  elevation: 0,
              },
              headerLeft: () => (
                  <View style={{marginLeft: 10}}>
                      <FontAwesome.Button
                      name='long-arrow-left'
                      size={25}
                      backgroundColor='#CCFCFC'
                      color='#333'
                      onPress={() => navigation.navigate('Login')}
                      />
                  </View>
              ),

            })} 
            />
        </Stack.Navigator>
    );
};

export default AuthStack;