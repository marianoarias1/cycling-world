import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabNavigator } from './TabNavigator'
import { AuthStack } from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../services/shopService'
import { setProfileImage, setUserLocation } from '../features/auth/authSlice'

export const MainNavigator = () => {
    //const [user, setUser] = useState(false)
    const {user, localId} = useSelector(state => state.authReducer.value)
    const {data, error, isLoading} = useGetProfileImageQuery(localId)
    const {data: location } = useGetUserLocationQuery(localId);
    const dispatch = useDispatch();
  
    useEffect(()=> {
      if(data) {
        console.log(data.image);
        dispatch(setProfileImage(data.image))
      }
      if(location) {
        dispatch(setUserLocation(location))
      }
    }, [data, location])
  return (
    <NavigationContainer> 
       { user ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
    )
  
}
