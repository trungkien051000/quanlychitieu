interface IButtonComponentProps extends IBaseCompProps {
    disabled?: boolean;
    style?: object;
    styleText?: object;
    styleIcon?: object;
    text?: string;
    icon?: ImageSourcePropType;
    iconResizeMode?: ImageResizeMode;
    onPress?: () => void;
}

interface IButtonComponent<P = {}> extends IBaseComp<P> {}
