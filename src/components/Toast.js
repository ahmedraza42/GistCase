import React from 'react'
import {ToastAndroid, Platform} from 'react-native';
export const showToast = msg => {
  return (
    ToastAndroid.show(msg,ToastAndroid.SHORT)
  )
}

