import { Text, View, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <ImageBackground source={require('../../../app/images/LoginScreen.png')} style={styles.background}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="black" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" secureTextEntry={true} />

        <Button color="black" title="LOGIN" onPress={() => router.replace("/screens/tabs/home")} />
        <Text style={styles.text} onPress={() => router.replace("/screens/auth/register")}>Don’t have an account? Sign up</Text>
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