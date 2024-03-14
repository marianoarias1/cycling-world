import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabNavigator } from './TabNavigator'
import { AuthStack } from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../services/shopService'
import { setProfileImage, setUser, setUserLocation } from '../features/auth/authSlice'
import { fetchSessions } from '../db'

export const MainNavigator = () => {
    //const [user, setUser] = useState(false)
    const {user, localId} = useSelector(state => state.authReducer.value)
    const {data, error, isLoading} = useGetProfileImageQuery(localId)
    const {data: location } = useGetUserLocationQuery(localId);
    const dispatch = useDispatch();
  
    useEffect(()=>{
      (async ()=>{
        try {
          const session = await fetchSessions();
          if(session?.rows.length){
            const user = session.rows._array[0]
            dispatch(setUser(user))
          }
        } catch (error) {
          console.log(error.message)
        }
      })()
    },[])

    useEffect(()=> {
      if(data) {
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
