import React, { useState } from 'react';
import { Input, Button, Text, Block } from 'galio-framework';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Block safe flex>
      <Text h4>Criar Conta</Text>

      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        rounded
      />

      <Input
        placeholder="Idade"
        value={age}
        onChangeText={setAge}
        rounded
        keyboardType="numeric"
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        rounded
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        rounded
        keyboardType="phone-pad"
      />

      <Input
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        rounded
      />

      <Button color="info" round>
        Registrar
      </Button>

      <Text>
        Já tem uma conta?{' '}
        <Text color="info">
          Entrar
        </Text>
      </Text>
    </Block>
  );
}
