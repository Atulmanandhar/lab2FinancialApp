import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BASE_COLOR } from "../consts/colors";

export default function TransactionItem({ transactionItem }) {
  const { storeName, price } = transactionItem;
  const navigation = useNavigation();

  const onTransactionItemPress = () => {
    navigation.navigate("TransactionDetails", transactionItem);
  };

  return (
    <TouchableOpacity onPress={onTransactionItemPress}>
      <View style={styles.containerItem}>
        <Text>{storeName}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <Ionicons name="chevron-forward" size={24} color={BASE_COLOR} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  price: {
    color: BASE_COLOR,
  },
});
