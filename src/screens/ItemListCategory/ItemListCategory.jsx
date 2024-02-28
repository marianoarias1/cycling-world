import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { itemListCategoryStyles } from './itemListCategoryStyles'
import { Search } from '../../components/Search/Search'
import { PorductItem } from '../../components/ProductItem/PorductItem'
import { useDispatch, useSelector } from 'react-redux'
import { setCategorySelected } from '../../features/shop/shopSlice'

export const ItemListCategory = ({ navigation, route}) => {
    const dispatch= useDispatch()
    const [product, setProducts] = useState([])
    const [keyword, setKeyWord] = useState('')
    const productsFilteredByCategory = useSelector(
      (state) => state.shopReducer.value.productsFilteredByCategory
    );
    const categorySelected =useSelector((state)=> state.shopReducer.value.categorySelected)
    const allProducts = useSelector((state)=> state.shopReducer.value.products)
    
    useEffect(() => {
      if(!categorySelected){
        const productsFiltered = allProducts.filter((product)=> product.category.includes(keyword) || product.title.toLowerCase().includes(keyword.toLowerCase()))
        setProducts(productsFiltered)
      }else{
        const productsFiltered = productsFilteredByCategory.filter((product)=> product.category.includes(keyword) || product.title.toLowerCase().includes(keyword.toLowerCase()))
        setProducts(productsFiltered)
      }
    }, [productsFilteredByCategory, keyword]);

  return (
    <View style={itemListCategoryStyles.container}>
      <Pressable onPress={()=>{
        dispatch(setCategorySelected(''))
       }}>
        <Text>Inicio</Text>
      </Pressable>
      
      <Search onSearch={setKeyWord}/>

      <FlatList
      data={product}
      renderItem={({item}) => <PorductItem navigation={navigation} product={item}/>}
      keyExtractor={(item)=> item.id}
      />

    </View>
  )
}
