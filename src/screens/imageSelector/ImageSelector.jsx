import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from "expo-image-picker"
import { setCameraImage } from '../../features/auth/authSlice';
import { usePostProfileImageMutation } from '../../services/shopService';


export const ImageSelector = ({navigation}) => {
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
    <View>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable onPress={pickImage}>
            <Text>Tomar otra foto</Text>
          </Pressable>
          <Pressable onPress={confirmImage}>
            <Text>Confirmar Foto</Text>
          </Pressable>
        </>
      ) : (
        <View >
          <Text>No hay una foto seleccionada</Text>
          <Pressable onPress={pickImage}>
            <Text>Tomar foto</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})