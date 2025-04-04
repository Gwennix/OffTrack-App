import {FlatList, Text, StyleSheet, View,} from 'react-native';
import data from '../../data';
import Details from '../components/Details';
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try { 
        const storedUser = await AsyncStorage.getItem('user');

        if (storedUser) {
          setUsername(storedUser);
        }

      } catch (e) {
        console.error("Kan gebruiker niet vinden", e);
      }
    };

    fetchUsername();
  }, []);

  return (
    <View style={styles.container}>

     {username ? ( <Text style={styles.username}>Welcome, {username}!</Text>  ) : ( <Text style={styles.username}>...</Text> )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Details trip={item}></Details>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  thumbnail: {
    width: 410,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    margin: 5,
  },

  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  date: {
    marginLeft: 5,
    color: 'grey',
    marginBottom: 15,
    fontSize: 12,
  },
});
