import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Theme/AppTheme';
import { CustomInput } from '../Components/CustonInput';
import { CustomButton } from '../Components/CustonButton';


export const CalculadoraScreens = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const Division = () => {
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        const divisionResultado =
            (numero1 === 0 && numero2 === 0) ? 'INDETERMINACIÓN' :
                (numero2 === 0) ? 'NO EXISTE DIVISIÓN PARA CERO' :
                    (numero1 / numero2).toString();

        setResult(divisionResultado);
    };

    return (
        <View style={styles.container}>
            <CustomInput
                value={num1}
                onChangeText={setNum1}
                placeholder="Número 1"
            />
            <CustomInput
                value={num2}
                onChangeText={setNum2}
                placeholder="Número 2"
            />
            <CustomButton title="Dividir" onPress={Division} />
            <Text style={styles.result1}>Resultado: {result}</Text>
        </View>
    );
};
