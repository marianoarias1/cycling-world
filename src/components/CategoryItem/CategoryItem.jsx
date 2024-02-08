import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Card } from '../Card/Card'
import { categoryItemstyles } from './categoryItemStyles'

export const CategoryItem = ({category, setCategorySelected}) => {
  return (
    <Card>
        <Pressable onPress={()=> setCategorySelected(category)}>
            <Text style={categoryItemstyles.text}>{category}</Text>
        </Pressable>
    </Card>
  )
}
