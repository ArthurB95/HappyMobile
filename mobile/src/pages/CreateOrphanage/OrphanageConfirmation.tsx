import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Button } from 'react-native';

import confirmationKid from '../../assets/confirmationKid.png'

import { useNavigation } from '@react-navigation/native';

export default function OrphanageConfirmation() {

  const navigation = useNavigation();

  function handleStart() {

    navigation.navigate('OrphanagesMap');

  }

  return (

    <SafeAreaView style={styles.container} >

       <View style={styles.wrapper}>

       <Image source={confirmationKid}  style={styles.confirmationKid} resizeMode="contain"/>

         <Text style={styles.title}>
           Ebaaa!
         </Text>

         <Text style={styles.subtitle}>
           O cadastro deu certo 😁 {'\n'}
           Agora é so ver no mapa {'\n'}
           e esperar as visitas! {'\n'}
         </Text>

         <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>

          <Text style={styles.textButton}>
            Ok
          </Text>
           
         </TouchableOpacity>


       </View>

    </SafeAreaView>

  )

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#39cd83'
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 20
  },

  confirmationKid:{
    height: Dimensions.get('window').width * 0.7
  },

  title: {
    fontFamily: 'Nunito_700Bold',
    color: '#FFFF',
    fontSize: 40
  },

  subtitle: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#FFFF',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center'
  },
  
  button: {
    backgroundColor: '#19C06D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 56,
    width: 120,
    marginBottom: 20
  },

  textButton: {
    fontSize: 15,
    color: '#FFFF',
    fontFamily: 'Nunito_600SemiBold'
  }

})