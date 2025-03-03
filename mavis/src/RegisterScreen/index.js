import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    if (!acceptedTerms) {
      Alert.alert("Erro", "Você precisa aceitar os termos de uso.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://xxx.xxx.x.xxx:8081/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // se a resposta não for OK, lança um erro com a mensagem do back
        throw new Error(data.message || "Erro ao cadastrar usuário.");
      }

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!", [
        { text: "OK", onPress: () => navigation.navigate("LoginScreen") },
      ]);
    } catch (error) {
      Alert.alert("Erro", error.message || "Ocorreu um erro ao tentar cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-2xl font-bold text-gray-900 text-center mb-5">Cadastro</Text>

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Username</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="seu_username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

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

      <Text className="self-start text-sm font-medium text-gray-700 mb-1">Confirmar Senha</Text>
      <TextInput
        className="w-full p-3 bg-white border border-gray-300 rounded-lg mb-3"
        placeholder="••••••••"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View className="flex-row items-start w-full mb-3">
        <TouchableOpacity onPress={() => setAcceptedTerms(!acceptedTerms)} className="flex-row items-center">
          <View className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center ${acceptedTerms ? "bg-blue-900" : "bg-white"}`}>
            {acceptedTerms && <View className="w-3 h-3 bg-white" />}
          </View>
        </TouchableOpacity>
        <Text className="ml-2 text-sm text-gray-700">
          Ao se cadastrar, você concorda com nossos
          <Text className="text-blue-900 font-medium"> Termos de Uso </Text> e
          <Text className="text-blue-900 font-medium"> Política de Privacidade</Text>.
        </Text>
      </View>

      <TouchableOpacity
        className={`w-full ${loading ? "bg-gray-500" : "bg-blue-900"} py-3 rounded-lg items-center`}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text className="text-white text-lg font-bold">{loading ? "Cadastrando..." : "Cadastrar"}</Text>
      </TouchableOpacity>

      <Text className="mt-4 text-sm text-gray-600">
        Já tem uma conta?
        <Text className="text-blue-900 font-medium" onPress={() => navigation.navigate("LoginScreen")}> Faça login</Text>
      </Text>
    </View>
  );
}