import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditEmergencyContactScreen({ route, navigation }) {
  const { contact, onSave } = route.params;
  const [name, setName] = useState(contact.name);
  const [relationship, setRelationship] = useState(contact.relationship);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const [email, setEmail] = useState(contact.email);
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

      const response = await api.put(
        `/users/profiles/emergency-contacts/${contact.id}`,
        payload
      );

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Contato atualizado!', [
          { 
            text: 'OK', 
            onPress: () => {
              onSave?.();
              navigation.goBack();
            }
          }
        ]);
      }
    } catch (error) {
      console.error('Erro na atualização:', error.response?.data);
      
      let errorMessage = 'Erro ao atualizar contato';
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

      <Text className="text-2xl font-bold text-gray-800 mb-5">Editar Contato de Emergência</Text>

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
        placeholder="Ex: Pai, Irmão"
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