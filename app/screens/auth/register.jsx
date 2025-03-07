import { Text, View, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  return (
    <ImageBackground source={require('../../../app/images/RegisterScreen.png')} style={styles.background}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="black" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" secureTextEntry={true} value={password} onChangeText={setPassword} />
        <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="black" secureTextEntry={true} value={confirmPassword}  onChangeText={setConfirmPassword} />

        <Button color="black" title="CREATE ACCOUNT" onPress={() => {
            if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
              setLoginError("login details are required.");
            } else if (password !== confirmPassword) {
              setLoginError("Passwords do not match.");
            } else {
              setLoginError(null);
              router.replace("/screens/tabs/home");
            }
          }} 
        />
         
         {!!loginError && (
          <Text style={{ color: "red" }}>{loginError}</Text>
        )}

        <Text onPress={() => router.replace("/screens/auth/login")}>Already have an account? Sign in</Text>
        
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

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});