import React from 'react';

import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function OrphanageCancel() {

  const navigation = useNavigation();

  function handleBackOrphanagesMap(){

    navigation.navigate('OrphanagesMap')

  }

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.wrapper}>

        <RectButton style={styles.imageFake}>

          <Feather name="x" style={styles.buttonIcon} />

        </RectButton>

        <Text style={styles.title}>

          Cancelar cadastro

        </Text>

        <Text style={styles.subtitle}>

          Tem certeza que quer {'\n'}
          cancelar esse cadastro?

        </Text>

        <View style={styles.buttonCancel}>

          <TouchableOpacity style={styles.buttonTextNo} onPress={navigation.goBack}>

            <Text style={styles.textNo}>Não</Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.buttonTextYes} onPress={handleBackOrphanagesMap}>

            <Text style={styles.textYes}>Sim</Text>

          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FF669D'
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  imageFake: {
    backgroundColor: '#FFFF',
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    top: 120,
    marginBottom: 40
  },

  buttonIcon: {
    color: '#FF669D',
    fontSize: 32
  },

  title: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#FFFF',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 32
  },

  subtitle: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#FFFF',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    lineHeight: 30,
    bottom: 60
  },

  buttonCancel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 100,
  },

  buttonTextNo: {
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#D6487B',
    width: 128,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonTextYes: {
    borderRadius: 20,
    backgroundColor: '#D6487B',
    width: 128,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textNo:{
    color: '#FFFF',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
  },

  textYes: {
    color: '#FFFF',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
  }

})