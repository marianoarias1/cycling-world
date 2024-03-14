import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ShopStack } from './ShopStack'
import { CartStack } from './CartStack'
import { colors } from '../global/colors'
import { FontAwesome, Feather, Entypo } from '@expo/vector-icons';
import { OrdersStack } from './OrdersStack'
import { MyProfileStack } from './MyProfileStack'

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen name="ShopStack" component={ShopStack} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <>
                            <FontAwesome name="home" size={24} color={focused ? colors.activeColor : colors.textColor} />
                            <Text style={{ color: focused ? colors.activeColor : colors.textColor }}>Tienda</Text>
                        </>
                    )
                }
            }} />
            <Tab.Screen name="CartStack" component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <Feather name="shopping-cart" size={24} color={focused ? colors.activeColor : colors.textColor} />
                                <Text style={{ color: focused ? colors.activeColor : colors.textColor }}>Carrito</Text>
                            </>
                        )
                    }
                }}
            />

            <Tab.Screen name="OrdersStack" component={OrdersStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <Entypo name="text-document" size={24} color={focused ? colors.activeColor : colors.textColor} />
                                <Text style={{ color: focused ? colors.activeColor : colors.textColor }}>Ordenes</Text>
                            </>
                        )
                    }
                }}
            />


            <Tab.Screen name="MyProfileStack" component={MyProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <FontAwesome name="user-circle-o" size={24} color={focused ? colors.activeColor : colors.textColor} />
                                <Text style={{ color: focused ? colors.activeColor : colors.textColor }}>Perfil</Text>
                            </>
                        )
                    }
                }}
            />
        </Tab.Navigator>

    )
}


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.secondaryColor,
        height: 70

    }
})