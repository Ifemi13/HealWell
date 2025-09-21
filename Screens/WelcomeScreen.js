// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#C2E9FF' // Light blue background
    }}>
      {/* Logo Spot */}
      <View style={{
        width: 100,
        height: 200,
        backgroundColor: '#A7F3D0', // Light green for logo area
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
      }}>
        <Image 
          source={require('../assets/Logo.png')} 
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>

      <Text style={{ 
        fontSize: 32, 
        fontWeight: 'bold',
        color: '#0F766E',
        marginBottom: 50
      }}>
        Welcome to HealWell!
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#94DD26', // Light green
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3
        }}
        onPress={() => navigation.navigate('SurgeryTypeScreen')}
      >
        <Text style={{ 
          color: '#0F766E', 
          fontSize: 18, 
          fontWeight: 'bold' 
        }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};