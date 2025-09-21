import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
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

  const saveDate = async () => {
    try {
      await AsyncStorage.setItem('appointmentDate', date.toISOString());
      setSavedDate(date);

      // Instead of scheduling a system notification, show a popup
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
      <Text style={styles.title}>Set Your Appointment Date</Text>
      <Button title="Pick a Date" onPress={() => setShowPicker(true)} />
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
      <Button title="Save Appointment" onPress={saveDate} />

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
                navigation.replace("MainApp"); // go to main app after closing
              }}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ReminderSetupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  text: { marginVertical: 10 },
  countdown: { marginTop: 15, fontWeight: "bold", fontSize: 16, color: "#0F766E" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalText: { fontSize: 14, textAlign: "center", marginBottom: 20 },
  closeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
    width: "60%",
    alignItems: "center",
  },
  closeText: { color: "#fff", fontWeight: "bold" },
});
