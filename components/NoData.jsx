import { Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

const NoData = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text
                style={{
                    color: COLORS.white,
                    paddingHorizontal: SIZES.font,
                    fontSize: SIZES.small,
                }}
            >
                NO DATA...
            </Text>
        </View>
    );
};

export default NoData;
