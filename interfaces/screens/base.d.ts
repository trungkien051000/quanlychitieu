interface IBaseScreenProps {
    children?: React.ReactNode;
}

interface IBaseScreen<P> extends React.FC<P> {
    defaultProps?: Partial<P>;
}
