// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import WelcomeScreen from './Screens/WelcomeScreen';
import SurgeryTypeScreen from './Screens/SurgeryTypeScreen';
import PostsurgeryScreen from './Screens/PostsurgeryScreen';
import PresurgeryScreen from './Screens/PresurgeryScreen';
import OperationalInfoScreen from './Screens/OperationalInfoScreen';
import JournalScreen from './Screens/JournalScreen';
import ReminderScreen from './Screens/ReminderScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom tab navigator with your 3 main sections
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Pre-Surgery') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'Post-Surgery') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Operational Info') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Journal') {
            iconName = focused ? 'book': 'book-outline';
          } else if (route.name === 'Reminder') {
            iconName = focused ? 'alarm': 'alarm-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0F766E',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#C2E9FF' },
      })}
    >
      <Tab.Screen name="Pre-Surgery" component={PresurgeryScreen} />
      <Tab.Screen name="Post-Surgery" component={PostsurgeryScreen} />
      <Tab.Screen name="Operational Info" component={OperationalInfoScreen} />
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="Reminder" component={ReminderScreen} />
    </Tab.Navigator>
  );
}

// Stack navigator to handle startup flow first
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="WelcomeScreen"//>
        screenOptions={{
          headerStyle: { backgroundColor: '#C2E9FF' },
          headerTintColor: '#0F766E',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          //options={{ headerShown: true }}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="SurgeryTypeScreen"
          component={SurgeryTypeScreen}
          options={{ title: ''}}//'Select Surgery Type' }}
        />
        <Stack.Screen
          name="ReminderScreen"
          component={ReminderScreen}
          options={{ title: ''}}
        />
        {/* After Welcome flow, we go to the main tabbed app */}
        <Stack.Screen
          name="MainApp"
          component={MainTabs}
          //options={{ headerShown: true }}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
