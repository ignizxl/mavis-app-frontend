import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation, userProfile }) {
  const defaultProfile = {
    fullName: "Maria Clara Silva",
    dateOfBirth: "1990-07-15",
    phoneNumber: "79890616179",
    address: {
      street: "Rua das Flores",
      number: "123",
      neighborhood: "Centro",
      city: "Brasília",
      state: "DF",
      postalCode: "71714-716",
      referencePoint: "Próximo à praça central"
    }
  };

  const profile = userProfile || defaultProfile;

  return (
    <View className="flex-1 bg-gray-100 p-6 mt-8">
      <View className="items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800">Meu Perfil</Text>
        <Text className="text-gray-600 mt-2 text-center">
          Aqui você pode visualizar e editar suas informações.
        </Text>
      </View>

      <View className="bg-white p-4 rounded-xl shadow-md mb-4">
        <Text className="text-lg font-semibold text-gray-800">Nome: {profile.fullName}</Text>
        <Text className="text-gray-600">Nascimento: {new Date(profile.dateOfBirth).toLocaleDateString()}</Text>
        <Text className="text-gray-600">Telefone: {profile.phoneNumber}</Text>
        <Text className="text-lg font-semibold text-gray-800">Endereço</Text>
        <Text className="text-gray-600">Rua: {profile.address.street}, {profile.address.number}</Text>
        <Text className="text-gray-600">Bairro: {profile.address.neighborhood}</Text>
        <Text className="text-gray-600">Cidade: {profile.address.city} - {profile.address.state}</Text>
        <Text className="text-gray-600">CEP: {profile.address.postalCode}</Text>
        <Text className="text-gray-600">Referência: {profile.address.referencePoint}</Text>
      </View>

      <View className="space-y-6">
        <TouchableOpacity
          className="bg-blue-900 py-4 mb-6 mt-6 rounded-xl flex-row justify-center items-center"
          onPress={() => navigation.navigate('EditProfileScreen', { profile })}
        >
          <Ionicons name="create" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Editar Perfil</Text>
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
