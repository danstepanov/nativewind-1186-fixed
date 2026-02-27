import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { vars } from "nativewind";

import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1 bg-white" contentContainerClassName="items-center px-6 pt-16 pb-12">
        <Text className="text-xl font-bold mb-2">Issue #1186</Text>
        <Text className="text-sm text-gray-400 mb-8">
          vars() + TextInput placeholder removes text-color
        </Text>

        <Text className="text-sm text-gray-500 mb-2 self-start">
          Case 1: text-input with vars (purple text)
        </Text>
        <View style={vars({ "--color-input": "purple" })} className="w-full mb-6">
          <TextInput
            className="text-input border border-gray-300 rounded-lg px-4 py-3"
            defaultValue="Purple text"
          />
        </View>

        <Text className="text-sm text-gray-500 mb-2 self-start">
          Case 2: text-blue-500 + placeholder:text-red-500
        </Text>
        <TextInput
          className="text-blue-500 placeholder:text-red-500 border border-gray-300 rounded-lg px-4 py-3 w-full mb-6"
          placeholder="Red placeholder"
          defaultValue="Blue text"
        />

        <Text className="text-sm text-gray-500 mb-2 self-start">
          Case 3 (bug case): text-input + placeholder:text-red-500
        </Text>
        <View style={vars({ "--color-input": "purple" })} className="w-full mb-6">
          <TextInput
            className="text-input placeholder:text-red-500 border border-gray-300 rounded-lg px-4 py-3"
            placeholder="Red placeholder"
            defaultValue="Purple text (was broken in #1186)"
          />
        </View>

        <Text className="text-sm text-gray-500 mb-2 self-start">
          Case 4: text-green-500 (basic Tailwind)
        </Text>
        <TextInput
          className="text-green-500 border border-gray-300 rounded-lg px-4 py-3 w-full mb-6"
          defaultValue="Green text"
        />

        <View className="bg-green-100 rounded-lg p-4 w-full mt-4">
          <Text className="text-green-800 font-bold mb-1">All cases pass</Text>
          <Text className="text-green-700 text-sm">
            Fixed in Nativewind 4.2.2 + Expo SDK 54
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
