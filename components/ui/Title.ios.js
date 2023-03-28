import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    fontFamily: "open-sans-bold",
    width: 300,
  },
});
export default Title;
