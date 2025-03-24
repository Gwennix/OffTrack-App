import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from "expo-image-picker";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function NewScreen() {
  const [diaryEntry, setDiaryEntry] = useState({
    location: "",
    duration: "",
    entry: "",
    country: "",
    image: null,
  });

    const handleInputChange = (field, value) => {
    setDiaryEntry({ ...diaryEntry, [field]: value });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setDiaryEntry({ ...diaryEntry, image: result.assets[0].uri });
    }
  };

  const handleSubmit = () => {
    console.log("Opgeslagen:", diaryEntry);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.container}>
        <Text style={styles.header}>📚 New diary entry</Text>

        <Text style={styles.label}>Location of vacation</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={formData.location}
          onChangeText={(text) => handleInputChange("location", text)}
        />

        <Text style={styles.label}>Country</Text>
        <Picker
          selectedValue={diaryEntry.country}
          onValueChange={(itemValue) => handleInputChange("country", itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Belgium" value="Belgium" />
          <Picker.Item label="Italy" value="Italy" />
          <Picker.Item label="Netherlands" value="Netherlands" />
          <Picker.Item label="France" value="France" />
        </Picker>

        <Text style={styles.label}>Banner image</Text>

        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {diaryEntry.image ? <Image source={{ uri: diaryEntry.image }} style={styles.image} /> : <Text style={styles.plus}>+</Text>}
        </TouchableOpacity>

        <Text style={styles.label}>Duration</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter duration"
          value={diaryEntry.duration}
          onChangeText={(text) => handleInputChange("duration", text)}
        />

        <Text style={styles.label}>Diary Entry</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Tekst here"
          value={diaryEntry.entry}
          onChangeText={(text) => handleInputChange("entry", text)}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },

  textArea: {
    height: 100,
  },

  picker: {
    marginBottom: 10,
  },

  imagePicker: {
    width: "100%",
    height: 150,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },

  button: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },

  plus: {
    fontSize: 40,
    color: "#aaa",
  },
  
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});