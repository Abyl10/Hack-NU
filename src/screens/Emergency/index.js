import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import EmergencyStepTwo from "./EmergencyStepTwo";
import EmergencyStepThree from "./EmergencyStepThree";
import EmergencyStepFour from "./EmergencyStepFour";

const Emergency = () => {
  const [textActive, setTextActive] = useState(2);

  const handleTabChange = () => {
    setTextActive((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.state}>
          <Image
            source={require("../../assets/Success.png")}
            style={styles.icon}
          />
          <Text style={textActive ? styles.textActive : styles.textNotActive}>
            Your request
          </Text>
        </View>
        <View style={styles.state}>
          {textActive > 2 ? (
            <Image
              source={require("../../assets/Success.png")}
              style={styles.icon}
            />
          ) : (
            <View
              style={
                textActive === 2 ? styles.activeCircle : styles.notActiveCircle
              }
            >
              <Text
                style={
                  textActive === 2
                    ? { color: "#fff", fontWeight: "bold" }
                    : { color: "#8F9098", fontWeight: "bold" }
                }
              >
                2
              </Text>
            </View>
          )}
          <Text
            style={textActive === 2 ? styles.textActive : styles.textNotActive}
          >
            Recording
          </Text>
        </View>
        <View style={styles.state}>
          {textActive > 3 ? (
            <Image
              source={require("../../assets/Success.png")}
              style={styles.icon}
            />
          ) : (
            <View
              style={
                textActive === 3 ? styles.activeCircle : styles.notActiveCircle
              }
            >
              <Text
                style={
                  textActive === 3
                  
                    ? { color: "#fff", fontWeight: "bold" }
                    : { color: "#8F9098", fontWeight: "bold" }
                }
              >
                3
              </Text>
            </View>
          )}
          <Text
            style={textActive === 3 ? styles.textActive : styles.textNotActive}
          >
            Analyzing
          </Text>
        </View>
        <View style={styles.state}>
          <View
            style={
              textActive === 4 ? styles.activeCircle : styles.notActiveCircle
            }
          >
            <Text
              style={
                textActive === 4
                  ? { color: "#fff", fontWeight: "bold" }
                  : { color: "#8F9098", fontWeight: "bold" }
              }
            >
              4
            </Text>
          </View>
          <Text
            style={textActive === 4 ? styles.textActive : styles.textNotActive}
          >
            Contact friends
          </Text>
        </View>
      </View>
      {textActive === 2 && <EmergencyStepTwo setTextActive={setTextActive} />}
      {textActive === 3 && <EmergencyStepThree setTextActive={setTextActive} />}
      {textActive === 4 && <EmergencyStepFour />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    padding: 8,
  },
  state: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 89.75,
    height: 67,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textActive: {
    fontSize: 11,
    lineHeight: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#1F2024",
    marginTop: 12,
    order: 1,
    flexGrow: 0,
  },
  textNotActive: {
    color: "#8F9098",
    fontSize: 11,
    lineHeight: 15,
    fontStyle: "normal",
    order: 1,
    fontWeight: "bold",
    flexGrow: 0,
    marginTop: 12,
  },
  activeCircle: {
    backgroundColor: "#006FFD",
    width: 24,
    height: 24,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  notActiveCircle: {
    backgroundColor: "#F8F9FE",
    width: 24,
    height: 24,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Emergency;
