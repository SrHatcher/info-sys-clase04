import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import "./global.css"
import { Link, Redirect } from 'expo-router'

const index = () => {
  /*return <Redirect href='/(stack)/home'/>*/
  /*return <Redirect href='/tabs/home' />*/
  return <Redirect href='/home'/>

  /*return (
    <SafeAreaView>
      <View className='mx-10'>
        <Text className='text-3xl font-work-black text-primary'>Hola mundo</Text>
        <Text className='text-3xl font-work-light text-secondary-200'>Hola mundo</Text>
        <Text className='text-3xl text-secondary-100'>adios mundo</Text>
        <Text className='text-3xl text-secondary'>adios mundo</Text>
        <Link href='/products'>Productos</Link>
      </View>
    </SafeAreaView>
  )*/
}

export default index