import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-2xl font-bold mb-5">[logo]</Text>

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">E-mail</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="seu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Senha</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="••••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View className="flex-row justify-between w-full mb-3">
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} className="flex-row items-center">
          <View className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center ${rememberMe ? 'bg-blue-900' : 'bg-white'}`}> 
            {rememberMe && <View className="w-3 h-3 bg-white" />}
          </View>
          <Text className="ml-2 text-sm text-gray-700">Lembrar-me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-sm text-blue-900 font-medium">Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="w-full p-3 bg-blue-900 rounded-lg items-center" onPress={() => navigation.navigate('WelcomeScreen')}>
        <Text className="text-white text-lg font-bold">Entrar</Text>
      </TouchableOpacity>

      <Text className="mt-4 text-sm text-gray-600">
        Ainda não tem uma conta?
        <Text className="text-blue-900 font-medium" onPress={() => navigation.navigate('RegisterScreen')}> Cadastre-se</Text>
      </Text>
    </View>
  );
}
