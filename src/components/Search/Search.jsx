import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { searchStyles } from './searchStyles';

export const Search = ({ onSearch }) => {
  const [input, setInput] = useState('')

  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  }

  const clearInput = () => {
    setInput('')
    onSearch('')
  }
  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.inputContainer}>
        <TextInput
          style={searchStyles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Buscar producto..."
        />
        <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={25} color="black" />
        </Pressable>
        <Pressable onPress={clearInput}>
          <Entypo name="circle-with-cross" size={25} color="black" />
        </Pressable>
      </View>
    </View>
  )
}
