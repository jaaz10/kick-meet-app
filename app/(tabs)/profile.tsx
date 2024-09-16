import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Define colors
const COLORS = {
  primary: "#FF6B35", // Vibrant Orange
  secondary: "#004E89", // Deep Blue
  accent: "#00A896", // Teal
  background: "#EFEFEF", // Light Gray
  textDark: "#333333", // Dark Gray
  textLight: "#FFFFFF", // White
};

export default function ProfileScreen() {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    eventsCreated: 5,
    eventsAttended: 12,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.eventsCreated}</Text>
          <Text style={styles.statLabel}>Events Created</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.eventsAttended}</Text>
          <Text style={styles.statLabel}>Events Attended</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>My Events</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileHeader: {
    backgroundColor: COLORS.secondary,
    padding: 20,
    alignItems: "center",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.textLight,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: COLORS.textLight,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: COLORS.textLight,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: 16,
    fontWeight: "bold",
  },
});
