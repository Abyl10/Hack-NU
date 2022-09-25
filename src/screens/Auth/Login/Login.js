import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../../context/context";

const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const loginHandle = (userName, password) => {
    // const foundUser = Users.filter((item) => {
    //   return userName == item.username && password == item.password;
    // });

    // if (data.username.length == 0 || data.password.length == 0) {
    //   Alert.alert(
    //     "Wrong Input!",
    //     "Username or password field cannot be empty.",
    //     [{ text: "Okay" }]
    //   );
    //   return;
    // }

    // if (foundUser.length == 0) {
    //   Alert.alert("Invalid User!", "Username or password is incorrect.", [
    //     { text: "Okay" },
    //   ]);
    //   return;
    // }
    signIn();
  };

  const updateEye = () => {
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/Saly-15.png")} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Welcome!</Text>
        <Text style={styles.textForm}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          onChange={(e) => {}}
          placeholder="name@email.com"
        />
        <Text style={styles.textForm}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.textInput}
            onChange={handleLoginChange}
            placeholder="Password"
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

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              signIn();
            }}
          >
            <Text style={{ color: "#fff" }}>Login</Text>
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
          <Text style={{ fontSize: 12, color: "#71727A" }}>Not a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontSize: 12, color: "#006FFD" }}>Register Now</Text>
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
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  header: {
    marginTop: 17,
    marginBottom: 24,
    color: "#000",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 0.5,
    lineHeight: 29,
  },
  wrapper: {
    marginLeft: 24,
    marginRight: 24,
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
    marginTop: 16,
    paddingLeft: 16,
    width: "100%",
  },
  eye: {
    // marginTop: 18,
    marginBottom: 13,
    marginRight: 25,
  },
  eyeEnd: {
    position: "absolute",
    right: 0,
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

export default Login;
