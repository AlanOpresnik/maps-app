import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentation/components/shared/ThemedText'
import { usePermissionStore } from '@/presentation/store/usePermissions'
import ThemedPressable from '@/presentation/components/shared/ThemedPressable'

const PermissionScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore()
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ThemedText>Estado actual: {locationStatus}</ThemedText>
      <ThemedPressable onPress={requestLocationPermission}>Habiliar ubicacion</ThemedPressable>
    </View>
  )
}

export default PermissionScreen