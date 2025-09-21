import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
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
      <Text style={styles.title}>Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your notes..."
        value={text}
        onChangeText={setText}
        multiline
      />
      <Button title="Save Note" onPress={saveNote} />
      <Text style={styles.savedText}>Saved Note:</Text>
      <Text>{savedText}</Text>
    </ScrollView>
  );
};

export default JournalScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 150,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  savedText: { marginTop: 20, fontWeight: 'bold' },
});
