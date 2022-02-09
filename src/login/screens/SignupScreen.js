import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet,} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { useTranslation } from 'react-i18next';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);
  const {t} = useTranslation()
  
 
  return(
    <View style={styles.container}>
   
    <FormInput
      labelValue={email}
      onChangeText={(userEmail) => setEmail(userEmail)}
      placeholderText={t("Email")}
      iconType="user"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
    />

    <FormInput
      labelValue={password}
      onChangeText={(userPassword) => setPassword(userPassword)}
      placeholderText={t("Senha")}
      iconType="lock"
      secureTextEntry={true}
    />

   

    <FormButton 
      buttonTitle={t("Cadastrar")}
      onPress={() => register(email, password)}
    />
    
       {/*<View>
        
        <SocialButton
          buttonTitle="Sign Up with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => {}}
        />
      </View> */}

    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate('Login')}>
      <Text style={styles.navButtonText}> {t("Voltar tela de login")}</Text>
    </TouchableOpacity>
  </View>
);
};

export default SignupScreen;

const styles = StyleSheet.create({
container: {
  backgroundColor: '#CCFCFC',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
text: {
  fontFamily: 'Kufam-SemiBoldItalic',
  fontSize: 28,
  marginBottom: 10,
  color: '#051d5f',
},
navButton: {
  marginTop: 15,
},
navButtonText: {
  fontSize: 15,
  fontWeight: '500',
  color: '#000000',
  fontFamily: 'Lato-Regular',
},
});
