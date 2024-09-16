import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const COLORS = {
  primary: "#FF6B35",
  secondary: "#004E89",
  accent: "#00A896",
  background: "#EFEFEF",
  textDark: "#333333",
  textLight: "#FFFFFF",
};

export default function CreateEventScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const handleCreateEvent = () => {
    console.log({ title, location });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Event Title"
        value={title}
        onChangeText={setTitle}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => setLocation(e.nativeEvent.coordinate)}
      >
        <Marker coordinate={location} />
      </MapView>
      <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
        <Text style={styles.buttonText}>Create Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  input: {
    backgroundColor: COLORS.textLight,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.textLight,
    fontWeight: "bold",
  },
});
