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
    const currentDay = `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}`;
    const previousDay = `${new Date(
      new Date().getTime() - 432000000
    ).getDate()}-${
      new Date(new Date().getTime() - 432000000).getMonth() + 1
    }-${new Date(new Date().getTime() - 432000000).getFullYear()}`;

    fetch(`https://api-dolar-argentina.herokuapp.com/api/${props.divice}`)
      .then((res) => res.json())
      .then((res) => {
        setDiviceSale(parseInt(res.venta));
        setDivicePurchase(parseInt(res.compra));
        fetch(
          `https://mercados.ambito.com//dolar/${props.divicePrevious}/historico-general/${previousDay}/${currentDay}`
        )
          .then((e) => e.json())
          .then((e) => {
            const saleDif = parseInt(res.venta) - parseInt(e[1][2]);
            const purchaseDif = parseInt(res.compra) - parseInt(e[1][1]);
            saleDif > 0
              ? (setDiviceSalePrevious(`▲${saleDif}`),
                setStyleSale({ color: 'green' }))
              : saleDif < 0
              ? (setDiviceSalePrevious(`▼${saleDif * -1}`),
                setStyleSale({ color: 'red' }))
              : (setDiviceSalePrevious(`${saleDif}`),
                setStyleSale({ color: 'green' }));
            purchaseDif > 0
              ? (setDivicePurchasePrevious(`▲${purchaseDif}`),
                setStylePurchase({ color: 'green' }))
              : purchaseDif < 0
              ? (setDivicePurchasePrevious(`▼${purchaseDif * -1}`),
                setStylePurchase({ color: 'red' }))
              : (setDivicePurchasePrevious(`${purchaseDif}`),
                setStylePurchase({ color: 'green' }));
          });
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
          <Text>Sale</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>{diviceSale}</Text>
            <Text style={stylePurchase}>{divicePurchasePrevious}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
