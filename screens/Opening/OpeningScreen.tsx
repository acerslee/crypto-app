import React from "react"
import { View, StyleSheet, Button } from 'react-native'


const OpeningScreen = ({navigation}) => {

    const goToLoginScreen = () => {
        navigation.navigate('Auth', {
            screen: 'Login',
        })
    }

    const goToSignupScreen = () => {
        navigation.navigate('Auth', {
            screen: 'CreateAccount',
        })
    }

    const goToHomeScreen = () => {
        console.log('hello')
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <Button
                    onPress={goToLoginScreen}
                    title={"Login"}
                />
                <Button
                    onPress={goToSignupScreen}
                    title={"Signup"}
                />
                <Button
                    onPress={goToHomeScreen}
                    title={"Continue as guest"}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
    },
    buttonContainer: {
    },
})

export default OpeningScreen;
