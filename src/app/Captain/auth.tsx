import { View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { authStyles } from '@/styles/authStyles'
import { commonStyles } from '@/styles/commonStyles'
import Entypo from '@expo/vector-icons/Entypo';
import CustomText from '@/components/shared/CustomText'
import PhoneInput from '@/components/shared/PhoneInput'
import CustomerButton from '@/components/shared/CustomerButton'
import { resetAndNavigate } from '@/utils/Helpers';

const auth = () => {

  const [phone, setphone] = useState('')

  const handleNext = async () => {
    resetAndNavigate('/Captain/home')
  }



  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView contentContainerStyle={authStyles.container}>
        <View style={commonStyles.flexRowBetween}>
          <Image source={require('@/assets/images/captain_logo.png')}
            style={authStyles.logo} />
          <TouchableOpacity style={authStyles.flexRowGap}>
            <Entypo name="help" size={16} color="black" />
            <CustomText fontFamily='Medium' variant='h6'>Help</CustomText>
          </TouchableOpacity>
        </View>

        <CustomText fontFamily='Medium' variant='h6'>
          Good to see you, Captain!
        </CustomText>

        <CustomText fontFamily='Regular' variant='h7' style={commonStyles.lightText}>
          Enter your phone number to procees
        </CustomText>

        <PhoneInput
          onChangeText={setphone}
          value={phone}>

        </PhoneInput>

      </ScrollView>

      <View style={authStyles.footerContainer}>
        <CustomText variant='h7' fontFamily='Regular' style={[commonStyles.lightText, { textAlign: 'center', marginhHorizontal: 2 }]}>
          By continuing, you agree to the terms and privacy policy of  {'\n'}Rapido
        </CustomText>

        <CustomerButton
          title='Next'
          onPress={handleNext}
          loading={false}
          disabled={false} />
      </View>

    </SafeAreaView>
  )
}

export default auth