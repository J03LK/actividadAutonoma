import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../Theme/AppTheme';


interface ButtonProps {
    title: string;
    onPress: () => void;
}

export const CustomButton = ({ title, onPress }: ButtonProps) => (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text
            style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
);


