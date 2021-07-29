import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Main from '../screens/Main'
import Calculator from '../screens/Calculatior';
import { Animated } from 'react-native'
import { TransitionSpecs, HeaderStyleInterpolators, } from '@react-navigation/stack';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';




// const MyTransition = {
//     screenInterpolator: CardStackStyleInterpolator.forVertical,
//     transitionSpec: {
//         duration: 250,
//         easing: Easing.bounce,
//         timing: Animated.timing,
//     }
// }

const Stack = createStackNavigator();

const StackNav = () => {
    return <NavigationContainer>
        <Stack.Navigator
        // screenOptions={MyTransition}

        >
            <Stack.Screen
                name='Main'
                component={Main}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Calculator'
                component={Calculator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer >
}

export default StackNav;
