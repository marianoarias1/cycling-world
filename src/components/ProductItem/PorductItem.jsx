import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Card } from '../Card/Card'
import { productItemStyles } from './productItemStyles'

export const PorductItem = ({product, navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ItemDetail",{id: product.id})} >
    <Card style={productItemStyles.cardStyles}>
        <View style={{width:"90%", justifyContent:'center',alignItems:'center', gap:40,}}>
          <Image style={productItemStyles.image} source={{uri: product.thumbnail}}/>
          <Text style={productItemStyles.text}>{product.title}</Text>
        </View>
    </Card>
    </Pressable>
  )
}
