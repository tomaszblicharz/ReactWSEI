import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Home from "../screens/Home";
import TodoList from "../screens/TodoList";
import Info from "../screens/Info";

const Tab = createBottomTabNavigator();
{
}
const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="#0000ff" size={size} />
          )
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{
          tabBarLabel: "TodoList",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color="#ff0000"
              size={size}
            />
          )
        }}
      />

      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color="#FFD700" size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
