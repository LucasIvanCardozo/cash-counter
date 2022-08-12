import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListButton from './components/listButton';
import HistoryPrice from './components/historyPrices';
import CurrentMoney from './components/currentMoney';
import BankMoney from './components/bankMoney';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
  money: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cash Counter</Text>
      <View style={styles.money}>
        <BankMoney />
        <CurrentMoney />
      </View>
      <HistoryPrice />
      <ListButton />
    </View>
  );
}
