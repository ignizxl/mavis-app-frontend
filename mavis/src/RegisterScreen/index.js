import React, { useState } from 'react';
import { Input, Button, Text, Block } from 'galio-framework';
import styles from './styles';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Block safe flex style={styles.container}>
      <Text h4 style={styles.title}>Criar Conta</Text>

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

      <Input
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        rounded
        style={styles.input}
        password
        viewPass
      />

      <Button
        color="info"
        round
        style={styles.button}
        onPress={() => {
          navigation.navigate('AdditionalInfoScreen');
        }}
      >
        Continuar
      </Button>

      <Text style={styles.loginText}>
        Já tem uma conta?{' '}
        <Text
          color="info"
          style={styles.link}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Entrar
        </Text>
      </Text>
    </Block>
  );
}
