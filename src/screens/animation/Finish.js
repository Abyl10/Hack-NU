import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Ring from "./Ring";

const COLOR = "white";
const SIZE = 100;

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        <Image source={require('../../assets/ion_checkmark-done-circle-outline.png')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
  },
  dot: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
