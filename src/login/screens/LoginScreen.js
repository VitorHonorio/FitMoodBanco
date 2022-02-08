import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Platform, StyleSheet, ScrollView} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { useTranslation } from 'react-i18next';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);
  const {t} = useTranslation()

  return(
  <KeyboardAvoidingView style={styles.background} >
  <View style={styles.containerLogo}>
    <Image
    source={require("../../assets/imagens/logo.png")}
    style={styles.Logo}
    />
    </View>
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
         buttonTitle={t("Acessar")}
         onPress={() => login(email, password)}
       />
       
       <TouchableOpacity 
       style={styles.btnForgoPassWord} >
         <Text style={styles.ForgoText}>{t("Esqueci a Senha")}</Text>
       </TouchableOpacity>

      {/*  <SocialButton
            buttonTitle="Logar com o Email"
            btnType=""
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}  
          /> */}
        
       <TouchableOpacity 
       style={styles.btnForgoPassWord}  onPress={() => navigation.navigate('Signup')}>
         <Text style={styles.ForgoText}>{t("Criar conta")}</Text>
       </TouchableOpacity>
       <View/>
       
       <Text></Text>
</KeyboardAvoidingView>
);
}

export default LoginScreen;

const styles = StyleSheet.create({
background:{
flex:1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "#CCFCFC",
},

containerLogo:{
flex:1,
justifyContent: "center",
},

Logo:{
  flex: 1,
  width: 350,
  resizeMode:'contain',
},

btnForgoPassWord:{
marginTop: 20,
},

ForgoText:{
color: "#000000"
},
});