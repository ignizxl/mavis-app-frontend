import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MedicalHistoryScreen({ navigation }) {
  const medicalHistory = [
    {
      version: 1,
      medications: ["Paracetamol", "Ibuprofeno"],
      allergies: ["Poeira", "Amendoim"],
      preExistingConditions: ["Hipertensão"],
      createdAt: "2024-02-15T00:05:36.552Z",
    },
    {
      version: 1,
      medications: ["Dipirona"],
      allergies: ["Lactose"],
      preExistingConditions: ["Diabetes"],
      createdAt: "2024-01-10T00:05:36.552Z",
    }
  ];

  return (
    <View className="flex-1 bg-gray-100 p-6 mt-6">
      <View className="items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800">Histórico Médico</Text>
        <Text className="text-gray-600 mt-2 text-center">
          Aqui você pode visualizar seu histórico médico de forma rápida e prática.
        </Text>
      </View>

      <FlatList
        data={medicalHistory}
        keyExtractor={(item) => item.createdAt}
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-3 rounded-xl shadow-md">
            <Text className="text-lg font-semibold text-gray-800">
              Data: {new Date(item.createdAt).toLocaleDateString()}
            </Text>
            <Text className="text-gray-600">
              Medicamentos: {item.medications.length ? item.medications.join(', ') : 'Nenhuma'}
            </Text>
            <Text className="text-gray-600">
              Alergias: {item.allergies.length ? item.allergies.join(', ') : 'Nenhuma'}
            </Text>
            <Text className="text-gray-600">
              Condições pré-existentes: {item.preExistingConditions.length ? item.preExistingConditions.join(', ') : 'Nenhuma'}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        className="bg-green-600 py-4 mb-2 rounded-xl flex-row justify-center items-center"
        onPress={() => navigation.navigate('AddMedicalHistoryScreen')}
      >
        <Ionicons name="add-circle" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">Adicionar Registro</Text>
      </TouchableOpacity>

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
