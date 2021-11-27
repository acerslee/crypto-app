import React, { useState } from "react";
import { Text, View } from "react-native";
import Time from "./time";
import Search from "./search";

export default function Hero() {
  return (
    <View>
      <Time />
      <Search />
    </View>
  );
}
