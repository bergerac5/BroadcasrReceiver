import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Colors} from './constants/Colors'

export default function Button() {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: Colors.blue,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})