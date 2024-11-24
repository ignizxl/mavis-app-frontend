import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, Button } from 'galio-framework';

export default function WelcomeScreen({ navigation }) {
  return (
    <Block safe flex style={styles.container}>
      <Text h4 bold style={styles.title}>
        Bem-vindo(a) ao MAVIS!
      </Text>
      <Text p style={styles.description}>
        Cuidando de quem mora sozinho. O MAVIS ajuda a garantir a sua segurança
        e tranquilidade ao conectar você com seus familiares em momentos de
        necessidade. Configure seu perfil e comece a aproveitar o suporte que
        você merece.
      </Text>
      <Button
        color="info"
        round
        style={styles.button}
      >
        Iniciar
      </Button>
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
    color: '#333',
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#555',
  },
  button: {
    alignSelf: 'center',
    width: '50%',
  },
});
