// screens/PostsurgeryCardiacScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const postSurgerySteps = [
  {
    day: 1,
    title: 'Day 1: ICU Monitoring',
    description: 'You will be closely monitored in the ICU. Focus on breathing exercises.',
  },
  {
    day: 2,
    title: 'Day 2: Begin Walking',
    description: 'With assistance, begin short walks. Use your breathing device every hour.',
  },
  {
    day: 3,
    title: 'Day 3: Light Diet',
    description: 'Transition to a light diet and continue cardiac rehab exercises.',
  },
];

export default function PostsurgeryCardiacScreen() {
  const [currDayIndex, setCurrDayIndex] = useState(0);
  const currStep = postSurgerySteps[currDayIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Cardiac Bypass - Post-Surgery</Text>

      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>{currStep.title}</Text>
        <Text style={styles.stepDescription}>{currStep.description}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.prevButton, currDayIndex === 0 && styles.disabledButton]}
          onPress={() => setCurrDayIndex(currDayIndex - 1)}
          disabled={currDayIndex === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.nextButton, currDayIndex === postSurgerySteps.length - 1 && styles.disabledButton]}
          onPress={() => setCurrDayIndex(currDayIndex + 1)}
          disabled={currDayIndex === postSurgerySteps.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#C2E9FF' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  stepContainer: { marginBottom: 24, padding: 12, borderRadius: 8, backgroundColor: '#E8F7FF' },
  stepTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, textAlign: 'center' },
  stepDescription: { fontSize: 14, textAlign: 'center' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { flex: 1, marginHorizontal: 5, alignItems: 'center', paddingVertical: 15, borderRadius: 25 },
  prevButton: { backgroundColor: '#F44336' },
  nextButton: { backgroundColor: '#4CAF50' },
  disabledButton: { backgroundColor: '#BDBDBD' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
