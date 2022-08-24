import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  conteiner: {
    borderRadius: 10,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  diviceConteiner: {
    flexDirection: 'row',
  },
  saleAndPurchaseConteiner: {
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
});

export default Divice = (props) => {
  const [diviceSale, setDiviceSale] = useState('...');
  const [divicePurchase, setDivicePurchase] = useState('...');
  const [diviceSalePrevious, setDiviceSalePrevious] = useState('0');
  const [divicePurchasePrevious, setDivicePurchasePrevious] = useState('0');
  const [styleSale, setStyleSale] = useState({ display: 'none' });
  const [stylePurchase, setStylePurchase] = useState({ display: 'none' });

  useEffect(() => {
    fetch('https://api.bluelytics.com.ar/v2/evolution.json?days=4')
      .then((res) => (res = res.json()))
      .then((res) => {
        const arrayDivice = res.filter((obj) => obj.source == props.divice);

        setDiviceSale(parseInt(arrayDivice[0].value_sell));
        setDivicePurchase(parseInt(arrayDivice[0].value_buy));
        const arrayBuy = arrayDivice.map(function (obj) {
          return parseInt(obj.value_buy);
        });
        const arraySell = arrayDivice.map(function (obj) {
          return parseInt(obj.value_sell);
        });
        const buyDiference = arrayBuy[0] - arrayBuy[1];
        const sellDiference = arraySell[0] - arraySell[1];
        sellDiference > 0
          ? (setDiviceSalePrevious(`▲${sellDiference}`),
            setStyleSale({ color: 'green' }))
          : sellDiference < 0
          ? (setDiviceSalePrevious(`▼${sellDiference * -1}`),
            setStyleSale({ color: 'red' }))
          : (setDiviceSalePrevious(` -${sellDiference}`),
            setStyleSale({ color: 'grey' }));
        buyDiference > 0
          ? (setDivicePurchasePrevious(`▲${buyDiference}`),
            setStylePurchase({ color: 'green' }))
          : buyDiference < 0
          ? (setDivicePurchasePrevious(`▼${buyDiference * -1}`),
            setStylePurchase({ color: 'red' }))
          : (setDivicePurchasePrevious(` -${buyDiference}`),
            setStylePurchase({ color: 'grey' }));
      });
  }, []);

  return (
    <View style={style.conteiner}>
      <Text style={style.header}>{props.name}</Text>
      <View style={style.diviceConteiner}>
        <View style={style.saleAndPurchaseConteiner}>
          <Text>Buy</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>{divicePurchase}</Text>
            <Text style={styleSale}>{diviceSalePrevious}</Text>
          </View>
        </View>
        <View style={style.saleAndPurchaseConteiner}>
          <Text>Sell</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>{diviceSale}</Text>
            <Text style={stylePurchase}>{divicePurchasePrevious}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
