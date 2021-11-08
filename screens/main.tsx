import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Button,
  SafeAreaView,
} from "react-native";
import Hero from "../components/hero";

const Main = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, []);

  return (
    <SafeAreaView>
      <Animated.View>
        <Text>Hello</Text>
      </Animated.View>
      <View style={styles.container}>
        <Hero />
        <Button
          title="Click me"
          onPress={() => console.log("I have been clicked")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "green",
  },
});

export default Main;
