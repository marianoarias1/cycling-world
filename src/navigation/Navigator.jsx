import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {Home} from '../screens/Home/Home'
import {ItemDetail} from '../screens/ItemDetail/ItemDetail'
import {ItemListCategory} from '../screens/ItemListCategory/ItemListCategory'
import { Header } from '../components/Header/Header'

export const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Cycling World'
                screenOptions={({ route }) => ({
                    header: () => {
                      return (
                        <Header
                          title={
                            route.name === "Home"
                              ? 'Cycling World'
                              : route.name === "ItemListCategory"
                              ? route.params.category
                              : "Detail"
                          }
                        />
                      );
                    },
                  })}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ItemListCategory" component={ItemListCategory}/>
                <Stack.Screen name="ItemDetail" component={ItemDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
