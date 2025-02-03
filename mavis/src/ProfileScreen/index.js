import React from 'react';
import { Block, Text, Button, Icon } from 'galio-framework';

export default function ProfileScreen({ navigation }) {
  return (
    <Block safe flex>
      <Block flex>
        <Text h4 bold>
          Meu Perfil
        </Text>
        <Text p>
          Aqui você pode visualizar e editar suas informações de saúde.
        </Text>

        <Block>
          <Button
            color="info"
            round
            onPress={() => alert('Editar Perfil')}
          >
            <Block row middle>
              <Icon name="edit" family="MaterialIcons" color="white" size={16} />
              <Text>Editar Perfil</Text>
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
