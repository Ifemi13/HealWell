// // screens/PostsurgeryScreen.js
// // screens/PostsurgeryScreen.js
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export default function PostsurgeryScreen() {
//   // Hard-coded data for hip replacement recovery demo
//   const recoverySteps = [
//     {
//       day: 1,
//       title: 'Day 1: Rest & Ice',
//       description:
//         'Focus on pain management and gentle movements. Use ice packs to reduce swelling.',
//     },
//     {
//       day: 2,
//       title: 'Day 2: Sit & Stand',
//       description: 'Practice sitting and standing safely. Avoid twisting your hip.',
//     },
//     {
//       day: 3,
//       title: 'Day 3: Short Walks',
//       description: 'Take short walks with assistance. Focus on correct posture.',
//     },
//   ];

//   // Tracking the days for recovery
//   const [currDayIndex, setCurrDayIndex] = useState(0);
//   const currStep = recoverySteps[currDayIndex];

//   // Buttons for day tracking
//   const goNext = () => {
//     if (currDayIndex < recoverySteps.length - 1) {
//       setCurrDayIndex(currDayIndex + 1);
//     }
//   };

//   const goPrev = () => {
//     if (currDayIndex > 0) {
//       setCurrDayIndex(currDayIndex - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Hip Replacement Recovery</Text>
//       <View style={styles.stepContainer}>
//         <Text style={styles.stepTitle}>{currStep.title}</Text>
//         <Text style={styles.stepDescription}>{currStep.description}</Text>
//       </View>

//       <View style={styles.buttonRow}>
//         {/* Prev day button */}
//         <TouchableOpacity
//           style={[
//             styles.button,
//             styles.prevButton,
//             currDayIndex === 0 && styles.disabledButton,
//           ]}
//           onPress={goPrev}
//           disabled={currDayIndex === 0}
//         >
//           <Text style={styles.buttonText}>Previous Day</Text>
//         </TouchableOpacity>

//         {/* Next day button */}
//         <TouchableOpacity
//           style={[
//             styles.button,
//             styles.nextButton,
//             currDayIndex === recoverySteps.length - 1 && styles.disabledButton,
//           ]}
//           onPress={goNext}
//           disabled={currDayIndex === recoverySteps.length - 1}
//         >
//           <Text style={styles.buttonText}>Next Day</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#C2E9FF',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   stepContainer: {
//     marginBottom: 24,
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: '#E8F7FF',
//   },
//   stepTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 6,
//   },
//   stepDescription: {
//     fontSize: 14,
//     marginBottom: 6,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center',
//     backgroundColor: '#94DD26', // light green
//     paddingVertical: 15,
//     borderRadius: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   prevButton: {
//     backgroundColor: '#F44336', // red
//   },
//   nextButton: {
//     backgroundColor: '#4CAF50', // green
//   },
//   disabledButton: {
//     backgroundColor: '#BDBDBD',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// screens/PostsurgeryScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';

// Import images for post-surgery recovery steps
const restIceImage = require('../assets/Rest (1).png');      // Add this file to /assets
const sitStandImage = require('../assets/Sitting_Standing.png');    // Add this file to /assets
const shortWalkImage = require('../assets/Short_walks.png');  // Add this file to /assets

const recoverySteps = [
  {
    day: 1,
    title: 'Day 1: Rest & Ice',
    description:
      'Focus on pain management and gentle movements. Use ice packs to reduce swelling.',
    image: restIceImage,
  },
  {
    day: 2,
    title: 'Day 2: Sit & Stand',
    description: 'Practice sitting and standing safely. Avoid twisting your hip.',
    image: sitStandImage,
  },
  {
    day: 3,
    title: 'Day 3: Short Walks',
    description: 'Take short walks with assistance. Focus on correct posture.',
    image: shortWalkImage,
  },
];

export default function PostsurgeryScreen() {
  const [currDayIndex, setCurrDayIndex] = useState(0);
  const currStep = recoverySteps[currDayIndex];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Content */}
      <View style={styles.content}>
        <Text style={styles.header}>Hip Replacement Recovery</Text>

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
            currDayIndex === recoverySteps.length - 1 && styles.disabledButton,
          ]}
          onPress={() => setCurrDayIndex(currDayIndex + 1)}
          disabled={currDayIndex === recoverySteps.length - 1}
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