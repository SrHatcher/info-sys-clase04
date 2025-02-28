import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
      overlayColor: 'rgba(0,0,0,6)',
      drawerActiveTintColor: 'indigo',
      headerShadowVisible: false,
      headerShown: false,
      sceneStyle: {
        backgroundColor: "white"
      }
    }}>
      <Drawer.Screen 
        name='(tabs)'
        options={{
          drawerLabel: "Inicio",
          title: "Inicio",
          drawerIcon: ({color, size})=><Ionicons name='home' size={size} color={color}/> 
        }}
      />
      <Drawer.Screen 
        name='user/index'
        options={{
          drawerLabel: "Usuarios",
          title: "Usuarios",
          drawerIcon: ({color, size})=><Ionicons name='person' size={size} color={color}/> 
        }}
      />
      <Drawer.Screen 
        name='schedule/index'
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({color, size})=><Ionicons name='calendar' size={size} color={color}/> 
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout