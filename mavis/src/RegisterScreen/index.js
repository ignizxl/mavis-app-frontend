import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button, Text, Block } from 'galio-framework';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Block safe flex style={styles.container}>
      <Text h4 style={styles.title}>Criar Conta</Text>

      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        rounded
        style={styles.input}
      />

      <Input
        placeholder="Idade"
        value={age}
        onChangeText={setAge}
        rounded
        style={styles.input}
        keyboardType="numeric"
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        rounded
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        rounded
        style={styles.input}
        keyboardType="phone-pad"
      />

      <Input
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        rounded
        style={styles.input}
      />

      <Button color="info" round style={styles.button}>
        Registrar
      </Button>

      <Text style={styles.loginText}>
        Já tem uma conta?{' '}
        <Text color="info" style={styles.link}>
          Entrar
        </Text>
      </Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 16,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  }
});
