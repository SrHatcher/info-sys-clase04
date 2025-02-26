import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 flex gap-2 mt-10'>
        {/*<Link href='/products/Index' className='mb-5'>products</Link>
        <Link href='/profile' className='mb-5'>profile</Link>
        <Link href='/settings' className='mb-5'>settings</Link>*/}

          {/*<Link href='/products/Index' asChild>
            <CustomButton color='primary'>Productos LInk</CustomButton>
          </Link>*/}

        <CustomButton color='secondary' onPress={()=> router.push('/tabs/products')}>Productos</CustomButton>
        <CustomButton color='tertiary'  onPress={()=> router.push('/tabs/profile')}>Perfil</CustomButton>
        <CustomButton color='primary' variant='text-only' onPress={()=> router.push('/tabs/settings')}>Configuracion</CustomButton>
        <CustomButton color='primary' variant='text-only' onPress={()=> router.push('/tabs/home')}>Inicio</CustomButton>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen