import { useEffect, useState, useLayoutEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Modal,
  TextInput,
  ToastAndroid,
} from "react-native";
import CurrentMoney from "../components/home/currentMoney";
import BankMoney from "../components/home/bankMoney";
import Divice from "../components/home/divice";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CreateContext } from "../createContext";
import { setData, getData } from "../localStorage/setAndGetFunctions";
import BoxCategory from "../components/home/boxCategory";

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
    width: Dimensions.get("window").width + 30,
    height: 150,
    position: "absolute",
    backgroundColor: "#4db853",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  eye: {
    position: "absolute",
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
    backgroundColor: "#fcfcfc",
    borderColor: "#4db853",
    borderWidth: 1,
    borderRadius: 10,
  },
  divices: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#fcfcfc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "#4db853",
    borderWidth: 1,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalConteiner: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryConteiner: {
    flexDirection: "row",
    height: 300,
    justifyContent: "space-around",
  },
});

export default Home = ({ route, navigation }) => {
  const [eyeIcon, seteyeIcon] = useState("eye");
  const [hiddenMoney, setHiddenMoney] = useState({
    text: "****",
    value: false,
  });
  const [dolarBluePrice, setDolarBluePrice] = useState("...");
  const {
    bankMoney,
    bankMoneyUSD,
    currentMoney,
    setBankMoney,
    setBankMoneyUSD,
    setCurrentMoney,
  } = useContext(CreateContext);
  const [modalExtractVisible, setModalExtractVisible] = useState(false);
  const [modalDepositVisible, setModalDepositVisible] = useState(false);
  const [coins, setCoins] = useState(0);

  //Tomar valores iniciales si estan en el localStorage
  const initValues = async () => {
    const initHiddenMoney = await getData("hiddenMoney", true);
    initHiddenMoney !== undefined
      ? initHiddenMoney.value
        ? toggleEye()
        : null
      : null;
  };

  //Cambiar modo oculto y guardar estado en localStorage
  const toggleEye = () => {
    setData("hiddenMoney", { text: "****", value: !hiddenMoney.value });
    setHiddenMoney({ text: "****", value: !hiddenMoney.value });
    eyeIcon == "eye" ? seteyeIcon("eye-slash") : seteyeIcon("eye");
  };

  useLayoutEffect(() => {
    initValues();
    //Crear icono de configuracion con su funcion
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight
          style={{ padding: 5, borderRadius: 20 }}
          underlayColor={"#ddd4"}
          onPress={() => navigation.navigate("Config")}
        >
          <FontAwesome name={"cog"} size={25} />
        </TouchableHighlight>
      ),
    });
    //Tomar valor del dolar actual
    fetch(`https://api-dolar-argentina.herokuapp.com/api/dolarblue`)
      .then((res) => res.json())
      .then((res) => {
        setDolarBluePrice(parseInt(res.venta));
      });
  }, []);

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
            underlayColor={"#ddd4"}
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
          <Divice name="Dolar Oficial" divice="Oficial" />
          <Divice name="Dolar Blue" divice="Blue" />
        </View>
        <View style={styles.categoryConteiner}>
          <BoxCategory
            icon="arrow-circle-o-down"
            text="Extract"
            onPress={() => setModalExtractVisible(true)}
          />
          <BoxCategory
            icon="arrow-circle-o-up"
            text="Deposit"
            onPress={() => setModalDepositVisible(true)}
          />
          <BoxCategory icon="dollar" text="History" />
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        visible={modalExtractVisible}
        transparent={true}
        onRequestClose={() => setModalExtractVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalConteiner}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Cuanto deseas extraer?
            </Text>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              placeholder={`Puedes hasta $${currentMoney}`}
              onChangeText={(text) => setCoins(text)}
            />
            <Button
              title="Extract"
              onPress={() => {
                if (coins > 0) {
                  console.log(coins);
                  console.log(currentMoney);
                  if (coins > currentMoney) {
                    ToastAndroid.show(
                      "Monto de dinero supera al actual",
                      ToastAndroid.SHORT
                    );
                  } else {
                    setData("currentMoney", (currentMoney - coins).toString());
                    setCurrentMoney((currentMoney - coins).toString());
                    setCoins(0);
                    setModalExtractVisible(false);
                  }
                } else {
                  ToastAndroid.show(
                    "Monto de dinero inválido",
                    ToastAndroid.SHORT
                  );
                }
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        visible={modalDepositVisible}
        transparent={true}
        onRequestClose={() => setModalDepositVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalConteiner}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Cuanto deseas depositar?
            </Text>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(text) => setCoins(text)}
            />
            <Button
              title="Deposit"
              onPress={() => {
                if (coins > 0) {
                  setData("currentMoney", (currentMoney + coins).toString());
                  setCurrentMoney((currentMoney + coins).toString());
                  setCoins(0);
                  setModalDepositVisible(false);
                } else {
                  ToastAndroid.show(
                    "Monto de dinero inválido",
                    ToastAndroid.SHORT
                  );
                }
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
