import React from "react";
import { View, StyleSheet, FlatList, TextInput, Text, Image, ScrollView } from "react-native";
import { Avatar, IconButton } from "react-native-paper";

const pinnedChats = [
  {
    id: "1",
    name: "Gelo Pagutayao",
    image: "https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-1/466094183_2929883230516345_5658851681097249318_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeFra_fEhasOssY8_3UlD2tnkU2wVJfgUZSRTbBUl-BRlDzLc9SxrrjhkWwOHg80EmH01IBK_ZG3mpdMpZBBLnba&_nc_ohc=e3qLohjcGQQQ7kNvgEER9DH&_nc_zt=24&_nc_ht=scontent.fdvo2-2.fna&_nc_gid=AhuYv6XkqmRDg_ZBwLNvgTg&oh=00_AYDyj6i86GQIFiuQ9WkIjBybLPp6yzRzohGqxDOzK5oALA&oe=674DC136",
    backgroundColor: "#FA812F",
  },
  {
    id: "2",
    name: "Sophia Anderson",
    image: "https://instagram.fmnl9-5.fna.fbcdn.net/v/t51.29350-15/468435158_618316550759337_4223626235761298123_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmnl9-5.fna.fbcdn.net&_nc_cat=109&_nc_ohc=TkGlfRLo9aoQ7kNvgGqSIVW&_nc_gid=15fa30d0732d453391e757cb49bad2cf&edm=AHedtMEBAAAA&ccb=7-5&ig_cache_key=MzUxMDY1MTAzNjY0ODM3MjcyNQ%3D%3D.3-ccb7-5&oh=00_AYA-NHF65wKdQA9_DN5p-XnMbcsgalRzXRjpctdXwhse6A&oe=674DC7DC&_nc_sid=a3cc6e",
    backgroundColor: "#FAB12F",
  },
  {
    id: "3",
    name: "Francine Clark",
    image: "https://instagram.fmnl9-2.fna.fbcdn.net/v/t51.29350-15/468683678_937761108226631_4835202498873126360_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjB4MTI4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fmnl9-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=2t13geiRT_oQ7kNvgHJp3vP&_nc_gid=9677c4c6b5f14d0da23975f7162fd66e&edm=AHedtMEBAAAA&ccb=7-5&ig_cache_key=MzUxMDg1NTc5MzA4ODEwNDQ2MA%3D%3D.3-ccb7-5&oh=00_AYA8rDzvj2ggAk3-d_8pmhLe0rZXPGWFCReqDGVQ74lB4Q&oe=674DC696&_nc_sid=a3cc6e",
    backgroundColor: "#FA812F",
  },
];

const allChats = [
  { id: "3", name: "Hashirama Minatao", message: "Records a voice message", time: "12:23", isUnread: true },
  { id: "4", name: "Uzumaki Minata", message: "Daniel is typing...", time: "12:13", isUnread: false },
  { id: "5", name: "Naruto Hindi Natuto", message: "Sorry for the delay.", time: "11:53", isUnread: false },
  { id: "6", name: "Siya paden", message: "Eyyy", time: "14:53", isUnread: true },
  { id: "7", name: "Sana ikaw na", message: "Yow, YOw, YOw", time: "12:53", isUnread: true },
  { id: "8", name: "Asan kana ba mahal kooh", message: "Yow, YOw, YOw", time: "12:53", isUnread: true },
  { id: "9", name: "Namimiss kita pag di ka nagpakita", message: "Yow, YOw, YOw", time: "12:53", isUnread: true },
];

export default function MessagingScreen() {
  const renderPinnedChats = ({ item }) => (
    <View style={[styles.pinnedCard, { backgroundColor: item.backgroundColor }]}>
      <Image source={{ uri: item.image }} style={styles.pinnedImage} />
      <Text style={styles.pinnedName}>{item.name}</Text>
    </View>
  );

  const renderAllChats = ({ item }) => (
    <View style={styles.chatItem}>
      <Avatar.Image source={{ uri: "https://i.pinimg.com/236x/e8/7a/ca/e87acad49b06cc11c10a720f5d34bc02.jpg" }} size={50} />
      <View style={styles.chatDetails}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <View style={styles.chatMeta}>
        <Text style={styles.timeText}>{item.time}</Text>
        {item.isUnread && <View style={styles.unreadDot} />}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search or start a message" style={styles.searchInput} />
        <IconButton icon="magnify" />
      </View>
      <Text style={styles.sectionTitle}>Pinned Chats</Text>
      <FlatList
        data={pinnedChats}
        horizontal
        renderItem={renderPinnedChats}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pinnedChatsContainer}
      />
      <Text style={styles.sectionTitle}>All Chats</Text>
      <FlatList
        data={allChats}
        renderItem={renderAllChats}
        keyExtractor={(item) => item.id}
        scrollEnabled={false} // Prevent internal scrolling to work with ScrollView
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF3E2",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  pinnedChatsContainer: {
    paddingVertical: 10,
  },
  pinnedCard: {
    width: 120,
    height: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  pinnedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  pinnedName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  chatDetails: {
    flex: 1,
    marginLeft: 10,
  },
  chatMeta: {
    alignItems: "flex-end",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  messageText: {
    color: "#555",
    fontSize: 14,
  },
  timeText: {
    fontSize: 12,
    color: "#999",
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FF0000",
    marginTop: 5,
  },
});
