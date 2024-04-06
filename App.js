import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Route from "./src/Route";
import { Platform } from "react-native";
import { getApps } from "firebase/app";
import { firebaseApp } from "./src/config/firebaseConfig";

if (getApps().length < 1) {
  firebaseApp();
}

export default function App() {
  return (
    <View
      style={{
        marginTop: Platform.OS === "ios" ? 0 : 36,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
