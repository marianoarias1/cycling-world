import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCartItems from "../../data/cart.json"
import { CartItem } from '../../components/cartItem/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopService'


export const Cart = () => {
    // const [cartItems, setCartItems] = useState([])
    // const [total, setTotal]= useState(0)
    // useEffect(()=>{
    //     const total = allCartItems.reduce((acc, current)=> acc += (current.quantity * current.price), 0);
    //     setTotal(total);
    //     setCartItems(allCartItems);
    // },[])

    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation();

    const confirmCart =()=>{
      triggerPost({total, cartItems, user: "loggedUser"})
    }
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

      <Pressable onPress={confirmCart}>
        <Text>Enviar orden</Text>
      </Pressable>
    </View>
  )
}
