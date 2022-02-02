import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Platform, StyleSheet, ScrollView} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

  return(
  <KeyboardAvoidingView style={styles.background} >
  <View style={styles.containerLogo}>
    <Image
    source={require("../assets/logo.png")}
    style={styles.Logo}
    />
    </View>

    <View style={styles.container}>
      <FormInput
      style={styles.input}
      labelValue={email}
      onChangeText={(userEmail) => setEmail(userEmail)}
      placeholderText="Email"   
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      />

       <FormInput
       labelValue={password}
       onChangeText={(userPassword) => setPassword(userPassword)}
       style={styles.input}
       placeholderText="Senha"
       secureTextEntry={true}
       autoCorrect={false}
       />
       
       <FormButton
       buttonTitle="Acessar"
       onPress={() => login(email, password)}
       />
       
       <TouchableOpacity 
       style={styles.btnForgoPassWord} >
         <Text style={styles.ForgoText}>Esqueci a Senha</Text>
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
         <Text style={styles.ForgoText}>Ainda não tem uma conta? Click aqui</Text>
       </TouchableOpacity>

      </View>
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
container:{
flex:1,
alignItems: "center",
justifyContent: "center",
width: "90%",
paddingBottom: 120,//////////////////////////
},
input:{
backgroundColor: "#FFF",
width: "100%",
marginBottom:0,
fontSize: 17,
borderRadius: 7,
padding: 10,
height: 45,
},
btnForgoPassWord:{
marginTop: 30,
},
ForgoText:{
color: "#000000"
},
});