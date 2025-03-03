import { ScreenFooter } from "react-native-screens"
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';


export default function App() {

return (
<ImageBackground source={require('./images/background.jpg')} style={styles.background}>
<View style={styles.container}>
    <Text style={styles.title}>extremely cute cat</Text>
    <Image style={styles.image} source={require('./images/cat.jpg')} />
</View>
</ImageBackground>
);

}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: "blue"
    },

    container: {
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 200,
        width: 200
    },
    background: {
        height: 880,
        width: 440
    }
})



