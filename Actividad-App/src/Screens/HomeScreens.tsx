import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../Theme/AppTheme';
import { CustomButton } from '../Components/CustonButton';



interface Props {
    navigation: any;
}

export const HomeScreens = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Image
                source={{ uri: 'https://servisoftcorp.com/wp-content/uploads/2018/05/Aplicaciones-M%C3%B3viles-Aplicaciones-M%C3%B3viles.jpg' }}
                style={styles.image} />
            <CustomButton
                title="Acceder"
                onPress={() => navigation.navigate('CalculadoraScreens')}
            />

        </View>
    );
};

