import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EmergencyContactsScreen({ navigation }) {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'João Pereira', relationship: 'Irmão', phoneNumber: '57299995947', email: 'joaopereira@example.com' },
  ]);

  const handleAddContact = () => {
    navigation.navigate('AddEmergencyContactScreen'); 
  };

  const handleEditContact = (contact) => {
    navigation.navigate('EditEmergencyContactScreen', { contact });
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <View className="flex-1 bg-gray-100 p-6 mt-6">
      <View className="items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800">Contatos de Emergência</Text>
        <Text className="text-gray-600 mt-2 text-center">
          Aqui você pode visualizar e gerenciar seus contatos de emergência.
        </Text>
      </View>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-3 rounded-xl flex-row justify-between items-center shadow-md">
            <View>
              <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
              <Text className="text-gray-600">{item.relationship}</Text>
              <Text className="text-gray-600">{item.phoneNumber}</Text>
              <Text className="text-gray-600">{item.email}</Text>
            </View>
            <View className="flex-row space-x-3">
              <TouchableOpacity onPress={() => handleEditContact(item)}>
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
        onPress={handleAddContact}
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
