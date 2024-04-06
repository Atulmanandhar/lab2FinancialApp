import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { BASE_COLOR } from "../consts/colors";
import { TRANSACTION_COLLECTION_TITLE, db } from "../config/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

export default function AddTransactionScreen({ navigation }) {
  const transactionCollectionRef = collection(db, TRANSACTION_COLLECTION_TITLE);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const addTransactionToFirebase = async () => {
    const generateDocRef = doc(transactionCollectionRef);
    const generateDocId = generateDocRef.id;
    try {
      setIsSubmitting(true);
      await setDoc(generateDocRef, {
        id: generateDocId,
        storeName,
        price: Number(price) ?? 0,
        location,
        date,
      });
      navigation.goBack();
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Store Name"
          value={storeName}
          onChangeText={(text) => setStoreName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Price"
          inputMode="numeric"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Date"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
      </View>
      <View style={styles.submitContainer}>
        {isSubmitting ? (
          <ActivityIndicator size={"large"} color={BASE_COLOR} />
        ) : null}
        <Button
          title="Add Transaction"
          onPress={addTransactionToFirebase}
          disabled={isSubmitting}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 32,
    justifyContent: "space-between",
    flex: 1,
  },
  textInputContainer: {
    gap: 8,
  },
  textInput: {
    borderBottomWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderColor: BASE_COLOR,
  },
  submitContainer: {
    gap: 12,
  },
});
