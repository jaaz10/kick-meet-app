import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  onSearchPress?: () => void;
}

export default function Header({
  title,
  showSearch = false,
  onSearchPress,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoContainer}>
        <FontAwesome name="futbol-o" size={24} color="#FF6B35" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        {showSearch ? (
          <FontAwesome
            name="search"
            size={24}
            color="#FFFFFF"
            onPress={onSearchPress}
          />
        ) : (
          <FontAwesome name="user" size={24} color="#FFFFFF" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#18181B",
  },
  logoContainer: {
    width: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  iconContainer: {
    width: 40,
    alignItems: "flex-end",
  },
});
