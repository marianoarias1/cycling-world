import { View, Text, Pressable } from 'react-native'
import React from 'react'

export const SubmitButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <Text>{title}</Text>
    </Pressable>
    )
}
