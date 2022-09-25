import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ClosePeople = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Please add contacts to whom our app will send SMS alerts if you are in
          danger.
        </Text>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.lst}>
            <Text style={styles.textInfo}>Mother</Text>
            <Text style={{ fontSize: 12, color: "#71727A", marginTop: 5, }}>87777777777</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lst}>
            <Text style={styles.textInfo}>Mother</Text>
            <Text style={{ fontSize: 12, color: "#71727A", marginTop: 5, }}>87777777777</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lst}>
            <Text style={styles.textInfo}>Mother</Text>
            <Text style={{ fontSize: 12, color: "#71727A", marginTop: 5, }}>87777777777</Text>
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
  text: {
    fontSize: 12,
    color: "#71727A",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  lst: {
    display: "flex",
    flexDirection: "comumn",
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
    marginTop: 6, 
  },
});

export default ClosePeople;
