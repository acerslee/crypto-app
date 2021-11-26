import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Time = () => {

  const fetchTimeHour = () => {
    let time = new Date()

    if (time.getHours() >= 5 && time.getHours() < 12) return 'Good Morning'
    if (time.getHours() >= 12 && time.getHours() < 19) return 'Good Afternoon'
    if (time.getHours() >= 19 && time.getHours() < 5) return 'Good Evening'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{fetchTimeHour()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 24,
  },
});

export default Time;
