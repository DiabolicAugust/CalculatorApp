import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "../styles";
import AppLoading from "expo-app-loading";

export default function CurrencyConvert({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Main");
  };
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + "." + month + "." + year; //format: dd-mm-yyyy;
  };
  let rubl = "";

  const [rub, setRub] = useState("");
  const [uahs, setUah] = useState("");
  const [rubs, setRubs] = useState();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.currencyScreen}>
      <TouchableOpacity style={styles.currencyMore} onPress={loadScene}>
        <Text style={styles.currencyMoreText}>More</Text>
      </TouchableOpacity>
      <View style={styles.currencyTextInputView}>
        <Text style={styles.CurrencyLabelText}>Enter Rubs:</Text>
        <TextInput
          style={styles.currencyTextInput}
          onChangeText={setUah}
          keyboardType="number-pad"
        >
          {parseFloat((rubs * 2.73).toFixed(2))}
        </TextInput>
        <Text style={styles.CurrencyLabelText}>Enter Uahs:</Text>
        <TextInput
          style={styles.currencyTextInput}
          onChangeText={setRubs}
          keyboardType="number-pad"
        >
          {parseFloat(uahs * 0.37).toFixed(2)}
        </TextInput>
      </View>
    </View>
  );
}
