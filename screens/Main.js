import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles'


export default function Main({ navigation }) {
    const loadScene = () => {
        navigation.navigate('Calculator')
    }


    return (<View style={styles.overStatusBar}>
        <View style={styles.underStatusBar}>
            <Text style={styles.underStatusBarText}>Your Tool Set</Text>
            <TouchableOpacity style={styles.calculatorButton} onPress={loadScene}>
                <Text style={styles.calculatorButtonText}>Calculator</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}