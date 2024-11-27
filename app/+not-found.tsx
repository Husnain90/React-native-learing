import { Link, Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

type Props = {};

const NotFoundScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View>Oops Not Found</View>
      <Link href="/(drawer)/tabs">Go back</Link>
    </>
  );
};

export default NotFoundScreen;
