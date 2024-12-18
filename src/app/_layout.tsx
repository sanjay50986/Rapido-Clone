import React from 'react'
import { Stack } from 'expo-router'
import {gestureHandlerRootHOC} from 'react-native-gesture-handler'


const Layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name='index'/>
        <Stack.Screen name='role'/>
        <Stack.Screen name='Customer/auth'/>
        <Stack.Screen name='Customer/home'/> */}
    </Stack>
  )
}

export default  gestureHandlerRootHOC(Layout)