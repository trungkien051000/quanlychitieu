import { combineReducers } from 'redux';
import { localeReducer } from './common';
import { loaderReducer } from './api';

const rootReducers = combineReducers({
    locale: localeReducer,
    loader: loaderReducer,
});
export type ReduxStates = ReturnType<typeof rootReducers>;
export default rootReducers;
