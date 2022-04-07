import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const button = StyleSheet.create({
    button_container: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        color: themes.COLOR.WHITE,
        fontWeight: '400',
    },
    button_autoSize: {
        height: 'auto',
        width: 'auto',
    },
    button_title_box: {
        width: 'auto',
        height: 'auto',
        borderRadius: 19,
        paddingHorizontal: 15,
        paddingTop: 9,
        paddingBottom: 12,
    },
});

export default button;
