import { useEffect, useState, useLayoutEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import ListButton from '../components/home/listButton';
import CurrentMoney from '../components/home/currentMoney';
import BankMoney from '../components/home/bankMoney';
import Divice from '../components/home/divice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CreateContext } from '../createContext';
import { setData, getData } from '../localStorage/setAndGetFunctions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
    paddingTop: 5,
  },
  circleBackground: {
    top: -80,
    left: -15,
    width: Dimensions.get('window').width + 30,
    height: 150,
    position: 'absolute',
    backgroundColor: 'orange',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  eye: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: 5,
    padding: 5,
    borderRadius: 20,
    zIndex: 100,
  },
  money: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fcfcfc',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 10,
  },
  divices: {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#fcfcfc',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Home = ({ route, navigation }) => {
  const [eyeIcon, seteyeIcon] = useState('eye');
  const [hiddenMoney, setHiddenMoney] = useState({
    text: '****',
    value: false,
  });
  const [dolarBluePrice, setDolarBluePrice] = useState('...');
  const { bankMoney, bankMoneyUSD, currentMoney, setBankMoney } =
    useContext(CreateContext);

  useEffect(() => {
    getData('hiddenMoney', setHiddenMoney, true);
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight
          style={{ padding: 5, borderRadius: 20 }}
          underlayColor={'#ddd4'}
          onPress={() => navigation.navigate('Config')}
        >
          <FontAwesome name={'cog'} size={25} />
        </TouchableHighlight>
      ),
    });
    fetch(`https://api-dolar-argentina.herokuapp.com/api/dolarblue`)
      .then((res) => res.json())
      .then((res) => {
        setDolarBluePrice(parseInt(res.venta));
      });
  }, []);

  const toggleEye = () => {
    setData('hiddenMoney', { text: '****', value: !hiddenMoney.value });
    setHiddenMoney({ text: '****', value: !hiddenMoney.value });
    eyeIcon == 'eye' ? seteyeIcon('eye-slash') : seteyeIcon('eye');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleBackground}></View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.money}>
          <TouchableHighlight
            style={styles.eye}
            onPress={() => {
              toggleEye();
            }}
            underlayColor={'#ddd4'}
          >
            <FontAwesome name={eyeIcon} size={25} color="grey" />
          </TouchableHighlight>

          <CurrentMoney
            dolarBluePrice={dolarBluePrice}
            currentMoney={currentMoney}
            hiddenMoney={hiddenMoney}
          />
          <BankMoney
            dolarBluePrice={dolarBluePrice}
            bankMoney={bankMoney}
            bankMoneyUSD={bankMoneyUSD}
            hiddenMoney={hiddenMoney}
          />
        </View>
        <View style={styles.divices}>
          <Divice name="Dolar Oficial" divice="dolaroficial" />
          <Divice name="Dolar Blue" divice="dolarblue" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
