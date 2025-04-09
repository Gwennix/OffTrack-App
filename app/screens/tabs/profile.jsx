import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Details from '../components/Details';
import data from '../../data';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={require('../../../app/images/enterprise.png')} />
      <Image style={styles.profile} source={require('../../../app/images/enterprise.png')} />
      <Text style={styles.name}>Gwen</Text>
      <Text style={styles.pronouns}>zij/haar</Text>
      <View style={styles.infoBorder}>
      <Text style={styles.info}>Gwen is a travel enthusiast with a deep passion for planes and aviation. Whether she's exploring new destinations or watching aircraft take off, she’s always captivated by the thrill of the journey. From planning her next trip to learning about different airlines and airports, Gwen finds joy in every aspect of travel. For her, the sky is not the limit—it’s just the beginning!</Text>
      </View>
      <Text style={styles.favorites}>❤️ My Favorites</Text>
      <FlatList style={styles.favoritesFlatlist}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
          <Details trip={item}></Details>
          </View>
        )}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },

    banner: {
      width: '100%',
      height: 180,
      resizeMode: 'cover',
    },

    profile: {
      position: 'absolute',
      top: 120,
      width: 120,
      height: 120,
      marginLeft: 20,
      borderRadius: 70,
      borderWidth: 3,
      borderColor: '#fff',
      elevation: 10,
    },

    name: {
      top: 60,
      fontSize: 25,
      fontWeight: 'bold',
    }, 

    pronouns: {
      top: 50,
      color: 'gray',
      fontSize: 12,
    },

    info: {
      fontSize: 14,
      textAlign: 'center',
    },

    infoBorder: {
      top: 50,
      marginVertical: 15,
      marginHorizontal: 15,
      marginTop: 15,
      padding: 5,
      borderRadius: 10,
      borderColor: 'lightgray',
      backgroundColor: '#fff',
      width: '90%',
      elevation: 2,
    },

    favorites: {
      top: 60,
      fontWeight: "bold",
    },

    item: {
      flex: 1,
      flexDirection: 'flow',
      width: 200,
      height: 100,
    },

    favoritesFlatlist: {
      top: 70,
      paddingHorizontal: 10,
    },

})