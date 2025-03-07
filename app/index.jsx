import './styles/global.css';
import { Text, View, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from "expo-router";


export default function App() {

    const router = useRouter()

return (
<ImageBackground source={require('./images/WelcomeScreen.png')} style={styles.background}>
<View style={styles.container}>
    <Text style={styles.title}>{'Explore a \nnew world \nwith us'}
</Text>
    
<Pressable style={styles.start} onPress={() => router.push("/screens/auth/register")}>
<Text style={styles.startText}>Register</Text>
</Pressable>

<Pressable style={styles.start} onPress={() => router.push("/screens/auth/login")}>
<Text style={styles.startText}>Login</Text>
</Pressable>

</View>
</ImageBackground>
);

}

const styles = StyleSheet.create({
    title:{
        flex: 1,
        alignSelf: "flex-start",
        fontSize: 48,
        marginHorizontal: 20,
        marginTop: 300,
        color: "white"
    },

    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },

    start: {
        height: 40,
        width: "80%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        borderRadius: 5,
      },

    startText: {
        color: "white",
        fontSize: 16,
    },

    background: {
        height: 880,
        width: 440,
    }
})



