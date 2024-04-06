import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TransactionItem from "../components/TransactionItem";
import { BASE_COLOR } from "../consts/colors";
// import { transactionData } from "../consts/dummyData";

const RenderItem = ({ item }) => {
  return <TransactionItem transactionItem={item} />;
};

const ItemSeperatorComponent = () => {
  return <View style={styles.divider} />;
};

export default function TransactionListScreen({ transactionData = [] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactionData}
        keyExtractor={(item) => item.id}
        renderItem={RenderItem}
        ItemSeparatorComponent={ItemSeperatorComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  divider: {
    height: 1,
    backgroundColor: BASE_COLOR,
    marginVertical: 8,
  },
});
