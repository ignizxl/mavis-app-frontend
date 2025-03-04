import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function AdditionalInfoScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [referencePoint, setReferencePoint] = useState('');
  const [locationId, setLocationId] = useState(''); 
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState(''); 
  const [emergencyName, setEmergencyName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [emergencyEmail, setEmergencyEmail] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 bg-white p-6">
        <Text className="text-2xl font-bold text-gray-900 text-center mb-6">Informações Adicionais</Text>
        <Text className="text-sm font-medium text-gray-900 mb-1">Nome Completo</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={fullName} onChangeText={setFullName} placeholder="Maria Clara Silva" />
        <Text className="text-sm font-medium text-gray-900 mb-1">Data de Nascimento</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={dateOfBirth} onChangeText={setDateOfBirth} placeholder="DD/MM/AAAA" />
        <Text className="text-sm font-medium text-gray-900 mb-1">Número de Telefone</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={phoneNumber} onChangeText={setPhoneNumber} placeholder="79890616179" keyboardType="phone-pad" />
        <Text className="text-lg font-semibold text-gray-900 mt-4">Endereço</Text>
        <Text className="text-sm font-medium text-gray-900 mb-1">Rua</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={street} onChangeText={setStreet} placeholder="Rua das Flores" />
        
        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Número</Text>
            <TextInput className="p-3 bg-gray-50 border border-gray-300 rounded-lg" value={number} onChangeText={setNumber} placeholder="123" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Bairro</Text>
            <TextInput className="p-3 bg-gray-50 border border-gray-300 rounded-lg" value={neighborhood} onChangeText={setNeighborhood} placeholder="Centro" />
          </View>
        </View>
        
        <Text className="text-sm font-medium text-gray-900 mb-1 mt-3">Cidade</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg" value={city} onChangeText={setCity} placeholder="Brasília" />
        
        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Estado (UF)</Text>
            <TextInput className="p-3 bg-gray-50 border border-gray-300 rounded-lg" value={state} onChangeText={setState} placeholder="DF" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">CEP</Text>
            <TextInput className="p-3 bg-gray-50 border border-gray-300 rounded-lg" value={postalCode} onChangeText={setPostalCode} placeholder="71714-716" />
          </View>
        </View>
        
        <Text className="text-sm font-medium text-gray-900 mb-1 mt-3">Ponto de Referência</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg" value={referencePoint} onChangeText={setReferencePoint} placeholder="Próximo à praça central" />
        
        <Text className="text-lg font-semibold text-gray-900 mt-6">Localização</Text>
        <Text className="text-sm font-medium text-gray-900 mb-1">ID da Localização</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={locationId} onChangeText={setLocationId} placeholder="1" keyboardType="numeric" />
        <Text className="text-sm font-medium text-gray-900 mb-1">Latitude</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={latitude} onChangeText={setLatitude} placeholder="90" keyboardType="numeric" />
        <Text className="text-sm font-medium text-gray-900 mb-1">Longitude</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={longitude} onChangeText={setLongitude} placeholder="180" keyboardType="numeric" />
        
        <Text className="text-lg font-semibold text-gray-900 mt-6">Contato de Emergência</Text>
        <Text className="text-sm font-medium text-gray-900 mb-1">Nome</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg mb-3" value={emergencyName} onChangeText={setEmergencyName} placeholder="João Pereira" />
        
        <View className="flex-row gap-2">
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Relação</Text>
            <TextInput className="p-3 bg-gray-50 border border-gray-300 rounded-lg" value={relationship} onChangeText={setRelationship} placeholder="Irmão" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-medium text-gray-900 mb-1">Telefone</Text>
            <TextInput className="p-3 bg-gray-50 border border-gray-300 rounded-lg" value={emergencyPhone} onChangeText={setEmergencyPhone} placeholder="57299995947" keyboardType="phone-pad" />
          </View>
        </View>

        <Text className="text-sm font-medium text-gray-900 mb-1 mt-3">E-mail</Text>
        <TextInput className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg" value={emergencyEmail} onChangeText={setEmergencyEmail} placeholder="joaopereira@example.com" keyboardType="email-address" />
        <TouchableOpacity
          className="w-full p-3 bg-blue-900 rounded-lg items-center mt-6"
          onPress={() => navigation.navigate("HomeScreen")} 
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