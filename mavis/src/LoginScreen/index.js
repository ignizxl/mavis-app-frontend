import React, { useState } from 'react';
import { Input, Button, Text, Block } from 'galio-framework';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Block safe flex>
      <Text h4>Entrar</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        rounded
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        rounded
        password
        viewPass
      />

      <Button color="info" round>
        Entrar
      </Button>

      <Text>
        Não tem uma conta?{' '}
        <Text color="info">
          Registrar-se
        </Text>
      </Text>
    </Block>
  );
}
