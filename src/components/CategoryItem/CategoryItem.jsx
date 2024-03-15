import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Card } from '../Card/Card'
import { categoryItemstyles } from './categoryItemStyles'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/shop/shopSlice'
import { categories } from '../../data/categories'


export const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()
  return (
    <Card style={{ margin: 15, height: 40, width: 40 }}>
      <Pressable style={
        categoryItemstyles.categoryButton}
        onPress={() => {
          dispatch(setCategorySelected(category))
          navigation.navigate("ItemListCategory", { category });
        }}
      >

        <Text style={categoryItemstyles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}
