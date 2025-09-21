import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

const ReminderSetupScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [savedDate, setSavedDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    loadDate();
  }, []);

  const getCountdown = () => {
    if (!savedDate) return null;
    const diffInMs = dayjs(savedDate).endOf("day").diff(dayjs(), "millisecond");
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const saveDate = async () => {
    try {
      await AsyncStorage.setItem('appointmentDate', date.toISOString());
      setSavedDate(date);
      setShowPopup(true);
    } catch (err) {
      console.log("Error saving date:", err);
    }
  };

  const loadDate = async () => {
    try {
      const value = await AsyncStorage.getItem('appointmentDate');
      if (value) setSavedDate(new Date(value));
    } catch (err) {
      console.log("Error loading date:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Your Appointment Date</Text>

      <TouchableOpacity style={styles.button} onPress={() => setShowPicker(true)}>
        <Text style={styles.buttonText}>Pick a Date</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <Text style={styles.text}>Selected: {dayjs(date).format("MMMM D, YYYY")}</Text>

      {savedDate && (
        <Text style={styles.countdown}>
          Countdown: {dayjs(savedDate).diff(dayjs(), "day")} days left
        </Text>
      )}

      <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={saveDate}>
        <Text style={styles.buttonText}>Save Appointment</Text>
      </TouchableOpacity>

      {/* Popup Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={showPopup}
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Appointment Saved</Text>
            <Text style={styles.modalText}>
              Your surgery appointment is on {dayjs(date).format("MMMM D, YYYY")}.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowPopup(false);
                navigation.replace("MainApp");
              }}
              style={[styles.button, styles.okButton]}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ReminderSetupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#C2E9FF", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  text: { marginVertical: 10, fontSize: 16 },
  countdown: { marginTop: 15, fontWeight: "bold", fontSize: 16, color: "#0F766E" },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButton: { backgroundColor: "#2196F3" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#2196F3" },
  modalText: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  okButton: { backgroundColor: "#4CAF50", width: "60%" },
});
