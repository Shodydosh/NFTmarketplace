import {
    TouchableOpacity,
    View,
    Text,
    ImageBackground,
    Image,
} from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';
import React from 'react';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 30,
                height: 30,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                // ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Image source={imgUrl} style={{ width: 24, height: 24 }}></Image>
        </TouchableOpacity>
    );
};
export const RectangleButton = ({ minWidth, fontSize, handlePress, props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: 'center',
                }}
            >
                Login
            </Text>
        </TouchableOpacity>
    );
};
