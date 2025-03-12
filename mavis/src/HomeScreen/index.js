import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import api from '../api/api';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isSending, setIsSending] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await api.get('/users/profiles');
        setUserProfile(response.data);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar o perfil do usuário');
      }
    };
    loadProfile();
  }, []);

  const showConfirmationDialog = () => {
    Alert.alert(
      'Confirmar Emergência',
      'Você tem certeza que deseja acionar o alerta de emergência?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => handleEmergency()
        }
      ]
    );
  };

  const handleEmergency = async () => {
    setIsSending(true);
    
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Ative a localização para enviar emergências');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      if (Math.abs(latitude) > 85 || Math.abs(longitude) > 180) {
        Alert.alert('Localização inválida', 'Coordenadas fora do formato esperado');
        return;
      }

      const payload = {
        latitude: latitude.toFixed(6),
        longitude: longitude.toFixed(6),
        message: {
          fullName: userProfile.fullName,
          dateOfBirth: new Date(userProfile.dateOfBirth).toLocaleDateString('pt-BR'),
          address: `${userProfile.address.street}, ${userProfile.address.number} - ${userProfile.address.neighborhood}`,
          locationText: `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`,
          medicalHistoryText: formatMedicalHistory(),
          googleMapsLink: `https://www.google.com/maps?q=${latitude},${longitude}`
        }
      };

      const response = await api.post('/notifications/send', payload);
      
      if (response.status === 200) {
        Alert.alert('Sucesso!', 'Notificações enviadas para seus contatos de emergência');
      }
    } catch (error) {
      console.error('Erro completo:', error.response?.data || error.message);
      Alert.alert('Erro', error.response?.data?.message || 'Falha no envio da emergência');
    } finally {
      setIsSending(false);
    }  
  };

  const formatMedicalHistory = () => {
    if (!userProfile?.medicalHistory?.length) return 'Nenhuma informação médica cadastrada';
    return userProfile.medicalHistory.map(entry => 
      `- ${entry.type}: ${entry.description}`
    ).join('\n');
  };

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <View className="flex-1 justify-center mb-20">
        <Text className="text-3xl font-bold text-gray-800">Olá! Bem-vindo(a) de volta!</Text>
        <Text className="text-gray-600 mt-2">
        Ao acionar o botão abaixo, seus contatos de emergência serão notificados imediatamente com suas informações de localização e dados essenciais para o atendimento.
        </Text>
      </View>

      <View className="mb-12">
        <TouchableOpacity
          className={`bg-red-500 py-4 rounded-xl flex-row justify-center items-center ${
            isSending ? 'opacity-75' : ''
          }`}
          onPress={showConfirmationDialog}
          disabled={isSending}
        >
          {isSending ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <>
              <Ionicons name="warning" size={40} color="white" />
              <Text className="text-white font-semibold ml-3">Disparar Emergência</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

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