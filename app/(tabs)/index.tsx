import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";

type Post = {
  id: string;
  type: "game" | "news";
  title: string;
  author: string;
  upvotes: number;
  comments: number;
  time: string;
  venue: string;
};

type Venue = {
  id: string;
  name: string;
  address: string;
  rating: number;
};

const dummyVenues: Venue[] = [
  {
    id: "1",
    name: "Central Park",
    address: "1234 Park Ave, City",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Riverside Fields",
    address: "5678 River Rd, City",
    rating: 4.2,
  },
  {
    id: "3",
    name: "Community Soccer Complex",
    address: "910 Main St, City",
    rating: 4.8,
  },
];

const dummyData: Post[] = [
  {
    id: "1",
    type: "game",
    title: "Pickup game at Central Park - Need 3 players",
    author: "soccerFan123",
    upvotes: 15,
    comments: 3,
    time: "2h ago",
    venue: "Central Park",
  },
  {
    id: "2",
    type: "news",
    title: "Local team wins regional championship",
    author: "sportsnews",
    upvotes: 42,
    comments: 7,
    time: "4h ago",
    venue: "",
  },
  {
    id: "3",
    type: "game",
    title: "Women's league game this Saturday",
    author: "leagueOrganizer",
    upvotes: 28,
    comments: 5,
    time: "6h ago",
    venue: "Riverside Fields",
  },
  {
    id: "4",
    type: "news",
    title: "New turf installed at Community Soccer Complex",
    author: "cityUpdates",
    upvotes: 33,
    comments: 2,
    time: "8h ago",
    venue: "Community Soccer Complex",
  },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>(dummyData);
  const [venues] = useState<Venue[]>(dummyVenues);

  const handleVote = (id: string, increment: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, upvotes: Math.max(0, post.upvotes + increment) }
          : post,
      ),
    );
  };

  const handleVenuePress = (venue: Venue) => {
    Alert.alert(
      venue.name,
      `Address: ${venue.address}\nRating: ${venue.rating.toFixed(1)}`,
    );
  };

  const handlePostPress = (post: Post) => {
    Alert.alert(
      post.title,
      `${post.type === "game" ? "Game" : "News"} post by ${post.author}\n${post.time}`,
    );
  };

  const handleCommentPress = (post: Post) => {
    Alert.alert("Comments", `${post.comments} comments for this post`);
  };

  const renderVenue = ({ item }: { item: Venue }) => (
    <TouchableOpacity
      style={styles.venueCard}
      onPress={() => handleVenuePress(item)}
    >
      <View style={styles.venueInfo}>
        <Text style={styles.venueName}>{item.name}</Text>
        <Text style={styles.venueAddress}>{item.address}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.venueRating}>{item.rating.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderPost = ({ item }: { item: Post }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePostPress(item)}>
      <View style={styles.cardHeader}>
        <Text
          style={[
            styles.cardType,
            item.type === "game" ? styles.gameType : styles.newsType,
          ]}
        >
          {item.type === "game" ? "Game" : "News"}
        </Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardMeta}>
          Posted by {item.author} • {item.time}
        </Text>
        {item.venue && <Text style={styles.cardVenue}>at {item.venue}</Text>}
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
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => handleCommentPress(item)}
        >
          <Ionicons name="chatbubble-outline" size={20} color="#A1A1AA" />
          <Text style={styles.commentCount}>{item.comments}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <ScrollView>
        <View style={styles.venuesContainer}>
          <Text style={styles.sectionTitle}>Popular Venues</Text>
          <FlatList
            data={venues}
            renderItem={renderVenue}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.postsContainer}>
          <Text style={styles.sectionTitle}>Games & News</Text>
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#27272A",
  },
  logo: {
    height: 40,
    width: 150,
  },
  profileButton: {
    padding: 5,
  },
  venuesContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  postsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  venueCard: {
    backgroundColor: "#27272A",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    width: 200,
  },
  venueInfo: {
    flex: 1,
  },
  venueName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  venueAddress: {
    fontSize: 12,
    color: "#A1A1AA",
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  venueRating: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 4,
  },
  card: {
    backgroundColor: "#27272A",
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardType: {
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  gameType: {
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
  },
  newsType: {
    backgroundColor: "#2196F3",
    color: "#FFFFFF",
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
  cardVenue: {
    fontSize: 12,
    color: "#60A5FA",
    marginTop: 5,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
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
