import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  contenier: {},
});

export default CurrentMoney = (props) => {
  const [currentMoney, setCurrentMoney] = useState(0);
  return (
    <View style={styles.conteiner}>
      <Text>${currentMoney}</Text>
    </View>
  );
};
