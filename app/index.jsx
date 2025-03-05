import './styles/global.css';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from "expo-router";


export default function App() {

    const router = useRouter()

return (
<ImageBackground source={require('./images/WelcomeScreen.png')} style={styles.background}>
<View style={styles.container}>
    <Text style={styles.title}>{'Explore a \nnew world \nwith us'}
</Text>
    
    <Button color="black" title="register" onPress={() => router.push("/screens/auth/register") }/>
    <Button color="black" title="login" onPress={() => router.push("/screens/auth/login") }/>
    <Button color="black" title="Ga baar de app" onPress={() => router.replace("/screens/tabs/home") }/>

</View>
</ImageBackground>
);

}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: "white"
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    background: {
        height: 880,
        width: 440,
    }
})



