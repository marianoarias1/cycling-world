import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { categories } from '../../data/categories'
import { categoriesStyles } from './CategoriesStyles'


export const Categories = ({navigation, route}) => {

  return (
    <View style={categoriesStyles.container}>
      <FlatList
      horizontal={true}
        data={categories}
        renderItem={({item})=>(
            <CategoryItem navigation={navigation} route={route} item={item}/>
        )}
        keyExtractor={(item)=>item.title}
      />
    </View>
  )
}
