import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CalculadoraScreens } from './src/Screens/CalculadoraScreens';
import { HomeScreens } from './src/Screens/HomeScreens';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreens" component={HomeScreens} options={{ title: 'Bienvenidos' }} />
        <Stack.Screen name="CalculadoraScreens" component={CalculadoraScreens} options={{ title: 'Calculadora' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;