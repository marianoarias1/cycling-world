import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCartItems from "../../data/cart.json"
import { CartItem } from '../../components/cartItem/CartItem'


export const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal]= useState(0)
    useEffect(()=>{
        const total = allCartItems.reduce((acc, current)=> acc += (current.quantity * current.price), 0);
        setTotal(total);
        setCartItems(allCartItems);
    },[])

  return (
    <View>
      <FlatList
      data={cartItems}
      renderItem={({item})=>(
        <CartItem item={item}/>
      )}
      keyExtractor={(item)=> item.id}
      />
      <Text>Total: ${total}</Text>
    </View>
  )
}
