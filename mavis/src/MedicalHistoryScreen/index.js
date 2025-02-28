import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function MedicalHistoryScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-gray-800">Histórico Médico</Text>
        <Text className="text-gray-600 mt-2 text-center">
          Aqui você pode visualizar seu histórico médico de forma rápida e prática.
        </Text>
      </View>

      <View className="space-y-6">
        <TouchableOpacity
          className="bg-blue-900 py-4 mb-6 rounded-xl flex-row justify-center items-center"
          onPress={() => alert('Detalhes do Registro 1')}
        >
          <Ionicons name="document-text" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Consulta - 15/02/2024</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-900 py-4 mb-6 rounded-xl flex-row justify-center items-center"
          onPress={() => alert('Detalhes do Registro 2')}
        >
          <Ionicons name="document-text" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Exame de Sangue - 10/01/2024</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-6">
        <TouchableOpacity
          className="bg-green-600 py-4 mb-6 rounded-xl flex-row justify-center items-center"
          onPress={() => alert('Adicionar Novo Registro')}
        >
          <Ionicons name="add-circle" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Adicionar Registro</Text>
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
