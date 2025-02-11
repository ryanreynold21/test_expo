import { Slot, Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import "../global.css"

const rootLayout = () => {
  return (
    <>
    {/* <Text>Header</Text>
      <Slot />
    <Text>footer</Text> */}
    <Stack>
        <Stack.Screen name="index" options={{headerShown : false}} />
    </Stack>
    </>
  );
};

export default rootLayout;
