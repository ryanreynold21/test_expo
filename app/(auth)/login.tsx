import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "@/components/ui/Cus_form";
import CustomButton from "@/components/ui/Cust_Btn";
import { Link } from "expo-router";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSunmit = () => {
    console.log(form);
  };
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
          <CustomButton
            containerStyle={"mt-16"}
            handlePress={handleSunmit}
            text="Login"
          />
          <View className=" mt-6 flex flex-row justify-center w-full gap-2">
            <Text className=" text-white/80 text-[14px] font-pextralight">
              Don't have an account?
            </Text>
            <Link href={"/sign_up"} className=" text-secondary">
              SignUp
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
