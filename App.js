import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListButton from './components/listButton';
import HistoryPrice from './components/historyPrices';
import CurrentMoney from './components/currentMoney';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    marginTop: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cash Counter</Text>
      <CurrentMoney />
      <HistoryPrice />
      <ListButton />
    </View>
  );
}
