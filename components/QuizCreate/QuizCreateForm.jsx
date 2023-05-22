import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import { FONTS, SIZES, COLORS, SHADOWS, assets } from '../../constants';
import { CircleButton, RectangleButton } from '../Button';

const QuizCreateForm = () => {
    const [currency, setCurrency] = useState('US Dollar');

    const handlePress = () => {
        console.log('Login button pressed');
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.circle} />
                <View
                    style={{
                        backgroundColor: 'cyan',
                        flexDirection: 'row',
                        marginTop: SIZES.font,
                    }}
                >
                    <View style={{ backgroundColor: 'red' }}>
                        <CircleButton
                            backgroundColor={{ backgroundColor: 'cyan' }}
                            imgUrl={assets.left}
                            handlePress={() => console.log('Back 123')}
                            style={{ backgroundColor: 'pink' }}
                        />
                    </View>
                    <View>
                        <Text style={{ backgroundColor: 'red' }}>Login</Text>
                    </View>
                </View>
                <View style={{ marginTop: SIZES.extraLarge }}>
                    <View
                        style={{
                            padding: SIZES.font + 5,
                            margin: SIZES.extraLarge,
                            marginBottom: 0,
                            backgroundColor: 'white',
                            borderRadius: SIZES.font,
                            ...SHADOWS.dark,
                        }}
                    >
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Email:</Text>
                            <TextInput style={styles.inputField} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Password:</Text>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.inputField}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: SIZES.font - 4,
                            marginHorizontal: SIZES.extraLarge + 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View />
                        <View>
                            <TouchableWithoutFeedback
                                onPress={() => alert('Register')}
                            >
                                <Text>456</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        backgroundColor: 'white',
    },
    circle: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '60%',
        backgroundColor: '#ac8cf4', // Replace with your desired background color
        borderBottomLeftRadius: 300, // Adjust the value to get the desired circle shape
        borderBottomRightRadius: 300, // Adjust the value to get the desired circle shape
    },
    inputContainer: {
        paddingHorizontal: SIZES.font,
        marginBottom: SIZES.font,
    },
    inputTitle: {
        fontSize: SIZES.font - 2,
        fontFamily: FONTS.semiBold,
    },
    inputField: {
        backgroundColor: 'white',
        paddingVertical: SIZES.font - 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ac8cf4',
    },
});

export default QuizCreateForm;
