import { AuthProvider, useAuth } from "@/context/AuthProvider";
import { useRoute } from "@react-navigation/native";
import { Stack, useRouter, useSegments ,router} from "expo-router";
import { useEffect } from "react";

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments()
  const router = useRouter()
  useEffect(() => {
    const isAuthGroup = segments[0]==="(drawer)"
    console.log("auth changed",authState,isAuthGroup)
    if(!authState?.authenticated && isAuthGroup){
      console.log("WORKING AFTER THE CHNAGE ")
      router.replace("/SignOut")
      console.log(segments[0])
    }
    else if (authState?.authenticated === true ){
      router.replace("/(drawer)")
      console.log("drwaeer")
    }
    // console.log("the auth state", authState);
  }, [authState]);
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Login",
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};
export default function RootLayout() {
  // console.log("aaaa");
  // const { authState } = useAuth();
  // useEffect(() => {
  //   console.log("the auth state", authState);
  // }, [authState]);
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
}
