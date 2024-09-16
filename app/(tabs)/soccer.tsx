import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";

export default function SoccerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.title}>Latest News</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              New transfer rumors for top league
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Upcoming international friendlies announced
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Star player returns from injury
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              New coach appointed for national team
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Youth academy produces promising talent
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Recent Scores</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team A 2 - 1 Team B</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team C 0 - 0 Team D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team E 3 - 2 Team F</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team G 1 - 1 Team H</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team I 4 - 0 Team J</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Upcoming Matches</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team K vs Team L - June 15</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team M vs Team N - June 18</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team O vs Team P - June 20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team Q vs Team R - June 22</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Team S vs Team T - June 25</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27272A",
  },
  scrollViewContent: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6B35",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3F3F46",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
