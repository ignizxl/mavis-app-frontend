import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await api.get('/users/profiles');
      setProfile(response.data);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      setError('Erro ao carregar perfil');
      
      if (error.response?.status === 401) {
        await AsyncStorage.removeItem('token');
        navigation.navigate('LoginScreen');
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-600 text-lg">{error}</Text>
        <TouchableOpacity 
          className="mt-4 bg-blue-900 p-3 rounded-lg"
          onPress={fetchProfile}
        >
          <Text className="text-white">Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!profile) return null;

  return (
    <View className="flex-1 bg-gray-100 p-6 mt-8">
      <View className="items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800">Meu Perfil</Text>
        <Text className="text-gray-600 mt-2 text-center">
          Aqui você pode visualizar e editar suas informações.
        </Text>
      </View>

      <View className="bg-white p-4 rounded-xl shadow-md mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          Nome: {profile.fullName}
        </Text>
        
        <Text className="text-gray-600">
          Nascimento: {new Date(profile.dateOfBirth).toLocaleDateString()}
        </Text>

        <Text className="text-gray-600">
          Telefone: {profile.phoneNumber}
        </Text>

        <Text className="text-lg font-semibold text-gray-800 mt-3">Endereço</Text>
        <Text className="text-gray-600">
          {profile.address.street}, {profile.address.number}
        </Text>
        <Text className="text-gray-600">{profile.address.neighborhood}</Text>
        <Text className="text-gray-600">
          {profile.address.city} - {profile.address.state}
        </Text>
        <Text className="text-gray-600">{profile.address.postalCode}</Text>
        <Text className="text-gray-600">
          Referência: {profile.address.referencePoint}
        </Text>
      </View>

      <TouchableOpacity
        className="bg-blue-900 py-4 rounded-xl flex-row justify-center items-center mt-4"
        onPress={() => navigation.navigate('EditProfileScreen', { profile })}
      >
        <Ionicons name="create" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">Editar Perfil</Text>
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