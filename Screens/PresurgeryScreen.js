// screens/PresurgeryScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';

// Import images at the top level (recommended approach)
const noFoodImage = require('../assets/no_food.png');
const noWaterImage = require('../assets/no_water.png');
const doctorDocumentImage = require('../assets/doctor_document.png');

const preSurgerySteps = [
  {
    day: 1,
    title: 'Day Before Surgery',
    description:
      'Stop blood thinners as instructed by your doctor. Avoid solid foods 6–8 hours before surgery.',
    image: noFoodImage,
  },
  {
    day: 2,
    title: 'Morning of Surgery',
    description:
      'Do not drink any liquids 2 hours before surgery. Take any prescribed medications with a small sip of water if allowed.',
    image: noWaterImage,
  },
  {
    day: 3,
    title: 'Arrival at Hospital',
    description:
      'Check in at the hospital, review your procedure with the medical team, and follow pre-op instructions carefully.',
    image: doctorDocumentImage,
  },
];

export default function PresurgeryScreen() {
  const [currDayIndex, setCurrDayIndex] = useState(0);
  const currStep = preSurgerySteps[currDayIndex];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Content */}
      <View style={styles.content}>
        <Text style={styles.header}>Pre-Surgery Preparation</Text>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{currStep.title}</Text>
          <Text style={styles.stepDescription}>{currStep.description}</Text>
        </View>

        {/* Image Display */}
        <View style={styles.imageContainer}>
          <Image 
            source={currStep.image} 
            style={styles.stepImage} 
            resizeMode="contain"
            onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
          />
        </View>
      </View>

      {/* Bottom Navigation Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.prevButton, currDayIndex === 0 && styles.disabledButton]}
          onPress={() => setCurrDayIndex(currDayIndex - 1)}
          disabled={currDayIndex === 0}
        >
          <Text style={styles.buttonText}>Previous Day</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            styles.nextButton,
            currDayIndex === preSurgerySteps.length - 1 && styles.disabledButton,
          ]}
          onPress={() => setCurrDayIndex(currDayIndex + 1)}
          disabled={currDayIndex === preSurgerySteps.length - 1}
        >
          <Text style={styles.buttonText}>Next Day</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#C2E9FF' },
  content: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  stepContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#E8F7FF',
  },
  stepTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  stepDescription: { fontSize: 14, textAlign: 'center' },
  imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  stepImage: { width: 200, height: 200 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  prevButton: { backgroundColor: '#F44336' },
  nextButton: { backgroundColor: '#4CAF50' },
  disabledButton: { backgroundColor: '#BDBDBD' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});