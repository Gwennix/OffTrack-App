import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import data from '../../data';

const Details = ({ trip }) => {
  const router = useRouter();

  const navigateTodetailspage = () => {
    router.push(`/screens/detailspage?id=${trip.id}&name=${trip.name}`);
  };

  return (
    <View>
      <Pressable onPress={navigateTodetailspage}>
        <Image style={styles.thumbnail} source={trip.img} />
      </Pressable>
      <Text style={styles.date}>{trip.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Details;
