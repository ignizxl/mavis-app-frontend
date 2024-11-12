import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button, Text, Block } from 'galio-framework';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Block safe flex style={styles.container}>
      <Text h4 style={styles.title}>Entrar</Text>

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
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        rounded
        style={styles.input}
        password
        viewPass
      />

      <Button color="info" round style={styles.button}>
        Entrar
      </Button>

      <Text style={styles.registerText}>
        Não tem uma conta?{' '}
        <Text color="info" style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}>
          Registrar-se
        </Text>
      </Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
    width: '100%',
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 16,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  }
});
