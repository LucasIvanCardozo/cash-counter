import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { prices } from '../../data/historyPrices.json';
import Prices from './prices';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default HistoryPrice = () => {
  const renderItem = ({ item }) => {
    if (item.mount > 0) {
      return <Prices mount={'+$' + item.mount} color="green" />;
    } else {
      return <Prices mount={'-$' + item.mount * -1} color="red" />;
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          ListEmptyComponent={
            <View>
              <Text style={{ fontSize: 17, textAlign: 'center' }}>Empty</Text>
              <Text style={{ fontSize: 17, textAlign: 'center' }}> Data</Text>
              <Text style={{ fontSize: 17, textAlign: 'center' }}> :(</Text>
            </View>
          }
          data={prices.slice(prices.length - 10)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};
