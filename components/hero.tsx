import React, { useState } from "react";
import { View } from "react-native";
import Time from "./time";

export default function Hero() {
  const [refreshStamp, setRefreshStamp] = useState(new Date());

  return (
    <View>
      <Time last_refresh={refreshStamp} />
    </View>
  );
}
