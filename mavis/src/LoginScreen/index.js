import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api/api";
import { encode } from 'base-64'; 

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }
  
    setLoading(true);
  
    try {
      await AsyncStorage.removeItem("token");
      const encodedCredentials = encode(`${username}:${password}`);
  
      const response = await api.post(
        "/login",
        {
          username: username,
          password: password
        },
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        }
      );
  
      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("AdditionalInfoScreen");
      }
    } catch (error) {
      console.error("Erro completo:", error.response?.data || error);
      const errorMessage = error.response?.data?.message || "Erro no servidor.";
      Alert.alert("Erro", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-2xl font-bold mb-5">Login</Text>

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Username</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="seu_username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
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

      <TouchableOpacity
        className={`w-full ${loading ? "bg-gray-500" : "bg-blue-900"} p-3 rounded-lg items-center`}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text className="text-white text-lg font-bold">
          {loading ? "Carregando..." : "Entrar"}
        </Text>
      </TouchableOpacity>

      <Text className="mt-4 text-sm text-gray-600">
        Ainda não tem uma conta?
        <Text className="text-blue-900 font-medium" onPress={() => navigation.navigate('RegisterScreen')}> Cadastre-se</Text>
      </Text>
    </View>
  );
} 