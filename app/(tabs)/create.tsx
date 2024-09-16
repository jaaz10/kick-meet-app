import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";

export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header showSearch={false} />
      <View style={styles.content}>
        <Text style={styles.title}>Create New Post</Text>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          placeholderTextColor="#A1A1AA"
          multiline
        />
        <TouchableOpacity style={styles.addPhotoButton}>
          <Ionicons name="image-outline" size={24} color="#FFFFFF" />
          <Text style={styles.addPhotoText}>Add Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181B",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#27272A",
    borderRadius: 8,
    padding: 15,
    color: "#FFFFFF",
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  addPhotoButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3F3F46",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  addPhotoText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
  },
  postButton: {
    backgroundColor: "#FF4500",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  postButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
