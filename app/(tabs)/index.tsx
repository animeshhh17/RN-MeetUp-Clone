import { Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <View className="gap-3 p-3">
        <View className="flex-row">
          <View className="flex-1 gap-2">
            <Text className="text-lg font-semibold uppercase text-amber-800 ">
              Wed 13 Sep . 190 CET
            </Text>
            <Text className="text-xl font-bold" numberOfLines={2}>
              This is the Title
            </Text>
            <Text className="text-gray-700">City hall</Text>
          </View>
          <Image
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg' }}
            className="aspect-video w-2/5 rounded-xl"
          />
        </View>
        <View className="flex-row gap-3">
          <Text className="mr-auto text-gray-700">16 going</Text>
          <Feather name="share" size={24} color="grey" />
          <Feather name="bookmark" size={24} color="grey" />
        </View>
      </View>
    </>
  );
}
