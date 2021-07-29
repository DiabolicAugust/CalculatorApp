import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { render } from "react-dom";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import { styles } from "../styles";

export default function Calculator({ navigation }) {
    const loadScene = () => {
        navigation.navigate('Main')
    }
    const [text, setText] = useState("");
    const [sumText, setSumText] = useState('');
    let firstNumber = "";
    let operator = "";
    let position = "";
    const ResultResult = "";

    let findOperator = function () {
        if (text.includes("+")) {
            return (operator = "+");
        } else if (text.includes("-")) {
            return (operator = "-");
        } else if (text.includes("/")) {
            return (operator = "/");
        } else if (text.includes("*")) {
            return (operator = "*");
        }
    };
    const resultSum = null;

    let result = function () {
        if (operator == "+") {
            setSumText((sumText) => sumText = parseInt(firstNumber) + parseInt(position));
            return parseInt(firstNumber) + parseInt(position);
        } else if (operator == "/") {
            setSumText((sumText) => sumText = parseInt(firstNumber) / parseInt(position));
            return parseInt(firstNumber) / parseInt(position);
        } else if (operator == "*") {
            setSumText((sumText) => sumText = parseInt(firstNumber) * parseInt(position));
            return parseInt(firstNumber) * parseInt(position);
        } else if (operator == "-") {
            setSumText((sumText) => sumText = parseInt(firstNumber) - parseInt(position));
            return parseInt(firstNumber) - parseInt(position);
        } else {
            return "Error";
        }
    };

    let findSecondNumber = function (element) {
        if (element == operator) {
            return text.slice(element, -50);
        }
    };

    return (
        <View style={styles.mainColor}>
            <View style={styles.window}>
                <Text style={styles.result}>{sumText}</Text>
                <Text style={styles.Resulting}>{text}</Text>
            </View>
            <View style={styles.Sections}>
                <TouchableOpacity style={styles.buttonMore} onPress={loadScene}>
                    <Text style={styles.buttonMoreText}>More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonX}
                    onPress={(firstNumber = text.slice(0, text.indexOf(operator)))}
                    onPress={(text) => setText((text) => text + " * ")}
                >
                    <Text style={styles.buttonXText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Sections}>
                <TouchableOpacity
                    style={styles.buttonSeven}
                    onPress={(text) => setText((text) => text + "7")}
                >
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonEight}
                    onPress={(text) => setText((text) => text + "8")}
                >
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonNine}
                    onPress={(text) => setText((text) => text + "9")}
                >
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonSlash}
                    onPress={(firstNumber = text.slice(0, text.indexOf(operator)))}
                    onPress={(text) => setText((text) => text + " / ")}
                >
                    <Text style={styles.buttonOperator}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Sections}>
                <TouchableOpacity
                    style={styles.buttonFour}
                    onPress={(text) => setText((text) => text + "4")}
                >
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonFive}
                    onPress={(text) => setText((text) => text + "5")}
                >
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonSix}
                    onPress={(text) => setText((text) => text + "6")}
                >
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonMinus}
                    onPress={(firstNumber = text.slice(0, text.indexOf(operator)))}
                    onPress={(text) => setText((text) => text + " - ")}
                >
                    <Text style={styles.buttonOperator}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Sections}>
                <TouchableOpacity
                    style={styles.buttonOne}
                    onPress={(text) => setText((text) => text + "1")}
                >
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonTwo}
                    onPress={(text) => setText((text) => text + "2")}
                >
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonThree}
                    onPress={(text) => setText((text) => text + "3")}
                >
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonConcut}
                    onPress={(firstNumber = text.slice(0, text.indexOf(operator) - 1))}
                    onPress={(text) => setText((text) => text + " + ")}
                >
                    <Text style={styles.buttonOperator}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Sections}>
                <TouchableOpacity
                    style={styles.buttonC}
                    onPress={(text) => setText((text) => text.slice(0, -1))}
                >
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button0}
                    onPress={(text) => setText((text) => text + "0")}
                >
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonDot}
                    onPress={(text) => setText((text) => text + ".")}
                >
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonResult}
                    onPress={(position = text.slice(text.indexOf(operator) + 1, 5))}
                    onPress={
                        console.log(findOperator())
                    }

                    onPress={() => (
                        (firstNumber = text.split(operator)[0]),
                        (position = text.split(operator)[1]),
                        result(),
                        console.log(
                            "Results:",
                            firstNumber + " " + operator + " " + position + " = " + result()
                        )
                    )}
                >
                    <Text style={styles.buttonOperator}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
