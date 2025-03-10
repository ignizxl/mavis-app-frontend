import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/api'; 

export default function EditProfileScreen({ navigation, route }) {
  const { profile } = route.params;

  const [formData, setFormData] = useState({
    fullName: profile.fullName,
    dateOfBirth: profile.dateOfBirth,
    phoneNumber: profile.phoneNumber,
    address: { ...profile.address }
  });

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      
      const payload = {
        fullName: formData.fullName.trim(),
        dateOfBirth: formData.dateOfBirth,
        phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
        address: {
          ...formData.address,
          state: formData.address.state.toUpperCase().substring(0, 2),
          postalCode: formData.address.postalCode.replace(/\D/g, '')
        }
      };

      console.log("Enviando para API:", payload); 
      
      const response = await api.put('/users/profiles', payload); 
      console.log("Resposta recebida:", response.data); 

      Alert.alert('Sucesso', 'Perfil atualizado!', [
        { 
          text: 'OK', 
          onPress: () => navigation.navigate('ProfileScreen', {
            profile: response.data 
          })
        }
      ]);

    } catch (error) {
      console.error('Erro completo:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      
      const errorMessage = error.response?.data?.error || 
        'Erro na conexão com o servidor';
      
      Alert.alert('Erro', errorMessage);
      
      if (error.response?.status === 401) {
        await AsyncStorage.removeItem('token');
        navigation.navigate('LoginScreen');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-5">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4">
          <Ionicons name="arrow-back" size={28} color="gray" />
        </TouchableOpacity>

        <View className="justify-center items-center">
          <Text className="text-2xl font-bold text-gray-800 mb-5">Editar Perfil</Text>
        </View>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Nome Completo</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
          placeholder="Nome Completo"
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        />

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Data de Nascimento</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
          placeholder="AAAA-MM-DD"
          value={formData.dateOfBirth}
          onChangeText={(text) => setFormData({ ...formData, dateOfBirth: text })}
          keyboardType="numbers-and-punctuation"
        />

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Telefone</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
          placeholder="+55 (00) 00000-0000"
          keyboardType="phone-pad"
          value={formData.phoneNumber}
          onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
        />

        <Text className="text-lg font-semibold text-gray-800">Endereço</Text>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Rua</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
          placeholder="Rua"
          value={formData.address.street}
          onChangeText={(text) => setFormData({
            ...formData,
            address: { ...formData.address, street: text }
          })}
        />

        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">Número</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="Número"
              value={formData.address.number}
              onChangeText={(text) => setFormData({
                ...formData,
                address: { ...formData.address, number: text }
              })}
            />
          </View>
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">Bairro</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="Bairro"
              value={formData.address.neighborhood}
              onChangeText={(text) => setFormData({
                ...formData,
                address: { ...formData.address, neighborhood: text }
              })}
            />
          </View>
        </View>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Cidade</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
          placeholder="Cidade"
          value={formData.address.city}
          onChangeText={(text) => setFormData({
            ...formData,
            address: { ...formData.address, city: text }
          })}
        />

        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">Estado (UF)</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="SP"
              maxLength={2}
              value={formData.address.state}
              onChangeText={(text) => setFormData({
                ...formData,
                address: { ...formData.address, state: text.toUpperCase() }
              })}
            />
          </View>
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">CEP</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="00000-000"
              keyboardType="numbers-and-punctuation"
              value={formData.address.postalCode}
              onChangeText={(text) => setFormData({
                ...formData,
                address: { ...formData.address, postalCode: text }
              })}
            />
          </View>
        </View>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Referência</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-4"
          placeholder="Ponto de referência"
          value={formData.address.referencePoint}
          onChangeText={(text) => setFormData({
            ...formData,
            address: { ...formData.address, referencePoint: text }
          })}
        />

        <TouchableOpacity
          className={`bg-blue-900 py-4 rounded-xl flex-row justify-center items-center mt-6 mb-6 ${
            loading ? 'opacity-50' : ''
          }`}
          onPress={handleSave}
          disabled={loading}
        >
          <Ionicons name="save" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}