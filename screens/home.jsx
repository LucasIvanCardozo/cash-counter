import react from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListButton from '../components/home/listButton';
import CurrentMoney from '../components/home/currentMoney';
import BankMoney from '../components/home/bankMoney';
import Divice from '../components/home/divice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  money: {
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
  divices: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
});

export default Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.money}>
        <CurrentMoney />
        <BankMoney />
      </View>
      <View style={styles.divices}>
        <Divice name="Dolar Blue" divice="dolarblue" />
      </View>
      <ListButton />
    </View>
  );
};
