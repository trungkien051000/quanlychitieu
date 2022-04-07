import React from 'react';
import { Text } from 'react-native';

import { useTrans } from '@utils/hooks';

const Home: IHomeScreen<IHomeScreenProps> = () => {
    const trans = useTrans();

    return <Text>{trans.common.welcome}</Text>;
};

export default Home;
