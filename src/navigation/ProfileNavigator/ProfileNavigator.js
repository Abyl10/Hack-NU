import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ClosePeople from "../../screens/Profile/ClosePeople";
import Profile from "../../screens/Profile/Profile";

const Stack = createStackNavigator();

const ProfileNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ClosePeople" component={ClosePeople} />
    </Stack.Navigator>
);

export default ProfileNavigator;