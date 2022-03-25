import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { ScreenRoutes } from './routes'

export function Routes(){

  return(
    <NavigationContainer>
      <ScreenRoutes/>
    </NavigationContainer>
  )
}