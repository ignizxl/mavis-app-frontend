import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddEmergencyContactScreen({ navigation }) { 
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveContact = () => {
    alert('Contato salvo! ');
    navigation.goBack(); 
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="gray" />
      </TouchableOpacity>
      
      <Text className="text-2xl font-bold text-gray-800 mb-5">Adicionar Contato de Emergência</Text>

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Nome Completo</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
      />

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Relacionamento (opcional)</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="Relacionamento (opcional)"
        value={relationship}
        onChangeText={setRelationship}
      />

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Telefone</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">E-mail (opcional)</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="E-mail (opcional)"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <TouchableOpacity
        className="bg-blue-900 py-4 rounded-xl flex-row justify-center items-center mt-6"
        onPress={handleSaveContact}
      >
        <Ionicons name="save" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">Salvar Contato</Text>
      </TouchableOpacity>
    </View>
  );
}
