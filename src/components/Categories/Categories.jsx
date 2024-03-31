import { View, FlatList } from 'react-native'
import React from 'react'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { categoriesStyles } from './CategoriesStyles'
import { useGetCategoriesQuery } from '../../services/shopService'


export const Categories = ({navigation}) => {
  //const categories = useSelector((state) => state.shopReducer.value.categories);

  const {data, isLoading, error} = useGetCategoriesQuery();
  return (
    <View style={categoriesStyles.container}>
      <FlatList
      horizontal={true}
        data={data}
        renderItem={({item})=>(
            <CategoryItem navigation={navigation} category={item}/>
        )}
        keyExtractor={(category)=>category}
      />
    </View>
  )
}
