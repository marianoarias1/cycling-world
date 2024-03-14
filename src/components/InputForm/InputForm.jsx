import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export const InputForm = ({label,error, onChange, isSecure}) => {
    const [input, setInput] = useState("")

    const onChangeText=(text)=>{
        setInput(text)
        onChange(text)
    }


  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={input} onChangeText={onChangeText} secureTextEntry={isSecure}/>
      {
        error ? (
            <Text>
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
