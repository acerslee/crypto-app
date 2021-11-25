import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack, {AuthParamsList} from "./Auth/Router";
import OpeningScreen from "./Opening";

const Stack = createNativeStackNavigator()

export type MainParamsList = AuthParamsList

const MainStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Opening'} component = {OpeningScreen} />
            <Stack.Screen name={'Auth'} component={AuthStack} />
        </Stack.Navigator>
    )
}

export default MainStack
