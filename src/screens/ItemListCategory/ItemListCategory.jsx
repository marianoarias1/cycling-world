import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products.json'
import { itemListCategoryStyles } from './itemListCategoryStyles'
import { Search } from '../../components/Search/Search'
import { PorductItem } from '../../components/ProductItem/PorductItem'

export const ItemListCategory = ({category}) => {
    const [product, setProduct] = useState([])
    const [keyWord, setKeyWord] = useState('')

    useEffect(()=>{
        if(category){
            const products = allProducts.filter((prod)=> prod.category === category);
            const filteredProd = products.filter((product)=> product.category.includes(keyWord) || product.title.toLowerCase().includes(keyWord.toLowerCase()));
            console.log(filteredProd)
            setProduct(filteredProd);
        }
        else{
            const filteredProd= allProducts.filter((prod)=> prod.category.includes(keyWord));
            console.log(filteredProd)

            setProduct(filteredProd);
        }
    },[category, keyWord])
  return (
    <View style={itemListCategoryStyles.container}>
      <Search onSearch={setKeyWord}/>

      <FlatList
      data={product}
      renderItem={({item}) => <PorductItem product={item}/> }
      keyExtractor={(item)=> item.id}
      />

    </View>
  )
}
