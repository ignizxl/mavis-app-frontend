import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';

export default function EmergencyContactsScreen({ navigation }) {
  return (
    <Block safe flex>
      <Block flex>
        <Text h4 bold>
          Contatos de Emergência
        </Text>
        <Text p>
          Aqui você pode visualizar e gerenciar seus contatos de emergência.
        </Text>

        <Block>
          <Button
            color="info"
            round
            onPress={() => alert('Adicionar Contato')}
          >
            <Block row middle>
              <Icon name="person-add" family="MaterialIcons" color="white" size={16} />
              <Text>Adicionar Contato</Text>
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