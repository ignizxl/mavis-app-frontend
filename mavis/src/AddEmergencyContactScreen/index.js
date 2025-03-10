import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddEmergencyContactScreen({ navigation, route }) {
  const { onSave } = route.params;
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSaveContact = async () => {
    if (!name.trim() || !phoneNumber.trim()) {
      Alert.alert('Erro', 'Nome e telefone são obrigatórios');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        relationship: relationship.trim(),
        phoneNumber: phoneNumber.replace(/\D/g, ''), 
        email: email.trim()
      };

      const response = await api.post('/users/profiles/emergency-contacts', payload);

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Contato adicionado!', [
          { 
            text: 'OK', 
            onPress: () => {
              onSave?.(); // atualiza a lista de contatos
              navigation.goBack();
            }
          }
        ]);
      }
    } catch (error) {
      console.error('Erro ao adicionar contato:', error.response?.data);
      
      let errorMessage = 'Erro ao salvar contato';
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.response?.status === 401) {
        await AsyncStorage.removeItem('token');
        navigation.navigate('LoginScreen');
        return;
      }
      
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="gray" />
      </TouchableOpacity>

      <Text className="text-2xl font-bold text-gray-800 mb-5">Adicionar Contato de Emergência</Text>
      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Nome Completo *</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
      />

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Relacionamento (opcional)</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="Ex: Pai, Vizinho"
        value={relationship}
        onChangeText={setRelationship}
      />

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Telefone *</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="(00) 00000-0000"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">E-mail (opcional)</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="exemplo@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        className={`bg-blue-900 py-4 rounded-xl flex-row justify-center items-center mt-6 ${
          loading ? 'opacity-50' : ''
        }`}
        onPress={handleSaveContact}
        disabled={loading}
      >
        <Ionicons name="save" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">
          {loading ? 'Salvando...' : 'Salvar Contato'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}