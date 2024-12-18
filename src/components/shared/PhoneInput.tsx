import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import CustomText from './CustomText'
import { TextInput } from 'react-native-gesture-handler'

const PhoneInput: FC<PhoneInputProps> = ({
    value, 
    onChangeText, 
    onBlur,
    onFocus}) => {
  return (
    <View style={styles.container}>
      <CustomText fontFamily='Medium' style={styles.text}>
        +91
      </CustomText>

      <TextInput
      placeholder='0000000000'
      keyboardType='phone-pad'
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholderTextColor={'#ccc'}
      style={styles.input}>
    
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    gap: 4,
    marginVertical: 15,
    borderWidth:1,
    borderColor: "#222",
    borderRadius: 5,
    paddingHorizontal: 10
  },

  input: {
    fontSize: RFValue(13),
    fontFamily: 'Medium',
    height: 45,
    width:'90%'
  },

  text: {
    fontSize: RFValue(13),
    top: -1,
    fontFamily: 'Medium'
  }
})

export default PhoneInput