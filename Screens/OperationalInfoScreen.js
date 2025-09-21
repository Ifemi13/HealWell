// screens/OpInfoScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

export default function OpInfoScreen() {
  // Hardcoded demo data
  const preSurgeryInfo = [
    "Stop Blood Thinners (as advised by doctor)",
    "No Solid Foods 6–8 Hours Before Surgery",
    "No Liquids 2 Hours Before Surgery",
    "Arrange Transportation Home After Surgery",
  ];

  const postSurgeryInfo = [
    "Take Prescribed Pain Medication",
    "Complete Full Course of Antibiotics",
    "Use Ice Packs to Reduce Swelling",
    "Follow Physical Therapy Exercises",
    "Maintain Protein-Rich Diet",
  ];

  // Demo escalation
  const handleEscalation = (info) => {
    Alert.alert(
      "Important Notice",
      `${info} may require careful attention. Please follow medical advice.`,
      [{ text: "OK" }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Operational Info</Text>

      {/* Pre-Surgery Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pre-Op Guidelines</Text>
        {preSurgeryInfo.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleEscalation(item)}
          >
            <Text style={styles.cardText}>• {item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Post-Surgery Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Post-Op Care</Text>
        {postSurgeryInfo.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleEscalation(item)}
          >
            <Text style={styles.cardText}>• {item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C2E9FF",
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000000", // black
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    color: "#444",
  },
});