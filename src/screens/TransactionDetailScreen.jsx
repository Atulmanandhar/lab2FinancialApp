import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BASE_COLOR } from "../consts/colors";

const TransactionDetailScreen = ({ route }) => {
  const transactionItem = route.params;
  const {
    date = "",
    location = "",
    price = 0,
    storeName = "",
  } = transactionItem;
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text style={styles.storeName}>{storeName}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text>Transaction Date</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default TransactionDetailScreen;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: BASE_COLOR,
    paddingTop: 32,
    paddingBottom: 24,
    gap: 4,
  },
  price: {
    textAlign: "center",
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  storeName: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  location: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 14,
  },
  dateContainer: {
    flexDirection: "row",
    paddingTop: 12,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
