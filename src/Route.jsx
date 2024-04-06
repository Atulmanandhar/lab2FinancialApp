import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SummaryScreen from "./screens/SummaryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetailScreen from "./screens/TransactionDetailScreen";
import TransactionListScreen from "./screens/TransactionListScreen";
import { Ionicons } from "@expo/vector-icons";
import { BASE_COLOR } from "./consts/colors";
import { collection, onSnapshot } from "firebase/firestore";
import { db, TRANSACTION_COLLECTION_TITLE } from "./config/firebaseConfig";
import { TouchableOpacity } from "react-native";
import AddTransactionScreen from "./screens/AddTransactionScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TransactionStack({ transactionData }) {
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
        options={({ navigation }) => ({
          headerTitle: "Transactions List",
          headerRight: () => (
            <TouchableOpacity
              hitSlop={20}
              onPress={() => navigation.navigate("AddTransaction")}
            >
              <Ionicons name="add" size={24} color={"white"} />
            </TouchableOpacity>
          ),
        })}
      >
        {(props) => (
          <TransactionListScreen {...props} transactionData={transactionData} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailScreen}
        options={{
          headerTitle: "Transactions Details",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{
          presentation: "formSheet",
          headerTitle: "Add Transaction",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Route() {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, TRANSACTION_COLLECTION_TITLE),
      (snapshot) => {
        if (snapshot.docs.length > 0) {
          const dataToStore = [];
          snapshot.docs.forEach((sanpItem) =>
            dataToStore.push(sanpItem.data())
          );
          setTransactionData(dataToStore);
        }
      }
    );

    return () => unsub();
  }, []);

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
        options={{
          header: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document" size={size} color={color} />
          ),
          title: "Transactions",
        }}
      >
        {(props) => (
          <TransactionStack {...props} transactionData={transactionData} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="SummaryScreen"
        options={{
          headerTitle: "Summary",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information" size={size} color={color} />
          ),
          title: "Summary",
        }}
      >
        {(props) => (
          <SummaryScreen {...props} transactionData={transactionData} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
