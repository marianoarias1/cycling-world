import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { myProfileStyles } from './myProfileStyles'

export const MyProfile = ({ navigation }) => {
    const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);
    return (
        <View style={myProfileStyles.container}>
            <View style={myProfileStyles.cardContainer}>
                {profileImage || imageCamera ? 
                    <Image source={{uri: profileImage || imageCamera }} style={myProfileStyles.image} resizeMode='cover' />
                    :
                    <>
                        <Image source={require("../../../assets/defaultProfilePicture.png")} style={myProfileStyles.image} resizeMode='cover' />
                    </>
                }
                <Pressable
                    style={myProfileStyles.button}
                    onPress={() => navigation.navigate("Image Selector")}>
                    <Text style={myProfileStyles.text}>
                        Agregar una imagen
                    </Text>
                </Pressable>

                <Pressable
                    style={myProfileStyles.button}

                    onPress={() => navigation.navigate("Location Selector")}>
                    <Text style={myProfileStyles.text}>
                        Mis direcciones
                    </Text>
                </Pressable>
            </View>
        </View>

    )
}
