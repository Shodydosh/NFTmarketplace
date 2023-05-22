import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { FONTS, SIZES, COLORS, SHADOWS, assets } from '../../constants';

const QuizConfirm = () => {
    const handlePress = () => {
        console.log('Login button pressed');
    };

    return (
        <View
            style={{
                width: '100%',
            }}
        >
            <View
                style={{
                    padding: SIZES.font + 5,
                    // margin: SIZES.extraLarge,
                    backgroundColor: 'white',
                    // borderRadius: SIZES.font,s
                    // ...SHADOWS.dark,
                }}
            >
                <View
                    style={{
                        paddingHorizontal: SIZES.font,
                    }}
                >
                    <View
                        style={{
                            paddingBottom: SIZES.font - 5,
                            fontSize: SIZES.base - 5,
                        }}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => alert('Forget password')}
                        >
                            <Text style={{ fontSize: SIZES.font - 2 }}>
                                Forget your password?
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ac8cf4',
                            borderRadius: SIZES.extraLarge,
                            padding: SIZES.small,
                            ...SHADOWS.light,
                        }}
                        onPress={handlePress}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: FONTS.font,
                                color: COLORS.white,
                                textAlign: 'center',
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default QuizConfirm;
