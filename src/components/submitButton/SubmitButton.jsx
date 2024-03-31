import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { submitButtonStyles } from './submitButtonStyles'

export const SubmitButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}  style={submitButtonStyles.button}>
        <Text  style={submitButtonStyles.text}>{title}</Text>
    </Pressable>
    )
}
