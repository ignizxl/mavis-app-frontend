import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmergencyContactsScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const formatPhoneNumber = (phone) => {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const fetchContacts = async () => {
    try {
      const response = await api.get('/users/profiles/emergency-contacts');
      setContacts(response.data || []);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
      setError('Erro ao carregar contatos');
      
      if (error.response?.status === 401) {
        await AsyncStorage.removeItem('token');
        navigation.navigate('LoginScreen');
      }
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchContacts();
  };

  const handleDeleteContact = async (id) => {
    try {
      await api.delete(`/users/profiles/emergency-contacts/${id}`);
      fetchContacts();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir o contato');
    }
  };

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-600 text-lg mb-4">{error}</Text>
        <TouchableOpacity
          className="bg-blue-900 px-6 py-3 rounded-lg"
          onPress={fetchContacts}
        >
          <Text className="text-white">Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-6 mt-6">
      <View className="items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800">Contatos de Emergência</Text>
        <Text className="text-gray-600 mt-2 text-center">
          {contacts.length > 0 
            ? 'Seus contatos de emergência cadastrados'
            : 'Nenhum contato cadastrado'}
        </Text>
      </View>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#1e3a8a']}
          />
        }
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-3 rounded-xl flex-row justify-between items-center shadow-md">
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
              <Text className="text-gray-600">Relacionamento: {item.relationship}</Text>
              <Text className="text-gray-600">Telefone: {formatPhoneNumber(item.phoneNumber)}</Text>
              <Text className="text-gray-600">E-mail: {item.email}</Text>
            </View>
            
            <View className="flex-row space-x-3 ml-2">
              <TouchableOpacity 
                onPress={() => navigation.navigate('EditEmergencyContactScreen', { 
                  contact: item,
                  onSave: fetchContacts
                })}
              >
                <Ionicons name="pencil" size={24} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteContact(item.id)}>
                <Ionicons name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        className="bg-blue-900 py-4 rounded-xl flex-row justify-center items-center mt-4"
        onPress={() => navigation.navigate('AddEmergencyContactScreen', {
          onSave: fetchContacts
        })}
      >
        <Ionicons name="person-add" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">Adicionar Contato</Text>
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