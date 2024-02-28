import { View, Text, FlatList } from 'react-native'
import React from 'react'
import allOrders from '../../data/orders.json'
import { OrderItem } from '../../components/OrderItem/OrderItem'


export const Orders = () => {
  return (
    <View>
      <FlatList
      data={allOrders}
      renderItem={({item})=>(
        <OrderItem order={item}/>
      )}
      keyExtractor={(item)=> item.id}
      />
    </View>
  )
}
