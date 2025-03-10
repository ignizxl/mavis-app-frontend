import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddMedicalHistoryScreen({ navigation, route }) {
  const { onSave } = route.params;
  const [medications, setMedications] = useState('');
  const [allergies, setAllergies] = useState('');
  const [preExistingConditions, setPreExistingConditions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    // verifica se pelo menos um campo foi preenchido
    if (!medications.trim() && !allergies.trim() && !preExistingConditions.trim()) {
      Alert.alert('Atenção', 'Preencha pelo menos um campo para salvar');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        medications: medications.split(',').map(item => item.trim()).filter(item => item),
        allergies: allergies.split(',').map(item => item.trim()).filter(item => item),
        preExistingConditions: preExistingConditions.split(',').map(item => item.trim()).filter(item => item)
      };

      const response = await api.post('/users/profiles/medical-history', payload);

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Registro médico salvo!', [
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
      console.error('Erro ao salvar:', error.response?.data);
      
      let errorMessage = 'Erro ao salvar registro médico';
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
    <View className="flex-1 bg-gray-100 p-6 mt-6">
      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="arrow-back" size={28} color="gray" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-800">Adicionar Registro</Text>
      </View>

      <View className="space-y-4">
        <Text className="text-lg font-semibold text-gray-800">Medicamentos</Text>
        <TextInput
          className="bg-white p-4 rounded-xl shadow-md"
          placeholder="Ex: Paracetamol, Ibuprofeno (separados por vírgula)"
          value={medications}
          onChangeText={setMedications}
          multiline
        />

        <Text className="text-lg font-semibold text-gray-800">Alergias</Text>
        <TextInput
          className="bg-white p-4 rounded-xl shadow-md"
          placeholder="Ex: Poeira, Amendoim (separados por vírgula)"
          value={allergies}
          onChangeText={setAllergies}
          multiline
        />

        <Text className="text-lg font-semibold text-gray-800">Condições Pré-existentes</Text>
        <TextInput
          className="bg-white p-4 rounded-xl shadow-md"
          placeholder="Ex: Hipertensão, Diabetes (separados por vírgula)"
          value={preExistingConditions}
          onChangeText={setPreExistingConditions}
          multiline
        />
      </View>

      <TouchableOpacity
        className={`bg-green-600 py-4 mt-6 rounded-xl flex-row justify-center items-center ${
          loading ? 'opacity-50' : ''
        }`}
        onPress={handleSave}
        disabled={loading}
      >
        <Ionicons name="save" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">
          {loading ? 'Salvando...' : 'Salvar Registro'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}