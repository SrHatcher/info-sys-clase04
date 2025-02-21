import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import "./global.css"

const RootLayout = () => {
    SplashScreen.preventAutoHideAsync();

    const [fonsLoaded, error]=useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    })

    useEffect(()=>{

    })

  return (
    <Slot />
  )
}

export default RootLayout