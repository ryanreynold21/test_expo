import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="sign_up"
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
