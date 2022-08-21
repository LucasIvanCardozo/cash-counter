import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import InputMoney from "../components/config/inputMoney";
import { CreateContext } from "../createContext";
import { setData } from "../localStorage/setAndGetFunctions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Config = ({ navigation }) => {
  const {
    bankMoney,
    setBankMoney,
    bankMoneyUSD,
    setBankMoneyUSD,
    currentMoney,
    setCurrentMoney,
  } = useContext(CreateContext);
  return (
    <View style={styles.container}>
      <InputMoney
        title={"Wallet"}
        placeholder={`current: $${currentMoney}`}
        onChangeText={(text) => setCurrentMoney(text)}
        onEndEditing={() => {
          currentMoney
            ? (setData("currentMoney", currentMoney),
              ToastAndroid.show(
                `${currentMoney} pesos guardados`,
                ToastAndroid.SHORT
              ))
            : null;
        }}
      />
      <InputMoney
        title="Bank in ARS"
        placeholder={`current: $${bankMoney}`}
        onChangeText={(text) => {
          setBankMoney(text);
        }}
        onEndEditing={() => {
          bankMoney
            ? (setData("bankMoney", bankMoney),
              ToastAndroid.show(
                `${bankMoney} pesos guardados`,
                ToastAndroid.SHORT
              ))
            : null;
        }}
      />
      <InputMoney
        title="Bank in USD"
        placeholder={`current: $${bankMoneyUSD}`}
        onChangeText={(text) => setBankMoneyUSD(text)}
        onEndEditing={() => {
          bankMoneyUSD
            ? (setData("bankMoneyUSD", bankMoneyUSD),
              ToastAndroid.show(
                `${bankMoneyUSD} dolares guardados`,
                ToastAndroid.SHORT
              ))
            : null;
        }}
      />
    </View>
  );
};
