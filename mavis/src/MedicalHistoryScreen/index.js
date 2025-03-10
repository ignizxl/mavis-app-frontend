import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MedicalHistoryScreen({ navigation }) {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchMedicalHistory = async () => {
    try {
      const response = await api.get('/users/profiles/medical-history');
      setMedicalHistory(response.data || []);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
      setError('Erro ao carregar histórico médico');
      
      if (error.response?.status === 401) {
        await AsyncStorage.removeItem('token');
        navigation.navigate('LoginScreen');
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMedicalHistory();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchMedicalHistory();
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#1e3a8a" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-600 text-lg mb-4">{error}</Text>
        <TouchableOpacity
          className="bg-blue-900 px-6 py-3 rounded-lg"
          onPress={fetchMedicalHistory}
        >
          <Text className="text-white">Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-6 mt-6">
      <View className="items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800">Histórico Médico</Text>
        <Text className="text-gray-600 mt-2 text-center">
          {medicalHistory.length > 0 
            ? 'Seu histórico médico registrado'
            : 'Nenhum registro médico encontrado'}
        </Text>
      </View>

      <FlatList
        data={medicalHistory}
        keyExtractor={(item) => item.createdAt}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#1e3a8a']}
          />
        }
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-3 rounded-xl shadow-md">
            <View className="flex-row justify-between items-start">
              <Text className="text-lg font-semibold text-gray-800">
                Versão: {item.version}
              </Text>
              <Text className="text-gray-500 text-sm">
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
              </Text>
            </View>

            <View className="mt-2">
              <Text className="text-gray-600">
                <Text className="font-semibold">Medicamentos:</Text>{" "}
                {item.medications?.join(', ') || 'Nenhum registrado'}
              </Text>
              <Text className="text-gray-600 mt-1">
                <Text className="font-semibold">Alergias:</Text>{" "}
                {item.allergies?.join(', ') || 'Nenhuma registrada'}
              </Text>
              <Text className="text-gray-600 mt-1">
                <Text className="font-semibold">Condições:</Text>{" "}
                {item.preExistingConditions?.join(', ') || 'Nenhuma registrada'}
              </Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        className="bg-green-600 py-4 mb-2 rounded-xl flex-row justify-center items-center"
        onPress={() => navigation.navigate('AddMedicalHistoryScreen', {
          onSave: fetchMedicalHistory
        })}
      >
        <Ionicons name="add-circle" size={24} color="white" />
        <Text className="text-white font-semibold ml-3">Adicionar Registro</Text>
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