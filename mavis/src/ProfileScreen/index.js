import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';
import styles from './styles';

export default function ProfileScreen({ navigation }) {
  return (
    <Block safe flex style={styles.container}>
      <Block flex style={styles.content}>
        <Text h4 bold style={styles.title}>
          Meu Perfil
        </Text>
        <Text p style={styles.description}>
          Aqui você pode visualizar e editar suas informações de saúde.
        </Text>

        <Block style={styles.menu}>
          <Button
            color="info"
            round
            style={styles.button}
            onPress={() => alert('Editar Perfil')}
          >
            <Block row middle style={styles.buttonContent}>
              <Icon name="edit" family="MaterialIcons" color="white" size={16} />
              <Text style={styles.buttonText}>Editar Perfil</Text>
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
