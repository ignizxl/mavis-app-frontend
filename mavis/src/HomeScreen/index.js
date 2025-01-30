import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <Block safe flex style={styles.container}>
      <Block flex style={styles.content}>
        <Text h4 bold style={styles.title}>
          Olá! Bem-vindo(a) de volta!
        </Text>
        <Text p style={styles.description}>
          Escolha uma das opções abaixo para navegar pelo MAVIS e acessar suas funcionalidades.
        </Text>

        <Button
          color="danger"
          round
          style={styles.emergencyButton}
          onPress={() => alert('Emergência disparada!')}
        >
          <Block row middle style={styles.buttonContent}>
            <Icon name="warning" family="MaterialIcons" color="white" size={16} />
            <Text style={styles.buttonText}>Disparar Emergência</Text>
          </Block>
        </Button>

        <Block style={styles.menu}>
          <Button
            color="info"
            round
            style={styles.button}
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <Block row middle style={styles.buttonContent}>
              <Icon name="person" family="MaterialIcons" color="white" size={16} />
              <Text style={styles.buttonText}>Perfil de Saúde</Text>
            </Block>
          </Button>

          <Button
            color="info"
            round
            style={styles.button}
            onPress={() => navigation.navigate('EmergencyContactsScreen')}
          >
            <Block row middle style={styles.buttonContent}>
              <Icon name="phone" family="MaterialIcons" color="white" size={16} />
              <Text style={styles.buttonText}>Contatos de Emergência</Text>
            </Block>
          </Button>

          <Button
            color="info"
            round
            style={styles.button}
            onPress={() => navigation.navigate('HealthReportsScreen')}
          >
            <Block row middle style={styles.buttonContent}>
              <Icon name="favorite" family="MaterialIcons" color="white" size={16} />
              <Text style={styles.buttonText}>Relatórios de Saúde</Text>
            </Block>
          </Button>
        </Block>
      </Block>

      <Block style={styles.bottomBar}>
        <Button
          onlyIcon
          icon="home"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          style={styles.navButton}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Button
          onlyIcon
          icon="person"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          style={styles.navButton}
          onPress={() => navigation.navigate('ProfileScreen')}
        />
        <Button
          onlyIcon
          icon="favorite"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          style={styles.navButton}
          onPress={() => navigation.navigate('HealthReportsScreen')}
        />
        <Button
          onlyIcon
          icon="phone"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          style={styles.navButton}
          onPress={() => navigation.navigate('EmergencyContactsScreen')}
        />
      </Block>
    </Block>
  );
}
