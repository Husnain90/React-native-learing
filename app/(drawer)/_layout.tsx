
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="tabs"
        screenOptions={{
        
          drawerStyle: {
            backgroundColor: "lightgray", 
            width: 240, 
          },
       
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "black",
          },
        }}
      >
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: "Home",
            title: "overview",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
          }}
        />
        <Drawer.Screen
          name="setting"
          options={{
            drawerLabel: "Setting",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default DrawerLayout;