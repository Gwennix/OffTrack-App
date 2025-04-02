import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={require('../../../app/images/enterprise.png')} />
      <Text>My Trips</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },

    banner: {
      resizeMode: "contain",
      width: "100%",
    }
})