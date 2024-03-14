import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const MyProfile = ({navigation}) => {
    const image = useSelector((state)=> state.authReducer.value.imageCamera)
    return (
        <View>
            {image ?
                <Image source={{uri:image}} style={styles.image} resizeMode='cover'/>
                :
                <>
                    <Image source={require("../../../assets/defaultProfilePicture.png")} style={styles.image} resizeMode='cover' />


                </>
            }
                    <Pressable onPress={()=> navigation.navigate("Image Selector")}>
                        <Text>
                            Agregar una imagen
                        </Text>
                    </Pressable>

                    <Pressable onPress={()=> navigation.navigate("Location Selector")}>
                        <Text>
                            Mis direcciones
                        </Text>
                    </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})