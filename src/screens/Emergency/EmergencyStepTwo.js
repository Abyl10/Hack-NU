import React, { useState } from "react";
import axios from "axios";
import { Text, View, StyleSheet, Image } from "react-native";
import PhoneRing from "../animation/PhoneRing";

const axiosInstance = axios.create({
  baseURL: "https://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

const EmergencyStepTwo = ({ setTextActive }) => {
  const [file, setFile] = useState("scream.wav");
  async function requestPermissions() {
    console.log("Requesting permissions");
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
  }

  const detectRecording = () => {
    const response = axiosInstance
      .post("/sound", { filename: file })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    requestPermissions();
    setTimeout(() => {
      setTextActive((prev) => prev + 1);
    }, 20000);
    detectRecording();
  }, []);

  return (
    <View>
      <Text style={styles.header}>Recording the sounds...</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          After recording the first 20 seconds, we will proceed to the next step
          automatically.
        </Text>
        <PhoneRing />
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

export default EmergencyStepTwo;
