import { Text, View, Button, ImageBackground, StyleSheet, TextInput } from 'react-native';
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  return (
    <ImageBackground source={require('../../../app/images/LoginScreen.png')} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button
          color="black"
          title="LOGIN"
          onPress={async () => {
            if (email.trim() === "" || password.trim() === "") {
              setLoginError("Login details required.");
            } else {
              const storedEmail = await AsyncStorage.getItem('user');
              const storedPassword = await AsyncStorage.getItem('password');
          
              if (!storedEmail || !storedPassword) {
                setLoginError("No registered user found.");
                return;
              }
          
              if (email === storedEmail && password === storedPassword) {
                setLoginError(null);
                router.push("/screens/tabs/Home");    
              } else {
                setLoginError("Incorrect email or password.");
              }
            }
          }}
          
        />

        {!!loginError && (
          <Text style={{ color: "red", marginTop: 10 }}>{loginError}</Text>
        )}

        <Text style={styles.text} onPress={() => router.replace("/screens/auth/register")}>
          Don’t have an account? Sign up
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 25,
  },

  input: {
    height: 40,
    backgroundColor: "white",
    opacity: 0.8,
    marginBottom: 15,
    paddingHorizontal: 100,
  },

  text: {
    color: "white",
  },

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
