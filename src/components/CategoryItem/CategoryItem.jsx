import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Card } from '../Card/Card'
import { categoryItemstyles } from './categoryItemStyles'

export const CategoryItem = ({item,navigation, route}) => {

  return (
    <Card style={{margin: 15, height: 40, width: 40}}>
        <Pressable style={
          categoryItemstyles.categoryButton
        } onPress={()=>{

           navigation.navigate("ItemListCategory", { category: item.title })
           }}>
            <Text style={categoryItemstyles.text}>{item.icon}</Text>
        </Pressable>
    </Card>
  )
}
