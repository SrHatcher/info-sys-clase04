import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'red',
      tabBarShowLabel: true,
      headerShown: true,
      tabBarStyle: {
        backgroundColor: 'indigo'
      },
      tabBarActiveBackgroundColor: 'red'
    }}>
      <Tabs.Screen name='home/index' options={{
        title: 'Inicio',
        tabBarIcon: ({color, size})=>(
          <FontAwesome name='apple' color={color} size={size}/>
        )
      }}/>
      <Tabs.Screen name='favorites/index' options={{
        title: 'Favoritos',
        tabBarIcon: ({color, size})=>(
          <FontAwesome name='star' color={color} size={size}/>
        )
      }}/>
      <Tabs.Screen name='(stack)' options={{
        title: 'Stack',
        headerShown: false,
        tabBarIcon: ({color, size})=>(
          <FontAwesome name='android' color={color} size={size}/>
        )
      }}/>
    </Tabs>
  )
}

export default TabsLayout