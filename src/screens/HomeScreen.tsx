import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

const COLORS = {
  primary: "#FF6B35",
  secondary: "#004E89",
  accent: "#00A896",
  background: "#EFEFEF",
  textDark: "#333333",
  textLight: "#FFFFFF",
};

export default function HomeScreen({ navigation }) {
  const dummyEvent = {
    id: "1",
    title: "Afternoon Kickabout",
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    players: 3,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={dummyEvent.location}
          title={dummyEvent.title}
          description={`${dummyEvent.players} players`}
        />
      </MapView>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("CreateEvent")}
      >
        <Text style={styles.createButtonText}>Create Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  createButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 30,
  },
  createButtonText: {
    color: COLORS.textLight,
    fontWeight: "bold",
  },
});
