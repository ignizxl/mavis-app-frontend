import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddMedicalHistoryScreen({ navigation }) {
  const [medications, setMedications] = useState('');
  const [allergies, setAllergies] = useState('');
  const [preExistingConditions, setPreExistingConditions] = useState('');

  const handleSave = () => {
    alert('Registro salvo!');
    navigation.goBack(); 
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
          placeholder="Ex: Paracetamol, Ibuprofeno"
          value={medications}
          onChangeText={setMedications}
        />

        <Text className="text-lg font-semibold text-gray-800">Alergias</Text>
        <TextInput
          className="bg-white p-4 rounded-xl shadow-md"
          placeholder="Ex: Poeira, Amendoim"
          value={allergies}
          onChangeText={setAllergies}
        />

        <Text className="text-lg font-semibold text-gray-800">Condições Pré-existentes</Text>
        <TextInput
          className="bg-white p-4 rounded-xl shadow-md"
          placeholder="Ex: Hipertensão, Diabetes"
          value={preExistingConditions}
          onChangeText={setPreExistingConditions}
        />
      </View>

      <TouchableOpacity
        className="bg-green-600 py-4 mt-6 rounded-xl flex-row justify-center items-center"
        onPress={handleSave}
      >
        <Ionicons name="save" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">Salvar Registro</Text>
      </TouchableOpacity>
    </View>
  );
}
