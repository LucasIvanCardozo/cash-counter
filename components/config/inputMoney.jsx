import { useState } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conteiner: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 5,
    borderRadius: 5,
  },
  textConteiner: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  textInput: {
    borderWidth: 1,
    width: 150,
    height: 45,
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
  },
});

export default InputMoney = (props) => {
  const [placeholder, setPlaceholder] = useState(props.placeholder);
  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.textConteiner}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        maxLength={10}
        placeholder={placeholder}
        onChangeText={props.onChangeText}
        onEndEditing={props.onEndEditing}
      />
    </SafeAreaView>
  );
};
