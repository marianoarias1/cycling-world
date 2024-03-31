import { View, Text, Image} from 'react-native'
import React from 'react'
import { cartItemStyles } from './cartItemStyles'
export const CartItem = ({ item }) => {
  return (
    <View style={cartItemStyles.container}>
      <View style={cartItemStyles.cardText}>
        <Text style={cartItemStyles.text}>{item.title}</Text>
        <Text style={cartItemStyles.text}>Marca: {item.brand}</Text>
        <Text style={cartItemStyles.text}>Precio: ${item.price}</Text>
      </View>
      <View style={cartItemStyles.cardImage}>
        <Image style={cartItemStyles.cartImage} source={{uri: item.thumbnail}}/>
      </View>

    </View>
  )
}
