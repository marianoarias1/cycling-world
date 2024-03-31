import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { inputStyles } from './inputStyles'

export const InputForm = ({label,error, onChange, isSecure}) => {
    const [input, setInput] = useState("")

    const onChangeText=(text)=>{
        setInput(text)
        onChange(text)
    }


  return (
    <View style={inputStyles.inputContainer}>
      <Text style={inputStyles.subtitle}>{label}</Text>
      <TextInput value={input} onChangeText={onChangeText} secureTextEntry={isSecure} style={inputStyles.input}/>
      {
        error ? (
            <Text style={inputStyles.error}>
                {error}
            </Text>
        )
        :
        (
            null
        )
      }
    </View>
  )
}
