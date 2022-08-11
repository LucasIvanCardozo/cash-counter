import { View, StyleSheet } from 'react-native';
import MyButton from './myButton';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#299',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    right: 10,
  },
});

export default ListButton = () => {
  const [toDeposit, setToDeposit] = useState('To deposit');
  const [toExtract, setToExtract] = useState('To extract');

  return (
    <View style={styles.container}>
      <MyButton
        onPress={() => {
          setToDeposit('Deposited');
        }}
        title={toDeposit}
        color="#923"
      />
      <MyButton
        onPress={() => {
          setToExtract('Extracted');
        }}
        title={toExtract}
        color="#923"
      />
    </View>
  );
};
