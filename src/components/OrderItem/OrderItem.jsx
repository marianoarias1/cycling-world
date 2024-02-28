import { View, Text } from 'react-native'
import React from 'react'

export const OrderItem = ({order}) => {
    const total = order.items.reduce((acc, current)=> acc += (current.quantity * current.price), 0);

  return (
    <View>
      <Text>{new Date(order.createdAt).toLocaleString()}</Text>
      <Text>{total}</Text>
    </View>
  )
}
