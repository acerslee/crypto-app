import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  last_refresh?: Date | string;
}

const Time: React.FC<Props> = ({ last_refresh }) => {
  const localTime = last_refresh?.toLocaleString();

  return (
    <View>
      <Text>{localTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  timeText: {},
});

export default Time;
