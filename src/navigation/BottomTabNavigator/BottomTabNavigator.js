import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Emergency, Profile } from "../../screens";
import ProfileNavigator from "../ProfileNavigator/ProfileNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#2ECC71",
        inactiveTintColor: "#6e6969",
        showLabel: false,
        height: 100,
      }}
      // screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/akar-icons_map.png")}
                style={{
                  tintColor: focused ? "#006FFD" : "#B1CBDE",
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Emergency"
        component={Emergency}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#006FFD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                marginBottom: 20,
              }}
            >
              <Image
                source={require("../../assets/ic_baseline-emergency.png")}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/ant-design_user-outlined.png")}
                style={{
                  tintColor: focused ? "#006FFD" : "#B1CBDE",
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
