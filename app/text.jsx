import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function index() {
    const [name, setName] = useState('');
    
    useEffect(() => {
        getData()
    }, [])


    const saveData = async () => {
        try{
            await AsyncStorage.setItem('username', name);
            alert('naam is opgeslagen');
        }
        catch(error){
            console.error('Fout bij ophalen', error)
        }
    }

    const getData = async () => {
        try{
            const storedName = await AsyncStorage.getItem('username', name);
            if(storedName){
                setName(storedName)
            }
        }
        catch(error){
            console.error('Fout bij ophalen', error)
        }
    }


  return (
    <View style={styles.container}>
      <Text>Voer je naam in:</Text>
      <TextInput
        style={styles.input}
        placeholder="Naam"
        value={name}
        onChangeText={setName}
      />
      <Button title="Opslaan" onPress={saveData}/>
      <Text>Opgeslagen naam: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },

});