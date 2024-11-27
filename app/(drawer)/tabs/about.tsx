import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const about = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello im in the about screen</Text>
    </View>
  );
};
export default about;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
  },
});
