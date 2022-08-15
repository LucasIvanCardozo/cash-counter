import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 5,
    justifyContent: 'center',
  },
  textConteiner: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 50,
  },
  header: {
    fontSize: 13,
    marginBottom: -10,
    color: 'grey',
    textAlign: 'center',
  },
  footer: {
    marginTop: -13,
    marginRight: 5,
    textAlign: 'right',
    fontSize: 12,
  },
  hidden: {
    display: 'none',
  },
});

export default CurrentMoney = (props) => {
  const [hiddenFooter, setHiddenFooter] = useState(styles.footer);

  useEffect(() => {
    isNaN(props.currentMoney)
      ? setHiddenFooter(styles.hidden)
      : setHiddenFooter(styles.footer);
  }, [props.currentMoney]);

  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>WALLET</Text>
      <View style={styles.textConteiner}>
        <Text style={styles.text}>${props.currentMoney}</Text>
        <Text style={hiddenFooter}>
          (USD {(props.currentMoney / props.dolarBluePrice).toFixed(2)})
        </Text>
      </View>
    </View>
  );
};
