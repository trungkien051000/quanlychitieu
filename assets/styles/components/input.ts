import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const input = StyleSheet.create({
    input_container: {
        color: themes.COLOR.WHITE,
        borderRadius: 16,
        width: '100%',
        height: 66,
        paddingHorizontal: 20,
        fontWeight: '400',
    },
    input_placeholder: {
        color: themes.COLOR.WHITE,
    },
});

export default input;
