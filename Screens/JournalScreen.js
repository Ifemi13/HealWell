import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JournalScreen = () => {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');

  useEffect(() => {
    loadNote();
  }, []);

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem('journalNote', text);
      setSavedText(text);
    } catch (error) {
      console.log("Error saving note:", error);
    }
  };

  const loadNote = async () => {
    try {
      const value = await AsyncStorage.getItem('journalNote');
      if (value !== null) {
        setSavedText(value);
        setText(value);
      }
    } catch (error) {
      console.log("Error loading note:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Journal</Text>

      <TextInput
        style={styles.input}
        placeholder="Write your thoughts here..."
        placeholderTextColor="#94a3b8"
        value={text}
        onChangeText={setText}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>

      {savedText ? (
        <View style={styles.noteCard}>
          <Text style={styles.savedTitle}>Last Saved Note:</Text>
          <Text style={styles.savedContent}>{savedText}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default JournalScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    //backgroundColor: "#f9fafb",
    backgroundColor: "#C2E9FF", // match app theme
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0F766E", // Teal accent
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    height: 180,
    marginBottom: 15,
    textAlignVertical: "top",
    fontSize: 16,
    color: "#1e293b",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: "#0F766E",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  noteCard: {
    width: "100%",
    backgroundColor: "#ecfdf5",
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#a7f3d0",
  },
  savedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#065f46",
  },
  savedContent: {
    fontSize: 15,
    color: "#1e293b",
    lineHeight: 20,
  },
});

