import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "@/components/ui/Cus_form";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView>
        <View className="  w-full justify-center items-cente h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className=" w-[115px] h-[35px]"
          />
          <Text className=" text-2xl text-white font-semibold mt-10 font-psemibold">
            Login to Aora
          </Text>
          <FormField
            handleChanges={(e: any) => setForm({ ...form, email: e })}
            title="Email"
            value={form.email}
            otherStyle="mt-7"
            keyboardType="email-address"
          />
          <FormField
            handleChanges={(e: any) => setForm({ ...form, password: e })}
            title="Password"
            value={form.password}
            otherStyle="mt-7"
            // keyboardType="password"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
