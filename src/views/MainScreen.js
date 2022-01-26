import React, {useContext} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import { useTranslation } from 'react-i18next';
import EmoticonIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Estilo from '../components/Estilo';
import {AuthContext} from '../../navigation/AuthProvider'


export function MainScreen({ navigation }) {

  const {t} = useTranslation()
  const { logout} = useContext(AuthContext);

    return (
      <SafeAreaView style={Estilo.App}>

        <Image style={Estilo.logo} source={require("../assets/imagens/logo.png")}/>

        <Text style={Estilo.titlefont}>{t("MainScreen")}</Text>
  
        <View style={Estilo.container}>
        <TouchableOpacity
          title="Pleno"
          onPress={() => navigation.navigate('Pleno')}>
          <EmoticonIcon name='emoticon-cool-outline' size={70} style={Estilo.plenoemoticon}/>
        </TouchableOpacity>
  
        <TouchableOpacity
          title="Feliz"
          onPress={() => navigation.navigate('Feliz')}>
          <EmoticonIcon name='emoticon-outline' size={70} style={Estilo.felizemoticon}/>
        </TouchableOpacity>
  
        <TouchableOpacity
          title="Neutro"
          onPress={() => navigation.navigate('Neutro')}>
          <EmoticonIcon name='emoticon-neutral-outline' size={70} style={Estilo.neutroemoticon}/>
        </TouchableOpacity>

        <TouchableOpacity
          title="Triste"
          onPress={() => navigation.navigate('Triste')}>
          <EmoticonIcon name='emoticon-sad-outline' size={70} style={Estilo.tristeemoticon}/>
        </TouchableOpacity>
  
        <TouchableOpacity
          title="Péssimo"
          onPress={() => navigation.navigate('Pessimo')}>
          <EmoticonIcon name='emoticon-dead-outline' size={70} style={Estilo.pessimoemoticon}/>
        </TouchableOpacity>

        </View>
        <TouchableOpacity
            title="Arquivo"
            onPress={() => navigation.navigate('ArquivoFeedback')
          }>
            <EmoticonIcon name='book-open' size={30} style={{ alignItems: 'center'}} />
          </TouchableOpacity>

          <TouchableOpacity
            title="Arquivo"
            onPress={() => navigation.navigate('LoginScreen')
          }>
            <EmoticonIcon name='logout' size={30} style={{ alignItems: 'center'}} onPress={() => logout()} />
          </TouchableOpacity>


          
      </SafeAreaView>
      
    );
  }