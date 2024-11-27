import { useAuth } from "@/context/AuthProvider";
import { useSegments } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const Login = (props: Props) => {
  const segments = useSegments()
  console.log("the segmet",segments)
  const { onLogin } = useAuth();

  const loginAsUser = async () => {
    console.log("login button pressed")
    onLogin!("user", "user");
  };
  const loginAsAdmin = async () => {
    onLogin!("admin", "admin");
  };
  return (
   
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>helo</Text>
      <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 10 }}
        onPress={loginAsUser}
      >
        <Text>Login as User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 10,  marginTop:5}}
        onPress={loginAsAdmin}
      >
        <Text>Login as Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
