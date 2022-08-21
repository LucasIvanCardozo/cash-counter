import AsyncStorage from "@react-native-async-storage/async-storage";

const setData = async (name, value) => {
  try {
    value instanceof Object
      ? (value = JSON.stringify(value))
      : value.toString();
    await AsyncStorage.setItem(name, value);

    console.log(
      `\x1B[38;5;216m\x1B[1mSetData\x1B[22m "${name}: ${value}" complete\x1B[39m`
    );
  } catch (e) {
    console.log(e);
  }
};

const getData = async (name, validJson) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value != null) {
      console.log(
        `\x1B[38;5;223m\x1B[1mGetData\x1B[22m "${name}: ${value}" complete\x1B[39m`
      );
      if (validJson) {
        return JSON.parse(value);
      } else {
        return value;
      }
    } else {
      console.log(`No se encontró "${name}"`);
    }
  } catch (e) {
    console.log(e);
  }
};

export { setData, getData };
