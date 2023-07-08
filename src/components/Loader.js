import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { color } from '../utills/colors'

const Loader=({color='#000'})=> {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size={"small"} color={color} />
  </View>
  )
}

export default Loader