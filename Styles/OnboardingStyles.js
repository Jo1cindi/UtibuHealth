import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window')

const OnboardingStyles = StyleSheet.create({
     splashStyle: {
        backgroundColor: '#DDDDDD',
        height: height,
        width: width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     },
     logo: {
       width: 200,
       height: 200,
       resizeMode: 'contain'
     }
})

export default OnboardingStyles;