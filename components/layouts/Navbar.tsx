import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const Navbar: INavbarComponent<INavbarComponentProps> = () => {
    return (
        <SafeAreaView>
            <Text>Navbar</Text>
        </SafeAreaView>
    );
};

Navbar.defaultProps = {
    isBack: false,
};

export default Navbar;
