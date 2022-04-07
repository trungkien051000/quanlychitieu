import i18n from 'i18n-js';
import { SET_LOCALE } from '@redux/actions/type';

// Action set active locale
export const setLocale = (data: string = 'jp') => {
    i18n.locale = data;
    return {
        type: SET_LOCALE,
        data,
    };
};
