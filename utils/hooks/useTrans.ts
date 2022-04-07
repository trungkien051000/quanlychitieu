import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import { en, jp } from '@utils/lang';

const useTrans = () => {
    i18n.locale = 'jp';
    i18n.fallbacks = true;
    const locales = RNLocalize.getLocales();
    if (Array.isArray(locales)) {
        i18n.locale = locales[0].languageTag;
    }

    return i18n.locale === 'jp' ? jp : en;
};

export default useTrans;
