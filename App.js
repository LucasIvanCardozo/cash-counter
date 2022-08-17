import { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Config from './screens/config';
import { CreateContext } from './createContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [bankMoney, setBankMoney] = useState(0);
  const [bankMoneyUSD, setBankMoneyUSD] = useState(0);
  const [currentMoney, setCurrentMoney] = useState(0);

  return (
    <CreateContext.Provider
      value={{
        bankMoney,
        setBankMoney,
        bankMoneyUSD,
        setBankMoneyUSD,
        currentMoney,
        setCurrentMoney,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Cash Counter',
              headerStyle: {
                backgroundColor: 'orange',
              },
              headerTitleAlign: 'center',
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Config"
            component={Config}
            options={{
              title: 'Configuration',
              headerStyle: {
                backgroundColor: 'orange',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CreateContext.Provider>
  );
}
