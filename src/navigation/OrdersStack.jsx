import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Orders } from '../screens/Orders/Orders';
import { Header } from '../components/Header/Header';

const Stack = createNativeStackNavigator();

export const OrdersStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Orders'
    screenOptions={{ header: () => <Header title={"Orders"} /> }}
    >
        <Stack.Screen name='Orders' component={Orders}/>
    </Stack.Navigator>
  )
}
