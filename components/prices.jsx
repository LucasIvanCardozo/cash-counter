import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
});

export default Prices = ({ mount, color }) => {
  return (
    <View style={styles.contenier}>
      <Text style={{ color: color, fontSize: 22 }}>{mount}</Text>
    </View>
  );
};
