import React from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { windowHeight, windowWidth } from "../utils/Dimentions";

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
      <KeyboardAvoidingView>
        <View styles={styles.inputContainer}>
           <View style={styles.iconStyle}>

      </View>
          <TextInput 
              value={labelValue}
              style={styles.input}
              numberOfLines={1}
              placeholder={placeholderText}
              placeholderTextColor='#666'
          {...rest}
          />
        </View>
        </KeyboardAvoidingView>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        
      },
      iconStyle: {
        padding: 10,
        height: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#CCFCFC',
       borderRightWidth: 295,
        width: 50,
      },
      input: {
        padding: 10,
        flex: 100,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      inputField: {
        padding: 10,
        marginTop: 50,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        
      },
    });