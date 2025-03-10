import "./global.css";
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import AdditionalInfoScreen from './src/AdditionalInfoScreen';
import WelcomeScreen from './src/WelcomeScreen';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import EmergencyContactsScreen from './src/EmergencyContactsScreen';
import MedicalHistoryScreen from './src/MedicalHistoryScreen';
import AddEmergencyContactScreen from './src/AddEmergencyContactScreen';
import EditEmergencyContactScreen from './src/EditEmergencyContactScreen'; 
import AddMedicalHistoryScreen from './src/AddMedicalHistoryScreen';
import EditProfileScreen from "./src/EditProfileScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="AdditionalInfoScreen"
          component={AdditionalInfoScreen}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="EmergencyContactsScreen"
          component={EmergencyContactsScreen}
        />
        <Stack.Screen
          name="MedicalHistoryScreen"
          component={MedicalHistoryScreen}
        />
        <Stack.Screen
          name="AddEmergencyContactScreen"
          component={AddEmergencyContactScreen}
        />
        <Stack.Screen
          name="EditEmergencyContactScreen" 
          component={EditEmergencyContactScreen}
        />
        <Stack.Screen
          name="AddMedicalHistoryScreen"
          component={AddMedicalHistoryScreen}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
