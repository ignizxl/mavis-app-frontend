import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen({ navigation, route }) {
  const { profile } = route.params;

  const [fullName, setFullName] = useState(profile.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [address, setAddress] = useState(profile.address);

  const handleSave = () => {
    const updatedProfile = {
      fullName,
      dateOfBirth,
      phoneNumber,
      address,
    };

    Alert.alert('Perfil atualizado', 'Seus dados foram salvos com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-5">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4">
          <Ionicons name="arrow-back" size={28} color="gray" />
        </TouchableOpacity>

        <View className="justify-center items-center">
          <Text className="text-2xl font-bold text-gray-800 mb-5 ">Editar Perfil</Text>
        </View>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Nome Completo</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
          placeholder="Nome Completo"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Data de Nascimento</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
          placeholder="Data de Nascimento"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Telefone</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
          placeholder="Telefone"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text className="text-lg font-semibold text-gray-800">Endereço</Text>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Rua</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
          placeholder="Rua"
          value={address.street}
          onChangeText={(text) => setAddress({ ...address, street: text })}
        />

        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">Número</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="Número"
              value={address.number}
              onChangeText={(text) => setAddress({ ...address, number: text })}
            />
          </View>
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">Bairro</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="Bairro"
              value={address.neighborhood}
              onChangeText={(text) => setAddress({ ...address, neighborhood: text })}
            />
          </View>
        </View>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Cidade</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
          placeholder="Cidade"
          value={address.city}
          onChangeText={(text) => setAddress({ ...address, city: text })}
        />

        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">Estado</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="Estado"
              value={address.state}
              onChangeText={(text) => setAddress({ ...address, state: text })}
            />
          </View>
          <View className="flex-1">
            <Text className="self-start text-sm font-medium text-gray-700 mb-1">CEP</Text>
            <TextInput
              className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-2"
              placeholder="CEP"
              value={address.postalCode}
              onChangeText={(text) => setAddress({ ...address, postalCode: text })}
            />
          </View>
        </View>

        <Text className="self-start text-sm font-medium text-gray-700 mb-1">Referência</Text>
        <TextInput
          className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-4"
          placeholder="Referência"
          value={address.referencePoint}
          onChangeText={(text) => setAddress({ ...address, referencePoint: text })}
        />

        <TouchableOpacity
          className="bg-blue-900 py-4 rounded-xl flex-row justify-center items-center mt-6 mb-6"
          onPress={handleSave}
        >
          <Ionicons name="save" size={24} color="white" />
          <Text className="text-white font-semibold ml-3">Salvar Alterações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}