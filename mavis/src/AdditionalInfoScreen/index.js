import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Input, Button, Text, Block } from 'galio-framework';

export default function AdditionalInfoScreen({ navigation }) {
  // dados principais
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [healthCardNumber, setHealthCardNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // endereço
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [referencePoint, setReferencePoint] = useState('');

  // contatos de emergência
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [emergencyEmail, setEmergencyEmail] = useState('');

  return (
    <ScrollView>
      <Block safe flex style={styles.container}>
        <Text h4 style={styles.title}>Informações Adicionais</Text>

        <Input
          placeholder="Nome Completo"
          value={fullName}
          onChangeText={setFullName}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="Data de Nascimento (AAAA-MM-DD)"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="Número do Cartão de Saúde"
          value={healthCardNumber}
          onChangeText={setHealthCardNumber}
          rounded
          style={styles.input}
          keyboardType="numeric"
        />

        <Input
          placeholder="Telefone"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          rounded
          style={styles.input}
          keyboardType="phone-pad"
        />

        <Text style={styles.subtitle}>Endereço</Text>
        <Input
          placeholder="Rua"
          value={street}
          onChangeText={setStreet}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="Número"
          value={number}
          onChangeText={setNumber}
          rounded
          style={styles.input}
          keyboardType="numeric"
        />

        <Input
          placeholder="Bairro"
          value={neighborhood}
          onChangeText={setNeighborhood}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="Cidade"
          value={city}
          onChangeText={setCity}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="Estado"
          value={state}
          onChangeText={setState}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="CEP"
          value={postalCode}
          onChangeText={setPostalCode}
          rounded
          style={styles.input}
          keyboardType="numeric"
        />

        <Input
          placeholder="Ponto de Referência"
          value={referencePoint}
          onChangeText={setReferencePoint}
          rounded
          style={styles.input}
        />

        <Text style={styles.subtitle}>Contato de Emergência</Text>
        <Input
          placeholder="Nome do Contato"
          value={emergencyContactName}
          onChangeText={setEmergencyContactName}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="Relação"
          value={relationship}
          onChangeText={setRelationship}
          rounded
          style={styles.input}
        />

        <Input
          placeholder="Telefone do Contato"
          value={emergencyPhoneNumber}
          onChangeText={setEmergencyPhoneNumber}
          rounded
          style={styles.input}
          keyboardType="phone-pad"
        />

        <Input
          placeholder="Email do Contato"
          value={emergencyEmail}
          onChangeText={setEmergencyEmail}
          rounded
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button
          color="info"
          round
          style={styles.button}
          onPress={() => {
            console.log('Dados salvos com sucesso!');
            navigation.navigate('LoginScreen'); 
          }}
        >
          Finalizar
        </Button>
        
      </Block>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
});
