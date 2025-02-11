import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className=' text-3xl text-white'>Hello, index blah!</Text>
      <StatusBar />
      <Link href={'/about'}>This is about mf..</Link>
    </View>
  );
};

export default index;