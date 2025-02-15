import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
interface props {
  text: string;
  handlePress: () => void;
  containerStyle: string;
  textStyle?: string;
  isLoading?: boolean;
}
const CustomButton = ({
  text,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.1}
      disabled={isLoading}
      onPress={handlePress}
      className={`bg-secondary ${isLoading ? " opacity-50" : ""} rounded-xl w-full min-h-[58px] justify-center items-center ${containerStyle}`}
    >
      <Text className={`text-lg font-pregular font-[600] text-center ${textStyle}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
