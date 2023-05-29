import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

// Images
import Logo from './assets/logo.svg'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-900 px-8 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        <Image source={Logo} />
        <View className="space-y-2">
          <Text className="font-tile text-center text-2xl leading-tight text-gray-50">
            Sua Cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            {' '}
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-title text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 🤍 no NLW da RocketSeat
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
