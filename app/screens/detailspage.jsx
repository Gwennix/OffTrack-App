import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import data from '../data';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function detailsPage() {
  const [weather, setWeather] = useState(null);
  const { id } = useLocalSearchParams();
  const trip = data.find((item) => item.id === parseInt(id));

  const city = trip.city;

  const apiKey = '35da24e1d8cce5d8e9bba336c14edc92';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=nl`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Fout bij ophalen van het weer:', error);
      });
  }, [city]); 

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
       
        <Text style={styles.text}>{trip.city}</Text>

        {trip ? (
          <Image style={styles.thumbnail} source={trip.img} />
        ) : (
          <Text>Trip not found</Text>
        )}

      <Text>{trip.day_1}</Text>
      <Text>{trip.day_2}</Text>

    {weather ? (

     <View>
     <Text>🌡️: {Math.round(weather.main.temp)}°C</Text>
     <Text>☁️: {weather.weather[0].description}</Text>
     </View>
     ) : (
     <Text>Weather is being loaded...</Text>
     )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    padding: 10,
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
});
