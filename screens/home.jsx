import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import ListButton from '../components/home/listButton';
import CurrentMoney from '../components/home/currentMoney';
import BankMoney from '../components/home/bankMoney';
import Divice from '../components/home/divice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  eye: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: 5,
    padding: 5,
    borderRadius: 20,
    zIndex: 100,
  },
  money: {
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
  divices: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fcfcfc',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Home = () => {
  const [bankMoney, setbankMoney] = useState(120000);
  const [bankMoneyUSD, setbankMoneyUSD] = useState(1000);
  const [currentMoney, setCurrentMoney] = useState(6110);
  const [eyeIcon, seteyeIcon] = useState('eye');
  const [saveBankMoney, setSaveBankMoney] = useState(0);
  const [saveBankMoneyUSD, setSaveBankMoneyUSD] = useState(0);
  const [saveCurrentMoney, setSaveCurrentMoney] = useState(0);
  const [dolarBluePrice, setDolarBluePrice] = useState('...');
  const iconToggle = () => {
    eyeIcon == 'eye'
      ? (seteyeIcon('eye-slash'),
        setSaveBankMoney(bankMoney),
        setSaveBankMoneyUSD(bankMoneyUSD),
        setSaveCurrentMoney(currentMoney),
        setbankMoney('****'),
        setbankMoneyUSD('****'),
        setCurrentMoney('****'))
      : (seteyeIcon('eye'),
        setbankMoney(saveBankMoney),
        setbankMoneyUSD(saveBankMoneyUSD),
        setCurrentMoney(saveCurrentMoney));
  };

  useEffect(() => {
    fetch(`https://api-dolar-argentina.herokuapp.com/api/dolarblue`)
      .then((res) => res.json())
      .then((res) => {
        setDolarBluePrice(parseInt(res.venta));
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.money}>
        <TouchableHighlight
          style={styles.eye}
          onPress={() => {
            iconToggle();
          }}
          underlayColor={'#ddd'}
        >
          <FontAwesome name={eyeIcon} size={25} color="grey" />
        </TouchableHighlight>

        <CurrentMoney
          dolarBluePrice={dolarBluePrice}
          currentMoney={currentMoney}
        />
        <BankMoney
          dolarBluePrice={dolarBluePrice}
          bankMoney={bankMoney}
          bankMoneyUSD={bankMoneyUSD}
        />
      </View>
      <View style={styles.divices}>
        <Divice name="Dolar Oficial" divice="dolaroficial" />
        <Divice name="Dolar Blue" divice="dolarblue" />
      </View>
    </View>
  );
};
