import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../Theme/AppTheme';


interface Props {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

export const CustomInput = ({ value, onChangeText, placeholder }: Props) => (
    <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType="numeric"
    />
);


