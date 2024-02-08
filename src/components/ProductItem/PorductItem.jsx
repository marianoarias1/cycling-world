import { View, Text } from 'react-native'
import React from 'react'
import { Card } from '../Card/Card'
import { productItemStyles } from './productItemStyles'

export const PorductItem = ({product}) => {
  return (
    <Card>
        <Text style={productItemStyles.text}>{product.title}</Text>
    </Card>
  )
}
