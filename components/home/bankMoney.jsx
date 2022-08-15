import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({
  conteiner: {},
  amountMoneyConteiner: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  amountMoneySeparator: {
    height: 20,
    width: 3,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignSelf: 'center',
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
  footer: {
    marginTop: -5,
    marginRight: 2,
    textAlign: 'right',
    fontSize: 12,
  },
  hidden: {
    display: 'none',
  },
});

export default BankMoney = (props) => {
  const [hiddenFooter, setHiddenFooter] = useState(styles.footer);

  useEffect(() => {
    isNaN(props.bankMoney)
      ? setHiddenFooter(styles.hidden)
      : setHiddenFooter(styles.footer);
  }, [props.bankMoney]);

  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>BANK</Text>
      <View style={styles.amountMoneyConteiner}>
        <View>
          <Text style={styles.amountMoney}>ARS {props.bankMoney}</Text>
          <Text style={hiddenFooter}>
            (USD {(props.bankMoney / props.dolarBluePrice).toFixed(2)})
          </Text>
        </View>
        <View style={styles.amountMoneySeparator}></View>
        <View>
          <Text style={styles.amountMoney}>USD {props.bankMoneyUSD}</Text>
          <Text style={hiddenFooter}>
            (ARS {parseInt(props.bankMoneyUSD * props.dolarBluePrice)})
          </Text>
        </View>
      </View>
    </View>
  );
};
