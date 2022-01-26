import React from "react";
import { View, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useTranslation } from 'react-i18next'
import Estilo from "../components/Estilo"
import AsyncStorage from '@react-native-async-storage/async-storage'

export function AjudarScreen({ navigation }) {

  const {t} = useTranslation()

  const [feedback, setFeedback] = React.useState("");
  
  async function handleAsyncStorage(){
    await AsyncStorage.setItem("@App1", feedback)
/*     console.log("handleasync", feedback) */
  }
  
    return (
      <>
        <View style={Estilo.Top}>
          <TouchableOpacity
          title="Main"
          onPress={() => navigation.navigate('Main')}>
              <Icon name='arrow-left' size={30} style={Estilo.seta} />
          </TouchableOpacity>
        </View>
        
        <View style={Estilo.App}>
    
          <TextInput style={Estilo.input}
            onChangeText={feedback => {setFeedback(feedback)}}
            value={feedback}
            placeholder={t("Placeholder")}
          />
    
          <TouchableOpacity
            onPress={() => [
              handleAsyncStorage(),
              navigation.navigate('Feedback', {paramKey: feedback})
          ]}>
            <Icon name='send' size={50} style={Estilo.ajuda} />
          </TouchableOpacity>
    
        </View>
      </>
    );
  }