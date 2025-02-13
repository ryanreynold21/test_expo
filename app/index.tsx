import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className=' font-black text-3xl text-white'>Hello, index blah!</Text>
      <StatusBar />
      <Link href={'/home'} className='text-3xl text-white py-10'>This is home mf..</Link>
    </View>
  );
};

export default index;