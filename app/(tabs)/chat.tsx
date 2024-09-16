import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";

type Conversation = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
};

const dummyConversations: Conversation[] = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "See you at the game!",
    time: "5m ago",
  },
  {
    id: "2",
    name: "Jane Smith",
    lastMessage: "Great match yesterday!",
    time: "2h ago",
  },
  {
    id: "3",
    name: "Mike Johnson",
    lastMessage: "Are you coming to practice?",
    time: "1d ago",
  },
  {
    id: "4",
    name: "Sarah Williams",
    lastMessage: "Lets organize a friendly match",
    time: "3d ago",
  },
];

export default function ChatScreen() {
  const [conversations, setConversations] =
    useState<Conversation[]>(dummyConversations);
  const router = useRouter();

  const renderConversation = ({ item }: { item: Conversation }) => (
    <TouchableOpacity
      style={styles.conversationItem}
      onPress={() => router.push(`/chat/${item.id}`)}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name[0]}</Text>
      </View>
      <View style={styles.conversationDetails}>
        <Text style={styles.conversationName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.timeStamp}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header showSearch={false} />
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log("New chat")}
      >
        <Ionicons name="chatbubble-ellipses" size={24} color="#18181B" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181B",
  },
  listContainer: {
    padding: 10,
  },
  conversationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#27272A",
    borderRadius: 8,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3F3F46",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  conversationDetails: {
    flex: 1,
  },
  conversationName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  lastMessage: {
    color: "#A1A1AA",
    fontSize: 14,
  },
  timeStamp: {
    color: "#A1A1AA",
    fontSize: 12,
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
