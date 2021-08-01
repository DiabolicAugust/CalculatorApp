import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, TouchableHighlight, TextInput, Alert } from 'react-native';
import { styles } from '../styles'


export default function Main({ navigation }) {
    const loadSceneCalculator = () => {
        navigation.navigate('Calculator')
    }
    const loadSceneCurrencyConvert = () => {
        navigation.navigate('CurrencyConvert')
    }
    const [modalVisible, setModalVisible] = useState(false);

    return (<View style={styles.overStatusBar}>
        <View style={styles.underStatusBar}><View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={styles.textStyle}>Sign up</Text>
            </TouchableHighlight>
            <Text style={styles.underStatusBarText}>Your Tool Set</Text>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Username</Text>
                    <TextInput style={styles.modalTextInput} defaultValue={'   '}></TextInput>

                    <Text style={styles.modalText}>E-mail</Text>
                    <TextInput style={styles.modalTextInput} defaultValue={'   '}></TextInput>

                    <Text style={styles.modalText}>Password</Text>
                    <TextInput style={styles.modalTextInput} defaultValue={'   '}></TextInput>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.hideButton} onPress={() => { setModalVisible(!modalVisible); }}>
                            <Text style={styles.textStyle}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hideButton} onPress={() => { setModalVisible(!modalVisible); }}>
                            <Text style={styles.textStyle}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </Modal>
        </View>

            <View style={styles.buttonsMainScreenSectionOne}>
                <TouchableOpacity style={styles.ButtonsMainScreen} onPress={loadSceneCalculator}>
                    <Text style={styles.calculatorButtonText}>Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonsMainScreen} onPress={loadSceneCurrencyConvert}>
                    <Text style={styles.currencyConvertButtonText}>Currency{'\n'}Convert</Text>
                </TouchableOpacity>
            </View></View>
    </View>
    );
}