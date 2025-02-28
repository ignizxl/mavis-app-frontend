import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <View className="flex-1 justify-center">
        <Text className="text-2xl font-bold text-gray-800">Olá! Bem-vindo(a) de volta!</Text>
        <Text className="text-gray-600 mt-2">
          Escolha uma das opções abaixo para navegar pelo MAVIS e acessar suas funcionalidades.
        </Text>
      </View>

      <View className="mb-6">
        <TouchableOpacity
          className="bg-red-500 py-4 rounded-xl flex-row justify-center items-center"
          onPress={() => alert('Emergência disparada!')}
        >
          <Ionicons name="warning" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Disparar Emergência</Text>
        </TouchableOpacity>
      </View>

      <View className="space-y-6">
        <TouchableOpacity
          className="bg-blue-900 py-4 mb-6 rounded-xl flex-row justify-center items-center"
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Ionicons name="person" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Perfil de Saúde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-900 py-4 mb-6 rounded-xl flex-row justify-center items-center"
          onPress={() => navigation.navigate('EmergencyContactsScreen')}
        >
          <Ionicons name="call" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Contatos de Emergência</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-900 py-4 mb-6 rounded-xl flex-row justify-center items-center"
          onPress={() => navigation.navigate('MedicalHistoryScreen')}
        >
          <Ionicons name="document-text" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Histórico Médico</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-8">
        <View className="flex-row justify-around bg-white py-4 rounded-t-xl shadow-md">
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons name="home" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Ionicons name="person" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MedicalHistoryScreen')}>
            <Ionicons name="document-text" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EmergencyContactsScreen')}>
            <Ionicons name="call" size={28} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
