import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from "expo-image-picker"
import { setCameraImage } from '../../features/auth/authSlice';
import { usePostProfileImageMutation } from '../../services/shopService';
import { imageSelectorStyles } from './imageSelectorStyles';


export const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };
  return (
    <View style={imageSelectorStyles.container}>
      <View style={imageSelectorStyles.cardContainer}>
        {image ? (
          <>
            <Image source={{ uri: image }} style={imageSelectorStyles.image} />
            <Pressable 
            style={imageSelectorStyles.button}
            onPress={pickImage}>
              <Text  style={imageSelectorStyles.text}>Tomar otra foto</Text>
            </Pressable>
            <Pressable 
             style={imageSelectorStyles.button}
            onPress={confirmImage}>
              <Text style={imageSelectorStyles.text}>Confirmar Foto</Text>
            </Pressable>
          </>
        ) : (
          <View style={imageSelectorStyles.noPhotoContainer}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5361/5361019.png' }} style={imageSelectorStyles.image} />
            <Text style={imageSelectorStyles.text}>No hay una foto seleccionada</Text>
            <Pressable
            style={imageSelectorStyles.button}
            onPress={pickImage}>
              <Text style={imageSelectorStyles.text}>Tomar foto</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
})