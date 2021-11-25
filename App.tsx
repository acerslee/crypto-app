import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import OpeningScreen from "./screens/Opening";
import MainStack from "./screens/Router";

export default function App() {

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
