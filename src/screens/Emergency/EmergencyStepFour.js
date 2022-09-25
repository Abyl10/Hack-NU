import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import Finish from "../animation/Finish";

const EmergencyStepFour = ({}) => {
  return (
    <View>
      <Text style={styles.header}>SMS are sent</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          SMS with your precise position (taking into account your floor) and
          audio analysis sent to your pals. They will get texts shortly.
        </Text>
        <Finish />
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

export default EmergencyStepFour;
