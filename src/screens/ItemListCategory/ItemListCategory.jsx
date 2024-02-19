import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products.json'
import { itemListCategoryStyles } from './itemListCategoryStyles'
import { Search } from '../../components/Search/Search'
import { PorductItem } from '../../components/ProductItem/PorductItem'
import { Categories } from '../../components/Categories/Categories'

export const ItemListCategory = ({ navigation, route}) => {
    const [product, setProduct] = useState([])
    const [keyWord, setKeyWord] = useState('')

    const {category} = route?.params ? route?.params : 'all'
    useEffect(()=>{
        if(category){
            const products = allProducts.filter((prod)=> prod.category === category);
            const filteredProd = products.filter((product)=> product.category.includes(keyWord) || product.title.toLowerCase().includes(keyWord.toLowerCase()));
            setProduct(filteredProd);

        }
        else{
            const filteredProd= allProducts.filter((prod)=> prod.category.includes(keyWord) || prod.title.toLowerCase().includes(keyWord.toLowerCase()));
            setProduct(filteredProd);
        }
    },[category, keyWord])
  return (
    <View style={itemListCategoryStyles.container}>
      <Pressable onPress={()=>{
        setKeyWord('')}}>
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
