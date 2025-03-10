import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import api from "../api/api";

export default function AdditionalInfoScreen({ navigation }) {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    postalCode: '',
    referencePoint: '',
    emergencyName: '',
    relationship: '',
    emergencyPhone: '',
    emergencyEmail: ''
  });
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString) => {
    // converte de DD/MM/AAAA para AAAA-MM-DD
    const [day, month, year] = dateString.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const validateForm = () => {
    const requiredFields = [
      'fullName', 'dateOfBirth', 'phoneNumber', 'street', 'number',
      'neighborhood', 'city', 'state', 'postalCode', 'emergencyName',
      'relationship', 'emergencyPhone'
    ];
  
    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        Alert.alert("Erro", `O campo ${field} é obrigatório!`);
        return false;
      }
    }
  
    if (formData.emergencyEmail && !/\S+@\S+\.\S+/.test(formData.emergencyEmail)) {
      Alert.alert("Erro", "E-mail do contato de emergência inválido!");
      return false;
    }
  
    return true;
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
  
    setLoading(true);
    try {
      const formattedPayload = {
        fullName: formData.fullName.trim(),
        dateOfBirth: formatDate(formData.dateOfBirth), 
        phoneNumber: `+55${formData.phoneNumber.replace(/\D/g, '')}`,
        address: {
          street: formData.street.trim(),
          number: formData.number.toString().trim(), 
          neighborhood: formData.neighborhood.trim(),
          city: formData.city.trim(),
          state: formData.state.toUpperCase().substring(0, 2), 
          postalCode: formData.postalCode.replace(/\D/g, '').substring(0, 8),
          referencePoint: formData.referencePoint.trim()
        },
        emergencyContacts: [
          {
            name: formData.emergencyName.trim(),
            relationship: formData.relationship.trim(),
            phoneNumber: `+55${formData.emergencyPhone.replace(/\D/g, '')}`,
            email: formData.emergencyEmail.toLowerCase().trim()
          }
        ]
      };
  
      console.log('Payload final:', JSON.stringify(formattedPayload, null, 2));
      console.log('Token:', await AsyncStorage.getItem('token')); 
  
      const response = await api.post('/users/profiles', formattedPayload);
  
      if (response.status >= 200 && response.status < 300) {
        Alert.alert('Sucesso!', 'Perfil criado com sucesso');
        navigation.navigate('WelcomeScreen'); 
      }
    } catch (error) {
      console.error('Erro completo:', {
        status: error.response?.status,
        data: error.response?.data,
        headers: error.response?.headers
      });
  
      const errorMessage = error.response?.data?.message || 
        error.message || 
        'Erro ao conectar com o servidor';
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 bg-white p-6">
        <Text className="text-2xl font-bold text-gray-900 text-center mb-6 mt-6">Informações Adicionais</Text>
        <Text className="text-sm font-medium text-gray-900 mb-1">Nome Completo</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3"
          value={formData.fullName}
          onChangeText={(text) => handleChange('fullName', text)}
          placeholder="Maria Clara Silva"
        />

        <Text className="text-sm font-medium text-gray-900 mb-1">Data de Nascimento</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3"
          value={formData.dateOfBirth}
          onChangeText={(text) => handleChange('dateOfBirth', text)}
          placeholder="DD/MM/AAAA"
        />

        <Text className="text-sm font-medium text-gray-900 mb-1">Número de Telefone</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3"
          value={formData.phoneNumber}
          onChangeText={(text) => handleChange('phoneNumber', text)}
          placeholder="79890616179"
          keyboardType="phone-pad"
        />

        <Text className="text-lg font-semibold text-gray-900 mt-4">Endereço</Text>
        <Text className="text-sm font-medium text-gray-900 mb-1">Rua</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3"
          value={formData.street}
          onChangeText={(text) => handleChange('street', text)}
          placeholder="Rua das Flores"
        />

        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Número</Text>
            <TextInput
              className="p-3 bg-gray-50 border border-gray-300 rounded-lg"
              value={formData.number}
              onChangeText={(text) => handleChange('number', text)}
              placeholder="123"
            />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Bairro</Text>
            <TextInput
              className="p-3 bg-gray-50 border border-gray-300 rounded-lg"
              value={formData.neighborhood}
              onChangeText={(text) => handleChange('neighborhood', text)}
              placeholder="Centro"
            />
          </View>
        </View>

        <Text className="text-sm font-medium text-gray-900 mb-1 mt-3">Cidade</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
          value={formData.city}
          onChangeText={(text) => handleChange('city', text)}
          placeholder="Brasília"
        />

        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Estado (UF)</Text>
            <TextInput
              className="p-3 bg-gray-50 border border-gray-300 rounded-lg"
              value={formData.state}
              onChangeText={(text) => handleChange('state', text)}
              placeholder="DF"
            />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">CEP</Text>
            <TextInput
              className="p-3 bg-gray-50 border border-gray-300 rounded-lg"
              value={formData.postalCode}
              onChangeText={(text) => handleChange('postalCode', text)}
              placeholder="71714-716"
            />
          </View>
        </View>

        <Text className="text-sm font-medium text-gray-900 mb-1 mt-3">Ponto de Referência</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
          value={formData.referencePoint}
          onChangeText={(text) => handleChange('referencePoint', text)}
          placeholder="Próximo à praça central"
        />

        <Text className="text-lg font-semibold text-gray-900 mt-6">Contato de Emergência</Text>
        <Text className="text-sm font-medium text-gray-900 mb-1">Nome</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3"
          value={formData.emergencyName}
          onChangeText={(text) => handleChange('emergencyName', text)}
          placeholder="João Pereira"
        />

        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Relação</Text>
            <TextInput
              className="p-3 bg-gray-50 border border-gray-300 rounded-lg"
              value={formData.relationship}
              onChangeText={(text) => handleChange('relationship', text)}
              placeholder="Irmão"
            />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Telefone</Text>
            <TextInput
              className="p-3 bg-gray-50 border border-gray-300 rounded-lg"
              value={formData.emergencyPhone}
              onChangeText={(text) => handleChange('emergencyPhone', text)}
              placeholder="57299995947"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <Text className="text-sm font-medium text-gray-900 mb-1 mt-3">E-mail</Text>
        <TextInput
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
          value={formData.emergencyEmail}
          onChangeText={(text) => handleChange('emergencyEmail', text)}
          placeholder="joaopereira@example.com"
          keyboardType="email-address"
        />

        <TouchableOpacity
          className="w-full p-3 bg-blue-900 rounded-lg items-center mt-6"
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text className="text-white text-lg font-bold">
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}