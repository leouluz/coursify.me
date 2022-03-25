import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screen/Home'
import { Posts } from '../screen/Posts';

const { Navigator, Screen } = createStackNavigator();

export function ScreenRoutes (){
  return(
    <Navigator 
      screenOptions={{
        headerShown : false
      }}
    >
      <Screen 
        name="SignIn"
        component={Home}
      />
      <Screen 
        name="Posts"
        component={Posts}
      />
    </Navigator>
  )
}