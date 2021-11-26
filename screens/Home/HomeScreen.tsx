import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Hero from "../../components/hero";

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Hero />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "green",
  },
});

export default HomeScreen
