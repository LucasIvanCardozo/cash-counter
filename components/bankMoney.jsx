import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  contenier: {},
  amountMoney: {
    fontSize: 20,
    textAlign: 'right',
  },
  header: {
    fontSize: 13,
    marginBottom: -5,
    color: 'grey',
    textAlign: 'right',
  },
});

export default BankMoney = (props) => {
  const [bankMoney, setbankMoney] = useState(0);
  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>BANK</Text>
      <Text style={styles.amountMoney}>${bankMoney}</Text>
    </View>
  );
};
