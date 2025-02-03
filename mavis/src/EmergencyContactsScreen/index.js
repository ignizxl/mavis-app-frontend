import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';
import { StyleSheet } from 'react-native';

export default function EmergencyContactsScreen({ navigation }) {
  return (
    <Block safe flex style={styles.container}>
      <Block flex style={styles.content}>
        <Text h4 bold style={styles.title}>
          Contatos de Emergência
        </Text>
        <Text p style={styles.description}>
          Aqui você pode visualizar e gerenciar seus contatos de emergência.
        </Text>

        <Block style={styles.menu}>
          <Button
            color="info"
            round
            style={styles.button}
            onPress={() => alert('Adicionar Contato')}
          >
            <Block row middle style={styles.buttonContent}>
              <Icon name="person-add" family="MaterialIcons" color="white" size={16} />
              <Text style={styles.buttonText}>Adicionar Contato</Text>
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
