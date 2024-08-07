import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Theme/AppTheme';
import { CustomButton } from '../Components/CustonButton';



interface Props {
    navigation: any;
}

export const HomeScreens = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <CustomButton
                title="Acceder"
                onPress={() => navigation.navigate('CalculadoraScreens')}
            />
        </View>
    );
};

