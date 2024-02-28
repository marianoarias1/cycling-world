import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { categoriesStyles } from './CategoriesStyles'
import { useSelector } from 'react-redux'
import Counter from '../counter/Counter'


export const Categories = ({navigation}) => {

  const categories = useSelector((state) => state.shopReducer.value.categories);
  return (
    <View style={categoriesStyles.container}>
      <Counter/>
      <FlatList
      horizontal={true}
        data={categories}
        renderItem={({item})=>(
            <CategoryItem navigation={navigation} category={item}/>
        )}
        keyExtractor={(item)=>item}
      />
    </View>
  )
}
