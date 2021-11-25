import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateAccountScreen from './CreateAccount'
import LoginScreen from './Login'
import { useScreenHistory } from '../../contextApi/screenHistory'

export type AuthParamsList = {
    Login: undefined
    CreateAccount: undefined
}

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    const { setToCurrentScreen } = useScreenHistory()

    return(
        <Stack.Navigator>
            <Stack.Screen
                name={'Login'}
                component={LoginScreen}
                listeners={{ focus: () => setToCurrentScreen('Login Screen')}}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name={'CreateAccount'}
                component={CreateAccountScreen}
                listeners={{ focus: () => setToCurrentScreen('Create Account Screen')}}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default AuthStack
