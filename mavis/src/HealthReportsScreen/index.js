import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';
import styles from './styles';

export default function HealthReportsScreen({ navigation }) {
  return (
    <Block safe flex style={styles.container}>
      <Block flex style={styles.content}>
        <Text h4 bold style={styles.title}>
          Relatórios de Saúde
        </Text>
        <Text p style={styles.description}>
          Aqui você pode acessar e visualizar seus relatórios de saúde de maneira rápida e prática.
        </Text>

        <Block style={styles.reportList}>
          <Button
            color="info"
            round
            style={styles.reportButton}
            onPress={() => alert('Relatório 1 selecionado')}
          >
            <Block row middle>
              <Icon name="description" family="MaterialIcons" color="white" size={16} />
              <Text style={styles.reportButtonText}>Relatório de Exames</Text>
            </Block>
          </Button>

          <Button
            color="info"
            round
            style={styles.reportButton}
            onPress={() => alert('Relatório 2 selecionado')}
          >
            <Block row middle>
              <Icon name="history" family="MaterialIcons" color="white" size={16} />
              <Text style={styles.reportButtonText}>Histórico de Consultas</Text>
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

