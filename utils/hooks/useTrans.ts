import i18n from 'i18n-js';

import { en, jp } from '@utils/lang';

import { useSelector } from 'react-redux';
import { ReduxStates } from '@redux/reducers';

const useTrans = () => {
    const { locale } = useSelector((states: ReduxStates) => states);
    i18n.defaultLocale = 'jp';
    i18n.fallbacks = true;

    return locale === 'jp' ? jp : en;
};

export default useTrans;
