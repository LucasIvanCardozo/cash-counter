import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  conteiner: {},
  amountMoneyConteiner: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  amountMoneySeparator: {
    height: 20,
    width: 3,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  amountMoney: {
    fontSize: 20,
  },
  header: {
    fontSize: 13,
    marginBottom: -5,
    color: 'grey',
    textAlign: 'center',
  },
});

export default BankMoney = (props) => {
  const [bankMoney, setbankMoney] = useState(0);
  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>BANK</Text>
      <View style={styles.amountMoneyConteiner}>
        <Text style={styles.amountMoney}>ARS {bankMoney}</Text>
        <View style={styles.amountMoneySeparator}></View>
        <Text style={styles.amountMoney}>USD {bankMoney}</Text>
      </View>
    </View>
  );
};
