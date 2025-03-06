import { Text, View, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <ImageBackground source={require('../../../app/images/RegisterScreen.png')} style={styles.background}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="black" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="black" secureTextEntry={true} />

        <Button color="black" title="CREATE ACCOUNT" onPress={() => router.replace("/screens/tabs/home")} />
        <Text onPress={() => router.replace("/screens/auth/login")}>Already have an account? Sign in</Text>
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
    borderColor: 'white',
    borderWidth: 1,
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