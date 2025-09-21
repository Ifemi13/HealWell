// screens/PresurgeryCardiacScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';

// Import images
const noFoodImage = require('../assets/no_food.png');
const noWaterImage = require('../assets/no_water.png');
const doctorDocumentImage = require('../assets/doctor_document.png');

const preSurgerySteps = [
  {
    day: 1,
    title: '1 Week Before Surgery',
    description: 'Stop blood thinners (as advised). Begin a heart-healthy diet and light walking.',
    image: doctorDocumentImage,
  },
  {
    day: 2,
    title: 'Day Before Surgery',
    description: 'No food after midnight. Pack comfortable clothes and bring medical records.',
    image: noFoodImage,
  },
  {
    day: 3,
    title: 'Morning of Surgery',
    description: 'Do not drink water 2 hours before surgery. Arrive early for bloodwork and consent.',
    image: noWaterImage,
  },
];

export default function PresurgeryCardiacScreen() {
  const [currDayIndex, setCurrDayIndex] = useState(0);
  const currStep = preSurgerySteps[currDayIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Cardiac Bypass - Pre-Surgery</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{currStep.title}</Text>
          <Text style={styles.stepDescription}>{currStep.description}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={currStep.image} style={styles.stepImage} resizeMode="contain" />
        </View>
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
          style={[styles.button, styles.nextButton, currDayIndex === preSurgerySteps.length - 1 && styles.disabledButton]}
          onPress={() => setCurrDayIndex(currDayIndex + 1)}
          disabled={currDayIndex === preSurgerySteps.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#C2E9FF' },
  content: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  stepContainer: { marginBottom: 16, padding: 12, borderRadius: 8, backgroundColor: '#E8F7FF' },
  stepTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  stepDescription: { fontSize: 14, textAlign: 'center' },
  imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  stepImage: { width: 200, height: 200 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingBottom: 20 },
  button: { flex: 1, marginHorizontal: 5, alignItems: 'center', paddingVertical: 15, borderRadius: 25 },
  prevButton: { backgroundColor: '#F44336' },
  nextButton: { backgroundColor: '#4CAF50' },
  disabledButton: { backgroundColor: '#BDBDBD' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
