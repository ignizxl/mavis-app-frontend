import { StyleSheet } from 'react-native';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import AdditionalInfoScreen from './src/AdditionalInfoScreen';
import WelcomeScreen from './src/WelcomeScreen';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import EmergencyContactsScreen from './src/EmergencyContactsScreen';
import HealthReportsScreen from './src/HealthReportsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AdditionalInfoScreen"
          component={AdditionalInfoScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EmergencyContactsScreen"
          component={EmergencyContactsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HealthReportsScreen"
          component={HealthReportsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
