import React, { useState } from 'react';
import { Input, Button, Text, Block } from 'galio-framework';
import styles from './styles';

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

      <Button color="info" round style={styles.button}
        onPress={() => navigation.navigate('WelcomeScreen')}>
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
