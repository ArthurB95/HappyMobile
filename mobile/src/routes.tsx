import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Header from './components/Header'

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import Welcome from './pages/Welcome';
import Presentation from './pages/Presentation';
import OrphanageConfirmation from './pages/CreateOrphanage/OrphanageConfirmation';
import OrphanageCancel from './pages/CreateOrphanage/OrphanageCancel';
import Tutorial from './pages/CreateOrphanage/Tutorial';

export default function Routes(){

  return(

   <NavigationContainer>

     <Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor: '#f2f3f5'}}}>

       <Screen name="Welcome" component={Welcome}/>

       <Screen name="Presentation" component={Presentation}/>
    
       <Screen name="OrphanagesMap" component={OrphanagesMap}/>

       <Screen name="OrphanageDetails" component={OrphanageDetails} options={{ headerShown: true, header: () => <Header showCancel={false} title="Orfanato"/>}}/>

       <Screen name="SelectMapPosition" component={SelectMapPosition} options={{ headerShown: true, header: () => <Header title="Selecione no mapa"/>}}/>

       <Screen name="OrphanageData" component={OrphanageData} options={{ headerShown: true, header: () => <Header title="Informe os dados"/>}}/>

       <Screen name="OrphanageConfirmation" component={OrphanageConfirmation}/>

       <Screen name="OrphanageCancel" component={OrphanageCancel}/>

       <Screen name="Tutorial" component={Tutorial}/>
    
     </Navigator>

   </NavigationContainer>


  )

}