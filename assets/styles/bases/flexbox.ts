import { StyleSheet } from 'react-native';

const flexbox = StyleSheet.create({
    dFlex: {
        flex: 1,
    },
    flexColum: {
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
    alignSelfStart: {
        alignSelf: 'flex-start',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse',
    },
});

export default flexbox;
