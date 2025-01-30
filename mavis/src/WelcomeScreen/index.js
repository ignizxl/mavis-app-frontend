import React from 'react';
import { Block, Text, Button } from 'galio-framework';
import styles from './styles';

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
        onPress={() => navigation.navigate('HomeScreen')}
      >
        Iniciar
      </Button>
    </Block>
  );
}
