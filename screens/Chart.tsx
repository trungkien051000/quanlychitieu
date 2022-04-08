import React from 'react';
import { Text } from 'react-native';

import { useTrans } from '@utils/hooks';

const Chart: IChartScreen<IChartScreenProps> = () => {
    const trans = useTrans();

    return <Text>{trans.chart.title}</Text>;
};

export default Chart;
