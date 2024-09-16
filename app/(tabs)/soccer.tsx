import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Placeholder data (replace with real API data later)
const newsItems = [
  { id: 1, title: "Manchester United secures dramatic win", time: "2h ago" },
  { id: 2, title: "Transfer rumors: Mbappe to Real Madrid?", time: "4h ago" },
  { id: 3, title: "Champions League draw announced", time: "6h ago" },
];

const scores = [
  { id: 1, home: "Liverpool", away: "Chelsea", score: "2 - 1" },
  { id: 2, home: "Barcelona", away: "Real Madrid", score: "0 - 0" },
  { id: 3, home: "Bayern Munich", away: "Dortmund", score: "3 - 2" },
];

const schedules = [
  { id: 1, home: "Arsenal", away: "Tottenham", time: "Sat, 15:00" },
  { id: 2, home: "PSG", away: "Lyon", time: "Sun, 20:00" },
  { id: 3, home: "Juventus", away: "AC Milan", time: "Mon, 19:45" },
];

export default function SoccerScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Fetch new data here
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#FF6B35"
          />
        }
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          {newsItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Scores</Text>
          {scores.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.scoreRow}>
                <Text style={styles.teamName}>{item.home}</Text>
                <Text style={styles.score}>{item.score}</Text>
                <Text style={styles.teamName}>{item.away}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Matches</Text>
          {schedules.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>
                {item.home} vs {item.away}
              </Text>
              <Text style={styles.cardSubtitle}>
                <FontAwesome name="clock-o" size={14} color="#A1A1AA" />{" "}
                {item.time}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181B",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#27272A",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#A1A1AA",
  },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamName: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6B35",
    marginHorizontal: 8,
  },
});
