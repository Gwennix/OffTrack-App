import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NotificationsScreen() {
  return (
    <View>
      <Text>My notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
})