import React, { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "@/components/ui/Cus_form";
import CustomButton from "@/components/ui/Cust_Btn";
import { Link, router } from "expo-router";
import { CreateAccount } from "../../lib/appwrite";

const SignUp = () => {
  const [isPanding, setIsPanding] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSunmit = async () => {
    if (!form.username || !form.password || !form.email) {
      Alert.alert("Error", "Please fill all Field");
    }
    setIsPanding(true);
    try {
      const response = await CreateAccount(
        form.email,
        form.password,
        form.username
      );

      router.replace("/home")
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsPanding(false);
    }
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
            SignUp to Aora
          </Text>
          <FormField
            handleChanges={(e: any) => setForm({ ...form, username: e })}
            title="UserName"
            value={form.username}
            otherStyle="mt-7"
            // keyboardType="username"
          />
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
            text="SignUp"
            isLoading={isPanding}
          />
          <View className=" mt-6 flex flex-row justify-center w-full gap-2">
            <Text className=" text-white/80 text-[14px] font-pextralight">
              Already Have An Account!
            </Text>
            <Link href={"/login"} className=" text-secondary">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
