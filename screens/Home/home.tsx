import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Button,
  SafeAreaView,
} from "react-native";
import Hero from "../../components/hero";

const HomeScreen = () => {

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

export default HomeScreen
