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
  const [bankMoneyUSD, setBankMoneyUSD] = useState(props.bankMoneyUSD);
  const [bankMoney, setBankMoney] = useState(props.bankMoney);
  const [priceConverterUSD, setPriceConverterUSD] = useState('...');
  const [priceConverterARS, setPriceConverterARS] = useState('...');

  useEffect(() => {
    props.hiddenMoney.value
      ? (setBankMoney(props.hiddenMoney.text),
        setBankMoneyUSD(props.hiddenMoney.text),
        setHiddenFooter(styles.hidden))
      : (setBankMoney(props.bankMoney),
        setBankMoneyUSD(props.bankMoneyUSD),
        setHiddenFooter(styles.footer));
  }, [props.hiddenMoney.value]);

  useEffect(() => {
    if (!isNaN(bankMoney) && bankMoney != props.bankMoney) {
      setBankMoney(props.bankMoney);
    }
    if (!isNaN(bankMoneyUSD) && bankMoneyUSD != props.bankMoneyUSD) {
      setBankMoneyUSD(props.bankMoneyUSD);
    }
    if (!isNaN(props.dolarBluePrice)) {
      setPriceConverterUSD((props.bankMoney / props.dolarBluePrice).toFixed(2));
      setPriceConverterARS(parseInt(props.bankMoneyUSD * props.dolarBluePrice));
    }
  }, [props.dolarBluePrice, props.bankMoneyUSD, props.bankMoney]);

  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>BANK</Text>
      <View style={styles.amountMoneyConteiner}>
        <View>
          <Text style={styles.amountMoney}>ARS {bankMoney}</Text>
          <Text style={hiddenFooter}>(USD {priceConverterUSD})</Text>
        </View>
        <View style={styles.amountMoneySeparator}></View>
        <View>
          <Text style={styles.amountMoney}>USD {bankMoneyUSD}</Text>
          <Text style={hiddenFooter}>(ARS {priceConverterARS})</Text>
        </View>
      </View>
    </View>
  );
};
