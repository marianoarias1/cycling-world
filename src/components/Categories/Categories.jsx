import { View, Text, FlatList } from 'react-native'
import React from 'react'
import categories from '../../data/categories.json'
import { CategoryItem } from '../CategoryItem/CategoryItem'


export const Categories = ({setCategorySelected}) => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({item})=>(
            <CategoryItem setCategorySelected={setCategorySelected} category={item}/>
        )}
        keyExtractor={(item)=>item}
      />
    </View>
  )
}
