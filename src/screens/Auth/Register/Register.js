import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import { AuthContext } from "../../../context/context";
const Register = ({ navigation }) => {
  // const [data, setData] = React.useState({
  //   email: "",
  //   password: "",
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   isValidUser: true,
  //   isValidPassword: true,
  // });
  const [open, setOpen] = useState(true);
  const updateEye = () => {
    setOpen(!open);
  };
  const { signUp } = React.useContext(AuthContext);
  const [agree, setAgree] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Register</Text>
        <Text style={styles.subHeader}>Create an account to get started.</Text>

        <Text style={styles.textForm}>Name</Text>
        <TextInput
          style={styles.textInput}
          onChange={(e) => {}}
          placeholder="Name"
        />

        <Text style={styles.textForm}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          onChange={(e) => {}}
          placeholder="name@email.com"
        />

        <Text style={styles.textForm}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.textPassword}
            onChange={(e) => {}}
            placeholder="Create a Password"
            secureTextEntry={open}
          />
          <View style={styles.eyeEnd}>
            <TouchableOpacity onPress={updateEye}>
              {open ? (
                <Feather
                  name="eye-off"
                  color="#9D9FA0"
                  size={19}
                  style={styles.eye}
                />
              ) : (
                <Feather
                  name="eye"
                  color="#9D9FA0"
                  size={19}
                  style={styles.eye}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "#006FFD" : undefined}
          />
          <Text style={styles.checkbxText}>
            I have read and agreed with the terms and conditions
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity disabled={!agree} onPress={() => {}}>
            <Text style={{ color: "#fff" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 12, color: "#71727A" }}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 12, color: "#006FFD" }}>Log in</Text>
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
  header: {
    marginBottom: 8,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.005em",
    marginTop: 80,
    color: "#1F2024",
  },
  subHeader: {
    marginBottom: 24,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.01em",
    color: "#71727A",
  },
  textInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C5C6CC",
    height: 48,
    width: "100%",
    padding: 16,
    marginBottom: 16,
  },
  textForm: {
    marginBottom: 8,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#2F3036",
  },
  passwordWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textPassword: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C5C6CC",
    height: 48,
    // marginBottom: 8,
    paddingLeft: 16,
    width: "100%",
  },
  eye: {
    // marginTop: 18,
    marginRight: 30,
  },
  eyeEnd: {
    position: "absolute",
    right: 0,
  },
  checkboxWrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 20,
  },
  checkbxText: {
    // lineHeight: 30,
    marginLeft: 10,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    width: "100%",
    height: 48,
    backgroundColor: "#006FFD",
    borderRadius: 12,
  },
});

export default Register;
