import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
            backgroundColor: 'white',
        }
    }}>
        <Stack.Screen name='home' options={{
            title: 'inicio'
        }}/>
        <Stack.Screen name='products/[id]' options={{
            title: 'detalle del producto'
        }}/>
        <Stack.Screen name='profile/index' options={{
            title: 'holaaa'
        }}/>
        <Stack.Screen name='settings/index' options={{
            title: 'perfil'
        }}/>
    </Stack>
  )
}

export default StackLayout