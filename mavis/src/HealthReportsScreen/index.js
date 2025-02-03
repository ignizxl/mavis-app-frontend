import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';

export default function HealthReportsScreen({ navigation }) {
  return (
    <Block safe flex>
      <Block flex>
        <Text h4 bold>
          Relatórios de Saúde
        </Text>
        <Text p>
          Aqui você pode acessar e visualizar seus relatórios de saúde de maneira rápida e prática.
        </Text>

        <Block>
          <Button
            color="info"
            round
            onPress={() => alert('Relatório 1 selecionado')}
          >
            <Block row middle>
              <Icon name="description" family="MaterialIcons" color="white" size={16} />
              <Text>Relatório de Exames</Text>
            </Block>
          </Button>

          <Button
            color="info"
            round
            onPress={() => alert('Relatório 2 selecionado')}
          >
            <Block row middle>
              <Icon name="history" family="MaterialIcons" color="white" size={16} />
              <Text>Histórico de Consultas</Text>
            </Block>
          </Button>
        </Block>
      </Block>

      <Block>
        <Button
          onlyIcon
          icon="home"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Button
          onlyIcon
          icon="person"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          onPress={() => navigation.navigate('ProfileScreen')}
        />
        <Button
          onlyIcon
          icon="favorite"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          onPress={() => navigation.navigate('HealthReportsScreen')}
        />
        <Button
          onlyIcon
          icon="phone"
          iconFamily="MaterialIcons"
          iconSize={20}
          color="info"
          onPress={() => navigation.navigate('EmergencyContactsScreen')}
        />
      </Block>
    </Block>
  );
}