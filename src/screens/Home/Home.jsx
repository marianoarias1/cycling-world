import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../components/Header/Header'
import { homeStyles } from './homeStyles'
import { Categories } from '../../components/Categories/Categories'

export const Home = ({setCategorySelected}) => {
  return (
    <View style={homeStyles.container}>
      <Header title={'Inicio'}/>
      <Categories setCategorySelected={setCategorySelected}/>
    </View>
  )
}

