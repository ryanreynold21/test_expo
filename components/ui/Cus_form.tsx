import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../../constants/icons";

interface formProps {
  title: string;
  value: string;
  handleChanges: (e: any) => void;
  otherStyle: string;
  keyboardType?: string;
  placeHolder?: string;
}

const FormField = ({
  title,
  value,
  handleChanges,
  otherStyle,
  placeHolder,
  keyboardType,
}: formProps) => {
  const [show, setshow] = useState(false);
  return (
    <View className={`${otherStyle} space-y-2`}>
      <Text className=" text-base font-pmedium text-white/60">{title}</Text>
      <View className=" h-16 w-full bg-black-100 border-2 border-black-200 px-4 rounded-2xl focus:border-secondary flex-row items-center">
        <TextInput
          value={value}
          onChangeText={handleChanges}
          placeholder={`Enter your ${title}`}
          placeholderTextColor="#7b7b8b"
          className=" flex-1 text-white font-psemibold text-base"
          secureTextEntry={!show && title === "Password"}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setshow(!show)}>
            <Image
              resizeMode="contain"
              className=" w-6 h-6"
              source={show ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
