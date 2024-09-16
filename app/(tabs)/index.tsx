import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";

type Post = {
  id: string;
  title: string;
  author: string;
  upvotes: number;
  comments: number;
  time: string;
  subreddit: string;
};

type Subreddit = {
  id: string;
  name: string;
  members: number;
  description: string;
  image: string;
};

const dummySubreddits: Subreddit[] = [
  {
    id: "1",
    name: "MillenniumPark",
    members: 50000,
    description: "All about Chicago's famous Millennium Park",
    image: "https://example.com/millennium_park.jpg",
  },
  {
    id: "2",
    name: "LincolnParkZoo",
    members: 35000,
    description: "Updates and discussions about Lincoln Park Zoo",
    image: "https://example.com/lincoln_park_zoo.jpg",
  },
  {
    id: "3",
    name: "GrantPark",
    members: 30000,
    description: "Events and news from Grant Park",
    image: "https://example.com/grant_park.jpg",
  },
];

const dummyData: Post[] = [
  {
    id: "1",
    title: "New art installation at The Bean",
    author: "artLover",
    upvotes: 15,
    comments: 3,
    time: "2h ago",
    subreddit: "MillenniumPark",
  },
  {
    id: "2",
    title: "Upcoming events at Pritzker Pavilion",
    author: "musicFan",
    upvotes: 7,
    comments: 1,
    time: "4h ago",
    subreddit: "MillenniumPark",
  },
  {
    id: "3",
    title: "New lion cubs born at Lincoln Park Zoo",
    author: "zooEnthusiast",
    upvotes: 22,
    comments: 5,
    time: "6h ago",
    subreddit: "LincolnParkZoo",
  },
  {
    id: "4",
    title: "Photos from the annual ZooLights event",
    author: "nightPhotographer",
    upvotes: 9,
    comments: 2,
    time: "8h ago",
    subreddit: "LincolnParkZoo",
  },
  {
    id: "5",
    title: "Taste of Chicago returning to Grant Park",
    author: "foodieExplorer",
    upvotes: 18,
    comments: 4,
    time: "10h ago",
    subreddit: "GrantPark",
  },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>(dummyData);
  const [subreddits] = useState<Subreddit[]>(dummySubreddits);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      const filteredPosts = dummyData.filter(
        (post) =>
          post.title.toLowerCase().includes(text.toLowerCase()) ||
          post.author.toLowerCase().includes(text.toLowerCase()) ||
          post.subreddit.toLowerCase().includes(text.toLowerCase()),
      );
      setPosts(filteredPosts);
    } else {
      setPosts(dummyData);
    }
  };

  const handleVote = (id: string, increment: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, upvotes: Math.max(0, post.upvotes + increment) }
          : post,
      ),
    );
  };

  const renderSubreddit = ({ item }: { item: Subreddit }) => (
    <TouchableOpacity style={styles.subredditCard}>
      <Image source={{ uri: item.image }} style={styles.subredditImage} />
      <View style={styles.subredditInfo}>
        <Text style={styles.subredditName}>{item.name}</Text>
        <Text style={styles.subredditMembers}>{item.members} members</Text>
        <Text style={styles.subredditDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardSubreddit}>r/{item.subreddit}</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardMeta}>
          Posted by {item.author} • {item.time}
        </Text>
      </View>
      <View style={styles.cardActions}>
        <View style={styles.voteContainer}>
          <TouchableOpacity
            onPress={() => handleVote(item.id, 1)}
            style={styles.voteButton}
          >
            <Ionicons name="chevron-up" size={24} color="#A1A1AA" />
          </TouchableOpacity>
          <Text style={styles.voteCount}>{item.upvotes}</Text>
          <TouchableOpacity
            onPress={() => handleVote(item.id, -1)}
            style={styles.voteButton}
          >
            <Ionicons name="chevron-down" size={24} color="#A1A1AA" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.commentButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#A1A1AA" />
          <Text style={styles.commentCount}>{item.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header title="Home" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search posts..."
          placeholderTextColor="#A1A1AA"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <ScrollView>
        <View style={styles.subredditsContainer}>
          <Text style={styles.sectionTitle}>Chicago Parks Subreddits</Text>
          <FlatList
            data={subreddits}
            renderItem={renderSubreddit}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181B",
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "#27272A",
  },
  searchInput: {
    backgroundColor: "#3F3F46",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  subredditsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subredditCard: {
    flexDirection: "row",
    backgroundColor: "#27272A",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    width: 300,
  },
  subredditImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  subredditInfo: {
    flex: 1,
  },
  subredditName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subredditMembers: {
    fontSize: 12,
    color: "#A1A1AA",
  },
  subredditDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#FFFFFF",
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: "#27272A",
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardSubreddit: {
    fontSize: 14,
    color: "#60A5FA",
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  cardMeta: {
    fontSize: 12,
    color: "#A1A1AA",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  voteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  voteButton: {
    padding: 5,
  },
  voteCount: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  commentCount: {
    color: "#A1A1AA",
    marginLeft: 5,
  },
});
