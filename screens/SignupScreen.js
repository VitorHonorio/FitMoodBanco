import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet,} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return(
  <KeyboardAvoidingView style={styles.background} >

    <View style={styles.container}>
      <FormInput
      style={styles.input}
      labelValue={email}
      onChangeText={(userEmail) => setEmail(userEmail)}
      placeholderText="Email"   
      keyboardType="email-address"
      autoCapitalize='none'
      autoCorrect={false}
      />

       <FormInput
       labelValue={password}
       onChangeText={(userPassword) => setPassword(userPassword)}
       style={styles.input}
       placeholderText="Senha"
       secureTextEntry={true}
       />

         <FormInput
       labelValue={confirmPassword}
       onChangeText={(userPassword) => setConfirmPassword(userPassword)}
       style={styles.input}
       placeholderText="Confirmar Senha"
       secureTextEntry={true}
       />
       
       <FormButton
       buttonTitle="Cadastrar"
       onPress={() => register(email, password)}
       />
       
     {/*   <SocialButton
          buttonTitle="Cadastrar com o Email"
          btnType=""
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
          /> */}
          
       <TouchableOpacity 
       style={styles.btnForgoPassWord}  onPress={() => navigation.navigate('Login')}>
         <Text style={styles.ForgoText}>Já tem uma conta? Clique aqui!!</Text>
       </TouchableOpacity>
      </View>
</KeyboardAvoidingView>
);
}

export default SignupScreen;

const styles = StyleSheet.create({
background:{
flex:1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "#CCFCFC",
},
container:{
flex:1,
alignItems: "center",
justifyContent: "center",
width: "90%",
paddingBottom: 50
},
input:{
backgroundColor: "#FFF",
width: "100%",
marginBottom:15,
color: "#222",
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