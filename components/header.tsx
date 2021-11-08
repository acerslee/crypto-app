import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  intro: {
    fontSize: 20,
  },
});

export default Header;
