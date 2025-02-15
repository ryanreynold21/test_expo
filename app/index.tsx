import { Link, router } from "expo-router";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/ui/Cust_Btn";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, height: "100%" }}>
        <View className=" h-full w-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className=" w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className=" max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className=" relative mt-5 px-4">
            <Text className=" text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className=" text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className=" w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className=" text-white/80 text-md mt-5 font-pregular text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            // isLoading={true}
            handlePress={() => router.push("/login")}
            text={"Continue with Email"}
            containerStyle={" mt-5"}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={"#161622"} style={"light"} />
    </SafeAreaView>
  );
};

export default index;
