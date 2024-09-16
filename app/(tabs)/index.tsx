import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
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

// Dummy data for events
const allEvents = [
  {
    id: "1",
    title: "Soccer Game",
    date: "2024-09-20",
    time: "18:00",
    location: "Central Park",
    category: "Soccer",
  },
  {
    id: "2",
    title: "Basketball Meetup",
    date: "2024-09-22",
    time: "15:00",
    location: "City Gym",
    category: "Basketball",
  },
  {
    id: "3",
    title: "Tennis Match",
    date: "2024-09-25",
    time: "10:00",
    location: "Community Courts",
    category: "Tennis",
  },
  {
    id: "4",
    title: "Volleyball Tournament",
    date: "2024-09-28",
    time: "14:00",
    location: "Beach Arena",
    category: "Volleyball",
  },
  {
    id: "5",
    title: "Running Club",
    date: "2024-09-30",
    time: "07:00",
    location: "City Park",
    category: "Running",
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(allEvents);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredEvents = allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.category.toLowerCase().includes(query.toLowerCase()),
    );
    setEvents(filteredEvents);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.eventCard}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventCategory}>{item.category}</Text>
      <Text style={styles.eventDetails}>
        {item.date} at {item.time}
      </Text>
      <Text style={styles.eventDetails}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search events or categories"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 15,
  },
  searchBar: {
    backgroundColor: COLORS.textLight,
    padding: 10,
    borderRadius: 25,
    marginBottom: 15,
    fontSize: 16,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  eventCard: {
    backgroundColor: COLORS.textLight,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 5,
  },
  eventCategory: {
    fontSize: 16,
    color: COLORS.accent,
    marginBottom: 5,
    fontWeight: "bold",
  },
  eventDetails: {
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 2,
  },
});
