import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const fontSize = {
    font_size_14: {
        fontSize: themes.FONT.SIZE_14,
    },
};

const common = StyleSheet.create({
    ...fontSize,
    font_weight_thin: {
        fontWeight: '100',
    },
    font_weight_light: {
        fontWeight: '200',
    },
    font_weight_regular: {
        fontWeight: '300',
    },
    font_weight_medium: {
        fontWeight: '500',
    },
    font_weight_semibold: {
        fontWeight: '600',
    },
    font_weight_bold: {
        fontWeight: '700',
    },
    color_white: {
        color: themes.COLOR.WHITE,
    },
});

export default common;
