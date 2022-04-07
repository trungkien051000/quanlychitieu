interface INavbarComponentProps extends IBaseCompProps {
    isShowStatus?: boolean;
    isShowSetting?: boolean;
    isShowBack?: boolean;
    isSubmitLimit?: boolean;
    isHandleBack?: boolean;
    title: string;
    submitText?: string;
}

interface INavbarComponent<P = {}> extends IBaseComp<P> {}
