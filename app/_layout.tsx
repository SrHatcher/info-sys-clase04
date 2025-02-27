import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen } from 'expo-router'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import "./global.css"

const RootLayout = () => {
    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded, error]=useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    })

    useEffect(()=>{
      if(error) throw error;
      if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;
  return (
    <GestureHandlerRootView className='flex flex-1'>
      <Slot />
    </GestureHandlerRootView>
  )
}

export default RootLayout