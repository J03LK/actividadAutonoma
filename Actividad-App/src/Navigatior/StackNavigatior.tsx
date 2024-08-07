import { createStackNavigator } from '@react-navigation/stack';

import { CalculadoraScreens } from '../Screens/CalculadoraScreens';
import { HomeScreens } from '../Screens/HomeScreens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="Calculadora" component={CalculadoraScreens} />
        </Stack.Navigator>
    );
};
