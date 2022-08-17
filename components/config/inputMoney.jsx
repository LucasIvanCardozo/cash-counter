import { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
    marginBottom: 10,
  },
  textConteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
  },
  text: { fontSize: 18, fontWeight: 'bold', marginRight: 5 },
  textInput: {
    borderWidth: 1,
    height: 50,
    padding: 10,
    fontSize: 15,
  },
});

export default InputMoney = (props) => {
  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.textConteiner}>
        <Text style={styles.text}>{props.title}</Text>
        <Text>{props.currentMoney}</Text>
      </View>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        maxLength={10}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        onEndEditing={props.onEndEditing}
      />
    </SafeAreaView>
  );
};
