import { Text, View, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function login() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  return (
    <ImageBackground source={require('../../../app/images/LoginScreen.png')} style={styles.background}>
      <View style={styles.container}>

        <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="black" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" secureTextEntry={true} value={password} onChangeText={setPassword} />

        <Button
          color="black" title="LOGIN"
          onPress={() => {
            if (email.trim() === "" || password.trim() === "") {
              setLoginError("Login details required.");
            } else {
              setLoginError(null);
              router.replace("/screens/tabs/home");
            }
          }}
        />

        {!!loginError && (
          <Text style={{ color: "red" }}>{loginError}</Text>
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
    justifyContent: "center",
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
