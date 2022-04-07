import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import { button, flexbox } from '@assets/styles';
const styles = StyleSheet.create({
    ...button,
    ...flexbox,
});

const Button: IButtonComponent<IButtonComponentProps> = (props) => {
    const { children, disabled, style, styleText, styleIcon, text, icon, onPress, iconResizeMode } = props;

    return (
        <TouchableOpacity
            style={[styles.button_container, styles.flexRow, style]}
            disabled={disabled}
            onPress={() => (onPress ? onPress() : {})}
        >
            <>
                {icon ? <Image source={icon} style={styleIcon} resizeMode={iconResizeMode ? iconResizeMode : 'cover'} /> : <></>}
                {text ? <Text style={[styleText]}>{text}</Text> : <></>}
                {children ? children : <></>}
            </>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    disabled: false,
    style: {},
    styleText: {},
    text: '',
    styleIcon: {},
    icon: {},
    iconResizeMode: 'cover',
    onPress: () => {},
};

export default Button;
