// screens/SurgeryTypeScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function SurgeryTypeScreen({ navigation }) {
  const [selectedSurgery, setSelectedSurgery] = useState(null);

  const surgeries = [
    'Hip Replacement',
    'Cardiac Bypass',
    'Spinal Fusion',
    'Knee Replacement',
    'Hernia Repair',
    'Appendectomy',
    'Gallbladder Removal',
    'Cataract Surgery',
    'Tonsillectomy',
    'Ear Tube Surgery',
    'Rhinoplasty',
    'Vasectomy',
    'Mastectomy',
    'Laproscopy',
    'C-Section',
    'Bronchoscopy',
    'Colonoscopy',
    'Endoscopy',
    'Hysterectomy',
    'Prostatectomy'
  ];

  // Hardcoded structured pre-op and post-op info
  const surgeryInfo = {
    'Hip Replacement': {
      preOp: [
        { title: 'Day Before Surgery', description: 'Stop blood thinners. Prepare home for recovery.' },
        { title: 'Morning of Surgery', description: 'Light breakfast if allowed. Take morning meds.' },
        { title: 'Arrival at Hospital', description: 'Check in and meet surgical team.' }
      ],
      postOp: [
        { title: 'Day 1', description: 'Use ice packs, manage pain, gentle movement.' },
        { title: 'Day 2', description: 'Short walks, follow PT instructions.' },
        { title: 'Day 3', description: 'Gradually resume daily activities, monitor incision.' }
      ]
    },
    'Cardiac Bypass': {
      preOp: [
        { title: 'Day Before Surgery', description: 'Stop blood thinners, no heavy meals, arrange support.' },
        { title: 'Morning of Surgery', description: 'Fasting as instructed, take allowed meds.' },
        { title: 'Arrival at Hospital', description: 'Check in, review consent, meet cardiac team.' }
      ],
      postOp: [
        { title: 'Day 1', description: 'Rest, monitor vitals, manage incision.' },
        { title: 'Day 2', description: 'Light activity, follow cardiac rehab instructions.' },
        { title: 'Day 3', description: 'Increase movement gradually, continue monitoring.' }
      ]
    },
    'Knee Replacement': {
      preOp: [
        { title: 'Day Before Surgery', description: 'Do knee exercises, avoid NSAIDs, prep home.' },
        { title: 'Morning of Surgery', description: 'Fasting, take allowed meds.' },
        { title: 'Arrival at Hospital', description: 'Check in and review procedure.' }
      ],
      postOp: [
        { title: 'Day 1', description: 'Ice packs, pain management, gentle movement.' },
        { title: 'Day 2', description: 'PT guided exercises, monitor swelling.' },
        { title: 'Day 3', description: 'Short walks, focus on proper posture.' }
      ]
    },
    // Add other surgeries here with same structure...
  };

  const handleSurgerySelect = (surgery) => setSelectedSurgery(surgery);

  const handleContinuePress = () => {
    if (!selectedSurgery) return;
    const surgeryData = surgeryInfo[selectedSurgery] || { preOp: [], postOp: [] };
    navigation.navigate('ReminderScreen', {
      surgeryName: selectedSurgery,
      surgeryData,
    });
  };
    
    /*
    navigation.navigate('MainApp', {
      screen: 'Pre-Surgery',
      params: { surgeryName: selectedSurgery, surgeryData }
    });
  }; */

  const renderSurgeryItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedSurgery === item ? '#A7F3D0' : '#F0F9FF',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: selectedSurgery === item ? 2 : 1,
        borderColor: selectedSurgery === item ? '#0F766E' : '#BAE6FD'
      }}
      onPress={() => handleSurgerySelect(item)}
    >
      <Text
        style={{
          color: selectedSurgery === item ? '#0F766E' : '#0369A1',
          fontSize: 16,
          fontWeight: selectedSurgery === item ? 'bold' : 'normal',
          textAlign: 'center'
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#E0F2FE' }}>
      <View style={{ flex: 1, paddingTop: 60 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#0F766E',
            textAlign: 'center',
            marginBottom: 30
          }}
        >
          Select Surgery Type
        </Text>

        <FlatList
          data={surgeries}
          renderItem={renderSurgeryItem}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
        />

        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: selectedSurgery ? '#A7F3D0' : '#D1FAE5',
              paddingVertical: 15,
              paddingHorizontal: 40,
              borderRadius: 25,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: selectedSurgery ? 0.2 : 0.1,
              shadowRadius: 4,
              elevation: selectedSurgery ? 3 : 1,
              opacity: selectedSurgery ? 1 : 0.6
            }}
            onPress={handleContinuePress}
            disabled={!selectedSurgery}
          >
            <Text
              style={{
                color: '#0F766E',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
