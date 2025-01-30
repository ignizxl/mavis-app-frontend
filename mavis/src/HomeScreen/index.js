import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, Button, Icon } from 'galio-framework';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    fontSize: 16,
    lineHeight: 24,
  },
  menu: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#17a2b8',
  },
  emergencyButton: {
    marginVertical: 20,
    width: '100%',
    backgroundColor: '#dc3545',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  bottomBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
