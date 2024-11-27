import { useAuth } from "@/context/AuthProvider";
import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

type Props = {};

const profile = (props: Props) => {
  const { authState, onLogout } = useAuth();
  const Logout = async () => {
    onLogout!();
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile screen</Text>
      <Link href="/tabs/about">Go to About </Link>
      <Button title="Logout" onPress={Logout} />
    </View>
  );
};

export default profile;
