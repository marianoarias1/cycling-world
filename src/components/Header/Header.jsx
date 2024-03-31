import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { headerStyles } from './headerStyles'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { deleteSessions } from '../../db';

export const Header = ({ title }) => {
  const { localId, user } = useSelector(state => state.authReducer.value)
  const dispatch = useDispatch()

  const onLogout = async () => {
    dispatch(logout())
    const deletedSession = await deleteSessions({ localId })
  }
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>{title}</Text>
      {user ? (
        <Pressable style={headerStyles.buttonLogout} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </Pressable>
      )
      :
      null
    }
    </View>
  )
}

