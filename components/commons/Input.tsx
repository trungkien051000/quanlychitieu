import React, { forwardRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

import { input } from '@assets/styles';
const styles = StyleSheet.create({
    ...input,
});

const Input = forwardRef<TextInput, IInputComponentProps>((props, ref) => {
    const { style, onChangeText, onSubmitEditing, returnKeyType, keyboardType } = props;

    return (
        <TextInput
            ref={ref}
            {...props}
            style={[styles.input_container, style]}
            placeholderTextColor={themes.COLOR.WHITE}
            selectionColor={themes.COLOR.WHITE}
            onChangeText={(text) => (onChangeText ? onChangeText(text) : {})}
            onSubmitEditing={() => (onSubmitEditing ? onSubmitEditing() : {})}
            returnKeyType={returnKeyType ? returnKeyType : 'default'}
            keyboardType={keyboardType ? keyboardType : 'default'}
            autoCapitalize="none"
        />
    );
});

Input.defaultProps = {
    defaultValue: '',
    style: {},
    placeholder: '',
    onChangeText: () => {},
    onSubmitEditing: () => {},
    returnKeyType: 'default',
    keyboardType: 'default',
    secureTextEntry: false,
};

export default Input;
