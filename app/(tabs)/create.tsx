import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

export default function CreateEventScreen() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");

  const handleCreateEvent = () => {
    // Basic validation
    if (!title || !date || !time || !location || !maxParticipants) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Here you would typically send this data to your backend
    console.log({ title, date, time, location, maxParticipants });

    // Show success message
    Alert.alert("Success", "Event created successfully!");

    // Clear the form
    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setMaxParticipants("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create New Event</Text>

      <Text style={styles.label}>Event Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter event title"
      />

      <Text style={styles.label}>Date (YYYY-MM-DD)</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter date (e.g., 2024-09-20)"
      />

      <Text style={styles.label}>Time (HH:MM)</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Enter time (e.g., 18:00)"
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter event location"
      />

      <Text style={styles.label}>Max Participants</Text>
      <TextInput
        style={styles.input}
        value={maxParticipants}
        onChangeText={setMaxParticipants}
        placeholder="Enter max participants"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
        <Text style={styles.buttonText}>Create Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EFEFEF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#004E89",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333333",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "#FF6B35",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#FF6B35",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
