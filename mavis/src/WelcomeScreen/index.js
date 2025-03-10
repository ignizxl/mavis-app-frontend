import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-2xl font-bold text-gray-900 text-center mb-5">Bem-vindo(a) ao MAVIS!</Text>
      <Text className="text-base text-gray-700 text-center mb-10 px-4">
        Cuidando de quem mora sozinho. O MAVIS ajuda a garantir a sua segurança
        e tranquilidade ao conectar você com seus familiares em momentos de
        necessidade. Configure seu perfil e comece a aproveitar o suporte que
        você merece.
      </Text>
      <TouchableOpacity 
        className="w-full bg-blue-900 py-3 rounded-lg items-center" 
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text className="text-white text-lg font-bold">Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
