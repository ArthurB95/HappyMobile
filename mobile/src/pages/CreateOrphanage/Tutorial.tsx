import React from 'react'

import hand from '../../assets/hand.png'
import MapView from 'react-native-maps';

import { SafeAreaView, StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function Tutorial() {

  const navigation = useNavigation();

  function handleNavigateToCreateOrphanage() {

    navigation.navigate('SelectMapPosition')

  }

  return (

    <SafeAreaView style={styles.container} >

      <RectButton style={styles.button} onPress={handleNavigateToCreateOrphanage}>

        <MapView
          initialRegion={{
            latitude: -19.9401644,
            longitude: -43.9341399,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          style={styles.mapStyle}
        />

        <View style={styles.wrapper} >

          <Image source={hand} style={styles.hand} resizeMode="contain" />

          <Text style={styles.text}>
            Toque no mapa {'\n'}
           para adicionar um {'\n'}
           orfanato
        </Text>


        </View>

      </RectButton>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 180,
    backgroundColor: 'rgba(21, 191, 205, 0.7)',
    position: 'relative',
  },

  hand: {
    position: 'absolute',
    top: 40,
    height: Dimensions.get('window').width * 0.8,
    zIndex: 2,
  },

  text: {
    position: 'absolute',
    fontFamily: 'Nunito_700Bold',
    color: '#FFFF',
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'center',
    justifyContent: 'center',
    bottom: 200,
    zIndex: 1,
  },

  mapStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  button: {

  },

  buttonIcon: {

  }

})