import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'

const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftTap = (canGoBack: boolean | undefined )=>{
        if(canGoBack){
            //navigation.dispatch(StackActions.pop());
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.openDrawer)
    }

  return (
    <Stack screenOptions={{
        headerShown: true,
        headerShadowVisible: true,
        contentStyle: {
            backgroundColor: 'white',
        },
        headerLeft: (({tintColor, canGoBack})=> <Pressable> <Ionicons onPress={()=>onHeaderLeftTap(canGoBack)} name={canGoBack ? "add-circle" : "menu"} size={40} className='mr5'/> </Pressable>)
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