import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { roleStyles } from '@/styles/roleStyles'
import CustomText from '@/components/shared/CustomText'
import { router } from 'expo-router'

const role = () => {

  const handleCustomerPress = () => {

    router.navigate('/Customer/auth')

  }

  const handleCaptainPress = () => {

    router.navigate('/Captain/auth')

  }

  return (
    <View style={roleStyles.container}>
      <Image
        source={require('@/assets/images/logo_t.png')}
        style={roleStyles.logo}
      />
      <CustomText fontFamily='Medium' variant='h6'>
        Choose your user type
      </CustomText>

      <TouchableOpacity onPress={handleCustomerPress} style={roleStyles.card}>
        <Image
          source={require('@/assets/images/customer.png')}
          style={roleStyles.image}
        />
        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>Customer</CustomText>
          <CustomText style={roleStyles.description}>
            Are you a customer ? Order rides and deliveries easily.
          </CustomText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCaptainPress} style={roleStyles.card}>
        <Image
          source={require('@/assets/images/captain.png')}
          style={roleStyles.image}
        />
        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>Captain</CustomText>
          <CustomText style={roleStyles.description}>
            Are you a captain? join us to drive and deliver.
          </CustomText>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default role