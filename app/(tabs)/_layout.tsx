import { Slot, Tabs } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../constants/icons";

const TabsLayout = () => {
  const TabIcon = ({ icon, color, name, focus }: any) => {
    return (
      <View className=" items-center justify-center gap-1">
        <Image
          // resizeMethod="contain"
          className=" w-6 h-6"
          tintColor={color}
          source={icon}
        />
        <Text
          style={{ color: color }}
          className={`${
            focus ? "font-psemibold" : "font-pregular"
          } text-[10px]`}
        >
          {name}
        </Text>
      </View>
    );
  };
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            height: 84,
            borderTopWidth: 1,
            borderTopColor: "#232533",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }: any) => (
              <TabIcon
                color={color}
                name={"Home"}
                icon={icons.home}
                focus={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmarks"
          options={{
            title: "Book",
            headerShown: false,
            tabBarIcon: ({ color, focused }: any) => (
              <TabIcon
                color={color}
                name={"Book"}
                icon={icons.bookmark}
                focus={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }: any) => (
              <TabIcon
                color={color}
                name={"Creat"}
                icon={icons.plus}
                focus={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }: any) => (
              <TabIcon
                focus={focused}
                color={color}
                name={"Profile"}
                icon={icons.profile}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
