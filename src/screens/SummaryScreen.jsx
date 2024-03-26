import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BASE_COLOR } from "../consts/colors";
import { transactionData } from "../consts/dummyData";
import SummaryItem from "../components/SummaryItem";

export default function SummaryScreen() {
  const totalNumberOfTransactions = transactionData.length;
  const totalBalance = transactionData.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  const highestSpending = transactionData.reduce((acc, curr) => {
    return acc > curr.price ? acc : curr.price;
  }, 0);

  const lowestSpending = transactionData.reduce((acc, curr) => {
    return acc < curr.price ? acc : curr.price;
  }, transactionData[0]);

  return (
    <View style={styles.container}>
      <SummaryItem label={"Transactions"} value={totalNumberOfTransactions} />
      <SummaryItem label={"Balance"} value={`$${totalBalance.toFixed(2)}`} />
      <Text style={styles.summarySubtitle}>High Spending</Text>
      <SummaryItem label={"Nike"} value={`$${highestSpending.toFixed(2)}`} />
      <Text style={styles.summarySubtitle}>Low Spending</Text>
      <SummaryItem
        label={"Tim Hortons"}
        value={`$${lowestSpending.toFixed(2)}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    paddingVertical: 8,
    borderColor: BASE_COLOR,
  },
  summarySubtitle: {
    paddingHorizontal: 16,
    paddingTop: 6,
    fontWeight: "700",
    color: BASE_COLOR,
  },
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 14,
    color: "grey",
  },
});
