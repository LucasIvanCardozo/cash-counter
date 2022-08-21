import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 5,
    justifyContent: "center",
  },
  textConteiner: {
    alignSelf: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: 50,
    marginTop: -8,
    marginBottom: -8,
  },
  header: {
    fontSize: 13,
    color: "grey",
    textAlign: "center",
  },
  footer: {
    marginRight: 5,
    textAlign: "right",
    fontSize: 12,
  },
  hidden: {
    display: "none",
  },
});

export default CurrentMoney = (props) => {
  const [hiddenFooter, setHiddenFooter] = useState(styles.footer);
  const [currentMoney, setCurrentMoney] = useState(props.currentMoney);
  const [priceConverter, setPriceConverter] = useState("...");

  useEffect(() => {
    props.hiddenMoney.value
      ? (setCurrentMoney(props.hiddenMoney.text),
        setHiddenFooter(styles.hidden))
      : (setCurrentMoney(props.currentMoney), setHiddenFooter(styles.footer));
  }, [props.hiddenMoney.value]);

  useEffect(() => {
    if (!isNaN(currentMoney) && currentMoney != props.currentMoney) {
      setCurrentMoney(props.currentMoney);
    }
    if (!isNaN(props.dolarBluePrice)) {
      setPriceConverter((props.currentMoney / props.dolarBluePrice).toFixed(2));
    }
  }, [props.dolarBluePrice, props.currentMoney]);

  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>WALLET</Text>
      <View style={styles.textConteiner}>
        <Text style={styles.text}>${currentMoney}</Text>
        <Text style={hiddenFooter}>(USD {priceConverter})</Text>
      </View>
    </View>
  );
};
