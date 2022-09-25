import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WebView from "react-native-webview";

const GOOGLE_MAP = "https://geo-devrel-io2021-travel.web.app/#restaurants";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: "100%", width: "100%" }}>
        <WebView
          source={{ uri: GOOGLE_MAP }}
          onLoad={() => console.log("loaded")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
