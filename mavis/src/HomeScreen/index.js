import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';

export default function HomeScreen({ navigation }) {
  return (
    <Block safe flex>
      <Block flex>
        <Text h4 bold>
          Olá! Bem-vindo(a) de volta!
        </Text>
        <Text p>
          Escolha uma das opções abaixo para navegar pelo MAVIS e acessar suas funcionalidades.
        </Text>

        <Button
          color="danger"
          round
          onPress={() => alert('Emergência disparada!')}
        >
          <Block row middle>
            <Icon name="warning" family="MaterialIcons" color="white" size={16} />
            <Text>Disparar Emergência</Text>
          </Block>
        </Button>

        <Block>
          <Button
            color="info"
            round
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <Block row middle>
              <Icon name="person" family="MaterialIcons" color="white" size={16} />
              <Text>Perfil de Saúde</Text>
            </Block>
          </Button>

          <Button
            color="info"
            round
            onPress={() => navigation.navigate('EmergencyContactsScreen')}
          >
            <Block row middle>
              <Icon name="phone" family="MaterialIcons" color="white" size={16} />
              <Text>Contatos de Emergência</Text>
            </Block>
          </Button>

          <Button
            color="info"
            round
            onPress={() => navigation.navigate('HealthReportsScreen')}
          >
            <Block row middle>
              <Icon name="favorite" family="MaterialIcons" color="white" size={16} />
              <Text>Relatórios de Saúde</Text>
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

