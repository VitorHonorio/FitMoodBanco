import React from "react";
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useTranslation } from 'react-i18next'
import Estilo from "../components/Estilo"
import AsyncStorage from '@react-native-async-storage/async-storage'

export function ArquivoScreen({ navigation }) {
 
  const {t} = useTranslation()

  const [feedbackRecebido, setRecebido] = React.useState();

  async function getData(){
    const response = await AsyncStorage.getItem("@App1")
    if(response){
      setRecebido(response)
    }
  }

  getData()

    return (
      <>
        <View style={Estilo.Top}>
          <TouchableOpacity
            title="Main"
            onPress={() => navigation.navigate('Main')
          }>
            <Icon name='arrow-left' size={30} style={Estilo.seta} />
          </TouchableOpacity>
       </View>

        <View style={Estilo.App}>
          <Text style={Estilo.font}>{t("ArchiveScreen")}{'\n'}{feedbackRecebido}</Text>
        </View>
      </>
    );
  }