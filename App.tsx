import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-5xl font-bold text-zinc-50">Rafael Brito</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
