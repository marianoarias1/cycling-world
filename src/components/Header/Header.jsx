import { View, Text } from 'react-native'
import React from 'react'
import { headerStyles } from './headerStyles'

export const Header = ({title}) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>{title}</Text>
    </View>
  )
}

