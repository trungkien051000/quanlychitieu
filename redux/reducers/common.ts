import { SET_LOCALE } from '@redux/actions/type';

const localeReducer = (state: string = 'jp', action: ILocaleReduxAction) => {
    switch (action.type) {
        case SET_LOCALE:
            return action.data;
        default:
            return state;
    }
};

export { localeReducer };
