import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()

  const onToggleTab = () => {
    navigation.dispatch(DrawerActions.toggleDrawer)

    return null
  }


  return (
    <SafeAreaView>
      <View className='px-10 flex gap-2 mt-10'>
        {/*<Link href='/products/Index' className='mb-5'>products</Link>
        <Link href='/profile' className='mb-5'>profile</Link>
        <Link href='/settings' className='mb-5'>settings</Link>*/}

          {/*<Link href='/products/Index' asChild>
            <CustomButton color='primary'>Productos LInk</CustomButton>
          </Link>*/}

        <CustomButton color='secondary' onPress={()=> router.push('/products')}>Productos</CustomButton>
        <CustomButton color='tertiary'  onPress={()=> router.push('/profile')}>Perfil</CustomButton>
        <CustomButton color='primary' variant='text-only' onPress={()=> router.push('/settings')}>Configuracion</CustomButton>
        <CustomButton onPress={onToggleTab}>Abrir Menu</CustomButton>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen