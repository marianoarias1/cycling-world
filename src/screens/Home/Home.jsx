import { View, Text } from 'react-native'
import React from 'react'

import { homeStyles } from './homeStyles'
import { ItemListCategory } from '../ItemListCategory/ItemListCategory'
import { Categories } from '../../components/Categories/Categories'

export const Home = ({navigation, route}) => {

  return (
    <View style={homeStyles.container}>
      <Categories navigation={navigation} route={route}/>
      <ItemListCategory navigation={navigation}/>
    </View>
  )
}

