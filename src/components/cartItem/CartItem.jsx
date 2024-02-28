import { View, Text } from 'react-native'
import React from 'react'

export const CartItem = ({item}) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.brand}</Text>
      <Text>{item.price}</Text>

    </View>
  )
}
