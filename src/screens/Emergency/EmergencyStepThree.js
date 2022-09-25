import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import Loader from "../animation/Loader";

const EmergencyStepThree = ({ setTextActive }) => {
  useEffect(() => {
    setTimeout(() => {
      setTextActive((prev) => prev + 1);
    }, 15000);
  }, []);
  return (
    <View>
      <Text style={styles.header}>Analyzing the sounds...</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          We will recognize sounds and then send the analysis to your friends
          through SMS.
        </Text>
        <Loader />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 70,
  },
  textWrapper: {
    marginTop: 34,
    width: 216,
    display: "flex",
    alignSelf: "center",
  },
  text: {
    fontSize: 12,
    color: "#71727A",
    textAlign: "center",
  },
});

export default EmergencyStepThree;
