import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { itemListCategoryStyles } from './itemListCategoryStyles'
import { Search } from '../../components/Search/Search'
import { PorductItem } from '../../components/ProductItem/PorductItem'
import { useDispatch, useSelector } from 'react-redux'
import { setCategorySelected } from '../../features/shop/shopSlice'
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../../services/shopService'

export const ItemListCategory = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const [product, setProducts] = useState([])
  const [keyword, setKeyWord] = useState('')

  const category = useSelector((state) => state.shopReducer.value.categorySelected);
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)
  const { data: allProducts, isLoading: allPorductsLoading, error: allProductsError } = useGetProductsQuery()
  useEffect(() => {
    if (category && productsFilteredByCategory) {
      const productsRaw = Object.values(productsFilteredByCategory)
      const productsFiltered = productsRaw.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase()) ||
        product?.category == (category)
      );
      setProducts(productsFiltered);
    }
    else{
      setProducts(allProducts)
    }

  }, [productsFilteredByCategory, keyword,category,allProducts]);

  return (
    <View style={itemListCategoryStyles.container}>
      <Pressable onPress={() => {
        dispatch(setCategorySelected(''))
      }}>
        <Text>Inicio</Text>
      </Pressable>

      <Search onSearch={setKeyWord} />

      <FlatList
        data={product}
        renderItem={({ item }) => <PorductItem navigation={navigation} product={item} />}
        keyExtractor={(item) => item.id}
      />

    </View>
  )
}
