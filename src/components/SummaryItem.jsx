import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { BASE_COLOR } from "../consts/colors";

const SummaryItem = ({ label, value }) => {
  return (
    <View style={styles.summaryItem}>
      <Text style={styles.summaryLabel}>{label}</Text>
      <Text style={styles.summaryValue}>{value}</Text>
    </View>
  );
};

export default SummaryItem;

const styles = StyleSheet.create({
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    paddingVertical: 8,
    borderColor: BASE_COLOR,
  },
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 14,
    color: "grey",
  },
});
