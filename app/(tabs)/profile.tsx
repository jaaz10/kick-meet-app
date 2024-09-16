import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header showSearch={false} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://via.placeholder.com/150" }}
          />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userBio}>
            Soccer enthusiast | Midfielder | Love the game!
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.5k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>356</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {/* Add recent activity items here */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Teams</Text>
          {/* Add favorite teams here */}
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
  content: {
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userBio: {
    color: "#A1A1AA",
    fontSize: 16,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#A1A1AA",
    fontSize: 14,
  },
  editProfileButton: {
    backgroundColor: "#FF4500",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  editProfileButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
