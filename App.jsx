import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Details from './screens/Details';
import CreateQuiz from './screens/CreateQuiz';

const Stack = createStackNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

function App() {
    const fadeTransition = {
        gestureDirection: 'horizontal',
        transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
        },
        cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
                opacity: current.progress,
            },
        }),
    };
    const [loaded] = useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf'),
    });
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='CreateQuiz'
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Details} />
                <Stack.Screen name='CreateQuiz' component={CreateQuiz} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
