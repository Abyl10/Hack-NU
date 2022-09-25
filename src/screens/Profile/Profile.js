import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/Avatar.png")}
            style={{ width: 82, height: 82 }}
          />
          <View style={styles.imgTextWrapper}>
            <Text style={styles.imgText}>Shynar Mars</Text>
            <Text style={styles.imgTextSmall}>email@gmail.com</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.lst} onPress={() => {navigation.push("ClosePeople")}}>
            <Text style={styles.textInfo}>Close People</Text>
            <Feather name="chevron-right" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.lst}>
            <Text style={styles.textInfo}>Recent Calls</Text>
            <Feather name="chevron-right" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.lst}>
            <Text style={styles.textInfo}>LogOut</Text>
            <Feather name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    marginLeft: 24,
    marginRight: 24,
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  imgTextWrapper: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
  },
  imgText: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 19,
  },
  imgTextSmall: {
    fontSize: 12,
    color: "#71727A",
    lineHeight: 14,
    marginTop: 4,
  },
  lst: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 52,
    borderTopColor: "#D4D6DD",
    borderTopWidth: 1,
  },
  infoContainer: {
    marginTop: 24,
  },
  textInfo: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Profile;
