import react from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
  },
});
export default MyButton = (props) => {
  return (
    <View style={styles.conteiner}>
      <Button onPress={props.onPress} title={props.title} color={props.color} />
    </View>
  );
};
