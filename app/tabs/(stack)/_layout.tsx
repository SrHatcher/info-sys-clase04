import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: false,
        headerShadowVisible: true,
        contentStyle: {
            backgroundColor: 'white',
        }
    }}>
        <Stack.Screen name='home/index' options={{
            title: 'Inicio'
        }}/>
        <Stack.Screen name='products/index' options={{
            title: 'Detalles de productos'
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