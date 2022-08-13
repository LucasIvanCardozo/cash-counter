import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 5,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
  header: {
    fontSize: 13,
    marginBottom: -10,
    color: 'grey',
    textAlign: 'center',
  },
});

export default CurrentMoney = (props) => {
  const [currentMoney, setCurrentMoney] = useState(0);
  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>WALLET</Text>
      <Text style={styles.text}>${currentMoney}</Text>
    </View>
  );
};
