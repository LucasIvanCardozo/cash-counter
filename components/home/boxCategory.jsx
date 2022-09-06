import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  conteiner: {
    height: 130,
    width: 90,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#4db853",
    borderRadius: 10,
    margin: 10,
  },
  iconConteiner: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default BoxCategory = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={styles.conteiner}
    >
      <View style={styles.iconConteiner}>
        <FontAwesome name={props.icon} size={50} color="#8888" />
      </View>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
