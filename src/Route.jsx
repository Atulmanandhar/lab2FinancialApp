import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SummaryScreen from "./screens/SummaryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetailScreen from "./screens/TransactionDetailScreen";
import TransactionListScreen from "./screens/TransactionListScreen";
import { Ionicons } from "@expo/vector-icons";
import { BASE_COLOR } from "./consts/colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TransactionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: BASE_COLOR,
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="TransactionList"
        component={TransactionListScreen}
        options={{
          headerTitle: "Transactions List",
        }}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailScreen}
        options={{
          headerTitle: "Transactions Details",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Route() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: BASE_COLOR,
        headerStyle: {
          backgroundColor: BASE_COLOR,
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Tab.Screen
        name="TransactionScreen"
        component={TransactionStack}
        options={{
          header: () => <></>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document" size={size} color={color} />
          ),
          title: "Transactions",
        }}
      />
      <Tab.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{
          headerTitle: "Summary",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information" size={size} color={color} />
          ),
          title: "Summary",
        }}
      />
    </Tab.Navigator>
  );
}
