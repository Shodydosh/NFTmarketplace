import { View, SafeAreaView } from 'react-native';
import React from 'react';

import {
    QuizCreateForm,
    QuizCreateThumbnail,
    QuizConfirm,
} from '../components/QuizCreate';

const CreateQuiz = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    marginTop: 50,
                }}
            >
                <View>
                    <QuizCreateForm></QuizCreateForm>
                    {/* <QuizCreateThumbnail></QuizCreateThumbnail> */}
                </View>
                <QuizConfirm></QuizConfirm>
            </View>
        </SafeAreaView>
    );
};

export default CreateQuiz;
