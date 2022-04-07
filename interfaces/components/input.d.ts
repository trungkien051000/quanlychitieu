interface IInputComponentProps extends IBaseCompProps {
    style?: object;
    placeholder?: string;
    onChangeText?: Function;
    onSubmitEditing?: Function;
    returnKeyType?: ReturnKeyTypeOptions;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    defaultValue?: string;
}

interface IInputComponent<P = {}> extends IBaseComp<P> {}
